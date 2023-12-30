exports.ids = ["food-details-food-details-module~food-listing-food-listing-module"];
exports.modules = {

/***/ "K05d":
/*!****************************************************!*\
  !*** ./src/app/food/details/food-details.model.ts ***!
  \****************************************************/
/*! exports provided: FoodDetailsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodDetailsModel", function() { return FoodDetailsModel; });
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shell/data-store */ "f/Ol");

class FoodDetailsModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
        this.ratings = [
            {
                concept: '',
                rate: null
            },
            {
                concept: '',
                rate: null
            },
            {
                concept: '',
                rate: null
            }
        ];
        this.openHours = [
            {
                day: '',
                open: true,
                hourFrom: '',
                hourTo: ''
            },
            {
                day: '',
                open: true,
                hourFrom: '',
                hourTo: ''
            },
            {
                day: '',
                open: false,
                hourFrom: '',
                hourTo: ''
            }
        ];
        this.tags = [
            '',
            '',
            ''
        ];
        this.usersPictures = [
            '',
            '',
            '',
            '',
            '',
            ''
        ];
        this.popularDishes = [
            {
                name: '',
                rate: null,
                votesCount: null
            },
            {
                name: '',
                rate: null,
                votesCount: null
            }
        ];
        this.reviews = [
            {
                user: {
                    image: '',
                    name: '',
                    reviewsCount: null,
                    points: null
                },
                avgRating: null,
                ratings: [
                    {
                        concept: '',
                        rate: null
                    },
                    {
                        concept: '',
                        rate: null
                    },
                    {
                        concept: '',
                        rate: null
                    }
                ],
                publishedAt: null,
                message: ''
            },
            {
                user: {
                    image: '',
                    name: '',
                    reviewsCount: null,
                    points: null
                },
                avgRating: null,
                ratings: [
                    {
                        concept: '',
                        rate: null
                    },
                    {
                        concept: '',
                        rate: null
                    },
                    {
                        concept: '',
                        rate: null
                    }
                ],
                publishedAt: null,
                message: ''
            },
            {
                user: {
                    image: '',
                    name: '',
                    reviewsCount: null,
                    points: null
                },
                avgRating: null,
                ratings: [
                    {
                        concept: '',
                        rate: null
                    },
                    {
                        concept: '',
                        rate: null
                    },
                    {
                        concept: '',
                        rate: null
                    }
                ],
                publishedAt: null,
                message: ''
            }
        ];
        this.popularRecipes = [
            {
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
            }
        ];
    }
}


/***/ }),

/***/ "MrCo":
/*!**************************************!*\
  !*** ./src/app/food/food.service.ts ***!
  \**************************************/
/*! exports provided: FoodService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodService", function() { return FoodService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shell/data-store */ "f/Ol");
/* harmony import */ var _listing_food_listing_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listing/food-listing.model */ "WAd3");
/* harmony import */ var _details_food_details_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details/food-details.model */ "K05d");
/* harmony import */ var _utils_transfer_state_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/transfer-state-helper */ "O2zu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");











class FoodService {
    constructor(platformId, transferStateHelper, http) {
        this.platformId = platformId;
        this.transferStateHelper = transferStateHelper;
        this.http = http;
    }
    getListingDataSource() {
        const rawDataSource = this.http.get('./assets/sample-data/food/listing.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
            // Note: HttpClient cannot know how to instantiate a class for the returned data
            // We need to properly cast types from json data
            const listing = new _listing_food_listing_model__WEBPACK_IMPORTED_MODULE_4__["FoodListingModel"]();
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
            const shellModel = new _listing_food_listing_model__WEBPACK_IMPORTED_MODULE_4__["FoodListingModel"]();
            this.listingDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_3__["DataStore"](shellModel);
            // If running in the server, then don't add shell to the Data Store
            // If we already loaded the Data Source in the server, then don't show a shell when transitioning back to the broswer from the server
            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["isPlatformServer"])(this.platformId) || dataSource['ssr_state']) {
                // Trigger loading mechanism with 0 delay (this will prevent the shell to be shown)
                this.listingDataStore.load(dataSource, 0);
            }
            else { // On browser transitions
                // Trigger the loading mechanism (with shell)
                this.listingDataStore.load(dataSource);
            }
        }
        return this.listingDataStore;
    }
    getDetailsDataSource(slug) {
        const rawDataSource = this.http.get('./assets/sample-data/food/details.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(details => details.items.filter(item => item.slug === slug)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
            // Note: HttpClient cannot know how to instantiate a class for the returned data
            // We need to properly cast types from json data
            const details = new _details_food_details_model__WEBPACK_IMPORTED_MODULE_5__["FoodDetailsModel"]();
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
        const shellModel = new _details_food_details_model__WEBPACK_IMPORTED_MODULE_5__["FoodDetailsModel"]();
        this.detailsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_3__["DataStore"](shellModel);
        // If running in the server, then don't add shell to the Data Store
        // If we already loaded the Data Source in the server, then don't show a shell when transitioning back to the broswer from the server
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["isPlatformServer"])(this.platformId) || dataSource['ssr_state']) {
            // Trigger loading mechanism with 0 delay (this will prevent the shell to be shown)
            this.detailsDataStore.load(dataSource, 0);
        }
        else { // On browser transitions
            // Trigger the loading mechanism (with shell)
            this.detailsDataStore.load(dataSource);
        }
        return this.detailsDataStore;
    }
}
FoodService.ɵfac = function FoodService_Factory(t) { return new (t || FoodService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_transfer_state_helper__WEBPACK_IMPORTED_MODULE_6__["TransferStateHelper"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
FoodService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FoodService, factory: FoodService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FoodService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }, { type: _utils_transfer_state_helper__WEBPACK_IMPORTED_MODULE_6__["TransferStateHelper"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "R4nH":
/*!****************************************!*\
  !*** ./src/app/pipes/time-ago.pipe.ts ***!
  \****************************************/
/*! exports provided: TimeAgoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeAgoPipe", function() { return TimeAgoPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "Wgwc");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs/plugin/relativeTime */ "QgiU");
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_2__);




class TimeAgoPipe {
    transform(value) {
        dayjs__WEBPACK_IMPORTED_MODULE_1__["extend"](dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_2__);
        let timeAgo = '';
        if (value) {
            const withoutSuffix = (dayjs__WEBPACK_IMPORTED_MODULE_1__(value).diff(dayjs__WEBPACK_IMPORTED_MODULE_1__(), 'day') < 0) ? false : true;
            timeAgo = dayjs__WEBPACK_IMPORTED_MODULE_1__().to(dayjs__WEBPACK_IMPORTED_MODULE_1__(value), withoutSuffix);
        }
        return timeAgo;
    }
}
TimeAgoPipe.ɵfac = function TimeAgoPipe_Factory(t) { return new (t || TimeAgoPipe)(); };
TimeAgoPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "appTimeAgo", type: TimeAgoPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimeAgoPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'appTimeAgo' }]
    }], null, null); })();


/***/ }),

/***/ "WAd3":
/*!****************************************************!*\
  !*** ./src/app/food/listing/food-listing.model.ts ***!
  \****************************************************/
/*! exports provided: FoodItemModel, FoodListingModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodItemModel", function() { return FoodItemModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodListingModel", function() { return FoodListingModel; });
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shell/data-store */ "f/Ol");

class FoodItemModel {
    constructor() {
        this.tags = [
            '',
            '',
            ''
        ];
        this.pictures = [
            '',
            '',
            '',
            '',
            ''
        ];
    }
}
class FoodListingModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
        this.items = [
            new FoodItemModel(),
            new FoodItemModel(),
            new FoodItemModel(),
            new FoodItemModel()
        ];
    }
}


/***/ }),

/***/ "evT8":
/*!******************************************!*\
  !*** ./src/app/utils/resolver-helper.ts ***!
  \******************************************/
/*! exports provided: ResolverHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResolverHelper", function() { return ResolverHelper; });
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shell/data-store */ "f/Ol");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");


class ResolverHelper {
    // More info on function overloads here: https://www.typescriptlang.org/docs/handbook/functions.html#overloads
    static extractData(source, constructor) {
        if (source instanceof _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["DataStore"]) {
            return source.state;
        }
        else if (source instanceof constructor) {
            // The right side of instanceof should be an expression evaluating to a constructor function (ie. a class), not a type
            // That's why we included an extra parameter which acts as a constructor function for type T
            // (see: https://github.com/microsoft/TypeScript/issues/5236)
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(source);
        }
    }
}


/***/ }),

/***/ "f/Ol":
/*!*************************************!*\
  !*** ./src/app/shell/data-store.ts ***!
  \*************************************/
/*! exports provided: ShellModel, DataStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShellModel", function() { return ShellModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStore", function() { return DataStore; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _config_app_shell_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config/app-shell.config */ "Kt/9");



class ShellModel {
    constructor() {
        this.isShell = false;
    }
}
class DataStore {
    constructor(shellModel) {
        this.shellModel = shellModel;
        // We wait on purpose 2 secs on local environment when fetching from json to simulate the backend roundtrip.
        // However, in production you should set this delay to 0 in the assets/config/app-shell.config.prod.json file.
        // tslint:disable-next-line:max-line-length
        this.networkDelay = (_config_app_shell_config__WEBPACK_IMPORTED_MODULE_2__["AppShellConfig"].settings && _config_app_shell_config__WEBPACK_IMPORTED_MODULE_2__["AppShellConfig"].settings.networkDelay) ? _config_app_shell_config__WEBPACK_IMPORTED_MODULE_2__["AppShellConfig"].settings.networkDelay : 0;
        this.timeline = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
    }
    // Static function with generics
    // (ref: https://stackoverflow.com/a/24293088/1116959)
    // Append a shell (T & ShellModel) to every value (T) emmited to the timeline
    static AppendShell(dataObservable, shellModel, networkDelay = 400) {
        const delayObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(networkDelay));
        // Assign shell flag accordingly
        // (ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["combineLatest"])([
            delayObservable,
            dataObservable
        ]).pipe(
        // Dismiss unnecessary delayValue
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(([delayValue, dataValue]) => Object.assign(dataValue, { isShell: false })), 
        // Set the shell model as the initial value
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["startWith"])(Object.assign(shellModel, { isShell: true })));
    }
    load(dataSourceObservable, networkDelay) {
        // tslint:disable-next-line:no-shadowed-variable
        const delay = (typeof networkDelay === 'number') ? networkDelay : this.networkDelay;
        let processedDataSource;
        // If no network delay, then don't show shell
        if (delay === 0) {
            processedDataSource = dataSourceObservable;
        }
        else {
            processedDataSource = DataStore.AppendShell(dataSourceObservable, this.shellModel, delay);
        }
        processedDataSource
            .subscribe((dataValue) => {
            this.timeline.next(dataValue);
        });
    }
    get state() {
        return this.timeline.asObservable();
    }
}


/***/ }),

/***/ "iTUp":
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var angular_pipes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-pipes */ "+1ss");
/* harmony import */ var _time_difference_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./time-difference.pipe */ "ykzn");
/* harmony import */ var _time_ago_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./time-ago.pipe */ "R4nH");







class PipesModule {
}
PipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PipesModule });
PipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PipesModule_Factory(t) { return new (t || PipesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            angular_pipes__WEBPACK_IMPORTED_MODULE_3__["NgFloorPipeModule"]
        ], angular_pipes__WEBPACK_IMPORTED_MODULE_3__["NgFloorPipeModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PipesModule, { declarations: [_time_difference_pipe__WEBPACK_IMPORTED_MODULE_4__["TimeDifferencePipe"],
        _time_ago_pipe__WEBPACK_IMPORTED_MODULE_5__["TimeAgoPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
        angular_pipes__WEBPACK_IMPORTED_MODULE_3__["NgFloorPipeModule"]], exports: [angular_pipes__WEBPACK_IMPORTED_MODULE_3__["NgFloorPipeModule"],
        _time_difference_pipe__WEBPACK_IMPORTED_MODULE_4__["TimeDifferencePipe"],
        _time_ago_pipe__WEBPACK_IMPORTED_MODULE_5__["TimeAgoPipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                    angular_pipes__WEBPACK_IMPORTED_MODULE_3__["NgFloorPipeModule"]
                ],
                declarations: [
                    _time_difference_pipe__WEBPACK_IMPORTED_MODULE_4__["TimeDifferencePipe"],
                    _time_ago_pipe__WEBPACK_IMPORTED_MODULE_5__["TimeAgoPipe"]
                ],
                exports: [
                    angular_pipes__WEBPACK_IMPORTED_MODULE_3__["NgFloorPipeModule"],
                    _time_difference_pipe__WEBPACK_IMPORTED_MODULE_4__["TimeDifferencePipe"],
                    _time_ago_pipe__WEBPACK_IMPORTED_MODULE_5__["TimeAgoPipe"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "ykzn":
/*!***********************************************!*\
  !*** ./src/app/pipes/time-difference.pipe.ts ***!
  \***********************************************/
/*! exports provided: TimeDifferencePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeDifferencePipe", function() { return TimeDifferencePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "Wgwc");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);



class TimeDifferencePipe {
    transform(value) {
        return dayjs__WEBPACK_IMPORTED_MODULE_1__(value).diff(dayjs__WEBPACK_IMPORTED_MODULE_1__(), 'day');
    }
}
TimeDifferencePipe.ɵfac = function TimeDifferencePipe_Factory(t) { return new (t || TimeDifferencePipe)(); };
TimeDifferencePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "appTimeDifference", type: TimeDifferencePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimeDifferencePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'appTimeDifference' }]
    }], null, null); })();


/***/ })

};;
//# sourceMappingURL=food-details-food-details-module~food-listing-food-listing-module.js.map