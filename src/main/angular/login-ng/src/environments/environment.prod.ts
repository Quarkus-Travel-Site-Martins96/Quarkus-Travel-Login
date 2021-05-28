import { Injectable } from '@angular/core';
import { RestServiceEnvUrl } from 'src/app/rest-service-env-url';

export const environment = {
  production: true
};


@Injectable({
	providedIn: 'root'
})
export class Environment {
	
	constructor(private rest: RestServiceEnvUrl) { }
	
	public getHomeHost(): string {
		return this.rest.getHostUrl('home');
	}
	
	public getHotelHost(): string {
		return this.rest.getHostUrl('hotel');
	}
	
	public getLoginHost(): string {
		return this.rest.getHostUrl('login');
	}
	
	public getUserManagerHost(): string {
		return this.rest.getHostUrl('user-management');
	}
	
	
	
}