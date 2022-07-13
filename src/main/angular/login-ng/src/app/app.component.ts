import { Component } from '@angular/core';
import { Environment } from '../environments/environment';
import { RestService } from './rest-service';
import { CookieService } from 'ngx-cookie-service';
import { HttpHeaders } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css', './app.component-effects.less']
})
export class AppComponent {
	
	private validateUrl = Environment.getLoginHost() + '/validate';
	private homePageUrl = Environment.getHomeHost();
    
	public jwt: string;
	
	constructor(private rest: RestService, private cookies: CookieService) { 
		this.jwt = null;
		let cookieJWT = this.cookies.get('user.jwt');
		if (cookieJWT) {
			
			//JWT found, check if is valid
			const obs: Observable<any> = this.rest.sendPost<any>(this.validateUrl, cookieJWT, new HttpHeaders({
				'content-type': 'text/plain'
			}));
			firstValueFrom(obs)
				.then(() => {
					//JWT correct, move to Home Page
					window.location.href = this.homePageUrl;
				}).catch(error => {
					//JWT non correct or service not available
					if (error.status === 401) {
						console.error('The token JWT is not valid, relogin required', error)
						this.cookies.delete('user.jwt');
						this.jwt = null;
					} else {
						console.error('The call is not end correct', error)
						this.jwt = null;
					}
				})
		}
	}
	
	updateJWT(jwt: string): void {
		this.jwt = jwt;
	}
	
	public goToHome() {
		window.location.href = this.homePageUrl;
	}
	
}


