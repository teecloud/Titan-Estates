exports.ids = ["deals-listing-deals-listing-module"];
exports.modules = {

/***/ "AVcx":
/*!*********************************************************!*\
  !*** ./src/app/deals/listing/deals-listing.resolver.ts ***!
  \*********************************************************/
/*! exports provided: DealsListingResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealsListingResolver", function() { return DealsListingResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _deals_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../deals.service */ "y+sA");




class DealsListingResolver {
    constructor(dealsService) {
        this.dealsService = dealsService;
    }
    resolve() {
        const dataSource = this.dealsService.getListingDataSource();
        const dataStore = this.dealsService.getListingStore(dataSource);
        return dataStore;
    }
}
DealsListingResolver.ɵfac = function DealsListingResolver_Factory(t) { return new (t || DealsListingResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_deals_service__WEBPACK_IMPORTED_MODULE_1__["DealsService"])); };
DealsListingResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DealsListingResolver, factory: DealsListingResolver.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DealsListingResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _deals_service__WEBPACK_IMPORTED_MODULE_1__["DealsService"] }]; }, null); })();


/***/ }),

/***/ "CZtk":
/*!*****************************************************!*\
  !*** ./src/app/deals/listing/deals-listing.page.ts ***!
  \*****************************************************/
/*! exports provided: DealsListingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealsListingPage", function() { return DealsListingPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _utils_resolver_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/resolver-helper */ "evT8");
/* harmony import */ var _deals_listing_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deals-listing.model */ "SQnO");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shell/aspect-ratio/aspect-ratio.component */ "B7gC");
/* harmony import */ var _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shell/image-shell/image-shell.component */ "2gss");
/* harmony import */ var _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shell/text-shell/text-shell.component */ "zK/y");
/* harmony import */ var _components_countdown_timer_countdown_timer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/countdown-timer/countdown-timer.component */ "dAQS");
/* harmony import */ var _pipes_time_difference_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../pipes/time-difference.pipe */ "ykzn");
/* harmony import */ var _pipes_time_ago_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../pipes/time-ago.pipe */ "R4nH");















const _c0 = function (a1) { return ["/app/categories/deals/", a1]; };
function DealsListingPage_ng_container_7_div_1_ion_col_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-col", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "CLAIM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ion-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, item_r2.slug));
} }
function DealsListingPage_ng_container_7_div_1_ion_col_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-col", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "EXPIRED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DealsListingPage_ng_container_7_div_1_ng_container_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-text-shell", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "appTimeAgo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, item_r2.expirationDate));
} }
const _c1 = function () { return { from: "hour", to: "second" }; };
function DealsListingPage_ng_container_7_div_1_ng_container_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-row", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-countdown-timer", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("end", item_r2.expirationDate)("units", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1));
} }
const _c2 = function (a0, a1, a2, a3) { return { "ended": a0, "imminent-end": a1, "ends-soon": a2, "distant-end": a3 }; };
const _c3 = function () { return { w: 128, h: 32 }; };
const _c4 = function (a0) { return { "expired": a0 }; };
const _c5 = function (a0) { return { "countdown-active": a0 }; };
function DealsListingPage_ng_container_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "appTimeDifference");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "appTimeDifference");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "appTimeDifference");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "appTimeDifference");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "appTimeDifference");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "appTimeDifference");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "appTimeDifference");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-row", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-col", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-aspect-ratio", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-image-shell", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DealsListingPage_ng_container_7_div_1_ion_col_12_Template, 5, 3, "ion-col", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "appTimeDifference");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DealsListingPage_ng_container_7_div_1_ion_col_14_Template, 3, 0, "ion-col", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "appTimeDifference");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ion-row", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ion-col", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h4", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-text-shell", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-text-shell", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ion-col", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ion-button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "ion-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ion-row", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ion-col", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Use this code:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "appTimeDifference");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "app-text-shell", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ion-col", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "appTimeDifference");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "appTimeDifference");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "appTimeDifference");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, DealsListingPage_ng_container_7_div_1_ng_container_39_Template, 4, 3, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "appTimeDifference");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "appTimeDifference");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, DealsListingPage_ng_container_7_div_1_ng_container_42_Template, 3, 3, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "appTimeDifference");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "appTimeDifference");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](49, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 15, item_r2.expirationDate) < 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 17, item_r2.expirationDate) > 0 && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 19, item_r2.expirationDate) <= 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 21, item_r2.expirationDate) > 0 && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 23, item_r2.expirationDate) > 2 && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 25, item_r2.expirationDate) < 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 27, item_r2.expirationDate) >= 10));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](54, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r2.logo)("alt", "deals logo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 29, item_r2.expirationDate) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 31, item_r2.expirationDate) < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](55, _c0, item_r2.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", item_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", item_r2.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](57, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 33, item_r2.expirationDate) < 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", item_r2.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](59, _c5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 35, item_r2.expirationDate) > 0 && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 37, item_r2.expirationDate) <= 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("DEAL ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 39, item_r2.expirationDate) < 0 ? "EXPIRED" : "EXPIRES IN", ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](40, 41, item_r2.expirationDate) < 0 || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](41, 43, item_r2.expirationDate) > 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 45, item_r2.expirationDate) > 0 && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](44, 47, item_r2.expirationDate) <= 2);
} }
function DealsListingPage_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DealsListingPage_ng_container_7_div_1_Template, 45, 61, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.listing == null ? null : ctx_r0.listing.items);
} }
class DealsListingPage {
    constructor(route) {
        this.route = route;
    }
    get isShell() {
        return (this.listing && this.listing.isShell) ? true : false;
    }
    ngOnInit() {
        this.subscriptions = this.route.data
            .pipe(
        // Extract data for this page
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((resolvedRouteData) => {
            return _utils_resolver_helper__WEBPACK_IMPORTED_MODULE_2__["ResolverHelper"].extractData(resolvedRouteData.data, _deals_listing_model__WEBPACK_IMPORTED_MODULE_3__["DealsListingModel"]);
        }))
            .subscribe((state) => {
            this.listing = state;
        }, (error) => console.log(error));
    }
    // NOTE: Ionic only calls ngOnDestroy if the page was popped (ex: when navigating back)
    // Since ngOnDestroy might not fire when you navigate from the current page, use ionViewWillLeave to cleanup Subscriptions
    ionViewWillLeave() {
        this.subscriptions.unsubscribe();
    }
}
DealsListingPage.ɵfac = function DealsListingPage_Factory(t) { return new (t || DealsListingPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
DealsListingPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DealsListingPage, selectors: [["app-deals-listing"]], hostVars: 2, hostBindings: function DealsListingPage_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-shell", ctx.isShell);
    } }, decls: 8, vars: 1, consts: [["color", "primary"], ["slot", "start"], ["defaultHref", "app/categories"], [1, "deals-listing-content"], [4, "ngIf"], ["class", "listing-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "listing-item", 3, "ngClass"], [1, "top-row"], ["size", "6", 1, "logo-col"], [3, "ratio"], ["animation", "spinner", 1, "deal-logo", 3, "src", "alt"], ["class", "call-to-action-col", 4, "ngIf"], [1, "middle-row"], [1, "info-col"], [1, "item-name"], [1, "name-anchor", 3, "routerLink"], ["animation", "bouncing", 3, "data"], [1, "item-description"], ["animation", "bouncing", "lines", "3", 3, "data"], ["size", "2"], ["expand", "block", "fill", "clear", "color", "claim", 1, "bookmark-button"], ["slot", "icon-only", "name", "pricetag"], [1, "bottom-row"], [1, "code-wrapper"], [1, "code-cta"], [1, "item-code", 3, "ngClass"], [3, "data"], ["size", "5", 1, "time-left-wrapper", 3, "ngClass"], [1, "expiration-cta"], [1, "call-to-action-col"], ["expand", "block", "color", "claim", 1, "claim-button", 3, "routerLink"], [1, "button-cta"], ["slot", "end", "name", "arrow-forward"], [1, "expired-cta"], [1, "item-time-left"], [1, "countdown-wrapper"], ["fill", "inner-time", 1, "item-countdown", 3, "end", "units"]], template: function DealsListingPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Deals Listing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DealsListingPage_ng_container_7_Template, 2, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.listing == null ? null : ctx.listing.items);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCol"], _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_7__["AspectRatioComponent"], _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_8__["ImageShellComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["RouterLinkDelegate"], _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_9__["TextShellComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _components_countdown_timer_countdown_timer_component__WEBPACK_IMPORTED_MODULE_10__["CountdownTimerComponent"]], pipes: [_pipes_time_difference_pipe__WEBPACK_IMPORTED_MODULE_11__["TimeDifferencePipe"], _pipes_time_ago_pipe__WEBPACK_IMPORTED_MODULE_12__["TimeAgoPipe"]], styles: ["[_nghost-%COMP%] {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background-shade);\n  --page-countdown-fill-shadow-color: rgba(var(--ion-color-darkest-rgb), 0.2);\n  --page-item-shadow-color: rgba(var(--ion-color-dark-rgb), .1);\n  --page-deal-code-height: 30px;\n  --page-countdown-gutter: 3px;\n  --page-expired-color: var(--ion-color-medium-tint);\n  --page-ends-soon-color: #FFAB6B;\n  --page-distant-end-color: #70DF70;\n  --page-deal-color: var(--ion-color-medium);\n  --page-deal-border-color: var(--ion-color-light-shade);\n  --page-color: #70DF70;\n  --ion-color-claim: #70DF70;\n  --ion-color-claim-rgb: 112,223,112;\n  --ion-color-claim-contrast: #FFFFFF;\n  --ion-color-claim-contrast-rgb: 255,255,255;\n  --ion-color-claim-shade: #63C463;\n  --ion-color-claim-tint: #7EE27E;\n}\n[_nghost-%COMP%]   .ion-color-claim[_ngcontent-%COMP%] {\n  --ion-color-base: var(--ion-color-claim) !important;\n  --ion-color-base-rgb: var(--ion-color-claim-rgb) !important;\n  --ion-color-contrast: var(--ion-color-claim-contrast) !important;\n  --ion-color-contrast-rgb: var(--ion-color-claim-contrast-rgb) !important;\n  --ion-color-shade: var(--ion-color-claim-shade) !important;\n  --ion-color-tint: var(--ion-color-claim-tint) !important;\n}\n.deals-listing-content[_ngcontent-%COMP%] {\n  --background: var(--page-background);\n}\n.listing-item[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-lightest);\n  margin: var(--page-margin);\n  border-radius: var(--app-fair-radius);\n  box-shadow: 1px 1px 4px 1px var(--page-item-shadow-color);\n  border-bottom-style: solid;\n  border-bottom-width: calc((var(--page-margin) / 2) * 3);\n  border-bottom-color: var(--page-deal-border-color);\n}\n.listing-item.ended[_ngcontent-%COMP%] {\n  --page-deal-color: var(--page-expired-color);\n  --page-deal-border-color: var(--page-expired-color);\n  border-bottom-style: none;\n}\n.listing-item.imminent-end[_ngcontent-%COMP%] {\n  --page-deal-color: var(--page-ends-soon-color);\n  --page-deal-border-color: var(--page-distant-end-color);\n}\n.listing-item.ends-soon[_ngcontent-%COMP%] {\n  --page-deal-color: var(--page-ends-soon-color);\n  --page-deal-border-color: var(--page-ends-soon-color);\n  border-bottom-style: none;\n}\n.listing-item.distant-end[_ngcontent-%COMP%] {\n  --page-deal-color: var(--page-distant-end-color);\n  --page-deal-border-color: var(--page-distant-end-color);\n  border-bottom-style: none;\n}\n.listing-item[_ngcontent-%COMP%]   .top-row[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n  border-bottom: 2px dashed rgba(var(--ion-color-dark-rgb), 0.1);\n  padding: calc(var(--page-margin) / 2);\n  justify-content: space-between;\n  align-items: center;\n}\n.listing-item[_ngcontent-%COMP%]   .top-row[_ngcontent-%COMP%]   .logo-col[_ngcontent-%COMP%] {\n  align-self: center;\n}\n.listing-item[_ngcontent-%COMP%]   .top-row[_ngcontent-%COMP%]   .call-to-action-col[_ngcontent-%COMP%] {\n  flex-grow: 0;\n}\n.listing-item[_ngcontent-%COMP%]   .top-row[_ngcontent-%COMP%]   .call-to-action-col[_ngcontent-%COMP%]   .expired-cta[_ngcontent-%COMP%] {\n  color: var(--page-expired-color);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0.8px;\n}\n.listing-item[_ngcontent-%COMP%]   .top-row[_ngcontent-%COMP%]   .call-to-action-col[_ngcontent-%COMP%]   .claim-button[_ngcontent-%COMP%] {\n  --box-shadow: none;\n  --border-radius: var(--app-fair-radius);\n  margin: 0px;\n}\n.listing-item[_ngcontent-%COMP%]   .top-row[_ngcontent-%COMP%]   .call-to-action-col[_ngcontent-%COMP%]   .claim-button[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.listing-item[_ngcontent-%COMP%]   .top-row[_ngcontent-%COMP%]   .call-to-action-col[_ngcontent-%COMP%]   .claim-button[_ngcontent-%COMP%]   .button-cta[_ngcontent-%COMP%] {\n  display: block;\n  line-height: 18px;\n  font-size: 16px;\n  font-weight: 600;\n}\n.listing-item[_ngcontent-%COMP%]   .top-row[_ngcontent-%COMP%]   .call-to-action-col[_ngcontent-%COMP%]   .claim-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.listing-item[_ngcontent-%COMP%]   .middle-row[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n  padding: calc(var(--page-margin) / 2);\n  padding-bottom: var(--page-margin);\n}\n.listing-item[_ngcontent-%COMP%]   .middle-row[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%] {\n  padding-right: calc(var(--page-margin) / 2);\n}\n.listing-item[_ngcontent-%COMP%]   .middle-row[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%] {\n  margin: 0px;\n  margin-bottom: calc(var(--page-margin) / 2);\n  color: var(--ion-color-dark-tint);\n  font-size: 16px;\n}\n.listing-item[_ngcontent-%COMP%]   .middle-row[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%]   .name-anchor[_ngcontent-%COMP%] {\n  display: block;\n  text-decoration: none;\n}\n.listing-item[_ngcontent-%COMP%]   .middle-row[_ngcontent-%COMP%]   .item-description[_ngcontent-%COMP%] {\n  margin: 0px;\n  color: var(--ion-color-medium-tint);\n  font-size: 14px;\n}\n.listing-item[_ngcontent-%COMP%]   .middle-row[_ngcontent-%COMP%]   .bookmark-button[_ngcontent-%COMP%] {\n  --padding-start: 5px;\n  --padding-end: 5px;\n  margin: 0px;\n  font-size: 16px;\n}\n.listing-item[_ngcontent-%COMP%]   .bottom-row[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n  padding: 0px calc(var(--page-margin) / 2) calc(var(--page-margin) / 2);\n  justify-content: space-between;\n}\n.listing-item[_ngcontent-%COMP%]   .bottom-row[_ngcontent-%COMP%]   .code-wrapper[_ngcontent-%COMP%] {\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n}\n.listing-item[_ngcontent-%COMP%]   .bottom-row[_ngcontent-%COMP%]   .code-wrapper[_ngcontent-%COMP%]   .code-cta[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  margin-bottom: 5px;\n  display: block;\n}\n.listing-item[_ngcontent-%COMP%]   .bottom-row[_ngcontent-%COMP%]   .code-wrapper[_ngcontent-%COMP%]   .item-code[_ngcontent-%COMP%] {\n  height: var(--page-deal-code-height);\n  text-transform: uppercase;\n  padding: calc(var(--page-margin) / 4) calc(var(--page-margin) / 2);\n  border: 2px solid var(--page-color);\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 1;\n  border-radius: calc(var(--page-deal-code-height) / 2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.listing-item[_ngcontent-%COMP%]   .bottom-row[_ngcontent-%COMP%]   .code-wrapper[_ngcontent-%COMP%]   .item-code.expired[_ngcontent-%COMP%] {\n  border-color: var(--page-expired-color);\n  color: var(--page-expired-color);\n  opacity: 0.6;\n}\n.listing-item[_ngcontent-%COMP%]   .bottom-row[_ngcontent-%COMP%]   .time-left-wrapper[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n.listing-item[_ngcontent-%COMP%]   .bottom-row[_ngcontent-%COMP%]   .time-left-wrapper[_ngcontent-%COMP%]   .expiration-cta[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  margin-bottom: 5px;\n  display: block;\n  text-transform: uppercase;\n  text-align: end;\n}\n.listing-item[_ngcontent-%COMP%]   .bottom-row[_ngcontent-%COMP%]   .time-left-wrapper[_ngcontent-%COMP%]:not(.countdown-active)   .item-time-left[_ngcontent-%COMP%] {\n  color: var(--page-deal-color);\n  font-size: 14px;\n  font-weight: 500;\n  display: block;\n  text-align: end;\n}\n.listing-item[_ngcontent-%COMP%]   .bottom-row[_ngcontent-%COMP%]   .time-left-wrapper.countdown-active[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n}\n.listing-item[_ngcontent-%COMP%]   .bottom-row[_ngcontent-%COMP%]   .time-left-wrapper.countdown-active[_ngcontent-%COMP%]   .countdown-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  position: absolute;\n  right: 0px;\n}\n.listing-item[_ngcontent-%COMP%]   .bottom-row[_ngcontent-%COMP%]   .time-left-wrapper.countdown-active[_ngcontent-%COMP%]   .countdown-wrapper[_ngcontent-%COMP%]   app-countdown-timer.item-countdown[_ngcontent-%COMP%] {\n  --countdown-time-margin: 0px;\n  --countdown-time-padding: 0px;\n  --countdown-inner-time-margin: var(--page-countdown-gutter) var(--page-countdown-gutter) 0px;\n  --countdown-inner-time-padding: calc(var(--page-margin) / 2) calc(var(--page-margin) / 4);\n  --countdown-fill-border: none;\n  --countdown-fill-border-radius: var(--app-narrow-radius);\n  --countdown-fill-background: var(--ion-color-lightest);\n  --countdown-fill-shadow: 0px 0px 5px 0px var(--page-countdown-fill-shadow-color);\n  --countdown-value-color: var(--ion-color-darkest);\n  --countdown-unit-color: var(--ion-color-medium-shade);\n  --countdown-time-flex-direction: column;\n  font-weight: 500;\n  font-size: 14px;\n  margin-right: calc(var(--page-countdown-gutter) * -1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVhbHMvbGlzdGluZy9zdHlsZXMvZGVhbHMtbGlzdGluZy5wYWdlLnNjc3MiLCJzcmMvdGhlbWUvbWl4aW5zL2lvbi1jb2xvci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0Usc0NBQUE7RUFDQSw4Q0FBQTtFQUVBLDJFQUFBO0VBQ0EsNkRBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0VBRUEsa0RBQUE7RUFDQSwrQkFBQTtFQUNBLGlDQUFBO0VBRUEsMENBQUE7RUFDQSxzREFBQTtFQUVBLHFCQUFBO0VBSUUsMEJBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsMkNBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0FBVko7QUNoQkU7RUFDRSxtREFBQTtFQUNBLDJEQUFBO0VBQ0EsZ0VBQUE7RUFDQSx3RUFBQTtFQUNBLDBEQUFBO0VBQ0Esd0RBQUE7QURrQko7QUFPQTtFQUNFLG9DQUFBO0FBSkY7QUFPQTtFQXFCRSwyQ0FBQTtFQUNBLDBCQUFBO0VBQ0EscUNBQUE7RUFDQSx5REFBQTtFQUNBLDBCQUFBO0VBQ0EsdURBQUE7RUFDQSxrREFBQTtBQXhCRjtBQUZFO0VBQ0UsNENBQUE7RUFDQSxtREFBQTtFQUNBLHlCQUFBO0FBSUo7QUFGRTtFQUNFLDhDQUFBO0VBQ0EsdURBQUE7QUFJSjtBQUZFO0VBQ0UsOENBQUE7RUFDQSxxREFBQTtFQUNBLHlCQUFBO0FBSUo7QUFGRTtFQUNFLGdEQUFBO0VBQ0EsdURBQUE7RUFDQSx5QkFBQTtBQUlKO0FBT0U7RUFDRSw4QkFBQTtFQUVBLDhEQUFBO0VBQ0EscUNBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBTko7QUFRSTtFQUNFLGtCQUFBO0FBTk47QUFTSTtFQUNFLFlBQUE7QUFQTjtBQVNNO0VBQ0UsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQVBSO0FBVU07RUFDRSxrQkFBQTtFQUNBLHVDQUFBO0VBRUEsV0FBQTtBQVRSO0FBV1E7RUFDRSxhQUFBO0FBVFY7QUFZUTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVZWO0FBYVE7RUFDRSxlQUFBO0FBWFY7QUFpQkU7RUFDRSw4QkFBQTtFQUVBLHFDQUFBO0VBQ0Esa0NBQUE7QUFoQko7QUFrQkk7RUFDRSwyQ0FBQTtBQWhCTjtBQW1CSTtFQUNFLFdBQUE7RUFDSCwyQ0FBQTtFQUNHLGlDQUFBO0VBQ0EsZUFBQTtBQWpCTjtBQW1CTTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQWpCUjtBQXFCSTtFQUNFLFdBQUE7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7QUFuQk47QUFzQkk7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBRUEsV0FBQTtFQUNBLGVBQUE7QUFyQk47QUF5QkU7RUFDRSw4QkFBQTtFQUVBLHNFQUFBO0VBQ0EsOEJBQUE7QUF4Qko7QUEwQkk7RUFDRSw4QkFBQTtFQUFBLDJCQUFBO0VBQUEsc0JBQUE7QUF4Qk47QUEwQk07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUF4QlI7QUEyQk07RUFDRSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0VBQUE7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxxREFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBekJSO0FBMkJRO0VBQ0UsdUNBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7QUF6QlY7QUE4Qkk7RUFDRSxjQUFBO0VBQ0EsOEJBQUE7RUFBQSwyQkFBQTtFQUFBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtBQTVCTjtBQThCTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQTVCUjtBQWdDUTtFQUNFLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUE5QlY7QUFrQ007RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFoQ1I7QUFrQ1E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBRUEsa0JBQUE7RUFDQSxVQUFBO0FBakNWO0FBbUNVO0VBQ0UsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLDRGQUFBO0VBQ0EseUZBQUE7RUFDQSw2QkFBQTtFQUNBLHdEQUFBO0VBQ0Esc0RBQUE7RUFDQSxnRkFBQTtFQUNBLGlEQUFBO0VBQ0EscURBQUE7RUFDQSx1Q0FBQTtFQUVBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFEQUFBO0FBbENaIiwiZmlsZSI6InNyYy9hcHAvZGVhbHMvbGlzdGluZy9zdHlsZXMvZGVhbHMtbGlzdGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwidGhlbWUvbWl4aW5zL2lvbi1jb2xvclwiO1xuXG4vLyBDdXN0b20gdmFyaWFibGVzXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWJyb2FkLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG5cbiAgLS1wYWdlLWNvdW50ZG93bi1maWxsLXNoYWRvdy1jb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItZGFya2VzdC1yZ2IpLCAwLjIpO1xuICAtLXBhZ2UtaXRlbS1zaGFkb3ctY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgLjEpO1xuICAtLXBhZ2UtZGVhbC1jb2RlLWhlaWdodDogMzBweDtcbiAgLS1wYWdlLWNvdW50ZG93bi1ndXR0ZXI6IDNweDtcblxuICAtLXBhZ2UtZXhwaXJlZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgLS1wYWdlLWVuZHMtc29vbi1jb2xvcjogI0ZGQUI2QjtcbiAgLS1wYWdlLWRpc3RhbnQtZW5kLWNvbG9yOiAjNzBERjcwO1xuXG4gIC0tcGFnZS1kZWFsLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgLS1wYWdlLWRlYWwtYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuXG4gIC0tcGFnZS1jb2xvcjogIzcwREY3MDtcblxuICAvLyBBZGQgY3VzdG9tIGNvbG9ycyB0byB1c2Ugd2l0aCBbY29sb3JdIHByb3BlcnR5XG4gIEBpbmNsdWRlIGlvbi1jb2xvcignY2xhaW0nKSB7XG4gICAgLS1pb24tY29sb3ItY2xhaW06ICM3MERGNzA7XG4gICAgLS1pb24tY29sb3ItY2xhaW0tcmdiOiAxMTIsMjIzLDExMjtcbiAgICAtLWlvbi1jb2xvci1jbGFpbS1jb250cmFzdDogI0ZGRkZGRjtcbiAgICAtLWlvbi1jb2xvci1jbGFpbS1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAgIC0taW9uLWNvbG9yLWNsYWltLXNoYWRlOiAjNjNDNDYzO1xuICAgIC0taW9uLWNvbG9yLWNsYWltLXRpbnQ6ICM3RUUyN0U7XG4gIH1cbn1cblxuLy8gTm90ZTogIEFsbCB0aGUgQ1NTIHZhcmlhYmxlcyBkZWZpbmVkIGJlbG93IGFyZSBvdmVycmlkZXMgb2YgSW9uaWMgZWxlbWVudHMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG4uZGVhbHMtbGlzdGluZy1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xufVxuXG4ubGlzdGluZy1pdGVtIHtcbiAgJi5lbmRlZCB7XG4gICAgLS1wYWdlLWRlYWwtY29sb3I6IHZhcigtLXBhZ2UtZXhwaXJlZC1jb2xvcik7XG4gICAgLS1wYWdlLWRlYWwtYm9yZGVyLWNvbG9yOiB2YXIoLS1wYWdlLWV4cGlyZWQtY29sb3IpO1xuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IG5vbmU7XG4gIH1cbiAgJi5pbW1pbmVudC1lbmQge1xuICAgIC0tcGFnZS1kZWFsLWNvbG9yOiB2YXIoLS1wYWdlLWVuZHMtc29vbi1jb2xvcik7XG4gICAgLS1wYWdlLWRlYWwtYm9yZGVyLWNvbG9yOiB2YXIoLS1wYWdlLWRpc3RhbnQtZW5kLWNvbG9yKTtcbiAgfVxuICAmLmVuZHMtc29vbiB7XG4gICAgLS1wYWdlLWRlYWwtY29sb3I6IHZhcigtLXBhZ2UtZW5kcy1zb29uLWNvbG9yKTtcbiAgICAtLXBhZ2UtZGVhbC1ib3JkZXItY29sb3I6IHZhcigtLXBhZ2UtZW5kcy1zb29uLWNvbG9yKTtcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBub25lO1xuICB9XG4gICYuZGlzdGFudC1lbmQge1xuICAgIC0tcGFnZS1kZWFsLWNvbG9yOiB2YXIoLS1wYWdlLWRpc3RhbnQtZW5kLWNvbG9yKTtcbiAgICAtLXBhZ2UtZGVhbC1ib3JkZXItY29sb3I6IHZhcigtLXBhZ2UtZGlzdGFudC1lbmQtY29sb3IpO1xuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IG5vbmU7XG4gIH1cblxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWZhaXItcmFkaXVzKTtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggMXB4IHZhcigtLXBhZ2UtaXRlbS1zaGFkb3ctY29sb3IpO1xuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogY2FsYygodmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgKiAzKTtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tcGFnZS1kZWFsLWJvcmRlci1jb2xvcik7XG5cbiAgLnRvcC1yb3cge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAuMSk7XG4gICAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIC5sb2dvLWNvbCB7XG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmNhbGwtdG8tYWN0aW9uLWNvbCB7XG4gICAgICBmbGV4LWdyb3c6IDA7XG5cbiAgICAgIC5leHBpcmVkLWN0YSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYWdlLWV4cGlyZWQtY29sb3IpO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjhweDtcbiAgICAgIH1cblxuICAgICAgLmNsYWltLWJ1dHRvbiB7XG4gICAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtZmFpci1yYWRpdXMpO1xuXG4gICAgICAgIG1hcmdpbjogMHB4O1xuXG4gICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAuYnV0dG9uLWN0YSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cblxuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1pZGRsZS1yb3cge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuICAgIC5pbmZvLWNvbCB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgIH1cblxuICAgIC5pdGVtLW5hbWUge1xuICAgICAgbWFyZ2luOiAwcHg7XG5cdFx0XHRtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuXG4gICAgICAubmFtZS1hbmNob3Ige1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5pdGVtLWRlc2NyaXB0aW9uIHtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuXG4gICAgLmJvb2ttYXJrLWJ1dHRvbiB7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDVweDtcblxuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuICB9XG5cbiAgLmJvdHRvbS1yb3cge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgIHBhZGRpbmc6IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgLmNvZGUtd3JhcHBlciB7XG4gICAgICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xuXG4gICAgICAuY29kZS1jdGEge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIC5pdGVtLWNvZGUge1xuICAgICAgICBoZWlnaHQ6IHZhcigtLXBhZ2UtZGVhbC1jb2RlLWhlaWdodCk7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCkgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcGFnZS1jb2xvcik7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tcGFnZS1kZWFsLWNvZGUtaGVpZ2h0KSAvIDIpO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAmLmV4cGlyZWQge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcGFnZS1leHBpcmVkLWNvbG9yKTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcGFnZS1leHBpcmVkLWNvbG9yKTtcbiAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAudGltZS1sZWZ0LXdyYXBwZXIge1xuICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG5cbiAgICAgIC5leHBpcmF0aW9uLWN0YSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgICAgfVxuXG4gICAgICAmOm5vdCguY291bnRkb3duLWFjdGl2ZSkge1xuICAgICAgICAuaXRlbS10aW1lLWxlZnQge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wYWdlLWRlYWwtY29sb3IpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLmNvdW50ZG93bi1hY3RpdmUge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgIC5jb3VudGRvd24td3JhcHBlciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgIC8vIFNldCBwb3NpdGlvbiBhYnNvbHV0ZSBzbyB0aGF0IHRoZSBwYXJlbnQgZG9lbid0IGNvdW50IHRoZSBoZWlnaHQgb2YgdGhpcyBlbGVtZW50LlxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICByaWdodDogMHB4O1xuXG4gICAgICAgICAgYXBwLWNvdW50ZG93bi10aW1lci5pdGVtLWNvdW50ZG93biB7XG4gICAgICAgICAgICAtLWNvdW50ZG93bi10aW1lLW1hcmdpbjogMHB4O1xuICAgICAgICAgICAgLS1jb3VudGRvd24tdGltZS1wYWRkaW5nOiAwcHg7XG4gICAgICAgICAgICAtLWNvdW50ZG93bi1pbm5lci10aW1lLW1hcmdpbjogdmFyKC0tcGFnZS1jb3VudGRvd24tZ3V0dGVyKSB2YXIoLS1wYWdlLWNvdW50ZG93bi1ndXR0ZXIpIDBweDtcbiAgICAgICAgICAgIC0tY291bnRkb3duLWlubmVyLXRpbWUtcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xuICAgICAgICAgICAgLS1jb3VudGRvd24tZmlsbC1ib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAtLWNvdW50ZG93bi1maWxsLWJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1uYXJyb3ctcmFkaXVzKTtcbiAgICAgICAgICAgIC0tY291bnRkb3duLWZpbGwtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICAgICAgICAgIC0tY291bnRkb3duLWZpbGwtc2hhZG93OiAwcHggMHB4IDVweCAwcHggdmFyKC0tcGFnZS1jb3VudGRvd24tZmlsbC1zaGFkb3ctY29sb3IpO1xuICAgICAgICAgICAgLS1jb3VudGRvd24tdmFsdWUtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcbiAgICAgICAgICAgIC0tY291bnRkb3duLXVuaXQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICAgICAgICAgICAgLS1jb3VudGRvd24tdGltZS1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtY291bnRkb3duLWd1dHRlcikgKiAtMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJAbWl4aW4gaW9uLWNvbG9yKCRjb2xvcikge1xuICBAY29udGVudDtcblxuICAuaW9uLWNvbG9yLSN7JGNvbG9yfSB7XG4gICAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yfSkgIWltcG9ydGFudDtcbiAgICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yfS1yZ2IpICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvcn0tY29udHJhc3QpICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3J9LWNvbnRyYXN0LXJnYikgIWltcG9ydGFudDtcbiAgICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yfS1zaGFkZSkgIWltcG9ydGFudDtcbiAgICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItI3skY29sb3J9LXRpbnQpICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiJdfQ== */", "[_nghost-%COMP%] {\n  --shell-color: #70DF70;\n  --shell-color-rgb: 112,223,112;\n}\n\napp-image-shell.deal-logo[_ngcontent-%COMP%] {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .30);\n  --image-shell-spinner-size: 18px;\n}\n\n.item-name[_ngcontent-%COMP%]   app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .30);\n  --text-shell-line-height: 16px;\n}\n\n.item-description[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .20);\n  --text-shell-line-height: 14px;\n}\n\n.item-code[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 14px;\n  min-width: 60px;\n}\n\n.item-code[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  min-width: 0px;\n}\n\n.item-time-left[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  min-width: 60px;\n}\n\n.item-time-left[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  min-width: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVhbHMvbGlzdGluZy9zdHlsZXMvZGVhbHMtbGlzdGluZy5zaGVsbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usc0JBQUE7RUFDQSw4QkFBQTtBQURGOztBQVdBO0VBQ0UsbUVBQUE7RUFDQSw4REFBQTtFQUNBLGdDQUFBO0FBUkY7O0FBV0E7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0FBUkY7O0FBV0E7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0FBUkY7O0FBV0E7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQVJGOztBQVVFO0VBQ0UsY0FBQTtBQVJKOztBQVlBO0VBQ0UsMERBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUFURjs7QUFXRTtFQUNFLGNBQUE7QUFUSiIsImZpbGUiOiJzcmMvYXBwL2RlYWxzL2xpc3Rpbmcvc3R5bGVzL2RlYWxzLWxpc3Rpbmcuc2hlbGwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAtLXNoZWxsLWNvbG9yOiAjNzBERjcwO1xuICAtLXNoZWxsLWNvbG9yLXJnYjogMTEyLDIyMywxMTI7XG59XG5cbi8vIFlvdSBjYW4gYWxzbyBhcHBseSBzaGVlbCBzdHlsZXMgdG8gdGhlIGVudGlyZSBwYWdlXG46aG9zdCguaXMtc2hlbGwpIHtcbiAgLy8gaW9uLWNvbnRlbnQge1xuICAvLyAgIG9wYWNpdHk6IDAuODtcbiAgLy8gfVxufVxuXG5hcHAtaW1hZ2Utc2hlbGwuZGVhbC1sb2dvIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4zMCk7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1zaXplOiAxOHB4O1xufVxuXG4uaXRlbS1uYW1lICBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4zMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTZweDtcbn1cblxuLml0ZW0tZGVzY3JpcHRpb24gPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbn1cblxuLml0ZW0tY29kZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjE1KTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtaW4td2lkdGg6IDYwcHg7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWluLXdpZHRoOiAwcHg7XG4gIH1cbn1cblxuLml0ZW0tdGltZS1sZWZ0ID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1pbi13aWR0aDogNjBweDtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtaW4td2lkdGg6IDBweDtcbiAgfVxufVxuIl19 */", ".ios[_nghost-%COMP%]   .claim-button[_ngcontent-%COMP%], .ios   [_nghost-%COMP%]   .claim-button[_ngcontent-%COMP%] {\n  height: 2.2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVhbHMvbGlzdGluZy9zdHlsZXMvZGVhbHMtbGlzdGluZy5pb3Muc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLGFBQUE7QUFESiIsImZpbGUiOiJzcmMvYXBwL2RlYWxzL2xpc3Rpbmcvc3R5bGVzL2RlYWxzLWxpc3RpbmcuaW9zLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdC1jb250ZXh0KC5pb3MpIHtcbiAgLy8gQ3VzdG9tIHBsYXRmb3JtIHN0eWxlcyBoZXJlXG4gIC5jbGFpbS1idXR0b24ge1xuICAgIGhlaWdodDogMi4yZW07XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DealsListingPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-deals-listing',
                templateUrl: './deals-listing.page.html',
                styleUrls: [
                    './styles/deals-listing.page.scss',
                    './styles/deals-listing.shell.scss',
                    './styles/deals-listing.ios.scss'
                ]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, { isShell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.is-shell']
        }] }); })();


/***/ }),

/***/ "bkrf":
/*!*******************************************************!*\
  !*** ./src/app/deals/listing/deals-listing.module.ts ***!
  \*******************************************************/
/*! exports provided: DealsListingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealsListingPageModule", function() { return DealsListingPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipes/pipes.module */ "iTUp");
/* harmony import */ var _deals_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../deals.service */ "y+sA");
/* harmony import */ var _deals_listing_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./deals-listing.page */ "CZtk");
/* harmony import */ var _deals_listing_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./deals-listing.resolver */ "AVcx");











const routes = [
    {
        path: '',
        component: _deals_listing_page__WEBPACK_IMPORTED_MODULE_7__["DealsListingPage"],
        resolve: {
            data: _deals_listing_resolver__WEBPACK_IMPORTED_MODULE_8__["DealsListingResolver"]
        }
    }
];
class DealsListingPageModule {
}
DealsListingPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DealsListingPageModule });
DealsListingPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DealsListingPageModule_Factory(t) { return new (t || DealsListingPageModule)(); }, providers: [
        _deals_listing_resolver__WEBPACK_IMPORTED_MODULE_8__["DealsListingResolver"],
        _deals_service__WEBPACK_IMPORTED_MODULE_6__["DealsService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DealsListingPageModule, { declarations: [_deals_listing_page__WEBPACK_IMPORTED_MODULE_7__["DealsListingPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
        _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DealsListingPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                    _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
                    _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"]
                ],
                declarations: [
                    _deals_listing_page__WEBPACK_IMPORTED_MODULE_7__["DealsListingPage"]
                ],
                providers: [
                    _deals_listing_resolver__WEBPACK_IMPORTED_MODULE_8__["DealsListingResolver"],
                    _deals_service__WEBPACK_IMPORTED_MODULE_6__["DealsService"]
                ]
            }]
    }], null, null); })();


/***/ })

};;
//# sourceMappingURL=deals-listing-deals-listing-module.js.map