(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);



const routes = [{
  path: '',
  redirectTo: '/walkthrough',
  pathMatch: 'full'
}, {
  path: 'walkthrough',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_swiper_angular_fesm2015_swiper_angular_mjs"), __webpack_require__.e("src_app_walkthrough_walkthrough_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./walkthrough/walkthrough.module */ 19507)).then(m => m.WalkthroughPageModule)
}, {
  path: 'getting-started',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_swiper_angular_fesm2015_swiper_angular_mjs"), __webpack_require__.e("src_app_getting-started_getting-started_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./getting-started/getting-started.module */ 52938)).then(m => m.GettingStartedPageModule)
}, {
  path: 'auth',
  redirectTo: 'auth/login',
  pathMatch: 'full'
}, {
  path: 'auth/login',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 80107)).then(m => m.LoginPageModule)
}, {
  path: 'auth/signup',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_signup_signup_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./signup/signup.module */ 77648)).then(m => m.SignupPageModule)
}, {
  path: 'auth/forgot-password',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_forgot-password_forgot-password_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./forgot-password/forgot-password.module */ 17157)).then(m => m.ForgotPasswordPageModule)
}, {
  path: 'app',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 15564)).then(m => m.TabsPageModule)
}, {
  path: 'contact-card',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_contact-card_contact-card_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./contact-card/contact-card.module */ 30725)).then(m => m.ContactCardPageModule)
}, {
  path: 'forms-and-validations',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_forms_validations_forms-validations_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./forms/validations/forms-validations.module */ 26180)).then(m => m.FormsValidationsPageModule)
}, {
  path: 'forms-filters',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_forms_filters_forms-filters_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./forms/filters/forms-filters.module */ 17999)).then(m => m.FormsFiltersPageModule)
}, {
  path: 'page-not-found',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_page-not-found_page-not-found_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./page-not-found/page-not-found.module */ 16815)).then(m => m.PageNotFoundModule)
}, {
  path: 'showcase',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_showcase_showcase_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./showcase/showcase.module */ 45527)).then(m => m.ShowcasePageModule)
}, {
  path: 'firebase',
  redirectTo: 'firebase/auth/sign-in',
  pathMatch: 'full'
}, {
  path: 'firebase/auth',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_fire_fesm2015_angular-fire-auth_js"), __webpack_require__.e("src_app_firebase_auth_firebase-auth_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./firebase/auth/firebase-auth.module */ 8824)).then(m => m.FirebaseAuthModule)
}, {
  path: 'firebase/crud',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_fire_fesm2015_angular-fire-auth_js"), __webpack_require__.e("src_app_firebase_crud_firebase-crud_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./firebase/crud/firebase-crud.module */ 12375)).then(m => m.FirebaseCrudModule)
}, {
  path: 'maps',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_maps_maps_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./maps/maps.module */ 83842)).then(m => m.MapsPageModule)
}, {
  path: 'video-playlist',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_video-playlist_video-playlist_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./video-playlist/video-playlist.module */ 16074)).then(m => m.VideoPlaylistPageModule)
}, {
  path: '**',
  redirectTo: 'page-not-found'
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, {
      // This value is required for server-side rendering to work.
      initialNavigation: 'enabledBlocking',
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    }), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _Users_teeicloud_TitanEstates_Titan_Estates_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 83918);
/* harmony import */ var _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/splash-screen */ 82239);
/* harmony import */ var _capacitor_preferences__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/preferences */ 85191);
/* harmony import */ var _utils_history_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/history-helper.service */ 8505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shell/aspect-ratio/aspect-ratio.component */ 89330);
/* harmony import */ var _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shell/image-shell/image-shell.component */ 71408);














function AppComponent_ion_menu_toggle_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-menu-toggle", 14)(1, "ion-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "ion-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const p_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", p_r2.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("name", p_r2.ionicIcon ? p_r2.ionicIcon : "")("src", p_r2.customIcon ? p_r2.customIcon : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", p_r2.title, " ");
  }
}
function AppComponent_ion_menu_toggle_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-menu-toggle", 14)(1, "ion-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "ion-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", p_r4.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("name", p_r4.ionicIcon ? p_r4.ionicIcon : "")("src", p_r4.customIcon ? p_r4.customIcon : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", p_r4.title, " ");
  }
}
const _c0 = function () {
  return {
    w: 1,
    h: 1
  };
};
const _c1 = function () {
  return ["/forms-and-validations"];
};
const _c2 = function () {
  return ["/forms-filters"];
};
const _c3 = function () {
  return ["/firebase/auth/sign-in"];
};
const _c4 = function () {
  return ["/firebase/crud/listing"];
};
const _c5 = function () {
  return ["/maps"];
};
const _c6 = function () {
  return ["/video-playlist"];
};
const _c7 = function () {
  return ["/showcase/app-shell"];
};
const _c8 = function () {
  return ["/showcase/route-resolvers-ux"];
};
const _c9 = function () {
  return ["/showcase/custom-components"];
};
class AppComponent {
  // Inject HistoryHelperService in the app.components.ts so its available app-wide
  constructor(translate, historyHelper, router) {
    this.translate = translate;
    this.historyHelper = historyHelper;
    this.router = router;
    this.appPages = [{
      title: 'Listings',
      url: '/app/real-estate',
      ionicIcon: 'list-outline'
    }, {
      title: 'Profile',
      url: '/app/user',
      ionicIcon: 'person-outline'
    }, {
      title: 'Contact Card',
      url: '/contact-card',
      customIcon: './assets/custom-icons/side-menu/contact-card.svg'
    }, {
      title: 'Notifications',
      url: '/app/notifications',
      ionicIcon: 'notifications-outline'
    }];
    this.accountPages = [{
      title: 'Log In',
      url: '/auth/login',
      ionicIcon: 'log-in-outline'
    }, {
      title: 'Sign Up',
      url: '/auth/signup',
      ionicIcon: 'person-add-outline'
    }, {
      title: 'Getting Started',
      url: '/getting-started',
      ionicIcon: 'rocket-outline'
    }, {
      title: '404 page',
      url: '/page-not-found',
      ionicIcon: 'alert-circle-outline'
    }];
    this.textDir = 'ltr';
    this.initializeApp();
    this.setLanguage();
  }
  initializeApp() {
    return (0,_Users_teeicloud_TitanEstates_Titan_Estates_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_1__.SplashScreen.hide();
      } catch (err) {
        console.log('This is normal in a browser', err);
      }
    })();
  }
  setLanguage() {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('en');
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use('en');
    // this is to determine the text direction depending on the selected language
    // for the purpose of this example we determine that only arabic and hebrew are RTL.
    // this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
    //   this.textDir = (event.lang === 'ar' || event.lang === 'iw') ? 'rtl' : 'ltr';
    // });
  }
  openTutorial() {
    // save key to mark the walkthrough as NOT visited because the user wants to check it out
    _capacitor_preferences__WEBPACK_IMPORTED_MODULE_2__.Preferences.set({
      key: 'visitedWalkthrough',
      value: 'false'
    });
    this.router.navigateByUrl('walkthrough');
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_utils_history_helper_service__WEBPACK_IMPORTED_MODULE_3__.HistoryHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 98,
    vars: 24,
    consts: [[3, "dir"], ["contentId", "menu-content", "when", "false"], ["contentId", "menu-content", 1, "app-sidemenu"], [1, "user-details-wrapper"], ["size", "4"], [3, "ratio"], ["animation", "spinner", 1, "user-avatar", 3, "src"], ["size", "8", 1, "user-info-wrapper"], [1, "user-name"], [1, "user-handle"], [1, "user-stats-wrapper", "user-details-wrapper"], [1, "user-stat-value"], [1, "user-stat-name"], ["autoHide", "false", 4, "ngFor", "ngForOf"], ["autoHide", "false"], [3, "routerLink"], ["slot", "start", "src", "./assets/custom-icons/side-menu/forms.svg"], ["slot", "start", "name", "options-outline"], ["auto-hide", "false"], ["slot", "start", "name", "logo-firebase"], ["slot", "start", "name", "map-outline"], ["slot", "start", "name", "videocam-outline"], [3, "click"], ["slot", "start", "name", "school-outline"], ["slot", "start", "name", "egg-outline"], ["slot", "start", "name", "cog-outline"], ["slot", "start", "name", "color-wand-outline"], ["id", "menu-content"], ["slot", "start", 3, "name", "src"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-app", 0)(1, "ion-split-pane", 1)(2, "ion-menu", 2)(3, "ion-header")(4, "ion-toolbar")(5, "ion-row", 3)(6, "ion-col", 4)(7, "app-aspect-ratio", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "app-image-shell", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "ion-col", 7)(10, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Ionic Themes");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "@IonicThemes");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "ion-row", 10)(15, "ion-col")(16, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "1553");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Following");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "ion-col")(21, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "537");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Followers");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "ion-content")(26, "ion-list")(27, "ion-list-header")(28, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Layouts");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, AppComponent_ion_menu_toggle_30_Template, 5, 4, "ion-menu-toggle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "ion-list")(32, "ion-list-header")(33, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, "Forms");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "ion-menu-toggle", 14)(36, "ion-item", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](37, "ion-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, " Forms & Validations ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "ion-item", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](41, "ion-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, " Filters ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "ion-list")(45, "ion-list-header")(46, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "Integrations");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "ion-menu-toggle", 18)(49, "ion-item", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](50, "ion-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52, " Firebase Auth ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "ion-item", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](54, "ion-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56, " Firebase CRUD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "ion-list")(58, "ion-list-header")(59, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60, "Functionalities");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "ion-menu-toggle", 18)(62, "ion-item", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](63, "ion-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65, " Maps & Geolocation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "ion-item", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](67, "ion-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](69, " Video Playlist ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "ion-list")(71, "ion-list-header")(72, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](73, "Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](74, AppComponent_ion_menu_toggle_74_Template, 5, 4, "ion-menu-toggle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](75, "ion-menu-toggle", 14)(76, "ion-item", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AppComponent_Template_ion_item_click_76_listener() {
          return ctx.openTutorial();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](77, "ion-icon", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](79, " Tutorial ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "ion-list")(81, "ion-list-header")(82, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](83, "Showcase");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](84, "ion-menu-toggle", 14)(85, "ion-item", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](86, "ion-icon", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](87, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](88, " App Shell ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](89, "ion-item", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](90, "ion-icon", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](91, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](92, " Route Resolvers UX ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](93, "ion-item", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](94, "ion-icon", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](95, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](96, " Custom Components ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](97, "ion-router-outlet", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("dir", ctx.textDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](14, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", "./assets/sample-images/ionicthemes_logo.jpg");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.appPages);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](15, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](16, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](17, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](18, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](19, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](20, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.accountPages);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](21, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](22, _c8));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](23, _c9));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonApp, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonListHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonMenu, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonMenuToggle, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonSplitPane, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonRouterOutlet, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.RouterLinkDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_4__.AspectRatioComponent, _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_5__.ImageShellComponent],
    styles: ["[_nghost-%COMP%] {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background-alt-shade);\n  --page-headers-shadow-color: rgba(var(--ion-color-darkest-rgb), 0.4);\n}\n\n.app-sidemenu[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n  --background: var(--ion-color-dark-tint);\n}\n.app-sidemenu[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%] {\n  --background: var(--page-background);\n}\n.app-sidemenu[_ngcontent-%COMP%]   .user-details-wrapper[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n  color: var(--ion-color-lightest);\n  padding: var(--page-margin);\n  align-items: center;\n}\n.app-sidemenu[_ngcontent-%COMP%]   .user-details-wrapper[_ngcontent-%COMP%]    + .user-details-wrapper[_ngcontent-%COMP%] {\n  padding-top: 0px;\n}\n.app-sidemenu[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%] {\n  padding-left: var(--page-margin);\n}\n.app-sidemenu[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  margin: 0px 0px 5px;\n}\n.app-sidemenu[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .user-handle[_ngcontent-%COMP%] {\n  color: var(--ion-color-light-shade);\n  margin: 0px;\n  font-size: 14px;\n  font-weight: 400;\n}\n.app-sidemenu[_ngcontent-%COMP%]   .user-stats-wrapper[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.app-sidemenu[_ngcontent-%COMP%]   .user-stats-wrapper[_ngcontent-%COMP%]   .user-stat-value[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  font-weight: 500;\n}\n.app-sidemenu[_ngcontent-%COMP%]   .user-stats-wrapper[_ngcontent-%COMP%]   .user-stat-name[_ngcontent-%COMP%] {\n  color: var(--ion-color-light-shade);\n  font-size: 14px;\n}\n.app-sidemenu[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  --ion-text-color: var(--ion-color-light-shade);\n  --ion-text-color-rgb: var(--ion-color-light-shade-rgb);\n  --ion-item-background: var(--page-background);\n  --ion-item-border-color: transparent;\n}\n.app-sidemenu[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%] {\n  --color: rgba(var(--ion-color-light-shade-rgb), 0.6);\n  text-transform: uppercase;\n  box-shadow: inset 0px -4px 8px -2px var(--page-headers-shadow-color);\n  padding-inline-start: var(--page-margin);\n  font-size: 14px;\n  margin-bottom: 8px;\n}\n.app-sidemenu[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --border-width: 0px !important;\n  --padding-start: var(--page-margin);\n  --background-activated: var(--ion-color-medium);\n}\n.app-sidemenu[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-light-shade);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGUtbWVudS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vVGl0YW4lMjBFc3RhdGVzL3NyYy9hcHAvc2lkZS1tZW51L3N0eWxlcy9zaWRlLW1lbnUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHFDQUFBO0VBQ0Esa0RBQUE7RUFFQSxvRUFBQTtBQ0ZGOztBRE9FO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx3Q0FBQTtBQ0pKO0FET0U7RUFDRSxvQ0FBQTtBQ0xKO0FEUUU7RUFDRSw4QkFBQTtFQUdBLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQ1JKO0FEVUk7RUFDRSxnQkFBQTtBQ1JOO0FEWUU7RUFDRSxnQ0FBQTtBQ1ZKO0FEWUk7RUFDRSxtQkFBQTtBQ1ZOO0FEYUk7RUFDRSxtQ0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNYTjtBRGVFO0VBQ0Usa0JBQUE7QUNiSjtBRGVJO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQ2JOO0FEZ0JJO0VBQ0UsbUNBQUE7RUFDQSxlQUFBO0FDZE47QURtQkU7RUFDRSw4Q0FBQTtFQUNBLHNEQUFBO0VBQ0EsNkNBQUE7RUFDQSxvQ0FBQTtBQ2pCSjtBRG1CSTtFQUNFLG9EQUFBO0VBRUEseUJBQUE7RUFDQSxvRUFBQTtFQUNBLHdDQUFBO0VBRUEsZUFBQTtFQUNBLGtCQUFBO0FDbkJOO0FEc0JJO0VBQ0UsOEJBQUE7RUFDQSxtQ0FBQTtFQUNBLCtDQUFBO0FDcEJOO0FEdUJJO0VBQ0UsbUNBQUE7QUNyQk4iLCJmaWxlIjoic2lkZS1tZW51LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDdXN0b20gdmFyaWFibGVzXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLWFsdC1zaGFkZSk7XG5cbiAgLS1wYWdlLWhlYWRlcnMtc2hhZG93LWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrZXN0LXJnYiksIDAuNCk7XG59XG5cbi8vIE5vdGU6ICBBbGwgdGhlIENTUyB2YXJpYWJsZXMgZGVmaW5lZCBiZWxvdyBhcmUgb3ZlcnJpZGVzIG9mIElvbmljIGVsZW1lbnRzIENTUyBDdXN0b20gUHJvcGVydGllc1xuLmFwcC1zaWRlbWVudSB7XG4gIGlvbi10b29sYmFyIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICB9XG5cbiAgaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbiAgfVxuXG4gIC51c2VyLWRldGFpbHMtd3JhcHBlciB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItbGlnaHQtcmdiKSwgMC4xNSk7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gICAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAmICsgLnVzZXItZGV0YWlscy13cmFwcGVyIHtcbiAgICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgfVxuICB9XG5cbiAgLnVzZXItaW5mby13cmFwcGVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuICAgIC51c2VyLW5hbWUge1xuICAgICAgbWFyZ2luOiAwcHggMHB4IDVweDtcbiAgICB9XG5cbiAgICAudXNlci1oYW5kbGUge1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgfVxuICB9XG5cbiAgLnVzZXItc3RhdHMtd3JhcHBlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgLnVzZXItc3RhdC12YWx1ZSB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuXG4gICAgLnVzZXItc3RhdC1uYW1lIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgfVxuXG4gIC8vIE1lbnUgbGlzdCBpdGVtc1xuICBpb24tbGlzdCB7XG4gICAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgICAtLWlvbi10ZXh0LWNvbG9yLXJnYjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlLXJnYik7XG4gICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuICAgIC0taW9uLWl0ZW0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAgIGlvbi1saXN0LWhlYWRlciB7XG4gICAgICAtLWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZS1yZ2IpLCAwLjYpO1xuXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IC00cHggOHB4IC0ycHggdmFyKC0tcGFnZS1oZWFkZXJzLXNoYWRvdy1jb2xvcik7XG4gICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuXG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgfVxuXG4gICAgaW9uLWl0ZW0ge1xuICAgICAgLS1ib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICB9XG5cbiAgICBpb24taWNvbiB7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLWFsdC1zaGFkZSk7XG4gIC0tcGFnZS1oZWFkZXJzLXNoYWRvdy1jb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItZGFya2VzdC1yZ2IpLCAwLjQpO1xufVxuXG4uYXBwLXNpZGVtZW51IGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG59XG4uYXBwLXNpZGVtZW51IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xufVxuLmFwcC1zaWRlbWVudSAudXNlci1kZXRhaWxzLXdyYXBwZXIge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYXBwLXNpZGVtZW51IC51c2VyLWRldGFpbHMtd3JhcHBlciArIC51c2VyLWRldGFpbHMtd3JhcHBlciB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG59XG4uYXBwLXNpZGVtZW51IC51c2VyLWluZm8td3JhcHBlciB7XG4gIHBhZGRpbmctbGVmdDogdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLmFwcC1zaWRlbWVudSAudXNlci1pbmZvLXdyYXBwZXIgLnVzZXItbmFtZSB7XG4gIG1hcmdpbjogMHB4IDBweCA1cHg7XG59XG4uYXBwLXNpZGVtZW51IC51c2VyLWluZm8td3JhcHBlciAudXNlci1oYW5kbGUge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5hcHAtc2lkZW1lbnUgLnVzZXItc3RhdHMtd3JhcHBlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hcHAtc2lkZW1lbnUgLnVzZXItc3RhdHMtd3JhcHBlciAudXNlci1zdGF0LXZhbHVlIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uYXBwLXNpZGVtZW51IC51c2VyLXN0YXRzLXdyYXBwZXIgLnVzZXItc3RhdC1uYW1lIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5hcHAtc2lkZW1lbnUgaW9uLWxpc3Qge1xuICAtLWlvbi10ZXh0LWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICAtLWlvbi10ZXh0LWNvbG9yLXJnYjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlLXJnYik7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbiAgLS1pb24taXRlbS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLmFwcC1zaWRlbWVudSBpb24tbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICAtLWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZS1yZ2IpLCAwLjYpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3gtc2hhZG93OiBpbnNldCAwcHggLTRweCA4cHggLTJweCB2YXIoLS1wYWdlLWhlYWRlcnMtc2hhZG93LWNvbG9yKTtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4uYXBwLXNpZGVtZW51IGlvbi1saXN0IGlvbi1pdGVtIHtcbiAgLS1ib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG4uYXBwLXNpZGVtZW51IGlvbi1saXN0IGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2lkZS1tZW51L3N0eWxlcy9zaWRlLW1lbnUuc2NzcyIsIndlYnBhY2s6Ly8uLy4uL1RpdGFuJTIwRXN0YXRlcy9zcmMvYXBwL3NpZGUtbWVudS9zdHlsZXMvc2lkZS1tZW51LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxxQ0FBQTtFQUNBLGtEQUFBO0VBRUEsb0VBQUE7QUNGRjs7QURPRTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0NBQUE7QUNKSjtBRE9FO0VBQ0Usb0NBQUE7QUNMSjtBRFFFO0VBQ0UsOEJBQUE7RUFHQSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUNSSjtBRFVJO0VBQ0UsZ0JBQUE7QUNSTjtBRFlFO0VBQ0UsZ0NBQUE7QUNWSjtBRFlJO0VBQ0UsbUJBQUE7QUNWTjtBRGFJO0VBQ0UsbUNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDWE47QURlRTtFQUNFLGtCQUFBO0FDYko7QURlSTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUNiTjtBRGdCSTtFQUNFLG1DQUFBO0VBQ0EsZUFBQTtBQ2ROO0FEbUJFO0VBQ0UsOENBQUE7RUFDQSxzREFBQTtFQUNBLDZDQUFBO0VBQ0Esb0NBQUE7QUNqQko7QURtQkk7RUFDRSxvREFBQTtFQUVBLHlCQUFBO0VBQ0Esb0VBQUE7RUFDQSx3Q0FBQTtFQUVBLGVBQUE7RUFDQSxrQkFBQTtBQ25CTjtBRHNCSTtFQUNFLDhCQUFBO0VBQ0EsbUNBQUE7RUFDQSwrQ0FBQTtBQ3BCTjtBRHVCSTtFQUNFLG1DQUFBO0FDckJOO0FEQ0EsZ3FOQUFncU4iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDdXN0b20gdmFyaWFibGVzXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLWFsdC1zaGFkZSk7XG5cbiAgLS1wYWdlLWhlYWRlcnMtc2hhZG93LWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrZXN0LXJnYiksIDAuNCk7XG59XG5cbi8vIE5vdGU6ICBBbGwgdGhlIENTUyB2YXJpYWJsZXMgZGVmaW5lZCBiZWxvdyBhcmUgb3ZlcnJpZGVzIG9mIElvbmljIGVsZW1lbnRzIENTUyBDdXN0b20gUHJvcGVydGllc1xuLmFwcC1zaWRlbWVudSB7XG4gIGlvbi10b29sYmFyIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICB9XG5cbiAgaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbiAgfVxuXG4gIC51c2VyLWRldGFpbHMtd3JhcHBlciB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItbGlnaHQtcmdiKSwgMC4xNSk7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gICAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAmICsgLnVzZXItZGV0YWlscy13cmFwcGVyIHtcbiAgICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgfVxuICB9XG5cbiAgLnVzZXItaW5mby13cmFwcGVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuICAgIC51c2VyLW5hbWUge1xuICAgICAgbWFyZ2luOiAwcHggMHB4IDVweDtcbiAgICB9XG5cbiAgICAudXNlci1oYW5kbGUge1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgfVxuICB9XG5cbiAgLnVzZXItc3RhdHMtd3JhcHBlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgLnVzZXItc3RhdC12YWx1ZSB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuXG4gICAgLnVzZXItc3RhdC1uYW1lIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgfVxuXG4gIC8vIE1lbnUgbGlzdCBpdGVtc1xuICBpb24tbGlzdCB7XG4gICAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgICAtLWlvbi10ZXh0LWNvbG9yLXJnYjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlLXJnYik7XG4gICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuICAgIC0taW9uLWl0ZW0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAgIGlvbi1saXN0LWhlYWRlciB7XG4gICAgICAtLWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZS1yZ2IpLCAwLjYpO1xuXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IC00cHggOHB4IC0ycHggdmFyKC0tcGFnZS1oZWFkZXJzLXNoYWRvdy1jb2xvcik7XG4gICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuXG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgfVxuXG4gICAgaW9uLWl0ZW0ge1xuICAgICAgLS1ib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICB9XG5cbiAgICBpb24taWNvbiB7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLWFsdC1zaGFkZSk7XG4gIC0tcGFnZS1oZWFkZXJzLXNoYWRvdy1jb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItZGFya2VzdC1yZ2IpLCAwLjQpO1xufVxuXG4uYXBwLXNpZGVtZW51IGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG59XG4uYXBwLXNpZGVtZW51IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xufVxuLmFwcC1zaWRlbWVudSAudXNlci1kZXRhaWxzLXdyYXBwZXIge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYXBwLXNpZGVtZW51IC51c2VyLWRldGFpbHMtd3JhcHBlciArIC51c2VyLWRldGFpbHMtd3JhcHBlciB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG59XG4uYXBwLXNpZGVtZW51IC51c2VyLWluZm8td3JhcHBlciB7XG4gIHBhZGRpbmctbGVmdDogdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLmFwcC1zaWRlbWVudSAudXNlci1pbmZvLXdyYXBwZXIgLnVzZXItbmFtZSB7XG4gIG1hcmdpbjogMHB4IDBweCA1cHg7XG59XG4uYXBwLXNpZGVtZW51IC51c2VyLWluZm8td3JhcHBlciAudXNlci1oYW5kbGUge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5hcHAtc2lkZW1lbnUgLnVzZXItc3RhdHMtd3JhcHBlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hcHAtc2lkZW1lbnUgLnVzZXItc3RhdHMtd3JhcHBlciAudXNlci1zdGF0LXZhbHVlIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uYXBwLXNpZGVtZW51IC51c2VyLXN0YXRzLXdyYXBwZXIgLnVzZXItc3RhdC1uYW1lIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5hcHAtc2lkZW1lbnUgaW9uLWxpc3Qge1xuICAtLWlvbi10ZXh0LWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICAtLWlvbi10ZXh0LWNvbG9yLXJnYjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlLXJnYik7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbiAgLS1pb24taXRlbS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLmFwcC1zaWRlbWVudSBpb24tbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICAtLWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZS1yZ2IpLCAwLjYpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3gtc2hhZG93OiBpbnNldCAwcHggLTRweCA4cHggLTJweCB2YXIoLS1wYWdlLWhlYWRlcnMtc2hhZG93LWNvbG9yKTtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4uYXBwLXNpZGVtZW51IGlvbi1saXN0IGlvbi1pdGVtIHtcbiAgLS1ib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG4uYXBwLXNpZGVtZW51IGlvbi1saXN0IGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */", "app-image-shell.user-avatar[_ngcontent-%COMP%] {\n  --image-shell-loading-background: rgba(var(--ion-color-light-rgb), 0.15);\n  --image-shell-border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGUtbWVudS5zaGVsbC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vVGl0YW4lMjBFc3RhdGVzL3NyYy9hcHAvc2lkZS1tZW51L3N0eWxlcy9zaWRlLW1lbnUuc2hlbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdFQUFBO0VBQ0EsZ0NBQUE7QUNDRiIsImZpbGUiOiJzaWRlLW1lbnUuc2hlbGwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1pbWFnZS1zaGVsbC51c2VyLWF2YXRhciB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1saWdodC1yZ2IpLCAwLjE1KTtcbiAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiA1MCU7XG59XG4iLCJhcHAtaW1hZ2Utc2hlbGwudXNlci1hdmF0YXIge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItbGlnaHQtcmdiKSwgMC4xNSk7XG4gIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogNTAlO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2lkZS1tZW51L3N0eWxlcy9zaWRlLW1lbnUuc2hlbGwuc2NzcyIsIndlYnBhY2s6Ly8uLy4uL1RpdGFuJTIwRXN0YXRlcy9zcmMvYXBwL3NpZGUtbWVudS9zdHlsZXMvc2lkZS1tZW51LnNoZWxsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3RUFBQTtFQUNBLGdDQUFBO0FDQ0Y7QURDQSw0dkJBQTR2QiIsInNvdXJjZXNDb250ZW50IjpbImFwcC1pbWFnZS1zaGVsbC51c2VyLWF2YXRhciB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1saWdodC1yZ2IpLCAwLjE1KTtcbiAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiA1MCU7XG59XG4iLCJhcHAtaW1hZ2Utc2hlbGwudXNlci1hdmF0YXIge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItbGlnaHQtcmdiKSwgMC4xNSk7XG4gIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogNTAlO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */", "@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) and (device-aspect-ratio: 2/3) {\n  .app-sidemenu[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .app-sidemenu[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n\n@media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (device-aspect-ratio: 40/71) {\n  .interests-to-follow-slide[_ngcontent-%COMP%]   .custom-checkbox[_ngcontent-%COMP%]   .checkbox-title[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGUtbWVudS5yZXNwb25zaXZlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9UaXRhbiUyMEVzdGF0ZXMvc3JjL2FwcC9zaWRlLW1lbnUvc3R5bGVzL3NpZGUtbWVudS5yZXNwb25zaXZlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0EsNENBQUE7QUFDQTtFQVlNO0lBQ0UsZUFBQTtFQ2ZOO0VEb0JJO0lBQ0UsZUFBQTtFQ2xCTjtBQUNGO0FEdUJBLHFEQUFBO0FBQ0E7RUFZTTtJQUNFLGVBQUE7RUNoQ047QUFDRjtBRHFDQSxrREFBQTtBQWFBLHFDQUFBO0FBYUEsaURBQUEiLCJmaWxlIjoic2lkZS1tZW51LnJlc3BvbnNpdmUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIChOb3RlOiBEb24ndCBjaGFuZ2UgdGhlIG9yZGVyIG9mIHRoZSBkZXZpY2VzIGFzIGl0IG1heSBicmVhayB0aGUgY29ycmVjdCBjc3MgcHJlY2VkZW5jZSlcblxuLy8gKHNlZTogaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9zbmlwcGV0cy9jc3MvbWVkaWEtcXVlcmllcy1mb3Itc3RhbmRhcmQtZGV2aWNlcy8jaXBob25lLXF1ZXJpZXMpXG4vLyAoc2VlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDc3NTAyNjEvMTExNjk1OSlcblxuLyogLS0tLS0tLS0tLS0gaVBob25lIDQgYW5kIDRTIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW5cbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzIwcHgpXG4gIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDQ4MHB4KVxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilcbiAgYW5kIChkZXZpY2UtYXNwZWN0LXJhdGlvOiAyLzMpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBwb3J0cmFpdDpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBsYW5kc2NhcGU6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSlcbntcbiAgLmFwcC1zaWRlbWVudSB7XG4gICAgLnVzZXItaW5mby13cmFwcGVyIHtcbiAgICAgIC51c2VyLW5hbWUge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW9uLWxpc3Qge1xuICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSA1LCA1UywgNUMgYW5kIDVTRSAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuXG4gIGFuZCAobWluLWRldmljZS13aWR0aCA6IDMyMHB4KVxuICBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA1NjhweClcbiAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpXG4gIGFuZCAoZGV2aWNlLWFzcGVjdC1yYXRpbzogNDAgLyA3MSlcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IHBvcnRyYWl0OlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IGxhbmRzY2FwZTpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKVxue1xuICAuaW50ZXJlc3RzLXRvLWZvbGxvdy1zbGlkZSB7XG4gICAgLmN1c3RvbS1jaGVja2JveCB7XG4gICAgICAuY2hlY2tib3gtdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSA2LCA2UywgNyBhbmQgOCAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuXG4gIGFuZCAobWluLWRldmljZS13aWR0aCA6IDM3NXB4KVxuICBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA2NjdweClcbiAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBwb3J0cmFpdDpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBsYW5kc2NhcGU6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSlcbntcblxufVxuXG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgWCAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuXG4gIGFuZCAobWluLWRldmljZS13aWR0aCA6IDM3NXB4KVxuICBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA4MTJweClcbiAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW8gOiAzKVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgcG9ydHJhaXQ6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgbGFuZHNjYXBlOlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXG57XG5cbn1cblxuLyogLS0tLS0tLS0tLS0gaVBob25lIDYrLCA3KyBhbmQgOCsgLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlblxuICBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiA0MTRweClcbiAgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNzM2cHgpXG4gIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAzKVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgcG9ydHJhaXQ6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgbGFuZHNjYXBlOlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXG57XG5cbn1cbiIsIi8qIC0tLS0tLS0tLS0tIGlQaG9uZSA0IGFuZCA0UyAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzIwcHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogNDgwcHgpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSBhbmQgKGRldmljZS1hc3BlY3QtcmF0aW86IDIvMykge1xuICAuYXBwLXNpZGVtZW51IC51c2VyLWluZm8td3JhcHBlciAudXNlci1uYW1lIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbiAgLmFwcC1zaWRlbWVudSBpb24tbGlzdCBpb24taXRlbSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgNSwgNVMsIDVDIGFuZCA1U0UgLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDMyMHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDU2OHB4KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMikgYW5kIChkZXZpY2UtYXNwZWN0LXJhdGlvOiA0MC83MSkge1xuICAuaW50ZXJlc3RzLXRvLWZvbGxvdy1zbGlkZSAuY3VzdG9tLWNoZWNrYm94IC5jaGVja2JveC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG59XG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgNiwgNlMsIDcgYW5kIDggLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSBYIC0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgNissIDcrIGFuZCA4KyAtLS0tLS0tLS0tLSAqLyJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2lkZS1tZW51L3N0eWxlcy9zaWRlLW1lbnUucmVzcG9uc2l2ZS5zY3NzIiwid2VicGFjazovLy4vLi4vVGl0YW4lMjBFc3RhdGVzL3NyYy9hcHAvc2lkZS1tZW51L3N0eWxlcy9zaWRlLW1lbnUucmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBLDRDQUFBO0FBQ0E7RUFZTTtJQUNFLGVBQUE7RUNmTjtFRG9CSTtJQUNFLGVBQUE7RUNsQk47QUFDRjtBRHVCQSxxREFBQTtBQUNBO0VBWU07SUFDRSxlQUFBO0VDaENOO0FBQ0Y7QURxQ0Esa0RBQUE7QUFhQSxxQ0FBQTtBQWFBLGlEQUFBO0FBM0RBLG9pSkFBb2lKIiwic291cmNlc0NvbnRlbnQiOlsiLy8gKE5vdGU6IERvbid0IGNoYW5nZSB0aGUgb3JkZXIgb2YgdGhlIGRldmljZXMgYXMgaXQgbWF5IGJyZWFrIHRoZSBjb3JyZWN0IGNzcyBwcmVjZWRlbmNlKVxuXG4vLyAoc2VlOiBodHRwczovL2Nzcy10cmlja3MuY29tL3NuaXBwZXRzL2Nzcy9tZWRpYS1xdWVyaWVzLWZvci1zdGFuZGFyZC1kZXZpY2VzLyNpcGhvbmUtcXVlcmllcylcbi8vIChzZWU6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80Nzc1MDI2MS8xMTE2OTU5KVxuXG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgNCBhbmQgNFMgLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlblxuICBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiAzMjBweClcbiAgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNDgwcHgpXG4gIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKVxuICBhbmQgKGRldmljZS1hc3BlY3QtcmF0aW86IDIvMylcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IHBvcnRyYWl0OlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IGxhbmRzY2FwZTpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKVxue1xuICAuYXBwLXNpZGVtZW51IHtcbiAgICAudXNlci1pbmZvLXdyYXBwZXIge1xuICAgICAgLnVzZXItbmFtZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpb24tbGlzdCB7XG4gICAgICBpb24taXRlbSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyogLS0tLS0tLS0tLS0gaVBob25lIDUsIDVTLCA1QyBhbmQgNVNFIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW5cbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzIwcHgpXG4gIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDU2OHB4KVxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilcbiAgYW5kIChkZXZpY2UtYXNwZWN0LXJhdGlvOiA0MCAvIDcxKVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgcG9ydHJhaXQ6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgbGFuZHNjYXBlOlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXG57XG4gIC5pbnRlcmVzdHMtdG8tZm9sbG93LXNsaWRlIHtcbiAgICAuY3VzdG9tLWNoZWNrYm94IHtcbiAgICAgIC5jaGVja2JveC10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyogLS0tLS0tLS0tLS0gaVBob25lIDYsIDZTLCA3IGFuZCA4IC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW5cbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzc1cHgpXG4gIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDY2N3B4KVxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IHBvcnRyYWl0OlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IGxhbmRzY2FwZTpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKVxue1xuXG59XG5cbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSBYIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW5cbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzc1cHgpXG4gIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDgxMnB4KVxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbyA6IDMpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBwb3J0cmFpdDpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBsYW5kc2NhcGU6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSlcbntcblxufVxuXG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgNissIDcrIGFuZCA4KyAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuXG4gIGFuZCAobWluLWRldmljZS13aWR0aCA6IDQxNHB4KVxuICBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA3MzZweClcbiAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBwb3J0cmFpdDpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBsYW5kc2NhcGU6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSlcbntcblxufVxuIiwiLyogLS0tLS0tLS0tLS0gaVBob25lIDQgYW5kIDRTIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA0ODBweCkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIGFuZCAoZGV2aWNlLWFzcGVjdC1yYXRpbzogMi8zKSB7XG4gIC5hcHAtc2lkZW1lbnUgLnVzZXItaW5mby13cmFwcGVyIC51c2VyLW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICAuYXBwLXNpZGVtZW51IGlvbi1saXN0IGlvbi1pdGVtIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSA1LCA1UywgNUMgYW5kIDVTRSAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzIwcHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogNTY4cHgpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSBhbmQgKGRldmljZS1hc3BlY3QtcmF0aW86IDQwLzcxKSB7XG4gIC5pbnRlcmVzdHMtdG8tZm9sbG93LXNsaWRlIC5jdXN0b20tY2hlY2tib3ggLmNoZWNrYm94LXRpdGxlIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbn1cbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSA2LCA2UywgNyBhbmQgOCAtLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0gaVBob25lIFggLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSA2KywgNysgYW5kIDgrIC0tLS0tLS0tLS0tICovIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/service-worker */ 63769);
/* harmony import */ var _nguniversal_express_engine_tokens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nguniversal/express-engine/tokens */ 83640);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/components.module */ 45642);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ 92340);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/http-loader */ 58319);




















function createTranslateLoader(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    providers: [{
      provide: _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouteReuseStrategy,
      useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicRouteStrategy
    }, {
      provide: _angular_core__WEBPACK_IMPORTED_MODULE_6__.APP_INITIALIZER,
      useFactory: (platformId, response) => {
        return () => {
          // In the server.ts we added a custom response header with information about the device requesting the app
          if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_9__.isPlatformServer)(platformId)) {
            if (response && response !== null) {
              // Get custom header from the response sent from the server.ts
              const mobileDeviceHeader = response.get('mobile-device');
              // Set Ionic config mode?
            }
          }
        };
      },
      deps: [_angular_core__WEBPACK_IMPORTED_MODULE_6__.PLATFORM_ID, [new _angular_core__WEBPACK_IMPORTED_MODULE_6__.Optional(), _nguniversal_express_engine_tokens__WEBPACK_IMPORTED_MODULE_0__.RESPONSE]],
      multi: true
    }],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule.withServerTransition({
      appId: 'serverApp'
    }), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserTransferStateModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule.forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, _components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__.ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.production
    }), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule.forRoot({
      loader: {
        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient]
      }
    })]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserTransferStateModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, _components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__.ServiceWorkerModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule]
  });
})();

/***/ }),

/***/ 36516:
/*!***************************************************************************!*\
  !*** ./src/app/components/checkbox-wrapper/checkbox-wrapper.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckboxWrapperComponent": () => (/* binding */ CheckboxWrapperComponent)
/* harmony export */ });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
// Reference to the @ionic/angular Components List:
// https://github.com/ionic-team/ionic/blob/master/angular/src/directives/proxies.ts


const _c0 = ["*"];
class CheckboxWrapperComponent {
  constructor() {}
  ngAfterContentInit() {
    // ContentChild is set
    this.isChecked = this.checkbox.checked;
    // Subscribe to changes
    this.checkbox.ionChange.subscribe(changes => {
      this.isChecked = changes.detail.checked;
    });
  }
  static #_ = this.ɵfac = function CheckboxWrapperComponent_Factory(t) {
    return new (t || CheckboxWrapperComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CheckboxWrapperComponent,
    selectors: [["app-checkbox-wrapper"]],
    contentQueries: function CheckboxWrapperComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonCheckbox, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.checkbox = _t.first);
      }
    },
    hostVars: 2,
    hostBindings: function CheckboxWrapperComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("checkbox-checked", ctx.isChecked);
      }
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function CheckboxWrapperComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
      }
    },
    styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrYm94LXdyYXBwZXIuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9UaXRhbiUyMEVzdGF0ZXMvc3JjL2FwcC9jb21wb25lbnRzL2NoZWNrYm94LXdyYXBwZXIvY2hlY2tib3gtd3JhcHBlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUNDRiIsImZpbGUiOiJjaGVja2JveC13cmFwcGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jaGVja2JveC13cmFwcGVyL2NoZWNrYm94LXdyYXBwZXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi9UaXRhbiUyMEVzdGF0ZXMvc3JjL2FwcC9jb21wb25lbnRzL2NoZWNrYm94LXdyYXBwZXIvY2hlY2tib3gtd3JhcHBlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUNDRjtBRENBLDRlQUE0ZSIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 45642:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _shell_shell_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shell/shell.module */ 75506);
/* harmony import */ var _checkbox_wrapper_checkbox_wrapper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkbox-wrapper/checkbox-wrapper.component */ 36516);
/* harmony import */ var _show_hide_password_show_hide_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./show-hide-password/show-hide-password.component */ 6089);
/* harmony import */ var _countdown_timer_countdown_timer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./countdown-timer/countdown-timer.component */ 39521);
/* harmony import */ var _counter_input_counter_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./counter-input/counter-input.component */ 17352);
/* harmony import */ var _rating_input_rating_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rating-input/rating-input.component */ 88059);
/* harmony import */ var _google_map_google_map_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./google-map/google-map.component */ 92166);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);











class ComponentsModule {
  static #_ = this.ɵfac = function ComponentsModule_Factory(t) {
    return new (t || ComponentsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: ComponentsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _shell_shell_module__WEBPACK_IMPORTED_MODULE_0__.ShellModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule, _shell_shell_module__WEBPACK_IMPORTED_MODULE_0__.ShellModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](ComponentsModule, {
    declarations: [_checkbox_wrapper_checkbox_wrapper_component__WEBPACK_IMPORTED_MODULE_1__.CheckboxWrapperComponent, _show_hide_password_show_hide_password_component__WEBPACK_IMPORTED_MODULE_2__.ShowHidePasswordComponent, _countdown_timer_countdown_timer_component__WEBPACK_IMPORTED_MODULE_3__.CountdownTimerComponent, _counter_input_counter_input_component__WEBPACK_IMPORTED_MODULE_4__.CounterInputComponent, _rating_input_rating_input_component__WEBPACK_IMPORTED_MODULE_5__.RatingInputComponent, _google_map_google_map_component__WEBPACK_IMPORTED_MODULE_6__.GoogleMapComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _shell_shell_module__WEBPACK_IMPORTED_MODULE_0__.ShellModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule],
    exports: [_shell_shell_module__WEBPACK_IMPORTED_MODULE_0__.ShellModule, _checkbox_wrapper_checkbox_wrapper_component__WEBPACK_IMPORTED_MODULE_1__.CheckboxWrapperComponent, _show_hide_password_show_hide_password_component__WEBPACK_IMPORTED_MODULE_2__.ShowHidePasswordComponent, _countdown_timer_countdown_timer_component__WEBPACK_IMPORTED_MODULE_3__.CountdownTimerComponent, _counter_input_counter_input_component__WEBPACK_IMPORTED_MODULE_4__.CounterInputComponent, _rating_input_rating_input_component__WEBPACK_IMPORTED_MODULE_5__.RatingInputComponent, _google_map_google_map_component__WEBPACK_IMPORTED_MODULE_6__.GoogleMapComponent]
  });
})();

/***/ }),

/***/ 39521:
/*!*************************************************************************!*\
  !*** ./src/app/components/countdown-timer/countdown-timer.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountdownTimerComponent": () => (/* binding */ CountdownTimerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 28653);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ 16901);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);








function CountdownTimerComponent_ion_col_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 2)(1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "D");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 4)(4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0._daysLeft);
  }
}
function CountdownTimerComponent_ion_col_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 2)(1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "H");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 4)(4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1._hoursLeft);
  }
}
function CountdownTimerComponent_ion_col_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 2)(1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "M");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 4)(4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2._minutesLeft);
  }
}
function CountdownTimerComponent_ion_col_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 2)(1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "S");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 4)(4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3._secondsLeft);
  }
}
class CountdownTimerComponent {
  constructor(platformId) {
    this.platformId = platformId;
    this._initialUnit = 'hour';
    this._endingUnit = 'second';
    this._updateInterval = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.interval)(1000);
    this._unsubscribeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    // DIVISORS
    // 60 seconds * 60 (minutes) * 24 (hours) = 86400 seconds = 1 day
    this._dayDivisor = 60 * 60 * 24;
    // 60 seconds * 60 (minutes) = 3600 seconds = 1 hour
    this._hourDivisor = 60 * 60;
    // 60 seconds = 1 minute
    this._minuteDivisor = 60;
    this._secondDivisor = 1;
    // MODULUS
    // Neutral modulus
    this._dayModulus = secondsLeft => secondsLeft;
    // The modulus operator (%) returns the division remainder.
    // To figure out how many hours are left after taking in consideration the days, we should do:
    //    (secondsLeft % hourModulus) / hourDivisor
    // In 1 day there are 86400 seconds, and in 1 hour 3600 seconds. 1 day + 1 hour = 90000 seconds
    //    (90000s % 86400s) / 3600s = 1h
    this._hourModulus = secondsLeft => secondsLeft % this._dayDivisor;
    this._minuteModulus = secondsLeft => secondsLeft % this._hourDivisor;
    this._secondModulus = secondsLeft => secondsLeft % this._minuteDivisor;
  }
  set end(endingTime) {
    this._endingTime = endingTime !== undefined && endingTime !== null ? dayjs__WEBPACK_IMPORTED_MODULE_0__(endingTime) : dayjs__WEBPACK_IMPORTED_MODULE_0__();
  }
  set units(units) {
    // 'day', 'hour, 'minute', 'second'
    this._initialUnit = units !== undefined && units.from !== undefined && units.from !== null ? units.from : 'hour';
    this._endingUnit = units !== undefined && units.to !== undefined && units.to !== null ? units.to : 'second';
    // For 'day' unit, use the default modulus
    // Adjust modulus depending on the unit
    if (this._initialUnit === 'hour') {
      // Cancelation modulus
      this._dayModulus = secondsLeft => 1;
      // Neutral modulus
      this._hourModulus = secondsLeft => secondsLeft;
    }
    if (this._initialUnit === 'minute') {
      // Cancelation modulus
      this._dayModulus = secondsLeft => 1;
      this._hourModulus = secondsLeft => 1;
      // Neutral modulus
      this._minuteModulus = secondsLeft => secondsLeft;
    }
    if (this._initialUnit === 'second') {
      // Cancelation modulus
      this._dayModulus = secondsLeft => 1;
      this._hourModulus = secondsLeft => 1;
      this._minuteModulus = secondsLeft => 1;
      // Neutral modulus
      this._secondModulus = secondsLeft => secondsLeft;
    }
  }
  ngOnInit() {
    // I believe if we run this on SSR, it won't ever trigger the change detection and thus the server will be stuck loading
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
      this._updateInterval.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._unsubscribeSubject)).subscribe({
        next: val => {
          this.updateValues();
        },
        error: error => console.error(error),
        complete: () => console.log('[takeUntil] complete')
      });
    } else {
      this.updateValues();
    }
  }
  ngOnDestroy() {
    this._unsubscribeSubject.next();
    this._unsubscribeSubject.complete();
  }
  updateValues() {
    const secondsLeft = this._endingTime.diff(dayjs__WEBPACK_IMPORTED_MODULE_0__(), 'second');
    this._daysLeft = Math.floor(this._dayModulus(secondsLeft) / this._dayDivisor);
    this._hoursLeft = Math.floor(this._hourModulus(secondsLeft) / this._hourDivisor);
    this._minutesLeft = Math.floor(this._minuteModulus(secondsLeft) / this._minuteDivisor);
    this._secondsLeft = Math.floor(this._secondModulus(secondsLeft) / this._secondDivisor);
  }
  static #_ = this.ɵfac = function CountdownTimerComponent_Factory(t) {
    return new (t || CountdownTimerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CountdownTimerComponent,
    selectors: [["app-countdown-timer"]],
    inputs: {
      end: "end",
      units: "units"
    },
    decls: 5,
    vars: 4,
    consts: [[1, "countdown"], ["class", "time", 4, "ngIf"], [1, "time"], [1, "time-unit"], [1, "inner-time"], [1, "time-value"]],
    template: function CountdownTimerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CountdownTimerComponent_ion_col_1_Template, 6, 1, "ion-col", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CountdownTimerComponent_ion_col_2_Template, 6, 1, "ion-col", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CountdownTimerComponent_ion_col_3_Template, 6, 1, "ion-col", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CountdownTimerComponent_ion_col_4_Template, 6, 1, "ion-col", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx._initialUnit === "day");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx._initialUnit === "day" && ctx._endingUnit !== "day" || ctx._initialUnit === "hour" || ctx._endingUnit === "hour");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx._initialUnit === "day" && ctx._endingUnit !== "day" && ctx._endingUnit !== "hour" || ctx._initialUnit === "hour" && ctx._endingUnit !== "hour" || ctx._initialUnit === "minute");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx._endingUnit === "second");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonRow],
    styles: ["[_nghost-%COMP%] {\n  --countdown-margin: 0px;\n  --countdown-padding: 0px;\n  --countdown-time-margin: 0px;\n  --countdown-time-padding: 0px;\n  --countdown-inner-time-margin: 2px;\n  --countdown-inner-time-padding: 0px;\n  --countdown-fill-border: none;\n  --countdown-fill-border-radius: 0px;\n  --countdown-fill-background: transparent;\n  --countdown-fill-shadow: none;\n  --countdown-value-color: #CCC;\n  --countdown-unit-color: #CCC;\n  --countdown-time-flex-direction: row-reverse;\n  display: block;\n}\n[_nghost-%COMP%]   .countdown[_ngcontent-%COMP%] {\n  margin: var(--countdown-margin);\n  padding: var(--countdown-padding);\n  justify-content: center;\n  flex-wrap: nowrap;\n}\n[_nghost-%COMP%]   .time[_ngcontent-%COMP%] {\n  padding: var(--countdown-time-padding);\n  margin: var(--countdown-time-margin);\n  display: flex;\n  flex-direction: var(--countdown-time-flex-direction);\n  align-items: center;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .time[_ngcontent-%COMP%]   .time-unit[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--countdown-unit-color);\n  font-size: 0.7em;\n  text-align: center;\n  text-transform: uppercase;\n  width: 2ex;\n}\n[_nghost-%COMP%]   .time[_ngcontent-%COMP%]   .time-value[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--countdown-value-color);\n  text-align: center;\n  font-size: 1em;\n  line-height: 1em;\n  min-height: 1em;\n  min-width: 2.2ex;\n  min-width: 2.1ch;\n}\n[_nghost-%COMP%]   .inner-time[_ngcontent-%COMP%] {\n  margin: var(--countdown-inner-time-margin);\n  padding: var(--countdown-inner-time-padding);\n}\n\n[fill=countdown][_nghost-%COMP%]   .countdown[_ngcontent-%COMP%] {\n  border: var(--countdown-fill-border);\n  border-radius: var(--countdown-fill-border-radius);\n  background-color: var(--countdown-fill-background);\n  box-shadow: var(--countdown-fill-shadow);\n}\n\n[fill=time][_nghost-%COMP%]   .time[_ngcontent-%COMP%] {\n  border: var(--countdown-fill-border);\n  border-radius: var(--countdown-fill-border-radius);\n  background-color: var(--countdown-fill-background);\n  box-shadow: var(--countdown-fill-shadow);\n}\n\n[fill=inner-time][_nghost-%COMP%]   .inner-time[_ngcontent-%COMP%] {\n  border: var(--countdown-fill-border);\n  border-radius: var(--countdown-fill-border-radius);\n  background-color: var(--countdown-fill-background);\n  box-shadow: var(--countdown-fill-shadow);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50ZG93bi10aW1lci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL1RpdGFuJTIwRXN0YXRlcy9zcmMvYXBwL2NvbXBvbmVudHMvY291bnRkb3duLXRpbWVyL2NvdW50ZG93bi10aW1lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNFLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUVBLDZCQUFBO0VBQ0EsbUNBQUE7RUFDQSx3Q0FBQTtFQUNBLDZCQUFBO0VBRUEsNkJBQUE7RUFDQSw0QkFBQTtFQUVBLDRDQUFBO0VBRUEsY0FBQTtBQ1ZGO0FEWUU7RUFDRSwrQkFBQTtFQUNBLGlDQUFBO0VBRUEsdUJBQUE7RUFDQSxpQkFBQTtBQ1hKO0FEY0U7RUFDRSxzQ0FBQTtFQUNBLG9DQUFBO0VBRUEsYUFBQTtFQUNBLG9EQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ2JKO0FEZUk7RUFDRSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0FDYk47QURnQkk7RUFDRSxjQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFLQSxnQkFBQTtFQUNBLGdCQUFBO0FDbEJOO0FEc0JFO0VBQ0UsMENBQUE7RUFDQSw0Q0FBQTtBQ3BCSjs7QUR5QkU7RUEzRUEsb0NBQUE7RUFDQSxrREFBQTtFQUNBLGtEQUFBO0VBQ0Esd0NBQUE7QUNzREY7O0FEd0JFO0VBakZBLG9DQUFBO0VBQ0Esa0RBQUE7RUFDQSxrREFBQTtFQUNBLHdDQUFBO0FDNkRGOztBRHVCRTtFQXZGQSxvQ0FBQTtFQUNBLGtEQUFBO0VBQ0Esa0RBQUE7RUFDQSx3Q0FBQTtBQ29FRiIsImZpbGUiOiJjb3VudGRvd24tdGltZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWl4aW4gZmlsbC1jb250YWluZXIoKXtcbiAgYm9yZGVyOiB2YXIoLS1jb3VudGRvd24tZmlsbC1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1jb3VudGRvd24tZmlsbC1ib3JkZXItcmFkaXVzKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY291bnRkb3duLWZpbGwtYmFja2dyb3VuZCk7XG4gIGJveC1zaGFkb3c6IHZhcigtLWNvdW50ZG93bi1maWxsLXNoYWRvdyk7XG59XG5cbjpob3N0IHtcbiAgLS1jb3VudGRvd24tbWFyZ2luOiAwcHg7XG4gIC0tY291bnRkb3duLXBhZGRpbmc6IDBweDtcbiAgLS1jb3VudGRvd24tdGltZS1tYXJnaW46IDBweDtcbiAgLS1jb3VudGRvd24tdGltZS1wYWRkaW5nOiAwcHg7XG4gIC0tY291bnRkb3duLWlubmVyLXRpbWUtbWFyZ2luOiAycHg7XG4gIC0tY291bnRkb3duLWlubmVyLXRpbWUtcGFkZGluZzogMHB4O1xuXG4gIC0tY291bnRkb3duLWZpbGwtYm9yZGVyOiBub25lO1xuICAtLWNvdW50ZG93bi1maWxsLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgLS1jb3VudGRvd24tZmlsbC1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1jb3VudGRvd24tZmlsbC1zaGFkb3c6IG5vbmU7XG5cbiAgLS1jb3VudGRvd24tdmFsdWUtY29sb3I6ICNDQ0M7XG4gIC0tY291bnRkb3duLXVuaXQtY29sb3I6ICNDQ0M7XG5cbiAgLS1jb3VudGRvd24tdGltZS1mbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG5cbiAgZGlzcGxheTogYmxvY2s7XG5cbiAgLmNvdW50ZG93biB7XG4gICAgbWFyZ2luOiB2YXIoLS1jb3VudGRvd24tbWFyZ2luKTtcbiAgICBwYWRkaW5nOiB2YXIoLS1jb3VudGRvd24tcGFkZGluZyk7XG5cbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgfVxuXG4gIC50aW1lIHtcbiAgICBwYWRkaW5nOiB2YXIoLS1jb3VudGRvd24tdGltZS1wYWRkaW5nKTtcbiAgICBtYXJnaW46IHZhcigtLWNvdW50ZG93bi10aW1lLW1hcmdpbik7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiB2YXIoLS1jb3VudGRvd24tdGltZS1mbGV4LWRpcmVjdGlvbik7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIC50aW1lLXVuaXQge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBjb2xvcjogdmFyKC0tY291bnRkb3duLXVuaXQtY29sb3IpO1xuICAgICAgZm9udC1zaXplOiAwLjdlbTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICB3aWR0aDogMmV4O1xuICAgIH1cblxuICAgIC50aW1lLXZhbHVlIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgY29sb3I6IHZhcigtLWNvdW50ZG93bi12YWx1ZS1jb2xvcik7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XG4gICAgICBtaW4taGVpZ2h0OiAxZW07XG5cbiAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBhbHdheXMgaGF2ZSBzcGFjZSBmb3IgdHdvIGNoYXJhY3RlcnNcbiAgICAgIC8vIEFzIGNoICh3aWR0aCBvZiB0aGUgY2hhcmFjdGVyICcwJykgdW5pdCBpcyBub3QgMTAwJSBzdXBwb3J0ZWQsIHdlIHdpbGwgdXNlIGV4IChoZWlnaHQgb2YgdGhlICd4JyBjaGFyYWN0ZXIpIGFzIGEgZmFsbGJhY2tcbiAgICAgIC8vIFNlZTogaHR0cHM6Ly93d3cucXVpcmtzbW9kZS5vcmcvY3NzL3VuaXRzLXZhbHVlcy9cbiAgICAgIG1pbi13aWR0aDogMi4yZXg7IC8vIFRoZSAneCcgY2hhcmFjdGVyIGlzIHNlbWktc3F1YXJlIGNoYXIsIHRoYXQncyB3aHkgd2Ugc2V0IDIuMmV4XG4gICAgICBtaW4td2lkdGg6IDIuMWNoOyAvLyBjaCBpcyB0aGUgb25seSBmb250IHVuaXQgYmFzZWQgb24gdGhlIHdpZHRoIG9mIGNoYXJhY3RlcnNcbiAgICB9XG4gIH1cblxuICAuaW5uZXItdGltZSB7XG4gICAgbWFyZ2luOiB2YXIoLS1jb3VudGRvd24taW5uZXItdGltZS1tYXJnaW4pO1xuICAgIHBhZGRpbmc6IHZhcigtLWNvdW50ZG93bi1pbm5lci10aW1lLXBhZGRpbmcpO1xuICB9XG59XG5cbjpob3N0KFtmaWxsPVwiY291bnRkb3duXCJdKSB7XG4gIC5jb3VudGRvd24ge1xuICAgIEBpbmNsdWRlIGZpbGwtY29udGFpbmVyKCk7XG4gIH1cbn1cblxuOmhvc3QoW2ZpbGw9XCJ0aW1lXCJdKSB7XG4gIC50aW1lIHtcbiAgICBAaW5jbHVkZSBmaWxsLWNvbnRhaW5lcigpO1xuICB9XG59XG5cbjpob3N0KFtmaWxsPVwiaW5uZXItdGltZVwiXSkge1xuICAuaW5uZXItdGltZSB7XG4gICAgQGluY2x1ZGUgZmlsbC1jb250YWluZXIoKTtcbiAgfVxufVxuIiwiOmhvc3Qge1xuICAtLWNvdW50ZG93bi1tYXJnaW46IDBweDtcbiAgLS1jb3VudGRvd24tcGFkZGluZzogMHB4O1xuICAtLWNvdW50ZG93bi10aW1lLW1hcmdpbjogMHB4O1xuICAtLWNvdW50ZG93bi10aW1lLXBhZGRpbmc6IDBweDtcbiAgLS1jb3VudGRvd24taW5uZXItdGltZS1tYXJnaW46IDJweDtcbiAgLS1jb3VudGRvd24taW5uZXItdGltZS1wYWRkaW5nOiAwcHg7XG4gIC0tY291bnRkb3duLWZpbGwtYm9yZGVyOiBub25lO1xuICAtLWNvdW50ZG93bi1maWxsLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgLS1jb3VudGRvd24tZmlsbC1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1jb3VudGRvd24tZmlsbC1zaGFkb3c6IG5vbmU7XG4gIC0tY291bnRkb3duLXZhbHVlLWNvbG9yOiAjQ0NDO1xuICAtLWNvdW50ZG93bi11bml0LWNvbG9yOiAjQ0NDO1xuICAtLWNvdW50ZG93bi10aW1lLWZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG46aG9zdCAuY291bnRkb3duIHtcbiAgbWFyZ2luOiB2YXIoLS1jb3VudGRvd24tbWFyZ2luKTtcbiAgcGFkZGluZzogdmFyKC0tY291bnRkb3duLXBhZGRpbmcpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiBub3dyYXA7XG59XG46aG9zdCAudGltZSB7XG4gIHBhZGRpbmc6IHZhcigtLWNvdW50ZG93bi10aW1lLXBhZGRpbmcpO1xuICBtYXJnaW46IHZhcigtLWNvdW50ZG93bi10aW1lLW1hcmdpbik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiB2YXIoLS1jb3VudGRvd24tdGltZS1mbGV4LWRpcmVjdGlvbik7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuOmhvc3QgLnRpbWUgLnRpbWUtdW5pdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogdmFyKC0tY291bnRkb3duLXVuaXQtY29sb3IpO1xuICBmb250LXNpemU6IDAuN2VtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHdpZHRoOiAyZXg7XG59XG46aG9zdCAudGltZSAudGltZS12YWx1ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogdmFyKC0tY291bnRkb3duLXZhbHVlLWNvbG9yKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDFlbTtcbiAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgbWluLWhlaWdodDogMWVtO1xuICBtaW4td2lkdGg6IDIuMmV4O1xuICBtaW4td2lkdGg6IDIuMWNoO1xufVxuOmhvc3QgLmlubmVyLXRpbWUge1xuICBtYXJnaW46IHZhcigtLWNvdW50ZG93bi1pbm5lci10aW1lLW1hcmdpbik7XG4gIHBhZGRpbmc6IHZhcigtLWNvdW50ZG93bi1pbm5lci10aW1lLXBhZGRpbmcpO1xufVxuXG46aG9zdChbZmlsbD1jb3VudGRvd25dKSAuY291bnRkb3duIHtcbiAgYm9yZGVyOiB2YXIoLS1jb3VudGRvd24tZmlsbC1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1jb3VudGRvd24tZmlsbC1ib3JkZXItcmFkaXVzKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY291bnRkb3duLWZpbGwtYmFja2dyb3VuZCk7XG4gIGJveC1zaGFkb3c6IHZhcigtLWNvdW50ZG93bi1maWxsLXNoYWRvdyk7XG59XG5cbjpob3N0KFtmaWxsPXRpbWVdKSAudGltZSB7XG4gIGJvcmRlcjogdmFyKC0tY291bnRkb3duLWZpbGwtYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tY291bnRkb3duLWZpbGwtYm9yZGVyLXJhZGl1cyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvdW50ZG93bi1maWxsLWJhY2tncm91bmQpO1xuICBib3gtc2hhZG93OiB2YXIoLS1jb3VudGRvd24tZmlsbC1zaGFkb3cpO1xufVxuXG46aG9zdChbZmlsbD1pbm5lci10aW1lXSkgLmlubmVyLXRpbWUge1xuICBib3JkZXI6IHZhcigtLWNvdW50ZG93bi1maWxsLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWNvdW50ZG93bi1maWxsLWJvcmRlci1yYWRpdXMpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb3VudGRvd24tZmlsbC1iYWNrZ3JvdW5kKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tY291bnRkb3duLWZpbGwtc2hhZG93KTtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb3VudGRvd24tdGltZXIvY291bnRkb3duLXRpbWVyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vVGl0YW4lMjBFc3RhdGVzL3NyYy9hcHAvY29tcG9uZW50cy9jb3VudGRvd24tdGltZXIvY291bnRkb3duLXRpbWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0UsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBRUEsNkJBQUE7RUFDQSxtQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsNkJBQUE7RUFFQSw2QkFBQTtFQUNBLDRCQUFBO0VBRUEsNENBQUE7RUFFQSxjQUFBO0FDVkY7QURZRTtFQUNFLCtCQUFBO0VBQ0EsaUNBQUE7RUFFQSx1QkFBQTtFQUNBLGlCQUFBO0FDWEo7QURjRTtFQUNFLHNDQUFBO0VBQ0Esb0NBQUE7RUFFQSxhQUFBO0VBQ0Esb0RBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDYko7QURlSTtFQUNFLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7QUNiTjtBRGdCSTtFQUNFLGNBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUtBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNsQk47QURzQkU7RUFDRSwwQ0FBQTtFQUNBLDRDQUFBO0FDcEJKOztBRHlCRTtFQTNFQSxvQ0FBQTtFQUNBLGtEQUFBO0VBQ0Esa0RBQUE7RUFDQSx3Q0FBQTtBQ3NERjs7QUR3QkU7RUFqRkEsb0NBQUE7RUFDQSxrREFBQTtFQUNBLGtEQUFBO0VBQ0Esd0NBQUE7QUM2REY7O0FEdUJFO0VBdkZBLG9DQUFBO0VBQ0Esa0RBQUE7RUFDQSxrREFBQTtFQUNBLHdDQUFBO0FDb0VGO0FEQ0EsNGhPQUE0aE8iLCJzb3VyY2VzQ29udGVudCI6WyJAbWl4aW4gZmlsbC1jb250YWluZXIoKXtcbiAgYm9yZGVyOiB2YXIoLS1jb3VudGRvd24tZmlsbC1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1jb3VudGRvd24tZmlsbC1ib3JkZXItcmFkaXVzKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY291bnRkb3duLWZpbGwtYmFja2dyb3VuZCk7XG4gIGJveC1zaGFkb3c6IHZhcigtLWNvdW50ZG93bi1maWxsLXNoYWRvdyk7XG59XG5cbjpob3N0IHtcbiAgLS1jb3VudGRvd24tbWFyZ2luOiAwcHg7XG4gIC0tY291bnRkb3duLXBhZGRpbmc6IDBweDtcbiAgLS1jb3VudGRvd24tdGltZS1tYXJnaW46IDBweDtcbiAgLS1jb3VudGRvd24tdGltZS1wYWRkaW5nOiAwcHg7XG4gIC0tY291bnRkb3duLWlubmVyLXRpbWUtbWFyZ2luOiAycHg7XG4gIC0tY291bnRkb3duLWlubmVyLXRpbWUtcGFkZGluZzogMHB4O1xuXG4gIC0tY291bnRkb3duLWZpbGwtYm9yZGVyOiBub25lO1xuICAtLWNvdW50ZG93bi1maWxsLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgLS1jb3VudGRvd24tZmlsbC1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1jb3VudGRvd24tZmlsbC1zaGFkb3c6IG5vbmU7XG5cbiAgLS1jb3VudGRvd24tdmFsdWUtY29sb3I6ICNDQ0M7XG4gIC0tY291bnRkb3duLXVuaXQtY29sb3I6ICNDQ0M7XG5cbiAgLS1jb3VudGRvd24tdGltZS1mbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG5cbiAgZGlzcGxheTogYmxvY2s7XG5cbiAgLmNvdW50ZG93biB7XG4gICAgbWFyZ2luOiB2YXIoLS1jb3VudGRvd24tbWFyZ2luKTtcbiAgICBwYWRkaW5nOiB2YXIoLS1jb3VudGRvd24tcGFkZGluZyk7XG5cbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgfVxuXG4gIC50aW1lIHtcbiAgICBwYWRkaW5nOiB2YXIoLS1jb3VudGRvd24tdGltZS1wYWRkaW5nKTtcbiAgICBtYXJnaW46IHZhcigtLWNvdW50ZG93bi10aW1lLW1hcmdpbik7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiB2YXIoLS1jb3VudGRvd24tdGltZS1mbGV4LWRpcmVjdGlvbik7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIC50aW1lLXVuaXQge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBjb2xvcjogdmFyKC0tY291bnRkb3duLXVuaXQtY29sb3IpO1xuICAgICAgZm9udC1zaXplOiAwLjdlbTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICB3aWR0aDogMmV4O1xuICAgIH1cblxuICAgIC50aW1lLXZhbHVlIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgY29sb3I6IHZhcigtLWNvdW50ZG93bi12YWx1ZS1jb2xvcik7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XG4gICAgICBtaW4taGVpZ2h0OiAxZW07XG5cbiAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBhbHdheXMgaGF2ZSBzcGFjZSBmb3IgdHdvIGNoYXJhY3RlcnNcbiAgICAgIC8vIEFzIGNoICh3aWR0aCBvZiB0aGUgY2hhcmFjdGVyICcwJykgdW5pdCBpcyBub3QgMTAwJSBzdXBwb3J0ZWQsIHdlIHdpbGwgdXNlIGV4IChoZWlnaHQgb2YgdGhlICd4JyBjaGFyYWN0ZXIpIGFzIGEgZmFsbGJhY2tcbiAgICAgIC8vIFNlZTogaHR0cHM6Ly93d3cucXVpcmtzbW9kZS5vcmcvY3NzL3VuaXRzLXZhbHVlcy9cbiAgICAgIG1pbi13aWR0aDogMi4yZXg7IC8vIFRoZSAneCcgY2hhcmFjdGVyIGlzIHNlbWktc3F1YXJlIGNoYXIsIHRoYXQncyB3aHkgd2Ugc2V0IDIuMmV4XG4gICAgICBtaW4td2lkdGg6IDIuMWNoOyAvLyBjaCBpcyB0aGUgb25seSBmb250IHVuaXQgYmFzZWQgb24gdGhlIHdpZHRoIG9mIGNoYXJhY3RlcnNcbiAgICB9XG4gIH1cblxuICAuaW5uZXItdGltZSB7XG4gICAgbWFyZ2luOiB2YXIoLS1jb3VudGRvd24taW5uZXItdGltZS1tYXJnaW4pO1xuICAgIHBhZGRpbmc6IHZhcigtLWNvdW50ZG93bi1pbm5lci10aW1lLXBhZGRpbmcpO1xuICB9XG59XG5cbjpob3N0KFtmaWxsPVwiY291bnRkb3duXCJdKSB7XG4gIC5jb3VudGRvd24ge1xuICAgIEBpbmNsdWRlIGZpbGwtY29udGFpbmVyKCk7XG4gIH1cbn1cblxuOmhvc3QoW2ZpbGw9XCJ0aW1lXCJdKSB7XG4gIC50aW1lIHtcbiAgICBAaW5jbHVkZSBmaWxsLWNvbnRhaW5lcigpO1xuICB9XG59XG5cbjpob3N0KFtmaWxsPVwiaW5uZXItdGltZVwiXSkge1xuICAuaW5uZXItdGltZSB7XG4gICAgQGluY2x1ZGUgZmlsbC1jb250YWluZXIoKTtcbiAgfVxufVxuIiwiOmhvc3Qge1xuICAtLWNvdW50ZG93bi1tYXJnaW46IDBweDtcbiAgLS1jb3VudGRvd24tcGFkZGluZzogMHB4O1xuICAtLWNvdW50ZG93bi10aW1lLW1hcmdpbjogMHB4O1xuICAtLWNvdW50ZG93bi10aW1lLXBhZGRpbmc6IDBweDtcbiAgLS1jb3VudGRvd24taW5uZXItdGltZS1tYXJnaW46IDJweDtcbiAgLS1jb3VudGRvd24taW5uZXItdGltZS1wYWRkaW5nOiAwcHg7XG4gIC0tY291bnRkb3duLWZpbGwtYm9yZGVyOiBub25lO1xuICAtLWNvdW50ZG93bi1maWxsLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgLS1jb3VudGRvd24tZmlsbC1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1jb3VudGRvd24tZmlsbC1zaGFkb3c6IG5vbmU7XG4gIC0tY291bnRkb3duLXZhbHVlLWNvbG9yOiAjQ0NDO1xuICAtLWNvdW50ZG93bi11bml0LWNvbG9yOiAjQ0NDO1xuICAtLWNvdW50ZG93bi10aW1lLWZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG46aG9zdCAuY291bnRkb3duIHtcbiAgbWFyZ2luOiB2YXIoLS1jb3VudGRvd24tbWFyZ2luKTtcbiAgcGFkZGluZzogdmFyKC0tY291bnRkb3duLXBhZGRpbmcpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiBub3dyYXA7XG59XG46aG9zdCAudGltZSB7XG4gIHBhZGRpbmc6IHZhcigtLWNvdW50ZG93bi10aW1lLXBhZGRpbmcpO1xuICBtYXJnaW46IHZhcigtLWNvdW50ZG93bi10aW1lLW1hcmdpbik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiB2YXIoLS1jb3VudGRvd24tdGltZS1mbGV4LWRpcmVjdGlvbik7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuOmhvc3QgLnRpbWUgLnRpbWUtdW5pdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogdmFyKC0tY291bnRkb3duLXVuaXQtY29sb3IpO1xuICBmb250LXNpemU6IDAuN2VtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHdpZHRoOiAyZXg7XG59XG46aG9zdCAudGltZSAudGltZS12YWx1ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogdmFyKC0tY291bnRkb3duLXZhbHVlLWNvbG9yKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDFlbTtcbiAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgbWluLWhlaWdodDogMWVtO1xuICBtaW4td2lkdGg6IDIuMmV4O1xuICBtaW4td2lkdGg6IDIuMWNoO1xufVxuOmhvc3QgLmlubmVyLXRpbWUge1xuICBtYXJnaW46IHZhcigtLWNvdW50ZG93bi1pbm5lci10aW1lLW1hcmdpbik7XG4gIHBhZGRpbmc6IHZhcigtLWNvdW50ZG93bi1pbm5lci10aW1lLXBhZGRpbmcpO1xufVxuXG46aG9zdChbZmlsbD1jb3VudGRvd25dKSAuY291bnRkb3duIHtcbiAgYm9yZGVyOiB2YXIoLS1jb3VudGRvd24tZmlsbC1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1jb3VudGRvd24tZmlsbC1ib3JkZXItcmFkaXVzKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY291bnRkb3duLWZpbGwtYmFja2dyb3VuZCk7XG4gIGJveC1zaGFkb3c6IHZhcigtLWNvdW50ZG93bi1maWxsLXNoYWRvdyk7XG59XG5cbjpob3N0KFtmaWxsPXRpbWVdKSAudGltZSB7XG4gIGJvcmRlcjogdmFyKC0tY291bnRkb3duLWZpbGwtYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tY291bnRkb3duLWZpbGwtYm9yZGVyLXJhZGl1cyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvdW50ZG93bi1maWxsLWJhY2tncm91bmQpO1xuICBib3gtc2hhZG93OiB2YXIoLS1jb3VudGRvd24tZmlsbC1zaGFkb3cpO1xufVxuXG46aG9zdChbZmlsbD1pbm5lci10aW1lXSkgLmlubmVyLXRpbWUge1xuICBib3JkZXI6IHZhcigtLWNvdW50ZG93bi1maWxsLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWNvdW50ZG93bi1maWxsLWJvcmRlci1yYWRpdXMpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb3VudGRvd24tZmlsbC1iYWNrZ3JvdW5kKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tY291bnRkb3duLWZpbGwtc2hhZG93KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 17352:
/*!*********************************************************************!*\
  !*** ./src/app/components/counter-input/counter-input.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CounterInputComponent": () => (/* binding */ CounterInputComponent),
/* harmony export */   "counterRangeValidator": () => (/* binding */ counterRangeValidator)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);




function counterRangeValidator(minValue, maxValue) {
  return c => {
    const err = {
      rangeError: {
        given: c.value,
        min: minValue || 0,
        max: maxValue || 10
      }
    };
    return c.value > +maxValue || c.value < +minValue ? err : null;
  };
}
class CounterInputComponent {
  constructor() {
    // eslint-disable-next-line @angular-eslint/no-input-rename
    this._counterValue = 0;
    this.propagateChange = () => {}; // Noop function
    this.validateFn = () => {}; // Noop function
  }
  get counterValue() {
    return this._counterValue;
  }
  set counterValue(val) {
    this._counterValue = val;
    this.propagateChange(val);
  }
  ngOnChanges(inputs) {
    if (inputs.counterRangeMax || inputs.counterRangeMin) {
      this.validateFn = counterRangeValidator(this.counterRangeMin, this.counterRangeMax);
    }
  }
  writeValue(value) {
    if (value) {
      this.counterValue = value;
    }
  }
  registerOnChange(fn) {
    this.propagateChange = fn;
  }
  registerOnTouched() {}
  increase() {
    this.counterValue++;
  }
  decrease() {
    this.counterValue--;
  }
  validate(c) {
    return this.validateFn(c);
  }
  static #_ = this.ɵfac = function CounterInputComponent_Factory(t) {
    return new (t || CounterInputComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CounterInputComponent,
    selectors: [["app-counter-input"]],
    inputs: {
      _counterValue: ["counterValue", "_counterValue"],
      counterRangeMax: ["max", "counterRangeMax"],
      counterRangeMin: ["min", "counterRangeMin"]
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => CounterInputComponent),
      multi: true
    }, {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => CounterInputComponent),
      multi: true
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
    decls: 10,
    vars: 1,
    consts: [[1, "button-outer"], [1, "button-wrapper"], [1, "counter-icon", 3, "click"], ["slot", "icon-only", "name", "remove"], [1, "counter-value"], ["slot", "icon-only", "name", "add"]],
    template: function CounterInputComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "ion-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CounterInputComponent_Template_ion_button_click_2_listener() {
          return ctx.decrease();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0)(7, "div", 1)(8, "ion-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CounterInputComponent_Template_ion_button_click_8_listener() {
          return ctx.increase();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "ion-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx._counterValue);
      }
    },
    dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonIcon],
    styles: ["app-counter-input {\n  --counter-background: #000;\n  --counter-color: #FFF;\n  --counter-color-activated: #FFF;\n  --counter-border-color: #000;\n  --counter-border-radius-outer: 50%;\n  --counter-border-radius-inner: 50%;\n  --counter-size: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\napp-counter-input ion-button.counter-icon {\n  margin: 0px;\n}\napp-counter-input ion-button.counter-icon.button-solid {\n  --background: var(--counter-background);\n  --background-activated: var(--counter-color);\n  --color: var(--counter-color);\n  --color-activated: var(--counter-color-activated);\n  --border-width: 1px;\n  --border-style: solid;\n  --border-color: var(--counter-border-color);\n  --box-shadow: none;\n  --border-radius: var(--counter-border-radius-outer) var(--counter-border-radius-inner) var(--counter-border-radius-inner) var(--counter-border-radius-outer);\n  --padding-bottom: 3px;\n  --padding-end: 3px;\n  --padding-start: 3px;\n  --padding-top: 3px;\n}\napp-counter-input .counter-value {\n  color: var(--counter-color);\n  margin: 0px 10px;\n  width: 2.2ch;\n  text-align: center;\n  font-feature-settings: \"tnum\";\n  font-variant-numeric: tabular-nums;\n}\napp-counter-input:not([basic]) .button-outer {\n  width: var(--counter-size);\n}\napp-counter-input:not([basic]) .button-outer .button-wrapper {\n  display: block;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n  padding-bottom: 100%;\n}\napp-counter-input:not([basic]) .button-outer .button-wrapper .counter-icon {\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  height: auto;\n  width: 100%;\n}\napp-counter-input[basic] {\n  --counter-border-radius-outer: 12px;\n  --counter-border-radius-inner: 0px;\n}\napp-counter-input[basic] .counter-value {\n  display: none;\n}\napp-counter-input[basic] .button-outer:first-child ion-button.counter-icon {\n  --border-radius: var(--counter-border-radius-outer) var(--counter-border-radius-inner) var(--counter-border-radius-inner) var(--counter-border-radius-outer);\n}\napp-counter-input[basic] .button-outer:last-child {\n  margin-left: -1px;\n}\napp-counter-input[basic] .button-outer:last-child ion-button.counter-icon {\n  --border-radius: var(--counter-border-radius-inner) var(--counter-border-radius-outer) var(--counter-border-radius-outer) var(--counter-border-radius-inner);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50ZXItaW5wdXQuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9UaXRhbiUyMEVzdGF0ZXMvc3JjL2FwcC9jb21wb25lbnRzL2NvdW50ZXItaW5wdXQvY291bnRlci1pbnB1dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQ0FBQTtFQUNBLG9CQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNBRjtBREVFO0VBaUJFLFdBQUE7QUNoQko7QURBSTtFQUNFLHVDQUFBO0VBQ0EsNENBQUE7RUFDQSw2QkFBQTtFQUNBLGlEQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSw0SkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FDRU47QURJRTtFQUNFLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLGtDQUFBO0FDRko7QURPSTtFQUNFLDBCQUFBO0FDTE47QURPTTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FDTFI7QURPUTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDTFY7QURXRTtFQUNFLG1DQUFBO0VBQ0Esa0NBQUE7QUNUSjtBRFdJO0VBQ0UsYUFBQTtBQ1ROO0FEY1E7RUFDRSw0SkFBQTtBQ1pWO0FEZ0JNO0VBRUUsaUJBQUE7QUNmUjtBRGlCUTtFQUNFLDRKQUFBO0FDZlYiLCJmaWxlIjoiY291bnRlci1pbnB1dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1jb3VudGVyLWlucHV0IHtcbiAgLS1jb3VudGVyLWJhY2tncm91bmQ6ICMwMDA7XG4gIC0tY291bnRlci1jb2xvcjogI0ZGRjtcbiAgLS1jb3VudGVyLWNvbG9yLWFjdGl2YXRlZDogI0ZGRjtcbiAgLS1jb3VudGVyLWJvcmRlci1jb2xvcjogIzAwMDtcbiAgLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtb3V0ZXI6IDUwJTtcbiAgLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtaW5uZXI6IDUwJTtcbiAgLS1jb3VudGVyLXNpemU6IDMwcHg7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblxuICBpb24tYnV0dG9uLmNvdW50ZXItaWNvbiB7XG4gICAgJi5idXR0b24tc29saWQge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1jb3VudGVyLWJhY2tncm91bmQpO1xuICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdmFyKC0tY291bnRlci1jb2xvcik7XG4gICAgICAtLWNvbG9yOiB2YXIoLS1jb3VudGVyLWNvbG9yKTtcbiAgICAgIC0tY29sb3ItYWN0aXZhdGVkOiB2YXIoLS1jb3VudGVyLWNvbG9yLWFjdGl2YXRlZCk7XG4gICAgICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAgICAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWNvdW50ZXItYm9yZGVyLWNvbG9yKTtcbiAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogdmFyKC0tY291bnRlci1ib3JkZXItcmFkaXVzLW91dGVyKSB2YXIoLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtaW5uZXIpIHZhcigtLWNvdW50ZXItYm9yZGVyLXJhZGl1cy1pbm5lcikgdmFyKC0tY291bnRlci1ib3JkZXItcmFkaXVzLW91dGVyKTtcbiAgICAgIC0tcGFkZGluZy1ib3R0b206IDNweDtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDNweDtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogM3B4O1xuICAgICAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAgIH1cblxuICAgIG1hcmdpbjogMHB4O1xuICB9XG5cbiAgLmNvdW50ZXItdmFsdWUge1xuICAgIGNvbG9yOiB2YXIoLS1jb3VudGVyLWNvbG9yKTtcbiAgICBtYXJnaW46IDBweCAxMHB4O1xuICAgIHdpZHRoOiAyLjJjaDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiAndG51bSc7XG4gICAgZm9udC12YXJpYW50LW51bWVyaWM6IHRhYnVsYXItbnVtcztcbiAgfVxuXG4gICY6bm90KFtiYXNpY10pIHtcbiAgICAvLyBGb3JjZSBlYWNoIGNvdW50ZXIgYnV0dG9uIHRvIGhhdmUgYSAxOjEgYXNwZWN0IHJhdGlvXG4gICAgLmJ1dHRvbi1vdXRlciB7XG4gICAgICB3aWR0aDogdmFyKC0tY291bnRlci1zaXplKTtcblxuICAgICAgLmJ1dHRvbi13cmFwcGVyIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMDAlO1xuXG4gICAgICAgIC5jb3VudGVyLWljb24ge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmW2Jhc2ljXSB7XG4gICAgLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtb3V0ZXI6IDEycHg7XG4gICAgLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtaW5uZXI6IDBweDtcblxuICAgIC5jb3VudGVyLXZhbHVlIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLmJ1dHRvbi1vdXRlciB7XG4gICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgaW9uLWJ1dHRvbi5jb3VudGVyLWljb24ge1xuICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogdmFyKC0tY291bnRlci1ib3JkZXItcmFkaXVzLW91dGVyKSB2YXIoLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtaW5uZXIpIHZhcigtLWNvdW50ZXItYm9yZGVyLXJhZGl1cy1pbm5lcikgdmFyKC0tY291bnRlci1ib3JkZXItcmFkaXVzLW91dGVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAvLyBUbyBhdm9pZCBkb3VibGUgYm9yZGVyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xuXG4gICAgICAgIGlvbi1idXR0b24uY291bnRlci1pY29uIHtcbiAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IHZhcigtLWNvdW50ZXItYm9yZGVyLXJhZGl1cy1pbm5lcikgdmFyKC0tY291bnRlci1ib3JkZXItcmFkaXVzLW91dGVyKSB2YXIoLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtb3V0ZXIpIHZhcigtLWNvdW50ZXItYm9yZGVyLXJhZGl1cy1pbm5lcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImFwcC1jb3VudGVyLWlucHV0IHtcbiAgLS1jb3VudGVyLWJhY2tncm91bmQ6ICMwMDA7XG4gIC0tY291bnRlci1jb2xvcjogI0ZGRjtcbiAgLS1jb3VudGVyLWNvbG9yLWFjdGl2YXRlZDogI0ZGRjtcbiAgLS1jb3VudGVyLWJvcmRlci1jb2xvcjogIzAwMDtcbiAgLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtb3V0ZXI6IDUwJTtcbiAgLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtaW5uZXI6IDUwJTtcbiAgLS1jb3VudGVyLXNpemU6IDMwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5hcHAtY291bnRlci1pbnB1dCBpb24tYnV0dG9uLmNvdW50ZXItaWNvbiB7XG4gIG1hcmdpbjogMHB4O1xufVxuYXBwLWNvdW50ZXItaW5wdXQgaW9uLWJ1dHRvbi5jb3VudGVyLWljb24uYnV0dG9uLXNvbGlkIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1jb3VudGVyLWJhY2tncm91bmQpO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB2YXIoLS1jb3VudGVyLWNvbG9yKTtcbiAgLS1jb2xvcjogdmFyKC0tY291bnRlci1jb2xvcik7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiB2YXIoLS1jb3VudGVyLWNvbG9yLWFjdGl2YXRlZCk7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWNvdW50ZXItYm9yZGVyLWNvbG9yKTtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICAtLWJvcmRlci1yYWRpdXM6IHZhcigtLWNvdW50ZXItYm9yZGVyLXJhZGl1cy1vdXRlcikgdmFyKC0tY291bnRlci1ib3JkZXItcmFkaXVzLWlubmVyKSB2YXIoLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtaW5uZXIpIHZhcigtLWNvdW50ZXItYm9yZGVyLXJhZGl1cy1vdXRlcik7XG4gIC0tcGFkZGluZy1ib3R0b206IDNweDtcbiAgLS1wYWRkaW5nLWVuZDogM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDNweDtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xufVxuYXBwLWNvdW50ZXItaW5wdXQgLmNvdW50ZXItdmFsdWUge1xuICBjb2xvcjogdmFyKC0tY291bnRlci1jb2xvcik7XG4gIG1hcmdpbjogMHB4IDEwcHg7XG4gIHdpZHRoOiAyLjJjaDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IFwidG51bVwiO1xuICBmb250LXZhcmlhbnQtbnVtZXJpYzogdGFidWxhci1udW1zO1xufVxuYXBwLWNvdW50ZXItaW5wdXQ6bm90KFtiYXNpY10pIC5idXR0b24tb3V0ZXIge1xuICB3aWR0aDogdmFyKC0tY291bnRlci1zaXplKTtcbn1cbmFwcC1jb3VudGVyLWlucHV0Om5vdChbYmFzaWNdKSAuYnV0dG9uLW91dGVyIC5idXR0b24td3JhcHBlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWJvdHRvbTogMTAwJTtcbn1cbmFwcC1jb3VudGVyLWlucHV0Om5vdChbYmFzaWNdKSAuYnV0dG9uLW91dGVyIC5idXR0b24td3JhcHBlciAuY291bnRlci1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbn1cbmFwcC1jb3VudGVyLWlucHV0W2Jhc2ljXSB7XG4gIC0tY291bnRlci1ib3JkZXItcmFkaXVzLW91dGVyOiAxMnB4O1xuICAtLWNvdW50ZXItYm9yZGVyLXJhZGl1cy1pbm5lcjogMHB4O1xufVxuYXBwLWNvdW50ZXItaW5wdXRbYmFzaWNdIC5jb3VudGVyLXZhbHVlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbmFwcC1jb3VudGVyLWlucHV0W2Jhc2ljXSAuYnV0dG9uLW91dGVyOmZpcnN0LWNoaWxkIGlvbi1idXR0b24uY291bnRlci1pY29uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiB2YXIoLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtb3V0ZXIpIHZhcigtLWNvdW50ZXItYm9yZGVyLXJhZGl1cy1pbm5lcikgdmFyKC0tY291bnRlci1ib3JkZXItcmFkaXVzLWlubmVyKSB2YXIoLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtb3V0ZXIpO1xufVxuYXBwLWNvdW50ZXItaW5wdXRbYmFzaWNdIC5idXR0b24tb3V0ZXI6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1sZWZ0OiAtMXB4O1xufVxuYXBwLWNvdW50ZXItaW5wdXRbYmFzaWNdIC5idXR0b24tb3V0ZXI6bGFzdC1jaGlsZCBpb24tYnV0dG9uLmNvdW50ZXItaWNvbiB7XG4gIC0tYm9yZGVyLXJhZGl1czogdmFyKC0tY291bnRlci1ib3JkZXItcmFkaXVzLWlubmVyKSB2YXIoLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtb3V0ZXIpIHZhcigtLWNvdW50ZXItYm9yZGVyLXJhZGl1cy1vdXRlcikgdmFyKC0tY291bnRlci1ib3JkZXItcmFkaXVzLWlubmVyKTtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb3VudGVyLWlucHV0L2NvdW50ZXItaW5wdXQuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi9UaXRhbiUyMEVzdGF0ZXMvc3JjL2FwcC9jb21wb25lbnRzL2NvdW50ZXItaW5wdXQvY291bnRlci1pbnB1dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQ0FBQTtFQUNBLG9CQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNBRjtBREVFO0VBaUJFLFdBQUE7QUNoQko7QURBSTtFQUNFLHVDQUFBO0VBQ0EsNENBQUE7RUFDQSw2QkFBQTtFQUNBLGlEQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSw0SkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FDRU47QURJRTtFQUNFLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLGtDQUFBO0FDRko7QURPSTtFQUNFLDBCQUFBO0FDTE47QURPTTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FDTFI7QURPUTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDTFY7QURXRTtFQUNFLG1DQUFBO0VBQ0Esa0NBQUE7QUNUSjtBRFdJO0VBQ0UsYUFBQTtBQ1ROO0FEY1E7RUFDRSw0SkFBQTtBQ1pWO0FEZ0JNO0VBRUUsaUJBQUE7QUNmUjtBRGlCUTtFQUNFLDRKQUFBO0FDZlY7QURDQSxnbVBBQWdtUCIsInNvdXJjZXNDb250ZW50IjpbImFwcC1jb3VudGVyLWlucHV0IHtcbiAgLS1jb3VudGVyLWJhY2tncm91bmQ6ICMwMDA7XG4gIC0tY291bnRlci1jb2xvcjogI0ZGRjtcbiAgLS1jb3VudGVyLWNvbG9yLWFjdGl2YXRlZDogI0ZGRjtcbiAgLS1jb3VudGVyLWJvcmRlci1jb2xvcjogIzAwMDtcbiAgLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtb3V0ZXI6IDUwJTtcbiAgLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtaW5uZXI6IDUwJTtcbiAgLS1jb3VudGVyLXNpemU6IDMwcHg7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblxuICBpb24tYnV0dG9uLmNvdW50ZXItaWNvbiB7XG4gICAgJi5idXR0b24tc29saWQge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1jb3VudGVyLWJhY2tncm91bmQpO1xuICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdmFyKC0tY291bnRlci1jb2xvcik7XG4gICAgICAtLWNvbG9yOiB2YXIoLS1jb3VudGVyLWNvbG9yKTtcbiAgICAgIC0tY29sb3ItYWN0aXZhdGVkOiB2YXIoLS1jb3VudGVyLWNvbG9yLWFjdGl2YXRlZCk7XG4gICAgICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAgICAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWNvdW50ZXItYm9yZGVyLWNvbG9yKTtcbiAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogdmFyKC0tY291bnRlci1ib3JkZXItcmFkaXVzLW91dGVyKSB2YXIoLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtaW5uZXIpIHZhcigtLWNvdW50ZXItYm9yZGVyLXJhZGl1cy1pbm5lcikgdmFyKC0tY291bnRlci1ib3JkZXItcmFkaXVzLW91dGVyKTtcbiAgICAgIC0tcGFkZGluZy1ib3R0b206IDNweDtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDNweDtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogM3B4O1xuICAgICAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAgIH1cblxuICAgIG1hcmdpbjogMHB4O1xuICB9XG5cbiAgLmNvdW50ZXItdmFsdWUge1xuICAgIGNvbG9yOiB2YXIoLS1jb3VudGVyLWNvbG9yKTtcbiAgICBtYXJnaW46IDBweCAxMHB4O1xuICAgIHdpZHRoOiAyLjJjaDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiAndG51bSc7XG4gICAgZm9udC12YXJpYW50LW51bWVyaWM6IHRhYnVsYXItbnVtcztcbiAgfVxuXG4gICY6bm90KFtiYXNpY10pIHtcbiAgICAvLyBGb3JjZSBlYWNoIGNvdW50ZXIgYnV0dG9uIHRvIGhhdmUgYSAxOjEgYXNwZWN0IHJhdGlvXG4gICAgLmJ1dHRvbi1vdXRlciB7XG4gICAgICB3aWR0aDogdmFyKC0tY291bnRlci1zaXplKTtcblxuICAgICAgLmJ1dHRvbi13cmFwcGVyIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMDAlO1xuXG4gICAgICAgIC5jb3VudGVyLWljb24ge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmW2Jhc2ljXSB7XG4gICAgLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtb3V0ZXI6IDEycHg7XG4gICAgLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtaW5uZXI6IDBweDtcblxuICAgIC5jb3VudGVyLXZhbHVlIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLmJ1dHRvbi1vdXRlciB7XG4gICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgaW9uLWJ1dHRvbi5jb3VudGVyLWljb24ge1xuICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogdmFyKC0tY291bnRlci1ib3JkZXItcmFkaXVzLW91dGVyKSB2YXIoLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtaW5uZXIpIHZhcigtLWNvdW50ZXItYm9yZGVyLXJhZGl1cy1pbm5lcikgdmFyKC0tY291bnRlci1ib3JkZXItcmFkaXVzLW91dGVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAvLyBUbyBhdm9pZCBkb3VibGUgYm9yZGVyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xuXG4gICAgICAgIGlvbi1idXR0b24uY291bnRlci1pY29uIHtcbiAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IHZhcigtLWNvdW50ZXItYm9yZGVyLXJhZGl1cy1pbm5lcikgdmFyKC0tY291bnRlci1ib3JkZXItcmFkaXVzLW91dGVyKSB2YXIoLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtb3V0ZXIpIHZhcigtLWNvdW50ZXItYm9yZGVyLXJhZGl1cy1pbm5lcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImFwcC1jb3VudGVyLWlucHV0IHtcbiAgLS1jb3VudGVyLWJhY2tncm91bmQ6ICMwMDA7XG4gIC0tY291bnRlci1jb2xvcjogI0ZGRjtcbiAgLS1jb3VudGVyLWNvbG9yLWFjdGl2YXRlZDogI0ZGRjtcbiAgLS1jb3VudGVyLWJvcmRlci1jb2xvcjogIzAwMDtcbiAgLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtb3V0ZXI6IDUwJTtcbiAgLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtaW5uZXI6IDUwJTtcbiAgLS1jb3VudGVyLXNpemU6IDMwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5hcHAtY291bnRlci1pbnB1dCBpb24tYnV0dG9uLmNvdW50ZXItaWNvbiB7XG4gIG1hcmdpbjogMHB4O1xufVxuYXBwLWNvdW50ZXItaW5wdXQgaW9uLWJ1dHRvbi5jb3VudGVyLWljb24uYnV0dG9uLXNvbGlkIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1jb3VudGVyLWJhY2tncm91bmQpO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB2YXIoLS1jb3VudGVyLWNvbG9yKTtcbiAgLS1jb2xvcjogdmFyKC0tY291bnRlci1jb2xvcik7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiB2YXIoLS1jb3VudGVyLWNvbG9yLWFjdGl2YXRlZCk7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWNvdW50ZXItYm9yZGVyLWNvbG9yKTtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICAtLWJvcmRlci1yYWRpdXM6IHZhcigtLWNvdW50ZXItYm9yZGVyLXJhZGl1cy1vdXRlcikgdmFyKC0tY291bnRlci1ib3JkZXItcmFkaXVzLWlubmVyKSB2YXIoLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtaW5uZXIpIHZhcigtLWNvdW50ZXItYm9yZGVyLXJhZGl1cy1vdXRlcik7XG4gIC0tcGFkZGluZy1ib3R0b206IDNweDtcbiAgLS1wYWRkaW5nLWVuZDogM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDNweDtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xufVxuYXBwLWNvdW50ZXItaW5wdXQgLmNvdW50ZXItdmFsdWUge1xuICBjb2xvcjogdmFyKC0tY291bnRlci1jb2xvcik7XG4gIG1hcmdpbjogMHB4IDEwcHg7XG4gIHdpZHRoOiAyLjJjaDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IFwidG51bVwiO1xuICBmb250LXZhcmlhbnQtbnVtZXJpYzogdGFidWxhci1udW1zO1xufVxuYXBwLWNvdW50ZXItaW5wdXQ6bm90KFtiYXNpY10pIC5idXR0b24tb3V0ZXIge1xuICB3aWR0aDogdmFyKC0tY291bnRlci1zaXplKTtcbn1cbmFwcC1jb3VudGVyLWlucHV0Om5vdChbYmFzaWNdKSAuYnV0dG9uLW91dGVyIC5idXR0b24td3JhcHBlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWJvdHRvbTogMTAwJTtcbn1cbmFwcC1jb3VudGVyLWlucHV0Om5vdChbYmFzaWNdKSAuYnV0dG9uLW91dGVyIC5idXR0b24td3JhcHBlciAuY291bnRlci1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbn1cbmFwcC1jb3VudGVyLWlucHV0W2Jhc2ljXSB7XG4gIC0tY291bnRlci1ib3JkZXItcmFkaXVzLW91dGVyOiAxMnB4O1xuICAtLWNvdW50ZXItYm9yZGVyLXJhZGl1cy1pbm5lcjogMHB4O1xufVxuYXBwLWNvdW50ZXItaW5wdXRbYmFzaWNdIC5jb3VudGVyLXZhbHVlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbmFwcC1jb3VudGVyLWlucHV0W2Jhc2ljXSAuYnV0dG9uLW91dGVyOmZpcnN0LWNoaWxkIGlvbi1idXR0b24uY291bnRlci1pY29uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiB2YXIoLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtb3V0ZXIpIHZhcigtLWNvdW50ZXItYm9yZGVyLXJhZGl1cy1pbm5lcikgdmFyKC0tY291bnRlci1ib3JkZXItcmFkaXVzLWlubmVyKSB2YXIoLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtb3V0ZXIpO1xufVxuYXBwLWNvdW50ZXItaW5wdXRbYmFzaWNdIC5idXR0b24tb3V0ZXI6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1sZWZ0OiAtMXB4O1xufVxuYXBwLWNvdW50ZXItaW5wdXRbYmFzaWNdIC5idXR0b24tb3V0ZXI6bGFzdC1jaGlsZCBpb24tYnV0dG9uLmNvdW50ZXItaWNvbiB7XG4gIC0tYm9yZGVyLXJhZGl1czogdmFyKC0tY291bnRlci1ib3JkZXItcmFkaXVzLWlubmVyKSB2YXIoLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtb3V0ZXIpIHZhcigtLWNvdW50ZXItYm9yZGVyLXJhZGl1cy1vdXRlcikgdmFyKC0tY291bnRlci1ib3JkZXItcmFkaXVzLWlubmVyKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
    encapsulation: 2
  });
}

/***/ }),

/***/ 92166:
/*!***************************************************************!*\
  !*** ./src/app/components/google-map/google-map.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoogleMapComponent": () => (/* binding */ GoogleMapComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);



class GoogleMapComponent {
  constructor(_elementRef, platformId) {
    this._elementRef = _elementRef;
    this.platformId = platformId;
    this.$mapReady = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._mapIdledOnce = false;
  }
  ngOnInit() {
    // there are some issues with maps in server side
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
      this.initMap();
    }
  }
  initMap() {
    this._el = this._elementRef.nativeElement;
    this._map = new google.maps.Map(this._el, this.mapOptions);
    // Workarround for init method: try to catch the first idle event after the map creation
    // (this._mapIdledOnce). The following idle events don't matter.
    const _ready_listener = this._map.addListener('idle', () => {
      console.log('mapReady - IDLE');
      if (!this._mapIdledOnce) {
        this.$mapReady.emit(this._map);
        this._mapIdledOnce = true;
        // Stop listening to event, the map is ready
        google.maps.event.removeListener(_ready_listener);
      }
    });
  }
  static #_ = this.ɵfac = function GoogleMapComponent_Factory(t) {
    return new (t || GoogleMapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: GoogleMapComponent,
    selectors: [["app-google-map"]],
    inputs: {
      mapOptions: "mapOptions"
    },
    decls: 0,
    vars: 0,
    template: function GoogleMapComponent_Template(rf, ctx) {},
    encapsulation: 2
  });
}

/***/ }),

/***/ 88059:
/*!*******************************************************************!*\
  !*** ./src/app/components/rating-input/rating-input.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RatingInputComponent": () => (/* binding */ RatingInputComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);





function RatingInputComponent_ion_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingInputComponent_ion_button_0_Template_ion_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const i_r2 = restoredCtx.index;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.rate(i_r2 + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-icon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx_r0.value === undefined ? "star-outline" : ctx_r0.value > i_r2 ? ctx_r0.value < i_r2 + 1 ? "star-half" : "star" : "star-outline");
  }
}
class RatingInputComponent {
  constructor() {
    this.max = 5;
    this.readOnly = false;
    this.propagateChange = () => {};
  }
  ngOnInit() {
    this.range = []; // the amout of stars
    for (let i = 0; i < this.max; i++) {
      this.range[i] = 1;
    }
  }
  get value() {
    return this.innerValue;
  }
  set value(val) {
    if (val !== this.innerValue) {
      this.innerValue = val;
      this.propagateChange(val);
    }
  }
  writeValue(value) {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }
  registerOnChange(fn) {
    this.propagateChange = fn;
  }
  registerOnTouched() {}
  rate(amount) {
    if (!this.readOnly && amount >= 0 && amount <= this.range.length) {
      this.value = amount;
    }
  }
  static #_ = this.ɵfac = function RatingInputComponent_Factory(t) {
    return new (t || RatingInputComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: RatingInputComponent,
    selectors: [["app-rating-input"]],
    inputs: {
      max: "max",
      readOnly: "readOnly"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => RatingInputComponent),
      multi: true
    }])],
    decls: 1,
    vars: 1,
    consts: [["class", "rating-icon", "fill", "clear", "shape", "round", 3, "click", 4, "ngFor", "ngForOf"], ["fill", "clear", "shape", "round", 1, "rating-icon", 3, "click"], ["slot", "icon-only", 3, "name"]],
    template: function RatingInputComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RatingInputComponent_ion_button_0_Template, 2, 1, "ion-button", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.range);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonIcon],
    styles: ["app-rating-input {\n  --rating-background: transparent;\n  --rating-color: #000;\n  --rating-size: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\napp-rating-input ion-button.rating-icon {\n  --background: var(--rating-background);\n  --color: var(--rating-color);\n  --color-activated: var(--rating-color);\n  --box-shadow: none;\n  --padding-bottom: 0px;\n  --padding-end: 4px;\n  --padding-start: 4px;\n  --padding-top: 0px;\n  margin: 0px;\n  flex: 1;\n  width: var(--rating-size);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhdGluZy1pbnB1dC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL1RpdGFuJTIwRXN0YXRlcy9zcmMvYXBwL2NvbXBvbmVudHMvcmF0aW5nLWlucHV0L3JhdGluZy1pbnB1dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDQUY7QURFQztFQUNHLHNDQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQ0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFFQSxXQUFBO0VBQ0YsT0FBQTtFQUNDLHlCQUFBO0FDREgiLCJmaWxlIjoicmF0aW5nLWlucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLXJhdGluZy1pbnB1dCB7XG4gIC0tcmF0aW5nLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLXJhdGluZy1jb2xvcjogIzAwMDtcbiAgLS1yYXRpbmctc2l6ZTogMzJweDtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG5cdGlvbi1idXR0b24ucmF0aW5nLWljb24ge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tcmF0aW5nLWJhY2tncm91bmQpO1xuICAgIC0tY29sb3I6IHZhcigtLXJhdGluZy1jb2xvcik7XG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6IHZhcigtLXJhdGluZy1jb2xvcik7XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMHB4O1xuXG4gICAgbWFyZ2luOiAwcHg7XG5cdFx0ZmxleDogMTtcblx0ICB3aWR0aDogdmFyKC0tcmF0aW5nLXNpemUpO1xuXHR9XG59XG4iLCJhcHAtcmF0aW5nLWlucHV0IHtcbiAgLS1yYXRpbmctYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tcmF0aW5nLWNvbG9yOiAjMDAwO1xuICAtLXJhdGluZy1zaXplOiAzMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuYXBwLXJhdGluZy1pbnB1dCBpb24tYnV0dG9uLnJhdGluZy1pY29uIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1yYXRpbmctYmFja2dyb3VuZCk7XG4gIC0tY29sb3I6IHZhcigtLXJhdGluZy1jb2xvcik7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiB2YXIoLS1yYXRpbmctY29sb3IpO1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICBtYXJnaW46IDBweDtcbiAgZmxleDogMTtcbiAgd2lkdGg6IHZhcigtLXJhdGluZy1zaXplKTtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9yYXRpbmctaW5wdXQvcmF0aW5nLWlucHV0LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vVGl0YW4lMjBFc3RhdGVzL3NyYy9hcHAvY29tcG9uZW50cy9yYXRpbmctaW5wdXQvcmF0aW5nLWlucHV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNBRjtBREVDO0VBQ0csc0NBQUE7RUFDQSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUVBLFdBQUE7RUFDRixPQUFBO0VBQ0MseUJBQUE7QUNESDtBRENBLG9nRUFBb2dFIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLXJhdGluZy1pbnB1dCB7XG4gIC0tcmF0aW5nLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLXJhdGluZy1jb2xvcjogIzAwMDtcbiAgLS1yYXRpbmctc2l6ZTogMzJweDtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG5cdGlvbi1idXR0b24ucmF0aW5nLWljb24ge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tcmF0aW5nLWJhY2tncm91bmQpO1xuICAgIC0tY29sb3I6IHZhcigtLXJhdGluZy1jb2xvcik7XG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6IHZhcigtLXJhdGluZy1jb2xvcik7XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMHB4O1xuXG4gICAgbWFyZ2luOiAwcHg7XG5cdFx0ZmxleDogMTtcblx0ICB3aWR0aDogdmFyKC0tcmF0aW5nLXNpemUpO1xuXHR9XG59XG4iLCJhcHAtcmF0aW5nLWlucHV0IHtcbiAgLS1yYXRpbmctYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tcmF0aW5nLWNvbG9yOiAjMDAwO1xuICAtLXJhdGluZy1zaXplOiAzMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuYXBwLXJhdGluZy1pbnB1dCBpb24tYnV0dG9uLnJhdGluZy1pY29uIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1yYXRpbmctYmFja2dyb3VuZCk7XG4gIC0tY29sb3I6IHZhcigtLXJhdGluZy1jb2xvcik7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiB2YXIoLS1yYXRpbmctY29sb3IpO1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICBtYXJnaW46IDBweDtcbiAgZmxleDogMTtcbiAgd2lkdGg6IHZhcigtLXJhdGluZy1zaXplKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
    encapsulation: 2
  });
}

/***/ }),

/***/ 6089:
/*!*******************************************************************************!*\
  !*** ./src/app/components/show-hide-password/show-hide-password.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowHidePasswordComponent": () => (/* binding */ ShowHidePasswordComponent)
/* harmony export */ });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);



const _c0 = ["*"];
class ShowHidePasswordComponent {
  constructor() {
    this.showPassword = false;
  }
  toggleShow() {
    this.showPassword = !this.showPassword;
    this.input.type = this.showPassword ? 'text' : 'password';
  }
  static #_ = this.ɵfac = function ShowHidePasswordComponent_Factory(t) {
    return new (t || ShowHidePasswordComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ShowHidePasswordComponent,
    selectors: [["app-show-hide-password"]],
    contentQueries: function ShowHidePasswordComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonInput, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
      }
    },
    ngContentSelectors: _c0,
    decls: 4,
    vars: 2,
    consts: [[1, "type-toggle", 3, "click"], ["name", "eye-off-outline", 1, "show-option", 3, "hidden"], ["name", "eye-outline", 1, "hide-option", 3, "hidden"]],
    template: function ShowHidePasswordComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowHidePasswordComponent_Template_a_click_1_listener() {
          return ctx.toggleShow();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ion-icon", 1)(3, "ion-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.showPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.showPassword);
      }
    },
    dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonIcon],
    styles: ["[_nghost-%COMP%] {\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n[_nghost-%COMP%]   .type-toggle[_ngcontent-%COMP%] {\n  padding-inline-start: 0.5rem;\n}\n[_nghost-%COMP%]   .type-toggle[_ngcontent-%COMP%]   .show-option[_ngcontent-%COMP%], [_nghost-%COMP%]   .type-toggle[_ngcontent-%COMP%]   .hide-option[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  display: block;\n}\n[_nghost-%COMP%]   .type-toggle[_ngcontent-%COMP%]   .show-option[_ngcontent-%COMP%]:not(ion-icon), [_nghost-%COMP%]   .type-toggle[_ngcontent-%COMP%]   .hide-option[_ngcontent-%COMP%]:not(ion-icon) {\n  text-transform: uppercase;\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3ctaGlkZS1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL1RpdGFuJTIwRXN0YXRlcy9zcmMvYXBwL2NvbXBvbmVudHMvc2hvdy1oaWRlLXBhc3N3b3JkL3Nob3ctaGlkZS1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNDRjtBRENFO0VBQ0UsNEJBQUE7QUNDSjtBRENJOztFQUVFLGlCQUFBO0VBQ0EsY0FBQTtBQ0NOO0FERU07O0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FDQ1IiLCJmaWxlIjoic2hvdy1oaWRlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAudHlwZS10b2dnbGUge1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwLjVyZW07XG5cbiAgICAuc2hvdy1vcHRpb24sXG4gICAgLmhpZGUtb3B0aW9uIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICAgIC8vIEluIGNhc2UgeW91IHdhbnQgdG8gdXNlIHRleHQgaW5zdGVhZCBvZiBpY29uc1xuICAgICAgJjpub3QoaW9uLWljb24pIHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbjpob3N0IC50eXBlLXRvZ2dsZSB7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwLjVyZW07XG59XG46aG9zdCAudHlwZS10b2dnbGUgLnNob3ctb3B0aW9uLFxuOmhvc3QgLnR5cGUtdG9nZ2xlIC5oaWRlLW9wdGlvbiB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbjpob3N0IC50eXBlLXRvZ2dsZSAuc2hvdy1vcHRpb246bm90KGlvbi1pY29uKSxcbjpob3N0IC50eXBlLXRvZ2dsZSAuaGlkZS1vcHRpb246bm90KGlvbi1pY29uKSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zaG93LWhpZGUtcGFzc3dvcmQvc2hvdy1oaWRlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vVGl0YW4lMjBFc3RhdGVzL3NyYy9hcHAvY29tcG9uZW50cy9zaG93LWhpZGUtcGFzc3dvcmQvc2hvdy1oaWRlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQ0U7RUFDRSw0QkFBQTtBQ0NKO0FEQ0k7O0VBRUUsaUJBQUE7RUFDQSxjQUFBO0FDQ047QURFTTs7RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUNDUjtBRENBLHdqREFBd2pEIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAudHlwZS10b2dnbGUge1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwLjVyZW07XG5cbiAgICAuc2hvdy1vcHRpb24sXG4gICAgLmhpZGUtb3B0aW9uIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICAgIC8vIEluIGNhc2UgeW91IHdhbnQgdG8gdXNlIHRleHQgaW5zdGVhZCBvZiBpY29uc1xuICAgICAgJjpub3QoaW9uLWljb24pIHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbjpob3N0IC50eXBlLXRvZ2dsZSB7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwLjVyZW07XG59XG46aG9zdCAudHlwZS10b2dnbGUgLnNob3ctb3B0aW9uLFxuOmhvc3QgLnR5cGUtdG9nZ2xlIC5oaWRlLW9wdGlvbiB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbjpob3N0IC50eXBlLXRvZ2dsZSAuc2hvdy1vcHRpb246bm90KGlvbi1pY29uKSxcbjpob3N0IC50eXBlLXRvZ2dsZSAuaGlkZS1vcHRpb246bm90KGlvbi1pY29uKSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 89330:
/*!**************************************************************!*\
  !*** ./src/app/shell/aspect-ratio/aspect-ratio.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AspectRatioComponent": () => (/* binding */ AspectRatioComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

const _c0 = ["*"];
class AspectRatioComponent {
  constructor() {
    this.ratioPadding = '0px';
  }
  set ratio(ratio) {
    ratio = ratio !== undefined && ratio !== null ? ratio : {
      w: 1,
      h: 1
    };
    const heightRatio = ratio.h / ratio.w * 100 + '%';
    // Conserve aspect ratio (see: http://stackoverflow.com/a/10441480/1116959)
    this.ratioPadding = '0px 0px ' + heightRatio + ' 0px';
  }
  static #_ = this.ɵfac = function AspectRatioComponent_Factory(t) {
    return new (t || AspectRatioComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AspectRatioComponent,
    selectors: [["app-aspect-ratio"]],
    hostVars: 2,
    hostBindings: function AspectRatioComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("padding", ctx.ratioPadding);
      }
    },
    inputs: {
      ratio: "ratio"
    },
    ngContentSelectors: _c0,
    decls: 2,
    vars: 0,
    consts: [[1, "content-wrapper"]],
    template: function AspectRatioComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["[_nghost-%COMP%] {\n  display: block;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n}\n[_nghost-%COMP%]   .content-wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzcGVjdC1yYXRpby5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL1RpdGFuJTIwRXN0YXRlcy9zcmMvYXBwL3NoZWxsL2FzcGVjdC1yYXRpby9hc3BlY3QtcmF0aW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNDRjtBRENFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDQ0oiLCJmaWxlIjoiYXNwZWN0LXJhdGlvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcblxuICAuY29udGVudC13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwcHg7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDBweDtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hlbGwvYXNwZWN0LXJhdGlvL2FzcGVjdC1yYXRpby5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uL1RpdGFuJTIwRXN0YXRlcy9zcmMvYXBwL3NoZWxsL2FzcGVjdC1yYXRpby9hc3BlY3QtcmF0aW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNDRjtBRENFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDQ0o7QURDQSxnaUNBQWdpQyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgLmNvbnRlbnQtd3JhcHBlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuICAgIGJvdHRvbTogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICByaWdodDogMHB4O1xuICB9XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 71408:
/*!************************************************************!*\
  !*** ./src/app/shell/image-shell/image-shell.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageShellComponent": () => (/* binding */ ImageShellComponent)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _utils_transfer_state_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/transfer-state-helper */ 15009);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);






function ImageShellComponent_ng_content_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0, 0, ["*ngIf", "_display === 'cover'"]);
  }
}
const _c0 = ["*"];
class ImageShellComponent {
  constructor(transferStateHelper) {
    this.transferStateHelper = transferStateHelper;
    // To debug shell styles, change configuration in the environment file
    this.debugDisplay = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.appShellConfig && _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.appShellConfig.debug ? _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.appShellConfig.debug : false;
    // eslint-disable-next-line @typescript-eslint/naming-convention,no-underscore-dangle,id-blacklist,id-match
    this._src = '';
    // eslint-disable-next-line @typescript-eslint/naming-convention,no-underscore-dangle,id-blacklist,id-match
    this._alt = '';
    // eslint-disable-next-line @typescript-eslint/naming-convention,no-underscore-dangle,id-blacklist,id-match
    this._loadingStrategy = 'lazy';
    // eslint-disable-next-line @typescript-eslint/naming-convention, no-underscore-dangle, id-blacklist, id-match
    this._display = '';
    this.imageSSR = false;
    this.imageLoaded = false;
    this.imageError = false;
    this.errorMessage = 'Could not load image';
  }
  set display(val) {
    this._display = val !== undefined && val !== null ? val : '';
    // For display 'cover' we use a hidden aux image. As it's hidden, if set loading to 'lazy' it won't ever trigger the loading mechanism
    if (this._display === 'cover') {
      this._loadingStrategy = 'eager';
    }
  }
  get display() {
    return this._display;
  }
  set src(val) {
    if (!this.debugDisplay) {
      this._src = val !== undefined && val !== null ? val : '';
    }
    // When using SSR (Server Side Rendering), avoid the loading animation while the image resource is being loaded
    const imageState = this.transferStateHelper.checkImageShellState('shell-images-state', this._src);
    if (imageState === _utils_transfer_state_helper__WEBPACK_IMPORTED_MODULE_1__.ImageShellState.SSR || imageState === _utils_transfer_state_helper__WEBPACK_IMPORTED_MODULE_1__.ImageShellState.BROWSER_FROM_SSR) {
      this._imageProcessedInServer();
    } else {
      if (this._display === 'cover') {
        // Unset the background-image until the image is loaded
        this.backgroundImage = 'unset';
      }
    }
  }
  set alt(val) {
    this._alt = val !== undefined && val !== null ? val : '';
  }
  _imageProcessedInServer() {
    this.imageSSR = true;
    // Also set backgroundImage so it's ready when transitioning from SSR to the browser
    if (this._display === 'cover') {
      this.backgroundImage = 'url(' + this._src + ')';
    }
  }
  _imageLoaded() {
    this.imageLoaded = true;
    // If it's a cover image then set the background-image property accordingly
    if (this._display === 'cover') {
      // Now that the image is loaded, set the background image
      this.backgroundImage = 'url(' + this._src + ')';
    }
  }
  _imageLoadError(event) {
    // Image error event get's called when the src is empty. We use emty values for the shell.
    // (see: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#Image_loading_errors)
    // Avoid that shell case
    if (this._src && this._src !== '') {
      this.imageLoaded = false;
      this.imageSSR = false;
      setTimeout(() => {
        this.imageError = true;
      }, 500);
    }
  }
  static #_ = this.ɵfac = function ImageShellComponent_Factory(t) {
    return new (t || ImageShellComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_utils_transfer_state_helper__WEBPACK_IMPORTED_MODULE_1__.TransferStateHelper));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ImageShellComponent,
    selectors: [["app-image-shell"]],
    hostVars: 10,
    hostBindings: function ImageShellComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-error", ctx.errorMessage)("display", ctx.display);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-image", ctx.backgroundImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("img-ssr", ctx.imageSSR)("img-loaded", ctx.imageLoaded)("img-error", ctx.imageError);
      }
    },
    inputs: {
      display: "display",
      src: "src",
      alt: "alt"
    },
    ngContentSelectors: _c0,
    decls: 3,
    vars: 4,
    consts: [[1, "spinner"], [1, "inner-img", 3, "src", "alt", "load", "error"], [4, "ngIf"]],
    template: function ImageShellComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ion-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("load", function ImageShellComponent_Template_img_load_1_listener() {
          return ctx._imageLoaded();
        })("error", function ImageShellComponent_Template_img_error_1_listener($event) {
          return ctx._imageLoadError($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ImageShellComponent_ng_content_2_Template, 1, 0, "ng-content", 2);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx._src, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", ctx._alt);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("loading", ctx._loadingStrategy);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx._display === "cover");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonSpinner],
    styles: ["[_nghost-%COMP%] {\n  --image-shell-loading-background: #EEE;\n  --image-shell-border-radius: 0px;\n  --image-shell-color: #333;\n  display: block;\n  position: relative;\n  height: 100%;\n  border-radius: var(--image-shell-border-radius);\n  transition: all ease-in-out 0.3s;\n  z-index: 2;\n}\n[_nghost-%COMP%]    > .spinner[_ngcontent-%COMP%] {\n  display: none;\n}\n[_nghost-%COMP%]::before {\n  content: \"\";\n  background: var(--image-shell-loading-background);\n  border-radius: var(--image-shell-border-radius);\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n[_nghost-%COMP%]:not([display=cover]) {\n  width: 100%;\n  overflow: hidden;\n}\n[_nghost-%COMP%]:not([display=cover])    > .inner-img[_ngcontent-%COMP%] {\n  transition: visibility 0s linear, opacity 0.5s linear;\n  opacity: 0;\n  visibility: hidden;\n  width: 100%;\n  height: 100%;\n  border-radius: var(--image-shell-border-radius);\n  display: block;\n}\n[_nghost-%COMP%]:not([display=cover]).img-ssr::before, [_nghost-%COMP%]:not([display=cover]).img-loaded::before {\n  display: none;\n}\n[_nghost-%COMP%]:not([display=cover]).img-ssr    > .inner-img[_ngcontent-%COMP%], [_nghost-%COMP%]:not([display=cover]).img-loaded    > .inner-img[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n[_nghost-%COMP%]:not([display=cover]).img-error    > .inner-img[_ngcontent-%COMP%] {\n  color: var(--image-shell-color);\n  font-size: 12px;\n}\n[_nghost-%COMP%]:not([display=cover]).img-error::after {\n  content: attr(data-error);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  padding: 10px;\n  color: var(--image-shell-color);\n  background-color: var(--image-shell-loading-background);\n  font-size: 12px;\n}\n[display=cover][_nghost-%COMP%] {\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n[display=cover][_nghost-%COMP%]::before, [display=cover][_nghost-%COMP%]    > .spinner[_ngcontent-%COMP%] {\n  z-index: -1;\n}\n[display=cover][_nghost-%COMP%]    > .inner-img[_ngcontent-%COMP%] {\n  display: none;\n  visibility: hidden;\n}\n[display=cover].img-ssr[_nghost-%COMP%]::before, [display=cover].img-loaded[_nghost-%COMP%]::before {\n  display: none;\n}\n\n[animation=gradient][_nghost-%COMP%] {\n  --image-shell-loading-background: #EEE;\n  --image-shell-animation-color: #DDD;\n}\n[animation=gradient][_nghost-%COMP%]::before {\n  background: linear-gradient(to right, var(--image-shell-loading-background) 8%, var(--image-shell-animation-color) 18%, var(--image-shell-loading-background) 33%);\n  background-size: 800px 104px;\n  animation: _ngcontent-%COMP%_animateBackground 2s ease-in-out infinite;\n}\n[animation=gradient].img-ssr[_nghost-%COMP%]::before, [animation=gradient].img-loaded[_nghost-%COMP%]::before, [animation=gradient].img-error[_nghost-%COMP%]::before {\n  background: none;\n  animation: 0;\n}\n@keyframes _ngcontent-%COMP%_animateBackground {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n\n[animation=spinner][_nghost-%COMP%] {\n  --image-shell-spinner-size: 28px;\n  --image-shell-spinner-color: #CCC;\n}\n[animation=spinner][_nghost-%COMP%]    > .spinner[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  top: calc(50% - var(--image-shell-spinner-size) / 2);\n  left: calc(50% - var(--image-shell-spinner-size) / 2);\n  width: var(--image-shell-spinner-size);\n  height: var(--image-shell-spinner-size);\n  font-size: var(--image-shell-spinner-size);\n  line-height: var(--image-shell-spinner-size);\n  color: var(--image-shell-spinner-color);\n}\n[animation=spinner].img-ssr[_nghost-%COMP%]    > .spinner[_ngcontent-%COMP%], [animation=spinner].img-loaded[_nghost-%COMP%]    > .spinner[_ngcontent-%COMP%], [animation=spinner].img-error[_nghost-%COMP%]    > .spinner[_ngcontent-%COMP%] {\n  display: none;\n  visibility: hidden;\n}\n\n.add-overlay[_nghost-%COMP%] {\n  --image-shell-overlay-background: rgba(0, 0, 0, .4);\n}\n.add-overlay.img-ssr[_nghost-%COMP%]::before, .add-overlay.img-loaded[_nghost-%COMP%]::before, .add-overlay.img-error[_nghost-%COMP%]::before {\n  display: block;\n  background: var(--image-shell-overlay-background);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlLXNoZWxsLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vVGl0YW4lMjBFc3RhdGVzL3NyYy9hcHAvc2hlbGwvaW1hZ2Utc2hlbGwvaW1hZ2Utc2hlbGwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQ0FBQTtFQUNBLGdDQUFBO0VBQ0EseUJBQUE7RUFFQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsK0NBQUE7RUFDQSxnQ0FBQTtFQUNBLFVBQUE7QUNBRjtBREdFO0VBQ0UsYUFBQTtBQ0RKO0FES0U7RUFDRSxXQUFBO0VBQ0EsaURBQUE7RUFDQSwrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQ0hKO0FETUU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUNKSjtBRE1JO0VBQ0UscURBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLCtDQUFBO0VBRUEsY0FBQTtBQ0xOO0FEV007RUFDRSxhQUFBO0FDVFI7QURZTTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtBQ1ZSO0FEZU07RUFFRSwrQkFBQTtFQUNBLGVBQUE7QUNkUjtBRGtCTTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLCtCQUFBO0VBQ0EsdURBQUE7RUFDQSxlQUFBO0FDaEJSO0FEdUJFO0VBQ0Usc0JBQUE7RUFDQSw0QkFBQTtBQ3JCSjtBRHdCSTtFQUVFLFdBQUE7QUN2Qk47QUQwQkk7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUN4Qk47QUQ4Qk07RUFDRSxhQUFBO0FDNUJSOztBRGtDQTtFQUNFLHNDQUFBO0VBQ0EsbUNBQUE7QUMvQkY7QURrQ0U7RUFDRSxrS0FDRTtFQUNGLDRCQUFBO0VBQ0Esb0RBQUE7QUNqQ0o7QUR3Q0k7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUN0Q047QUQwQ0U7RUFDRTtJQUNFLDZCQUFBO0VDeENKO0VEMkNFO0lBQ0UsNEJBQUE7RUN6Q0o7QUFDRjs7QUQ2Q0E7RUFDRSxnQ0FBQTtFQUNBLGlDQUFBO0FDMUNGO0FENENFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0RBQUE7RUFDQSxxREFBQTtFQUNBLHNDQUFBO0VBQ0EsdUNBQUE7RUFDQSwwQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsdUNBQUE7QUMxQ0o7QURnREk7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUM5Q047O0FEbURBO0VBQ0UsbURBQUE7QUNoREY7QURzREk7RUFDRSxjQUFBO0VBQ0EsaURBQUE7QUNwRE4iLCJmaWxlIjoiaW1hZ2Utc2hlbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiAjRUVFO1xuICAtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgLS1pbWFnZS1zaGVsbC1jb2xvcjogIzMzMztcblxuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXMpO1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgLjNzO1xuICB6LWluZGV4OiAyO1xuXG4gIC8vIEJ5IGRlZmF1bHQsIGhpZGUgdGhlIHNwaW5uZXJcbiAgJiA+IC5zcGlubmVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLy8gTG9hZGluZyBiYWNrZ3JvdW5kXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kKTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICB9XG5cbiAgJjpub3QoW2Rpc3BsYXk9XCJjb3ZlclwiXSkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAmID4gLmlubmVyLWltZyB7XG4gICAgICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzIGxpbmVhciwgb3BhY2l0eSAuNXMgbGluZWFyO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1cyk7XG4gICAgICAvLyBJbWFnZSBzaG91bGQgZmlsbCB0aGUgc3BhY2Ugd2hpbGUgbG9hZGluZ1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgJi5pbWctc3NyLFxuICAgICYuaW1nLWxvYWRlZCB7XG4gICAgICAvLyBIaWRlIGxvYWRpbmcgYmFja2dyb3VuZCBvbmNlIHRoZSBpbWFnZSBoYXMgbG9hZGVkXG4gICAgICAmOjpiZWZvcmUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICAmID4gLmlubmVyLWltZyB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5pbWctZXJyb3Ige1xuICAgICAgJiA+IC5pbm5lci1pbWcge1xuICAgICAgICAvLyBGb3IgdGhlIEFsdCB0ZXh0XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pbWFnZS1zaGVsbC1jb2xvcik7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkIHBsYWNlaG9sZGVyIGJhY2tncm91bmRcbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogYXR0cihkYXRhLWVycm9yKTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW1hZ2Utc2hlbGwtY29sb3IpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQpO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gKiBOT1RFOiB3ZSBkaWRuJ3QgYWRkIC5pbWctZXJyb3Igc3R5bGVzIGZvciAnY292ZXInIGRpc3BsYXkgb24gcHVycG9zZS5cbiAgLy8gSWYgaXQgaXMgZGlzcGxheTogY292ZXJcbiAgJltkaXNwbGF5PVwiY292ZXJcIl0ge1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblxuICAgIC8vIEluIGNvdmVyIGRpc3BsYXksIHdlIGNhbiBoYXZlIGNvbnRlbnQgaW5zaWRlIHRoZSBlbGVtZW50LCB0aHVzIHdlIG5lZWQgdG8gcHV0IHRoZXNlIGVsZW1lbnRzIGJlbmVhdGhcbiAgICAmOjpiZWZvcmUsXG4gICAgJiA+IC5zcGlubmVyIHtcbiAgICAgIHotaW5kZXg6IC0xO1xuICAgIH1cblxuICAgICYgPiAuaW5uZXItaW1nIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgfVxuXG4gICAgJi5pbWctc3NyLFxuICAgICYuaW1nLWxvYWRlZCB7XG4gICAgICAvLyBIaWRlIGxvYWRpbmcgYmFja2dyb3VuZCBvbmNlIHRoZSBpbWFnZSBoYXMgbG9hZGVkXG4gICAgICAmOjpiZWZvcmUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG46aG9zdChbYW5pbWF0aW9uPVwiZ3JhZGllbnRcIl0pIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6ICNFRUU7XG4gIC0taW1hZ2Utc2hlbGwtYW5pbWF0aW9uLWNvbG9yOiAjREREO1xuXG4gIC8vIFRoZSBhbmltYXRpb24gdGhhdCBnb2VzIGJlbmVhdGggdGhlIG1hc2tzXG4gICY6OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZDpcbiAgICAgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kKSA4JSwgdmFyKC0taW1hZ2Utc2hlbGwtYW5pbWF0aW9uLWNvbG9yKSAxOCUsIHZhcigtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZCkgMzMlKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDgwMHB4IDEwNHB4O1xuICAgIGFuaW1hdGlvbjogYW5pbWF0ZUJhY2tncm91bmQgMnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gIH1cblxuICAmLmltZy1zc3IsXG4gICYuaW1nLWxvYWRlZCxcbiAgJi5pbWctZXJyb3Ige1xuICAgIC8vIFJlc2V0IGJhY2tncm91bmQgYW5pbWF0aW9uXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBhbmltYXRpb246IDA7XG4gICAgfVxuICB9XG5cbiAgQGtleWZyYW1lcyBhbmltYXRlQmFja2dyb3VuZCB7XG4gICAgMCV7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDY4cHggMFxuICAgIH1cblxuICAgIDEwMCV7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0NjhweCAwXG4gICAgfVxuICB9XG59XG5cbjpob3N0KFthbmltYXRpb249XCJzcGlubmVyXCJdKSB7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1zaXplOiAyOHB4O1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6ICNDQ0M7XG5cbiAgJiA+IC5zcGlubmVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiBjYWxjKDUwJSAtIGNhbGModmFyKC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1zaXplKSAvIDIpKTtcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIGNhbGModmFyKC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1zaXplKSAvIDIpKTtcbiAgICB3aWR0aDogdmFyKC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1zaXplKTtcbiAgICBoZWlnaHQ6IHZhcigtLWltYWdlLXNoZWxsLXNwaW5uZXItc2l6ZSk7XG4gICAgZm9udC1zaXplOiB2YXIoLS1pbWFnZS1zaGVsbC1zcGlubmVyLXNpemUpO1xuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1pbWFnZS1zaGVsbC1zcGlubmVyLXNpemUpO1xuICAgIGNvbG9yOiB2YXIoLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yKTtcbiAgfVxuXG4gICYuaW1nLXNzcixcbiAgJi5pbWctbG9hZGVkLFxuICAmLmltZy1lcnJvciB7XG4gICAgJiA+IC5zcGlubmVyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgfVxuICB9XG59XG5cbjpob3N0KC5hZGQtb3ZlcmxheSkge1xuICAtLWltYWdlLXNoZWxsLW92ZXJsYXktYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuNCk7XG5cbiAgJi5pbWctc3NyLFxuICAmLmltZy1sb2FkZWQsXG4gICYuaW1nLWVycm9yIHtcbiAgICAvLyBBZGQgYmFja2dyb3VuZCBvdmVybGF5IGFmdGVyIHRoZSBpbWFnZSBoYXMgbG9hZGVkXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW1hZ2Utc2hlbGwtb3ZlcmxheS1iYWNrZ3JvdW5kKTtcbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6ICNFRUU7XG4gIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogMHB4O1xuICAtLWltYWdlLXNoZWxsLWNvbG9yOiAjMzMzO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXMpO1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC4zcztcbiAgei1pbmRleDogMjtcbn1cbjpob3N0ID4gLnNwaW5uZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuOmhvc3Q6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHZhcigtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZCk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXMpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cbjpob3N0Om5vdChbZGlzcGxheT1jb3Zlcl0pIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG46aG9zdDpub3QoW2Rpc3BsYXk9Y292ZXJdKSA+IC5pbm5lci1pbWcge1xuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzIGxpbmVhciwgb3BhY2l0eSAwLjVzIGxpbmVhcjtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzKTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG46aG9zdDpub3QoW2Rpc3BsYXk9Y292ZXJdKS5pbWctc3NyOjpiZWZvcmUsIDpob3N0Om5vdChbZGlzcGxheT1jb3Zlcl0pLmltZy1sb2FkZWQ6OmJlZm9yZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG46aG9zdDpub3QoW2Rpc3BsYXk9Y292ZXJdKS5pbWctc3NyID4gLmlubmVyLWltZywgOmhvc3Q6bm90KFtkaXNwbGF5PWNvdmVyXSkuaW1nLWxvYWRlZCA+IC5pbm5lci1pbWcge1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuOmhvc3Q6bm90KFtkaXNwbGF5PWNvdmVyXSkuaW1nLWVycm9yID4gLmlubmVyLWltZyB7XG4gIGNvbG9yOiB2YXIoLS1pbWFnZS1zaGVsbC1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbjpob3N0Om5vdChbZGlzcGxheT1jb3Zlcl0pLmltZy1lcnJvcjo6YWZ0ZXIge1xuICBjb250ZW50OiBhdHRyKGRhdGEtZXJyb3IpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiB2YXIoLS1pbWFnZS1zaGVsbC1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZCk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbjpob3N0W2Rpc3BsYXk9Y292ZXJdIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbjpob3N0W2Rpc3BsYXk9Y292ZXJdOjpiZWZvcmUsIDpob3N0W2Rpc3BsYXk9Y292ZXJdID4gLnNwaW5uZXIge1xuICB6LWluZGV4OiAtMTtcbn1cbjpob3N0W2Rpc3BsYXk9Y292ZXJdID4gLmlubmVyLWltZyB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbjpob3N0W2Rpc3BsYXk9Y292ZXJdLmltZy1zc3I6OmJlZm9yZSwgOmhvc3RbZGlzcGxheT1jb3Zlcl0uaW1nLWxvYWRlZDo6YmVmb3JlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuOmhvc3QoW2FuaW1hdGlvbj1ncmFkaWVudF0pIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6ICNFRUU7XG4gIC0taW1hZ2Utc2hlbGwtYW5pbWF0aW9uLWNvbG9yOiAjREREO1xufVxuOmhvc3QoW2FuaW1hdGlvbj1ncmFkaWVudF0pOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZCkgOCUsIHZhcigtLWltYWdlLXNoZWxsLWFuaW1hdGlvbi1jb2xvcikgMTglLCB2YXIoLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQpIDMzJSk7XG4gIGJhY2tncm91bmQtc2l6ZTogODAwcHggMTA0cHg7XG4gIGFuaW1hdGlvbjogYW5pbWF0ZUJhY2tncm91bmQgMnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG59XG46aG9zdChbYW5pbWF0aW9uPWdyYWRpZW50XSkuaW1nLXNzcjo6YmVmb3JlLCA6aG9zdChbYW5pbWF0aW9uPWdyYWRpZW50XSkuaW1nLWxvYWRlZDo6YmVmb3JlLCA6aG9zdChbYW5pbWF0aW9uPWdyYWRpZW50XSkuaW1nLWVycm9yOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBhbmltYXRpb246IDA7XG59XG5Aa2V5ZnJhbWVzIGFuaW1hdGVCYWNrZ3JvdW5kIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00NjhweCAwO1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDQ2OHB4IDA7XG4gIH1cbn1cblxuOmhvc3QoW2FuaW1hdGlvbj1zcGlubmVyXSkge1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItc2l6ZTogMjhweDtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiAjQ0NDO1xufVxuOmhvc3QoW2FuaW1hdGlvbj1zcGlubmVyXSkgPiAuc3Bpbm5lciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogY2FsYyg1MCUgLSB2YXIoLS1pbWFnZS1zaGVsbC1zcGlubmVyLXNpemUpIC8gMik7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gdmFyKC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1zaXplKSAvIDIpO1xuICB3aWR0aDogdmFyKC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1zaXplKTtcbiAgaGVpZ2h0OiB2YXIoLS1pbWFnZS1zaGVsbC1zcGlubmVyLXNpemUpO1xuICBmb250LXNpemU6IHZhcigtLWltYWdlLXNoZWxsLXNwaW5uZXItc2l6ZSk7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1pbWFnZS1zaGVsbC1zcGlubmVyLXNpemUpO1xuICBjb2xvcjogdmFyKC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcik7XG59XG46aG9zdChbYW5pbWF0aW9uPXNwaW5uZXJdKS5pbWctc3NyID4gLnNwaW5uZXIsIDpob3N0KFthbmltYXRpb249c3Bpbm5lcl0pLmltZy1sb2FkZWQgPiAuc3Bpbm5lciwgOmhvc3QoW2FuaW1hdGlvbj1zcGlubmVyXSkuaW1nLWVycm9yID4gLnNwaW5uZXIge1xuICBkaXNwbGF5OiBub25lO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbjpob3N0KC5hZGQtb3ZlcmxheSkge1xuICAtLWltYWdlLXNoZWxsLW92ZXJsYXktYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuNCk7XG59XG46aG9zdCguYWRkLW92ZXJsYXkpLmltZy1zc3I6OmJlZm9yZSwgOmhvc3QoLmFkZC1vdmVybGF5KS5pbWctbG9hZGVkOjpiZWZvcmUsIDpob3N0KC5hZGQtb3ZlcmxheSkuaW1nLWVycm9yOjpiZWZvcmUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogdmFyKC0taW1hZ2Utc2hlbGwtb3ZlcmxheS1iYWNrZ3JvdW5kKTtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hlbGwvaW1hZ2Utc2hlbGwvaW1hZ2Utc2hlbGwuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi9UaXRhbiUyMEVzdGF0ZXMvc3JjL2FwcC9zaGVsbC9pbWFnZS1zaGVsbC9pbWFnZS1zaGVsbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNDQUFBO0VBQ0EsZ0NBQUE7RUFDQSx5QkFBQTtFQUVBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSwrQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsVUFBQTtBQ0FGO0FER0U7RUFDRSxhQUFBO0FDREo7QURLRTtFQUNFLFdBQUE7RUFDQSxpREFBQTtFQUNBLCtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FDSEo7QURNRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQ0pKO0FETUk7RUFDRSxxREFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsK0NBQUE7RUFFQSxjQUFBO0FDTE47QURXTTtFQUNFLGFBQUE7QUNUUjtBRFlNO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0FDVlI7QURlTTtFQUVFLCtCQUFBO0VBQ0EsZUFBQTtBQ2RSO0FEa0JNO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSx1REFBQTtFQUNBLGVBQUE7QUNoQlI7QUR1QkU7RUFDRSxzQkFBQTtFQUNBLDRCQUFBO0FDckJKO0FEd0JJO0VBRUUsV0FBQTtBQ3ZCTjtBRDBCSTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQ3hCTjtBRDhCTTtFQUNFLGFBQUE7QUM1QlI7O0FEa0NBO0VBQ0Usc0NBQUE7RUFDQSxtQ0FBQTtBQy9CRjtBRGtDRTtFQUNFLGtLQUNFO0VBQ0YsNEJBQUE7RUFDQSxvREFBQTtBQ2pDSjtBRHdDSTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQ3RDTjtBRDBDRTtFQUNFO0lBQ0UsNkJBQUE7RUN4Q0o7RUQyQ0U7SUFDRSw0QkFBQTtFQ3pDSjtBQUNGOztBRDZDQTtFQUNFLGdDQUFBO0VBQ0EsaUNBQUE7QUMxQ0Y7QUQ0Q0U7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxvREFBQTtFQUNBLHFEQUFBO0VBQ0Esc0NBQUE7RUFDQSx1Q0FBQTtFQUNBLDBDQUFBO0VBQ0EsNENBQUE7RUFDQSx1Q0FBQTtBQzFDSjtBRGdESTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQzlDTjs7QURtREE7RUFDRSxtREFBQTtBQ2hERjtBRHNESTtFQUNFLGNBQUE7RUFDQSxpREFBQTtBQ3BETjtBRENBLDRuWUFBNG5ZIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogI0VFRTtcbiAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiAwcHg7XG4gIC0taW1hZ2Utc2hlbGwtY29sb3I6ICMzMzM7XG5cbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzKTtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IC4zcztcbiAgei1pbmRleDogMjtcblxuICAvLyBCeSBkZWZhdWx0LCBoaWRlIHRoZSBzcGlubmVyXG4gICYgPiAuc3Bpbm5lciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC8vIExvYWRpbmcgYmFja2dyb3VuZFxuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZCk7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1cyk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgfVxuXG4gICY6bm90KFtkaXNwbGF5PVwiY292ZXJcIl0pIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgJiA+IC5pbm5lci1pbWcge1xuICAgICAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcyBsaW5lYXIsIG9wYWNpdHkgLjVzIGxpbmVhcjtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXMpO1xuICAgICAgLy8gSW1hZ2Ugc2hvdWxkIGZpbGwgdGhlIHNwYWNlIHdoaWxlIGxvYWRpbmdcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgICYuaW1nLXNzcixcbiAgICAmLmltZy1sb2FkZWQge1xuICAgICAgLy8gSGlkZSBsb2FkaW5nIGJhY2tncm91bmQgb25jZSB0aGUgaW1hZ2UgaGFzIGxvYWRlZFxuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgJiA+IC5pbm5lci1pbWcge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgfVxuICAgIH1cblxuICAgICYuaW1nLWVycm9yIHtcbiAgICAgICYgPiAuaW5uZXItaW1nIHtcbiAgICAgICAgLy8gRm9yIHRoZSBBbHQgdGV4dFxuICAgICAgICBjb2xvcjogdmFyKC0taW1hZ2Utc2hlbGwtY29sb3IpO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZCBwbGFjZWhvbGRlciBiYWNrZ3JvdW5kXG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1lcnJvcik7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWltYWdlLXNoZWxsLWNvbG9yKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kKTtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vICogTk9URTogd2UgZGlkbid0IGFkZCAuaW1nLWVycm9yIHN0eWxlcyBmb3IgJ2NvdmVyJyBkaXNwbGF5IG9uIHB1cnBvc2UuXG4gIC8vIElmIGl0IGlzIGRpc3BsYXk6IGNvdmVyXG4gICZbZGlzcGxheT1cImNvdmVyXCJdIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cbiAgICAvLyBJbiBjb3ZlciBkaXNwbGF5LCB3ZSBjYW4gaGF2ZSBjb250ZW50IGluc2lkZSB0aGUgZWxlbWVudCwgdGh1cyB3ZSBuZWVkIHRvIHB1dCB0aGVzZSBlbGVtZW50cyBiZW5lYXRoXG4gICAgJjo6YmVmb3JlLFxuICAgICYgPiAuc3Bpbm5lciB7XG4gICAgICB6LWluZGV4OiAtMTtcbiAgICB9XG5cbiAgICAmID4gLmlubmVyLWltZyB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIH1cblxuICAgICYuaW1nLXNzcixcbiAgICAmLmltZy1sb2FkZWQge1xuICAgICAgLy8gSGlkZSBsb2FkaW5nIGJhY2tncm91bmQgb25jZSB0aGUgaW1hZ2UgaGFzIGxvYWRlZFxuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuOmhvc3QoW2FuaW1hdGlvbj1cImdyYWRpZW50XCJdKSB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiAjRUVFO1xuICAtLWltYWdlLXNoZWxsLWFuaW1hdGlvbi1jb2xvcjogI0RERDtcblxuICAvLyBUaGUgYW5pbWF0aW9uIHRoYXQgZ29lcyBiZW5lYXRoIHRoZSBtYXNrc1xuICAmOjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQ6XG4gICAgICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZCkgOCUsIHZhcigtLWltYWdlLXNoZWxsLWFuaW1hdGlvbi1jb2xvcikgMTglLCB2YXIoLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQpIDMzJSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiA4MDBweCAxMDRweDtcbiAgICBhbmltYXRpb246IGFuaW1hdGVCYWNrZ3JvdW5kIDJzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICB9XG5cbiAgJi5pbWctc3NyLFxuICAmLmltZy1sb2FkZWQsXG4gICYuaW1nLWVycm9yIHtcbiAgICAvLyBSZXNldCBiYWNrZ3JvdW5kIGFuaW1hdGlvblxuICAgICY6OmJlZm9yZSB7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgYW5pbWF0aW9uOiAwO1xuICAgIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgYW5pbWF0ZUJhY2tncm91bmQge1xuICAgIDAle1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ2OHB4IDBcbiAgICB9XG5cbiAgICAxMDAle1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNDY4cHggMFxuICAgIH1cbiAgfVxufVxuXG46aG9zdChbYW5pbWF0aW9uPVwic3Bpbm5lclwiXSkge1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItc2l6ZTogMjhweDtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiAjQ0NDO1xuXG4gICYgPiAuc3Bpbm5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogY2FsYyg1MCUgLSBjYWxjKHZhcigtLWltYWdlLXNoZWxsLXNwaW5uZXItc2l6ZSkgLyAyKSk7XG4gICAgbGVmdDogY2FsYyg1MCUgLSBjYWxjKHZhcigtLWltYWdlLXNoZWxsLXNwaW5uZXItc2l6ZSkgLyAyKSk7XG4gICAgd2lkdGg6IHZhcigtLWltYWdlLXNoZWxsLXNwaW5uZXItc2l6ZSk7XG4gICAgaGVpZ2h0OiB2YXIoLS1pbWFnZS1zaGVsbC1zcGlubmVyLXNpemUpO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1zaXplKTtcbiAgICBsaW5lLWhlaWdodDogdmFyKC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1zaXplKTtcbiAgICBjb2xvcjogdmFyKC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcik7XG4gIH1cblxuICAmLmltZy1zc3IsXG4gICYuaW1nLWxvYWRlZCxcbiAgJi5pbWctZXJyb3Ige1xuICAgICYgPiAuc3Bpbm5lciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIH1cbiAgfVxufVxuXG46aG9zdCguYWRkLW92ZXJsYXkpIHtcbiAgLS1pbWFnZS1zaGVsbC1vdmVybGF5LWJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjQpO1xuXG4gICYuaW1nLXNzcixcbiAgJi5pbWctbG9hZGVkLFxuICAmLmltZy1lcnJvciB7XG4gICAgLy8gQWRkIGJhY2tncm91bmQgb3ZlcmxheSBhZnRlciB0aGUgaW1hZ2UgaGFzIGxvYWRlZFxuICAgICY6OmJlZm9yZSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWltYWdlLXNoZWxsLW92ZXJsYXktYmFja2dyb3VuZCk7XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiAjRUVFO1xuICAtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgLS1pbWFnZS1zaGVsbC1jb2xvcjogIzMzMztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzKTtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuM3M7XG4gIHotaW5kZXg6IDI7XG59XG46aG9zdCA+IC5zcGlubmVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbjpob3N0OjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG46aG9zdDpub3QoW2Rpc3BsYXk9Y292ZXJdKSB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuOmhvc3Q6bm90KFtkaXNwbGF5PWNvdmVyXSkgPiAuaW5uZXItaW1nIHtcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcyBsaW5lYXIsIG9wYWNpdHkgMC41cyBsaW5lYXI7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1cyk7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuOmhvc3Q6bm90KFtkaXNwbGF5PWNvdmVyXSkuaW1nLXNzcjo6YmVmb3JlLCA6aG9zdDpub3QoW2Rpc3BsYXk9Y292ZXJdKS5pbWctbG9hZGVkOjpiZWZvcmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuOmhvc3Q6bm90KFtkaXNwbGF5PWNvdmVyXSkuaW1nLXNzciA+IC5pbm5lci1pbWcsIDpob3N0Om5vdChbZGlzcGxheT1jb3Zlcl0pLmltZy1sb2FkZWQgPiAuaW5uZXItaW1nIHtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cbjpob3N0Om5vdChbZGlzcGxheT1jb3Zlcl0pLmltZy1lcnJvciA+IC5pbm5lci1pbWcge1xuICBjb2xvcjogdmFyKC0taW1hZ2Utc2hlbGwtY29sb3IpO1xuICBmb250LXNpemU6IDEycHg7XG59XG46aG9zdDpub3QoW2Rpc3BsYXk9Y292ZXJdKS5pbWctZXJyb3I6OmFmdGVyIHtcbiAgY29udGVudDogYXR0cihkYXRhLWVycm9yKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogdmFyKC0taW1hZ2Utc2hlbGwtY29sb3IpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQpO1xuICBmb250LXNpemU6IDEycHg7XG59XG46aG9zdFtkaXNwbGF5PWNvdmVyXSB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG46aG9zdFtkaXNwbGF5PWNvdmVyXTo6YmVmb3JlLCA6aG9zdFtkaXNwbGF5PWNvdmVyXSA+IC5zcGlubmVyIHtcbiAgei1pbmRleDogLTE7XG59XG46aG9zdFtkaXNwbGF5PWNvdmVyXSA+IC5pbm5lci1pbWcge1xuICBkaXNwbGF5OiBub25lO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG46aG9zdFtkaXNwbGF5PWNvdmVyXS5pbWctc3NyOjpiZWZvcmUsIDpob3N0W2Rpc3BsYXk9Y292ZXJdLmltZy1sb2FkZWQ6OmJlZm9yZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbjpob3N0KFthbmltYXRpb249Z3JhZGllbnRdKSB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiAjRUVFO1xuICAtLWltYWdlLXNoZWxsLWFuaW1hdGlvbi1jb2xvcjogI0RERDtcbn1cbjpob3N0KFthbmltYXRpb249Z3JhZGllbnRdKTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQpIDglLCB2YXIoLS1pbWFnZS1zaGVsbC1hbmltYXRpb24tY29sb3IpIDE4JSwgdmFyKC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kKSAzMyUpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDgwMHB4IDEwNHB4O1xuICBhbmltYXRpb246IGFuaW1hdGVCYWNrZ3JvdW5kIDJzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuOmhvc3QoW2FuaW1hdGlvbj1ncmFkaWVudF0pLmltZy1zc3I6OmJlZm9yZSwgOmhvc3QoW2FuaW1hdGlvbj1ncmFkaWVudF0pLmltZy1sb2FkZWQ6OmJlZm9yZSwgOmhvc3QoW2FuaW1hdGlvbj1ncmFkaWVudF0pLmltZy1lcnJvcjo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYW5pbWF0aW9uOiAwO1xufVxuQGtleWZyYW1lcyBhbmltYXRlQmFja2dyb3VuZCB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDY4cHggMDtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0NjhweCAwO1xuICB9XG59XG5cbjpob3N0KFthbmltYXRpb249c3Bpbm5lcl0pIHtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLXNpemU6IDI4cHg7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogI0NDQztcbn1cbjpob3N0KFthbmltYXRpb249c3Bpbm5lcl0pID4gLnNwaW5uZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IGNhbGMoNTAlIC0gdmFyKC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1zaXplKSAvIDIpO1xuICBsZWZ0OiBjYWxjKDUwJSAtIHZhcigtLWltYWdlLXNoZWxsLXNwaW5uZXItc2l6ZSkgLyAyKTtcbiAgd2lkdGg6IHZhcigtLWltYWdlLXNoZWxsLXNwaW5uZXItc2l6ZSk7XG4gIGhlaWdodDogdmFyKC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1zaXplKTtcbiAgZm9udC1zaXplOiB2YXIoLS1pbWFnZS1zaGVsbC1zcGlubmVyLXNpemUpO1xuICBsaW5lLWhlaWdodDogdmFyKC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1zaXplKTtcbiAgY29sb3I6IHZhcigtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3IpO1xufVxuOmhvc3QoW2FuaW1hdGlvbj1zcGlubmVyXSkuaW1nLXNzciA+IC5zcGlubmVyLCA6aG9zdChbYW5pbWF0aW9uPXNwaW5uZXJdKS5pbWctbG9hZGVkID4gLnNwaW5uZXIsIDpob3N0KFthbmltYXRpb249c3Bpbm5lcl0pLmltZy1lcnJvciA+IC5zcGlubmVyIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG46aG9zdCguYWRkLW92ZXJsYXkpIHtcbiAgLS1pbWFnZS1zaGVsbC1vdmVybGF5LWJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjQpO1xufVxuOmhvc3QoLmFkZC1vdmVybGF5KS5pbWctc3NyOjpiZWZvcmUsIDpob3N0KC5hZGQtb3ZlcmxheSkuaW1nLWxvYWRlZDo6YmVmb3JlLCA6aG9zdCguYWRkLW92ZXJsYXkpLmltZy1lcnJvcjo6YmVmb3JlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6IHZhcigtLWltYWdlLXNoZWxsLW92ZXJsYXktYmFja2dyb3VuZCk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 75506:
/*!***************************************!*\
  !*** ./src/app/shell/shell.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShellModule": () => (/* binding */ ShellModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aspect-ratio/aspect-ratio.component */ 89330);
/* harmony import */ var _image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-shell/image-shell.component */ 71408);
/* harmony import */ var _text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text-shell/text-shell.component */ 94840);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);






class ShellModule {
  static #_ = this.ɵfac = function ShellModule_Factory(t) {
    return new (t || ShellModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: ShellModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ShellModule, {
    declarations: [_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_0__.AspectRatioComponent, _image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_1__.ImageShellComponent, _text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_2__.TextShellComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule],
    exports: [_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_0__.AspectRatioComponent, _image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_1__.ImageShellComponent, _text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_2__.TextShellComponent]
  });
})();

/***/ }),

/***/ 94840:
/*!**********************************************************!*\
  !*** ./src/app/shell/text-shell/text-shell.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextShellComponent": () => (/* binding */ TextShellComponent)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class TextShellComponent {
  constructor() {
    // To debug shell styles, change configuration in the environment file
    this.debugMode = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.appShellConfig && _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.appShellConfig.debug ? _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.appShellConfig.debug : false;
    this.textLoaded = false;
  }
  set data(val) {
    if (!this.debugMode) {
      this._data = val !== undefined && val !== null ? val : '';
    }
    if (this._data && this._data !== '') {
      this.textLoaded = true;
    } else {
      this.textLoaded = false;
    }
  }
  static #_ = this.ɵfac = function TextShellComponent_Factory(t) {
    return new (t || TextShellComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: TextShellComponent,
    selectors: [["app-text-shell"]],
    hostVars: 2,
    hostBindings: function TextShellComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("text-loaded", ctx.textLoaded);
      }
    },
    inputs: {
      data: "data"
    },
    decls: 2,
    vars: 1,
    template: function TextShellComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx._data);
      }
    },
    styles: ["[_nghost-%COMP%] {\n  --text-shell-background: transparent;\n  --text-shell-line-color: #EEE;\n  --text-shell-line-height: 16px;\n  --text-shell-line-gutter: 3px;\n  display: block;\n  position: relative;\n  color: transparent;\n  background-color: var(--text-shell-background);\n  transform-style: preserve-3d;\n  background-clip: content-box;\n}\n\n[_nghost-%COMP%]:not([animation]) {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 91% , var(--text-shell-background, #FFF) 91%);\n  background-position: 0 0px;\n  background-size: 100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n}\n[_nghost-%COMP%]:not([animation])[lines=\"1\"] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 88% , var(--text-shell-background, #FFF) 88%);\n  background-position: 0 0px;\n  background-size: 100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n}\n[_nghost-%COMP%]:not([animation])[lines=\"2\"] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 94% , var(--text-shell-background, #FFF) 94%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 32% , var(--text-shell-background, #FFF) 32%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 2) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n}\n[_nghost-%COMP%]:not([animation])[lines=\"3\"] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 88% , var(--text-shell-background, #FFF) 88%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 68% , var(--text-shell-background, #FFF) 68%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 41% , var(--text-shell-background, #FFF) 41%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 3) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n}\n[_nghost-%COMP%]:not([animation])[lines=\"4\"] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 92% , var(--text-shell-background, #FFF) 92%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 64% , var(--text-shell-background, #FFF) 64%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 60% , var(--text-shell-background, #FFF) 60%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 33% , var(--text-shell-background, #FFF) 33%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 4) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n}\n[_nghost-%COMP%]:not([animation])[lines=\"5\"] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 93% , var(--text-shell-background, #FFF) 93%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 73% , var(--text-shell-background, #FFF) 73%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 64% , var(--text-shell-background, #FFF) 64%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 65% , var(--text-shell-background, #FFF) 65%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 32% , var(--text-shell-background, #FFF) 32%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 5) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n}\n[_nghost-%COMP%]:not([animation])[lines=\"6\"] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 87% , var(--text-shell-background, #FFF) 87%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 66% , var(--text-shell-background, #FFF) 66%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 63% , var(--text-shell-background, #FFF) 63%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 63% , var(--text-shell-background, #FFF) 63%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 69% , var(--text-shell-background, #FFF) 69%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 39% , var(--text-shell-background, #FFF) 39%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 6) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n}\n[_nghost-%COMP%]:not([animation]).text-loaded {\n  background: none;\n  min-height: inherit;\n  color: inherit;\n}\n\n[animation=bouncing][_nghost-%COMP%] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 89% , var(--text-shell-background, #FFF) 89%);\n  background-position: 0 0px;\n  background-size: 100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  animation-direction: alternate;\n  animation-name: _ngcontent-%COMP%_animateLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n  animation-fill-mode: forwards;\n  animation-iteration-count: infinite;\n  animation-timing-function: ease-in-out;\n  animation-duration: 1s;\n}\n@keyframes _ngcontent-%COMP%_animateLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px);\n  }\n}\n[animation=bouncing][lines=\"1\"][_nghost-%COMP%] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 91% , var(--text-shell-background, #FFF) 91%);\n  background-position: 0 0px;\n  background-size: 100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  animation-direction: alternate;\n  animation-name: _ngcontent-%COMP%_animateLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n  animation-fill-mode: forwards;\n  animation-iteration-count: infinite;\n  animation-timing-function: ease-in-out;\n  animation-duration: 1s;\n}\n@keyframes _ngcontent-%COMP%_animateLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px);\n  }\n}\n[animation=bouncing][lines=\"2\"][_nghost-%COMP%] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 93% , var(--text-shell-background, #FFF) 93%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 47% , var(--text-shell-background, #FFF) 47%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  animation-direction: alternate-reverse;\n  animation-name: _ngcontent-%COMP%_animateMultiLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 2) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n  animation-fill-mode: forwards;\n  animation-iteration-count: infinite;\n  animation-timing-function: ease-in-out;\n  animation-duration: 1s;\n}\n@keyframes _ngcontent-%COMP%_animateMultiLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  55% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  }\n}\n[animation=bouncing][lines=\"3\"][_nghost-%COMP%] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 90% , var(--text-shell-background, #FFF) 90%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 79% , var(--text-shell-background, #FFF) 79%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 47% , var(--text-shell-background, #FFF) 47%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  animation-direction: alternate-reverse;\n  animation-name: _ngcontent-%COMP%_animateMultiLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 3) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n  animation-fill-mode: forwards;\n  animation-iteration-count: infinite;\n  animation-timing-function: ease-in-out;\n  animation-duration: 1s;\n}\n@keyframes _ngcontent-%COMP%_animateMultiLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  55% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  }\n}\n[animation=bouncing][lines=\"4\"][_nghost-%COMP%] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 86% , var(--text-shell-background, #FFF) 86%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 70% , var(--text-shell-background, #FFF) 70%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 73% , var(--text-shell-background, #FFF) 73%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 40% , var(--text-shell-background, #FFF) 40%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  animation-direction: alternate-reverse;\n  animation-name: _ngcontent-%COMP%_animateMultiLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 4) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n  animation-fill-mode: forwards;\n  animation-iteration-count: infinite;\n  animation-timing-function: ease-in-out;\n  animation-duration: 1s;\n}\n@keyframes _ngcontent-%COMP%_animateMultiLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  55% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  }\n}\n[animation=bouncing][lines=\"5\"][_nghost-%COMP%] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 88% , var(--text-shell-background, #FFF) 88%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 77% , var(--text-shell-background, #FFF) 77%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 69% , var(--text-shell-background, #FFF) 69%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 66% , var(--text-shell-background, #FFF) 66%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 39% , var(--text-shell-background, #FFF) 39%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  animation-direction: alternate-reverse;\n  animation-name: _ngcontent-%COMP%_animateMultiLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 5) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n  animation-fill-mode: forwards;\n  animation-iteration-count: infinite;\n  animation-timing-function: ease-in-out;\n  animation-duration: 1s;\n}\n@keyframes _ngcontent-%COMP%_animateMultiLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  55% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  }\n}\n[animation=bouncing][lines=\"6\"][_nghost-%COMP%] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 95% , var(--text-shell-background, #FFF) 95%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 73% , var(--text-shell-background, #FFF) 73%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 75% , var(--text-shell-background, #FFF) 75%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 79% , var(--text-shell-background, #FFF) 79%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 69% , var(--text-shell-background, #FFF) 69%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 36% , var(--text-shell-background, #FFF) 36%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  animation-direction: alternate-reverse;\n  animation-name: _ngcontent-%COMP%_animateMultiLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 6) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n  animation-fill-mode: forwards;\n  animation-iteration-count: infinite;\n  animation-timing-function: ease-in-out;\n  animation-duration: 1s;\n}\n@keyframes _ngcontent-%COMP%_animateMultiLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  55% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  }\n}\n[animation=bouncing].text-loaded[_nghost-%COMP%] {\n  background: none;\n  min-height: inherit;\n  color: inherit;\n  animation: 0;\n}\n\n[animation=gradient][_nghost-%COMP%] {\n  --text-shell-background: #FFF;\n  --text-shell-line-color: transparent !important;\n  --text-shell-animation-background: #EEE;\n  --text-shell-animation-color: #DDD;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n}\n[animation=gradient][_nghost-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: linear-gradient(to right, var(--text-shell-animation-background) 8%, var(--text-shell-animation-color) 18%, var(--text-shell-animation-background) 33%);\n  background-size: 800px 104px;\n  animation: _ngcontent-%COMP%_animateBackground 2s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_animateBackground {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n[animation=gradient][_nghost-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 86% , var(--text-shell-background, #FFF) 86%);\n  background-position: 0 0px;\n  background-size: 100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n}\n[animation=gradient][lines=\"1\"][_nghost-%COMP%] {\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n}\n[animation=gradient][lines=\"1\"][_nghost-%COMP%]::after {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 87% , var(--text-shell-background, #FFF) 87%);\n  background-position: 0 0px;\n  background-size: 100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n}\n[animation=gradient][lines=\"2\"][_nghost-%COMP%] {\n  min-height: calc((var(--text-shell-line-height, 16px) * 2) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n}\n[animation=gradient][lines=\"2\"][_nghost-%COMP%]::after {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 85% , var(--text-shell-background, #FFF) 85%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 35% , var(--text-shell-background, #FFF) 35%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 2) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n}\n[animation=gradient][lines=\"3\"][_nghost-%COMP%] {\n  min-height: calc((var(--text-shell-line-height, 16px) * 3) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n}\n[animation=gradient][lines=\"3\"][_nghost-%COMP%]::after {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 87% , var(--text-shell-background, #FFF) 87%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 66% , var(--text-shell-background, #FFF) 66%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 42% , var(--text-shell-background, #FFF) 42%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 3) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n}\n[animation=gradient][lines=\"4\"][_nghost-%COMP%] {\n  min-height: calc((var(--text-shell-line-height, 16px) * 4) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n}\n[animation=gradient][lines=\"4\"][_nghost-%COMP%]::after {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 90% , var(--text-shell-background, #FFF) 90%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 79% , var(--text-shell-background, #FFF) 79%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 69% , var(--text-shell-background, #FFF) 69%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 30% , var(--text-shell-background, #FFF) 30%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 4) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n}\n[animation=gradient][lines=\"5\"][_nghost-%COMP%] {\n  min-height: calc((var(--text-shell-line-height, 16px) * 5) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n}\n[animation=gradient][lines=\"5\"][_nghost-%COMP%]::after {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 85% , var(--text-shell-background, #FFF) 85%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 75% , var(--text-shell-background, #FFF) 75%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 62% , var(--text-shell-background, #FFF) 62%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 69% , var(--text-shell-background, #FFF) 69%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 45% , var(--text-shell-background, #FFF) 45%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 5) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n}\n[animation=gradient][lines=\"6\"][_nghost-%COMP%] {\n  min-height: calc((var(--text-shell-line-height, 16px) * 6) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n}\n[animation=gradient][lines=\"6\"][_nghost-%COMP%]::after {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 92% , var(--text-shell-background, #FFF) 92%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 70% , var(--text-shell-background, #FFF) 70%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 72% , var(--text-shell-background, #FFF) 72%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 65% , var(--text-shell-background, #FFF) 65%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 74% , var(--text-shell-background, #FFF) 74%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 42% , var(--text-shell-background, #FFF) 42%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 6) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n}\n[animation=gradient].text-loaded[_nghost-%COMP%] {\n  background: none;\n  min-height: inherit;\n  color: inherit;\n}\n[animation=gradient].text-loaded[_nghost-%COMP%]::before, [animation=gradient].text-loaded[_nghost-%COMP%]::after {\n  background: none;\n  animation: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHQtc2hlbGwuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9UaXRhbiUyMEVzdGF0ZXMvc3JjL2FwcC9zaGVsbC90ZXh0LXNoZWxsL3RleHQtc2hlbGwuY29tcG9uZW50LnNjc3MiLCJtaXhpbnMvbWFza2VkLWxpbmVzLWJhY2tncm91bmQuc2NzcyIsIm1peGlucy9iYWNrZ3JvdW5kLWhlaWdodC5zY3NzIiwibWl4aW5zL2JvdW5jaW5nLWxpbmVzLWJhY2tncm91bmQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNFLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBRUEsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4Q0FBQTtFQUNBLDRCQUFBO0VBR0EsNEJBQUE7QUNSRjs7QURZQTtFRVBJLDRIQUFBO0VBQ0EsMEJBQUE7RUFDQSx5REFBQTtFQUNBLDRCQUFBO0VDZkYsNEdBQUE7QUZlRjtBRFVJO0VFYkEsNEhBQUE7RUFDQSwwQkFBQTtFQUNBLHlEQUFBO0VBQ0EsNEJBQUE7RUNmRiw0R0FBQTtBRnNCRjtBREdJO0VFZ0JBLHVWQUFBO0VBQ0EsZ1BBQUE7RUFDQSw4SUFBQTtFQUNBLDRCQUFBO0VDNUNGLDRHQUFBO0FGNkJGO0FESkk7RUVnQkEsa2pCQUFBO0VBQ0Esc2NBQUE7RUFDQSxtT0FBQTtFQUNBLDRCQUFBO0VDNUNGLDRHQUFBO0FGb0NGO0FEWEk7RUVnQkEsNndCQUFBO0VBQ0EsNHBCQUFBO0VBQ0Esd1RBQUE7RUFDQSw0QkFBQTtFQzVDRiw0R0FBQTtBRjJDRjtBRGxCSTtFRWdCQSx3K0JBQUE7RUFDQSxrM0JBQUE7RUFDQSw2WUFBQTtFQUNBLDRCQUFBO0VDNUNGLDRHQUFBO0FGa0RGO0FEekJJO0VFZ0JBLG1zQ0FBQTtFQUNBLHdrQ0FBQTtFQUNBLGtlQUFBO0VBQ0EsNEJBQUE7RUM1Q0YsNEdBQUE7QUZ5REY7QUQzQkU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQzZCSjs7QUR4QkE7RUl6QkksNEhBQUE7RUFDQSwwQkFBQTtFQUNBLHlEQUFBO0VBQ0EsNEJBQUE7RUFFQSw4QkFBQTtFQUNBLDJCQUFBO0VEbkJGLDRHQUFBO0VDbUZBLDZCQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQ0FBQTtFQUNBLHNCQUFBO0FIVkY7QUd2REk7RUFDRTtJQUNFLHdEQUFBO0VIeUROO0VHdERJO0lBQ0UseURBQUE7RUh3RE47QUFDRjtBRHhDSTtFSS9CQSw0SEFBQTtFQUNBLDBCQUFBO0VBQ0EseURBQUE7RUFDQSw0QkFBQTtFQUVBLDhCQUFBO0VBQ0EsMkJBQUE7RURuQkYsNEdBQUE7RUNtRkEsNkJBQUE7RUFDQSxtQ0FBQTtFQUNBLHNDQUFBO0VBQ0Esc0JBQUE7QUhXRjtBRzVFSTtFQUNFO0lBQ0Usd0RBQUE7RUg4RU47RUczRUk7SUFDRSx5REFBQTtFSDZFTjtBQUNGO0FEN0RJO0VJa0JBLHVWQUFBO0VBQ0EsZ1BBQUE7RUFDQSw4SUFBQTtFQUNBLDRCQUFBO0VBRUEsc0NBQUE7RUFDQSxnQ0FBQTtFRHBFRiw0R0FBQTtFQ21GQSw2QkFBQTtFQUNBLG1DQUFBO0VBQ0Esc0NBQUE7RUFDQSxzQkFBQTtBSGdDRjtBR2hESTtFQUNFO0lBQ0UsNElBQUE7RUhrRE47RUcvQ0k7SUFDRSw4SUFBQTtFSGlETjtBQUNGO0FEbEZJO0VJa0JBLGtqQkFBQTtFQUNBLHNjQUFBO0VBQ0EsbU9BQUE7RUFDQSw0QkFBQTtFQUVBLHNDQUFBO0VBQ0EsZ0NBQUE7RURwRUYsNEdBQUE7RUNtRkEsNkJBQUE7RUFDQSxtQ0FBQTtFQUNBLHNDQUFBO0VBQ0Esc0JBQUE7QUhxREY7QUdyRUk7RUFDRTtJQUNFLGdPQUFBO0VIdUVOO0VHcEVJO0lBQ0UsbU9BQUE7RUhzRU47QUFDRjtBRHZHSTtFSWtCQSw2d0JBQUE7RUFDQSw0cEJBQUE7RUFDQSx3VEFBQTtFQUNBLDRCQUFBO0VBRUEsc0NBQUE7RUFDQSxnQ0FBQTtFRHBFRiw0R0FBQTtFQ21GQSw2QkFBQTtFQUNBLG1DQUFBO0VBQ0Esc0NBQUE7RUFDQSxzQkFBQTtBSDBFRjtBRzFGSTtFQUNFO0lBQ0Usb1RBQUE7RUg0Rk47RUd6Rkk7SUFDRSx3VEFBQTtFSDJGTjtBQUNGO0FENUhJO0VJa0JBLHcrQkFBQTtFQUNBLGszQkFBQTtFQUNBLDZZQUFBO0VBQ0EsNEJBQUE7RUFFQSxzQ0FBQTtFQUNBLGdDQUFBO0VEcEVGLDRHQUFBO0VDbUZBLDZCQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQ0FBQTtFQUNBLHNCQUFBO0FIK0ZGO0FHL0dJO0VBQ0U7SUFDRSx3WUFBQTtFSGlITjtFRzlHSTtJQUNFLDZZQUFBO0VIZ0hOO0FBQ0Y7QURqSkk7RUlrQkEsbXNDQUFBO0VBQ0Esd2tDQUFBO0VBQ0Esa2VBQUE7RUFDQSw0QkFBQTtFQUVBLHNDQUFBO0VBQ0EsZ0NBQUE7RURwRUYsNEdBQUE7RUNtRkEsNkJBQUE7RUFDQSxtQ0FBQTtFQUNBLHNDQUFBO0VBQ0Esc0JBQUE7QUhvSEY7QUdwSUk7RUFDRTtJQUNFLDRkQUFBO0VIc0lOO0VHbklJO0lBQ0Usa2VBQUE7RUhxSU47QUFDRjtBRGpLRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBRUEsWUFBQTtBQ2tLSjs7QUQ3SkE7RUFDRSw2QkFBQTtFQUNBLCtDQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQ0FBQTtFRy9EQSw0R0FBQTtBRmdPRjtBRDFKRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxtS0FDRTtFQUNGLDRCQUFBO0VBQ0Esb0RBQUE7QUMySko7QUR4SkU7RUFDRTtJQUNFLDZCQUFBO0VDMEpKO0VEdkpFO0lBQ0UsNEJBQUE7RUN5Sko7QUFDRjtBRHJKRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUV4RkEsNEhBQUE7RUFDQSwwQkFBQTtFQUNBLHlEQUFBO0VBQ0EsNEJBQUE7RUNmRiw0R0FBQTtBRmdRRjtBRHBKSTtFRzVHRiw0R0FBQTtBRm1RRjtBRG5KTTtFRXBHRiw0SEFBQTtFQUNBLDBCQUFBO0VBQ0EseURBQUE7RUFDQSw0QkFBQTtFQ2ZGLDRHQUFBO0FGMFFGO0FEOUpJO0VHNUdGLDRHQUFBO0FGNlFGO0FEN0pNO0VFdkVGLHVWQUFBO0VBQ0EsZ1BBQUE7RUFDQSw4SUFBQTtFQUNBLDRCQUFBO0VDNUNGLDRHQUFBO0FGb1JGO0FEeEtJO0VHNUdGLDRHQUFBO0FGdVJGO0FEdktNO0VFdkVGLGtqQkFBQTtFQUNBLHNjQUFBO0VBQ0EsbU9BQUE7RUFDQSw0QkFBQTtFQzVDRiw0R0FBQTtBRjhSRjtBRGxMSTtFRzVHRiw0R0FBQTtBRmlTRjtBRGpMTTtFRXZFRiw2d0JBQUE7RUFDQSw0cEJBQUE7RUFDQSx3VEFBQTtFQUNBLDRCQUFBO0VDNUNGLDRHQUFBO0FGd1NGO0FENUxJO0VHNUdGLDRHQUFBO0FGMlNGO0FEM0xNO0VFdkVGLHcrQkFBQTtFQUNBLGszQkFBQTtFQUNBLDZZQUFBO0VBQ0EsNEJBQUE7RUM1Q0YsNEdBQUE7QUZrVEY7QUR0TUk7RUc1R0YsNEdBQUE7QUZxVEY7QURyTU07RUV2RUYsbXNDQUFBO0VBQ0Esd2tDQUFBO0VBQ0Esa2VBQUE7RUFDQSw0QkFBQTtFQzVDRiw0R0FBQTtBRjRURjtBRHRNRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDd01KO0FEdE1JO0VBRUUsZ0JBQUE7RUFDQSxZQUFBO0FDdU1OIiwiZmlsZSI6InRleHQtc2hlbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi9taXhpbnMvYmFja2dyb3VuZC1oZWlnaHRcIjtcbkBpbXBvcnQgXCIuL21peGlucy9tYXNrZWQtbGluZXMtYmFja2dyb3VuZFwiO1xuQGltcG9ydCBcIi4vbWl4aW5zL2JvdW5jaW5nLWxpbmVzLWJhY2tncm91bmRcIjtcblxuJG1heC1saW5lcy1jb3VudDogNjtcblxuOmhvc3Qge1xuICAtLXRleHQtc2hlbGwtYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiAjRUVFO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE2cHg7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlcjogM3B4O1xuXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kKTtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgLy8gVG8gZml4IDFweCBsaW5lIG1pc2FsaWdubWVudCBpbiBjaHJvbWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9iYWNrZ3JvdW5kLWNsaXBcbiAgLy8gKEkgYWxzbyBub3RpY2VkIHRoYXQgaWYgSSBzZXQgdGhlIGNvbG9yIHRvIGEgc29saWQgY29sb3IgaW5zdGVhZCBvZiBoYXZpbmcgb3BhY2l0eSwgdGhlIGlzc3VlIGRvZXNuJ3QgaGFwcGVuKVxuICBiYWNrZ3JvdW5kLWNsaXA6IGNvbnRlbnQtYm94O1xufVxuXG4vLyBEZWZhdWx0IHN0eWxlcy4gV2hlbiBubyBhbmltYXRpb24gYXR0cmlidXRlIGlzIHByb3ZpZGVkXG46aG9zdCg6bm90KFthbmltYXRpb25dKSkge1xuICAvLyBEZWZhdWx0IG9uZSBsaW5lIHRleHQtc2hlbGxcbiAgQGluY2x1ZGUgbWFza2VkLWxpbmVzLWJhY2tncm91bmQoMSk7XG5cbiAgLy8gU3VwcG9ydCBmb3IgW2xpbmVzXSBhdHRyaWJ1dGVcbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkbWF4LWxpbmVzLWNvdW50IHtcbiAgICAmW2xpbmVzPVwiI3sgJGkgfVwiXSB7XG4gICAgICBAaW5jbHVkZSBtYXNrZWQtbGluZXMtYmFja2dyb3VuZCgkaSk7XG4gICAgfVxuICB9XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBtaW4taGVpZ2h0OiBpbmhlcml0O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICB9XG59XG5cbi8vIEJvdW5jaW5nIGxpbmUgbG9hZGluZyBhbmltYXRpb25cbjpob3N0KFthbmltYXRpb249XCJib3VuY2luZ1wiXSkge1xuICAvLyBEZWZhdWx0IG9uZSBsaW5lIHRleHQtc2hlbGxcbiAgQGluY2x1ZGUgYm91bmNpbmctbGluZXMtYmFja2dyb3VuZCgxKTtcblxuICAvLyBTdXBwb3J0IGZvciBbbGluZXNdIGF0dHJpYnV0ZVxuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoICRtYXgtbGluZXMtY291bnQge1xuICAgICZbbGluZXM9XCIjeyAkaSB9XCJdIHtcbiAgICAgIEBpbmNsdWRlIGJvdW5jaW5nLWxpbmVzLWJhY2tncm91bmQoJGkpO1xuICAgIH1cbiAgfVxuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgbWluLWhlaWdodDogaW5oZXJpdDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAvLyAwIGlzIHRoZSBkZWZhdWx0IHZhbHVlIChzZWU6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNTk2MzA0NC8xMTE2OTU5KVxuICAgIGFuaW1hdGlvbjogMDtcbiAgfVxufVxuXG4vLyBCYWNrZ3JvdW5kIGdyYWRpZW50IGJlbmVhdGggbWFza2VkIGxpbmVzXG46aG9zdChbYW5pbWF0aW9uPVwiZ3JhZGllbnRcIl0pIHtcbiAgLS10ZXh0LXNoZWxsLWJhY2tncm91bmQ6ICNGRkY7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWJhY2tncm91bmQ6ICNFRUU7XG4gIC0tdGV4dC1zaGVsbC1hbmltYXRpb24tY29sb3I6ICNEREQ7XG5cblxuICAvLyBDYWxjdWxhdGUgZGVmYXVsdCBoZWlnaHQgZm9yIDEgbGluZVxuICBAaW5jbHVkZSBiYWNrZ3JvdW5kLWhlaWdodChtaW4taGVpZ2h0LCAxKTtcblxuICAvLyBUaGUgYW5pbWF0aW9uIHRoYXQgZ29lcyBiZW5lYXRoIHRoZSBtYXNrc1xuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kOlxuICAgICAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1iYWNrZ3JvdW5kKSA4JSwgdmFyKC0tdGV4dC1zaGVsbC1hbmltYXRpb24tY29sb3IpIDE4JSwgdmFyKC0tdGV4dC1zaGVsbC1hbmltYXRpb24tYmFja2dyb3VuZCkgMzMlKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDgwMHB4IDEwNHB4O1xuICAgIGFuaW1hdGlvbjogYW5pbWF0ZUJhY2tncm91bmQgMnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gIH1cblxuICBAa2V5ZnJhbWVzIGFuaW1hdGVCYWNrZ3JvdW5kIHtcbiAgICAwJXtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00NjhweCAwXG4gICAgfVxuXG4gICAgMTAwJXtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDQ2OHB4IDBcbiAgICB9XG4gIH1cblxuICAvLyBUaGUgbWFza3NcbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcblxuICAgIC8vIERlZmF1bHQgb25lIGxpbmUgdGV4dC1zaGVsbFxuICAgIEBpbmNsdWRlIG1hc2tlZC1saW5lcy1iYWNrZ3JvdW5kKDEpO1xuICB9XG5cbiAgLy8gU3VwcG9ydCBmb3IgW2xpbmVzXSBhdHRyaWJ1dGVcbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkbWF4LWxpbmVzLWNvdW50IHtcbiAgICAmW2xpbmVzPVwiI3sgJGkgfVwiXSB7XG4gICAgICAvLyBDYWxjdWxhdGUgZGVmYXVsdCBoZWlnaHQgZm9yICRpIGxpbmVzXG4gICAgICBAaW5jbHVkZSBiYWNrZ3JvdW5kLWhlaWdodChtaW4taGVpZ2h0LCAkaSk7XG5cbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgQGluY2x1ZGUgbWFza2VkLWxpbmVzLWJhY2tncm91bmQoJGkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgbWluLWhlaWdodDogaW5oZXJpdDtcbiAgICBjb2xvcjogaW5oZXJpdDtcblxuICAgICY6OmJlZm9yZSxcbiAgICAmOjphZnRlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgYW5pbWF0aW9uOiAwO1xuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICAtLXRleHQtc2hlbGwtYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiAjRUVFO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE2cHg7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlcjogM3B4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCk7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIGJhY2tncm91bmQtY2xpcDogY29udGVudC1ib3g7XG59XG5cbjpob3N0KDpub3QoW2FuaW1hdGlvbl0pKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA5MSUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDkxJSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogMSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgxIC0gMSkpKTtcbn1cbjpob3N0KDpub3QoW2FuaW1hdGlvbl0pKVtsaW5lcz1cIjFcIl0ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgODglICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA4OCUpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDBweDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBtaW4taGVpZ2h0OiBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqIDEpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMSAtIDEpKSk7XG59XG46aG9zdCg6bm90KFthbmltYXRpb25dKSlbbGluZXM9XCIyXCJdIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDk0JSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgOTQlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDMyJSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMzIlKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwcHgsICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDIgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgyIC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMiAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDIgLSAxKSkpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBtaW4taGVpZ2h0OiBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqIDIpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMiAtIDEpKSk7XG59XG46aG9zdCg6bm90KFthbmltYXRpb25dKSlbbGluZXM9XCIzXCJdIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDg4JSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgODglKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDY4JSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgNjglKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDQxJSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgNDElKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwcHgsICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDIgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgyIC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMiAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDIgLSAxKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgzIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMyAtIDIpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDMgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgzIC0gMSkpKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogMykgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgzIC0gMSkpKTtcbn1cbjpob3N0KDpub3QoW2FuaW1hdGlvbl0pKVtsaW5lcz1cIjRcIl0ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgOTIlICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA5MiUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNjQlICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA2NCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNjAlICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA2MCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgMzMlICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAzMyUpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDBweCwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMiAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDIgLSAyKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgyIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMiAtIDEpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDMgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgzIC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMyAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDMgLSAxKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICg0IC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoNCAtIDIpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDQgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg0IC0gMSkpKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBtaW4taGVpZ2h0OiBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqIDQpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoNCAtIDEpKSk7XG59XG46aG9zdCg6bm90KFthbmltYXRpb25dKSlbbGluZXM9XCI1XCJdIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDkzJSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgOTMlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDczJSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgNzMlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDY0JSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgNjQlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDY1JSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgNjUlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDMyJSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMzIlKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwcHgsICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDIgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgyIC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMiAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDIgLSAxKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgzIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMyAtIDIpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDMgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgzIC0gMSkpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoNCAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDQgLSAyKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICg0IC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoNCAtIDEpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDUgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg1IC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoNSAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDUgLSAxKSkpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBtaW4taGVpZ2h0OiBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqIDUpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoNSAtIDEpKSk7XG59XG46aG9zdCg6bm90KFthbmltYXRpb25dKSlbbGluZXM9XCI2XCJdIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDg3JSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgODclKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDY2JSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgNjYlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDYzJSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgNjMlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDYzJSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgNjMlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDY5JSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgNjklKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDM5JSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMzklKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwcHgsICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDIgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgyIC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMiAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDIgLSAxKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgzIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMyAtIDIpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDMgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgzIC0gMSkpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoNCAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDQgLSAyKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICg0IC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoNCAtIDEpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDUgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg1IC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoNSAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDUgLSAxKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICg2IC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoNiAtIDIpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDYgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg2IC0gMSkpKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogNikgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg2IC0gMSkpKTtcbn1cbjpob3N0KDpub3QoW2FuaW1hdGlvbl0pKS50ZXh0LWxvYWRlZCB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIG1pbi1oZWlnaHQ6IGluaGVyaXQ7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG46aG9zdChbYW5pbWF0aW9uPWJvdW5jaW5nXSkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgODklICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA4OSUpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDBweDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XG4gIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRlTGluZTtcbiAgbWluLWhlaWdodDogY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAxKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDEgLSAxKSkpO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xufVxuQGtleWZyYW1lcyBhbmltYXRlTGluZSB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDg1JSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gIH1cbn1cbjpob3N0KFthbmltYXRpb249Ym91bmNpbmddKVtsaW5lcz1cIjFcIl0ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgOTElICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA5MSUpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDBweDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XG4gIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRlTGluZTtcbiAgbWluLWhlaWdodDogY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAxKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDEgLSAxKSkpO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xufVxuQGtleWZyYW1lcyBhbmltYXRlTGluZSB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDg1JSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gIH1cbn1cbjpob3N0KFthbmltYXRpb249Ym91bmNpbmddKVtsaW5lcz1cIjJcIl0ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgOTMlICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA5MyUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNDclICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA0NyUpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDBweCwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMiAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDIgLSAyKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgyIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMiAtIDEpKSk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZS1yZXZlcnNlO1xuICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZU11bHRpTGluZTtcbiAgbWluLWhlaWdodDogY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAyKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDIgLSAxKSkpO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xufVxuQGtleWZyYW1lcyBhbmltYXRlTXVsdGlMaW5lIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtc2l6ZTogODUlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgNTUlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpO1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gIH1cbn1cbjpob3N0KFthbmltYXRpb249Ym91bmNpbmddKVtsaW5lcz1cIjNcIl0ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgOTAlICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA5MCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNzklICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA3OSUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNDclICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA0NyUpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDBweCwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMiAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDIgLSAyKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgyIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMiAtIDEpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDMgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgzIC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMyAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDMgLSAxKSkpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlLXJldmVyc2U7XG4gIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRlTXVsdGlMaW5lO1xuICBtaW4taGVpZ2h0OiBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqIDMpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMyAtIDEpKSk7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG59XG5Aa2V5ZnJhbWVzIGFuaW1hdGVNdWx0aUxpbmUge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1zaXplOiA4NSUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICA3NSUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICA1NSUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gIH1cbn1cbjpob3N0KFthbmltYXRpb249Ym91bmNpbmddKVtsaW5lcz1cIjRcIl0ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgODYlICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA4NiUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNzAlICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA3MCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNzMlICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA3MyUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNDAlICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA0MCUpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDBweCwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMiAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDIgLSAyKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgyIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMiAtIDEpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDMgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgzIC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMyAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDMgLSAxKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICg0IC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoNCAtIDIpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDQgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg0IC0gMSkpKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGUtcmV2ZXJzZTtcbiAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGVNdWx0aUxpbmU7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogNCkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg0IC0gMSkpKTtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbn1cbkBrZXlmcmFtZXMgYW5pbWF0ZU11bHRpTGluZSB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDg1JSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDc1JSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDc1JSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDU1JSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gIH1cbn1cbjpob3N0KFthbmltYXRpb249Ym91bmNpbmddKVtsaW5lcz1cIjVcIl0ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgODglICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA4OCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNzclICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA3NyUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNjklICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA2OSUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNjYlICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA2NiUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgMzklICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAzOSUpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDBweCwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMiAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDIgLSAyKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgyIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMiAtIDEpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDMgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgzIC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMyAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDMgLSAxKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICg0IC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoNCAtIDIpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDQgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg0IC0gMSkpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoNSAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDUgLSAyKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICg1IC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoNSAtIDEpKSk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZS1yZXZlcnNlO1xuICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZU11bHRpTGluZTtcbiAgbWluLWhlaWdodDogY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiA1KSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDUgLSAxKSkpO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xufVxuQGtleWZyYW1lcyBhbmltYXRlTXVsdGlMaW5lIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtc2l6ZTogODUlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgNzUlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgNzUlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgNzUlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgNTUlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpO1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gIH1cbn1cbjpob3N0KFthbmltYXRpb249Ym91bmNpbmddKVtsaW5lcz1cIjZcIl0ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgOTUlICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA5NSUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNzMlICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA3MyUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNzUlICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA3NSUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNzklICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA3OSUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNjklICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA2OSUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgMzYlICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAzNiUpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDBweCwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMiAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDIgLSAyKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgyIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMiAtIDEpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDMgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgzIC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMyAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDMgLSAxKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICg0IC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoNCAtIDIpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDQgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg0IC0gMSkpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoNSAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDUgLSAyKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICg1IC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoNSAtIDEpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDYgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg2IC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoNiAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDYgLSAxKSkpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlLXJldmVyc2U7XG4gIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRlTXVsdGlMaW5lO1xuICBtaW4taGVpZ2h0OiBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqIDYpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoNiAtIDEpKSk7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG59XG5Aa2V5ZnJhbWVzIGFuaW1hdGVNdWx0aUxpbmUge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1zaXplOiA4NSUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICA3NSUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICA3NSUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICA3NSUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICA3NSUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICA1NSUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gIH1cbn1cbjpob3N0KFthbmltYXRpb249Ym91bmNpbmddKS50ZXh0LWxvYWRlZCB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIG1pbi1oZWlnaHQ6IGluaGVyaXQ7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBhbmltYXRpb246IDA7XG59XG5cbjpob3N0KFthbmltYXRpb249Z3JhZGllbnRdKSB7XG4gIC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kOiAjRkZGO1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1iYWNrZ3JvdW5kOiAjRUVFO1xuICAtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWNvbG9yOiAjREREO1xuICBtaW4taGVpZ2h0OiBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqIDEpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMSAtIDEpKSk7XG59XG46aG9zdChbYW5pbWF0aW9uPWdyYWRpZW50XSk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWJhY2tncm91bmQpIDglLCB2YXIoLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1jb2xvcikgMTglLCB2YXIoLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1iYWNrZ3JvdW5kKSAzMyUpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDgwMHB4IDEwNHB4O1xuICBhbmltYXRpb246IGFuaW1hdGVCYWNrZ3JvdW5kIDJzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuQGtleWZyYW1lcyBhbmltYXRlQmFja2dyb3VuZCB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDY4cHggMDtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0NjhweCAwO1xuICB9XG59XG46aG9zdChbYW5pbWF0aW9uPWdyYWRpZW50XSk6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA4NiUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDg2JSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogMSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgxIC0gMSkpKTtcbn1cbjpob3N0KFthbmltYXRpb249Z3JhZGllbnRdKVtsaW5lcz1cIjFcIl0ge1xuICBtaW4taGVpZ2h0OiBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqIDEpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMSAtIDEpKSk7XG59XG46aG9zdChbYW5pbWF0aW9uPWdyYWRpZW50XSlbbGluZXM9XCIxXCJdOjphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA4NyUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDg3JSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogMSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgxIC0gMSkpKTtcbn1cbjpob3N0KFthbmltYXRpb249Z3JhZGllbnRdKVtsaW5lcz1cIjJcIl0ge1xuICBtaW4taGVpZ2h0OiBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqIDIpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMiAtIDEpKSk7XG59XG46aG9zdChbYW5pbWF0aW9uPWdyYWRpZW50XSlbbGluZXM9XCIyXCJdOjphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA4NSUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDg1JSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSAzNSUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDM1JSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMHB4LCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgyIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMiAtIDIpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDIgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgyIC0gMSkpKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgbWluLWhlaWdodDogY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAyKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDIgLSAxKSkpO1xufVxuOmhvc3QoW2FuaW1hdGlvbj1ncmFkaWVudF0pW2xpbmVzPVwiM1wiXSB7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogMykgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgzIC0gMSkpKTtcbn1cbjpob3N0KFthbmltYXRpb249Z3JhZGllbnRdKVtsaW5lcz1cIjNcIl06OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDg3JSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgODclKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDY2JSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgNjYlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDQyJSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgNDIlKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwcHgsICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDIgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgyIC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMiAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDIgLSAxKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgzIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMyAtIDIpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDMgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgzIC0gMSkpKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogMykgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgzIC0gMSkpKTtcbn1cbjpob3N0KFthbmltYXRpb249Z3JhZGllbnRdKVtsaW5lcz1cIjRcIl0ge1xuICBtaW4taGVpZ2h0OiBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqIDQpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoNCAtIDEpKSk7XG59XG46aG9zdChbYW5pbWF0aW9uPWdyYWRpZW50XSlbbGluZXM9XCI0XCJdOjphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA5MCUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDkwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA3OSUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDc5JSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA2OSUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDY5JSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSAzMCUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDMwJSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMHB4LCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgyIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMiAtIDIpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDIgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgyIC0gMSkpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMyAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDMgLSAyKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgzIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMyAtIDEpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDQgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg0IC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoNCAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDQgLSAxKSkpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogNCkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg0IC0gMSkpKTtcbn1cbjpob3N0KFthbmltYXRpb249Z3JhZGllbnRdKVtsaW5lcz1cIjVcIl0ge1xuICBtaW4taGVpZ2h0OiBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqIDUpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoNSAtIDEpKSk7XG59XG46aG9zdChbYW5pbWF0aW9uPWdyYWRpZW50XSlbbGluZXM9XCI1XCJdOjphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA4NSUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDg1JSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA3NSUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDc1JSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA2MiUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDYyJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA2OSUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDY5JSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA0NSUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDQ1JSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMHB4LCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgyIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMiAtIDIpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDIgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgyIC0gMSkpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMyAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDMgLSAyKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgzIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMyAtIDEpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDQgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg0IC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoNCAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDQgLSAxKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICg1IC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoNSAtIDIpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDUgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg1IC0gMSkpKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgbWluLWhlaWdodDogY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiA1KSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDUgLSAxKSkpO1xufVxuOmhvc3QoW2FuaW1hdGlvbj1ncmFkaWVudF0pW2xpbmVzPVwiNlwiXSB7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogNikgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg2IC0gMSkpKTtcbn1cbjpob3N0KFthbmltYXRpb249Z3JhZGllbnRdKVtsaW5lcz1cIjZcIl06OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDkyJSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgOTIlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDcwJSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgNzAlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDcyJSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgNzIlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDY1JSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgNjUlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDc0JSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgNzQlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDQyJSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgNDIlKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwcHgsICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDIgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgyIC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMiAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDIgLSAxKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgzIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMyAtIDIpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDMgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgzIC0gMSkpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoNCAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDQgLSAyKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICg0IC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoNCAtIDEpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDUgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg1IC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoNSAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDUgLSAxKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICg2IC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoNiAtIDIpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDYgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg2IC0gMSkpKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogNikgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg2IC0gMSkpKTtcbn1cbjpob3N0KFthbmltYXRpb249Z3JhZGllbnRdKS50ZXh0LWxvYWRlZCB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIG1pbi1oZWlnaHQ6IGluaGVyaXQ7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuOmhvc3QoW2FuaW1hdGlvbj1ncmFkaWVudF0pLnRleHQtbG9hZGVkOjpiZWZvcmUsIDpob3N0KFthbmltYXRpb249Z3JhZGllbnRdKS50ZXh0LWxvYWRlZDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBhbmltYXRpb246IDA7XG59IiwiQGltcG9ydCBcIi4vdXRpbHNcIjtcbkBpbXBvcnQgXCIuL2JhY2tncm91bmQtaGVpZ2h0XCI7XG5cbkBtaXhpbiBtYXNrZWQtbGluZXMtYmFja2dyb3VuZCgkbGluZXM6IDEpIHtcbiAgJGxpbmUtaGVpZ2h0OiB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgJGxpbmUtc3BhY2luZzogdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KTtcbiAgJGJnLWNvbG9yOiB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpO1xuICAkbWFzay1jb2xvcjogdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKTtcbiAgJGxpbmUtYmctY29sb3I6IHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRik7XG4gICRiZy15LXBvczogMHB4O1xuICAkcmFuZC13aWR0aDogI3tyYW5kb21OdW0oODUsIDk1KX07XG4gICRiZy1pbWFnZTogJ2xpbmVhci1ncmFkaWVudCh0byByaWdodCwgJyArICRiZy1jb2xvciArICcgJyArICRyYW5kLXdpZHRoICsgJyUgLCAnICsgJG1hc2stY29sb3IgKyAnICcgKyAkcmFuZC13aWR0aCArICclKSc7XG4gICRiZy1wb3NpdGlvbjogJzAgJyArICRiZy15LXBvcztcbiAgJGJnLXNpemU6ICcxMDAlICcgKyAkbGluZS1oZWlnaHQ7XG5cbiAgQGlmICgkbGluZXMgPT0gMSkge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6ICN7JGJnLWltYWdlfTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAjeyRiZy1wb3NpdGlvbn07XG4gICAgYmFja2dyb3VuZC1zaXplOiAjeyRiZy1zaXplfTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB9IEBlbHNlIHtcbiAgICBAZm9yICRpIGZyb20gMiB0aHJvdWdoICRsaW5lcyB7XG4gICAgICAvLyBBZGQgc2VwYXJhdG9yIGJldHdlZW4gbGluZXNcbiAgICAgICRiZy1pbWFnZTogYXBwZW5kKCRiZy1pbWFnZSwgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjeyRsaW5lLWJnLWNvbG9yfSAxMDAlLCAjeyRsaW5lLWJnLWNvbG9yfSAxMDAlKSk7XG4gICAgICAvLyBUaGlzIGxpbmVhci1ncmFkaWVudCBhcyBzZXBhcmF0b3Igc3RhcnRzIGJlbG93IHRoZSBsYXN0IGxpbmUsXG4gICAgICAvLyBzbyB3ZSBoYXZlIHRvIGFkZCAkbGluZS1oZWlnaHQgdG8gb3VyIHktcG9zIHBvaW50ZXJcbiAgICAgICRiZy15LXBvczogY2FsYygoI3skbGluZS1oZWlnaHR9ICogKCN7JGl9IC0gMSkpICsgKCN7JGxpbmUtc3BhY2luZ30gKiAoI3skaX0gLSAyKSkpO1xuICAgICAgJGJnLXBvc2l0aW9uOiBhcHBlbmQoJGJnLXBvc2l0aW9uLCAnMCAnICsgJGJnLXktcG9zKTtcbiAgICAgICRiZy1zaXplOiBhcHBlbmQoJGJnLXNpemUsICcxMDAlICcgKyAkbGluZS1zcGFjaW5nKTtcblxuICAgICAgLy8gQWRkIG5ldyBsaW5lXG4gICAgICAvLyBUaGUgbGFzdCBsaW5lIHNob3VsZCBiZSBuYXJyb3cgdGhhbiB0aGUgb3RoZXJzXG4gICAgICBAaWYgKCRpID09ICRsaW5lcykge1xuICAgICAgICAkcmFuZC13aWR0aDogI3tyYW5kb21OdW0oMzAsIDUwKX07XG4gICAgICB9IEBlbHNlIHtcbiAgICAgICAgJHJhbmQtd2lkdGg6ICN7cmFuZG9tTnVtKDYwLCA4MCl9O1xuICAgICAgfVxuICAgICAgJGJnLWltYWdlOiBhcHBlbmQoJGJnLWltYWdlLCAnbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAnICsgJGJnLWNvbG9yICsgJyAnICsgJHJhbmQtd2lkdGggKyAnJSAsICcgKyAkbWFzay1jb2xvciArICcgJyArICRyYW5kLXdpZHRoICsgJyUpJyk7XG4gICAgICAvLyBUaGlzIG5ldyBsaW5lIHN0YXJ0cyBiZWxvdyB0aGUgcHJ2aW91c2x5IGFkZGVkIHNlcGFyYXRvcixcbiAgICAgIC8vIHNvIHdlIGhhdmUgdG8gYWRkICRsaW5lLXNwYWNpbmcgdG8gb3VyIHktcG9zIHBvaW50ZXJcbiAgICAgICRiZy15LXBvczogY2FsYygoI3skbGluZS1oZWlnaHR9ICogKCN7JGl9IC0gMSkpICsgKCN7JGxpbmUtc3BhY2luZ30gKiAoI3skaX0gLSAxKSkpO1xuICAgICAgJGJnLXBvc2l0aW9uOiBhcHBlbmQoJGJnLXBvc2l0aW9uLCAnMCAnICsgJGJnLXktcG9zKTtcbiAgICAgICRiZy1zaXplOiBhcHBlbmQoJGJnLXNpemUsICcxMDAlICcgKyAkbGluZS1oZWlnaHQpO1xuICAgIH1cblxuICAgIGJhY2tncm91bmQtaW1hZ2U6ICN7dG8tc3RyaW5nKCRiZy1pbWFnZSwgJywgJyl9O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246ICN7dG8tc3RyaW5nKCRiZy1wb3NpdGlvbiwgJywgJyl9O1xuICAgIGJhY2tncm91bmQtc2l6ZTogI3t0by1zdHJpbmcoJGJnLXNpemUsICcsICcpfTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB9XG5cbiAgQGluY2x1ZGUgYmFja2dyb3VuZC1oZWlnaHQobWluLWhlaWdodCwgJGxpbmVzKTtcbn1cbiIsIkBtaXhpbiBiYWNrZ3JvdW5kLWhlaWdodCgkcHJvcGVydHksICRsaW5lczogMSkge1xuICAkbGluZS1oZWlnaHQ6IHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpO1xuICAkbGluZS1zcGFjaW5nOiB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpO1xuXG4gICN7JHByb3BlcnR5fTogY2FsYygoI3skbGluZS1oZWlnaHR9ICogI3skbGluZXN9KSArICgjeyRsaW5lLXNwYWNpbmd9ICogKCN7JGxpbmVzfSAtIDEpKSk7XG59XG4iLCJAaW1wb3J0IFwiLi91dGlsc1wiO1xuXG5AbWl4aW4gYm91bmNpbmctbGluZXMtYmFja2dyb3VuZCgkbGluZXM6IDEpIHtcbiAgJGxpbmUtaGVpZ2h0OiB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgJGxpbmUtc3BhY2luZzogdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KTtcbiAgJGJnLWNvbG9yOiB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpO1xuICAkbWFzay1jb2xvcjogdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKTtcbiAgJGxpbmUtYmctY29sb3I6IHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRik7XG4gICRiZy15LXBvczogMHB4O1xuICAkcmFuZC13aWR0aDogI3tyYW5kb21OdW0oODUsIDk1KX07XG4gICRiZy1pbWFnZTogJ2xpbmVhci1ncmFkaWVudCh0byByaWdodCwgJyArICRiZy1jb2xvciArICcgJyArICRyYW5kLXdpZHRoICsgJyUgLCAnICsgJG1hc2stY29sb3IgKyAnICcgKyAkcmFuZC13aWR0aCArICclKSc7XG4gICRiZy1wb3NpdGlvbjogJzAgJyArICRiZy15LXBvcztcbiAgJGJnLXNpemU6ICcxMDAlICcgKyAkbGluZS1oZWlnaHQ7XG4gICRiZy1zaXplLWFuaW1hdGlvbi1mcm9tOiAnODUlICcgKyAkbGluZS1oZWlnaHQ7XG4gICRiZy1zaXplLWFuaW1hdGlvbi10bzogJzEwMCUgJyArICRsaW5lLWhlaWdodDtcblxuICBAaWYgKCRsaW5lcyA9PSAxKSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogI3skYmctaW1hZ2V9O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246ICN7JGJnLXBvc2l0aW9ufTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6ICN7JGJnLXNpemV9O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cbiAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGVMaW5lO1xuXG4gICAgQGtleWZyYW1lcyBhbmltYXRlTGluZSB7XG4gICAgICAwJXtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAjeyRiZy1zaXplLWFuaW1hdGlvbi1mcm9tfTtcbiAgICAgIH1cblxuICAgICAgMTAwJXtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAjeyRiZy1zaXplLWFuaW1hdGlvbi10b307XG4gICAgICB9XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAZm9yICRpIGZyb20gMiB0aHJvdWdoICRsaW5lcyB7XG4gICAgICAvLyBBZGQgc2VwYXJhdG9yIGJldHdlZW4gbGluZXNcbiAgICAgICRiZy1pbWFnZTogYXBwZW5kKCRiZy1pbWFnZSwgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjeyRsaW5lLWJnLWNvbG9yfSAxMDAlLCAjeyRsaW5lLWJnLWNvbG9yfSAxMDAlKSk7XG4gICAgICAvLyBUaGlzIGxpbmVhci1ncmFkaWVudCBhcyBzZXBhcmF0b3Igc3RhcnRzIGJlbG93IHRoZSBsYXN0IGxpbmUsXG4gICAgICAvLyBzbyB3ZSBoYXZlIHRvIGFkZCAkbGluZS1oZWlnaHQgdG8gb3VyIHktcG9zIHBvaW50ZXJcbiAgICAgICRiZy15LXBvczogY2FsYygoI3skbGluZS1oZWlnaHR9ICogKCN7JGl9IC0gMSkpICsgKCN7JGxpbmUtc3BhY2luZ30gKiAoI3skaX0gLSAyKSkpO1xuICAgICAgJGJnLXBvc2l0aW9uOiBhcHBlbmQoJGJnLXBvc2l0aW9uLCAnMCAnICsgJGJnLXktcG9zKTtcbiAgICAgICRiZy1zaXplOiBhcHBlbmQoJGJnLXNpemUsICcxMDAlICcgKyAkbGluZS1zcGFjaW5nKTtcbiAgICAgIC8vIHNlcGFyYXRvciBsaW5lcyBoYXZlIHRoZSBzYW1lIGluaXRpYWwgYW5kIGVuZCBzdGF0ZSwgdGh1cyBubyBhbmltYXRpb24gb2NjdXJzXG4gICAgICAkYmctc2l6ZS1hbmltYXRpb24tZnJvbTogYXBwZW5kKCRiZy1zaXplLWFuaW1hdGlvbi1mcm9tLCAnMTAwJSAnICsgJGxpbmUtc3BhY2luZyk7XG4gICAgICAkYmctc2l6ZS1hbmltYXRpb24tdG86IGFwcGVuZCgkYmctc2l6ZS1hbmltYXRpb24tdG8sICcxMDAlICcgKyAkbGluZS1zcGFjaW5nKTtcblxuICAgICAgLy8gQWRkIG5ldyBsaW5lXG4gICAgICAvLyBUaGUgbGFzdCBsaW5lIHNob3VsZCBiZSBuYXJyb3cgdGhhbiB0aGUgb3RoZXJzXG4gICAgICBAaWYgKCRpID09ICRsaW5lcykge1xuICAgICAgICAkcmFuZC13aWR0aDogI3tyYW5kb21OdW0oMzAsIDUwKX07XG4gICAgICAgICRiZy1zaXplLWFuaW1hdGlvbi1mcm9tOiBhcHBlbmQoJGJnLXNpemUtYW5pbWF0aW9uLWZyb20sICc1NSUgJyArICRsaW5lLWhlaWdodCk7XG4gICAgICB9IEBlbHNlIHtcbiAgICAgICAgJHJhbmQtd2lkdGg6ICN7cmFuZG9tTnVtKDYwLCA4MCl9O1xuICAgICAgICAkYmctc2l6ZS1hbmltYXRpb24tZnJvbTogYXBwZW5kKCRiZy1zaXplLWFuaW1hdGlvbi1mcm9tLCAnNzUlICcgKyAkbGluZS1oZWlnaHQpO1xuICAgICAgfVxuXG4gICAgICAkYmctaW1hZ2U6IGFwcGVuZCgkYmctaW1hZ2UsICdsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICcgKyAkYmctY29sb3IgKyAnICcgKyAkcmFuZC13aWR0aCArICclICwgJyArICRtYXNrLWNvbG9yICsgJyAnICsgJHJhbmQtd2lkdGggKyAnJSknKTtcbiAgICAgIC8vIFRoaXMgbmV3IGxpbmUgc3RhcnRzIGJlbG93IHRoZSBwcnZpb3VzbHkgYWRkZWQgc2VwYXJhdG9yLFxuICAgICAgLy8gc28gd2UgaGF2ZSB0byBhZGQgJGxpbmUtc3BhY2luZyB0byBvdXIgeS1wb3MgcG9pbnRlclxuICAgICAgJGJnLXktcG9zOiBjYWxjKCgjeyRsaW5lLWhlaWdodH0gKiAoI3skaX0gLSAxKSkgKyAoI3skbGluZS1zcGFjaW5nfSAqICgjeyRpfSAtIDEpKSk7XG4gICAgICAkYmctcG9zaXRpb246IGFwcGVuZCgkYmctcG9zaXRpb24sICcwICcgKyAkYmcteS1wb3MpO1xuICAgICAgJGJnLXNpemU6IGFwcGVuZCgkYmctc2l6ZSwgJzEwMCUgJyArICRsaW5lLWhlaWdodCk7XG4gICAgICAkYmctc2l6ZS1hbmltYXRpb24tdG86IGFwcGVuZCgkYmctc2l6ZS1hbmltYXRpb24tdG8sICcxMDAlICcgKyAkbGluZS1oZWlnaHQpO1xuICAgIH1cblxuICAgIGJhY2tncm91bmQtaW1hZ2U6ICN7dG8tc3RyaW5nKCRiZy1pbWFnZSwgJywgJyl9O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246ICN7dG8tc3RyaW5nKCRiZy1wb3NpdGlvbiwgJywgJyl9O1xuICAgIGJhY2tncm91bmQtc2l6ZTogI3t0by1zdHJpbmcoJGJnLXNpemUsICcsICcpfTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXG4gICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlLXJldmVyc2U7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGVNdWx0aUxpbmU7XG5cbiAgICBAa2V5ZnJhbWVzIGFuaW1hdGVNdWx0aUxpbmUge1xuICAgICAgMCV7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogI3t0by1zdHJpbmcoJGJnLXNpemUtYW5pbWF0aW9uLWZyb20sICcsICcpfTtcbiAgICAgIH1cblxuICAgICAgMTAwJXtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAje3RvLXN0cmluZygkYmctc2l6ZS1hbmltYXRpb24tdG8sICcsICcpfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBAaW5jbHVkZSBiYWNrZ3JvdW5kLWhlaWdodChtaW4taGVpZ2h0LCAkbGluZXMpO1xuXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hlbGwvdGV4dC1zaGVsbC90ZXh0LXNoZWxsLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vVGl0YW4lMjBFc3RhdGVzL3NyYy9hcHAvc2hlbGwvdGV4dC1zaGVsbC90ZXh0LXNoZWxsLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9zaGVsbC90ZXh0LXNoZWxsL21peGlucy9tYXNrZWQtbGluZXMtYmFja2dyb3VuZC5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9zaGVsbC90ZXh0LXNoZWxsL21peGlucy9iYWNrZ3JvdW5kLWhlaWdodC5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9zaGVsbC90ZXh0LXNoZWxsL21peGlucy9ib3VuY2luZy1saW5lcy1iYWNrZ3JvdW5kLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDRSxvQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUVBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOENBQUE7RUFDQSw0QkFBQTtFQUdBLDRCQUFBO0FDUkY7O0FEWUE7RUVQSSw0SEFBQTtFQUNBLDBCQUFBO0VBQ0EseURBQUE7RUFDQSw0QkFBQTtFQ2ZGLDRHQUFBO0FGZUY7QURVSTtFRWJBLDRIQUFBO0VBQ0EsMEJBQUE7RUFDQSx5REFBQTtFQUNBLDRCQUFBO0VDZkYsNEdBQUE7QUZzQkY7QURHSTtFRWdCQSx1VkFBQTtFQUNBLGdQQUFBO0VBQ0EsOElBQUE7RUFDQSw0QkFBQTtFQzVDRiw0R0FBQTtBRjZCRjtBREpJO0VFZ0JBLGtqQkFBQTtFQUNBLHNjQUFBO0VBQ0EsbU9BQUE7RUFDQSw0QkFBQTtFQzVDRiw0R0FBQTtBRm9DRjtBRFhJO0VFZ0JBLDZ3QkFBQTtFQUNBLDRwQkFBQTtFQUNBLHdUQUFBO0VBQ0EsNEJBQUE7RUM1Q0YsNEdBQUE7QUYyQ0Y7QURsQkk7RUVnQkEsdytCQUFBO0VBQ0EsazNCQUFBO0VBQ0EsNllBQUE7RUFDQSw0QkFBQTtFQzVDRiw0R0FBQTtBRmtERjtBRHpCSTtFRWdCQSxtc0NBQUE7RUFDQSx3a0NBQUE7RUFDQSxrZUFBQTtFQUNBLDRCQUFBO0VDNUNGLDRHQUFBO0FGeURGO0FEM0JFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUM2Qko7O0FEeEJBO0VJekJJLDRIQUFBO0VBQ0EsMEJBQUE7RUFDQSx5REFBQTtFQUNBLDRCQUFBO0VBRUEsOEJBQUE7RUFDQSwyQkFBQTtFRG5CRiw0R0FBQTtFQ21GQSw2QkFBQTtFQUNBLG1DQUFBO0VBQ0Esc0NBQUE7RUFDQSxzQkFBQTtBSFZGO0FHdkRJO0VBQ0U7SUFDRSx3REFBQTtFSHlETjtFR3RESTtJQUNFLHlEQUFBO0VId0ROO0FBQ0Y7QUR4Q0k7RUkvQkEsNEhBQUE7RUFDQSwwQkFBQTtFQUNBLHlEQUFBO0VBQ0EsNEJBQUE7RUFFQSw4QkFBQTtFQUNBLDJCQUFBO0VEbkJGLDRHQUFBO0VDbUZBLDZCQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQ0FBQTtFQUNBLHNCQUFBO0FIV0Y7QUc1RUk7RUFDRTtJQUNFLHdEQUFBO0VIOEVOO0VHM0VJO0lBQ0UseURBQUE7RUg2RU47QUFDRjtBRDdESTtFSWtCQSx1VkFBQTtFQUNBLGdQQUFBO0VBQ0EsOElBQUE7RUFDQSw0QkFBQTtFQUVBLHNDQUFBO0VBQ0EsZ0NBQUE7RURwRUYsNEdBQUE7RUNtRkEsNkJBQUE7RUFDQSxtQ0FBQTtFQUNBLHNDQUFBO0VBQ0Esc0JBQUE7QUhnQ0Y7QUdoREk7RUFDRTtJQUNFLDRJQUFBO0VIa0ROO0VHL0NJO0lBQ0UsOElBQUE7RUhpRE47QUFDRjtBRGxGSTtFSWtCQSxrakJBQUE7RUFDQSxzY0FBQTtFQUNBLG1PQUFBO0VBQ0EsNEJBQUE7RUFFQSxzQ0FBQTtFQUNBLGdDQUFBO0VEcEVGLDRHQUFBO0VDbUZBLDZCQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQ0FBQTtFQUNBLHNCQUFBO0FIcURGO0FHckVJO0VBQ0U7SUFDRSxnT0FBQTtFSHVFTjtFR3BFSTtJQUNFLG1PQUFBO0VIc0VOO0FBQ0Y7QUR2R0k7RUlrQkEsNndCQUFBO0VBQ0EsNHBCQUFBO0VBQ0Esd1RBQUE7RUFDQSw0QkFBQTtFQUVBLHNDQUFBO0VBQ0EsZ0NBQUE7RURwRUYsNEdBQUE7RUNtRkEsNkJBQUE7RUFDQSxtQ0FBQTtFQUNBLHNDQUFBO0VBQ0Esc0JBQUE7QUgwRUY7QUcxRkk7RUFDRTtJQUNFLG9UQUFBO0VINEZOO0VHekZJO0lBQ0Usd1RBQUE7RUgyRk47QUFDRjtBRDVISTtFSWtCQSx3K0JBQUE7RUFDQSxrM0JBQUE7RUFDQSw2WUFBQTtFQUNBLDRCQUFBO0VBRUEsc0NBQUE7RUFDQSxnQ0FBQTtFRHBFRiw0R0FBQTtFQ21GQSw2QkFBQTtFQUNBLG1DQUFBO0VBQ0Esc0NBQUE7RUFDQSxzQkFBQTtBSCtGRjtBRy9HSTtFQUNFO0lBQ0Usd1lBQUE7RUhpSE47RUc5R0k7SUFDRSw2WUFBQTtFSGdITjtBQUNGO0FEakpJO0VJa0JBLG1zQ0FBQTtFQUNBLHdrQ0FBQTtFQUNBLGtlQUFBO0VBQ0EsNEJBQUE7RUFFQSxzQ0FBQTtFQUNBLGdDQUFBO0VEcEVGLDRHQUFBO0VDbUZBLDZCQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQ0FBQTtFQUNBLHNCQUFBO0FIb0hGO0FHcElJO0VBQ0U7SUFDRSw0ZEFBQTtFSHNJTjtFR25JSTtJQUNFLGtlQUFBO0VIcUlOO0FBQ0Y7QURqS0U7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUVBLFlBQUE7QUNrS0o7O0FEN0pBO0VBQ0UsNkJBQUE7RUFDQSwrQ0FBQTtFQUNBLHVDQUFBO0VBQ0Esa0NBQUE7RUcvREEsNEdBQUE7QUZnT0Y7QUQxSkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsbUtBQ0U7RUFDRiw0QkFBQTtFQUNBLG9EQUFBO0FDMkpKO0FEeEpFO0VBQ0U7SUFDRSw2QkFBQTtFQzBKSjtFRHZKRTtJQUNFLDRCQUFBO0VDeUpKO0FBQ0Y7QURySkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VFeEZBLDRIQUFBO0VBQ0EsMEJBQUE7RUFDQSx5REFBQTtFQUNBLDRCQUFBO0VDZkYsNEdBQUE7QUZnUUY7QURwSkk7RUc1R0YsNEdBQUE7QUZtUUY7QURuSk07RUVwR0YsNEhBQUE7RUFDQSwwQkFBQTtFQUNBLHlEQUFBO0VBQ0EsNEJBQUE7RUNmRiw0R0FBQTtBRjBRRjtBRDlKSTtFRzVHRiw0R0FBQTtBRjZRRjtBRDdKTTtFRXZFRix1VkFBQTtFQUNBLGdQQUFBO0VBQ0EsOElBQUE7RUFDQSw0QkFBQTtFQzVDRiw0R0FBQTtBRm9SRjtBRHhLSTtFRzVHRiw0R0FBQTtBRnVSRjtBRHZLTTtFRXZFRixrakJBQUE7RUFDQSxzY0FBQTtFQUNBLG1PQUFBO0VBQ0EsNEJBQUE7RUM1Q0YsNEdBQUE7QUY4UkY7QURsTEk7RUc1R0YsNEdBQUE7QUZpU0Y7QURqTE07RUV2RUYsNndCQUFBO0VBQ0EsNHBCQUFBO0VBQ0Esd1RBQUE7RUFDQSw0QkFBQTtFQzVDRiw0R0FBQTtBRndTRjtBRDVMSTtFRzVHRiw0R0FBQTtBRjJTRjtBRDNMTTtFRXZFRix3K0JBQUE7RUFDQSxrM0JBQUE7RUFDQSw2WUFBQTtFQUNBLDRCQUFBO0VDNUNGLDRHQUFBO0FGa1RGO0FEdE1JO0VHNUdGLDRHQUFBO0FGcVRGO0FEck1NO0VFdkVGLG1zQ0FBQTtFQUNBLHdrQ0FBQTtFQUNBLGtlQUFBO0VBQ0EsNEJBQUE7RUM1Q0YsNEdBQUE7QUY0VEY7QUR0TUU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ3dNSjtBRHRNSTtFQUVFLGdCQUFBO0VBQ0EsWUFBQTtBQ3VNTjtBRENBLG9xcUVBQW9xcUUiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi9taXhpbnMvYmFja2dyb3VuZC1oZWlnaHRcIjtcbkBpbXBvcnQgXCIuL21peGlucy9tYXNrZWQtbGluZXMtYmFja2dyb3VuZFwiO1xuQGltcG9ydCBcIi4vbWl4aW5zL2JvdW5jaW5nLWxpbmVzLWJhY2tncm91bmRcIjtcblxuJG1heC1saW5lcy1jb3VudDogNjtcblxuOmhvc3Qge1xuICAtLXRleHQtc2hlbGwtYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiAjRUVFO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE2cHg7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlcjogM3B4O1xuXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kKTtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgLy8gVG8gZml4IDFweCBsaW5lIG1pc2FsaWdubWVudCBpbiBjaHJvbWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9iYWNrZ3JvdW5kLWNsaXBcbiAgLy8gKEkgYWxzbyBub3RpY2VkIHRoYXQgaWYgSSBzZXQgdGhlIGNvbG9yIHRvIGEgc29saWQgY29sb3IgaW5zdGVhZCBvZiBoYXZpbmcgb3BhY2l0eSwgdGhlIGlzc3VlIGRvZXNuJ3QgaGFwcGVuKVxuICBiYWNrZ3JvdW5kLWNsaXA6IGNvbnRlbnQtYm94O1xufVxuXG4vLyBEZWZhdWx0IHN0eWxlcy4gV2hlbiBubyBhbmltYXRpb24gYXR0cmlidXRlIGlzIHByb3ZpZGVkXG46aG9zdCg6bm90KFthbmltYXRpb25dKSkge1xuICAvLyBEZWZhdWx0IG9uZSBsaW5lIHRleHQtc2hlbGxcbiAgQGluY2x1ZGUgbWFza2VkLWxpbmVzLWJhY2tncm91bmQoMSk7XG5cbiAgLy8gU3VwcG9ydCBmb3IgW2xpbmVzXSBhdHRyaWJ1dGVcbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkbWF4LWxpbmVzLWNvdW50IHtcbiAgICAmW2xpbmVzPVwiI3sgJGkgfVwiXSB7XG4gICAgICBAaW5jbHVkZSBtYXNrZWQtbGluZXMtYmFja2dyb3VuZCgkaSk7XG4gICAgfVxuICB9XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBtaW4taGVpZ2h0OiBpbmhlcml0O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICB9XG59XG5cbi8vIEJvdW5jaW5nIGxpbmUgbG9hZGluZyBhbmltYXRpb25cbjpob3N0KFthbmltYXRpb249XCJib3VuY2luZ1wiXSkge1xuICAvLyBEZWZhdWx0IG9uZSBsaW5lIHRleHQtc2hlbGxcbiAgQGluY2x1ZGUgYm91bmNpbmctbGluZXMtYmFja2dyb3VuZCgxKTtcblxuICAvLyBTdXBwb3J0IGZvciBbbGluZXNdIGF0dHJpYnV0ZVxuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoICRtYXgtbGluZXMtY291bnQge1xuICAgICZbbGluZXM9XCIjeyAkaSB9XCJdIHtcbiAgICAgIEBpbmNsdWRlIGJvdW5jaW5nLWxpbmVzLWJhY2tncm91bmQoJGkpO1xuICAgIH1cbiAgfVxuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgbWluLWhlaWdodDogaW5oZXJpdDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAvLyAwIGlzIHRoZSBkZWZhdWx0IHZhbHVlIChzZWU6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNTk2MzA0NC8xMTE2OTU5KVxuICAgIGFuaW1hdGlvbjogMDtcbiAgfVxufVxuXG4vLyBCYWNrZ3JvdW5kIGdyYWRpZW50IGJlbmVhdGggbWFza2VkIGxpbmVzXG46aG9zdChbYW5pbWF0aW9uPVwiZ3JhZGllbnRcIl0pIHtcbiAgLS10ZXh0LXNoZWxsLWJhY2tncm91bmQ6ICNGRkY7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWJhY2tncm91bmQ6ICNFRUU7XG4gIC0tdGV4dC1zaGVsbC1hbmltYXRpb24tY29sb3I6ICNEREQ7XG5cblxuICAvLyBDYWxjdWxhdGUgZGVmYXVsdCBoZWlnaHQgZm9yIDEgbGluZVxuICBAaW5jbHVkZSBiYWNrZ3JvdW5kLWhlaWdodChtaW4taGVpZ2h0LCAxKTtcblxuICAvLyBUaGUgYW5pbWF0aW9uIHRoYXQgZ29lcyBiZW5lYXRoIHRoZSBtYXNrc1xuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kOlxuICAgICAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1iYWNrZ3JvdW5kKSA4JSwgdmFyKC0tdGV4dC1zaGVsbC1hbmltYXRpb24tY29sb3IpIDE4JSwgdmFyKC0tdGV4dC1zaGVsbC1hbmltYXRpb24tYmFja2dyb3VuZCkgMzMlKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDgwMHB4IDEwNHB4O1xuICAgIGFuaW1hdGlvbjogYW5pbWF0ZUJhY2tncm91bmQgMnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gIH1cblxuICBAa2V5ZnJhbWVzIGFuaW1hdGVCYWNrZ3JvdW5kIHtcbiAgICAwJXtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00NjhweCAwXG4gICAgfVxuXG4gICAgMTAwJXtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDQ2OHB4IDBcbiAgICB9XG4gIH1cblxuICAvLyBUaGUgbWFza3NcbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcblxuICAgIC8vIERlZmF1bHQgb25lIGxpbmUgdGV4dC1zaGVsbFxuICAgIEBpbmNsdWRlIG1hc2tlZC1saW5lcy1iYWNrZ3JvdW5kKDEpO1xuICB9XG5cbiAgLy8gU3VwcG9ydCBmb3IgW2xpbmVzXSBhdHRyaWJ1dGVcbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkbWF4LWxpbmVzLWNvdW50IHtcbiAgICAmW2xpbmVzPVwiI3sgJGkgfVwiXSB7XG4gICAgICAvLyBDYWxjdWxhdGUgZGVmYXVsdCBoZWlnaHQgZm9yICRpIGxpbmVzXG4gICAgICBAaW5jbHVkZSBiYWNrZ3JvdW5kLWhlaWdodChtaW4taGVpZ2h0LCAkaSk7XG5cbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgQGluY2x1ZGUgbWFza2VkLWxpbmVzLWJhY2tncm91bmQoJGkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgbWluLWhlaWdodDogaW5oZXJpdDtcbiAgICBjb2xvcjogaW5oZXJpdDtcblxuICAgICY6OmJlZm9yZSxcbiAgICAmOjphZnRlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgYW5pbWF0aW9uOiAwO1xuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICAtLXRleHQtc2hlbGwtYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiAjRUVFO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE2cHg7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlcjogM3B4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCk7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIGJhY2tncm91bmQtY2xpcDogY29udGVudC1ib3g7XG59XG5cbjpob3N0KDpub3QoW2FuaW1hdGlvbl0pKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA5MSUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDkxJSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogMSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgxIC0gMSkpKTtcbn1cbjpob3N0KDpub3QoW2FuaW1hdGlvbl0pKVtsaW5lcz1cIjFcIl0ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgODglICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA4OCUpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDBweDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBtaW4taGVpZ2h0OiBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqIDEpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMSAtIDEpKSk7XG59XG46aG9zdCg6bm90KFthbmltYXRpb25dKSlbbGluZXM9XCIyXCJdIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDk0JSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgOTQlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDMyJSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMzIlKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwcHgsICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDIgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgyIC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMiAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDIgLSAxKSkpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBtaW4taGVpZ2h0OiBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqIDIpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMiAtIDEpKSk7XG59XG46aG9zdCg6bm90KFthbmltYXRpb25dKSlbbGluZXM9XCIzXCJdIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDg4JSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgODglKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDY4JSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgNjglKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDQxJSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgNDElKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwcHgsICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDIgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgyIC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMiAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDIgLSAxKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgzIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMyAtIDIpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDMgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgzIC0gMSkpKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogMykgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgzIC0gMSkpKTtcbn1cbjpob3N0KDpub3QoW2FuaW1hdGlvbl0pKVtsaW5lcz1cIjRcIl0ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgOTIlICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA5MiUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNjQlICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA2NCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNjAlICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA2MCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgMzMlICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAzMyUpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDBweCwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMiAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDIgLSAyKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgyIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMiAtIDEpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDMgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgzIC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMyAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDMgLSAxKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICg0IC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoNCAtIDIpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDQgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg0IC0gMSkpKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBtaW4taGVpZ2h0OiBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqIDQpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoNCAtIDEpKSk7XG59XG46aG9zdCg6bm90KFthbmltYXRpb25dKSlbbGluZXM9XCI1XCJdIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDkzJSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgOTMlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDczJSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgNzMlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDY0JSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgNjQlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDY1JSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgNjUlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDMyJSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMzIlKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwcHgsICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDIgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgyIC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMiAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDIgLSAxKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgzIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMyAtIDIpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDMgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgzIC0gMSkpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoNCAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDQgLSAyKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICg0IC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoNCAtIDEpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDUgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg1IC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoNSAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDUgLSAxKSkpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBtaW4taGVpZ2h0OiBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqIDUpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoNSAtIDEpKSk7XG59XG46aG9zdCg6bm90KFthbmltYXRpb25dKSlbbGluZXM9XCI2XCJdIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDg3JSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgODclKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDY2JSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgNjYlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDYzJSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgNjMlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDYzJSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgNjMlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDY5JSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgNjklKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDM5JSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMzklKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwcHgsICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDIgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgyIC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMiAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDIgLSAxKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgzIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMyAtIDIpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDMgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgzIC0gMSkpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoNCAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDQgLSAyKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICg0IC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoNCAtIDEpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDUgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg1IC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoNSAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDUgLSAxKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICg2IC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoNiAtIDIpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDYgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg2IC0gMSkpKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogNikgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg2IC0gMSkpKTtcbn1cbjpob3N0KDpub3QoW2FuaW1hdGlvbl0pKS50ZXh0LWxvYWRlZCB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIG1pbi1oZWlnaHQ6IGluaGVyaXQ7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG46aG9zdChbYW5pbWF0aW9uPWJvdW5jaW5nXSkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgODklICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA4OSUpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDBweDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XG4gIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRlTGluZTtcbiAgbWluLWhlaWdodDogY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAxKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDEgLSAxKSkpO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xufVxuQGtleWZyYW1lcyBhbmltYXRlTGluZSB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDg1JSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gIH1cbn1cbjpob3N0KFthbmltYXRpb249Ym91bmNpbmddKVtsaW5lcz1cIjFcIl0ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgOTElICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA5MSUpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDBweDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XG4gIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRlTGluZTtcbiAgbWluLWhlaWdodDogY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAxKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDEgLSAxKSkpO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xufVxuQGtleWZyYW1lcyBhbmltYXRlTGluZSB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDg1JSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gIH1cbn1cbjpob3N0KFthbmltYXRpb249Ym91bmNpbmddKVtsaW5lcz1cIjJcIl0ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgOTMlICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA5MyUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNDclICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA0NyUpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDBweCwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMiAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDIgLSAyKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgyIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMiAtIDEpKSk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZS1yZXZlcnNlO1xuICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZU11bHRpTGluZTtcbiAgbWluLWhlaWdodDogY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAyKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDIgLSAxKSkpO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xufVxuQGtleWZyYW1lcyBhbmltYXRlTXVsdGlMaW5lIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtc2l6ZTogODUlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgNTUlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpO1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gIH1cbn1cbjpob3N0KFthbmltYXRpb249Ym91bmNpbmddKVtsaW5lcz1cIjNcIl0ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgOTAlICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA5MCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNzklICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA3OSUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNDclICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA0NyUpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDBweCwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMiAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDIgLSAyKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgyIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMiAtIDEpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDMgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgzIC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMyAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDMgLSAxKSkpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlLXJldmVyc2U7XG4gIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRlTXVsdGlMaW5lO1xuICBtaW4taGVpZ2h0OiBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqIDMpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMyAtIDEpKSk7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG59XG5Aa2V5ZnJhbWVzIGFuaW1hdGVNdWx0aUxpbmUge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1zaXplOiA4NSUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICA3NSUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICA1NSUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gIH1cbn1cbjpob3N0KFthbmltYXRpb249Ym91bmNpbmddKVtsaW5lcz1cIjRcIl0ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgODYlICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA4NiUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNzAlICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA3MCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNzMlICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA3MyUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNDAlICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA0MCUpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDBweCwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMiAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDIgLSAyKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgyIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMiAtIDEpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDMgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgzIC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMyAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDMgLSAxKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICg0IC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoNCAtIDIpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDQgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg0IC0gMSkpKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGUtcmV2ZXJzZTtcbiAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGVNdWx0aUxpbmU7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogNCkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg0IC0gMSkpKTtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbn1cbkBrZXlmcmFtZXMgYW5pbWF0ZU11bHRpTGluZSB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDg1JSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDc1JSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDc1JSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDU1JSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gIH1cbn1cbjpob3N0KFthbmltYXRpb249Ym91bmNpbmddKVtsaW5lcz1cIjVcIl0ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgODglICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA4OCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNzclICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA3NyUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNjklICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA2OSUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNjYlICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA2NiUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgMzklICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAzOSUpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDBweCwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMiAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDIgLSAyKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgyIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMiAtIDEpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDMgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgzIC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMyAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDMgLSAxKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICg0IC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoNCAtIDIpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDQgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg0IC0gMSkpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoNSAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDUgLSAyKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICg1IC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoNSAtIDEpKSk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZS1yZXZlcnNlO1xuICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZU11bHRpTGluZTtcbiAgbWluLWhlaWdodDogY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiA1KSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDUgLSAxKSkpO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xufVxuQGtleWZyYW1lcyBhbmltYXRlTXVsdGlMaW5lIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtc2l6ZTogODUlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgNzUlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgNzUlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgNzUlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgNTUlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpO1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gIH1cbn1cbjpob3N0KFthbmltYXRpb249Ym91bmNpbmddKVtsaW5lcz1cIjZcIl0ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgOTUlICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA5NSUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNzMlICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA3MyUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNzUlICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA3NSUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNzklICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA3OSUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNjklICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA2OSUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgMzYlICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAzNiUpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDBweCwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMiAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDIgLSAyKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgyIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMiAtIDEpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDMgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgzIC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMyAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDMgLSAxKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICg0IC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoNCAtIDIpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDQgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg0IC0gMSkpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoNSAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDUgLSAyKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICg1IC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoNSAtIDEpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDYgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg2IC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoNiAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDYgLSAxKSkpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlLXJldmVyc2U7XG4gIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRlTXVsdGlMaW5lO1xuICBtaW4taGVpZ2h0OiBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqIDYpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoNiAtIDEpKSk7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG59XG5Aa2V5ZnJhbWVzIGFuaW1hdGVNdWx0aUxpbmUge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1zaXplOiA4NSUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICA3NSUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICA3NSUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICA3NSUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICA3NSUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICA1NSUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gIH1cbn1cbjpob3N0KFthbmltYXRpb249Ym91bmNpbmddKS50ZXh0LWxvYWRlZCB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIG1pbi1oZWlnaHQ6IGluaGVyaXQ7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBhbmltYXRpb246IDA7XG59XG5cbjpob3N0KFthbmltYXRpb249Z3JhZGllbnRdKSB7XG4gIC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kOiAjRkZGO1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1iYWNrZ3JvdW5kOiAjRUVFO1xuICAtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWNvbG9yOiAjREREO1xuICBtaW4taGVpZ2h0OiBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqIDEpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMSAtIDEpKSk7XG59XG46aG9zdChbYW5pbWF0aW9uPWdyYWRpZW50XSk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWJhY2tncm91bmQpIDglLCB2YXIoLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1jb2xvcikgMTglLCB2YXIoLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1iYWNrZ3JvdW5kKSAzMyUpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDgwMHB4IDEwNHB4O1xuICBhbmltYXRpb246IGFuaW1hdGVCYWNrZ3JvdW5kIDJzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuQGtleWZyYW1lcyBhbmltYXRlQmFja2dyb3VuZCB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDY4cHggMDtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0NjhweCAwO1xuICB9XG59XG46aG9zdChbYW5pbWF0aW9uPWdyYWRpZW50XSk6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA4NiUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDg2JSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogMSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgxIC0gMSkpKTtcbn1cbjpob3N0KFthbmltYXRpb249Z3JhZGllbnRdKVtsaW5lcz1cIjFcIl0ge1xuICBtaW4taGVpZ2h0OiBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqIDEpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMSAtIDEpKSk7XG59XG46aG9zdChbYW5pbWF0aW9uPWdyYWRpZW50XSlbbGluZXM9XCIxXCJdOjphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA4NyUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDg3JSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogMSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgxIC0gMSkpKTtcbn1cbjpob3N0KFthbmltYXRpb249Z3JhZGllbnRdKVtsaW5lcz1cIjJcIl0ge1xuICBtaW4taGVpZ2h0OiBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqIDIpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMiAtIDEpKSk7XG59XG46aG9zdChbYW5pbWF0aW9uPWdyYWRpZW50XSlbbGluZXM9XCIyXCJdOjphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA4NSUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDg1JSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSAzNSUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDM1JSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMHB4LCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgyIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMiAtIDIpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDIgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgyIC0gMSkpKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgbWluLWhlaWdodDogY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAyKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDIgLSAxKSkpO1xufVxuOmhvc3QoW2FuaW1hdGlvbj1ncmFkaWVudF0pW2xpbmVzPVwiM1wiXSB7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogMykgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgzIC0gMSkpKTtcbn1cbjpob3N0KFthbmltYXRpb249Z3JhZGllbnRdKVtsaW5lcz1cIjNcIl06OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDg3JSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgODclKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDY2JSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgNjYlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDQyJSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgNDIlKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwcHgsICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDIgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgyIC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMiAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDIgLSAxKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgzIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMyAtIDIpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDMgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgzIC0gMSkpKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogMykgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgzIC0gMSkpKTtcbn1cbjpob3N0KFthbmltYXRpb249Z3JhZGllbnRdKVtsaW5lcz1cIjRcIl0ge1xuICBtaW4taGVpZ2h0OiBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqIDQpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoNCAtIDEpKSk7XG59XG46aG9zdChbYW5pbWF0aW9uPWdyYWRpZW50XSlbbGluZXM9XCI0XCJdOjphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA5MCUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDkwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA3OSUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDc5JSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA2OSUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDY5JSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSAzMCUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDMwJSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMHB4LCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgyIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMiAtIDIpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDIgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgyIC0gMSkpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMyAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDMgLSAyKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgzIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMyAtIDEpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDQgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg0IC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoNCAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDQgLSAxKSkpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogNCkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg0IC0gMSkpKTtcbn1cbjpob3N0KFthbmltYXRpb249Z3JhZGllbnRdKVtsaW5lcz1cIjVcIl0ge1xuICBtaW4taGVpZ2h0OiBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqIDUpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoNSAtIDEpKSk7XG59XG46aG9zdChbYW5pbWF0aW9uPWdyYWRpZW50XSlbbGluZXM9XCI1XCJdOjphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA4NSUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDg1JSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA3NSUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDc1JSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA2MiUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDYyJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA2OSUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDY5JSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA0NSUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDQ1JSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMHB4LCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgyIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMiAtIDIpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDIgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgyIC0gMSkpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMyAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDMgLSAyKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgzIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMyAtIDEpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDQgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg0IC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoNCAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDQgLSAxKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICg1IC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoNSAtIDIpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDUgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg1IC0gMSkpKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgbWluLWhlaWdodDogY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiA1KSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDUgLSAxKSkpO1xufVxuOmhvc3QoW2FuaW1hdGlvbj1ncmFkaWVudF0pW2xpbmVzPVwiNlwiXSB7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogNikgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg2IC0gMSkpKTtcbn1cbjpob3N0KFthbmltYXRpb249Z3JhZGllbnRdKVtsaW5lcz1cIjZcIl06OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDkyJSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgOTIlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDcwJSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgNzAlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDcyJSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgNzIlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDY1JSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgNjUlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDc0JSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgNzQlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDQyJSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgNDIlKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwcHgsICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDIgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgyIC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMiAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDIgLSAxKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgzIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMyAtIDIpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDMgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgzIC0gMSkpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoNCAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDQgLSAyKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICg0IC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoNCAtIDEpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDUgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg1IC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoNSAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDUgLSAxKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICg2IC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoNiAtIDIpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDYgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg2IC0gMSkpKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogNikgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg2IC0gMSkpKTtcbn1cbjpob3N0KFthbmltYXRpb249Z3JhZGllbnRdKS50ZXh0LWxvYWRlZCB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIG1pbi1oZWlnaHQ6IGluaGVyaXQ7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuOmhvc3QoW2FuaW1hdGlvbj1ncmFkaWVudF0pLnRleHQtbG9hZGVkOjpiZWZvcmUsIDpob3N0KFthbmltYXRpb249Z3JhZGllbnRdKS50ZXh0LWxvYWRlZDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBhbmltYXRpb246IDA7XG59IiwiQGltcG9ydCBcIi4vdXRpbHNcIjtcbkBpbXBvcnQgXCIuL2JhY2tncm91bmQtaGVpZ2h0XCI7XG5cbkBtaXhpbiBtYXNrZWQtbGluZXMtYmFja2dyb3VuZCgkbGluZXM6IDEpIHtcbiAgJGxpbmUtaGVpZ2h0OiB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgJGxpbmUtc3BhY2luZzogdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KTtcbiAgJGJnLWNvbG9yOiB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpO1xuICAkbWFzay1jb2xvcjogdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKTtcbiAgJGxpbmUtYmctY29sb3I6IHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRik7XG4gICRiZy15LXBvczogMHB4O1xuICAkcmFuZC13aWR0aDogI3tyYW5kb21OdW0oODUsIDk1KX07XG4gICRiZy1pbWFnZTogJ2xpbmVhci1ncmFkaWVudCh0byByaWdodCwgJyArICRiZy1jb2xvciArICcgJyArICRyYW5kLXdpZHRoICsgJyUgLCAnICsgJG1hc2stY29sb3IgKyAnICcgKyAkcmFuZC13aWR0aCArICclKSc7XG4gICRiZy1wb3NpdGlvbjogJzAgJyArICRiZy15LXBvcztcbiAgJGJnLXNpemU6ICcxMDAlICcgKyAkbGluZS1oZWlnaHQ7XG5cbiAgQGlmICgkbGluZXMgPT0gMSkge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6ICN7JGJnLWltYWdlfTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAjeyRiZy1wb3NpdGlvbn07XG4gICAgYmFja2dyb3VuZC1zaXplOiAjeyRiZy1zaXplfTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB9IEBlbHNlIHtcbiAgICBAZm9yICRpIGZyb20gMiB0aHJvdWdoICRsaW5lcyB7XG4gICAgICAvLyBBZGQgc2VwYXJhdG9yIGJldHdlZW4gbGluZXNcbiAgICAgICRiZy1pbWFnZTogYXBwZW5kKCRiZy1pbWFnZSwgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjeyRsaW5lLWJnLWNvbG9yfSAxMDAlLCAjeyRsaW5lLWJnLWNvbG9yfSAxMDAlKSk7XG4gICAgICAvLyBUaGlzIGxpbmVhci1ncmFkaWVudCBhcyBzZXBhcmF0b3Igc3RhcnRzIGJlbG93IHRoZSBsYXN0IGxpbmUsXG4gICAgICAvLyBzbyB3ZSBoYXZlIHRvIGFkZCAkbGluZS1oZWlnaHQgdG8gb3VyIHktcG9zIHBvaW50ZXJcbiAgICAgICRiZy15LXBvczogY2FsYygoI3skbGluZS1oZWlnaHR9ICogKCN7JGl9IC0gMSkpICsgKCN7JGxpbmUtc3BhY2luZ30gKiAoI3skaX0gLSAyKSkpO1xuICAgICAgJGJnLXBvc2l0aW9uOiBhcHBlbmQoJGJnLXBvc2l0aW9uLCAnMCAnICsgJGJnLXktcG9zKTtcbiAgICAgICRiZy1zaXplOiBhcHBlbmQoJGJnLXNpemUsICcxMDAlICcgKyAkbGluZS1zcGFjaW5nKTtcblxuICAgICAgLy8gQWRkIG5ldyBsaW5lXG4gICAgICAvLyBUaGUgbGFzdCBsaW5lIHNob3VsZCBiZSBuYXJyb3cgdGhhbiB0aGUgb3RoZXJzXG4gICAgICBAaWYgKCRpID09ICRsaW5lcykge1xuICAgICAgICAkcmFuZC13aWR0aDogI3tyYW5kb21OdW0oMzAsIDUwKX07XG4gICAgICB9IEBlbHNlIHtcbiAgICAgICAgJHJhbmQtd2lkdGg6ICN7cmFuZG9tTnVtKDYwLCA4MCl9O1xuICAgICAgfVxuICAgICAgJGJnLWltYWdlOiBhcHBlbmQoJGJnLWltYWdlLCAnbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAnICsgJGJnLWNvbG9yICsgJyAnICsgJHJhbmQtd2lkdGggKyAnJSAsICcgKyAkbWFzay1jb2xvciArICcgJyArICRyYW5kLXdpZHRoICsgJyUpJyk7XG4gICAgICAvLyBUaGlzIG5ldyBsaW5lIHN0YXJ0cyBiZWxvdyB0aGUgcHJ2aW91c2x5IGFkZGVkIHNlcGFyYXRvcixcbiAgICAgIC8vIHNvIHdlIGhhdmUgdG8gYWRkICRsaW5lLXNwYWNpbmcgdG8gb3VyIHktcG9zIHBvaW50ZXJcbiAgICAgICRiZy15LXBvczogY2FsYygoI3skbGluZS1oZWlnaHR9ICogKCN7JGl9IC0gMSkpICsgKCN7JGxpbmUtc3BhY2luZ30gKiAoI3skaX0gLSAxKSkpO1xuICAgICAgJGJnLXBvc2l0aW9uOiBhcHBlbmQoJGJnLXBvc2l0aW9uLCAnMCAnICsgJGJnLXktcG9zKTtcbiAgICAgICRiZy1zaXplOiBhcHBlbmQoJGJnLXNpemUsICcxMDAlICcgKyAkbGluZS1oZWlnaHQpO1xuICAgIH1cblxuICAgIGJhY2tncm91bmQtaW1hZ2U6ICN7dG8tc3RyaW5nKCRiZy1pbWFnZSwgJywgJyl9O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246ICN7dG8tc3RyaW5nKCRiZy1wb3NpdGlvbiwgJywgJyl9O1xuICAgIGJhY2tncm91bmQtc2l6ZTogI3t0by1zdHJpbmcoJGJnLXNpemUsICcsICcpfTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB9XG5cbiAgQGluY2x1ZGUgYmFja2dyb3VuZC1oZWlnaHQobWluLWhlaWdodCwgJGxpbmVzKTtcbn1cbiIsIkBtaXhpbiBiYWNrZ3JvdW5kLWhlaWdodCgkcHJvcGVydHksICRsaW5lczogMSkge1xuICAkbGluZS1oZWlnaHQ6IHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpO1xuICAkbGluZS1zcGFjaW5nOiB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpO1xuXG4gICN7JHByb3BlcnR5fTogY2FsYygoI3skbGluZS1oZWlnaHR9ICogI3skbGluZXN9KSArICgjeyRsaW5lLXNwYWNpbmd9ICogKCN7JGxpbmVzfSAtIDEpKSk7XG59XG4iLCJAaW1wb3J0IFwiLi91dGlsc1wiO1xuXG5AbWl4aW4gYm91bmNpbmctbGluZXMtYmFja2dyb3VuZCgkbGluZXM6IDEpIHtcbiAgJGxpbmUtaGVpZ2h0OiB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgJGxpbmUtc3BhY2luZzogdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KTtcbiAgJGJnLWNvbG9yOiB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpO1xuICAkbWFzay1jb2xvcjogdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKTtcbiAgJGxpbmUtYmctY29sb3I6IHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRik7XG4gICRiZy15LXBvczogMHB4O1xuICAkcmFuZC13aWR0aDogI3tyYW5kb21OdW0oODUsIDk1KX07XG4gICRiZy1pbWFnZTogJ2xpbmVhci1ncmFkaWVudCh0byByaWdodCwgJyArICRiZy1jb2xvciArICcgJyArICRyYW5kLXdpZHRoICsgJyUgLCAnICsgJG1hc2stY29sb3IgKyAnICcgKyAkcmFuZC13aWR0aCArICclKSc7XG4gICRiZy1wb3NpdGlvbjogJzAgJyArICRiZy15LXBvcztcbiAgJGJnLXNpemU6ICcxMDAlICcgKyAkbGluZS1oZWlnaHQ7XG4gICRiZy1zaXplLWFuaW1hdGlvbi1mcm9tOiAnODUlICcgKyAkbGluZS1oZWlnaHQ7XG4gICRiZy1zaXplLWFuaW1hdGlvbi10bzogJzEwMCUgJyArICRsaW5lLWhlaWdodDtcblxuICBAaWYgKCRsaW5lcyA9PSAxKSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogI3skYmctaW1hZ2V9O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246ICN7JGJnLXBvc2l0aW9ufTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6ICN7JGJnLXNpemV9O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cbiAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGVMaW5lO1xuXG4gICAgQGtleWZyYW1lcyBhbmltYXRlTGluZSB7XG4gICAgICAwJXtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAjeyRiZy1zaXplLWFuaW1hdGlvbi1mcm9tfTtcbiAgICAgIH1cblxuICAgICAgMTAwJXtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAjeyRiZy1zaXplLWFuaW1hdGlvbi10b307XG4gICAgICB9XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAZm9yICRpIGZyb20gMiB0aHJvdWdoICRsaW5lcyB7XG4gICAgICAvLyBBZGQgc2VwYXJhdG9yIGJldHdlZW4gbGluZXNcbiAgICAgICRiZy1pbWFnZTogYXBwZW5kKCRiZy1pbWFnZSwgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjeyRsaW5lLWJnLWNvbG9yfSAxMDAlLCAjeyRsaW5lLWJnLWNvbG9yfSAxMDAlKSk7XG4gICAgICAvLyBUaGlzIGxpbmVhci1ncmFkaWVudCBhcyBzZXBhcmF0b3Igc3RhcnRzIGJlbG93IHRoZSBsYXN0IGxpbmUsXG4gICAgICAvLyBzbyB3ZSBoYXZlIHRvIGFkZCAkbGluZS1oZWlnaHQgdG8gb3VyIHktcG9zIHBvaW50ZXJcbiAgICAgICRiZy15LXBvczogY2FsYygoI3skbGluZS1oZWlnaHR9ICogKCN7JGl9IC0gMSkpICsgKCN7JGxpbmUtc3BhY2luZ30gKiAoI3skaX0gLSAyKSkpO1xuICAgICAgJGJnLXBvc2l0aW9uOiBhcHBlbmQoJGJnLXBvc2l0aW9uLCAnMCAnICsgJGJnLXktcG9zKTtcbiAgICAgICRiZy1zaXplOiBhcHBlbmQoJGJnLXNpemUsICcxMDAlICcgKyAkbGluZS1zcGFjaW5nKTtcbiAgICAgIC8vIHNlcGFyYXRvciBsaW5lcyBoYXZlIHRoZSBzYW1lIGluaXRpYWwgYW5kIGVuZCBzdGF0ZSwgdGh1cyBubyBhbmltYXRpb24gb2NjdXJzXG4gICAgICAkYmctc2l6ZS1hbmltYXRpb24tZnJvbTogYXBwZW5kKCRiZy1zaXplLWFuaW1hdGlvbi1mcm9tLCAnMTAwJSAnICsgJGxpbmUtc3BhY2luZyk7XG4gICAgICAkYmctc2l6ZS1hbmltYXRpb24tdG86IGFwcGVuZCgkYmctc2l6ZS1hbmltYXRpb24tdG8sICcxMDAlICcgKyAkbGluZS1zcGFjaW5nKTtcblxuICAgICAgLy8gQWRkIG5ldyBsaW5lXG4gICAgICAvLyBUaGUgbGFzdCBsaW5lIHNob3VsZCBiZSBuYXJyb3cgdGhhbiB0aGUgb3RoZXJzXG4gICAgICBAaWYgKCRpID09ICRsaW5lcykge1xuICAgICAgICAkcmFuZC13aWR0aDogI3tyYW5kb21OdW0oMzAsIDUwKX07XG4gICAgICAgICRiZy1zaXplLWFuaW1hdGlvbi1mcm9tOiBhcHBlbmQoJGJnLXNpemUtYW5pbWF0aW9uLWZyb20sICc1NSUgJyArICRsaW5lLWhlaWdodCk7XG4gICAgICB9IEBlbHNlIHtcbiAgICAgICAgJHJhbmQtd2lkdGg6ICN7cmFuZG9tTnVtKDYwLCA4MCl9O1xuICAgICAgICAkYmctc2l6ZS1hbmltYXRpb24tZnJvbTogYXBwZW5kKCRiZy1zaXplLWFuaW1hdGlvbi1mcm9tLCAnNzUlICcgKyAkbGluZS1oZWlnaHQpO1xuICAgICAgfVxuXG4gICAgICAkYmctaW1hZ2U6IGFwcGVuZCgkYmctaW1hZ2UsICdsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICcgKyAkYmctY29sb3IgKyAnICcgKyAkcmFuZC13aWR0aCArICclICwgJyArICRtYXNrLWNvbG9yICsgJyAnICsgJHJhbmQtd2lkdGggKyAnJSknKTtcbiAgICAgIC8vIFRoaXMgbmV3IGxpbmUgc3RhcnRzIGJlbG93IHRoZSBwcnZpb3VzbHkgYWRkZWQgc2VwYXJhdG9yLFxuICAgICAgLy8gc28gd2UgaGF2ZSB0byBhZGQgJGxpbmUtc3BhY2luZyB0byBvdXIgeS1wb3MgcG9pbnRlclxuICAgICAgJGJnLXktcG9zOiBjYWxjKCgjeyRsaW5lLWhlaWdodH0gKiAoI3skaX0gLSAxKSkgKyAoI3skbGluZS1zcGFjaW5nfSAqICgjeyRpfSAtIDEpKSk7XG4gICAgICAkYmctcG9zaXRpb246IGFwcGVuZCgkYmctcG9zaXRpb24sICcwICcgKyAkYmcteS1wb3MpO1xuICAgICAgJGJnLXNpemU6IGFwcGVuZCgkYmctc2l6ZSwgJzEwMCUgJyArICRsaW5lLWhlaWdodCk7XG4gICAgICAkYmctc2l6ZS1hbmltYXRpb24tdG86IGFwcGVuZCgkYmctc2l6ZS1hbmltYXRpb24tdG8sICcxMDAlICcgKyAkbGluZS1oZWlnaHQpO1xuICAgIH1cblxuICAgIGJhY2tncm91bmQtaW1hZ2U6ICN7dG8tc3RyaW5nKCRiZy1pbWFnZSwgJywgJyl9O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246ICN7dG8tc3RyaW5nKCRiZy1wb3NpdGlvbiwgJywgJyl9O1xuICAgIGJhY2tncm91bmQtc2l6ZTogI3t0by1zdHJpbmcoJGJnLXNpemUsICcsICcpfTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXG4gICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlLXJldmVyc2U7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGVNdWx0aUxpbmU7XG5cbiAgICBAa2V5ZnJhbWVzIGFuaW1hdGVNdWx0aUxpbmUge1xuICAgICAgMCV7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogI3t0by1zdHJpbmcoJGJnLXNpemUtYW5pbWF0aW9uLWZyb20sICcsICcpfTtcbiAgICAgIH1cblxuICAgICAgMTAwJXtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAje3RvLXN0cmluZygkYmctc2l6ZS1hbmltYXRpb24tdG8sICcsICcpfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBAaW5jbHVkZSBiYWNrZ3JvdW5kLWhlaWdodChtaW4taGVpZ2h0LCAkbGluZXMpO1xuXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 8505:
/*!*************************************************!*\
  !*** ./src/app/utils/history-helper.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoryHelperService": () => (/* binding */ HistoryHelperService)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




class HistoryHelperService {
  constructor(router) {
    this.router = router;
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd)).subscribe(({
      urlAfterRedirects
    }) => {
      // console.log('previous URL', this.previousUrl);
      this.previousUrl = urlAfterRedirects;
      // console.log('NEW previous URL', this.previousUrl);
    });
  }
  static #_ = this.ɵfac = function HistoryHelperService_Factory(t) {
    return new (t || HistoryHelperService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: HistoryHelperService,
    factory: HistoryHelperService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 15009:
/*!************************************************!*\
  !*** ./src/app/utils/transfer-state-helper.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageShellState": () => (/* binding */ ImageShellState),
/* harmony export */   "TransferStateHelper": () => (/* binding */ TransferStateHelper)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 19337);







var ImageShellState;
(function (ImageShellState) {
  ImageShellState["SSR"] = "ssr-loaded";
  ImageShellState["BROWSER_FROM_SSR"] = "browser-loaded-from-ssr";
  ImageShellState["NOT_FOUND"] = "not-found";
})(ImageShellState || (ImageShellState = {}));
class TransferStateHelper {
  constructor(platformId, state) {
    this.platformId = platformId;
    this.state = state;
  }
  // Method with generic param
  checkDataSourceState(stateKey, dataSource) {
    const dataKey = (0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.makeStateKey)(stateKey);
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformServer)(this.platformId)) {
      // When loading resource in the server, store the result in the TransferState
      // to use when transitioning to the browser from the SSR rendered app
      return dataSource.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(data => {
        this.state.set(dataKey, data);
      }));
    } else {
      // Check if we have data in the TransferState
      if (this.state.hasKey(dataKey)) {
        const stateData = this.state.get(dataKey, null);
        if (stateData && stateData !== null) {
          const cachedDataSource = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(stateData);
          // After using it, remove data from state
          // this.state.remove(dataKey);
          // Set a flag to track if the dataSource is being cached in the server state or not
          Object.assign(cachedDataSource, {
            ssr_state: true
          });
          return cachedDataSource;
        } else {
          return dataSource;
        }
      } else {
        return dataSource;
      }
    }
  }
  // This method checks if a specific image was previously handled in the server
  checkImageShellState(stateKey, imageSource) {
    let imageState = ImageShellState.NOT_FOUND;
    // Make sure we are not dealing with empty image sources
    if (imageSource !== '') {
      // We will store a collection of image sources in the state
      const dataKey = (0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.makeStateKey)(stateKey);
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformServer)(this.platformId)) {
        // When loading resource in the server, store the result in the TransferState
        // to use when transitioning to the browser from the SSR rendered app
        const stateImages = this.state.get(dataKey, []);
        stateImages.push(imageSource);
        this.state.set(dataKey, stateImages);
        // Running in the server, in this execution the image is set in the transfer state for the first time
        imageState = ImageShellState.SSR;
      } else {
        // Check if we have data in the TransferState
        if (this.state.hasKey(dataKey)) {
          const stateData = this.state.get(dataKey, []);
          // Check if the image was previously loaded in the server
          if (stateData.includes(imageSource)) {
            imageState = ImageShellState.BROWSER_FROM_SSR;
          }
        }
      }
    }
    return imageState;
  }
  static #_ = this.ɵfac = function TransferStateHelper_Factory(t) {
    return new (t || TransferStateHelper)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.TransferState));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: TransferStateHelper,
    factory: TransferStateHelper.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyC5QK355uuknu0_ldVxFqqNqgp9oJi_eLc',
    authDomain: 'ion4fullpwa.firebaseapp.com',
    databaseURL: 'https://ion4fullpwa.firebaseio.com',
    projectId: 'ion4fullpwa',
    storageBucket: 'ion4fullpwa.appspot.com'
  },
  appShellConfig: {
    debug: false,
    networkDelay: 500
  }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
document.addEventListener('DOMContentLoaded', () => {
  _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.log(err));
});

/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		70079,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		25593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		13225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		86655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		44856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		13059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		58648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		98308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		44690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		64090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		36214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		69447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		17950,
		"default-node_modules_ionic_core_dist_esm_data-caf38df0_js-node_modules_ionic_core_dist_esm_th-d3ab8e",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		79689,
		"default-node_modules_ionic_core_dist_esm_data-caf38df0_js-node_modules_ionic_core_dist_esm_th-d3ab8e",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		18840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		40749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		69667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		83288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		35473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		53634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		22855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		58737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		99632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		54446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		32275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		48050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		18994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		23592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		35454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		92666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		64816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		94902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		91938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		78179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		90668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		61624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		19989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		28902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		70199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		48395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		96357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		38268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		15269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		32875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map