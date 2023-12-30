exports.ids = ["firebase-crud-firebase-crud-module"];
exports.modules = {

/***/ "FZM/":
/*!*******************************************************!*\
  !*** ./src/app/firebase/crud/firebase-crud.module.ts ***!
  \*******************************************************/
/*! exports provided: FirebaseCrudModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseCrudModule", function() { return FirebaseCrudModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");










const firebaseRoutes = [
    {
        path: '',
        children: [
            // /firebase/crud redirect
            {
                path: '',
                redirectTo: 'listing',
                pathMatch: 'full',
            },
            {
                path: 'listing',
                loadChildren: () => Promise.all(/*! import() | crud-listing-firebase-listing-module */[__webpack_require__.e("crud-listing-firebase-listing-module~crud-user-firebase-user-details-module"), __webpack_require__.e("crud-listing-firebase-listing-module")]).then(__webpack_require__.bind(null, /*! ./../crud/listing/firebase-listing.module */ "Y0ph")).then(m => m.FirebaseListingPageModule)
            },
            {
                path: 'details/:id',
                loadChildren: () => Promise.all(/*! import() | crud-user-firebase-user-details-module */[__webpack_require__.e("crud-listing-firebase-listing-module~crud-user-firebase-user-details-module"), __webpack_require__.e("crud-user-firebase-user-details-module")]).then(__webpack_require__.bind(null, /*! ./../crud/user/firebase-user-details.module */ "ZexN")).then(m => m.FirebaseUserDetailsPageModule)
            }
        ]
    }
];
class FirebaseCrudModule {
}
FirebaseCrudModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: FirebaseCrudModule });
FirebaseCrudModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function FirebaseCrudModule_Factory(t) { return new (t || FirebaseCrudModule)(); }, imports: [[
            _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(firebaseRoutes),
            _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebase),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestoreModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FirebaseCrudModule, { imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestoreModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FirebaseCrudModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(firebaseRoutes),
                    _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebase),
                    _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestoreModule"]
                ],
            }]
    }], null, null); })();


/***/ })

};;
//# sourceMappingURL=firebase-crud-firebase-crud-module.js.map