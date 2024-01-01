(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_food_food_service_ts-src_app_pipes_pipes_module_ts-src_app_utils_resolver-helper_ts"],{

/***/ 99659:
/*!****************************************************!*\
  !*** ./src/app/food/details/food-details.model.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FoodDetailsModel": () => (/* binding */ FoodDetailsModel)
/* harmony export */ });
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shell/data-store */ 29760);

class FoodDetailsModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__.ShellModel {
  constructor() {
    super();
    this.ratings = [{
      concept: '',
      rate: null
    }, {
      concept: '',
      rate: null
    }, {
      concept: '',
      rate: null
    }];
    this.openHours = [{
      day: '',
      open: true,
      hourFrom: '',
      hourTo: ''
    }, {
      day: '',
      open: true,
      hourFrom: '',
      hourTo: ''
    }, {
      day: '',
      open: false,
      hourFrom: '',
      hourTo: ''
    }];
    this.tags = ['', '', ''];
    this.usersPictures = ['', '', '', '', '', ''];
    this.popularDishes = [{
      name: '',
      rate: null,
      votesCount: null
    }, {
      name: '',
      rate: null,
      votesCount: null
    }];
    this.reviews = [{
      user: {
        image: '',
        name: '',
        reviewsCount: null,
        points: null
      },
      avgRating: null,
      ratings: [{
        concept: '',
        rate: null
      }, {
        concept: '',
        rate: null
      }, {
        concept: '',
        rate: null
      }],
      publishedAt: null,
      message: ''
    }, {
      user: {
        image: '',
        name: '',
        reviewsCount: null,
        points: null
      },
      avgRating: null,
      ratings: [{
        concept: '',
        rate: null
      }, {
        concept: '',
        rate: null
      }, {
        concept: '',
        rate: null
      }],
      publishedAt: null,
      message: ''
    }, {
      user: {
        image: '',
        name: '',
        reviewsCount: null,
        points: null
      },
      avgRating: null,
      ratings: [{
        concept: '',
        rate: null
      }, {
        concept: '',
        rate: null
      }, {
        concept: '',
        rate: null
      }],
      publishedAt: null,
      message: ''
    }];
    this.popularRecipes = [{
      showcaseImage: '',
      name: '',
      chef: {
        name: '',
        image: ''
      },
      difficulty: '',
      time: '',
      calories: '',
      chefExtract: ''
    }];
  }
}

/***/ }),

/***/ 14720:
/*!**************************************!*\
  !*** ./src/app/food/food.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FoodService": () => (/* binding */ FoodService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 51353);
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shell/data-store */ 29760);
/* harmony import */ var _listing_food_listing_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listing/food-listing.model */ 65597);
/* harmony import */ var _details_food_details_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./details/food-details.model */ 99659);
/* harmony import */ var _utils_transfer_state_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/transfer-state-helper */ 15009);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 58987);











class FoodService {
  constructor(platformId, transferStateHelper, http) {
    this.platformId = platformId;
    this.transferStateHelper = transferStateHelper;
    this.http = http;
  }
  getListingDataSource() {
    const rawDataSource = this.http.get('./assets/sample-data/food/listing.json').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(data => {
      // Note: HttpClient cannot know how to instantiate a class for the returned data
      // We need to properly cast types from json data
      const listing = new _listing_food_listing_model__WEBPACK_IMPORTED_MODULE_1__.FoodListingModel();
      // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
      // Note: If you have non-enummerable properties, you can try a spread operator instead. listing = {...data};
      // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)
      Object.assign(listing, data);
      return listing;
    }));
    // This method tapps into the raw data source and stores the resolved data in the TransferState, then when
    // transitioning from the server rendered view to the browser, checks if we already loaded the data in the server to prevent
    // duplicate http requests.
    const cachedDataSource = this.transferStateHelper.checkDataSourceState('food-listing-state', rawDataSource);
    return cachedDataSource;
  }
  getListingStore(dataSource) {
    // Use cache if available
    if (!this.listingDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel = new _listing_food_listing_model__WEBPACK_IMPORTED_MODULE_1__.FoodListingModel();
      this.listingDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_0__.DataStore(shellModel);
      // If running in the server, then don't add shell to the Data Store
      // If we already loaded the Data Source in the server, then don't show a shell when transitioning back to the broswer from the server
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformServer)(this.platformId) || dataSource['ssr_state']) {
        // Trigger loading mechanism with 0 delay (this will prevent the shell to be shown)
        this.listingDataStore.load(dataSource, 0);
      } else {
        // On browser transitions
        // Trigger the loading mechanism (with shell)
        this.listingDataStore.load(dataSource);
      }
    }
    return this.listingDataStore;
  }
  getDetailsDataSource(slug) {
    const rawDataSource = this.http.get('./assets/sample-data/food/details.json').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.mergeMap)(details => details.items.filter(item => item.slug === slug)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(data => {
      // Note: HttpClient cannot know how to instantiate a class for the returned data
      // We need to properly cast types from json data
      const details = new _details_food_details_model__WEBPACK_IMPORTED_MODULE_2__.FoodDetailsModel();
      // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
      // Note: If you have non-enummerable properties, you can try a spread operator instead. details = {...data};
      // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)
      Object.assign(details, data);
      return details;
    }));
    // This method tapps into the raw data source and stores the resolved data in the TransferState, then when
    // transitioning from the server rendered view to the browser, checks if we already loaded the data in the server to prevent
    // duplicate http requests.
    const cachedDataSource = this.transferStateHelper.checkDataSourceState('food-details-state', rawDataSource);
    return cachedDataSource;
  }
  getDetailsStore(dataSource) {
    // Initialize the model specifying that it is a shell model
    const shellModel = new _details_food_details_model__WEBPACK_IMPORTED_MODULE_2__.FoodDetailsModel();
    this.detailsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_0__.DataStore(shellModel);
    // If running in the server, then don't add shell to the Data Store
    // If we already loaded the Data Source in the server, then don't show a shell when transitioning back to the broswer from the server
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformServer)(this.platformId) || dataSource['ssr_state']) {
      // Trigger loading mechanism with 0 delay (this will prevent the shell to be shown)
      this.detailsDataStore.load(dataSource, 0);
    } else {
      // On browser transitions
      // Trigger the loading mechanism (with shell)
      this.detailsDataStore.load(dataSource);
    }
    return this.detailsDataStore;
  }
  static #_ = this.ɵfac = function FoodService_Factory(t) {
    return new (t || FoodService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_utils_transfer_state_helper__WEBPACK_IMPORTED_MODULE_3__.TransferStateHelper), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
    token: FoodService,
    factory: FoodService.ɵfac
  });
}

/***/ }),

/***/ 65597:
/*!****************************************************!*\
  !*** ./src/app/food/listing/food-listing.model.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FoodItemModel": () => (/* binding */ FoodItemModel),
/* harmony export */   "FoodListingModel": () => (/* binding */ FoodListingModel)
/* harmony export */ });
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shell/data-store */ 29760);

class FoodItemModel {
  constructor() {
    this.tags = ['', '', ''];
    this.pictures = ['', '', '', '', ''];
  }
}
class FoodListingModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__.ShellModel {
  constructor() {
    super();
    this.items = [new FoodItemModel(), new FoodItemModel(), new FoodItemModel(), new FoodItemModel()];
  }
}

/***/ }),

/***/ 35503:
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PipesModule": () => (/* binding */ PipesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _time_difference_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./time-difference.pipe */ 1192);
/* harmony import */ var _time_ago_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./time-ago.pipe */ 22541);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);





class PipesModule {
  static #_ = this.ɵfac = function PipesModule_Factory(t) {
    return new (t || PipesModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: PipesModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PipesModule, {
    declarations: [_time_difference_pipe__WEBPACK_IMPORTED_MODULE_0__.TimeDifferencePipe, _time_ago_pipe__WEBPACK_IMPORTED_MODULE_1__.TimeAgoPipe],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule],
    exports: [_time_difference_pipe__WEBPACK_IMPORTED_MODULE_0__.TimeDifferencePipe, _time_ago_pipe__WEBPACK_IMPORTED_MODULE_1__.TimeAgoPipe]
  });
})();

/***/ }),

/***/ 22541:
/*!****************************************!*\
  !*** ./src/app/pipes/time-ago.pipe.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeAgoPipe": () => (/* binding */ TimeAgoPipe)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ 16901);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs/plugin/relativeTime */ 12362);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



class TimeAgoPipe {
  transform(value, withoutSuffixParam = false) {
    dayjs__WEBPACK_IMPORTED_MODULE_0__.extend(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1__);
    let timeAgo = '';
    if (value) {
      const withoutSuffix = withoutSuffixParam || (dayjs__WEBPACK_IMPORTED_MODULE_0__(value).diff(dayjs__WEBPACK_IMPORTED_MODULE_0__(), 'day') < 0 ? false : true);
      timeAgo = dayjs__WEBPACK_IMPORTED_MODULE_0__().to(dayjs__WEBPACK_IMPORTED_MODULE_0__(value), withoutSuffix);
    }
    return timeAgo;
  }
  static #_ = this.ɵfac = function TimeAgoPipe_Factory(t) {
    return new (t || TimeAgoPipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({
    name: "appTimeAgo",
    type: TimeAgoPipe,
    pure: true
  });
}

/***/ }),

/***/ 1192:
/*!***********************************************!*\
  !*** ./src/app/pipes/time-difference.pipe.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeDifferencePipe": () => (/* binding */ TimeDifferencePipe)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ 16901);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class TimeDifferencePipe {
  transform(value) {
    return dayjs__WEBPACK_IMPORTED_MODULE_0__(value).diff(dayjs__WEBPACK_IMPORTED_MODULE_0__(), 'day');
  }
  static #_ = this.ɵfac = function TimeDifferencePipe_Factory(t) {
    return new (t || TimeDifferencePipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
    name: "appTimeDifference",
    type: TimeDifferencePipe,
    pure: true
  });
}

/***/ }),

/***/ 29760:
/*!*************************************!*\
  !*** ./src/app/shell/data-store.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 85971:
/*!******************************************!*\
  !*** ./src/app/utils/resolver-helper.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ }),

/***/ 12362:
/*!***************************************************!*\
  !*** ./node_modules/dayjs/plugin/relativeTime.js ***!
  \***************************************************/
/***/ (function(module) {

!function (r, e) {
   true ? module.exports = e() : 0;
}(this, function () {
  "use strict";

  return function (r, e, t) {
    r = r || {};
    var n = e.prototype,
      o = {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
      };
    function i(r, e, t, o) {
      return n.fromToBase(r, e, t, o);
    }
    t.en.relativeTime = o, n.fromToBase = function (e, n, i, d, u) {
      for (var f, a, s, l = i.$locale().relativeTime || o, h = r.thresholds || [{
          l: "s",
          r: 44,
          d: "second"
        }, {
          l: "m",
          r: 89
        }, {
          l: "mm",
          r: 44,
          d: "minute"
        }, {
          l: "h",
          r: 89
        }, {
          l: "hh",
          r: 21,
          d: "hour"
        }, {
          l: "d",
          r: 35
        }, {
          l: "dd",
          r: 25,
          d: "day"
        }, {
          l: "M",
          r: 45
        }, {
          l: "MM",
          r: 10,
          d: "month"
        }, {
          l: "y",
          r: 17
        }, {
          l: "yy",
          d: "year"
        }], m = h.length, c = 0; c < m; c += 1) {
        var y = h[c];
        y.d && (f = d ? t(e).diff(i, y.d, !0) : i.diff(e, y.d, !0));
        var p = (r.rounding || Math.round)(Math.abs(f));
        if (s = f > 0, p <= y.r || !y.r) {
          p <= 1 && c > 0 && (y = h[c - 1]);
          var v = l[y.l];
          u && (p = u("" + p)), a = "string" == typeof v ? v.replace("%d", p) : v(p, n, y.l, s);
          break;
        }
      }
      if (n) return a;
      var M = s ? l.future : l.past;
      return "function" == typeof M ? M(a) : M.replace("%s", a);
    }, n.to = function (r, e) {
      return i(r, e, this, !0);
    }, n.from = function (r, e) {
      return i(r, e, this);
    };
    var d = function (r) {
      return r.$u ? t.utc() : t();
    };
    n.toNow = function (r) {
      return this.to(d(this), r);
    }, n.fromNow = function (r) {
      return this.from(d(this), r);
    };
  };
});

/***/ })

}]);
//# sourceMappingURL=default-src_app_food_food_service_ts-src_app_pipes_pipes_module_ts-src_app_utils_resolver-helper_ts.js.map