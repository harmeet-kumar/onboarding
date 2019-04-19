(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./login/login.module": [
		"./src/app/login/login.module.ts",
		"login-login-module"
	],
	"./onboarding/onboarding.module": [
		"./src/app/onboarding/onboarding.module.ts",
		"onboarding-onboarding-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_page_not_found_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/page-not-found/page-not-found/page-not-found.component */ "./src/app/shared/page-not-found/page-not-found/page-not-found.component.ts");
/* harmony import */ var _shared_guards_login_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/guards/login-guard.service */ "./src/app/shared/guards/login-guard.service.ts");
/* harmony import */ var _shared_guards_onboarding_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/guards/onboarding-guard.service */ "./src/app/shared/guards/onboarding-guard.service.ts");






var routes = [
    {
        path: 'onboarding',
        loadChildren: './onboarding/onboarding.module#OnboardingModule',
        canActivate: [_shared_guards_login_guard_service__WEBPACK_IMPORTED_MODULE_4__["LoginGuardService"]]
    },
    {
        path: 'login',
        loadChildren: './login/login.module#LoginModule',
        canActivate: [_shared_guards_onboarding_guard_service__WEBPACK_IMPORTED_MODULE_5__["OnboardingGuardService"]]
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }, {
        path: 'notfound',
        component: _shared_page_not_found_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"]
    },
    {
        path: '**',
        redirectTo: 'notfound',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-header></app-header>\n<router-outlet></router-outlet>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _shared_page_not_found_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/page-not-found/page-not-found/page-not-found.component */ "./src/app/shared/page-not-found/page-not-found/page-not-found.component.ts");
/* harmony import */ var _shared_guards_login_guard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/guards/login-guard.service */ "./src/app/shared/guards/login-guard.service.ts");
/* harmony import */ var _shared_guards_onboarding_guard_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/guards/onboarding-guard.service */ "./src/app/shared/guards/onboarding-guard.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _shared_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _shared_page_not_found_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"]
            ],
            imports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"].forRoot(),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"]
            ],
            providers: [_shared_guards_login_guard_service__WEBPACK_IMPORTED_MODULE_10__["LoginGuardService"], _shared_guards_onboarding_guard_service__WEBPACK_IMPORTED_MODULE_11__["OnboardingGuardService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/login/shared/model/User.ts":
/*!********************************************!*\
  !*** ./src/app/login/shared/model/User.ts ***!
  \********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/shared/guards/login-guard.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/guards/login-guard.service.ts ***!
  \******************************************************/
/*! exports provided: LoginGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuardService", function() { return LoginGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/shared/services/authentication.service.ts");




var LoginGuardService = /** @class */ (function () {
    function LoginGuardService(authicationService, _router) {
        this.authicationService = authicationService;
        this._router = _router;
    }
    LoginGuardService.prototype.canActivate = function (route, state) {
        var user = this.authicationService.getCurrentUser();
        return true;
        if (user) {
            return true;
        }
        this._router.navigate(['/login']);
        return false;
    };
    LoginGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginGuardService);
    return LoginGuardService;
}());



/***/ }),

/***/ "./src/app/shared/guards/onboarding-guard.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/guards/onboarding-guard.service.ts ***!
  \***********************************************************/
/*! exports provided: OnboardingGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingGuardService", function() { return OnboardingGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/shared/services/authentication.service.ts");




var OnboardingGuardService = /** @class */ (function () {
    function OnboardingGuardService(authicationService, _router) {
        this.authicationService = authicationService;
        this._router = _router;
    }
    OnboardingGuardService.prototype.canActivate = function (route, state) {
        var user = this.authicationService.getCurrentUser();
        return true;
        if (user) {
            return false;
        }
        return true;
    };
    OnboardingGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], OnboardingGuardService);
    return OnboardingGuardService;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bar-margin {\r\n    margin-bottom: -56px !important;\r\n    z-index: 10;\r\n}\r\n\r\n.user-name {\r\n    color:white;\r\n    margin-left: 5px;\r\n}\r\n\r\n.marg-left {\r\n    margin-left: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLCtCQUErQjtJQUMvQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYXItbWFyZ2luIHtcclxuICAgIG1hcmdpbi1ib3R0b206IC01NnB4ICFpbXBvcnRhbnQ7XHJcbiAgICB6LWluZGV4OiAxMDtcclxufVxyXG5cclxuLnVzZXItbmFtZSB7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5tYXJnLWxlZnQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-dark bg-dark mb-5 bar-margin header-bar\">\n    <a class=\"navbar-brand\" routerLink=\"/\">Student Onboarding</a> <div class=\"navbar-expand mr-auto\">\n        <div class=\"navbar-nav\">\n            <a class=\"nav-item nav-link\" *ngIf=\"loggedIn\"  routerLink=\"onboarding\" [routerLinkActive]=\"['active']\">OnBoarding Form</a>\n            <a class=\"nav-item nav-link\" *ngIf=\"loggedIn\"  routerLink=\"onboarding/list\" [routerLinkActive]=\"['active']\">Students List</a>\n        </div>\n        </div> \n        <div class=\"navbar-expand ml-auto navbar-nav\">\n            <div class=\"navbar-nav\">\n                <div class=\"navbar-nav\" *ngIf=\"loggedIn\"> \n                    <a class=\"nav-item nav-link\" target=\"_blank\">\n                        <i class=\"fas fa-user\"></i>\n                        <span class=\"user-name\">Hi Harmeet</span>\n                    </a>\n                </div>\n                <a (click)=\"logOut()\" *ngIf=\"loggedIn\" routerLink='login' class=\"btn btn-info marg-left \">\n                    <i class=\"fas fa-sign-out-alt\"></i>\n                    <span></span> Log out\n                </a>\n            </div>\n        </div>\n</nav>\n\n"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/shared/services/authentication.service.ts");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.title = 'kratos';
        this.loggedIn = true;
    }
    // userSubscription = this.authenticationService.username.subscribe(val => {
    //   this.username = val
    //   if(val) {
    //     this.loggedIn = true;
    //   } else {
    //     this.loggedIn = false;
    //   }
    // });
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.logOut = function () {
        this.authenticationService.logout();
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/shared/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/page-not-found/page-not-found/page-not-found.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/page-not-found/page-not-found/page-not-found.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n \r\n  #notfound {\r\n    position: relative;\r\n    height: 100vh;\r\n    background-color: #fafbfd;\r\n  }\r\n  \r\n \r\n  #notfound .notfound {\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n  }\r\n  \r\n \r\n  .notfound {\r\n    max-width: 520px;\r\n    width: 100%;\r\n    text-align: center;\r\n  }\r\n  \r\n \r\n  .notfound .notfound-bg {\r\n    position: absolute;\r\n    left: 0px;\r\n    right: 0px;\r\n    top: 50%;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n    z-index: -1;\r\n  }\r\n  \r\n \r\n  .notfound .notfound-bg > div {\r\n    width: 100%;\r\n    background: #fff;\r\n    border-radius: 90px;\r\n    height: 125px;\r\n  }\r\n  \r\n \r\n  .notfound .notfound-bg > div:nth-child(1) {\r\n    box-shadow: 5px 5px 0px 0px #f3f3f3;\r\n  }\r\n  \r\n \r\n  .notfound .notfound-bg > div:nth-child(2) {\r\n    -webkit-transform: scale(1.3);\r\n            transform: scale(1.3);\r\n    box-shadow: 5px 5px 0px 0px #f3f3f3;\r\n    position: relative;\r\n    z-index: 10;\r\n  }\r\n  \r\n \r\n  .notfound .notfound-bg > div:nth-child(3) {\r\n    box-shadow: 5px 5px 0px 0px #f3f3f3;\r\n    position: relative;\r\n    z-index: 90;\r\n  }\r\n  \r\n \r\n  .notfound h1 {\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-size: 86px;\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n    margin-top: 0;\r\n    margin-bottom: 8px;\r\n    color: #151515;\r\n  }\r\n  \r\n \r\n  .notfound h2 {\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-size: 26px;\r\n    margin: 0;\r\n    font-weight: 700;\r\n    color: #151515;\r\n  }\r\n  \r\n \r\n  .notfound a {\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-size: 14px;\r\n    text-decoration: none;\r\n    text-transform: uppercase;\r\n    background: #18e06f;\r\n    display: inline-block;\r\n    padding: 15px 30px;\r\n    border-radius: 5px;\r\n    color: #fff;\r\n    font-weight: 700;\r\n    margin-top: 20px;\r\n  }\r\n  \r\n \r\n  .notfound-social {\r\n    margin-top: 20px;\r\n  }\r\n  \r\n \r\n  .notfound-social>a {\r\n    display: inline-block;\r\n    height: 40px;\r\n    line-height: 40px;\r\n    width: 40px;\r\n    font-size: 14px;\r\n    color: #fff;\r\n    background-color: #dedede;\r\n    margin: 3px;\r\n    padding: 0px;\r\n    transition: 0.2s all;\r\n  }\r\n  \r\n \r\n  .notfound-social>a:hover {\r\n    background-color: #18e06f;\r\n  }\r\n  \r\n \r\n  @media only screen and (max-width: 767px) {\r\n      .notfound .notfound-bg {\r\n        width: 287px;\r\n        margin: auto;\r\n      }\r\n  \r\n      .notfound .notfound-bg > div {\r\n        height: 85px;\r\n    }\r\n  }\r\n  \r\n \r\n  @media only screen and (max-width: 480px) {\r\n    .notfound h1 {\r\n      font-size: 68px;\r\n    }\r\n  \r\n    .notfound h2 {\r\n      font-size: 18px;\r\n    }\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFFWSxzQkFBc0I7RUFDaEM7OztFQUdBO0lBQ0Usa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix5QkFBeUI7RUFDM0I7OztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0lBQ1Isd0NBQXdDO1lBRWhDLGdDQUFnQztFQUMxQzs7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGtCQUFrQjtFQUNwQjs7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVixRQUFRO0lBQ1IsbUNBQW1DO1lBRTNCLDJCQUEyQjtJQUNuQyxXQUFXO0VBQ2I7OztFQUVBO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsYUFBYTtFQUNmOzs7RUFFQTtJQUVVLG1DQUFtQztFQUM3Qzs7O0VBRUE7SUFDRSw2QkFBNkI7WUFFckIscUJBQXFCO0lBRXJCLG1DQUFtQztJQUMzQyxrQkFBa0I7SUFDbEIsV0FBVztFQUNiOzs7RUFFQTtJQUVVLG1DQUFtQztJQUMzQyxrQkFBa0I7SUFDbEIsV0FBVztFQUNiOzs7RUFFQTtJQUNFLG9DQUFvQztJQUNwQyxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGNBQWM7RUFDaEI7OztFQUVBO0lBQ0Usb0NBQW9DO0lBQ3BDLGVBQWU7SUFDZixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGNBQWM7RUFDaEI7OztFQUVBO0lBQ0Usb0NBQW9DO0lBQ3BDLGVBQWU7SUFDZixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQjs7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7OztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGVBQWU7SUFDZixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxZQUFZO0lBRVosb0JBQW9CO0VBQ3RCOzs7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjs7O0VBRUE7TUFDSTtRQUNFLFlBQVk7UUFDWixZQUFZO01BQ2Q7O01BRUE7UUFDRSxZQUFZO0lBQ2hCO0VBQ0Y7OztFQUVBO0lBQ0U7TUFDRSxlQUFlO0lBQ2pCOztJQUVBO01BQ0UsZUFBZTtJQUNqQjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgXHJcbiBcclxuICAjbm90Zm91bmQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZiZmQ7XHJcbiAgfVxyXG4gIFxyXG4gICNub3Rmb3VuZCAubm90Zm91bmQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5ub3Rmb3VuZCB7XHJcbiAgICBtYXgtd2lkdGg6IDUyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5ub3Rmb3VuZCAubm90Zm91bmQtYmcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgfVxyXG4gIFxyXG4gIC5ub3Rmb3VuZCAubm90Zm91bmQtYmcgPiBkaXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOTBweDtcclxuICAgIGhlaWdodDogMTI1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5ub3Rmb3VuZCAubm90Zm91bmQtYmcgPiBkaXY6bnRoLWNoaWxkKDEpIHtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogNXB4IDVweCAwcHggMHB4ICNmM2YzZjM7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggMHB4IDBweCAjZjNmM2YzO1xyXG4gIH1cclxuICBcclxuICAubm90Zm91bmQgLm5vdGZvdW5kLWJnID4gZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4zKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDVweCA1cHggMHB4IDBweCAjZjNmM2YzO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiA1cHggNXB4IDBweCAwcHggI2YzZjNmMztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gIH1cclxuICBcclxuICAubm90Zm91bmQgLm5vdGZvdW5kLWJnID4gZGl2Om50aC1jaGlsZCgzKSB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDVweCA1cHggMHB4IDBweCAjZjNmM2YzO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiA1cHggNXB4IDBweCAwcHggI2YzZjNmMztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDkwO1xyXG4gIH1cclxuICBcclxuICAubm90Zm91bmQgaDEge1xyXG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiA4NnB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgY29sb3I6ICMxNTE1MTU7XHJcbiAgfVxyXG4gIFxyXG4gIC5ub3Rmb3VuZCBoMiB7XHJcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICMxNTE1MTU7XHJcbiAgfVxyXG4gIFxyXG4gIC5ub3Rmb3VuZCBhIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMThlMDZmO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMTVweCAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLm5vdGZvdW5kLXNvY2lhbCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAubm90Zm91bmQtc29jaWFsPmEge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RlZGVkZTtcclxuICAgIG1hcmdpbjogM3B4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzIGFsbDtcclxuICAgIHRyYW5zaXRpb246IDAuMnMgYWxsO1xyXG4gIH1cclxuICAubm90Zm91bmQtc29jaWFsPmE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE4ZTA2ZjtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAubm90Zm91bmQgLm5vdGZvdW5kLWJnIHtcclxuICAgICAgICB3aWR0aDogMjg3cHg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5ub3Rmb3VuZCAubm90Zm91bmQtYmcgPiBkaXYge1xyXG4gICAgICAgIGhlaWdodDogODVweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLm5vdGZvdW5kIGgxIHtcclxuICAgICAgZm9udC1zaXplOiA2OHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLm5vdGZvdW5kIGgyIHtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/shared/page-not-found/page-not-found/page-not-found.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/shared/page-not-found/page-not-found/page-not-found.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"notfound\">\n\t\t<div class=\"notfound\">\n\t\t\t<div class=\"notfound-bg\">\n\t\t\t\t<div></div>\n\t\t\t\t<div></div>\n\t\t\t\t<div></div>\n\t\t\t</div>\n\t\t\t<h1>oops!</h1>\n\t\t\t<h2>Error 404 : Page Not Found</h2>\n\t\t\t<a routerLink=\"\">go back</a>\n\t\t\t<div class=\"notfound-social\">\n\t\t\t\t<a routerLink=\"\"><i class=\"fa fa-facebook\"></i></a>\n\t\t\t\t<a routerLink=\"\"><i class=\"fa fa-twitter\"></i></a>\n\t\t\t\t<a routerLink=\"\"><i class=\"fa fa-pinterest\"></i></a>\n\t\t\t\t<a routerLink=\"\"><i class=\"fa fa-google-plus\"></i></a>\n\t\t\t</div>\n\t\t</div>\n\t</div>"

/***/ }),

/***/ "./src/app/shared/page-not-found/page-not-found/page-not-found.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/page-not-found/page-not-found/page-not-found.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/shared/page-not-found/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/shared/page-not-found/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/shared/services/authentication.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/authentication.service.ts ***!
  \***********************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_shared_model_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../login/shared/model/User */ "./src/app/login/shared/model/User.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService() {
        this.username = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        localStorage.clear();
    }
    AuthenticationService.prototype.getCurrentUser = function () {
        return this.username.getValue();
    };
    AuthenticationService.prototype.login = function (username, password) {
        var user = new _login_shared_model_User__WEBPACK_IMPORTED_MODULE_2__["User"]();
        user.username = username;
        user.password = password;
        this.username.next(user.username);
        localStorage.setItem('currentUser', JSON.stringify(user));
        return this.username.getValue();
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        this.username.next(null);
        localStorage.removeItem('currentUser');
        localStorage.clear();
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\NAGP\Workshop 2 - Angular 7\Assignment\kratos\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map