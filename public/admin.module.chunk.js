webpackJsonp(["admin.module"],{

/***/ "./src/app/admin/admin-dashboard/admin-dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin-dashboard/admin-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  admin-dashboard works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/admin/admin-dashboard/admin-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminDashboardComponent = (function () {
    function AdminDashboardComponent() {
    }
    AdminDashboardComponent.prototype.ngOnInit = function () {
    };
    return AdminDashboardComponent;
}());
AdminDashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-dashboard',
        template: __webpack_require__("./src/app/admin/admin-dashboard/admin-dashboard.component.html"),
        styles: [__webpack_require__("./src/app/admin/admin-dashboard/admin-dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AdminDashboardComponent);

//# sourceMappingURL=admin-dashboard.component.js.map

/***/ }),

/***/ "./src/app/admin/admin.component.css":
/***/ (function(module, exports) {

module.exports = ".admin{\r\n    margin: 2em 0;\r\n}"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"admin\">\r\n  <div class=\"container\">\r\n\r\n    <h3>Admin</h3>\r\n    <nav>\r\n      <ul class=\"nav nav-tabs\">\r\n        <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">\r\n          <a class=\"nav-link\" routerLink=\"./\" queryParamsHandling=\"preserve\" preserveFragment>Dashboard</a>\r\n        </li>\r\n        <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link\" routerLink=\"./courses\" queryParamsHandling=\"preserve\" preserveFragment>Manage Courses</a>\r\n        </li>\r\n        <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link\" routerLink=\"./users\" queryParamsHandling=\"preserve\" preserveFragment>Manage Users</a>\r\n        </li>\r\n      </ul>\r\n    </nav>\r\n    <router-outlet></router-outlet>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminComponent = (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("./src/app/admin/admin.component.html"),
        styles: [__webpack_require__("./src/app/admin/admin.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AdminComponent);

//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manage_users_manage_users_module__ = __webpack_require__("./src/app/admin/manage-users/manage-users.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3____ = __webpack_require__("./src/app/admin/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_routing_module__ = __webpack_require__("./src/app/admin/admin.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__guards__ = __webpack_require__("./src/app/guards/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AdminModule = (function () {
    function AdminModule() {
    }
    return AdminModule;
}());
AdminModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_4__admin_routing_module__["a" /* AdminRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__manage_users_manage_users_module__["a" /* ManageUsersModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3____["c" /* AdminService */],
            __WEBPACK_IMPORTED_MODULE_5__guards__["a" /* AdminGuard */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3____["a" /* AdminComponent */], __WEBPACK_IMPORTED_MODULE_3____["b" /* AdminDashboardComponent */], __WEBPACK_IMPORTED_MODULE_3____["d" /* ManageCoursesComponent */]]
    })
], AdminModule);

//# sourceMappingURL=admin.module.js.map

/***/ }),

/***/ "./src/app/admin/admin.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export adminRouterComponents */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2____ = __webpack_require__("./src/app/admin/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__manage_users__ = __webpack_require__("./src/app/admin/manage-users/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guards__ = __webpack_require__("./src/app/guards/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2____["a" /* AdminComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__guards__["b" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_4__guards__["a" /* AdminGuard */]],
        children: [
            {
                path: '',
                canActivateChild: [__WEBPACK_IMPORTED_MODULE_4__guards__["b" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_4__guards__["a" /* AdminGuard */]],
                children: [
                    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_3__manage_users__["c" /* UserListComponent */] },
                    { path: 'users/add', component: __WEBPACK_IMPORTED_MODULE_3__manage_users__["b" /* UserFormComponent */] },
                    { path: 'users/edit/:id', component: __WEBPACK_IMPORTED_MODULE_3__manage_users__["b" /* UserFormComponent */], canDeactivate: [__WEBPACK_IMPORTED_MODULE_4__guards__["c" /* CanDeactivateGuard */]], resolve: { user: __WEBPACK_IMPORTED_MODULE_4__guards__["d" /* UserResolveGuard */] } },
                    { path: 'courses', component: __WEBPACK_IMPORTED_MODULE_2____["d" /* ManageCoursesComponent */] },
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_2____["b" /* AdminDashboardComponent */] }
                ]
            }
        ]
    }
];
var adminRouterComponents = [__WEBPACK_IMPORTED_MODULE_2____["a" /* AdminComponent */], __WEBPACK_IMPORTED_MODULE_2____["b" /* AdminDashboardComponent */], __WEBPACK_IMPORTED_MODULE_2____["d" /* ManageCoursesComponent */], __WEBPACK_IMPORTED_MODULE_3__manage_users__["c" /* UserListComponent */]];
var AdminRoutingModule = (function () {
    function AdminRoutingModule() {
    }
    return AdminRoutingModule;
}());
AdminRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__guards__["c" /* CanDeactivateGuard */],
            __WEBPACK_IMPORTED_MODULE_4__guards__["d" /* UserResolveGuard */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], AdminRoutingModule);

//# sourceMappingURL=admin.routing.module.js.map

/***/ }),

/***/ "./src/app/admin/admin.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_rxjs_extensions__ = __webpack_require__("./src/app/services/rxjs-extensions.ts");
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
var AdminService = (function () {
    function AdminService(http) {
        this.http = http;
        this.usersUrl = 'http://localhost:3001/users';
    }
    AdminService.prototype.getUser = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.usersUrl + "/" + id, { headers: headers })
            .map(function (res) { return res /*.json().user*/ || {}; })
            .catch(this.handleError);
    };
    AdminService.prototype.getUsers = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.usersUrl + "/getAllUsers", { headers: headers })
            .map(function (res) { return res || {}; })
            .catch(this.handleError);
    };
    AdminService.prototype.changeUser = function (user) {
    };
    AdminService.prototype.deleteUser = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3001/users/delete', { id: id }, { headers: headers })
            .map(function (res) { return res; })
            .catch(this.handleError);
    };
    AdminService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('token', token); //jwt looks here by default
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AdminService.prototype.loadToken = function () {
        var token = localStorage.getItem('token');
        this.authToken = token;
    };
    AdminService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])();
    };
    AdminService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AdminService.prototype.handleError = function (err) {
        var errorMessage;
        // A client-side or network error occurred.
        if (err.error instanceof Error) {
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            errorMessage = "Backend returned code " + err.status + ", body was: " + err.error;
        }
        console.error(errorMessage);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(errorMessage);
    };
    return AdminService;
}());
AdminService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], AdminService);

var _a;
//# sourceMappingURL=admin.service.js.map

/***/ }),

/***/ "./src/app/admin/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__admin_component__ = __webpack_require__("./src/app/admin/admin.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__admin_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__admin_dashboard_admin_dashboard_component__ = __webpack_require__("./src/app/admin/admin-dashboard/admin-dashboard.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__admin_dashboard_admin_dashboard_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manage_courses_manage_courses_component__ = __webpack_require__("./src/app/admin/manage-courses/manage-courses.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__manage_courses_manage_courses_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_service__ = __webpack_require__("./src/app/admin/admin.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__admin_service__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/admin/manage-courses/manage-courses.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/manage-courses/manage-courses.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  manage-courses works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/admin/manage-courses/manage-courses.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageCoursesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ManageCoursesComponent = (function () {
    function ManageCoursesComponent() {
    }
    ManageCoursesComponent.prototype.ngOnInit = function () {
    };
    return ManageCoursesComponent;
}());
ManageCoursesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-manage-courses',
        template: __webpack_require__("./src/app/admin/manage-courses/manage-courses.component.html"),
        styles: [__webpack_require__("./src/app/admin/manage-courses/manage-courses.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ManageCoursesComponent);

//# sourceMappingURL=manage-courses.component.js.map

/***/ }),

/***/ "./src/app/admin/manage-users/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_user_service__ = __webpack_require__("./src/app/admin/manage-users/services/user.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__services_user_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_user_component__ = __webpack_require__("./src/app/admin/manage-users/user/user.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__user_user_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_form_user_form_component__ = __webpack_require__("./src/app/admin/manage-users/user-form/user-form.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__user_form_user_form_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_list_user_list_component__ = __webpack_require__("./src/app/admin/manage-users/user-list/user-list.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__user_list_user_list_component__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/admin/manage-users/manage-users.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageUsersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__manage_users_routing_module__ = __webpack_require__("./src/app/admin/manage-users/manage-users.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4____ = __webpack_require__("./src/app/admin/manage-users/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ManageUsersModule = (function () {
    function ManageUsersModule() {
    }
    return ManageUsersModule;
}());
ManageUsersModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__manage_users_routing_module__["a" /* UsersRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4____["c" /* UserListComponent */],
            __WEBPACK_IMPORTED_MODULE_4____["b" /* UserFormComponent */],
            __WEBPACK_IMPORTED_MODULE_4____["a" /* UserComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4____["d" /* UserService */]
        ]
    })
], ManageUsersModule);

//# sourceMappingURL=manage-users.module.js.map

/***/ }),

/***/ "./src/app/admin/manage-users/manage-users.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var UsersRoutingModule = (function () {
    function UsersRoutingModule() {
    }
    return UsersRoutingModule;
}());
UsersRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], UsersRoutingModule);

//# sourceMappingURL=manage-users.routing.module.js.map

/***/ }),

/***/ "./src/app/admin/manage-users/user-form/user-form.component.css":
/***/ (function(module, exports) {

module.exports = ".user-form{\r\n    margin: 2em 0;\r\n}"

/***/ }),

/***/ "./src/app/admin/manage-users/user-form/user-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"user-form\">\r\n\r\n  <div class=\"card\">\r\n\r\n    <div class=\"card-header\">\r\n      <h4 class=\"card-title\">\r\n        Edit user\r\n      </h4>\r\n    </div>\r\n\r\n    <div class=\"card-body\">\r\n      <form *ngIf=\"user\" (ngSubmit)=\"saveUser()\" id=\"user-form\">\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Name</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" placeholder=\"Name\" required [(ngModel)]=\"user.name\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"username\">Username</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" placeholder=\"Username\" required [(ngModel)]=\"user.username\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"email\">email</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"Email\" required [(ngModel)]=\"user.email\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <div class=\"form-check\">\r\n            <label class=\"form-check-label\">\r\n              <input #isAdmin id=\"isAdmin\" class=\"form-check-input\" type=\"checkbox\" [checked]=\"isAdmin\" (change)=\"onIsAdminChanged(isAdmin.checked)\"> is Admin\r\n            </label>\r\n          </div>\r\n\r\n          <!-- <input type=\"number\" min=\"0\" step=\"2\" class=\"form-control\" id=\"estHours\" name=\"estHours\" placeholder=\"Est. Hours\" [(ngModel)]=\"task.estHours\"> -->\r\n        </div>\r\n\r\n        <button type=\"submit\" class=\"btn btn-primary\" form=\"user-form\">Save</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"goBack()\">Back</button>\r\n      </form>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/admin/manage-users/user-form/user-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__("./src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("./src/app/admin/manage-users/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_dialog_service__ = __webpack_require__("./src/app/services/dialog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserFormComponent = (function () {
    function UserFormComponent(userService, router, route, dialogService) {
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.dialogService = dialogService;
        this.sub = [];
    }
    UserFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */](null, //id
        null, //name
        null, //email
        null, //username
        null //pass
        );
        this.route.data.forEach(function (data) {
            _this.user = Object.assign({}, data.user ? data.user.user : undefined);
            _this.originalUser = Object.assign({}, data.user ? data.user.user : undefined);
        });
    };
    UserFormComponent.prototype.saveUser = function () {
        var _this = this;
        var method = this.user._id ? 'updateUser' : 'createUser';
        var sub = this.userService[method](this.user)
            .subscribe(function () {
            _this.originalUser = Object.assign({}, _this.user);
            _this.user._id
                ? _this.router.navigate(['admin/users', { id: _this.user._id }])
                : _this.router.navigate(['admin/users']);
        }, function (error) { return console.log(error); });
        this.sub.push(sub);
    };
    UserFormComponent.prototype.goBack = function () {
        this.router.navigate(['/admin/users']);
    };
    UserFormComponent.prototype.canDeactivate = function () {
        // Allow synchronous navigation (`true`)
        if (!this.originalUser ||
            (this.originalUser.name === this.user.name &&
                this.originalUser.username === this.user.username &&
                this.originalUser.email === this.user.email &&
                this.originalUser.isAdmin === this.user.isAdmin)) {
            return true;
        }
        // Otherwise ask the user with the dialog service and return its
        // promise which resolves to true or false when the user decides
        return this.dialogService.confirm('Discard changes?');
    };
    return UserFormComponent;
}());
UserFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-form',
        template: __webpack_require__("./src/app/admin/manage-users/user-form/user-form.component.html"),
        styles: [__webpack_require__("./src/app/admin/manage-users/user-form/user-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_dialog_service__["a" /* DialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_dialog_service__["a" /* DialogService */]) === "function" && _d || Object])
], UserFormComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=user-form.component.js.map

/***/ }),

/***/ "./src/app/admin/manage-users/user-list/user-list.component.css":
/***/ (function(module, exports) {

module.exports = ".user-list{\r\n    margin: 2em 0;\r\n}\r\n\r\n.user-card{\r\n    margin-bottom: 1em;\r\n}"

/***/ }),

/***/ "./src/app/admin/manage-users/user-list/user-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"user-list\">\r\n\r\n  <!-- <div *ngFor=\"let user of users\">\r\n    <div class=\"card user-card\">\r\n      <div class=\"card-header\">User</div>\r\n      <div class=\"card-body\">\r\n        <ul>\r\n          <li>id: {{user._id}}</li>\r\n          <li>name: {{user.name}}</li>\r\n          <li>username: {{user.username}}</li>\r\n          <li>email: {{user.email}}</li>\r\n          <li>isAdmin: {{user.isAdmin || false}}</li>\r\n        </ul>\r\n        <button class=\"btn btn-sm\" (click)=\"editUser(user._id)\">\r\n          Edit\r\n        </button>\r\n        <button class=\"btn btn-sm\" (click)=\"deleteUser(user._id)\">\r\n          Delete\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n\r\n  <button class=\"btn btn-primary\" (click)=\"createUser()\">New User</button>\r\n\r\n  <br/>\r\n\r\n  <user \r\n    *ngFor='let user of users' \r\n    [user]=\"user\" \r\n    [class.edited]=\"isEdited(user)\" \r\n    (onDelete)=\"deleteUser($event)\">\r\n  </user>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/admin/manage-users/user-list/user-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__decorators__ = __webpack_require__("./src/app/decorators/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_service__ = __webpack_require__("./src/app/admin/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserListComponent = (function () {
    function UserListComponent(adminService, FlashMessage, router, route) {
        this.adminService = adminService;
        this.FlashMessage = FlashMessage;
        this.router = router;
        this.route = route;
        this.subscriptions = [];
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var sub = this.adminService.getUsers()
            .subscribe(function (data) { return _this.users = data.users; }, function (error) { return _this.errorMessage = error; });
        this.subscriptions.push(sub);
        // listen id from UserFormComponent
        this.route.params
            .switchMap(function (params) { return _this.adminService.getUser(params['id']); })
            .subscribe(function (user) {
            _this.editedUser = Object.assign({}, user.user);
            console.log("Last time you edit user " + JSON.stringify(_this.editedUser));
        }, function (err) { return console.log(err); });
        //this.getAllUsers();
    };
    // private getAllUsers() {
    //   this.adminService.getAllUsers().subscribe(users => {
    //     this.users = users;
    //   },
    //     err => {
    //       console.log(err);
    //       return false;
    //     });
    // }
    UserListComponent.prototype.deleteUser = function (user) {
        var _this = this;
        this.adminService.deleteUser(user).subscribe(function (res) {
            if (res.success) {
                _this.FlashMessage.show('User deleted', { cssClass: 'alert-success', timeout: 3000 });
                _this.users = _this.users.filter(function (u) { return u !== user; });
                // var index = this.users.findIndex(u => u._id === id);
                // if (index > -1) {
                //   this.users.splice(index, 1);
                // }
            }
            else {
                _this.FlashMessage.show('User was not deleted', { cssClass: 'alert-error', timeout: 3000 });
            }
        }, function (err) { return console.log(err); });
    };
    UserListComponent.prototype.isEdited = function (user) {
        if (this.editedUser) {
            return user._id === this.editedUser._id;
        }
        return false;
    };
    UserListComponent.prototype.editUser = function (id) {
        var link = ['admin/users/edit', id];
        this.router.navigate(link);
    };
    UserListComponent.prototype.createUser = function () {
        var link = ['admin/users/add'];
        this.router.navigate(link);
    };
    return UserListComponent;
}());
UserListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-list',
        template: __webpack_require__("./src/app/admin/manage-users/user-list/user-list.component.html"),
        styles: [__webpack_require__("./src/app/admin/manage-users/user-list/user-list.component.css")]
    }),
    Object(__WEBPACK_IMPORTED_MODULE_2__decorators__["a" /* AutoUnsubscribe */])('subscriptions'),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__admin_service__["a" /* AdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__admin_service__["a" /* AdminService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], UserListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=user-list.component.js.map

/***/ }),

/***/ "./src/app/admin/manage-users/user/user.component.css":
/***/ (function(module, exports) {

module.exports = ":host.edited > div {\r\n    border: 2px dotted red;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/admin/manage-users/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card user-card\">\r\n  <div class=\"card-header\">User</div>\r\n  <div class=\"card-body\">\r\n    <ul>\r\n      <li>id: {{user._id}}</li>\r\n      <li>name: {{user.name}}</li>\r\n      <li>username: {{user.username}}</li>\r\n      <li>email: {{user.email}}</li>\r\n      <li>isAdmin: {{user.isAdmin || false}}</li>\r\n    </ul>\r\n    <button class=\"btn btn-sm\" (click)=\"editUser()\">\r\n      Edit\r\n    </button>\r\n    <button class=\"btn btn-sm\" (click)=\"deleteUser()\">\r\n      Delete\r\n    </button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/manage-users/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user__ = __webpack_require__("./src/app/models/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserComponent = (function () {
    function UserComponent(router, route) {
        this.router = router;
        this.route = route;
        this.onDelete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    UserComponent.prototype.editUser = function () {
        var link = ['admin/users/edit', this.user._id];
        this.router.navigate(link);
        // or
        // const link = ['edit', this.user.id];
        // this.router.navigate(link, {relativeTo: this.route});
    };
    UserComponent.prototype.deleteUser = function () {
        this.onDelete.emit(this.user);
    };
    return UserComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */]) === "function" && _a || Object)
], UserComponent.prototype, "user", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], UserComponent.prototype, "onDelete", void 0);
UserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'user',
        template: __webpack_require__("./src/app/admin/manage-users/user/user.component.html"),
        styles: [__webpack_require__("./src/app/admin/manage-users/user/user.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], UserComponent);

var _a, _b, _c;
//# sourceMappingURL=user.component.js.map

/***/ })

});
//# sourceMappingURL=admin.module.chunk.js.map