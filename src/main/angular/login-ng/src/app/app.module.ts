import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { LoginPendingComponent } from './login-pending/login-pending.component';

@NgModule({
	declarations: [
		AppComponent,
		ToolbarComponent,
		LoginFormComponent,
  LoginPendingComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		FormsModule
	],
	providers: [ CookieService ],
	bootstrap: [
		AppComponent]
})
export class AppModule { }
