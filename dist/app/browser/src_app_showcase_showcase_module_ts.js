"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_showcase_showcase_module_ts"],{

/***/ 45527:
/*!*********************************************!*\
  !*** ./src/app/showcase/showcase.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowcasePageModule": () => (/* binding */ ShowcasePageModule)
/* harmony export */ });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/components.module */ 45642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);






const showcaseRoutes = [{
  path: '',
  children: [
  // /showcase/ redirect
  {
    path: '',
    redirectTo: 'app-shell',
    pathMatch: 'full'
  }, {
    path: 'app-shell',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_showcase_app-shell_app-shell_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./app-shell/app-shell.module */ 97127)).then(m => m.AppShellModule)
  }, {
    path: 'custom-components',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_shell_data-store_ts-src_app_showcase_custom-components_custom-components_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./custom-components/custom-components.module */ 75983)).then(m => m.CustomComponentsModule)
  }, {
    path: 'route-resolvers-ux',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_shell_data-store_ts-src_app_showcase_route-resolvers-ux_route-resolvers-ux_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./route-resolvers-ux/route-resolvers-ux.module */ 40729)).then(m => m.RouteResolversUXModule)
  }]
}];
class ShowcasePageModule {
  static #_ = this.ɵfac = function ShowcasePageModule_Factory(t) {
    return new (t || ShowcasePageModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: ShowcasePageModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(showcaseRoutes), _components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ShowcasePageModule, {
    imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_showcase_showcase_module_ts.js.map