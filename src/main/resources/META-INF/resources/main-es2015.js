(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rest-service */ "./src/app/rest-service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "./src/app/toolbar/toolbar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login-form/login-form.component */ "./src/app/login-form/login-form.component.ts");









function AppComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-login-form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("jwt", function AppComponent_div_2_Template_app_login_form_jwt_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.updateJWT($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const validateUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["host"] + '/validate';
class AppComponent {
    constructor(rest, cookies) {
        this.rest = rest;
        this.cookies = cookies;
        this.jwt = null;
        let cookieJWT = this.cookies.get('user.jwt');
        if (cookieJWT) {
            //JWT found, check if is valid
            this.rest.sendPost(validateUrl, cookieJWT, new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'content-type': 'text/plain'
            }))
                .subscribe(() => {
                //JWT correct, move to Home Page
                window.location.href = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["homePageUrl"];
            }, error => {
                //JWT non correct or service not available
                if (error.status === 401) {
                    console.error('The token JWT is not valid, relogin required', error);
                    this.cookies.delete('user.jwt');
                    this.jwt = null;
                }
                else {
                    console.error('The call is not end correct', error);
                    this.jwt = null;
                }
            });
        }
    }
    updateJWT(jwt) {
        this.jwt = jwt;
    }
    goToHome() {
        window.location.href = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["homePageUrl"];
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 1, consts: [[1, "toolbar"], ["class", "content", "role", "main", 4, "ngIf"], ["role", "main", 1, "content"], [3, "jwt"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_2_Template, 2, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.jwt);
    } }, directives: [_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_5__["ToolbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_7__["LoginFormComponent"]], styles: [".content[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin: 5%;\r\n  padding: 0 16px;\r\n  flex-direction: column;\r\n}\r\n\r\n.jwt-txt[_ngcontent-%COMP%] {\r\n\twidth: 90%;\r\n\tword-wrap: break-word;\r\n}\r\n\r\n.home-btn[_ngcontent-%COMP%] {\r\n\tmax-width: 300px;\r\n\tmargin-top: 50px;\r\n\theight: auto;\r\n\twidth: auto;\r\n\tpadding: 5px 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtDQUNoQixZQUFZO0NBQ1osV0FBVztDQUNYLGNBQWM7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOiA1JTtcclxuICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmp3dC10eHQge1xyXG5cdHdpZHRoOiA5MCU7XHJcblx0d29yZC13cmFwOiBicmVhay13b3JkO1xyXG59XHJcblxyXG4uaG9tZS1idG4ge1xyXG5cdG1heC13aWR0aDogMzAwcHg7XHJcblx0bWFyZ2luLXRvcDogNTBweDtcclxuXHRoZWlnaHQ6IGF1dG87XHJcblx0d2lkdGg6IGF1dG87XHJcblx0cGFkZGluZzogNXB4IDA7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "./src/app/toolbar/toolbar.component.ts");
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-form/login-form.component */ "./src/app/login-form/login-form.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_4__["ToolbarComponent"],
        _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_5__["LoginFormComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_4__["ToolbarComponent"],
                    _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_5__["LoginFormComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                ],
                providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]],
                bootstrap: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/cookie-utils.ts":
/*!*********************************!*\
  !*** ./src/app/cookie-utils.ts ***!
  \*********************************/
/*! exports provided: CookieManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieManager", function() { return CookieManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const COOKIE_CONSENT = 'allowed-cookie-banner';
const COOKIE_CONSENT_EXPIRE_DAYS = 180;
class CookieManager {
    constructor() {
        this.isConsented = false;
        this.isConsented = this.getCookie(COOKIE_CONSENT) === '1';
    }
    getCookie(name) {
        let ca = document.cookie.split(';');
        let caLen = ca.length;
        let cookieName = `${name}=`;
        let c;
        for (let i = 0; i < caLen; i += 1) {
            c = ca[i].replace(/^\s+/g, '');
            if (c.indexOf(cookieName) == 0) {
                return c.substring(cookieName.length, c.length);
            }
        }
        return null;
    }
    deleteCookie(name) {
        this.setCookie(name, '', -1);
    }
    setCookie(name, value, expireDays, path = '') {
        let d = new Date();
        d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
        let expires = `expires=${d.toUTCString()}`;
        let cpath = path ? `; path=${path}` : '';
        document.cookie = `${name}=${value}; ${expires}${cpath}`;
    }
    consent(isConsent, e) {
        if (!isConsent) {
            return this.isConsented;
        }
        else if (isConsent) {
            this.setCookie(COOKIE_CONSENT, '1', COOKIE_CONSENT_EXPIRE_DAYS);
            this.isConsented = true;
            e.preventDefault();
        }
    }
}
CookieManager.ɵfac = function CookieManager_Factory(t) { return new (t || CookieManager)(); };
CookieManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CookieManager, factory: CookieManager.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CookieManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/login-form/login-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/login-form/login-form.component.ts ***!
  \****************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rest-service */ "./src/app/rest-service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function LoginFormComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login error, credentials are not valid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const loginUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["host"] + '/login';
class LoginFormComponent {
    constructor(rest, cookies) {
        this.rest = rest;
        this.cookies = cookies;
        this.jwt = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.displayError = false;
    }
    login() {
        if (this.loginSub)
            this.loginSub.unsubscribe();
        this.loginSub = this.rest.sendPostGetRawText(loginUrl, {
            username: this.userInput,
            password: this.pwdInput
        }, new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'content-type': 'application/json' }))
            .subscribe(response => {
            this.jwt.emit(response.body);
            this.cookies.delete('user.jwt');
            this.cookies.set('user.jwt', response.body);
            this.displayError = false;
            window.location.href = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["homePageUrl"];
        }, error => {
            console.error(error);
            if (error.status === 403) {
                this.displayError = true;
                console.log('Credential not valid ', error);
            }
            else
                console.log('Error in call, status ', error);
        });
    }
    ngOnDestroy() {
        if (this.loginSub)
            this.loginSub.unsubscribe();
    }
}
LoginFormComponent.ɵfac = function LoginFormComponent_Factory(t) { return new (t || LoginFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"])); };
LoginFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginFormComponent, selectors: [["app-login-form"]], outputs: { jwt: "jwt" }, decls: 15, vars: 3, consts: [[1, "login-content"], [3, "ngSubmit"], [1, "login-form"], ["for", "username-input"], ["type", "text", "id", "username", "name", "username", 1, "login-input-text", 3, "ngModel", "ngModelChange"], ["for", "password-input"], ["type", "password", "id", "password", "name", "password", 1, "login-input-text", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "login-btn"], ["class", "error-login", 4, "ngIf"], [1, "error-login"]], template: function LoginFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginFormComponent_Template_form_ngSubmit_3_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginFormComponent_Template_input_ngModelChange_7_listener($event) { return ctx.userInput = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginFormComponent_Template_input_ngModelChange_10_listener($event) { return ctx.pwdInput = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LoginFormComponent_div_14_Template, 3, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.pwdInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayError);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: [".login-content[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.login-form[_ngcontent-%COMP%] {\r\n\twidth: 50%;\r\n\tmin-width: 250px;\r\n\tmargin: 0 auto;\r\n\tpadding: 5%;\r\n\tdisplay: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    background-color: white;\r\n    box-shadow: 0 0 10px rgba(0,0,0,0.3);\r\n}\r\n\r\n.login-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n\tmargin-top: 20px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n\tmargin-bottom: 3%;\r\n\talign-self: center;\r\n}\r\n\r\n.error-login[_ngcontent-%COMP%] {\r\n\tmargin-top: 30px;\r\n\ttext-align: center;\r\n}\r\n\r\n.error-login[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n\tcolor: #ff0000;\r\n\tfont-weight: bold;\r\n}\r\n\r\n.login-btn[_ngcontent-%COMP%] {\r\n\tfont-family: luois-sans-bold;\r\n\tletter-spacing: 1px;\r\n\tfont-size: 1.05em;\r\n\tmax-width: 250px;\r\n\tmin-width: 100px;\r\n\tmargin-top: 25px;\r\n\tpadding: 10px 25px;\r\n\toutline: none;\r\n\tbackground-color: #4e4;\r\n\tborder: none;\r\n\tborder-radius: 5px;\r\n}\r\n\r\n.login-btn[_ngcontent-%COMP%]:focus, .login-btn[_ngcontent-%COMP%]:hover {\r\n\tbackground-color: #2a2;\r\n}\r\n\r\n.login-btn[_ngcontent-%COMP%]:active {\r\n\tbackground-color: #6f6;\r\n\tbox-shadow: 0 0 10px rgba(0,0,0,0.6);\r\n}\r\n\r\n\r\n\r\ninput[_ngcontent-%COMP%] {\r\n\tmin-width: 100px;\r\n\tmax-width: 500px;\r\n\twidth: 100%;\r\n    height: 20px;\r\n    padding: 10px 5px;\r\n\tmargin: 8px 0;\r\n    box-sizing: border-box;\r\n    border: 3px solid #ccc;\r\n    transition: 0.5s;\r\n\toutline: none;\r\n\tborder-radius: 10px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:focus, .response[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\r\n\tborder: 3px solid #555;\r\n}\r\n\r\n.login-input-text[_ngcontent-%COMP%] {\r\n\tmargin-bottom: 25px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4tZm9ybS9sb2dpbi1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxhQUFhO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0NBQ0MsVUFBVTtDQUNWLGdCQUFnQjtDQUNoQixjQUFjO0NBQ2QsV0FBVztDQUNYLGFBQWE7SUFDVixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixvQ0FBb0M7QUFDeEM7O0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyw0QkFBNEI7Q0FDNUIsbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQixnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixZQUFZO0NBQ1osa0JBQWtCO0FBQ25COztBQUVBOztDQUVDLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLHNCQUFzQjtDQUN0QixvQ0FBb0M7QUFDckM7O0FBRUEsMkJBQTJCOztBQUUzQjtDQUNDLGdCQUFnQjtDQUNoQixnQkFBZ0I7Q0FDaEIsV0FBVztJQUNSLFlBQVk7SUFDWixpQkFBaUI7Q0FDcEIsYUFBYTtJQUNWLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFFdEIsZ0JBQWdCO0NBQ25CLGFBQWE7Q0FDYixtQkFBbUI7QUFDcEI7O0FBRUE7O0NBRUMsc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MsbUJBQW1CO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4tZm9ybS9sb2dpbi1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tY29udGVudCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5sb2dpbi1mb3JtIHtcclxuXHR3aWR0aDogNTAlO1xyXG5cdG1pbi13aWR0aDogMjUwcHg7XHJcblx0bWFyZ2luOiAwIGF1dG87XHJcblx0cGFkZGluZzogNSU7XHJcblx0ZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsMCwwLDAuMyk7XHJcbn1cclxuLmxvZ2luLWZvcm0gbGFiZWwgaW5wdXQge1xyXG5cdG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbmgxIHtcclxuXHRtYXJnaW4tYm90dG9tOiAzJTtcclxuXHRhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5lcnJvci1sb2dpbiB7XHJcblx0bWFyZ2luLXRvcDogMzBweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5lcnJvci1sb2dpbiBzcGFuIHtcclxuXHRjb2xvcjogI2ZmMDAwMDtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmxvZ2luLWJ0biB7XHJcblx0Zm9udC1mYW1pbHk6IGx1b2lzLXNhbnMtYm9sZDtcclxuXHRsZXR0ZXItc3BhY2luZzogMXB4O1xyXG5cdGZvbnQtc2l6ZTogMS4wNWVtO1xyXG5cdG1heC13aWR0aDogMjUwcHg7XHJcblx0bWluLXdpZHRoOiAxMDBweDtcclxuXHRtYXJnaW4tdG9wOiAyNXB4O1xyXG5cdHBhZGRpbmc6IDEwcHggMjVweDtcclxuXHRvdXRsaW5lOiBub25lO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM0ZTQ7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmxvZ2luLWJ0bjpmb2N1cyxcclxuLmxvZ2luLWJ0bjpob3ZlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzJhMjtcclxufVxyXG5cclxuLmxvZ2luLWJ0bjphY3RpdmUge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM2ZjY7XHJcblx0Ym94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLDAsMCwwLjYpO1xyXG59XHJcblxyXG4vKiBJbnB1dCB0ZXh0IHVzZXIgJiBwYXNzICovXHJcblxyXG5pbnB1dCB7XHJcblx0bWluLXdpZHRoOiAxMDBweDtcclxuXHRtYXgtd2lkdGg6IDUwMHB4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgcGFkZGluZzogMTBweCA1cHg7XHJcblx0bWFyZ2luOiA4cHggMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjY2NjO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuXHRvdXRsaW5lOiBub25lO1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuICBcclxuaW5wdXQ6Zm9jdXMsXHJcbi5yZXNwb25zZSB0ZXh0YXJlYTpmb2N1cyB7XHJcblx0Ym9yZGVyOiAzcHggc29saWQgIzU1NTtcclxufVxyXG5cclxuLmxvZ2luLWlucHV0LXRleHQge1xyXG5cdG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-form',
                templateUrl: './login-form.component.html',
                styleUrls: ['./login-form.component.css']
            }]
    }], function () { return [{ type: _rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }]; }, { jwt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/rest-service.ts":
/*!*********************************!*\
  !*** ./src/app/rest-service.ts ***!
  \*********************************/
/*! exports provided: RestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestService", function() { return RestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class RestService {
    constructor(http) {
        this.http = http;
    }
    sendPostGetRawText(url, body, headers) {
        // call
        return this.http.post(url, body, {
            headers,
            observe: 'response',
            responseType: 'text'
        });
    }
    sendPostWithString(url, body, headers) {
        return this.http.post(url, body, {
            headers,
            observe: 'response'
        });
    }
    sendPost(url, body, headers) {
        return this.http.post(url, body, {
            headers,
            observe: 'response',
            responseType: 'json'
        });
    }
    sendGet(url, headers) {
        return this.http.get(url, {
            headers,
            observe: 'response'
        });
    }
}
RestService.ɵfac = function RestService_Factory(t) { return new (t || RestService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
RestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RestService, factory: RestService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RestService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/toolbar/toolbar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/toolbar/toolbar.component.ts ***!
  \**********************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _cookie_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cookie-utils */ "./src/app/cookie-utils.ts");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rest-service */ "./src/app/rest-service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function ToolbarComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "LOGIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r0.loginUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ToolbarComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r1.userManagementUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r1.jwt.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx_r1.jwt.name);
} }
const validateUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["loginPageUrl"] + "/validate";
class ToolbarComponent {
    constructor(cookieMng, rest) {
        this.cookieMng = cookieMng;
        this.rest = rest;
        this.homeUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["homePageUrl"];
        this.loginUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["loginPageUrl"];
        this.userManagementUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["userManagementPageUrl"];
        this.cookieJWT = this.cookieMng.getCookie('user.jwt');
    }
    ngOnInit() {
        if (this.sub)
            this.sub.unsubscribe();
        if (this.cookieJWT) {
            //JWT found, check if is valid
            this.sub = this.rest.sendPost(validateUrl, this.cookieJWT, new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'content-type': 'text/plain'
            }))
                .subscribe((resp) => {
                //JWT correct, move to Home Page
                this.jwt = resp.body;
            }, error => {
                //JWT non correct or service not available
                if (error.status === 401) {
                    console.error('The token JWT is not valid, relogin required', error);
                    this.cookieMng.deleteCookie('user.jwt');
                    this.jwt = null;
                }
                else {
                    console.error('The call is not end correct', error);
                    this.jwt = null;
                }
            });
        }
    }
}
ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) { return new (t || ToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_cookie_utils__WEBPACK_IMPORTED_MODULE_3__["CookieManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"])); };
ToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ToolbarComponent, selectors: [["app-toolbar"]], decls: 11, vars: 3, consts: [[1, "toolbar"], [1, "logo"], [3, "href"], [1, "offer"], ["href", "/"], ["class", "login", 4, "ngIf"], ["class", "logged", 4, "ngIf"], [1, "login"], [1, "logged"], [3, "src", "alt"]], template: function ToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "LOGO");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "OFFERS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ToolbarComponent_div_9_Template, 4, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ToolbarComponent_div_10_Template, 3, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx.homeUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.cookieJWT);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.cookieJWT);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".toolbar[_ngcontent-%COMP%] {\r\n\theight: 40px;\r\n\tbackground-color: #111;\r\n\tdisplay: flex;\r\n\tjustify-content: flex-start;\r\n\tpadding: 10px;\r\n\t\r\n\tfont-family: luois-sans-bold;\r\n\tfont-size: 1.5em;\r\n}\r\n\r\n.toolbar[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n\tmargin: auto 20px;\r\n}\r\n\r\n.toolbar[_ngcontent-%COMP%]   div.login[_ngcontent-%COMP%], .toolbar[_ngcontent-%COMP%]   div.logged[_ngcontent-%COMP%] {\r\n\talign-self: flex-end;\r\n\tmargin-left: auto;\r\n}\r\n\r\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:link, a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:active {\r\n\tcolor: lime;\r\n\tfont-style: normal;\r\n\ttext-decoration: none;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n\theight: 40px;\r\n\tborder-radius: 40px;\r\n\tbox-shadow: 0 0 5px rgba(255,255,255,0.75);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxZQUFZO0NBQ1osc0JBQXNCO0NBQ3RCLGFBQWE7Q0FDYiwyQkFBMkI7Q0FDM0IsYUFBYTs7Q0FFYiw0QkFBNEI7Q0FDNUIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBOztDQUVDLG9CQUFvQjtDQUNwQixpQkFBaUI7QUFDbEI7O0FBR0E7Ozs7O0NBS0MsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osbUJBQW1CO0NBQ25CLDBDQUEwQztBQUMzQyIsImZpbGUiOiJzcmMvYXBwL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2xiYXIge1xyXG5cdGhlaWdodDogNDBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cdHBhZGRpbmc6IDEwcHg7XHJcblx0XHJcblx0Zm9udC1mYW1pbHk6IGx1b2lzLXNhbnMtYm9sZDtcclxuXHRmb250LXNpemU6IDEuNWVtO1xyXG59XHJcblxyXG4udG9vbGJhciBkaXYge1xyXG5cdG1hcmdpbjogYXV0byAyMHB4O1xyXG59XHJcblxyXG4udG9vbGJhciBkaXYubG9naW4sXHJcbi50b29sYmFyIGRpdi5sb2dnZWQge1xyXG5cdGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG5cdG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG5cclxuYSxcclxuYTpsaW5rLFxyXG5hOnZpc2l0ZWQsXHJcbmE6aG92ZXIsXHJcbmE6YWN0aXZlIHtcclxuXHRjb2xvcjogbGltZTtcclxuXHRmb250LXN0eWxlOiBub3JtYWw7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5pbWcge1xyXG5cdGhlaWdodDogNDBweDtcclxuXHRib3JkZXItcmFkaXVzOiA0MHB4O1xyXG5cdGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgyNTUsMjU1LDI1NSwwLjc1KTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ToolbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-toolbar',
                templateUrl: './toolbar.component.html',
                styleUrls: ['./toolbar.component.css']
            }]
    }], function () { return [{ type: _cookie_utils__WEBPACK_IMPORTED_MODULE_3__["CookieManager"] }, { type: _rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment, host, homePageUrl, urlHotelBase, loginPageUrl, userManagementPageUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "host", function() { return host; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homePageUrl", function() { return homePageUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlHotelBase", function() { return urlHotelBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginPageUrl", function() { return loginPageUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userManagementPageUrl", function() { return userManagementPageUrl; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
const host = 'http://localhost:7070';
const homePageUrl = 'http://localhost:8080';
const urlHotelBase = 'http://localhost:8081';
const loginPageUrl = "http://localhost:7070";
const userManagementPageUrl = "http://localhost:7071";
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\LUCAMARTINELLI\workspace.MY-WORK\quarkus\login-quarkus-travel-simple-site\src\main\angular\login-ng\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map