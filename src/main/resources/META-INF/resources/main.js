"use strict";
(self["webpackChunklogin_ng"] = self["webpackChunklogin_ng"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 4363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rest-service */ 1077);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ 3694);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toolbar/toolbar.component */ 1987);
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-form/login-form.component */ 8866);









function AppComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2)(1, "app-login-form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("jwt", function AppComponent_div_2_Template_app_login_form_jwt_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.updateJWT($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ul", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "li")(4, "li")(5, "li")(6, "li")(7, "li")(8, "li")(9, "li")(10, "li")(11, "li")(12, "li")(13, "li")(14, "li")(15, "li")(16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
class AppComponent {
    constructor(rest, cookies) {
        this.rest = rest;
        this.cookies = cookies;
        this.validateUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.Environment.getLoginHost() + '/validate';
        this.homePageUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.Environment.getHomeHost();
        this.jwt = null;
        let cookieJWT = this.cookies.get('user.jwt');
        if (cookieJWT) {
            //JWT found, check if is valid
            const obs = this.rest.sendPost(this.validateUrl, cookieJWT, new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
                'content-type': 'text/plain'
            }));
            (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.firstValueFrom)(obs)
                .then(() => {
                //JWT correct, move to Home Page
                window.location.href = this.homePageUrl;
            }).catch(error => {
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
        window.location.href = this.homePageUrl;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_rest_service__WEBPACK_IMPORTED_MODULE_1__.RestService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__.CookieService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 1, consts: [[1, "toolbar"], ["class", "content", "role", "main", 4, "ngIf"], ["role", "main", 1, "content"], [3, "jwt"], [1, "bg-bubbles", "clear"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, AppComponent_div_2_Template, 17, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.jwt);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_2__.ToolbarComponent, _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_3__.LoginFormComponent], styles: [".content[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\theight: 100%;\r\n\tbackground: #50a3a2;\r\n\tbackground: linear-gradient(to bottom right, #50a3a2 0%, #53e3a6 100%);\r\n}\r\n\r\n.jwt-txt[_ngcontent-%COMP%] {\r\n\twidth: 90%;\r\n\tword-wrap: break-word;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixZQUFZO0NBQ1osbUJBQW1CO0NBSW5CLHNFQUFzRTtBQUN2RTs7QUFFQTtDQUNDLFVBQVU7Q0FDVixxQkFBcUI7QUFDdEIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRiYWNrZ3JvdW5kOiAjNTBhM2EyO1xyXG5cdGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCBsZWZ0LCAjNTBhM2EyIDAlLCAjNTNlM2E2IDEwMCUpO1xyXG5cdGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCBsZWZ0LCAjNTBhM2EyIDAlLCAjNTNlM2E2IDEwMCUpO1xyXG5cdGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AgbGVmdCwgIzUwYTNhMiAwJSwgIzUzZTNhNiAxMDAlKTtcclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjNTBhM2EyIDAlLCAjNTNlM2E2IDEwMCUpO1xyXG59XHJcblxyXG4uand0LXR4dCB7XHJcblx0d2lkdGg6IDkwJTtcclxuXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn0iXX0= */", ".bg-bubbles[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: auto;\n  z-index: 1;\n}\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: absolute;\n  list-style: none;\n  display: block;\n  background-color: rgba(255, 255, 255, 0.15);\n  -webkit-animation: square 25s infinite;\n  animation: square 25s infinite;\n  transition-timing-function: linear;\n}\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1) {\n  left: 10%;\n}\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2) {\n  left: 20%;\n  width: 80px;\n  height: 80px;\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n  -webkit-animation-duration: 34s;\n          animation-duration: 34s;\n}\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3) {\n  left: 25%;\n  -webkit-animation-delay: 4s;\n          animation-delay: 4s;\n}\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4) {\n  left: 40%;\n  width: 60px;\n  height: 60px;\n  -webkit-animation-duration: 44s;\n          animation-duration: 44s;\n  background-color: rgba(255, 255, 255, 0.25);\n}\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(5) {\n  left: 70%;\n}\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(6) {\n  left: 80%;\n  width: 120px;\n  height: 120px;\n  -webkit-animation-delay: 3s;\n          animation-delay: 3s;\n  background-color: rgba(255, 255, 255, 0.2);\n}\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(7) {\n  left: 32%;\n  width: 160px;\n  height: 160px;\n  -webkit-animation-delay: 7s;\n          animation-delay: 7s;\n}\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(8) {\n  left: 55%;\n  width: 20px;\n  height: 20px;\n  -webkit-animation-delay: 15s;\n          animation-delay: 15s;\n  -webkit-animation-duration: 80s;\n          animation-duration: 80s;\n}\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(9) {\n  left: 25%;\n  width: 10px;\n  height: 10px;\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n  -webkit-animation-duration: 80s;\n          animation-duration: 80s;\n  background-color: rgba(255, 255, 255, 0.3);\n}\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(10) {\n  left: 5%;\n  width: 20px;\n  height: 20px;\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n  -webkit-animation-duration: 70s;\n          animation-duration: 70s;\n  background-color: rgba(255, 255, 255, 0.3);\n}\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(11) {\n  left: 95%;\n  width: 40px;\n  height: 40px;\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n  -webkit-animation-duration: 60s;\n          animation-duration: 60s;\n  background-color: rgba(255, 255, 255, 0.3);\n}\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(12) {\n  left: 70%;\n  width: 60px;\n  height: 60px;\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n  -webkit-animation-duration: 90s;\n          animation-duration: 90s;\n  background-color: rgba(255, 255, 255, 0.3);\n}\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(12) {\n  left: 10%;\n  width: 50px;\n  height: 50px;\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n  -webkit-animation-duration: 65s;\n          animation-duration: 65s;\n  background-color: rgba(255, 255, 255, 0.3);\n}\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(13) {\n  left: 65%;\n  width: 150px;\n  height: 150px;\n  -webkit-animation-delay: 7s;\n          animation-delay: 7s;\n  -webkit-animation-duration: 60s;\n          animation-duration: 60s;\n}\n@-webkit-keyframes square {\n  0% {\n    transform: translateY(0);\n  }\n  49% {\n    transform: translateY(-800px) rotate(600deg);\n  }\n  51% {\n    transform: translateY(-800px) rotate(600deg);\n  }\n  100% {\n    transform: translateY(0) rotate(0);\n  }\n}\n@keyframes square {\n  0% {\n    transform: translateY(0);\n  }\n  49% {\n    transform: translateY(-800px) rotate(600deg);\n  }\n  51% {\n    transform: translateY(-800px) rotate(600deg);\n  }\n  100% {\n    transform: translateY(0) rotate(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQtZWZmZWN0cy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsV0FBQTtFQUNBLGdCQUFBO0VBRUEsVUFBQTtBQUFEO0FBSkE7RUFPRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDJDQUFBO0VBRUEsc0NBQUE7RUFDQSw4QkFBQTtFQUdBLGtDQUFBO0FBRkY7QUFJRTtFQUNDLFNBQUE7QUFGSDtBQUtFO0VBQ0MsU0FBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBRUEsMkJBQUE7VUFBQSxtQkFBQTtFQUNBLCtCQUFBO1VBQUEsdUJBQUE7QUFMSDtBQVFFO0VBQ0MsU0FBQTtFQUNBLDJCQUFBO1VBQUEsbUJBQUE7QUFOSDtBQVNFO0VBQ0MsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEsK0JBQUE7VUFBQSx1QkFBQTtFQUVBLDJDQUFBO0FBVEg7QUFZRTtFQUNDLFNBQUE7QUFWSDtBQWFFO0VBQ0MsU0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBRUEsMkJBQUE7VUFBQSxtQkFBQTtFQUNBLDBDQUFBO0FBWkg7QUFlRTtFQUNDLFNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUVBLDJCQUFBO1VBQUEsbUJBQUE7QUFkSDtBQWlCRTtFQUNDLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLDRCQUFBO1VBQUEsb0JBQUE7RUFDQSwrQkFBQTtVQUFBLHVCQUFBO0FBaEJIO0FBbUJFO0VBQ0MsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEsMkJBQUE7VUFBQSxtQkFBQTtFQUNBLCtCQUFBO1VBQUEsdUJBQUE7RUFDQSwwQ0FBQTtBQWxCSDtBQXFCRTtFQUNDLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLDJCQUFBO1VBQUEsbUJBQUE7RUFDQSwrQkFBQTtVQUFBLHVCQUFBO0VBQ0EsMENBQUE7QUFwQkg7QUF1QkU7RUFDQyxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSwyQkFBQTtVQUFBLG1CQUFBO0VBQ0EsK0JBQUE7VUFBQSx1QkFBQTtFQUNBLDBDQUFBO0FBdEJIO0FBeUJFO0VBQ0MsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEsMkJBQUE7VUFBQSxtQkFBQTtFQUNBLCtCQUFBO1VBQUEsdUJBQUE7RUFDQSwwQ0FBQTtBQXhCSDtBQTJCRTtFQUNDLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLDJCQUFBO1VBQUEsbUJBQUE7RUFDQSwrQkFBQTtVQUFBLHVCQUFBO0VBQ0EsMENBQUE7QUExQkg7QUE2QkU7RUFDQyxTQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFFQSwyQkFBQTtVQUFBLG1CQUFBO0VBQ0EsK0JBQUE7VUFBQSx1QkFBQTtBQTVCSDtBQWlDQTtFQUNFO0lBQU8sd0JBQUE7RUE5QlA7RUErQkE7SUFBTSw0Q0FBQTtFQTVCTjtFQTZCQTtJQUFNLDRDQUFBO0VBMUJOO0VBMkJBO0lBQU8sa0NBQUE7RUF4QlA7QUFDRjtBQXlCQTtFQUNFO0lBQU8sd0JBQUE7RUF0QlA7RUF1QkE7SUFBTSw0Q0FBQTtFQXBCTjtFQXFCQTtJQUFNLDRDQUFBO0VBbEJOO0VBbUJBO0lBQU8sa0NBQUE7RUFoQlA7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LWVmZmVjdHMubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1idWJibGVze1xuXHR3aWR0aDogMTAwJTtcblx0bWFyZ2luLXRvcDogYXV0bztcblx0XG5cdHotaW5kZXg6IDE7XG5cdFxuXHRsaXtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0bGlzdC1zdHlsZTogbm9uZTtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBmYWRlKHdoaXRlLCAxNSUpO1xuXHRcdFxuXHRcdC13ZWJraXQtYW5pbWF0aW9uOiBzcXVhcmUgMjVzIGluZmluaXRlO1xuXHRcdGFuaW1hdGlvbjogICAgICAgICBzcXVhcmUgMjVzIGluZmluaXRlO1xuXHRcdFxuXHRcdC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcblx0XHR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuXHRcdFxuXHRcdCY6bnRoLWNoaWxkKDEpe1xuXHRcdFx0bGVmdDogMTAlO1xuXHRcdH1cblx0XHRcblx0XHQmOm50aC1jaGlsZCgyKXtcblx0XHRcdGxlZnQ6IDIwJTtcblx0XHRcdFxuXHRcdFx0d2lkdGg6IDgwcHg7XG5cdFx0XHRoZWlnaHQ6IDgwcHg7XG5cdFx0XHRcblx0XHRcdGFuaW1hdGlvbi1kZWxheTogMnM7XG5cdFx0XHRhbmltYXRpb24tZHVyYXRpb246IDM0cztcblx0XHR9XG5cdFx0XG5cdFx0JjpudGgtY2hpbGQoMyl7XG5cdFx0XHRsZWZ0OiAyNSU7XG5cdFx0XHRhbmltYXRpb24tZGVsYXk6IDRzO1xuXHRcdH1cblx0XHRcblx0XHQmOm50aC1jaGlsZCg0KXtcblx0XHRcdGxlZnQ6IDQwJTtcblx0XHRcdHdpZHRoOiA2MHB4O1xuXHRcdFx0aGVpZ2h0OiA2MHB4O1xuXHRcdFx0XG5cdFx0XHRhbmltYXRpb24tZHVyYXRpb246IDQ0cztcblx0XHRcdFxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogZmFkZSh3aGl0ZSwgMjUlKTtcblx0XHR9XG5cdFx0XG5cdFx0JjpudGgtY2hpbGQoNSl7XG5cdFx0XHRsZWZ0OiA3MCU7XG5cdFx0fVxuXHRcdFxuXHRcdCY6bnRoLWNoaWxkKDYpe1xuXHRcdFx0bGVmdDogODAlO1xuXHRcdFx0d2lkdGg6IDEyMHB4O1xuXHRcdFx0aGVpZ2h0OiAxMjBweDtcblx0XHRcdFxuXHRcdFx0YW5pbWF0aW9uLWRlbGF5OiAzcztcblx0XHRcdGJhY2tncm91bmQtY29sb3I6IGZhZGUod2hpdGUsIDIwJSk7XG5cdFx0fVxuXHRcdFxuXHRcdCY6bnRoLWNoaWxkKDcpe1xuXHRcdFx0bGVmdDogMzIlO1xuXHRcdFx0d2lkdGg6IDE2MHB4O1xuXHRcdFx0aGVpZ2h0OiAxNjBweDtcblx0XHRcdFxuXHRcdFx0YW5pbWF0aW9uLWRlbGF5OiA3cztcblx0XHR9XG5cdFx0XG5cdFx0JjpudGgtY2hpbGQoOCl7XG5cdFx0XHRsZWZ0OiA1NSU7XG5cdFx0XHR3aWR0aDogMjBweDtcblx0XHRcdGhlaWdodDogMjBweDtcblx0XHRcdFxuXHRcdFx0YW5pbWF0aW9uLWRlbGF5OiAxNXM7XG5cdFx0XHRhbmltYXRpb24tZHVyYXRpb246IDgwcztcblx0XHR9XG5cdFx0XG5cdFx0JjpudGgtY2hpbGQoOSl7XG5cdFx0XHRsZWZ0OiAyNSU7XG5cdFx0XHR3aWR0aDogMTBweDtcblx0XHRcdGhlaWdodDogMTBweDtcblx0XHRcdFxuXHRcdFx0YW5pbWF0aW9uLWRlbGF5OiAycztcblx0XHRcdGFuaW1hdGlvbi1kdXJhdGlvbjogODBzO1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogZmFkZSh3aGl0ZSwgMzAlKTtcblx0XHR9XG5cdFx0XG5cdFx0JjpudGgtY2hpbGQoMTApe1xuXHRcdFx0bGVmdDogNSU7XG5cdFx0XHR3aWR0aDogMjBweDtcblx0XHRcdGhlaWdodDogMjBweDtcblx0XHRcdFxuXHRcdFx0YW5pbWF0aW9uLWRlbGF5OiAycztcblx0XHRcdGFuaW1hdGlvbi1kdXJhdGlvbjogNzBzO1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogZmFkZSh3aGl0ZSwgMzAlKTtcblx0XHR9XG5cdFx0XG5cdFx0JjpudGgtY2hpbGQoMTEpe1xuXHRcdFx0bGVmdDogOTUlO1xuXHRcdFx0d2lkdGg6IDQwcHg7XG5cdFx0XHRoZWlnaHQ6IDQwcHg7XG5cdFx0XHRcblx0XHRcdGFuaW1hdGlvbi1kZWxheTogMnM7XG5cdFx0XHRhbmltYXRpb24tZHVyYXRpb246IDYwcztcblx0XHRcdGJhY2tncm91bmQtY29sb3I6IGZhZGUod2hpdGUsIDMwJSk7XG5cdFx0fVxuXHRcdFxuXHRcdCY6bnRoLWNoaWxkKDEyKXtcblx0XHRcdGxlZnQ6IDcwJTtcblx0XHRcdHdpZHRoOiA2MHB4O1xuXHRcdFx0aGVpZ2h0OiA2MHB4O1xuXHRcdFx0XG5cdFx0XHRhbmltYXRpb24tZGVsYXk6IDJzO1xuXHRcdFx0YW5pbWF0aW9uLWR1cmF0aW9uOiA5MHM7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBmYWRlKHdoaXRlLCAzMCUpO1xuXHRcdH1cblx0XHRcblx0XHQmOm50aC1jaGlsZCgxMil7XG5cdFx0XHRsZWZ0OiAxMCU7XG5cdFx0XHR3aWR0aDogNTBweDtcblx0XHRcdGhlaWdodDogNTBweDtcblx0XHRcdFxuXHRcdFx0YW5pbWF0aW9uLWRlbGF5OiAycztcblx0XHRcdGFuaW1hdGlvbi1kdXJhdGlvbjogNjVzO1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogZmFkZSh3aGl0ZSwgMzAlKTtcblx0XHR9XG5cdFx0XG5cdFx0JjpudGgtY2hpbGQoMTMpe1xuXHRcdFx0bGVmdDogNjUlO1xuXHRcdFx0d2lkdGg6IDE1MHB4O1xuXHRcdFx0aGVpZ2h0OiAxNTBweDtcblx0XHRcdFxuXHRcdFx0YW5pbWF0aW9uLWRlbGF5OiA3cztcblx0XHRcdGFuaW1hdGlvbi1kdXJhdGlvbjogNjBzO1xuXHRcdH1cblx0fVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3F1YXJlIHtcbiAgMCUgICB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxuICA0OSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTgwMHB4KSByb3RhdGUoNjAwZGVnKTsgfVxuICA1MSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTgwMHB4KSByb3RhdGUoNjAwZGVnKTsgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZSgwKTsgfVxufVxuQGtleWZyYW1lcyBzcXVhcmUge1xuICAwJSAgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XG4gIDQ5JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtODAwcHgpIHJvdGF0ZSg2MDBkZWcpOyB9XG4gIDUxJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtODAwcHgpIHJvdGF0ZSg2MDBkZWcpOyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlKDApOyB9XG59Il19 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toolbar/toolbar.component */ 1987);
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-form/login-form.component */ 8866);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ 3694);
/* harmony import */ var _login_pending_login_pending_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-pending/login-pending.component */ 1782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);









class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__.CookieService], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_1__.ToolbarComponent,
        _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_2__.LoginFormComponent,
        _login_pending_login_pending_component__WEBPACK_IMPORTED_MODULE_3__.LoginPendingComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule] }); })();


/***/ }),

/***/ 8866:
/*!****************************************************!*\
  !*** ./src/app/login-form/login-form.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginFormComponent": () => (/* binding */ LoginFormComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 4363);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rest-service */ 1077);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-cookie-service */ 3694);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _login_pending_login_pending_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login-pending/login-pending.component */ 1782);











function LoginFormComponent_div_1_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LoginFormComponent_div_1_img_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 12);
} }
function LoginFormComponent_div_1_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Login error, credentials are not valid");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function LoginFormComponent_div_1_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Backend server error!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r5.errorDetails);
} }
function LoginFormComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Login:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3)(4, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function LoginFormComponent_div_1_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.login()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5)(6, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "username");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function LoginFormComponent_div_1_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.userInput = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function LoginFormComponent_div_1_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r9.pwdInput = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, LoginFormComponent_div_1_span_13_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, LoginFormComponent_div_1_img_15_Template, 1, 0, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, LoginFormComponent_div_1_div_16_Template, 3, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, LoginFormComponent_div_1_div_17_Template, 5, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r0.userInput);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r0.pwdInput);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.displayCredentialError);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.displayError);
} }
function LoginFormComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13)(1, "app-login-pending", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("pendingFlag", function LoginFormComponent_div_2_Template_app_login_pending_pendingFlag_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r10.updatePending($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("username", ctx_r1.userInput);
} }
class LoginFormComponent {
    constructor(rest, cookies) {
        this.rest = rest;
        this.cookies = cookies;
        this.loginUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.Environment.getLoginHost() + '/login';
        this.homePageUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.Environment.getHomeHost();
        this.isLoading = false;
        this.jwt = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
    login() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (this.loginSub)
                this.loginSub.unsubscribe();
            this.resetFields();
            this.isLoading = true;
            let obsv = this.rest.sendPostGetRawText(this.loginUrl, {
                username: this.userInput,
                password: this.pwdInput
            }, new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({ 'content-type': 'application/json' }));
            yield (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.firstValueFrom)(obsv)
                .then(response => {
                this.isLoading = false;
                if (response && response.ok) {
                    console.log('Login success');
                    this.jwt.emit(response.body);
                    this.cookies.delete('user.jwt');
                    this.cookies.set('user.jwt', response.body, 7, '/', this.getCookieDomain());
                    this.displayError = false;
                    window.location.href = this.homePageUrl;
                }
                else {
                    console.log('Error occurs');
                }
            })
                .catch(e => this.handleError(e, this));
        });
    }
    ngOnDestroy() {
        if (this.loginSub)
            this.loginSub.unsubscribe();
    }
    handleError(error, login) {
        console.error(error);
        this.isLoading = false;
        if (!error) {
            login.displayError = true;
            console.log('Backend response null ', error);
            login.errorDetails = 'Unable to load response, generic error';
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(() => new Error('Unable to load response, generic error'));
        }
        else if (error.status == 0) {
            login.displayError = true;
            login.userInput = "";
            login.pwdInput = "";
            console.log('Backend response not recived ', error);
            login.errorDetails = error.message;
        }
        else if (error.status === 403) {
            login.displayCredentialError = true;
            login.userInput = "";
            login.pwdInput = "";
            console.log('Credential not valid ', error);
        }
        else if (error.status === 409) {
            login.displayPending = true;
            login.userInput = "";
            login.pwdInput = "";
            console.log('User is in pending ', error);
        }
        else {
            console.log('Error in call, status ', error);
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(() => new Error(error.message));
    }
    getCookieDomain() {
        let fullDomain = window.location.hostname;
        if (fullDomain.startsWith('localhost'))
            return null;
        let domainSplitted = fullDomain.split("\.");
        if (domainSplitted.length <= 2) {
            // first level domain
            return fullDomain;
        }
        else {
            // Multi-level domain
            if (this.isNumber(domainSplitted[domainSplitted.length - 1])) {
                // last part is number, ip as hostname
                return fullDomain;
            }
            else {
                // last is a word, hostname is a domain name
                let rootDomain = domainSplitted[domainSplitted.length - 2] +
                    "." +
                    domainSplitted[domainSplitted.length - 1];
                return rootDomain;
            }
        }
    }
    updatePending(flag) {
        this.displayPending = flag;
    }
    isNumber(str) {
        return !isNaN(parseInt(str));
    }
    resetFields() {
        this.displayCredentialError = false;
        this.displayError = false;
        this.displayPending = false;
        this.isLoading = false;
        this.errorDetails = undefined;
    }
}
LoginFormComponent.ɵfac = function LoginFormComponent_Factory(t) { return new (t || LoginFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_rest_service__WEBPACK_IMPORTED_MODULE_1__.RestService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__.CookieService)); };
LoginFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LoginFormComponent, selectors: [["app-login-form"]], outputs: { jwt: "jwt" }, decls: 3, vars: 2, consts: [[1, "login-content"], [4, "ngIf"], ["class", "error-login", 4, "ngIf"], [1, "container"], [3, "ngSubmit"], [1, "login-form"], ["for", "username-input"], ["type", "text", "id", "username", "name", "username", 1, "login-input-text", 3, "ngModel", "ngModelChange"], ["for", "password-input"], ["type", "password", "id", "password", "name", "password", 1, "login-input-text", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "login-btn"], ["src", "assets/loading-login.gif", "height", "21", 4, "ngIf"], ["src", "assets/loading-login.gif", "height", "21"], [1, "error-login"], [3, "username", "pendingFlag"]], template: function LoginFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, LoginFormComponent_div_1_Template, 18, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, LoginFormComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.displayPending);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.displayPending);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgForm, _login_pending_login_pending_component__WEBPACK_IMPORTED_MODULE_2__.LoginPendingComponent], styles: ["html[_ngcontent-%COMP%] {height: 100%}\r\n.login-content[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n\theight: 100%;\r\n}\r\n.login-form[_ngcontent-%COMP%] {\r\n\tbackground-color: rgba(255, 255, 255, 0.6);\r\n\tborder-radius: 10px;\r\n\t-webkit-backdrop-filter: blur(10px);\r\n\t        backdrop-filter: blur(10px);\r\n\t\r\n\twidth: 60%;\r\n\tmin-width: 250px;\r\n\tmargin: 0 auto;\r\n\tpadding: 8% 5%;\r\n\tdisplay: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    box-shadow: 0 0 10px rgba(0,0,0,0.3);\r\n}\r\n.login-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n\tmargin-top: 20px;\r\n}\r\nh1[_ngcontent-%COMP%] {\r\n\tmargin-bottom: 3%;\r\n\talign-self: center;\r\n}\r\n.error-login[_ngcontent-%COMP%] {\r\n\tmargin-top: 30px;\r\n\ttext-align: center;\r\n}\r\n.error-login[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n\tcolor: #ff0000;\r\n\tfont-weight: bold;\r\n}\r\n.login-btn[_ngcontent-%COMP%] {\r\n\tfont-family: luois-sans-bold;\r\n\tletter-spacing: 1px;\r\n\tfont-size: 1.05em;\r\n}\r\nh1[_ngcontent-%COMP%] {\r\n    padding-top: 20px;\r\n}\r\n.login-input-text[_ngcontent-%COMP%] {\r\n\tmargin-bottom: 25px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLFlBQVk7QUFDbEI7Q0FDQyxhQUFhO0lBQ1Ysc0JBQXNCO0lBQ3RCLFdBQVc7Q0FDZCxZQUFZO0FBQ2I7QUFFQTtDQUNDLDBDQUEwQztDQUMxQyxtQkFBbUI7Q0FDbkIsbUNBQTJCO1NBQTNCLDJCQUEyQjs7Q0FFM0IsVUFBVTtDQUNWLGdCQUFnQjtDQUNoQixjQUFjO0NBQ2QsY0FBYztDQUNkLGFBQWE7SUFDVixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLG9DQUFvQztBQUN4QztBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsa0JBQWtCO0FBQ25CO0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0FBQ25CO0FBRUE7Q0FDQyxjQUFjO0NBQ2QsaUJBQWlCO0FBQ2xCO0FBRUE7Q0FDQyw0QkFBNEI7Q0FDNUIsbUJBQW1CO0NBQ25CLGlCQUFpQjtBQUNsQjtBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBRUE7Q0FDQyxtQkFBbUI7QUFDcEIiLCJmaWxlIjoibG9naW4tZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCB7aGVpZ2h0OiAxMDAlfVxyXG4ubG9naW4tY29udGVudCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5sb2dpbi1mb3JtIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XHJcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHRiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XHJcblx0XHJcblx0d2lkdGg6IDYwJTtcclxuXHRtaW4td2lkdGg6IDI1MHB4O1xyXG5cdG1hcmdpbjogMCBhdXRvO1xyXG5cdHBhZGRpbmc6IDglIDUlO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwwLDAsMC4zKTtcclxufVxyXG4ubG9naW4tZm9ybSBsYWJlbCBpbnB1dCB7XHJcblx0bWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuaDEge1xyXG5cdG1hcmdpbi1ib3R0b206IDMlO1xyXG5cdGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuLmVycm9yLWxvZ2luIHtcclxuXHRtYXJnaW4tdG9wOiAzMHB4O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmVycm9yLWxvZ2luIHNwYW4ge1xyXG5cdGNvbG9yOiAjZmYwMDAwO1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ubG9naW4tYnRuIHtcclxuXHRmb250LWZhbWlseTogbHVvaXMtc2Fucy1ib2xkO1xyXG5cdGxldHRlci1zcGFjaW5nOiAxcHg7XHJcblx0Zm9udC1zaXplOiAxLjA1ZW07XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG4ubG9naW4taW5wdXQtdGV4dCB7XHJcblx0bWFyZ2luLWJvdHRvbTogMjVweDtcclxufSJdfQ== */", ".container[_ngcontent-%COMP%] {\n  font-weight: 300;\n}\n.container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-input-placeholder {\n  \n  color: white;\n  font-weight: 300;\n}\n.container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:-moz-placeholder {\n  \n  color: white;\n  opacity: 1;\n  font-weight: 300;\n}\n.container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-moz-placeholder {\n  \n  color: white;\n  opacity: 1;\n  font-weight: 300;\n}\n.container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:-ms-input-placeholder {\n  \n  color: white;\n  font-weight: 300;\n}\n.login-content[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.login-content.form-success[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  transform: translateY(85px);\n}\n.login-form[_ngcontent-%COMP%] {\n  z-index: 10;\n}\n.login-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  outline: 0;\n  border: 1px solid rgba(255, 255, 255, 0.4);\n  background-color: rgba(255, 255, 255, 0.2);\n  max-width: 350px;\n  width: 75%;\n  border-radius: 3px;\n  padding: 10px 15px;\n  margin: 0 auto 10px auto;\n  display: block;\n  text-align: center;\n  font-size: 18px;\n  color: black;\n  transition-duration: 0.25s;\n  font-weight: 300;\n}\n.login-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.4);\n}\n.login-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  background-color: white;\n  max-width: 350px;\n  width: 85%;\n  color: #53e3a6;\n}\n.login-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  outline: 0;\n  background-color: #eee;\n  border: 0;\n  padding: 10px 15px;\n  color: #53e3a6;\n  border-radius: 3px;\n  width: 250px;\n  cursor: pointer;\n  font-size: 18px;\n  transition-duration: 0.25s;\n}\n.login-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #e0e0e0;\n  box-shadow: 0 0 5px 1px #222;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLWZvcm0uYmFja2dyb3VuZC5jb21wb25lbnRzLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDQyxnQkFBQTtBQUREO0FBQUE7RUFFRSxvQkFBb0I7RUFFcEIsWUFBQTtFQUNBLGdCQUFBO0FBQUY7QUFMQTtFQU9FLDRCQUE0QjtFQUM1QixZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFYQTtFQWFFLHdCQUF3QjtFQUF4QixZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBRUY7QUFqQkE7RUFtQkUsMEJBQTBCO0VBRDFCLFlBQUE7RUFDQSxnQkFBQTtBQUdGO0FBQ0E7RUFFQyxnQkFBQTtBQUFEO0FBRUM7RUFHRywyQkFBQTtBQUZKO0FBUUE7RUFDQyxXQUFBO0FBTkQ7QUFLQTtFQUtFLHdCQUFBO0tBQUEscUJBQUE7VUFBQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSwwQ0FBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBRUEsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUVBLFlBQUE7RUFFQSwwQkFBQTtFQUNBLGdCQUFBO0FBVkY7QUFZRTtFQUNDLDBDQUFBO0FBVkg7QUFhRTtFQUNDLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBRUEsY0FBQTtBQVpIO0FBckJBO0VBc0NFLHdCQUFBO0tBQUEscUJBQUE7VUFBQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FBZEY7QUFnQkU7RUFDQyx5QkFBQTtFQUNBLDRCQUFBO0FBZEgiLCJmaWxlIjoibG9naW4tZm9ybS5iYWNrZ3JvdW5kLmNvbXBvbmVudHMubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBwcmltOiAjNTNlM2E2O1xuXG4uY29udGFpbmVye1xuXHRmb250LXdlaWdodDogMzAwO1xuXHRcblx0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHsgLyogV2ViS2l0IGJyb3dzZXJzICovXG5cdFx0Y29sb3I6ICAgIHdoaXRlO1xuXHRcdGZvbnQtd2VpZ2h0OiAzMDA7XG5cdH1cblx0Oi1tb3otcGxhY2Vob2xkZXIgeyAvKiBNb3ppbGxhIEZpcmVmb3ggNCB0byAxOCAqL1xuXHRcdGNvbG9yOiAgICB3aGl0ZTtcblx0XHRvcGFjaXR5OiAgMTtcblx0XHRmb250LXdlaWdodDogMzAwO1xuXHR9XG5cdDo6LW1vei1wbGFjZWhvbGRlciB7IC8qIE1vemlsbGEgRmlyZWZveCAxOSsgKi9cblx0XHRjb2xvcjogICAgd2hpdGU7XG5cdFx0b3BhY2l0eTogIDE7XG5cdFx0Zm9udC13ZWlnaHQ6IDMwMDtcblx0fVxuXHQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTArICovXG5cdFx0Y29sb3I6ICAgIHdoaXRlO1xuXHRcdGZvbnQtd2VpZ2h0OiAzMDA7XG5cdH1cbn1cblxuLmxvZ2luLWNvbnRlbnQge1xuXHRcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XG5cdCYuZm9ybS1zdWNjZXNze1xuXHRcdC5jb250YWluZXJ7XG5cdFx0XHRoMXtcblx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDg1cHgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG4ubG9naW4tZm9ybSB7XG5cdHotaW5kZXg6IDEwO1xuXHRcblx0aW5wdXR7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0YXBwZWFyYW5jZTogbm9uZTtcblx0XHRvdXRsaW5lOiAwO1xuXHRcdGJvcmRlcjogMXB4IHNvbGlkIGZhZGUod2hpdGUsIDQwJSk7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogZmFkZSh3aGl0ZSwgMjAlKTtcblx0XHRtYXgtd2lkdGg6IDM1MHB4O1xuXHRcdHdpZHRoOiA3NSU7XG5cdFx0XG5cdFx0Ym9yZGVyLXJhZGl1czogM3B4O1xuXHRcdHBhZGRpbmc6IDEwcHggMTVweDtcblx0XHRtYXJnaW46IDAgYXV0byAxMHB4IGF1dG87XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdGZvbnQtc2l6ZTogMThweDtcblx0XHRcblx0XHRjb2xvcjogYmxhY2s7XG5cdFx0XG5cdFx0dHJhbnNpdGlvbi1kdXJhdGlvbjogMC4yNXM7XG5cdFx0Zm9udC13ZWlnaHQ6IDMwMDtcblx0XHRcblx0XHQmOmhvdmVye1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogZmFkZSh3aGl0ZSwgNDAlKTtcblx0XHR9XG5cdFx0XG5cdFx0Jjpmb2N1c3tcblx0XHRcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXHRcdFx0bWF4LXdpZHRoOiAzNTBweDtcblx0XHRcdHdpZHRoOiA4NSU7XG5cdFx0XHRcblx0XHRcdGNvbG9yOiBAcHJpbTtcblx0XHR9XG5cdH1cblx0XG5cdGJ1dHRvbntcblx0XHRhcHBlYXJhbmNlOiBub25lO1xuXHRcdG91dGxpbmU6IDA7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2VlZTtcblx0XHRib3JkZXI6IDA7XG5cdFx0cGFkZGluZzogMTBweCAxNXB4O1xuXHRcdGNvbG9yOiBAcHJpbTtcblx0XHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdFx0d2lkdGg6IDI1MHB4O1xuXHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0dHJhbnNpdGlvbi1kdXJhdGlvbjogMC4yNXM7XG5cdFx0XG5cdFx0Jjpob3Zlcntcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG5cdFx0XHRib3gtc2hhZG93OiAwIDAgNXB4IDFweCAjMjIyO1xuXHRcdH1cblx0fVxufSJdfQ== */"] });


/***/ }),

/***/ 1782:
/*!**********************************************************!*\
  !*** ./src/app/login-pending/login-pending.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPendingComponent": () => (/* binding */ LoginPendingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rest-service */ 1077);




class LoginPendingComponent {
    constructor(rest) {
        this.rest = rest;
        this.regUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.Environment.getRegistrationHost + '/';
        this.pendingFlag = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ;
    ngOnInit() {
    }
    resendToken() {
    }
    back() {
        this.pendingFlag.emit(false);
    }
}
LoginPendingComponent.ɵfac = function LoginPendingComponent_Factory(t) { return new (t || LoginPendingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_rest_service__WEBPACK_IMPORTED_MODULE_1__.RestService)); };
LoginPendingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginPendingComponent, selectors: [["app-login-pending"]], inputs: { username: "username" }, outputs: { pendingFlag: "pendingFlag" }, decls: 21, vars: 0, consts: [[1, "container"], [1, "header"], [1, "editorial"], ["type", "button", 1, "login-btn", 3, "click"], [1, "space-10"]], template: function LoginPendingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Your account is in pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2)(5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Hey! your account need to be actviated by the email sent to you in the registration step.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Please check your mail and click on the activation link.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Remember to check in the spam folder.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Did you need a new mail? Click on resend mail.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginPendingComponent_Template_button_click_14_listener() { return ctx.resendToken(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Resend mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginPendingComponent_Template_button_click_18_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } }, styles: [".container[_ngcontent-%COMP%] {\r\n    background-color: rgba(255, 255, 255, 0.6);\r\n\tborder-radius: 10px;\r\n\t-webkit-backdrop-filter: blur(10px);\r\n\t        backdrop-filter: blur(10px);\r\n\t\r\n\twidth: 60%;\r\n\tmin-width: 250px;\r\n\tmargin: 40px auto;\r\n\tpadding: 8% 5%;\r\n\tdisplay: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    box-shadow: 0 0 10px rgba(0,0,0,0.3);\r\n}\r\n\r\n.login-btn[_ngcontent-%COMP%] {\r\n\tfont-family: luois-sans-bold;\r\n\tletter-spacing: 1px;\r\n\tfont-size: 1.05em;\r\n    -webkit-appearance: none;\r\n       -moz-appearance: none;\r\n            appearance: none;\r\n    outline: 0;\r\n    background-color: #eee;\r\n    border: 0;\r\n    padding: 10px 15px;\r\n    border-radius: 3px;\r\n    width: 250px;\r\n    cursor: pointer;\r\n    font-size: 18px;\r\n    transition-duration: 0.25s;\r\n}\r\n\r\n.login-btn[_ngcontent-%COMP%]:hover{\r\n    background-color: #e0e0e0;\r\n    box-shadow: 0 0 5px 1px #222;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLXBlbmRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBDQUEwQztDQUM3QyxtQkFBbUI7Q0FDbkIsbUNBQTJCO1NBQTNCLDJCQUEyQjs7Q0FFM0IsVUFBVTtDQUNWLGdCQUFnQjtDQUNoQixpQkFBaUI7Q0FDakIsY0FBYztDQUNkLGFBQWE7SUFDVixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLG9DQUFvQztBQUN4Qzs7QUFFQTtDQUNDLDRCQUE0QjtDQUM1QixtQkFBbUI7Q0FDbkIsaUJBQWlCO0lBQ2Qsd0JBQWdCO09BQWhCLHFCQUFnQjtZQUFoQixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7SUFDZiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsNEJBQTRCO0FBQ2hDIiwiZmlsZSI6ImxvZ2luLXBlbmRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0YmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG5cdFxyXG5cdHdpZHRoOiA2MCU7XHJcblx0bWluLXdpZHRoOiAyNTBweDtcclxuXHRtYXJnaW46IDQwcHggYXV0bztcclxuXHRwYWRkaW5nOiA4JSA1JTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsMCwwLDAuMyk7XHJcbn1cclxuXHJcbi5sb2dpbi1idG4ge1xyXG5cdGZvbnQtZmFtaWx5OiBsdW9pcy1zYW5zLWJvbGQ7XHJcblx0bGV0dGVyLXNwYWNpbmc6IDFweDtcclxuXHRmb250LXNpemU6IDEuMDVlbTtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMjVzO1xyXG59XHJcbiAgICBcclxuLmxvZ2luLWJ0bjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IDFweCAjMjIyO1xyXG59Il19 */"] });


/***/ }),

/***/ 1077:
/*!*********************************!*\
  !*** ./src/app/rest-service.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestService": () => (/* binding */ RestService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);


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
RestService.ɵfac = function RestService_Factory(t) { return new (t || RestService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
RestService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RestService, factory: RestService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9321:
/*!*******************************************!*\
  !*** ./src/app/toolbar/default.avatar.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultAvatar": () => (/* binding */ DefaultAvatar)
/* harmony export */ });
class DefaultAvatar {
}
DefaultAvatar.DEFAULT_AVATAR = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBoRXhpZgAATU0AKgAAAAgABAEa" +
    "AAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAMAAAExAAIAAAARAAAATgAAAAAAAJOjAAAD6AAAk6MAAAPocGFpbnQu" +
    "bmV0IDQuMy4xMQAA/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkf" +
    "LTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo" +
    "KCgoKCgo/8AAEQgBAAEAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMF" +
    "BQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElK" +
    "U1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV" +
    "1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQH" +
    "BQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJ" +
    "SlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT" +
    "1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A6+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA" +
    "KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA" +
    "KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKFBZgFBJJwAO9ABRW/p/hHV71Q32cW" +
    "6EfenO39Ov6Vsw/D6YqPO1BEbuEiLD88igDh6K7ib4fTBT5OoI7dg8RUfnk1jah4R1eyUt9nFwgH3oDu/Tr+lAGBRQwKsQwI" +
    "IOCDRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRVnTLGbUr6K0thmSQ4yeijuT7CgCx" +
    "oWj3Os3nk2y4VeZJG+6g/wAfQf8A169R0Lw9Y6OgMEe+4xhpnGWP09B9P1q3o+m2+lWKWtquFXlm7u3dj71doAKKKKACiiig" +
    "DH13w9Y6whM8ey4x8syDDD6+o9j+leXa7o9zo155NyMq3Mci/dcf4+o/+tXtNUtY02DVbF7W6XKtyrd0bsw96APEqKs6nYza" +
    "bfS2lyMSRnGR0I7EexqtQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFei/DXTRHZzahIv7yY+XG" +
    "f9gdfzP/AKDXnNe26FbfY9HsoCgRkiUMB/exz+uaAL1FFFABRRRQAUUUUAFFFFAHFfErTBJZw6hGvzwny5D/ALJ6H8D/AOhV" +
    "51Xtmu232zRr2AIHZ4mCg/3scfrivEqAFooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAM45r3qvBa9" +
    "s0K5+2aNZT7g7PCpYj+9jn9c0AXqKKKACiiigAooooAKKKKAA9K8FzmvbNdufsejXs+4IyQsVJ/vY4/XFeJ0AFFFFABRRRQA" +
    "UUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABXonw11ISWc2nyN88R8yMHupPP5H/0KvO6s6ZfTadfQ3duf3kbZx2Y" +
    "dwfqKAPcaKo6PqUGq2KXNs2Vbhlzyjdwfer1ABRRRQAUUUUAFFFUdY1ODSrF7m5YBV4Vc8u3YD3oA5f4l6kI7OHT4z88p8yQ" +
    "DsoPH5n/ANBrzurOp302o3013cH95I2cdlHYD6Cq1ABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQA" +
    "UUUUAaOh6vc6PeedbN8rcSRt91x7+/oa9Q0HxFY6xGBC4jucfNA5ww+nqPp+lePUA4ORwaAPeqK8j0/xbq9kAPtH2hB/DON3" +
    "69f1rag+IMwUefp8bt3KSlR+RBoA9CoJwMnpXns/xBmK/uNPjRvV5Sw/IAVi6h4t1e9488QJx8sA29Pfr+tAHoeveIrHR42E" +
    "rmS4x8sK9Sff0H+ea8v1zV7nWLzzrlsKvEcY+6g9vf1NZ3Uknkk5J9aKACikpaACiiigAooooAKKKKACiiigAooooAKKKKAC" +
    "iiigAooooAKKKKACkpaKACikqSGGWeRY4I3kkboqKWJ/AUAMoroLHwfrF1gmBbdSMhpmx+gyR+Vbdt8PmKqbnUAD3WOPP6k/" +
    "0oA4SivTE8BaYuN092x/31A/9BqyvgrRwMGKVvcyGgDyqivVD4J0g9EmH0kNV38BaYc7Z7tfT51I/wDQaAPM6K7u5+HzBWNt" +
    "qAJ7LJHj9Qf6ViX3g/WLXJEC3CgZLQtn9Dgn8qAOfop80MsEjRzxvHIvVXUqR+BplABRRRQAUUUUAFFFFABRRRQAUUUUAFFF" +
    "FABRRRQAUUUUAFFFFABVzTNMvNTm8qygaVh94jhV+p6Cuh8LeEJdQEd1qG6G0PzKnRpB/Qfz/WvR7O1gs7dYLWJYolGAqj/O" +
    "T70Acho/gS3iCvqkpnfvHGSqD8ep/Suus7O2sovLtII4U9EXGfr61PRQAUUUUAFFFFABRRRQAUUUUAQXlnbXsXl3cEcyejrn" +
    "H09K5HWPAkEoL6XKYH/55yEsh/HqP1rtaKAPEdT0y80ybyr2Boifuk8q30PQ1Tr3S8tYLy3aG6iWWJuCrDP+T715x4p8ISae" +
    "JLrT901oPmZDy0Y/qP5frQByVFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABXb+B/DAnVNR1FMxHmGJh97/aI9PT1+nXF8" +
    "H6N/bGqASjNrDh5ff0X8f5A166AAAAAAOgFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAeeeOPDAgV9R06PEQ5" +
    "miUfd/2gPT19Pp04iveiAQQQCD1BryLxjo39j6piIYtZgXi9vVfw/kRQBhUUUUAFFFFABRRRQAUUUUAFFFFABRRU1nbm6vIL" +
    "dSAZpFjBPbJxQB6r4I08WHh+3JA82cec5Hv0/TH61v0KAFAAwB0FFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUU" +
    "AFYHjfTxf+H5yAPNgHnIT7df0z+lb9DAFSCMjuKAPBaKlvLc2t3PbsctE7Rk+uDioqACiiigAooooAKKKKACiiigAq9oH/Id" +
    "03/r5i/9DFUavaB/yHtN/wCvmL/0MUAe2UUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAeJ6/8A8h7U" +
    "v+vmX/0M1Rq/r/8AyHtS/wCvmX/0M1QoAKKKKACiiigAooooAKKKKACp7C4+yX1tc7d/kyrJtzjOCDjP4VBRQB3n/Cwj/wBA" +
    "z/yY/wDsaP8AhYR/6Bn/AJMf/Y1wdFAHef8ACwj/ANAz/wAmP/saP+FhH/oGf+TH/wBjXB0UAd5/wsI/9Az/AMmP/saP+FhH" +
    "/oGf+TH/ANjXB0UAd5/wsI/9Az/yY/8AsaP+FhH/AKBn/kx/9jXB0UAd5/wsI/8AQM/8mP8A7Gj/AIWEf+gZ/wCTH/2NcHRQ" +
    "B3n/AAsI/wDQM/8AJj/7Gj/hYR/6Bn/kx/8AY1wdFAHef8LCP/QM/wDJj/7Gj/hYR/6Bn/kx/wDY1wdFAHef8LCP/QM/8mP/" +
    "ALGj/hYR/wCgZ/5Mf/Y1wdFAHef8LCP/AEDP/Jj/AOxo/wCFhH/oGf8Akx/9jXB0UAd5/wALCP8A0DP/ACY/+xo/4WEf+gZ/" +
    "5Mf/AGNcHRQBPf3H2u+ubnbs86VpNuc4yScZ/GoKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiig" +
    "AooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiig" +
    "AooooAKKKKACiiigAooooAKKKKACiiigD//Z";


/***/ }),

/***/ 2162:
/*!******************************************!*\
  !*** ./src/app/toolbar/jwt-decode-vo.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JWT": () => (/* binding */ JWT)
/* harmony export */ });
class JWT {
}


/***/ }),

/***/ 1987:
/*!**********************************************!*\
  !*** ./src/app/toolbar/toolbar.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolbarComponent": () => (/* binding */ ToolbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 4363);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _jwt_decode_vo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jwt-decode-vo */ 2162);
/* harmony import */ var _default_avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default.avatar */ 9321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ 3694);
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rest-service */ 1077);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);









function ToolbarComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6)(1, "a", 3)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "LOGIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "a", 3)(7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "REGISTRATION");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", ctx_r0.loginUrl, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", ctx_r0.registrationUrl, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function ToolbarComponent_div_8_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 11);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r2.jwt.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("alt", ctx_r2.jwt.name);
} }
function ToolbarComponent_div_8_img_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 11);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r3.DEFAULT_AVATAR, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("alt", ctx_r3.jwt.name);
} }
function ToolbarComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Edit user");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ToolbarComponent_div_8_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.logout()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, ToolbarComponent_div_8_img_6_Template, 1, 2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ToolbarComponent_div_8_img_7_Template, 1, 2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", ctx_r1.userManagementUrl, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", ctx_r1.homeUrl, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.jwt.avatar);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.jwt.avatar);
} }
class ToolbarComponent {
    constructor(cookies, rest) {
        this.cookies = cookies;
        this.rest = rest;
        this.validateUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.Environment.getLoginHost() + "/validate";
        this.homeUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.Environment.getHomeHost();
        this.loginUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.Environment.getLoginHost();
        this.userManagementUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.Environment.getUserManagerHost();
        this.registrationUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.Environment.getRegistrationHost();
        this.jwt = new _jwt_decode_vo__WEBPACK_IMPORTED_MODULE_1__.JWT();
        this.DEFAULT_AVATAR = _default_avatar__WEBPACK_IMPORTED_MODULE_2__.DefaultAvatar.DEFAULT_AVATAR;
        this.cookieJWT = this.cookies.get('user.jwt');
    }
    ngOnInit() {
        if (this.cookieJWT) {
            //JWT found, check if is valid
            const obsv = this.rest.sendPost(this.validateUrl, this.cookieJWT, new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
                'content-type': 'text/plain'
            }));
            (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.firstValueFrom)(obsv)
                .then((resp) => {
                //JWT correct, move to Home Page
                this.jwt = resp.body;
            })
                .catch(error => {
                //JWT non correct or service not available
                if (error.status === 401) {
                    console.error('The token JWT is not valid, relogin required', error);
                    this.logout();
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
    logout() {
        this.cookies.delete('user.jwt');
        window.top.location.href = this.homeUrl;
    }
}
ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) { return new (t || ToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__.CookieService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_rest_service__WEBPACK_IMPORTED_MODULE_3__.RestService)); };
ToolbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ToolbarComponent, selectors: [["app-toolbar"]], decls: 9, vars: 3, consts: [["id", "navbar", 1, "u-clearfix", "header"], [1, "container"], [1, "logo"], [3, "href"], ["class", "login", 4, "ngIf"], ["class", "logged", 4, "ngIf"], [1, "login"], [1, "logged"], [1, "user-mngmnt"], [3, "href", "click"], [3, "src", "alt", 4, "ngIf"], [3, "src", "alt"]], template: function ToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "nav")(3, "div", 2)(4, "a", 3)(5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "LOGO");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ToolbarComponent_div_7_Template, 9, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ToolbarComponent_div_8_Template, 8, 4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", ctx.homeUrl, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.cookieJWT);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.cookieJWT);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf], styles: ["nav[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-wrap: nowrap;\r\n\tjustify-content: flex-start;\r\n\tfont-size: 1.5em;\r\n\ttext-shadow: 0 0 2px black;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n\tmargin: 5px 10px;\r\n\talign-self: center;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n\tmargin-left: auto;\r\n}\r\n\r\n.u-clearfix[_ngcontent-%COMP%]:after, .u-clearfix[_ngcontent-%COMP%]:before {\r\n\tcontent: '';\r\n\tdisplay: table;\r\n}\r\n\r\n.u-clearfix[_ngcontent-%COMP%]:after {\r\n\tclear: both;\r\n}\r\n\r\nheader[_ngcontent-%COMP%] {\r\n\tbackground-color: rgba(0, 0, 0, 0.5);\r\n\tz-index: 100;\r\n\tposition: fixed;\r\n\twidth: 100%;\r\n\ttop: 0;\r\n\ttransition: top 0.3s;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n\theight: auto;\r\n\tmax-height: 50px;\r\n\tborder-radius: 40px;\r\n\tbox-shadow: 0 0 5px rgba(255, 255, 255, 0.75);\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n\ttext-decoration: none;\r\n\tcolor: rgba(255, 255, 255, 0.8);\r\n}\r\n\r\n.user-mngmnt[_ngcontent-%COMP%] {\r\n\tpadding: 10px 20px;\r\n\tbackground-color: rgba(200,200,200,0.8);\r\n\tborder: 1px solid #fff;\r\n\tborder-radius: 10px;\r\n\t\r\n\tposition: absolute;\r\n\tright: 10px;\r\n   \ttop  : 50px;\r\n\topacity: 0;\r\n\ttransition: linear 0.5s;\r\n\t\r\n\tdisplay: block;\r\n\tfont-feature-settings: \"smcp\";\r\n\tfont-variant: small-caps;\r\n}\r\n\r\n.user-mngmnt[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\tmargin: 5px 0;\r\n\tcolor: black;\r\n\tfont-size: 0.6em;\r\n\tfloat: left;\r\n    clear: left;\r\n}\r\n\r\n.logged[_ngcontent-%COMP%]:hover   .user-mngmnt[_ngcontent-%COMP%], .logged[_ngcontent-%COMP%]:active   .user-mngmnt[_ngcontent-%COMP%], .logged[_ngcontent-%COMP%]:focus   .user-mngmnt[_ngcontent-%COMP%] {\r\n\topacity: 1;\r\n\ttop  : 70px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2xiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGFBQWE7Q0FDYixpQkFBaUI7Q0FDakIsMkJBQTJCO0NBQzNCLGdCQUFnQjtDQUNoQiwwQkFBMEI7QUFDM0I7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsV0FBVztDQUNYLGNBQWM7QUFDZjs7QUFFQTtDQUNDLFdBQVc7QUFDWjs7QUFFQTtDQUNDLG9DQUFvQztDQUNwQyxZQUFZO0NBQ1osZUFBZTtDQUNmLFdBQVc7Q0FDWCxNQUFNO0NBQ04sb0JBQW9CO0FBQ3JCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGdCQUFnQjtDQUNoQixtQkFBbUI7Q0FDbkIsNkNBQTZDO0FBQzlDOztBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLCtCQUErQjtBQUNoQzs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQix1Q0FBdUM7Q0FDdkMsc0JBQXNCO0NBQ3RCLG1CQUFtQjs7Q0FFbkIsa0JBQWtCO0NBQ2xCLFdBQVc7SUFDUixXQUFXO0NBQ2QsVUFBVTtDQUNWLHVCQUF1Qjs7Q0FFdkIsY0FBYztDQUNkLDZCQUF3QjtDQUF4Qix3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsWUFBWTtDQUNaLGdCQUFnQjtDQUNoQixXQUFXO0lBQ1IsV0FBVztBQUNmOztBQUVBOzs7Q0FHQyxVQUFVO0NBQ1YsV0FBVztBQUNaIiwiZmlsZSI6InRvb2xiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LXdyYXA6IG5vd3JhcDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblx0Zm9udC1zaXplOiAxLjVlbTtcclxuXHR0ZXh0LXNoYWRvdzogMCAwIDJweCBibGFjaztcclxufVxyXG5cclxubmF2IGRpdiB7XHJcblx0bWFyZ2luOiA1cHggMTBweDtcclxuXHRhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbm5hdiBkaXY6bGFzdC1jaGlsZCB7XHJcblx0bWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbi51LWNsZWFyZml4OmFmdGVyLCAudS1jbGVhcmZpeDpiZWZvcmUge1xyXG5cdGNvbnRlbnQ6ICcnO1xyXG5cdGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcblxyXG4udS1jbGVhcmZpeDphZnRlciB7XHJcblx0Y2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG5cdHotaW5kZXg6IDEwMDtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0dG9wOiAwO1xyXG5cdHRyYW5zaXRpb246IHRvcCAwLjNzO1xyXG59XHJcblxyXG5pbWcge1xyXG5cdGhlaWdodDogYXV0bztcclxuXHRtYXgtaGVpZ2h0OiA1MHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcblx0Ym94LXNoYWRvdzogMCAwIDVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xyXG59XHJcblxyXG5hIHtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0Y29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxufVxyXG5cclxuLnVzZXItbW5nbW50IHtcclxuXHRwYWRkaW5nOiAxMHB4IDIwcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDAsMjAwLDIwMCwwLjgpO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHRcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0cmlnaHQ6IDEwcHg7XHJcbiAgIFx0dG9wICA6IDUwcHg7XHJcblx0b3BhY2l0eTogMDtcclxuXHR0cmFuc2l0aW9uOiBsaW5lYXIgMC41cztcclxuXHRcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XHJcbn1cclxuXHJcbi51c2VyLW1uZ21udCBhIHtcclxuXHRtYXJnaW46IDVweCAwO1xyXG5cdGNvbG9yOiBibGFjaztcclxuXHRmb250LXNpemU6IDAuNmVtO1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG4gICAgY2xlYXI6IGxlZnQ7XHJcbn1cclxuXHJcbi5sb2dnZWQ6aG92ZXIgLnVzZXItbW5nbW50LFxyXG4ubG9nZ2VkOmFjdGl2ZSAudXNlci1tbmdtbnQsXHJcbi5sb2dnZWQ6Zm9jdXMgLnVzZXItbW5nbW50IHtcclxuXHRvcGFjaXR5OiAxO1xyXG5cdHRvcCAgOiA3MHB4O1xyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Environment": () => (/* binding */ Environment),
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
class Environment {
    constructor() { }
    static getHomeHost() {
        return 'http://localhost:8080';
    }
    static getHotelHost() {
        return 'http://localhost:8081';
    }
    static getLoginHost() {
        return 'http://localhost:7070';
    }
    static getRegistrationHost() {
        return 'http://localhost:7171';
    }
    static getUserManagerHost() {
        return "http://localhost:7071";
    }
}
Environment.ɵfac = function Environment_Factory(t) { return new (t || Environment)(); };
Environment.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Environment, factory: Environment.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map