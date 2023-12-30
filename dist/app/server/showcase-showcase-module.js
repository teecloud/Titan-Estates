exports.ids = ["showcase-showcase-module"];
exports.modules = {

/***/ "Zah/":
/*!*********************************************!*\
  !*** ./src/app/showcase/showcase.module.ts ***!
  \*********************************************/
/*! exports provided: ShowcasePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcasePageModule", function() { return ShowcasePageModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/components.module */ "j1ZV");








const showcaseRoutes = [
    {
        path: '',
        children: [
            // /showcase/ redirect
            {
                path: '',
                redirectTo: 'app-shell',
                pathMatch: 'full',
            },
            {
                path: 'app-shell',
                loadChildren: () => __webpack_require__.e(/*! import() | app-shell-app-shell-module */ "app-shell-app-shell-module").then(__webpack_require__.bind(null, /*! ./app-shell/app-shell.module */ "8Cws")).then(m => m.AppShellModule)
            },
            {
                path: 'custom-components',
                loadChildren: () => __webpack_require__.e(/*! import() | custom-components-custom-components-module */ "custom-components-custom-components-module").then(__webpack_require__.bind(null, /*! ./custom-components/custom-components.module */ "H2N2")).then(m => m.CustomComponentsModule)
            },
            {
                path: 'route-resolvers-ux',
                loadChildren: () => __webpack_require__.e(/*! import() | route-resolvers-ux-route-resolvers-ux-module */ "route-resolvers-ux-route-resolvers-ux-module").then(__webpack_require__.bind(null, /*! ./route-resolvers-ux/route-resolvers-ux.module */ "XxPA")).then(m => m.RouteResolversUXModule)
            }
        ]
    }
];
class ShowcasePageModule {
}
ShowcasePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ShowcasePageModule });
ShowcasePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function ShowcasePageModule_Factory(t) { return new (t || ShowcasePageModule)(); }, imports: [[
            _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(showcaseRoutes),
            _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ShowcasePageModule, { imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ShowcasePageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(showcaseRoutes),
                    _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]
                ],
                declarations: []
            }]
    }], null, null); })();


/***/ })

};;
//# sourceMappingURL=showcase-showcase-module.js.map