import { Component } from '@angular/core';
import { homePageUrl, loginPageUrl } from 'src/environments/environment';

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

	homeUrl: string = homePageUrl;
	loginUrl: string = loginPageUrl;

	constructor() { }


}
