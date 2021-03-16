(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\LUCAMARTINELLI\workspace.MY-WORK\quarkus\login-quarkus-travel-simple-site\src\main\angular\login-ng\src\main.ts */"zUnb");


/***/ }),

/***/ "4zdL":
/*!**********************************************!*\
  !*** ./src/app/toolbar/toolbar.component.ts ***!
  \**********************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _jwt_decode_vo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jwt-decode-vo */ "BW7C");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _cookie_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cookie-utils */ "A8sk");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rest-service */ "E9uI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







function ToolbarComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "LOGIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", ctx_r0.loginUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function ToolbarComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", ctx_r1.userManagementUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r1.jwt.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", ctx_r1.jwt.name);
} }
const validateUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["loginPageUrl"] + "/validate";
class ToolbarComponent {
    constructor(cookieMng, rest) {
        this.cookieMng = cookieMng;
        this.rest = rest;
        this.homeUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["homePageUrl"];
        this.loginUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["loginPageUrl"];
        this.userManagementUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["userManagementPageUrl"];
        this.jwt = new _jwt_decode_vo__WEBPACK_IMPORTED_MODULE_2__["JWT"]();
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
    ngAfterViewInit() {
        let prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("navbar").style.top = "0";
            }
            else {
                document.getElementById("navbar").style.top = "-80px";
            }
            prevScrollpos = currentScrollPos;
        };
    }
}
ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) { return new (t || ToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_cookie_utils__WEBPACK_IMPORTED_MODULE_4__["CookieManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"])); };
ToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ToolbarComponent, selectors: [["app-toolbar"]], decls: 9, vars: 3, consts: [["id", "navbar", 1, "u-clearfix", "header"], [1, "container"], [1, "logo"], [3, "href"], ["class", "login", 4, "ngIf"], ["class", "logged", 4, "ngIf"], [1, "login"], [1, "logged"], [3, "src", "alt"]], template: function ToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "LOGO");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ToolbarComponent_div_7_Template, 4, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ToolbarComponent_div_8_Template, 3, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", ctx.homeUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.cookieJWT);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.cookieJWT);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: ["nav[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-wrap: nowrap;\r\n\tjustify-content: flex-start;\r\n\tfont-size: 1.5em;\r\n\ttext-shadow: 0 0 2px black;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n\tmargin: 5px 10px;\r\n\talign-self: center;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n\tmargin-left: auto;\r\n}\r\n\r\n.u-clearfix[_ngcontent-%COMP%]:after, .u-clearfix[_ngcontent-%COMP%]:before {\r\n\tcontent: '';\r\n\tdisplay: table;\r\n}\r\n\r\n.u-clearfix[_ngcontent-%COMP%]:after {\r\n\tclear: both;\r\n}\r\n\r\nheader[_ngcontent-%COMP%] {\r\n\tbackground-color: rgba(0, 0, 0, 0.5);\r\n\tz-index: 100;\r\n\tposition: fixed;\r\n\twidth: 100%;\r\n\ttop: 0;\r\n\ttransition: top 0.3s;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n\theight: auto;\r\n\tmax-height: 50px;\r\n\tborder-radius: 40px;\r\n\tbox-shadow: 0 0 5px rgba(255, 255, 255, 0.75);\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n\ttext-decoration: none;\r\n\tcolor: rgba(255, 255, 255, 0.8);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2xiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGFBQWE7Q0FDYixpQkFBaUI7Q0FDakIsMkJBQTJCO0NBQzNCLGdCQUFnQjtDQUNoQiwwQkFBMEI7QUFDM0I7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsV0FBVztDQUNYLGNBQWM7QUFDZjs7QUFFQTtDQUNDLFdBQVc7QUFDWjs7QUFFQTtDQUNDLG9DQUFvQztDQUNwQyxZQUFZO0NBQ1osZUFBZTtDQUNmLFdBQVc7Q0FDWCxNQUFNO0NBQ04sb0JBQW9CO0FBQ3JCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGdCQUFnQjtDQUNoQixtQkFBbUI7Q0FDbkIsNkNBQTZDO0FBQzlDOztBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLCtCQUErQjtBQUNoQyIsImZpbGUiOiJ0b29sYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXYge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC13cmFwOiBub3dyYXA7XHJcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cdGZvbnQtc2l6ZTogMS41ZW07XHJcblx0dGV4dC1zaGFkb3c6IDAgMCAycHggYmxhY2s7XHJcbn1cclxuXHJcbm5hdiBkaXYge1xyXG5cdG1hcmdpbjogNXB4IDEwcHg7XHJcblx0YWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG5uYXYgZGl2Omxhc3QtY2hpbGQge1xyXG5cdG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG4udS1jbGVhcmZpeDphZnRlciwgLnUtY2xlYXJmaXg6YmVmb3JlIHtcclxuXHRjb250ZW50OiAnJztcclxuXHRkaXNwbGF5OiB0YWJsZTtcclxufVxyXG5cclxuLnUtY2xlYXJmaXg6YWZ0ZXIge1xyXG5cdGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG5oZWFkZXIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuXHR6LWluZGV4OiAxMDA7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdHRvcDogMDtcclxuXHR0cmFuc2l0aW9uOiB0b3AgMC4zcztcclxufVxyXG5cclxuaW1nIHtcclxuXHRoZWlnaHQ6IGF1dG87XHJcblx0bWF4LWhlaWdodDogNTBweDtcclxuXHRib3JkZXItcmFkaXVzOiA0MHB4O1xyXG5cdGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcclxufVxyXG5cclxuYSB7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "5P1i":
/*!****************************************************!*\
  !*** ./src/app/login-form/login-form.component.ts ***!
  \****************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rest-service */ "E9uI");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function LoginFormComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
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
LoginFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginFormComponent, selectors: [["app-login-form"]], outputs: { jwt: "jwt" }, decls: 16, vars: 3, consts: [[1, "login-content"], [1, "container"], [3, "ngSubmit"], [1, "login-form"], ["for", "username-input"], ["type", "text", "id", "username", "name", "username", 1, "login-input-text", 3, "ngModel", "ngModelChange"], ["for", "password-input"], ["type", "password", "id", "password", "name", "password", 1, "login-input-text", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "login-btn"], ["class", "error-login", 4, "ngIf"], [1, "error-login"]], template: function LoginFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginFormComponent_Template_form_ngSubmit_4_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginFormComponent_Template_input_ngModelChange_8_listener($event) { return ctx.userInput = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginFormComponent_Template_input_ngModelChange_11_listener($event) { return ctx.pwdInput = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LoginFormComponent_div_15_Template, 3, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.pwdInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayError);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: ["html[_ngcontent-%COMP%] {height: 100%}\r\n.login-content[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n\theight: 100%;\r\n}\r\n.login-form[_ngcontent-%COMP%] {\r\n\tbackground-color: rgba(255, 255, 255, 0.6);\r\n\tborder-radius: 10px;\r\n\t-webkit-backdrop-filter: blur(10px);\r\n\t        backdrop-filter: blur(10px);\r\n\t\r\n\twidth: 60%;\r\n\tmin-width: 250px;\r\n\tmargin: 0 auto;\r\n\tpadding: 8% 5%;\r\n\tdisplay: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    box-shadow: 0 0 10px rgba(0,0,0,0.3);\r\n}\r\n.login-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n\tmargin-top: 20px;\r\n}\r\nh1[_ngcontent-%COMP%] {\r\n\tmargin-bottom: 3%;\r\n\talign-self: center;\r\n}\r\n.error-login[_ngcontent-%COMP%] {\r\n\tmargin-top: 30px;\r\n\ttext-align: center;\r\n}\r\n.error-login[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n\tcolor: #ff0000;\r\n\tfont-weight: bold;\r\n}\r\n.login-btn[_ngcontent-%COMP%] {\r\n\tfont-family: luois-sans-bold;\r\n\tletter-spacing: 1px;\r\n\tfont-size: 1.05em;\r\n}\r\nh1[_ngcontent-%COMP%] {\r\n    padding-top: 20px;\r\n}\r\n.login-input-text[_ngcontent-%COMP%] {\r\n\tmargin-bottom: 25px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLFlBQVk7QUFDbEI7Q0FDQyxhQUFhO0lBQ1Ysc0JBQXNCO0lBQ3RCLFdBQVc7Q0FDZCxZQUFZO0FBQ2I7QUFFQTtDQUNDLDBDQUEwQztDQUMxQyxtQkFBbUI7Q0FDbkIsbUNBQTJCO1NBQTNCLDJCQUEyQjs7Q0FFM0IsVUFBVTtDQUNWLGdCQUFnQjtDQUNoQixjQUFjO0NBQ2QsY0FBYztDQUNkLGFBQWE7SUFDVixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLG9DQUFvQztBQUN4QztBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsa0JBQWtCO0FBQ25CO0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0FBQ25CO0FBRUE7Q0FDQyxjQUFjO0NBQ2QsaUJBQWlCO0FBQ2xCO0FBRUE7Q0FDQyw0QkFBNEI7Q0FDNUIsbUJBQW1CO0NBQ25CLGlCQUFpQjtBQUNsQjtBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBRUE7Q0FDQyxtQkFBbUI7QUFDcEIiLCJmaWxlIjoibG9naW4tZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCB7aGVpZ2h0OiAxMDAlfVxyXG4ubG9naW4tY29udGVudCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5sb2dpbi1mb3JtIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XHJcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHRiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XHJcblx0XHJcblx0d2lkdGg6IDYwJTtcclxuXHRtaW4td2lkdGg6IDI1MHB4O1xyXG5cdG1hcmdpbjogMCBhdXRvO1xyXG5cdHBhZGRpbmc6IDglIDUlO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwwLDAsMC4zKTtcclxufVxyXG4ubG9naW4tZm9ybSBsYWJlbCBpbnB1dCB7XHJcblx0bWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuaDEge1xyXG5cdG1hcmdpbi1ib3R0b206IDMlO1xyXG5cdGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuLmVycm9yLWxvZ2luIHtcclxuXHRtYXJnaW4tdG9wOiAzMHB4O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmVycm9yLWxvZ2luIHNwYW4ge1xyXG5cdGNvbG9yOiAjZmYwMDAwO1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ubG9naW4tYnRuIHtcclxuXHRmb250LWZhbWlseTogbHVvaXMtc2Fucy1ib2xkO1xyXG5cdGxldHRlci1zcGFjaW5nOiAxcHg7XHJcblx0Zm9udC1zaXplOiAxLjA1ZW07XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG4ubG9naW4taW5wdXQtdGV4dCB7XHJcblx0bWFyZ2luLWJvdHRvbTogMjVweDtcclxufSJdfQ== */", ".container[_ngcontent-%COMP%] {\n  font-weight: 300;\n}\n.container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-input-placeholder {\n  \n  color: white;\n  font-weight: 300;\n}\n.container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:-moz-placeholder {\n  \n  color: white;\n  opacity: 1;\n  font-weight: 300;\n}\n.container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-moz-placeholder {\n  \n  color: white;\n  opacity: 1;\n  font-weight: 300;\n}\n.container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:-ms-input-placeholder {\n  \n  color: white;\n  font-weight: 300;\n}\n.login-content[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.login-content.form-success[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  transform: translateY(85px);\n}\n.login-form[_ngcontent-%COMP%] {\n  z-index: 10;\n}\n.login-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  outline: 0;\n  border: 1px solid rgba(255, 255, 255, 0.4);\n  background-color: rgba(255, 255, 255, 0.2);\n  max-width: 350px;\n  width: 75%;\n  border-radius: 3px;\n  padding: 10px 15px;\n  margin: 0 auto 10px auto;\n  display: block;\n  text-align: center;\n  font-size: 18px;\n  color: black;\n  transition-duration: 0.25s;\n  font-weight: 300;\n}\n.login-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.4);\n}\n.login-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  background-color: white;\n  max-width: 350px;\n  width: 85%;\n  color: #53e3a6;\n}\n.login-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  outline: 0;\n  background-color: #eee;\n  border: 0;\n  padding: 10px 15px;\n  color: #53e3a6;\n  border-radius: 3px;\n  width: 250px;\n  cursor: pointer;\n  font-size: 18px;\n  transition-duration: 0.25s;\n}\n.login-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #f5f7f9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLWZvcm0uYmFja2dyb3VuZC5jb21wb25lbnRzLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDQyxnQkFBQTtBQUREO0FBQUE7RUFFRSxvQkFBb0I7RUFFcEIsWUFBQTtFQUNBLGdCQUFBO0FBQUY7QUFMQTtFQU9FLDRCQUE0QjtFQUM1QixZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFYQTtFQWFFLHdCQUF3QjtFQUF4QixZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBRUY7QUFqQkE7RUFtQkUsMEJBQTBCO0VBRDFCLFlBQUE7RUFDQSxnQkFBQTtBQUdGO0FBQ0E7RUFFQyxnQkFBQTtBQUFEO0FBRUM7RUFHRywyQkFBQTtBQUZKO0FBUUE7RUFDQyxXQUFBO0FBTkQ7QUFLQTtFQUtFLHdCQUFBO0tBQUEscUJBQUE7VUFBQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSwwQ0FBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBRUEsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUVBLFlBQUE7RUFFQSwwQkFBQTtFQUNBLGdCQUFBO0FBVkY7QUFZRTtFQUNDLDBDQUFBO0FBVkg7QUFhRTtFQUNDLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBRUEsY0FBQTtBQVpIO0FBckJBO0VBc0NFLHdCQUFBO0tBQUEscUJBQUE7VUFBQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FBZEY7QUFnQkU7RUFDQyx5QkFBQTtBQWRIIiwiZmlsZSI6ImxvZ2luLWZvcm0uYmFja2dyb3VuZC5jb21wb25lbnRzLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAcHJpbTogIzUzZTNhNjtcblxuLmNvbnRhaW5lcntcblx0Zm9udC13ZWlnaHQ6IDMwMDtcblx0XG5cdDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIFdlYktpdCBicm93c2VycyAqL1xuXHRcdGNvbG9yOiAgICB3aGl0ZTtcblx0XHRmb250LXdlaWdodDogMzAwO1xuXHR9XG5cdDotbW96LXBsYWNlaG9sZGVyIHsgLyogTW96aWxsYSBGaXJlZm94IDQgdG8gMTggKi9cblx0XHRjb2xvcjogICAgd2hpdGU7XG5cdFx0b3BhY2l0eTogIDE7XG5cdFx0Zm9udC13ZWlnaHQ6IDMwMDtcblx0fVxuXHQ6Oi1tb3otcGxhY2Vob2xkZXIgeyAvKiBNb3ppbGxhIEZpcmVmb3ggMTkrICovXG5cdFx0Y29sb3I6ICAgIHdoaXRlO1xuXHRcdG9wYWNpdHk6ICAxO1xuXHRcdGZvbnQtd2VpZ2h0OiAzMDA7XG5cdH1cblx0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIEludGVybmV0IEV4cGxvcmVyIDEwKyAqL1xuXHRcdGNvbG9yOiAgICB3aGl0ZTtcblx0XHRmb250LXdlaWdodDogMzAwO1xuXHR9XG59XG5cbi5sb2dpbi1jb250ZW50IHtcblx0XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdFxuXHQmLmZvcm0tc3VjY2Vzc3tcblx0XHQuY29udGFpbmVye1xuXHRcdFx0aDF7XG5cdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSg4NXB4KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuLmxvZ2luLWZvcm0ge1xuXHR6LWluZGV4OiAxMDtcblx0XG5cdGlucHV0e1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdGFwcGVhcmFuY2U6IG5vbmU7XG5cdFx0b3V0bGluZTogMDtcblx0XHRib3JkZXI6IDFweCBzb2xpZCBmYWRlKHdoaXRlLCA0MCUpO1xuXHRcdGJhY2tncm91bmQtY29sb3I6IGZhZGUod2hpdGUsIDIwJSk7XG5cdFx0bWF4LXdpZHRoOiAzNTBweDtcblx0XHR3aWR0aDogNzUlO1xuXHRcdFxuXHRcdGJvcmRlci1yYWRpdXM6IDNweDtcblx0XHRwYWRkaW5nOiAxMHB4IDE1cHg7XG5cdFx0bWFyZ2luOiAwIGF1dG8gMTBweCBhdXRvO1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0XG5cdFx0Y29sb3I6IGJsYWNrO1xuXHRcdFxuXHRcdHRyYW5zaXRpb24tZHVyYXRpb246IDAuMjVzO1xuXHRcdGZvbnQtd2VpZ2h0OiAzMDA7XG5cdFx0XG5cdFx0Jjpob3Zlcntcblx0XHRcdGJhY2tncm91bmQtY29sb3I6IGZhZGUod2hpdGUsIDQwJSk7XG5cdFx0fVxuXHRcdFxuXHRcdCY6Zm9jdXN7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblx0XHRcdG1heC13aWR0aDogMzUwcHg7XG5cdFx0XHR3aWR0aDogODUlO1xuXHRcdFx0XG5cdFx0XHRjb2xvcjogQHByaW07XG5cdFx0fVxuXHR9XG5cdFxuXHRidXR0b257XG5cdFx0YXBwZWFyYW5jZTogbm9uZTtcblx0XHRvdXRsaW5lOiAwO1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG5cdFx0Ym9yZGVyOiAwO1xuXHRcdHBhZGRpbmc6IDEwcHggMTVweDtcblx0XHRjb2xvcjogQHByaW07XG5cdFx0Ym9yZGVyLXJhZGl1czogM3B4O1xuXHRcdHdpZHRoOiAyNTBweDtcblx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0Zm9udC1zaXplOiAxOHB4O1xuXHRcdHRyYW5zaXRpb24tZHVyYXRpb246IDAuMjVzO1xuXHRcdFxuXHRcdCY6aG92ZXJ7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDcsIDI0OSk7XG5cdFx0fVxuXHR9XG59Il19 */"] });


/***/ }),

/***/ "A8sk":
/*!*********************************!*\
  !*** ./src/app/cookie-utils.ts ***!
  \*********************************/
/*! exports provided: CookieManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieManager", function() { return CookieManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

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


/***/ }),

/***/ "AytR":
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

/***/ "BW7C":
/*!******************************************!*\
  !*** ./src/app/toolbar/jwt-decode-vo.ts ***!
  \******************************************/
/*! exports provided: JWT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JWT", function() { return JWT; });
class JWT {
}


/***/ }),

/***/ "E9uI":
/*!*********************************!*\
  !*** ./src/app/rest-service.ts ***!
  \*********************************/
/*! exports provided: RestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestService", function() { return RestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


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


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rest-service */ "E9uI");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "4zdL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login-form/login-form.component */ "5P1i");








function AppComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "app-login-form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("jwt", function AppComponent_div_2_Template_app_login_form_jwt_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.updateJWT($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ul", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const validateUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["host"] + '/validate';
class AppComponent {
    constructor(rest, cookies) {
        this.rest = rest;
        this.cookies = cookies;
        this.jwt = null;
        let cookieJWT = this.cookies.get('user.jwt');
        if (cookieJWT) {
            //JWT found, check if is valid
            this.rest.sendPost(validateUrl, cookieJWT, new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'content-type': 'text/plain'
            }))
                .subscribe(() => {
                //JWT correct, move to Home Page
                window.location.href = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["homePageUrl"];
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
        window.location.href = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["homePageUrl"];
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 1, consts: [[1, "toolbar"], ["class", "content", "role", "main", 4, "ngIf"], ["role", "main", 1, "content"], [3, "jwt"], [1, "bg-bubbles", "clear"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AppComponent_div_2_Template, 17, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.jwt);
    } }, directives: [_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_5__["ToolbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_7__["LoginFormComponent"]], styles: [".content[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\theight: 100%;\r\n\tposition: relative;\r\n\tbackground: #50a3a2;\r\n\tbackground: linear-gradient(to bottom right, #50a3a2 0%, #53e3a6 100%);\r\n}\r\n\r\n.jwt-txt[_ngcontent-%COMP%] {\r\n\twidth: 90%;\r\n\tword-wrap: break-word;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUluQixzRUFBc0U7QUFDdkU7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YscUJBQXFCO0FBQ3RCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGJhY2tncm91bmQ6ICM1MGEzYTI7XHJcblx0YmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wIGxlZnQsICM1MGEzYTIgMCUsICM1M2UzYTYgMTAwJSk7XHJcblx0YmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wIGxlZnQsICM1MGEzYTIgMCUsICM1M2UzYTYgMTAwJSk7XHJcblx0YmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvcCBsZWZ0LCAjNTBhM2EyIDAlLCAjNTNlM2E2IDEwMCUpO1xyXG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICM1MGEzYTIgMCUsICM1M2UzYTYgMTAwJSk7XHJcbn1cclxuXHJcbi5qd3QtdHh0IHtcclxuXHR3aWR0aDogOTAlO1xyXG5cdHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxufSJdfQ== */", ".bg-bubbles[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: auto;\n  z-index: 1;\n}\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: absolute;\n  list-style: none;\n  display: block;\n  background-color: rgba(255, 255, 255, 0.15);\n  -webkit-animation: square 25s infinite;\n  animation: square 25s infinite;\n  transition-timing-function: linear;\n}\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1) {\n  left: 10%;\n}\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2) {\n  left: 20%;\n  width: 80px;\n  height: 80px;\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n  -webkit-animation-duration: 34s;\n          animation-duration: 34s;\n}\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3) {\n  left: 25%;\n  -webkit-animation-delay: 4s;\n          animation-delay: 4s;\n}\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4) {\n  left: 40%;\n  width: 60px;\n  height: 60px;\n  -webkit-animation-duration: 44s;\n          animation-duration: 44s;\n  background-color: rgba(255, 255, 255, 0.25);\n}\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(5) {\n  left: 70%;\n}\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(6) {\n  left: 80%;\n  width: 120px;\n  height: 120px;\n  -webkit-animation-delay: 3s;\n          animation-delay: 3s;\n  background-color: rgba(255, 255, 255, 0.2);\n}\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(7) {\n  left: 32%;\n  width: 160px;\n  height: 160px;\n  -webkit-animation-delay: 7s;\n          animation-delay: 7s;\n}\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(8) {\n  left: 55%;\n  width: 20px;\n  height: 20px;\n  -webkit-animation-delay: 15s;\n          animation-delay: 15s;\n  -webkit-animation-duration: 80s;\n          animation-duration: 80s;\n}\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(9) {\n  left: 25%;\n  width: 10px;\n  height: 10px;\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n  -webkit-animation-duration: 80s;\n          animation-duration: 80s;\n  background-color: rgba(255, 255, 255, 0.3);\n}\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(10) {\n  left: 5%;\n  width: 20px;\n  height: 20px;\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n  -webkit-animation-duration: 70s;\n          animation-duration: 70s;\n  background-color: rgba(255, 255, 255, 0.3);\n}\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(11) {\n  left: 95%;\n  width: 40px;\n  height: 40px;\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n  -webkit-animation-duration: 60s;\n          animation-duration: 60s;\n  background-color: rgba(255, 255, 255, 0.3);\n}\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(12) {\n  left: 70%;\n  width: 60px;\n  height: 60px;\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n  -webkit-animation-duration: 90s;\n          animation-duration: 90s;\n  background-color: rgba(255, 255, 255, 0.3);\n}\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(12) {\n  left: 10%;\n  width: 50px;\n  height: 50px;\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n  -webkit-animation-duration: 65s;\n          animation-duration: 65s;\n  background-color: rgba(255, 255, 255, 0.3);\n}\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(13) {\n  left: 65%;\n  width: 150px;\n  height: 150px;\n  -webkit-animation-delay: 7s;\n          animation-delay: 7s;\n  -webkit-animation-duration: 60s;\n          animation-duration: 60s;\n}\n@-webkit-keyframes square {\n  0% {\n    transform: translateY(0);\n  }\n  49% {\n    transform: translateY(-800px) rotate(600deg);\n  }\n  51% {\n    transform: translateY(-800px) rotate(600deg);\n  }\n  100% {\n    transform: translateY(0) rotate(0);\n  }\n}\n@keyframes square {\n  0% {\n    transform: translateY(0);\n  }\n  49% {\n    transform: translateY(-800px) rotate(600deg);\n  }\n  51% {\n    transform: translateY(-800px) rotate(600deg);\n  }\n  100% {\n    transform: translateY(0) rotate(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQtZWZmZWN0cy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsV0FBQTtFQUNBLGdCQUFBO0VBRUEsVUFBQTtBQUFEO0FBSkE7RUFPRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDJDQUFBO0VBRUEsc0NBQUE7RUFDQSw4QkFBQTtFQUdBLGtDQUFBO0FBRkY7QUFJRTtFQUNDLFNBQUE7QUFGSDtBQUtFO0VBQ0MsU0FBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBRUEsMkJBQUE7VUFBQSxtQkFBQTtFQUNBLCtCQUFBO1VBQUEsdUJBQUE7QUFMSDtBQVFFO0VBQ0MsU0FBQTtFQUNBLDJCQUFBO1VBQUEsbUJBQUE7QUFOSDtBQVNFO0VBQ0MsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEsK0JBQUE7VUFBQSx1QkFBQTtFQUVBLDJDQUFBO0FBVEg7QUFZRTtFQUNDLFNBQUE7QUFWSDtBQWFFO0VBQ0MsU0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBRUEsMkJBQUE7VUFBQSxtQkFBQTtFQUNBLDBDQUFBO0FBWkg7QUFlRTtFQUNDLFNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUVBLDJCQUFBO1VBQUEsbUJBQUE7QUFkSDtBQWlCRTtFQUNDLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLDRCQUFBO1VBQUEsb0JBQUE7RUFDQSwrQkFBQTtVQUFBLHVCQUFBO0FBaEJIO0FBbUJFO0VBQ0MsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEsMkJBQUE7VUFBQSxtQkFBQTtFQUNBLCtCQUFBO1VBQUEsdUJBQUE7RUFDQSwwQ0FBQTtBQWxCSDtBQXFCRTtFQUNDLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLDJCQUFBO1VBQUEsbUJBQUE7RUFDQSwrQkFBQTtVQUFBLHVCQUFBO0VBQ0EsMENBQUE7QUFwQkg7QUF1QkU7RUFDQyxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSwyQkFBQTtVQUFBLG1CQUFBO0VBQ0EsK0JBQUE7VUFBQSx1QkFBQTtFQUNBLDBDQUFBO0FBdEJIO0FBeUJFO0VBQ0MsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEsMkJBQUE7VUFBQSxtQkFBQTtFQUNBLCtCQUFBO1VBQUEsdUJBQUE7RUFDQSwwQ0FBQTtBQXhCSDtBQTJCRTtFQUNDLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLDJCQUFBO1VBQUEsbUJBQUE7RUFDQSwrQkFBQTtVQUFBLHVCQUFBO0VBQ0EsMENBQUE7QUExQkg7QUE2QkU7RUFDQyxTQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFFQSwyQkFBQTtVQUFBLG1CQUFBO0VBQ0EsK0JBQUE7VUFBQSx1QkFBQTtBQTVCSDtBQWlDQTtFQUNFO0lBQU8sd0JBQUE7RUE5QlA7RUErQkE7SUFBTSw0Q0FBQTtFQTVCTjtFQTZCQTtJQUFNLDRDQUFBO0VBMUJOO0VBMkJBO0lBQU8sa0NBQUE7RUF4QlA7QUFDRjtBQXlCQTtFQUNFO0lBQU8sd0JBQUE7RUF0QlA7RUF1QkE7SUFBTSw0Q0FBQTtFQXBCTjtFQXFCQTtJQUFNLDRDQUFBO0VBbEJOO0VBbUJBO0lBQU8sa0NBQUE7RUFoQlA7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LWVmZmVjdHMubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1idWJibGVze1xuXHR3aWR0aDogMTAwJTtcblx0bWFyZ2luLXRvcDogYXV0bztcblx0XG5cdHotaW5kZXg6IDE7XG5cdFxuXHRsaXtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0bGlzdC1zdHlsZTogbm9uZTtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBmYWRlKHdoaXRlLCAxNSUpO1xuXHRcdFxuXHRcdC13ZWJraXQtYW5pbWF0aW9uOiBzcXVhcmUgMjVzIGluZmluaXRlO1xuXHRcdGFuaW1hdGlvbjogICAgICAgICBzcXVhcmUgMjVzIGluZmluaXRlO1xuXHRcdFxuXHRcdC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcblx0XHR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuXHRcdFxuXHRcdCY6bnRoLWNoaWxkKDEpe1xuXHRcdFx0bGVmdDogMTAlO1xuXHRcdH1cblx0XHRcblx0XHQmOm50aC1jaGlsZCgyKXtcblx0XHRcdGxlZnQ6IDIwJTtcblx0XHRcdFxuXHRcdFx0d2lkdGg6IDgwcHg7XG5cdFx0XHRoZWlnaHQ6IDgwcHg7XG5cdFx0XHRcblx0XHRcdGFuaW1hdGlvbi1kZWxheTogMnM7XG5cdFx0XHRhbmltYXRpb24tZHVyYXRpb246IDM0cztcblx0XHR9XG5cdFx0XG5cdFx0JjpudGgtY2hpbGQoMyl7XG5cdFx0XHRsZWZ0OiAyNSU7XG5cdFx0XHRhbmltYXRpb24tZGVsYXk6IDRzO1xuXHRcdH1cblx0XHRcblx0XHQmOm50aC1jaGlsZCg0KXtcblx0XHRcdGxlZnQ6IDQwJTtcblx0XHRcdHdpZHRoOiA2MHB4O1xuXHRcdFx0aGVpZ2h0OiA2MHB4O1xuXHRcdFx0XG5cdFx0XHRhbmltYXRpb24tZHVyYXRpb246IDQ0cztcblx0XHRcdFxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogZmFkZSh3aGl0ZSwgMjUlKTtcblx0XHR9XG5cdFx0XG5cdFx0JjpudGgtY2hpbGQoNSl7XG5cdFx0XHRsZWZ0OiA3MCU7XG5cdFx0fVxuXHRcdFxuXHRcdCY6bnRoLWNoaWxkKDYpe1xuXHRcdFx0bGVmdDogODAlO1xuXHRcdFx0d2lkdGg6IDEyMHB4O1xuXHRcdFx0aGVpZ2h0OiAxMjBweDtcblx0XHRcdFxuXHRcdFx0YW5pbWF0aW9uLWRlbGF5OiAzcztcblx0XHRcdGJhY2tncm91bmQtY29sb3I6IGZhZGUod2hpdGUsIDIwJSk7XG5cdFx0fVxuXHRcdFxuXHRcdCY6bnRoLWNoaWxkKDcpe1xuXHRcdFx0bGVmdDogMzIlO1xuXHRcdFx0d2lkdGg6IDE2MHB4O1xuXHRcdFx0aGVpZ2h0OiAxNjBweDtcblx0XHRcdFxuXHRcdFx0YW5pbWF0aW9uLWRlbGF5OiA3cztcblx0XHR9XG5cdFx0XG5cdFx0JjpudGgtY2hpbGQoOCl7XG5cdFx0XHRsZWZ0OiA1NSU7XG5cdFx0XHR3aWR0aDogMjBweDtcblx0XHRcdGhlaWdodDogMjBweDtcblx0XHRcdFxuXHRcdFx0YW5pbWF0aW9uLWRlbGF5OiAxNXM7XG5cdFx0XHRhbmltYXRpb24tZHVyYXRpb246IDgwcztcblx0XHR9XG5cdFx0XG5cdFx0JjpudGgtY2hpbGQoOSl7XG5cdFx0XHRsZWZ0OiAyNSU7XG5cdFx0XHR3aWR0aDogMTBweDtcblx0XHRcdGhlaWdodDogMTBweDtcblx0XHRcdFxuXHRcdFx0YW5pbWF0aW9uLWRlbGF5OiAycztcblx0XHRcdGFuaW1hdGlvbi1kdXJhdGlvbjogODBzO1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogZmFkZSh3aGl0ZSwgMzAlKTtcblx0XHR9XG5cdFx0XG5cdFx0JjpudGgtY2hpbGQoMTApe1xuXHRcdFx0bGVmdDogNSU7XG5cdFx0XHR3aWR0aDogMjBweDtcblx0XHRcdGhlaWdodDogMjBweDtcblx0XHRcdFxuXHRcdFx0YW5pbWF0aW9uLWRlbGF5OiAycztcblx0XHRcdGFuaW1hdGlvbi1kdXJhdGlvbjogNzBzO1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogZmFkZSh3aGl0ZSwgMzAlKTtcblx0XHR9XG5cdFx0XG5cdFx0JjpudGgtY2hpbGQoMTEpe1xuXHRcdFx0bGVmdDogOTUlO1xuXHRcdFx0d2lkdGg6IDQwcHg7XG5cdFx0XHRoZWlnaHQ6IDQwcHg7XG5cdFx0XHRcblx0XHRcdGFuaW1hdGlvbi1kZWxheTogMnM7XG5cdFx0XHRhbmltYXRpb24tZHVyYXRpb246IDYwcztcblx0XHRcdGJhY2tncm91bmQtY29sb3I6IGZhZGUod2hpdGUsIDMwJSk7XG5cdFx0fVxuXHRcdFxuXHRcdCY6bnRoLWNoaWxkKDEyKXtcblx0XHRcdGxlZnQ6IDcwJTtcblx0XHRcdHdpZHRoOiA2MHB4O1xuXHRcdFx0aGVpZ2h0OiA2MHB4O1xuXHRcdFx0XG5cdFx0XHRhbmltYXRpb24tZGVsYXk6IDJzO1xuXHRcdFx0YW5pbWF0aW9uLWR1cmF0aW9uOiA5MHM7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBmYWRlKHdoaXRlLCAzMCUpO1xuXHRcdH1cblx0XHRcblx0XHQmOm50aC1jaGlsZCgxMil7XG5cdFx0XHRsZWZ0OiAxMCU7XG5cdFx0XHR3aWR0aDogNTBweDtcblx0XHRcdGhlaWdodDogNTBweDtcblx0XHRcdFxuXHRcdFx0YW5pbWF0aW9uLWRlbGF5OiAycztcblx0XHRcdGFuaW1hdGlvbi1kdXJhdGlvbjogNjVzO1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogZmFkZSh3aGl0ZSwgMzAlKTtcblx0XHR9XG5cdFx0XG5cdFx0JjpudGgtY2hpbGQoMTMpe1xuXHRcdFx0bGVmdDogNjUlO1xuXHRcdFx0d2lkdGg6IDE1MHB4O1xuXHRcdFx0aGVpZ2h0OiAxNTBweDtcblx0XHRcdFxuXHRcdFx0YW5pbWF0aW9uLWRlbGF5OiA3cztcblx0XHRcdGFuaW1hdGlvbi1kdXJhdGlvbjogNjBzO1xuXHRcdH1cblx0fVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3F1YXJlIHtcbiAgMCUgICB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxuICA0OSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTgwMHB4KSByb3RhdGUoNjAwZGVnKTsgfVxuICA1MSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTgwMHB4KSByb3RhdGUoNjAwZGVnKTsgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZSgwKTsgfVxufVxuQGtleWZyYW1lcyBzcXVhcmUge1xuICAwJSAgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XG4gIDQ5JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtODAwcHgpIHJvdGF0ZSg2MDBkZWcpOyB9XG4gIDUxJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtODAwcHgpIHJvdGF0ZSg2MDBkZWcpOyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlKDApOyB9XG59Il19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "4zdL");
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-form/login-form.component */ "5P1i");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_3__["ToolbarComponent"],
        _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_4__["LoginFormComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map