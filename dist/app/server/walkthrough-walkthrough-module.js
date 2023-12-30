exports.ids = ["walkthrough-walkthrough-module"];
exports.modules = {

/***/ "fE2E":
/*!***************************************************!*\
  !*** ./src/app/walkthrough/walkthrough.module.ts ***!
  \***************************************************/
/*! exports provided: WalkthroughPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkthroughPageModule", function() { return WalkthroughPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/components.module */ "j1ZV");
/* harmony import */ var _walkthrough_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./walkthrough.page */ "kYTQ");









const routes = [
    {
        path: '',
        component: _walkthrough_page__WEBPACK_IMPORTED_MODULE_6__["WalkthroughPage"]
    }
];
class WalkthroughPageModule {
}
WalkthroughPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WalkthroughPageModule });
WalkthroughPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WalkthroughPageModule_Factory(t) { return new (t || WalkthroughPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WalkthroughPageModule, { declarations: [_walkthrough_page__WEBPACK_IMPORTED_MODULE_6__["WalkthroughPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WalkthroughPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                    _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]
                ],
                declarations: [_walkthrough_page__WEBPACK_IMPORTED_MODULE_6__["WalkthroughPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "kYTQ":
/*!*************************************************!*\
  !*** ./src/app/walkthrough/walkthrough.page.ts ***!
  \*************************************************/
/*! exports provided: WalkthroughPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkthroughPage", function() { return WalkthroughPage; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shell/aspect-ratio/aspect-ratio.component */ "B7gC");
/* harmony import */ var _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shell/image-shell/image-shell.component */ "2gss");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");








const _c0 = function () { return { w: 915, h: 849 }; };
const _c1 = function () { return { w: 1096, h: 806 }; };
const _c2 = function () { return { w: 918, h: 703 }; };
const _c3 = function () { return { w: 924, h: 819 }; };
const _c4 = function () { return ["/getting-started"]; };
const _c5 = function () { return ["/auth/login"]; };
class WalkthroughPage {
    constructor(platformId, menu) {
        this.platformId = platformId;
        this.menu = menu;
        this.slidesOptions = {
            zoom: {
                toggle: false // Disable zooming to prevent weird double tap zomming on slide images
            }
        };
        this.isFirstSlide = true;
        this.isLastSlide = false;
    }
    // Disable side menu for this page
    ionViewDidEnter() {
        this.menu.enable(false);
    }
    // Restore to default when leaving this page
    ionViewDidLeave() {
        this.menu.enable(true);
    }
    ngAfterViewInit() {
        // Accessing slides in server platform throw errors
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(this.platformId)) {
            // ViewChild is set
            this.slides.isBeginning().then(isBeginning => {
                this.isFirstSlide = isBeginning;
            });
            this.slides.isEnd().then(isEnd => {
                this.isLastSlide = isEnd;
            });
            // Subscribe to changes
            this.slides.ionSlideWillChange.subscribe(changes => {
                this.slides.isBeginning().then(isBeginning => {
                    this.isFirstSlide = isBeginning;
                });
                this.slides.isEnd().then(isEnd => {
                    this.isLastSlide = isEnd;
                });
            });
        }
    }
    skipWalkthrough() {
        // Skip to the last slide
        this.slides.length().then(length => {
            this.slides.slideTo(length);
        });
    }
}
WalkthroughPage.ɵfac = function WalkthroughPage_Factory(t) { return new (t || WalkthroughPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"])); };
WalkthroughPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WalkthroughPage, selectors: [["app-walkthrough"]], viewQuery: function WalkthroughPage_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.slides = _t.first);
    } }, hostVars: 4, hostBindings: function WalkthroughPage_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("first-slide-active", ctx.isFirstSlide)("last-slide-active", ctx.isLastSlide);
    } }, decls: 96, vars: 21, consts: [[1, "ion-no-border"], ["slot", "end"], ["fill", "clear", 1, "skip-walkthrough-button", 3, "click"], ["pager", "true", 1, "walkthrough-slides", 3, "options"], [1, "first-slide", "illustration-and-decoration-slide"], [1, "slide-inner-row"], [1, "illustration-col"], [3, "ratio"], ["animation", "spinner", 1, "illustration-image", 3, "src", "alt"], [1, "decoration-col"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "height", "100px", "width", "100%", "viewBox", "0 0 90 20", 0, "xml", "space", "preserve", "preserveAspectRatio", "none", 1, "vector-decoration", 2, "enable-background", "new 0 0 90 20"], ["d", "M0 0 V5 H5 C25 5 25 20 45 20 S65 5 85 5 H90 V0 Z"], [1, "info-col"], [1, "info-wrapper"], [1, "info-title"], [1, "info-paragraph"], [1, "second-slide", "illustration-and-decoration-slide"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "height", "100px", "width", "100%", "viewBox", "0 0 64 24", 0, "xml", "space", "preserve", "preserveAspectRatio", "none", 1, "vector-decoration", 2, "enable-background", "new 0 0 64 24"], ["d", "M0 0 L64 0 L64 24 Q56 24 48 16 Q34 0 22 10 Q10 22 0 8 Z"], [1, "third-slide", "illustration-and-decoration-slide"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "height", "100px", "width", "100%", "viewBox", "0 0 64 14", 0, "xml", "space", "preserve", "preserveAspectRatio", "none", 1, "vector-decoration", 2, "enable-background", "new 0 0 64 24"], ["d", "M0 0 V5 H5 C19 5 25 14 32 14 S45 5 59 5 H64 V0 Z"], [1, "last-slide", "illustration-and-decoration-slide"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "height", "100px", "width", "100%", "viewBox", "0 0 64 18", 0, "xml", "space", "preserve", "preserveAspectRatio", "none", 1, "vector-decoration", 2, "enable-background", "new 0 0 64 24"], ["d", "M0 0 L64 0 L64 10 Q56 24 46 12 Q34 0 26 8 Q10 22 0 8 Z"], [1, "info-outer"], [1, "call-to-actions-wrapper"], ["expand", "block", 1, "get-started-button", 3, "routerLink"], [1, "alt-call-to-action-row"], [1, "cta-leading-text"], ["fill", "clear", 1, "login-button", 3, "routerLink"]], template: function WalkthroughPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WalkthroughPage_Template_ion_button_click_3_listener() { return ctx.skipWalkthrough(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "skip");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-slides", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-slide", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-row", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-col", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "app-aspect-ratio", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "app-image-shell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-col", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-col", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "This App is built with Ionic 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " It was created by the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "IonicThemes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " team to help you jump start your Ionic app development. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "You will love Ionic 5, and if you get lost, remember we have lots of tutorials to help you.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ion-slide", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ion-row", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ion-col", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "app-aspect-ratio", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "app-image-shell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "ion-col", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "svg", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "ion-col", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "How to use this template?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " We want to help you build better and faster Ionic apps. We have put a lot of effort building and styling each component of this template. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " You are free to reuse and modify every component of this template. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "ion-slide", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "ion-row", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "ion-col", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "app-aspect-ratio", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "app-image-shell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "ion-col", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "svg", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "ion-col", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Which components are available in this Ionic 5 app?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, " Tabs, Notifications, Profile, SideMenu, Authentication, Getting Started, Walkthrough, Forms and Validations, Categories, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Travel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Fashion");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Food");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Deals");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Real Estate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, " listings and details page and many more! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "ion-slide", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "ion-row", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "ion-col", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "app-aspect-ratio", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "app-image-shell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "ion-col", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "svg", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "ion-col", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "ion-row", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "It's time to start");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, " Hope you like this Ionic 5 template and please let us know your feedback so we can keep improving it! Enjoy ;) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "ion-col", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "ion-button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "ion-row", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "Already have an account?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "ion-button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, " Login here ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.slidesOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](15, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "./assets/sample-images/walkthrough/walkthrough-illustration-1.svg")("alt", "walkthrough");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](16, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "./assets/sample-images/walkthrough/walkthrough-illustration-2.svg")("alt", "walkthrough");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](17, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "./assets/sample-images/walkthrough/walkthrough-illustration-3.svg")("alt", "walkthrough");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](18, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "./assets/sample-images/walkthrough/walkthrough-illustration-4.svg")("alt", "walkthrough");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](19, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](20, _c5));
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlide"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_3__["AspectRatioComponent"], _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_4__["ImageShellComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["RouterLinkDelegate"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]], styles: ["[_nghost-%COMP%] {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background);\n  --page-swiper-pagination-space: 40px;\n  --page-swiper-pagination-height: 18px;\n  --page-pagination-bullet-size: 10px;\n  --page-first-slide-background: #c1ebff;\n  --page-second-slide-background: #a9ebd2;\n  --page-third-slide-background: #f0cbe5;\n  --page-last-slide-background: #eef3ff;\n  --page-vector-decoration-fill: var(--ion-color-light-shade);\n}\n\nion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --ion-toolbar-background: transparent;\n}\n\nion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --color: var(--ion-color-lightest);\n}\n\nion-content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n}\n\n.walkthrough-slides[_ngcontent-%COMP%] {\n  --bullet-background: var(--ion-color-dark);\n  --bullet-background-active: var(--ion-color-dark);\n  height: 100%;\n}\n\n.walkthrough-slides[_ngcontent-%COMP%]   .slide-inner-row[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  padding: 0px;\n  padding-top: calc(var(--app-header-height) + var(--ion-safe-area-top));\n  border-bottom: var(--page-swiper-pagination-space) solid transparent;\n  background-clip: padding-box;\n  background-color: var(--page-vector-decoration-fill);\n}\n\n.illustration-and-decoration-slide[_ngcontent-%COMP%]   .slide-inner-row[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n  flex-flow: column;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.illustration-and-decoration-slide[_ngcontent-%COMP%]   .illustration-col[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  min-height: auto;\n  min-height: -webkit-fit-content;\n  min-height: -moz-fit-content;\n  min-height: fit-content;\n  max-width: 30vh;\n  padding: 0px;\n}\n\n.illustration-and-decoration-slide[_ngcontent-%COMP%]   .decoration-col[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 1;\n  min-height: 12vh;\n  transform: translate3d(0px, 0px, 0px);\n}\n\n.illustration-and-decoration-slide[_ngcontent-%COMP%]   .decoration-col[_ngcontent-%COMP%]   .vector-decoration[_ngcontent-%COMP%] {\n  fill: currentColor;\n  color: var(--page-vector-decoration-fill);\n  background-color: var(--page-background);\n  padding-bottom: 4px;\n  transform: translate3d(0px, 0px, 0px);\n  shape-rendering: geometricprecision;\n  height: calc(100% + 1px);\n}\n\n.illustration-and-decoration-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  flex-shrink: 0;\n  min-height: auto;\n  background-color: var(--page-background);\n  margin-bottom: -1px;\n  transform: translate3d(0px, 0px, 0px);\n}\n\n.illustration-and-decoration-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%] {\n  margin: calc(var(--page-margin) * -1) var(--page-margin) 0px;\n  text-align: left;\n}\n\n.illustration-and-decoration-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .info-title[_ngcontent-%COMP%] {\n  margin: 0px;\n  margin-bottom: var(--page-margin);\n  color: var(--ion-color-dark);\n}\n\n.illustration-and-decoration-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .info-paragraph[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium-shade);\n  font-size: 14px;\n  margin: 0px 0px calc(var(--page-margin) / 2);\n}\n\n.illustration-and-decoration-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .info-paragraph[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0px;\n}\n\n.first-slide[_ngcontent-%COMP%] {\n  --page-vector-decoration-fill: var(--page-first-slide-background);\n}\n\n.second-slide[_ngcontent-%COMP%] {\n  --page-vector-decoration-fill: var(--page-second-slide-background);\n}\n\n.third-slide[_ngcontent-%COMP%] {\n  --page-vector-decoration-fill: var(--page-third-slide-background);\n}\n\n.last-slide[_ngcontent-%COMP%] {\n  --page-vector-decoration-fill: var(--page-last-slide-background);\n}\n\n.last-slide[_ngcontent-%COMP%]   .slide-inner-row[_ngcontent-%COMP%] {\n  border-width: 0px;\n}\n\n.last-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%] {\n  padding: var(--page-margin);\n}\n\n.last-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-outer[_ngcontent-%COMP%] {\n  height: 100%;\n  align-items: flex-end;\n  flex-direction: column;\n}\n\n.last-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-outer[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%] {\n  margin: calc(var(--page-margin) * -1) 0px 0px;\n}\n\n.last-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-outer[_ngcontent-%COMP%]   .call-to-actions-wrapper[_ngcontent-%COMP%] {\n  max-height: -webkit-fit-content;\n  max-height: -moz-fit-content;\n  max-height: fit-content;\n}\n\n.last-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .get-started-button[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n\n.last-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .alt-call-to-action-row[_ngcontent-%COMP%] {\n  padding-top: 5px;\n  align-items: center;\n  justify-content: space-evenly;\n}\n\n.last-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .alt-call-to-action-row[_ngcontent-%COMP%]   .cta-leading-text[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium);\n  font-size: 16px;\n}\n\n.last-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .alt-call-to-action-row[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%] {\n  --color: var(--ion-color-secondary);\n  margin: 0px;\n}\n\n.last-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .alt-call-to-action-row[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.first-slide-active[_nghost-%COMP%]   .skip-walkthrough-button[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n\n.last-slide-active[_nghost-%COMP%]     .walkthrough-slides .swiper-pagination {\n  display: none;\n}\n\n.last-slide-active[_nghost-%COMP%]   .skip-walkthrough-button[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n\n[_nghost-%COMP%]     .walkthrough-slides .swiper-pagination {\n  height: var(--page-swiper-pagination-height);\n  line-height: 1;\n  bottom: calc((var(--page-swiper-pagination-space) - var(--page-swiper-pagination-height) ) / 2);\n}\n\n[_nghost-%COMP%]     .walkthrough-slides .swiper-pagination .swiper-pagination-bullet {\n  width: var(--page-pagination-bullet-size);\n  height: var(--page-pagination-bullet-size);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2Fsa3Rocm91Z2gvc3R5bGVzL3dhbGt0aHJvdWdoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHNDQUFBO0VBQ0Esd0NBQUE7RUFFQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsbUNBQUE7RUFFQSxzQ0FBQTtFQUNBLHVDQUFBO0VBQ0Esc0NBQUE7RUFDQSxxQ0FBQTtFQUVBLDJEQUFBO0FBSkY7O0FBU0U7RUFDRSxxQ0FBQTtBQU5KOztBQVNJO0VBQ0Usa0NBQUE7QUFQTjs7QUFZQTtFQUVFLGtCQUFBO0VBQ0EsTUFBQTtBQVZGOztBQWFBO0VBQ0UsMENBQUE7RUFDQSxpREFBQTtFQUVBLFlBQUE7QUFYRjs7QUFhRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLHNFQUFBO0VBRUEsb0VBQUE7RUFDQSw0QkFBQTtFQUNBLG9EQUFBO0FBYko7O0FBa0JFO0VBQ0UsOEJBQUE7RUFFQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUFoQko7O0FBbUJFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0VBQUEsNEJBQUE7RUFBQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBakJKOztBQW9CRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBR0EsZ0JBQUE7RUFDQSxxQ0FBQTtBQXBCSjs7QUFzQkk7RUFDRSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0Esd0NBQUE7RUFDQSxtQkFBQTtFQUdBLHFDQUFBO0VBQ0EsbUNBQUE7RUFDQSx3QkFBQTtBQXRCTjs7QUEwQkU7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esd0NBQUE7RUFHQSxtQkFBQTtFQUVBLHFDQUFBO0FBM0JKOztBQTZCSTtFQUNFLDREQUFBO0VBQ0EsZ0JBQUE7QUEzQk47O0FBNkJNO0VBQ0UsV0FBQTtFQUNBLGlDQUFBO0VBQ0EsNEJBQUE7QUEzQlI7O0FBOEJNO0VBQ0Usb0NBQUE7RUFDQSxlQUFBO0VBQ0EsNENBQUE7QUE1QlI7O0FBOEJRO0VBQ0Usa0JBQUE7QUE1QlY7O0FBbUNBO0VBQ0UsaUVBQUE7QUFoQ0Y7O0FBbUNBO0VBQ0Usa0VBQUE7QUFoQ0Y7O0FBbUNBO0VBQ0UsaUVBQUE7QUFoQ0Y7O0FBbUNBO0VBQ0UsZ0VBQUE7QUFoQ0Y7O0FBa0NFO0VBRUUsaUJBQUE7QUFqQ0o7O0FBb0NFO0VBQ0UsMkJBQUE7QUFsQ0o7O0FBb0NJO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUFsQ047O0FBb0NNO0VBQ0UsNkNBQUE7QUFsQ1I7O0FBcUNNO0VBQ0UsK0JBQUE7RUFBQSw0QkFBQTtFQUFBLHVCQUFBO0FBbkNSOztBQXVDSTtFQUNFLFdBQUE7QUFyQ047O0FBd0NJO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBdENOOztBQXdDTTtFQUNFLDhCQUFBO0VBQ0EsZUFBQTtBQXRDUjs7QUF5Q007RUFDRSxtQ0FBQTtFQUNBLFdBQUE7QUF2Q1I7O0FBeUNRO0VBQ0UsYUFBQTtBQXZDVjs7QUErQ0U7RUFDRSxrQkFBQTtBQTVDSjs7QUFrREk7RUFDRSxhQUFBO0FBL0NOOztBQW1ERTtFQUNFLGtCQUFBO0FBakRKOztBQXlERTtFQUNFLDRDQUFBO0VBQ0EsY0FBQTtFQUVBLCtGQUFBO0FBdkRKOztBQXlESTtFQUNFLHlDQUFBO0VBQ0EsMENBQUE7QUF2RE4iLCJmaWxlIjoic3JjL2FwcC93YWxrdGhyb3VnaC9zdHlsZXMvd2Fsa3Rocm91Z2gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3VzdG9tIHZhcmlhYmxlc1xuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG46aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1icm9hZC1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuXG4gIC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1zcGFjZTogNDBweDtcbiAgLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLWhlaWdodDogMThweDtcbiAgLS1wYWdlLXBhZ2luYXRpb24tYnVsbGV0LXNpemU6IDEwcHg7XG5cbiAgLS1wYWdlLWZpcnN0LXNsaWRlLWJhY2tncm91bmQ6ICNjMWViZmY7XG4gIC0tcGFnZS1zZWNvbmQtc2xpZGUtYmFja2dyb3VuZDogI2E5ZWJkMjtcbiAgLS1wYWdlLXRoaXJkLXNsaWRlLWJhY2tncm91bmQ6ICNmMGNiZTU7XG4gIC0tcGFnZS1sYXN0LXNsaWRlLWJhY2tncm91bmQ6ICNlZWYzZmY7XG5cbiAgLS1wYWdlLXZlY3Rvci1kZWNvcmF0aW9uLWZpbGw6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG59XG5cbi8vIE5vdGU6ICBBbGwgdGhlIENTUyB2YXJpYWJsZXMgZGVmaW5lZCBiZWxvdyBhcmUgb3ZlcnJpZGVzIG9mIElvbmljIGVsZW1lbnRzIENTUyBDdXN0b20gUHJvcGVydGllc1xuaW9uLWhlYWRlciB7XG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWlvbi10b29sYmFyLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gICAgLy8gRm9yIHRoZSBza2lwIGJ1dHRvblxuICAgIGlvbi1idXR0b24ge1xuICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICB9XG4gIH1cbn1cblxuaW9uLWNvbnRlbnQge1xuICAvLyBUbyBnZXQgdGhlIGlvbi1jb250ZW50IGJlaGluZCB0aGUgaW9uLWhlYWRlclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbn1cblxuLndhbGt0aHJvdWdoLXNsaWRlcyB7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcblxuICBoZWlnaHQ6IDEwMCU7XG5cbiAgLnNsaWRlLWlubmVyLXJvdyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICAvLyBIZWFkZXIgc3BhY2VcbiAgICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1hcHAtaGVhZGVyLWhlaWdodCkgKyB2YXIoLS1pb24tc2FmZS1hcmVhLXRvcCkpO1xuICAgIC8vIC5zd2lwZXItcGFnaW5hdGlvbiBzcGFjZVxuICAgIGJvcmRlci1ib3R0b206IHZhcigtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24tc3BhY2UpIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS12ZWN0b3ItZGVjb3JhdGlvbi1maWxsKTtcbiAgfVxufVxuXG4uaWxsdXN0cmF0aW9uLWFuZC1kZWNvcmF0aW9uLXNsaWRlIHtcbiAgLnNsaWRlLWlubmVyLXJvdyB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAuaWxsdXN0cmF0aW9uLWNvbCB7XG4gICAgZmxleC1ncm93OiAwO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIG1pbi1oZWlnaHQ6IGF1dG87XG4gICAgbWluLWhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgbWF4LXdpZHRoOiAzMHZoO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxuXG4gIC5kZWNvcmF0aW9uLWNvbCB7XG4gICAgZmxleC1ncm93OiAwO1xuICAgIGZsZXgtc2hyaW5rOiAxO1xuXG4gICAgLy8gVG8gcHJldmVudCB0cmFuc3BhcmVudCBsaW5lIGNhdXNlZCBieSBwaXhlbCBmcmFjdGlvbnNcbiAgICBtaW4taGVpZ2h0OiAxMnZoO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XG5cbiAgICAudmVjdG9yLWRlY29yYXRpb24ge1xuICAgICAgZmlsbDogY3VycmVudENvbG9yO1xuICAgICAgY29sb3I6IHZhcigtLXBhZ2UtdmVjdG9yLWRlY29yYXRpb24tZmlsbCk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuICAgICAgcGFkZGluZy1ib3R0b206IDRweDtcblxuICAgICAgLy8gVG8gcHJldmVudCB0cmFuc3BhcmVudCBsaW5lIGNhdXNlZCBieSBwaXhlbCBmcmFjdGlvbnNcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XG4gICAgICBzaGFwZS1yZW5kZXJpbmc6IGdlb21ldHJpY3ByZWNpc2lvbjtcbiAgICAgIGhlaWdodDogY2FsYygxMDAlICsgMXB4KTtcbiAgICB9XG4gIH1cblxuICAuaW5mby1jb2wge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBtaW4taGVpZ2h0OiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG5cbiAgICAvLyBUbyBwcmV2ZW50IHRyYW5zcGFyZW50IGxpbmUgY2F1c2VkIGJ5IHBpeGVsIGZyYWN0aW9uc1xuICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XG4gICAgLy8gUHJldmVudCAuaW5mby13cmFwcGVyIHRleHQgdG8gYmxpbmsgYXMgaXQncyBvdmVyIHRoZSBwcmV2aW91cyBlbGVtZW50IChTYWZhcmkgaXNzdWUpXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcblxuICAgIC5pbmZvLXdyYXBwZXIge1xuICAgICAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIC0xKSB2YXIoLS1wYWdlLW1hcmdpbikgMHB4O1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcblxuICAgICAgLmluZm8tdGl0bGUge1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgfVxuXG4gICAgICAuaW5mby1wYXJhZ3JhcGgge1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbWFyZ2luOiAwcHggMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG5cbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmZpcnN0LXNsaWRlIHtcbiAgLS1wYWdlLXZlY3Rvci1kZWNvcmF0aW9uLWZpbGw6IHZhcigtLXBhZ2UtZmlyc3Qtc2xpZGUtYmFja2dyb3VuZCk7XG59XG5cbi5zZWNvbmQtc2xpZGUge1xuICAtLXBhZ2UtdmVjdG9yLWRlY29yYXRpb24tZmlsbDogdmFyKC0tcGFnZS1zZWNvbmQtc2xpZGUtYmFja2dyb3VuZCk7XG59XG5cbi50aGlyZC1zbGlkZSB7XG4gIC0tcGFnZS12ZWN0b3ItZGVjb3JhdGlvbi1maWxsOiB2YXIoLS1wYWdlLXRoaXJkLXNsaWRlLWJhY2tncm91bmQpO1xufVxuXG4ubGFzdC1zbGlkZSB7XG4gIC0tcGFnZS12ZWN0b3ItZGVjb3JhdGlvbi1maWxsOiB2YXIoLS1wYWdlLWxhc3Qtc2xpZGUtYmFja2dyb3VuZCk7XG5cbiAgLnNsaWRlLWlubmVyLXJvdyB7XG4gICAgLy8gSW4gdGhlIGxhc3Qgc2xpZGUgLnN3aXBlci1wYWdpbmF0aW9uIGlzIGhpZGRlblxuICAgIGJvcmRlci13aWR0aDogMHB4O1xuICB9XG5cbiAgLmluZm8tY29sIHtcbiAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XG5cbiAgICAuaW5mby1vdXRlciB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAuaW5mby13cmFwcGVyIHtcbiAgICAgICAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIC0xKSAwcHggMHB4O1xuICAgICAgfVxuXG4gICAgICAuY2FsbC10by1hY3Rpb25zLXdyYXBwZXIge1xuICAgICAgICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZ2V0LXN0YXJ0ZWQtYnV0dG9uIHtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgIH1cblxuICAgIC5hbHQtY2FsbC10by1hY3Rpb24tcm93IHtcbiAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG5cbiAgICAgIC5jdGEtbGVhZGluZy10ZXh0IHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIC5sb2dpbi1idXR0b24ge1xuICAgICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG5cbiAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG46aG9zdCguZmlyc3Qtc2xpZGUtYWN0aXZlKSB7XG4gIC5za2lwLXdhbGt0aHJvdWdoLWJ1dHRvbiB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG59XG5cbjpob3N0KC5sYXN0LXNsaWRlLWFjdGl2ZSkge1xuICA6Om5nLWRlZXAgLndhbGt0aHJvdWdoLXNsaWRlcyB7XG4gICAgLnN3aXBlci1wYWdpbmF0aW9uIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLnNraXAtd2Fsa3Rocm91Z2gtYnV0dG9uIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cbn1cblxuLy8gSVNTVUU6IC5zd2lwZXItcGFnZ2luYXRpb24gZ2V0cyByZW5kZXJlZCBkeW5hbWljYWxseS4gVGhhdCBwcmV2ZW50cyBzdHlsaW5nIHRoZSBlbGVtZW50cyB3aGVuIHVzaW5nIHRoZSBkZWZhdWx0IEFuZ3VsYXIgVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxuLy8gICAgICAgIChBbmd1bGFyIGRvZXNuJ3QgYWRkIGFuICdfbmdjb250ZW50JyBhdHRyaWJ1dGUgdG8gdGhlIC5zd2lwZXItcGFnZ2luYXRpb24gYmVjYXVzZSBpdCdzIGR5bmFtaWNhbGx5IHJlbmRlcmVkKVxuLy8gRklYOiAgIFNlZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM2MjY1MDcyLzExMTY5NTlcbjpob3N0IDo6bmctZGVlcCAud2Fsa3Rocm91Z2gtc2xpZGVzIHtcbiAgLnN3aXBlci1wYWdpbmF0aW9uIHtcbiAgICBoZWlnaHQ6IHZhcigtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24taGVpZ2h0KTtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICAvLyAuc3dpcGVyLXBhZ2luYXRpb24gaXMgMThweCBoZWlnaHQsIC5zbGlkZS1pbm5lci1yb3cgaGFzIDQwcHggb2YgcGFkZGluZy1ib3R0b20gPT4gYm90dG9tID0gKDQwcHggLSAxOHB4KS8yID0gMTFweFxuICAgIGJvdHRvbTogY2FsYygodmFyKC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1zcGFjZSkgLSB2YXIoLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLWhlaWdodCkgKSAvIDIpO1xuXG4gICAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gICAgICB3aWR0aDogdmFyKC0tcGFnZS1wYWdpbmF0aW9uLWJ1bGxldC1zaXplKTtcbiAgICAgIGhlaWdodDogdmFyKC0tcGFnZS1wYWdpbmF0aW9uLWJ1bGxldC1zaXplKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */", "app-image-shell.illustration-image[_ngcontent-%COMP%] {\n  --image-shell-loading-background: transparent;\n  --image-shell-spinner-color: var(--ion-color-lightest);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2Fsa3Rocm91Z2gvc3R5bGVzL3dhbGt0aHJvdWdoLnNoZWxsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2Q0FBQTtFQUNBLHNEQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC93YWxrdGhyb3VnaC9zdHlsZXMvd2Fsa3Rocm91Z2guc2hlbGwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1pbWFnZS1zaGVsbC5pbGx1c3RyYXRpb24taW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbn1cbiJdfQ== */", "@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) and (device-aspect-ratio: 2/3) {\n  .illustration-and-decoration-slide[_ngcontent-%COMP%]   .illustration-col[_ngcontent-%COMP%] {\n    max-width: 30vh;\n    padding: 0px;\n  }\n  .illustration-and-decoration-slide[_ngcontent-%COMP%]   .decoration-col[_ngcontent-%COMP%] {\n    min-height: 12vh;\n  }\n  .illustration-and-decoration-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .info-title[_ngcontent-%COMP%] {\n    margin-bottom: calc(var(--page-margin) / 2);\n    font-size: 20px;\n  }\n}\n\n@media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (device-aspect-ratio: 40/71) {\n  .illustration-and-decoration-slide[_ngcontent-%COMP%]   .illustration-col[_ngcontent-%COMP%] {\n    max-width: 32vh;\n    padding: 0px;\n  }\n  .illustration-and-decoration-slide[_ngcontent-%COMP%]   .decoration-col[_ngcontent-%COMP%] {\n    min-height: 12vh;\n  }\n  .illustration-and-decoration-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .info-title[_ngcontent-%COMP%] {\n    margin-bottom: calc(var(--page-margin) / 2);\n    font-size: 20px;\n  }\n}\n\n@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {\n  .illustration-and-decoration-slide[_ngcontent-%COMP%]   .illustration-col[_ngcontent-%COMP%] {\n    max-width: 36vh;\n    padding: 2vh 0px;\n  }\n  .illustration-and-decoration-slide[_ngcontent-%COMP%]   .decoration-col[_ngcontent-%COMP%] {\n    min-height: 14vh;\n  }\n}\n\n@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {\n  .illustration-and-decoration-slide[_ngcontent-%COMP%]   .illustration-col[_ngcontent-%COMP%] {\n    max-width: 34vh;\n    padding: 6vh 0px;\n  }\n  .illustration-and-decoration-slide[_ngcontent-%COMP%]   .decoration-col[_ngcontent-%COMP%] {\n    min-height: 12vh;\n  }\n}\n\n@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) {\n  .illustration-and-decoration-slide[_ngcontent-%COMP%]   .illustration-col[_ngcontent-%COMP%] {\n    max-width: 38vh;\n    padding: 4vh 0px;\n  }\n  .illustration-and-decoration-slide[_ngcontent-%COMP%]   .decoration-col[_ngcontent-%COMP%] {\n    min-height: 14vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2Fsa3Rocm91Z2gvc3R5bGVzL3dhbGt0aHJvdWdoLnJlc3BvbnNpdmUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQSw0Q0FBQTtBQUNBO0VBV0k7SUFDRSxlQUFBO0lBQ0EsWUFBQTtFQWRKO0VBaUJFO0lBQ0UsZ0JBQUE7RUFmSjtFQW9CTTtJQUNFLDJDQUFBO0lBQ0EsZUFBQTtFQWxCUjtBQUNGO0FBd0JBLHFEQUFBO0FBQ0E7RUFXSTtJQUNFLGVBQUE7SUFDQSxZQUFBO0VBaENKO0VBbUNFO0lBQ0UsZ0JBQUE7RUFqQ0o7RUFzQ007SUFDRSwyQ0FBQTtJQUNBLGVBQUE7RUFwQ1I7QUFDRjtBQTBDQSxrREFBQTtBQUNBO0VBVUk7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7RUFqREo7RUFvREU7SUFDRSxnQkFBQTtFQWxESjtBQUNGO0FBc0RBLHFDQUFBO0FBQ0E7RUFVSTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtFQTdESjtFQWdFRTtJQUNFLGdCQUFBO0VBOURKO0FBQ0Y7QUFrRUEsaURBQUE7QUFDQTtFQVVJO0lBQ0UsZUFBQTtJQUNBLGdCQUFBO0VBekVKO0VBNEVFO0lBQ0UsZ0JBQUE7RUExRUo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3dhbGt0aHJvdWdoL3N0eWxlcy93YWxrdGhyb3VnaC5yZXNwb25zaXZlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAoTm90ZTogRG9uJ3QgY2hhbmdlIHRoZSBvcmRlciBvZiB0aGUgZGV2aWNlcyBhcyBpdCBtYXkgYnJlYWsgdGhlIGNvcnJlY3QgY3NzIHByZWNlZGVuY2UpXG5cbi8vIChzZWU6IGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vc25pcHBldHMvY3NzL21lZGlhLXF1ZXJpZXMtZm9yLXN0YW5kYXJkLWRldmljZXMvI2lwaG9uZS1xdWVyaWVzKVxuLy8gKHNlZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQ3NzUwMjYxLzExMTY5NTkpXG5cbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSA0IGFuZCA0UyAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuXG4gIGFuZCAobWluLWRldmljZS13aWR0aCA6IDMyMHB4KVxuICBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA0ODBweClcbiAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpXG4gIGFuZCAoZGV2aWNlLWFzcGVjdC1yYXRpbzogMi8zKVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgcG9ydHJhaXQ6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgbGFuZHNjYXBlOlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXG57XG4gIC5pbGx1c3RyYXRpb24tYW5kLWRlY29yYXRpb24tc2xpZGUge1xuICAgIC5pbGx1c3RyYXRpb24tY29sIHtcbiAgICAgIG1heC13aWR0aDogMzB2aDtcbiAgICAgIHBhZGRpbmc6IDBweDtcbiAgICB9XG5cbiAgICAuZGVjb3JhdGlvbi1jb2wge1xuICAgICAgbWluLWhlaWdodDogMTJ2aDtcbiAgICB9XG5cbiAgICAuaW5mby1jb2wge1xuICAgICAgLmluZm8td3JhcHBlciB7XG4gICAgICAgIC5pbmZvLXRpdGxlIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgNSwgNVMsIDVDIGFuZCA1U0UgLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlblxuICBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiAzMjBweClcbiAgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNTY4cHgpXG4gIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKVxuICBhbmQgKGRldmljZS1hc3BlY3QtcmF0aW86IDQwIC8gNzEpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBwb3J0cmFpdDpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBsYW5kc2NhcGU6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSlcbntcbiAgLmlsbHVzdHJhdGlvbi1hbmQtZGVjb3JhdGlvbi1zbGlkZSB7XG4gICAgLmlsbHVzdHJhdGlvbi1jb2wge1xuICAgICAgbWF4LXdpZHRoOiAzMnZoO1xuICAgICAgcGFkZGluZzogMHB4O1xuICAgIH1cblxuICAgIC5kZWNvcmF0aW9uLWNvbCB7XG4gICAgICBtaW4taGVpZ2h0OiAxMnZoO1xuICAgIH1cblxuICAgIC5pbmZvLWNvbCB7XG4gICAgICAuaW5mby13cmFwcGVyIHtcbiAgICAgICAgLmluZm8tdGl0bGUge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSA2LCA2UywgNyBhbmQgOCAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuXG4gIGFuZCAobWluLWRldmljZS13aWR0aCA6IDM3NXB4KVxuICBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA2NjdweClcbiAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBwb3J0cmFpdDpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBsYW5kc2NhcGU6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSlcbntcbiAgLmlsbHVzdHJhdGlvbi1hbmQtZGVjb3JhdGlvbi1zbGlkZSB7XG4gICAgLmlsbHVzdHJhdGlvbi1jb2wge1xuICAgICAgbWF4LXdpZHRoOiAzNnZoO1xuICAgICAgcGFkZGluZzogMnZoIDBweDtcbiAgICB9XG5cbiAgICAuZGVjb3JhdGlvbi1jb2wge1xuICAgICAgbWluLWhlaWdodDogMTR2aDtcbiAgICB9XG4gIH1cbn1cblxuLyogLS0tLS0tLS0tLS0gaVBob25lIFggLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlblxuICBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiAzNzVweClcbiAgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogODEycHgpXG4gIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvIDogMylcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IHBvcnRyYWl0OlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IGxhbmRzY2FwZTpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKVxue1xuICAuaWxsdXN0cmF0aW9uLWFuZC1kZWNvcmF0aW9uLXNsaWRlIHtcbiAgICAuaWxsdXN0cmF0aW9uLWNvbCB7XG4gICAgICBtYXgtd2lkdGg6IDM0dmg7XG4gICAgICBwYWRkaW5nOiA2dmggMHB4O1xuICAgIH1cblxuICAgIC5kZWNvcmF0aW9uLWNvbCB7XG4gICAgICBtaW4taGVpZ2h0OiAxMnZoO1xuICAgIH1cbiAgfVxufVxuXG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgNissIDcrIGFuZCA4KyAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuXG4gIGFuZCAobWluLWRldmljZS13aWR0aCA6IDQxNHB4KVxuICBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA3MzZweClcbiAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBwb3J0cmFpdDpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBsYW5kc2NhcGU6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSlcbntcbiAgLmlsbHVzdHJhdGlvbi1hbmQtZGVjb3JhdGlvbi1zbGlkZSB7XG4gICAgLmlsbHVzdHJhdGlvbi1jb2wge1xuICAgICAgbWF4LXdpZHRoOiAzOHZoO1xuICAgICAgcGFkZGluZzogNHZoIDBweDtcbiAgICB9XG5cbiAgICAuZGVjb3JhdGlvbi1jb2wge1xuICAgICAgbWluLWhlaWdodDogMTR2aDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WalkthroughPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-walkthrough',
                templateUrl: './walkthrough.page.html',
                styleUrls: [
                    './styles/walkthrough.page.scss',
                    './styles/walkthrough.shell.scss',
                    './styles/walkthrough.responsive.scss'
                ]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
            }] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }]; }, { slides: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"], { static: true }]
        }], isFirstSlide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.first-slide-active']
        }], isLastSlide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.last-slide-active']
        }] }); })();


/***/ })

};;
//# sourceMappingURL=walkthrough-walkthrough-module.js.map