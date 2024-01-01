"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_firebase_auth_firebase-auth_module_ts"],{

/***/ 53442:
/*!************************************************************!*\
  !*** ./src/app/firebase/auth/firebase-auth-definitions.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignInProvider": () => (/* binding */ SignInProvider)
/* harmony export */ });
var SignInProvider;
(function (SignInProvider) {
  SignInProvider["apple"] = "apple.com";
  SignInProvider["facebook"] = "facebook.com";
  SignInProvider["google"] = "google.com";
  SignInProvider["twitter"] = "twitter.com";
})(SignInProvider || (SignInProvider = {}));

/***/ }),

/***/ 78949:
/*!*******************************************************!*\
  !*** ./src/app/firebase/auth/firebase-auth.helper.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirebaseAuthHelper": () => (/* binding */ FirebaseAuthHelper)
/* harmony export */ });
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ 61577);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire/auth */ 16818);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



// * Aux methods inspired on the @capacitor-firebase/authentication library
class FirebaseAuthHelper {
  applySignInOptions(options, provider) {
    if (options.customParameters) {
      const customParameters = {};
      options.customParameters.map(parameter => {
        customParameters[parameter.key] = parameter.value;
      });
      provider.setCustomParameters(customParameters);
    }
    if (options.scopes) {
      for (const scope of options.scopes) {
        provider.addScope(scope);
      }
    }
  }
  // ? (see: https://github.com/capawesome-team/capacitor-firebase/blob/9024eef856dbd25b2b6459e4b6bcee104ca89755/packages/authentication/src/web.ts#L594)
  createSignInResult(userCredential, authCredential) {
    const userResult = this.createUserResult(userCredential?.user || null);
    const credentialResult = this.createCredentialResult(authCredential);
    const additionalUserInfoResult = this.createAdditionalUserInfoResult(userCredential);
    const result = {
      user: userResult,
      credential: credentialResult,
      additionalUserInfo: additionalUserInfoResult
    };
    return result;
  }
  // ? (see: https://github.com/capawesome-team/capacitor-firebase/blob/9024eef856dbd25b2b6459e4b6bcee104ca89755/packages/authentication/src/web.ts#L627)
  createUserResult(user) {
    if (!user) {
      return null;
    }
    const result = {
      displayName: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified,
      isAnonymous: user.isAnonymous,
      phoneNumber: user.phoneNumber,
      photoUrl: user.providerData[0].photoURL,
      providerId: user.providerData[0].providerId,
      tenantId: user.tenantId,
      uid: user.uid
    };
    return result;
  }
  // ? (see: https://github.com/capawesome-team/capacitor-firebase/blob/9024eef856dbd25b2b6459e4b6bcee104ca89755/packages/authentication/src/web.ts#L610)
  createCredentialResult(credential) {
    if (!credential) {
      return null;
    }
    const result = {
      providerId: credential.providerId
    };
    if (credential instanceof _angular_fire_auth__WEBPACK_IMPORTED_MODULE_0__.OAuthCredential) {
      result.accessToken = credential.accessToken;
      result.idToken = credential.idToken;
      result.secret = credential.secret;
    }
    return result;
  }
  // ? (see: https://github.com/capawesome-team/capacitor-firebase/blob/9024eef856dbd25b2b6459e4b6bcee104ca89755/packages/authentication/src/web.ts#L645)
  createAdditionalUserInfoResult(credential) {
    if (!credential) {
      return null;
    }
    const additionalUserInfo = (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__.getAdditionalUserInfo)(credential);
    if (!additionalUserInfo) {
      return null;
    }
    const {
      isNewUser,
      profile,
      providerId,
      username
    } = additionalUserInfo;
    const result = {
      isNewUser
    };
    if (providerId !== null) {
      result.providerId = providerId;
    }
    if (profile !== null) {
      result.profile = profile;
    }
    if (username !== null && username !== undefined) {
      result.username = username;
    }
    return result;
  }
  static #_ = this.ɵfac = function FirebaseAuthHelper_Factory(t) {
    return new (t || FirebaseAuthHelper)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: FirebaseAuthHelper,
    factory: FirebaseAuthHelper.ɵfac
  });
}

/***/ }),

/***/ 8824:
/*!*******************************************************!*\
  !*** ./src/app/firebase/auth/firebase-auth.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirebaseAuthModule": () => (/* binding */ FirebaseAuthModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var _angular_fire_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/app */ 89674);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/auth */ 61577);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/auth */ 16818);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/components.module */ 45642);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _firebase_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./firebase-auth.service */ 43108);
/* harmony import */ var _firebase_auth_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./firebase-auth.helper */ 78949);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);














const routes = [{
  path: '',
  children: [
  // ? /firebase/auth redirect
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  }, {
    path: 'sign-in',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_firebase_auth_sign-in_firebase-sign-in_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./sign-in/firebase-sign-in.module */ 51425)).then(m => m.FirebaseSignInPageModule)
  }, {
    path: 'sign-up',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_firebase_auth_sign-up_firebase-sign-up_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./sign-up/firebase-sign-up.module */ 58375)).then(m => m.FirebaseSignUpPageModule)
  }, {
    path: 'profile',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_firebase_auth_profile_firebase-profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./profile/firebase-profile.module */ 40703)).then(m => m.FirebaseProfilePageModule)
  }]
}];
class FirebaseAuthModule {
  static #_ = this.ɵfac = function FirebaseAuthModule_Factory(t) {
    return new (t || FirebaseAuthModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: FirebaseAuthModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    providers: [_firebase_auth_service__WEBPACK_IMPORTED_MODULE_3__.FirebaseAuthService, _firebase_auth_helper__WEBPACK_IMPORTED_MODULE_4__.FirebaseAuthHelper],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes),
    // ? Correct way to initialize Firebase using the Capacitor Firebase plugin mixed with the Firebase JS SDK (@angular/fire)
    (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_9__.provideFirebaseApp)(() => (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_9__.initializeApp)(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebase)), (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__.provideAuth)(() => {
      if (_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.Capacitor.isNativePlatform()) {
        return (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__.initializeAuth)((0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_9__.getApp)(), {
          persistence: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__.indexedDBLocalPersistence
          // persistence: browserLocalPersistence
          // popupRedirectResolver: browserPopupRedirectResolver
        });
      } else {
        return (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__.getAuth)();
      }
    })]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](FirebaseAuthModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, _angular_fire_app__WEBPACK_IMPORTED_MODULE_9__.FirebaseAppModule, _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__.AuthModule]
  });
})();

/***/ }),

/***/ 43108:
/*!********************************************************!*\
  !*** ./src/app/firebase/auth/firebase-auth.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirebaseAuthService": () => (/* binding */ FirebaseAuthService)
/* harmony export */ });
/* harmony import */ var _Users_teeicloud_TitanEstates_Titan_Estates_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 83918);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ 61577);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/auth */ 16818);
/* harmony import */ var _capacitor_firebase_authentication__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor-firebase/authentication */ 50331);
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shell/data-store */ 29760);
/* harmony import */ var _profile_firebase_profile_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile/firebase-profile.model */ 11198);
/* harmony import */ var _firebase_auth_definitions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./firebase-auth-definitions */ 53442);
/* harmony import */ var _firebase_auth_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./firebase-auth.helper */ 78949);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 93819);


















class FirebaseAuthService {
  constructor(router, route, platform, ngZone, firebaseAuthHelper, loadingController, location, platformId) {
    this.router = router;
    this.route = route;
    this.platform = platform;
    this.ngZone = ngZone;
    this.firebaseAuthHelper = firebaseAuthHelper;
    this.loadingController = loadingController;
    this.location = location;
    this.platformId = platformId;
    this.redirectResultSubject = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this.authStateSubject = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.isPlatformBrowser)(this.platformId)) {
      _capacitor_firebase_authentication__WEBPACK_IMPORTED_MODULE_1__.FirebaseAuthentication.removeAllListeners().then(() => {
        _capacitor_firebase_authentication__WEBPACK_IMPORTED_MODULE_1__.FirebaseAuthentication.addListener('authStateChange', change => {
          this.ngZone.run(() => {
            this.authStateSubject.next(change);
          });
          if (change?.user) {
            // ? User is signed in.
            this.currentUser = change.user;
          } else {
            // ? No user is signed in.
            this.currentUser = null;
          }
        });
      });
      // ? We should only listen for firebase auth redirect results when we have the flag 'auth-redirect' in the query params
      this.route.queryParams.subscribe(params => {
        const authProvider = params['auth-redirect'];
        if (authProvider) {
          // ? Show a loader while we receive the getRedirectResult notification
          this.presentLoading(authProvider);
          // ? When using signInWithRedirect, this listens for the redirect results
          const auth = (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__.getAuth)();
          (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__.getRedirectResult)(auth).then(result => {
            // ? result.credential.accessToken gives you the Provider Access Token. You can use it to access the Provider API.
            // const credential = FacebookAuthProvider.credentialFromResult(result);
            // const token = credential.accessToken;
            let credential;
            if (result && result !== null) {
              switch (result.providerId) {
                case _firebase_auth_definitions__WEBPACK_IMPORTED_MODULE_4__.SignInProvider.apple:
                  credential = _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__.OAuthProvider.credentialFromResult(result);
                  break;
                case _firebase_auth_definitions__WEBPACK_IMPORTED_MODULE_4__.SignInProvider.facebook:
                  credential = _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__.FacebookAuthProvider.credentialFromResult(result);
                  break;
                case _firebase_auth_definitions__WEBPACK_IMPORTED_MODULE_4__.SignInProvider.google:
                  credential = _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__.GoogleAuthProvider.credentialFromResult(result);
                  break;
                case _firebase_auth_definitions__WEBPACK_IMPORTED_MODULE_4__.SignInProvider.twitter:
                  credential = _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__.TwitterAuthProvider.credentialFromResult(result);
                  break;
              }
              const signInResult = firebaseAuthHelper.createSignInResult(result, credential);
              this.dismissLoading();
              this.redirectResultSubject.next(signInResult);
            } else {
              throw new Error('Could not get user from redirect result');
            }
          }, reason => {
            console.log('Promise rejected', reason);
            // ? Clear redirection loading
            this.clearAuthWithProvidersRedirection();
          }).catch(error => {
            // ? Clear redirection loading
            this.clearAuthWithProvidersRedirection();
            // ? Handle Errors here
            // const errorCode = error.code;
            // const errorMessage = error.message;
            // ? The email of the user's account used.
            // const email = error.email;
            // ?AuthCredential type that was used.
            // const credential = FacebookAuthProvider.credentialFromError(error);
            let errorResult = {
              error: 'undefined'
            };
            if (error && (error.code || error.message)) {
              errorResult = {
                error: error.code ? error.code : error.message
              };
            }
            this.redirectResultSubject.next(errorResult);
          });
        }
      });
    }
  }
  ngOnDestroy() {
    this.dismissLoading();
  }
  prepareForAuthWithProvidersRedirection(authProviderId) {
    // ? Before invoking auth provider redirect flow, add a flag to the path.
    // ? The presence of the flag in the path indicates we should wait for the auth redirect to complete
    this.location.replaceState(this.location.path(), 'auth-redirect=' + authProviderId, this.location.getState());
  }
  clearAuthWithProvidersRedirection() {
    // ? Remove auth-redirect param from url
    this.location.replaceState(this.router.url.split('?')[0], '');
    this.dismissLoading();
  }
  presentLoading(authProviderId) {
    var _this = this;
    return (0,_Users_teeicloud_TitanEstates_Titan_Estates_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const authProviderCapitalized = authProviderId[0].toUpperCase() + authProviderId.slice(1);
      _this.loadingController.create({
        message: authProviderId ? 'Signing in with ' + authProviderCapitalized : 'Signing in ...',
        duration: 4000
      }).then(loader => {
        _this.authLoader = loader;
        _this.authLoader.present();
      });
    })();
  }
  dismissLoading() {
    var _this2 = this;
    return (0,_Users_teeicloud_TitanEstates_Titan_Estates_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.authLoader) {
        yield _this2.authLoader.dismiss();
      }
    })();
  }
  signOut() {
    return (0,_Users_teeicloud_TitanEstates_Titan_Estates_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const signOutPromise = new Promise((resolve, reject) => {
        // * 1. Sign out on the native layer
        _capacitor_firebase_authentication__WEBPACK_IMPORTED_MODULE_1__.FirebaseAuthentication.signOut().then(nativeResult => {
          // * 2. Sign out on the web layer
          const auth = (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__.getAuth)();
          (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__.signOut)(auth).then(webResult => {
            // ? Sign-out successful
            resolve('Successfully sign out from native and web');
          }).catch(webError => {
            // ? An error happened
            reject(`Web auth sign out error: ${webError}`);
          });
        }).catch(nativeError => {
          reject(`Native auth sign out error: ${nativeError}`);
        });
      });
      return signOutPromise;
    })();
  }
  socialSignIn(provider, authOptions) {
    var _this3 = this;
    return (0,_Users_teeicloud_TitanEstates_Titan_Estates_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.presentLoading(provider.providerId);
      let authResult = null;
      if (_this3.platform.is('capacitor')) {
        authResult = yield _this3.nativeAuth(provider, authOptions);
      } else {
        authResult = yield _this3.webAuth(provider, authOptions);
      }
      _this3.dismissLoading();
      if (authResult !== null) {
        return authResult;
      } else {
        return Promise.reject('Could not perform social sign in, authResult is null');
      }
    })();
  }
  webAuth(provider, authOptions) {
    var _this4 = this;
    return (0,_Users_teeicloud_TitanEstates_Titan_Estates_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const auth = (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__.getAuth)();
      let webAuthUserCredential = null;
      _this4.firebaseAuthHelper.applySignInOptions(authOptions || {}, provider);
      if (_this4.platform.is('desktop')) {
        webAuthUserCredential = yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__.signInWithPopup)(auth, provider);
      } else {
        // ? Web but not desktop, for example mobile PWA
        _this4.prepareForAuthWithProvidersRedirection(provider.providerId);
        return (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__.signInWithRedirect)(auth, provider);
        // ? If you prefer to use signInWithPopup in every scenario, just un-comment this line
        // webAuthUserCredential = await signInWithPopup(auth, provider);
      }
      if (webAuthUserCredential && webAuthUserCredential !== null) {
        let webCredential = null;
        switch (provider.providerId) {
          case _firebase_auth_definitions__WEBPACK_IMPORTED_MODULE_4__.SignInProvider.apple:
            webCredential = _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__.OAuthProvider.credentialFromResult(webAuthUserCredential);
            break;
          case _firebase_auth_definitions__WEBPACK_IMPORTED_MODULE_4__.SignInProvider.facebook:
            webCredential = _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__.FacebookAuthProvider.credentialFromResult(webAuthUserCredential);
            break;
          case _firebase_auth_definitions__WEBPACK_IMPORTED_MODULE_4__.SignInProvider.google:
            webCredential = _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__.GoogleAuthProvider.credentialFromResult(webAuthUserCredential);
            break;
          case _firebase_auth_definitions__WEBPACK_IMPORTED_MODULE_4__.SignInProvider.twitter:
            webCredential = _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__.TwitterAuthProvider.credentialFromResult(webAuthUserCredential);
            break;
        }
        return _this4.firebaseAuthHelper.createSignInResult(webAuthUserCredential, webCredential);
      } else {
        return Promise.reject('null webAuthUserCredential');
      }
    })();
  }
  nativeAuth(provider, authOptions) {
    var _this5 = this;
    return (0,_Users_teeicloud_TitanEstates_Titan_Estates_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let nativeAuthResult = null;
      // * 1. Sign in on the native layer
      switch (provider.providerId) {
        case _firebase_auth_definitions__WEBPACK_IMPORTED_MODULE_4__.SignInProvider.apple:
          nativeAuthResult = yield _capacitor_firebase_authentication__WEBPACK_IMPORTED_MODULE_1__.FirebaseAuthentication.signInWithApple(authOptions);
          break;
        case _firebase_auth_definitions__WEBPACK_IMPORTED_MODULE_4__.SignInProvider.facebook:
          nativeAuthResult = yield _capacitor_firebase_authentication__WEBPACK_IMPORTED_MODULE_1__.FirebaseAuthentication.signInWithFacebook(authOptions);
          break;
        case _firebase_auth_definitions__WEBPACK_IMPORTED_MODULE_4__.SignInProvider.google:
          nativeAuthResult = yield _capacitor_firebase_authentication__WEBPACK_IMPORTED_MODULE_1__.FirebaseAuthentication.signInWithGoogle(authOptions);
          break;
        case _firebase_auth_definitions__WEBPACK_IMPORTED_MODULE_4__.SignInProvider.twitter:
          nativeAuthResult = yield _capacitor_firebase_authentication__WEBPACK_IMPORTED_MODULE_1__.FirebaseAuthentication.signInWithTwitter(authOptions);
          break;
      }
      // ? Once we have the user authenticated on the native layer, authenticate it in the web layer
      if (nativeAuthResult && nativeAuthResult !== null) {
        const auth = (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__.getAuth)();
        let nativeCredential = null;
        switch (provider.providerId) {
          case _firebase_auth_definitions__WEBPACK_IMPORTED_MODULE_4__.SignInProvider.apple:
            const provider = new _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__.OAuthProvider(_firebase_auth_definitions__WEBPACK_IMPORTED_MODULE_4__.SignInProvider.apple);
            nativeCredential = provider.credential({
              idToken: nativeAuthResult.credential?.idToken,
              rawNonce: nativeAuthResult.credential?.nonce
            });
            break;
          case _firebase_auth_definitions__WEBPACK_IMPORTED_MODULE_4__.SignInProvider.facebook:
            nativeCredential = _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__.FacebookAuthProvider.credential(nativeAuthResult.credential?.accessToken);
            break;
          case _firebase_auth_definitions__WEBPACK_IMPORTED_MODULE_4__.SignInProvider.google:
            nativeCredential = _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__.GoogleAuthProvider.credential(nativeAuthResult.credential?.idToken, nativeAuthResult.credential?.accessToken);
            break;
          case _firebase_auth_definitions__WEBPACK_IMPORTED_MODULE_4__.SignInProvider.twitter:
            try {
              nativeCredential = _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__.TwitterAuthProvider.credential(nativeAuthResult.credential?.accessToken, nativeAuthResult.credential?.secret);
              break;
            } catch (error) {
              console.error(error);
            }
        }
        // * 2. Sign in on the web layer using the access token we got from the native sign in
        const webAuthResult = yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__.signInWithCredential)(auth, nativeCredential);
        return _this5.firebaseAuthHelper.createSignInResult(webAuthResult, nativeCredential);
      } else {
        return Promise.reject('null nativeAuthResult');
      }
    })();
  }
  signInWithFacebook() {
    var _this6 = this;
    return (0,_Users_teeicloud_TitanEstates_Titan_Estates_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const provider = new _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__.FacebookAuthProvider();
      const authOptions = {
        scopes: ['email', 'public_profile']
      };
      // ? When we use the redirect authentication flow, the code below the socialSignIn() invocation does not get executed as we leave the current page
      return _this6.socialSignIn(provider, authOptions);
    })();
  }
  signInWithGoogle() {
    var _this7 = this;
    return (0,_Users_teeicloud_TitanEstates_Titan_Estates_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const provider = new _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__.GoogleAuthProvider();
      const authOptions = {
        scopes: ['email', 'profile']
      };
      // ? When we use the redirect authentication flow, the code below the socialSignIn() invocation does not get executed as we leave the current page
      return _this7.socialSignIn(provider, authOptions);
    })();
  }
  signInWithTwitter() {
    var _this8 = this;
    return (0,_Users_teeicloud_TitanEstates_Titan_Estates_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const provider = new _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__.TwitterAuthProvider();
      const authOptions = {
        scopes: ['email', 'name']
      };
      // ? When we use the redirect authentication flow, the code below the socialSignIn() invocation does not get executed as we leave the current page
      return _this8.socialSignIn(provider, authOptions);
    })();
  }
  signInWithApple() {
    var _this9 = this;
    return (0,_Users_teeicloud_TitanEstates_Titan_Estates_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const provider = new _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__.OAuthProvider('apple.com');
      const authOptions = {
        scopes: ['email', 'name']
      };
      // ? When we use the redirect authentication flow, the code below the socialSignIn() invocation does not get executed as we leave the current page
      return _this9.socialSignIn(provider, authOptions);
    })();
  }
  signInWithEmail(email, password) {
    var _this10 = this;
    return (0,_Users_teeicloud_TitanEstates_Titan_Estates_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // ? Show a loader while we attempt to perform the login
      _this10.presentLoading('email');
      const auth = (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__.getAuth)();
      const credential = yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__.signInWithEmailAndPassword)(auth, email, password);
      _this10.dismissLoading();
      return _this10.firebaseAuthHelper.createSignInResult(credential, null);
    })();
  }
  signUpWithEmail(email, password) {
    var _this11 = this;
    return (0,_Users_teeicloud_TitanEstates_Titan_Estates_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // ? Show a loader while we attempt to perform the signup
      _this11.presentLoading('email');
      const auth = (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__.getAuth)();
      const credential = yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__.createUserWithEmailAndPassword)(auth, email, password);
      _this11.dismissLoading();
      return _this11.firebaseAuthHelper.createSignInResult(credential, null);
    })();
  }
  get redirectResult$() {
    return this.redirectResultSubject.asObservable();
  }
  get authState$() {
    return this.authStateSubject.asObservable();
  }
  getProfileDataSource() {
    const auth = (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__.getAuth)();
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(auth.currentUser).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(user => user != null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(user => {
      const userResult = this.firebaseAuthHelper.createUserResult(user);
      return this.setUserModelForProfile(userResult);
    }));
  }
  setUserModelForProfile(userResult) {
    const userModel = new _profile_firebase_profile_model__WEBPACK_IMPORTED_MODULE_3__.FirebaseProfileModel();
    if (userResult) {
      userModel.image = this.getPhotoURL(userResult.providerId, userResult.photoUrl);
      userModel.name = userResult.displayName || 'What\'s your name?';
      userModel.role = 'How would you describe yourself?';
      userModel.description = 'Anything else you would like to share with the world?';
      userModel.phoneNumber = userResult.phoneNumber || 'Is there a number where I can reach you?';
      userModel.email = userResult.email || 'Where can I send you emails?';
      userModel.provider = userResult.providerId !== 'password' ? userResult.providerId : 'Credentials';
    }
    return userModel;
  }
  getProfileStore(dataSource) {
    // ? Initialize the model specifying that it is a shell model
    const shellModel = new _profile_firebase_profile_model__WEBPACK_IMPORTED_MODULE_3__.FirebaseProfileModel();
    this.profileDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_2__.DataStore(shellModel);
    // ? Trigger the loading mechanism (with shell) in the dataStore
    this.profileDataStore.load(dataSource);
    return this.profileDataStore;
  }
  getPhotoURL(signInProviderId, photoURL) {
    // ? Default imgs are too small and our app needs a bigger image
    switch (signInProviderId) {
      case _firebase_auth_definitions__WEBPACK_IMPORTED_MODULE_4__.SignInProvider.facebook:
        return photoURL + '?height=400';
      case _firebase_auth_definitions__WEBPACK_IMPORTED_MODULE_4__.SignInProvider.twitter:
        return photoURL.replace('_normal', '_400x400');
      case _firebase_auth_definitions__WEBPACK_IMPORTED_MODULE_4__.SignInProvider.google:
        return photoURL.split('=')[0];
      case 'password':
        return 'https://s3-us-west-2.amazonaws.com/ionicthemes/otros/avatar-placeholder.png';
      default:
        return photoURL;
    }
  }
  static #_ = this.ɵfac = function FirebaseAuthService_Factory(t) {
    return new (t || FirebaseAuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_15__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_13__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_firebase_auth_helper__WEBPACK_IMPORTED_MODULE_5__.FirebaseAuthHelper), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_15__.LoadingController), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_13__.PLATFORM_ID));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjectable"]({
    token: FirebaseAuthService,
    factory: FirebaseAuthService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 11198:
/*!*****************************************************************!*\
  !*** ./src/app/firebase/auth/profile/firebase-profile.model.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirebaseProfileModel": () => (/* binding */ FirebaseProfileModel)
/* harmony export */ });
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shell/data-store */ 29760);

class FirebaseProfileModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__.ShellModel {
  constructor() {
    super();
  }
}

/***/ }),

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

/***/ 29746:
/*!*********************************************************************************!*\
  !*** ./node_modules/@capacitor-firebase/authentication/dist/esm/definitions.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProviderId": () => (/* binding */ ProviderId)
/* harmony export */ });
/// <reference types="@capacitor/cli" />
var ProviderId;
(function (ProviderId) {
  ProviderId["APPLE"] = "apple.com";
  ProviderId["FACEBOOK"] = "facebook.com";
  ProviderId["GAME_CENTER"] = "gc.apple.com";
  ProviderId["GITHUB"] = "github.com";
  ProviderId["GOOGLE"] = "google.com";
  ProviderId["MICROSOFT"] = "microsoft.com";
  ProviderId["PLAY_GAMES"] = "playgames.google.com";
  ProviderId["TWITTER"] = "twitter.com";
  ProviderId["YAHOO"] = "yahoo.com";
  ProviderId["PASSWORD"] = "password";
  ProviderId["PHONE"] = "phone";
})(ProviderId || (ProviderId = {}));

/***/ }),

/***/ 50331:
/*!***************************************************************************!*\
  !*** ./node_modules/@capacitor-firebase/authentication/dist/esm/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirebaseAuthentication": () => (/* binding */ FirebaseAuthentication),
/* harmony export */   "ProviderId": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.ProviderId)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 29746);

const FirebaseAuthentication = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('FirebaseAuthentication', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor-firebase_authentication_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 18279)).then(m => new m.FirebaseAuthenticationWeb())
});



/***/ })

}]);
//# sourceMappingURL=src_app_firebase_auth_firebase-auth_module_ts.js.map