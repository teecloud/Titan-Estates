exports.ids = ["real-estate-listing-real-estate-listing-module"];
exports.modules = {

/***/ "+Dkm":
/*!*******************************************************************!*\
  !*** ./src/app/real-estate/listing/real-estate-listing.module.ts ***!
  \*******************************************************************/
/*! exports provided: RealEstateListingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealEstateListingPageModule", function() { return RealEstateListingPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");
/* harmony import */ var _real_estate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../real-estate.service */ "r7vE");
/* harmony import */ var _real_estate_listing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./real-estate-listing.page */ "qogU");
/* harmony import */ var _real_estate_listing_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./real-estate-listing.resolver */ "Mab3");










const routes = [
    {
        path: '',
        component: _real_estate_listing_page__WEBPACK_IMPORTED_MODULE_6__["RealEstateListingPage"],
        resolve: {
            data: _real_estate_listing_resolver__WEBPACK_IMPORTED_MODULE_7__["RealEstateListingResolver"]
        }
    }
];
class RealEstateListingPageModule {
}
RealEstateListingPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RealEstateListingPageModule });
RealEstateListingPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RealEstateListingPageModule_Factory(t) { return new (t || RealEstateListingPageModule)(); }, providers: [
        _real_estate_listing_resolver__WEBPACK_IMPORTED_MODULE_7__["RealEstateListingResolver"],
        _real_estate_service__WEBPACK_IMPORTED_MODULE_5__["RealEstateService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RealEstateListingPageModule, { declarations: [_real_estate_listing_page__WEBPACK_IMPORTED_MODULE_6__["RealEstateListingPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RealEstateListingPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                    _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"]
                ],
                declarations: [
                    _real_estate_listing_page__WEBPACK_IMPORTED_MODULE_6__["RealEstateListingPage"]
                ],
                providers: [
                    _real_estate_listing_resolver__WEBPACK_IMPORTED_MODULE_7__["RealEstateListingResolver"],
                    _real_estate_service__WEBPACK_IMPORTED_MODULE_5__["RealEstateService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Mab3":
/*!*********************************************************************!*\
  !*** ./src/app/real-estate/listing/real-estate-listing.resolver.ts ***!
  \*********************************************************************/
/*! exports provided: RealEstateListingResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealEstateListingResolver", function() { return RealEstateListingResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _real_estate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../real-estate.service */ "r7vE");




class RealEstateListingResolver {
    constructor(realEstateService) {
        this.realEstateService = realEstateService;
    }
    resolve() {
        const dataSource = this.realEstateService.getListingDataSource();
        const dataStore = this.realEstateService.getListingStore(dataSource);
        return dataStore;
    }
}
RealEstateListingResolver.ɵfac = function RealEstateListingResolver_Factory(t) { return new (t || RealEstateListingResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_real_estate_service__WEBPACK_IMPORTED_MODULE_1__["RealEstateService"])); };
RealEstateListingResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RealEstateListingResolver, factory: RealEstateListingResolver.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RealEstateListingResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _real_estate_service__WEBPACK_IMPORTED_MODULE_1__["RealEstateService"] }]; }, null); })();


/***/ }),

/***/ "qogU":
/*!*****************************************************************!*\
  !*** ./src/app/real-estate/listing/real-estate-listing.page.ts ***!
  \*****************************************************************/
/*! exports provided: RealEstateListingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealEstateListingPage", function() { return RealEstateListingPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _real_estate_listing_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./real-estate-listing.model */ "FUeK");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _utils_resolver_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/resolver-helper */ "evT8");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shell/image-shell/image-shell.component */ "2gss");
/* harmony import */ var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shell/aspect-ratio/aspect-ratio.component */ "B7gC");
/* harmony import */ var _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shell/text-shell/text-shell.component */ "zK/y");












function RealEstateListingPage_div_7_ion_icon_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-icon", 31);
} }
function RealEstateListingPage_div_7_ion_icon_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-icon", 32);
} }
function RealEstateListingPage_div_7_ion_col_45_ion_col_5_ion_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-icon", 41);
} if (rf & 2) {
    const amenity_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", amenity_r7.icon);
} }
function RealEstateListingPage_div_7_ion_col_45_ion_col_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-col", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RealEstateListingPage_div_7_ion_col_45_ion_col_5_ion_icon_1_Template, 1, 1, "ion-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-text-shell", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const amenity_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", amenity_r7.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", amenity_r7.name);
} }
function RealEstateListingPage_div_7_ion_col_45_ion_col_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-col", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("+", item_r1.amenities.length - 4, "");
} }
function RealEstateListingPage_div_7_ion_col_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-col", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Amenities");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-row", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RealEstateListingPage_div_7_ion_col_45_ion_col_5_Template, 4, 2, "ion-col", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RealEstateListingPage_div_7_ion_col_45_ion_col_6_Template, 3, 1, "ion-col", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r1.amenities.slice(0, 4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.i == 3 && item_r1.amenities.length > 4);
} }
const _c0 = function (a1) { return ["/app/categories/real-estate/", a1]; };
const _c1 = function () { return { w: 365, h: 125 }; };
function RealEstateListingPage_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-row", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-col", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-image-shell", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-aspect-ratio", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-row", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-col", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-row", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "$");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-text-shell", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-text-shell", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ion-col", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, RealEstateListingPage_div_7_ion_icon_17_Template, 1, 0, "ion-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RealEstateListingPage_div_7_ion_icon_18_Template, 1, 0, "ion-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ion-col", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ion-row", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ion-col", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "ion-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Guests");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-text-shell", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ion-col", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "ion-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Bedrooms");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "app-text-shell", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ion-col", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "ion-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Bathrooms");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "app-text-shell", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ion-col", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "ion-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Patios");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "app-text-shell", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, RealEstateListingPage_div_7_ion_col_45_Template, 7, 2, "ion-col", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, item_r1.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("display", "cover")("src", item_r1.picture);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", item_r1.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", item_r1.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.liked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r1.liked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", item_r1.accommodations == null ? null : item_r1.accommodations.guests);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", item_r1.accommodations == null ? null : item_r1.accommodations.bedrooms);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", item_r1.accommodations == null ? null : item_r1.accommodations.bathrooms);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", item_r1.accommodations == null ? null : item_r1.accommodations.patios);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.amenities);
} }
class RealEstateListingPage {
    constructor(route) {
        this.route = route;
    }
    get isShell() {
        return (this.listing && this.listing.isShell) ? true : false;
    }
    ngOnInit() {
        this.route.data
            .pipe(
        // Extract data for this page
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((resolvedRouteData) => {
            return _utils_resolver_helper__WEBPACK_IMPORTED_MODULE_4__["ResolverHelper"].extractData(resolvedRouteData.data, _real_estate_listing_model__WEBPACK_IMPORTED_MODULE_2__["RealEstateListingModel"]);
        }))
            .subscribe((state) => {
            this.listing = state;
        }, (error) => console.log(error));
    }
}
RealEstateListingPage.ɵfac = function RealEstateListingPage_Factory(t) { return new (t || RealEstateListingPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
RealEstateListingPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RealEstateListingPage, selectors: [["app-real-estate-listing"]], hostVars: 2, hostBindings: function RealEstateListingPage_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-shell", ctx.isShell);
    } }, decls: 8, vars: 1, consts: [["color", "primary"], ["slot", "start"], ["defaultHref", "app/categories"], [1, "real-estate-listing-content"], ["class", "listing-item", 4, "ngFor", "ngForOf"], [1, "listing-item"], [1, "image-row"], ["size", "12"], [1, "image-anchor", 3, "routerLink"], ["animation", "spinner", 1, "item-picture", 3, "display", "src"], [3, "ratio"], [1, "description-row"], ["size", "12", 1, "details-col"], [1, "details-wrapper"], [1, "item-price"], [1, "price-icon"], [3, "data"], [1, "item-address"], ["size", "2", 1, "bookmark-col"], ["class", "like-icon", "name", "heart", 4, "ngIf"], ["class", "like-icon", "name", "heart-outline", 4, "ngIf"], ["size", "12", 1, "accommodations-col"], [1, "accommodations-wrapper"], [1, "item-accommodation"], ["src", "./assets/custom-icons/real-estate/guests.svg", 1, "accommodation-icon"], [1, "accommodation-property"], [1, "accommodation-value"], ["src", "./assets/custom-icons/real-estate/bedrooms.svg", 1, "accommodation-icon"], ["src", "./assets/custom-icons/real-estate/bathroom.svg", 1, "accommodation-icon"], ["src", "./assets/custom-icons/real-estate/patio.svg", 1, "accommodation-icon"], ["size", "12", "class", "amenities-col", 4, "ngIf"], ["name", "heart", 1, "like-icon"], ["name", "heart-outline", 1, "like-icon"], ["size", "12", 1, "amenities-col"], [1, "amenities-title"], [1, "amenities-wrapper"], ["class", "item-amenity", "size", "4", 4, "ngFor", "ngForOf"], ["class", "has-more-amenities", 4, "ngIf"], ["size", "4", 1, "item-amenity"], ["class", "amenity-icon", 3, "src", 4, "ngIf"], [1, "amenity-value"], [1, "amenity-icon", 3, "src"], [1, "has-more-amenities"], [1, "amenities-count"]], template: function RealEstateListingPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Real Estate Listing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RealEstateListingPage_div_7_Template, 46, 16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listing == null ? null : ctx.listing.items);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCol"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["RouterLinkDelegate"], _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_7__["ImageShellComponent"], _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_8__["AspectRatioComponent"], _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_9__["TextShellComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonIcon"]], styles: ["[_nghost-%COMP%] {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background);\n  --page-amenity-vertical-gutter: 6px;\n  --page-amenity-horizontal-gutter: 4px;\n  --page-color: #d9453a;\n}\n\n.real-estate-listing-content[_ngcontent-%COMP%] {\n  --background: var(--page-background);\n}\n\n.listing-item[_ngcontent-%COMP%]   .image-row[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n}\n\n.listing-item[_ngcontent-%COMP%]   .image-row[_ngcontent-%COMP%]   .image-anchor[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n  padding-bottom: var(--page-margin);\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-col[_ngcontent-%COMP%] {\n  padding: calc(var(--page-margin) / 2) var(--page-margin) 0px;\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-col[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-col[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .item-price[_ngcontent-%COMP%] {\n  margin: 0px 0px 5px;\n  font-weight: 500;\n  color: var(--ion-color-dark-tint);\n  display: flex;\n  align-items: center;\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-col[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .item-price[_ngcontent-%COMP%]   .price-icon[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-col[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .item-address[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-col[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .bookmark-col[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-col[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .bookmark-col[_ngcontent-%COMP%]   .like-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: var(--page-color);\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .accommodations-col[_ngcontent-%COMP%] {\n  padding: 0px var(--page-margin) var(--page-margin);\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .accommodations-col[_ngcontent-%COMP%]   .accommodations-wrapper[_ngcontent-%COMP%] {\n  padding-top: calc(var(--page-margin));\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .accommodations-col[_ngcontent-%COMP%]   .item-accommodation[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .accommodations-col[_ngcontent-%COMP%]   .item-accommodation[_ngcontent-%COMP%]    + .item-accommodation[_ngcontent-%COMP%] {\n  padding-left: calc((var(--page-margin) / 2) * 3);\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .accommodations-col[_ngcontent-%COMP%]   .item-accommodation[_ngcontent-%COMP%]   .accommodation-property[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--ion-color-medium-tint);\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .accommodations-col[_ngcontent-%COMP%]   .item-accommodation[_ngcontent-%COMP%]   .accommodation-value[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-weight: 400;\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n  margin-top: 4px;\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .accommodations-col[_ngcontent-%COMP%]   .item-accommodation[_ngcontent-%COMP%]   .accommodation-name[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 12px;\n  color: var(--ion-color-medium-tint);\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .accommodations-col[_ngcontent-%COMP%]   .item-accommodation[_ngcontent-%COMP%]   .accommodation-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium-tint);\n  font-size: 30px;\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .amenities-col[_ngcontent-%COMP%] {\n  padding: 0px var(--page-margin) calc(var(--page-margin) / 2);\n  background: var(--app-background-shade);\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .amenities-col[_ngcontent-%COMP%]   .amenities-title[_ngcontent-%COMP%] {\n  margin: var(--page-margin) 0px calc(var(--page-margin) / 2);\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: var(--ion-color-medium-shade);\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .amenities-col[_ngcontent-%COMP%]   .amenities-wrapper[_ngcontent-%COMP%] {\n  margin: 0px calc(var(--page-amenity-horizontal-gutter) * -1);\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .amenities-col[_ngcontent-%COMP%]   .amenities-wrapper[_ngcontent-%COMP%]   .item-amenity[_ngcontent-%COMP%] {\n  padding: var(--page-amenity-vertical-gutter) var(--page-amenity-horizontal-gutter);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .amenities-col[_ngcontent-%COMP%]   .amenities-wrapper[_ngcontent-%COMP%]   .item-amenity[_ngcontent-%COMP%]   .amenity-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium-tint);\n  font-size: 30px;\n  flex-shrink: 0;\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .amenities-col[_ngcontent-%COMP%]   .amenities-wrapper[_ngcontent-%COMP%]   .item-amenity[_ngcontent-%COMP%]   .amenity-value[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 300;\n  font-size: 12px;\n  color: var(--ion-color-medium-tint);\n  margin-left: calc(var(--page-amenity-horizontal-gutter) * 2);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVhbC1lc3RhdGUvbGlzdGluZy9zdHlsZXMvcmVhbC1lc3RhdGUtbGlzdGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxzQ0FBQTtFQUNBLHdDQUFBO0VBRUEsbUNBQUE7RUFDQSxxQ0FBQTtFQUVBLHFCQUFBO0FBSEY7O0FBT0E7RUFDRSxvQ0FBQTtBQUpGOztBQVFFO0VBQ0UsOEJBQUE7QUFMSjs7QUFPSTtFQUNFLGNBQUE7QUFMTjs7QUFTRTtFQUNFLDhCQUFBO0VBRUEsa0NBQUE7QUFSSjs7QUFVSTtFQUNFLDREQUFBO0FBUk47O0FBVU07RUFDRSw4QkFBQTtBQVJSOztBQVVRO0VBQ0UsbUJBQUE7RUFDSCxnQkFBQTtFQUNHLGlDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBUlY7O0FBVVU7RUFDRSxpQkFBQTtBQVJaOztBQVlRO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQ0FBQTtBQVZWOztBQWFRO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FBWFY7O0FBYVU7RUFDRSxlQUFBO0VBQ0Esd0JBQUE7QUFYWjs7QUFpQkk7RUFDRSxrREFBQTtBQWZOOztBQWlCTTtFQUNFLHFDQUFBO0FBZlI7O0FBa0JNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUFBLDJCQUFBO0VBQUEsc0JBQUE7QUFoQlI7O0FBa0JRO0VBQ0UsZ0RBQUE7QUFoQlY7O0FBbUJRO0VBQ0UsZUFBQTtFQUNBLG1DQUFBO0FBakJWOztBQW9CUTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0FBbEJWOztBQXFCUTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0FBbkJWOztBQXNCUTtFQUNFLG1DQUFBO0VBQ0EsZUFBQTtBQXBCVjs7QUF5Qkk7RUFDRSw0REFBQTtFQUNBLHVDQUFBO0FBdkJOOztBQXlCTTtFQUNFLDJEQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtBQXZCUjs7QUEwQk07RUFDRSw0REFBQTtBQXhCUjs7QUEwQlE7RUFDRSxrRkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBeEJWOztBQTBCVTtFQUNFLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUF4Qlo7O0FBMkJVO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0VBQ0EsNERBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUF6QloiLCJmaWxlIjoic3JjL2FwcC9yZWFsLWVzdGF0ZS9saXN0aW5nL3N0eWxlcy9yZWFsLWVzdGF0ZS1saXN0aW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtYnJvYWQtbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcblxuICAtLXBhZ2UtYW1lbml0eS12ZXJ0aWNhbC1ndXR0ZXI6IDZweDtcbiAgLS1wYWdlLWFtZW5pdHktaG9yaXpvbnRhbC1ndXR0ZXI6IDRweDtcblxuICAtLXBhZ2UtY29sb3I6ICNkOTQ1M2E7XG59XG5cbi8vIE5vdGU6ICBBbGwgdGhlIENTUyB2YXJpYWJsZXMgZGVmaW5lZCBiZWxvdyBhcmUgb3ZlcnJpZGVzIG9mIElvbmljIGVsZW1lbnRzIENTUyBDdXN0b20gUHJvcGVydGllc1xuLnJlYWwtZXN0YXRlLWxpc3RpbmctY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbn1cblxuLmxpc3RpbmctaXRlbSB7XG4gIC5pbWFnZS1yb3cge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgIC5pbWFnZS1hbmNob3Ige1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICB9XG5cbiAgLmRlc2NyaXB0aW9uLXJvdyB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuICAgIC5kZXRhaWxzLWNvbCB7XG4gICAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIHZhcigtLXBhZ2UtbWFyZ2luKSAwcHg7XG5cbiAgICAgIC5kZXRhaWxzLXdyYXBwZXIge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgICAgLml0ZW0tcHJpY2Uge1xuICAgICAgICAgIG1hcmdpbjogMHB4IDBweCA1cHg7XG4gICAgXHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgLnByaWNlLWljb24ge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLml0ZW0tYWRkcmVzcyB7XG4gICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJvb2ttYXJrLWNvbCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG4gICAgICAgICAgLmxpa2UtaWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcGFnZS1jb2xvcik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmFjY29tbW9kYXRpb25zLWNvbCB7XG4gICAgICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuICAgICAgLmFjY29tbW9kYXRpb25zLXdyYXBwZXIge1xuICAgICAgICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikpO1xuICAgICAgfVxuXG4gICAgICAuaXRlbS1hY2NvbW1vZGF0aW9uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcblxuICAgICAgICAmICsgLml0ZW0tYWNjb21tb2RhdGlvbiB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKCh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSAqIDMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFjY29tbW9kYXRpb24tcHJvcGVydHkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hY2NvbW1vZGF0aW9uLXZhbHVlIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmFjY29tbW9kYXRpb24tbmFtZSB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hY2NvbW1vZGF0aW9uLWljb24ge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5hbWVuaXRpZXMtY29sIHtcbiAgICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcblxuICAgICAgLmFtZW5pdGllcy10aXRsZSB7XG4gICAgICAgIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pIDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICAgIH1cblxuICAgICAgLmFtZW5pdGllcy13cmFwcGVyIHtcbiAgICAgICAgbWFyZ2luOiAwcHggY2FsYyh2YXIoLS1wYWdlLWFtZW5pdHktaG9yaXpvbnRhbC1ndXR0ZXIpICogLTEpO1xuXG4gICAgICAgIC5pdGVtLWFtZW5pdHkge1xuICAgICAgICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtYW1lbml0eS12ZXJ0aWNhbC1ndXR0ZXIpIHZhcigtLXBhZ2UtYW1lbml0eS1ob3Jpem9udGFsLWd1dHRlcik7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgICAgLmFtZW5pdHktaWNvbiB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5hbWVuaXR5LXZhbHVlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1hbWVuaXR5LWhvcml6b250YWwtZ3V0dGVyKSAqIDIpO1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */", "[_nghost-%COMP%] {\n  --shell-color: #d9453a;\n  --shell-color-rgb: 217,69,58;\n}\n\napp-image-shell.item-picture[_ngcontent-%COMP%] {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25);\n}\n\n.item-price[_ngcontent-%COMP%]   app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .25);\n  min-width: 50px;\n  max-width: 100px;\n}\n\n.item-price[_ngcontent-%COMP%]   app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: inherit;\n}\n\n.item-address[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .20);\n  --text-shell-line-height: 14px;\n  max-width: 60%;\n}\n\n.item-address[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: inherit;\n}\n\n.accommodation-value[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  min-width: 30px;\n}\n\n.accommodation-value[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  min-width: 0px;\n}\n\n.amenity-value[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .05);\n  --text-shell-line-height: 12px;\n  min-width: 50px;\n}\n\n.amenity-value[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  min-width: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVhbC1lc3RhdGUvbGlzdGluZy9zdHlsZXMvcmVhbC1lc3RhdGUtbGlzdGluZy5zaGVsbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usc0JBQUE7RUFDQSw0QkFBQTtBQURGOztBQVdBO0VBQ0UsbUVBQUE7RUFDQSw4REFBQTtBQVJGOztBQVdBO0VBQ0UsMERBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFSRjs7QUFVRTtFQUNFLGtCQUFBO0FBUko7O0FBWUE7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQVRGOztBQVdFO0VBQ0Usa0JBQUE7QUFUSjs7QUFhQTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FBVkY7O0FBWUU7RUFDRSxjQUFBO0FBVko7O0FBY0E7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQVhGOztBQWFFO0VBQ0UsY0FBQTtBQVhKIiwiZmlsZSI6InNyYy9hcHAvcmVhbC1lc3RhdGUvbGlzdGluZy9zdHlsZXMvcmVhbC1lc3RhdGUtbGlzdGluZy5zaGVsbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3VzdG9tIHZhcmlhYmxlc1xuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG46aG9zdCB7XG4gIC0tc2hlbGwtY29sb3I6ICNkOTQ1M2E7XG4gIC0tc2hlbGwtY29sb3ItcmdiOiAyMTcsNjksNTg7XG59XG5cbi8vIFlvdSBjYW4gYWxzbyBhcHBseSBzaGVlbCBzdHlsZXMgdG8gdGhlIGVudGlyZSBwYWdlXG46aG9zdCguaXMtc2hlbGwpIHtcbiAgLy8gaW9uLWNvbnRlbnQge1xuICAvLyAgIG9wYWNpdHk6IDAuODtcbiAgLy8gfVxufVxuXG5hcHAtaW1hZ2Utc2hlbGwuaXRlbS1waWN0dXJlIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yNSk7XG59XG5cbi5pdGVtLXByaWNlIGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjI1KTtcbiAgbWluLXdpZHRoOiA1MHB4O1xuICBtYXgtd2lkdGg6IDEwMHB4O1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgfVxufVxuXG4uaXRlbS1hZGRyZXNzID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1heC13aWR0aDogNjAlO1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgfVxufVxuXG4uYWNjb21tb2RhdGlvbi12YWx1ZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtaW4td2lkdGg6IDMwcHg7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWluLXdpZHRoOiAwcHg7XG4gIH1cbn1cblxuLmFtZW5pdHktdmFsdWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4wNSk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTJweDtcbiAgbWluLXdpZHRoOiA1MHB4O1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1pbi13aWR0aDogMHB4O1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RealEstateListingPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-real-estate-listing',
                templateUrl: './real-estate-listing.page.html',
                styleUrls: [
                    './styles/real-estate-listing.page.scss',
                    './styles/real-estate-listing.shell.scss'
                ]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, { isShell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.is-shell']
        }] }); })();


/***/ })

};;
//# sourceMappingURL=real-estate-listing-real-estate-listing-module.js.map