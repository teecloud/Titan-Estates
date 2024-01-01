"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_showcase_app-shell_app-shell_module_ts"],{

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

/***/ 97127:
/*!********************************************************!*\
  !*** ./src/app/showcase/app-shell/app-shell.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppShellModule": () => (/* binding */ AppShellModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/components.module */ 45642);
/* harmony import */ var _app_shell_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-shell.page */ 26823);
/* harmony import */ var _showcase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../showcase.service */ 82909);
/* harmony import */ var _aspect_ratio_aspect_ratio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aspect-ratio/aspect-ratio.page */ 1335);
/* harmony import */ var _image_shell_image_shell_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./image-shell/image-shell.page */ 81960);
/* harmony import */ var _text_shell_text_shell_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./text-shell/text-shell.page */ 41871);
/* harmony import */ var _simple_data_binding_simple_data_binding_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./simple-data-binding/simple-data-binding.page */ 4195);
/* harmony import */ var _data_store_basic_data_store_basic_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data-store-basic/data-store-basic.page */ 21930);
/* harmony import */ var _data_store_list_data_store_list_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./data-store-list/data-store-list.page */ 45407);
/* harmony import */ var _data_store_subset_data_store_subset_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./data-store-subset/data-store-subset.page */ 85705);
/* harmony import */ var _data_store_combined_data_store_combined_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./data-store-combined/data-store-combined.page */ 348);
/* harmony import */ var _data_store_multiple_data_store_multiple_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./data-store-multiple/data-store-multiple.page */ 50713);
/* harmony import */ var _data_store_pagination_data_store_pagination_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./data-store-pagination/data-store-pagination.page */ 96007);
/* harmony import */ var _data_store_stacked_data_store_stacked_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./data-store-stacked/data-store-stacked.page */ 17052);
/* harmony import */ var _data_store_dependant_data_store_dependant_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./data-store-dependant/data-store-dependant.page */ 59158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 22560);





















const routes = [{
  path: '',
  component: _app_shell_page__WEBPACK_IMPORTED_MODULE_1__.AppShellPage
}, {
  path: 'aspect-ratio',
  component: _aspect_ratio_aspect_ratio_page__WEBPACK_IMPORTED_MODULE_3__.AspectRatioPage
}, {
  path: 'image-shell',
  component: _image_shell_image_shell_page__WEBPACK_IMPORTED_MODULE_4__.ImageShellPage
}, {
  path: 'text-shell',
  component: _text_shell_text_shell_page__WEBPACK_IMPORTED_MODULE_5__.TextShellPage
}, {
  path: 'simple-data-binding',
  component: _simple_data_binding_simple_data_binding_page__WEBPACK_IMPORTED_MODULE_6__.SimpleDataBindingPage
}, {
  path: 'data-store-basic',
  component: _data_store_basic_data_store_basic_page__WEBPACK_IMPORTED_MODULE_7__.DataStoreBasicPage
}, {
  path: 'data-store-list',
  component: _data_store_list_data_store_list_page__WEBPACK_IMPORTED_MODULE_8__.DataStoreListPage
}, {
  path: 'data-store-subset',
  component: _data_store_subset_data_store_subset_page__WEBPACK_IMPORTED_MODULE_9__.DataStoreSubsetPage
}, {
  path: 'data-store-combined',
  component: _data_store_combined_data_store_combined_page__WEBPACK_IMPORTED_MODULE_10__.DataStoreCombinedPage
}, {
  path: 'data-store-multiple',
  component: _data_store_multiple_data_store_multiple_page__WEBPACK_IMPORTED_MODULE_11__.DataStoreMultiplePage
}, {
  path: 'data-store-pagination',
  component: _data_store_pagination_data_store_pagination_page__WEBPACK_IMPORTED_MODULE_12__.DataStorePaginationPage
}, {
  path: 'data-store-stacked',
  component: _data_store_stacked_data_store_stacked_page__WEBPACK_IMPORTED_MODULE_13__.DataStoreStackedPage
}, {
  path: 'data-store-dependant',
  component: _data_store_dependant_data_store_dependant_page__WEBPACK_IMPORTED_MODULE_14__.DataStoreDependantPage
}];
class AppShellModule {
  static #_ = this.ɵfac = function AppShellModule_Factory(t) {
    return new (t || AppShellModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({
    type: AppShellModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({
    providers: [_showcase_service__WEBPACK_IMPORTED_MODULE_2__.ShowcaseService],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule.forChild(routes), _components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppShellModule, {
    declarations: [_app_shell_page__WEBPACK_IMPORTED_MODULE_1__.AppShellPage, _aspect_ratio_aspect_ratio_page__WEBPACK_IMPORTED_MODULE_3__.AspectRatioPage, _image_shell_image_shell_page__WEBPACK_IMPORTED_MODULE_4__.ImageShellPage, _text_shell_text_shell_page__WEBPACK_IMPORTED_MODULE_5__.TextShellPage, _simple_data_binding_simple_data_binding_page__WEBPACK_IMPORTED_MODULE_6__.SimpleDataBindingPage, _data_store_basic_data_store_basic_page__WEBPACK_IMPORTED_MODULE_7__.DataStoreBasicPage, _data_store_list_data_store_list_page__WEBPACK_IMPORTED_MODULE_8__.DataStoreListPage, _data_store_subset_data_store_subset_page__WEBPACK_IMPORTED_MODULE_9__.DataStoreSubsetPage, _data_store_combined_data_store_combined_page__WEBPACK_IMPORTED_MODULE_10__.DataStoreCombinedPage, _data_store_multiple_data_store_multiple_page__WEBPACK_IMPORTED_MODULE_11__.DataStoreMultiplePage, _data_store_pagination_data_store_pagination_page__WEBPACK_IMPORTED_MODULE_12__.DataStorePaginationPage, _data_store_stacked_data_store_stacked_page__WEBPACK_IMPORTED_MODULE_13__.DataStoreStackedPage, _data_store_dependant_data_store_dependant_page__WEBPACK_IMPORTED_MODULE_14__.DataStoreDependantPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule, _components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule]
  });
})();

/***/ }),

/***/ 26823:
/*!******************************************************!*\
  !*** ./src/app/showcase/app-shell/app-shell.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppShellPage": () => (/* binding */ AppShellPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shell/aspect-ratio/aspect-ratio.component */ 89330);
/* harmony import */ var _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shell/image-shell/image-shell.component */ 71408);
/* harmony import */ var _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shell/text-shell/text-shell.component */ 94840);






const _c0 = function () {
  return ["/showcase/app-shell/aspect-ratio"];
};
const _c1 = function () {
  return ["/showcase/app-shell/image-shell"];
};
const _c2 = function () {
  return ["/showcase/app-shell/text-shell"];
};
const _c3 = function () {
  return {
    w: 2,
    h: 1
  };
};
const _c4 = function () {
  return {
    w: 1,
    h: 1
  };
};
const _c5 = function () {
  return ["/showcase/app-shell/simple-data-binding"];
};
const _c6 = function () {
  return ["/showcase/app-shell/data-store-basic"];
};
const _c7 = function () {
  return ["/showcase/app-shell/data-store-list"];
};
const _c8 = function () {
  return ["/showcase/app-shell/data-store-subset"];
};
const _c9 = function () {
  return ["/showcase/app-shell/data-store-combined"];
};
const _c10 = function () {
  return ["/showcase/app-shell/data-store-multiple"];
};
const _c11 = function () {
  return ["/showcase/app-shell/data-store-dependant"];
};
const _c12 = function () {
  return ["/showcase/app-shell/data-store-pagination"];
};
const _c13 = function () {
  return ["/showcase/app-shell/data-store-stacked"];
};
class AppShellPage {
  constructor() {}
  static #_ = this.ɵfac = function AppShellPage_Factory(t) {
    return new (t || AppShellPage)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: AppShellPage,
    selectors: [["app-showcase-shell"]],
    decls: 122,
    vars: 30,
    consts: [["color", "primary"], ["slot", "start"], [1, "showcase-content"], [1, "showcase-section", 2, "margin-bottom", "20px"], ["sticky", "true"], ["detail", "true", 3, "routerLink"], [1, "showcase-section"], [2, "background-color", "#FFF", "padding", "10px", "margin", "20px"], ["size", "12"], ["animation", "spinner", 1, "add-overlay", 3, "display", "src"], [3, "ratio"], [2, "margin", "10px", "text-align", "center"], ["size", "4"], ["animation", "spinner", 3, "src", "alt"], ["size", "8"], [2, "margin-top", "0px"], [3, "data"], ["lines", "3", 3, "data"], ["href", "https://dev.to/sagar/reactive-programming-in-javascript-with-rxjs-4jom", "target", "_blank"]],
    template: function AppShellPage_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "ion-menu-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " App Shell ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-content", 2)(7, "section", 3)(8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " After analyzing multiple use cases, we realized most UIs can be deconstructed into two data bindable element primitives: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "images");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " These ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Shell Elements");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, " are the building blocks to display loading states. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "ion-item-divider", 4)(22, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Shell Elements");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "ion-list")(25, "ion-item", 5)(26, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Aspect Ratio");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "ion-item", 5)(29, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Image Shell");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "ion-item", 5)(32, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Text Shell");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "section", 6)(35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, " You can combine the different shell elements in multiple ways to fit your needs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "ion-row", 7)(38, "ion-col", 8)(39, "app-image-shell", 9)(40, "app-aspect-ratio", 10)(41, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Text on top of a background-image container");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "ion-col", 12)(44, "app-aspect-ratio", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](45, "app-image-shell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "ion-col", 14)(47, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "app-text-shell", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "app-text-shell", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "section", 3)(52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, " By following the reactive programming paradigm to handle asynchronous data streams, we can use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Observables");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, " to manage the different states (loading / loaded) of the data binded to our shell elements. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "p")(58, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "Note:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, " If you are new to reactive programming in Javascript, I strongly recommend you to read ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "this guide");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "ion-item-divider", 4)(65, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "Simple Data Binding");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "ion-list")(68, "ion-item", 5)(69, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "Data Binding using plain Observables");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "section", 3)(72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, " You can go a step further and use our ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, "DataStore");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, " class which provides extra functionalities to plain Observables. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, " The main responsability of the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, "DataStore");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, " is to store the data stream in a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, "timeline");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, " property and append shell values to the Observable data sources through the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86, "AppendShell");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, " static method. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "ion-item-divider", 4)(89, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90, "Data Binding with DataStore");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "ion-list")(92, "ion-item", 5)(93, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94, "Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "ion-item", 5)(96, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](97, "List");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "ion-item", 5)(99, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](100, "Filtered Data Source");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "ion-item", 5)(102, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](103, "Combined Data Sources");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "ion-item", 5)(105, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](106, "Multiple Data Stores");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "ion-item", 5)(108, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](109, "Dependant Data Sources");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "ion-item", 5)(111, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](112, "Pagination");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "ion-item", 5)(114, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](115, "Stacked Shells");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "section", 3)(117, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](118, " We double down on adding as many examples as possible on how to use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](120, "App Shell");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](121, ". However, if you have a use case that doesn't fall under the examples list, please let us know so we can keep improving the product. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](16, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](17, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](18, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("display", "cover");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](19, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](20, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", "Sample Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](21, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](22, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](23, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](24, _c8));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](25, _c9));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](26, _c10));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](27, _c11));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](28, _c12));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](29, _c13));
      }
    },
    dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItemDivider, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.RouterLinkDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_0__.AspectRatioComponent, _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_1__.ImageShellComponent, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_2__.TextShellComponent],
    styles: [".showcase-content[_ngcontent-%COMP%] {\n  --background: var(--app-background);\n}\n.showcase-content[_ngcontent-%COMP%]   ion-item-divider[_ngcontent-%COMP%] {\n  --background: var(--ion-color-secondary);\n  --color: var(--ion-color-lightest);\n  text-transform: uppercase;\n  font-weight: 500;\n  letter-spacing: 1px;\n}\n.showcase-content[_ngcontent-%COMP%]   .showcase-section[_ngcontent-%COMP%] {\n  margin: 20px 20px 60px;\n}\n.showcase-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  font-size: 14px;\n  background: #CCC;\n  padding: 10px;\n}\n.showcase-content[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: #F92672;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC1zaGVsbC5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9UaXRhbiUyMEVzdGF0ZXMvc3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvYXBwLXNoZWxsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1DQUFBO0FDQ0Y7QURDRTtFQUNFLHdDQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBREVFO0VBQ0Usc0JBQUE7QUNBSjtBREdFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0RKO0FESUU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNGSiIsImZpbGUiOiJhcHAtc2hlbGwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNob3djYXNlLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcblxuICBpb24taXRlbS1kaXZpZGVyIHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIH1cblxuICAuc2hvd2Nhc2Utc2VjdGlvbiB7XG4gICAgbWFyZ2luOiAyMHB4IDIwcHggNjBweDtcbiAgfVxuXG4gIHByZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGJhY2tncm91bmQ6ICNDQ0M7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuXG4gIGNvZGUge1xuICAgIGNvbG9yOiAjRjkyNjcyO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbn1cbiIsIi5zaG93Y2FzZS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG59XG4uc2hvd2Nhc2UtY29udGVudCBpb24taXRlbS1kaXZpZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cbi5zaG93Y2FzZS1jb250ZW50IC5zaG93Y2FzZS1zZWN0aW9uIHtcbiAgbWFyZ2luOiAyMHB4IDIwcHggNjBweDtcbn1cbi5zaG93Y2FzZS1jb250ZW50IHByZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYmFja2dyb3VuZDogI0NDQztcbiAgcGFkZGluZzogMTBweDtcbn1cbi5zaG93Y2FzZS1jb250ZW50IGNvZGUge1xuICBjb2xvcjogI0Y5MjY3MjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hvd2Nhc2UvYXBwLXNoZWxsL2FwcC1zaGVsbC5wYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi9UaXRhbiUyMEVzdGF0ZXMvc3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvYXBwLXNoZWxsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1DQUFBO0FDQ0Y7QURDRTtFQUNFLHdDQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBREVFO0VBQ0Usc0JBQUE7QUNBSjtBREdFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0RKO0FESUU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNGSjtBRENBLHd5REFBd3lEIiwic291cmNlc0NvbnRlbnQiOlsiLnNob3djYXNlLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcblxuICBpb24taXRlbS1kaXZpZGVyIHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIH1cblxuICAuc2hvd2Nhc2Utc2VjdGlvbiB7XG4gICAgbWFyZ2luOiAyMHB4IDIwcHggNjBweDtcbiAgfVxuXG4gIHByZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGJhY2tncm91bmQ6ICNDQ0M7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuXG4gIGNvZGUge1xuICAgIGNvbG9yOiAjRjkyNjcyO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbn1cbiIsIi5zaG93Y2FzZS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG59XG4uc2hvd2Nhc2UtY29udGVudCBpb24taXRlbS1kaXZpZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cbi5zaG93Y2FzZS1jb250ZW50IC5zaG93Y2FzZS1zZWN0aW9uIHtcbiAgbWFyZ2luOiAyMHB4IDIwcHggNjBweDtcbn1cbi5zaG93Y2FzZS1jb250ZW50IHByZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYmFja2dyb3VuZDogI0NDQztcbiAgcGFkZGluZzogMTBweDtcbn1cbi5zaG93Y2FzZS1jb250ZW50IGNvZGUge1xuICBjb2xvcjogI0Y5MjY3MjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 1335:
/*!**********************************************************************!*\
  !*** ./src/app/showcase/app-shell/aspect-ratio/aspect-ratio.page.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AspectRatioPage": () => (/* binding */ AspectRatioPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shell/aspect-ratio/aspect-ratio.component */ 89330);



const _c0 = function () {
  return {
    w: 2,
    h: 1
  };
};
class AspectRatioPage {
  constructor() {}
  static #_ = this.ɵfac = function AspectRatioPage_Factory(t) {
    return new (t || AspectRatioPage)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AspectRatioPage,
    selectors: [["app-aspect-ratio-page"]],
    decls: 41,
    vars: 2,
    consts: [["color", "primary"], ["slot", "start"], ["defaultHref", "showcase/app-shell"], [1, "showcase-content"], [1, "showcase-section"], ["href", "http://stackoverflow.com/a/10441480/1116959", "target", "_blank"], [2, "width", "80%", "margin", "0px auto"], [2, "background-color", "#00AFFF", 3, "ratio"], [2, "margin", "10px", "display", "block"]],
    template: function AspectRatioPage_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Aspect Ratio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content", 3)(7, "section", 4)(8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "<app-aspect-ratio>");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " is a simple component that ensures a block will maintain the specified aspect ratio. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " It uses an ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "old CSS technique");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " to adjust the height of the element based on its width (using padding-bottom). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " This is a very handy component to prevent content from jumping around while the page is loading. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p")(21, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Note:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "<app-aspect-ratio>");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " component must be surrounded by a container element with a defined width, as this component will fill the parent width. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "pre")(28, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "<div style=\"width:80%; margin: 0px auto;\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "\n  <app-aspect-ratio [ratio]=\"{w:2, h:1}\">\n    <span>This container will always have a 2:1 aspect ratio</span>\n  </app-aspect-ratio>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "</div>");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 6)(35, "app-aspect-ratio", 7)(36, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "This container will always have a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "2:1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " aspect ratio");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
      }
    },
    dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonBackButtonDelegate, _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_0__.AspectRatioComponent],
    styles: [".showcase-content[_ngcontent-%COMP%] {\n  --background: var(--app-background);\n}\n.showcase-content[_ngcontent-%COMP%]   ion-item-divider[_ngcontent-%COMP%] {\n  --background: var(--ion-color-secondary);\n  --color: var(--ion-color-lightest);\n  text-transform: uppercase;\n  font-weight: 500;\n  letter-spacing: 1px;\n}\n.showcase-content[_ngcontent-%COMP%]   .showcase-section[_ngcontent-%COMP%] {\n  margin: 20px 20px 60px;\n}\n.showcase-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  font-size: 14px;\n  background: #CCC;\n  padding: 10px;\n}\n.showcase-content[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: #F92672;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC1zaGVsbC5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9UaXRhbiUyMEVzdGF0ZXMvc3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvYXNwZWN0LXJhdGlvL2FzcGVjdC1yYXRpby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBQTtBQ0NGO0FEQ0U7RUFDRSx3Q0FBQTtFQUNBLGtDQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURFRTtFQUNFLHNCQUFBO0FDQUo7QURHRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNESjtBRElFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDRkoiLCJmaWxlIjoiYXNwZWN0LXJhdGlvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG93Y2FzZS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG5cbiAgaW9uLWl0ZW0tZGl2aWRlciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB9XG5cbiAgLnNob3djYXNlLXNlY3Rpb24ge1xuICAgIG1hcmdpbjogMjBweCAyMHB4IDYwcHg7XG4gIH1cblxuICBwcmUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBiYWNrZ3JvdW5kOiAjQ0NDO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cblxuICBjb2RlIHtcbiAgICBjb2xvcjogI0Y5MjY3MjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG59XG4iLCIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xufVxuLnNob3djYXNlLWNvbnRlbnQgaW9uLWl0ZW0tZGl2aWRlciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCAuc2hvd2Nhc2Utc2VjdGlvbiB7XG4gIG1hcmdpbjogMjBweCAyMHB4IDYwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBwcmUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJhY2tncm91bmQ6ICNDQ0M7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBjb2RlIHtcbiAgY29sb3I6ICNGOTI2NzI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hvd2Nhc2UvYXBwLXNoZWxsL2FwcC1zaGVsbC5wYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi9UaXRhbiUyMEVzdGF0ZXMvc3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvYXNwZWN0LXJhdGlvL2FzcGVjdC1yYXRpby5wYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3Nob3djYXNlL2FwcC1zaGVsbC9hc3BlY3QtcmF0aW8vYXNwZWN0LXJhdGlvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1DQUFBO0FDQ0Y7QURDRTtFQUNFLHdDQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBREVFO0VBQ0Usc0JBQUE7QUNBSjtBREdFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0RKO0FESUU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNGSjtBQ0NBLHcwREFBdzBEIiwic291cmNlc0NvbnRlbnQiOlsiLnNob3djYXNlLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcblxuICBpb24taXRlbS1kaXZpZGVyIHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIH1cblxuICAuc2hvd2Nhc2Utc2VjdGlvbiB7XG4gICAgbWFyZ2luOiAyMHB4IDIwcHggNjBweDtcbiAgfVxuXG4gIHByZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGJhY2tncm91bmQ6ICNDQ0M7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuXG4gIGNvZGUge1xuICAgIGNvbG9yOiAjRjkyNjcyO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbn1cbiIsIi5zaG93Y2FzZS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG59XG4uc2hvd2Nhc2UtY29udGVudCBpb24taXRlbS1kaXZpZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cbi5zaG93Y2FzZS1jb250ZW50IC5zaG93Y2FzZS1zZWN0aW9uIHtcbiAgbWFyZ2luOiAyMHB4IDIwcHggNjBweDtcbn1cbi5zaG93Y2FzZS1jb250ZW50IHByZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYmFja2dyb3VuZDogI0NDQztcbiAgcGFkZGluZzogMTBweDtcbn1cbi5zaG93Y2FzZS1jb250ZW50IGNvZGUge1xuICBjb2xvcjogI0Y5MjY3MjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn0iLCIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xufVxuLnNob3djYXNlLWNvbnRlbnQgaW9uLWl0ZW0tZGl2aWRlciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCAuc2hvd2Nhc2Utc2VjdGlvbiB7XG4gIG1hcmdpbjogMjBweCAyMHB4IDYwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBwcmUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJhY2tncm91bmQ6ICNDQ0M7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBjb2RlIHtcbiAgY29sb3I6ICNGOTI2NzI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUwyRndjQzF6YUdWc2JDNXdZV2RsTG5OamMzTWlMQ0l1TGk4dUxpOHVMaTh1TGk4dUxpOHVMaTlVYVhSaGJpVXlNRVZ6ZEdGMFpYTXZjM0pqTDJGd2NDOXphRzkzWTJGelpTOWhjSEF0YzJobGJHd3ZZWE53WldOMExYSmhkR2x2TDJGemNHVmpkQzF5WVhScGJ5NXdZV2RsTG5OamMzTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUU3UlVGRFJTeHRRMEZCUVR0QlEwTkdPMEZFUTBVN1JVRkRSU3gzUTBGQlFUdEZRVU5CTEd0RFFVRkJPMFZCUTBFc2VVSkJRVUU3UlVGRFFTeG5Ra0ZCUVR0RlFVTkJMRzFDUVVGQk8wRkRRMG83UVVSRlJUdEZRVU5GTEhOQ1FVRkJPMEZEUVVvN1FVUkhSVHRGUVVORkxHVkJRVUU3UlVGRFFTeG5Ra0ZCUVR0RlFVTkJMR0ZCUVVFN1FVTkVTanRCUkVsRk8wVkJRMFVzWTBGQlFUdEZRVU5CTEdkQ1FVRkJPMEZEUmtvaUxDSm1hV3hsSWpvaVlYTndaV04wTFhKaGRHbHZMbkJoWjJVdWMyTnpjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk1emFHOTNZMkZ6WlMxamIyNTBaVzUwSUh0Y2JpQWdMUzFpWVdOclozSnZkVzVrT2lCMllYSW9MUzFoY0hBdFltRmphMmR5YjNWdVpDazdYRzVjYmlBZ2FXOXVMV2wwWlcwdFpHbDJhV1JsY2lCN1hHNGdJQ0FnTFMxaVlXTnJaM0p2ZFc1a09pQjJZWElvTFMxcGIyNHRZMjlzYjNJdGMyVmpiMjVrWVhKNUtUdGNiaUFnSUNBdExXTnZiRzl5T2lCMllYSW9MUzFwYjI0dFkyOXNiM0l0YkdsbmFIUmxjM1FwTzF4dUlDQWdJSFJsZUhRdGRISmhibk5tYjNKdE9pQjFjSEJsY21OaGMyVTdYRzRnSUNBZ1ptOXVkQzEzWldsbmFIUTZJRFV3TUR0Y2JpQWdJQ0JzWlhSMFpYSXRjM0JoWTJsdVp6b2dNWEI0TzF4dUlDQjlYRzVjYmlBZ0xuTm9iM2RqWVhObExYTmxZM1JwYjI0Z2UxeHVJQ0FnSUcxaGNtZHBiam9nTWpCd2VDQXlNSEI0SURZd2NIZzdYRzRnSUgxY2JseHVJQ0J3Y21VZ2UxeHVJQ0FnSUdadmJuUXRjMmw2WlRvZ01UUndlRHRjYmlBZ0lDQmlZV05yWjNKdmRXNWtPaUFqUTBORE8xeHVJQ0FnSUhCaFpHUnBibWM2SURFd2NIZzdYRzRnSUgxY2JseHVJQ0JqYjJSbElIdGNiaUFnSUNCamIyeHZjam9nSTBZNU1qWTNNanRjYmlBZ0lDQm1iMjUwTFhkbGFXZG9kRG9nTlRBd08xeHVJQ0I5WEc1OVhHNGlMQ0l1YzJodmQyTmhjMlV0WTI5dWRHVnVkQ0I3WEc0Z0lDMHRZbUZqYTJkeWIzVnVaRG9nZG1GeUtDMHRZWEJ3TFdKaFkydG5jbTkxYm1RcE8xeHVmVnh1TG5Ob2IzZGpZWE5sTFdOdmJuUmxiblFnYVc5dUxXbDBaVzB0WkdsMmFXUmxjaUI3WEc0Z0lDMHRZbUZqYTJkeWIzVnVaRG9nZG1GeUtDMHRhVzl1TFdOdmJHOXlMWE5sWTI5dVpHRnllU2s3WEc0Z0lDMHRZMjlzYjNJNklIWmhjaWd0TFdsdmJpMWpiMnh2Y2kxc2FXZG9kR1Z6ZENrN1hHNGdJSFJsZUhRdGRISmhibk5tYjNKdE9pQjFjSEJsY21OaGMyVTdYRzRnSUdadmJuUXRkMlZwWjJoME9pQTFNREE3WEc0Z0lHeGxkSFJsY2kxemNHRmphVzVuT2lBeGNIZzdYRzU5WEc0dWMyaHZkMk5oYzJVdFkyOXVkR1Z1ZENBdWMyaHZkMk5oYzJVdGMyVmpkR2x2YmlCN1hHNGdJRzFoY21kcGJqb2dNakJ3ZUNBeU1IQjRJRFl3Y0hnN1hHNTlYRzR1YzJodmQyTmhjMlV0WTI5dWRHVnVkQ0J3Y21VZ2UxeHVJQ0JtYjI1MExYTnBlbVU2SURFMGNIZzdYRzRnSUdKaFkydG5jbTkxYm1RNklDTkRRME03WEc0Z0lIQmhaR1JwYm1jNklERXdjSGc3WEc1OVhHNHVjMmh2ZDJOaGMyVXRZMjl1ZEdWdWRDQmpiMlJsSUh0Y2JpQWdZMjlzYjNJNklDTkdPVEkyTnpJN1hHNGdJR1p2Ym5RdGQyVnBaMmgwT2lBMU1EQTdYRzU5SWwxOSAqLyJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 21930:
/*!******************************************************************************!*\
  !*** ./src/app/showcase/app-shell/data-store-basic/data-store-basic.page.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataStoreBasicPage": () => (/* binding */ DataStoreBasicPage)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 32313);
/* harmony import */ var _showcase_shell_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../showcase-shell.model */ 29379);
/* harmony import */ var _showcase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../showcase.service */ 82909);
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shell/data-store */ 29760);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shell/aspect-ratio/aspect-ratio.component */ 89330);
/* harmony import */ var _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shell/image-shell/image-shell.component */ 71408);
/* harmony import */ var _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shell/text-shell/text-shell.component */ 94840);










const _c0 = function () {
  return {
    w: 2,
    h: 1
  };
};
const _c1 = function () {
  return {
    w: 1,
    h: 1
  };
};
class DataStoreBasicPage {
  constructor(showcaseService) {
    this.showcaseService = showcaseService;
    this.dataStoreButtonDisabled = true;
  }
  ngOnInit() {
    this.showcaseDataStore();
  }
  showcaseDataStore() {
    // Prevent rage clicks on the 'Fetch more Data' button
    this.dataStoreButtonDisabled = true;
    const dataSource = this.showcaseService.getSimpleDataSource();
    // Initialize the model specifying that it is a shell model
    const shellModel = new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_0__.ShowcaseShellModel();
    const dataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_2__.DataStore(shellModel);
    // Trigger the loading mechanism (with shell) in the dataStore
    dataStore.load(dataSource);
    dataStore.state.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(2),
    // DataStore will emit a mock object and the real data fetched from the source. Emit those two values and then complete.
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.finalize)(() => this.dataStoreButtonDisabled = false)).subscribe(data => {
      this.dataStoreData = data;
    });
  }
  static #_ = this.ɵfac = function DataStoreBasicPage_Factory(t) {
    return new (t || DataStoreBasicPage)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_showcase_service__WEBPACK_IMPORTED_MODULE_1__.ShowcaseService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: DataStoreBasicPage,
    selectors: [["app-data-store-basic"]],
    decls: 31,
    vars: 12,
    consts: [["color", "primary"], ["slot", "start"], ["defaultHref", "showcase/app-shell"], [1, "showcase-content"], [1, "showcase-section"], [2, "background-color", "#FFF", "padding", "10px", "margin", "20px"], ["size", "12"], ["animation", "spinner", 1, "add-overlay", 3, "display", "src", "alt"], [3, "ratio"], [2, "margin", "10px", "text-align", "center", "color", "#FFF"], ["size", "4"], ["animation", "spinner", 3, "src", "alt"], ["size", "8"], [2, "margin-top", "0px"], [3, "data"], ["lines", "3", 3, "data"], [3, "disabled", "click"]],
    template: function DataStoreBasicPage_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, " DataStore - Basic example ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "ion-content", 3)(7, "section", 4)(8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, " Using the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "DataStore");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, " utility you can keep track and append shell values to the data stream. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, " This drastically reduces the boilerplate needed to add app shell loading interactions to your app. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "ion-row", 5)(16, "ion-col", 6)(17, "app-image-shell", 7)(18, "app-aspect-ratio", 8)(19, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "Heading on top of a cover image");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "ion-col", 10)(22, "app-aspect-ratio", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](23, "app-image-shell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "ion-col", 12)(25, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](26, "app-text-shell", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](28, "app-text-shell", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "ion-button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DataStoreBasicPage_Template_ion_button_click_29_listener() {
          return ctx.showcaseDataStore();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30, "Fetch more Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("display", "cover")("src", ctx.dataStoreData == null ? null : ctx.dataStoreData.cover)("alt", "Sample Image Cover");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](11, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx.dataStoreData == null ? null : ctx.dataStoreData.image)("alt", "Sample Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("data", ctx.dataStoreData == null ? null : ctx.dataStoreData.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("data", ctx.dataStoreData == null ? null : ctx.dataStoreData.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx.dataStoreButtonDisabled);
      }
    },
    dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonBackButtonDelegate, _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_3__.AspectRatioComponent, _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_4__.ImageShellComponent, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_5__.TextShellComponent],
    styles: [".showcase-content[_ngcontent-%COMP%] {\n  --background: var(--app-background);\n}\n.showcase-content[_ngcontent-%COMP%]   ion-item-divider[_ngcontent-%COMP%] {\n  --background: var(--ion-color-secondary);\n  --color: var(--ion-color-lightest);\n  text-transform: uppercase;\n  font-weight: 500;\n  letter-spacing: 1px;\n}\n.showcase-content[_ngcontent-%COMP%]   .showcase-section[_ngcontent-%COMP%] {\n  margin: 20px 20px 60px;\n}\n.showcase-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  font-size: 14px;\n  background: #CCC;\n  padding: 10px;\n}\n.showcase-content[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: #F92672;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC1zaGVsbC5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9UaXRhbiUyMEVzdGF0ZXMvc3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvZGF0YS1zdG9yZS1iYXNpYy9kYXRhLXN0b3JlLWJhc2ljLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1DQUFBO0FDQ0Y7QURDRTtFQUNFLHdDQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBREVFO0VBQ0Usc0JBQUE7QUNBSjtBREdFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0RKO0FESUU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNGSiIsImZpbGUiOiJkYXRhLXN0b3JlLWJhc2ljLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG93Y2FzZS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG5cbiAgaW9uLWl0ZW0tZGl2aWRlciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB9XG5cbiAgLnNob3djYXNlLXNlY3Rpb24ge1xuICAgIG1hcmdpbjogMjBweCAyMHB4IDYwcHg7XG4gIH1cblxuICBwcmUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBiYWNrZ3JvdW5kOiAjQ0NDO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cblxuICBjb2RlIHtcbiAgICBjb2xvcjogI0Y5MjY3MjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG59XG4iLCIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xufVxuLnNob3djYXNlLWNvbnRlbnQgaW9uLWl0ZW0tZGl2aWRlciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCAuc2hvd2Nhc2Utc2VjdGlvbiB7XG4gIG1hcmdpbjogMjBweCAyMHB4IDYwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBwcmUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJhY2tncm91bmQ6ICNDQ0M7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBjb2RlIHtcbiAgY29sb3I6ICNGOTI2NzI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hvd2Nhc2UvYXBwLXNoZWxsL2FwcC1zaGVsbC5wYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi9UaXRhbiUyMEVzdGF0ZXMvc3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvZGF0YS1zdG9yZS1iYXNpYy9kYXRhLXN0b3JlLWJhc2ljLnBhZ2Uuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hvd2Nhc2UvYXBwLXNoZWxsL2RhdGEtc3RvcmUtYmFzaWMvZGF0YS1zdG9yZS1iYXNpYy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBQTtBQ0NGO0FEQ0U7RUFDRSx3Q0FBQTtFQUNBLGtDQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURFRTtFQUNFLHNCQUFBO0FDQUo7QURHRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNESjtBRElFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDRko7QUNDQSx3MURBQXcxRCIsInNvdXJjZXNDb250ZW50IjpbIi5zaG93Y2FzZS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG5cbiAgaW9uLWl0ZW0tZGl2aWRlciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB9XG5cbiAgLnNob3djYXNlLXNlY3Rpb24ge1xuICAgIG1hcmdpbjogMjBweCAyMHB4IDYwcHg7XG4gIH1cblxuICBwcmUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBiYWNrZ3JvdW5kOiAjQ0NDO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cblxuICBjb2RlIHtcbiAgICBjb2xvcjogI0Y5MjY3MjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG59XG4iLCIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xufVxuLnNob3djYXNlLWNvbnRlbnQgaW9uLWl0ZW0tZGl2aWRlciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCAuc2hvd2Nhc2Utc2VjdGlvbiB7XG4gIG1hcmdpbjogMjBweCAyMHB4IDYwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBwcmUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJhY2tncm91bmQ6ICNDQ0M7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBjb2RlIHtcbiAgY29sb3I6ICNGOTI2NzI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59IiwiLnNob3djYXNlLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcbn1cbi5zaG93Y2FzZS1jb250ZW50IGlvbi1pdGVtLWRpdmlkZXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuLnNob3djYXNlLWNvbnRlbnQgLnNob3djYXNlLXNlY3Rpb24ge1xuICBtYXJnaW46IDIwcHggMjBweCA2MHB4O1xufVxuLnNob3djYXNlLWNvbnRlbnQgcHJlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiAjQ0NDO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLnNob3djYXNlLWNvbnRlbnQgY29kZSB7XG4gIGNvbG9yOiAjRjkyNjcyO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMMkZ3Y0MxemFHVnNiQzV3WVdkbExuTmpjM01pTENJdUxpOHVMaTh1TGk4dUxpOHVMaTh1TGk5VWFYUmhiaVV5TUVWemRHRjBaWE12YzNKakwyRndjQzl6YUc5M1kyRnpaUzloY0hBdGMyaGxiR3d2WkdGMFlTMXpkRzl5WlMxaVlYTnBZeTlrWVhSaExYTjBiM0psTFdKaGMybGpMbkJoWjJVdWMyTnpjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVR0RlFVTkZMRzFEUVVGQk8wRkRRMFk3UVVSRFJUdEZRVU5GTEhkRFFVRkJPMFZCUTBFc2EwTkJRVUU3UlVGRFFTeDVRa0ZCUVR0RlFVTkJMR2RDUVVGQk8wVkJRMEVzYlVKQlFVRTdRVU5EU2p0QlJFVkZPMFZCUTBVc2MwSkJRVUU3UVVOQlNqdEJSRWRGTzBWQlEwVXNaVUZCUVR0RlFVTkJMR2RDUVVGQk8wVkJRMEVzWVVGQlFUdEJRMFJLTzBGRVNVVTdSVUZEUlN4alFVRkJPMFZCUTBFc1owSkJRVUU3UVVOR1NpSXNJbVpwYkdVaU9pSmtZWFJoTFhOMGIzSmxMV0poYzJsakxuQmhaMlV1YzJOemN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaTV6YUc5M1kyRnpaUzFqYjI1MFpXNTBJSHRjYmlBZ0xTMWlZV05yWjNKdmRXNWtPaUIyWVhJb0xTMWhjSEF0WW1GamEyZHliM1Z1WkNrN1hHNWNiaUFnYVc5dUxXbDBaVzB0WkdsMmFXUmxjaUI3WEc0Z0lDQWdMUzFpWVdOclozSnZkVzVrT2lCMllYSW9MUzFwYjI0dFkyOXNiM0l0YzJWamIyNWtZWEo1S1R0Y2JpQWdJQ0F0TFdOdmJHOXlPaUIyWVhJb0xTMXBiMjR0WTI5c2IzSXRiR2xuYUhSbGMzUXBPMXh1SUNBZ0lIUmxlSFF0ZEhKaGJuTm1iM0p0T2lCMWNIQmxjbU5oYzJVN1hHNGdJQ0FnWm05dWRDMTNaV2xuYUhRNklEVXdNRHRjYmlBZ0lDQnNaWFIwWlhJdGMzQmhZMmx1WnpvZ01YQjRPMXh1SUNCOVhHNWNiaUFnTG5Ob2IzZGpZWE5sTFhObFkzUnBiMjRnZTF4dUlDQWdJRzFoY21kcGJqb2dNakJ3ZUNBeU1IQjRJRFl3Y0hnN1hHNGdJSDFjYmx4dUlDQndjbVVnZTF4dUlDQWdJR1p2Ym5RdGMybDZaVG9nTVRSd2VEdGNiaUFnSUNCaVlXTnJaM0p2ZFc1a09pQWpRME5ETzF4dUlDQWdJSEJoWkdScGJtYzZJREV3Y0hnN1hHNGdJSDFjYmx4dUlDQmpiMlJsSUh0Y2JpQWdJQ0JqYjJ4dmNqb2dJMFk1TWpZM01qdGNiaUFnSUNCbWIyNTBMWGRsYVdkb2REb2dOVEF3TzF4dUlDQjlYRzU5WEc0aUxDSXVjMmh2ZDJOaGMyVXRZMjl1ZEdWdWRDQjdYRzRnSUMwdFltRmphMmR5YjNWdVpEb2dkbUZ5S0MwdFlYQndMV0poWTJ0bmNtOTFibVFwTzF4dWZWeHVMbk5vYjNkallYTmxMV052Ym5SbGJuUWdhVzl1TFdsMFpXMHRaR2wyYVdSbGNpQjdYRzRnSUMwdFltRmphMmR5YjNWdVpEb2dkbUZ5S0MwdGFXOXVMV052Ykc5eUxYTmxZMjl1WkdGeWVTazdYRzRnSUMwdFkyOXNiM0k2SUhaaGNpZ3RMV2x2YmkxamIyeHZjaTFzYVdkb2RHVnpkQ2s3WEc0Z0lIUmxlSFF0ZEhKaGJuTm1iM0p0T2lCMWNIQmxjbU5oYzJVN1hHNGdJR1p2Ym5RdGQyVnBaMmgwT2lBMU1EQTdYRzRnSUd4bGRIUmxjaTF6Y0dGamFXNW5PaUF4Y0hnN1hHNTlYRzR1YzJodmQyTmhjMlV0WTI5dWRHVnVkQ0F1YzJodmQyTmhjMlV0YzJWamRHbHZiaUI3WEc0Z0lHMWhjbWRwYmpvZ01qQndlQ0F5TUhCNElEWXdjSGc3WEc1OVhHNHVjMmh2ZDJOaGMyVXRZMjl1ZEdWdWRDQndjbVVnZTF4dUlDQm1iMjUwTFhOcGVtVTZJREUwY0hnN1hHNGdJR0poWTJ0bmNtOTFibVE2SUNORFEwTTdYRzRnSUhCaFpHUnBibWM2SURFd2NIZzdYRzU5WEc0dWMyaHZkMk5oYzJVdFkyOXVkR1Z1ZENCamIyUmxJSHRjYmlBZ1kyOXNiM0k2SUNOR09USTJOekk3WEc0Z0lHWnZiblF0ZDJWcFoyaDBPaUExTURBN1hHNTlJbDE5ICovIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 348:
/*!************************************************************************************!*\
  !*** ./src/app/showcase/app-shell/data-store-combined/data-store-combined.page.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataStoreCombinedPage": () => (/* binding */ DataStoreCombinedPage)
/* harmony export */ });
/* harmony import */ var _showcase_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../showcase.service */ 82909);
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shell/data-store */ 29760);
/* harmony import */ var _showcase_shell_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../showcase-shell.model */ 29379);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shell/text-shell/text-shell.component */ 94840);








function DataStoreCombinedPage_ion_item_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-item", 9)(1, "ion-label")(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "app-text-shell", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 11)(5, "span", 12)(6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Status:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "app-text-shell", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "span")(11, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Owner:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "app-text-shell", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "app-text-shell", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "app-text-shell", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const task_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", task_r1 == null ? null : task_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", task_r1.completed ? "Completed" : "In Progress");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", task_r1.user == null ? null : task_r1.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", (task_r1 == null ? null : task_r1.user) ? "@".concat("", task_r1.user.username) : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", task_r1.user == null ? null : task_r1.user.email);
  }
}
class DataStoreCombinedPage {
  constructor(showcaseService) {
    this.showcaseService = showcaseService;
  }
  ngOnInit() {
    // We created ShowcaseCombinedTaskUserModel to combine the task with his user data.
    // They are 2 different collections (or data tables in the DB) and we need to combine them into 1 dataSource.
    const dataSource = this.showcaseService.getCombinedTasksUserDataSource();
    const shellModel = [new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_2__.ShowcaseCombinedTaskUserModel(), new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_2__.ShowcaseCombinedTaskUserModel(), new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_2__.ShowcaseCombinedTaskUserModel(), new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_2__.ShowcaseCombinedTaskUserModel()];
    this.tasksCombinedDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_1__.DataStore(shellModel);
    this.tasksCombinedDataStore.load(dataSource);
    this.tasksCombinedDataStore.state.subscribe(data => {
      this.tasks = data;
    });
  }
  static #_ = this.ɵfac = function DataStoreCombinedPage_Factory(t) {
    return new (t || DataStoreCombinedPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_showcase_service__WEBPACK_IMPORTED_MODULE_0__.ShowcaseService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: DataStoreCombinedPage,
    selectors: [["app-data-store-combined"]],
    decls: 44,
    vars: 5,
    consts: [["color", "primary"], ["slot", "start"], ["defaultHref", "showcase/app-shell"], [1, "showcase-content"], [1, "showcase-section"], ["href", "https://blog.angularindepth.com/learn-to-combine-rxjs-sequences-with-super-intuitive-interactive-diagrams-20fce8e6511", "target", "_blank"], [1, "tasks"], ["lines", "full", 2, "--background", "transparent"], ["class", "task", 4, "ngFor", "ngForOf"], [1, "task"], ["animation", "bouncing", 2, "--text-shell-line-height", "16px", 3, "data"], [2, "display", "flex"], [2, "margin-right", "10px"], [2, "min-width", "100px"], ["animation", "bouncing", 2, "--text-shell-line-height", "14px", 3, "data"], ["animation", "bouncing", 3, "data"]],
    template: function DataStoreCombinedPage_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " DataStore - Combined Data Sources ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ion-content", 3)(7, "section", 4)(8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " Some modern ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "no-sql");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " solutions like ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "MongoDB");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Firebase Firestore");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, " do not support multi-collection queries (left join, inner join). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, " That's why you may end up using some ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "RxJs");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, " operators to manage and combine queries independently. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "p")(25, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Note:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, " These techniques are ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "intermediate / advanced");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, " and require some patience to fully grasp some reactive programming concepts before you can master RxJs operators. I strongly recommend you to read this guide on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "learning to combine RxJs sequences");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, " Below you can see how we combine two data sources (one depending on the other) into one Observable. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, " Let's do an example of Tasks and their Owners. Imagine a case where we need to have the list of tasks and the details of the 'owner' user combined in the same data source. Let's see how to do it. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 6)(39, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "ion-list", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](42, DataStoreCombinedPage_ion_item_42_Template, 19, 5, "ion-item", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](43, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](43, 1, ctx.tasks, 0, 40));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonBackButtonDelegate, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_3__.TextShellComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.SlicePipe],
    styles: [".showcase-content[_ngcontent-%COMP%] {\n  --background: var(--app-background);\n}\n.showcase-content[_ngcontent-%COMP%]   ion-item-divider[_ngcontent-%COMP%] {\n  --background: var(--ion-color-secondary);\n  --color: var(--ion-color-lightest);\n  text-transform: uppercase;\n  font-weight: 500;\n  letter-spacing: 1px;\n}\n.showcase-content[_ngcontent-%COMP%]   .showcase-section[_ngcontent-%COMP%] {\n  margin: 20px 20px 60px;\n}\n.showcase-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  font-size: 14px;\n  background: #CCC;\n  padding: 10px;\n}\n.showcase-content[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: #F92672;\n  font-weight: 500;\n}\n\n.tasks[_ngcontent-%COMP%] {\n  background-color: #ececec;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.38'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC1zaGVsbC5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9UaXRhbiUyMEVzdGF0ZXMvc3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvZGF0YS1zdG9yZS1jb21iaW5lZC9kYXRhLXN0b3JlLWNvbWJpbmVkLnBhZ2Uuc2NzcyIsImRhdGEtc3RvcmUtY29tYmluZWQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUNBQUE7QUNDRjtBRENFO0VBQ0Usd0NBQUE7RUFDQSxrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKO0FERUU7RUFDRSxzQkFBQTtBQ0FKO0FER0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDREo7QURJRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ0ZKOztBQ25CQTtFQUNFLHlCQUFBO0VBQ0Esd2lCQUFBO0VBQ0EsYUFBQTtBRHNCRiIsImZpbGUiOiJkYXRhLXN0b3JlLWNvbWJpbmVkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG93Y2FzZS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG5cbiAgaW9uLWl0ZW0tZGl2aWRlciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB9XG5cbiAgLnNob3djYXNlLXNlY3Rpb24ge1xuICAgIG1hcmdpbjogMjBweCAyMHB4IDYwcHg7XG4gIH1cblxuICBwcmUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBiYWNrZ3JvdW5kOiAjQ0NDO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cblxuICBjb2RlIHtcbiAgICBjb2xvcjogI0Y5MjY3MjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG59XG4iLCIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xufVxuLnNob3djYXNlLWNvbnRlbnQgaW9uLWl0ZW0tZGl2aWRlciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCAuc2hvd2Nhc2Utc2VjdGlvbiB7XG4gIG1hcmdpbjogMjBweCAyMHB4IDYwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBwcmUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJhY2tncm91bmQ6ICNDQ0M7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBjb2RlIHtcbiAgY29sb3I6ICNGOTI2NzI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi50YXNrcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNDAnIGhlaWdodD0nNDAnIHZpZXdCb3g9JzAgMCA0MCA0MCclM0UlM0NnIGZpbGwtcnVsZT0nZXZlbm9kZCclM0UlM0NnIGZpbGw9JyUyM2ZmZmZmZicgZmlsbC1vcGFjaXR5PScwLjM4JyUzRSUzQ3BhdGggZD0nTTAgMzguNTlsMi44My0yLjgzIDEuNDEgMS40MUwxLjQxIDQwSDB2LTEuNDF6TTAgMS40bDIuODMgMi44MyAxLjQxLTEuNDFMMS40MSAwSDB2MS40MXpNMzguNTkgNDBsLTIuODMtMi44MyAxLjQxLTEuNDFMNDAgMzguNTlWNDBoLTEuNDF6TTQwIDEuNDFsLTIuODMgMi44My0xLjQxLTEuNDFMMzguNTkgMEg0MHYxLjQxek0yMCAxOC42bDIuODMtMi44MyAxLjQxIDEuNDFMMjEuNDEgMjBsMi44MyAyLjgzLTEuNDEgMS40MUwyMCAyMS40MWwtMi44MyAyLjgzLTEuNDEtMS40MUwxOC41OSAyMGwtMi44My0yLjgzIDEuNDEtMS40MUwyMCAxOC41OXonLyUzRSUzQy9nJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXCIpO1xuICBwYWRkaW5nOiAyMHB4O1xufSIsIkBpbXBvcnQgXCIuLi9hcHAtc2hlbGwucGFnZVwiO1xuXG4udGFza3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzQwJyBoZWlnaHQ9JzQwJyB2aWV3Qm94PScwIDAgNDAgNDAnJTNFJTNDZyBmaWxsLXJ1bGU9J2V2ZW5vZGQnJTNFJTNDZyBmaWxsPSclMjNmZmZmZmYnIGZpbGwtb3BhY2l0eT0nMC4zOCclM0UlM0NwYXRoIGQ9J00wIDM4LjU5bDIuODMtMi44MyAxLjQxIDEuNDFMMS40MSA0MEgwdi0xLjQxek0wIDEuNGwyLjgzIDIuODMgMS40MS0xLjQxTDEuNDEgMEgwdjEuNDF6TTM4LjU5IDQwbC0yLjgzLTIuODMgMS40MS0xLjQxTDQwIDM4LjU5VjQwaC0xLjQxek00MCAxLjQxbC0yLjgzIDIuODMtMS40MS0xLjQxTDM4LjU5IDBINDB2MS40MXpNMjAgMTguNmwyLjgzLTIuODMgMS40MSAxLjQxTDIxLjQxIDIwbDIuODMgMi44My0xLjQxIDEuNDFMMjAgMjEuNDFsLTIuODMgMi44My0xLjQxLTEuNDFMMTguNTkgMjBsLTIuODMtMi44MyAxLjQxLTEuNDFMMjAgMTguNTl6Jy8lM0UlM0MvZyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVwiKTtcbiAgcGFkZGluZzogMjBweDtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hvd2Nhc2UvYXBwLXNoZWxsL2FwcC1zaGVsbC5wYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi9UaXRhbiUyMEVzdGF0ZXMvc3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvZGF0YS1zdG9yZS1jb21iaW5lZC9kYXRhLXN0b3JlLWNvbWJpbmVkLnBhZ2Uuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hvd2Nhc2UvYXBwLXNoZWxsL2RhdGEtc3RvcmUtY29tYmluZWQvZGF0YS1zdG9yZS1jb21iaW5lZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBQTtBQ0NGO0FEQ0U7RUFDRSx3Q0FBQTtFQUNBLGtDQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURFRTtFQUNFLHNCQUFBO0FDQUo7QURHRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNESjtBRElFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDRko7O0FDbkJBO0VBQ0UseUJBQUE7RUFDQSx3aUJBQUE7RUFDQSxhQUFBO0FEc0JGO0FDQ0Esd25IQUF3bkgiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuXG4gIGlvbi1pdGVtLWRpdmlkZXIge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgfVxuXG4gIC5zaG93Y2FzZS1zZWN0aW9uIHtcbiAgICBtYXJnaW46IDIwcHggMjBweCA2MHB4O1xuICB9XG5cbiAgcHJlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgYmFja2dyb3VuZDogI0NDQztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG5cbiAgY29kZSB7XG4gICAgY29sb3I6ICNGOTI2NzI7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxufVxuIiwiLnNob3djYXNlLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcbn1cbi5zaG93Y2FzZS1jb250ZW50IGlvbi1pdGVtLWRpdmlkZXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuLnNob3djYXNlLWNvbnRlbnQgLnNob3djYXNlLXNlY3Rpb24ge1xuICBtYXJnaW46IDIwcHggMjBweCA2MHB4O1xufVxuLnNob3djYXNlLWNvbnRlbnQgcHJlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiAjQ0NDO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLnNob3djYXNlLWNvbnRlbnQgY29kZSB7XG4gIGNvbG9yOiAjRjkyNjcyO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4udGFza3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzQwJyBoZWlnaHQ9JzQwJyB2aWV3Qm94PScwIDAgNDAgNDAnJTNFJTNDZyBmaWxsLXJ1bGU9J2V2ZW5vZGQnJTNFJTNDZyBmaWxsPSclMjNmZmZmZmYnIGZpbGwtb3BhY2l0eT0nMC4zOCclM0UlM0NwYXRoIGQ9J00wIDM4LjU5bDIuODMtMi44MyAxLjQxIDEuNDFMMS40MSA0MEgwdi0xLjQxek0wIDEuNGwyLjgzIDIuODMgMS40MS0xLjQxTDEuNDEgMEgwdjEuNDF6TTM4LjU5IDQwbC0yLjgzLTIuODMgMS40MS0xLjQxTDQwIDM4LjU5VjQwaC0xLjQxek00MCAxLjQxbC0yLjgzIDIuODMtMS40MS0xLjQxTDM4LjU5IDBINDB2MS40MXpNMjAgMTguNmwyLjgzLTIuODMgMS40MSAxLjQxTDIxLjQxIDIwbDIuODMgMi44My0xLjQxIDEuNDFMMjAgMjEuNDFsLTIuODMgMi44My0xLjQxLTEuNDFMMTguNTkgMjBsLTIuODMtMi44MyAxLjQxLTEuNDFMMjAgMTguNTl6Jy8lM0UlM0MvZyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVwiKTtcbiAgcGFkZGluZzogMjBweDtcbn0iLCJAaW1wb3J0IFwiLi4vYXBwLXNoZWxsLnBhZ2VcIjtcblxuLnRhc2tzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0MCcgaGVpZ2h0PSc0MCcgdmlld0JveD0nMCAwIDQwIDQwJyUzRSUzQ2cgZmlsbC1ydWxlPSdldmVub2RkJyUzRSUzQ2cgZmlsbD0nJTIzZmZmZmZmJyBmaWxsLW9wYWNpdHk9JzAuMzgnJTNFJTNDcGF0aCBkPSdNMCAzOC41OWwyLjgzLTIuODMgMS40MSAxLjQxTDEuNDEgNDBIMHYtMS40MXpNMCAxLjRsMi44MyAyLjgzIDEuNDEtMS40MUwxLjQxIDBIMHYxLjQxek0zOC41OSA0MGwtMi44My0yLjgzIDEuNDEtMS40MUw0MCAzOC41OVY0MGgtMS40MXpNNDAgMS40MWwtMi44MyAyLjgzLTEuNDEtMS40MUwzOC41OSAwSDQwdjEuNDF6TTIwIDE4LjZsMi44My0yLjgzIDEuNDEgMS40MUwyMS40MSAyMGwyLjgzIDIuODMtMS40MSAxLjQxTDIwIDIxLjQxbC0yLjgzIDIuODMtMS40MS0xLjQxTDE4LjU5IDIwbC0yLjgzLTIuODMgMS40MS0xLjQxTDIwIDE4LjU5eicvJTNFJTNDL2clM0UlM0MvZyUzRSUzQy9zdmclM0VcIik7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 59158:
/*!**************************************************************************************!*\
  !*** ./src/app/showcase/app-shell/data-store-dependant/data-store-dependant.page.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataStoreDependantPage": () => (/* binding */ DataStoreDependantPage)
/* harmony export */ });
/* harmony import */ var _showcase_shell_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../showcase-shell.model */ 29379);
/* harmony import */ var _showcase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../showcase.service */ 82909);
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shell/data-store */ 29760);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shell/text-shell/text-shell.component */ 94840);









function DataStoreDependantPage_ion_item_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-item")(1, "ion-label")(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "app-text-shell", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "app-text-shell", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const comment_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", comment_r1 == null ? null : comment_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", comment_r1 == null ? null : comment_r1.body);
  }
}
const _c0 = function () {
  return ["/showcase/app-shell/data-store-multiple"];
};
const _c1 = function () {
  return ["/showcase/app-shell/data-store-combined"];
};
class DataStoreDependantPage {
  constructor(showcaseService) {
    this.showcaseService = showcaseService;
  }
  ngOnInit() {
    const postDataSource = this.showcaseService.getDependantDataSourcePost();
    const postShellModel = new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_0__.ShowcasePostModel();
    this.postDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_2__.DataStore(postShellModel);
    this.postDataStore.load(postDataSource);
    this.postDataStore.state.subscribe(data => {
      this.post = data;
    });
    const commentsShellModel = [new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_0__.ShowcaseCommentModel(), new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_0__.ShowcaseCommentModel(), new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_0__.ShowcaseCommentModel()];
    const commentsDataSource = this.showcaseService.getDependantDataSourcePostComments(this.postDataStore.state);
    this.commentsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_2__.DataStore(commentsShellModel);
    // Trigger the loading mechanism (with shell) in the dataStore
    this.commentsDataStore.load(commentsDataSource);
    this.commentsDataStore.state.subscribe(data => {
      this.comments = data;
    });
  }
  static #_ = this.ɵfac = function DataStoreDependantPage_Factory(t) {
    return new (t || DataStoreDependantPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_showcase_service__WEBPACK_IMPORTED_MODULE_1__.ShowcaseService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: DataStoreDependantPage,
    selectors: [["app-data-store-dependant"]],
    decls: 35,
    vars: 13,
    consts: [["color", "primary"], ["slot", "start"], ["defaultHref", "showcase/app-shell"], [1, "showcase-content"], [1, "showcase-section"], [3, "routerLink"], [1, "post"], ["animation", "bouncing", 2, "--text-shell-line-color", "#FFF", 3, "data"], ["animation", "bouncing", "lines", "3", 2, "--text-shell-line-color", "#fffdfd", 3, "data"], ["lines", "full", 2, "--background", "transparent"], [4, "ngFor", "ngForOf"], ["animation", "bouncing", 2, "--text-shell-line-height", "16px", 3, "data"], ["animation", "bouncing", 3, "data"]],
    template: function DataStoreDependantPage_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " DataStore - Dependant Data Sources ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ion-content", 3)(7, "section", 4)(8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " This example kinda mixes the two previous examples (");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "multiple data stores");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "one depending on the other");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, " The uses cases in which to use this approach would be if you have different data sources that depend on each other, but you want the different sections of the view to 're-load' independently one from the other. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, " This contrasts the use case of the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Combined Data Source");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, " where you transform multiple data sources into one, causing the hole view to be 're-loaded' as it's binded to just one combined Observable. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, " A good example can be a post and its comments. The comments depend on the post but you want them to 're-load' independently from the post. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 6)(26, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "app-text-shell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "app-text-shell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "ion-list", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, DataStoreDependantPage_ion_item_33_Template, 6, 2, "ion-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](34, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](11, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](12, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx.post == null ? null : ctx.post.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx.post == null ? null : ctx.post.body);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](34, 6, ctx.comments, 0, 5));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonBackButtonDelegate, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHrefDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_3__.TextShellComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.SlicePipe],
    styles: [".showcase-content[_ngcontent-%COMP%] {\n  --background: var(--app-background);\n}\n.showcase-content[_ngcontent-%COMP%]   ion-item-divider[_ngcontent-%COMP%] {\n  --background: var(--ion-color-secondary);\n  --color: var(--ion-color-lightest);\n  text-transform: uppercase;\n  font-weight: 500;\n  letter-spacing: 1px;\n}\n.showcase-content[_ngcontent-%COMP%]   .showcase-section[_ngcontent-%COMP%] {\n  margin: 20px 20px 60px;\n}\n.showcase-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  font-size: 14px;\n  background: #CCC;\n  padding: 10px;\n}\n.showcase-content[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: #F92672;\n  font-weight: 500;\n}\n\n.post[_ngcontent-%COMP%] {\n  background-color: #ececec;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.38'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC1zaGVsbC5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9UaXRhbiUyMEVzdGF0ZXMvc3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvZGF0YS1zdG9yZS1kZXBlbmRhbnQvZGF0YS1zdG9yZS1kZXBlbmRhbnQucGFnZS5zY3NzIiwiZGF0YS1zdG9yZS1kZXBlbmRhbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUNBQUE7QUNDRjtBRENFO0VBQ0Usd0NBQUE7RUFDQSxrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKO0FERUU7RUFDRSxzQkFBQTtBQ0FKO0FER0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDREo7QURJRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ0ZKOztBQ25CQTtFQUNFLHlCQUFBO0VBQ0Esd2lCQUFBO0VBQ0EsYUFBQTtBRHNCRiIsImZpbGUiOiJkYXRhLXN0b3JlLWRlcGVuZGFudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuXG4gIGlvbi1pdGVtLWRpdmlkZXIge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgfVxuXG4gIC5zaG93Y2FzZS1zZWN0aW9uIHtcbiAgICBtYXJnaW46IDIwcHggMjBweCA2MHB4O1xuICB9XG5cbiAgcHJlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgYmFja2dyb3VuZDogI0NDQztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG5cbiAgY29kZSB7XG4gICAgY29sb3I6ICNGOTI2NzI7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxufVxuIiwiLnNob3djYXNlLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcbn1cbi5zaG93Y2FzZS1jb250ZW50IGlvbi1pdGVtLWRpdmlkZXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuLnNob3djYXNlLWNvbnRlbnQgLnNob3djYXNlLXNlY3Rpb24ge1xuICBtYXJnaW46IDIwcHggMjBweCA2MHB4O1xufVxuLnNob3djYXNlLWNvbnRlbnQgcHJlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiAjQ0NDO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLnNob3djYXNlLWNvbnRlbnQgY29kZSB7XG4gIGNvbG9yOiAjRjkyNjcyO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ucG9zdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNDAnIGhlaWdodD0nNDAnIHZpZXdCb3g9JzAgMCA0MCA0MCclM0UlM0NnIGZpbGwtcnVsZT0nZXZlbm9kZCclM0UlM0NnIGZpbGw9JyUyM2ZmZmZmZicgZmlsbC1vcGFjaXR5PScwLjM4JyUzRSUzQ3BhdGggZD0nTTAgMzguNTlsMi44My0yLjgzIDEuNDEgMS40MUwxLjQxIDQwSDB2LTEuNDF6TTAgMS40bDIuODMgMi44MyAxLjQxLTEuNDFMMS40MSAwSDB2MS40MXpNMzguNTkgNDBsLTIuODMtMi44MyAxLjQxLTEuNDFMNDAgMzguNTlWNDBoLTEuNDF6TTQwIDEuNDFsLTIuODMgMi44My0xLjQxLTEuNDFMMzguNTkgMEg0MHYxLjQxek0yMCAxOC42bDIuODMtMi44MyAxLjQxIDEuNDFMMjEuNDEgMjBsMi44MyAyLjgzLTEuNDEgMS40MUwyMCAyMS40MWwtMi44MyAyLjgzLTEuNDEtMS40MUwxOC41OSAyMGwtMi44My0yLjgzIDEuNDEtMS40MUwyMCAxOC41OXonLyUzRSUzQy9nJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXCIpO1xuICBwYWRkaW5nOiAyMHB4O1xufSIsIkBpbXBvcnQgXCIuLi9hcHAtc2hlbGwucGFnZVwiO1xuXG4ucG9zdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNDAnIGhlaWdodD0nNDAnIHZpZXdCb3g9JzAgMCA0MCA0MCclM0UlM0NnIGZpbGwtcnVsZT0nZXZlbm9kZCclM0UlM0NnIGZpbGw9JyUyM2ZmZmZmZicgZmlsbC1vcGFjaXR5PScwLjM4JyUzRSUzQ3BhdGggZD0nTTAgMzguNTlsMi44My0yLjgzIDEuNDEgMS40MUwxLjQxIDQwSDB2LTEuNDF6TTAgMS40bDIuODMgMi44MyAxLjQxLTEuNDFMMS40MSAwSDB2MS40MXpNMzguNTkgNDBsLTIuODMtMi44MyAxLjQxLTEuNDFMNDAgMzguNTlWNDBoLTEuNDF6TTQwIDEuNDFsLTIuODMgMi44My0xLjQxLTEuNDFMMzguNTkgMEg0MHYxLjQxek0yMCAxOC42bDIuODMtMi44MyAxLjQxIDEuNDFMMjEuNDEgMjBsMi44MyAyLjgzLTEuNDEgMS40MUwyMCAyMS40MWwtMi44MyAyLjgzLTEuNDEtMS40MUwxOC41OSAyMGwtMi44My0yLjgzIDEuNDEtMS40MUwyMCAxOC41OXonLyUzRSUzQy9nJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXCIpO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hvd2Nhc2UvYXBwLXNoZWxsL2FwcC1zaGVsbC5wYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi9UaXRhbiUyMEVzdGF0ZXMvc3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvZGF0YS1zdG9yZS1kZXBlbmRhbnQvZGF0YS1zdG9yZS1kZXBlbmRhbnQucGFnZS5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvZGF0YS1zdG9yZS1kZXBlbmRhbnQvZGF0YS1zdG9yZS1kZXBlbmRhbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUNBQUE7QUNDRjtBRENFO0VBQ0Usd0NBQUE7RUFDQSxrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKO0FERUU7RUFDRSxzQkFBQTtBQ0FKO0FER0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDREo7QURJRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ0ZKOztBQ25CQTtFQUNFLHlCQUFBO0VBQ0Esd2lCQUFBO0VBQ0EsYUFBQTtBRHNCRjtBQ0NBLHduSEFBd25IIiwic291cmNlc0NvbnRlbnQiOlsiLnNob3djYXNlLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcblxuICBpb24taXRlbS1kaXZpZGVyIHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIH1cblxuICAuc2hvd2Nhc2Utc2VjdGlvbiB7XG4gICAgbWFyZ2luOiAyMHB4IDIwcHggNjBweDtcbiAgfVxuXG4gIHByZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGJhY2tncm91bmQ6ICNDQ0M7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuXG4gIGNvZGUge1xuICAgIGNvbG9yOiAjRjkyNjcyO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbn1cbiIsIi5zaG93Y2FzZS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG59XG4uc2hvd2Nhc2UtY29udGVudCBpb24taXRlbS1kaXZpZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cbi5zaG93Y2FzZS1jb250ZW50IC5zaG93Y2FzZS1zZWN0aW9uIHtcbiAgbWFyZ2luOiAyMHB4IDIwcHggNjBweDtcbn1cbi5zaG93Y2FzZS1jb250ZW50IHByZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYmFja2dyb3VuZDogI0NDQztcbiAgcGFkZGluZzogMTBweDtcbn1cbi5zaG93Y2FzZS1jb250ZW50IGNvZGUge1xuICBjb2xvcjogI0Y5MjY3MjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnBvc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzQwJyBoZWlnaHQ9JzQwJyB2aWV3Qm94PScwIDAgNDAgNDAnJTNFJTNDZyBmaWxsLXJ1bGU9J2V2ZW5vZGQnJTNFJTNDZyBmaWxsPSclMjNmZmZmZmYnIGZpbGwtb3BhY2l0eT0nMC4zOCclM0UlM0NwYXRoIGQ9J00wIDM4LjU5bDIuODMtMi44MyAxLjQxIDEuNDFMMS40MSA0MEgwdi0xLjQxek0wIDEuNGwyLjgzIDIuODMgMS40MS0xLjQxTDEuNDEgMEgwdjEuNDF6TTM4LjU5IDQwbC0yLjgzLTIuODMgMS40MS0xLjQxTDQwIDM4LjU5VjQwaC0xLjQxek00MCAxLjQxbC0yLjgzIDIuODMtMS40MS0xLjQxTDM4LjU5IDBINDB2MS40MXpNMjAgMTguNmwyLjgzLTIuODMgMS40MSAxLjQxTDIxLjQxIDIwbDIuODMgMi44My0xLjQxIDEuNDFMMjAgMjEuNDFsLTIuODMgMi44My0xLjQxLTEuNDFMMTguNTkgMjBsLTIuODMtMi44MyAxLjQxLTEuNDFMMjAgMTguNTl6Jy8lM0UlM0MvZyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVwiKTtcbiAgcGFkZGluZzogMjBweDtcbn0iLCJAaW1wb3J0IFwiLi4vYXBwLXNoZWxsLnBhZ2VcIjtcblxuLnBvc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzQwJyBoZWlnaHQ9JzQwJyB2aWV3Qm94PScwIDAgNDAgNDAnJTNFJTNDZyBmaWxsLXJ1bGU9J2V2ZW5vZGQnJTNFJTNDZyBmaWxsPSclMjNmZmZmZmYnIGZpbGwtb3BhY2l0eT0nMC4zOCclM0UlM0NwYXRoIGQ9J00wIDM4LjU5bDIuODMtMi44MyAxLjQxIDEuNDFMMS40MSA0MEgwdi0xLjQxek0wIDEuNGwyLjgzIDIuODMgMS40MS0xLjQxTDEuNDEgMEgwdjEuNDF6TTM4LjU5IDQwbC0yLjgzLTIuODMgMS40MS0xLjQxTDQwIDM4LjU5VjQwaC0xLjQxek00MCAxLjQxbC0yLjgzIDIuODMtMS40MS0xLjQxTDM4LjU5IDBINDB2MS40MXpNMjAgMTguNmwyLjgzLTIuODMgMS40MSAxLjQxTDIxLjQxIDIwbDIuODMgMi44My0xLjQxIDEuNDFMMjAgMjEuNDFsLTIuODMgMi44My0xLjQxLTEuNDFMMTguNTkgMjBsLTIuODMtMi44MyAxLjQxLTEuNDFMMjAgMTguNTl6Jy8lM0UlM0MvZyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVwiKTtcbiAgcGFkZGluZzogMjBweDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 45407:
/*!****************************************************************************!*\
  !*** ./src/app/showcase/app-shell/data-store-list/data-store-list.page.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataStoreListPage": () => (/* binding */ DataStoreListPage)
/* harmony export */ });
/* harmony import */ var _showcase_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../showcase.service */ 82909);
/* harmony import */ var _showcase_shell_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../showcase-shell.model */ 29379);
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shell/data-store */ 29760);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shell/aspect-ratio/aspect-ratio.component */ 89330);
/* harmony import */ var _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shell/image-shell/image-shell.component */ 71408);
/* harmony import */ var _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shell/text-shell/text-shell.component */ 94840);










const _c0 = function () {
  return {
    w: 1,
    h: 1
  };
};
function DataStoreListPage_ion_item_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-item")(1, "ion-thumbnail", 1)(2, "app-aspect-ratio", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "app-image-shell", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ion-label")(5, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "app-text-shell", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "h3", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "app-text-shell", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", user_r1 == null ? null : user_r1.avatar)("alt", "Sample Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", user_r1 == null ? null : user_r1.first_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", user_r1 == null ? null : user_r1.last_name);
  }
}
class DataStoreListPage {
  constructor(showcaseService) {
    this.showcaseService = showcaseService;
  }
  get isShell() {
    return this.data && this.data.isShell ? true : false;
  }
  ngOnInit() {
    const dataSource = this.showcaseService.getListDataSource();
    // Initialize the model specifying that it is a shell model
    const shellModel = [new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_1__.ShowcaseShellUserModel(), new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_1__.ShowcaseShellUserModel(), new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_1__.ShowcaseShellUserModel()];
    this.dataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_2__.DataStore(shellModel);
    // Trigger the loading mechanism (with shell) in the dataStore
    this.dataStore.load(dataSource);
    this.dataStore.state.subscribe(data => {
      this.data = data;
    });
  }
  static #_ = this.ɵfac = function DataStoreListPage_Factory(t) {
    return new (t || DataStoreListPage)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_showcase_service__WEBPACK_IMPORTED_MODULE_0__.ShowcaseService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: DataStoreListPage,
    selectors: [["app-data-store-list"]],
    hostVars: 2,
    hostBindings: function DataStoreListPage_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("is-shell", ctx.isShell);
      }
    },
    decls: 43,
    vars: 1,
    consts: [["color", "primary"], ["slot", "start"], ["defaultHref", "showcase/app-shell"], [1, "showcase-content"], [1, "showcase-section"], ["lines", "full", 1, "users-list"], [4, "ngFor", "ngForOf"], ["href", "https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types", "target", "_blank"], [3, "ratio"], ["animation", "spinner", 3, "src", "alt"], [1, "user-name"], ["animation", "bouncing", 3, "data"], [1, "user-lastname"]],
    template: function DataStoreListPage_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " DataStore - List example ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "ion-content", 3)(7, "section", 4)(8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, " When you fetch data from a remote API, sometimes you request a list of items. If that\u2019s the case you would end up having an ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Observable");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, " of type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Observable<Array<YourModel>>");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, " The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "DataStore");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, " class works by assigning a shell property to any object. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "const myObj = new YourModel();\nObject.assign(myObj, {isShell: false});\n\nObject.assign([1, 2, 3], {isShell: false});\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, " In Javascript, everything is an object (including Arrays). That\u2019s why you can assign properties to Arrays independently of their values. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "ion-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, DataStoreListPage_ion_item_26_Template, 9, 6, "ion-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, " In this example we keep track of the current state of the data stream in a local ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "data");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, " property. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, " Note how we define its type using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "Typescript intersection typing");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, " like this ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "data: Array<YourModel> & ShellModel;");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, " to indicate it's an array that has a shell model appended (by the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "DataStore");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, "). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.data);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonThumbnail, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonBackButtonDelegate, _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_3__.AspectRatioComponent, _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_4__.ImageShellComponent, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_5__.TextShellComponent],
    styles: [".showcase-content[_ngcontent-%COMP%] {\n  --background: var(--app-background);\n}\n.showcase-content[_ngcontent-%COMP%]   ion-item-divider[_ngcontent-%COMP%] {\n  --background: var(--ion-color-secondary);\n  --color: var(--ion-color-lightest);\n  text-transform: uppercase;\n  font-weight: 500;\n  letter-spacing: 1px;\n}\n.showcase-content[_ngcontent-%COMP%]   .showcase-section[_ngcontent-%COMP%] {\n  margin: 20px 20px 60px;\n}\n.showcase-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  font-size: 14px;\n  background: #CCC;\n  padding: 10px;\n}\n.showcase-content[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: #F92672;\n  font-weight: 500;\n}\n\n.users-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --padding-start: 0px;\n}\n\n.user-name[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-height: 17px;\n  max-width: 120px;\n}\n.user-name[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: inherit;\n}\n\n.user-lastname[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-height: 14px;\n  max-width: 120px;\n}\n.user-lastname[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC1zaGVsbC5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9UaXRhbiUyMEVzdGF0ZXMvc3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvZGF0YS1zdG9yZS1saXN0L2RhdGEtc3RvcmUtbGlzdC5wYWdlLnNjc3MiLCJkYXRhLXN0b3JlLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUNBQUE7QUNDRjtBRENFO0VBQ0Usd0NBQUE7RUFDQSxrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKO0FERUU7RUFDRSxzQkFBQTtBQ0FKO0FER0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDREo7QURJRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ0ZKOztBQ2xCRTtFQUNFLG9CQUFBO0FEcUJKOztBQ2pCQTtFQUNFLDhCQUFBO0VBQ0EsZ0JBQUE7QURvQkY7QUNuQkU7RUFDRSxrQkFBQTtBRHFCSjs7QUNqQkE7RUFDRSw4QkFBQTtFQUNBLGdCQUFBO0FEb0JGO0FDbkJFO0VBQ0Usa0JBQUE7QURxQkoiLCJmaWxlIjoiZGF0YS1zdG9yZS1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG93Y2FzZS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG5cbiAgaW9uLWl0ZW0tZGl2aWRlciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB9XG5cbiAgLnNob3djYXNlLXNlY3Rpb24ge1xuICAgIG1hcmdpbjogMjBweCAyMHB4IDYwcHg7XG4gIH1cblxuICBwcmUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBiYWNrZ3JvdW5kOiAjQ0NDO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cblxuICBjb2RlIHtcbiAgICBjb2xvcjogI0Y5MjY3MjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG59XG4iLCIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xufVxuLnNob3djYXNlLWNvbnRlbnQgaW9uLWl0ZW0tZGl2aWRlciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCAuc2hvd2Nhc2Utc2VjdGlvbiB7XG4gIG1hcmdpbjogMjBweCAyMHB4IDYwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBwcmUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJhY2tncm91bmQ6ICNDQ0M7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBjb2RlIHtcbiAgY29sb3I6ICNGOTI2NzI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi51c2Vycy1saXN0IGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG59XG5cbi51c2VyLW5hbWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTdweDtcbiAgbWF4LXdpZHRoOiAxMjBweDtcbn1cbi51c2VyLW5hbWUgPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1heC13aWR0aDogaW5oZXJpdDtcbn1cblxuLnVzZXItbGFzdG5hbWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWF4LXdpZHRoOiAxMjBweDtcbn1cbi51c2VyLWxhc3RuYW1lID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtYXgtd2lkdGg6IGluaGVyaXQ7XG59IiwiQGltcG9ydCBcIi4uL2FwcC1zaGVsbC5wYWdlXCI7XG5cbi51c2Vycy1saXN0IHtcbiAgaW9uLWl0ZW0ge1xuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICB9XG59XG5cbi51c2VyLW5hbWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTdweDtcbiAgbWF4LXdpZHRoOiAxMjBweDtcbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICB9XG59XG5cbi51c2VyLWxhc3RuYW1lID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1heC13aWR0aDogMTIwcHg7XG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgfVxufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hvd2Nhc2UvYXBwLXNoZWxsL2FwcC1zaGVsbC5wYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi9UaXRhbiUyMEVzdGF0ZXMvc3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvZGF0YS1zdG9yZS1saXN0L2RhdGEtc3RvcmUtbGlzdC5wYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3Nob3djYXNlL2FwcC1zaGVsbC9kYXRhLXN0b3JlLWxpc3QvZGF0YS1zdG9yZS1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1DQUFBO0FDQ0Y7QURDRTtFQUNFLHdDQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBREVFO0VBQ0Usc0JBQUE7QUNBSjtBREdFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0RKO0FESUU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNGSjs7QUNsQkU7RUFDRSxvQkFBQTtBRHFCSjs7QUNqQkE7RUFDRSw4QkFBQTtFQUNBLGdCQUFBO0FEb0JGO0FDbkJFO0VBQ0Usa0JBQUE7QURxQko7O0FDakJBO0VBQ0UsOEJBQUE7RUFDQSxnQkFBQTtBRG9CRjtBQ25CRTtFQUNFLGtCQUFBO0FEcUJKO0FDQ0Esd2pHQUF3akciLCJzb3VyY2VzQ29udGVudCI6WyIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuXG4gIGlvbi1pdGVtLWRpdmlkZXIge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgfVxuXG4gIC5zaG93Y2FzZS1zZWN0aW9uIHtcbiAgICBtYXJnaW46IDIwcHggMjBweCA2MHB4O1xuICB9XG5cbiAgcHJlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgYmFja2dyb3VuZDogI0NDQztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG5cbiAgY29kZSB7XG4gICAgY29sb3I6ICNGOTI2NzI7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxufVxuIiwiLnNob3djYXNlLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcbn1cbi5zaG93Y2FzZS1jb250ZW50IGlvbi1pdGVtLWRpdmlkZXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuLnNob3djYXNlLWNvbnRlbnQgLnNob3djYXNlLXNlY3Rpb24ge1xuICBtYXJnaW46IDIwcHggMjBweCA2MHB4O1xufVxuLnNob3djYXNlLWNvbnRlbnQgcHJlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiAjQ0NDO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLnNob3djYXNlLWNvbnRlbnQgY29kZSB7XG4gIGNvbG9yOiAjRjkyNjcyO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4udXNlcnMtbGlzdCBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xufVxuXG4udXNlci1uYW1lID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE3cHg7XG4gIG1heC13aWR0aDogMTIwcHg7XG59XG4udXNlci1uYW1lID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtYXgtd2lkdGg6IGluaGVyaXQ7XG59XG5cbi51c2VyLWxhc3RuYW1lID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1heC13aWR0aDogMTIwcHg7XG59XG4udXNlci1sYXN0bmFtZSA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWF4LXdpZHRoOiBpbmhlcml0O1xufSIsIkBpbXBvcnQgXCIuLi9hcHAtc2hlbGwucGFnZVwiO1xuXG4udXNlcnMtbGlzdCB7XG4gIGlvbi1pdGVtIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgfVxufVxuXG4udXNlci1uYW1lID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE3cHg7XG4gIG1heC13aWR0aDogMTIwcHg7XG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgfVxufVxuXG4udXNlci1sYXN0bmFtZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtYXgtd2lkdGg6IDEyMHB4O1xuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 50713:
/*!************************************************************************************!*\
  !*** ./src/app/showcase/app-shell/data-store-multiple/data-store-multiple.page.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataStoreMultiplePage": () => (/* binding */ DataStoreMultiplePage)
/* harmony export */ });
/* harmony import */ var _showcase_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../showcase.service */ 82909);
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shell/data-store */ 29760);
/* harmony import */ var _fashion_listing_fashion_listing_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../fashion/listing/fashion-listing.model */ 11661);
/* harmony import */ var _travel_listing_travel_listing_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../travel/listing/travel-listing.model */ 81805);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shell/aspect-ratio/aspect-ratio.component */ 89330);
/* harmony import */ var _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shell/image-shell/image-shell.component */ 71408);
/* harmony import */ var _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shell/text-shell/text-shell.component */ 94840);












const _c0 = function () {
  return {
    w: 1,
    h: 1
  };
};
function DataStoreMultiplePage_ion_item_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-item")(1, "ion-thumbnail", 1)(2, "app-aspect-ratio", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "app-image-shell", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "ion-label")(5, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "app-text-shell", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "app-text-shell", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "app-text-shell", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](6, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", item_r2 == null ? null : item_r2.image)("alt", "Sample Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("data", item_r2 == null ? null : item_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("data", item_r2 == null ? null : item_r2.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("data", item_r2 == null ? null : item_r2.address);
  }
}
function DataStoreMultiplePage_ion_item_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-item")(1, "ion-thumbnail", 1)(2, "app-aspect-ratio", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "app-image-shell", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "ion-label")(5, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "app-text-shell", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "app-text-shell", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", item_r3 == null ? null : item_r3.image)("alt", "Sample Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("data", item_r3 == null ? null : item_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("data", (item_r3 == null ? null : item_r3.salePrice) ? "$".concat("", item_r3.salePrice) : null);
  }
}
const _c1 = function () {
  return ["/showcase/app-shell/data-store-combined"];
};
class DataStoreMultiplePage {
  constructor(showcaseService) {
    this.showcaseService = showcaseService;
  }
  ngOnInit() {
    const dataSourceA = this.showcaseService.getMultipleDataSourceA();
    const dataSourceB = this.showcaseService.getMultipleDataSourceB();
    const shellModelA = new _travel_listing_travel_listing_model__WEBPACK_IMPORTED_MODULE_3__.TravelListingModel();
    this.dataStoreA = new _shell_data_store__WEBPACK_IMPORTED_MODULE_1__.DataStore(shellModelA);
    this.dataStoreA.load(dataSourceA);
    this.dataStoreA.state.subscribe(data => {
      this.dataA = data;
    });
    const shellModelB = new _fashion_listing_fashion_listing_model__WEBPACK_IMPORTED_MODULE_2__.FashionListingModel();
    this.dataStoreB = new _shell_data_store__WEBPACK_IMPORTED_MODULE_1__.DataStore(shellModelB);
    this.dataStoreB.load(dataSourceB);
    this.dataStoreB.state.subscribe(data => {
      this.dataB = data;
    });
  }
  static #_ = this.ɵfac = function DataStoreMultiplePage_Factory(t) {
    return new (t || DataStoreMultiplePage)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_showcase_service__WEBPACK_IMPORTED_MODULE_0__.ShowcaseService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: DataStoreMultiplePage,
    selectors: [["app-data-store-multiple"]],
    decls: 33,
    vars: 12,
    consts: [["color", "primary"], ["slot", "start"], ["defaultHref", "showcase/app-shell"], [1, "showcase-content"], [1, "showcase-section"], [3, "routerLink"], ["lines", "full"], [4, "ngFor", "ngForOf"], [3, "ratio"], ["animation", "spinner", 3, "src", "alt"], [1, "item-name"], ["animation", "gradient", 3, "data"], ["animation", "gradient", 2, "--text-shell-line-height", "14px", 3, "data"], [1, "item-price"]],
    template: function DataStoreMultiplePage_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, " DataStore - Multiple DataStores example ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "ion-content", 3)(7, "section", 4)(8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, " Sometimes your view displays different types of data, each of them with a different model and data source. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, " If this is your use case, then you can use multiple data stores to fetch each data stream. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "p")(13, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Note:");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, " This use case is different from the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Combined Data Sources");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, " because in this case you have two data streams that will change independently one from the other updating different parts of the view without causing a full view 're-loading'. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Data Source A");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "What to do nearby");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "ion-list", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, DataStoreMultiplePage_ion_item_24_Template, 11, 7, "ion-item", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](25, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "Data Source B");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "Shop what's trending");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "ion-list", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](31, DataStoreMultiplePage_ion_item_31_Template, 9, 6, "ion-item", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](32, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](11, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](25, 3, ctx.dataA == null ? null : ctx.dataA.items, 0, 3));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](32, 7, ctx.dataB == null ? null : ctx.dataB.items, 0, 5));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonThumbnail, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonBackButtonDelegate, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHrefDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_4__.AspectRatioComponent, _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_5__.ImageShellComponent, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_6__.TextShellComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.SlicePipe],
    styles: [".showcase-content[_ngcontent-%COMP%] {\n  --background: var(--app-background);\n}\n.showcase-content[_ngcontent-%COMP%]   ion-item-divider[_ngcontent-%COMP%] {\n  --background: var(--ion-color-secondary);\n  --color: var(--ion-color-lightest);\n  text-transform: uppercase;\n  font-weight: 500;\n  letter-spacing: 1px;\n}\n.showcase-content[_ngcontent-%COMP%]   .showcase-section[_ngcontent-%COMP%] {\n  margin: 20px 20px 60px;\n}\n.showcase-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  font-size: 14px;\n  background: #CCC;\n  padding: 10px;\n}\n.showcase-content[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: #F92672;\n  font-weight: 500;\n}\n\n.item-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.item-name[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-height: 16px;\n}\n\n.item-price[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-height: 14px;\n  max-width: 80px;\n}\n.item-price[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC1zaGVsbC5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9UaXRhbiUyMEVzdGF0ZXMvc3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvZGF0YS1zdG9yZS1tdWx0aXBsZS9kYXRhLXN0b3JlLW11bHRpcGxlLnBhZ2Uuc2NzcyIsImRhdGEtc3RvcmUtbXVsdGlwbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUNBQUE7QUNDRjtBRENFO0VBQ0Usd0NBQUE7RUFDQSxrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKO0FERUU7RUFDRSxzQkFBQTtBQ0FKO0FER0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDREo7QURJRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ0ZKOztBQ25CQTtFQUNFLGdCQUFBO0FEc0JGOztBQ3BCQTtFQUNFLDhCQUFBO0FEdUJGOztBQ3BCQTtFQUNFLDhCQUFBO0VBQ0EsZUFBQTtBRHVCRjtBQ3RCRTtFQUNFLGtCQUFBO0FEd0JKIiwiZmlsZSI6ImRhdGEtc3RvcmUtbXVsdGlwbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNob3djYXNlLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcblxuICBpb24taXRlbS1kaXZpZGVyIHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIH1cblxuICAuc2hvd2Nhc2Utc2VjdGlvbiB7XG4gICAgbWFyZ2luOiAyMHB4IDIwcHggNjBweDtcbiAgfVxuXG4gIHByZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGJhY2tncm91bmQ6ICNDQ0M7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuXG4gIGNvZGUge1xuICAgIGNvbG9yOiAjRjkyNjcyO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbn1cbiIsIi5zaG93Y2FzZS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG59XG4uc2hvd2Nhc2UtY29udGVudCBpb24taXRlbS1kaXZpZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cbi5zaG93Y2FzZS1jb250ZW50IC5zaG93Y2FzZS1zZWN0aW9uIHtcbiAgbWFyZ2luOiAyMHB4IDIwcHggNjBweDtcbn1cbi5zaG93Y2FzZS1jb250ZW50IHByZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYmFja2dyb3VuZDogI0NDQztcbiAgcGFkZGluZzogMTBweDtcbn1cbi5zaG93Y2FzZS1jb250ZW50IGNvZGUge1xuICBjb2xvcjogI0Y5MjY3MjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLml0ZW0tbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5pdGVtLW5hbWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTZweDtcbn1cblxuLml0ZW0tcHJpY2UgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWF4LXdpZHRoOiA4MHB4O1xufVxuLml0ZW0tcHJpY2UgPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1heC13aWR0aDogaW5oZXJpdDtcbn0iLCJAaW1wb3J0IFwiLi4vYXBwLXNoZWxsLnBhZ2VcIjtcblxuLml0ZW0tbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uaXRlbS1uYW1lID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE2cHg7XG59XG5cbi5pdGVtLXByaWNlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1heC13aWR0aDogODBweDtcbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICB9XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hvd2Nhc2UvYXBwLXNoZWxsL2FwcC1zaGVsbC5wYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi9UaXRhbiUyMEVzdGF0ZXMvc3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvZGF0YS1zdG9yZS1tdWx0aXBsZS9kYXRhLXN0b3JlLW11bHRpcGxlLnBhZ2Uuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hvd2Nhc2UvYXBwLXNoZWxsL2RhdGEtc3RvcmUtbXVsdGlwbGUvZGF0YS1zdG9yZS1tdWx0aXBsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBQTtBQ0NGO0FEQ0U7RUFDRSx3Q0FBQTtFQUNBLGtDQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURFRTtFQUNFLHNCQUFBO0FDQUo7QURHRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNESjtBRElFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDRko7O0FDbkJBO0VBQ0UsZ0JBQUE7QURzQkY7O0FDcEJBO0VBQ0UsOEJBQUE7QUR1QkY7O0FDcEJBO0VBQ0UsOEJBQUE7RUFDQSxlQUFBO0FEdUJGO0FDdEJFO0VBQ0Usa0JBQUE7QUR3Qko7QUNDQSxvd0ZBQW93RiIsInNvdXJjZXNDb250ZW50IjpbIi5zaG93Y2FzZS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG5cbiAgaW9uLWl0ZW0tZGl2aWRlciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB9XG5cbiAgLnNob3djYXNlLXNlY3Rpb24ge1xuICAgIG1hcmdpbjogMjBweCAyMHB4IDYwcHg7XG4gIH1cblxuICBwcmUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBiYWNrZ3JvdW5kOiAjQ0NDO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cblxuICBjb2RlIHtcbiAgICBjb2xvcjogI0Y5MjY3MjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG59XG4iLCIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xufVxuLnNob3djYXNlLWNvbnRlbnQgaW9uLWl0ZW0tZGl2aWRlciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCAuc2hvd2Nhc2Utc2VjdGlvbiB7XG4gIG1hcmdpbjogMjBweCAyMHB4IDYwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBwcmUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJhY2tncm91bmQ6ICNDQ0M7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBjb2RlIHtcbiAgY29sb3I6ICNGOTI2NzI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5pdGVtLW5hbWUge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uaXRlbS1uYW1lID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE2cHg7XG59XG5cbi5pdGVtLXByaWNlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1heC13aWR0aDogODBweDtcbn1cbi5pdGVtLXByaWNlID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtYXgtd2lkdGg6IGluaGVyaXQ7XG59IiwiQGltcG9ydCBcIi4uL2FwcC1zaGVsbC5wYWdlXCI7XG5cbi5pdGVtLW5hbWUge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLml0ZW0tbmFtZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNnB4O1xufVxuXG4uaXRlbS1wcmljZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtYXgtd2lkdGg6IDgwcHg7XG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 96007:
/*!****************************************************************************************!*\
  !*** ./src/app/showcase/app-shell/data-store-pagination/data-store-pagination.page.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataStorePaginationPage": () => (/* binding */ DataStorePaginationPage)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 36646);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var _showcase_shell_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../showcase-shell.model */ 29379);
/* harmony import */ var _showcase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../showcase.service */ 82909);
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shell/data-store */ 29760);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shell/aspect-ratio/aspect-ratio.component */ 89330);
/* harmony import */ var _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shell/image-shell/image-shell.component */ 71408);
/* harmony import */ var _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shell/text-shell/text-shell.component */ 94840);












function DataStorePaginationPage_span_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 8)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "(No more pages available)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
const _c0 = function () {
  return {
    w: 1,
    h: 1
  };
};
function DataStorePaginationPage_ion_row_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-row", 9)(1, "ion-col", 10)(2, "app-aspect-ratio", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "app-image-shell", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ion-col", 13)(5, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "app-text-shell", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "app-text-shell", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const user_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", user_r2 == null ? null : user_r2.avatar)("alt", "Sample Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", user_r2 == null ? null : user_r2.first_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", user_r2 == null ? null : user_r2.last_name);
  }
}
class DataStorePaginationPage {
  constructor(showcaseService) {
    this.showcaseService = showcaseService;
    this.loadMorePages = true;
    this.currentPage = 0;
    this.triggerNewPageLoading = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    this.newPageTriggerObservable = this.triggerNewPageLoading.asObservable();
  }
  ngOnInit() {
    const dataSource = this.showcaseService.getPaginationDataSource(1);
    if (!this.remoteApiDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel = [new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_0__.ShowcaseShellUserModel(), new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_0__.ShowcaseShellUserModel()];
      this.remoteApiDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_2__.DataStore(shellModel);
      // Trigger the loading mechanism (with shell) in the dataStore
      this.remoteApiDataStore.load(dataSource);
    }
    const newDataObservable = this.newPageTriggerObservable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(pageNumber => {
      const pageDataSource = this.showcaseService.getPaginationDataSource(pageNumber);
      const newDataShell = [new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_0__.ShowcaseShellUserModel(), new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_0__.ShowcaseShellUserModel(), new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_0__.ShowcaseShellUserModel()];
      const dataSourceWithShellObservable = _shell_data_store__WEBPACK_IMPORTED_MODULE_2__.DataStore.AppendShell(pageDataSource, newDataShell, 400);
      return dataSourceWithShellObservable;
    }));
    (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.merge)(this.remoteApiDataStore.state, newDataObservable).subscribe(result => {
      console.log('result', result);
      // When successfully load next page, update currentPage pointer
      if (!result.isShell && result.length > 0) {
        this.currentPage++;
      }
      if (this.loadMorePages) {
        this.pagedUsers = result;
      }
      if (this.currentPage === 4) {
        this.loadMorePages = false;
      }
    });
  }
  getNextPageUsers() {
    this.triggerNewPageLoading.next(this.currentPage + 1);
  }
  static #_ = this.ɵfac = function DataStorePaginationPage_Factory(t) {
    return new (t || DataStorePaginationPage)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_showcase_service__WEBPACK_IMPORTED_MODULE_1__.ShowcaseService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: DataStorePaginationPage,
    selectors: [["app-data-store-pagination"]],
    decls: 30,
    vars: 4,
    consts: [["color", "primary"], ["slot", "start"], ["defaultHref", "showcase/app-shell"], [1, "showcase-content"], [1, "showcase-section"], ["style", "margin-inline-start: 10px;", 4, "ngIf"], ["style", "background-color: #FFF; padding: 10px;", 4, "ngFor", "ngForOf"], [3, "disabled", "click"], [2, "margin-inline-start", "10px"], [2, "background-color", "#FFF", "padding", "10px"], ["size", "4"], [3, "ratio"], ["animation", "spinner", 3, "src", "alt"], ["size", "8"], [2, "margin-top", "0px"], [3, "data"], ["lines", "3", 3, "data"]],
    template: function DataStorePaginationPage_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " DataStore - Pagination example ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "ion-content", 3)(7, "section", 4)(8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, " This example is useful for use cases that require the data stream to be updated based on user actions. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Pagination");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "filtering");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, " are the clear use cases that come to my mind. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, " For these use cases you get the initial data stream and then, upon user interaction, you request an update for that stream. For example requesting your remote API for the next page of results or a filtered set of results. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, " This example shows you how to merge the initial data stream with future data streams that may arise from user interaction. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "p")(21, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, DataStorePaginationPage_span_23_Template, 3, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "p")(25, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "Each time you click the button we fetch users from the next page.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, DataStorePaginationPage_ion_row_27_Template, 9, 6, "ion-row", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "ion-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DataStorePaginationPage_Template_ion_button_click_28_listener() {
          return ctx.getNextPageUsers();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Fetch next page");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Current page: ", ctx.currentPage, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.loadMorePages);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.pagedUsers);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.loadMorePages || ctx.pagedUsers.isShell);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonBackButtonDelegate, _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_3__.AspectRatioComponent, _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_4__.ImageShellComponent, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_5__.TextShellComponent],
    styles: [".showcase-content[_ngcontent-%COMP%] {\n  --background: var(--app-background);\n}\n.showcase-content[_ngcontent-%COMP%]   ion-item-divider[_ngcontent-%COMP%] {\n  --background: var(--ion-color-secondary);\n  --color: var(--ion-color-lightest);\n  text-transform: uppercase;\n  font-weight: 500;\n  letter-spacing: 1px;\n}\n.showcase-content[_ngcontent-%COMP%]   .showcase-section[_ngcontent-%COMP%] {\n  margin: 20px 20px 60px;\n}\n.showcase-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  font-size: 14px;\n  background: #CCC;\n  padding: 10px;\n}\n.showcase-content[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: #F92672;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC1zaGVsbC5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9UaXRhbiUyMEVzdGF0ZXMvc3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvZGF0YS1zdG9yZS1wYWdpbmF0aW9uL2RhdGEtc3RvcmUtcGFnaW5hdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBQTtBQ0NGO0FEQ0U7RUFDRSx3Q0FBQTtFQUNBLGtDQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURFRTtFQUNFLHNCQUFBO0FDQUo7QURHRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNESjtBRElFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDRkoiLCJmaWxlIjoiZGF0YS1zdG9yZS1wYWdpbmF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG93Y2FzZS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG5cbiAgaW9uLWl0ZW0tZGl2aWRlciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB9XG5cbiAgLnNob3djYXNlLXNlY3Rpb24ge1xuICAgIG1hcmdpbjogMjBweCAyMHB4IDYwcHg7XG4gIH1cblxuICBwcmUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBiYWNrZ3JvdW5kOiAjQ0NDO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cblxuICBjb2RlIHtcbiAgICBjb2xvcjogI0Y5MjY3MjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG59XG4iLCIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xufVxuLnNob3djYXNlLWNvbnRlbnQgaW9uLWl0ZW0tZGl2aWRlciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCAuc2hvd2Nhc2Utc2VjdGlvbiB7XG4gIG1hcmdpbjogMjBweCAyMHB4IDYwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBwcmUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJhY2tncm91bmQ6ICNDQ0M7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBjb2RlIHtcbiAgY29sb3I6ICNGOTI2NzI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hvd2Nhc2UvYXBwLXNoZWxsL2FwcC1zaGVsbC5wYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi9UaXRhbiUyMEVzdGF0ZXMvc3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvZGF0YS1zdG9yZS1wYWdpbmF0aW9uL2RhdGEtc3RvcmUtcGFnaW5hdGlvbi5wYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3Nob3djYXNlL2FwcC1zaGVsbC9kYXRhLXN0b3JlLXBhZ2luYXRpb24vZGF0YS1zdG9yZS1wYWdpbmF0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1DQUFBO0FDQ0Y7QURDRTtFQUNFLHdDQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBREVFO0VBQ0Usc0JBQUE7QUNBSjtBREdFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0RKO0FESUU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNGSjtBQ0NBLDQyREFBNDJEIiwic291cmNlc0NvbnRlbnQiOlsiLnNob3djYXNlLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcblxuICBpb24taXRlbS1kaXZpZGVyIHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIH1cblxuICAuc2hvd2Nhc2Utc2VjdGlvbiB7XG4gICAgbWFyZ2luOiAyMHB4IDIwcHggNjBweDtcbiAgfVxuXG4gIHByZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGJhY2tncm91bmQ6ICNDQ0M7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuXG4gIGNvZGUge1xuICAgIGNvbG9yOiAjRjkyNjcyO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbn1cbiIsIi5zaG93Y2FzZS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG59XG4uc2hvd2Nhc2UtY29udGVudCBpb24taXRlbS1kaXZpZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cbi5zaG93Y2FzZS1jb250ZW50IC5zaG93Y2FzZS1zZWN0aW9uIHtcbiAgbWFyZ2luOiAyMHB4IDIwcHggNjBweDtcbn1cbi5zaG93Y2FzZS1jb250ZW50IHByZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYmFja2dyb3VuZDogI0NDQztcbiAgcGFkZGluZzogMTBweDtcbn1cbi5zaG93Y2FzZS1jb250ZW50IGNvZGUge1xuICBjb2xvcjogI0Y5MjY3MjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn0iLCIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xufVxuLnNob3djYXNlLWNvbnRlbnQgaW9uLWl0ZW0tZGl2aWRlciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCAuc2hvd2Nhc2Utc2VjdGlvbiB7XG4gIG1hcmdpbjogMjBweCAyMHB4IDYwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBwcmUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJhY2tncm91bmQ6ICNDQ0M7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBjb2RlIHtcbiAgY29sb3I6ICNGOTI2NzI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUwyRndjQzF6YUdWc2JDNXdZV2RsTG5OamMzTWlMQ0l1TGk4dUxpOHVMaTh1TGk4dUxpOHVMaTlVYVhSaGJpVXlNRVZ6ZEdGMFpYTXZjM0pqTDJGd2NDOXphRzkzWTJGelpTOWhjSEF0YzJobGJHd3ZaR0YwWVMxemRHOXlaUzF3WVdkcGJtRjBhVzl1TDJSaGRHRXRjM1J2Y21VdGNHRm5hVzVoZEdsdmJpNXdZV2RsTG5OamMzTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUU3UlVGRFJTeHRRMEZCUVR0QlEwTkdPMEZFUTBVN1JVRkRSU3gzUTBGQlFUdEZRVU5CTEd0RFFVRkJPMFZCUTBFc2VVSkJRVUU3UlVGRFFTeG5Ra0ZCUVR0RlFVTkJMRzFDUVVGQk8wRkRRMG83UVVSRlJUdEZRVU5GTEhOQ1FVRkJPMEZEUVVvN1FVUkhSVHRGUVVORkxHVkJRVUU3UlVGRFFTeG5Ra0ZCUVR0RlFVTkJMR0ZCUVVFN1FVTkVTanRCUkVsRk8wVkJRMFVzWTBGQlFUdEZRVU5CTEdkQ1FVRkJPMEZEUmtvaUxDSm1hV3hsSWpvaVpHRjBZUzF6ZEc5eVpTMXdZV2RwYm1GMGFXOXVMbkJoWjJVdWMyTnpjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk1emFHOTNZMkZ6WlMxamIyNTBaVzUwSUh0Y2JpQWdMUzFpWVdOclozSnZkVzVrT2lCMllYSW9MUzFoY0hBdFltRmphMmR5YjNWdVpDazdYRzVjYmlBZ2FXOXVMV2wwWlcwdFpHbDJhV1JsY2lCN1hHNGdJQ0FnTFMxaVlXTnJaM0p2ZFc1a09pQjJZWElvTFMxcGIyNHRZMjlzYjNJdGMyVmpiMjVrWVhKNUtUdGNiaUFnSUNBdExXTnZiRzl5T2lCMllYSW9MUzFwYjI0dFkyOXNiM0l0YkdsbmFIUmxjM1FwTzF4dUlDQWdJSFJsZUhRdGRISmhibk5tYjNKdE9pQjFjSEJsY21OaGMyVTdYRzRnSUNBZ1ptOXVkQzEzWldsbmFIUTZJRFV3TUR0Y2JpQWdJQ0JzWlhSMFpYSXRjM0JoWTJsdVp6b2dNWEI0TzF4dUlDQjlYRzVjYmlBZ0xuTm9iM2RqWVhObExYTmxZM1JwYjI0Z2UxeHVJQ0FnSUcxaGNtZHBiam9nTWpCd2VDQXlNSEI0SURZd2NIZzdYRzRnSUgxY2JseHVJQ0J3Y21VZ2UxeHVJQ0FnSUdadmJuUXRjMmw2WlRvZ01UUndlRHRjYmlBZ0lDQmlZV05yWjNKdmRXNWtPaUFqUTBORE8xeHVJQ0FnSUhCaFpHUnBibWM2SURFd2NIZzdYRzRnSUgxY2JseHVJQ0JqYjJSbElIdGNiaUFnSUNCamIyeHZjam9nSTBZNU1qWTNNanRjYmlBZ0lDQm1iMjUwTFhkbGFXZG9kRG9nTlRBd08xeHVJQ0I5WEc1OVhHNGlMQ0l1YzJodmQyTmhjMlV0WTI5dWRHVnVkQ0I3WEc0Z0lDMHRZbUZqYTJkeWIzVnVaRG9nZG1GeUtDMHRZWEJ3TFdKaFkydG5jbTkxYm1RcE8xeHVmVnh1TG5Ob2IzZGpZWE5sTFdOdmJuUmxiblFnYVc5dUxXbDBaVzB0WkdsMmFXUmxjaUI3WEc0Z0lDMHRZbUZqYTJkeWIzVnVaRG9nZG1GeUtDMHRhVzl1TFdOdmJHOXlMWE5sWTI5dVpHRnllU2s3WEc0Z0lDMHRZMjlzYjNJNklIWmhjaWd0TFdsdmJpMWpiMnh2Y2kxc2FXZG9kR1Z6ZENrN1hHNGdJSFJsZUhRdGRISmhibk5tYjNKdE9pQjFjSEJsY21OaGMyVTdYRzRnSUdadmJuUXRkMlZwWjJoME9pQTFNREE3WEc0Z0lHeGxkSFJsY2kxemNHRmphVzVuT2lBeGNIZzdYRzU5WEc0dWMyaHZkMk5oYzJVdFkyOXVkR1Z1ZENBdWMyaHZkMk5oYzJVdGMyVmpkR2x2YmlCN1hHNGdJRzFoY21kcGJqb2dNakJ3ZUNBeU1IQjRJRFl3Y0hnN1hHNTlYRzR1YzJodmQyTmhjMlV0WTI5dWRHVnVkQ0J3Y21VZ2UxeHVJQ0JtYjI1MExYTnBlbVU2SURFMGNIZzdYRzRnSUdKaFkydG5jbTkxYm1RNklDTkRRME03WEc0Z0lIQmhaR1JwYm1jNklERXdjSGc3WEc1OVhHNHVjMmh2ZDJOaGMyVXRZMjl1ZEdWdWRDQmpiMlJsSUh0Y2JpQWdZMjlzYjNJNklDTkdPVEkyTnpJN1hHNGdJR1p2Ym5RdGQyVnBaMmgwT2lBMU1EQTdYRzU5SWwxOSAqLyJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 17052:
/*!**********************************************************************************!*\
  !*** ./src/app/showcase/app-shell/data-store-stacked/data-store-stacked.page.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataStoreStackedPage": () => (/* binding */ DataStoreStackedPage)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 36646);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _showcase_shell_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../showcase-shell.model */ 29379);
/* harmony import */ var _showcase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../showcase.service */ 82909);
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shell/data-store */ 29760);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shell/aspect-ratio/aspect-ratio.component */ 89330);
/* harmony import */ var _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shell/image-shell/image-shell.component */ 71408);
/* harmony import */ var _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shell/text-shell/text-shell.component */ 94840);












const _c0 = function () {
  return {
    w: 1,
    h: 1
  };
};
function DataStoreStackedPage_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-row", 11)(1, "ion-col", 12)(2, "app-aspect-ratio", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "app-image-shell", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "ion-col", 15)(6, "h3", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "app-text-shell", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "app-text-shell", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const user_r4 = ctx.user;
    let tmp_1_0;
    let tmp_3_0;
    let tmp_4_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](11, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 5, user_r4)) == null ? null : tmp_1_0.avatar)("alt", "Sample Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](8, 7, user_r4)) == null ? null : tmp_3_0.first_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", (tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](11, 9, user_r4)) == null ? null : tmp_4_0.last_name);
  }
}
function DataStoreStackedPage_div_49_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0);
  }
}
const _c1 = function (a0) {
  return {
    user: a0
  };
};
function DataStoreStackedPage_div_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, DataStoreStackedPage_div_49_ng_container_1_Template, 1, 0, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const user_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c1, user_r5));
  }
}
function DataStoreStackedPage_div_50_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0);
  }
}
function DataStoreStackedPage_div_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, DataStoreStackedPage_div_50_ng_container_1_Template, 1, 0, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const user_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c1, user_r7));
  }
}
class DataStoreStackedPage {
  constructor(showcaseService) {
    this.showcaseService = showcaseService;
    // View model
    this.stackedUsers = [];
    this.shellUsers = [];
    // Emulate a tream of events that trigger the loading of new items
    this.triggerNewItemsLoading = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    this.newItemsTriggerObservable = this.triggerNewItemsLoading.asObservable();
  }
  ngOnInit() {
    const openDataStream = this.showcaseService.getOpenDataStream();
    if (!this.openDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel = [new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_0__.ShowcaseShellUserModel(), new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_0__.ShowcaseShellUserModel(), new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_0__.ShowcaseShellUserModel(), new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_0__.ShowcaseShellUserModel()];
      this.openDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_2__.DataStore(shellModel);
      // Trigger the loading mechanism (with shell) in the dataStore
      this.openDataStore.load(openDataStream);
    }
    // Each time the user triggers the loading of new items, ask the service to get those new items
    const newDataObservable = this.newItemsTriggerObservable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(() => {
      const newValuesObservable = this.showcaseService.getStackedValuesDataSource();
      const newDataShell = [new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_0__.ShowcaseShellUserModel(), new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_0__.ShowcaseShellUserModel()];
      const newValuesWithShellObservable = _shell_data_store__WEBPACK_IMPORTED_MODULE_2__.DataStore.AppendShell(newValuesObservable, newDataShell, 400);
      return newValuesWithShellObservable;
    }));
    (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.merge)(this.openDataStore.state, newDataObservable).subscribe(data => {
      console.log('data', data);
      if (data.isShell) {
        const shellsAsObservables = [...data].map(val => {
          // Transform plain shell values into async Observables (to comply with the layout markup)
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(val);
        });
        // When loading new data, override the shellUsers property
        this.shellUsers = shellsAsObservables;
      } else {
        // Clear shellUsers property
        this.shellUsers = [];
        const dataWithShell = [...data].map(val => {
          // Transform plain values into async Observables (to comply with the layout markup)
          return _shell_data_store__WEBPACK_IMPORTED_MODULE_2__.DataStore.AppendShell((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(val), new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_0__.ShowcaseShellUserModel(), 400);
        });
        // Concat data to existing stackedUsers property
        this.stackedUsers.push(...dataWithShell);
      }
    });
  }
  loadStackedResults() {
    this.triggerNewItemsLoading.next(null);
  }
  pushValuesToOpenStream() {
    this.showcaseService.pushValuesToOpenStream();
  }
  static #_ = this.ɵfac = function DataStoreStackedPage_Factory(t) {
    return new (t || DataStoreStackedPage)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_showcase_service__WEBPACK_IMPORTED_MODULE_1__.ShowcaseService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: DataStoreStackedPage,
    selectors: [["app-data-store-stacked"]],
    decls: 51,
    vars: 2,
    consts: [["color", "primary"], ["slot", "start"], ["defaultHref", "showcase/app-shell"], [1, "showcase-content"], [1, "showcase-section"], ["userTemplate", ""], [1, "stacked-items-demo"], [1, "showcase-section", "sticky-section"], ["size", "12"], [3, "click"], [4, "ngFor", "ngForOf"], [2, "background-color", "#FFF", "padding", "10px"], ["size", "4"], [3, "ratio"], ["animation", "spinner", 3, "src", "alt"], ["size", "8"], [2, "margin-top", "0px"], [3, "data"], ["lines", "3", 3, "data"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function DataStoreStackedPage_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " DataStore - Stacked shells example ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "ion-content", 3)(7, "section", 4)(8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, " Once you have values coming from the initial data stream, the shell animation would be off. If its an ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "open stream");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, ", then each time a new value arrives, it will be added to the view state without the shell animation. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, " This example is handy If you want to change the default functionality and apply independent shell animations to each value coming from the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "open data stream");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, " It's also a good example if you want to implement an ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "infinite scroll");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, " feature. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "p")(24, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Note:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, " For this to work we will be transforming plain values into Observables, thus the need to update our markup and specify the binded model as async. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "<h3>\n  <app-text-shell [data]=\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "(user | async)?");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, ".first_name\"></app-text-shell>\n</h3>\n<p>\n  <app-text-shell [data]=\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "(user | async)?");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, ".last_name\" lines=\"3\"></app-text-shell>\n</p>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, " Also as we are dealing with a mix of shell models and real values that get stacked one after the other, we need to have two seperate lists. One to show the shell values and another to contain the stacked values. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, DataStoreStackedPage_ng_template_37_Template, 12, 12, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 6)(40, "section", 7)(41, "ion-row")(42, "ion-col", 8)(43, "ion-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DataStoreStackedPage_Template_ion_button_click_43_listener() {
          return ctx.pushValuesToOpenStream();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44, "Push values to open stream");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "ion-col", 8)(46, "ion-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DataStoreStackedPage_Template_ion_button_click_46_listener() {
          return ctx.loadStackedResults();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "Load New Values");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](49, DataStoreStackedPage_div_49_Template, 2, 4, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](50, DataStoreStackedPage_div_50_Template, 2, 4, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.stackedUsers);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.shellUsers);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgTemplateOutlet, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonBackButtonDelegate, _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_3__.AspectRatioComponent, _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_4__.ImageShellComponent, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_5__.TextShellComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe],
    styles: [".showcase-content[_ngcontent-%COMP%] {\n  --background: var(--app-background);\n}\n.showcase-content[_ngcontent-%COMP%]   ion-item-divider[_ngcontent-%COMP%] {\n  --background: var(--ion-color-secondary);\n  --color: var(--ion-color-lightest);\n  text-transform: uppercase;\n  font-weight: 500;\n  letter-spacing: 1px;\n}\n.showcase-content[_ngcontent-%COMP%]   .showcase-section[_ngcontent-%COMP%] {\n  margin: 20px 20px 60px;\n}\n.showcase-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  font-size: 14px;\n  background: #CCC;\n  padding: 10px;\n}\n.showcase-content[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: #F92672;\n  font-weight: 500;\n}\n\n.stacked-items-demo[_ngcontent-%COMP%] {\n  background-color: #ececec;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.38'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n  padding: 0px 0px 20px;\n}\n\n.sticky-section[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0px;\n  background: #ececec;\n  padding: 20px;\n  margin: 0px 0px 60px !important;\n  z-index: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC1zaGVsbC5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9UaXRhbiUyMEVzdGF0ZXMvc3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvZGF0YS1zdG9yZS1zdGFja2VkL2RhdGEtc3RvcmUtc3RhY2tlZC5wYWdlLnNjc3MiLCJkYXRhLXN0b3JlLXN0YWNrZWQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUNBQUE7QUNDRjtBRENFO0VBQ0Usd0NBQUE7RUFDQSxrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKO0FERUU7RUFDRSxzQkFBQTtBQ0FKO0FER0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDREo7QURJRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ0ZKOztBQ25CQTtFQUNFLHlCQUFBO0VBQ0Esd2lCQUFBO0VBQ0EscUJBQUE7QURzQkY7O0FDbkJBO0VBQ0UsZ0JBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0FEc0JGIiwiZmlsZSI6ImRhdGEtc3RvcmUtc3RhY2tlZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuXG4gIGlvbi1pdGVtLWRpdmlkZXIge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgfVxuXG4gIC5zaG93Y2FzZS1zZWN0aW9uIHtcbiAgICBtYXJnaW46IDIwcHggMjBweCA2MHB4O1xuICB9XG5cbiAgcHJlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgYmFja2dyb3VuZDogI0NDQztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG5cbiAgY29kZSB7XG4gICAgY29sb3I6ICNGOTI2NzI7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxufVxuIiwiLnNob3djYXNlLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcbn1cbi5zaG93Y2FzZS1jb250ZW50IGlvbi1pdGVtLWRpdmlkZXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuLnNob3djYXNlLWNvbnRlbnQgLnNob3djYXNlLXNlY3Rpb24ge1xuICBtYXJnaW46IDIwcHggMjBweCA2MHB4O1xufVxuLnNob3djYXNlLWNvbnRlbnQgcHJlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiAjQ0NDO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLnNob3djYXNlLWNvbnRlbnQgY29kZSB7XG4gIGNvbG9yOiAjRjkyNjcyO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uc3RhY2tlZC1pdGVtcy1kZW1vIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0MCcgaGVpZ2h0PSc0MCcgdmlld0JveD0nMCAwIDQwIDQwJyUzRSUzQ2cgZmlsbC1ydWxlPSdldmVub2RkJyUzRSUzQ2cgZmlsbD0nJTIzZmZmZmZmJyBmaWxsLW9wYWNpdHk9JzAuMzgnJTNFJTNDcGF0aCBkPSdNMCAzOC41OWwyLjgzLTIuODMgMS40MSAxLjQxTDEuNDEgNDBIMHYtMS40MXpNMCAxLjRsMi44MyAyLjgzIDEuNDEtMS40MUwxLjQxIDBIMHYxLjQxek0zOC41OSA0MGwtMi44My0yLjgzIDEuNDEtMS40MUw0MCAzOC41OVY0MGgtMS40MXpNNDAgMS40MWwtMi44MyAyLjgzLTEuNDEtMS40MUwzOC41OSAwSDQwdjEuNDF6TTIwIDE4LjZsMi44My0yLjgzIDEuNDEgMS40MUwyMS40MSAyMGwyLjgzIDIuODMtMS40MSAxLjQxTDIwIDIxLjQxbC0yLjgzIDIuODMtMS40MS0xLjQxTDE4LjU5IDIwbC0yLjgzLTIuODMgMS40MS0xLjQxTDIwIDE4LjU5eicvJTNFJTNDL2clM0UlM0MvZyUzRSUzQy9zdmclM0VcIik7XG4gIHBhZGRpbmc6IDBweCAwcHggMjBweDtcbn1cblxuLnN0aWNreS1zZWN0aW9uIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwcHg7XG4gIGJhY2tncm91bmQ6ICNlY2VjZWM7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogMHB4IDBweCA2MHB4ICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDEwO1xufSIsIkBpbXBvcnQgXCIuLi9hcHAtc2hlbGwucGFnZVwiO1xuXG4uc3RhY2tlZC1pdGVtcy1kZW1vIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0MCcgaGVpZ2h0PSc0MCcgdmlld0JveD0nMCAwIDQwIDQwJyUzRSUzQ2cgZmlsbC1ydWxlPSdldmVub2RkJyUzRSUzQ2cgZmlsbD0nJTIzZmZmZmZmJyBmaWxsLW9wYWNpdHk9JzAuMzgnJTNFJTNDcGF0aCBkPSdNMCAzOC41OWwyLjgzLTIuODMgMS40MSAxLjQxTDEuNDEgNDBIMHYtMS40MXpNMCAxLjRsMi44MyAyLjgzIDEuNDEtMS40MUwxLjQxIDBIMHYxLjQxek0zOC41OSA0MGwtMi44My0yLjgzIDEuNDEtMS40MUw0MCAzOC41OVY0MGgtMS40MXpNNDAgMS40MWwtMi44MyAyLjgzLTEuNDEtMS40MUwzOC41OSAwSDQwdjEuNDF6TTIwIDE4LjZsMi44My0yLjgzIDEuNDEgMS40MUwyMS40MSAyMGwyLjgzIDIuODMtMS40MSAxLjQxTDIwIDIxLjQxbC0yLjgzIDIuODMtMS40MS0xLjQxTDE4LjU5IDIwbC0yLjgzLTIuODMgMS40MS0xLjQxTDIwIDE4LjU5eicvJTNFJTNDL2clM0UlM0MvZyUzRSUzQy9zdmclM0VcIik7XG4gIHBhZGRpbmc6IDBweCAwcHggMjBweDtcbn1cblxuLnN0aWNreS1zZWN0aW9uIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwcHg7XG4gIGJhY2tncm91bmQ6ICNlY2VjZWM7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogMHB4IDBweCA2MHB4ICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDEwO1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hvd2Nhc2UvYXBwLXNoZWxsL2FwcC1zaGVsbC5wYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi9UaXRhbiUyMEVzdGF0ZXMvc3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvZGF0YS1zdG9yZS1zdGFja2VkL2RhdGEtc3RvcmUtc3RhY2tlZC5wYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3Nob3djYXNlL2FwcC1zaGVsbC9kYXRhLXN0b3JlLXN0YWNrZWQvZGF0YS1zdG9yZS1zdGFja2VkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1DQUFBO0FDQ0Y7QURDRTtFQUNFLHdDQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBREVFO0VBQ0Usc0JBQUE7QUNBSjtBREdFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0RKO0FESUU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNGSjs7QUNuQkE7RUFDRSx5QkFBQTtFQUNBLHdpQkFBQTtFQUNBLHFCQUFBO0FEc0JGOztBQ25CQTtFQUNFLGdCQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtBRHNCRjtBQ0NBLG9xSUFBb3FJIiwic291cmNlc0NvbnRlbnQiOlsiLnNob3djYXNlLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcblxuICBpb24taXRlbS1kaXZpZGVyIHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIH1cblxuICAuc2hvd2Nhc2Utc2VjdGlvbiB7XG4gICAgbWFyZ2luOiAyMHB4IDIwcHggNjBweDtcbiAgfVxuXG4gIHByZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGJhY2tncm91bmQ6ICNDQ0M7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuXG4gIGNvZGUge1xuICAgIGNvbG9yOiAjRjkyNjcyO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbn1cbiIsIi5zaG93Y2FzZS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG59XG4uc2hvd2Nhc2UtY29udGVudCBpb24taXRlbS1kaXZpZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cbi5zaG93Y2FzZS1jb250ZW50IC5zaG93Y2FzZS1zZWN0aW9uIHtcbiAgbWFyZ2luOiAyMHB4IDIwcHggNjBweDtcbn1cbi5zaG93Y2FzZS1jb250ZW50IHByZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYmFja2dyb3VuZDogI0NDQztcbiAgcGFkZGluZzogMTBweDtcbn1cbi5zaG93Y2FzZS1jb250ZW50IGNvZGUge1xuICBjb2xvcjogI0Y5MjY3MjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnN0YWNrZWQtaXRlbXMtZGVtbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNDAnIGhlaWdodD0nNDAnIHZpZXdCb3g9JzAgMCA0MCA0MCclM0UlM0NnIGZpbGwtcnVsZT0nZXZlbm9kZCclM0UlM0NnIGZpbGw9JyUyM2ZmZmZmZicgZmlsbC1vcGFjaXR5PScwLjM4JyUzRSUzQ3BhdGggZD0nTTAgMzguNTlsMi44My0yLjgzIDEuNDEgMS40MUwxLjQxIDQwSDB2LTEuNDF6TTAgMS40bDIuODMgMi44MyAxLjQxLTEuNDFMMS40MSAwSDB2MS40MXpNMzguNTkgNDBsLTIuODMtMi44MyAxLjQxLTEuNDFMNDAgMzguNTlWNDBoLTEuNDF6TTQwIDEuNDFsLTIuODMgMi44My0xLjQxLTEuNDFMMzguNTkgMEg0MHYxLjQxek0yMCAxOC42bDIuODMtMi44MyAxLjQxIDEuNDFMMjEuNDEgMjBsMi44MyAyLjgzLTEuNDEgMS40MUwyMCAyMS40MWwtMi44MyAyLjgzLTEuNDEtMS40MUwxOC41OSAyMGwtMi44My0yLjgzIDEuNDEtMS40MUwyMCAxOC41OXonLyUzRSUzQy9nJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXCIpO1xuICBwYWRkaW5nOiAwcHggMHB4IDIwcHg7XG59XG5cbi5zdGlja3ktc2VjdGlvbiB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMHB4O1xuICBiYWNrZ3JvdW5kOiAjZWNlY2VjO1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW46IDBweCAwcHggNjBweCAhaW1wb3J0YW50O1xuICB6LWluZGV4OiAxMDtcbn0iLCJAaW1wb3J0IFwiLi4vYXBwLXNoZWxsLnBhZ2VcIjtcblxuLnN0YWNrZWQtaXRlbXMtZGVtbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNDAnIGhlaWdodD0nNDAnIHZpZXdCb3g9JzAgMCA0MCA0MCclM0UlM0NnIGZpbGwtcnVsZT0nZXZlbm9kZCclM0UlM0NnIGZpbGw9JyUyM2ZmZmZmZicgZmlsbC1vcGFjaXR5PScwLjM4JyUzRSUzQ3BhdGggZD0nTTAgMzguNTlsMi44My0yLjgzIDEuNDEgMS40MUwxLjQxIDQwSDB2LTEuNDF6TTAgMS40bDIuODMgMi44MyAxLjQxLTEuNDFMMS40MSAwSDB2MS40MXpNMzguNTkgNDBsLTIuODMtMi44MyAxLjQxLTEuNDFMNDAgMzguNTlWNDBoLTEuNDF6TTQwIDEuNDFsLTIuODMgMi44My0xLjQxLTEuNDFMMzguNTkgMEg0MHYxLjQxek0yMCAxOC42bDIuODMtMi44MyAxLjQxIDEuNDFMMjEuNDEgMjBsMi44MyAyLjgzLTEuNDEgMS40MUwyMCAyMS40MWwtMi44MyAyLjgzLTEuNDEtMS40MUwxOC41OSAyMGwtMi44My0yLjgzIDEuNDEtMS40MUwyMCAxOC41OXonLyUzRSUzQy9nJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXCIpO1xuICBwYWRkaW5nOiAwcHggMHB4IDIwcHg7XG59XG5cbi5zdGlja3ktc2VjdGlvbiB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMHB4O1xuICBiYWNrZ3JvdW5kOiAjZWNlY2VjO1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW46IDBweCAwcHggNjBweCAhaW1wb3J0YW50O1xuICB6LWluZGV4OiAxMDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 85705:
/*!********************************************************************************!*\
  !*** ./src/app/showcase/app-shell/data-store-subset/data-store-subset.page.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataStoreSubsetPage": () => (/* binding */ DataStoreSubsetPage)
/* harmony export */ });
/* harmony import */ var _showcase_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../showcase.service */ 82909);
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shell/data-store */ 29760);
/* harmony import */ var _showcase_shell_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../showcase-shell.model */ 29379);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shell/text-shell/text-shell.component */ 94840);







class DataStoreSubsetPage {
  constructor(showcaseService) {
    this.showcaseService = showcaseService;
  }
  ngOnInit() {
    const dataSource = this.showcaseService.getUserSubsetData(2);
    const shellModel = new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_2__.ShowcaseCompanyModel();
    this.companyDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_1__.DataStore(shellModel);
    this.companyDataStore.load(dataSource);
    this.companyDataStore.state.subscribe(data => {
      this.company = data;
    });
  }
  static #_ = this.ɵfac = function DataStoreSubsetPage_Factory(t) {
    return new (t || DataStoreSubsetPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_showcase_service__WEBPACK_IMPORTED_MODULE_0__.ShowcaseService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: DataStoreSubsetPage,
    selectors: [["app-data-store-subset"]],
    decls: 38,
    vars: 3,
    consts: [["color", "primary"], ["slot", "start"], ["defaultHref", "showcase/app-shell"], [1, "showcase-content"], [1, "showcase-section"], ["href", "https://dev.to/napoleon039/how-to-use-the-spread-and-rest-operator-4jbb", "target", "_blank"], [1, "company"], ["animation", "bouncing", 2, "--text-shell-line-color", "#FFF", 3, "data"]],
    template: function DataStoreSubsetPage_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " DataStore - Subset example ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ion-content", 3)(7, "section", 4)(8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " Sometimes the data coming from the remote API does not match 100% the model you defined for your view. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "export class YourModel extends ShellModel {\n  cover: string;\n  image: string;\n  title: string;\n  description: string;\n}\n\n// Data coming from the remote API with the following format\nconst jsonResponse = {\n  name: 'extra-data',\n  fields: {\n    cover: 'some-image';\n    image: 'some-other-image';\n    title: 'a-title';\n    description: 'a-description';\n  }\n};\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, " Hopefully, we can use some ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "RxJs operators");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, " to mold the data and fit our needs. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, " If that\u2019s not enough, you can use the handy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "a", 5)(20, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "spread");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "rest");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, " operators");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, " to mold your data even deeper. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "public getListDataSource(): Observable<YourModel> {\n  const dataObservable = this.http.get('https://reqres.in/api/users');\n\n  return dataObservable.pipe(\n    map((jsonResponse) => {\n      const filteredData: YourModel = {\n        ...data.fields\n      };\n      return filteredData;\n    })\n  );\n}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 6)(30, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "app-text-shell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "app-text-shell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "app-text-shell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx.company.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx.company.catchPhrase);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx.company.bs);
      }
    },
    dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonBackButtonDelegate, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_3__.TextShellComponent],
    styles: [".showcase-content[_ngcontent-%COMP%] {\n  --background: var(--app-background);\n}\n.showcase-content[_ngcontent-%COMP%]   ion-item-divider[_ngcontent-%COMP%] {\n  --background: var(--ion-color-secondary);\n  --color: var(--ion-color-lightest);\n  text-transform: uppercase;\n  font-weight: 500;\n  letter-spacing: 1px;\n}\n.showcase-content[_ngcontent-%COMP%]   .showcase-section[_ngcontent-%COMP%] {\n  margin: 20px 20px 60px;\n}\n.showcase-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  font-size: 14px;\n  background: #CCC;\n  padding: 10px;\n}\n.showcase-content[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: #F92672;\n  font-weight: 500;\n}\n\n.company[_ngcontent-%COMP%] {\n  background-color: #ececec;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.38'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC1zaGVsbC5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9UaXRhbiUyMEVzdGF0ZXMvc3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvZGF0YS1zdG9yZS1zdWJzZXQvZGF0YS1zdG9yZS1zdWJzZXQucGFnZS5zY3NzIiwiZGF0YS1zdG9yZS1zdWJzZXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUNBQUE7QUNDRjtBRENFO0VBQ0Usd0NBQUE7RUFDQSxrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKO0FERUU7RUFDRSxzQkFBQTtBQ0FKO0FER0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDREo7QURJRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ0ZKOztBQ25CQTtFQUNFLHlCQUFBO0VBQ0Esd2lCQUFBO0VBQ0EsYUFBQTtBRHNCRiIsImZpbGUiOiJkYXRhLXN0b3JlLXN1YnNldC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuXG4gIGlvbi1pdGVtLWRpdmlkZXIge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgfVxuXG4gIC5zaG93Y2FzZS1zZWN0aW9uIHtcbiAgICBtYXJnaW46IDIwcHggMjBweCA2MHB4O1xuICB9XG5cbiAgcHJlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgYmFja2dyb3VuZDogI0NDQztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG5cbiAgY29kZSB7XG4gICAgY29sb3I6ICNGOTI2NzI7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxufVxuIiwiLnNob3djYXNlLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcbn1cbi5zaG93Y2FzZS1jb250ZW50IGlvbi1pdGVtLWRpdmlkZXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuLnNob3djYXNlLWNvbnRlbnQgLnNob3djYXNlLXNlY3Rpb24ge1xuICBtYXJnaW46IDIwcHggMjBweCA2MHB4O1xufVxuLnNob3djYXNlLWNvbnRlbnQgcHJlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiAjQ0NDO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLnNob3djYXNlLWNvbnRlbnQgY29kZSB7XG4gIGNvbG9yOiAjRjkyNjcyO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uY29tcGFueSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNDAnIGhlaWdodD0nNDAnIHZpZXdCb3g9JzAgMCA0MCA0MCclM0UlM0NnIGZpbGwtcnVsZT0nZXZlbm9kZCclM0UlM0NnIGZpbGw9JyUyM2ZmZmZmZicgZmlsbC1vcGFjaXR5PScwLjM4JyUzRSUzQ3BhdGggZD0nTTAgMzguNTlsMi44My0yLjgzIDEuNDEgMS40MUwxLjQxIDQwSDB2LTEuNDF6TTAgMS40bDIuODMgMi44MyAxLjQxLTEuNDFMMS40MSAwSDB2MS40MXpNMzguNTkgNDBsLTIuODMtMi44MyAxLjQxLTEuNDFMNDAgMzguNTlWNDBoLTEuNDF6TTQwIDEuNDFsLTIuODMgMi44My0xLjQxLTEuNDFMMzguNTkgMEg0MHYxLjQxek0yMCAxOC42bDIuODMtMi44MyAxLjQxIDEuNDFMMjEuNDEgMjBsMi44MyAyLjgzLTEuNDEgMS40MUwyMCAyMS40MWwtMi44MyAyLjgzLTEuNDEtMS40MUwxOC41OSAyMGwtMi44My0yLjgzIDEuNDEtMS40MUwyMCAxOC41OXonLyUzRSUzQy9nJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXCIpO1xuICBwYWRkaW5nOiAyMHB4O1xufSIsIkBpbXBvcnQgXCIuLi9hcHAtc2hlbGwucGFnZVwiO1xuXG4uY29tcGFueSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNDAnIGhlaWdodD0nNDAnIHZpZXdCb3g9JzAgMCA0MCA0MCclM0UlM0NnIGZpbGwtcnVsZT0nZXZlbm9kZCclM0UlM0NnIGZpbGw9JyUyM2ZmZmZmZicgZmlsbC1vcGFjaXR5PScwLjM4JyUzRSUzQ3BhdGggZD0nTTAgMzguNTlsMi44My0yLjgzIDEuNDEgMS40MUwxLjQxIDQwSDB2LTEuNDF6TTAgMS40bDIuODMgMi44MyAxLjQxLTEuNDFMMS40MSAwSDB2MS40MXpNMzguNTkgNDBsLTIuODMtMi44MyAxLjQxLTEuNDFMNDAgMzguNTlWNDBoLTEuNDF6TTQwIDEuNDFsLTIuODMgMi44My0xLjQxLTEuNDFMMzguNTkgMEg0MHYxLjQxek0yMCAxOC42bDIuODMtMi44MyAxLjQxIDEuNDFMMjEuNDEgMjBsMi44MyAyLjgzLTEuNDEgMS40MUwyMCAyMS40MWwtMi44MyAyLjgzLTEuNDEtMS40MUwxOC41OSAyMGwtMi44My0yLjgzIDEuNDEtMS40MUwyMCAxOC41OXonLyUzRSUzQy9nJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXCIpO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hvd2Nhc2UvYXBwLXNoZWxsL2FwcC1zaGVsbC5wYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi9UaXRhbiUyMEVzdGF0ZXMvc3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvZGF0YS1zdG9yZS1zdWJzZXQvZGF0YS1zdG9yZS1zdWJzZXQucGFnZS5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvZGF0YS1zdG9yZS1zdWJzZXQvZGF0YS1zdG9yZS1zdWJzZXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUNBQUE7QUNDRjtBRENFO0VBQ0Usd0NBQUE7RUFDQSxrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKO0FERUU7RUFDRSxzQkFBQTtBQ0FKO0FER0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDREo7QURJRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ0ZKOztBQ25CQTtFQUNFLHlCQUFBO0VBQ0Esd2lCQUFBO0VBQ0EsYUFBQTtBRHNCRjtBQ0NBLGduSEFBZ25IIiwic291cmNlc0NvbnRlbnQiOlsiLnNob3djYXNlLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcblxuICBpb24taXRlbS1kaXZpZGVyIHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIH1cblxuICAuc2hvd2Nhc2Utc2VjdGlvbiB7XG4gICAgbWFyZ2luOiAyMHB4IDIwcHggNjBweDtcbiAgfVxuXG4gIHByZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGJhY2tncm91bmQ6ICNDQ0M7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuXG4gIGNvZGUge1xuICAgIGNvbG9yOiAjRjkyNjcyO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbn1cbiIsIi5zaG93Y2FzZS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG59XG4uc2hvd2Nhc2UtY29udGVudCBpb24taXRlbS1kaXZpZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cbi5zaG93Y2FzZS1jb250ZW50IC5zaG93Y2FzZS1zZWN0aW9uIHtcbiAgbWFyZ2luOiAyMHB4IDIwcHggNjBweDtcbn1cbi5zaG93Y2FzZS1jb250ZW50IHByZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYmFja2dyb3VuZDogI0NDQztcbiAgcGFkZGluZzogMTBweDtcbn1cbi5zaG93Y2FzZS1jb250ZW50IGNvZGUge1xuICBjb2xvcjogI0Y5MjY3MjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmNvbXBhbnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzQwJyBoZWlnaHQ9JzQwJyB2aWV3Qm94PScwIDAgNDAgNDAnJTNFJTNDZyBmaWxsLXJ1bGU9J2V2ZW5vZGQnJTNFJTNDZyBmaWxsPSclMjNmZmZmZmYnIGZpbGwtb3BhY2l0eT0nMC4zOCclM0UlM0NwYXRoIGQ9J00wIDM4LjU5bDIuODMtMi44MyAxLjQxIDEuNDFMMS40MSA0MEgwdi0xLjQxek0wIDEuNGwyLjgzIDIuODMgMS40MS0xLjQxTDEuNDEgMEgwdjEuNDF6TTM4LjU5IDQwbC0yLjgzLTIuODMgMS40MS0xLjQxTDQwIDM4LjU5VjQwaC0xLjQxek00MCAxLjQxbC0yLjgzIDIuODMtMS40MS0xLjQxTDM4LjU5IDBINDB2MS40MXpNMjAgMTguNmwyLjgzLTIuODMgMS40MSAxLjQxTDIxLjQxIDIwbDIuODMgMi44My0xLjQxIDEuNDFMMjAgMjEuNDFsLTIuODMgMi44My0xLjQxLTEuNDFMMTguNTkgMjBsLTIuODMtMi44MyAxLjQxLTEuNDFMMjAgMTguNTl6Jy8lM0UlM0MvZyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVwiKTtcbiAgcGFkZGluZzogMjBweDtcbn0iLCJAaW1wb3J0IFwiLi4vYXBwLXNoZWxsLnBhZ2VcIjtcblxuLmNvbXBhbnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzQwJyBoZWlnaHQ9JzQwJyB2aWV3Qm94PScwIDAgNDAgNDAnJTNFJTNDZyBmaWxsLXJ1bGU9J2V2ZW5vZGQnJTNFJTNDZyBmaWxsPSclMjNmZmZmZmYnIGZpbGwtb3BhY2l0eT0nMC4zOCclM0UlM0NwYXRoIGQ9J00wIDM4LjU5bDIuODMtMi44MyAxLjQxIDEuNDFMMS40MSA0MEgwdi0xLjQxek0wIDEuNGwyLjgzIDIuODMgMS40MS0xLjQxTDEuNDEgMEgwdjEuNDF6TTM4LjU5IDQwbC0yLjgzLTIuODMgMS40MS0xLjQxTDQwIDM4LjU5VjQwaC0xLjQxek00MCAxLjQxbC0yLjgzIDIuODMtMS40MS0xLjQxTDM4LjU5IDBINDB2MS40MXpNMjAgMTguNmwyLjgzLTIuODMgMS40MSAxLjQxTDIxLjQxIDIwbDIuODMgMi44My0xLjQxIDEuNDFMMjAgMjEuNDFsLTIuODMgMi44My0xLjQxLTEuNDFMMTguNTkgMjBsLTIuODMtMi44MyAxLjQxLTEuNDFMMjAgMTguNTl6Jy8lM0UlM0MvZyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVwiKTtcbiAgcGFkZGluZzogMjBweDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 81960:
/*!********************************************************************!*\
  !*** ./src/app/showcase/app-shell/image-shell/image-shell.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageShellPage": () => (/* binding */ ImageShellPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shell/aspect-ratio/aspect-ratio.component */ 89330);
/* harmony import */ var _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shell/image-shell/image-shell.component */ 71408);




const _c0 = function () {
  return {
    w: 1,
    h: 1
  };
};
const _c1 = function () {
  return {
    w: 3,
    h: 2
  };
};
const _c2 = function () {
  return {
    w: 2,
    h: 1
  };
};
class ImageShellPage {
  constructor() {}
  static #_ = this.ɵfac = function ImageShellPage_Factory(t) {
    return new (t || ImageShellPage)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ImageShellPage,
    selectors: [["app-image-shell-page"]],
    decls: 359,
    vars: 50,
    consts: [["color", "primary"], ["slot", "start"], ["defaultHref", "showcase/app-shell"], [1, "showcase-content"], [1, "showcase-section"], [2, "width", "30%", "margin", "0px auto"], [3, "ratio"], [3, "src", "alt"], ["animation", "spinner", 3, "src", "alt"], ["animation", "gradient", 3, "src", "alt"], ["animation", "spinner", 1, "add-overlay", 3, "src", "alt"], [2, "--image-shell-loading-background", "rgba(233, 30, 99, .25)", 3, "src", "alt"], ["animation", "spinner", 1, "add-overlay", 2, "--image-shell-overlay-background", "rgba(103, 58, 183, .40)", 3, "src", "alt"], ["animation", "spinner", 2, "--image-shell-spinner-size", "40px", "--image-shell-spinner-color", "#000000", 3, "src", "alt"], ["animation", "gradient", 2, "--image-shell-loading-background", "rgba(255, 3, 109, 0.6)", "--image-shell-animation-color", "rgba(156, 4, 68, 0.7)", 3, "src", "alt"], [2, "width", "80%", "margin", "0px auto"], ["animation", "spinner", 2, "--image-shell-border-radius", "10px", 3, "src", "alt"], ["animation", "gradient", 2, "--image-shell-border-radius", "10px", 3, "src", "alt"], ["animation", "spinner", 1, "add-overlay", 3, "display", "src"], [2, "margin", "10px"], ["animation", "spinner", 3, "display", "src"], ["animation", "spinner", 2, "background-position", "bottom right", 3, "display", "src"], [2, "width", "60%", "margin", "0px auto"], ["animation", "spinner", 2, "--image-shell-color", "#ff0000", 3, "src", "alt"]],
    template: function ImageShellPage_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Image Shell ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-content", 3)(7, "section", 4)(8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " This component enables to preload an image with an elegant shell. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "section", 4)(11, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Set different animation options");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " You can choose between ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "no animation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " (default), ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "spinner animation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, ", and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "gradient background");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " animation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "No animation (default)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "<app-image-shell [src]=\"\" [alt]=\"\"></app-image-shell>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 5)(29, "app-aspect-ratio", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "app-image-shell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Spinner animation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "<app-image-shell ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "animation=\"spinner\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, " [src]=\"\" [alt]=\"\"></app-image-shell>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 5)(39, "app-aspect-ratio", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "app-image-shell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Gradient animation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "<app-image-shell ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "animation=\"gradient\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, " [src]=\"\" [alt]=\"\"></app-image-shell>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 5)(49, "app-aspect-ratio", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "app-image-shell", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "section", 4)(52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, " You can add/remove the following ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Classes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, " to adjust the shell element behavior: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Overlay");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, " This class adds a background overlay after the image has loaded. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "<app-image-shell animation=\"spinner\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "class=\"add-overlay\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, " [src]=\"''./assets/sample-images/travel/Travel2-64.47.png''\" [alt]=\"\"></app-image-shell>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 5)(67, "app-aspect-ratio", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "app-image-shell", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "section", 4)(70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, " You can also override these ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "CSS 4 variables");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, " to adjust the shell element style ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "Background");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "app-image-shell {\n  --image-shell-loading-background: rgba(233, 30, 99, .25);\n}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 5)(80, "app-aspect-ratio", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](81, "app-image-shell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "Overlay");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "app-image-shell {\n  --image-shell-overlay-background: rgba(103, 58, 183, .40);\n}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 5)(87, "app-aspect-ratio", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](88, "app-image-shell", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, "Spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, "app-image-shell {\n  --image-shell-spinner-size: 40px;\n  --image-shell-spinner-color: #000000;\n}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "div", 5)(94, "app-aspect-ratio", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](95, "app-image-shell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, "Background Animation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "p")(99, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100, "Note:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101, " These properties are only applied when using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](103, "animation=\"gradient\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, "app-image-shell {\n  --image-shell-loading-background: rgba(255, 3, 109, 0.6);\n  --image-shell-animation-color: rgba(156, 4, 68, 0.7);\n}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "div", 5)(108, "app-aspect-ratio", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](109, "app-image-shell", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](111, "Border Radius");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](113, "app-image-shell {\n  --image-shell-border-radius: 10px;\n}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "ion-row")(115, "ion-col")(116, "div", 15)(117, "app-aspect-ratio", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](118, "app-image-shell", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "ion-col")(120, "div", 15)(121, "app-aspect-ratio", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](122, "app-image-shell", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "section", 4)(124, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](125, "Cover Image Display");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](127, " In addition to the default ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](129, "<app-image-shell>");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](130, ", you can specify a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](132, "cover");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](133, " display if you want to display your image as a background-image. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](135, " This is different from the default display, because (although it's not mandatory) cover display is designed to contain content (for example some text) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](136, "pre")(137, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](138, "<app-image-shell [display]=\"'cover'\" animation=\"spinner\" class=\"add-overlay\" [src]=\"\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](139, "\n  <app-aspect-ratio [ratio]=\"{w:3, h:2}\">\n    Some Text\n  </app-aspect-ratio>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](141, "</app-image-shell>");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](142, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](143, "app-image-shell", 18)(144, "app-aspect-ratio", 6)(145, "h4", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](146, "Some Text on top of a background-image container");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](147, "section", 4)(148, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](149, "Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](150, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](151, " Let me explain you the differences between ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](153, "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](154, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](155, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](156, "cover");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](157, " display and when you should use each one. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](158, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](159, "Default Mode Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](160, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](161, " You should use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](163, "default display");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](164, " when you are 100% confident on the aspect ratio of an image. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](165, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](166, " If the image ratio does not match the specified aspect ratio, the image will be stretched. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](167, "p")(168, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](169, "Expected behavior:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](170, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](171, " The image ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](172, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](173, "WILL");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](174, " be stretched. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](175, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](176, " We define an aspect ratio of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](177, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](178, "2:1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](179, " but the image has an aspect ratio of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](180, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](181, "1:1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](182, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](183, "div", 15)(184, "app-aspect-ratio", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](185, "app-image-shell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](186, "p")(187, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](188, "Expected behavior:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](189, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](190, " The image ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](191, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](192, "WON'T");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](193, " be stretched. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](194, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](195, " We define an aspect ratio of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](196, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](197, "1:1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](198, " that matches the image ratio of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](199, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](200, "1:1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](201, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](202, "div", 15)(203, "app-aspect-ratio", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](204, "app-image-shell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](205, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](206, "Cover Mode Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](207, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](208, " You should use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](209, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](210, "cover display");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](211, " when you want to fill a container with an image and you don't care if the image is shown completly or a portion of it. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](212, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](213, " If the image ratio does not match the specified aspect ratio, the image will be cropped to fit the available space without stretching the image. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](214, "p")(215, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](216, "Expected behavior:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](217, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](218, " The image will be cropped to fill the available space. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](219, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](220, " We define an aspect ratio of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](221, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](222, "2:1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](223, " but the image has an aspect ratio of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](224, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](225, "1:1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](226, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](227, "div", 15)(228, "app-image-shell", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](229, "app-aspect-ratio", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](230, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](231, " You can also change the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](232, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](233, "background-position");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](234, " property to adjust how the image is placed inside the container. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](235, "p")(236, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](237, "Notice:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](238, " This only applies to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](239, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](240, "cover");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](241, " display. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](242, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](243, "app-image-shell[display=\"cover\"] {\n  background-position: bottom right;\n}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](244, "div", 15)(245, "app-image-shell", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](246, "app-aspect-ratio", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](247, "section", 4)(248, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](249, "Image load ERROR");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](250, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](251, " In case the image url is incorrect or the server has any problem, we should show a message accordingly instead of an infinite loading animation. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](252, "p")(253, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](254, "Notice:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](255, " Images with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](256, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](257, "cover");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](258, " display may have text above them. For usability reasons we disabled the error message to avoid confusion. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](259, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](260, "Set message color");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](261, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](262, "app-image-shell {\n  --image-shell-color: #ff0000;\n}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](263, "pre")(264, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](265, "<app-aspect-ratio [ratio]=\"{w:3, h:2}\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](266, "\n  <app-image-shell animation=\"spinner\" [src]=\"'./assets/non-existent-image.jpg'\" [alt]=\"\"></app-image-shell>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](267, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](268, "</app-aspect-ratio>");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](269, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](270, "div", 22)(271, "app-aspect-ratio", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](272, "app-image-shell", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](273, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](274, "Use other properties");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](275, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](276, "app-image-shell {\n  --image-shell-border-radius: 10px;\n}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](277, "pre")(278, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](279, "<app-aspect-ratio [ratio]=\"{w:3, h:2}\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](280, "\n  <app-image-shell animation=\"gradient\" [src]=\"'./assets/non-existent-image.jpg'\" [alt]=\"\"></app-image-shell>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](281, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](282, "</app-aspect-ratio>");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](283, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](284, "div", 22)(285, "app-aspect-ratio", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](286, "app-image-shell", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](287, "section", 4)(288, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](289, "Image lazy loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](290, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](291, " By default we enabled the Image element ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](292, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](293, "loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](294, " attribute. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](295, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](296, " It's used to instruct the browser to defer loading of images that are off-screen until the user scrolls near them. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](297, "p")(298, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](299, "Notice:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](300, " This does not work on images with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](301, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](302, "cover");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](303, " display because we use a hidden aux image. As it's hidden, if set loading to 'lazy' it won't ever trigger the loading mechanism. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](304, "section", 4)(305, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](306, "Maintain Aspect Ratio");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](307, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](308, " We use the handy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](309, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](310, "<app-aspect-ratio>");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](311, " to ensure the image shell mantains a specified aspect ratio. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](312, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](313, " By doing so, we prevent content from jumping around the page while assets (images) are loading. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](314, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](315, "Default display");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](316, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](317, " Just surround the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](318, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](319, "<app-image-shell>");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](320, " with an ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](321, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](322, "<app-aspect-ratio>");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](323, " element ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](324, "pre")(325, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](326, "<app-aspect-ratio [ratio]=\"{w:3, h:2}\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](327, "\n  <app-image-shell animation=\"spinner\" [src]=\"\" [alt]=\"\"></app-image-shell>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](328, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](329, "</app-aspect-ratio>");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](330, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](331, "div", 22)(332, "app-aspect-ratio", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](333, "app-image-shell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](334, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](335, "Cover display");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](336, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](337, " When using the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](338, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](339, "cover");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](340, " display we need to include the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](341, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](342, "<app-aspect-ratio>");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](343, " inside the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](344, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](345, "<app-image-shell>");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](346, " element instead of surrounding it. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](347, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](348, "<app-image-shell [display]=\"'cover'\" animation=\"spinner\" class=\"add-overlay\" [src]=\"\">\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](349, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](350, "<app-aspect-ratio [ratio]=\"{w:3, h:2}\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](351, "\n    Some Text\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](352, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](353, "</app-aspect-ratio>");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](354, "\n</app-image-shell>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](355, "app-image-shell", 18)(356, "app-aspect-ratio", 6)(357, "h4", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](358, "Some Text on top of a background-image container");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](31, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](32, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](33, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](34, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", "./assets/sample-images/travel/Travel2-64.47.png");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](35, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](36, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", "./assets/sample-images/travel/Travel2-64.47.png");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](37, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](38, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](39, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](40, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("display", "cover");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](41, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](42, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", "./assets/sample-images/getting-started/category2-1.1.png");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](43, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", "./assets/sample-images/getting-started/category2-1.1.png");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("display", "cover")("src", "./assets/sample-images/getting-started/category2-1.1.png");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](44, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("display", "cover")("src", "./assets/sample-images/getting-started/category2-1.1.png");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](45, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](46, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", "./assets/non-existent-image.jpg");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](47, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", "./assets/non-existent-image.jpg");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](48, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("display", "cover");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](49, _c1));
      }
    },
    dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonBackButtonDelegate, _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_0__.AspectRatioComponent, _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_1__.ImageShellComponent],
    styles: [".showcase-content[_ngcontent-%COMP%] {\n  --background: var(--app-background);\n}\n.showcase-content[_ngcontent-%COMP%]   ion-item-divider[_ngcontent-%COMP%] {\n  --background: var(--ion-color-secondary);\n  --color: var(--ion-color-lightest);\n  text-transform: uppercase;\n  font-weight: 500;\n  letter-spacing: 1px;\n}\n.showcase-content[_ngcontent-%COMP%]   .showcase-section[_ngcontent-%COMP%] {\n  margin: 20px 20px 60px;\n}\n.showcase-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  font-size: 14px;\n  background: #CCC;\n  padding: 10px;\n}\n.showcase-content[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: #F92672;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC1zaGVsbC5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9UaXRhbiUyMEVzdGF0ZXMvc3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvaW1hZ2Utc2hlbGwvaW1hZ2Utc2hlbGwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUNBQUE7QUNDRjtBRENFO0VBQ0Usd0NBQUE7RUFDQSxrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKO0FERUU7RUFDRSxzQkFBQTtBQ0FKO0FER0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDREo7QURJRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ0ZKIiwiZmlsZSI6ImltYWdlLXNoZWxsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG93Y2FzZS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG5cbiAgaW9uLWl0ZW0tZGl2aWRlciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB9XG5cbiAgLnNob3djYXNlLXNlY3Rpb24ge1xuICAgIG1hcmdpbjogMjBweCAyMHB4IDYwcHg7XG4gIH1cblxuICBwcmUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBiYWNrZ3JvdW5kOiAjQ0NDO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cblxuICBjb2RlIHtcbiAgICBjb2xvcjogI0Y5MjY3MjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG59XG4iLCIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xufVxuLnNob3djYXNlLWNvbnRlbnQgaW9uLWl0ZW0tZGl2aWRlciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCAuc2hvd2Nhc2Utc2VjdGlvbiB7XG4gIG1hcmdpbjogMjBweCAyMHB4IDYwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBwcmUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJhY2tncm91bmQ6ICNDQ0M7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBjb2RlIHtcbiAgY29sb3I6ICNGOTI2NzI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hvd2Nhc2UvYXBwLXNoZWxsL2FwcC1zaGVsbC5wYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi9UaXRhbiUyMEVzdGF0ZXMvc3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvaW1hZ2Utc2hlbGwvaW1hZ2Utc2hlbGwucGFnZS5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvaW1hZ2Utc2hlbGwvaW1hZ2Utc2hlbGwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUNBQUE7QUNDRjtBRENFO0VBQ0Usd0NBQUE7RUFDQSxrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKO0FERUU7RUFDRSxzQkFBQTtBQ0FKO0FER0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDREo7QURJRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ0ZKO0FDQ0EsbzBEQUFvMEQiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuXG4gIGlvbi1pdGVtLWRpdmlkZXIge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgfVxuXG4gIC5zaG93Y2FzZS1zZWN0aW9uIHtcbiAgICBtYXJnaW46IDIwcHggMjBweCA2MHB4O1xuICB9XG5cbiAgcHJlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgYmFja2dyb3VuZDogI0NDQztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG5cbiAgY29kZSB7XG4gICAgY29sb3I6ICNGOTI2NzI7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxufVxuIiwiLnNob3djYXNlLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcbn1cbi5zaG93Y2FzZS1jb250ZW50IGlvbi1pdGVtLWRpdmlkZXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuLnNob3djYXNlLWNvbnRlbnQgLnNob3djYXNlLXNlY3Rpb24ge1xuICBtYXJnaW46IDIwcHggMjBweCA2MHB4O1xufVxuLnNob3djYXNlLWNvbnRlbnQgcHJlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiAjQ0NDO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLnNob3djYXNlLWNvbnRlbnQgY29kZSB7XG4gIGNvbG9yOiAjRjkyNjcyO1xuICBmb250LXdlaWdodDogNTAwO1xufSIsIi5zaG93Y2FzZS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG59XG4uc2hvd2Nhc2UtY29udGVudCBpb24taXRlbS1kaXZpZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cbi5zaG93Y2FzZS1jb250ZW50IC5zaG93Y2FzZS1zZWN0aW9uIHtcbiAgbWFyZ2luOiAyMHB4IDIwcHggNjBweDtcbn1cbi5zaG93Y2FzZS1jb250ZW50IHByZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYmFja2dyb3VuZDogI0NDQztcbiAgcGFkZGluZzogMTBweDtcbn1cbi5zaG93Y2FzZS1jb250ZW50IGNvZGUge1xuICBjb2xvcjogI0Y5MjY3MjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1TDJGd2NDMXphR1ZzYkM1d1lXZGxMbk5qYzNNaUxDSXVMaTh1TGk4dUxpOHVMaTh1TGk4dUxpOVVhWFJoYmlVeU1FVnpkR0YwWlhNdmMzSmpMMkZ3Y0M5emFHOTNZMkZ6WlM5aGNIQXRjMmhsYkd3dmFXMWhaMlV0YzJobGJHd3ZhVzFoWjJVdGMyaGxiR3d1Y0dGblpTNXpZM056SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQk8wVkJRMFVzYlVOQlFVRTdRVU5EUmp0QlJFTkZPMFZCUTBVc2QwTkJRVUU3UlVGRFFTeHJRMEZCUVR0RlFVTkJMSGxDUVVGQk8wVkJRMEVzWjBKQlFVRTdSVUZEUVN4dFFrRkJRVHRCUTBOS08wRkVSVVU3UlVGRFJTeHpRa0ZCUVR0QlEwRktPMEZFUjBVN1JVRkRSU3hsUVVGQk8wVkJRMEVzWjBKQlFVRTdSVUZEUVN4aFFVRkJPMEZEUkVvN1FVUkpSVHRGUVVORkxHTkJRVUU3UlVGRFFTeG5Ra0ZCUVR0QlEwWktJaXdpWm1sc1pTSTZJbWx0WVdkbExYTm9aV3hzTG5CaFoyVXVjMk56Y3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpNXphRzkzWTJGelpTMWpiMjUwWlc1MElIdGNiaUFnTFMxaVlXTnJaM0p2ZFc1a09pQjJZWElvTFMxaGNIQXRZbUZqYTJkeWIzVnVaQ2s3WEc1Y2JpQWdhVzl1TFdsMFpXMHRaR2wyYVdSbGNpQjdYRzRnSUNBZ0xTMWlZV05yWjNKdmRXNWtPaUIyWVhJb0xTMXBiMjR0WTI5c2IzSXRjMlZqYjI1a1lYSjVLVHRjYmlBZ0lDQXRMV052Ykc5eU9pQjJZWElvTFMxcGIyNHRZMjlzYjNJdGJHbG5hSFJsYzNRcE8xeHVJQ0FnSUhSbGVIUXRkSEpoYm5ObWIzSnRPaUIxY0hCbGNtTmhjMlU3WEc0Z0lDQWdabTl1ZEMxM1pXbG5hSFE2SURVd01EdGNiaUFnSUNCc1pYUjBaWEl0YzNCaFkybHVaem9nTVhCNE8xeHVJQ0I5WEc1Y2JpQWdMbk5vYjNkallYTmxMWE5sWTNScGIyNGdlMXh1SUNBZ0lHMWhjbWRwYmpvZ01qQndlQ0F5TUhCNElEWXdjSGc3WEc0Z0lIMWNibHh1SUNCd2NtVWdlMXh1SUNBZ0lHWnZiblF0YzJsNlpUb2dNVFJ3ZUR0Y2JpQWdJQ0JpWVdOclozSnZkVzVrT2lBalEwTkRPMXh1SUNBZ0lIQmhaR1JwYm1jNklERXdjSGc3WEc0Z0lIMWNibHh1SUNCamIyUmxJSHRjYmlBZ0lDQmpiMnh2Y2pvZ0kwWTVNalkzTWp0Y2JpQWdJQ0JtYjI1MExYZGxhV2RvZERvZ05UQXdPMXh1SUNCOVhHNTlYRzRpTENJdWMyaHZkMk5oYzJVdFkyOXVkR1Z1ZENCN1hHNGdJQzB0WW1GamEyZHliM1Z1WkRvZ2RtRnlLQzB0WVhCd0xXSmhZMnRuY205MWJtUXBPMXh1ZlZ4dUxuTm9iM2RqWVhObExXTnZiblJsYm5RZ2FXOXVMV2wwWlcwdFpHbDJhV1JsY2lCN1hHNGdJQzB0WW1GamEyZHliM1Z1WkRvZ2RtRnlLQzB0YVc5dUxXTnZiRzl5TFhObFkyOXVaR0Z5ZVNrN1hHNGdJQzB0WTI5c2IzSTZJSFpoY2lndExXbHZiaTFqYjJ4dmNpMXNhV2RvZEdWemRDazdYRzRnSUhSbGVIUXRkSEpoYm5ObWIzSnRPaUIxY0hCbGNtTmhjMlU3WEc0Z0lHWnZiblF0ZDJWcFoyaDBPaUExTURBN1hHNGdJR3hsZEhSbGNpMXpjR0ZqYVc1bk9pQXhjSGc3WEc1OVhHNHVjMmh2ZDJOaGMyVXRZMjl1ZEdWdWRDQXVjMmh2ZDJOaGMyVXRjMlZqZEdsdmJpQjdYRzRnSUcxaGNtZHBiam9nTWpCd2VDQXlNSEI0SURZd2NIZzdYRzU5WEc0dWMyaHZkMk5oYzJVdFkyOXVkR1Z1ZENCd2NtVWdlMXh1SUNCbWIyNTBMWE5wZW1VNklERTBjSGc3WEc0Z0lHSmhZMnRuY205MWJtUTZJQ05EUTBNN1hHNGdJSEJoWkdScGJtYzZJREV3Y0hnN1hHNTlYRzR1YzJodmQyTmhjMlV0WTI5dWRHVnVkQ0JqYjJSbElIdGNiaUFnWTI5c2IzSTZJQ05HT1RJMk56STdYRzRnSUdadmJuUXRkMlZwWjJoME9pQTFNREE3WEc1OUlsMTkgKi8iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 4195:
/*!************************************************************************************!*\
  !*** ./src/app/showcase/app-shell/simple-data-binding/simple-data-binding.page.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SimpleDataBindingPage": () => (/* binding */ SimpleDataBindingPage)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 28653);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 78947);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 32313);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var _showcase_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../showcase.service */ 82909);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shell/aspect-ratio/aspect-ratio.component */ 89330);
/* harmony import */ var _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shell/image-shell/image-shell.component */ 71408);
/* harmony import */ var _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shell/text-shell/text-shell.component */ 94840);









const _c0 = function () {
  return {
    w: 2,
    h: 1
  };
};
const _c1 = function () {
  return {
    w: 1,
    h: 1
  };
};
class SimpleDataBindingPage {
  constructor(showcaseService) {
    this.showcaseService = showcaseService;
    // Aux properties for the Simple Fetch (HttpClient) showcase
    this.simpleFetchButtonDisabled = true;
    this.simpleFetchCountdown = 0;
  }
  ngOnInit() {
    this.showcaseShellSimpleFetch(10);
  }
  showcaseShellSimpleFetch(countdown) {
    // Assign an (empty / null) value to the shell object to restore it's 'loading' state
    this.simpleFetchData = null;
    // Prevent rage clicks on the 'Fetch more Data' button
    this.simpleFetchButtonDisabled = true;
    // Start a countdown and an interval before executing the fetch function
    this.simpleFetchCountdown = countdown;
    this.simpleFetchInterval = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.interval)(1000);
    // Start a countdown to showcase the shell elements animations for a few seconds before the data get's fetched into the shell object
    const timer$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.timer)(countdown * 1000);
    // When timer emits after X seconds, complete source
    this.simpleFetchInterval.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(timer$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.finalize)(() => this.simpleFetchButtonDisabled = false)).subscribe({
      next: () => {
        this.simpleFetchCountdown--;
      },
      complete: () => {
        this.simpleFetchCountdown = 0;
        // Once the countdown ends, fetch data using the HttpClient
        this.showcaseService.getSimpleDataSource().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1) // Force Observable to complete
        ).subscribe(val => {
          console.log('Fetching shell data using the HttpClient', val);
          this.simpleFetchData = val;
        });
      }
    });
  }
  static #_ = this.ɵfac = function SimpleDataBindingPage_Factory(t) {
    return new (t || SimpleDataBindingPage)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_showcase_service__WEBPACK_IMPORTED_MODULE_0__.ShowcaseService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: SimpleDataBindingPage,
    selectors: [["app-simple-data-binding"]],
    decls: 36,
    vars: 13,
    consts: [["color", "primary"], ["slot", "start"], ["defaultHref", "showcase/app-shell"], [1, "showcase-content"], [1, "showcase-section"], [2, "background-color", "#FFF", "padding", "10px", "margin", "20px"], ["size", "12"], ["animation", "gradient", 1, "add-overlay", 3, "display", "src", "alt"], [3, "ratio"], [2, "margin", "10px", "text-align", "center", "color", "#FFF"], ["size", "4"], ["animation", "gradient", 3, "src", "alt"], ["size", "8"], [2, "margin-top", "0px"], ["animation", "gradient", 3, "data"], ["animation", "gradient", "lines", "3", 3, "data"], [3, "disabled", "click"]],
    template: function SimpleDataBindingPage_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, " Simple Data Binding ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "ion-content", 3)(7, "section", 4)(8, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "Back to basics ...");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, " We can tweak our data stream with some RxJs operators and achieve an app shell loading interaction ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, " Let's set a timeout and fetch data using the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "HttpClient");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, " Data coming in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "ion-row", 5)(21, "ion-col", 6)(22, "app-image-shell", 7)(23, "app-aspect-ratio", 8)(24, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, "Heading on top of a cover image");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "ion-col", 10)(27, "app-aspect-ratio", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](28, "app-image-shell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "ion-col", 12)(30, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](31, "app-text-shell", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](33, "app-text-shell", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "ion-button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SimpleDataBindingPage_Template_ion_button_click_34_listener() {
          return ctx.showcaseShellSimpleFetch(3);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](35, "Fetch more Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", ctx.simpleFetchCountdown, " seconds");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("display", "cover")("src", ctx.simpleFetchData == null ? null : ctx.simpleFetchData.cover)("alt", "Sample Image Cover");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](12, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", ctx.simpleFetchData == null ? null : ctx.simpleFetchData.image)("alt", "Sample Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("data", ctx.simpleFetchData == null ? null : ctx.simpleFetchData.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("data", ctx.simpleFetchData == null ? null : ctx.simpleFetchData.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx.simpleFetchButtonDisabled);
      }
    },
    dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonBackButtonDelegate, _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_1__.AspectRatioComponent, _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_2__.ImageShellComponent, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_3__.TextShellComponent],
    styles: [".showcase-content[_ngcontent-%COMP%] {\n  --background: var(--app-background);\n}\n.showcase-content[_ngcontent-%COMP%]   ion-item-divider[_ngcontent-%COMP%] {\n  --background: var(--ion-color-secondary);\n  --color: var(--ion-color-lightest);\n  text-transform: uppercase;\n  font-weight: 500;\n  letter-spacing: 1px;\n}\n.showcase-content[_ngcontent-%COMP%]   .showcase-section[_ngcontent-%COMP%] {\n  margin: 20px 20px 60px;\n}\n.showcase-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  font-size: 14px;\n  background: #CCC;\n  padding: 10px;\n}\n.showcase-content[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: #F92672;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC1zaGVsbC5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9UaXRhbiUyMEVzdGF0ZXMvc3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvc2ltcGxlLWRhdGEtYmluZGluZy9zaW1wbGUtZGF0YS1iaW5kaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1DQUFBO0FDQ0Y7QURDRTtFQUNFLHdDQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBREVFO0VBQ0Usc0JBQUE7QUNBSjtBREdFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0RKO0FESUU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNGSiIsImZpbGUiOiJzaW1wbGUtZGF0YS1iaW5kaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG93Y2FzZS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG5cbiAgaW9uLWl0ZW0tZGl2aWRlciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB9XG5cbiAgLnNob3djYXNlLXNlY3Rpb24ge1xuICAgIG1hcmdpbjogMjBweCAyMHB4IDYwcHg7XG4gIH1cblxuICBwcmUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBiYWNrZ3JvdW5kOiAjQ0NDO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cblxuICBjb2RlIHtcbiAgICBjb2xvcjogI0Y5MjY3MjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG59XG4iLCIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xufVxuLnNob3djYXNlLWNvbnRlbnQgaW9uLWl0ZW0tZGl2aWRlciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCAuc2hvd2Nhc2Utc2VjdGlvbiB7XG4gIG1hcmdpbjogMjBweCAyMHB4IDYwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBwcmUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJhY2tncm91bmQ6ICNDQ0M7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBjb2RlIHtcbiAgY29sb3I6ICNGOTI2NzI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hvd2Nhc2UvYXBwLXNoZWxsL2FwcC1zaGVsbC5wYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi9UaXRhbiUyMEVzdGF0ZXMvc3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvc2ltcGxlLWRhdGEtYmluZGluZy9zaW1wbGUtZGF0YS1iaW5kaW5nLnBhZ2Uuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hvd2Nhc2UvYXBwLXNoZWxsL3NpbXBsZS1kYXRhLWJpbmRpbmcvc2ltcGxlLWRhdGEtYmluZGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBQTtBQ0NGO0FEQ0U7RUFDRSx3Q0FBQTtFQUNBLGtDQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURFRTtFQUNFLHNCQUFBO0FDQUo7QURHRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNESjtBRElFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDRko7QUNDQSxvMkRBQW8yRCIsInNvdXJjZXNDb250ZW50IjpbIi5zaG93Y2FzZS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG5cbiAgaW9uLWl0ZW0tZGl2aWRlciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB9XG5cbiAgLnNob3djYXNlLXNlY3Rpb24ge1xuICAgIG1hcmdpbjogMjBweCAyMHB4IDYwcHg7XG4gIH1cblxuICBwcmUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBiYWNrZ3JvdW5kOiAjQ0NDO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cblxuICBjb2RlIHtcbiAgICBjb2xvcjogI0Y5MjY3MjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG59XG4iLCIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xufVxuLnNob3djYXNlLWNvbnRlbnQgaW9uLWl0ZW0tZGl2aWRlciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCAuc2hvd2Nhc2Utc2VjdGlvbiB7XG4gIG1hcmdpbjogMjBweCAyMHB4IDYwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBwcmUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJhY2tncm91bmQ6ICNDQ0M7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBjb2RlIHtcbiAgY29sb3I6ICNGOTI2NzI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59IiwiLnNob3djYXNlLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcbn1cbi5zaG93Y2FzZS1jb250ZW50IGlvbi1pdGVtLWRpdmlkZXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuLnNob3djYXNlLWNvbnRlbnQgLnNob3djYXNlLXNlY3Rpb24ge1xuICBtYXJnaW46IDIwcHggMjBweCA2MHB4O1xufVxuLnNob3djYXNlLWNvbnRlbnQgcHJlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiAjQ0NDO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLnNob3djYXNlLWNvbnRlbnQgY29kZSB7XG4gIGNvbG9yOiAjRjkyNjcyO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMMkZ3Y0MxemFHVnNiQzV3WVdkbExuTmpjM01pTENJdUxpOHVMaTh1TGk4dUxpOHVMaTh1TGk5VWFYUmhiaVV5TUVWemRHRjBaWE12YzNKakwyRndjQzl6YUc5M1kyRnpaUzloY0hBdGMyaGxiR3d2YzJsdGNHeGxMV1JoZEdFdFltbHVaR2x1Wnk5emFXMXdiR1V0WkdGMFlTMWlhVzVrYVc1bkxuQmhaMlV1YzJOemN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRVHRGUVVORkxHMURRVUZCTzBGRFEwWTdRVVJEUlR0RlFVTkZMSGREUVVGQk8wVkJRMEVzYTBOQlFVRTdSVUZEUVN4NVFrRkJRVHRGUVVOQkxHZENRVUZCTzBWQlEwRXNiVUpCUVVFN1FVTkRTanRCUkVWRk8wVkJRMFVzYzBKQlFVRTdRVU5CU2p0QlJFZEZPMFZCUTBVc1pVRkJRVHRGUVVOQkxHZENRVUZCTzBWQlEwRXNZVUZCUVR0QlEwUktPMEZFU1VVN1JVRkRSU3hqUVVGQk8wVkJRMEVzWjBKQlFVRTdRVU5HU2lJc0ltWnBiR1VpT2lKemFXMXdiR1V0WkdGMFlTMWlhVzVrYVc1bkxuQmhaMlV1YzJOemN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaTV6YUc5M1kyRnpaUzFqYjI1MFpXNTBJSHRjYmlBZ0xTMWlZV05yWjNKdmRXNWtPaUIyWVhJb0xTMWhjSEF0WW1GamEyZHliM1Z1WkNrN1hHNWNiaUFnYVc5dUxXbDBaVzB0WkdsMmFXUmxjaUI3WEc0Z0lDQWdMUzFpWVdOclozSnZkVzVrT2lCMllYSW9MUzFwYjI0dFkyOXNiM0l0YzJWamIyNWtZWEo1S1R0Y2JpQWdJQ0F0TFdOdmJHOXlPaUIyWVhJb0xTMXBiMjR0WTI5c2IzSXRiR2xuYUhSbGMzUXBPMXh1SUNBZ0lIUmxlSFF0ZEhKaGJuTm1iM0p0T2lCMWNIQmxjbU5oYzJVN1hHNGdJQ0FnWm05dWRDMTNaV2xuYUhRNklEVXdNRHRjYmlBZ0lDQnNaWFIwWlhJdGMzQmhZMmx1WnpvZ01YQjRPMXh1SUNCOVhHNWNiaUFnTG5Ob2IzZGpZWE5sTFhObFkzUnBiMjRnZTF4dUlDQWdJRzFoY21kcGJqb2dNakJ3ZUNBeU1IQjRJRFl3Y0hnN1hHNGdJSDFjYmx4dUlDQndjbVVnZTF4dUlDQWdJR1p2Ym5RdGMybDZaVG9nTVRSd2VEdGNiaUFnSUNCaVlXTnJaM0p2ZFc1a09pQWpRME5ETzF4dUlDQWdJSEJoWkdScGJtYzZJREV3Y0hnN1hHNGdJSDFjYmx4dUlDQmpiMlJsSUh0Y2JpQWdJQ0JqYjJ4dmNqb2dJMFk1TWpZM01qdGNiaUFnSUNCbWIyNTBMWGRsYVdkb2REb2dOVEF3TzF4dUlDQjlYRzU5WEc0aUxDSXVjMmh2ZDJOaGMyVXRZMjl1ZEdWdWRDQjdYRzRnSUMwdFltRmphMmR5YjNWdVpEb2dkbUZ5S0MwdFlYQndMV0poWTJ0bmNtOTFibVFwTzF4dWZWeHVMbk5vYjNkallYTmxMV052Ym5SbGJuUWdhVzl1TFdsMFpXMHRaR2wyYVdSbGNpQjdYRzRnSUMwdFltRmphMmR5YjNWdVpEb2dkbUZ5S0MwdGFXOXVMV052Ykc5eUxYTmxZMjl1WkdGeWVTazdYRzRnSUMwdFkyOXNiM0k2SUhaaGNpZ3RMV2x2YmkxamIyeHZjaTFzYVdkb2RHVnpkQ2s3WEc0Z0lIUmxlSFF0ZEhKaGJuTm1iM0p0T2lCMWNIQmxjbU5oYzJVN1hHNGdJR1p2Ym5RdGQyVnBaMmgwT2lBMU1EQTdYRzRnSUd4bGRIUmxjaTF6Y0dGamFXNW5PaUF4Y0hnN1hHNTlYRzR1YzJodmQyTmhjMlV0WTI5dWRHVnVkQ0F1YzJodmQyTmhjMlV0YzJWamRHbHZiaUI3WEc0Z0lHMWhjbWRwYmpvZ01qQndlQ0F5TUhCNElEWXdjSGc3WEc1OVhHNHVjMmh2ZDJOaGMyVXRZMjl1ZEdWdWRDQndjbVVnZTF4dUlDQm1iMjUwTFhOcGVtVTZJREUwY0hnN1hHNGdJR0poWTJ0bmNtOTFibVE2SUNORFEwTTdYRzRnSUhCaFpHUnBibWM2SURFd2NIZzdYRzU5WEc0dWMyaHZkMk5oYzJVdFkyOXVkR1Z1ZENCamIyUmxJSHRjYmlBZ1kyOXNiM0k2SUNOR09USTJOekk3WEc0Z0lHWnZiblF0ZDJWcFoyaDBPaUExTURBN1hHNTlJbDE5ICovIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 41871:
/*!******************************************************************!*\
  !*** ./src/app/showcase/app-shell/text-shell/text-shell.page.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextShellPage": () => (/* binding */ TextShellPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shell/aspect-ratio/aspect-ratio.component */ 89330);
/* harmony import */ var _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shell/image-shell/image-shell.component */ 71408);
/* harmony import */ var _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shell/text-shell/text-shell.component */ 94840);






const _c0 = function () {
  return {
    w: 2,
    h: 1
  };
};
class TextShellPage {
  constructor() {
    this.sampleTextShellData = '';
  }
  static #_ = this.ɵfac = function TextShellPage_Factory(t) {
    return new (t || TextShellPage)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: TextShellPage,
    selectors: [["app-text-shell-page"]],
    decls: 310,
    vars: 26,
    consts: [["color", "primary"], ["slot", "start"], ["defaultHref", "showcase/app-shell"], [1, "showcase-content"], [1, "showcase-section", 2, "margin-bottom", "40px"], [1, "loading-state-demo"], [1, "showcase-section", "sticky-section"], ["placeholder", "When this text is empty the text-shell will show the loading state.", "clearOnEdit", "true", 2, "--background", "#FFF", 3, "ngModel", "ngModelChange"], [1, "showcase-section"], [2, "background-color", "#FFF", "padding", "20px"], [3, "data"], ["lines", "3", 3, "data"], [2, "background-color", "#FFF", "padding", "20px", "color", "#FFF", "font-weight", "500"], ["animation", "spinner", 1, "add-overlay", 3, "display", "src"], [3, "ratio"], [2, "margin", "20px 40px"], ["animation", "bouncing", 3, "data"], ["animation", "bouncing", "lines", "3", 3, "data"], ["animation", "gradient", 3, "data"], ["animation", "gradient", "lines", "3", 3, "data"], ["lines", "6", 2, "--text-shell-line-color", "#DDD", 3, "data"], ["animation", "bouncing", "lines", "2", 2, "--text-shell-line-color", "#DDD", 3, "data"], [2, "padding", "5px", "background", "#FFF"], ["animation", "gradient", "lines", "2", 2, "--text-shell-line-color", "transparent", "--text-shell-background", "#FFF", 3, "data"], [2, "--text-shell-line-color", "rgba(233, 30, 99, .25)", 3, "data"], [2, "padding", "5px", "background", "#000000"], ["lines", "3", 2, "--text-shell-line-color", "#FFFFFF", "--text-shell-background", "#000000", 3, "data"], ["lines", "3", "animation", "gradient", 2, "--text-shell-line-color", "transparent", "--text-shell-background", "#000000", "--text-shell-animation-background", "rgba(255, 3, 109, 0.6)", "--text-shell-animation-color", "rgba(156, 4, 68, 0.7)", 3, "data"], [2, "--text-shell-line-height", "40px", 3, "data"], ["lines", "4", 2, "--text-shell-line-gutter", "10px", "--text-shell-line-color", "#CCC", 3, "data"], [1, "sample-text-max-width"], [1, "sample-text-min-width", 2, "display", "inline-block"]],
    template: function TextShellPage_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Text Shell ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-content", 3)(7, "section", 4)(8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " This component is useful when you want to show a loading indicator while fetching text data from the server. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "<app-text-shell>");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " basically works by wrapping the text node with a loading indicator while you are fetching data. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, " While there are empty values the component adds some 'loading' styles and animations. Whereas while there are non empty values, the loading state is removed. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, " Try toggling the loading state of the text shells below by changing the value of this textarea. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 5)(20, "section", 6)(21, "ion-textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function TextShellPage_Template_ion_textarea_ngModelChange_21_listener($event) {
          return ctx.sampleTextShellData = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " You can reset the 'loading' state by clearing the textarea value. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "section", 8)(25, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "No animation (default)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, " Single line example ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "app-text-shell", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, " Multi-line example ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 9)(34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "app-text-shell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, " On top of another element (with transparent background) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 12)(39, "app-image-shell", 13)(40, "app-aspect-ratio", 14)(41, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "app-text-shell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "section", 8)(44, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Bouncing animation");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, " Single line example ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "app-text-shell", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, " Multi-line example ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 9)(53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](54, "app-text-shell", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, " On top of another element (with transparent background) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 12)(58, "app-image-shell", 13)(59, "app-aspect-ratio", 14)(60, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](61, "app-text-shell", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "p")(63, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "Note:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, " As we don\u2019t use masks, this approach works well with use cases that require transparent backgrounds. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "section", 8)(67, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "Gradient animation");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, " Single line example ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](72, "app-text-shell", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, " Multi-line example ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "div", 9)(76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](77, "app-text-shell", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, " On top of another element (with transparent background) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 12)(81, "app-image-shell", 13)(82, "app-aspect-ratio", 14)(83, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](84, "app-text-shell", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "p")(86, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, "Side effect:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, " This solution doesn\u2019t play well if you require the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90, "<app-text-shell>");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, " to have a transparent background as the masks need a solid color to work properly. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "section", 8)(93, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94, "Prepend and Append text to the data binded");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, " There are cases where we need to add some text before or after the value binded to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](98, "<app-text-shell>");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99, ". For example if we are loading a price value and we want to put the '$' before the price. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](101, "  <app-text-shell [data]=\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](103, "(sampleTextShellData) ? '$'.concat(' ', sampleTextShellData) : null");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](104, "\"></app-text-shell>\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](106, "app-text-shell", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](108, "<app-text-shell [data]=\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110, "(sampleTextShellData) ? sampleTextShellData.concat(' years old') : null");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](111, "\"></app-text-shell>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](113, "app-text-shell", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "section", 8)(115, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](116, "Other use cases");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](118, " The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](120, "<app-text-shell>");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](121, " element can be used alone or wrapped with a text tag (");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](123, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](124, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](126, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](127, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](129, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](130, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](132, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](133, ", etc). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](134, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](135, " In case you wrap it with a heading element, we included basic styles (");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](136, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](137, "src/theme/shell-defaults.scss");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](138, ") to match the different heading styles (mainly line-height associated to each heading). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](139, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](140, ":root {\n  h1 > app-text-shell {\n    --text-shell-line-height: 32px;\n    --text-shell-line-color: #CCC;\n  }\n}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](141, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](142, " By matching the line-height of the text-shell with the line-height of the wrapper element, we avoid page height bumps after the data gets loaded into the shells. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](143, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](144, "<h1>\n  <app-text-shell [data]=\"\"></app-text-shell>\n</h1>\n\n<h2>\n  <app-text-shell [data]=\"\"></app-text-shell>\n</h2>\n\n<h3>\n  <app-text-shell [data]=\"\"></app-text-shell>\n</h3>\n\n<h4>\n  <app-text-shell [data]=\"\"></app-text-shell>\n</h4>\n\n<h5>\n  <app-text-shell [data]=\"\"></app-text-shell>\n</h5>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](145, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](146, "app-text-shell", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](147, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](148, "app-text-shell", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](149, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](150, "app-text-shell", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](151, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](152, "app-text-shell", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](153, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](154, "app-text-shell", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](155, "section", 8)(156, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](157, " You can add/remove the following ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](158, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](159, "Attributes");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](160, " to adjust the shell element behavior ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](161, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](162, "Multi-line support");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](163, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](164, " You can set up-to 6 lines ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](165, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](166, "<p>\n  <app-text-shell ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](167, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](168, "lines=\"6\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](169, " [data]=\"\"></app-text-shell>\n</p>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](170, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](171, "app-text-shell", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](172, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](173, "Set different animation options");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](174, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](175, " You can choose between ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](176, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](177, "no animation");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](178, " (default), ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](179, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](180, "bouncing animation");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](181, ", and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](182, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](183, "gradient background with line masks on top");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](184, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](185, "<p>\n  <app-text-shell ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](186, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](187, "animation=\"bouncing\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](188, " lines=\"2\" [data]=\"\"></app-text-shell>\n</p>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](189, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](190, "app-text-shell", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](191, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](192, "<p>\n  <app-text-shell ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](193, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](194, "animation=\"gradient\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](195, " lines=\"2\" [data]=\"\"></app-text-shell>\n</p>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](196, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](197, "app-text-shell {\n  --text-shell-background: #FFF;\n  --text-shell-line-color: transparent;\n}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](198, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](199, "app-text-shell", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](200, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](201, " In this mode, the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](202, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](203, "--text-shell-background");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](204, " property refers to the masks colors. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](205, "p")(206, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](207, "Note:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](208, " When using a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](209, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](210, "gradient");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](211, " animation, make sure you set the line-color to transparent so the background animation that's beneath the masks can be seen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](212, "section", 8)(213, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](214, " You can also override these ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](215, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](216, "CSS 4 variables");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](217, " to adjust the shell element style ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](218, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](219, "Line color");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](220, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](221, "app-text-shell {\n  --text-shell-line-color: rgba(233, 30, 99, .25);\n}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](222, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](223, "app-text-shell", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](224, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](225, "Background");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](226, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](227, " Background by default is set to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](228, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](229, "transparent");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](230, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](231, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](232, "app-text-shell {\n  --text-shell-line-color: #FFFFFF;\n  --text-shell-background: #000000;\n}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](233, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](234, "app-text-shell", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](235, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](236, "Background Animation");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](237, "p")(238, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](239, "Note:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](240, " These properties are only applied when using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](241, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](242, "animation=\"gradient\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](243, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](244, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](245, "app-text-shell {\n  --text-shell-line-color: transparent;\n  --text-shell-background: #000000;\n  --text-shell-animation-background: rgba(255, 3, 109, 0.6);\n  --text-shell-animation-color: rgba(156, 4, 68, 0.7);\n}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](246, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](247, "app-text-shell", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](248, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](249, "Line height");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](250, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](251, "app-text-shell {\n  --text-shell-line-height: 40px;\n}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](252, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](253, "app-text-shell", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](254, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](255, "Line gutter");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](256, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](257, "app-text-shell {\n  --text-shell-line-gutter: 10px;\n}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](258, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](259, "app-text-shell", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](260, "section", 8)(261, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](262, "Max-width");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](263, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](264, " By default, the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](265, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](266, "<app-text-shell>");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](267, " element will fill it's container width. You can adjust this by setting a temporary ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](268, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](269, "max-width");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](270, " while the shell loading state is present. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](271, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](272, ".sample-text-max-width > app-text-shell {\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](273, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](274, "max-width: 50%;");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](275, "\n\n  &.text-loaded {\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](276, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](277, "max-width: unset;");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](278, "\n  }\n}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](279, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](280, "app-text-shell", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](281, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](282, "Min-width");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](283, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](284, " When the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](285, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](286, "<app-text-shell>");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](287, " parent container doesn't have a width defined, it may happen that the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](288, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](289, "<app-text-shell>");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](290, " inherits an undefined width and thus it's not shown. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](291, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](292, "In these cases setting a temporary ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](293, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](294, "min-width");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](295, " fixes the issue.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](296, "p")(297, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](298, "Note:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](299, " If the parent doesn't have a defined width, it will fail to set a min-width based on a percentage of it's parents width. You will have to use absolute units (px, ch, etc). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](300, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](301, ".sample-text-min-width > app-text-shell {\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](302, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](303, "min-width: 80px;");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](304, "\n\n  &.text-loaded {\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](305, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](306, "min-width: 0px;");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](307, "\n  }\n}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](308, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](309, "app-text-shell", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.sampleTextShellData);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx.sampleTextShellData);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx.sampleTextShellData);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("display", "cover")("src", "./assets/sample-images/getting-started/category5-1.1.png");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](23, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx.sampleTextShellData);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx.sampleTextShellData);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx.sampleTextShellData);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("display", "cover")("src", "./assets/sample-images/getting-started/category5-1.1.png");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](24, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx.sampleTextShellData);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx.sampleTextShellData);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx.sampleTextShellData);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("display", "cover")("src", "./assets/sample-images/getting-started/category5-1.1.png");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](25, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx.sampleTextShellData);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx.sampleTextShellData ? "$".concat(" ", ctx.sampleTextShellData) : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx.sampleTextShellData ? ctx.sampleTextShellData.concat(" years old") : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](167);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx.sampleTextShellData);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx.sampleTextShellData);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTextarea, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonBackButtonDelegate, _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_0__.AspectRatioComponent, _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_1__.ImageShellComponent, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_2__.TextShellComponent],
    styles: [".showcase-content[_ngcontent-%COMP%] {\n  --background: var(--app-background);\n}\n.showcase-content[_ngcontent-%COMP%]   ion-item-divider[_ngcontent-%COMP%] {\n  --background: var(--ion-color-secondary);\n  --color: var(--ion-color-lightest);\n  text-transform: uppercase;\n  font-weight: 500;\n  letter-spacing: 1px;\n}\n.showcase-content[_ngcontent-%COMP%]   .showcase-section[_ngcontent-%COMP%] {\n  margin: 20px 20px 60px;\n}\n.showcase-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  font-size: 14px;\n  background: #CCC;\n  padding: 10px;\n}\n.showcase-content[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: #F92672;\n  font-weight: 500;\n}\n\n.loading-state-demo[_ngcontent-%COMP%] {\n  background-color: #ececec;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.38'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n  padding: 0px 0px 20px;\n}\n\n.sticky-section[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0px;\n  background: #ececec;\n  padding: 20px;\n  margin: 0px 0px 60px !important;\n  z-index: 10;\n}\n\n.sample-text-max-width[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  max-width: 50%;\n}\n.sample-text-max-width[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: unset;\n}\n\n.sample-text-min-width[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  min-width: 80px;\n}\n.sample-text-min-width[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  min-width: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC1zaGVsbC5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9UaXRhbiUyMEVzdGF0ZXMvc3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvdGV4dC1zaGVsbC90ZXh0LXNoZWxsLnBhZ2Uuc2NzcyIsInRleHQtc2hlbGwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUNBQUE7QUNDRjtBRENFO0VBQ0Usd0NBQUE7RUFDQSxrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKO0FERUU7RUFDRSxzQkFBQTtBQ0FKO0FER0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDREo7QURJRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ0ZKOztBQ25CQTtFQUNFLHlCQUFBO0VBQ0Esd2lCQUFBO0VBQ0EscUJBQUE7QURzQkY7O0FDbkJBO0VBQ0UsZ0JBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0FEc0JGOztBQ25CQTtFQUNFLGNBQUE7QURzQkY7QUNwQkU7RUFDRSxnQkFBQTtBRHNCSjs7QUNsQkE7RUFDRSxlQUFBO0FEcUJGO0FDbkJFO0VBQ0UsY0FBQTtBRHFCSiIsImZpbGUiOiJ0ZXh0LXNoZWxsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG93Y2FzZS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG5cbiAgaW9uLWl0ZW0tZGl2aWRlciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB9XG5cbiAgLnNob3djYXNlLXNlY3Rpb24ge1xuICAgIG1hcmdpbjogMjBweCAyMHB4IDYwcHg7XG4gIH1cblxuICBwcmUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBiYWNrZ3JvdW5kOiAjQ0NDO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cblxuICBjb2RlIHtcbiAgICBjb2xvcjogI0Y5MjY3MjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG59XG4iLCIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xufVxuLnNob3djYXNlLWNvbnRlbnQgaW9uLWl0ZW0tZGl2aWRlciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCAuc2hvd2Nhc2Utc2VjdGlvbiB7XG4gIG1hcmdpbjogMjBweCAyMHB4IDYwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBwcmUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJhY2tncm91bmQ6ICNDQ0M7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBjb2RlIHtcbiAgY29sb3I6ICNGOTI2NzI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5sb2FkaW5nLXN0YXRlLWRlbW8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzQwJyBoZWlnaHQ9JzQwJyB2aWV3Qm94PScwIDAgNDAgNDAnJTNFJTNDZyBmaWxsLXJ1bGU9J2V2ZW5vZGQnJTNFJTNDZyBmaWxsPSclMjNmZmZmZmYnIGZpbGwtb3BhY2l0eT0nMC4zOCclM0UlM0NwYXRoIGQ9J00wIDM4LjU5bDIuODMtMi44MyAxLjQxIDEuNDFMMS40MSA0MEgwdi0xLjQxek0wIDEuNGwyLjgzIDIuODMgMS40MS0xLjQxTDEuNDEgMEgwdjEuNDF6TTM4LjU5IDQwbC0yLjgzLTIuODMgMS40MS0xLjQxTDQwIDM4LjU5VjQwaC0xLjQxek00MCAxLjQxbC0yLjgzIDIuODMtMS40MS0xLjQxTDM4LjU5IDBINDB2MS40MXpNMjAgMTguNmwyLjgzLTIuODMgMS40MSAxLjQxTDIxLjQxIDIwbDIuODMgMi44My0xLjQxIDEuNDFMMjAgMjEuNDFsLTIuODMgMi44My0xLjQxLTEuNDFMMTguNTkgMjBsLTIuODMtMi44MyAxLjQxLTEuNDFMMjAgMTguNTl6Jy8lM0UlM0MvZyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVwiKTtcbiAgcGFkZGluZzogMHB4IDBweCAyMHB4O1xufVxuXG4uc3RpY2t5LXNlY3Rpb24ge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDBweDtcbiAgYmFja2dyb3VuZDogI2VjZWNlYztcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luOiAwcHggMHB4IDYwcHggIWltcG9ydGFudDtcbiAgei1pbmRleDogMTA7XG59XG5cbi5zYW1wbGUtdGV4dC1tYXgtd2lkdGggPiBhcHAtdGV4dC1zaGVsbCB7XG4gIG1heC13aWR0aDogNTAlO1xufVxuLnNhbXBsZS10ZXh0LW1heC13aWR0aCA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWF4LXdpZHRoOiB1bnNldDtcbn1cblxuLnNhbXBsZS10ZXh0LW1pbi13aWR0aCA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgbWluLXdpZHRoOiA4MHB4O1xufVxuLnNhbXBsZS10ZXh0LW1pbi13aWR0aCA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWluLXdpZHRoOiAwcHg7XG59IiwiQGltcG9ydCBcIi4uL2FwcC1zaGVsbC5wYWdlXCI7XG5cbi5sb2FkaW5nLXN0YXRlLWRlbW8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzQwJyBoZWlnaHQ9JzQwJyB2aWV3Qm94PScwIDAgNDAgNDAnJTNFJTNDZyBmaWxsLXJ1bGU9J2V2ZW5vZGQnJTNFJTNDZyBmaWxsPSclMjNmZmZmZmYnIGZpbGwtb3BhY2l0eT0nMC4zOCclM0UlM0NwYXRoIGQ9J00wIDM4LjU5bDIuODMtMi44MyAxLjQxIDEuNDFMMS40MSA0MEgwdi0xLjQxek0wIDEuNGwyLjgzIDIuODMgMS40MS0xLjQxTDEuNDEgMEgwdjEuNDF6TTM4LjU5IDQwbC0yLjgzLTIuODMgMS40MS0xLjQxTDQwIDM4LjU5VjQwaC0xLjQxek00MCAxLjQxbC0yLjgzIDIuODMtMS40MS0xLjQxTDM4LjU5IDBINDB2MS40MXpNMjAgMTguNmwyLjgzLTIuODMgMS40MSAxLjQxTDIxLjQxIDIwbDIuODMgMi44My0xLjQxIDEuNDFMMjAgMjEuNDFsLTIuODMgMi44My0xLjQxLTEuNDFMMTguNTkgMjBsLTIuODMtMi44MyAxLjQxLTEuNDFMMjAgMTguNTl6Jy8lM0UlM0MvZyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVwiKTtcbiAgcGFkZGluZzogMHB4IDBweCAyMHB4O1xufVxuXG4uc3RpY2t5LXNlY3Rpb24ge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDBweDtcbiAgYmFja2dyb3VuZDogI2VjZWNlYztcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luOiAwcHggMHB4IDYwcHggIWltcG9ydGFudDtcbiAgei1pbmRleDogMTA7XG59XG5cbi5zYW1wbGUtdGV4dC1tYXgtd2lkdGggPiBhcHAtdGV4dC1zaGVsbCB7XG4gIG1heC13aWR0aDogNTAlO1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogdW5zZXQ7XG4gIH1cbn1cblxuLnNhbXBsZS10ZXh0LW1pbi13aWR0aCA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgbWluLXdpZHRoOiA4MHB4O1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1pbi13aWR0aDogMHB4O1xuICB9XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hvd2Nhc2UvYXBwLXNoZWxsL2FwcC1zaGVsbC5wYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi9UaXRhbiUyMEVzdGF0ZXMvc3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvdGV4dC1zaGVsbC90ZXh0LXNoZWxsLnBhZ2Uuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hvd2Nhc2UvYXBwLXNoZWxsL3RleHQtc2hlbGwvdGV4dC1zaGVsbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBQTtBQ0NGO0FEQ0U7RUFDRSx3Q0FBQTtFQUNBLGtDQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURFRTtFQUNFLHNCQUFBO0FDQUo7QURHRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNESjtBRElFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDRko7O0FDbkJBO0VBQ0UseUJBQUE7RUFDQSx3aUJBQUE7RUFDQSxxQkFBQTtBRHNCRjs7QUNuQkE7RUFDRSxnQkFBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtFQUNBLFdBQUE7QURzQkY7O0FDbkJBO0VBQ0UsY0FBQTtBRHNCRjtBQ3BCRTtFQUNFLGdCQUFBO0FEc0JKOztBQ2xCQTtFQUNFLGVBQUE7QURxQkY7QUNuQkU7RUFDRSxjQUFBO0FEcUJKO0FDQ0EsNDZKQUE0NkoiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuXG4gIGlvbi1pdGVtLWRpdmlkZXIge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgfVxuXG4gIC5zaG93Y2FzZS1zZWN0aW9uIHtcbiAgICBtYXJnaW46IDIwcHggMjBweCA2MHB4O1xuICB9XG5cbiAgcHJlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgYmFja2dyb3VuZDogI0NDQztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG5cbiAgY29kZSB7XG4gICAgY29sb3I6ICNGOTI2NzI7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxufVxuIiwiLnNob3djYXNlLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcbn1cbi5zaG93Y2FzZS1jb250ZW50IGlvbi1pdGVtLWRpdmlkZXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuLnNob3djYXNlLWNvbnRlbnQgLnNob3djYXNlLXNlY3Rpb24ge1xuICBtYXJnaW46IDIwcHggMjBweCA2MHB4O1xufVxuLnNob3djYXNlLWNvbnRlbnQgcHJlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiAjQ0NDO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLnNob3djYXNlLWNvbnRlbnQgY29kZSB7XG4gIGNvbG9yOiAjRjkyNjcyO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubG9hZGluZy1zdGF0ZS1kZW1vIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0MCcgaGVpZ2h0PSc0MCcgdmlld0JveD0nMCAwIDQwIDQwJyUzRSUzQ2cgZmlsbC1ydWxlPSdldmVub2RkJyUzRSUzQ2cgZmlsbD0nJTIzZmZmZmZmJyBmaWxsLW9wYWNpdHk9JzAuMzgnJTNFJTNDcGF0aCBkPSdNMCAzOC41OWwyLjgzLTIuODMgMS40MSAxLjQxTDEuNDEgNDBIMHYtMS40MXpNMCAxLjRsMi44MyAyLjgzIDEuNDEtMS40MUwxLjQxIDBIMHYxLjQxek0zOC41OSA0MGwtMi44My0yLjgzIDEuNDEtMS40MUw0MCAzOC41OVY0MGgtMS40MXpNNDAgMS40MWwtMi44MyAyLjgzLTEuNDEtMS40MUwzOC41OSAwSDQwdjEuNDF6TTIwIDE4LjZsMi44My0yLjgzIDEuNDEgMS40MUwyMS40MSAyMGwyLjgzIDIuODMtMS40MSAxLjQxTDIwIDIxLjQxbC0yLjgzIDIuODMtMS40MS0xLjQxTDE4LjU5IDIwbC0yLjgzLTIuODMgMS40MS0xLjQxTDIwIDE4LjU5eicvJTNFJTNDL2clM0UlM0MvZyUzRSUzQy9zdmclM0VcIik7XG4gIHBhZGRpbmc6IDBweCAwcHggMjBweDtcbn1cblxuLnN0aWNreS1zZWN0aW9uIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwcHg7XG4gIGJhY2tncm91bmQ6ICNlY2VjZWM7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogMHB4IDBweCA2MHB4ICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4uc2FtcGxlLXRleHQtbWF4LXdpZHRoID4gYXBwLXRleHQtc2hlbGwge1xuICBtYXgtd2lkdGg6IDUwJTtcbn1cbi5zYW1wbGUtdGV4dC1tYXgtd2lkdGggPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1heC13aWR0aDogdW5zZXQ7XG59XG5cbi5zYW1wbGUtdGV4dC1taW4td2lkdGggPiBhcHAtdGV4dC1zaGVsbCB7XG4gIG1pbi13aWR0aDogODBweDtcbn1cbi5zYW1wbGUtdGV4dC1taW4td2lkdGggPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1pbi13aWR0aDogMHB4O1xufSIsIkBpbXBvcnQgXCIuLi9hcHAtc2hlbGwucGFnZVwiO1xuXG4ubG9hZGluZy1zdGF0ZS1kZW1vIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0MCcgaGVpZ2h0PSc0MCcgdmlld0JveD0nMCAwIDQwIDQwJyUzRSUzQ2cgZmlsbC1ydWxlPSdldmVub2RkJyUzRSUzQ2cgZmlsbD0nJTIzZmZmZmZmJyBmaWxsLW9wYWNpdHk9JzAuMzgnJTNFJTNDcGF0aCBkPSdNMCAzOC41OWwyLjgzLTIuODMgMS40MSAxLjQxTDEuNDEgNDBIMHYtMS40MXpNMCAxLjRsMi44MyAyLjgzIDEuNDEtMS40MUwxLjQxIDBIMHYxLjQxek0zOC41OSA0MGwtMi44My0yLjgzIDEuNDEtMS40MUw0MCAzOC41OVY0MGgtMS40MXpNNDAgMS40MWwtMi44MyAyLjgzLTEuNDEtMS40MUwzOC41OSAwSDQwdjEuNDF6TTIwIDE4LjZsMi44My0yLjgzIDEuNDEgMS40MUwyMS40MSAyMGwyLjgzIDIuODMtMS40MSAxLjQxTDIwIDIxLjQxbC0yLjgzIDIuODMtMS40MS0xLjQxTDE4LjU5IDIwbC0yLjgzLTIuODMgMS40MS0xLjQxTDIwIDE4LjU5eicvJTNFJTNDL2clM0UlM0MvZyUzRSUzQy9zdmclM0VcIik7XG4gIHBhZGRpbmc6IDBweCAwcHggMjBweDtcbn1cblxuLnN0aWNreS1zZWN0aW9uIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwcHg7XG4gIGJhY2tncm91bmQ6ICNlY2VjZWM7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogMHB4IDBweCA2MHB4ICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4uc2FtcGxlLXRleHQtbWF4LXdpZHRoID4gYXBwLXRleHQtc2hlbGwge1xuICBtYXgtd2lkdGg6IDUwJTtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IHVuc2V0O1xuICB9XG59XG5cbi5zYW1wbGUtdGV4dC1taW4td2lkdGggPiBhcHAtdGV4dC1zaGVsbCB7XG4gIG1pbi13aWR0aDogODBweDtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtaW4td2lkdGg6IDBweDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_showcase_app-shell_app-shell_module_ts.js.map