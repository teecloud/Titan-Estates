exports.ids = ["fashion-details-fashion-details-module"];
exports.modules = {

/***/ "/EjV":
/*!*********************************************************!*\
  !*** ./src/app/fashion/details/fashion-details.page.ts ***!
  \*********************************************************/
/*! exports provided: FashionDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FashionDetailsPage", function() { return FashionDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "zOht");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _utils_resolver_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/resolver-helper */ "evT8");
/* harmony import */ var _fashion_details_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fashion-details.model */ "W6mW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shell/text-shell/text-shell.component */ "zK/y");
/* harmony import */ var _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shell/image-shell/image-shell.component */ "2gss");
/* harmony import */ var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shell/aspect-ratio/aspect-ratio.component */ "B7gC");














const _c0 = function (a0, a1) { return { "centered-image": a0, "fill-image": a1 }; };
const _c1 = function () { return { w: 64, h: 50 }; };
function FashionDetailsPage_ion_slide_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-slide", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-row", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "app-image-shell", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-aspect-ratio", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("display", "cover")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c0, image_r2.type === "square", image_r2.type === "fill"))("src", image_r2.source);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c1));
} }
const _c2 = function () { return { w: 3, h: 4 }; };
function FashionDetailsPage_div_49_ion_col_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "app-aspect-ratio", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-image-shell", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h4", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "app-text-shell", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "app-text-shell", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const relatedProduct_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", relatedProduct_r4.image)("alt", "related image");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", relatedProduct_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 5, relatedProduct_r4.salePrice));
} }
function FashionDetailsPage_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Why Don't you try?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-row", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, FashionDetailsPage_div_49_ion_col_4_Template, 12, 8, "ion-col", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.details == null ? null : ctx_r1.details.relatedProducts);
} }
class FashionDetailsPage {
    constructor(route, alertController) {
        this.route = route;
        this.alertController = alertController;
        this.colorVariants = [];
        this.sizeVariants = [];
        this.slidesOptions = {
            zoom: {
                toggle: false // Disable zooming to prevent weird double tap zomming on slide images
            }
        };
    }
    get isShell() {
        return (this.details && this.details.isShell) ? true : false;
    }
    ngOnInit() {
        this.subscriptions = this.route.data
            .pipe(
        // Extract data for this page
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((resolvedRouteData) => {
            return _utils_resolver_helper__WEBPACK_IMPORTED_MODULE_4__["ResolverHelper"].extractData(resolvedRouteData.data, _fashion_details_model__WEBPACK_IMPORTED_MODULE_5__["FashionDetailsModel"]);
        }))
            .subscribe((state) => {
            this.details = state;
            this.colorVariants = this.details.colorVariants
                .map(item => ({
                name: item.name,
                type: 'radio',
                label: item.name,
                value: item.value,
                checked: item.default
            }));
            this.sizeVariants = this.details.sizeVariants
                .map(item => ({
                name: item.name,
                type: 'radio',
                label: item.name,
                value: item.value,
                checked: item.default
            }));
        }, (error) => console.log(error));
    }
    openColorChooser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Color',
                inputs: this.colorVariants,
                cssClass: 'variant-alert color-chooser',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'OK',
                        handler: () => {
                            console.log('Confirm Ok');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    openSizeChooser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Size',
                inputs: this.sizeVariants,
                cssClass: 'variant-alert size-chooser',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'OK',
                        handler: (selectedValue) => {
                            console.log('Selected Value', selectedValue);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    // NOTE: Ionic only calls ngOnDestroy if the page was popped (ex: when navigating back)
    // Since ngOnDestroy might not fire when you navigate from the current page, use ionViewWillLeave to cleanup Subscriptions
    ionViewWillLeave() {
        this.subscriptions.unsubscribe();
    }
}
FashionDetailsPage.ɵfac = function FashionDetailsPage_Factory(t) { return new (t || FashionDetailsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"])); };
FashionDetailsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FashionDetailsPage, selectors: [["app-fashion-details"]], hostVars: 2, hostBindings: function FashionDetailsPage_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-shell", ctx.isShell);
    } }, decls: 50, vars: 14, consts: [["color", "primary"], ["slot", "start"], ["defaultHref", "app/categories/fashion"], [1, "fashion-details-content"], [1, "slider-row"], ["pager", "true", 1, "details-slides", 3, "options"], ["class", "", 4, "ngFor", "ngForOf"], [1, "description-wrapper"], [1, "details-name"], ["animation", "gradient", 3, "data"], [1, "details-brand"], [1, "details-price"], [1, "details-sale-price"], [1, "details-purchase-options-row"], ["size", "12", 1, "aux-action-col"], ["color", "medium", "size", "small", "fill", "clear", 1, "size-chart-btn"], ["size", "6"], ["color", "medium", "expand", "block", "fill", "outline", 1, "select-variant-btn", 3, "click"], ["size", "12", 1, "main-call-to-action-col"], ["color", "dark", "expand", "block", "fill", "solid", 1, "add-to-cart-btn"], [1, "details-description-wrapper"], [1, "detail-title"], [1, "details-description"], ["animation", "gradient", "lines", "5", 3, "data"], ["animation", "gradient", "lines", "3", 3, "data"], [1, "details-description", "product-code"], ["class", "related-products-wrapper", 4, "ngIf"], [1, ""], [1, "slide-inner-row"], ["animation", "spinner", 1, "showcase-image", 3, "display", "ngClass", "src"], [3, "ratio"], [1, "related-products-wrapper"], [1, "detail-alt-title"], [1, "related-products-list"], ["size", "6", "class", "related-product-item", 4, "ngFor", "ngForOf"], ["size", "6", 1, "related-product-item"], [1, "item-image-wrapper"], [1, "image-anchor"], ["animation", "spinner", 1, "related-product-image", 3, "src", "alt"], [1, "item-details-wrapper"], [1, "item-name"], [1, "name-anchor"], [1, "item-sale-price"]], template: function FashionDetailsPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Fashion Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-row", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-slides", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, FashionDetailsPage_ion_slide_9_Template, 4, 8, "ion-slide", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "app-text-shell", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "app-text-shell", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "app-text-shell", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "app-text-shell", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-row", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-col", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Size Chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-col", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ion-button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FashionDetailsPage_Template_ion_button_click_26_listener() { return ctx.openColorChooser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ion-col", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ion-button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FashionDetailsPage_Template_ion_button_click_29_listener() { return ctx.openSizeChooser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ion-col", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "ion-button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Add to cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "h3", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "About me");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "app-text-shell", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "h3", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Looking after me");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "app-text-shell", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "h3", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Product code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "app-text-shell", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, FashionDetailsPage_div_49_Template, 5, 1, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.slidesOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.details == null ? null : ctx.details.showcaseImages);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.details == null ? null : ctx.details.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.details == null ? null : ctx.details.brand);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 10, ctx.details == null ? null : ctx.details.price));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 12, ctx.details == null ? null : ctx.details.salePrice));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.details == null ? null : ctx.details.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.details == null ? null : ctx.details.careInstructions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.details == null ? null : ctx.details.upc);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.details == null ? null : ctx.details.relatedProducts) && ctx.details.relatedProducts.length > 0);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_8__["TextShellComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlide"], _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_9__["ImageShellComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_10__["AspectRatioComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CurrencyPipe"]], styles: ["[_nghost-%COMP%] {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-swiper-pagination-space: 30px;\n  --page-swiper-pagination-height: 18px;\n  --page-pagination-bullet-size: 10px;\n  --page-options-gutter: calc(var(--page-margin) / 2);\n  --page-related-items-gutter: calc(var(--page-margin) / 2);\n  --page-color: #cb328f;\n}\n\n.fashion-details-content[_ngcontent-%COMP%] {\n  --background: var(--page-background);\n}\n\n.fashion-details-content[_ngcontent-%COMP%]   .slider-row[_ngcontent-%COMP%]   .details-slides[_ngcontent-%COMP%] {\n  --bullet-background: var(--ion-color-dark-tint);\n  --bullet-background-active: var(--ion-color-dark-tint);\n  height: 100%;\n  width: 100%;\n}\n\n.fashion-details-content[_ngcontent-%COMP%]   .slider-row[_ngcontent-%COMP%]   .details-slides[_ngcontent-%COMP%]   .slide-inner-row[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  padding: 0px;\n  padding-bottom: var(--page-swiper-pagination-space);\n}\n\n.fashion-details-content[_ngcontent-%COMP%]   .slider-row[_ngcontent-%COMP%]   .showcase-image[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.fashion-details-content[_ngcontent-%COMP%]   .slider-row[_ngcontent-%COMP%]   .showcase-image.centered-image[_ngcontent-%COMP%] {\n  background-size: auto;\n  background-position: center;\n}\n\n.fashion-details-content[_ngcontent-%COMP%]   .description-wrapper[_ngcontent-%COMP%] {\n  padding: var(--page-margin) var(--page-margin) 0px;\n}\n\n.fashion-details-content[_ngcontent-%COMP%]   .description-wrapper[_ngcontent-%COMP%]   .details-name[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n  margin: 0px 0px 5px;\n}\n\n.fashion-details-content[_ngcontent-%COMP%]   .description-wrapper[_ngcontent-%COMP%]   .details-brand[_ngcontent-%COMP%] {\n  display: block;\n  text-transform: uppercase;\n  font-size: 14px;\n  font-weight: 400;\n  margin: 0px 0px var(--page-margin);\n}\n\n.fashion-details-content[_ngcontent-%COMP%]   .description-wrapper[_ngcontent-%COMP%]   .details-price[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n  margin: 0px;\n  color: var(--page-color);\n  display: inline-block;\n}\n\n.fashion-details-content[_ngcontent-%COMP%]   .description-wrapper[_ngcontent-%COMP%]   .details-sale-price[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium-shade);\n  text-decoration: line-through;\n  display: inline-block;\n  margin-left: var(--page-margin);\n  font-size: 14px;\n}\n\n.fashion-details-content[_ngcontent-%COMP%]   .details-purchase-options-row[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: var(--page-options-gutter);\n  padding-top: 0px;\n  padding-left: calc(var(--page-margin) - var(--page-options-gutter));\n  padding-right: calc(var(--page-margin) - var(--page-options-gutter));\n  padding-bottom: calc(var(--page-margin) * 2);\n}\n\n.fashion-details-content[_ngcontent-%COMP%]   .details-purchase-options-row[_ngcontent-%COMP%]   .aux-action-col[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.fashion-details-content[_ngcontent-%COMP%]   .details-purchase-options-row[_ngcontent-%COMP%]   .aux-action-col[_ngcontent-%COMP%]   .size-chart-btn[_ngcontent-%COMP%] {\n  margin: 0px;\n  height: 25px;\n}\n\n.fashion-details-content[_ngcontent-%COMP%]   .details-purchase-options-row[_ngcontent-%COMP%]   .main-call-to-action-col[_ngcontent-%COMP%] {\n  padding-bottom: 0px;\n}\n\n.fashion-details-content[_ngcontent-%COMP%]   .details-purchase-options-row[_ngcontent-%COMP%]   .select-variant-btn[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n\n.fashion-details-content[_ngcontent-%COMP%]   .details-purchase-options-row[_ngcontent-%COMP%]   .add-to-cart-btn[_ngcontent-%COMP%] {\n  margin: 0px;\n  margin-top: var(--page-margin);\n}\n\n.fashion-details-content[_ngcontent-%COMP%]   .detail-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  color: var(--ion-color-dark-tint);\n  margin: 0px;\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n\n.fashion-details-content[_ngcontent-%COMP%]   .details-description-wrapper[_ngcontent-%COMP%] {\n  padding-top: 0px;\n  padding-left: var(--page-margin);\n  padding-right: var(--page-margin);\n  padding-bottom: calc(var(--page-margin) * 2);\n}\n\n.fashion-details-content[_ngcontent-%COMP%]   .details-description-wrapper[_ngcontent-%COMP%]   .details-description[_ngcontent-%COMP%] {\n  margin: 0px;\n  line-height: 1.3;\n  font-size: 14px;\n  color: var(--ion-color-medium-shade);\n}\n\n.fashion-details-content[_ngcontent-%COMP%]   .detail-alt-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 18px;\n  font-weight: 400;\n  text-transform: uppercase;\n  color: var(--ion-color-dark-shade);\n  margin: 0px;\n  margin-bottom: var(--page-margin);\n}\n\n.fashion-details-content[_ngcontent-%COMP%]   .related-products-wrapper[_ngcontent-%COMP%] {\n  padding-top: 0px;\n  padding-left: var(--page-margin);\n  padding-right: var(--page-margin);\n  padding-bottom: calc(var(--page-margin) * 2);\n}\n\n.fashion-details-content[_ngcontent-%COMP%]   .related-products-wrapper[_ngcontent-%COMP%]   .related-products-list[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n}\n\n.fashion-details-content[_ngcontent-%COMP%]   .related-products-wrapper[_ngcontent-%COMP%]   .related-products-list[_ngcontent-%COMP%]   .related-product-item[_ngcontent-%COMP%] {\n  margin-bottom: calc(var(--page-margin) * 2);\n}\n\n.fashion-details-content[_ngcontent-%COMP%]   .related-products-wrapper[_ngcontent-%COMP%]   .related-products-list[_ngcontent-%COMP%]   .related-product-item[_ngcontent-%COMP%]:nth-child(odd) {\n  padding-right: var(--page-related-items-gutter);\n}\n\n.fashion-details-content[_ngcontent-%COMP%]   .related-products-wrapper[_ngcontent-%COMP%]   .related-products-list[_ngcontent-%COMP%]   .related-product-item[_ngcontent-%COMP%]:nth-child(even) {\n  padding-left: var(--page-related-items-gutter);\n}\n\n.fashion-details-content[_ngcontent-%COMP%]   .related-products-wrapper[_ngcontent-%COMP%]   .related-products-list[_ngcontent-%COMP%]   .related-product-item[_ngcontent-%COMP%]   .item-image-wrapper[_ngcontent-%COMP%] {\n  border: 1px solid var(--ion-color-light-shade);\n}\n\n.fashion-details-content[_ngcontent-%COMP%]   .related-products-wrapper[_ngcontent-%COMP%]   .related-products-list[_ngcontent-%COMP%]   .related-product-item[_ngcontent-%COMP%]   .item-image-wrapper[_ngcontent-%COMP%]   .image-anchor[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.fashion-details-content[_ngcontent-%COMP%]   .related-products-wrapper[_ngcontent-%COMP%]   .related-products-list[_ngcontent-%COMP%]   .related-product-item[_ngcontent-%COMP%]   .item-details-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 5px 5px 0px;\n}\n\n.fashion-details-content[_ngcontent-%COMP%]   .related-products-wrapper[_ngcontent-%COMP%]   .related-products-list[_ngcontent-%COMP%]   .related-product-item[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%] {\n  margin: 0px;\n  margin-bottom: calc(var(--page-margin) / 2);\n  font-size: 14px;\n  font-weight: 400;\n  text-align: center;\n  min-width: 90%;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.fashion-details-content[_ngcontent-%COMP%]   .related-products-wrapper[_ngcontent-%COMP%]   .related-products-list[_ngcontent-%COMP%]   .related-product-item[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%]   .name-anchor[_ngcontent-%COMP%] {\n  color: var(--ion-color-dark-tint);\n  display: block;\n  text-decoration: none;\n}\n\n.fashion-details-content[_ngcontent-%COMP%]   .related-products-wrapper[_ngcontent-%COMP%]   .related-products-list[_ngcontent-%COMP%]   .related-product-item[_ngcontent-%COMP%]   .item-sale-price[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 400;\n  color: var(--page-color);\n  font-size: 16px;\n  text-align: center;\n  min-width: 30%;\n}\n\n[_nghost-%COMP%]     .details-slides .swiper-pagination {\n  height: var(--page-swiper-pagination-height);\n  line-height: 1;\n  bottom: calc((var(--page-swiper-pagination-space) - var(--page-swiper-pagination-height) ) / 2);\n}\n\n[_nghost-%COMP%]     .details-slides .swiper-pagination .swiper-pagination-bullet {\n  width: var(--page-pagination-bullet-size);\n  height: var(--page-pagination-bullet-size);\n}\n\n  .variant-alert {\n  --select-alert-color: #000;\n  --select-alert-background: #FFF;\n  --select-alert-margin: 16px;\n  --select-alert-color: var(--ion-color-lightest);\n  --select-alert-background: var(--ion-color-primary);\n  --select-alert-margin: var(--app-fair-margin);\n}\n\n  .variant-alert .alert-head {\n  padding-top: calc((var(--select-alert-margin) / 4) * 3);\n  padding-bottom: calc((var(--select-alert-margin) / 4) * 3);\n  -webkit-padding-start: var(--select-alert-margin);\n          padding-inline-start: var(--select-alert-margin);\n  -webkit-padding-end: var(--select-alert-margin);\n          padding-inline-end: var(--select-alert-margin);\n}\n\n  .variant-alert .alert-title {\n  color: var(--select-alert-color);\n}\n\n  .variant-alert .alert-head,   .variant-alert .alert-message {\n  background-color: var(--select-alert-background);\n}\n\n  .variant-alert .alert-wrapper.sc-ion-alert-ios .alert-title {\n  margin: 0px;\n}\n\n  .variant-alert .alert-wrapper.sc-ion-alert-md .alert-title {\n  font-size: 18px;\n  font-weight: 400;\n}\n\n  .variant-alert .alert-wrapper.sc-ion-alert-md .alert-button {\n  --padding-top: 0;\n  --padding-start: 0.9em;\n  --padding-end: 0.9em;\n  --padding-bottom: 0;\n  height: 2.1em;\n  font-size: 13px;\n}\n\n  .variant-alert .alert-message {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFzaGlvbi9kZXRhaWxzL3N0eWxlcy9mYXNoaW9uLWRldGFpbHMucGFnZS5zY3NzIiwic3JjL3RoZW1lL21peGlucy9pbnB1dHMvc2VsZWN0LWFsZXJ0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxxQ0FBQTtFQUNBLHdDQUFBO0VBRUEsb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLG1DQUFBO0VBRUEsbURBQUE7RUFDQSx5REFBQTtFQUVBLHFCQUFBO0FBTkY7O0FBVUE7RUFDRSxvQ0FBQTtBQVBGOztBQVVJO0VBQ0UsK0NBQUE7RUFDQSxzREFBQTtFQUVBLFlBQUE7RUFDQSxXQUFBO0FBVE47O0FBV007RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxtREFBQTtBQVZSOztBQWNJO0VBQ0UsV0FBQTtBQVpOOztBQWNNO0VBQ0UscUJBQUE7RUFDQSwyQkFBQTtBQVpSOztBQWlCRTtFQUNFLGtEQUFBO0FBZko7O0FBaUJJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFmTjs7QUFrQkk7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtBQWhCTjs7QUFtQkk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtBQWpCTjs7QUFvQkk7RUFDRSxvQ0FBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7QUFsQk47O0FBc0JFO0VBQ0UscURBQUE7RUFFQSxnQkFBQTtFQUNBLG1FQUFBO0VBQ0Esb0VBQUE7RUFDQSw0Q0FBQTtBQXJCSjs7QUF1Qkk7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBckJOOztBQXVCTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBckJSOztBQXlCSTtFQUNFLG1CQUFBO0FBdkJOOztBQTBCSTtFQUNFLFdBQUE7QUF4Qk47O0FBMkJJO0VBQ0UsV0FBQTtFQUNBLDhCQUFBO0FBekJOOztBQTZCRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0EsV0FBQTtFQUNBLDJDQUFBO0FBM0JKOztBQThCRTtFQUNFLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQ0FBQTtFQUNBLDRDQUFBO0FBNUJKOztBQThCSTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtBQTVCTjs7QUFnQ0U7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7QUE5Qko7O0FBaUNFO0VBQ0UsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsNENBQUE7QUEvQko7O0FBaUNJO0VBQ0UsOEJBQUE7QUEvQk47O0FBaUNNO0VBQ0UsMkNBQUE7QUEvQlI7O0FBaUNRO0VBQ0UsK0NBQUE7QUEvQlY7O0FBa0NRO0VBQ0UsOENBQUE7QUFoQ1Y7O0FBbUNRO0VBQ0UsOENBQUE7QUFqQ1Y7O0FBbUNVO0VBQ0UsY0FBQTtBQWpDWjs7QUFxQ1E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUVBLG9CQUFBO0FBcENWOztBQXVDUTtFQUNFLFdBQUE7RUFDQSwyQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUVBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQXRDVjs7QUF3Q1U7RUFDRSxpQ0FBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQXRDWjs7QUEwQ1E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUF4Q1Y7O0FBb0RFO0VBQ0UsNENBQUE7RUFDQSxjQUFBO0VBRUEsK0ZBQUE7QUFsREo7O0FBb0RJO0VBQ0UseUNBQUE7RUFDQSwwQ0FBQTtBQWxETjs7QUF5REE7RUMzT0UsMEJBQUE7RUFDQSwrQkFBQTtFQUNBLDJCQUFBO0VENk9BLCtDQUFBO0VBQ0EsbURBQUE7RUFDQSw2Q0FBQTtBQXRERjs7QUN2TEU7RUFDRSx1REFBQTtFQUNBLDBEQUFBO0VBQ0EsaURBQUE7VUFBQSxnREFBQTtFQUNBLCtDQUFBO1VBQUEsOENBQUE7QUR5TEo7O0FDdExFO0VBQ0UsZ0NBQUE7QUR3TEo7O0FDckxFOztFQUVFLGdEQUFBO0FEdUxKOztBQ2xMSTtFQUNFLFdBQUE7QURvTE47O0FDOUtJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FEZ0xOOztBQzdLSTtFQUVFLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBRUEsYUFBQTtFQUNBLGVBQUE7QUQ2S047O0FBNEJFO0VBQ0UsYUFBQTtBQTFCSiIsImZpbGUiOiJzcmMvYXBwL2Zhc2hpb24vZGV0YWlscy9zdHlsZXMvZmFzaGlvbi1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ0aGVtZS9taXhpbnMvaW5wdXRzL3NlbGVjdC1hbGVydFwiO1xuXG4vLyBDdXN0b20gdmFyaWFibGVzXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcblxuICAtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24tc3BhY2U6IDMwcHg7XG4gIC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1oZWlnaHQ6IDE4cHg7XG4gIC0tcGFnZS1wYWdpbmF0aW9uLWJ1bGxldC1zaXplOiAxMHB4O1xuXG4gIC0tcGFnZS1vcHRpb25zLWd1dHRlcjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgLS1wYWdlLXJlbGF0ZWQtaXRlbXMtZ3V0dGVyOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuXG4gIC0tcGFnZS1jb2xvcjogI2NiMzI4Zjtcbn1cblxuLy8gTm90ZTogIEFsbCB0aGUgQ1NTIHZhcmlhYmxlcyBkZWZpbmVkIGJlbG93IGFyZSBvdmVycmlkZXMgb2YgSW9uaWMgZWxlbWVudHMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG4uZmFzaGlvbi1kZXRhaWxzLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG5cbiAgLnNsaWRlci1yb3cge1xuICAgIC5kZXRhaWxzLXNsaWRlcyB7XG4gICAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgICAgIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcblxuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgIC5zbGlkZS1pbm5lci1yb3cge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIC8vIC5zd2lwZXItcGFnaW5hdGlvbiBzcGFjZVxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1zcGFjZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnNob3djYXNlLWltYWdlIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAmLmNlbnRlcmVkLWltYWdlIHtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmRlc2NyaXB0aW9uLXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbikgMHB4O1xuXG4gICAgLmRldGFpbHMtbmFtZSB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgbWFyZ2luOiAwcHggMHB4IDVweDtcbiAgICB9XG5cbiAgICAuZGV0YWlscy1icmFuZCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgbWFyZ2luOiAwcHggMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICB9XG5cbiAgICAuZGV0YWlscy1wcmljZSB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICBjb2xvcjogdmFyKC0tcGFnZS1jb2xvcik7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuXG4gICAgLmRldGFpbHMtc2FsZS1wcmljZSB7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIG1hcmdpbi1sZWZ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICB9XG5cbiAgLmRldGFpbHMtcHVyY2hhc2Utb3B0aW9ucy1yb3cge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IHZhcigtLXBhZ2Utb3B0aW9ucy1ndXR0ZXIpO1xuXG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC0gdmFyKC0tcGFnZS1vcHRpb25zLWd1dHRlcikpO1xuICAgIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC0gdmFyKC0tcGFnZS1vcHRpb25zLWd1dHRlcikpO1xuICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xuXG4gICAgLmF1eC1hY3Rpb24tY29sIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG5cbiAgICAgIC5zaXplLWNoYXJ0LWJ0biB7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1haW4tY2FsbC10by1hY3Rpb24tY29sIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgfVxuXG4gICAgLnNlbGVjdC12YXJpYW50LWJ0biB7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICB9XG5cbiAgICAuYWRkLXRvLWNhcnQtYnRuIHtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgbWFyZ2luLXRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIH1cbiAgfVxuXG4gIC5kZXRhaWwtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgICBtYXJnaW46IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICB9XG5cbiAgLmRldGFpbHMtZGVzY3JpcHRpb24td3JhcHBlciB7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XG5cbiAgICAuZGV0YWlscy1kZXNjcmlwdGlvbiB7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gICAgfVxuICB9XG5cbiAgLmRldGFpbC1hbHQtdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay1zaGFkZSk7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICB9XG5cbiAgLnJlbGF0ZWQtcHJvZHVjdHMtd3JhcHBlciB7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XG5cbiAgICAucmVsYXRlZC1wcm9kdWN0cy1saXN0IHtcbiAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgICAgLnJlbGF0ZWQtcHJvZHVjdC1pdGVtIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcblxuICAgICAgICAmOm50aC1jaGlsZChvZGQpIHtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1wYWdlLXJlbGF0ZWQtaXRlbXMtZ3V0dGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZ2UtcmVsYXRlZC1pdGVtcy1ndXR0ZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLml0ZW0taW1hZ2Utd3JhcHBlciB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcblxuICAgICAgICAgIC5pbWFnZS1hbmNob3Ige1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLml0ZW0tZGV0YWlscy13cmFwcGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgIHBhZGRpbmc6IDVweCA1cHggMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLml0ZW0tbmFtZSB7XG4gICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbWluLXdpZHRoOiA5MCU7XG5cbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgICAgICAubmFtZS1hbmNob3Ige1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLml0ZW0tc2FsZS1wcmljZSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcGFnZS1jb2xvcik7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBtaW4td2lkdGg6IDMwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cbi8vIElTU1VFOiAuc3dpcGVyLXBhZ2dpbmF0aW9uIGdldHMgcmVuZGVyZWQgZHluYW1pY2FsbHkuIFRoYXQgcHJldmVudHMgc3R5bGluZyB0aGUgZWxlbWVudHMgd2hlbiB1c2luZyB0aGUgZGVmYXVsdCBBbmd1bGFyIFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbi8vICAgICAgICAoQW5ndWxhciBkb2Vzbid0IGFkZCBhbiAnX25nY29udGVudCcgYXR0cmlidXRlIHRvIHRoZSAuc3dpcGVyLXBhZ2dpbmF0aW9uIGJlY2F1c2UgaXQncyBkeW5hbWljYWxseSByZW5kZXJlZClcbi8vIEZJWDogICBTZWU6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zNjI2NTA3Mi8xMTE2OTU5XG46aG9zdCA6Om5nLWRlZXAgLmRldGFpbHMtc2xpZGVzIHtcbiAgLnN3aXBlci1wYWdpbmF0aW9uIHtcbiAgICBoZWlnaHQ6IHZhcigtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24taGVpZ2h0KTtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICAvLyAuc3dpcGVyLXBhZ2luYXRpb24gaXMgMThweCBoZWlnaHQsIC5zbGlkZS1pbm5lci1yb3cgaGFzIDQwcHggb2YgcGFkZGluZy1ib3R0b20gPT4gYm90dG9tID0gKDQwcHggLSAxOHB4KS8yID0gMTFweFxuICAgIGJvdHRvbTogY2FsYygodmFyKC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1zcGFjZSkgLSB2YXIoLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLWhlaWdodCkgKSAvIDIpO1xuXG4gICAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gICAgICB3aWR0aDogdmFyKC0tcGFnZS1wYWdpbmF0aW9uLWJ1bGxldC1zaXplKTtcbiAgICAgIGhlaWdodDogdmFyKC0tcGFnZS1wYWdpbmF0aW9uLWJ1bGxldC1zaXplKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gQWxlcnRzIGFuZCBpbiBnZW5lcmFsIGFsbCBvdmVybGF5cyBhcmUgYXR0YWNoZWQgdG8gdGhlIGJvZHkgb3IgaW9uLWFwcCBkaXJlY3RseVxuLy8gV2UgbmVlZCB0byB1c2UgOjpuZy1kZWVwIHRvIGFjY2VzcyBpdCBmcm9tIGhlcmVcbjo6bmctZGVlcCAudmFyaWFudC1hbGVydCB7XG4gIEBpbmNsdWRlIHNlbGVjdC1hbGVydCgpO1xuXG4gIC8vIFZhcmlhYmxlcyBzaG91bGQgYmUgaW4gYSBkZWVwZXIgc2VsZWN0b3Igb3IgYWZ0ZXIgdGhlIG1peGluIGluY2x1ZGUgdG8gb3ZlcnJpZGUgZGVmYXVsdCB2YWx1ZXNcbiAgLS1zZWxlY3QtYWxlcnQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIC0tc2VsZWN0LWFsZXJ0LWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLS1zZWxlY3QtYWxlcnQtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xuXG4gIC5hbGVydC1tZXNzYWdlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iLCJAbWl4aW4gc2VsZWN0LWFsZXJ0KCkge1xuICAvLyBEZWZhdWx0IHZhbHVlc1xuICAtLXNlbGVjdC1hbGVydC1jb2xvcjogIzAwMDtcbiAgLS1zZWxlY3QtYWxlcnQtYmFja2dyb3VuZDogI0ZGRjtcbiAgLS1zZWxlY3QtYWxlcnQtbWFyZ2luOiAxNnB4O1xuXG4gIC5hbGVydC1oZWFkIHtcbiAgICBwYWRkaW5nLXRvcDogY2FsYygodmFyKC0tc2VsZWN0LWFsZXJ0LW1hcmdpbikgLyA0KSAqIDMpO1xuICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKCh2YXIoLS1zZWxlY3QtYWxlcnQtbWFyZ2luKSAvIDQpICogMyk7XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLXNlbGVjdC1hbGVydC1tYXJnaW4pO1xuICAgIHBhZGRpbmctaW5saW5lLWVuZDogdmFyKC0tc2VsZWN0LWFsZXJ0LW1hcmdpbik7XG4gIH1cblxuICAuYWxlcnQtdGl0bGUge1xuICAgIGNvbG9yOiB2YXIoLS1zZWxlY3QtYWxlcnQtY29sb3IpO1xuICB9XG5cbiAgLmFsZXJ0LWhlYWQsXG4gIC5hbGVydC1tZXNzYWdlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWxlY3QtYWxlcnQtYmFja2dyb3VuZCk7XG4gIH1cblxuICAvLyBpT1Mgc3R5bGVzXG4gIC5hbGVydC13cmFwcGVyLnNjLWlvbi1hbGVydC1pb3Mge1xuICAgIC5hbGVydC10aXRsZSB7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICB9XG4gIH1cblxuICAvLyBNYXRlcmlhbCBzdHlsZXNcbiAgLmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LW1kIHtcbiAgICAuYWxlcnQtdGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB9XG5cbiAgICAuYWxlcnQtYnV0dG9uIHtcbiAgICAgIC8vIFZhbHVlcyB0YWtlbiBmcm9tIElvbmljIHNtYWxsIGJ1dHRvbiBwcmVzZXRcbiAgICAgIC0tcGFkZGluZy10b3A6IDA7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDAuOWVtO1xuICAgICAgLS1wYWRkaW5nLWVuZDogMC45ZW07XG4gICAgICAtLXBhZGRpbmctYm90dG9tOiAwO1xuXG4gICAgICBoZWlnaHQ6IDIuMWVtO1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgIH1cbiAgfVxufVxuIl19 */", "[_nghost-%COMP%] {\n  --shell-color: #cb328f;\n  --shell-color-rgb: 203,50,143;\n}\n\napp-image-shell.showcase-image[_ngcontent-%COMP%] {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25);\n}\n\n.details-name[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-animation-background: rgba(var(--shell-color-rgb), .25);\n  --text-shell-animation-color: rgba(var(--shell-color-rgb), .35);\n  --text-shell-line-height: 18px;\n  max-width: 60%;\n}\n\n.details-name[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: inherit;\n}\n\n.details-brand[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-animation-background: rgba(var(--shell-color-rgb), .20);\n  --text-shell-animation-color: rgba(var(--shell-color-rgb), .30);\n  --text-shell-line-height: 14px;\n  max-width: 40%;\n}\n\n.details-brand[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: inherit;\n}\n\n.details-price[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-animation-background: rgba(var(--shell-color-rgb), .10);\n  --text-shell-animation-color: rgba(var(--shell-color-rgb), .20);\n  --text-shell-line-height: 18px;\n  width: 50px;\n}\n\n.details-price[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  width: inherit;\n}\n\n.details-sale-price[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-animation-background: rgba(var(--shell-color-rgb), .10);\n  --text-shell-animation-color: rgba(var(--shell-color-rgb), .20);\n  --text-shell-line-height: 18px;\n  width: 50px;\n}\n\n.details-sale-price[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  width: inherit;\n}\n\n.details-description[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-animation-background: rgba(var(--shell-color-rgb), .10);\n  --text-shell-animation-color: rgba(var(--shell-color-rgb), .20);\n  --text-shell-line-height: 14px;\n}\n\n.details-description.product-code[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  max-width: 40%;\n}\n\n.details-description.product-code[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: inherit;\n}\n\napp-image-shell.related-product-image[_ngcontent-%COMP%] {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25);\n}\n\n.item-name[_ngcontent-%COMP%]   app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-animation-background: rgba(var(--shell-color-rgb), .25);\n  --text-shell-animation-color: rgba(var(--shell-color-rgb), .35);\n  --text-shell-line-height: 14px;\n}\n\n.item-sale-price[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-animation-background: rgba(var(--shell-color-rgb), .20);\n  --text-shell-animation-color: rgba(var(--shell-color-rgb), .30);\n  --text-shell-line-height: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFzaGlvbi9kZXRhaWxzL3N0eWxlcy9mYXNoaW9uLWRldGFpbHMuc2hlbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHNCQUFBO0VBQ0EsNkJBQUE7QUFERjs7QUFXQTtFQUNFLG1FQUFBO0VBQ0EsOERBQUE7QUFSRjs7QUFXQTtFQUNFLG9FQUFBO0VBQ0EsK0RBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUFSRjs7QUFVRTtFQUNFLGtCQUFBO0FBUko7O0FBWUE7RUFDRSxvRUFBQTtFQUNBLCtEQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FBVEY7O0FBV0U7RUFDRSxrQkFBQTtBQVRKOztBQWFBO0VBQ0Usb0VBQUE7RUFDQSwrREFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBQVZGOztBQVlFO0VBQ0UsY0FBQTtBQVZKOztBQWNBO0VBQ0Usb0VBQUE7RUFDQSwrREFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBQVhGOztBQWFFO0VBQ0UsY0FBQTtBQVhKOztBQWVBO0VBQ0Usb0VBQUE7RUFDQSwrREFBQTtFQUNBLDhCQUFBO0FBWkY7O0FBZUE7RUFDRSxjQUFBO0FBWkY7O0FBY0U7RUFDRSxrQkFBQTtBQVpKOztBQWdCQTtFQUNFLG1FQUFBO0VBQ0EsOERBQUE7QUFiRjs7QUFnQkE7RUFDRSxvRUFBQTtFQUNBLCtEQUFBO0VBQ0EsOEJBQUE7QUFiRjs7QUFnQkE7RUFDRSxvRUFBQTtFQUNBLCtEQUFBO0VBQ0EsOEJBQUE7QUFiRiIsImZpbGUiOiJzcmMvYXBwL2Zhc2hpb24vZGV0YWlscy9zdHlsZXMvZmFzaGlvbi1kZXRhaWxzLnNoZWxsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDdXN0b20gdmFyaWFibGVzXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbjpob3N0IHtcbiAgLS1zaGVsbC1jb2xvcjogI2NiMzI4ZjtcbiAgLS1zaGVsbC1jb2xvci1yZ2I6IDIwMyw1MCwxNDM7XG59XG5cbi8vIFlvdSBjYW4gYWxzbyBhcHBseSBzaGVlbCBzdHlsZXMgdG8gdGhlIGVudGlyZSBwYWdlXG46aG9zdCguaXMtc2hlbGwpIHtcbiAgLy8gaW9uLWNvbnRlbnQge1xuICAvLyAgIG9wYWNpdHk6IDAuODtcbiAgLy8gfVxufVxuXG5hcHAtaW1hZ2Utc2hlbGwuc2hvd2Nhc2UtaW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjI1KTtcbn1cblxuLmRldGFpbHMtbmFtZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yNSk7XG4gIC0tdGV4dC1zaGVsbC1hbmltYXRpb24tY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjM1KTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxOHB4O1xuICBtYXgtd2lkdGg6IDYwJTtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIH1cbn1cblxuLmRldGFpbHMtYnJhbmQgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1hbmltYXRpb24tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjApO1xuICAtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4zMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWF4LXdpZHRoOiA0MCU7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICB9XG59XG5cbi5kZXRhaWxzLXByaWNlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE4cHg7XG4gIHdpZHRoOiA1MHB4O1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIHdpZHRoOiBpbmhlcml0O1xuICB9XG59XG5cbi5kZXRhaWxzLXNhbGUtcHJpY2UgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1hbmltYXRpb24tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMThweDtcbiAgd2lkdGg6IDUwcHg7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgd2lkdGg6IGluaGVyaXQ7XG4gIH1cbn1cblxuLmRldGFpbHMtZGVzY3JpcHRpb24gPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1hbmltYXRpb24tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbn1cblxuLmRldGFpbHMtZGVzY3JpcHRpb24ucHJvZHVjdC1jb2RlID4gYXBwLXRleHQtc2hlbGwge1xuICBtYXgtd2lkdGg6IDQwJTtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIH1cbn1cblxuYXBwLWltYWdlLXNoZWxsLnJlbGF0ZWQtcHJvZHVjdC1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjUpO1xufVxuXG4uaXRlbS1uYW1lIGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yNSk7XG4gIC0tdGV4dC1zaGVsbC1hbmltYXRpb24tY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjM1KTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xufVxuXG4uaXRlbS1zYWxlLXByaWNlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjIwKTtcbiAgLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMzApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE2cHg7XG59XG4iXX0= */", "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zhc2hpb24vZGV0YWlscy9zdHlsZXMvZmFzaGlvbi1kZXRhaWxzLmlvcy5zY3NzIn0= */", "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zhc2hpb24vZGV0YWlscy9zdHlsZXMvZmFzaGlvbi1kZXRhaWxzLm1kLnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FashionDetailsPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-fashion-details',
                templateUrl: './fashion-details.page.html',
                styleUrls: [
                    './styles/fashion-details.page.scss',
                    './styles/fashion-details.shell.scss',
                    './styles/fashion-details.ios.scss',
                    './styles/fashion-details.md.scss'
                ]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }]; }, { isShell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.is-shell']
        }] }); })();


/***/ }),

/***/ "8DSg":
/*!***********************************************************!*\
  !*** ./src/app/fashion/details/fashion-details.module.ts ***!
  \***********************************************************/
/*! exports provided: FashionDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FashionDetailsPageModule", function() { return FashionDetailsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");
/* harmony import */ var _fashion_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fashion.service */ "/pNQ");
/* harmony import */ var _fashion_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fashion-details.page */ "/EjV");
/* harmony import */ var _fashion_details_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fashion-details.resolver */ "jtlD");










const routes = [
    {
        path: '',
        component: _fashion_details_page__WEBPACK_IMPORTED_MODULE_6__["FashionDetailsPage"],
        resolve: {
            data: _fashion_details_resolver__WEBPACK_IMPORTED_MODULE_7__["FashionDetailsResolver"]
        }
    }
];
class FashionDetailsPageModule {
}
FashionDetailsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FashionDetailsPageModule });
FashionDetailsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FashionDetailsPageModule_Factory(t) { return new (t || FashionDetailsPageModule)(); }, providers: [
        _fashion_details_resolver__WEBPACK_IMPORTED_MODULE_7__["FashionDetailsResolver"],
        _fashion_service__WEBPACK_IMPORTED_MODULE_5__["FashionService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FashionDetailsPageModule, { declarations: [_fashion_details_page__WEBPACK_IMPORTED_MODULE_6__["FashionDetailsPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FashionDetailsPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                    _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"]
                ],
                declarations: [
                    _fashion_details_page__WEBPACK_IMPORTED_MODULE_6__["FashionDetailsPage"]
                ],
                providers: [
                    _fashion_details_resolver__WEBPACK_IMPORTED_MODULE_7__["FashionDetailsResolver"],
                    _fashion_service__WEBPACK_IMPORTED_MODULE_5__["FashionService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "jtlD":
/*!*************************************************************!*\
  !*** ./src/app/fashion/details/fashion-details.resolver.ts ***!
  \*************************************************************/
/*! exports provided: FashionDetailsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FashionDetailsResolver", function() { return FashionDetailsResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fashion_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fashion.service */ "/pNQ");




class FashionDetailsResolver {
    constructor(fashionService) {
        this.fashionService = fashionService;
    }
    resolve() {
        const dataSource = this.fashionService.getDetailsDataSource();
        const dataStore = this.fashionService.getDetailsStore(dataSource);
        return dataStore;
    }
}
FashionDetailsResolver.ɵfac = function FashionDetailsResolver_Factory(t) { return new (t || FashionDetailsResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_fashion_service__WEBPACK_IMPORTED_MODULE_1__["FashionService"])); };
FashionDetailsResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FashionDetailsResolver, factory: FashionDetailsResolver.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FashionDetailsResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _fashion_service__WEBPACK_IMPORTED_MODULE_1__["FashionService"] }]; }, null); })();


/***/ })

};;
//# sourceMappingURL=fashion-details-fashion-details-module.js.map