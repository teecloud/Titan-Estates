"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_shell_data-store_ts-src_app_showcase_custom-components_custom-components_module_ts"],{

/***/ 29760:
/*!*************************************!*\
  !*** ./src/app/shell/data-store.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataStore": () => (/* binding */ DataStore),
/* harmony export */   "ShellModel": () => (/* binding */ ShellModel)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 26067);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 26562);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 21339);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 44874);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);



class ShellModel {
  constructor() {
    this.isShell = false;
  }
}
class DataStore {
  constructor(shellModel) {
    this.shellModel = shellModel;
    // We wait on purpose 2 secs on local environment when fetching from json to simulate the backend roundtrip.
    // However, in production you should set this delay to 0 in the environment.prod file.
    // eslint-disable-next-line max-len
    this.networkDelay = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.appShellConfig && _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.appShellConfig.networkDelay ? _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.appShellConfig.networkDelay : 0;
    this.timeline = new rxjs__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(1);
  }
  // Static function with generics
  // (ref: https://stackoverflow.com/a/24293088/1116959)
  // Append a shell (T & ShellModel) to every value (T) emmited to the timeline
  static AppendShell(dataObservable, shellModel, networkDelay = 400) {
    const delayObservable = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(true).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.delay)(networkDelay));
    // Assign shell flag accordingly
    // (ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.combineLatest)([delayObservable, dataObservable]).pipe(
    // Dismiss unnecessary delayValue
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(([delayValue, dataValue]) => Object.assign(dataValue, {
      isShell: false
    })),
    // Set the shell model as the initial value
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.startWith)(Object.assign(shellModel, {
      isShell: true
    })));
  }
  load(dataSourceObservable, networkDelay) {
    // eslint-disable-next-line no-shadow, @typescript-eslint/no-shadow
    const delay = typeof networkDelay === 'number' ? networkDelay : this.networkDelay;
    let processedDataSource;
    // If no network delay, then don't show shell
    if (delay === 0) {
      processedDataSource = dataSourceObservable;
    } else {
      processedDataSource = DataStore.AppendShell(dataSourceObservable, this.shellModel, delay);
    }
    processedDataSource.subscribe(dataValue => {
      this.timeline.next(dataValue);
    });
  }
  get state() {
    return this.timeline.asObservable();
  }
}

/***/ }),

/***/ 75983:
/*!************************************************************************!*\
  !*** ./src/app/showcase/custom-components/custom-components.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomComponentsModule": () => (/* binding */ CustomComponentsModule)
/* harmony export */ });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/components.module */ 45642);
/* harmony import */ var _custom_components_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-components.page */ 32253);
/* harmony import */ var _showcase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../showcase.service */ 82909);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);








class CustomComponentsModule {
  static #_ = this.ɵfac = function CustomComponentsModule_Factory(t) {
    return new (t || CustomComponentsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: CustomComponentsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    providers: [_showcase_service__WEBPACK_IMPORTED_MODULE_2__.ShowcaseService],
    imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild([{
      path: '',
      component: _custom_components_page__WEBPACK_IMPORTED_MODULE_1__.CustomComponentsPage
    }])]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CustomComponentsModule, {
    declarations: [_custom_components_page__WEBPACK_IMPORTED_MODULE_1__.CustomComponentsPage],
    imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 32253:
/*!**********************************************************************!*\
  !*** ./src/app/showcase/custom-components/custom-components.page.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomComponentsPage": () => (/* binding */ CustomComponentsPage)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ 16901);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _components_checkbox_wrapper_checkbox_wrapper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/checkbox-wrapper/checkbox-wrapper.component */ 36516);
/* harmony import */ var _components_show_hide_password_show_hide_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/show-hide-password/show-hide-password.component */ 6089);
/* harmony import */ var _components_countdown_timer_countdown_timer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/countdown-timer/countdown-timer.component */ 39521);






const _c0 = function () {
  return {
    from: "day",
    to: "second"
  };
};
const _c1 = function () {
  return {
    from: "day",
    to: "minute"
  };
};
const _c2 = function () {
  return {
    from: "hour",
    to: "second"
  };
};
const _c3 = function () {
  return {
    from: "hour",
    to: "minute"
  };
};
const _c4 = function () {
  return {
    from: "minute",
    to: "second"
  };
};
const _c5 = function () {
  return {
    from: "day",
    to: "day"
  };
};
const _c6 = function () {
  return {
    from: "hour",
    to: "hour"
  };
};
const _c7 = function () {
  return {
    from: "minute",
    to: "minute"
  };
};
const _c8 = function () {
  return {
    from: "second",
    to: "second"
  };
};
class CustomComponentsPage {
  // Instead of hardcoded one
  // countdownDate = '12/01/2018';
  constructor() {
    // Relative date (better to showcase UI micro-interactions)
    this.countdownDate = dayjs__WEBPACK_IMPORTED_MODULE_0__().add(1, 'day').add(8, 'hour').add(10, 'second').format('MM/DD/YYYY HH:mm:ss');
  }
  static #_ = this.ɵfac = function CustomComponentsPage_Factory(t) {
    return new (t || CustomComponentsPage)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: CustomComponentsPage,
    selectors: [["app-showcase-custom-components"]],
    decls: 184,
    vars: 54,
    consts: [["color", "primary"], ["slot", "start"], [1, "showcase-content"], ["sticky", "true"], [1, "showcase-section"], [1, "custom-checkbox"], ["checked", "true"], ["type", "password", "placeholder", "Try setting a password", "value", "It's a secret!"], [3, "end", "units"], ["fill", "countdown", 2, "background-color", "transparent", "--countdown-padding", "10px", "--countdown-fill-border", "none", "--countdown-fill-border-radius", "10px", "--countdown-fill-background", "#FFFFFF", "--countdown-fill-shadow", "0px 0px 5px 0px rgba(0,0,0, 0.2)", 3, "end", "units"], ["fill", "countdown", 2, "--countdown-fill-background", "#000000", "--countdown-padding", "10px", "--countdown-value-color", "#FFFFFF", "--countdown-unit-color", "#F2F2F2", 3, "end", "units"], [2, "--countdown-time-flex-direction", "row-reverse", 3, "end", "units"], [2, "--countdown-time-flex-direction", "row", 3, "end", "units"], [2, "--countdown-time-flex-direction", "column", 3, "end", "units"], [2, "--countdown-time-flex-direction", "column-reverse", 3, "end", "units"], ["fill", "time", 2, "background-color", "transparent", "--countdown-padding", "10px", "--countdown-time-margin", "0px 10px", "--countdown-time-padding", "10px 0px", "--countdown-fill-border", "none", "--countdown-fill-border-radius", "10px", "--countdown-fill-background", "#FFFFFF", "--countdown-fill-shadow", "0px 0px 5px 0px rgba(0,0,0, 0.2)", 3, "end", "units"], ["fill", "inner-time", 2, "background-color", "transparent", "--countdown-padding", "10px", "--countdown-inner-time-margin", "5px", "--countdown-inner-time-padding", "10px", "--countdown-fill-border", "none", "--countdown-fill-border-radius", "10px", "--countdown-fill-background", "#FFFFFF", "--countdown-fill-shadow", "0px 0px 5px 0px rgba(0,0,0, 0.2)", 3, "end", "units"]],
    template: function CustomComponentsPage_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "ion-menu-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Custom Components ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ion-content", 2)(7, "ion-item-divider", 3)(8, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Checkbox Wrapper");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "section", 4)(11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " This is a super straightforward component whose purpose is to wrap an ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "<ion-checkbox>");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " element to enable accessing the checkbox state from its parents. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "<app-checkbox-wrapper class=\"custom-checkbox\">\n  <ion-checkbox checked=true></ion-checkbox>\n  <ion-label>Sample Checkbox</ion-label>\n</app-checkbox-wrapper>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "app-checkbox-wrapper.custom-checkbox {\n  background: #CCC;\n  color: #000;\n\n  &.checkbox-checked {\n    background: #00AFFF;\n    color: #FFF;\n  }\n}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "app-checkbox-wrapper", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "ion-checkbox", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Sample Checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "ion-item-divider", 3)(25, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Show/Hide Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "section", 4)(28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, " By wrapping an ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "<ion-input>");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, " element with this component, you can enhance the UX and add a show/hide password functionality. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "<app-show-hide-password>\n  <ion-input type=\"password\" placeholder=\"Try setting a password\" value=\"It's a secret!\"></ion-input>\n</app-show-hide-password>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "app-show-hide-password");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](36, "ion-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "ion-item-divider", 3)(38, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Countdown Timer");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "section", 4)(41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, " This components shows the remaining time (in days, hours, minutes or seconds) to a given date. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, " A few examples on how to use this component: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "From days to seconds");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "<app-countdown-timer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "[units]=\"{from: 'day', to: 'second'}\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, " [end]=\"countdownDate\"></app-countdown-timer>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](52, "app-countdown-timer", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "From days to minutes");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "<app-countdown-timer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "[units]=\"{from: 'day', to: 'minute'}\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, " [end]=\"countdownDate\"></app-countdown-timer>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](60, "app-countdown-timer", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, "From hours to seconds");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, "<app-countdown-timer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, "[units]=\"{from: 'hour', to: 'second'}\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67, " [end]=\"countdownDate\"></app-countdown-timer>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](68, "app-countdown-timer", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70, "From hours to minutes");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72, "<app-countdown-timer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74, "[units]=\"{from: 'hour', to: 'minute'}\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75, " [end]=\"countdownDate\"></app-countdown-timer>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](76, "app-countdown-timer", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78, "From minutes to seconds");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](80, "<app-countdown-timer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](82, "[units]=\"{from: 'minute', to: 'second'}\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](83, " [end]=\"countdownDate\"></app-countdown-timer>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](84, "app-countdown-timer", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](86, "Just days");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](88, "<app-countdown-timer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](90, "[units]=\"{from: 'day', to: 'day'}\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](91, " [end]=\"countdownDate\"></app-countdown-timer>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](92, "app-countdown-timer", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](94, "Just hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](96, "<app-countdown-timer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](97, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](98, "[units]=\"{from: 'hour', to: 'hour'}\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](99, " [end]=\"countdownDate\"></app-countdown-timer>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](100, "app-countdown-timer", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](101, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](102, "Just minutes");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](103, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](104, "<app-countdown-timer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](105, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](106, "[units]=\"{from: 'minute', to: 'minute'}\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](107, " [end]=\"countdownDate\"></app-countdown-timer>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](108, "app-countdown-timer", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](109, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](110, "Just seconds");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](111, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](112, "<app-countdown-timer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](113, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](114, "[units]=\"{from: 'second', to: 'second'}\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](115, " [end]=\"countdownDate\"></app-countdown-timer>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](116, "app-countdown-timer", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](117, "section", 4)(118, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](119, "Styling");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](120, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](121, " You can change different properties to adjust the look and feel of the component. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](122, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](123, "Fill");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](124, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](125, "app-countdown-timer {\n  --countdown-fill-border: none;\n  --countdown-fill-border-radius: 10px;\n  --countdown-fill-background: #FFFFFF;\n  --countdown-fill-shadow: 0px 0px 5px 0px rgba(0,0,0, 0.2);\n}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](126, "app-countdown-timer", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](127, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](128, "Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](129, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](130, "app-countdown-timer {\n  --countdown-fill-background: #000000;\n  --countdown-value-color: #FFFFFF;\n  --countdown-unit-color: #F2F2F2;\n}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](131, "app-countdown-timer", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](132, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](133, "Margins & Paddings");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](134, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](135, "app-countdown-timer {\n  --countdown-margin: 0px;\n  --countdown-padding: 0px;\n  --countdown-time-margin: 0px;\n  --countdown-time-padding: 0px;\n  --countdown-inner-time-margin: 2px;\n  --countdown-inner-time-padding: 0px;\n}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](136, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](137, "Time unit positioning");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](138, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](139, " Time units to the right (default) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](140, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](141, "app-countdown-timer {\n  --countdown-time-flex-direction: row-reverse;\n}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](142, "app-countdown-timer", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](143, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](144, " Time units to the left ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](145, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](146, "app-countdown-timer {\n  --countdown-time-flex-direction: row;\n}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](147, "app-countdown-timer", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](148, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](149, " Time units above ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](150, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](151, "app-countdown-timer {\n  --countdown-time-flex-direction: column;\n}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](152, "app-countdown-timer", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](153, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](154, " Time units below ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](155, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](156, "app-countdown-timer {\n  --countdown-time-flex-direction: column-reverse;\n}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](157, "app-countdown-timer", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](158, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](159, " This component can be configured with different fill modes (by default, no fill will be applied). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](160, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](161, "Fill: Entire Countdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](162, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](163, "<app-countdown-timer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](164, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](165, "fill=\"countdown\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](166, " [end]=\"countdownDate\" [units]=\"{from: 'hour', to: 'second'}\"></app-countdown-timer>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](167, "app-countdown-timer", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](168, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](169, "Fill: Time wrapper");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](170, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](171, "<app-countdown-timer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](172, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](173, "fill=\"time\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](174, " [end]=\"countdownDate\" [units]=\"{from: 'hour', to: 'second'}\"></app-countdown-timer>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](175, "app-countdown-timer", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](176, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](177, "Fill: Inner Time Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](178, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](179, "<app-countdown-timer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](180, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](181, "fill=\"inner-time\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](182, " [end]=\"countdownDate\" [units]=\"{from: 'hour', to: 'second'}\"></app-countdown-timer>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](183, "app-countdown-timer", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("end", ctx.countdownDate)("units", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](36, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("end", ctx.countdownDate)("units", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](37, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("end", ctx.countdownDate)("units", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](38, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("end", ctx.countdownDate)("units", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](39, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("end", ctx.countdownDate)("units", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](40, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("end", ctx.countdownDate)("units", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](41, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("end", ctx.countdownDate)("units", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](42, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("end", ctx.countdownDate)("units", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](43, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("end", ctx.countdownDate)("units", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](44, _c8));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("end", ctx.countdownDate)("units", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](45, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("end", ctx.countdownDate)("units", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](46, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("end", ctx.countdownDate)("units", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](47, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("end", ctx.countdownDate)("units", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](48, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("end", ctx.countdownDate)("units", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](49, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("end", ctx.countdownDate)("units", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](50, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("end", ctx.countdownDate)("units", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](51, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("end", ctx.countdownDate)("units", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](52, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("end", ctx.countdownDate)("units", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](53, _c2));
      }
    },
    dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCheckbox, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItemDivider, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.TextValueAccessor, _components_checkbox_wrapper_checkbox_wrapper_component__WEBPACK_IMPORTED_MODULE_1__.CheckboxWrapperComponent, _components_show_hide_password_show_hide_password_component__WEBPACK_IMPORTED_MODULE_2__.ShowHidePasswordComponent, _components_countdown_timer_countdown_timer_component__WEBPACK_IMPORTED_MODULE_3__.CountdownTimerComponent],
    styles: [".showcase-content[_ngcontent-%COMP%] {\n  --background: var(--app-background-shade);\n}\n.showcase-content[_ngcontent-%COMP%]   ion-item-divider[_ngcontent-%COMP%] {\n  --background: var(--ion-color-secondary);\n  --color: var(--ion-color-lightest);\n  text-transform: uppercase;\n  font-weight: 500;\n  letter-spacing: 1px;\n}\n.showcase-content[_ngcontent-%COMP%]   .showcase-section[_ngcontent-%COMP%] {\n  margin: 20px 20px 100px;\n}\n.showcase-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  font-size: 14px;\n  background: #CCC;\n  padding: 10px;\n}\n.showcase-content[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: #F92672;\n  font-weight: 500;\n}\n.showcase-content[_ngcontent-%COMP%]   .custom-checkbox[_ngcontent-%COMP%] {\n  background: #CCC;\n  color: #000;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n}\n.showcase-content[_ngcontent-%COMP%]   .custom-checkbox[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  margin-inline-start: 10px;\n}\n.showcase-content[_ngcontent-%COMP%]   .custom-checkbox.checkbox-checked[_ngcontent-%COMP%] {\n  background: #00AFFF;\n  color: #FFF;\n}\n.showcase-content[_ngcontent-%COMP%]   app-countdown-timer[_ngcontent-%COMP%] {\n  --countdown-value-color: var(--ion-color-darkest);\n  --countdown-unit-color: var(--ion-color-darkest);\n  padding: 20px;\n  margin-bottom: 40px;\n  background-color: #FFF;\n}\n.showcase-content[_ngcontent-%COMP%]   app-show-hide-password[_ngcontent-%COMP%] {\n  background-color: #FFF;\n  padding: 0px 15px;\n}\n.showcase-content[_ngcontent-%COMP%]   app-show-hide-password[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  --padding-start: 0px;\n  --padding-end: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1jb21wb25lbnRzLnBhZ2Uuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL1RpdGFuJTIwRXN0YXRlcy9zcmMvYXBwL3Nob3djYXNlL2N1c3RvbS1jb21wb25lbnRzL2N1c3RvbS1jb21wb25lbnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUFBO0FDQ0Y7QURDRTtFQUNFLHdDQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBREVFO0VBQ0UsdUJBQUE7QUNBSjtBREdFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0RKO0FESUU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNGSjtBREtFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0hKO0FES0k7RUFDRSx5QkFBQTtBQ0hOO0FETUk7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUNKTjtBRFFFO0VBQ0UsaURBQUE7RUFDQSxnREFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FDTko7QURTRTtFQUNFLHNCQUFBO0VBQ0EsaUJBQUE7QUNQSjtBRFNJO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtBQ1BOIiwiZmlsZSI6ImN1c3RvbS1jb21wb25lbnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG93Y2FzZS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG5cbiAgaW9uLWl0ZW0tZGl2aWRlciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB9XG5cbiAgLnNob3djYXNlLXNlY3Rpb24ge1xuICAgIG1hcmdpbjogMjBweCAyMHB4IDEwMHB4O1xuICB9XG5cbiAgcHJlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgYmFja2dyb3VuZDogI0NDQztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG5cbiAgY29kZSB7XG4gICAgY29sb3I6ICNGOTI2NzI7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuXG4gIC5jdXN0b20tY2hlY2tib3gge1xuICAgIGJhY2tncm91bmQ6ICNDQ0M7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBpb24tbGFiZWwge1xuICAgICAgbWFyZ2luLWlubGluZS1zdGFydDogMTBweDtcbiAgICB9XG5cbiAgICAmLmNoZWNrYm94LWNoZWNrZWQge1xuICAgICAgYmFja2dyb3VuZDogIzAwQUZGRjtcbiAgICAgIGNvbG9yOiAjRkZGO1xuICAgIH1cbiAgfVxuXG4gIGFwcC1jb3VudGRvd24tdGltZXIge1xuICAgIC0tY291bnRkb3duLXZhbHVlLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2VzdCk7XG4gICAgLS1jb3VudGRvd24tdW5pdC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QpO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICB9XG5cbiAgYXBwLXNob3ctaGlkZS1wYXNzd29yZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgICBwYWRkaW5nOiAwcHggMTVweDtcblxuICAgIGlvbi1pbnB1dCB7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICB9XG4gIH1cbn1cbiIsIi5zaG93Y2FzZS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG59XG4uc2hvd2Nhc2UtY29udGVudCBpb24taXRlbS1kaXZpZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cbi5zaG93Y2FzZS1jb250ZW50IC5zaG93Y2FzZS1zZWN0aW9uIHtcbiAgbWFyZ2luOiAyMHB4IDIwcHggMTAwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBwcmUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJhY2tncm91bmQ6ICNDQ0M7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBjb2RlIHtcbiAgY29sb3I6ICNGOTI2NzI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uc2hvd2Nhc2UtY29udGVudCAuY3VzdG9tLWNoZWNrYm94IHtcbiAgYmFja2dyb3VuZDogI0NDQztcbiAgY29sb3I6ICMwMDA7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc2hvd2Nhc2UtY29udGVudCAuY3VzdG9tLWNoZWNrYm94IGlvbi1sYWJlbCB7XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDEwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCAuY3VzdG9tLWNoZWNrYm94LmNoZWNrYm94LWNoZWNrZWQge1xuICBiYWNrZ3JvdW5kOiAjMDBBRkZGO1xuICBjb2xvcjogI0ZGRjtcbn1cbi5zaG93Y2FzZS1jb250ZW50IGFwcC1jb3VudGRvd24tdGltZXIge1xuICAtLWNvdW50ZG93bi12YWx1ZS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QpO1xuICAtLWNvdW50ZG93bi11bml0LWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2VzdCk7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG59XG4uc2hvd2Nhc2UtY29udGVudCBhcHAtc2hvdy1oaWRlLXBhc3N3b3JkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgcGFkZGluZzogMHB4IDE1cHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBhcHAtc2hvdy1oaWRlLXBhc3N3b3JkIGlvbi1pbnB1dCB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hvd2Nhc2UvY3VzdG9tLWNvbXBvbmVudHMvY3VzdG9tLWNvbXBvbmVudHMucGFnZS5zY3NzIiwid2VicGFjazovLy4vLi4vVGl0YW4lMjBFc3RhdGVzL3NyYy9hcHAvc2hvd2Nhc2UvY3VzdG9tLWNvbXBvbmVudHMvY3VzdG9tLWNvbXBvbmVudHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUNBQUE7QUNDRjtBRENFO0VBQ0Usd0NBQUE7RUFDQSxrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKO0FERUU7RUFDRSx1QkFBQTtBQ0FKO0FER0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDREo7QURJRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ0ZKO0FES0U7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDSEo7QURLSTtFQUNFLHlCQUFBO0FDSE47QURNSTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQ0pOO0FEUUU7RUFDRSxpREFBQTtFQUNBLGdEQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNOSjtBRFNFO0VBQ0Usc0JBQUE7RUFDQSxpQkFBQTtBQ1BKO0FEU0k7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0FDUE47QURDQSx3L0hBQXcvSCIsInNvdXJjZXNDb250ZW50IjpbIi5zaG93Y2FzZS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG5cbiAgaW9uLWl0ZW0tZGl2aWRlciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB9XG5cbiAgLnNob3djYXNlLXNlY3Rpb24ge1xuICAgIG1hcmdpbjogMjBweCAyMHB4IDEwMHB4O1xuICB9XG5cbiAgcHJlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgYmFja2dyb3VuZDogI0NDQztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG5cbiAgY29kZSB7XG4gICAgY29sb3I6ICNGOTI2NzI7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuXG4gIC5jdXN0b20tY2hlY2tib3gge1xuICAgIGJhY2tncm91bmQ6ICNDQ0M7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBpb24tbGFiZWwge1xuICAgICAgbWFyZ2luLWlubGluZS1zdGFydDogMTBweDtcbiAgICB9XG5cbiAgICAmLmNoZWNrYm94LWNoZWNrZWQge1xuICAgICAgYmFja2dyb3VuZDogIzAwQUZGRjtcbiAgICAgIGNvbG9yOiAjRkZGO1xuICAgIH1cbiAgfVxuXG4gIGFwcC1jb3VudGRvd24tdGltZXIge1xuICAgIC0tY291bnRkb3duLXZhbHVlLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2VzdCk7XG4gICAgLS1jb3VudGRvd24tdW5pdC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QpO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICB9XG5cbiAgYXBwLXNob3ctaGlkZS1wYXNzd29yZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgICBwYWRkaW5nOiAwcHggMTVweDtcblxuICAgIGlvbi1pbnB1dCB7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICB9XG4gIH1cbn1cbiIsIi5zaG93Y2FzZS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG59XG4uc2hvd2Nhc2UtY29udGVudCBpb24taXRlbS1kaXZpZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cbi5zaG93Y2FzZS1jb250ZW50IC5zaG93Y2FzZS1zZWN0aW9uIHtcbiAgbWFyZ2luOiAyMHB4IDIwcHggMTAwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBwcmUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJhY2tncm91bmQ6ICNDQ0M7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBjb2RlIHtcbiAgY29sb3I6ICNGOTI2NzI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uc2hvd2Nhc2UtY29udGVudCAuY3VzdG9tLWNoZWNrYm94IHtcbiAgYmFja2dyb3VuZDogI0NDQztcbiAgY29sb3I6ICMwMDA7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc2hvd2Nhc2UtY29udGVudCAuY3VzdG9tLWNoZWNrYm94IGlvbi1sYWJlbCB7XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDEwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCAuY3VzdG9tLWNoZWNrYm94LmNoZWNrYm94LWNoZWNrZWQge1xuICBiYWNrZ3JvdW5kOiAjMDBBRkZGO1xuICBjb2xvcjogI0ZGRjtcbn1cbi5zaG93Y2FzZS1jb250ZW50IGFwcC1jb3VudGRvd24tdGltZXIge1xuICAtLWNvdW50ZG93bi12YWx1ZS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QpO1xuICAtLWNvdW50ZG93bi11bml0LWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2VzdCk7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG59XG4uc2hvd2Nhc2UtY29udGVudCBhcHAtc2hvdy1oaWRlLXBhc3N3b3JkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgcGFkZGluZzogMHB4IDE1cHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBhcHAtc2hvdy1oaWRlLXBhc3N3b3JkIGlvbi1pbnB1dCB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_shell_data-store_ts-src_app_showcase_custom-components_custom-components_module_ts.js.map