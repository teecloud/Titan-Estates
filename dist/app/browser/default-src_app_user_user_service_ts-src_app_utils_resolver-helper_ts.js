"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_user_user_service_ts-src_app_utils_resolver-helper_ts"],{

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

/***/ 93258:
/*!****************************************************!*\
  !*** ./src/app/user/friends/user-friends.model.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserFriendsModel": () => (/* binding */ UserFriendsModel)
/* harmony export */ });
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shell/data-store */ 29760);

class UserFriendsModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__.ShellModel {
  constructor() {
    super();
    this.friends = [{
      image: '',
      name: '',
      job: '',
      followers: '',
      followings: '',
      following: false
    }, {
      image: '',
      name: '',
      job: '',
      followers: '',
      followings: '',
      following: true
    }, {
      image: '',
      name: '',
      job: '',
      followers: '',
      followings: '',
      following: false
    }, {
      image: '',
      name: '',
      job: '',
      followers: '',
      followings: '',
      following: false
    }];
    this.followers = [{
      image: '',
      name: '',
      job: '',
      followers: '',
      followings: '',
      following: false
    }, {
      image: '',
      name: '',
      job: '',
      followers: '',
      followings: '',
      following: false
    }, {
      image: '',
      name: '',
      job: '',
      followers: '',
      followings: '',
      following: false
    }, {
      image: '',
      name: '',
      job: '',
      followers: '',
      followings: '',
      following: true
    }];
    this.following = [{
      image: '',
      name: '',
      job: '',
      followers: '',
      followings: '',
      following: false
    }, {
      image: '',
      name: '',
      job: '',
      followers: '',
      followings: '',
      following: false
    }, {
      image: '',
      name: '',
      job: '',
      followers: '',
      followings: '',
      following: false
    }, {
      image: '',
      name: '',
      job: '',
      followers: '',
      followings: '',
      following: false
    }];
  }
}

/***/ }),

/***/ 38415:
/*!****************************************************!*\
  !*** ./src/app/user/profile/user-profile.model.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserProfileModel": () => (/* binding */ UserProfileModel)
/* harmony export */ });
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shell/data-store */ 29760);

class UserProfileModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__.ShellModel {
  constructor() {
    super();
    this.friends = [{
      image: '',
      name: ''
    }, {
      image: '',
      name: ''
    }, {
      image: '',
      name: ''
    }, {
      image: '',
      name: ''
    }];
    this.photos = ['', '', '', ''];
  }
}

/***/ }),

/***/ 1584:
/*!**************************************!*\
  !*** ./src/app/user/user.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shell/data-store */ 29760);
/* harmony import */ var _profile_user_profile_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile/user-profile.model */ 38415);
/* harmony import */ var _friends_user_friends_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./friends/user-friends.model */ 93258);
/* harmony import */ var _utils_transfer_state_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/transfer-state-helper */ 15009);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 58987);











class UserService {
  constructor(platformId, transferStateHelper, http) {
    this.platformId = platformId;
    this.transferStateHelper = transferStateHelper;
    this.http = http;
  }
  getProfileDataSource() {
    const rawDataSource = this.http.get('./assets/sample-data/user/user-profile.json').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(data => {
      // Note: HttpClient cannot know how to instantiate a class for the returned data
      // We need to properly cast types from json data
      const profile = new _profile_user_profile_model__WEBPACK_IMPORTED_MODULE_1__.UserProfileModel();
      // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
      // Note: If you have non-enummerable properties, you can try a spread operator instead. profile = {...data};
      // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)
      Object.assign(profile, data);
      return profile;
    }));
    // This method tapps into the raw data source and stores the resolved data in the TransferState, then when
    // transitioning from the server rendered view to the browser, checks if we already loaded the data in the server to prevent
    // duplicate http requests.
    const cachedDataSource = this.transferStateHelper.checkDataSourceState('profile-state', rawDataSource);
    return cachedDataSource;
  }
  getProfileStore(dataSource) {
    // Use cache if available
    if (!this.profileDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel = new _profile_user_profile_model__WEBPACK_IMPORTED_MODULE_1__.UserProfileModel();
      this.profileDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_0__.DataStore(shellModel);
      // If running in the server, then don't add shell to the Data Store
      // If we already loaded the Data Source in the server, then don't show a shell when transitioning back to the broswer from the server
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformServer)(this.platformId) || dataSource['ssr_state']) {
        // Trigger loading mechanism with 0 delay (this will prevent the shell to be shown)
        this.profileDataStore.load(dataSource, 0);
      } else {
        // On browser transitions
        // Trigger the loading mechanism (with shell)
        this.profileDataStore.load(dataSource);
      }
    }
    return this.profileDataStore;
  }
  getFriendsDataSource() {
    const rawDataSource = this.http.get('./assets/sample-data/user/user-friends.json').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(data => {
      // Note: HttpClient cannot know how to instantiate a class for the returned data
      // We need to properly cast types from json data
      const friends = new _friends_user_friends_model__WEBPACK_IMPORTED_MODULE_2__.UserFriendsModel();
      // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
      // Note: If you have non-enummerable properties, you can try a spread operator instead. friends = {...data};
      // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)
      Object.assign(friends, data);
      return friends;
    }));
    // This method tapps into the raw data source and stores the resolved data in the TransferState, then when
    // transitioning from the server rendered view to the browser, checks if we already loaded the data in the server to prevent
    // duplicate http requests.
    const cachedDataSource = this.transferStateHelper.checkDataSourceState('friends-state', rawDataSource);
    return cachedDataSource;
  }
  getFriendsStore(dataSource) {
    // Use cache if available
    if (!this.friendsDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel = new _friends_user_friends_model__WEBPACK_IMPORTED_MODULE_2__.UserFriendsModel();
      this.friendsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_0__.DataStore(shellModel);
      // If running in the server, then don't add shell to the Data Store
      // If we already loaded the Data Source in the server, then don't show a shell when transitioning back to the broswer from the server
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformServer)(this.platformId) || dataSource['ssr_state']) {
        // Trigger loading mechanism with 0 delay (this will prevent the shell to be shown)
        this.friendsDataStore.load(dataSource, 0);
      } else {
        // On browser transitions
        // Trigger the loading mechanism (with shell)
        this.friendsDataStore.load(dataSource);
      }
    }
    return this.friendsDataStore;
  }
  static #_ = this.ɵfac = function UserService_Factory(t) {
    return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_utils_transfer_state_helper__WEBPACK_IMPORTED_MODULE_3__.TransferStateHelper), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
    token: UserService,
    factory: UserService.ɵfac
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
//# sourceMappingURL=default-src_app_user_user_service_ts-src_app_utils_resolver-helper_ts.js.map