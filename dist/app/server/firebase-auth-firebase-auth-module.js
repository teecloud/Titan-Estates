exports.ids = ["firebase-auth-firebase-auth-module"];
exports.modules = {

/***/ "T7tK":
/*!********************************************************!*\
  !*** ./src/app/firebase/auth/firebase-auth.service.ts ***!
  \********************************************************/
/*! exports provided: FirebaseAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseAuthService", function() { return FirebaseAuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shell/data-store */ "f/Ol");
/* harmony import */ var _profile_firebase_profile_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/firebase-profile.model */ "Uz1e");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/app */ "Wcq6");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var capacitor_firebase_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! capacitor-firebase-auth */ "wqjM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");













class FirebaseAuthService {
    constructor(angularFire, platform, platformId) {
        this.angularFire = angularFire;
        this.platform = platform;
        this.platformId = platformId;
        this.redirectResult = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["isPlatformBrowser"])(this.platformId)) {
            this.angularFire.onAuthStateChanged((user) => {
                if (user) {
                    // User is signed in.
                    this.currentUser = user;
                }
                else {
                    // No user is signed in.
                    this.currentUser = null;
                }
            });
            if (!this.platform.is('capacitor')) {
                // when using signInWithRedirect, this listens for the redirect results
                this.angularFire.getRedirectResult()
                    .then((result) => {
                    // result.credential.accessToken gives you the Provider Access Token. You can use it to access the Provider API.
                    if (result.user) {
                        this.userProviderAdditionalInfo = result.additionalUserInfo.profile;
                        this.redirectResult.next(result);
                    }
                }, (error) => {
                    this.redirectResult.next({ error: error.code });
                });
            }
        }
    }
    getRedirectResult() {
        return this.redirectResult.asObservable();
    }
    getPhotoURL(signInProviderId, photoURL) {
        // Default imgs are too small and our app needs a bigger image
        switch (signInProviderId) {
            case 'facebook.com':
                return photoURL + '?height=400';
            case 'password':
                return 'https://s3-us-west-2.amazonaws.com/ionicthemes/otros/avatar-placeholder.png';
            case 'twitter.com':
                return photoURL.replace('_normal', '_400x400');
            case 'google.com':
                return photoURL.split('=')[0];
            default:
                return photoURL;
        }
    }
    // Get the currently signed-in user
    getLoggedInUser() {
        return this.currentUser;
    }
    signOut() {
        if (this.platform.is('capacitor')) {
            return Object(capacitor_firebase_auth__WEBPACK_IMPORTED_MODULE_8__["cfaSignOut"])();
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.angularFire.signOut());
        }
    }
    signInWithEmail(email, password) {
        return this.angularFire.signInWithEmailAndPassword(email, password);
    }
    signUpWithEmail(email, password) {
        return this.angularFire.createUserWithEmailAndPassword(email, password);
    }
    socialSignIn(providerName, scopes) {
        if (this.platform.is('capacitor')) {
            return Object(capacitor_firebase_auth__WEBPACK_IMPORTED_MODULE_8__["cfaSignIn"])(providerName);
        }
        else {
            const provider = new firebase_app__WEBPACK_IMPORTED_MODULE_7__["auth"].OAuthProvider(providerName);
            if (scopes) {
                scopes.forEach(scope => {
                    provider.addScope(scope);
                });
            }
            if (this.platform.is('desktop')) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.angularFire.signInWithPopup(provider));
            }
            else {
                // web but not desktop, for example mobile PWA
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.angularFire.signInWithRedirect(provider));
            }
        }
    }
    signInWithFacebook() {
        const provider = new firebase_app__WEBPACK_IMPORTED_MODULE_7__["auth"].FacebookAuthProvider();
        return this.socialSignIn(provider.providerId);
    }
    signInWithGoogle() {
        const provider = new firebase_app__WEBPACK_IMPORTED_MODULE_7__["auth"].GoogleAuthProvider();
        const scopes = ['profile', 'email'];
        return this.socialSignIn(provider.providerId, scopes);
    }
    signInWithTwitter() {
        const provider = new firebase_app__WEBPACK_IMPORTED_MODULE_7__["auth"].TwitterAuthProvider();
        return this.socialSignIn(provider.providerId);
    }
    getProfileDataSource() {
        return this.angularFire.user
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])((user) => user != null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((user) => {
            const userModel = new _profile_firebase_profile_model__WEBPACK_IMPORTED_MODULE_4__["FirebaseProfileModel"]();
            const provierData = this.currentUser.providerData[0];
            const userData = this.userProviderAdditionalInfo ? this.userProviderAdditionalInfo : provierData;
            userModel.image = this.getPhotoURL(provierData.providerId, provierData.photoURL);
            userModel.name = userData.name || userData.displayName || 'What\'s your name?';
            userModel.role = 'How would you describe yourself?';
            userModel.description = userData.description || 'Anything else you would like to share with the world?';
            userModel.phoneNumber = userData.phoneNumber || 'Is there a number where I can reach you?';
            userModel.email = userData.email || 'Where can I send you emails?';
            userModel.provider = (provierData.providerId !== 'password') ? provierData.providerId : 'Credentials';
            return userModel;
        }));
    }
    getProfileStore(dataSource) {
        // Initialize the model specifying that it is a shell model
        const shellModel = new _profile_firebase_profile_model__WEBPACK_IMPORTED_MODULE_4__["FirebaseProfileModel"]();
        this.profileDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_3__["DataStore"](shellModel);
        // Trigger the loading mechanism (with shell) in the dataStore
        this.profileDataStore.load(dataSource);
        return this.profileDataStore;
    }
}
FirebaseAuthService.ɵfac = function FirebaseAuthService_Factory(t) { return new (t || FirebaseAuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])); };
FirebaseAuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FirebaseAuthService, factory: FirebaseAuthService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FirebaseAuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }]; }, null); })();


/***/ }),

/***/ "Uz1e":
/*!*****************************************************************!*\
  !*** ./src/app/firebase/auth/profile/firebase-profile.model.ts ***!
  \*****************************************************************/
/*! exports provided: FirebaseProfileModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseProfileModel", function() { return FirebaseProfileModel; });
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shell/data-store */ "f/Ol");

class FirebaseProfileModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
    }
}


/***/ }),

/***/ "duP/":
/*!*******************************************************!*\
  !*** ./src/app/firebase/auth/firebase-auth.module.ts ***!
  \*******************************************************/
/*! exports provided: FirebaseAuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseAuthModule", function() { return FirebaseAuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _firebase_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./firebase-auth.service */ "T7tK");












const routes = [
    {
        path: '',
        children: [
            // /firebase/auth redirect
            {
                path: '',
                redirectTo: 'sign-in',
                pathMatch: 'full',
            },
            {
                path: 'sign-in',
                loadChildren: () => __webpack_require__.e(/*! import() | sign-in-firebase-sign-in-module */ "sign-in-firebase-sign-in-module").then(__webpack_require__.bind(null, /*! ./sign-in/firebase-sign-in.module */ "ROOv")).then(m => m.FirebaseSignInPageModule)
            },
            {
                path: 'sign-up',
                loadChildren: () => __webpack_require__.e(/*! import() | sign-up-firebase-sign-up-module */ "sign-up-firebase-sign-up-module").then(__webpack_require__.bind(null, /*! ./sign-up/firebase-sign-up.module */ "RMgo")).then(m => m.FirebaseSignUpPageModule)
            },
            {
                path: 'profile',
                loadChildren: () => __webpack_require__.e(/*! import() | profile-firebase-profile-module */ "profile-firebase-profile-module").then(__webpack_require__.bind(null, /*! ./profile/firebase-profile.module */ "iNMq")).then(m => m.FirebaseProfilePageModule)
            }
        ]
    }
];
class FirebaseAuthModule {
}
FirebaseAuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FirebaseAuthModule });
FirebaseAuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FirebaseAuthModule_Factory(t) { return new (t || FirebaseAuthModule)(); }, providers: [_firebase_auth_service__WEBPACK_IMPORTED_MODULE_8__["FirebaseAuthService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebase),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuthModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FirebaseAuthModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuthModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FirebaseAuthModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                    _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                    _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebase),
                    _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuthModule"]
                ],
                providers: [_firebase_auth_service__WEBPACK_IMPORTED_MODULE_8__["FirebaseAuthService"]]
            }]
    }], null, null); })();


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


/***/ })

};;
//# sourceMappingURL=firebase-auth-firebase-auth-module.js.map