import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class RestServiceEnvUrl {

	constructor(private http: HttpClient) { }

	getHostUrl(appUrl: string): string {
		let host: string = "";
		
		let headers: HttpHeaders = new HttpHeaders({
			'accept': 'text/plain',
			responseType: 'text'
		});
		
		this.http.get<string>('/endpoint/' + appUrl, {
			headers,
			observe: 'response'
		}).subscribe(r => {
			console.log("response " + r)
			host = r.body;
		}, _err => {});
		
		return host;
	}
	
	getHostUrlAll(): Observable<HttpResponse<Map<string, string>>> {
		let headers: HttpHeaders = new HttpHeaders({
			'accept': 'application/json'
		});
		return this.http.get<Map<string, string>>('/endpoint', {
			headers,
			observe: 'response'
		});
	}
}
