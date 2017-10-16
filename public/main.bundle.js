webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<main class=\"content\" role=\"main\">\r\n  <flash-messages></flash-messages>\r\n  <router-outlet></router-outlet>\r\n</main>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_users_users_component__ = __webpack_require__("../../../../../src/app/components/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_course_course_component__ = __webpack_require__("../../../../../src/app/components/course/course.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'course', component: __WEBPACK_IMPORTED_MODULE_19__components_course_course_component__["a" /* CourseComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_users_users_component__["a" /* UsersComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_course_course_component__["a" /* CourseComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_16_angular2_flash_messages__["FlashMessagesModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_14__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_15__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* AuthGuard */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/course/course.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".course{\r\n    height: 100%;\r\n    padding-top: 2em;\r\n}\r\n\r\n.course-menu{\r\n    height: 100%;\r\n    padding: 0;\r\n}\r\n\r\n.course-header{\r\n    background: #343A40;\r\n    background-image: url(" + __webpack_require__("../../../../../src/assets/textures.png") + ");\r\n    background-size: 20%;\r\n    background-repeat: repeat;\r\n    border-radius: 5px;\r\n\r\n    text-align: center;\r\n    padding: 3em 0;\r\n}\r\n\r\n.course-content{\r\n    /* background: #27277B; */\r\n}\r\n\r\n.menu-module-header{\r\n    margin: .5em 0;\r\n    -ms-flex-wrap: nowrap;\r\n        flex-wrap: nowrap;\r\n}\r\n\r\n/deep/ .card-header{\r\n    padding: 0 !important;\r\n    cursor: pointer;\r\n}\r\n\r\n/deep/ .card-header a{\r\n    text-decoration: none;\r\n}\r\n\r\n/deep/ .card-body{\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.menu-module-item{\r\n    padding: .3em 0 .3em 3em;\r\n}\r\n\r\n.menu-module-item::before{    \r\n    width: 10px;\r\n    height: 10px;\r\n    content: \"\";\r\n    position: absolute;\r\n    left: 1.2em;\r\n    margin-top: .5em;\r\n    border-radius: 50%;\r\n    background: #C9CED0;\r\n}\r\n\r\n.menu-module-item:hover{\r\n    background: #F6F8F8;\r\n    cursor: pointer;\r\n}\r\n\r\n.menu-module-item a{\r\n    text-decoration: none;\r\n}\r\n\r\n.menu-module-content{\r\n    padding: 0;\r\n}\r\n\r\n.menu-module-content::after{\r\n    background: #C9CED0;\r\n    bottom: 0;\r\n    content: \"\";\r\n    left: 1.5em;\r\n    margin-left: -1px;\r\n    position: absolute;\r\n    right: 50%;\r\n    top: 0;\r\n    width: 2px;\r\n}\r\n\r\n.header-number{\r\n    line-height: 1.4em;\r\n    width: 3em;\r\n}\r\n\r\n.header-text{\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n    white-space: nowrap;\r\n}\r\n\r\n.header-icon{\r\n    padding: 0 1em;\r\n}\r\n\r\n.circle{\r\n    border-radius: 50%;\r\n    background-color: white;\r\n    border: .5px solid #1c91a8;\r\n    width: 1.5rem;\r\n    height: 1.5rem;\r\n    font-size: 70%;\r\n    margin: 0 auto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/course/course.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container h-100\">\r\n  <div class=\"row course h-100\">\r\n    <div class=\"col-md-3 course-menu\">\r\n\r\n      <ngb-accordion #acc=\"ngbAccordion\" activeIds=\"ngb-panel-0\" class=\"w-100\">\r\n\r\n        <ngb-panel>\r\n          <ng-template ngbPanelTitle>\r\n            <header class=\"row menu-module-header\">\r\n              <div class=\"text-center header-number\">\r\n                <div class=\"circle\">\r\n                  <span>1</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"header-text\">Основи веб розробки</div>\r\n              <div class=\"header-icon\">3</div>\r\n            </header>\r\n          </ng-template>\r\n          <ng-template ngbPanelContent>\r\n            <div class=\"row m-0\">\r\n              <div class=\"col menu-module-content\">\r\n                <div class=\"menu-module-item\">\r\n                  <a href=\"\">Урок 1.1</a>\r\n                </div>\r\n                <div class=\"menu-module-item\">\r\n                  <a href=\"\">Урок 1.2</a>\r\n                </div>\r\n                <div class=\"menu-module-item\">\r\n                  <a href=\"\">Урок 1.3</a>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </ng-template>\r\n        </ngb-panel>\r\n\r\n        <ngb-panel>\r\n          <ng-template ngbPanelTitle>\r\n            <header class=\"row menu-module-header\">\r\n              <div class=\"text-center header-number\">\r\n                <div class=\"circle\">\r\n                  <span>2</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"header-text\">Основи HTML</div>\r\n              <div class=\"header-icon\">3</div>\r\n            </header>\r\n          </ng-template>\r\n          <ng-template ngbPanelContent>\r\n            <div class=\"row m-0\">\r\n              <div class=\"col menu-module-content\">\r\n                <div class=\"menu-module-item\">\r\n                  <a href=\"\">Урок 2.1</a>\r\n                </div>\r\n                <div class=\"menu-module-item\">\r\n                  <a href=\"\">Урок 2.2</a>\r\n                </div>\r\n                <div class=\"menu-module-item\">\r\n                  <a href=\"\">Урок 2.3</a>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </ng-template>\r\n        </ngb-panel>\r\n\r\n        <ngb-panel [disabled]=\"true\">\r\n          <ng-template ngbPanelTitle>\r\n            <header class=\"row menu-module-header\">\r\n              <div class=\"text-center header-number\">\r\n                <div class=\"circle\">\r\n                  <span>3</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"header-text\">Основи CSS</div>\r\n              <div class=\"header-icon\">3</div>\r\n            </header>\r\n          </ng-template>\r\n          <ng-template ngbPanelContent>\r\n          </ng-template>\r\n        </ngb-panel>\r\n\r\n      </ngb-accordion>\r\n\r\n    </div>\r\n    <div class=\"col-md-9\">\r\n      <div class=\"course-header\">\r\n        <div>\r\n          <h1 class=\"text-white display-4\">Урок 2.3</h1>\r\n        </div>\r\n      </div>\r\n      <div class=\"course-content\">\r\n        content\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/course/course.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    return CourseComponent;
}());
CourseComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-course',
        template: __webpack_require__("../../../../../src/app/components/course/course.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/course/course.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CourseComponent);

//# sourceMappingURL=course.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h2 class=\"page-header\">Dashboard</h2>\r\n    <p>Welcome to dashboard</p>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\r\n    bottom: 0;\r\n    width: 100%;\r\n    background-color: #2d3033;\r\n    color: #aebdc1;\r\n    font-size: 80%;\r\n    padding: 3em 0;\r\n    margin-top: -20.5em;\r\n  }\r\n\r\n  .footer-links{\r\n    margin-top: .5em;\r\n  }\r\n\r\n  .border-left{\r\n    border-left:solid #47585c 1px; \r\n  }\r\n\r\n  .nav-header{         \r\n    margin-bottom: .7em;\r\n  } \r\n\r\n  .nav-link{                                    \r\n    text-decoration: none;\r\n    transition: 0.2s ease-in-out;\r\n    color: inherit;\r\n    padding: .2rem 0;   \r\n    color: #aebdc1;   \r\n    font-weight: 500; \r\n  } \r\n  \r\n  .nav-link:active, .nav-link:focus, .nav-link:hover {\r\n    color: #fff\r\n  }\r\n\r\n  .navbar-nav{\r\n    margin-bottom: .7em;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer navbar-fixed-bottom\" role=\"contentinfo\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center text-muted\">\r\n      <div class=\"col\">\r\n        <div class=\"footer-links row\">\r\n          <section class=\"col\">\r\n            <ul class=\"navbar-nav mr-auto\">\r\n              <li class=\"list-item nav-header\">\r\n                Навчання\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                <a href=\"\" class=\"nav-link\">link</a>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                <a href=\"\" class=\"nav-link\">Допомогти?</a>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                <a href=\"\" class=\"nav-link\">Допомогти?</a>\r\n              </li>\r\n            </ul>\r\n          </section>\r\n          <section class=\"col\">\r\n            <ul class=\"navbar-nav mr-auto\">\r\n              <li class=\"nav-item nav-header\">\r\n                Про нас\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                <a href=\"\" class=\"nav-link\">Допомогти?</a>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                <a href=\"\" class=\"nav-link\">Допомогти?</a>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                <a href=\"\" class=\"nav-link\">Допомогти?</a>\r\n              </li>\r\n            </ul>\r\n          </section>\r\n          <section class=\"col\">\r\n            <ul class=\"navbar-nav mr-auto\">\r\n              <li class=\"nav-item nav-header\">\r\n                Допомогти?\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                <a href=\"\" class=\"nav-link\">Допомогти?</a>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                <a href=\"\" class=\"nav-link\">Допомогти?</a>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                <a href=\"\" class=\"nav-link\">Допомогти?</a>\r\n              </li>\r\n            </ul>\r\n          </section>\r\n        </div>\r\n        <br>\r\n        <div class=\"copyright\">\r\n          © 2017 створено by valpioner.\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col border-left pl-4\">\r\n        <div class=\"logo\">\r\n          <img src=\"/assets/valpioner.png\" alt=\"valpioner\">\r\n        </div>\r\n        <br>\r\n        <p><b>Valpioner</b> - навчальний ресурс де ви легко з повного нуля зможете вивчити веб-програмування на основі тренінг-курсів,\r\n          відео-уроків, навчальних матеріалів та практичних занять. </p>\r\n        <p>Наша основна задача - підняти вас до рівня <b>Junior Web Developer</b> і підготувати вас до першої співбесіди.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-header{\r\n    background: #c0ecf4;\r\n    background-image: url(" + __webpack_require__("../../../../../src/assets/page-header.jpg") + ");\r\n    background-size: 600px 267px;\r\n}\r\n\r\n.timeline{\r\n    position: relative;\r\n    padding: 5em 0;\r\n    font-weight: lighter;\r\n}\r\n\r\n.timeline-header{    \r\n    margin-bottom: 2em;\r\n}\r\n\r\n.timeline-section{\r\n    padding-top: 2.5em;\r\n    position: relative;\r\n}\r\n\r\n.reverse{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: reverse;\r\n        -ms-flex-direction: row-reverse;\r\n            flex-direction: row-reverse;\r\n}\r\n\r\n.timeline-section-col{\r\n    padding-left: 2.5em;\r\n    padding-right: 2.5em;\r\n}\r\n\r\n.timeline-section-col h2{\r\n    padding-top: 1em;\r\n    font-weight: lighter;\r\n}\r\n\r\n.btn-font-weight-normal{\r\n    font-weight: normal;\r\n}\r\n\r\n@media screen and (min-width: 48em) {\r\n    .timeline-section-col h2{\r\n        padding-top: 0;\r\n    }\r\n\r\n    .horizontal-line::before{\r\n        background: #C9CED0;\r\n        bottom: 0;\r\n        content: \"\";\r\n        left: 50%;\r\n        margin-left: -1px;\r\n        position: absolute;\r\n        right: 50%;\r\n        top: 0;\r\n        width: 1px;\r\n    }\r\n    .timeline-section::before{\r\n        background: #fff;\r\n        border: 4px solid #9DB0B5;\r\n        border-radius: 50%;\r\n        content: \"\";\r\n        height: 20px;\r\n        left: 50%;\r\n        margin: 1.25em 0 0 -10px;\r\n        position: absolute;\r\n        top: 30px;\r\n        width: 20px;\r\n        z-index: 1;\r\n    }\r\n    .timeline-section--first::after{\r\n        background: white;\r\n        bottom: 0;\r\n        content: \"\";\r\n        left: 50%;\r\n        margin-left: -1px;\r\n        position: absolute;\r\n        right: 50%;\r\n        top: 0;\r\n        width: 1px;\r\n        height: 50px;\r\n    }\r\n    .timeline-section--last::after{\r\n        background: white;\r\n        bottom: 0;\r\n        content: \"\";\r\n        left: 50%;\r\n        margin-left: -1px;\r\n        position: absolute;\r\n        right: 50%;\r\n        width: 1px;\r\n        height: 75%\r\n    }\r\n}\r\n\r\n.center{\r\n    display: block;\r\n    margin: 0 auto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid page-header\">\r\n  <div class=\"container text-center text-white\">\r\n    <p class=\"lead\">Від нуля до посади</p>\r\n    <h1 class=\"display-4 text-white\"><b>Junior Software Engineer</b></h1>\r\n    <br>\r\n    <div>\r\n      <a class=\"btn btn-grey btn--l btn-font-weight-normal\" [routerLink]=\"['/register']\">Почати безкоштовно курс</a>\r\n      <!-- <a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Register</a>\r\n      <a class=\"btn btn-default\" [routerLink]=\"['/login']\">Login</a> -->\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <h3>Express Backend</h3>\r\n      <p>A rock solid Node.js/Express server using Mongoose to organize models and query the database</p>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <h3>Angular-CLI</h3>\r\n      <p>Angular-CLI to generate components, services and more. Local dev server and easy compilation</p>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <h3>JWT Tokens</h3>\r\n      <p>Full featured authentication using JSON web tokens. Login and store user data</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container-fluid bg-white\">\r\n  <div class=\"container\">\r\n    <div class=\"row timeline\">\r\n      <div class=\"col-md-12 timeline-header text-center\">\r\n        <h2>\r\n          З чого складається курс?\r\n        </h2>\r\n      </div>\r\n      <div class=\"horizontal-line col-md-12\">\r\n        <div class=\"row timeline-section reverse timeline-section--first\">\r\n          <div class=\"col-md-6 timeline-section-col\">\r\n            <svg class=\"center\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"288px\" height=\"192px\" viewBox=\"0 0 288 192\">\r\n              <defs></defs>\r\n              <g>\r\n                <g>\r\n                  <linearGradient id=\"watch_SVGID_1_\" gradientUnits=\"userSpaceOnUse\" x1=\"-2428.7991\" y1=\"-7487.1206\" x2=\"-2428.7991\" y2=\"-7528.0908\"\r\n                    gradientTransform=\"matrix(0.7071 -0.7071 0.7071 0.7071 7278.0991 3698.886)\">\r\n                    <stop offset=\"0\" style=\"stop-color:#C0D84E\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#5CBC6A\"></stop>\r\n                  </linearGradient>\r\n                  <path fill=\"url(#watch_SVGID_1_)\" d=\"M252,78.7c-16,16-16,41.9,0,57.9C268,120.6,268,94.7,252,78.7z\"></path>\r\n                  <path fill=\"#5CBC6A\" d=\"M252,136.6V78.7C236,94.7,236,120.6,252,136.6z\"></path>\r\n                </g>\r\n                <g>\r\n                  <linearGradient id=\"watch_SVGID_2_\" gradientUnits=\"userSpaceOnUse\" x1=\"270\" y1=\"136\" x2=\"270\" y2=\"100\">\r\n                    <stop offset=\"0\" style=\"stop-color:#C0D84E\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#5CBC6A\"></stop>\r\n                  </linearGradient>\r\n                  <path fill=\"url(#watch_SVGID_2_)\" d=\"M288,100c-19.9,0-36,16.1-36,36C271.9,136,288,119.9,288,100z\"></path>\r\n                  <path fill=\"#5CBC6A\" d=\"M252,136l36-36C268.1,100,252,116.1,252,136z\"></path>\r\n                </g>\r\n                <g>\r\n                  <linearGradient id=\"watch_SVGID_3_\" gradientUnits=\"userSpaceOnUse\" x1=\"232\" y1=\"164\" x2=\"232\" y2=\"136\">\r\n                    <stop offset=\"0\" style=\"stop-color:#F15B51\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#F89E2B\"></stop>\r\n                  </linearGradient>\r\n                  <rect x=\"208\" y=\"136\" fill=\"url(#watch_SVGID_3_)\" width=\"48\" height=\"28\"></rect>\r\n                  <rect x=\"256\" y=\"136\" fill=\"#F15B51\" width=\"16\" height=\"28\"></rect>\r\n                </g>\r\n                <g>\r\n                  <path fill=\"#B1BFC3\" d=\"M192,160c0,2.2-1.8,4-4,4s-4-1.8-4-4\"></path>\r\n                  <polygon fill=\"#B1BFC3\" points=\"192,160 144,160 136,128 184,128 \"></polygon>\r\n                  <linearGradient id=\"watch_SVGID_4_\" gradientUnits=\"userSpaceOnUse\" x1=\"128\" y1=\"160\" x2=\"184\" y2=\"160\">\r\n                    <stop offset=\"0\" style=\"stop-color:#F1F2F3\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#B1BFC3\"></stop>\r\n                  </linearGradient>\r\n                  <rect x=\"128\" y=\"156\" fill=\"url(#watch_SVGID_4_)\" width=\"56\" height=\"8\"></rect>\r\n                  <rect x=\"184\" y=\"160\" fill=\"#B1BFC3\" width=\"4\" height=\"4\"></rect>\r\n                </g>\r\n                <rect x=\"264\" y=\"164\" fill=\"#F89E2B\" width=\"16\" height=\"12\"></rect>\r\n                <linearGradient id=\"watch_SVGID_5_\" gradientUnits=\"userSpaceOnUse\" x1=\"120\" y1=\"184\" x2=\"248\" y2=\"184\">\r\n                  <stop offset=\"0\" style=\"stop-color:#FFCF30\"></stop>\r\n                  <stop offset=\"1\" style=\"stop-color:#F89E2B\"></stop>\r\n                </linearGradient>\r\n                <rect x=\"120\" y=\"176\" fill=\"url(#watch_SVGID_5_)\" width=\"128\" height=\"16\"></rect>\r\n                <rect x=\"120\" y=\"176\" fill=\"#F89E2B\" width=\"128\" height=\"8\"></rect>\r\n                <rect x=\"120\" y=\"164\" fill=\"#FFCF30\" width=\"128\" height=\"12\"></rect>\r\n                <g>\r\n                  <path fill=\"#B1BFC3\" d=\"M72,136c0,4.4,3.6,8,8,8h168c4.4,0,8-3.6,8-8V24c0-4.4-3.6-8-8-8H80c-4.4,0-8,3.6-8,8V136z\"></path>\r\n                  <linearGradient id=\"watch_SVGID_6_\" gradientUnits=\"userSpaceOnUse\" x1=\"156\" y1=\"120\" x2=\"156\" y2=\"16\">\r\n                    <stop offset=\"0\" style=\"stop-color:#3C3D46\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#5D5B6A\"></stop>\r\n                  </linearGradient>\r\n                  <path fill=\"url(#watch_SVGID_6_)\" d=\"M240,16H72c-4.4,0-8,3.6-8,8v96h184V24C248,19.6,244.4,16,240,16z\"></path>\r\n                  <linearGradient id=\"watch_SVGID_7_\" gradientUnits=\"userSpaceOnUse\" x1=\"156\" y1=\"144\" x2=\"156\" y2=\"120\">\r\n                    <stop offset=\"0\" style=\"stop-color:#F1F2F3\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#B1BFC3\"></stop>\r\n                  </linearGradient>\r\n                  <path fill=\"url(#watch_SVGID_7_)\" d=\"M64,120v16c0,4.4,3.6,8,8,8h168c4.4,0,8-3.6,8-8v-16H64z\"></path>\r\n                  <linearGradient id=\"watch_SVGID_8_\" gradientUnits=\"userSpaceOnUse\" x1=\"156\" y1=\"112\" x2=\"156\" y2=\"24\">\r\n                    <stop offset=\"0\" style=\"stop-color:#626EB3\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#22ABC6\"></stop>\r\n                  </linearGradient>\r\n                  <rect x=\"72\" y=\"24\" fill=\"url(#watch_SVGID_8_)\" width=\"168\" height=\"88\"></rect>\r\n                </g>\r\n                <linearGradient id=\"watch_SVGID_9_\" gradientUnits=\"userSpaceOnUse\" x1=\"168\" y1=\"104\" x2=\"168\" y2=\"40\">\r\n                  <stop offset=\"0\" style=\"stop-color:#3C3D46\"></stop>\r\n                  <stop offset=\"1\" style=\"stop-color:#5D5B6A\"></stop>\r\n                </linearGradient>\r\n                <path fill=\"url(#watch_SVGID_9_)\" d=\"M216,100c0,2.2-1.8,4-4,4h-88c-2.2,0-4-1.8-4-4V44c0-2.2,1.8-4,4-4h88c2.2,0,4,1.8,4,4V100z\"></path>\r\n                <rect x=\"248\" y=\"164\" fill=\"#F89E2B\" width=\"24\" height=\"28\"></rect>\r\n                <g>\r\n                  <linearGradient id=\"watch_SVGID_10_\" gradientUnits=\"userSpaceOnUse\" x1=\"80\" y1=\"168\" x2=\"80\" y2=\"104\">\r\n                    <stop offset=\"0\" style=\"stop-color:#626EB3\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#22ABC6\"></stop>\r\n                  </linearGradient>\r\n                  <path fill=\"url(#watch_SVGID_10_)\" d=\"M80,104c-35.3,0-64,28.7-64,64h128C144,132.7,115.3,104,80,104z\"></path>\r\n                  <path fill=\"#626EB3\" d=\"M80,104c-4.1,0-8.1,0.4-12,1.1c29.6,5.6,52,31.6,52,62.9h24C144,132.7,115.3,104,80,104z\"></path>\r\n                  <linearGradient id=\"watch_SVGID_11_\" gradientUnits=\"userSpaceOnUse\" x1=\"80\" y1=\"112\" x2=\"80\" y2=\"16\">\r\n                    <stop offset=\"0\" style=\"stop-color:#F89E2B\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#FFCF30\"></stop>\r\n                  </linearGradient>\r\n                  <circle fill=\"url(#watch_SVGID_11_)\" cx=\"80\" cy=\"64\" r=\"48\"></circle>\r\n                  <ellipse fill=\"#3C3D46\" cx=\"72\" cy=\"104\" rx=\"48\" ry=\"16\"></ellipse>\r\n                  <rect x=\"24\" y=\"44\" fill=\"#3C3D46\" width=\"96\" height=\"60\"></rect>\r\n                  <path fill=\"#3C3D46\" d=\"M120,56c0,30.9-21.5,56-48,56S24,86.9,24,56\"></path>\r\n                </g>\r\n                <rect x=\"120\" y=\"168\" fill=\"#626EB3\" width=\"24\" height=\"24\"></rect>\r\n                <path fill=\"#3C3D46\" d=\"M96,128H40c-13.3,0-24,10.7-24,24v40h104v-40C120,138.7,109.3,128,96,128z\"></path>\r\n                <linearGradient id=\"watch_SVGID_12_\" gradientUnits=\"userSpaceOnUse\" x1=\"52\" y1=\"192\" x2=\"52\" y2=\"128\">\r\n                  <stop offset=\"0\" style=\"stop-color:#5D5B6A\"></stop>\r\n                  <stop offset=\"1\" style=\"stop-color:#3C3D46\"></stop>\r\n                </linearGradient>\r\n                <path fill=\"url(#watch_SVGID_12_)\" d=\"M80,128H24c-13.3,0-24,10.7-24,24v40h104v-40C104,138.7,93.3,128,80,128z\"></path>\r\n                <g class=\"watch-teacher\">\r\n                  <path fill=\"#626EB3\" d=\"M216,34.1v39.8c10.1-1,18-9.5,18-19.9S226.1,35.1,216,34.1z\"></path>\r\n                  <path fill=\"#3C3D46\" d=\"M194,54c0,11,9,20,20,20c0.7,0,1.3,0,2-0.1V40h-16.3C196.2,43.6,194,48.5,194,54z\"></path>\r\n                  <circle fill=\"#FFFFFF\" cx=\"212\" cy=\"52\" r=\"20\"></circle>\r\n                  <linearGradient id=\"watch_SVGID_13_\" gradientUnits=\"userSpaceOnUse\" x1=\"199.7236\" y1=\"67\" x2=\"224.2764\" y2=\"67\">\r\n                    <stop offset=\"0\" style=\"stop-color:#C0D84E\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#5CBC6A\"></stop>\r\n                  </linearGradient>\r\n                  <path fill=\"url(#watch_SVGID_13_)\" d=\"M212,72c4.6,0,8.9-1.6,12.3-4.2c-2.9-3.5-7.3-5.8-12.3-5.8s-9.3,2.2-12.3,5.8C203.1,70.4,207.4,72,212,72z\"></path>\r\n                  <g>\r\n                    <circle fill=\"#3C3D46\" cx=\"212\" cy=\"49\" r=\"13\"></circle>\r\n                    <circle fill=\"#F89E2B\" cx=\"224\" cy=\"52\" r=\"3\"></circle>\r\n                    <circle fill=\"#F89E2B\" cx=\"200\" cy=\"52\" r=\"3\"></circle>\r\n                    <linearGradient id=\"watch_SVGID_14_\" gradientUnits=\"userSpaceOnUse\" x1=\"212\" y1=\"64\" x2=\"212\" y2=\"40\">\r\n                      <stop offset=\"0\" style=\"stop-color:#F89E2B\"></stop>\r\n                      <stop offset=\"1\" style=\"stop-color:#FFCF30\"></stop>\r\n                    </linearGradient>\r\n                    <circle fill=\"url(#watch_SVGID_14_)\" cx=\"212\" cy=\"52\" r=\"12\"></circle>\r\n                    <path fill=\"#F89E2B\" d=\"M222,50c0,6.6-5.4,12-12,12c-2.8,0-5.4-1-7.4-2.6c2.2,2.8,5.6,4.6,9.4,4.6c6.6,0,12-5.4,12-12c0-0.7-0.1-1.3-0.2-2H222z\"></path>\r\n                    <path class=\"watch-mouth\" fill=\"#3C3D46\" d=\"M208,55c0,2.2,1.8,4,4,4s4-1.8,4-4H208z\"></path>\r\n                    <circle fill=\"#3C3D46\" cx=\"208\" cy=\"50\" r=\"1\"></circle>\r\n                    <path fill=\"#F89E2B\" d=\"M213.5,51.2c0,0.8-0.7,1.5-1.5,1.5s-1.5-0.7-1.5-1.5\"></path>\r\n                    <circle fill=\"#3C3D46\" cx=\"216\" cy=\"50\" r=\"1\"></circle>\r\n                    <path fill=\"#3C3D46\" d=\"M217.8,39.6L204,40l-3,6h1c0-2.2,4.5-4,10-4s10,1.8,10,4h1L217.8,39.6z\"></path>\r\n                    <path fill=\"#3C3D46\" d=\"M210,35c-2.2,0-4,1.8-4,4C208.2,39,210,37.2,210,35z\"></path>\r\n                    <path fill=\"#3C3D46\" d=\"M206.3,35.2c-1.6,1.6-1.6,4.1,0,5.7C207.9,39.3,207.9,36.7,206.3,35.2z\"></path>\r\n                    <line fill=\"none\" stroke=\"#3C3D46\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" x1=\"201\" y1=\"45\" x2=\"201\"\r\n                      y2=\"51\"></line>\r\n                    <line fill=\"none\" stroke=\"#3C3D46\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" x1=\"223\" y1=\"45\" x2=\"223\"\r\n                      y2=\"51\"></line>\r\n                  </g>\r\n                </g>\r\n                <linearGradient id=\"watch_SVGID_15_\" gradientUnits=\"userSpaceOnUse\" x1=\"134\" y1=\"56\" x2=\"170\" y2=\"56\">\r\n                  <stop offset=\"0\" style=\"stop-color:#C0D84E\"></stop>\r\n                  <stop offset=\"1\" style=\"stop-color:#5CBC6A\"></stop>\r\n                </linearGradient>\r\n                <line class=\"watch-code--a\" fill=\"none\" stroke=\"url(#watch_SVGID_15_)\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-miterlimit=\"10\"\r\n                  x1=\"136\" y1=\"56\" x2=\"168\" y2=\"56\"></line>\r\n                <linearGradient id=\"watch_SVGID_16_\" gradientUnits=\"userSpaceOnUse\" x1=\"142\" y1=\"64\" x2=\"186\" y2=\"64\">\r\n                  <stop offset=\"0\" style=\"stop-color:#F89E2B\"></stop>\r\n                  <stop offset=\"1\" style=\"stop-color:#F15B51\"></stop>\r\n                </linearGradient>\r\n                <line class=\"watch-code--b\" fill=\"none\" stroke=\"url(#watch_SVGID_16_)\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-miterlimit=\"10\"\r\n                  x1=\"144\" y1=\"64\" x2=\"184\" y2=\"64\"></line>\r\n                <linearGradient id=\"watch_SVGID_17_\" gradientUnits=\"userSpaceOnUse\" x1=\"142\" y1=\"72\" x2=\"170\" y2=\"72\">\r\n                  <stop offset=\"0\" style=\"stop-color:#22ABC6\"></stop>\r\n                  <stop offset=\"1\" style=\"stop-color:#626EB3\"></stop>\r\n                </linearGradient>\r\n                <line class=\"watch-code--c\" fill=\"none\" stroke=\"url(#watch_SVGID_17_)\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-miterlimit=\"10\"\r\n                  x1=\"144\" y1=\"72\" x2=\"168\" y2=\"72\"></line>\r\n                <linearGradient id=\"watch_SVGID_18_\" gradientUnits=\"userSpaceOnUse\" x1=\"142\" y1=\"80\" x2=\"178\" y2=\"80\">\r\n                  <stop offset=\"0\" style=\"stop-color:#FFCF30\"></stop>\r\n                  <stop offset=\"1\" style=\"stop-color:#F89E2B\"></stop>\r\n                </linearGradient>\r\n                <line class=\"watch-code--d\" fill=\"none\" stroke=\"url(#watch_SVGID_18_)\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-miterlimit=\"10\"\r\n                  x1=\"144\" y1=\"80\" x2=\"176\" y2=\"80\"></line>\r\n                <ellipse fill=\"#3C3D46\" cx=\"76\" cy=\"44\" rx=\"52\" ry=\"44\"></ellipse>\r\n              </g>\r\n              <polygon fill=\"#F89E2B\" points=\"164,192 144,192 144,164 160,164 160,176 164,176 \"></polygon>\r\n            </svg>\r\n          </div>\r\n\r\n          <div class=\"col-md-6 timeline-section-col\">\r\n            <h2 class=\"timeline-waypoint timeline-waypoint--first\">Рівень 1: Основи веб розробки</h2>\r\n            <p>\r\n              Вивчаємо як працює веб - фундаментальні основи мережі, особливості роботи браузера, що таке клієнт / сервер, хто за що відповідає\r\n              і як з тим працювати, HTTP запити. Ці знання забезпечать розуміння середовища з яким і в якому працює Web Developer.\r\n            </p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row timeline-section timeline-section\">\r\n          <div class=\"col-md-6 timeline-section-col\">\r\n            <svg class=\"center\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"288px\" height=\"192px\" viewBox=\"0 0 288 192\">\r\n              <defs></defs>\r\n              <g>\r\n                <g>\r\n                  <linearGradient id=\"watch_SVGID_1_\" gradientUnits=\"userSpaceOnUse\" x1=\"-2428.7991\" y1=\"-7487.1206\" x2=\"-2428.7991\" y2=\"-7528.0908\"\r\n                    gradientTransform=\"matrix(0.7071 -0.7071 0.7071 0.7071 7278.0991 3698.886)\">\r\n                    <stop offset=\"0\" style=\"stop-color:#C0D84E\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#5CBC6A\"></stop>\r\n                  </linearGradient>\r\n                  <path fill=\"url(#watch_SVGID_1_)\" d=\"M252,78.7c-16,16-16,41.9,0,57.9C268,120.6,268,94.7,252,78.7z\"></path>\r\n                  <path fill=\"#5CBC6A\" d=\"M252,136.6V78.7C236,94.7,236,120.6,252,136.6z\"></path>\r\n                </g>\r\n                <g>\r\n                  <linearGradient id=\"watch_SVGID_2_\" gradientUnits=\"userSpaceOnUse\" x1=\"270\" y1=\"136\" x2=\"270\" y2=\"100\">\r\n                    <stop offset=\"0\" style=\"stop-color:#C0D84E\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#5CBC6A\"></stop>\r\n                  </linearGradient>\r\n                  <path fill=\"url(#watch_SVGID_2_)\" d=\"M288,100c-19.9,0-36,16.1-36,36C271.9,136,288,119.9,288,100z\"></path>\r\n                  <path fill=\"#5CBC6A\" d=\"M252,136l36-36C268.1,100,252,116.1,252,136z\"></path>\r\n                </g>\r\n                <g>\r\n                  <linearGradient id=\"watch_SVGID_3_\" gradientUnits=\"userSpaceOnUse\" x1=\"232\" y1=\"164\" x2=\"232\" y2=\"136\">\r\n                    <stop offset=\"0\" style=\"stop-color:#F15B51\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#F89E2B\"></stop>\r\n                  </linearGradient>\r\n                  <rect x=\"208\" y=\"136\" fill=\"url(#watch_SVGID_3_)\" width=\"48\" height=\"28\"></rect>\r\n                  <rect x=\"256\" y=\"136\" fill=\"#F15B51\" width=\"16\" height=\"28\"></rect>\r\n                </g>\r\n                <g>\r\n                  <path fill=\"#B1BFC3\" d=\"M192,160c0,2.2-1.8,4-4,4s-4-1.8-4-4\"></path>\r\n                  <polygon fill=\"#B1BFC3\" points=\"192,160 144,160 136,128 184,128 \"></polygon>\r\n                  <linearGradient id=\"watch_SVGID_4_\" gradientUnits=\"userSpaceOnUse\" x1=\"128\" y1=\"160\" x2=\"184\" y2=\"160\">\r\n                    <stop offset=\"0\" style=\"stop-color:#F1F2F3\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#B1BFC3\"></stop>\r\n                  </linearGradient>\r\n                  <rect x=\"128\" y=\"156\" fill=\"url(#watch_SVGID_4_)\" width=\"56\" height=\"8\"></rect>\r\n                  <rect x=\"184\" y=\"160\" fill=\"#B1BFC3\" width=\"4\" height=\"4\"></rect>\r\n                </g>\r\n                <rect x=\"264\" y=\"164\" fill=\"#F89E2B\" width=\"16\" height=\"12\"></rect>\r\n                <linearGradient id=\"watch_SVGID_5_\" gradientUnits=\"userSpaceOnUse\" x1=\"120\" y1=\"184\" x2=\"248\" y2=\"184\">\r\n                  <stop offset=\"0\" style=\"stop-color:#FFCF30\"></stop>\r\n                  <stop offset=\"1\" style=\"stop-color:#F89E2B\"></stop>\r\n                </linearGradient>\r\n                <rect x=\"120\" y=\"176\" fill=\"url(#watch_SVGID_5_)\" width=\"128\" height=\"16\"></rect>\r\n                <rect x=\"120\" y=\"176\" fill=\"#F89E2B\" width=\"128\" height=\"8\"></rect>\r\n                <rect x=\"120\" y=\"164\" fill=\"#FFCF30\" width=\"128\" height=\"12\"></rect>\r\n                <g>\r\n                  <path fill=\"#B1BFC3\" d=\"M72,136c0,4.4,3.6,8,8,8h168c4.4,0,8-3.6,8-8V24c0-4.4-3.6-8-8-8H80c-4.4,0-8,3.6-8,8V136z\"></path>\r\n                  <linearGradient id=\"watch_SVGID_6_\" gradientUnits=\"userSpaceOnUse\" x1=\"156\" y1=\"120\" x2=\"156\" y2=\"16\">\r\n                    <stop offset=\"0\" style=\"stop-color:#3C3D46\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#5D5B6A\"></stop>\r\n                  </linearGradient>\r\n                  <path fill=\"url(#watch_SVGID_6_)\" d=\"M240,16H72c-4.4,0-8,3.6-8,8v96h184V24C248,19.6,244.4,16,240,16z\"></path>\r\n                  <linearGradient id=\"watch_SVGID_7_\" gradientUnits=\"userSpaceOnUse\" x1=\"156\" y1=\"144\" x2=\"156\" y2=\"120\">\r\n                    <stop offset=\"0\" style=\"stop-color:#F1F2F3\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#B1BFC3\"></stop>\r\n                  </linearGradient>\r\n                  <path fill=\"url(#watch_SVGID_7_)\" d=\"M64,120v16c0,4.4,3.6,8,8,8h168c4.4,0,8-3.6,8-8v-16H64z\"></path>\r\n                  <linearGradient id=\"watch_SVGID_8_\" gradientUnits=\"userSpaceOnUse\" x1=\"156\" y1=\"112\" x2=\"156\" y2=\"24\">\r\n                    <stop offset=\"0\" style=\"stop-color:#626EB3\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#22ABC6\"></stop>\r\n                  </linearGradient>\r\n                  <rect x=\"72\" y=\"24\" fill=\"url(#watch_SVGID_8_)\" width=\"168\" height=\"88\"></rect>\r\n                </g>\r\n                <linearGradient id=\"watch_SVGID_9_\" gradientUnits=\"userSpaceOnUse\" x1=\"168\" y1=\"104\" x2=\"168\" y2=\"40\">\r\n                  <stop offset=\"0\" style=\"stop-color:#3C3D46\"></stop>\r\n                  <stop offset=\"1\" style=\"stop-color:#5D5B6A\"></stop>\r\n                </linearGradient>\r\n                <path fill=\"url(#watch_SVGID_9_)\" d=\"M216,100c0,2.2-1.8,4-4,4h-88c-2.2,0-4-1.8-4-4V44c0-2.2,1.8-4,4-4h88c2.2,0,4,1.8,4,4V100z\"></path>\r\n                <rect x=\"248\" y=\"164\" fill=\"#F89E2B\" width=\"24\" height=\"28\"></rect>\r\n                <g>\r\n                  <linearGradient id=\"watch_SVGID_10_\" gradientUnits=\"userSpaceOnUse\" x1=\"80\" y1=\"168\" x2=\"80\" y2=\"104\">\r\n                    <stop offset=\"0\" style=\"stop-color:#626EB3\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#22ABC6\"></stop>\r\n                  </linearGradient>\r\n                  <path fill=\"url(#watch_SVGID_10_)\" d=\"M80,104c-35.3,0-64,28.7-64,64h128C144,132.7,115.3,104,80,104z\"></path>\r\n                  <path fill=\"#626EB3\" d=\"M80,104c-4.1,0-8.1,0.4-12,1.1c29.6,5.6,52,31.6,52,62.9h24C144,132.7,115.3,104,80,104z\"></path>\r\n                  <linearGradient id=\"watch_SVGID_11_\" gradientUnits=\"userSpaceOnUse\" x1=\"80\" y1=\"112\" x2=\"80\" y2=\"16\">\r\n                    <stop offset=\"0\" style=\"stop-color:#F89E2B\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#FFCF30\"></stop>\r\n                  </linearGradient>\r\n                  <circle fill=\"url(#watch_SVGID_11_)\" cx=\"80\" cy=\"64\" r=\"48\"></circle>\r\n                  <ellipse fill=\"#3C3D46\" cx=\"72\" cy=\"104\" rx=\"48\" ry=\"16\"></ellipse>\r\n                  <rect x=\"24\" y=\"44\" fill=\"#3C3D46\" width=\"96\" height=\"60\"></rect>\r\n                  <path fill=\"#3C3D46\" d=\"M120,56c0,30.9-21.5,56-48,56S24,86.9,24,56\"></path>\r\n                </g>\r\n                <rect x=\"120\" y=\"168\" fill=\"#626EB3\" width=\"24\" height=\"24\"></rect>\r\n                <path fill=\"#3C3D46\" d=\"M96,128H40c-13.3,0-24,10.7-24,24v40h104v-40C120,138.7,109.3,128,96,128z\"></path>\r\n                <linearGradient id=\"watch_SVGID_12_\" gradientUnits=\"userSpaceOnUse\" x1=\"52\" y1=\"192\" x2=\"52\" y2=\"128\">\r\n                  <stop offset=\"0\" style=\"stop-color:#5D5B6A\"></stop>\r\n                  <stop offset=\"1\" style=\"stop-color:#3C3D46\"></stop>\r\n                </linearGradient>\r\n                <path fill=\"url(#watch_SVGID_12_)\" d=\"M80,128H24c-13.3,0-24,10.7-24,24v40h104v-40C104,138.7,93.3,128,80,128z\"></path>\r\n                <g class=\"watch-teacher\">\r\n                  <path fill=\"#626EB3\" d=\"M216,34.1v39.8c10.1-1,18-9.5,18-19.9S226.1,35.1,216,34.1z\"></path>\r\n                  <path fill=\"#3C3D46\" d=\"M194,54c0,11,9,20,20,20c0.7,0,1.3,0,2-0.1V40h-16.3C196.2,43.6,194,48.5,194,54z\"></path>\r\n                  <circle fill=\"#FFFFFF\" cx=\"212\" cy=\"52\" r=\"20\"></circle>\r\n                  <linearGradient id=\"watch_SVGID_13_\" gradientUnits=\"userSpaceOnUse\" x1=\"199.7236\" y1=\"67\" x2=\"224.2764\" y2=\"67\">\r\n                    <stop offset=\"0\" style=\"stop-color:#C0D84E\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#5CBC6A\"></stop>\r\n                  </linearGradient>\r\n                  <path fill=\"url(#watch_SVGID_13_)\" d=\"M212,72c4.6,0,8.9-1.6,12.3-4.2c-2.9-3.5-7.3-5.8-12.3-5.8s-9.3,2.2-12.3,5.8C203.1,70.4,207.4,72,212,72z\"></path>\r\n                  <g>\r\n                    <circle fill=\"#3C3D46\" cx=\"212\" cy=\"49\" r=\"13\"></circle>\r\n                    <circle fill=\"#F89E2B\" cx=\"224\" cy=\"52\" r=\"3\"></circle>\r\n                    <circle fill=\"#F89E2B\" cx=\"200\" cy=\"52\" r=\"3\"></circle>\r\n                    <linearGradient id=\"watch_SVGID_14_\" gradientUnits=\"userSpaceOnUse\" x1=\"212\" y1=\"64\" x2=\"212\" y2=\"40\">\r\n                      <stop offset=\"0\" style=\"stop-color:#F89E2B\"></stop>\r\n                      <stop offset=\"1\" style=\"stop-color:#FFCF30\"></stop>\r\n                    </linearGradient>\r\n                    <circle fill=\"url(#watch_SVGID_14_)\" cx=\"212\" cy=\"52\" r=\"12\"></circle>\r\n                    <path fill=\"#F89E2B\" d=\"M222,50c0,6.6-5.4,12-12,12c-2.8,0-5.4-1-7.4-2.6c2.2,2.8,5.6,4.6,9.4,4.6c6.6,0,12-5.4,12-12c0-0.7-0.1-1.3-0.2-2H222z\"></path>\r\n                    <path class=\"watch-mouth\" fill=\"#3C3D46\" d=\"M208,55c0,2.2,1.8,4,4,4s4-1.8,4-4H208z\"></path>\r\n                    <circle fill=\"#3C3D46\" cx=\"208\" cy=\"50\" r=\"1\"></circle>\r\n                    <path fill=\"#F89E2B\" d=\"M213.5,51.2c0,0.8-0.7,1.5-1.5,1.5s-1.5-0.7-1.5-1.5\"></path>\r\n                    <circle fill=\"#3C3D46\" cx=\"216\" cy=\"50\" r=\"1\"></circle>\r\n                    <path fill=\"#3C3D46\" d=\"M217.8,39.6L204,40l-3,6h1c0-2.2,4.5-4,10-4s10,1.8,10,4h1L217.8,39.6z\"></path>\r\n                    <path fill=\"#3C3D46\" d=\"M210,35c-2.2,0-4,1.8-4,4C208.2,39,210,37.2,210,35z\"></path>\r\n                    <path fill=\"#3C3D46\" d=\"M206.3,35.2c-1.6,1.6-1.6,4.1,0,5.7C207.9,39.3,207.9,36.7,206.3,35.2z\"></path>\r\n                    <line fill=\"none\" stroke=\"#3C3D46\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" x1=\"201\" y1=\"45\" x2=\"201\"\r\n                      y2=\"51\"></line>\r\n                    <line fill=\"none\" stroke=\"#3C3D46\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" x1=\"223\" y1=\"45\" x2=\"223\"\r\n                      y2=\"51\"></line>\r\n                  </g>\r\n                </g>\r\n                <linearGradient id=\"watch_SVGID_15_\" gradientUnits=\"userSpaceOnUse\" x1=\"134\" y1=\"56\" x2=\"170\" y2=\"56\">\r\n                  <stop offset=\"0\" style=\"stop-color:#C0D84E\"></stop>\r\n                  <stop offset=\"1\" style=\"stop-color:#5CBC6A\"></stop>\r\n                </linearGradient>\r\n                <line class=\"watch-code--a\" fill=\"none\" stroke=\"url(#watch_SVGID_15_)\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-miterlimit=\"10\"\r\n                  x1=\"136\" y1=\"56\" x2=\"168\" y2=\"56\"></line>\r\n                <linearGradient id=\"watch_SVGID_16_\" gradientUnits=\"userSpaceOnUse\" x1=\"142\" y1=\"64\" x2=\"186\" y2=\"64\">\r\n                  <stop offset=\"0\" style=\"stop-color:#F89E2B\"></stop>\r\n                  <stop offset=\"1\" style=\"stop-color:#F15B51\"></stop>\r\n                </linearGradient>\r\n                <line class=\"watch-code--b\" fill=\"none\" stroke=\"url(#watch_SVGID_16_)\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-miterlimit=\"10\"\r\n                  x1=\"144\" y1=\"64\" x2=\"184\" y2=\"64\"></line>\r\n                <linearGradient id=\"watch_SVGID_17_\" gradientUnits=\"userSpaceOnUse\" x1=\"142\" y1=\"72\" x2=\"170\" y2=\"72\">\r\n                  <stop offset=\"0\" style=\"stop-color:#22ABC6\"></stop>\r\n                  <stop offset=\"1\" style=\"stop-color:#626EB3\"></stop>\r\n                </linearGradient>\r\n                <line class=\"watch-code--c\" fill=\"none\" stroke=\"url(#watch_SVGID_17_)\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-miterlimit=\"10\"\r\n                  x1=\"144\" y1=\"72\" x2=\"168\" y2=\"72\"></line>\r\n                <linearGradient id=\"watch_SVGID_18_\" gradientUnits=\"userSpaceOnUse\" x1=\"142\" y1=\"80\" x2=\"178\" y2=\"80\">\r\n                  <stop offset=\"0\" style=\"stop-color:#FFCF30\"></stop>\r\n                  <stop offset=\"1\" style=\"stop-color:#F89E2B\"></stop>\r\n                </linearGradient>\r\n                <line class=\"watch-code--d\" fill=\"none\" stroke=\"url(#watch_SVGID_18_)\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-miterlimit=\"10\"\r\n                  x1=\"144\" y1=\"80\" x2=\"176\" y2=\"80\"></line>\r\n                <ellipse fill=\"#3C3D46\" cx=\"76\" cy=\"44\" rx=\"52\" ry=\"44\"></ellipse>\r\n              </g>\r\n              <polygon fill=\"#F89E2B\" points=\"164,192 144,192 144,164 160,164 160,176 164,176 \"></polygon>\r\n            </svg>\r\n          </div>\r\n\r\n          <div class=\"col-md-6 timeline-section-col\">\r\n            <h2 class=\"timeline-waypoint timeline-waypoint--first\">Рівень 2: Основи HTML</h2>\r\n            <p>\r\n              Знайомимося з HTML - мовою розмітки гіпертекстових документів що являється стандартом в Інтернеті, вивчаємо синтаксис, структуру\r\n              розмітки та основні компоненти (теги). Розкриємо поняття документ. Проходимо основи HTML5 - семантичний підхід,\r\n              нові теги та API.\r\n            </p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row timeline-section reverse timeline-section\">\r\n          <div class=\"col-md-6 timeline-section-col\">\r\n            <svg class=\"center\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"288px\" height=\"192px\" viewBox=\"0 0 288 192\">\r\n              <defs></defs>\r\n              <g>\r\n                <g>\r\n                  <linearGradient id=\"watch_SVGID_1_\" gradientUnits=\"userSpaceOnUse\" x1=\"-2428.7991\" y1=\"-7487.1206\" x2=\"-2428.7991\" y2=\"-7528.0908\"\r\n                    gradientTransform=\"matrix(0.7071 -0.7071 0.7071 0.7071 7278.0991 3698.886)\">\r\n                    <stop offset=\"0\" style=\"stop-color:#C0D84E\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#5CBC6A\"></stop>\r\n                  </linearGradient>\r\n                  <path fill=\"url(#watch_SVGID_1_)\" d=\"M252,78.7c-16,16-16,41.9,0,57.9C268,120.6,268,94.7,252,78.7z\"></path>\r\n                  <path fill=\"#5CBC6A\" d=\"M252,136.6V78.7C236,94.7,236,120.6,252,136.6z\"></path>\r\n                </g>\r\n                <g>\r\n                  <linearGradient id=\"watch_SVGID_2_\" gradientUnits=\"userSpaceOnUse\" x1=\"270\" y1=\"136\" x2=\"270\" y2=\"100\">\r\n                    <stop offset=\"0\" style=\"stop-color:#C0D84E\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#5CBC6A\"></stop>\r\n                  </linearGradient>\r\n                  <path fill=\"url(#watch_SVGID_2_)\" d=\"M288,100c-19.9,0-36,16.1-36,36C271.9,136,288,119.9,288,100z\"></path>\r\n                  <path fill=\"#5CBC6A\" d=\"M252,136l36-36C268.1,100,252,116.1,252,136z\"></path>\r\n                </g>\r\n                <g>\r\n                  <linearGradient id=\"watch_SVGID_3_\" gradientUnits=\"userSpaceOnUse\" x1=\"232\" y1=\"164\" x2=\"232\" y2=\"136\">\r\n                    <stop offset=\"0\" style=\"stop-color:#F15B51\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#F89E2B\"></stop>\r\n                  </linearGradient>\r\n                  <rect x=\"208\" y=\"136\" fill=\"url(#watch_SVGID_3_)\" width=\"48\" height=\"28\"></rect>\r\n                  <rect x=\"256\" y=\"136\" fill=\"#F15B51\" width=\"16\" height=\"28\"></rect>\r\n                </g>\r\n                <g>\r\n                  <path fill=\"#B1BFC3\" d=\"M192,160c0,2.2-1.8,4-4,4s-4-1.8-4-4\"></path>\r\n                  <polygon fill=\"#B1BFC3\" points=\"192,160 144,160 136,128 184,128 \"></polygon>\r\n                  <linearGradient id=\"watch_SVGID_4_\" gradientUnits=\"userSpaceOnUse\" x1=\"128\" y1=\"160\" x2=\"184\" y2=\"160\">\r\n                    <stop offset=\"0\" style=\"stop-color:#F1F2F3\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#B1BFC3\"></stop>\r\n                  </linearGradient>\r\n                  <rect x=\"128\" y=\"156\" fill=\"url(#watch_SVGID_4_)\" width=\"56\" height=\"8\"></rect>\r\n                  <rect x=\"184\" y=\"160\" fill=\"#B1BFC3\" width=\"4\" height=\"4\"></rect>\r\n                </g>\r\n                <rect x=\"264\" y=\"164\" fill=\"#F89E2B\" width=\"16\" height=\"12\"></rect>\r\n                <linearGradient id=\"watch_SVGID_5_\" gradientUnits=\"userSpaceOnUse\" x1=\"120\" y1=\"184\" x2=\"248\" y2=\"184\">\r\n                  <stop offset=\"0\" style=\"stop-color:#FFCF30\"></stop>\r\n                  <stop offset=\"1\" style=\"stop-color:#F89E2B\"></stop>\r\n                </linearGradient>\r\n                <rect x=\"120\" y=\"176\" fill=\"url(#watch_SVGID_5_)\" width=\"128\" height=\"16\"></rect>\r\n                <rect x=\"120\" y=\"176\" fill=\"#F89E2B\" width=\"128\" height=\"8\"></rect>\r\n                <rect x=\"120\" y=\"164\" fill=\"#FFCF30\" width=\"128\" height=\"12\"></rect>\r\n                <g>\r\n                  <path fill=\"#B1BFC3\" d=\"M72,136c0,4.4,3.6,8,8,8h168c4.4,0,8-3.6,8-8V24c0-4.4-3.6-8-8-8H80c-4.4,0-8,3.6-8,8V136z\"></path>\r\n                  <linearGradient id=\"watch_SVGID_6_\" gradientUnits=\"userSpaceOnUse\" x1=\"156\" y1=\"120\" x2=\"156\" y2=\"16\">\r\n                    <stop offset=\"0\" style=\"stop-color:#3C3D46\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#5D5B6A\"></stop>\r\n                  </linearGradient>\r\n                  <path fill=\"url(#watch_SVGID_6_)\" d=\"M240,16H72c-4.4,0-8,3.6-8,8v96h184V24C248,19.6,244.4,16,240,16z\"></path>\r\n                  <linearGradient id=\"watch_SVGID_7_\" gradientUnits=\"userSpaceOnUse\" x1=\"156\" y1=\"144\" x2=\"156\" y2=\"120\">\r\n                    <stop offset=\"0\" style=\"stop-color:#F1F2F3\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#B1BFC3\"></stop>\r\n                  </linearGradient>\r\n                  <path fill=\"url(#watch_SVGID_7_)\" d=\"M64,120v16c0,4.4,3.6,8,8,8h168c4.4,0,8-3.6,8-8v-16H64z\"></path>\r\n                  <linearGradient id=\"watch_SVGID_8_\" gradientUnits=\"userSpaceOnUse\" x1=\"156\" y1=\"112\" x2=\"156\" y2=\"24\">\r\n                    <stop offset=\"0\" style=\"stop-color:#626EB3\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#22ABC6\"></stop>\r\n                  </linearGradient>\r\n                  <rect x=\"72\" y=\"24\" fill=\"url(#watch_SVGID_8_)\" width=\"168\" height=\"88\"></rect>\r\n                </g>\r\n                <linearGradient id=\"watch_SVGID_9_\" gradientUnits=\"userSpaceOnUse\" x1=\"168\" y1=\"104\" x2=\"168\" y2=\"40\">\r\n                  <stop offset=\"0\" style=\"stop-color:#3C3D46\"></stop>\r\n                  <stop offset=\"1\" style=\"stop-color:#5D5B6A\"></stop>\r\n                </linearGradient>\r\n                <path fill=\"url(#watch_SVGID_9_)\" d=\"M216,100c0,2.2-1.8,4-4,4h-88c-2.2,0-4-1.8-4-4V44c0-2.2,1.8-4,4-4h88c2.2,0,4,1.8,4,4V100z\"></path>\r\n                <rect x=\"248\" y=\"164\" fill=\"#F89E2B\" width=\"24\" height=\"28\"></rect>\r\n                <g>\r\n                  <linearGradient id=\"watch_SVGID_10_\" gradientUnits=\"userSpaceOnUse\" x1=\"80\" y1=\"168\" x2=\"80\" y2=\"104\">\r\n                    <stop offset=\"0\" style=\"stop-color:#626EB3\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#22ABC6\"></stop>\r\n                  </linearGradient>\r\n                  <path fill=\"url(#watch_SVGID_10_)\" d=\"M80,104c-35.3,0-64,28.7-64,64h128C144,132.7,115.3,104,80,104z\"></path>\r\n                  <path fill=\"#626EB3\" d=\"M80,104c-4.1,0-8.1,0.4-12,1.1c29.6,5.6,52,31.6,52,62.9h24C144,132.7,115.3,104,80,104z\"></path>\r\n                  <linearGradient id=\"watch_SVGID_11_\" gradientUnits=\"userSpaceOnUse\" x1=\"80\" y1=\"112\" x2=\"80\" y2=\"16\">\r\n                    <stop offset=\"0\" style=\"stop-color:#F89E2B\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#FFCF30\"></stop>\r\n                  </linearGradient>\r\n                  <circle fill=\"url(#watch_SVGID_11_)\" cx=\"80\" cy=\"64\" r=\"48\"></circle>\r\n                  <ellipse fill=\"#3C3D46\" cx=\"72\" cy=\"104\" rx=\"48\" ry=\"16\"></ellipse>\r\n                  <rect x=\"24\" y=\"44\" fill=\"#3C3D46\" width=\"96\" height=\"60\"></rect>\r\n                  <path fill=\"#3C3D46\" d=\"M120,56c0,30.9-21.5,56-48,56S24,86.9,24,56\"></path>\r\n                </g>\r\n                <rect x=\"120\" y=\"168\" fill=\"#626EB3\" width=\"24\" height=\"24\"></rect>\r\n                <path fill=\"#3C3D46\" d=\"M96,128H40c-13.3,0-24,10.7-24,24v40h104v-40C120,138.7,109.3,128,96,128z\"></path>\r\n                <linearGradient id=\"watch_SVGID_12_\" gradientUnits=\"userSpaceOnUse\" x1=\"52\" y1=\"192\" x2=\"52\" y2=\"128\">\r\n                  <stop offset=\"0\" style=\"stop-color:#5D5B6A\"></stop>\r\n                  <stop offset=\"1\" style=\"stop-color:#3C3D46\"></stop>\r\n                </linearGradient>\r\n                <path fill=\"url(#watch_SVGID_12_)\" d=\"M80,128H24c-13.3,0-24,10.7-24,24v40h104v-40C104,138.7,93.3,128,80,128z\"></path>\r\n                <g class=\"watch-teacher\">\r\n                  <path fill=\"#626EB3\" d=\"M216,34.1v39.8c10.1-1,18-9.5,18-19.9S226.1,35.1,216,34.1z\"></path>\r\n                  <path fill=\"#3C3D46\" d=\"M194,54c0,11,9,20,20,20c0.7,0,1.3,0,2-0.1V40h-16.3C196.2,43.6,194,48.5,194,54z\"></path>\r\n                  <circle fill=\"#FFFFFF\" cx=\"212\" cy=\"52\" r=\"20\"></circle>\r\n                  <linearGradient id=\"watch_SVGID_13_\" gradientUnits=\"userSpaceOnUse\" x1=\"199.7236\" y1=\"67\" x2=\"224.2764\" y2=\"67\">\r\n                    <stop offset=\"0\" style=\"stop-color:#C0D84E\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#5CBC6A\"></stop>\r\n                  </linearGradient>\r\n                  <path fill=\"url(#watch_SVGID_13_)\" d=\"M212,72c4.6,0,8.9-1.6,12.3-4.2c-2.9-3.5-7.3-5.8-12.3-5.8s-9.3,2.2-12.3,5.8C203.1,70.4,207.4,72,212,72z\"></path>\r\n                  <g>\r\n                    <circle fill=\"#3C3D46\" cx=\"212\" cy=\"49\" r=\"13\"></circle>\r\n                    <circle fill=\"#F89E2B\" cx=\"224\" cy=\"52\" r=\"3\"></circle>\r\n                    <circle fill=\"#F89E2B\" cx=\"200\" cy=\"52\" r=\"3\"></circle>\r\n                    <linearGradient id=\"watch_SVGID_14_\" gradientUnits=\"userSpaceOnUse\" x1=\"212\" y1=\"64\" x2=\"212\" y2=\"40\">\r\n                      <stop offset=\"0\" style=\"stop-color:#F89E2B\"></stop>\r\n                      <stop offset=\"1\" style=\"stop-color:#FFCF30\"></stop>\r\n                    </linearGradient>\r\n                    <circle fill=\"url(#watch_SVGID_14_)\" cx=\"212\" cy=\"52\" r=\"12\"></circle>\r\n                    <path fill=\"#F89E2B\" d=\"M222,50c0,6.6-5.4,12-12,12c-2.8,0-5.4-1-7.4-2.6c2.2,2.8,5.6,4.6,9.4,4.6c6.6,0,12-5.4,12-12c0-0.7-0.1-1.3-0.2-2H222z\"></path>\r\n                    <path class=\"watch-mouth\" fill=\"#3C3D46\" d=\"M208,55c0,2.2,1.8,4,4,4s4-1.8,4-4H208z\"></path>\r\n                    <circle fill=\"#3C3D46\" cx=\"208\" cy=\"50\" r=\"1\"></circle>\r\n                    <path fill=\"#F89E2B\" d=\"M213.5,51.2c0,0.8-0.7,1.5-1.5,1.5s-1.5-0.7-1.5-1.5\"></path>\r\n                    <circle fill=\"#3C3D46\" cx=\"216\" cy=\"50\" r=\"1\"></circle>\r\n                    <path fill=\"#3C3D46\" d=\"M217.8,39.6L204,40l-3,6h1c0-2.2,4.5-4,10-4s10,1.8,10,4h1L217.8,39.6z\"></path>\r\n                    <path fill=\"#3C3D46\" d=\"M210,35c-2.2,0-4,1.8-4,4C208.2,39,210,37.2,210,35z\"></path>\r\n                    <path fill=\"#3C3D46\" d=\"M206.3,35.2c-1.6,1.6-1.6,4.1,0,5.7C207.9,39.3,207.9,36.7,206.3,35.2z\"></path>\r\n                    <line fill=\"none\" stroke=\"#3C3D46\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" x1=\"201\" y1=\"45\" x2=\"201\"\r\n                      y2=\"51\"></line>\r\n                    <line fill=\"none\" stroke=\"#3C3D46\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" x1=\"223\" y1=\"45\" x2=\"223\"\r\n                      y2=\"51\"></line>\r\n                  </g>\r\n                </g>\r\n                <linearGradient id=\"watch_SVGID_15_\" gradientUnits=\"userSpaceOnUse\" x1=\"134\" y1=\"56\" x2=\"170\" y2=\"56\">\r\n                  <stop offset=\"0\" style=\"stop-color:#C0D84E\"></stop>\r\n                  <stop offset=\"1\" style=\"stop-color:#5CBC6A\"></stop>\r\n                </linearGradient>\r\n                <line class=\"watch-code--a\" fill=\"none\" stroke=\"url(#watch_SVGID_15_)\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-miterlimit=\"10\"\r\n                  x1=\"136\" y1=\"56\" x2=\"168\" y2=\"56\"></line>\r\n                <linearGradient id=\"watch_SVGID_16_\" gradientUnits=\"userSpaceOnUse\" x1=\"142\" y1=\"64\" x2=\"186\" y2=\"64\">\r\n                  <stop offset=\"0\" style=\"stop-color:#F89E2B\"></stop>\r\n                  <stop offset=\"1\" style=\"stop-color:#F15B51\"></stop>\r\n                </linearGradient>\r\n                <line class=\"watch-code--b\" fill=\"none\" stroke=\"url(#watch_SVGID_16_)\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-miterlimit=\"10\"\r\n                  x1=\"144\" y1=\"64\" x2=\"184\" y2=\"64\"></line>\r\n                <linearGradient id=\"watch_SVGID_17_\" gradientUnits=\"userSpaceOnUse\" x1=\"142\" y1=\"72\" x2=\"170\" y2=\"72\">\r\n                  <stop offset=\"0\" style=\"stop-color:#22ABC6\"></stop>\r\n                  <stop offset=\"1\" style=\"stop-color:#626EB3\"></stop>\r\n                </linearGradient>\r\n                <line class=\"watch-code--c\" fill=\"none\" stroke=\"url(#watch_SVGID_17_)\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-miterlimit=\"10\"\r\n                  x1=\"144\" y1=\"72\" x2=\"168\" y2=\"72\"></line>\r\n                <linearGradient id=\"watch_SVGID_18_\" gradientUnits=\"userSpaceOnUse\" x1=\"142\" y1=\"80\" x2=\"178\" y2=\"80\">\r\n                  <stop offset=\"0\" style=\"stop-color:#FFCF30\"></stop>\r\n                  <stop offset=\"1\" style=\"stop-color:#F89E2B\"></stop>\r\n                </linearGradient>\r\n                <line class=\"watch-code--d\" fill=\"none\" stroke=\"url(#watch_SVGID_18_)\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-miterlimit=\"10\"\r\n                  x1=\"144\" y1=\"80\" x2=\"176\" y2=\"80\"></line>\r\n                <ellipse fill=\"#3C3D46\" cx=\"76\" cy=\"44\" rx=\"52\" ry=\"44\"></ellipse>\r\n              </g>\r\n              <polygon fill=\"#F89E2B\" points=\"164,192 144,192 144,164 160,164 160,176 164,176 \"></polygon>\r\n            </svg>\r\n          </div>\r\n\r\n          <div class=\"col-md-6 timeline-section-col\">\r\n            <h2 class=\"timeline-waypoint timeline-waypoint--first\">Рівень 3: Основи CSS</h2>\r\n            <p>\r\n              Вивчаємо мову CSS (каскадні таблиці стилів) за допомогою чого ми зможемо будь-яким елементам на сторінці давати гарні стилі.\r\n              Якщо HTML це структура документа, то CSS це гарне відображення елементів. Кольори, анімації, позиціонування\r\n              - це все CSS.\r\n            </p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row timeline-section timeline-section\">\r\n          <div class=\"col-md-6 timeline-section-col\">\r\n            <svg class=\"center\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"288px\" height=\"192px\" viewBox=\"0 0 288 192\">\r\n              <defs></defs>\r\n              <g>\r\n                <g>\r\n                  <linearGradient id=\"watch_SVGID_1_\" gradientUnits=\"userSpaceOnUse\" x1=\"-2428.7991\" y1=\"-7487.1206\" x2=\"-2428.7991\" y2=\"-7528.0908\"\r\n                    gradientTransform=\"matrix(0.7071 -0.7071 0.7071 0.7071 7278.0991 3698.886)\">\r\n                    <stop offset=\"0\" style=\"stop-color:#C0D84E\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#5CBC6A\"></stop>\r\n                  </linearGradient>\r\n                  <path fill=\"url(#watch_SVGID_1_)\" d=\"M252,78.7c-16,16-16,41.9,0,57.9C268,120.6,268,94.7,252,78.7z\"></path>\r\n                  <path fill=\"#5CBC6A\" d=\"M252,136.6V78.7C236,94.7,236,120.6,252,136.6z\"></path>\r\n                </g>\r\n                <g>\r\n                  <linearGradient id=\"watch_SVGID_2_\" gradientUnits=\"userSpaceOnUse\" x1=\"270\" y1=\"136\" x2=\"270\" y2=\"100\">\r\n                    <stop offset=\"0\" style=\"stop-color:#C0D84E\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#5CBC6A\"></stop>\r\n                  </linearGradient>\r\n                  <path fill=\"url(#watch_SVGID_2_)\" d=\"M288,100c-19.9,0-36,16.1-36,36C271.9,136,288,119.9,288,100z\"></path>\r\n                  <path fill=\"#5CBC6A\" d=\"M252,136l36-36C268.1,100,252,116.1,252,136z\"></path>\r\n                </g>\r\n                <g>\r\n                  <linearGradient id=\"watch_SVGID_3_\" gradientUnits=\"userSpaceOnUse\" x1=\"232\" y1=\"164\" x2=\"232\" y2=\"136\">\r\n                    <stop offset=\"0\" style=\"stop-color:#F15B51\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#F89E2B\"></stop>\r\n                  </linearGradient>\r\n                  <rect x=\"208\" y=\"136\" fill=\"url(#watch_SVGID_3_)\" width=\"48\" height=\"28\"></rect>\r\n                  <rect x=\"256\" y=\"136\" fill=\"#F15B51\" width=\"16\" height=\"28\"></rect>\r\n                </g>\r\n                <g>\r\n                  <path fill=\"#B1BFC3\" d=\"M192,160c0,2.2-1.8,4-4,4s-4-1.8-4-4\"></path>\r\n                  <polygon fill=\"#B1BFC3\" points=\"192,160 144,160 136,128 184,128 \"></polygon>\r\n                  <linearGradient id=\"watch_SVGID_4_\" gradientUnits=\"userSpaceOnUse\" x1=\"128\" y1=\"160\" x2=\"184\" y2=\"160\">\r\n                    <stop offset=\"0\" style=\"stop-color:#F1F2F3\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#B1BFC3\"></stop>\r\n                  </linearGradient>\r\n                  <rect x=\"128\" y=\"156\" fill=\"url(#watch_SVGID_4_)\" width=\"56\" height=\"8\"></rect>\r\n                  <rect x=\"184\" y=\"160\" fill=\"#B1BFC3\" width=\"4\" height=\"4\"></rect>\r\n                </g>\r\n                <rect x=\"264\" y=\"164\" fill=\"#F89E2B\" width=\"16\" height=\"12\"></rect>\r\n                <linearGradient id=\"watch_SVGID_5_\" gradientUnits=\"userSpaceOnUse\" x1=\"120\" y1=\"184\" x2=\"248\" y2=\"184\">\r\n                  <stop offset=\"0\" style=\"stop-color:#FFCF30\"></stop>\r\n                  <stop offset=\"1\" style=\"stop-color:#F89E2B\"></stop>\r\n                </linearGradient>\r\n                <rect x=\"120\" y=\"176\" fill=\"url(#watch_SVGID_5_)\" width=\"128\" height=\"16\"></rect>\r\n                <rect x=\"120\" y=\"176\" fill=\"#F89E2B\" width=\"128\" height=\"8\"></rect>\r\n                <rect x=\"120\" y=\"164\" fill=\"#FFCF30\" width=\"128\" height=\"12\"></rect>\r\n                <g>\r\n                  <path fill=\"#B1BFC3\" d=\"M72,136c0,4.4,3.6,8,8,8h168c4.4,0,8-3.6,8-8V24c0-4.4-3.6-8-8-8H80c-4.4,0-8,3.6-8,8V136z\"></path>\r\n                  <linearGradient id=\"watch_SVGID_6_\" gradientUnits=\"userSpaceOnUse\" x1=\"156\" y1=\"120\" x2=\"156\" y2=\"16\">\r\n                    <stop offset=\"0\" style=\"stop-color:#3C3D46\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#5D5B6A\"></stop>\r\n                  </linearGradient>\r\n                  <path fill=\"url(#watch_SVGID_6_)\" d=\"M240,16H72c-4.4,0-8,3.6-8,8v96h184V24C248,19.6,244.4,16,240,16z\"></path>\r\n                  <linearGradient id=\"watch_SVGID_7_\" gradientUnits=\"userSpaceOnUse\" x1=\"156\" y1=\"144\" x2=\"156\" y2=\"120\">\r\n                    <stop offset=\"0\" style=\"stop-color:#F1F2F3\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#B1BFC3\"></stop>\r\n                  </linearGradient>\r\n                  <path fill=\"url(#watch_SVGID_7_)\" d=\"M64,120v16c0,4.4,3.6,8,8,8h168c4.4,0,8-3.6,8-8v-16H64z\"></path>\r\n                  <linearGradient id=\"watch_SVGID_8_\" gradientUnits=\"userSpaceOnUse\" x1=\"156\" y1=\"112\" x2=\"156\" y2=\"24\">\r\n                    <stop offset=\"0\" style=\"stop-color:#626EB3\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#22ABC6\"></stop>\r\n                  </linearGradient>\r\n                  <rect x=\"72\" y=\"24\" fill=\"url(#watch_SVGID_8_)\" width=\"168\" height=\"88\"></rect>\r\n                </g>\r\n                <linearGradient id=\"watch_SVGID_9_\" gradientUnits=\"userSpaceOnUse\" x1=\"168\" y1=\"104\" x2=\"168\" y2=\"40\">\r\n                  <stop offset=\"0\" style=\"stop-color:#3C3D46\"></stop>\r\n                  <stop offset=\"1\" style=\"stop-color:#5D5B6A\"></stop>\r\n                </linearGradient>\r\n                <path fill=\"url(#watch_SVGID_9_)\" d=\"M216,100c0,2.2-1.8,4-4,4h-88c-2.2,0-4-1.8-4-4V44c0-2.2,1.8-4,4-4h88c2.2,0,4,1.8,4,4V100z\"></path>\r\n                <rect x=\"248\" y=\"164\" fill=\"#F89E2B\" width=\"24\" height=\"28\"></rect>\r\n                <g>\r\n                  <linearGradient id=\"watch_SVGID_10_\" gradientUnits=\"userSpaceOnUse\" x1=\"80\" y1=\"168\" x2=\"80\" y2=\"104\">\r\n                    <stop offset=\"0\" style=\"stop-color:#626EB3\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#22ABC6\"></stop>\r\n                  </linearGradient>\r\n                  <path fill=\"url(#watch_SVGID_10_)\" d=\"M80,104c-35.3,0-64,28.7-64,64h128C144,132.7,115.3,104,80,104z\"></path>\r\n                  <path fill=\"#626EB3\" d=\"M80,104c-4.1,0-8.1,0.4-12,1.1c29.6,5.6,52,31.6,52,62.9h24C144,132.7,115.3,104,80,104z\"></path>\r\n                  <linearGradient id=\"watch_SVGID_11_\" gradientUnits=\"userSpaceOnUse\" x1=\"80\" y1=\"112\" x2=\"80\" y2=\"16\">\r\n                    <stop offset=\"0\" style=\"stop-color:#F89E2B\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#FFCF30\"></stop>\r\n                  </linearGradient>\r\n                  <circle fill=\"url(#watch_SVGID_11_)\" cx=\"80\" cy=\"64\" r=\"48\"></circle>\r\n                  <ellipse fill=\"#3C3D46\" cx=\"72\" cy=\"104\" rx=\"48\" ry=\"16\"></ellipse>\r\n                  <rect x=\"24\" y=\"44\" fill=\"#3C3D46\" width=\"96\" height=\"60\"></rect>\r\n                  <path fill=\"#3C3D46\" d=\"M120,56c0,30.9-21.5,56-48,56S24,86.9,24,56\"></path>\r\n                </g>\r\n                <rect x=\"120\" y=\"168\" fill=\"#626EB3\" width=\"24\" height=\"24\"></rect>\r\n                <path fill=\"#3C3D46\" d=\"M96,128H40c-13.3,0-24,10.7-24,24v40h104v-40C120,138.7,109.3,128,96,128z\"></path>\r\n                <linearGradient id=\"watch_SVGID_12_\" gradientUnits=\"userSpaceOnUse\" x1=\"52\" y1=\"192\" x2=\"52\" y2=\"128\">\r\n                  <stop offset=\"0\" style=\"stop-color:#5D5B6A\"></stop>\r\n                  <stop offset=\"1\" style=\"stop-color:#3C3D46\"></stop>\r\n                </linearGradient>\r\n                <path fill=\"url(#watch_SVGID_12_)\" d=\"M80,128H24c-13.3,0-24,10.7-24,24v40h104v-40C104,138.7,93.3,128,80,128z\"></path>\r\n                <g class=\"watch-teacher\">\r\n                  <path fill=\"#626EB3\" d=\"M216,34.1v39.8c10.1-1,18-9.5,18-19.9S226.1,35.1,216,34.1z\"></path>\r\n                  <path fill=\"#3C3D46\" d=\"M194,54c0,11,9,20,20,20c0.7,0,1.3,0,2-0.1V40h-16.3C196.2,43.6,194,48.5,194,54z\"></path>\r\n                  <circle fill=\"#FFFFFF\" cx=\"212\" cy=\"52\" r=\"20\"></circle>\r\n                  <linearGradient id=\"watch_SVGID_13_\" gradientUnits=\"userSpaceOnUse\" x1=\"199.7236\" y1=\"67\" x2=\"224.2764\" y2=\"67\">\r\n                    <stop offset=\"0\" style=\"stop-color:#C0D84E\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#5CBC6A\"></stop>\r\n                  </linearGradient>\r\n                  <path fill=\"url(#watch_SVGID_13_)\" d=\"M212,72c4.6,0,8.9-1.6,12.3-4.2c-2.9-3.5-7.3-5.8-12.3-5.8s-9.3,2.2-12.3,5.8C203.1,70.4,207.4,72,212,72z\"></path>\r\n                  <g>\r\n                    <circle fill=\"#3C3D46\" cx=\"212\" cy=\"49\" r=\"13\"></circle>\r\n                    <circle fill=\"#F89E2B\" cx=\"224\" cy=\"52\" r=\"3\"></circle>\r\n                    <circle fill=\"#F89E2B\" cx=\"200\" cy=\"52\" r=\"3\"></circle>\r\n                    <linearGradient id=\"watch_SVGID_14_\" gradientUnits=\"userSpaceOnUse\" x1=\"212\" y1=\"64\" x2=\"212\" y2=\"40\">\r\n                      <stop offset=\"0\" style=\"stop-color:#F89E2B\"></stop>\r\n                      <stop offset=\"1\" style=\"stop-color:#FFCF30\"></stop>\r\n                    </linearGradient>\r\n                    <circle fill=\"url(#watch_SVGID_14_)\" cx=\"212\" cy=\"52\" r=\"12\"></circle>\r\n                    <path fill=\"#F89E2B\" d=\"M222,50c0,6.6-5.4,12-12,12c-2.8,0-5.4-1-7.4-2.6c2.2,2.8,5.6,4.6,9.4,4.6c6.6,0,12-5.4,12-12c0-0.7-0.1-1.3-0.2-2H222z\"></path>\r\n                    <path class=\"watch-mouth\" fill=\"#3C3D46\" d=\"M208,55c0,2.2,1.8,4,4,4s4-1.8,4-4H208z\"></path>\r\n                    <circle fill=\"#3C3D46\" cx=\"208\" cy=\"50\" r=\"1\"></circle>\r\n                    <path fill=\"#F89E2B\" d=\"M213.5,51.2c0,0.8-0.7,1.5-1.5,1.5s-1.5-0.7-1.5-1.5\"></path>\r\n                    <circle fill=\"#3C3D46\" cx=\"216\" cy=\"50\" r=\"1\"></circle>\r\n                    <path fill=\"#3C3D46\" d=\"M217.8,39.6L204,40l-3,6h1c0-2.2,4.5-4,10-4s10,1.8,10,4h1L217.8,39.6z\"></path>\r\n                    <path fill=\"#3C3D46\" d=\"M210,35c-2.2,0-4,1.8-4,4C208.2,39,210,37.2,210,35z\"></path>\r\n                    <path fill=\"#3C3D46\" d=\"M206.3,35.2c-1.6,1.6-1.6,4.1,0,5.7C207.9,39.3,207.9,36.7,206.3,35.2z\"></path>\r\n                    <line fill=\"none\" stroke=\"#3C3D46\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" x1=\"201\" y1=\"45\" x2=\"201\"\r\n                      y2=\"51\"></line>\r\n                    <line fill=\"none\" stroke=\"#3C3D46\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" x1=\"223\" y1=\"45\" x2=\"223\"\r\n                      y2=\"51\"></line>\r\n                  </g>\r\n                </g>\r\n                <linearGradient id=\"watch_SVGID_15_\" gradientUnits=\"userSpaceOnUse\" x1=\"134\" y1=\"56\" x2=\"170\" y2=\"56\">\r\n                  <stop offset=\"0\" style=\"stop-color:#C0D84E\"></stop>\r\n                  <stop offset=\"1\" style=\"stop-color:#5CBC6A\"></stop>\r\n                </linearGradient>\r\n                <line class=\"watch-code--a\" fill=\"none\" stroke=\"url(#watch_SVGID_15_)\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-miterlimit=\"10\"\r\n                  x1=\"136\" y1=\"56\" x2=\"168\" y2=\"56\"></line>\r\n                <linearGradient id=\"watch_SVGID_16_\" gradientUnits=\"userSpaceOnUse\" x1=\"142\" y1=\"64\" x2=\"186\" y2=\"64\">\r\n                  <stop offset=\"0\" style=\"stop-color:#F89E2B\"></stop>\r\n                  <stop offset=\"1\" style=\"stop-color:#F15B51\"></stop>\r\n                </linearGradient>\r\n                <line class=\"watch-code--b\" fill=\"none\" stroke=\"url(#watch_SVGID_16_)\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-miterlimit=\"10\"\r\n                  x1=\"144\" y1=\"64\" x2=\"184\" y2=\"64\"></line>\r\n                <linearGradient id=\"watch_SVGID_17_\" gradientUnits=\"userSpaceOnUse\" x1=\"142\" y1=\"72\" x2=\"170\" y2=\"72\">\r\n                  <stop offset=\"0\" style=\"stop-color:#22ABC6\"></stop>\r\n                  <stop offset=\"1\" style=\"stop-color:#626EB3\"></stop>\r\n                </linearGradient>\r\n                <line class=\"watch-code--c\" fill=\"none\" stroke=\"url(#watch_SVGID_17_)\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-miterlimit=\"10\"\r\n                  x1=\"144\" y1=\"72\" x2=\"168\" y2=\"72\"></line>\r\n                <linearGradient id=\"watch_SVGID_18_\" gradientUnits=\"userSpaceOnUse\" x1=\"142\" y1=\"80\" x2=\"178\" y2=\"80\">\r\n                  <stop offset=\"0\" style=\"stop-color:#FFCF30\"></stop>\r\n                  <stop offset=\"1\" style=\"stop-color:#F89E2B\"></stop>\r\n                </linearGradient>\r\n                <line class=\"watch-code--d\" fill=\"none\" stroke=\"url(#watch_SVGID_18_)\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-miterlimit=\"10\"\r\n                  x1=\"144\" y1=\"80\" x2=\"176\" y2=\"80\"></line>\r\n                <ellipse fill=\"#3C3D46\" cx=\"76\" cy=\"44\" rx=\"52\" ry=\"44\"></ellipse>\r\n              </g>\r\n              <polygon fill=\"#F89E2B\" points=\"164,192 144,192 144,164 160,164 160,176 164,176 \"></polygon>\r\n            </svg>\r\n          </div>\r\n\r\n          <div class=\"col-md-6 timeline-section-col\">\r\n            <h2 class=\"timeline-waypoint timeline-waypoint--first\">Рівень 4: Основи JavaScript</h2>\r\n            <p>\r\n              Вивчаємо основи веб-програмування на мові JavaScript щоб зробити сторінку динамічною. Якщо HTML/СSS відповідають за верстку\r\n              сторінок, то JavaScript це програмна логіка що відповідає за інтерактивність. Що робити коли нажали на кнопу,\r\n              коли хочемо відіслати дані з форми, і перевірити чи правильно заповнили, як поміняти дані в залежності від\r\n              дій користувача, ми це все вивчемо на даному етапі, ознайомимось з самою мовою та її фреймворками.\r\n            </p>\r\n          </div>\r\n        </div>\r\n        \r\n        <div class=\"row timeline-section reverse timeline-section\">\r\n          <div class=\"col-md-6 timeline-section-col\">\r\n            <svg class=\"center\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"288px\" height=\"192px\" viewBox=\"0 0 288 192\">\r\n              <defs></defs>\r\n              <g>\r\n                <g>\r\n                  <linearGradient id=\"watch_SVGID_1_\" gradientUnits=\"userSpaceOnUse\" x1=\"-2428.7991\" y1=\"-7487.1206\" x2=\"-2428.7991\" y2=\"-7528.0908\"\r\n                    gradientTransform=\"matrix(0.7071 -0.7071 0.7071 0.7071 7278.0991 3698.886)\">\r\n                    <stop offset=\"0\" style=\"stop-color:#C0D84E\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#5CBC6A\"></stop>\r\n                  </linearGradient>\r\n                  <path fill=\"url(#watch_SVGID_1_)\" d=\"M252,78.7c-16,16-16,41.9,0,57.9C268,120.6,268,94.7,252,78.7z\"></path>\r\n                  <path fill=\"#5CBC6A\" d=\"M252,136.6V78.7C236,94.7,236,120.6,252,136.6z\"></path>\r\n                </g>\r\n                <g>\r\n                  <linearGradient id=\"watch_SVGID_2_\" gradientUnits=\"userSpaceOnUse\" x1=\"270\" y1=\"136\" x2=\"270\" y2=\"100\">\r\n                    <stop offset=\"0\" style=\"stop-color:#C0D84E\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#5CBC6A\"></stop>\r\n                  </linearGradient>\r\n                  <path fill=\"url(#watch_SVGID_2_)\" d=\"M288,100c-19.9,0-36,16.1-36,36C271.9,136,288,119.9,288,100z\"></path>\r\n                  <path fill=\"#5CBC6A\" d=\"M252,136l36-36C268.1,100,252,116.1,252,136z\"></path>\r\n                </g>\r\n                <g>\r\n                  <linearGradient id=\"watch_SVGID_3_\" gradientUnits=\"userSpaceOnUse\" x1=\"232\" y1=\"164\" x2=\"232\" y2=\"136\">\r\n                    <stop offset=\"0\" style=\"stop-color:#F15B51\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#F89E2B\"></stop>\r\n                  </linearGradient>\r\n                  <rect x=\"208\" y=\"136\" fill=\"url(#watch_SVGID_3_)\" width=\"48\" height=\"28\"></rect>\r\n                  <rect x=\"256\" y=\"136\" fill=\"#F15B51\" width=\"16\" height=\"28\"></rect>\r\n                </g>\r\n                <g>\r\n                  <path fill=\"#B1BFC3\" d=\"M192,160c0,2.2-1.8,4-4,4s-4-1.8-4-4\"></path>\r\n                  <polygon fill=\"#B1BFC3\" points=\"192,160 144,160 136,128 184,128 \"></polygon>\r\n                  <linearGradient id=\"watch_SVGID_4_\" gradientUnits=\"userSpaceOnUse\" x1=\"128\" y1=\"160\" x2=\"184\" y2=\"160\">\r\n                    <stop offset=\"0\" style=\"stop-color:#F1F2F3\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#B1BFC3\"></stop>\r\n                  </linearGradient>\r\n                  <rect x=\"128\" y=\"156\" fill=\"url(#watch_SVGID_4_)\" width=\"56\" height=\"8\"></rect>\r\n                  <rect x=\"184\" y=\"160\" fill=\"#B1BFC3\" width=\"4\" height=\"4\"></rect>\r\n                </g>\r\n                <rect x=\"264\" y=\"164\" fill=\"#F89E2B\" width=\"16\" height=\"12\"></rect>\r\n                <linearGradient id=\"watch_SVGID_5_\" gradientUnits=\"userSpaceOnUse\" x1=\"120\" y1=\"184\" x2=\"248\" y2=\"184\">\r\n                  <stop offset=\"0\" style=\"stop-color:#FFCF30\"></stop>\r\n                  <stop offset=\"1\" style=\"stop-color:#F89E2B\"></stop>\r\n                </linearGradient>\r\n                <rect x=\"120\" y=\"176\" fill=\"url(#watch_SVGID_5_)\" width=\"128\" height=\"16\"></rect>\r\n                <rect x=\"120\" y=\"176\" fill=\"#F89E2B\" width=\"128\" height=\"8\"></rect>\r\n                <rect x=\"120\" y=\"164\" fill=\"#FFCF30\" width=\"128\" height=\"12\"></rect>\r\n                <g>\r\n                  <path fill=\"#B1BFC3\" d=\"M72,136c0,4.4,3.6,8,8,8h168c4.4,0,8-3.6,8-8V24c0-4.4-3.6-8-8-8H80c-4.4,0-8,3.6-8,8V136z\"></path>\r\n                  <linearGradient id=\"watch_SVGID_6_\" gradientUnits=\"userSpaceOnUse\" x1=\"156\" y1=\"120\" x2=\"156\" y2=\"16\">\r\n                    <stop offset=\"0\" style=\"stop-color:#3C3D46\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#5D5B6A\"></stop>\r\n                  </linearGradient>\r\n                  <path fill=\"url(#watch_SVGID_6_)\" d=\"M240,16H72c-4.4,0-8,3.6-8,8v96h184V24C248,19.6,244.4,16,240,16z\"></path>\r\n                  <linearGradient id=\"watch_SVGID_7_\" gradientUnits=\"userSpaceOnUse\" x1=\"156\" y1=\"144\" x2=\"156\" y2=\"120\">\r\n                    <stop offset=\"0\" style=\"stop-color:#F1F2F3\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#B1BFC3\"></stop>\r\n                  </linearGradient>\r\n                  <path fill=\"url(#watch_SVGID_7_)\" d=\"M64,120v16c0,4.4,3.6,8,8,8h168c4.4,0,8-3.6,8-8v-16H64z\"></path>\r\n                  <linearGradient id=\"watch_SVGID_8_\" gradientUnits=\"userSpaceOnUse\" x1=\"156\" y1=\"112\" x2=\"156\" y2=\"24\">\r\n                    <stop offset=\"0\" style=\"stop-color:#626EB3\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#22ABC6\"></stop>\r\n                  </linearGradient>\r\n                  <rect x=\"72\" y=\"24\" fill=\"url(#watch_SVGID_8_)\" width=\"168\" height=\"88\"></rect>\r\n                </g>\r\n                <linearGradient id=\"watch_SVGID_9_\" gradientUnits=\"userSpaceOnUse\" x1=\"168\" y1=\"104\" x2=\"168\" y2=\"40\">\r\n                  <stop offset=\"0\" style=\"stop-color:#3C3D46\"></stop>\r\n                  <stop offset=\"1\" style=\"stop-color:#5D5B6A\"></stop>\r\n                </linearGradient>\r\n                <path fill=\"url(#watch_SVGID_9_)\" d=\"M216,100c0,2.2-1.8,4-4,4h-88c-2.2,0-4-1.8-4-4V44c0-2.2,1.8-4,4-4h88c2.2,0,4,1.8,4,4V100z\"></path>\r\n                <rect x=\"248\" y=\"164\" fill=\"#F89E2B\" width=\"24\" height=\"28\"></rect>\r\n                <g>\r\n                  <linearGradient id=\"watch_SVGID_10_\" gradientUnits=\"userSpaceOnUse\" x1=\"80\" y1=\"168\" x2=\"80\" y2=\"104\">\r\n                    <stop offset=\"0\" style=\"stop-color:#626EB3\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#22ABC6\"></stop>\r\n                  </linearGradient>\r\n                  <path fill=\"url(#watch_SVGID_10_)\" d=\"M80,104c-35.3,0-64,28.7-64,64h128C144,132.7,115.3,104,80,104z\"></path>\r\n                  <path fill=\"#626EB3\" d=\"M80,104c-4.1,0-8.1,0.4-12,1.1c29.6,5.6,52,31.6,52,62.9h24C144,132.7,115.3,104,80,104z\"></path>\r\n                  <linearGradient id=\"watch_SVGID_11_\" gradientUnits=\"userSpaceOnUse\" x1=\"80\" y1=\"112\" x2=\"80\" y2=\"16\">\r\n                    <stop offset=\"0\" style=\"stop-color:#F89E2B\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#FFCF30\"></stop>\r\n                  </linearGradient>\r\n                  <circle fill=\"url(#watch_SVGID_11_)\" cx=\"80\" cy=\"64\" r=\"48\"></circle>\r\n                  <ellipse fill=\"#3C3D46\" cx=\"72\" cy=\"104\" rx=\"48\" ry=\"16\"></ellipse>\r\n                  <rect x=\"24\" y=\"44\" fill=\"#3C3D46\" width=\"96\" height=\"60\"></rect>\r\n                  <path fill=\"#3C3D46\" d=\"M120,56c0,30.9-21.5,56-48,56S24,86.9,24,56\"></path>\r\n                </g>\r\n                <rect x=\"120\" y=\"168\" fill=\"#626EB3\" width=\"24\" height=\"24\"></rect>\r\n                <path fill=\"#3C3D46\" d=\"M96,128H40c-13.3,0-24,10.7-24,24v40h104v-40C120,138.7,109.3,128,96,128z\"></path>\r\n                <linearGradient id=\"watch_SVGID_12_\" gradientUnits=\"userSpaceOnUse\" x1=\"52\" y1=\"192\" x2=\"52\" y2=\"128\">\r\n                  <stop offset=\"0\" style=\"stop-color:#5D5B6A\"></stop>\r\n                  <stop offset=\"1\" style=\"stop-color:#3C3D46\"></stop>\r\n                </linearGradient>\r\n                <path fill=\"url(#watch_SVGID_12_)\" d=\"M80,128H24c-13.3,0-24,10.7-24,24v40h104v-40C104,138.7,93.3,128,80,128z\"></path>\r\n                <g class=\"watch-teacher\">\r\n                  <path fill=\"#626EB3\" d=\"M216,34.1v39.8c10.1-1,18-9.5,18-19.9S226.1,35.1,216,34.1z\"></path>\r\n                  <path fill=\"#3C3D46\" d=\"M194,54c0,11,9,20,20,20c0.7,0,1.3,0,2-0.1V40h-16.3C196.2,43.6,194,48.5,194,54z\"></path>\r\n                  <circle fill=\"#FFFFFF\" cx=\"212\" cy=\"52\" r=\"20\"></circle>\r\n                  <linearGradient id=\"watch_SVGID_13_\" gradientUnits=\"userSpaceOnUse\" x1=\"199.7236\" y1=\"67\" x2=\"224.2764\" y2=\"67\">\r\n                    <stop offset=\"0\" style=\"stop-color:#C0D84E\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#5CBC6A\"></stop>\r\n                  </linearGradient>\r\n                  <path fill=\"url(#watch_SVGID_13_)\" d=\"M212,72c4.6,0,8.9-1.6,12.3-4.2c-2.9-3.5-7.3-5.8-12.3-5.8s-9.3,2.2-12.3,5.8C203.1,70.4,207.4,72,212,72z\"></path>\r\n                  <g>\r\n                    <circle fill=\"#3C3D46\" cx=\"212\" cy=\"49\" r=\"13\"></circle>\r\n                    <circle fill=\"#F89E2B\" cx=\"224\" cy=\"52\" r=\"3\"></circle>\r\n                    <circle fill=\"#F89E2B\" cx=\"200\" cy=\"52\" r=\"3\"></circle>\r\n                    <linearGradient id=\"watch_SVGID_14_\" gradientUnits=\"userSpaceOnUse\" x1=\"212\" y1=\"64\" x2=\"212\" y2=\"40\">\r\n                      <stop offset=\"0\" style=\"stop-color:#F89E2B\"></stop>\r\n                      <stop offset=\"1\" style=\"stop-color:#FFCF30\"></stop>\r\n                    </linearGradient>\r\n                    <circle fill=\"url(#watch_SVGID_14_)\" cx=\"212\" cy=\"52\" r=\"12\"></circle>\r\n                    <path fill=\"#F89E2B\" d=\"M222,50c0,6.6-5.4,12-12,12c-2.8,0-5.4-1-7.4-2.6c2.2,2.8,5.6,4.6,9.4,4.6c6.6,0,12-5.4,12-12c0-0.7-0.1-1.3-0.2-2H222z\"></path>\r\n                    <path class=\"watch-mouth\" fill=\"#3C3D46\" d=\"M208,55c0,2.2,1.8,4,4,4s4-1.8,4-4H208z\"></path>\r\n                    <circle fill=\"#3C3D46\" cx=\"208\" cy=\"50\" r=\"1\"></circle>\r\n                    <path fill=\"#F89E2B\" d=\"M213.5,51.2c0,0.8-0.7,1.5-1.5,1.5s-1.5-0.7-1.5-1.5\"></path>\r\n                    <circle fill=\"#3C3D46\" cx=\"216\" cy=\"50\" r=\"1\"></circle>\r\n                    <path fill=\"#3C3D46\" d=\"M217.8,39.6L204,40l-3,6h1c0-2.2,4.5-4,10-4s10,1.8,10,4h1L217.8,39.6z\"></path>\r\n                    <path fill=\"#3C3D46\" d=\"M210,35c-2.2,0-4,1.8-4,4C208.2,39,210,37.2,210,35z\"></path>\r\n                    <path fill=\"#3C3D46\" d=\"M206.3,35.2c-1.6,1.6-1.6,4.1,0,5.7C207.9,39.3,207.9,36.7,206.3,35.2z\"></path>\r\n                    <line fill=\"none\" stroke=\"#3C3D46\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" x1=\"201\" y1=\"45\" x2=\"201\"\r\n                      y2=\"51\"></line>\r\n                    <line fill=\"none\" stroke=\"#3C3D46\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" x1=\"223\" y1=\"45\" x2=\"223\"\r\n                      y2=\"51\"></line>\r\n                  </g>\r\n                </g>\r\n                <linearGradient id=\"watch_SVGID_15_\" gradientUnits=\"userSpaceOnUse\" x1=\"134\" y1=\"56\" x2=\"170\" y2=\"56\">\r\n                  <stop offset=\"0\" style=\"stop-color:#C0D84E\"></stop>\r\n                  <stop offset=\"1\" style=\"stop-color:#5CBC6A\"></stop>\r\n                </linearGradient>\r\n                <line class=\"watch-code--a\" fill=\"none\" stroke=\"url(#watch_SVGID_15_)\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-miterlimit=\"10\"\r\n                  x1=\"136\" y1=\"56\" x2=\"168\" y2=\"56\"></line>\r\n                <linearGradient id=\"watch_SVGID_16_\" gradientUnits=\"userSpaceOnUse\" x1=\"142\" y1=\"64\" x2=\"186\" y2=\"64\">\r\n                  <stop offset=\"0\" style=\"stop-color:#F89E2B\"></stop>\r\n                  <stop offset=\"1\" style=\"stop-color:#F15B51\"></stop>\r\n                </linearGradient>\r\n                <line class=\"watch-code--b\" fill=\"none\" stroke=\"url(#watch_SVGID_16_)\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-miterlimit=\"10\"\r\n                  x1=\"144\" y1=\"64\" x2=\"184\" y2=\"64\"></line>\r\n                <linearGradient id=\"watch_SVGID_17_\" gradientUnits=\"userSpaceOnUse\" x1=\"142\" y1=\"72\" x2=\"170\" y2=\"72\">\r\n                  <stop offset=\"0\" style=\"stop-color:#22ABC6\"></stop>\r\n                  <stop offset=\"1\" style=\"stop-color:#626EB3\"></stop>\r\n                </linearGradient>\r\n                <line class=\"watch-code--c\" fill=\"none\" stroke=\"url(#watch_SVGID_17_)\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-miterlimit=\"10\"\r\n                  x1=\"144\" y1=\"72\" x2=\"168\" y2=\"72\"></line>\r\n                <linearGradient id=\"watch_SVGID_18_\" gradientUnits=\"userSpaceOnUse\" x1=\"142\" y1=\"80\" x2=\"178\" y2=\"80\">\r\n                  <stop offset=\"0\" style=\"stop-color:#FFCF30\"></stop>\r\n                  <stop offset=\"1\" style=\"stop-color:#F89E2B\"></stop>\r\n                </linearGradient>\r\n                <line class=\"watch-code--d\" fill=\"none\" stroke=\"url(#watch_SVGID_18_)\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-miterlimit=\"10\"\r\n                  x1=\"144\" y1=\"80\" x2=\"176\" y2=\"80\"></line>\r\n                <ellipse fill=\"#3C3D46\" cx=\"76\" cy=\"44\" rx=\"52\" ry=\"44\"></ellipse>\r\n              </g>\r\n              <polygon fill=\"#F89E2B\" points=\"164,192 144,192 144,164 160,164 160,176 164,176 \"></polygon>\r\n            </svg>\r\n          </div>\r\n\r\n          <div class=\"col-md-6 timeline-section-col\">\r\n            <h2 class=\"timeline-waypoint timeline-waypoint--first\">Рівень 5: Agile/SCRUM, GIT</h2>\r\n            <p>\r\n              Вивчаємо робочий процес. Крім верстки та програмування ви дізнаєтеся як працювати з кодом, ми навчимо вас працювати з \r\n              GIT - системою контролю версій де будемо зберігати проекти та повертати до будь-якого стану при потребі, відслідковувати прогрес \r\n              та виконані завдання, ознайомимось з робочим процесом Agile/SCRUM - розберемо як працювати в команді, планувати, розбивати та виконувати \r\n              завдання на проектах. Це основні процеси по яких програмісти працюють кожен день, отже ми вас цьому навчимо.\r\n            </p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row timeline-section timeline-section\">\r\n          <div class=\"col-md-6 timeline-section-col\">\r\n            <svg class=\"center\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"288px\" height=\"192px\" viewBox=\"0 0 288 192\">\r\n              <defs></defs>\r\n              <g>\r\n                <g>\r\n                  <linearGradient id=\"watch_SVGID_1_\" gradientUnits=\"userSpaceOnUse\" x1=\"-2428.7991\" y1=\"-7487.1206\" x2=\"-2428.7991\" y2=\"-7528.0908\"\r\n                    gradientTransform=\"matrix(0.7071 -0.7071 0.7071 0.7071 7278.0991 3698.886)\">\r\n                    <stop offset=\"0\" style=\"stop-color:#C0D84E\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#5CBC6A\"></stop>\r\n                  </linearGradient>\r\n                  <path fill=\"url(#watch_SVGID_1_)\" d=\"M252,78.7c-16,16-16,41.9,0,57.9C268,120.6,268,94.7,252,78.7z\"></path>\r\n                  <path fill=\"#5CBC6A\" d=\"M252,136.6V78.7C236,94.7,236,120.6,252,136.6z\"></path>\r\n                </g>\r\n                <g>\r\n                  <linearGradient id=\"watch_SVGID_2_\" gradientUnits=\"userSpaceOnUse\" x1=\"270\" y1=\"136\" x2=\"270\" y2=\"100\">\r\n                    <stop offset=\"0\" style=\"stop-color:#C0D84E\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#5CBC6A\"></stop>\r\n                  </linearGradient>\r\n                  <path fill=\"url(#watch_SVGID_2_)\" d=\"M288,100c-19.9,0-36,16.1-36,36C271.9,136,288,119.9,288,100z\"></path>\r\n                  <path fill=\"#5CBC6A\" d=\"M252,136l36-36C268.1,100,252,116.1,252,136z\"></path>\r\n                </g>\r\n                <g>\r\n                  <linearGradient id=\"watch_SVGID_3_\" gradientUnits=\"userSpaceOnUse\" x1=\"232\" y1=\"164\" x2=\"232\" y2=\"136\">\r\n                    <stop offset=\"0\" style=\"stop-color:#F15B51\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#F89E2B\"></stop>\r\n                  </linearGradient>\r\n                  <rect x=\"208\" y=\"136\" fill=\"url(#watch_SVGID_3_)\" width=\"48\" height=\"28\"></rect>\r\n                  <rect x=\"256\" y=\"136\" fill=\"#F15B51\" width=\"16\" height=\"28\"></rect>\r\n                </g>\r\n                <g>\r\n                  <path fill=\"#B1BFC3\" d=\"M192,160c0,2.2-1.8,4-4,4s-4-1.8-4-4\"></path>\r\n                  <polygon fill=\"#B1BFC3\" points=\"192,160 144,160 136,128 184,128 \"></polygon>\r\n                  <linearGradient id=\"watch_SVGID_4_\" gradientUnits=\"userSpaceOnUse\" x1=\"128\" y1=\"160\" x2=\"184\" y2=\"160\">\r\n                    <stop offset=\"0\" style=\"stop-color:#F1F2F3\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#B1BFC3\"></stop>\r\n                  </linearGradient>\r\n                  <rect x=\"128\" y=\"156\" fill=\"url(#watch_SVGID_4_)\" width=\"56\" height=\"8\"></rect>\r\n                  <rect x=\"184\" y=\"160\" fill=\"#B1BFC3\" width=\"4\" height=\"4\"></rect>\r\n                </g>\r\n                <rect x=\"264\" y=\"164\" fill=\"#F89E2B\" width=\"16\" height=\"12\"></rect>\r\n                <linearGradient id=\"watch_SVGID_5_\" gradientUnits=\"userSpaceOnUse\" x1=\"120\" y1=\"184\" x2=\"248\" y2=\"184\">\r\n                  <stop offset=\"0\" style=\"stop-color:#FFCF30\"></stop>\r\n                  <stop offset=\"1\" style=\"stop-color:#F89E2B\"></stop>\r\n                </linearGradient>\r\n                <rect x=\"120\" y=\"176\" fill=\"url(#watch_SVGID_5_)\" width=\"128\" height=\"16\"></rect>\r\n                <rect x=\"120\" y=\"176\" fill=\"#F89E2B\" width=\"128\" height=\"8\"></rect>\r\n                <rect x=\"120\" y=\"164\" fill=\"#FFCF30\" width=\"128\" height=\"12\"></rect>\r\n                <g>\r\n                  <path fill=\"#B1BFC3\" d=\"M72,136c0,4.4,3.6,8,8,8h168c4.4,0,8-3.6,8-8V24c0-4.4-3.6-8-8-8H80c-4.4,0-8,3.6-8,8V136z\"></path>\r\n                  <linearGradient id=\"watch_SVGID_6_\" gradientUnits=\"userSpaceOnUse\" x1=\"156\" y1=\"120\" x2=\"156\" y2=\"16\">\r\n                    <stop offset=\"0\" style=\"stop-color:#3C3D46\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#5D5B6A\"></stop>\r\n                  </linearGradient>\r\n                  <path fill=\"url(#watch_SVGID_6_)\" d=\"M240,16H72c-4.4,0-8,3.6-8,8v96h184V24C248,19.6,244.4,16,240,16z\"></path>\r\n                  <linearGradient id=\"watch_SVGID_7_\" gradientUnits=\"userSpaceOnUse\" x1=\"156\" y1=\"144\" x2=\"156\" y2=\"120\">\r\n                    <stop offset=\"0\" style=\"stop-color:#F1F2F3\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#B1BFC3\"></stop>\r\n                  </linearGradient>\r\n                  <path fill=\"url(#watch_SVGID_7_)\" d=\"M64,120v16c0,4.4,3.6,8,8,8h168c4.4,0,8-3.6,8-8v-16H64z\"></path>\r\n                  <linearGradient id=\"watch_SVGID_8_\" gradientUnits=\"userSpaceOnUse\" x1=\"156\" y1=\"112\" x2=\"156\" y2=\"24\">\r\n                    <stop offset=\"0\" style=\"stop-color:#626EB3\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#22ABC6\"></stop>\r\n                  </linearGradient>\r\n                  <rect x=\"72\" y=\"24\" fill=\"url(#watch_SVGID_8_)\" width=\"168\" height=\"88\"></rect>\r\n                </g>\r\n                <linearGradient id=\"watch_SVGID_9_\" gradientUnits=\"userSpaceOnUse\" x1=\"168\" y1=\"104\" x2=\"168\" y2=\"40\">\r\n                  <stop offset=\"0\" style=\"stop-color:#3C3D46\"></stop>\r\n                  <stop offset=\"1\" style=\"stop-color:#5D5B6A\"></stop>\r\n                </linearGradient>\r\n                <path fill=\"url(#watch_SVGID_9_)\" d=\"M216,100c0,2.2-1.8,4-4,4h-88c-2.2,0-4-1.8-4-4V44c0-2.2,1.8-4,4-4h88c2.2,0,4,1.8,4,4V100z\"></path>\r\n                <rect x=\"248\" y=\"164\" fill=\"#F89E2B\" width=\"24\" height=\"28\"></rect>\r\n                <g>\r\n                  <linearGradient id=\"watch_SVGID_10_\" gradientUnits=\"userSpaceOnUse\" x1=\"80\" y1=\"168\" x2=\"80\" y2=\"104\">\r\n                    <stop offset=\"0\" style=\"stop-color:#626EB3\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#22ABC6\"></stop>\r\n                  </linearGradient>\r\n                  <path fill=\"url(#watch_SVGID_10_)\" d=\"M80,104c-35.3,0-64,28.7-64,64h128C144,132.7,115.3,104,80,104z\"></path>\r\n                  <path fill=\"#626EB3\" d=\"M80,104c-4.1,0-8.1,0.4-12,1.1c29.6,5.6,52,31.6,52,62.9h24C144,132.7,115.3,104,80,104z\"></path>\r\n                  <linearGradient id=\"watch_SVGID_11_\" gradientUnits=\"userSpaceOnUse\" x1=\"80\" y1=\"112\" x2=\"80\" y2=\"16\">\r\n                    <stop offset=\"0\" style=\"stop-color:#F89E2B\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#FFCF30\"></stop>\r\n                  </linearGradient>\r\n                  <circle fill=\"url(#watch_SVGID_11_)\" cx=\"80\" cy=\"64\" r=\"48\"></circle>\r\n                  <ellipse fill=\"#3C3D46\" cx=\"72\" cy=\"104\" rx=\"48\" ry=\"16\"></ellipse>\r\n                  <rect x=\"24\" y=\"44\" fill=\"#3C3D46\" width=\"96\" height=\"60\"></rect>\r\n                  <path fill=\"#3C3D46\" d=\"M120,56c0,30.9-21.5,56-48,56S24,86.9,24,56\"></path>\r\n                </g>\r\n                <rect x=\"120\" y=\"168\" fill=\"#626EB3\" width=\"24\" height=\"24\"></rect>\r\n                <path fill=\"#3C3D46\" d=\"M96,128H40c-13.3,0-24,10.7-24,24v40h104v-40C120,138.7,109.3,128,96,128z\"></path>\r\n                <linearGradient id=\"watch_SVGID_12_\" gradientUnits=\"userSpaceOnUse\" x1=\"52\" y1=\"192\" x2=\"52\" y2=\"128\">\r\n                  <stop offset=\"0\" style=\"stop-color:#5D5B6A\"></stop>\r\n                  <stop offset=\"1\" style=\"stop-color:#3C3D46\"></stop>\r\n                </linearGradient>\r\n                <path fill=\"url(#watch_SVGID_12_)\" d=\"M80,128H24c-13.3,0-24,10.7-24,24v40h104v-40C104,138.7,93.3,128,80,128z\"></path>\r\n                <g class=\"watch-teacher\">\r\n                  <path fill=\"#626EB3\" d=\"M216,34.1v39.8c10.1-1,18-9.5,18-19.9S226.1,35.1,216,34.1z\"></path>\r\n                  <path fill=\"#3C3D46\" d=\"M194,54c0,11,9,20,20,20c0.7,0,1.3,0,2-0.1V40h-16.3C196.2,43.6,194,48.5,194,54z\"></path>\r\n                  <circle fill=\"#FFFFFF\" cx=\"212\" cy=\"52\" r=\"20\"></circle>\r\n                  <linearGradient id=\"watch_SVGID_13_\" gradientUnits=\"userSpaceOnUse\" x1=\"199.7236\" y1=\"67\" x2=\"224.2764\" y2=\"67\">\r\n                    <stop offset=\"0\" style=\"stop-color:#C0D84E\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#5CBC6A\"></stop>\r\n                  </linearGradient>\r\n                  <path fill=\"url(#watch_SVGID_13_)\" d=\"M212,72c4.6,0,8.9-1.6,12.3-4.2c-2.9-3.5-7.3-5.8-12.3-5.8s-9.3,2.2-12.3,5.8C203.1,70.4,207.4,72,212,72z\"></path>\r\n                  <g>\r\n                    <circle fill=\"#3C3D46\" cx=\"212\" cy=\"49\" r=\"13\"></circle>\r\n                    <circle fill=\"#F89E2B\" cx=\"224\" cy=\"52\" r=\"3\"></circle>\r\n                    <circle fill=\"#F89E2B\" cx=\"200\" cy=\"52\" r=\"3\"></circle>\r\n                    <linearGradient id=\"watch_SVGID_14_\" gradientUnits=\"userSpaceOnUse\" x1=\"212\" y1=\"64\" x2=\"212\" y2=\"40\">\r\n                      <stop offset=\"0\" style=\"stop-color:#F89E2B\"></stop>\r\n                      <stop offset=\"1\" style=\"stop-color:#FFCF30\"></stop>\r\n                    </linearGradient>\r\n                    <circle fill=\"url(#watch_SVGID_14_)\" cx=\"212\" cy=\"52\" r=\"12\"></circle>\r\n                    <path fill=\"#F89E2B\" d=\"M222,50c0,6.6-5.4,12-12,12c-2.8,0-5.4-1-7.4-2.6c2.2,2.8,5.6,4.6,9.4,4.6c6.6,0,12-5.4,12-12c0-0.7-0.1-1.3-0.2-2H222z\"></path>\r\n                    <path class=\"watch-mouth\" fill=\"#3C3D46\" d=\"M208,55c0,2.2,1.8,4,4,4s4-1.8,4-4H208z\"></path>\r\n                    <circle fill=\"#3C3D46\" cx=\"208\" cy=\"50\" r=\"1\"></circle>\r\n                    <path fill=\"#F89E2B\" d=\"M213.5,51.2c0,0.8-0.7,1.5-1.5,1.5s-1.5-0.7-1.5-1.5\"></path>\r\n                    <circle fill=\"#3C3D46\" cx=\"216\" cy=\"50\" r=\"1\"></circle>\r\n                    <path fill=\"#3C3D46\" d=\"M217.8,39.6L204,40l-3,6h1c0-2.2,4.5-4,10-4s10,1.8,10,4h1L217.8,39.6z\"></path>\r\n                    <path fill=\"#3C3D46\" d=\"M210,35c-2.2,0-4,1.8-4,4C208.2,39,210,37.2,210,35z\"></path>\r\n                    <path fill=\"#3C3D46\" d=\"M206.3,35.2c-1.6,1.6-1.6,4.1,0,5.7C207.9,39.3,207.9,36.7,206.3,35.2z\"></path>\r\n                    <line fill=\"none\" stroke=\"#3C3D46\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" x1=\"201\" y1=\"45\" x2=\"201\"\r\n                      y2=\"51\"></line>\r\n                    <line fill=\"none\" stroke=\"#3C3D46\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" x1=\"223\" y1=\"45\" x2=\"223\"\r\n                      y2=\"51\"></line>\r\n                  </g>\r\n                </g>\r\n                <linearGradient id=\"watch_SVGID_15_\" gradientUnits=\"userSpaceOnUse\" x1=\"134\" y1=\"56\" x2=\"170\" y2=\"56\">\r\n                  <stop offset=\"0\" style=\"stop-color:#C0D84E\"></stop>\r\n                  <stop offset=\"1\" style=\"stop-color:#5CBC6A\"></stop>\r\n                </linearGradient>\r\n                <line class=\"watch-code--a\" fill=\"none\" stroke=\"url(#watch_SVGID_15_)\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-miterlimit=\"10\"\r\n                  x1=\"136\" y1=\"56\" x2=\"168\" y2=\"56\"></line>\r\n                <linearGradient id=\"watch_SVGID_16_\" gradientUnits=\"userSpaceOnUse\" x1=\"142\" y1=\"64\" x2=\"186\" y2=\"64\">\r\n                  <stop offset=\"0\" style=\"stop-color:#F89E2B\"></stop>\r\n                  <stop offset=\"1\" style=\"stop-color:#F15B51\"></stop>\r\n                </linearGradient>\r\n                <line class=\"watch-code--b\" fill=\"none\" stroke=\"url(#watch_SVGID_16_)\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-miterlimit=\"10\"\r\n                  x1=\"144\" y1=\"64\" x2=\"184\" y2=\"64\"></line>\r\n                <linearGradient id=\"watch_SVGID_17_\" gradientUnits=\"userSpaceOnUse\" x1=\"142\" y1=\"72\" x2=\"170\" y2=\"72\">\r\n                  <stop offset=\"0\" style=\"stop-color:#22ABC6\"></stop>\r\n                  <stop offset=\"1\" style=\"stop-color:#626EB3\"></stop>\r\n                </linearGradient>\r\n                <line class=\"watch-code--c\" fill=\"none\" stroke=\"url(#watch_SVGID_17_)\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-miterlimit=\"10\"\r\n                  x1=\"144\" y1=\"72\" x2=\"168\" y2=\"72\"></line>\r\n                <linearGradient id=\"watch_SVGID_18_\" gradientUnits=\"userSpaceOnUse\" x1=\"142\" y1=\"80\" x2=\"178\" y2=\"80\">\r\n                  <stop offset=\"0\" style=\"stop-color:#FFCF30\"></stop>\r\n                  <stop offset=\"1\" style=\"stop-color:#F89E2B\"></stop>\r\n                </linearGradient>\r\n                <line class=\"watch-code--d\" fill=\"none\" stroke=\"url(#watch_SVGID_18_)\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-miterlimit=\"10\"\r\n                  x1=\"144\" y1=\"80\" x2=\"176\" y2=\"80\"></line>\r\n                <ellipse fill=\"#3C3D46\" cx=\"76\" cy=\"44\" rx=\"52\" ry=\"44\"></ellipse>\r\n              </g>\r\n              <polygon fill=\"#F89E2B\" points=\"164,192 144,192 144,164 160,164 160,176 164,176 \"></polygon>\r\n            </svg>\r\n          </div>\r\n\r\n          <div class=\"col-md-6 timeline-section-col\">\r\n            <h2 class=\"timeline-waypoint timeline-waypoint--first\">Рівень 5: Підготовка/пошук вакансії</h2>\r\n            <p>\r\n              До цього моменту ви вивчите технічну сторону, але що робити далі? Як позиціонувати себе на ринку, де шукати роботу, які компанії\r\n              бувають, як і куди подаватися, як створити круте резюме, що писати в досвід якщо його ще нема, як показати\r\n              рекрутеру що ти кращий за конкурентів, заповнюємо правильно основні профілі та набиваємо базу контактів рекрутерів.\r\n              Публікуємо та заповнюємо портфоліо з першими проектами. Складемо вам план кар'єри, дамо поради по працевлаштуванню та пошуку роботодавців вдома та стажувань за кордоном, це все\r\n              реально, ми покажемо що і як робити покроково!\r\n            </p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row timeline-section reverse timeline-section--last\">\r\n          <div class=\"col-md-6 timeline-section-col\">\r\n            <svg class=\"center\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"288px\" height=\"192px\" viewBox=\"0 0 288 192\">\r\n              <defs></defs>\r\n              <g>\r\n                <g>\r\n                  <linearGradient id=\"watch_SVGID_1_\" gradientUnits=\"userSpaceOnUse\" x1=\"-2428.7991\" y1=\"-7487.1206\" x2=\"-2428.7991\" y2=\"-7528.0908\"\r\n                    gradientTransform=\"matrix(0.7071 -0.7071 0.7071 0.7071 7278.0991 3698.886)\">\r\n                    <stop offset=\"0\" style=\"stop-color:#C0D84E\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#5CBC6A\"></stop>\r\n                  </linearGradient>\r\n                  <path fill=\"url(#watch_SVGID_1_)\" d=\"M252,78.7c-16,16-16,41.9,0,57.9C268,120.6,268,94.7,252,78.7z\"></path>\r\n                  <path fill=\"#5CBC6A\" d=\"M252,136.6V78.7C236,94.7,236,120.6,252,136.6z\"></path>\r\n                </g>\r\n                <g>\r\n                  <linearGradient id=\"watch_SVGID_2_\" gradientUnits=\"userSpaceOnUse\" x1=\"270\" y1=\"136\" x2=\"270\" y2=\"100\">\r\n                    <stop offset=\"0\" style=\"stop-color:#C0D84E\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#5CBC6A\"></stop>\r\n                  </linearGradient>\r\n                  <path fill=\"url(#watch_SVGID_2_)\" d=\"M288,100c-19.9,0-36,16.1-36,36C271.9,136,288,119.9,288,100z\"></path>\r\n                  <path fill=\"#5CBC6A\" d=\"M252,136l36-36C268.1,100,252,116.1,252,136z\"></path>\r\n                </g>\r\n                <g>\r\n                  <linearGradient id=\"watch_SVGID_3_\" gradientUnits=\"userSpaceOnUse\" x1=\"232\" y1=\"164\" x2=\"232\" y2=\"136\">\r\n                    <stop offset=\"0\" style=\"stop-color:#F15B51\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#F89E2B\"></stop>\r\n                  </linearGradient>\r\n                  <rect x=\"208\" y=\"136\" fill=\"url(#watch_SVGID_3_)\" width=\"48\" height=\"28\"></rect>\r\n                  <rect x=\"256\" y=\"136\" fill=\"#F15B51\" width=\"16\" height=\"28\"></rect>\r\n                </g>\r\n                <g>\r\n                  <path fill=\"#B1BFC3\" d=\"M192,160c0,2.2-1.8,4-4,4s-4-1.8-4-4\"></path>\r\n                  <polygon fill=\"#B1BFC3\" points=\"192,160 144,160 136,128 184,128 \"></polygon>\r\n                  <linearGradient id=\"watch_SVGID_4_\" gradientUnits=\"userSpaceOnUse\" x1=\"128\" y1=\"160\" x2=\"184\" y2=\"160\">\r\n                    <stop offset=\"0\" style=\"stop-color:#F1F2F3\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#B1BFC3\"></stop>\r\n                  </linearGradient>\r\n                  <rect x=\"128\" y=\"156\" fill=\"url(#watch_SVGID_4_)\" width=\"56\" height=\"8\"></rect>\r\n                  <rect x=\"184\" y=\"160\" fill=\"#B1BFC3\" width=\"4\" height=\"4\"></rect>\r\n                </g>\r\n                <rect x=\"264\" y=\"164\" fill=\"#F89E2B\" width=\"16\" height=\"12\"></rect>\r\n                <linearGradient id=\"watch_SVGID_5_\" gradientUnits=\"userSpaceOnUse\" x1=\"120\" y1=\"184\" x2=\"248\" y2=\"184\">\r\n                  <stop offset=\"0\" style=\"stop-color:#FFCF30\"></stop>\r\n                  <stop offset=\"1\" style=\"stop-color:#F89E2B\"></stop>\r\n                </linearGradient>\r\n                <rect x=\"120\" y=\"176\" fill=\"url(#watch_SVGID_5_)\" width=\"128\" height=\"16\"></rect>\r\n                <rect x=\"120\" y=\"176\" fill=\"#F89E2B\" width=\"128\" height=\"8\"></rect>\r\n                <rect x=\"120\" y=\"164\" fill=\"#FFCF30\" width=\"128\" height=\"12\"></rect>\r\n                <g>\r\n                  <path fill=\"#B1BFC3\" d=\"M72,136c0,4.4,3.6,8,8,8h168c4.4,0,8-3.6,8-8V24c0-4.4-3.6-8-8-8H80c-4.4,0-8,3.6-8,8V136z\"></path>\r\n                  <linearGradient id=\"watch_SVGID_6_\" gradientUnits=\"userSpaceOnUse\" x1=\"156\" y1=\"120\" x2=\"156\" y2=\"16\">\r\n                    <stop offset=\"0\" style=\"stop-color:#3C3D46\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#5D5B6A\"></stop>\r\n                  </linearGradient>\r\n                  <path fill=\"url(#watch_SVGID_6_)\" d=\"M240,16H72c-4.4,0-8,3.6-8,8v96h184V24C248,19.6,244.4,16,240,16z\"></path>\r\n                  <linearGradient id=\"watch_SVGID_7_\" gradientUnits=\"userSpaceOnUse\" x1=\"156\" y1=\"144\" x2=\"156\" y2=\"120\">\r\n                    <stop offset=\"0\" style=\"stop-color:#F1F2F3\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#B1BFC3\"></stop>\r\n                  </linearGradient>\r\n                  <path fill=\"url(#watch_SVGID_7_)\" d=\"M64,120v16c0,4.4,3.6,8,8,8h168c4.4,0,8-3.6,8-8v-16H64z\"></path>\r\n                  <linearGradient id=\"watch_SVGID_8_\" gradientUnits=\"userSpaceOnUse\" x1=\"156\" y1=\"112\" x2=\"156\" y2=\"24\">\r\n                    <stop offset=\"0\" style=\"stop-color:#626EB3\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#22ABC6\"></stop>\r\n                  </linearGradient>\r\n                  <rect x=\"72\" y=\"24\" fill=\"url(#watch_SVGID_8_)\" width=\"168\" height=\"88\"></rect>\r\n                </g>\r\n                <linearGradient id=\"watch_SVGID_9_\" gradientUnits=\"userSpaceOnUse\" x1=\"168\" y1=\"104\" x2=\"168\" y2=\"40\">\r\n                  <stop offset=\"0\" style=\"stop-color:#3C3D46\"></stop>\r\n                  <stop offset=\"1\" style=\"stop-color:#5D5B6A\"></stop>\r\n                </linearGradient>\r\n                <path fill=\"url(#watch_SVGID_9_)\" d=\"M216,100c0,2.2-1.8,4-4,4h-88c-2.2,0-4-1.8-4-4V44c0-2.2,1.8-4,4-4h88c2.2,0,4,1.8,4,4V100z\"></path>\r\n                <rect x=\"248\" y=\"164\" fill=\"#F89E2B\" width=\"24\" height=\"28\"></rect>\r\n                <g>\r\n                  <linearGradient id=\"watch_SVGID_10_\" gradientUnits=\"userSpaceOnUse\" x1=\"80\" y1=\"168\" x2=\"80\" y2=\"104\">\r\n                    <stop offset=\"0\" style=\"stop-color:#626EB3\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#22ABC6\"></stop>\r\n                  </linearGradient>\r\n                  <path fill=\"url(#watch_SVGID_10_)\" d=\"M80,104c-35.3,0-64,28.7-64,64h128C144,132.7,115.3,104,80,104z\"></path>\r\n                  <path fill=\"#626EB3\" d=\"M80,104c-4.1,0-8.1,0.4-12,1.1c29.6,5.6,52,31.6,52,62.9h24C144,132.7,115.3,104,80,104z\"></path>\r\n                  <linearGradient id=\"watch_SVGID_11_\" gradientUnits=\"userSpaceOnUse\" x1=\"80\" y1=\"112\" x2=\"80\" y2=\"16\">\r\n                    <stop offset=\"0\" style=\"stop-color:#F89E2B\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#FFCF30\"></stop>\r\n                  </linearGradient>\r\n                  <circle fill=\"url(#watch_SVGID_11_)\" cx=\"80\" cy=\"64\" r=\"48\"></circle>\r\n                  <ellipse fill=\"#3C3D46\" cx=\"72\" cy=\"104\" rx=\"48\" ry=\"16\"></ellipse>\r\n                  <rect x=\"24\" y=\"44\" fill=\"#3C3D46\" width=\"96\" height=\"60\"></rect>\r\n                  <path fill=\"#3C3D46\" d=\"M120,56c0,30.9-21.5,56-48,56S24,86.9,24,56\"></path>\r\n                </g>\r\n                <rect x=\"120\" y=\"168\" fill=\"#626EB3\" width=\"24\" height=\"24\"></rect>\r\n                <path fill=\"#3C3D46\" d=\"M96,128H40c-13.3,0-24,10.7-24,24v40h104v-40C120,138.7,109.3,128,96,128z\"></path>\r\n                <linearGradient id=\"watch_SVGID_12_\" gradientUnits=\"userSpaceOnUse\" x1=\"52\" y1=\"192\" x2=\"52\" y2=\"128\">\r\n                  <stop offset=\"0\" style=\"stop-color:#5D5B6A\"></stop>\r\n                  <stop offset=\"1\" style=\"stop-color:#3C3D46\"></stop>\r\n                </linearGradient>\r\n                <path fill=\"url(#watch_SVGID_12_)\" d=\"M80,128H24c-13.3,0-24,10.7-24,24v40h104v-40C104,138.7,93.3,128,80,128z\"></path>\r\n                <g class=\"watch-teacher\">\r\n                  <path fill=\"#626EB3\" d=\"M216,34.1v39.8c10.1-1,18-9.5,18-19.9S226.1,35.1,216,34.1z\"></path>\r\n                  <path fill=\"#3C3D46\" d=\"M194,54c0,11,9,20,20,20c0.7,0,1.3,0,2-0.1V40h-16.3C196.2,43.6,194,48.5,194,54z\"></path>\r\n                  <circle fill=\"#FFFFFF\" cx=\"212\" cy=\"52\" r=\"20\"></circle>\r\n                  <linearGradient id=\"watch_SVGID_13_\" gradientUnits=\"userSpaceOnUse\" x1=\"199.7236\" y1=\"67\" x2=\"224.2764\" y2=\"67\">\r\n                    <stop offset=\"0\" style=\"stop-color:#C0D84E\"></stop>\r\n                    <stop offset=\"1\" style=\"stop-color:#5CBC6A\"></stop>\r\n                  </linearGradient>\r\n                  <path fill=\"url(#watch_SVGID_13_)\" d=\"M212,72c4.6,0,8.9-1.6,12.3-4.2c-2.9-3.5-7.3-5.8-12.3-5.8s-9.3,2.2-12.3,5.8C203.1,70.4,207.4,72,212,72z\"></path>\r\n                  <g>\r\n                    <circle fill=\"#3C3D46\" cx=\"212\" cy=\"49\" r=\"13\"></circle>\r\n                    <circle fill=\"#F89E2B\" cx=\"224\" cy=\"52\" r=\"3\"></circle>\r\n                    <circle fill=\"#F89E2B\" cx=\"200\" cy=\"52\" r=\"3\"></circle>\r\n                    <linearGradient id=\"watch_SVGID_14_\" gradientUnits=\"userSpaceOnUse\" x1=\"212\" y1=\"64\" x2=\"212\" y2=\"40\">\r\n                      <stop offset=\"0\" style=\"stop-color:#F89E2B\"></stop>\r\n                      <stop offset=\"1\" style=\"stop-color:#FFCF30\"></stop>\r\n                    </linearGradient>\r\n                    <circle fill=\"url(#watch_SVGID_14_)\" cx=\"212\" cy=\"52\" r=\"12\"></circle>\r\n                    <path fill=\"#F89E2B\" d=\"M222,50c0,6.6-5.4,12-12,12c-2.8,0-5.4-1-7.4-2.6c2.2,2.8,5.6,4.6,9.4,4.6c6.6,0,12-5.4,12-12c0-0.7-0.1-1.3-0.2-2H222z\"></path>\r\n                    <path class=\"watch-mouth\" fill=\"#3C3D46\" d=\"M208,55c0,2.2,1.8,4,4,4s4-1.8,4-4H208z\"></path>\r\n                    <circle fill=\"#3C3D46\" cx=\"208\" cy=\"50\" r=\"1\"></circle>\r\n                    <path fill=\"#F89E2B\" d=\"M213.5,51.2c0,0.8-0.7,1.5-1.5,1.5s-1.5-0.7-1.5-1.5\"></path>\r\n                    <circle fill=\"#3C3D46\" cx=\"216\" cy=\"50\" r=\"1\"></circle>\r\n                    <path fill=\"#3C3D46\" d=\"M217.8,39.6L204,40l-3,6h1c0-2.2,4.5-4,10-4s10,1.8,10,4h1L217.8,39.6z\"></path>\r\n                    <path fill=\"#3C3D46\" d=\"M210,35c-2.2,0-4,1.8-4,4C208.2,39,210,37.2,210,35z\"></path>\r\n                    <path fill=\"#3C3D46\" d=\"M206.3,35.2c-1.6,1.6-1.6,4.1,0,5.7C207.9,39.3,207.9,36.7,206.3,35.2z\"></path>\r\n                    <line fill=\"none\" stroke=\"#3C3D46\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" x1=\"201\" y1=\"45\" x2=\"201\"\r\n                      y2=\"51\"></line>\r\n                    <line fill=\"none\" stroke=\"#3C3D46\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" x1=\"223\" y1=\"45\" x2=\"223\"\r\n                      y2=\"51\"></line>\r\n                  </g>\r\n                </g>\r\n                <linearGradient id=\"watch_SVGID_15_\" gradientUnits=\"userSpaceOnUse\" x1=\"134\" y1=\"56\" x2=\"170\" y2=\"56\">\r\n                  <stop offset=\"0\" style=\"stop-color:#C0D84E\"></stop>\r\n                  <stop offset=\"1\" style=\"stop-color:#5CBC6A\"></stop>\r\n                </linearGradient>\r\n                <line class=\"watch-code--a\" fill=\"none\" stroke=\"url(#watch_SVGID_15_)\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-miterlimit=\"10\"\r\n                  x1=\"136\" y1=\"56\" x2=\"168\" y2=\"56\"></line>\r\n                <linearGradient id=\"watch_SVGID_16_\" gradientUnits=\"userSpaceOnUse\" x1=\"142\" y1=\"64\" x2=\"186\" y2=\"64\">\r\n                  <stop offset=\"0\" style=\"stop-color:#F89E2B\"></stop>\r\n                  <stop offset=\"1\" style=\"stop-color:#F15B51\"></stop>\r\n                </linearGradient>\r\n                <line class=\"watch-code--b\" fill=\"none\" stroke=\"url(#watch_SVGID_16_)\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-miterlimit=\"10\"\r\n                  x1=\"144\" y1=\"64\" x2=\"184\" y2=\"64\"></line>\r\n                <linearGradient id=\"watch_SVGID_17_\" gradientUnits=\"userSpaceOnUse\" x1=\"142\" y1=\"72\" x2=\"170\" y2=\"72\">\r\n                  <stop offset=\"0\" style=\"stop-color:#22ABC6\"></stop>\r\n                  <stop offset=\"1\" style=\"stop-color:#626EB3\"></stop>\r\n                </linearGradient>\r\n                <line class=\"watch-code--c\" fill=\"none\" stroke=\"url(#watch_SVGID_17_)\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-miterlimit=\"10\"\r\n                  x1=\"144\" y1=\"72\" x2=\"168\" y2=\"72\"></line>\r\n                <linearGradient id=\"watch_SVGID_18_\" gradientUnits=\"userSpaceOnUse\" x1=\"142\" y1=\"80\" x2=\"178\" y2=\"80\">\r\n                  <stop offset=\"0\" style=\"stop-color:#FFCF30\"></stop>\r\n                  <stop offset=\"1\" style=\"stop-color:#F89E2B\"></stop>\r\n                </linearGradient>\r\n                <line class=\"watch-code--d\" fill=\"none\" stroke=\"url(#watch_SVGID_18_)\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-miterlimit=\"10\"\r\n                  x1=\"144\" y1=\"80\" x2=\"176\" y2=\"80\"></line>\r\n                <ellipse fill=\"#3C3D46\" cx=\"76\" cy=\"44\" rx=\"52\" ry=\"44\"></ellipse>\r\n              </g>\r\n              <polygon fill=\"#F89E2B\" points=\"164,192 144,192 144,164 160,164 160,176 164,176 \"></polygon>\r\n            </svg>\r\n          </div>\r\n\r\n          <div class=\"col-md-6 timeline-section-col\">\r\n            <h2 class=\"timeline-waypoint timeline-waypoint--first\">Рівень 6: Тестова співбесіда</h2>\r\n            <p>\r\n              Ми проведемо вам тестову співбесіду, саме таку яку будуть проводити потенційні роботодавці але в спокійній обстановці, визначимо\r\n              всі ваші сильні та слабкі сторони, складемо детальний план додаткового навчання та подальших дій, дамо всі\r\n              необхідні документи, матеріали та посилання а також загальні рекомендації та відповіді на запитання.\r\n            </p>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n.login{\r\n    /* position: absolute;\r\n    top: 30%;\r\n    left: 50%;\r\n    margin: -150px 0 0 -150px; */\r\n    width: 300px;\r\n    height: 300px;  \r\n    margin: 4em auto;  \r\n}\r\n\r\n.login-input{\r\n    width: 100%;\r\n    margin-bottom: 1em;\r\n    padding: 10px;\r\n}\r\n\r\n.links{\r\n    font-size: 90%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login text-center\">\r\n  <h1>Login</h1>\r\n  <br>\r\n  <form (submit)=\"onLoginSubmit()\">\r\n    <input type=\"text\" class=\"form-control login-input\" placeholder=\"Username\" [(ngModel)]=\"username\" name=\"username\" required=\"required\">\r\n    <input type=\"password\" class=\"form-control login-input\" placeholder=\"Password\" [(ngModel)]=\"password\" name=\"password\" required=\"required\">\r\n    <button type=\"submit\" class=\"btn btn-block\" value=\"Login\">Login</button>\r\n  </form>\r\n  <br>\r\n  <div class=\"links text-left\">\r\n    Not registered? <a [routerLink]=\"['/register']\">Create an account</a>\r\n    <p>Forgot password? <a [routerLink]=\"['/forgotPassword']\">Click here</a></p>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
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
        var user = {
            username: this.username,
            password: this.password
        };
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
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".profile{\r\n    cursor: pointer;\r\n    margin-left: .5em;\r\n}\r\n\r\n.fa-user, .fa-comment{\r\n    font-size: 150%;\r\n}\r\n\r\n.profile-dropdown{\r\n    left: -3em;\r\n}\r\n\r\n.dropdown-menu-right{\r\n    left: auto !important;\r\n    right: -1em !important;\r\n}\r\n\r\n.dropdown-menu{\r\n    right: -1.25em;\r\n}\r\n\r\n.dropdown-menu::after {\r\n    border: 8px solid transparent;\r\n    border-bottom: 8px solid #fff;\r\n    border-top: 0;\r\n    bottom: auto;\r\n    content: '';\r\n    display: block;\r\n    height: 0;\r\n    left: auto;\r\n    margin: -8px 0 0 -8px;\r\n    margin-top: 0;\r\n    position: absolute;\r\n    right: 1.25em;\r\n    top: 50%;\r\n    width: 0;\r\n    top: -8px;\r\n    bottom: auto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\r\n\r\n\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand\" href=\"#\">\r\n      <div class=\"logo\">\r\n        <img src=\"/assets/valpioner.png\" alt=\"valpioner\">\r\n      </div>\r\n    </a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\"\r\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/']\">Курс <span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link dropdown-toggle\" href=\"http://example.com\" id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n            aria-expanded=\"false\">FAQ</a>\r\n          <div class=\"dropdown-menu\" aria-labelledby=\"dropdown01\">\r\n            <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n\r\n\r\n      <ul class=\"navbar-nav\">\r\n        <!-- <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard</a>\r\n        </li> -->\r\n        <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/login']\">Login</a>\r\n        </li>\r\n        <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/register']\">Register</a>\r\n        </li>\r\n        <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\">\r\n          <a class=\"nav-link fa fa-comment\">\r\n          </a>\r\n        </li>\r\n        <li *ngIf=\"authService.loggedIn()\" class=\"nav-item profile\" ngbDropdown>\r\n          <div class=\"btn-group\">\r\n            <a class=\"nav-link\" id=\"profileDropDown\" ngbDropdownToggle>\r\n              <i class=\"fa fa-user\"></i>\r\n            </a>\r\n            <div ngbDropdownMenu aria-labelledby=\"ngbDropdownToggle\" class=\"dropdown-menu dropdown-menu-right\">\r\n              <a class=\"dropdown-item\" [routerLink]=\"['/dashboard']\">Dashboard</a>\r\n              <a class=\"dropdown-item\" [routerLink]=\"['/course']\">Course</a>\r\n              <div class=\"dropdown-divider\"></div>\r\n              <a class=\"dropdown-item\" [routerLink]=\"['/profile']\">Profile</a>\r\n              <div class=\"dropdown-divider\"></div>\r\n              <a class=\"dropdown-item\" (click)=\"onLogoutClick()\">Logout</a>\r\n            </div>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n      \r\n    </div>\r\n  </div>\r\n\r\n\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
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
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <div *ngIf=\"user\">\r\n    <h2 class=\"page-header\">{{user.name}}</h2>\r\n    <ul class=\"list-group\">\r\n      <li class=\"list-group-item\">Username: {{user.username}}</li>\r\n      <li class=\"list-group-item\">Email: {{user.email}}</li>\r\n    </ul>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n.register{\r\n    /* position: absolute;\r\n    top: 30%;\r\n    left: 50%;\r\n    margin: -150px 0 0 -150px; */\r\n    width: 300px;\r\n    height: 300px;  \r\n    margin: 4em auto;  \r\n}\r\n\r\n.register-input{\r\n    width: 100%;\r\n    margin-bottom: 1em;\r\n    padding: 10px;\r\n}\r\n\r\n.links{\r\n    font-size: 90%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"register text-center\">\r\n  <h1>Register</h1>\r\n  <br>\r\n  <form (submit)=\"onRegisterSubmit()\">\r\n    <input type=\"text\" class=\"form-control register-input\" placeholder=\"Name\" [(ngModel)]=\"name\" name=\"name\" required=\"required\">\r\n    <input type=\"text\" class=\"form-control register-input\" placeholder=\"Username\" [(ngModel)]=\"username\" name=\"username\" required=\"required\">\r\n    <input type=\"text\" class=\"form-control register-input\" placeholder=\"Email\" [(ngModel)]=\"email\" name=\"email\" required=\"required\">\r\n    <input type=\"password\" class=\"form-control register-input\" placeholder=\"Password\" [(ngModel)]=\"password\" name=\"password\" required=\"required\">\r\n    <button type=\"submit\" class=\"btn btn-block\" value=\"Register\">Register</button>\r\n  </form>\r\n  <br>\r\n  <div class=\"links text-left\">\r\n    Already have an account? <a [routerLink]=\"['/login']\">Login here</a>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
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
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/users/users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  users works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsersComponent = (function () {
    function UsersComponent() {
    }
    UsersComponent.prototype.ngOnInit = function () {
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-users',
        template: __webpack_require__("../../../../../src/app/components/users/users.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/users/users.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UsersComponent);

//# sourceMappingURL=users.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
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
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




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
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])();
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    return ValidateService;
}());
ValidateService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidateService);

//# sourceMappingURL=validate.service.js.map

/***/ }),

/***/ "../../../../../src/assets/page-header.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "page-header.3173497983e35dc9724c.jpg";

/***/ }),

/***/ "../../../../../src/assets/textures.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAewAAAFpAgMAAAAjOfOYAAAADFBMVEVMaXH///////////8/u4fCAAAABHRSTlMAPygTRUcrQwAACqpJREFUeAHt3QWs5Midx/Fvu9RKnF33iHrCHIc5sbK8LWappfTfduZZikOiaWUtTnK5O4v5uN6EeZlJFDifmE54nlkx3TLvirIM1lh60nPbrrZdgfdZnpmdn9p/20XuMsxFRHKMzeQsgEpO05u7d7aceQac9aX0pl59HXu4RovcibPGBvWoyJn/SbHjBRFJseTU9ZJhzQsrTpw4ceLEiRN/oV7CHjmLNSI5lii72QWWOCL8PWbPJPy7zOaFCHuqoS4n/h9rnAhr/BBblBxgiyt3YUsZYYsjKbbMpcCWMsYWJRm2eCHW+DHW6AxbHCmwxYuwJkiwpswYzCUFvUjOYILwLnpwQoYTSEIP7obh+P2yg/Wg2Wt6WGYMZ9kvW+eDZqf0IAyolNRa77iUjO68eNilpj7Z8zWDKuguSGnxecbir9htkTCWMmcnpcfL1uz2oMSMRIXsdLlIbGnwuxD57mjZs83uYsuBM1q2l7BDIGHhbBiJu2aHudzFeNnzlB3cLajxsjN2OAWoiJEEGS1UZO2WChGgfsbwljltQuDyZIzsokv2QmKGV7ZnH6L0KNmaDtkPiq1sfbnIPWNkH3bIFtmOcnMLaVXKAaNkRx2yw2KUbNUlOwNlKfvdgIrsZDNW9qbHefFRe9kLsZQdorQUtrIDibDjcCFyF3ZoLVss0RJi5PQQ2XdhZIALs9xixgdOsZfzBWYCICjYxzMYqXL9wt5K+3ns2WBBAerVgk8zvVkGD0pYYCN7jSciMRaomPLg+Uclx4JzjhRQJljwgBurm2ytefrZXArKDAsO8b+T4a6ZnhNz3ktxU6bnrfk/JyVYMbwn2C1YccFJKQsG58gf2mY13jzmEcNzRe5iS7Nz4MtqFjO8QESQHeFS4EoxTxme/icRRG6jib9F3UaZf56hKSmuEbQITbywACdUa4bmRnAFCy000lt4MFHxWA8MLKSgyeVy66OSc46h6ax1blJpkQNYjlDu1jnZYiHhM/CxEcrdOhedoBhDkLTOwTvJ2I8DzdMdHTbelsNo5d7RPLsZuCsG50bta01ePk52UCfubiu8jMEtM6g402fndfaGHZxizFUeFTGxIGufCJ9gRVFbzC4ZyFX9V3GH6oc6kvdevV7mDGIuazqZxQ0Lm+Z8ienE2TQs6JpbyqZ3tp+Ond28jCGribMJoeIIw/A7Z2uozDeTP2lZX9X+mmF4knbOHrjcqMOiZyPqCJPzV3W5JxdkdbknN7+ON+mVhWzZ2io3rrwZ7m6YntIit9kpdxX+B2SFDae0CIIdCy1ssBUu/ApbrmEP89uwJpCzhb1sCf+AHb6I2Pro/r9eL9WGWNNb5rwgInKnjewCFtrO6l1ZUG3GtbGQfXEfMgvZunmyaHSHFrNDKrOEyUVUvOmzVZ29Zmr1KNq1mZ0ytfr0nlvMDjKm5iUWs9fN81Rjc21mp9Tt+NTm/bIfGDQ76zUfK8UYM/AlHcwkHXDvq2DVZ/7dlQ0deZJ3XvU4pIPgG50PeiBpa3beZ81judLpcN+Irk/viA7KNIjoZilxexe5xzqTkqjzskIpm64Tk2pDO+dA8jIdLFtTcbpku2s/Wa4GO+Z1dky7IPNCTTeBrDt3U7tkL3OlQ7pxJaOF/KFHN/UQ/A3dqFtooUTOds5Wm0G7lKoae3f7PWfJsN2bauzdLdtNB27mr9EicqaYp3Rqdw4H3whbwvs7ZC+L+hY07EfPaBWOMWJU14usOg1h3JTBvdAh20uqkg/uVN6pW7kssMLP4RA7yqrkVkRVyW1w4qrkNnhxVXIbFiGUWKIzIux4IoidGDsuOPK/a+wo8/I7GXboxJUcOw5DJVgSl9nD1rIvjy9ltw8wDpU4YcFuCQ1euHXPbCW54VZP++6T4KyDA3bzN4377ojk+2R/VTJ20xHHKs88o3S8T/bXInbzJORYhwUspEC9RAvj6a0g0hzrvwDKbKFla5gd0kInDfODMYB7oI2r7m3bH/Bc5k3Z1Yj3VcOqLwp2C0KOz1YJAMttVfUxlAn+alc2wIMpI3AkaxicO+s6Gy9mBG4I83RH9vnBJ6JrZdw0gTBLATg32vKEkgy8pDV7njM4VwqYxTu+cLAZLduPAWfTmh0UDE1J2jgh7K7GzfYkLJom4d0cQFX18BncQuSgaeGjKrGTDLLdQ0P/4Czo4rjsor7K4TQj+LPI9vgpkarEsyr77YzhQZG7jm1MfOpsuMAY1PUSXr9qzk6rfsR4j21mjTuZeKNmsxBJG7PdDICYkVxx7DpFVeL5atxsLk9aslXCaB5p6qZOkE1jdpDXd5gJVSX2bWYX9VU+nbqbajvby5iSs7aY/fVXX627yO6KKc1E5ADOVdn55NkSX7zDTJu9uPOlV6+XuzZ1H2ZiSkd1N3VyCwlFbgWfJh9jNIGIyHZH9jJnLCq85RYtd52mSZmMXfUd2eHYVY9ooiVjVEFzdqhjRtW8fK6iQApGdVnzAre9lyTNYh6MsMNL8ELscNc4EXbMU3sL3EHGLMYOf4WX2MpOcdfYsYysLezjSh5k2KEk8VdY4ofLHEs8kQJbtMXsQLDGCbHnwsn7VAd14sSJEydOvPLfHEXBRC4X2XLUAdNwRETuatoRa4I9IGJqfHyyAauS8Jmjb9JYFl7MJDy5CxaSUdOpmzAJPwJ4MKYm0VSDxjI9snfnW1Ai92cTlbuo/1Gt8DmRyIopzCLeVFZx+Mks9iVnCm58dFe9ZeglnhRMoH7L58VTu5Tvr9F09XH24GdHH33VWlK+QlfLYv+NUut5vzCQjO6Wg7yaLaS6kzuyorvz7EEf3XbE2VDmdHc4yCvK9MXZZpceIsyp6OjBdxOU6VKBeXZ1xi7WdHUJ4MRcNsAaxzLv+d7cIIdZQokp50h2L2UO3poynz5bCeCl+OkQx9ygEXJT3GSA7II+qsx5xiwa4hozaAiCFcj+95bS4FTDz6t/MaMNt39W4cVCBen+bYnJq4fLqvD7t6G9zJOLzZgT7dt3mMUm/9+5fZ46r6plcOR0Xjdjy9WefcUgNTjV1Kb6X/ftI2f04W3qfSPw4r3HBv3vasyqv2/2GxN5RpeYt2avi8w/qMeCvevtpub1rre/cSQ1uaW6Wf2vRpScKdSDUtCPn9aPpcqecx4HYNCEBqvqSjG2qOZ6TK5NPzc/1SqPGnxsEGBZ7L0v/At30l+ZQ1n9C1MLUjgElDA5N4Fz1V1mck4Em/pUm5hUzZif0eoUhhTHK1dO3O1UW0iOmSBv+vFZApzvEC0JZsqk4UBWzdhbW6O13BFixJGQBm7abUvv2ygzTATNN9x5RiulZQtBjAmd6KQpe9UxGifEwELuCsLms7A9+jqT7mAlCHEka9xvpoUrZ+vusMkhhzJuyC469kSrfzHqUTUd9AWtHkyN38BSxTqSYcg9oOJF9OUndT+6RdtB17nZzpT+ClP1sfa39DRP98z2IuOD7q73fWxe5/W/GO16qwuMLRMqQWK026/GXBnWX4gwmncMMXehzKha0ttM5t9UhLn/CuKqJd3SV1h9eHM/ckJQWr6T05euim4upsyUlmheGM2/eQnmEtyD6+W6/woKo/k3d40xlVRbTP7IN3tP0TzFmLOupjZi3/CrQtl+2aeA5DS9zUX2WpKeVS+0UP2zXwOWHfKe0YTlCgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map