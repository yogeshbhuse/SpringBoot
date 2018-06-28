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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"divdetails\">\n\n        <app-header> </app-header>\n\n    <app-footer></app-footer>\n\n</div>\n\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'To First Angular Application';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _new_compn_new_compn_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-compn/new-compn.component */ "./src/app/new-compn/new-compn.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _new_compn_new_compn_component__WEBPACK_IMPORTED_MODULE_3__["NewCompnComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_6__["MainPageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  \n</p>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.newFooterComponent = "Footer Component Added";
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nhtml {\r\n\tbox-sizing: border-box\r\n}\r\n\r\n*,\r\n*:before,\r\n*:after {\r\n\tbox-sizing: inherit\r\n}\r\n\r\n/* Extract from normalize.css by Nicolas Gallagher and Jonathan Neal git.io/normalize */\r\n\r\nhtml {\r\n\t-ms-text-size-adjust: 100%;\r\n\t-webkit-text-size-adjust: 100%\r\n}\r\n\r\nbody {\r\n\tmargin: 0\r\n}\r\n\r\narticle,\r\naside,\r\ndetails,\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nmain,\r\nmenu,\r\nnav,\r\nsection,\r\nsummary {\r\n\tdisplay: block\r\n}\r\n\r\naudio,\r\ncanvas,\r\nprogress,\r\nvideo {\r\n\tdisplay: inline-block\r\n}\r\n\r\nprogress {\r\n\tvertical-align: baseline\r\n}\r\n\r\naudio:not([controls]) {\r\n\tdisplay: none;\r\n\theight: 0\r\n}\r\n\r\n[hidden],\r\ntemplate {\r\n\tdisplay: none\r\n}\r\n\r\na {\r\n\tbackground-color: transparent;\r\n\t-webkit-text-decoration-skip: objects\r\n}\r\n\r\na:active,\r\na:hover {\r\n\toutline-width: 0\r\n}\r\n\r\nabbr[title] {\r\n\tborder-bottom: none;\r\n\ttext-decoration: underline;\r\n\t-webkit-text-decoration: underline dotted;\r\n\t        text-decoration: underline dotted\r\n}\r\n\r\ndfn {\r\n\tfont-style: italic\r\n}\r\n\r\nmark {\r\n\tbackground: #ff0;\r\n\tcolor: #000\r\n}\r\n\r\nsmall {\r\n\tfont-size: 80%\r\n}\r\n\r\nsub,\r\nsup {\r\n\tfont-size: 75%;\r\n\tline-height: 0;\r\n\tposition: relative;\r\n\tvertical-align: baseline\r\n}\r\n\r\nsub {\r\n\tbottom: -0.25em\r\n}\r\n\r\nsup {\r\n\ttop: -0.5em\r\n}\r\n\r\nfigure {\r\n\tmargin: 1em 40px\r\n}\r\n\r\nimg {\r\n\tborder-style: none\r\n}\r\n\r\nsvg:not(:root) {\r\n\toverflow: hidden\r\n}\r\n\r\ncode,\r\nkbd,\r\npre,\r\nsamp {\r\n\tfont-family: monospace, monospace;\r\n\tfont-size: 1em\r\n}\r\n\r\nhr {\r\n\tbox-sizing: content-box;\r\n\theight: 0;\r\n\toverflow: visible\r\n}\r\n\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea {\r\n\tfont: inherit;\r\n\tmargin: 0\r\n}\r\n\r\noptgroup {\r\n\tfont-weight: bold\r\n}\r\n\r\nbutton,\r\ninput {\r\n\toverflow: visible\r\n}\r\n\r\nbutton,\r\nselect {\r\n\ttext-transform: none\r\n}\r\n\r\nbutton,\r\nhtml [type=button],\r\n[type=reset],\r\n[type=submit] {\r\n\t-webkit-appearance: button\r\n}\r\n\r\nbutton::-moz-focus-inner,\r\n[type=button]::-moz-focus-inner,\r\n[type=reset]::-moz-focus-inner,\r\n[type=submit]::-moz-focus-inner {\r\n\tborder-style: none;\r\n\tpadding: 0\r\n}\r\n\r\nbutton:-moz-focusring,\r\n[type=button]:-moz-focusring,\r\n[type=reset]:-moz-focusring,\r\n[type=submit]:-moz-focusring {\r\n\toutline: 1px dotted ButtonText\r\n}\r\n\r\nfieldset {\r\n\tborder: 1px solid #c0c0c0;\r\n\tmargin: 0 2px;\r\n\tpadding: .35em .625em .75em\r\n}\r\n\r\nlegend {\r\n\tcolor: inherit;\r\n\tdisplay: table;\r\n\tmax-width: 100%;\r\n\tpadding: 0;\r\n\twhite-space: normal\r\n}\r\n\r\ntextarea {\r\n\toverflow: auto\r\n}\r\n\r\n[type=checkbox],\r\n[type=radio] {\r\n\tpadding: 0\r\n}\r\n\r\n[type=number]::-webkit-inner-spin-button,\r\n[type=number]::-webkit-outer-spin-button {\r\n\theight: auto\r\n}\r\n\r\n[type=search] {\r\n\t-webkit-appearance: textfield;\r\n\toutline-offset: -2px\r\n}\r\n\r\n[type=search]::-webkit-search-cancel-button,\r\n[type=search]::-webkit-search-decoration {\r\n\t-webkit-appearance: none\r\n}\r\n\r\n::-webkit-input-placeholder {\r\n\tcolor: inherit;\r\n\topacity: 0.54\r\n}\r\n\r\n::-webkit-file-upload-button {\r\n\t-webkit-appearance: button;\r\n\tfont: inherit\r\n}\r\n\r\n/* End extract */\r\n\r\nhtml,\r\nbody {\r\n\tfont-family: Verdana, sans-serif;\r\n\tfont-size: 15px;\r\n\tline-height: 1.5\r\n}\r\n\r\nhtml {\r\n\toverflow-x: hidden\r\n}\r\n\r\nh1 {\r\n\tfont-size: 36px\r\n}\r\n\r\nh2 {\r\n\tfont-size: 30px\r\n}\r\n\r\nh3 {\r\n\tfont-size: 24px\r\n}\r\n\r\nh4 {\r\n\tfont-size: 20px\r\n}\r\n\r\nh5 {\r\n\tfont-size: 18px\r\n}\r\n\r\nh6 {\r\n\tfont-size: 16px\r\n}\r\n\r\n.w3-serif {\r\n\tfont-family: serif\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n\tfont-family: \"Segoe UI\", Arial, sans-serif;\r\n\tfont-weight: 400;\r\n\tmargin: 10px 0\r\n}\r\n\r\n.w3-wide {\r\n\tletter-spacing: 4px\r\n}\r\n\r\nhr {\r\n\tborder: 0;\r\n\tborder-top: 1px solid #eee;\r\n\tmargin: 20px 0\r\n}\r\n\r\n.w3-image {\r\n\tmax-width: 100%;\r\n\theight: auto\r\n}\r\n\r\nimg {\r\n\tvertical-align: middle\r\n}\r\n\r\na {\r\n\tcolor: inherit\r\n}\r\n\r\n.w3-table,\r\n.w3-table-all {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n\twidth: 100%;\r\n\tdisplay: table\r\n}\r\n\r\n.w3-table-all {\r\n\tborder: 1px solid #ccc\r\n}\r\n\r\n.w3-bordered tr,\r\n.w3-table-all tr {\r\n\tborder-bottom: 1px solid #ddd\r\n}\r\n\r\n.w3-striped tbody tr:nth-child(even) {\r\n\tbackground-color: #f1f1f1\r\n}\r\n\r\n.w3-table-all tr:nth-child(odd) {\r\n\tbackground-color: #fff\r\n}\r\n\r\n.w3-table-all tr:nth-child(even) {\r\n\tbackground-color: #f1f1f1\r\n}\r\n\r\n.w3-hoverable tbody tr:hover,\r\n.w3-ul.w3-hoverable li:hover {\r\n\tbackground-color: #ccc\r\n}\r\n\r\n.w3-centered tr th,\r\n.w3-centered tr td {\r\n\ttext-align: center\r\n}\r\n\r\n.w3-table td,\r\n.w3-table th,\r\n.w3-table-all td,\r\n.w3-table-all th {\r\n\tpadding: 8px 8px;\r\n\tdisplay: table-cell;\r\n\ttext-align: left;\r\n\tvertical-align: top\r\n}\r\n\r\n.w3-table th:first-child,\r\n.w3-table td:first-child,\r\n.w3-table-all th:first-child,\r\n.w3-table-all td:first-child {\r\n\tpadding-left: 16px\r\n}\r\n\r\n.w3-btn,\r\n.w3-button {\r\n\tborder: none;\r\n\tdisplay: inline-block;\r\n\tpadding: 8px 16px;\r\n\tvertical-align: middle;\r\n\toverflow: hidden;\r\n\ttext-decoration: none;\r\n\tcolor: inherit;\r\n\tbackground-color: inherit;\r\n\ttext-align: center;\r\n\tcursor: pointer;\r\n\twhite-space: nowrap\r\n}\r\n\r\n.w3-btn:hover {\r\n\tbox-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)\r\n}\r\n\r\n.w3-btn,\r\n.w3-button {\r\n\t-webkit-touch-callout: none;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none\r\n}\r\n\r\n.w3-disabled,\r\n.w3-btn:disabled,\r\n.w3-button:disabled {\r\n\tcursor: not-allowed;\r\n\topacity: 0.3\r\n}\r\n\r\n.w3-disabled *,\r\n:disabled * {\r\n\tpointer-events: none\r\n}\r\n\r\n.w3-btn.w3-disabled:hover,\r\n.w3-btn:disabled:hover {\r\n\tbox-shadow: none\r\n}\r\n\r\n.w3-badge,\r\n.w3-tag {\r\n\tbackground-color: #000;\r\n\tcolor: #fff;\r\n\tdisplay: inline-block;\r\n\tpadding-left: 8px;\r\n\tpadding-right: 8px;\r\n\ttext-align: center\r\n}\r\n\r\n.w3-badge {\r\n\tborder-radius: 50%\r\n}\r\n\r\n.w3-ul {\r\n\tlist-style-type: none;\r\n\tpadding: 0;\r\n\tmargin: 0\r\n}\r\n\r\n.w3-ul li {\r\n\tpadding: 8px 16px;\r\n\tborder-bottom: 1px solid #ddd\r\n}\r\n\r\n.w3-ul li:last-child {\r\n\tborder-bottom: none\r\n}\r\n\r\n.w3-tooltip,\r\n.w3-display-container {\r\n\tposition: relative\r\n}\r\n\r\n.w3-tooltip .w3-text {\r\n\tdisplay: none\r\n}\r\n\r\n.w3-tooltip:hover .w3-text {\r\n\tdisplay: inline-block\r\n}\r\n\r\n.w3-ripple:active {\r\n\topacity: 0.5\r\n}\r\n\r\n.w3-ripple {\r\n\ttransition: opacity 0s\r\n}\r\n\r\n.w3-input {\r\n\tpadding: 8px;\r\n\tdisplay: block;\r\n\tborder: none;\r\n\tborder-bottom: 1px solid #ccc;\r\n\twidth: 100%\r\n}\r\n\r\n.w3-select {\r\n\tpadding: 9px 0;\r\n\twidth: 100%;\r\n\tborder: none;\r\n\tborder-bottom: 1px solid #ccc\r\n}\r\n\r\n.w3-dropdown-click,\r\n.w3-dropdown-hover {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\tcursor: pointer\r\n}\r\n\r\n.w3-dropdown-hover:hover .w3-dropdown-content {\r\n\tdisplay: block\r\n}\r\n\r\n.w3-dropdown-hover:first-child,\r\n.w3-dropdown-click:hover {\r\n\tbackground-color: #ccc;\r\n\tcolor: #000\r\n}\r\n\r\n.w3-dropdown-hover:hover>.w3-button:first-child,\r\n.w3-dropdown-click:hover>.w3-button:first-child {\r\n\tbackground-color: #ccc;\r\n\tcolor: #000\r\n}\r\n\r\n.w3-dropdown-content {\r\n\tcursor: auto;\r\n\tcolor: #000;\r\n\tbackground-color: #fff;\r\n\tdisplay: none;\r\n\tposition: absolute;\r\n\tmin-width: 160px;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tz-index: 1\r\n}\r\n\r\n.w3-check,\r\n.w3-radio {\r\n\twidth: 24px;\r\n\theight: 24px;\r\n\tposition: relative;\r\n\ttop: 6px\r\n}\r\n\r\n.w3-sidebar {\r\n\theight: 100%;\r\n\twidth: 200px;\r\n\tbackground-color: #fff;\r\n\tposition: fixed!important;\r\n\tz-index: 1;\r\n\toverflow: auto\r\n}\r\n\r\n.w3-bar-block .w3-dropdown-hover,\r\n.w3-bar-block .w3-dropdown-click {\r\n\twidth: 100%\r\n}\r\n\r\n.w3-bar-block .w3-dropdown-hover .w3-dropdown-content,\r\n.w3-bar-block .w3-dropdown-click .w3-dropdown-content {\r\n\tmin-width: 100%\r\n}\r\n\r\n.w3-bar-block .w3-dropdown-hover .w3-button,\r\n.w3-bar-block .w3-dropdown-click .w3-button {\r\n\twidth: 100%;\r\n\ttext-align: left;\r\n\tpadding: 8px 16px\r\n}\r\n\r\n.w3-main,\r\n#main {\r\n\ttransition: margin-left .4s\r\n}\r\n\r\n.w3-modal {\r\n\tz-index: 3;\r\n\tdisplay: none;\r\n\tpadding-top: 100px;\r\n\tposition: fixed;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\toverflow: auto;\r\n\tbackground-color: rgb(0, 0, 0);\r\n\tbackground-color: rgba(0, 0, 0, 0.4)\r\n}\r\n\r\n.w3-modal-content {\r\n\tmargin: auto;\r\n\tbackground-color: #fff;\r\n\tposition: relative;\r\n\tpadding: 0;\r\n\toutline: 0;\r\n\twidth: 600px\r\n}\r\n\r\n.w3-bar {\r\n\twidth: 100%;\r\n\toverflow: hidden\r\n}\r\n\r\n.w3-center .w3-bar {\r\n\tdisplay: inline-block;\r\n\twidth: auto\r\n}\r\n\r\n.w3-bar .w3-bar-item {\r\n\tpadding: 8px 16px;\r\n\tfloat: left;\r\n\twidth: auto;\r\n\tborder: none;\r\n\tdisplay: block;\r\n\toutline: 0\r\n}\r\n\r\n.w3-bar .w3-dropdown-hover,\r\n.w3-bar .w3-dropdown-click {\r\n\tposition: static;\r\n\tfloat: left\r\n}\r\n\r\n.w3-bar .w3-button {\r\n\twhite-space: normal\r\n}\r\n\r\n.w3-bar-block .w3-bar-item {\r\n\twidth: 100%;\r\n\tdisplay: block;\r\n\tpadding: 8px 16px;\r\n\ttext-align: left;\r\n\tborder: none;\r\n\twhite-space: normal;\r\n\tfloat: none;\r\n\toutline: 0\r\n}\r\n\r\n.w3-bar-block.w3-center .w3-bar-item {\r\n\ttext-align: center\r\n}\r\n\r\n.w3-block {\r\n\tdisplay: block;\r\n\twidth: 100%\r\n}\r\n\r\n.w3-responsive {\r\n\tdisplay: block;\r\n\toverflow-x: auto\r\n}\r\n\r\n.w3-container:after,\r\n.w3-container:before,\r\n.w3-panel:after,\r\n.w3-panel:before,\r\n.w3-row:after,\r\n.w3-row:before,\r\n.w3-row-padding:after,\r\n.w3-row-padding:before,\r\n.w3-cell-row:before,\r\n.w3-cell-row:after,\r\n.w3-clear:after,\r\n.w3-clear:before,\r\n.w3-bar:before,\r\n.w3-bar:after {\r\n\tcontent: \"\";\r\n\tdisplay: table;\r\n\tclear: both\r\n}\r\n\r\n.w3-col,\r\n.w3-half,\r\n.w3-third,\r\n.w3-twothird,\r\n.w3-threequarter,\r\n.w3-quarter {\r\n\tfloat: left;\r\n\twidth: 100%\r\n}\r\n\r\n.w3-col.s1 {\r\n\twidth: 8.33333%\r\n}\r\n\r\n.w3-col.s2 {\r\n\twidth: 16.66666%\r\n}\r\n\r\n.w3-col.s3 {\r\n\twidth: 24.99999%\r\n}\r\n\r\n.w3-col.s4 {\r\n\twidth: 33.33333%\r\n}\r\n\r\n.w3-col.s5 {\r\n\twidth: 41.66666%\r\n}\r\n\r\n.w3-col.s6 {\r\n\twidth: 49.99999%\r\n}\r\n\r\n.w3-col.s7 {\r\n\twidth: 58.33333%\r\n}\r\n\r\n.w3-col.s8 {\r\n\twidth: 66.66666%\r\n}\r\n\r\n.w3-col.s9 {\r\n\twidth: 74.99999%\r\n}\r\n\r\n.w3-col.s10 {\r\n\twidth: 83.33333%\r\n}\r\n\r\n.w3-col.s11 {\r\n\twidth: 91.66666%\r\n}\r\n\r\n.w3-col.s12 {\r\n\twidth: 99.99999%\r\n}\r\n\r\n@media (min-width:601px) {\r\n\t.w3-col.m1 {\r\n\t\twidth: 8.33333%\r\n\t}\r\n\t.w3-col.m2 {\r\n\t\twidth: 16.66666%\r\n\t}\r\n\t.w3-col.m3,\r\n\t.w3-quarter {\r\n\t\twidth: 24.99999%\r\n\t}\r\n\t.w3-col.m4,\r\n\t.w3-third {\r\n\t\twidth: 33.33333%\r\n\t}\r\n\t.w3-col.m5 {\r\n\t\twidth: 41.66666%\r\n\t}\r\n\t.w3-col.m6,\r\n\t.w3-half {\r\n\t\twidth: 49.99999%\r\n\t}\r\n\t.w3-col.m7 {\r\n\t\twidth: 58.33333%\r\n\t}\r\n\t.w3-col.m8,\r\n\t.w3-twothird {\r\n\t\twidth: 66.66666%\r\n\t}\r\n\t.w3-col.m9,\r\n\t.w3-threequarter {\r\n\t\twidth: 74.99999%\r\n\t}\r\n\t.w3-col.m10 {\r\n\t\twidth: 83.33333%\r\n\t}\r\n\t.w3-col.m11 {\r\n\t\twidth: 91.66666%\r\n\t}\r\n\t.w3-col.m12 {\r\n\t\twidth: 99.99999%\r\n\t}\r\n}\r\n\r\n@media (min-width:993px) {\r\n\t.w3-col.l1 {\r\n\t\twidth: 8.33333%\r\n\t}\r\n\t.w3-col.l2 {\r\n\t\twidth: 16.66666%\r\n\t}\r\n\t.w3-col.l3 {\r\n\t\twidth: 24.99999%\r\n\t}\r\n\t.w3-col.l4 {\r\n\t\twidth: 33.33333%\r\n\t}\r\n\t.w3-col.l5 {\r\n\t\twidth: 41.66666%\r\n\t}\r\n\t.w3-col.l6 {\r\n\t\twidth: 49.99999%\r\n\t}\r\n\t.w3-col.l7 {\r\n\t\twidth: 58.33333%\r\n\t}\r\n\t.w3-col.l8 {\r\n\t\twidth: 66.66666%\r\n\t}\r\n\t.w3-col.l9 {\r\n\t\twidth: 74.99999%\r\n\t}\r\n\t.w3-col.l10 {\r\n\t\twidth: 83.33333%\r\n\t}\r\n\t.w3-col.l11 {\r\n\t\twidth: 91.66666%\r\n\t}\r\n\t.w3-col.l12 {\r\n\t\twidth: 99.99999%\r\n\t}\r\n}\r\n\r\n.w3-content {\r\n\tmax-width: 980px;\r\n\tmargin: auto\r\n}\r\n\r\n.w3-rest {\r\n\toverflow: hidden\r\n}\r\n\r\n.w3-cell-row {\r\n\tdisplay: table;\r\n\twidth: 100%\r\n}\r\n\r\n.w3-cell {\r\n\tdisplay: table-cell\r\n}\r\n\r\n.w3-cell-top {\r\n\tvertical-align: top\r\n}\r\n\r\n.w3-cell-middle {\r\n\tvertical-align: middle\r\n}\r\n\r\n.w3-cell-bottom {\r\n\tvertical-align: bottom\r\n}\r\n\r\n.w3-hide {\r\n\tdisplay: none!important\r\n}\r\n\r\n.w3-show-block,\r\n.w3-show {\r\n\tdisplay: block!important\r\n}\r\n\r\n.w3-show-inline-block {\r\n\tdisplay: inline-block!important\r\n}\r\n\r\n@media (max-width:600px) {\r\n\t.w3-modal-content {\r\n\t\tmargin: 0 10px;\r\n\t\twidth: auto!important\r\n\t}\r\n\t.w3-modal {\r\n\t\tpadding-top: 30px\r\n\t}\r\n\t.w3-dropdown-hover.w3-mobile .w3-dropdown-content,\r\n\t.w3-dropdown-click.w3-mobile .w3-dropdown-content {\r\n\t\tposition: relative\r\n\t}\r\n\t.w3-hide-small {\r\n\t\tdisplay: none!important\r\n\t}\r\n\t.w3-mobile {\r\n\t\tdisplay: block;\r\n\t\twidth: 100%!important\r\n\t}\r\n\t.w3-bar-item.w3-mobile,\r\n\t.w3-dropdown-hover.w3-mobile,\r\n\t.w3-dropdown-click.w3-mobile {\r\n\t\ttext-align: center\r\n\t}\r\n\t.w3-dropdown-hover.w3-mobile,\r\n\t.w3-dropdown-hover.w3-mobile .w3-btn,\r\n\t.w3-dropdown-hover.w3-mobile .w3-button,\r\n\t.w3-dropdown-click.w3-mobile,\r\n\t.w3-dropdown-click.w3-mobile .w3-btn,\r\n\t.w3-dropdown-click.w3-mobile .w3-button {\r\n\t\twidth: 100%\r\n\t}\r\n}\r\n\r\n@media (max-width:768px) {\r\n\t.w3-modal-content {\r\n\t\twidth: 500px\r\n\t}\r\n\t.w3-modal {\r\n\t\tpadding-top: 50px\r\n\t}\r\n}\r\n\r\n@media (min-width:993px) {\r\n\t.w3-modal-content {\r\n\t\twidth: 900px\r\n\t}\r\n\t.w3-hide-large {\r\n\t\tdisplay: none!important\r\n\t}\r\n\t.w3-sidebar.w3-collapse {\r\n\t\tdisplay: block!important\r\n\t}\r\n}\r\n\r\n@media (max-width:992px) and (min-width:601px) {\r\n\t.w3-hide-medium {\r\n\t\tdisplay: none!important\r\n\t}\r\n}\r\n\r\n@media (max-width:992px) {\r\n\t.w3-sidebar.w3-collapse {\r\n\t\tdisplay: none\r\n\t}\r\n\t.w3-main {\r\n\t\tmargin-left: 0!important;\r\n\t\tmargin-right: 0!important\r\n\t}\r\n}\r\n\r\n.w3-top,\r\n.w3-bottom {\r\n\tposition: fixed;\r\n\twidth: 100%;\r\n\tz-index: 1\r\n}\r\n\r\n.w3-top {\r\n\ttop: 0\r\n}\r\n\r\n.w3-bottom {\r\n\tbottom: 0\r\n}\r\n\r\n.w3-overlay {\r\n\tposition: fixed;\r\n\tdisplay: none;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n\tbackground-color: rgba(0, 0, 0, 0.5);\r\n\tz-index: 2\r\n}\r\n\r\n.w3-display-topleft {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0\r\n}\r\n\r\n.w3-display-topright {\r\n\tposition: absolute;\r\n\tright: 0;\r\n\ttop: 0\r\n}\r\n\r\n.w3-display-bottomleft {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\tbottom: 0\r\n}\r\n\r\n.w3-display-bottomright {\r\n\tposition: absolute;\r\n\tright: 0;\r\n\tbottom: 0\r\n}\r\n\r\n.w3-display-middle {\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\t-webkit-transform: translate(-50%, -50%);\r\n\t        transform: translate(-50%, -50%);\r\n\t-ms-transform: translate(-50%, -50%)\r\n}\r\n\r\n.w3-display-left {\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tleft: 0%;\r\n\t-webkit-transform: translate(0%, -50%);\r\n\t        transform: translate(0%, -50%);\r\n\t-ms-transform: translate(-0%, -50%)\r\n}\r\n\r\n.w3-display-right {\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tright: 0%;\r\n\t-webkit-transform: translate(0%, -50%);\r\n\t        transform: translate(0%, -50%);\r\n\t-ms-transform: translate(0%, -50%)\r\n}\r\n\r\n.w3-display-topmiddle {\r\n\tposition: absolute;\r\n\tleft: 50%;\r\n\ttop: 0;\r\n\t-webkit-transform: translate(-50%, 0%);\r\n\t        transform: translate(-50%, 0%);\r\n\t-ms-transform: translate(-50%, 0%)\r\n}\r\n\r\n.w3-display-bottommiddle {\r\n\tposition: absolute;\r\n\tleft: 50%;\r\n\tbottom: 0;\r\n\t-webkit-transform: translate(-50%, 0%);\r\n\t        transform: translate(-50%, 0%);\r\n\t-ms-transform: translate(-50%, 0%)\r\n}\r\n\r\n.w3-display-container:hover .w3-display-hover {\r\n\tdisplay: block\r\n}\r\n\r\n.w3-display-container:hover span.w3-display-hover {\r\n\tdisplay: inline-block\r\n}\r\n\r\n.w3-display-hover {\r\n\tdisplay: none\r\n}\r\n\r\n.w3-display-position {\r\n\tposition: absolute\r\n}\r\n\r\n.w3-circle {\r\n\tborder-radius: 50%\r\n}\r\n\r\n.w3-round-small {\r\n\tborder-radius: 2px\r\n}\r\n\r\n.w3-round,\r\n.w3-round-medium {\r\n\tborder-radius: 4px\r\n}\r\n\r\n.w3-round-large {\r\n\tborder-radius: 8px\r\n}\r\n\r\n.w3-round-xlarge {\r\n\tborder-radius: 16px\r\n}\r\n\r\n.w3-round-xxlarge {\r\n\tborder-radius: 32px\r\n}\r\n\r\n.w3-row-padding,\r\n.w3-row-padding>.w3-half,\r\n.w3-row-padding>.w3-third,\r\n.w3-row-padding>.w3-twothird,\r\n.w3-row-padding>.w3-threequarter,\r\n.w3-row-padding>.w3-quarter,\r\n.w3-row-padding>.w3-col {\r\n\tpadding: 0 8px\r\n}\r\n\r\n.w3-container,\r\n.w3-panel {\r\n\tpadding: 0.01em 16px\r\n}\r\n\r\n.w3-panel {\r\n\tmargin-top: 16px;\r\n\tmargin-bottom: 16px\r\n}\r\n\r\n.w3-code,\r\n.w3-codespan {\r\n\tfont-family: Consolas, \"courier new\";\r\n\tfont-size: 16px\r\n}\r\n\r\n.w3-code {\r\n\twidth: auto;\r\n\tbackground-color: #fff;\r\n\tpadding: 8px 12px;\r\n\tborder-left: 4px solid #4CAF50;\r\n\tword-wrap: break-word\r\n}\r\n\r\n.w3-codespan {\r\n\tcolor: crimson;\r\n\tbackground-color: #f1f1f1;\r\n\tpadding-left: 4px;\r\n\tpadding-right: 4px;\r\n\tfont-size: 110%\r\n}\r\n\r\n.w3-card,\r\n.w3-card-2 {\r\n\tbox-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)\r\n}\r\n\r\n.w3-card-4,\r\n.w3-hover-shadow:hover {\r\n\tbox-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19)\r\n}\r\n\r\n.w3-spin {\r\n\t-webkit-animation: w3-spin 2s infinite linear;\r\n\t        animation: w3-spin 2s infinite linear\r\n}\r\n\r\n@-webkit-keyframes w3-spin {\r\n\t0% {\r\n\t\t-webkit-transform: rotate(0deg);\r\n\t\t        transform: rotate(0deg)\r\n\t}\r\n\t100% {\r\n\t\t-webkit-transform: rotate(359deg);\r\n\t\t        transform: rotate(359deg)\r\n\t}\r\n}\r\n\r\n@keyframes w3-spin {\r\n\t0% {\r\n\t\t-webkit-transform: rotate(0deg);\r\n\t\t        transform: rotate(0deg)\r\n\t}\r\n\t100% {\r\n\t\t-webkit-transform: rotate(359deg);\r\n\t\t        transform: rotate(359deg)\r\n\t}\r\n}\r\n\r\n.w3-animate-fading {\r\n\t-webkit-animation: fading 10s infinite;\r\n\t        animation: fading 10s infinite\r\n}\r\n\r\n@-webkit-keyframes fading {\r\n\t0% {\r\n\t\topacity: 0\r\n\t}\r\n\t50% {\r\n\t\topacity: 1\r\n\t}\r\n\t100% {\r\n\t\topacity: 0\r\n\t}\r\n}\r\n\r\n@keyframes fading {\r\n\t0% {\r\n\t\topacity: 0\r\n\t}\r\n\t50% {\r\n\t\topacity: 1\r\n\t}\r\n\t100% {\r\n\t\topacity: 0\r\n\t}\r\n}\r\n\r\n.w3-animate-opacity {\r\n\t-webkit-animation: opac 0.8s;\r\n\t        animation: opac 0.8s\r\n}\r\n\r\n@-webkit-keyframes opac {\r\n\tfrom {\r\n\t\topacity: 0\r\n\t}\r\n\tto {\r\n\t\topacity: 1\r\n\t}\r\n}\r\n\r\n@keyframes opac {\r\n\tfrom {\r\n\t\topacity: 0\r\n\t}\r\n\tto {\r\n\t\topacity: 1\r\n\t}\r\n}\r\n\r\n.w3-animate-top {\r\n\tposition: relative;\r\n\t-webkit-animation: animatetop 0.4s;\r\n\t        animation: animatetop 0.4s\r\n}\r\n\r\n@-webkit-keyframes animatetop {\r\n\tfrom {\r\n\t\ttop: -300px;\r\n\t\topacity: 0\r\n\t}\r\n\tto {\r\n\t\ttop: 0;\r\n\t\topacity: 1\r\n\t}\r\n}\r\n\r\n@keyframes animatetop {\r\n\tfrom {\r\n\t\ttop: -300px;\r\n\t\topacity: 0\r\n\t}\r\n\tto {\r\n\t\ttop: 0;\r\n\t\topacity: 1\r\n\t}\r\n}\r\n\r\n.w3-animate-left {\r\n\tposition: relative;\r\n\t-webkit-animation: animateleft 0.4s;\r\n\t        animation: animateleft 0.4s\r\n}\r\n\r\n@-webkit-keyframes animateleft {\r\n\tfrom {\r\n\t\tleft: -300px;\r\n\t\topacity: 0\r\n\t}\r\n\tto {\r\n\t\tleft: 0;\r\n\t\topacity: 1\r\n\t}\r\n}\r\n\r\n@keyframes animateleft {\r\n\tfrom {\r\n\t\tleft: -300px;\r\n\t\topacity: 0\r\n\t}\r\n\tto {\r\n\t\tleft: 0;\r\n\t\topacity: 1\r\n\t}\r\n}\r\n\r\n.w3-animate-right {\r\n\tposition: relative;\r\n\t-webkit-animation: animateright 0.4s;\r\n\t        animation: animateright 0.4s\r\n}\r\n\r\n@-webkit-keyframes animateright {\r\n\tfrom {\r\n\t\tright: -300px;\r\n\t\topacity: 0\r\n\t}\r\n\tto {\r\n\t\tright: 0;\r\n\t\topacity: 1\r\n\t}\r\n}\r\n\r\n@keyframes animateright {\r\n\tfrom {\r\n\t\tright: -300px;\r\n\t\topacity: 0\r\n\t}\r\n\tto {\r\n\t\tright: 0;\r\n\t\topacity: 1\r\n\t}\r\n}\r\n\r\n.w3-animate-bottom {\r\n\tposition: relative;\r\n\t-webkit-animation: animatebottom 0.4s;\r\n\t        animation: animatebottom 0.4s\r\n}\r\n\r\n@-webkit-keyframes animatebottom {\r\n\tfrom {\r\n\t\tbottom: -300px;\r\n\t\topacity: 0\r\n\t}\r\n\tto {\r\n\t\tbottom: 0;\r\n\t\topacity: 1\r\n\t}\r\n}\r\n\r\n@keyframes animatebottom {\r\n\tfrom {\r\n\t\tbottom: -300px;\r\n\t\topacity: 0\r\n\t}\r\n\tto {\r\n\t\tbottom: 0;\r\n\t\topacity: 1\r\n\t}\r\n}\r\n\r\n.w3-animate-zoom {\r\n\t-webkit-animation: animatezoom 0.6s;\r\n\t        animation: animatezoom 0.6s\r\n}\r\n\r\n@-webkit-keyframes animatezoom {\r\n\tfrom {\r\n\t\t-webkit-transform: scale(0);\r\n\t\t        transform: scale(0)\r\n\t}\r\n\tto {\r\n\t\t-webkit-transform: scale(1);\r\n\t\t        transform: scale(1)\r\n\t}\r\n}\r\n\r\n@keyframes animatezoom {\r\n\tfrom {\r\n\t\t-webkit-transform: scale(0);\r\n\t\t        transform: scale(0)\r\n\t}\r\n\tto {\r\n\t\t-webkit-transform: scale(1);\r\n\t\t        transform: scale(1)\r\n\t}\r\n}\r\n\r\n.w3-animate-input {\r\n\ttransition: width 0.4s ease-in-out\r\n}\r\n\r\n.w3-animate-input:focus {\r\n\twidth: 100%!important\r\n}\r\n\r\n.w3-opacity,\r\n.w3-hover-opacity:hover {\r\n\topacity: 0.60\r\n}\r\n\r\n.w3-opacity-off,\r\n.w3-hover-opacity-off:hover {\r\n\topacity: 1\r\n}\r\n\r\n.w3-opacity-max {\r\n\topacity: 0.25\r\n}\r\n\r\n.w3-opacity-min {\r\n\topacity: 0.75\r\n}\r\n\r\n.w3-greyscale-max,\r\n.w3-grayscale-max,\r\n.w3-hover-greyscale:hover,\r\n.w3-hover-grayscale:hover {\r\n\t-webkit-filter: grayscale(100%);\r\n\t        filter: grayscale(100%)\r\n}\r\n\r\n.w3-greyscale,\r\n.w3-grayscale {\r\n\t-webkit-filter: grayscale(75%);\r\n\t        filter: grayscale(75%)\r\n}\r\n\r\n.w3-greyscale-min,\r\n.w3-grayscale-min {\r\n\t-webkit-filter: grayscale(50%);\r\n\t        filter: grayscale(50%)\r\n}\r\n\r\n.w3-sepia {\r\n\t-webkit-filter: sepia(75%);\r\n\t        filter: sepia(75%)\r\n}\r\n\r\n.w3-sepia-max,\r\n.w3-hover-sepia:hover {\r\n\t-webkit-filter: sepia(100%);\r\n\t        filter: sepia(100%)\r\n}\r\n\r\n.w3-sepia-min {\r\n\t-webkit-filter: sepia(50%);\r\n\t        filter: sepia(50%)\r\n}\r\n\r\n.w3-tiny {\r\n\tfont-size: 10px!important\r\n}\r\n\r\n.w3-small {\r\n\tfont-size: 12px!important\r\n}\r\n\r\n.w3-medium {\r\n\tfont-size: 15px!important\r\n}\r\n\r\n.w3-large {\r\n\tfont-size: 18px!important\r\n}\r\n\r\n.w3-xlarge {\r\n\tfont-size: 24px!important\r\n}\r\n\r\n.w3-xxlarge {\r\n\tfont-size: 36px!important\r\n}\r\n\r\n.w3-xxxlarge {\r\n\tfont-size: 48px!important\r\n}\r\n\r\n.w3-jumbo {\r\n\tfont-size: 64px!important\r\n}\r\n\r\n.w3-left-align {\r\n\ttext-align: left!important\r\n}\r\n\r\n.w3-right-align {\r\n\ttext-align: right!important\r\n}\r\n\r\n.w3-justify {\r\n\ttext-align: justify!important\r\n}\r\n\r\n.w3-center {\r\n\ttext-align: center!important\r\n}\r\n\r\n.w3-border-0 {\r\n\tborder: 0!important\r\n}\r\n\r\n.w3-border {\r\n\tborder: 1px solid #ccc!important\r\n}\r\n\r\n.w3-border-top {\r\n\tborder-top: 1px solid #ccc!important\r\n}\r\n\r\n.w3-border-bottom {\r\n\tborder-bottom: 1px solid #ccc!important\r\n}\r\n\r\n.w3-border-left {\r\n\tborder-left: 1px solid #ccc!important\r\n}\r\n\r\n.w3-border-right {\r\n\tborder-right: 1px solid #ccc!important\r\n}\r\n\r\n.w3-topbar {\r\n\tborder-top: 6px solid #ccc!important\r\n}\r\n\r\n.w3-bottombar {\r\n\tborder-bottom: 6px solid #ccc!important\r\n}\r\n\r\n.w3-leftbar {\r\n\tborder-left: 6px solid #ccc!important\r\n}\r\n\r\n.w3-rightbar {\r\n\tborder-right: 6px solid #ccc!important\r\n}\r\n\r\n.w3-section,\r\n.w3-code {\r\n\tmargin-top: 16px!important;\r\n\tmargin-bottom: 16px!important\r\n}\r\n\r\n.w3-margin {\r\n\tmargin: 16px!important\r\n}\r\n\r\n.w3-margin-top {\r\n\tmargin-top: 16px!important\r\n}\r\n\r\n.w3-margin-bottom {\r\n\tmargin-bottom: 16px!important\r\n}\r\n\r\n.w3-margin-left {\r\n\tmargin-left: 16px!important\r\n}\r\n\r\n.w3-margin-right {\r\n\tmargin-right: 16px!important\r\n}\r\n\r\n.w3-padding-small {\r\n\tpadding: 4px 8px!important\r\n}\r\n\r\n.w3-padding {\r\n\tpadding: 8px 16px!important\r\n}\r\n\r\n.w3-padding-large {\r\n\tpadding: 12px 24px!important\r\n}\r\n\r\n.w3-padding-16 {\r\n\tpadding-top: 16px!important;\r\n\tpadding-bottom: 16px!important\r\n}\r\n\r\n.w3-padding-24 {\r\n\tpadding-top: 24px!important;\r\n\tpadding-bottom: 24px!important\r\n}\r\n\r\n.w3-padding-32 {\r\n\tpadding-top: 32px!important;\r\n\tpadding-bottom: 32px!important\r\n}\r\n\r\n.w3-padding-48 {\r\n\tpadding-top: 48px!important;\r\n\tpadding-bottom: 48px!important\r\n}\r\n\r\n.w3-padding-64 {\r\n\tpadding-top: 64px!important;\r\n\tpadding-bottom: 64px!important\r\n}\r\n\r\n.w3-left {\r\n\tfloat: left!important\r\n}\r\n\r\n.w3-right {\r\n\tfloat: right!important\r\n}\r\n\r\n.w3-button:hover {\r\n\tcolor: #000!important;\r\n\tbackground-color: #ccc!important\r\n}\r\n\r\n.w3-transparent,\r\n.w3-hover-none:hover {\r\n\tbackground-color: transparent!important\r\n}\r\n\r\n.w3-hover-none:hover {\r\n\tbox-shadow: none!important\r\n}\r\n\r\n/* Colors */\r\n\r\n.w3-amber,\r\n.w3-hover-amber:hover {\r\n\tcolor: #000!important;\r\n\tbackground-color: #ffc107!important\r\n}\r\n\r\n.w3-aqua,\r\n.w3-hover-aqua:hover {\r\n\tcolor: #000!important;\r\n\tbackground-color: #00ffff!important\r\n}\r\n\r\n.w3-blue,\r\n.w3-hover-blue:hover {\r\n\tcolor: #fff!important;\r\n\tbackground-color: #2196F3!important\r\n}\r\n\r\n.w3-light-blue,\r\n.w3-hover-light-blue:hover {\r\n\tcolor: #000!important;\r\n\tbackground-color: #87CEEB!important\r\n}\r\n\r\n.w3-brown,\r\n.w3-hover-brown:hover {\r\n\tcolor: #fff!important;\r\n\tbackground-color: #795548!important\r\n}\r\n\r\n.w3-cyan,\r\n.w3-hover-cyan:hover {\r\n\tcolor: #000!important;\r\n\tbackground-color: #00bcd4!important\r\n}\r\n\r\n.w3-blue-grey,\r\n.w3-hover-blue-grey:hover,\r\n.w3-blue-gray,\r\n.w3-hover-blue-gray:hover {\r\n\tcolor: #fff!important;\r\n\tbackground-color: #607d8b!important\r\n}\r\n\r\n.w3-green,\r\n.w3-hover-green:hover {\r\n\tcolor: #fff!important;\r\n\tbackground-color: #4CAF50!important\r\n}\r\n\r\n.w3-light-green,\r\n.w3-hover-light-green:hover {\r\n\tcolor: #000!important;\r\n\tbackground-color: #8bc34a!important\r\n}\r\n\r\n.w3-indigo,\r\n.w3-hover-indigo:hover {\r\n\tcolor: #fff!important;\r\n\tbackground-color: #3f51b5!important\r\n}\r\n\r\n.w3-khaki,\r\n.w3-hover-khaki:hover {\r\n\tcolor: #000!important;\r\n\tbackground-color: #f0e68c!important\r\n}\r\n\r\n.w3-lime,\r\n.w3-hover-lime:hover {\r\n\tcolor: #000!important;\r\n\tbackground-color: #cddc39!important\r\n}\r\n\r\n.w3-orange,\r\n.w3-hover-orange:hover {\r\n\tcolor: #000!important;\r\n\tbackground-color: #ff9800!important\r\n}\r\n\r\n.w3-deep-orange,\r\n.w3-hover-deep-orange:hover {\r\n\tcolor: #fff!important;\r\n\tbackground-color: #ff5722!important\r\n}\r\n\r\n.w3-pink,\r\n.w3-hover-pink:hover {\r\n\tcolor: #fff!important;\r\n\tbackground-color: #e91e63!important\r\n}\r\n\r\n.w3-purple,\r\n.w3-hover-purple:hover {\r\n\tcolor: #fff!important;\r\n\tbackground-color: #9c27b0!important\r\n}\r\n\r\n.w3-deep-purple,\r\n.w3-hover-deep-purple:hover {\r\n\tcolor: #fff!important;\r\n\tbackground-color: #673ab7!important\r\n}\r\n\r\n.w3-red,\r\n.w3-hover-red:hover {\r\n\tcolor: #fff!important;\r\n\tbackground-color: #f44336!important\r\n}\r\n\r\n.w3-sand,\r\n.w3-hover-sand:hover {\r\n\tcolor: #000!important;\r\n\tbackground-color: #fdf5e6!important\r\n}\r\n\r\n.w3-teal,\r\n.w3-hover-teal:hover {\r\n\tcolor: #fff!important;\r\n\tbackground-color: #009688!important\r\n}\r\n\r\n.w3-yellow,\r\n.w3-hover-yellow:hover {\r\n\tcolor: #000!important;\r\n\tbackground-color: #ffeb3b!important\r\n}\r\n\r\n.w3-white,\r\n.w3-hover-white:hover {\r\n\tcolor: #000!important;\r\n\tbackground-color: #fff!important\r\n}\r\n\r\n.w3-black,\r\n.w3-hover-black:hover {\r\n\tcolor: #fff!important;\r\n\tbackground-color: #000!important\r\n}\r\n\r\n.w3-grey,\r\n.w3-hover-grey:hover,\r\n.w3-gray,\r\n.w3-hover-gray:hover {\r\n\tcolor: #000!important;\r\n\tbackground-color: #9e9e9e!important\r\n}\r\n\r\n.w3-light-grey,\r\n.w3-hover-light-grey:hover,\r\n.w3-light-gray,\r\n.w3-hover-light-gray:hover {\r\n\tcolor: #000!important;\r\n\tbackground-color: #f1f1f1!important\r\n}\r\n\r\n.w3-dark-grey,\r\n.w3-hover-dark-grey:hover,\r\n.w3-dark-gray,\r\n.w3-hover-dark-gray:hover {\r\n\tcolor: #fff!important;\r\n\tbackground-color: #616161!important\r\n}\r\n\r\n.w3-pale-red,\r\n.w3-hover-pale-red:hover {\r\n\tcolor: #000!important;\r\n\tbackground-color: #ffdddd!important\r\n}\r\n\r\n.w3-pale-green,\r\n.w3-hover-pale-green:hover {\r\n\tcolor: #000!important;\r\n\tbackground-color: #ddffdd!important\r\n}\r\n\r\n.w3-pale-yellow,\r\n.w3-hover-pale-yellow:hover {\r\n\tcolor: #000!important;\r\n\tbackground-color: #ffffcc!important\r\n}\r\n\r\n.w3-pale-blue,\r\n.w3-hover-pale-blue:hover {\r\n\tcolor: #000!important;\r\n\tbackground-color: #ddffff!important\r\n}\r\n\r\n.w3-text-amber,\r\n.w3-hover-text-amber:hover {\r\n\tcolor: #ffc107!important\r\n}\r\n\r\n.w3-text-aqua,\r\n.w3-hover-text-aqua:hover {\r\n\tcolor: #00ffff!important\r\n}\r\n\r\n.w3-text-blue,\r\n.w3-hover-text-blue:hover {\r\n\tcolor: #2196F3!important\r\n}\r\n\r\n.w3-text-light-blue,\r\n.w3-hover-text-light-blue:hover {\r\n\tcolor: #87CEEB!important\r\n}\r\n\r\n.w3-text-brown,\r\n.w3-hover-text-brown:hover {\r\n\tcolor: #795548!important\r\n}\r\n\r\n.w3-text-cyan,\r\n.w3-hover-text-cyan:hover {\r\n\tcolor: #00bcd4!important\r\n}\r\n\r\n.w3-text-blue-grey,\r\n.w3-hover-text-blue-grey:hover,\r\n.w3-text-blue-gray,\r\n.w3-hover-text-blue-gray:hover {\r\n\tcolor: #607d8b!important\r\n}\r\n\r\n.w3-text-green,\r\n.w3-hover-text-green:hover {\r\n\tcolor: #4CAF50!important\r\n}\r\n\r\n.w3-text-light-green,\r\n.w3-hover-text-light-green:hover {\r\n\tcolor: #8bc34a!important\r\n}\r\n\r\n.w3-text-indigo,\r\n.w3-hover-text-indigo:hover {\r\n\tcolor: #3f51b5!important\r\n}\r\n\r\n.w3-text-khaki,\r\n.w3-hover-text-khaki:hover {\r\n\tcolor: #b4aa50!important\r\n}\r\n\r\n.w3-text-lime,\r\n.w3-hover-text-lime:hover {\r\n\tcolor: #cddc39!important\r\n}\r\n\r\n.w3-text-orange,\r\n.w3-hover-text-orange:hover {\r\n\tcolor: #ff9800!important\r\n}\r\n\r\n.w3-text-deep-orange,\r\n.w3-hover-text-deep-orange:hover {\r\n\tcolor: #ff5722!important\r\n}\r\n\r\n.w3-text-pink,\r\n.w3-hover-text-pink:hover {\r\n\tcolor: #e91e63!important\r\n}\r\n\r\n.w3-text-purple,\r\n.w3-hover-text-purple:hover {\r\n\tcolor: #9c27b0!important\r\n}\r\n\r\n.w3-text-deep-purple,\r\n.w3-hover-text-deep-purple:hover {\r\n\tcolor: #673ab7!important\r\n}\r\n\r\n.w3-text-red,\r\n.w3-hover-text-red:hover {\r\n\tcolor: #f44336!important\r\n}\r\n\r\n.w3-text-sand,\r\n.w3-hover-text-sand:hover {\r\n\tcolor: #fdf5e6!important\r\n}\r\n\r\n.w3-text-teal,\r\n.w3-hover-text-teal:hover {\r\n\tcolor: #009688!important\r\n}\r\n\r\n.w3-text-yellow,\r\n.w3-hover-text-yellow:hover {\r\n\tcolor: #d2be0e!important\r\n}\r\n\r\n.w3-text-white,\r\n.w3-hover-text-white:hover {\r\n\tcolor: #fff!important\r\n}\r\n\r\n.w3-text-black,\r\n.w3-hover-text-black:hover {\r\n\tcolor: #000!important\r\n}\r\n\r\n.w3-text-grey,\r\n.w3-hover-text-grey:hover,\r\n.w3-text-gray,\r\n.w3-hover-text-gray:hover {\r\n\tcolor: #757575!important\r\n}\r\n\r\n.w3-text-light-grey,\r\n.w3-hover-text-light-grey:hover,\r\n.w3-text-light-gray,\r\n.w3-hover-text-light-gray:hover {\r\n\tcolor: #f1f1f1!important\r\n}\r\n\r\n.w3-text-dark-grey,\r\n.w3-hover-text-dark-grey:hover,\r\n.w3-text-dark-gray,\r\n.w3-hover-text-dark-gray:hover {\r\n\tcolor: #3a3a3a!important\r\n}\r\n\r\n.w3-border-amber,\r\n.w3-hover-border-amber:hover {\r\n\tborder-color: #ffc107!important\r\n}\r\n\r\n.w3-border-aqua,\r\n.w3-hover-border-aqua:hover {\r\n\tborder-color: #00ffff!important\r\n}\r\n\r\n.w3-border-blue,\r\n.w3-hover-border-blue:hover {\r\n\tborder-color: #2196F3!important\r\n}\r\n\r\n.w3-border-light-blue,\r\n.w3-hover-border-light-blue:hover {\r\n\tborder-color: #87CEEB!important\r\n}\r\n\r\n.w3-border-brown,\r\n.w3-hover-border-brown:hover {\r\n\tborder-color: #795548!important\r\n}\r\n\r\n.w3-border-cyan,\r\n.w3-hover-border-cyan:hover {\r\n\tborder-color: #00bcd4!important\r\n}\r\n\r\n.w3-border-blue-grey,\r\n.w3-hover-border-blue-grey:hover,\r\n.w3-border-blue-gray,\r\n.w3-hover-border-blue-gray:hover {\r\n\tborder-color: #607d8b!important\r\n}\r\n\r\n.w3-border-green,\r\n.w3-hover-border-green:hover {\r\n\tborder-color: #4CAF50!important\r\n}\r\n\r\n.w3-border-light-green,\r\n.w3-hover-border-light-green:hover {\r\n\tborder-color: #8bc34a!important\r\n}\r\n\r\n.w3-border-indigo,\r\n.w3-hover-border-indigo:hover {\r\n\tborder-color: #3f51b5!important\r\n}\r\n\r\n.w3-border-khaki,\r\n.w3-hover-border-khaki:hover {\r\n\tborder-color: #f0e68c!important\r\n}\r\n\r\n.w3-border-lime,\r\n.w3-hover-border-lime:hover {\r\n\tborder-color: #cddc39!important\r\n}\r\n\r\n.w3-border-orange,\r\n.w3-hover-border-orange:hover {\r\n\tborder-color: #ff9800!important\r\n}\r\n\r\n.w3-border-deep-orange,\r\n.w3-hover-border-deep-orange:hover {\r\n\tborder-color: #ff5722!important\r\n}\r\n\r\n.w3-border-pink,\r\n.w3-hover-border-pink:hover {\r\n\tborder-color: #e91e63!important\r\n}\r\n\r\n.w3-border-purple,\r\n.w3-hover-border-purple:hover {\r\n\tborder-color: #9c27b0!important\r\n}\r\n\r\n.w3-border-deep-purple,\r\n.w3-hover-border-deep-purple:hover {\r\n\tborder-color: #673ab7!important\r\n}\r\n\r\n.w3-border-red,\r\n.w3-hover-border-red:hover {\r\n\tborder-color: #f44336!important\r\n}\r\n\r\n.w3-border-sand,\r\n.w3-hover-border-sand:hover {\r\n\tborder-color: #fdf5e6!important\r\n}\r\n\r\n.w3-border-teal,\r\n.w3-hover-border-teal:hover {\r\n\tborder-color: #009688!important\r\n}\r\n\r\n.w3-border-yellow,\r\n.w3-hover-border-yellow:hover {\r\n\tborder-color: #ffeb3b!important\r\n}\r\n\r\n.w3-border-white,\r\n.w3-hover-border-white:hover {\r\n\tborder-color: #fff!important\r\n}\r\n\r\n.w3-border-black,\r\n.w3-hover-border-black:hover {\r\n\tborder-color: #000!important\r\n}\r\n\r\n.w3-border-grey,\r\n.w3-hover-border-grey:hover,\r\n.w3-border-gray,\r\n.w3-hover-border-gray:hover {\r\n\tborder-color: #9e9e9e!important\r\n}\r\n\r\n.w3-border-light-grey,\r\n.w3-hover-border-light-grey:hover,\r\n.w3-border-light-gray,\r\n.w3-hover-border-light-gray:hover {\r\n\tborder-color: #f1f1f1!important\r\n}\r\n\r\n.w3-border-dark-grey,\r\n.w3-hover-border-dark-grey:hover,\r\n.w3-border-dark-gray,\r\n.w3-hover-border-dark-gray:hover {\r\n\tborder-color: #616161!important\r\n}\r\n\r\n.w3-border-pale-red,\r\n.w3-hover-border-pale-red:hover {\r\n\tborder-color: #ffe7e7!important\r\n}\r\n\r\n.w3-border-pale-green,\r\n.w3-hover-border-pale-green:hover {\r\n\tborder-color: #e7ffe7!important\r\n}\r\n\r\n.w3-border-pale-yellow,\r\n.w3-hover-border-pale-yellow:hover {\r\n\tborder-color: #ffffcc!important\r\n}\r\n\r\n.w3-border-pale-blue,\r\n.w3-hover-border-pale-blue:hover {\r\n\tborder-color: #e7ffff!important\r\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='onlineShop-logo'>\n   <a>&nbsp;&nbsp;&nbsp;Welcome To OnlineShop.com</a>\n </div>\n <br>\n <div class='w3-card-2 topnav' id='topnav'>\n\n    <div style=\"overflow:auto;\">\n\n     <div class=\"w3-bar w3-left\" style=\"width:100%;overflow:hidden;height:44px\">\n          <a class=\"w3-bar-item w3-button\" href='/html/default.asp' title='User Login'>User Login</a>\n           <a class=\"w3-bar-item w3-button\" href='/css/default.asp' title='Product Details'>Product Details</a>\n          <a class=\"w3-bar-item w3-button\" href='/js/default.asp' title='DO Shopping'>DO Shopping</a>\n      </div>\n   </div> \n</div>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.newHeaderComponent = "New Header";
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/main-page/main-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/main-page/main-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-page/main-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/main-page/main-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  main-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/main-page/main-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
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

var MainPageComponent = /** @class */ (function () {
    function MainPageComponent() {
    }
    MainPageComponent.prototype.ngOnInit = function () {
    };
    MainPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-page',
            template: __webpack_require__(/*! ./main-page.component.html */ "./src/app/main-page/main-page.component.html"),
            styles: [__webpack_require__(/*! ./main-page.component.css */ "./src/app/main-page/main-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainPageComponent);
    return MainPageComponent;
}());



/***/ }),

/***/ "./src/app/new-compn/new-compn.component.css":
/*!***************************************************!*\
  !*** ./src/app/new-compn/new-compn.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/new-compn/new-compn.component.html":
/*!****************************************************!*\
  !*** ./src/app/new-compn/new-compn.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  new-compn works Fine!\n</p>\n<p>\n  {{newcomponent}}\n</p>\n"

/***/ }),

/***/ "./src/app/new-compn/new-compn.component.ts":
/*!**************************************************!*\
  !*** ./src/app/new-compn/new-compn.component.ts ***!
  \**************************************************/
/*! exports provided: NewCompnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewCompnComponent", function() { return NewCompnComponent; });
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

var NewCompnComponent = /** @class */ (function () {
    function NewCompnComponent() {
        this.newcomponent = "Entered in new component created";
    }
    NewCompnComponent.prototype.ngOnInit = function () {
    };
    NewCompnComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-compn',
            template: __webpack_require__(/*! ./new-compn.component.html */ "./src/app/new-compn/new-compn.component.html"),
            styles: [__webpack_require__(/*! ./new-compn.component.css */ "./src/app/new-compn/new-compn.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NewCompnComponent);
    return NewCompnComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Yogesh\My_Own\Angular_Js\Sample_Code\SampleProject\firstAngular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map