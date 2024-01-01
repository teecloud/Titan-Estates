"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_shell_data-store_ts-src_app_showcase_route-resolvers-ux_route-resolvers-ux_module_ts"],{

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

/***/ 59051:
/*!*******************************************************************************************!*\
  !*** ./src/app/showcase/route-resolvers-ux/blocking-resolvers/blocking-resolvers.page.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlockingResovlersPage": () => (/* binding */ BlockingResovlersPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shell/aspect-ratio/aspect-ratio.component */ 89330);






const _c0 = function (a0) {
  return {
    "background-image": a0
  };
};
const _c1 = function () {
  return {
    w: 2,
    h: 1
  };
};
const _c2 = function () {
  return {
    w: 1,
    h: 1
  };
};
class BlockingResovlersPage {
  constructor(route) {
    this.route = route;
  }
  ngOnInit() {
    console.log('Showcase Blocking Resovlers - ngOnInit()');
    if (this.route && this.route.data) {
      const dataObservable = this.route.data;
      console.log('Showcase Blocking Resovlers - Route Resolve Observable => dataObservable: ', dataObservable);
      if (dataObservable) {
        dataObservable.subscribe(observableValue => {
          const pageData = observableValue['data'];
          // eslint-disable-next-line max-len
          console.log('Showcase Blocking Resovlers - Subscribe to dataObservable (will emmit just one value) => PageData (' + (pageData && pageData.isShell ? 'SHELL' : 'REAL') + '): ', pageData);
          if (pageData) {
            this.routeResolveData = pageData;
          }
        });
      } else {
        console.warn('No dataObservable coming from Route Resolver data');
      }
    } else {
      console.warn('No data coming from Route Resolver');
    }
  }
  static #_ = this.ɵfac = function BlockingResovlersPage_Factory(t) {
    return new (t || BlockingResovlersPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: BlockingResovlersPage,
    selectors: [["app-showcase-blocking-resolvers"]],
    decls: 27,
    vars: 10,
    consts: [["color", "primary"], ["slot", "start"], ["defaultHref", "showcase/route-resolvers-ux"], [1, "showcase-content"], [1, "showcase-section"], [2, "background-color", "#FFF", "padding", "10px"], ["size", "12"], [2, "background-size", "cover", "background-repeat", "no-repeat", 3, "ngStyle"], [3, "ratio"], [2, "margin", "10px", "text-align", "center", "color", "#FFF"], ["size", "4"], ["alt", "Sample Image", 2, "width", "100%", "height", "100%", 3, "src"], ["size", "8"], [2, "margin-top", "0px"]],
    template: function BlockingResovlersPage_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Blocking Resovler Showcase ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content", 3)(7, "section", 4)(8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Notice how the UX degrades when using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Blocking");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Route Resolvers in Angular ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-row", 5)(14, "ion-col", 6)(15, "div", 7)(16, "app-aspect-ratio", 8)(17, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Heading on top of a cover image");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-col", 10)(20, "app-aspect-ratio", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-col", 12)(23, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, "url(" + (ctx.routeResolveData == null ? null : ctx.routeResolveData.cover) + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.routeResolveData == null ? null : ctx.routeResolveData.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.routeResolveData == null ? null : ctx.routeResolveData.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.routeResolveData == null ? null : ctx.routeResolveData.description, " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonBackButtonDelegate, _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_0__.AspectRatioComponent],
    styles: [".showcase-content[_ngcontent-%COMP%] {\n  --background: var(--app-background-shade);\n}\n.showcase-content[_ngcontent-%COMP%]   .showcase-section[_ngcontent-%COMP%] {\n  margin: 20px 20px 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb2NraW5nLXJlc29sdmVycy5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9UaXRhbiUyMEVzdGF0ZXMvc3JjL2FwcC9zaG93Y2FzZS9yb3V0ZS1yZXNvbHZlcnMtdXgvYmxvY2tpbmctcmVzb2x2ZXJzL2Jsb2NraW5nLXJlc29sdmVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5Q0FBQTtBQ0NGO0FEQ0U7RUFDRSx1QkFBQTtBQ0NKIiwiZmlsZSI6ImJsb2NraW5nLXJlc29sdmVycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xuXG4gIC5zaG93Y2FzZS1zZWN0aW9uIHtcbiAgICBtYXJnaW46IDIwcHggMjBweCAxMDBweDtcbiAgfVxufVxuIiwiLnNob3djYXNlLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcbn1cbi5zaG93Y2FzZS1jb250ZW50IC5zaG93Y2FzZS1zZWN0aW9uIHtcbiAgbWFyZ2luOiAyMHB4IDIwcHggMTAwcHg7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hvd2Nhc2Uvcm91dGUtcmVzb2x2ZXJzLXV4L2Jsb2NraW5nLXJlc29sdmVycy9ibG9ja2luZy1yZXNvbHZlcnMucGFnZS5zY3NzIiwid2VicGFjazovLy4vLi4vVGl0YW4lMjBFc3RhdGVzL3NyYy9hcHAvc2hvd2Nhc2Uvcm91dGUtcmVzb2x2ZXJzLXV4L2Jsb2NraW5nLXJlc29sdmVycy9ibG9ja2luZy1yZXNvbHZlcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUNBQUE7QUNDRjtBRENFO0VBQ0UsdUJBQUE7QUNDSjtBRENBLGd6QkFBZ3pCIiwic291cmNlc0NvbnRlbnQiOlsiLnNob3djYXNlLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcblxuICAuc2hvd2Nhc2Utc2VjdGlvbiB7XG4gICAgbWFyZ2luOiAyMHB4IDIwcHggMTAwcHg7XG4gIH1cbn1cbiIsIi5zaG93Y2FzZS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG59XG4uc2hvd2Nhc2UtY29udGVudCAuc2hvd2Nhc2Utc2VjdGlvbiB7XG4gIG1hcmdpbjogMjBweCAyMHB4IDEwMHB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 61571:
/*!*************************************************************************************!*\
  !*** ./src/app/showcase/route-resolvers-ux/blocking-resolvers/blocking.resolver.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlockingResolver": () => (/* binding */ BlockingResolver)
/* harmony export */ });
/* harmony import */ var _Users_teeicloud_TitanEstates_Titan_Estates_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 83918);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 21954);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 32313);
/* harmony import */ var _showcase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../showcase.service */ 82909);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);








class BlockingResolver {
  constructor(showcaseService, loadingController) {
    this.showcaseService = showcaseService;
    this.loadingController = loadingController;
  }
  presentLoader() {
    var _this = this;
    return (0,_Users_teeicloud_TitanEstates_Titan_Estates_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.loadingElement = yield _this.loadingController.create({
        message: 'Loading ...'
      });
      yield _this.loadingElement.present();
    })();
  }
  dismissLoader() {
    var _this2 = this;
    return (0,_Users_teeicloud_TitanEstates_Titan_Estates_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.loadingElement) {
        yield _this2.loadingElement.dismiss();
      }
    })();
  }
  resolve() {
    // WITHOUT LOADING INDICATOR
    // Base Observable (where we get data from)
    // const dataObservable = this.showcaseService.getData();
    // Basic Resolver that returns the base Observable
    // return dataObservable;
    // WITH LOADING INDICATOR
    // Base Observable (where we get data from)
    const dataObservable = this.showcaseService.getDataSourceWithDelay().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.finalize)(() => {
      console.log('dataObservable COMPLETED - HIDE LOADER');
      this.dismissLoader();
    }));
    const deferedObservable = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.defer)(() => {
      // Will be logged at the moment of subscription
      console.log('dataObservable STARTED - SHOW LOADER');
      this.presentLoader();
      return dataObservable;
    });
    // Basic Resolver that returns the base Observable
    return deferedObservable;
  }
  static #_ = this.ɵfac = function BlockingResolver_Factory(t) {
    return new (t || BlockingResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_showcase_service__WEBPACK_IMPORTED_MODULE_1__.ShowcaseService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: BlockingResolver,
    factory: BlockingResolver.ɵfac
  });
}

/***/ }),

/***/ 94356:
/*!***************************************************************************************************!*\
  !*** ./src/app/showcase/route-resolvers-ux/non-blocking-resolvers/non-blocking-resolvers.page.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NonBlockingResolversPage": () => (/* binding */ NonBlockingResolversPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shell/aspect-ratio/aspect-ratio.component */ 89330);






function NonBlockingResolversPage_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p")(4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "You can show a static shell while fetching data from the backend");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
}
const _c0 = function (a0) {
  return {
    "background-image": a0
  };
};
const _c1 = function () {
  return {
    w: 2,
    h: 1
  };
};
const _c2 = function () {
  return {
    w: 1,
    h: 1
  };
};
function NonBlockingResolversPage_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-row", 7)(2, "ion-col", 8)(3, "div", 9)(4, "app-aspect-ratio", 10)(5, "h4", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Heading on top of a cover image");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-col", 12)(8, "app-aspect-ratio", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-col", 14)(11, "h3", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, "url(" + (ctx_r1.routeResolveData == null ? null : ctx_r1.routeResolveData.cover) + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r1.routeResolveData == null ? null : ctx_r1.routeResolveData.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.routeResolveData == null ? null : ctx_r1.routeResolveData.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.routeResolveData == null ? null : ctx_r1.routeResolveData.description, " ");
  }
}
class NonBlockingResolversPage {
  constructor(route) {
    this.route = route;
  }
  ngOnInit() {
    console.log('Showcase NON Blocking Resovlers - ngOnInit()');
    if (this.route && this.route.data) {
      // We resolved a promise for the data Observable
      const promiseObservable = this.route.data;
      console.log('Showcase NON Blocking Resovlers - Route Resolve Observable => promiseObservable: ', promiseObservable);
      if (promiseObservable) {
        promiseObservable.subscribe(promiseValue => {
          const dataObservable = promiseValue['data'];
          console.log('Showcase NON Blocking Resovlers - Subscribe to promiseObservable => dataObservable: ', dataObservable);
          if (dataObservable) {
            dataObservable.subscribe(observableValue => {
              const pageData = observableValue;
              // eslint-disable-next-line max-len
              console.log('Showcase NON Blocking Resovlers - Subscribe to dataObservable (will emmit just one value) => PageData (' + (pageData && pageData.isShell ? 'SHELL' : 'REAL') + '): ', pageData);
              if (pageData) {
                this.routeResolveData = pageData;
              }
            });
          } else {
            console.warn('No dataObservable coming from Route Resolver promiseObservable');
          }
        });
      } else {
        console.warn('No promiseObservable coming from Route Resolver data');
      }
    } else {
      console.warn('No data coming from Route Resolver');
    }
  }
  static #_ = this.ɵfac = function NonBlockingResolversPage_Factory(t) {
    return new (t || NonBlockingResolversPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: NonBlockingResolversPage,
    selectors: [["app-showcase-non-blocking-resolvers"]],
    decls: 12,
    vars: 2,
    consts: [["color", "primary"], ["slot", "start"], ["defaultHref", "showcase/route-resolvers-ux"], [1, "showcase-content"], [1, "showcase-section"], [4, "ngIf"], [2, "margin", "20px 40px", "text-align", "center"], [2, "background-color", "#FFF", "padding", "10px"], ["size", "12"], [2, "background-size", "cover", "background-repeat", "no-repeat", 3, "ngStyle"], [3, "ratio"], [2, "margin", "10px", "text-align", "center", "color", "#FFF"], ["size", "4"], ["alt", "Sample Image", 2, "width", "100%", "height", "100%", 3, "src"], ["size", "8"], [2, "margin-top", "0px"]],
    template: function NonBlockingResolversPage_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " NON Blocking Resovler Showcase ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content", 3)(7, "section", 4)(8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " With Non-Blocking Resolvers, page transition is immediate. However UX degrades because you are showing a static loading indicator while the server sends data back to the client. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, NonBlockingResolversPage_ng_container_10_Template, 6, 0, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, NonBlockingResolversPage_ng_container_11_Template, 15, 10, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.routeResolveData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.routeResolveData);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonBackButtonDelegate, _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_0__.AspectRatioComponent],
    styles: [".showcase-content[_ngcontent-%COMP%] {\n  --background: var(--app-background-shade);\n}\n.showcase-content[_ngcontent-%COMP%]   .showcase-section[_ngcontent-%COMP%] {\n  margin: 20px 20px 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vbi1ibG9ja2luZy1yZXNvbHZlcnMucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vVGl0YW4lMjBFc3RhdGVzL3NyYy9hcHAvc2hvd2Nhc2Uvcm91dGUtcmVzb2x2ZXJzLXV4L25vbi1ibG9ja2luZy1yZXNvbHZlcnMvbm9uLWJsb2NraW5nLXJlc29sdmVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5Q0FBQTtBQ0NGO0FEQ0U7RUFDRSx1QkFBQTtBQ0NKIiwiZmlsZSI6Im5vbi1ibG9ja2luZy1yZXNvbHZlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNob3djYXNlLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcblxuICAuc2hvd2Nhc2Utc2VjdGlvbiB7XG4gICAgbWFyZ2luOiAyMHB4IDIwcHggMTAwcHg7XG4gIH1cbn1cbiIsIi5zaG93Y2FzZS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG59XG4uc2hvd2Nhc2UtY29udGVudCAuc2hvd2Nhc2Utc2VjdGlvbiB7XG4gIG1hcmdpbjogMjBweCAyMHB4IDEwMHB4O1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hvd2Nhc2Uvcm91dGUtcmVzb2x2ZXJzLXV4L25vbi1ibG9ja2luZy1yZXNvbHZlcnMvbm9uLWJsb2NraW5nLXJlc29sdmVycy5wYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi9UaXRhbiUyMEVzdGF0ZXMvc3JjL2FwcC9zaG93Y2FzZS9yb3V0ZS1yZXNvbHZlcnMtdXgvbm9uLWJsb2NraW5nLXJlc29sdmVycy9ub24tYmxvY2tpbmctcmVzb2x2ZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUFBO0FDQ0Y7QURDRTtFQUNFLHVCQUFBO0FDQ0o7QURDQSx3MEJBQXcwQiIsInNvdXJjZXNDb250ZW50IjpbIi5zaG93Y2FzZS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG5cbiAgLnNob3djYXNlLXNlY3Rpb24ge1xuICAgIG1hcmdpbjogMjBweCAyMHB4IDEwMHB4O1xuICB9XG59XG4iLCIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xufVxuLnNob3djYXNlLWNvbnRlbnQgLnNob3djYXNlLXNlY3Rpb24ge1xuICBtYXJnaW46IDIwcHggMjBweCAxMDBweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 85070:
/*!*********************************************************************************************!*\
  !*** ./src/app/showcase/route-resolvers-ux/non-blocking-resolvers/non-blocking.resolver.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NonBlockingResolver": () => (/* binding */ NonBlockingResolver)
/* harmony export */ });
/* harmony import */ var _showcase_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../showcase.service */ 82909);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);



class NonBlockingResolver {
  constructor(showcaseService) {
    this.showcaseService = showcaseService;
  }
  resolve() {
    // Base Observable (where we get data from)
    const dataObservable = this.showcaseService.getDataSourceWithDelay();
    // NON-BLOCKING RESOLVERS
    // Resolver using a ReplySubject that emits the base Observable and then completes
    // const subject = new ReplaySubject();
    // subject.next(dataObservable);
    // subject.complete();
    // return subject;
    // Resolver using an Observable that emits the base Observable and then completes
    // const observable = Observable.create((observer) => {
    //   observer.next(dataObservable);
    //   observer.complete();
    // });
    // return observable;
    // Resolver using a Promise that resolves the base Observable
    const observablePromise = new Promise((resolve, reject) => {
      resolve(dataObservable);
    });
    return observablePromise;
  }
  static #_ = this.ɵfac = function NonBlockingResolver_Factory(t) {
    return new (t || NonBlockingResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_showcase_service__WEBPACK_IMPORTED_MODULE_0__.ShowcaseService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: NonBlockingResolver,
    factory: NonBlockingResolver.ɵfac
  });
}

/***/ }),

/***/ 89135:
/*!*************************************************************************************************************!*\
  !*** ./src/app/showcase/route-resolvers-ux/progressive-shell-resolvers/progressive-shell-resolvers.page.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressiveShellResovlersPage": () => (/* binding */ ProgressiveShellResovlersPage)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shell/aspect-ratio/aspect-ratio.component */ 89330);
/* harmony import */ var _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shell/image-shell/image-shell.component */ 71408);
/* harmony import */ var _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shell/text-shell/text-shell.component */ 94840);








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
class ProgressiveShellResovlersPage {
  constructor(route) {
    this.route = route;
  }
  ngOnInit() {
    console.log('Showcase Progressive Shell Resovlers - ngOnInit()');
    this.route.data.pipe(
    // Extract data for this page
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(resolvedRouteData => resolvedRouteData['data'].state)).subscribe({
      next: state => {
        this.routeResolveData = state;
      },
      error: error => console.log(error)
    });
  }
  static #_ = this.ɵfac = function ProgressiveShellResovlersPage_Factory(t) {
    return new (t || ProgressiveShellResovlersPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ProgressiveShellResovlersPage,
    selectors: [["app-showcase-progressive-shell-resolvers"]],
    decls: 22,
    vars: 11,
    consts: [["color", "primary"], ["slot", "start"], ["defaultHref", "showcase/route-resolvers-ux"], [1, "showcase-content"], [1, "showcase-section"], [2, "background-color", "#FFF", "padding", "10px"], ["size", "12"], ["animation", "spinner", 1, "add-overlay", 3, "display", "src", "alt"], [3, "ratio"], [2, "margin", "10px", "text-align", "center", "color", "#FFF"], ["size", "4"], ["animation", "spinner", 3, "src", "alt"], ["size", "8"], [2, "margin-top", "0px"], [3, "data"], ["animation", "bouncing", "lines", "3", 3, "data"]],
    template: function ProgressiveShellResovlersPage_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Progressive Shell Showcase ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ion-content", 3)(7, "section", 4)(8, "ion-row", 5)(9, "ion-col", 6)(10, "app-image-shell", 7)(11, "app-aspect-ratio", 8)(12, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Heading on top of a cover image");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "ion-col", 10)(15, "app-aspect-ratio", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "app-image-shell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "ion-col", 12)(18, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "app-text-shell", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "app-text-shell", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("display", "cover")("src", ctx.routeResolveData == null ? null : ctx.routeResolveData.cover)("alt", "Sample Image Cover");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](10, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx.routeResolveData == null ? null : ctx.routeResolveData.image)("alt", "Sample Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx.routeResolveData == null ? null : ctx.routeResolveData.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx.routeResolveData == null ? null : ctx.routeResolveData.description);
      }
    },
    dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonBackButtonDelegate, _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_0__.AspectRatioComponent, _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_1__.ImageShellComponent, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_2__.TextShellComponent],
    styles: [".showcase-content[_ngcontent-%COMP%] {\n  --background: var(--app-background-shade);\n}\n.showcase-content[_ngcontent-%COMP%]   .showcase-section[_ngcontent-%COMP%] {\n  margin: 20px 20px 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2dyZXNzaXZlLXNoZWxsLXJlc29sdmVycy5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9UaXRhbiUyMEVzdGF0ZXMvc3JjL2FwcC9zaG93Y2FzZS9yb3V0ZS1yZXNvbHZlcnMtdXgvcHJvZ3Jlc3NpdmUtc2hlbGwtcmVzb2x2ZXJzL3Byb2dyZXNzaXZlLXNoZWxsLXJlc29sdmVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5Q0FBQTtBQ0NGO0FEQ0U7RUFDRSx1QkFBQTtBQ0NKIiwiZmlsZSI6InByb2dyZXNzaXZlLXNoZWxsLXJlc29sdmVycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xuXG4gIC5zaG93Y2FzZS1zZWN0aW9uIHtcbiAgICBtYXJnaW46IDIwcHggMjBweCAxMDBweDtcbiAgfVxufVxuIiwiLnNob3djYXNlLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcbn1cbi5zaG93Y2FzZS1jb250ZW50IC5zaG93Y2FzZS1zZWN0aW9uIHtcbiAgbWFyZ2luOiAyMHB4IDIwcHggMTAwcHg7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hvd2Nhc2Uvcm91dGUtcmVzb2x2ZXJzLXV4L3Byb2dyZXNzaXZlLXNoZWxsLXJlc29sdmVycy9wcm9ncmVzc2l2ZS1zaGVsbC1yZXNvbHZlcnMucGFnZS5zY3NzIiwid2VicGFjazovLy4vLi4vVGl0YW4lMjBFc3RhdGVzL3NyYy9hcHAvc2hvd2Nhc2Uvcm91dGUtcmVzb2x2ZXJzLXV4L3Byb2dyZXNzaXZlLXNoZWxsLXJlc29sdmVycy9wcm9ncmVzc2l2ZS1zaGVsbC1yZXNvbHZlcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUNBQUE7QUNDRjtBRENFO0VBQ0UsdUJBQUE7QUNDSjtBRENBLGcyQkFBZzJCIiwic291cmNlc0NvbnRlbnQiOlsiLnNob3djYXNlLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcblxuICAuc2hvd2Nhc2Utc2VjdGlvbiB7XG4gICAgbWFyZ2luOiAyMHB4IDIwcHggMTAwcHg7XG4gIH1cbn1cbiIsIi5zaG93Y2FzZS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG59XG4uc2hvd2Nhc2UtY29udGVudCAuc2hvd2Nhc2Utc2VjdGlvbiB7XG4gIG1hcmdpbjogMjBweCAyMHB4IDEwMHB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 37078:
/*!*******************************************************************************************************!*\
  !*** ./src/app/showcase/route-resolvers-ux/progressive-shell-resolvers/progressive-shell.resolver.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressiveShellResolver": () => (/* binding */ ProgressiveShellResolver)
/* harmony export */ });
/* harmony import */ var _showcase_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../showcase.service */ 82909);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);



class ProgressiveShellResolver {
  constructor(showcaseService) {
    this.showcaseService = showcaseService;
  }
  resolve() {
    const dataSource = this.showcaseService.getDataSourceWithDelay();
    const dataStore = this.showcaseService.getSimpleDataStore(dataSource);
    return dataStore;
  }
  static #_ = this.ɵfac = function ProgressiveShellResolver_Factory(t) {
    return new (t || ProgressiveShellResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_showcase_service__WEBPACK_IMPORTED_MODULE_0__.ShowcaseService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: ProgressiveShellResolver,
    factory: ProgressiveShellResolver.ɵfac
  });
}

/***/ }),

/***/ 40729:
/*!**************************************************************************!*\
  !*** ./src/app/showcase/route-resolvers-ux/route-resolvers-ux.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouteResolversUXModule": () => (/* binding */ RouteResolversUXModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/components.module */ 45642);
/* harmony import */ var _route_resolvers_ux_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./route-resolvers-ux.page */ 59470);
/* harmony import */ var _non_blocking_resolvers_non_blocking_resolvers_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./non-blocking-resolvers/non-blocking-resolvers.page */ 94356);
/* harmony import */ var _blocking_resolvers_blocking_resolvers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocking-resolvers/blocking-resolvers.page */ 59051);
/* harmony import */ var _progressive_shell_resolvers_progressive_shell_resolvers_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./progressive-shell-resolvers/progressive-shell-resolvers.page */ 89135);
/* harmony import */ var _blocking_resolvers_blocking_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocking-resolvers/blocking.resolver */ 61571);
/* harmony import */ var _non_blocking_resolvers_non_blocking_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./non-blocking-resolvers/non-blocking.resolver */ 85070);
/* harmony import */ var _progressive_shell_resolvers_progressive_shell_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./progressive-shell-resolvers/progressive-shell.resolver */ 37078);
/* harmony import */ var _showcase_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../showcase.service */ 82909);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);















const routes = [{
  path: '',
  component: _route_resolvers_ux_page__WEBPACK_IMPORTED_MODULE_1__.RouteResovlersUXPage
}, {
  path: 'blocking-resolvers',
  component: _blocking_resolvers_blocking_resolvers_page__WEBPACK_IMPORTED_MODULE_3__.BlockingResovlersPage,
  resolve: {
    data: _blocking_resolvers_blocking_resolver__WEBPACK_IMPORTED_MODULE_5__.BlockingResolver
  }
}, {
  path: 'non-blocking-resolvers',
  component: _non_blocking_resolvers_non_blocking_resolvers_page__WEBPACK_IMPORTED_MODULE_2__.NonBlockingResolversPage,
  resolve: {
    data: _non_blocking_resolvers_non_blocking_resolver__WEBPACK_IMPORTED_MODULE_6__.NonBlockingResolver
  }
}, {
  path: 'progressive-shell-resolvers',
  component: _progressive_shell_resolvers_progressive_shell_resolvers_page__WEBPACK_IMPORTED_MODULE_4__.ProgressiveShellResovlersPage,
  resolve: {
    data: _progressive_shell_resolvers_progressive_shell_resolver__WEBPACK_IMPORTED_MODULE_7__.ProgressiveShellResolver
  }
}];
class RouteResolversUXModule {
  static #_ = this.ɵfac = function RouteResolversUXModule_Factory(t) {
    return new (t || RouteResolversUXModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
    type: RouteResolversUXModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
    providers: [_blocking_resolvers_blocking_resolver__WEBPACK_IMPORTED_MODULE_5__.BlockingResolver, _non_blocking_resolvers_non_blocking_resolver__WEBPACK_IMPORTED_MODULE_6__.NonBlockingResolver, _progressive_shell_resolvers_progressive_shell_resolver__WEBPACK_IMPORTED_MODULE_7__.ProgressiveShellResolver, _showcase_service__WEBPACK_IMPORTED_MODULE_8__.ShowcaseService],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild(routes), _components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](RouteResolversUXModule, {
    declarations: [_route_resolvers_ux_page__WEBPACK_IMPORTED_MODULE_1__.RouteResovlersUXPage, _blocking_resolvers_blocking_resolvers_page__WEBPACK_IMPORTED_MODULE_3__.BlockingResovlersPage, _non_blocking_resolvers_non_blocking_resolvers_page__WEBPACK_IMPORTED_MODULE_2__.NonBlockingResolversPage, _progressive_shell_resolvers_progressive_shell_resolvers_page__WEBPACK_IMPORTED_MODULE_4__.ProgressiveShellResovlersPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule, _components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule]
  });
})();

/***/ }),

/***/ 59470:
/*!************************************************************************!*\
  !*** ./src/app/showcase/route-resolvers-ux/route-resolvers-ux.page.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouteResovlersUXPage": () => (/* binding */ RouteResovlersUXPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);



const _c0 = function () {
  return ["/showcase/route-resolvers-ux/blocking-resolvers"];
};
const _c1 = "/showcase/route-resolvers-ux/non-blocking-resolvers";
const _c2 = function () {
  return [_c1];
};
const _c3 = "/showcase/route-resolvers-ux/progressive-shell-resolvers";
const _c4 = function () {
  return [_c3];
};
class RouteResovlersUXPage {
  constructor() {}
  static #_ = this.ɵfac = function RouteResovlersUXPage_Factory(t) {
    return new (t || RouteResovlersUXPage)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: RouteResovlersUXPage,
    selectors: [["app-showcase-route-resolvers-ux"]],
    decls: 52,
    vars: 6,
    consts: [["color", "primary"], ["slot", "start"], [1, "showcase-content"], [1, "showcase-section"], ["expand", "block", 3, "routerLink"]],
    template: function RouteResovlersUXPage_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-menu-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Improve Route Resolvers UX ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content", 2)(7, "section", 3)(8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Lets see the difference between the different implementations of Route Resolvers. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Blocking Route Resolvers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " By default, Angular Route Resolvers won't transition to the page until the Resolver Observable completes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Let's suppose the backend is slow and takes 5 seconds to fetch data and return it to the client, this is what's going to happen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p")(17, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Expected behavior:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Page transition will be delayed 5 seconds until the server sends data back to the client. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ion-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Blocking Resolvers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "section", 3)(23, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "NON-Blocking Route Resolvers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " To avoid waiting for the Observable to complete, we can wrap the base Observable (the one we are getting data from) with a dummy Observable, Subject or Promise that emits the base Observable and immediately completes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p")(28, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Expected behavior:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Page transition will be instant and the transitioned page will show a blank state while the server sends data back to the client. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ion-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Non-Blocking Resolvers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "section", 3)(34, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Progressive Shell Resolvers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " By using the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "DataStore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " utility in conjunction with Angular Route Resolvers, we can solve this UX problem and make page transitions immediate. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " This approach uses a non-blocking Resolver in conjunction with the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "DataStore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " utility. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p")(47, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Expected behavior:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Page transition will be instant and the transitioned page will show some shell elements while the server sends data back to the client. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "ion-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Progressive Shell Resolvers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c4));
      }
    },
    dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.RouterLinkDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
    styles: [".showcase-content[_ngcontent-%COMP%] {\n  --background: var(--app-background-shade);\n}\n.showcase-content[_ngcontent-%COMP%]   .showcase-section[_ngcontent-%COMP%] {\n  margin: 20px 20px 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlLXJlc29sdmVycy11eC5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9UaXRhbiUyMEVzdGF0ZXMvc3JjL2FwcC9zaG93Y2FzZS9yb3V0ZS1yZXNvbHZlcnMtdXgvcm91dGUtcmVzb2x2ZXJzLXV4LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUFBO0FDQ0Y7QURDRTtFQUNFLHVCQUFBO0FDQ0oiLCJmaWxlIjoicm91dGUtcmVzb2x2ZXJzLXV4LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG93Y2FzZS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG5cbiAgLnNob3djYXNlLXNlY3Rpb24ge1xuICAgIG1hcmdpbjogMjBweCAyMHB4IDEwMHB4O1xuICB9XG59XG4iLCIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xufVxuLnNob3djYXNlLWNvbnRlbnQgLnNob3djYXNlLXNlY3Rpb24ge1xuICBtYXJnaW46IDIwcHggMjBweCAxMDBweDtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hvd2Nhc2Uvcm91dGUtcmVzb2x2ZXJzLXV4L3JvdXRlLXJlc29sdmVycy11eC5wYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi9UaXRhbiUyMEVzdGF0ZXMvc3JjL2FwcC9zaG93Y2FzZS9yb3V0ZS1yZXNvbHZlcnMtdXgvcm91dGUtcmVzb2x2ZXJzLXV4LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUFBO0FDQ0Y7QURDRTtFQUNFLHVCQUFBO0FDQ0o7QURDQSxveEJBQW94QiIsInNvdXJjZXNDb250ZW50IjpbIi5zaG93Y2FzZS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG5cbiAgLnNob3djYXNlLXNlY3Rpb24ge1xuICAgIG1hcmdpbjogMjBweCAyMHB4IDEwMHB4O1xuICB9XG59XG4iLCIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xufVxuLnNob3djYXNlLWNvbnRlbnQgLnNob3djYXNlLXNlY3Rpb24ge1xuICBtYXJnaW46IDIwcHggMjBweCAxMDBweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_shell_data-store_ts-src_app_showcase_route-resolvers-ux_route-resolvers-ux_module_ts.js.map