import { Component, EventEmitter, Output, OnDestroy } from '@angular/core';
import { RestService } from '../rest-service';
import { Environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';


@Component({
	selector: 'app-login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.css', 'login-form.background.components.less']
})
export class LoginFormComponent implements OnDestroy {
	
	private loginUrl: string = Environment.getLoginHost() + '/login';
	private homePageUrl: string = Environment.getHomeHost();

	@Output()
	jwt = new EventEmitter<string>();

	userInput: string;
	pwdInput: string;
	
	displayError = false;

	private loginSub: Subscription;

	constructor(private rest: RestService, private cookies: CookieService) { }

	public login(): void {
		if (this.loginSub)
			this.loginSub.unsubscribe();

		this.loginSub = this.rest.sendPostGetRawText(this.loginUrl, {
				username: this.userInput,
				password: this.pwdInput
			}, new HttpHeaders({ 'content-type': 'application/json' }))
			.subscribe(response => {
				this.jwt.emit(response.body);
				this.cookies.delete('user.jwt');
				this.cookies.set('user.jwt', response.body);
				this.displayError = false;
				
				window.location.href = this.homePageUrl;
			}, error => {
				console.error(error);
				if (error.status === 403) {
					this.displayError = true;
					this.userInput = "";
					this.pwdInput = "";
					console.log('Credential not valid ', error);
				}
				else
					console.log('Error in call, status ', error);
			});
	}
	
	ngOnDestroy(): void {
		if(this.loginSub)
			this.loginSub.unsubscribe();
	}

}
