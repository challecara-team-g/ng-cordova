(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ons-splitter>\n  <ons-splitter-side [page]=\"pages.menu\" side=\"left\" width=\"237px\" collapse swipeable>\n  </ons-splitter-side>\n\n  <ons-splitter-content [page]=\"pages.home\">\n  </ons-splitter-content>\n</ons-splitter>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ons-splitter-side {\n  border-right: 1px solid #ccc; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcmltdXJheXV1a2kvRGVza3RvcC9uZy1jb3Jkb3ZhL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQTRCLEVBQy9CIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsib25zLXNwbGl0dGVyLXNpZGUge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjY2M7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_onsenui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-onsenui */ "./node_modules/ngx-onsenui/ngx-onsenui.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _taskplus_taskplus_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./taskplus/taskplus.component */ "./src/app/taskplus/taskplus.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.pages = {
            home: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
            menu: _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"],
            taskplus: _taskplus_taskplus_component__WEBPACK_IMPORTED_MODULE_4__["TaskplusComponent"]
        };
    }
    AppComponent.prototype.load = function (name) {
        if (this.pages.hasOwnProperty(name)) {
            this.content.element.load(this.pages[name]);
            this.side.element.close();
        }
        else {
            console.error("page " + name + " not found");
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(ngx_onsenui__WEBPACK_IMPORTED_MODULE_1__["OnsSplitterContent"]),
        __metadata("design:type", ngx_onsenui__WEBPACK_IMPORTED_MODULE_1__["OnsSplitterContent"])
    ], AppComponent.prototype, "content", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(ngx_onsenui__WEBPACK_IMPORTED_MODULE_1__["OnsSplitterSide"]),
        __metadata("design:type", ngx_onsenui__WEBPACK_IMPORTED_MODULE_1__["OnsSplitterSide"])
    ], AppComponent.prototype, "side", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_onsenui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-onsenui */ "./node_modules/ngx-onsenui/ngx-onsenui.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _taskplus_taskplus_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./taskplus/taskplus.component */ "./src/app/taskplus/taskplus.component.ts");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Onsen UI Styling and Icons










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"],
                _taskplus_taskplus_component__WEBPACK_IMPORTED_MODULE_8__["TaskplusComponent"]
            ],
            imports: [
                ngx_onsenui__WEBPACK_IMPORTED_MODULE_3__["OnsenModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            entryComponents: [
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"],
                _taskplus_taskplus_component__WEBPACK_IMPORTED_MODULE_8__["TaskplusComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

// if (module['hot']) module['hot'].accept();
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_9__["platformBrowserDynamic"])().bootstrapModule(AppModule)
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ons-toolbar>\n  <div class=\"center\">\n    <ons-select>\n      <option *ngFor=\"let week of weeks\">{{week.day}}</option>\n    </ons-select>\n  </div>\n  <div class=\"left\">\n    <ons-toolbar-button (click)=\"app.load('menu')\">\n      <ons-icon icon=\"ion-navicon, material:md-menu\"></ons-icon>\n    </ons-toolbar-button>\n  </div>\n  <div class=\"blank\"></div>\n  <div class=\"right\">\n    <ons-toolbar-button (click)=\"app.load('taskplus')\">\n      <ons-icon icon=\"fa-plus\"></ons-icon>\n    </ons-toolbar-button>\n  </div>\n</ons-toolbar>\n<div class=\"background\"></div>\n<div class=\"content\">\n  <div *ngFor=\"let task of tasks\" modifier=\"task\">\n    <ons-button >\n      <p>{{task.picture}}</p>\n      <p>{{task.title}}</p>\n      <p>{{task.user_id}}</p>\n    </ons-button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ons-button {\n  position: relative;\n  display: inline-block;\n  box-sizing: border-box;\n  width: 41.6%;\n  height: 175px;\n  background: #F4F4F4;\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 14px;\n  float: left;\n  margin: 15.75px; }\n\ndiv.blank {\n  height: 40px; }\n\np {\n  text-align: center;\n  color: red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcmltdXJheXV1a2kvRGVza3RvcC9uZy1jb3Jkb3ZhL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQWtCO0VBQ2xCLHNCQUFxQjtFQUNyQix1QkFBc0I7RUFDdEIsYUFBWTtFQUNaLGNBQWE7RUFDYixvQkFBbUI7RUFDbkIsNENBQTJDO0VBQzNDLG9CQUFtQjtFQUNuQixZQUFVO0VBQ1YsZ0JBQWUsRUFDZDs7QUFDSDtFQUNFLGFBQVksRUFDYjs7QUFFQztFQUNFLG1CQUFrQjtFQUNsQixXQUFTLEVBQ1YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJvbnMtYnV0dG9ue1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB3aWR0aDogNDEuNiU7XG4gICAgaGVpZ2h0OiAxNzVweDtcbiAgICBiYWNrZ3JvdW5kOiAjRjRGNEY0O1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgICBmbG9hdDpsZWZ0O1xuICAgIG1hcmdpbjogMTUuNzVweDtcbiAgICB9XG4gIGRpdi5ibGFua3tcbiAgICBoZWlnaHQ6IDQwcHg7XG4gIH1cbiAgXG4gICAgcHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGNvbG9yOnJlZDtcbiAgICB9Il19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_weeks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mock-weeks */ "./src/app/mock-weeks.ts");
/* harmony import */ var _mock_taskcontents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mock-taskcontents */ "./src/app/mock-taskcontents.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.weeks = _mock_weeks__WEBPACK_IMPORTED_MODULE_1__["WEEK"];
        this.tasks = _mock_taskcontents__WEBPACK_IMPORTED_MODULE_2__["TASKCONTENT"];
    }
    // constructor(@Inject(forwardRef(() => AppComponent)) private app : AppComponent) { }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <ons-button (click)=\"app.load('mypage')\">\n    <div class=\"picture\">\n      picture\n    </div>\n\n\n    <p class=\"name\">name</p>\n    <p class=\"id\">id</p>\n\n  </ons-button>\n</div>"

/***/ }),

/***/ "./src/app/menu/menu.component.scss":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ons-button {\n  position: absolute;\n  width: 237px;\n  height: 72px;\n  left: 0px;\n  top: 0px;\n  background: #1A557F; }\n\ndiv.picture {\n  position: absolute;\n  width: 54px;\n  height: 54px;\n  left: 16px;\n  top: 8px;\n  background: white;\n  border-radius: 9px; }\n\np {\n  position: absolute;\n  width: 70px;\n  height: 22px;\n  left: 83px;\n  font-style: normal;\n  font-weight: normal;\n  line-height: normal;\n  text-align: left;\n  letter-spacing: 0.012em;\n  color: #FFFFFF; }\n\n.name {\n  top: 0px;\n  font-size: 18px; }\n\n.id {\n  top: 23px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcmltdXJheXV1a2kvRGVza3RvcC9uZy1jb3Jkb3ZhL3NyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQWtCO0VBQ2xCLGFBQVk7RUFDWixhQUFZO0VBQ1osVUFBUztFQUNULFNBQVE7RUFDUixvQkFBbUIsRUFDcEI7O0FBQ0Q7RUFDRSxtQkFBa0I7RUFDbEIsWUFBVztFQUNYLGFBQVk7RUFDWixXQUFVO0VBQ1YsU0FBUTtFQUVSLGtCQUFpQjtFQUNqQixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSxtQkFBa0I7RUFDbEIsWUFBVztFQUNYLGFBQVk7RUFDWixXQUFVO0VBR1YsbUJBQWtCO0VBQ2xCLG9CQUFtQjtFQUNuQixvQkFBbUI7RUFDbkIsaUJBQWU7RUFDZix3QkFBdUI7RUFFdkIsZUFBYyxFQUVmOztBQUNEO0VBQ0UsU0FBTztFQUNQLGdCQUFjLEVBQ2Y7O0FBQ0Q7RUFDRSxVQUNGLEVBQUMiLCJmaWxlIjoic3JjL2FwcC9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJvbnMtYnV0dG9ue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMjM3cHg7XG4gICAgaGVpZ2h0OiA3MnB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICB0b3A6IDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjMUE1NTdGO1xuICB9XG4gIGRpdi5waWN0dXJle1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNTRweDtcbiAgICBoZWlnaHQ6IDU0cHg7XG4gICAgbGVmdDogMTZweDtcbiAgICB0b3A6IDhweDtcblxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgfVxuICBwe1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNzBweDtcbiAgICBoZWlnaHQ6IDIycHg7XG4gICAgbGVmdDogODNweDtcblxuXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDEyZW07XG5cbiAgICBjb2xvcjogI0ZGRkZGRjtcblxuICB9XG4gIC5uYW1le1xuICAgIHRvcDowcHg7XG4gICAgZm9udC1zaXplOjE4cHg7XG4gIH1cbiAgLmlke1xuICAgIHRvcDoyM3B4XG4gIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    // constructor(@Inject(forwardRef(() => AppComponent)) private app : AppComponent) { }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/menu/menu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/mock-taskcontents.ts":
/*!**************************************!*\
  !*** ./src/app/mock-taskcontents.ts ***!
  \**************************************/
/*! exports provided: TASKCONTENT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TASKCONTENT", function() { return TASKCONTENT; });
var TASKCONTENT = [
    { id: 1, picture: 'syashin', title: 'Souzi', user_id: 'Kobayashi' },
    { id: 2, picture: 'syashin2', title: 'Sentaku', user_id: 'Arimura' }
];


/***/ }),

/***/ "./src/app/mock-weeks.ts":
/*!*******************************!*\
  !*** ./src/app/mock-weeks.ts ***!
  \*******************************/
/*! exports provided: WEEK */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEEK", function() { return WEEK; });
var WEEK = [
    { id: 1, day: 'Monday' },
    { id: 2, day: 'Tuesday' },
    { id: 3, day: 'Wednesday' },
    { id: 4, day: 'Thursday' },
    { id: 5, day: 'Friday' },
    { id: 6, day: 'Saturday' },
    { id: 7, day: 'Sunday' }
];


/***/ }),

/***/ "./src/app/taskplus/taskplus.component.html":
/*!**************************************************!*\
  !*** ./src/app/taskplus/taskplus.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ons-toolbar>\n  <div class=\"left\">\n    <ons-toolbar-button>\n      <ons-icon icon=\"fa-long-arrow-left\"></ons-icon>\n   </ons-toolbar-button>\n </div>\n</ons-toolbar>\n<body>\n <div id=\"wrap\">\n <div class=\"box\">\n   <div class=\"icon\">\n   </div>\n   <p class=\"title\">Title</p>\n   <input type=\"text\" class=\"title\">\n   <p class=\"user\">AssignUser</p>\n   <input type=\"text\" class=\"user\">\n   <p class=\"comment\">Comment</p>\n   <textarea class=\"comment\" id=\"\"></textarea>\n </div>\n <ons-button class=\"make\">Complete</ons-button>\n\n</div>\n\n</body>\n"

/***/ }),

/***/ "./src/app/taskplus/taskplus.component.scss":
/*!**************************************************!*\
  !*** ./src/app/taskplus/taskplus.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\nbody {\n  width: 100%;\n  /*ページ全体の幅は100%と指定する*/\n  text-align: center;\n  /*ページ全体を中央揃えにする*/ }\n#wrap {\n  width: 320px;\n  /*全体の幅を指定する*/\n  margin: 0 auto;\n  /*マージンの指定をする、ブラウザ対策*/\n  text-align: center;\n  /*全体を左揃えにする。*/ }\ndiv.box {\n  position: absolute;\n  width: 320px;\n  height: 427px;\n  top: 65px;\n  background: #277FBF;\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 8px; }\ndiv.icon {\n  position: absolute;\n  width: 100px;\n  height: 100px;\n  left: 111px;\n  top: -50px;\n  background: black;\n  border-radius: 50%; }\nons-button {\n  position: relative;\n  width: 275px;\n  height: 44px;\n  top: 525px;\n  text-align: center;\n  background: #34AAFF;\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 26px; }\np {\n  position: absolute;\n  width: 69px;\n  height: 24px;\n  left: 40px;\n  top: 196px;\n  font-style: normal;\n  font-weight: normal;\n  line-height: normal;\n  font-size: 24px;\n  letter-spacing: 0.012em;\n  color: #FFFFFF; }\np.title {\n  top: 50px; }\np.user {\n  top: 142px; }\np.comment {\n  top: 234px; }\ninput {\n  position: absolute;\n  width: 240px;\n  height: 32px;\n  left: 40px;\n  background: rgba(255, 255, 255, 0.27);\n  border-radius: 5px; }\ninput.title {\n  top: 110px; }\ninput.user {\n  top: 202px; }\ntextarea {\n  position: absolute;\n  width: 240px;\n  height: 90px;\n  left: 40px;\n  top: 294px;\n  background: rgba(255, 255, 255, 0.27);\n  border-radius: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFza3BsdXMvdGFza3BsdXMuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYXJpbXVyYXl1dWtpL0Rlc2t0b3AvbmctY29yZG92YS9zcmMvYXBwL3Rhc2twbHVzL3Rhc2twbHVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFpQjtBQ0FqQjtFQUNJLFlBQVU7RUFBRSxxQkFBQTtFQUNaLG1CQUFpQjtFQUFFLGlCQUFBLEVBQUE7QUFFckI7RUFDRSxhQUFZO0VBQUssYUFBQTtFQUNqQixlQUFjO0VBQUsscUJBQUE7RUFDbkIsbUJBQWlCO0VBQUksY0FBQSxFQUFBO0FBRXZCO0VBQ0UsbUJBQWtCO0VBQ2xCLGFBQVk7RUFDWixjQUFhO0VBRWIsVUFBUztFQUVULG9CQUFtQjtFQUNuQiw0Q0FBMkM7RUFDM0MsbUJBQWtCLEVBQ25CO0FBQ0Q7RUFDRSxtQkFBa0I7RUFDbEIsYUFBWTtFQUNaLGNBQWE7RUFDYixZQUFXO0VBQ1gsV0FBVTtFQUVWLGtCQUFpQjtFQUNqQixtQkFBa0IsRUFDbkI7QUFDRDtFQUNFLG1CQUFrQjtFQUNsQixhQUFZO0VBQ1osYUFBWTtFQUVaLFdBQVU7RUFDVixtQkFBa0I7RUFDbEIsb0JBQW1CO0VBQ25CLDRDQUEyQztFQUMzQyxvQkFBbUIsRUFDcEI7QUFDRDtFQUNFLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsYUFBWTtFQUNaLFdBQVU7RUFDVixXQUFVO0VBQ1YsbUJBQWtCO0VBQ2xCLG9CQUFtQjtFQUNuQixvQkFBbUI7RUFDbkIsZ0JBQWU7RUFDZix3QkFBdUI7RUFFdkIsZUFBYyxFQUVmO0FBQ0Q7RUFDRSxVQUFTLEVBQ1Y7QUFFRDtFQUNFLFdBQVUsRUFDWDtBQUNEO0VBQ0UsV0FBVSxFQUNYO0FBRUQ7RUFDRSxtQkFBa0I7RUFDbEIsYUFBWTtFQUNaLGFBQVk7RUFDWixXQUFVO0VBR1Ysc0NBQXFDO0VBQ3JDLG1CQUFrQixFQUVuQjtBQUNEO0VBQ0UsV0FBVSxFQUNYO0FBQ0Q7RUFDRSxXQUFVLEVBQ1g7QUFDRDtFQUNFLG1CQUFrQjtFQUNsQixhQUFZO0VBQ1osYUFBWTtFQUNaLFdBQVU7RUFDVixXQUFVO0VBRVYsc0NBQXFDO0VBQ3JDLG1CQUFrQixFQUVuQiIsImZpbGUiOiJzcmMvYXBwL3Rhc2twbHVzL3Rhc2twbHVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuYm9keSB7XG4gIHdpZHRoOiAxMDAlO1xuICAvKuODmuODvOOCuOWFqOS9k+OBruW5heOBrzEwMCXjgajmjIflrprjgZnjgosqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC8q44Oa44O844K45YWo5L2T44KS5Lit5aSu5o+D44GI44Gr44GZ44KLKi8gfVxuXG4jd3JhcCB7XG4gIHdpZHRoOiAzMjBweDtcbiAgLyrlhajkvZPjga7luYXjgpLmjIflrprjgZnjgosqL1xuICBtYXJnaW46IDAgYXV0bztcbiAgLyrjg57jg7zjgrjjg7Pjga7mjIflrprjgpLjgZnjgovjgIHjg5bjg6njgqbjgrblr77nrZYqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC8q5YWo5L2T44KS5bem5o+D44GI44Gr44GZ44KL44CCKi8gfVxuXG5kaXYuYm94IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzIwcHg7XG4gIGhlaWdodDogNDI3cHg7XG4gIHRvcDogNjVweDtcbiAgYmFja2dyb3VuZDogIzI3N0ZCRjtcbiAgYm94LXNoYWRvdzogMnB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogOHB4OyB9XG5cbmRpdi5pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGxlZnQ6IDExMXB4O1xuICB0b3A6IC01MHB4O1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNTAlOyB9XG5cbm9ucy1idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyNzVweDtcbiAgaGVpZ2h0OiA0NHB4O1xuICB0b3A6IDUyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICMzNEFBRkY7XG4gIGJveC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDI2cHg7IH1cblxucCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDY5cHg7XG4gIGhlaWdodDogMjRweDtcbiAgbGVmdDogNDBweDtcbiAgdG9wOiAxOTZweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxMmVtO1xuICBjb2xvcjogI0ZGRkZGRjsgfVxuXG5wLnRpdGxlIHtcbiAgdG9wOiA1MHB4OyB9XG5cbnAudXNlciB7XG4gIHRvcDogMTQycHg7IH1cblxucC5jb21tZW50IHtcbiAgdG9wOiAyMzRweDsgfVxuXG5pbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDI0MHB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGxlZnQ6IDQwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNyk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDsgfVxuXG5pbnB1dC50aXRsZSB7XG4gIHRvcDogMTEwcHg7IH1cblxuaW5wdXQudXNlciB7XG4gIHRvcDogMjAycHg7IH1cblxudGV4dGFyZWEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyNDBweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICBsZWZ0OiA0MHB4O1xuICB0b3A6IDI5NHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjcpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7IH1cbiIsImJvZHl7XG4gICAgd2lkdGg6MTAwJTsgLyrjg5rjg7zjgrjlhajkvZPjga7luYXjga8xMDAl44Go5oyH5a6a44GZ44KLKi9cbiAgICB0ZXh0LWFsaWduOmNlbnRlcjsgLyrjg5rjg7zjgrjlhajkvZPjgpLkuK3lpK7mj4PjgYjjgavjgZnjgosqL1xuICB9XG4gICN3cmFwe1xuICAgIHdpZHRoOiAzMjBweDtcdCAgIC8q5YWo5L2T44Gu5bmF44KS5oyH5a6a44GZ44KLKi9cbiAgICBtYXJnaW46IDAgYXV0bzsgICAgLyrjg57jg7zjgrjjg7Pjga7mjIflrprjgpLjgZnjgovjgIHjg5bjg6njgqbjgrblr77nrZYqL1xuICAgIHRleHQtYWxpZ246Y2VudGVyOyAgIC8q5YWo5L2T44KS5bem5o+D44GI44Gr44GZ44KL44CCKi9cbiAgfVxuICBkaXYuYm94e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMzIwcHg7XG4gICAgaGVpZ2h0OiA0MjdweDtcbiAgXG4gICAgdG9wOiA2NXB4O1xuICBcbiAgICBiYWNrZ3JvdW5kOiAjMjc3RkJGO1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB9XG4gIGRpdi5pY29ue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBsZWZ0OiAxMTFweDtcbiAgICB0b3A6IC01MHB4O1xuICBcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbiAgb25zLWJ1dHRvbntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDI3NXB4O1xuICAgIGhlaWdodDogNDRweDtcbiAgXG4gICAgdG9wOiA1MjVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogIzM0QUFGRjtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDI2cHg7XG4gIH1cbiAgcHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDY5cHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIGxlZnQ6IDQwcHg7XG4gICAgdG9wOiAxOTZweDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMTJlbTtcbiAgXG4gICAgY29sb3I6ICNGRkZGRkY7XG4gIFxuICB9XG4gIHAudGl0bGV7XG4gICAgdG9wOiA1MHB4O1xuICB9XG4gIFxuICBwLnVzZXJ7XG4gICAgdG9wOiAxNDJweDtcbiAgfVxuICBwLmNvbW1lbnR7XG4gICAgdG9wOiAyMzRweDtcbiAgfVxuICBcbiAgaW5wdXR7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAyNDBweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgbGVmdDogNDBweDtcbiAgXG4gIFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNyk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBcbiAgfVxuICBpbnB1dC50aXRsZXtcbiAgICB0b3A6IDExMHB4O1xuICB9XG4gIGlucHV0LnVzZXJ7XG4gICAgdG9wOiAyMDJweDtcbiAgfVxuICB0ZXh0YXJlYXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDI0MHB4O1xuICAgIGhlaWdodDogOTBweDtcbiAgICBsZWZ0OiA0MHB4O1xuICAgIHRvcDogMjk0cHg7XG4gIFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNyk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBcbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/app/taskplus/taskplus.component.ts":
/*!************************************************!*\
  !*** ./src/app/taskplus/taskplus.component.ts ***!
  \************************************************/
/*! exports provided: TaskplusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskplusComponent", function() { return TaskplusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TaskplusComponent = /** @class */ (function () {
    function TaskplusComponent() {
    }
    // constructor(@Inject(forwardRef(() => AppComponent)) private app : AppComponent) { }
    TaskplusComponent.prototype.ngOnInit = function () {
    };
    TaskplusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-taskplus',
            template: __webpack_require__(/*! ./taskplus.component.html */ "./src/app/taskplus/taskplus.component.html"),
            styles: [__webpack_require__(/*! ./taskplus.component.scss */ "./src/app/taskplus/taskplus.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TaskplusComponent);
    return TaskplusComponent;
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

module.exports = __webpack_require__(/*! /Users/arimurayuuki/Desktop/ng-cordova/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map