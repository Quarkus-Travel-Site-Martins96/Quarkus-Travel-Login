import { Component, EventEmitter, Output, OnDestroy } from '@angular/core';
import { RestService } from '../rest-service';
import { Environment } from 'src/environments/environment';
import { HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { firstValueFrom, Observable, Subscription, throwError } from 'rxjs';


@Component({
	selector: 'app-login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.css', 'login-form.background.components.less']
})
export class LoginFormComponent implements OnDestroy {
	
	private loginUrl: string = Environment.getLoginHost() + '/login';
	private homePageUrl: string = Environment.getHomeHost();

	isLoading: boolean = false;

	@Output()
	jwt = new EventEmitter<string>();

	userInput: string;
	pwdInput: string;

	errorDetails: string;
	
	displayError: boolean;
	displayCredentialError: boolean;
	displayPending: boolean;

	private loginSub: Subscription;

	constructor(private rest: RestService, private cookies: CookieService) { }

	async login(): Promise<void> {
		if (this.loginSub)
			this.loginSub.unsubscribe();

		this.resetFields();
		this.isLoading = true;
		let obsv: Observable<HttpResponse<string>> = this.rest.sendPostGetRawText(this.loginUrl, {
				username: this.userInput,
				password: this.pwdInput
				}, new HttpHeaders({ 'content-type': 'application/json' })
			);
		await firstValueFrom(obsv)
			.then(response => {
				this.isLoading = false;
				if (response && response.ok) {
					console.log('Login success');
					this.jwt.emit(response.body);
					this.cookies.delete('user.jwt');
					this.cookies.set('user.jwt', response.body, {
						path: '/',
						sameSite: 'Strict',
						domain: this.getCookieDomain()
					});
					this.displayError = false;
					window.location.href = this.homePageUrl;
				} else {
					console.log('Error occurs');
				}
			})
			.catch(
				e => this.handleError(e, this)
			);
	}
	
	ngOnDestroy(): void {
		if(this.loginSub)
			this.loginSub.unsubscribe();
	}


	private handleError(error: HttpErrorResponse, login: LoginFormComponent): Observable<never> {
		console.error(error);
		this.isLoading = false;
		if (!error) {
			login.displayError = true;
			console.log('Backend response null ', error);
			login.errorDetails = 'Unable to load response, generic error';
			return throwError(() => new Error('Unable to load response, generic error'));
		} else if (error.status == 0) {
			login.displayError = true;
			login.userInput = "";
			login.pwdInput = "";
			console.log('Backend response not recived ', error);
			login.errorDetails = error.message;
		} else if (error.status === 403) {
			login.displayCredentialError = true;
			login.userInput = "";
			login.pwdInput = "";
			console.log('Credential not valid ', error);
		} else if (error.status === 409) {
			login.displayPending = true;
			login.userInput = "";
			login.pwdInput = "";
			console.log('User is in pending ', error);
		} else {
			console.log('Error in call, status ', error);
		}

		return throwError(() => new Error(error.message));
	}

	private getCookieDomain(): string {
		let fullDomain: string = window.location.hostname;
		let domainSplitted: string[] = fullDomain.split("\.");
		if (domainSplitted.length <= 2) {
			// first level domain
			return fullDomain;
		} else {
			// Multi-level domain
			if (this.isNumber(domainSplitted[domainSplitted.length - 1])) {
				// last part is number, ip as hostname
				return fullDomain;
			} else {
				// last is a word, hostname is a domain name
				let rootDomain: string = 
						domainSplitted[domainSplitted.length - 2] +
						"." +
						domainSplitted[domainSplitted.length - 1];
				return rootDomain
			}
		}
	}

	updatePending(flag: boolean): void {
		this.displayPending = flag;
	}

	private isNumber(str: string): boolean {
		return !isNaN(parseInt(str));
	}

	private resetFields(): void {
		this.displayCredentialError = false;
		this.displayError = false;
		this.displayPending = false;
		this.isLoading = false;
		this.errorDetails = undefined;
	}

}
