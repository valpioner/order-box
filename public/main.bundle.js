webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/admin/admin.module": [
		"./src/app/admin/admin.module.ts",
		"admin.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/admin/manage-users/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_service__ = __webpack_require__("./src/app/admin/manage-users/services/user.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__user_service__["a"]; });



/***/ }),

/***/ "./src/app/admin/manage-users/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_rxjs_extensions__ = __webpack_require__("./src/app/services/rxjs-extensions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.usersUrl = 'http://localhost:3001/users';
    }
    UserService.prototype.getUsers = function () {
        return this.http.get(this.usersUrl)
            .map(this.handleData)
            .catch(this.handleError);
    };
    UserService.prototype.getUser = function (id) {
        return this.http.get(this.usersUrl + "/" + id)
            .map(function (res) { return res || {}; })
            .catch(this.handleError);
    };
    UserService.prototype.updateUser = function (user) {
        var url = this.usersUrl + "/update", body = JSON.stringify(user), options = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
        };
        return this.http.put(url, body, options)
            .map(this.handleData)
            .catch(this.handleError);
    };
    UserService.prototype.createUser = function (user) {
        var url = this.usersUrl + "/register", body = JSON.stringify(user), options = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
        };
        return this.http.post(url, body, options)
            .map(this.handleData)
            .catch(this.handleError);
    };
    UserService.prototype.deleteUser = function (user) {
        var url = this.usersUrl + "/" + user._id;
        return this.http.delete(url)
            .map(this.handleData)
            .catch(this.handleError);
    };
    UserService.prototype.handleData = function (response) {
        var body = response;
        return body || {};
    };
    UserService.prototype.handleError = function (err) {
        var errorMessage;
        // A client-side or network error occurred.
        if (err.error instanceof Error) {
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            errorMessage = "Backend returned code " + err.status + ", body was: " + err.error;
        }
        console.error(errorMessage);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errorMessage);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<main class=\"content\" role=\"main\">\r\n  <flash-messages></flash-messages>\r\n  <router-outlet></router-outlet>\r\n</main>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(titleService, router, metaService) {
        this.titleService = titleService;
        this.router = router;
        this.metaService = metaService;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.setPageTitlesAndMeta();
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    AppComponent.prototype.setPageTitlesAndMeta = function () {
        var _this = this;
        this.sub = this.router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* NavigationEnd */]; })
            .map(function () { return _this.router.routerState.root; })
            .map(function (route) {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        })
            .filter(function (route) { return route.outlet === 'primary'; })
            .switchMap(function (route) { return route.data; })
            .subscribe(function (data) {
            _this.titleService.setTitle(data['title']);
            _this.metaService.addTags(data['meta']);
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Meta */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("./src/app/app.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_interceptors_service__ = __webpack_require__("./src/app/services/interceptors.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_footer_footer_component__ = __webpack_require__("./src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_dialog_service__ = __webpack_require__("./src/app/services/dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services__ = __webpack_require__("./src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__guards__ = __webpack_require__("./src/app/guards/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var AppModule = (function () {
    function AppModule(router) {
        console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["b" /* appRouterComponents */],
                __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_footer_footer_component__["a" /* FooterComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__["FlashMessagesModule"],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */] // should be last
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__services__["c" /* ValidateService */],
                __WEBPACK_IMPORTED_MODULE_13__services__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_14__guards__["b" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_14__guards__["a" /* AdminGuard */],
                __WEBPACK_IMPORTED_MODULE_12__services_dialog_service__["a" /* DialogService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_8__services_interceptors_service__["a" /* TimingInterceptor */],
                    multi: true,
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* Router */]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return appRouterComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components__ = __webpack_require__("./src/app/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guards__ = __webpack_require__("./src/app/guards/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services__ = __webpack_require__("./src/app/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_2__components__["f" /* RegisterComponent */],
        data: { title: 'Register' }
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_2__components__["d" /* LoginComponent */],
        data: { title: 'Login' }
    },
    {
        path: 'admin',
        loadChildren: 'app/admin/admin.module#AdminModule',
        canLoad: [__WEBPACK_IMPORTED_MODULE_3__guards__["b" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_3__guards__["a" /* AdminGuard */]],
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards__["b" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_3__guards__["a" /* AdminGuard */]],
        data: { title: 'Admin' }
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_2__components__["b" /* DashboardComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards__["b" /* AuthGuard */]],
        data: { title: 'Dashboard' }
    },
    {
        path: 'profile',
        component: __WEBPACK_IMPORTED_MODULE_2__components__["e" /* ProfileComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards__["b" /* AuthGuard */]],
        data: { title: 'Profile' }
    },
    {
        path: 'course',
        component: __WEBPACK_IMPORTED_MODULE_2__components__["a" /* CourseComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards__["b" /* AuthGuard */]],
        data: {
            title: 'Course',
        }
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__components__["c" /* HomeComponent */],
        pathMatch: 'full'
    },
];
var appRouterComponents = [__WEBPACK_IMPORTED_MODULE_2__components__["f" /* RegisterComponent */], __WEBPACK_IMPORTED_MODULE_2__components__["d" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_2__components__["b" /* DashboardComponent */], __WEBPACK_IMPORTED_MODULE_2__components__["e" /* ProfileComponent */], __WEBPACK_IMPORTED_MODULE_2__components__["a" /* CourseComponent */], __WEBPACK_IMPORTED_MODULE_2__components__["c" /* HomeComponent */] /*, PageNotFoundComponent*/];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes, { preloadingStrategy: /*PreloadAllModules*/ __WEBPACK_IMPORTED_MODULE_4__services__["b" /* CustomPreloadingStrategyService */] })
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__services__["b" /* CustomPreloadingStrategyService */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/course/course.component.css":
/***/ (function(module, exports) {

module.exports = ".course{\r\n    height: 100%;\r\n    padding: 2em 0;\r\n}\r\n\r\n.course-menu{\r\n    height: 100%;\r\n    padding: 0;\r\n}\r\n\r\n.course-header{\r\n    background: #343A40;\r\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAewAAAFpAgMAAAAjOfOYAAAADFBMVEVMaXH///////////8/u4fCAAAABHRSTlMAPygTRUcrQwAACqpJREFUeAHt3QWs5Midx/Fvu9RKnF33iHrCHIc5sbK8LWappfTfduZZikOiaWUtTnK5O4v5uN6EeZlJFDifmE54nlkx3TLvirIM1lh60nPbrrZdgfdZnpmdn9p/20XuMsxFRHKMzeQsgEpO05u7d7aceQac9aX0pl59HXu4RovcibPGBvWoyJn/SbHjBRFJseTU9ZJhzQsrTpw4ceLEiRN/oV7CHjmLNSI5lii72QWWOCL8PWbPJPy7zOaFCHuqoS4n/h9rnAhr/BBblBxgiyt3YUsZYYsjKbbMpcCWMsYWJRm2eCHW+DHW6AxbHCmwxYuwJkiwpswYzCUFvUjOYILwLnpwQoYTSEIP7obh+P2yg/Wg2Wt6WGYMZ9kvW+eDZqf0IAyolNRa77iUjO68eNilpj7Z8zWDKuguSGnxecbir9htkTCWMmcnpcfL1uz2oMSMRIXsdLlIbGnwuxD57mjZs83uYsuBM1q2l7BDIGHhbBiJu2aHudzFeNnzlB3cLajxsjN2OAWoiJEEGS1UZO2WChGgfsbwljltQuDyZIzsokv2QmKGV7ZnH6L0KNmaDtkPiq1sfbnIPWNkH3bIFtmOcnMLaVXKAaNkRx2yw2KUbNUlOwNlKfvdgIrsZDNW9qbHefFRe9kLsZQdorQUtrIDibDjcCFyF3ZoLVss0RJi5PQQ2XdhZIALs9xixgdOsZfzBWYCICjYxzMYqXL9wt5K+3ns2WBBAerVgk8zvVkGD0pYYCN7jSciMRaomPLg+Uclx4JzjhRQJljwgBurm2ytefrZXArKDAsO8b+T4a6ZnhNz3ktxU6bnrfk/JyVYMbwn2C1YccFJKQsG58gf2mY13jzmEcNzRe5iS7Nz4MtqFjO8QESQHeFS4EoxTxme/icRRG6jib9F3UaZf56hKSmuEbQITbywACdUa4bmRnAFCy000lt4MFHxWA8MLKSgyeVy66OSc46h6ax1blJpkQNYjlDu1jnZYiHhM/CxEcrdOhedoBhDkLTOwTvJ2I8DzdMdHTbelsNo5d7RPLsZuCsG50bta01ePk52UCfubiu8jMEtM6g402fndfaGHZxizFUeFTGxIGufCJ9gRVFbzC4ZyFX9V3GH6oc6kvdevV7mDGIuazqZxQ0Lm+Z8ienE2TQs6JpbyqZ3tp+Ond28jCGribMJoeIIw/A7Z2uozDeTP2lZX9X+mmF4knbOHrjcqMOiZyPqCJPzV3W5JxdkdbknN7+ON+mVhWzZ2io3rrwZ7m6YntIit9kpdxX+B2SFDae0CIIdCy1ssBUu/ApbrmEP89uwJpCzhb1sCf+AHb6I2Pro/r9eL9WGWNNb5rwgInKnjewCFtrO6l1ZUG3GtbGQfXEfMgvZunmyaHSHFrNDKrOEyUVUvOmzVZ29Zmr1KNq1mZ0ytfr0nlvMDjKm5iUWs9fN81Rjc21mp9Tt+NTm/bIfGDQ76zUfK8UYM/AlHcwkHXDvq2DVZ/7dlQ0deZJ3XvU4pIPgG50PeiBpa3beZ81judLpcN+Irk/viA7KNIjoZilxexe5xzqTkqjzskIpm64Tk2pDO+dA8jIdLFtTcbpku2s/Wa4GO+Z1dky7IPNCTTeBrDt3U7tkL3OlQ7pxJaOF/KFHN/UQ/A3dqFtooUTOds5Wm0G7lKoae3f7PWfJsN2bauzdLdtNB27mr9EicqaYp3Rqdw4H3whbwvs7ZC+L+hY07EfPaBWOMWJU14usOg1h3JTBvdAh20uqkg/uVN6pW7kssMLP4RA7yqrkVkRVyW1w4qrkNnhxVXIbFiGUWKIzIux4IoidGDsuOPK/a+wo8/I7GXboxJUcOw5DJVgSl9nD1rIvjy9ltw8wDpU4YcFuCQ1euHXPbCW54VZP++6T4KyDA3bzN4377ojk+2R/VTJ20xHHKs88o3S8T/bXInbzJORYhwUspEC9RAvj6a0g0hzrvwDKbKFla5gd0kInDfODMYB7oI2r7m3bH/Bc5k3Z1Yj3VcOqLwp2C0KOz1YJAMttVfUxlAn+alc2wIMpI3AkaxicO+s6Gy9mBG4I83RH9vnBJ6JrZdw0gTBLATg32vKEkgy8pDV7njM4VwqYxTu+cLAZLduPAWfTmh0UDE1J2jgh7K7GzfYkLJom4d0cQFX18BncQuSgaeGjKrGTDLLdQ0P/4Czo4rjsor7K4TQj+LPI9vgpkarEsyr77YzhQZG7jm1MfOpsuMAY1PUSXr9qzk6rfsR4j21mjTuZeKNmsxBJG7PdDICYkVxx7DpFVeL5atxsLk9aslXCaB5p6qZOkE1jdpDXd5gJVSX2bWYX9VU+nbqbajvby5iSs7aY/fVXX627yO6KKc1E5ADOVdn55NkSX7zDTJu9uPOlV6+XuzZ1H2ZiSkd1N3VyCwlFbgWfJh9jNIGIyHZH9jJnLCq85RYtd52mSZmMXfUd2eHYVY9ooiVjVEFzdqhjRtW8fK6iQApGdVnzAre9lyTNYh6MsMNL8ELscNc4EXbMU3sL3EHGLMYOf4WX2MpOcdfYsYysLezjSh5k2KEk8VdY4ofLHEs8kQJbtMXsQLDGCbHnwsn7VAd14sSJEydOvPLfHEXBRC4X2XLUAdNwRETuatoRa4I9IGJqfHyyAauS8Jmjb9JYFl7MJDy5CxaSUdOpmzAJPwJ4MKYm0VSDxjI9snfnW1Ai92cTlbuo/1Gt8DmRyIopzCLeVFZx+Mks9iVnCm58dFe9ZeglnhRMoH7L58VTu5Tvr9F09XH24GdHH33VWlK+QlfLYv+NUut5vzCQjO6Wg7yaLaS6kzuyorvz7EEf3XbE2VDmdHc4yCvK9MXZZpceIsyp6OjBdxOU6VKBeXZ1xi7WdHUJ4MRcNsAaxzLv+d7cIIdZQokp50h2L2UO3poynz5bCeCl+OkQx9ygEXJT3GSA7II+qsx5xiwa4hozaAiCFcj+95bS4FTDz6t/MaMNt39W4cVCBen+bYnJq4fLqvD7t6G9zJOLzZgT7dt3mMUm/9+5fZ46r6plcOR0Xjdjy9WefcUgNTjV1Kb6X/ftI2f04W3qfSPw4r3HBv3vasyqv2/2GxN5RpeYt2avi8w/qMeCvevtpub1rre/cSQ1uaW6Wf2vRpScKdSDUtCPn9aPpcqecx4HYNCEBqvqSjG2qOZ6TK5NPzc/1SqPGnxsEGBZ7L0v/At30l+ZQ1n9C1MLUjgElDA5N4Fz1V1mck4Em/pUm5hUzZif0eoUhhTHK1dO3O1UW0iOmSBv+vFZApzvEC0JZsqk4UBWzdhbW6O13BFixJGQBm7abUvv2ygzTATNN9x5RiulZQtBjAmd6KQpe9UxGifEwELuCsLms7A9+jqT7mAlCHEka9xvpoUrZ+vusMkhhzJuyC469kSrfzHqUTUd9AWtHkyN38BSxTqSYcg9oOJF9OUndT+6RdtB17nZzpT+ClP1sfa39DRP98z2IuOD7q73fWxe5/W/GO16qwuMLRMqQWK026/GXBnWX4gwmncMMXehzKha0ttM5t9UhLn/CuKqJd3SV1h9eHM/ckJQWr6T05euim4upsyUlmheGM2/eQnmEtyD6+W6/woKo/k3d40xlVRbTP7IN3tP0TzFmLOupjZi3/CrQtl+2aeA5DS9zUX2WpKeVS+0UP2zXwOWHfKe0YTlCgAAAABJRU5ErkJggg==);\r\n    background-size: 20%;\r\n    background-repeat: repeat;\r\n    border-radius: 5px;\r\n\r\n    text-align: center;\r\n    padding: 3em 0;\r\n}\r\n\r\n.course-content{\r\n    /* background: #27277B; */\r\n}\r\n\r\n.menu-module-header{\r\n    margin: .5em 0;\r\n    -ms-flex-wrap: nowrap;\r\n        flex-wrap: nowrap;\r\n}\r\n\r\n/deep/ .card-header{\r\n    padding: 0 !important;\r\n    cursor: pointer;\r\n}\r\n\r\n/deep/ .card-header a{\r\n    text-decoration: none;\r\n}\r\n\r\n/deep/ .card-body{\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.menu-module-item{\r\n    padding: .3em 0 .3em 3em;\r\n}\r\n\r\n.menu-module-item::before{    \r\n    width: 10px;\r\n    height: 10px;\r\n    content: \"\";\r\n    position: absolute;\r\n    left: 1.2em;\r\n    margin-top: .5em;\r\n    border-radius: 50%;\r\n    background: #C9CED0;\r\n}\r\n\r\n.menu-module-item:hover{\r\n    background: #F6F8F8;\r\n    cursor: pointer;\r\n}\r\n\r\n.menu-module-item a{\r\n    text-decoration: none;\r\n}\r\n\r\n.menu-module-content{\r\n    padding: 0;\r\n}\r\n\r\n.menu-module-content::after{\r\n    background: #C9CED0;\r\n    bottom: 0;\r\n    content: \"\";\r\n    left: 1.5em;\r\n    margin-left: -1px;\r\n    position: absolute;\r\n    right: 50%;\r\n    top: 0;\r\n    width: 2px;\r\n}\r\n\r\n.header-number{\r\n    line-height: 1.4em;\r\n    width: 3em;\r\n}\r\n\r\n.header-text{\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n    white-space: nowrap;\r\n}\r\n\r\n.header-icon{\r\n    padding: 0 1em;\r\n}\r\n\r\n.circle{\r\n    border-radius: 50%;\r\n    background-color: white;\r\n    border: .5px solid #1c91a8;\r\n    width: 1.5rem;\r\n    height: 1.5rem;\r\n    font-size: 70%;\r\n    margin: 0 auto;\r\n}"

/***/ }),

/***/ "./src/app/components/course/course.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container h-100\">\r\n  <div class=\"row course h-100\">\r\n    <div class=\"col-md-3 course-menu\">\r\n      <ngb-accordion #acc=\"ngbAccordion\" activeIds=\"ngb-panel-0\" class=\"w-100\">\r\n        \r\n        <ngb-panel>\r\n          <ng-template ngbPanelTitle>\r\n            <header class=\"row menu-module-header\">\r\n              <div class=\"text-center header-number\">\r\n                <div class=\"circle\">\r\n                  <span>1</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"header-text\">Основи веб розробки</div>\r\n              <div class=\"header-icon\">3</div>\r\n            </header>\r\n          </ng-template>\r\n          <ng-template ngbPanelContent>\r\n            <div class=\"row m-0\">\r\n              <div class=\"col menu-module-content\">\r\n                <div class=\"menu-module-item\">\r\n                  <a href=\"\">Урок 1.1</a>\r\n                </div>\r\n                <div class=\"menu-module-item\">\r\n                  <a href=\"\">Урок 1.2</a>\r\n                </div>\r\n                <div class=\"menu-module-item\">\r\n                  <a href=\"\">Урок 1.3</a>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </ng-template>\r\n        </ngb-panel>\r\n\r\n        <ngb-panel>\r\n          <ng-template ngbPanelTitle>\r\n            <header class=\"row menu-module-header\">\r\n              <div class=\"text-center header-number\">\r\n                <div class=\"circle\">\r\n                  <span>2</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"header-text\">Основи HTML</div>\r\n              <div class=\"header-icon\">3</div>\r\n            </header>\r\n          </ng-template>\r\n          <ng-template ngbPanelContent>\r\n            <div class=\"row m-0\">\r\n              <div class=\"col menu-module-content\">\r\n                <div class=\"menu-module-item\">\r\n                  <a href=\"\">Урок 2.1</a>\r\n                </div>\r\n                <div class=\"menu-module-item\">\r\n                  <a href=\"\">Урок 2.2</a>\r\n                </div>\r\n                <div class=\"menu-module-item\">\r\n                  <a href=\"\">Урок 2.3</a>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </ng-template>\r\n        </ngb-panel>\r\n\r\n        <ngb-panel [disabled]=\"true\">\r\n          <ng-template ngbPanelTitle>\r\n            <header class=\"row menu-module-header\">\r\n              <div class=\"text-center header-number\">\r\n                <div class=\"circle\">\r\n                  <span>3</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"header-text\">Основи CSS</div>\r\n              <div class=\"header-icon\">3</div>\r\n            </header>\r\n          </ng-template>\r\n          <ng-template ngbPanelContent>\r\n          </ng-template>\r\n        </ngb-panel>\r\n\r\n      </ngb-accordion>\r\n    </div>\r\n\r\n    <div class=\"col-md-9\">\r\n      <div class=\"course-header\">\r\n        <div>\r\n          <h1 class=\"text-white display-4\">Урок 2.3</h1>\r\n        </div>\r\n      </div>\r\n      <div class=\"course-content\">\r\n        content\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/course/course.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CourseComponent = (function () {
    function CourseComponent() {
    }
    CourseComponent.prototype.ngOnInit = function () {
    };
    CourseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-course',
            template: __webpack_require__("./src/app/components/course/course.component.html"),
            styles: [__webpack_require__("./src/app/components/course/course.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CourseComponent);
    return CourseComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ".card-img-top{\r\n    background: #33393F;\r\n    height: 180px;\r\n}\r\n\r\n.col-sm-6, .col-md-4, .col-lg-3{\r\n    padding: 0;\r\n}\r\n\r\n.card{\r\n    margin: 2em .3em;\r\n}"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <br>\r\n    <h2 class=\"page-header\">Dashboard</h2>\r\n\r\n    <div class=\"card-deck row\">\r\n        <div class=\"col-sm-6 col-md-4 col-lg-3\">\r\n            <div class=\"card\">\r\n                <img class=\"card-img-top text-white\" src=\"...\" alt=\"Card image cap\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Основи веб розробки</h4>\r\n                    <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content\r\n                        is a little bit longer.</p>\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                    <small class=\"text-muted\">Last updated 3 mins ago</small>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-6 col-md-4 col-lg-3\">\r\n            <div class=\"card\">\r\n                <img class=\"card-img-top\" src=\"...\" alt=\"Card image cap\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Основи HTML</h4>\r\n                    <p class=\"card-text\">This card has supporting text below as a natural lead-in to additional content.</p>\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                    <small class=\"text-muted\">Last updated 3 mins ago</small>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-6 col-md-4 col-lg-3\">\r\n            <div class=\"card\">\r\n                <img class=\"card-img-top\" src=\"...\" alt=\"Card image cap\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Основи СSS</h4>\r\n                    <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This card\r\n                        has even longer content than the first to show that equal height action.</p>\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                    <small class=\"text-muted\">Last updated 3 mins ago</small>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-6 col-md-4 col-lg-3\">\r\n            <div class=\"card\">\r\n                <img class=\"card-img-top\" src=\"...\" alt=\"Card image cap\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Основи JavaScript</h4>\r\n                    <p class=\"card-text\">This card has supporting text below as a natural lead-in to additional content.</p>\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                    <small class=\"text-muted\">Last updated 3 mins ago</small>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-6 col-md-4 col-lg-3\">\r\n            <div class=\"card\">\r\n                <img class=\"card-img-top\" src=\"...\" alt=\"Card image cap\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Agile/SCRUM, GIT</h4>\r\n                    <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This card\r\n                        has even longer content than the first to show that equal height action.</p>\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                    <small class=\"text-muted\">Last updated 3 mins ago</small>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-6 col-md-4 col-lg-3\">\r\n            <div class=\"card\">\r\n                <img class=\"card-img-top\" src=\"...\" alt=\"Card image cap\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Підготовка/пошук вакансії</h4>\r\n                    <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This card\r\n                        has even longer content than the first to show that equal height action.</p>\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                    <small class=\"text-muted\">Last updated 3 mins ago</small>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-6 col-md-4 col-lg-3\">\r\n            <div class=\"card\">\r\n                <img class=\"card-img-top\" src=\"...\" alt=\"Card image cap\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Тестова співбесіда</h4>\r\n                    <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This card\r\n                        has even longer content than the first to show that equal height action.</p>\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                    <small class=\"text-muted\">Last updated 3 mins ago</small>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ".footer {\r\n    bottom: 0;\r\n    width: 100%;\r\n    background-color: #2d3033;\r\n    color: #aebdc1;\r\n    font-size: 80%;\r\n    padding: 3em 0;\r\n    margin-top: -20.5em;\r\n  }\r\n\r\n  .footer-links{\r\n    margin-top: .5em;\r\n  }\r\n\r\n  .border-left{\r\n    border-left:solid #47585c 1px; \r\n  }\r\n\r\n  .nav-header{         \r\n    margin-bottom: .7em;\r\n  }\r\n\r\n  .nav-link{                                    \r\n    text-decoration: none;\r\n    -webkit-transition: 0.2s ease-in-out;\r\n    transition: 0.2s ease-in-out;\r\n    color: inherit;\r\n    padding: .2rem 0;   \r\n    color: #aebdc1;   \r\n    font-weight: 500; \r\n  }\r\n\r\n  .nav-link:active, .nav-link:focus, .nav-link:hover {\r\n    color: #fff\r\n  }\r\n\r\n  .navbar-nav{\r\n    margin-bottom: .7em;\r\n  }"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer navbar-fixed-bottom\" role=\"contentinfo\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center text-muted\">\r\n      <div class=\"col\">\r\n        <div class=\"footer-links row\">\r\n          <section class=\"col\">\r\n            <ul class=\"navbar-nav mr-auto\">\r\n              <li class=\"list-item nav-header\">\r\n                Навчання\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                <a href=\"\" class=\"nav-link\">link</a>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                <a href=\"\" class=\"nav-link\">Допомогти?</a>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                <a href=\"\" class=\"nav-link\">Допомогти?</a>\r\n              </li>\r\n            </ul>\r\n          </section>\r\n          <section class=\"col\">\r\n            <ul class=\"navbar-nav mr-auto\">\r\n              <li class=\"nav-item nav-header\">\r\n                Про нас\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                <a href=\"\" class=\"nav-link\">Допомогти?</a>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                <a href=\"\" class=\"nav-link\">Допомогти?</a>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                <a href=\"\" class=\"nav-link\">Допомогти?</a>\r\n              </li>\r\n            </ul>\r\n          </section>\r\n          <section class=\"col\">\r\n            <ul class=\"navbar-nav mr-auto\">\r\n              <li class=\"nav-item nav-header\">\r\n                Допомогти?\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                <a href=\"\" class=\"nav-link\">Допомогти?</a>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                <a href=\"\" class=\"nav-link\">Допомогти?</a>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                <a href=\"\" class=\"nav-link\">Допомогти?</a>\r\n              </li>\r\n            </ul>\r\n          </section>\r\n        </div>\r\n        <br>\r\n        <div class=\"copyright\">\r\n          © 2017 створено by valpioner.\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col border-left pl-4\">\r\n        <div class=\"logo\">\r\n          <img src=\"/assets/itgeneration_logo2.png\" alt=\"itgeneration.com.ua\">\r\n        </div>\r\n        <br>\r\n        <p><b>IT Generation</b> - навчальний ресурс де ви легко з повного нуля зможете вивчити веб-програмування на основі тренінг-курсів,\r\n          відео-уроків, навчальних матеріалів та практичних занять. </p>\r\n        <p>Наша основна задача - підняти вас до рівня <b>Junior Web Developer</b> і підготувати вас до першої співбесіди.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".page-header{\r\n    background: #c0ecf4;\r\n    background-image: url('page-header.3173497983e35dc9724c.jpg');\r\n    background-size: 600px 267px;\r\n    margin-bottom: 0;\r\n}\r\n\r\n.timeline{\r\n    position: relative;\r\n    padding: 5em 0;\r\n    font-weight: lighter;\r\n}\r\n\r\n.timeline-header{    \r\n    margin-bottom: 2em;\r\n}\r\n\r\n.timeline-section{\r\n    padding-top: 2.5em;\r\n    position: relative;\r\n}\r\n\r\n.reverse{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: reverse;\r\n        -ms-flex-direction: row-reverse;\r\n            flex-direction: row-reverse;\r\n}\r\n\r\n.timeline-section-col{\r\n    padding-left: 2.5em;\r\n    padding-right: 2.5em;\r\n}\r\n\r\n.timeline-section-col h2{\r\n    padding-top: 1em;\r\n    font-weight: lighter;\r\n}\r\n\r\n.btn-font-weight-normal{\r\n    font-weight: normal;\r\n}\r\n\r\n@media screen and (min-width: 48em) {\r\n    .timeline-section-col h2{\r\n        padding-top: 0;\r\n    }\r\n\r\n    .horizontal-line::before{\r\n        background: #C9CED0;\r\n        bottom: 0;\r\n        content: \"\";\r\n        left: 50%;\r\n        margin-left: -1px;\r\n        position: absolute;\r\n        right: 50%;\r\n        top: 0;\r\n        width: 1px;\r\n    }\r\n    .timeline-section::before{\r\n        background: #fff;\r\n        border: 4px solid #9DB0B5;\r\n        border-radius: 50%;\r\n        content: \"\";\r\n        height: 20px;\r\n        left: 50%;\r\n        margin: 1.25em 0 0 -10px;\r\n        position: absolute;\r\n        top: 30px;\r\n        width: 20px;\r\n        z-index: 1;\r\n    }\r\n    .timeline-section--first::after{\r\n        background: white;\r\n        bottom: 0;\r\n        content: \"\";\r\n        left: 50%;\r\n        margin-left: -1px;\r\n        position: absolute;\r\n        right: 50%;\r\n        top: 0;\r\n        width: 1px;\r\n        height: 50px;\r\n    }\r\n    .timeline-section--last::after{\r\n        background: white;\r\n        bottom: 0;\r\n        content: \"\";\r\n        left: 50%;\r\n        margin-left: -1px;\r\n        position: absolute;\r\n        right: 50%;\r\n        width: 1px;\r\n        height: 75%\r\n    }\r\n}\r\n\r\n.center{\r\n    display: block;\r\n    margin: 0 auto;\r\n}"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid page-header\">\r\n  <div class=\"container text-center text-white\">\r\n    <p class=\"lead\">Text1</p>\r\n    <h1 class=\"display-4 text-white\"><b>Text2Text2Text2</b></h1>\r\n    <br>\r\n    <div>\r\n      <a class=\"btn btn-grey btn--l btn-font-weight-normal\" [routerLink]=\"['/register']\">Безкоштовно почати курс</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container-fluid bg-white\">\r\n  <div class=\"container\">\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__course_course_component__ = __webpack_require__("./src/app/components/course/course.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__course_course_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard_component__ = __webpack_require__("./src/app/components/dashboard/dashboard.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__register_register_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile_component__ = __webpack_require__("./src/app/components/profile/profile.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_5__profile_profile_component__["a"]; });








/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.login{\r\n    /* position: absolute;\r\n    top: 30%;\r\n    left: 50%;\r\n    margin: -150px 0 0 -150px; */\r\n    width: 300px;\r\n    height: 300px;  \r\n    margin: 4em auto;  \r\n}\r\n\r\n.links{\r\n    font-size: 90%;\r\n}\r\n\r\nbutton[type=\"submit\"]:disabled {\r\n    background: #8D8E8F;\r\n}"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login text-center\">\r\n  <h1>Login</h1>\r\n  <br>\r\n\r\n  <!-- TEMPLATE-DRIVEN FORM -->\r\n  <form (ngSubmit)=\"onLoginSubmit(loginForm)\" #loginForm=\"ngForm\" novalidate>\r\n    <fieldset>\r\n      <div class=\"form-group\">\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"*Username\" [(ngModel)]=\"username\" name=\"username\" required minlength=\"3\"\r\n          #usernameVar=\"ngModel\" [ngClass]=\"{'is-invalid': (usernameVar.touched || usernameVar.dirty) && !usernameVar.valid }\">\r\n        <small class=\"text-danger\" *ngIf=\"(usernameVar.touched || usernameVar.dirty) && usernameVar.errors\">\r\n          <span *ngIf=\"usernameVar.errors.required\">\r\n            Please enter your username.\r\n          </span>\r\n          <span *ngIf=\"usernameVar.errors.minlength\">\r\n            Username must be longer than 3 characters.\r\n          </span>\r\n        </small>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <input type=\"password\" class=\"form-control\" placeholder=\"*Password\" [(ngModel)]=\"password\" name=\"password\" required minlength=\"3\"\r\n          #passwordVar=\"ngModel\" [ngClass]=\"{'is-invalid': (passwordVar.touched || passwordVar.dirty) && !passwordVar.valid }\">\r\n        <small class=\"text-danger\" *ngIf=\"(passwordVar.touched || passwordVar.dirty) && passwordVar.errors\">\r\n          <span *ngIf=\"passwordVar.errors.required\">\r\n            Please enter your password.\r\n          </span>\r\n          <span *ngIf=\"passwordVar.errors.minlength\">\r\n            Password must be longer than 3 characters.\r\n          </span>\r\n        </small>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <button type=\"submit\" class=\"btn btn-block\" [disabled]=\"!loginForm.valid\">\r\n          Login\r\n        </button>\r\n      </div>\r\n    </fieldset>\r\n  </form>\r\n  <br>\r\n\r\n  <div class=\"links text-left\">\r\n    Not registered?\r\n    <a [routerLink]=\"['/register']\">Create an account</a>\r\n    <p>Forgot password?\r\n      <a [routerLink]=\"['/forgotPassword']\">Click here</a>\r\n    </p>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user__ = __webpack_require__("./src/app/models/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(authService, router, FlashMessage) {
        this.authService = authService;
        this.router = router;
        this.FlashMessage = FlashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = new __WEBPACK_IMPORTED_MODULE_4__models_user__["a" /* User */](null, //id
        null, //name
        null, //email
        this.username, this.password);
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.FlashMessage.show('You are now logged in', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.FlashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ".profile{\r\n    cursor: pointer;\r\n    margin-left: .5em;\r\n}\r\n\r\n.fa-user, .fa-comment{\r\n    font-size: 150%;\r\n}\r\n\r\n.profile-dropdown{\r\n    left: -3em;\r\n}\r\n\r\n.dropdown-menu-right{\r\n    left: auto !important;\r\n    right: -1em !important;\r\n}\r\n\r\n.dropdown-menu{\r\n    right: -1.25em;\r\n}\r\n\r\n.dropdown-menu::after {\r\n    border: 8px solid transparent;\r\n    border-bottom: 8px solid #fff;\r\n    border-top: 0;\r\n    bottom: auto;\r\n    content: '';\r\n    display: block;\r\n    height: 0;\r\n    left: auto;\r\n    margin: -8px 0 0 -8px;\r\n    margin-top: 0;\r\n    position: absolute;\r\n    right: 1.25em;\r\n    top: 50%;\r\n    width: 0;\r\n    top: -8px;\r\n    bottom: auto;\r\n}"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\r\n\r\n\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand\" href=\"#\">\r\n      <div class=\"logo\">\r\n        <img src=\"/assets/itgeneration_logo2.png\" alt=\"itgeneration.com.ua\">\r\n      </div>\r\n    </a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\"\r\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <!-- <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/']\">Курс <span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link dropdown-toggle\" href=\"http://example.com\" id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n            aria-expanded=\"false\">FAQ</a>\r\n          <div class=\"dropdown-menu\" aria-labelledby=\"dropdown01\">\r\n            <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n          </div>\r\n        </li> -->\r\n      </ul>\r\n\r\n\r\n      <ul class=\"navbar-nav\">\r\n        <!-- <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard</a>\r\n        </li> -->\r\n        <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/login']\">Login</a>\r\n        </li>\r\n        <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/register']\">Register</a>\r\n        </li>\r\n        <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\">\r\n          <a class=\"nav-link fa fa-comment\">\r\n          </a>\r\n        </li>\r\n        <li *ngIf=\"authService.loggedIn()\" class=\"nav-item profile\" ngbDropdown>\r\n          <div class=\"btn-group\">\r\n            <a class=\"nav-link\" id=\"profileDropDown\" ngbDropdownToggle>\r\n              <i class=\"fa fa-user\"></i>\r\n            </a>\r\n            <div ngbDropdownMenu aria-labelledby=\"ngbDropdownToggle\" class=\"dropdown-menu dropdown-menu-right\">\r\n              <a class=\"dropdown-item\" [routerLink]=\"['/dashboard']\">Dashboard</a>\r\n              <a class=\"dropdown-item\" [routerLink]=\"['/course']\">Course</a>\r\n              <div class=\"dropdown-divider\"></div>\r\n              <a class=\"dropdown-item\" [routerLink]=\"['/profile']\">Profile</a>\r\n              <a *ngIf=\"authService.isAdmin()\" class=\"dropdown-item\" [routerLink]=\"['/admin']\">Admin</a> \r\n              <div class=\"dropdown-divider\"></div>\r\n              <a class=\"dropdown-item\" (click)=\"onLogoutClick()\">Logout</a>\r\n            </div>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n      \r\n    </div>\r\n  </div>\r\n\r\n\r\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, FlashMessage) {
        this.authService = authService;
        this.router = router;
        this.FlashMessage = FlashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.FlashMessage.show('You are logged out', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <div *ngIf=\"user\">\r\n    <h2 class=\"page-header\">{{user.name}}</h2>\r\n    <ul class=\"list-group\">\r\n      <li class=\"list-group-item\">Username: {{user.username}}</li>\r\n      <li class=\"list-group-item\">Email: {{user.email}}</li>\r\n    </ul>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ".register{\r\n    width: 300px;\r\n    margin: 4em auto;  \r\n}\r\n\r\n.links{\r\n    font-size: 90%;\r\n}\r\n\r\nbutton[type=\"submit\"]:disabled {\r\n    background: #8D8E8F;\r\n}"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"register text-center\">\r\n  <h1>Register</h1>\r\n  <br>\r\n\r\n  <!-- REACTIVE FORM -->\r\n  <form (ngSubmit)=\"onRegisterSubmit()\" novalidate [formGroup]=\"userForm\">\r\n    <fieldset>\r\n      <div class=\"form-group\">\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"*Name\" formControlName=\"name\" [ngClass]=\"{'is-invalid': (userForm.get('name').touched || userForm.get('name').dirty) && !userForm.get('name').valid }\"\r\n        />\r\n        <small class=\"text-danger\" *ngIf=\"(userForm.get('name').touched || userForm.get('name').dirty) && userForm.get('name').errors\">\r\n          <span *ngIf=\"userForm.get('name').errors.required\">\r\n            Please enter your first name.\r\n          </span>\r\n          <span *ngIf=\"userForm.get('name').errors.minlength\">\r\n            The first name must be longer than 3 characters.\r\n          </span>\r\n        </small>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"*Username\" formControlName=\"username\" [ngClass]=\"{'is-invalid': (userForm.get('username').touched || userForm.get('username').dirty) && !userForm.get('username').valid }\"\r\n        />\r\n        <small class=\"text-danger\" *ngIf=\"(userForm.get('username').touched || userForm.get('username').dirty) && userForm.get('username').errors\">\r\n          <span *ngIf=\"userForm.get('username').errors.required\">\r\n            Please enter your username.\r\n          </span>\r\n          <span *ngIf=\"userForm.get('username').errors.minlength\">\r\n            Username must be longer than 3 characters.\r\n          </span>\r\n        </small>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <input type=\"email\" class=\"form-control\" placeholder=\"*Email\" formControlName=\"email\" [ngClass]=\"{'is-invalid': emailMessage}\"\r\n        />\r\n        <small class=\"text-danger\" *ngIf=\"emailMessage\">\r\n          {{emailMessage}}\r\n        </small>\r\n      </div>\r\n\r\n      <div formGroupName=\"passwordGroup\" [ngClass]=\"{'is-invalid': userForm.get('passwordGroup').errors}\">\r\n        <div class=\"form-group\">\r\n          <input type=\"password\" class=\"form-control\" placeholder=\"*Password\" formControlName=\"password\" [ngClass]=\"{'is-invalid': passwordMessage}\"\r\n          />\r\n          <small class=\"text-danger\" *ngIf=\"passwordMessage\">\r\n            {{passwordMessage}}\r\n          </small>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <input type=\"password\" class=\"form-control\" placeholder=\"*Confirm Password\" formControlName=\"confirmPassword\" [ngClass]=\"{'is-invalid': confirmPasswordMessage }\"\r\n          />\r\n          <small class=\"text-danger\" *ngIf=\"confirmPasswordMessage || userForm.get('passwordGroup').errors \">\r\n            <span *ngIf=\"confirmPasswordMessage\">\r\n              {{confirmPasswordMessage}}\r\n            </span>\r\n            <span *ngIf=\"userForm.get('passwordGroup').errors?.passwordMatch\">\r\n              The confirmation does not match the password.\r\n            </span>\r\n          </small>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <div class=\"form-check\">\r\n          <label class=\"form-check-label\">\r\n            <input type=\"checkbox\" class=\"form-check-input\" formControlName=\"isAdmin\"> is Admin\r\n          </label>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"userForm.get('isAdmin').value\">\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"*Enter admin code\" formControlName=\"adminConfirmationCode\" [ngClass]=\"{'is-invalid': (userForm.get('adminConfirmationCode').touched || userForm.get('adminConfirmationCode').dirty) && !userForm.get('adminConfirmationCode').valid }\">\r\n\r\n          <small class=\"text-danger\" *ngIf=\"(userForm.get('adminConfirmationCode').touched || userForm.get('adminConfirmationCode').dirty) && userForm.get('adminConfirmationCode').errors\">\r\n            <span *ngIf=\"userForm.get('adminConfirmationCode').errors.required\">\r\n              Please enter admin confirmation code.\r\n            </span>\r\n            <span *ngIf=\"userForm.get('adminConfirmationCode').errors.adminCodeMatch\">\r\n              Wrong admin confirmation code.\r\n            </span>\r\n          </small>\r\n        </div>\r\n      </div>\r\n\r\n      <button type=\"submit\" class=\"btn btn-block\" [disabled]=\"!userForm.valid\">Register</button>\r\n    </fieldset>\r\n  </form>\r\n\r\n  <!-- OLD FORM -->\r\n  <!-- <form (submit)=\"onRegisterSubmit()\">\r\n    <input type=\"text\" class=\"form-control register-input\" placeholder=\"Name\" [(ngModel)]=\"name\" name=\"name\" required=\"required\">\r\n    <input type=\"text\" class=\"form-control register-input\" placeholder=\"Username\" [(ngModel)]=\"username\" name=\"username\" required=\"required\">\r\n    <input type=\"text\" class=\"form-control register-input\" placeholder=\"Email\" [(ngModel)]=\"email\" name=\"email\" required=\"required\">\r\n    <input type=\"password\" class=\"form-control register-input\" placeholder=\"Password\" [(ngModel)]=\"password\" name=\"password\"\r\n      required=\"required\">\r\n    <div class=\"form-check\">\r\n      <label class=\"form-check-label\">\r\n        <input class=\"form-check-input\" type=\"checkbox\" [checked]=\"isAdmin\" (change)=\"isAdmin = !isAdmin\"> is Admin\r\n      </label>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-block\" value=\"Register\">Register</button>\r\n  </form> -->\r\n\r\n  <br>\r\n  <div class=\"links text-left\">\r\n    Already have an account?\r\n    <a [routerLink]=\"['/login']\">Login here</a>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__decorators__ = __webpack_require__("./src/app/decorators/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validators__ = __webpack_require__("./src/app/validators/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_user__ = __webpack_require__("./src/app/models/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessage, authService, router, fb) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
        this.fb = fb;
        this.subscriptions = [];
        this.emailValidationMessages = {
            required: 'Please enter your email.',
            pattern: 'Please enter valid email'
        };
        this.passwordValidationMessages = {
            required: 'Please enter your password.',
            minlength: 'Minimum 3 characters.'
        };
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.watchValueChanges();
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        if (!this.userForm.valid || this.userForm.errors)
            return;
        var formData = this.userForm.value;
        var user = new __WEBPACK_IMPORTED_MODULE_9__models_user__["a" /* User */](null, formData.name, formData.email, formData.username, formData.passwordGroup.password, formData.isAdmin);
        // Register uesr
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and can log in', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
        });
    };
    RegisterComponent.prototype.buildForm = function () {
        this.userForm = this.fb.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(3)]],
            username: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(3)]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]],
            passwordGroup: this.fb.group({
                password: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(3)]],
                confirmPassword: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(3)]],
            }, { validator: __WEBPACK_IMPORTED_MODULE_4__validators__["a" /* CustomValidators */].passwordMatcher }),
            isAdmin: false,
            adminConfirmationCode: [''],
        });
    };
    RegisterComponent.prototype.watchValueChanges = function () {
        var _this = this;
        var emailControl = this.userForm.get('email');
        var emailSubscription = emailControl.valueChanges
            .debounceTime(1000)
            .subscribe(function (value) { return _this.emailMessage = _this.defineErrorMessage(emailControl, _this.emailValidationMessages); });
        var passwordControl = this.userForm.get('passwordGroup.password');
        var passwordSubscription = passwordControl.valueChanges
            .debounceTime(1000)
            .subscribe(function (value) { return _this.passwordMessage = _this.defineErrorMessage(passwordControl, _this.passwordValidationMessages); });
        var confirmPasswordControl = this.userForm.get('passwordGroup.confirmPassword');
        var confirmPasswordSubscription = confirmPasswordControl.valueChanges
            .debounceTime(1000)
            .subscribe(function (value) { return _this.confirmPasswordMessage = _this.defineErrorMessage(confirmPasswordControl, _this.passwordValidationMessages); });
        var isAdminControl = this.userForm.get('isAdmin');
        var isAdminSubscription = isAdminControl.valueChanges
            .subscribe(function (value) { return _this.setAdminConfirmationCode(value); });
        this.subscriptions.push(passwordSubscription);
        this.subscriptions.push(confirmPasswordSubscription);
        this.subscriptions.push(isAdminSubscription);
    };
    RegisterComponent.prototype.defineErrorMessage = function (c, validationMessages) {
        if ((c.touched || c.dirty) && c.errors) {
            return Object
                .keys(c.errors)
                .map(function (key) { return validationMessages[key]; })
                .join(' ');
        }
    };
    RegisterComponent.prototype.setAdminConfirmationCode = function (isAdminChecked) {
        var adminConfirmationCodeControl = this.userForm.get('adminConfirmationCode');
        adminConfirmationCodeControl.setValue('');
        if (isAdminChecked) {
            adminConfirmationCodeControl.reset();
            adminConfirmationCodeControl.setValidators([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__validators__["a" /* CustomValidators */].adminConfirmationCodeMarcher]);
        }
        else {
            adminConfirmationCodeControl.clearValidators();
        }
        adminConfirmationCodeControl.updateValueAndValidity();
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/components/register/register.component.html"),
            styles: [__webpack_require__("./src/app/components/register/register.component.css")]
        }),
        Object(__WEBPACK_IMPORTED_MODULE_3__decorators__["a" /* AutoUnsubscribe */])('subscriptions'),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_8__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/decorators/auto-unsubscribe.decorator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = AutoUnsubscribe;
function AutoUnsubscribe(subName, isArray) {
    if (subName === void 0) { subName = 'sub'; }
    if (isArray === void 0) { isArray = true; }
    return function (constructor) {
        var original = constructor.prototype.ngOnDestroy;
        constructor.prototype.ngOnDestroy = function () {
            var sub = this[subName];
            if (sub && isArray) {
                sub.forEach(function (s) { return s.unsubscribe(); });
            }
            else if (sub && !isArray) {
                sub.unsubscribe();
            }
            original
                && typeof original === 'function'
                && original.apply(this, arguments);
            console.log("Unsibscribe decorator is called. Subscription name is: " + subName + ". Subscription is array: " + isArray);
        };
    };
}


/***/ }),

/***/ "./src/app/decorators/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auto_unsubscribe_decorator__ = __webpack_require__("./src/app/decorators/auto-unsubscribe.decorator.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auto_unsubscribe_decorator__["a"]; });



/***/ }),

/***/ "./src/app/guards/admin.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminGuard = (function () {
    function AdminGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AdminGuard.prototype.canLoad = function (route) {
        return this.authService.isAdmin();
    };
    AdminGuard.prototype.canActivate = function () {
        return this.authService.isAdmin();
    };
    AdminGuard.prototype.canActivateChild = function () {
        return this.authService.isAdmin();
    };
    AdminGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canLoad = function (route) {
        // const url = `/${route.path}`;
        // return this.checkLogin(url);
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard.prototype.canActivateChild = function (route, state) {
        // console.log('canActivateChild Guard is called');
        // const url: string = state.url;
        // return this.checkLogin(url);
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/can-deactivate.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanDeactivateGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CanDeactivateGuard = (function () {
    function CanDeactivateGuard() {
    }
    CanDeactivateGuard.prototype.canDeactivate = function (component) {
        return component.canDeactivate ? component.canDeactivate() : true;
    };
    CanDeactivateGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], CanDeactivateGuard);
    return CanDeactivateGuard;
}());



/***/ }),

/***/ "./src/app/guards/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_guard__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__admin_guard__ = __webpack_require__("./src/app/guards/admin.guard.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__admin_guard__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__can_deactivate_guard__ = __webpack_require__("./src/app/guards/can-deactivate.guard.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__can_deactivate_guard__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_resolve_guard__ = __webpack_require__("./src/app/guards/user-resolve.guard.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__user_resolve_guard__["a"]; });






/***/ }),

/***/ "./src/app/guards/user-resolve.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserResolveGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user__ = __webpack_require__("./src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_manage_users_services__ = __webpack_require__("./src/app/admin/manage-users/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserResolveGuard = (function () {
    function UserResolveGuard(UserService, router) {
        this.UserService = UserService;
        this.router = router;
    }
    UserResolveGuard.prototype.resolve = function (route) {
        var _this = this;
        var id = route.params['id'];
        if (id) {
            return this.UserService.getUser(id)
                .catch(function () {
                _this.router.navigate(['/admin/users']);
                return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of(null);
            });
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */](null, null, null, null, null));
        }
    };
    UserResolveGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__admin_manage_users_services__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], UserResolveGuard);
    return UserResolveGuard;
}());



/***/ }),

/***/ "./src/app/models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(_id, name, email, username, password, isAdmin) {
        this._id = _id;
        this.name = name;
        this.email = email;
        this.username = username;
        this.password = password;
        this.isAdmin = isAdmin;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import 'rxjs/add/operator/map';

var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3001/users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3001/users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3001/users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('token', token); //jwt looks here by default
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])();
    };
    AuthService.prototype.isAdmin = function () {
        return JSON.parse(localStorage.getItem('user')).isAdmin;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/custom-preloading-strategy.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomPreloadingStrategyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rxjs_extensions__ = __webpack_require__("./src/app/services/rxjs-extensions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CustomPreloadingStrategyService = (function () {
    function CustomPreloadingStrategyService() {
        this.preloadedModules = [];
    }
    CustomPreloadingStrategyService.prototype.preload = function (route, load) {
        if (route.data && route.data['preload']) {
            this.preloadedModules.push(route.path);
            return load();
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(null);
        }
    };
    CustomPreloadingStrategyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], CustomPreloadingStrategyService);
    return CustomPreloadingStrategyService;
}());



/***/ }),

/***/ "./src/app/services/dialog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DialogService = (function () {
    function DialogService() {
    }
    DialogService.prototype.confirm = function (message) {
        return new Promise(function (resolve) {
            resolve(window.confirm(message || 'Is it OK?'));
        });
    };
    ;
    DialogService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], DialogService);
    return DialogService;
}());



/***/ }),

/***/ "./src/app/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_preloading_strategy_service__ = __webpack_require__("./src/app/services/custom-preloading-strategy.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__custom_preloading_strategy_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__validate_service__["a"]; });





/***/ }),

/***/ "./src/app/services/interceptors.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimingInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TimingInterceptor = (function () {
    function TimingInterceptor() {
    }
    TimingInterceptor.prototype.intercept = function (req, next) {
        // request interceptor
        var clonedRequest;
        if (req.url.includes('getAllUsers')) {
            clonedRequest = req.clone({
                params: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpParams */]()
                    .set('ts_interceptor', Date.now().toString())
            });
            console.log(clonedRequest);
        }
        else {
            clonedRequest = req;
        }
        var started = Date.now();
        return next.handle(clonedRequest).do(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["f" /* HttpResponse */]) {
                var elapsed = Date.now() - started;
                console.log("responsetime: " + elapsed);
            }
        });
    };
    TimingInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], TimingInterceptor);
    return TimingInterceptor;
}());



/***/ }),

/***/ "./src/app/services/rxjs-extensions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
// Observable class extensions


// Observable operators










/***/ }),

/***/ "./src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/app/validators/custom.validators.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomValidators; });
var CustomValidators = (function () {
    function CustomValidators() {
    }
    CustomValidators.passwordMatcher = function (c) {
        var passwordControl = c.get('password');
        var passwordConfirmControl = c.get('confirmPassword');
        if (passwordControl.pristine || passwordConfirmControl.pristine) {
            return null;
        }
        if (passwordControl.value === passwordConfirmControl.value) {
            return null;
        }
        return { 'passwordMatch': true };
    };
    CustomValidators.adminConfirmationCodeMarcher = function (c) {
        if (c.pristine || c.value === 'admin') {
            return null;
        }
        return { 'adminCodeMatch': true };
    };
    return CustomValidators;
}());



/***/ }),

/***/ "./src/app/validators/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__custom_validators__ = __webpack_require__("./src/app/validators/custom.validators.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__custom_validators__["a"]; });



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map