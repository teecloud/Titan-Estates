"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_firebase_auth_profile_firebase-profile_module_ts"],{

/***/ 40703:
/*!******************************************************************!*\
  !*** ./src/app/firebase/auth/profile/firebase-profile.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirebaseProfilePageModule": () => (/* binding */ FirebaseProfilePageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth-guard */ 83200);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/components.module */ 45642);
/* harmony import */ var _firebase_profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./firebase-profile.page */ 68518);
/* harmony import */ var _firebase_profile_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./firebase-profile.resolver */ 28714);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);










const redirectUnauthorizedToLogin = () => (0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__.redirectUnauthorizedTo)(['/firebase/auth/sign-in']);
const routes = [{
  path: '',
  component: _firebase_profile_page__WEBPACK_IMPORTED_MODULE_1__.FirebaseProfilePage,
  resolve: {
    data: _firebase_profile_resolver__WEBPACK_IMPORTED_MODULE_2__.FirebaseProfileResolver
  },
  ...(0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__.canActivate)(redirectUnauthorizedToLogin)
}];
class FirebaseProfilePageModule {
  static #_ = this.ɵfac = function FirebaseProfilePageModule_Factory(t) {
    return new (t || FirebaseProfilePageModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: FirebaseProfilePageModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    providers: [_firebase_profile_resolver__WEBPACK_IMPORTED_MODULE_2__.FirebaseProfileResolver],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes), _components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](FirebaseProfilePageModule, {
    declarations: [_firebase_profile_page__WEBPACK_IMPORTED_MODULE_1__.FirebaseProfilePage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, _components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule]
  });
})();

/***/ }),

/***/ 68518:
/*!****************************************************************!*\
  !*** ./src/app/firebase/auth/profile/firebase-profile.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirebaseProfilePage": () => (/* binding */ FirebaseProfilePage)
/* harmony export */ });
/* harmony import */ var _Users_teeicloud_TitanEstates_Titan_Estates_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 83918);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var _utils_resolver_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/resolver-helper */ 85971);
/* harmony import */ var _firebase_profile_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./firebase-profile.model */ 11198);
/* harmony import */ var _firebase_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase-auth.service */ 43108);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shell/aspect-ratio/aspect-ratio.component */ 89330);
/* harmony import */ var _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shell/image-shell/image-shell.component */ 71408);
/* harmony import */ var _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shell/text-shell/text-shell.component */ 94840);













const _c0 = function () {
  return {
    w: 1,
    h: 1
  };
};
class FirebaseProfilePage {
  constructor(router, route, authService) {
    this.router = router;
    this.route = route;
    this.authService = authService;
  }
  get isShell() {
    return this.user && this.user.isShell ? true : false;
  }
  ngOnInit() {
    this.subscriptions = this.route.data.pipe(
    // ? Extract data for this page
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(resolvedRouteData => {
      return _utils_resolver_helper__WEBPACK_IMPORTED_MODULE_1__.ResolverHelper.extractData(resolvedRouteData.data, _firebase_profile_model__WEBPACK_IMPORTED_MODULE_2__.FirebaseProfileModel);
    })).subscribe({
      next: state => {
        this.user = state;
      },
      error: error => console.log(error)
    });
  }
  signOut() {
    var _this = this;
    return (0,_Users_teeicloud_TitanEstates_Titan_Estates_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // * 1. Sign out on the native layer
        yield _this.authService.signOut().then(result => {
          // ? Sign-out successful
          // ? Replace state as we are no longer authorized to access profile page
          _this.router.navigate(['firebase/auth/sign-in'], {
            replaceUrl: true
          });
        }).catch(error => {
          console.log('userProfile - signOut() - error', error);
        });
      } finally {
        console.log('userProfile - signOut() - finally');
      }
    })();
  }
  // ? NOTE: Ionic only calls ngOnDestroy if the page was popped (ex: when navigating back)
  // ? Since ngOnDestroy might not fire when you navigate from the current page, use ionViewWillLeave to cleanup Subscriptions
  ionViewWillLeave() {
    this.subscriptions.unsubscribe();
  }
  static #_ = this.ɵfac = function FirebaseProfilePage_Factory(t) {
    return new (t || FirebaseProfilePage)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_firebase_auth_service__WEBPACK_IMPORTED_MODULE_3__.FirebaseAuthService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: FirebaseProfilePage,
    selectors: [["app-firebase-profile"]],
    hostVars: 2,
    hostBindings: function FirebaseProfilePage_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("is-shell", ctx.isShell);
      }
    },
    decls: 37,
    vars: 11,
    consts: [[1, "ion-no-border"], ["slot", "start"], ["defaultHref", "app/categories"], [1, "user-content"], [1, "ion-no-padding"], ["animation", "spinner", 1, "user-image", "add-overlay", 3, "display", "src", "alt"], [3, "ratio"], [1, "user-details"], [1, "ion-no-padding", "details-wrapper"], [1, "user-name"], [3, "data"], ["name", "checkmark-circle", "color", "bright-pink"], [1, "user-role"], [1, "user-description"], ["lines", "3", 3, "data"], [1, "user-preferences-wrapper"], ["size", "12"], [1, "preference-name"], [1, "preference-value"], ["expand", "block", "fill", "outline", "color", "bright-blue", 1, "sign-out-btn", 3, "click"]],
    template: function FirebaseProfilePage_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "ion-content", 3)(5, "ion-row")(6, "ion-col", 4)(7, "app-image-shell", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "app-aspect-ratio", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "ion-row", 7)(10, "ion-col", 8)(11, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "app-text-shell", 10)(13, "ion-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "app-text-shell", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "app-text-shell", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "ion-row", 15)(19, "ion-col", 16)(20, "h4", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "Mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](23, "app-text-shell", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "ion-col", 16)(25, "h4", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](28, "app-text-shell", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "ion-col", 16)(30, "h4", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31, "Auth Provider");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](33, "app-text-shell", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "ion-col", 16)(35, "ion-button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FirebaseProfilePage_Template_ion_button_click_35_listener() {
          return ctx.signOut();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](36, "Sign out");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("display", "cover")("src", (tmp_1_0 = ctx.user == null ? null : ctx.user.image) !== null && tmp_1_0 !== undefined ? tmp_1_0 : "./assets/sample-images/avatar.png")("alt", "item image");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("data", ctx.user == null ? null : ctx.user.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("data", ctx.user == null ? null : ctx.user.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("data", ctx.user == null ? null : ctx.user.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("data", ctx.user == null ? null : ctx.user.phoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("data", ctx.user == null ? null : ctx.user.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("data", ctx.user == null ? null : ctx.user.provider);
      }
    },
    dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonBackButtonDelegate, _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_4__.AspectRatioComponent, _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_5__.ImageShellComponent, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_6__.TextShellComponent],
    styles: ["[_nghost-%COMP%] {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background-shade);\n  --ion-color-bright-blue: #001CFF;\n  --ion-color-bright-blue-rgb: 0,28,255;\n  --ion-color-bright-blue-contrast: #ffffff;\n  --ion-color-bright-blue-contrast-rgb: 255,255,255;\n  --ion-color-bright-blue-shade: #0019e0;\n  --ion-color-bright-blue-tint: #1a33ff;\n  --ion-color-bright-pink: #FF0DCB;\n  --ion-color-bright-pink-rgb: 255,13,203;\n  --ion-color-bright-pink-contrast: #ffffff;\n  --ion-color-bright-pink-contrast-rgb: 255,255,255;\n  --ion-color-bright-pink-shade: #e00bb3;\n  --ion-color-bright-pink-tint: #ff25d0;\n}\n[_nghost-%COMP%]   .ion-color-bright-blue[_ngcontent-%COMP%] {\n  --ion-color-base: var(--ion-color-bright-blue) !important;\n  --ion-color-base-rgb: var(--ion-color-bright-blue-rgb) !important;\n  --ion-color-contrast: var(--ion-color-bright-blue-contrast) !important;\n  --ion-color-contrast-rgb: var(--ion-color-bright-blue-contrast-rgb) !important;\n  --ion-color-shade: var(--ion-color-bright-blue-shade) !important;\n  --ion-color-tint: var(--ion-color-bright-blue-tint) !important;\n}\n[_nghost-%COMP%]   .ion-color-bright-pink[_ngcontent-%COMP%] {\n  --ion-color-base: var(--ion-color-bright-pink) !important;\n  --ion-color-base-rgb: var(--ion-color-bright-pink-rgb) !important;\n  --ion-color-contrast: var(--ion-color-bright-pink-contrast) !important;\n  --ion-color-contrast-rgb: var(--ion-color-bright-pink-contrast-rgb) !important;\n  --ion-color-shade: var(--ion-color-bright-pink-shade) !important;\n  --ion-color-tint: var(--ion-color-bright-pink-tint) !important;\n}\n\nion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --ion-toolbar-background: transparent;\n  --ion-toolbar-color: var(--ion-color-lightest);\n}\n\nion-content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n}\n\n.user-content[_ngcontent-%COMP%] {\n  --background: var(--page-background);\n}\n.user-content[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  margin-inline-start: var(--page-margin);\n  margin-inline-end: var(--page-margin);\n  padding: var(--page-margin);\n  background-color: var(--ion-color-lightest);\n  border-radius: calc(var(--app-broad-radius) * 2);\n  text-align: center;\n  margin-top: calc(var(--page-margin) * -4);\n  box-shadow: 0px 10px 20px rgba(var(--ion-color-dark-rgb), 0.15), 0px 3px 6px rgba(var(--ion-color-dark-rgb), 0.1);\n}\n.user-content[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%] {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.user-content[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 22px;\n  margin-top: 0px;\n  margin-bottom: calc(var(--page-margin) / 2);\n  color: var(--ion-color-bright-blue);\n}\n.user-content[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-inline-start: calc(var(--page-margin) / 2);\n  font-size: 18px;\n}\n.user-content[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-role[_ngcontent-%COMP%] {\n  display: block;\n  min-width: 40%;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--ion-color-medium-shade);\n}\n.user-content[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-description[_ngcontent-%COMP%] {\n  min-width: 100%;\n  margin-top: var(--page-margin);\n  margin-bottom: 0px;\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n}\n.user-content[_ngcontent-%COMP%]   .user-preferences-wrapper[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n  padding: var(--page-margin);\n}\n.user-content[_ngcontent-%COMP%]   .user-preferences-wrapper[_ngcontent-%COMP%]   .preference-name[_ngcontent-%COMP%] {\n  margin: 0px 0px 5px;\n  font-size: 16px;\n  color: var(--ion-color-bright-pink);\n}\n.user-content[_ngcontent-%COMP%]   .user-preferences-wrapper[_ngcontent-%COMP%]   .preference-value[_ngcontent-%COMP%] {\n  margin: 0px 0px calc(var(--page-margin) / 2);\n  font-size: 14px;\n  line-height: 1.4;\n  color: var(--ion-color-dark-tint);\n}\n.user-content[_ngcontent-%COMP%]   .sign-out-btn[_ngcontent-%COMP%] {\n  margin: 0px;\n  margin-top: calc(var(--page-margin) * 4);\n  color: #001CFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpcmViYXNlLXByb2ZpbGUucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vVGl0YW4lMjBFc3RhdGVzL3NyYy9hcHAvZmlyZWJhc2UvYXV0aC9wcm9maWxlL3N0eWxlcy9maXJlYmFzZS1wcm9maWxlLnBhZ2Uuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL3RoZW1lL21peGlucy9pb24tY29sb3Iuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLHNDQUFBO0VBQ0EsOENBQUE7RUFJRSxnQ0FBQTtFQUNBLHFDQUFBO0VBQ0EseUNBQUE7RUFDQSxpREFBQTtFQUNBLHNDQUFBO0VBQ0EscUNBQUE7RUFJQSxnQ0FBQTtFQUNBLHVDQUFBO0VBQ0EseUNBQUE7RUFDQSxpREFBQTtFQUNBLHNDQUFBO0VBQ0EscUNBQUE7QUNUSjtBQ1pFO0VBQ0UseURBQUE7RUFDQSxpRUFBQTtFQUNBLHNFQUFBO0VBQ0EsOEVBQUE7RUFDQSxnRUFBQTtFQUNBLDhEQUFBO0FEY0o7QUNwQkU7RUFDRSx5REFBQTtFQUNBLGlFQUFBO0VBQ0Esc0VBQUE7RUFDQSw4RUFBQTtFQUNBLGdFQUFBO0VBQ0EsOERBQUE7QURzQko7O0FEREU7RUFDRSxxQ0FBQTtFQUNBLDhDQUFBO0FDSUo7O0FEQUE7RUFFRSxrQkFBQTtFQUNBLE1BQUE7QUNFRjs7QURDQTtFQUNFLG9DQUFBO0FDRUY7QURBRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHVDQUFBO0VBQ0EscUNBQUE7RUFDQSwyQkFBQTtFQUNBLDJDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0VBRUEsaUhBQUE7QUNDSjtBREtJO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0hOO0FETUk7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQ0FBQTtBQ0pOO0FETU07RUFDRSxpREFBQTtFQUNBLGVBQUE7QUNKUjtBRFFJO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtBQ05OO0FEU0k7RUFDRSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQ0FBQTtBQ1BOO0FEV0U7RUFDRSw4QkFBQTtFQUVBLDJCQUFBO0FDVko7QURZSTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0FDVk47QURhSTtFQUNFLDRDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7QUNYTjtBRGVFO0VBQ0UsV0FBQTtFQUNBLHdDQUFBO0VBQ0EsY0FBQTtBQ2JKIiwiZmlsZSI6ImZpcmViYXNlLXByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInRoZW1lL21peGlucy9pb24tY29sb3JcIjtcblxuLy8gQ3VzdG9tIHZhcmlhYmxlc1xuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG46aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1icm9hZC1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xuXG4gIC8vIEFkZCBjdXN0b20gY29sb3JzIHRvIHVzZSB3aXRoIFtjb2xvcl0gcHJvcGVydHlcbiAgQGluY2x1ZGUgaW9uLWNvbG9yKCdicmlnaHQtYmx1ZScpIHtcbiAgICAtLWlvbi1jb2xvci1icmlnaHQtYmx1ZTogIzAwMUNGRjtcbiAgICAtLWlvbi1jb2xvci1icmlnaHQtYmx1ZS1yZ2I6IDAsMjgsMjU1O1xuICAgIC0taW9uLWNvbG9yLWJyaWdodC1ibHVlLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAgIC0taW9uLWNvbG9yLWJyaWdodC1ibHVlLWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gICAgLS1pb24tY29sb3ItYnJpZ2h0LWJsdWUtc2hhZGU6ICMwMDE5ZTA7XG4gICAgLS1pb24tY29sb3ItYnJpZ2h0LWJsdWUtdGludDogIzFhMzNmZjtcbiAgfVxuXG4gIEBpbmNsdWRlIGlvbi1jb2xvcignYnJpZ2h0LXBpbmsnKSB7XG4gICAgLS1pb24tY29sb3ItYnJpZ2h0LXBpbms6ICNGRjBEQ0I7XG4gICAgLS1pb24tY29sb3ItYnJpZ2h0LXBpbmstcmdiOiAyNTUsMTMsMjAzO1xuICAgIC0taW9uLWNvbG9yLWJyaWdodC1waW5rLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAgIC0taW9uLWNvbG9yLWJyaWdodC1waW5rLWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gICAgLS1pb24tY29sb3ItYnJpZ2h0LXBpbmstc2hhZGU6ICNlMDBiYjM7XG4gICAgLS1pb24tY29sb3ItYnJpZ2h0LXBpbmstdGludDogI2ZmMjVkMDtcbiAgfVxufVxuXG4vLyBOb3RlOiAgQWxsIHRoZSBDU1MgdmFyaWFibGVzIGRlZmluZWQgYmVsb3cgYXJlIG92ZXJyaWRlcyBvZiBJb25pYyBlbGVtZW50cyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbmlvbi1oZWFkZXIge1xuICBpb24tdG9vbGJhciB7XG4gICAgLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLWlvbi10b29sYmFyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICB9XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLy8gVG8gZ2V0IHRoZSBpb24tY29udGVudCBiZWhpbmQgdGhlIGlvbi1oZWFkZXJcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG59XG5cbi51c2VyLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG5cbiAgLnVzZXItZGV0YWlscyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDI7XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gICAgYm9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1hcHAtYnJvYWQtcmFkaXVzKSAqIDIpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIC00KTtcbiAgICAvLyB6LTNcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCAyMHB4IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgMC4xNSksXG4gICAgICAgICAgICAgICAgMHB4IDNweCA2cHggcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAwLjEwKTtcbiAgICAvLyB6LTRcbiAgICAvLyBib3gtc2hhZG93OiAwcHggMTVweCAyNXB4IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgMC4xNSksXG4gICAgLy8gICAgICAgICAgICAgMHB4IDVweCAxMHB4IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgMC4wNSk7XG5cbiAgICAuZGV0YWlscy13cmFwcGVyIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAudXNlci1uYW1lIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1icmlnaHQtYmx1ZSk7XG5cbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgbWFyZ2luLWlubGluZS1zdGFydDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC51c2VyLXJvbGUge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtaW4td2lkdGg6IDQwJTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gICAgfVxuXG4gICAgLnVzZXItZGVzY3JpcHRpb24ge1xuICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLXRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gICAgfVxuICB9XG5cbiAgLnVzZXItcHJlZmVyZW5jZXMtd3JhcHBlciB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pO1xuXG4gICAgLnByZWZlcmVuY2UtbmFtZSB7XG4gICAgICBtYXJnaW46IDBweCAwcHggNXB4O1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1icmlnaHQtcGluayk7XG4gICAgfVxuXG4gICAgLnByZWZlcmVuY2UtdmFsdWUge1xuICAgICAgbWFyZ2luOiAwcHggMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBsaW5lLWhlaWdodDogMS40O1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICAgIH1cbiAgfVxuXG4gIC5zaWduLW91dC1idG4ge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogNCk7XG4gICAgY29sb3I6ICMwMDFDRkY7XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWJyb2FkLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG4gIC0taW9uLWNvbG9yLWJyaWdodC1ibHVlOiAjMDAxQ0ZGO1xuICAtLWlvbi1jb2xvci1icmlnaHQtYmx1ZS1yZ2I6IDAsMjgsMjU1O1xuICAtLWlvbi1jb2xvci1icmlnaHQtYmx1ZS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItYnJpZ2h0LWJsdWUtY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3ItYnJpZ2h0LWJsdWUtc2hhZGU6ICMwMDE5ZTA7XG4gIC0taW9uLWNvbG9yLWJyaWdodC1ibHVlLXRpbnQ6ICMxYTMzZmY7XG4gIC0taW9uLWNvbG9yLWJyaWdodC1waW5rOiAjRkYwRENCO1xuICAtLWlvbi1jb2xvci1icmlnaHQtcGluay1yZ2I6IDI1NSwxMywyMDM7XG4gIC0taW9uLWNvbG9yLWJyaWdodC1waW5rLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1icmlnaHQtcGluay1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWlvbi1jb2xvci1icmlnaHQtcGluay1zaGFkZTogI2UwMGJiMztcbiAgLS1pb24tY29sb3ItYnJpZ2h0LXBpbmstdGludDogI2ZmMjVkMDtcbn1cbjpob3N0IC5pb24tY29sb3ItYnJpZ2h0LWJsdWUge1xuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItYnJpZ2h0LWJsdWUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItYnJpZ2h0LWJsdWUtcmdiKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLWJyaWdodC1ibHVlLWNvbnRyYXN0KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1icmlnaHQtYmx1ZS1jb250cmFzdC1yZ2IpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItYnJpZ2h0LWJsdWUtc2hhZGUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1icmlnaHQtYmx1ZS10aW50KSAhaW1wb3J0YW50O1xufVxuOmhvc3QgLmlvbi1jb2xvci1icmlnaHQtcGluayB7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1icmlnaHQtcGluaykgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1icmlnaHQtcGluay1yZ2IpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItYnJpZ2h0LXBpbmstY29udHJhc3QpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLWJyaWdodC1waW5rLWNvbnRyYXN0LXJnYikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1icmlnaHQtcGluay1zaGFkZSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLWJyaWdodC1waW5rLXRpbnQpICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIge1xuICAtLWlvbi10b29sYmFyLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWlvbi10b29sYmFyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xufVxuXG5pb24tY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xufVxuXG4udXNlci1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xufVxuLnVzZXItY29udGVudCAudXNlci1kZXRhaWxzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgYm9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1hcHAtYnJvYWQtcmFkaXVzKSAqIDIpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogLTQpO1xuICBib3gtc2hhZG93OiAwcHggMTBweCAyMHB4IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgMC4xNSksIDBweCAzcHggNnB4IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgMC4xKTtcbn1cbi51c2VyLWNvbnRlbnQgLnVzZXItZGV0YWlscyAuZGV0YWlscy13cmFwcGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnVzZXItY29udGVudCAudXNlci1kZXRhaWxzIC51c2VyLW5hbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItYnJpZ2h0LWJsdWUpO1xufVxuLnVzZXItY29udGVudCAudXNlci1kZXRhaWxzIC51c2VyLW5hbWUgaW9uLWljb24ge1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBmb250LXNpemU6IDE4cHg7XG59XG4udXNlci1jb250ZW50IC51c2VyLWRldGFpbHMgLnVzZXItcm9sZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtaW4td2lkdGg6IDQwJTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG59XG4udXNlci1jb250ZW50IC51c2VyLWRldGFpbHMgLnVzZXItZGVzY3JpcHRpb24ge1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xufVxuLnVzZXItY29udGVudCAudXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4udXNlci1jb250ZW50IC51c2VyLXByZWZlcmVuY2VzLXdyYXBwZXIgLnByZWZlcmVuY2UtbmFtZSB7XG4gIG1hcmdpbjogMHB4IDBweCA1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1icmlnaHQtcGluayk7XG59XG4udXNlci1jb250ZW50IC51c2VyLXByZWZlcmVuY2VzLXdyYXBwZXIgLnByZWZlcmVuY2UtdmFsdWUge1xuICBtYXJnaW46IDBweCAwcHggY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS40O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG59XG4udXNlci1jb250ZW50IC5zaWduLW91dC1idG4ge1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiA0KTtcbiAgY29sb3I6ICMwMDFDRkY7XG59IiwiQG1peGluIGlvbi1jb2xvcigkY29sb3IpIHtcbiAgQGNvbnRlbnQ7XG5cbiAgLmlvbi1jb2xvci0jeyRjb2xvcn0ge1xuICAgIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvcn0pICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvcn0tcmdiKSAhaW1wb3J0YW50O1xuICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItI3skY29sb3J9LWNvbnRyYXN0KSAhaW1wb3J0YW50O1xuICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yfS1jb250cmFzdC1yZ2IpICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvcn0tc2hhZGUpICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yfS10aW50KSAhaW1wb3J0YW50O1xuICB9XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmlyZWJhc2UvYXV0aC9wcm9maWxlL3N0eWxlcy9maXJlYmFzZS1wcm9maWxlLnBhZ2Uuc2NzcyIsIndlYnBhY2s6Ly8uLy4uL1RpdGFuJTIwRXN0YXRlcy9zcmMvYXBwL2ZpcmViYXNlL2F1dGgvcHJvZmlsZS9zdHlsZXMvZmlyZWJhc2UtcHJvZmlsZS5wYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvdGhlbWUvbWl4aW5zL2lvbi1jb2xvci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0Usc0NBQUE7RUFDQSw4Q0FBQTtFQUlFLGdDQUFBO0VBQ0EscUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGlEQUFBO0VBQ0Esc0NBQUE7RUFDQSxxQ0FBQTtFQUlBLGdDQUFBO0VBQ0EsdUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGlEQUFBO0VBQ0Esc0NBQUE7RUFDQSxxQ0FBQTtBQ1RKO0FDWkU7RUFDRSx5REFBQTtFQUNBLGlFQUFBO0VBQ0Esc0VBQUE7RUFDQSw4RUFBQTtFQUNBLGdFQUFBO0VBQ0EsOERBQUE7QURjSjtBQ3BCRTtFQUNFLHlEQUFBO0VBQ0EsaUVBQUE7RUFDQSxzRUFBQTtFQUNBLDhFQUFBO0VBQ0EsZ0VBQUE7RUFDQSw4REFBQTtBRHNCSjs7QURERTtFQUNFLHFDQUFBO0VBQ0EsOENBQUE7QUNJSjs7QURBQTtFQUVFLGtCQUFBO0VBQ0EsTUFBQTtBQ0VGOztBRENBO0VBQ0Usb0NBQUE7QUNFRjtBREFFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsdUNBQUE7RUFDQSxxQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsMkNBQUE7RUFDQSxnREFBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7RUFFQSxpSEFBQTtBQ0NKO0FES0k7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDSE47QURNSTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSwyQ0FBQTtFQUNBLG1DQUFBO0FDSk47QURNTTtFQUNFLGlEQUFBO0VBQ0EsZUFBQTtBQ0pSO0FEUUk7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0FDTk47QURTSTtFQUNFLGVBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0FDUE47QURXRTtFQUNFLDhCQUFBO0VBRUEsMkJBQUE7QUNWSjtBRFlJO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7QUNWTjtBRGFJO0VBQ0UsNENBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtBQ1hOO0FEZUU7RUFDRSxXQUFBO0VBQ0Esd0NBQUE7RUFDQSxjQUFBO0FDYko7QURDQSx3clhBQXdyWCIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ0aGVtZS9taXhpbnMvaW9uLWNvbG9yXCI7XG5cbi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtYnJvYWQtbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcblxuICAvLyBBZGQgY3VzdG9tIGNvbG9ycyB0byB1c2Ugd2l0aCBbY29sb3JdIHByb3BlcnR5XG4gIEBpbmNsdWRlIGlvbi1jb2xvcignYnJpZ2h0LWJsdWUnKSB7XG4gICAgLS1pb24tY29sb3ItYnJpZ2h0LWJsdWU6ICMwMDFDRkY7XG4gICAgLS1pb24tY29sb3ItYnJpZ2h0LWJsdWUtcmdiOiAwLDI4LDI1NTtcbiAgICAtLWlvbi1jb2xvci1icmlnaHQtYmx1ZS1jb250cmFzdDogI2ZmZmZmZjtcbiAgICAtLWlvbi1jb2xvci1icmlnaHQtYmx1ZS1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAgIC0taW9uLWNvbG9yLWJyaWdodC1ibHVlLXNoYWRlOiAjMDAxOWUwO1xuICAgIC0taW9uLWNvbG9yLWJyaWdodC1ibHVlLXRpbnQ6ICMxYTMzZmY7XG4gIH1cblxuICBAaW5jbHVkZSBpb24tY29sb3IoJ2JyaWdodC1waW5rJykge1xuICAgIC0taW9uLWNvbG9yLWJyaWdodC1waW5rOiAjRkYwRENCO1xuICAgIC0taW9uLWNvbG9yLWJyaWdodC1waW5rLXJnYjogMjU1LDEzLDIwMztcbiAgICAtLWlvbi1jb2xvci1icmlnaHQtcGluay1jb250cmFzdDogI2ZmZmZmZjtcbiAgICAtLWlvbi1jb2xvci1icmlnaHQtcGluay1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAgIC0taW9uLWNvbG9yLWJyaWdodC1waW5rLXNoYWRlOiAjZTAwYmIzO1xuICAgIC0taW9uLWNvbG9yLWJyaWdodC1waW5rLXRpbnQ6ICNmZjI1ZDA7XG4gIH1cbn1cblxuLy8gTm90ZTogIEFsbCB0aGUgQ1NTIHZhcmlhYmxlcyBkZWZpbmVkIGJlbG93IGFyZSBvdmVycmlkZXMgb2YgSW9uaWMgZWxlbWVudHMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG5pb24taGVhZGVyIHtcbiAgaW9uLXRvb2xiYXIge1xuICAgIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1pb24tdG9vbGJhci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgfVxufVxuXG5pb24tY29udGVudCB7XG4gIC8vIFRvIGdldCB0aGUgaW9uLWNvbnRlbnQgYmVoaW5kIHRoZSBpb24taGVhZGVyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xufVxuXG4udXNlci1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuXG4gIC51c2VyLWRldGFpbHMge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAyO1xuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICBtYXJnaW4taW5saW5lLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgIGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tYXBwLWJyb2FkLXJhZGl1cykgKiAyKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAtNCk7XG4gICAgLy8gei0zXG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIDAuMTUpLFxuICAgICAgICAgICAgICAgIDBweCAzcHggNnB4IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgMC4xMCk7XG4gICAgLy8gei00XG4gICAgLy8gYm94LXNoYWRvdzogMHB4IDE1cHggMjVweCByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIDAuMTUpLFxuICAgIC8vICAgICAgICAgICAgIDBweCA1cHggMTBweCByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIDAuMDUpO1xuXG4gICAgLmRldGFpbHMtd3JhcHBlciB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLnVzZXItbmFtZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItYnJpZ2h0LWJsdWUpO1xuXG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAudXNlci1yb2xlIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWluLXdpZHRoOiA0MCU7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICAgIH1cblxuICAgIC51c2VyLWRlc2NyaXB0aW9uIHtcbiAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbi10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICAgIH1cbiAgfVxuXG4gIC51c2VyLXByZWZlcmVuY2VzLXdyYXBwZXIge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuICAgIC5wcmVmZXJlbmNlLW5hbWUge1xuICAgICAgbWFyZ2luOiAwcHggMHB4IDVweDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItYnJpZ2h0LXBpbmspO1xuICAgIH1cblxuICAgIC5wcmVmZXJlbmNlLXZhbHVlIHtcbiAgICAgIG1hcmdpbjogMHB4IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgICB9XG4gIH1cblxuICAuc2lnbi1vdXQtYnRuIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDQpO1xuICAgIGNvbG9yOiAjMDAxQ0ZGO1xuICB9XG59XG4iLCI6aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1icm9hZC1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xuICAtLWlvbi1jb2xvci1icmlnaHQtYmx1ZTogIzAwMUNGRjtcbiAgLS1pb24tY29sb3ItYnJpZ2h0LWJsdWUtcmdiOiAwLDI4LDI1NTtcbiAgLS1pb24tY29sb3ItYnJpZ2h0LWJsdWUtY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWJyaWdodC1ibHVlLWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gIC0taW9uLWNvbG9yLWJyaWdodC1ibHVlLXNoYWRlOiAjMDAxOWUwO1xuICAtLWlvbi1jb2xvci1icmlnaHQtYmx1ZS10aW50OiAjMWEzM2ZmO1xuICAtLWlvbi1jb2xvci1icmlnaHQtcGluazogI0ZGMERDQjtcbiAgLS1pb24tY29sb3ItYnJpZ2h0LXBpbmstcmdiOiAyNTUsMTMsMjAzO1xuICAtLWlvbi1jb2xvci1icmlnaHQtcGluay1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItYnJpZ2h0LXBpbmstY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3ItYnJpZ2h0LXBpbmstc2hhZGU6ICNlMDBiYjM7XG4gIC0taW9uLWNvbG9yLWJyaWdodC1waW5rLXRpbnQ6ICNmZjI1ZDA7XG59XG46aG9zdCAuaW9uLWNvbG9yLWJyaWdodC1ibHVlIHtcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLWJyaWdodC1ibHVlKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLWJyaWdodC1ibHVlLXJnYikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1icmlnaHQtYmx1ZS1jb250cmFzdCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItYnJpZ2h0LWJsdWUtY29udHJhc3QtcmdiKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLWJyaWdodC1ibHVlLXNoYWRlKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItYnJpZ2h0LWJsdWUtdGludCkgIWltcG9ydGFudDtcbn1cbjpob3N0IC5pb24tY29sb3ItYnJpZ2h0LXBpbmsge1xuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItYnJpZ2h0LXBpbmspICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItYnJpZ2h0LXBpbmstcmdiKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLWJyaWdodC1waW5rLWNvbnRyYXN0KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1icmlnaHQtcGluay1jb250cmFzdC1yZ2IpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItYnJpZ2h0LXBpbmstc2hhZGUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1icmlnaHQtcGluay10aW50KSAhaW1wb3J0YW50O1xufVxuXG5pb24taGVhZGVyIGlvbi10b29sYmFyIHtcbiAgLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1pb24tdG9vbGJhci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbn1cblxuLnVzZXItY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbn1cbi51c2VyLWNvbnRlbnQgLnVzZXItZGV0YWlscyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgbWFyZ2luLWlubGluZS1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBtYXJnaW4taW5saW5lLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tYXBwLWJyb2FkLXJhZGl1cykgKiAyKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIC00KTtcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIDAuMTUpLCAwcHggM3B4IDZweCByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIDAuMSk7XG59XG4udXNlci1jb250ZW50IC51c2VyLWRldGFpbHMgLmRldGFpbHMtd3JhcHBlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi51c2VyLWNvbnRlbnQgLnVzZXItZGV0YWlscyAudXNlci1uYW1lIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWJyaWdodC1ibHVlKTtcbn1cbi51c2VyLWNvbnRlbnQgLnVzZXItZGV0YWlscyAudXNlci1uYW1lIGlvbi1pY29uIHtcbiAgbWFyZ2luLWlubGluZS1zdGFydDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLnVzZXItY29udGVudCAudXNlci1kZXRhaWxzIC51c2VyLXJvbGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWluLXdpZHRoOiA0MCU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuLnVzZXItY29udGVudCAudXNlci1kZXRhaWxzIC51c2VyLWRlc2NyaXB0aW9uIHtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbn1cbi51c2VyLWNvbnRlbnQgLnVzZXItcHJlZmVyZW5jZXMtd3JhcHBlciB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLnVzZXItY29udGVudCAudXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIC5wcmVmZXJlbmNlLW5hbWUge1xuICBtYXJnaW46IDBweCAwcHggNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItYnJpZ2h0LXBpbmspO1xufVxuLnVzZXItY29udGVudCAudXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIC5wcmVmZXJlbmNlLXZhbHVlIHtcbiAgbWFyZ2luOiAwcHggMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xufVxuLnVzZXItY29udGVudCAuc2lnbi1vdXQtYnRuIHtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogNCk7XG4gIGNvbG9yOiAjMDAxQ0ZGO1xufSIsIkBtaXhpbiBpb24tY29sb3IoJGNvbG9yKSB7XG4gIEBjb250ZW50O1xuXG4gIC5pb24tY29sb3ItI3skY29sb3J9IHtcbiAgICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3J9KSAhaW1wb3J0YW50O1xuICAgIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3J9LXJnYikgIWltcG9ydGFudDtcbiAgICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yfS1jb250cmFzdCkgIWltcG9ydGFudDtcbiAgICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvcn0tY29udHJhc3QtcmdiKSAhaW1wb3J0YW50O1xuICAgIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3J9LXNoYWRlKSAhaW1wb3J0YW50O1xuICAgIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvcn0tdGludCkgIWltcG9ydGFudDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */", "app-image-shell.user-image[_ngcontent-%COMP%] {\n  --image-shell-loading-background: rgba(var(--ion-color-bright-blue-rgb), 0.25);\n  --image-shell-spinner-color: var(--ion-color-bright-blue-tint);\n  --image-shell-border-radius: 0px 0px calc(var(--app-broad-radius) * 2) calc(var(--app-broad-radius) * 2);\n  --image-shell-overlay-background: linear-gradient(180deg, rgba(var(--ion-color-dark-rgb), 1) 0%, rgba(var(--ion-color-dark-rgb), 0.40) 25%, rgba(var(--ion-color-dark-rgb), 0.15) 100%);\n}\n\n.user-name[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-height: 22px;\n  --text-shell-line-color: rgba(var(--ion-color-bright-blue-rgb), 0.20);\n  min-width: 180px;\n}\n.user-name[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  min-width: 0px;\n}\n\n.user-role[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-height: 14px;\n  --text-shell-line-color: rgba(var(--ion-color-bright-blue-rgb), 0.15);\n  max-width: 40%;\n}\n.user-role[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: inherit;\n}\n\n.user-description[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-height: 14px;\n  --text-shell-line-color: rgba(var(--ion-color-bright-blue-rgb), 0.10);\n}\n\n.preference-value[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-height: 14px;\n  --text-shell-line-color: rgba(var(--ion-color-bright-pink-rgb), 0.10);\n  max-width: 40%;\n}\n.preference-value[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpcmViYXNlLXByb2ZpbGUuc2hlbGwuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL1RpdGFuJTIwRXN0YXRlcy9zcmMvYXBwL2ZpcmViYXNlL2F1dGgvcHJvZmlsZS9zdHlsZXMvZmlyZWJhc2UtcHJvZmlsZS5zaGVsbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEVBQUE7RUFDQSw4REFBQTtFQUNBLHdHQUFBO0VBQ0EsdUxBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0VBQ0EscUVBQUE7RUFDQSxnQkFBQTtBQ0NGO0FEQ0U7RUFDRSxjQUFBO0FDQ0o7O0FER0E7RUFDRSw4QkFBQTtFQUNBLHFFQUFBO0VBQ0EsY0FBQTtBQ0FGO0FERUU7RUFDRSxrQkFBQTtBQ0FKOztBRElBO0VBQ0UsOEJBQUE7RUFDQSxxRUFBQTtBQ0RGOztBRElBO0VBQ0UsOEJBQUE7RUFDQSxxRUFBQTtFQUNBLGNBQUE7QUNERjtBREdFO0VBQ0Usa0JBQUE7QUNESiIsImZpbGUiOiJmaXJlYmFzZS1wcm9maWxlLnNoZWxsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtaW1hZ2Utc2hlbGwudXNlci1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1icmlnaHQtYmx1ZS1yZ2IpLCAwLjI1KTtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItYnJpZ2h0LWJsdWUtdGludCk7XG4gIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogMHB4IDBweCBjYWxjKHZhcigtLWFwcC1icm9hZC1yYWRpdXMpICogMikgY2FsYyh2YXIoLS1hcHAtYnJvYWQtcmFkaXVzKSAqIDIpO1xuICAtLWltYWdlLXNoZWxsLW92ZXJsYXktYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAxKSAwJSwgcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAwLjQwKSAyNSUsIHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgMC4xNSkgMTAwJSk7XG59XG5cbi51c2VyLW5hbWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMjJweDtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLWJyaWdodC1ibHVlLXJnYiksIDAuMjApO1xuICBtaW4td2lkdGg6IDE4MHB4O1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1pbi13aWR0aDogMHB4O1xuICB9XG59XG5cbi51c2VyLXJvbGUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLWJyaWdodC1ibHVlLXJnYiksIDAuMTUpO1xuICBtYXgtd2lkdGg6IDQwJTtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIH1cbn1cblxuLnVzZXItZGVzY3JpcHRpb24gPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLWJyaWdodC1ibHVlLXJnYiksIDAuMTApO1xufVxuXG4ucHJlZmVyZW5jZS12YWx1ZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItYnJpZ2h0LXBpbmstcmdiKSwgMC4xMCk7XG4gIG1heC13aWR0aDogNDAlO1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgfVxufVxuIiwiYXBwLWltYWdlLXNoZWxsLnVzZXItaW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItYnJpZ2h0LWJsdWUtcmdiKSwgMC4yNSk7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWJyaWdodC1ibHVlLXRpbnQpO1xuICAtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXM6IDBweCAwcHggY2FsYyh2YXIoLS1hcHAtYnJvYWQtcmFkaXVzKSAqIDIpIGNhbGModmFyKC0tYXBwLWJyb2FkLXJhZGl1cykgKiAyKTtcbiAgLS1pbWFnZS1zaGVsbC1vdmVybGF5LWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgMSkgMCUsIHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgMC40MCkgMjUlLCByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIDAuMTUpIDEwMCUpO1xufVxuXG4udXNlci1uYW1lID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDIycHg7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1icmlnaHQtYmx1ZS1yZ2IpLCAwLjIwKTtcbiAgbWluLXdpZHRoOiAxODBweDtcbn1cbi51c2VyLW5hbWUgPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1pbi13aWR0aDogMHB4O1xufVxuXG4udXNlci1yb2xlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1icmlnaHQtYmx1ZS1yZ2IpLCAwLjE1KTtcbiAgbWF4LXdpZHRoOiA0MCU7XG59XG4udXNlci1yb2xlID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtYXgtd2lkdGg6IGluaGVyaXQ7XG59XG5cbi51c2VyLWRlc2NyaXB0aW9uID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1icmlnaHQtYmx1ZS1yZ2IpLCAwLjEwKTtcbn1cblxuLnByZWZlcmVuY2UtdmFsdWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLWJyaWdodC1waW5rLXJnYiksIDAuMTApO1xuICBtYXgtd2lkdGg6IDQwJTtcbn1cbi5wcmVmZXJlbmNlLXZhbHVlID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtYXgtd2lkdGg6IGluaGVyaXQ7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmlyZWJhc2UvYXV0aC9wcm9maWxlL3N0eWxlcy9maXJlYmFzZS1wcm9maWxlLnNoZWxsLnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi9UaXRhbiUyMEVzdGF0ZXMvc3JjL2FwcC9maXJlYmFzZS9hdXRoL3Byb2ZpbGUvc3R5bGVzL2ZpcmViYXNlLXByb2ZpbGUuc2hlbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhFQUFBO0VBQ0EsOERBQUE7RUFDQSx3R0FBQTtFQUNBLHVMQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtFQUNBLHFFQUFBO0VBQ0EsZ0JBQUE7QUNDRjtBRENFO0VBQ0UsY0FBQTtBQ0NKOztBREdBO0VBQ0UsOEJBQUE7RUFDQSxxRUFBQTtFQUNBLGNBQUE7QUNBRjtBREVFO0VBQ0Usa0JBQUE7QUNBSjs7QURJQTtFQUNFLDhCQUFBO0VBQ0EscUVBQUE7QUNERjs7QURJQTtFQUNFLDhCQUFBO0VBQ0EscUVBQUE7RUFDQSxjQUFBO0FDREY7QURHRTtFQUNFLGtCQUFBO0FDREo7QURDQSx3cElBQXdwSSIsInNvdXJjZXNDb250ZW50IjpbImFwcC1pbWFnZS1zaGVsbC51c2VyLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWJyaWdodC1ibHVlLXJnYiksIDAuMjUpO1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1icmlnaHQtYmx1ZS10aW50KTtcbiAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiAwcHggMHB4IGNhbGModmFyKC0tYXBwLWJyb2FkLXJhZGl1cykgKiAyKSBjYWxjKHZhcigtLWFwcC1icm9hZC1yYWRpdXMpICogMik7XG4gIC0taW1hZ2Utc2hlbGwtb3ZlcmxheS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIDEpIDAlLCByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIDAuNDApIDI1JSwgcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAwLjE1KSAxMDAlKTtcbn1cblxuLnVzZXItbmFtZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAyMnB4O1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItYnJpZ2h0LWJsdWUtcmdiKSwgMC4yMCk7XG4gIG1pbi13aWR0aDogMTgwcHg7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWluLXdpZHRoOiAwcHg7XG4gIH1cbn1cblxuLnVzZXItcm9sZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItYnJpZ2h0LWJsdWUtcmdiKSwgMC4xNSk7XG4gIG1heC13aWR0aDogNDAlO1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgfVxufVxuXG4udXNlci1kZXNjcmlwdGlvbiA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItYnJpZ2h0LWJsdWUtcmdiKSwgMC4xMCk7XG59XG5cbi5wcmVmZXJlbmNlLXZhbHVlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1icmlnaHQtcGluay1yZ2IpLCAwLjEwKTtcbiAgbWF4LXdpZHRoOiA0MCU7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICB9XG59XG4iLCJhcHAtaW1hZ2Utc2hlbGwudXNlci1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1icmlnaHQtYmx1ZS1yZ2IpLCAwLjI1KTtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItYnJpZ2h0LWJsdWUtdGludCk7XG4gIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogMHB4IDBweCBjYWxjKHZhcigtLWFwcC1icm9hZC1yYWRpdXMpICogMikgY2FsYyh2YXIoLS1hcHAtYnJvYWQtcmFkaXVzKSAqIDIpO1xuICAtLWltYWdlLXNoZWxsLW92ZXJsYXktYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAxKSAwJSwgcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAwLjQwKSAyNSUsIHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgMC4xNSkgMTAwJSk7XG59XG5cbi51c2VyLW5hbWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMjJweDtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLWJyaWdodC1ibHVlLXJnYiksIDAuMjApO1xuICBtaW4td2lkdGg6IDE4MHB4O1xufVxuLnVzZXItbmFtZSA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWluLXdpZHRoOiAwcHg7XG59XG5cbi51c2VyLXJvbGUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLWJyaWdodC1ibHVlLXJnYiksIDAuMTUpO1xuICBtYXgtd2lkdGg6IDQwJTtcbn1cbi51c2VyLXJvbGUgPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1heC13aWR0aDogaW5oZXJpdDtcbn1cblxuLnVzZXItZGVzY3JpcHRpb24gPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLWJyaWdodC1ibHVlLXJnYiksIDAuMTApO1xufVxuXG4ucHJlZmVyZW5jZS12YWx1ZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItYnJpZ2h0LXBpbmstcmdiKSwgMC4xMCk7XG4gIG1heC13aWR0aDogNDAlO1xufVxuLnByZWZlcmVuY2UtdmFsdWUgPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1heC13aWR0aDogaW5oZXJpdDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 28714:
/*!********************************************************************!*\
  !*** ./src/app/firebase/auth/profile/firebase-profile.resolver.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirebaseProfileResolver": () => (/* binding */ FirebaseProfileResolver)
/* harmony export */ });
/* harmony import */ var _firebase_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../firebase-auth.service */ 43108);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);



class FirebaseProfileResolver {
  constructor(firebaseAuthService) {
    this.firebaseAuthService = firebaseAuthService;
  }
  resolve() {
    const dataSource = this.firebaseAuthService.getProfileDataSource();
    const dataStore = this.firebaseAuthService.getProfileStore(dataSource);
    return dataStore;
  }
  static #_ = this.ɵfac = function FirebaseProfileResolver_Factory(t) {
    return new (t || FirebaseProfileResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_firebase_auth_service__WEBPACK_IMPORTED_MODULE_0__.FirebaseAuthService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: FirebaseProfileResolver,
    factory: FirebaseProfileResolver.ɵfac
  });
}

/***/ }),

/***/ 85971:
/*!******************************************!*\
  !*** ./src/app/utils/resolver-helper.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResolverHelper": () => (/* binding */ ResolverHelper)
/* harmony export */ });
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shell/data-store */ 29760);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 10745);


class ResolverHelper {
  // More info on function overloads here: https://www.typescriptlang.org/docs/handbook/functions.html#overloads
  static extractData(source, constructor) {
    if (source instanceof _shell_data_store__WEBPACK_IMPORTED_MODULE_0__.DataStore) {
      return source.state;
    } else if (source instanceof constructor) {
      // The right side of instanceof should be an expression evaluating to a constructor function (ie. a class), not a type
      // That's why we included an extra parameter which acts as a constructor function for type T
      // (see: https://github.com/microsoft/TypeScript/issues/5236)
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(source);
    }
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_firebase_auth_profile_firebase-profile_module_ts.js.map