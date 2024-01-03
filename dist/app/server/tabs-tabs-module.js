exports.ids = ["tabs-tabs-module"];
exports.modules = {

/***/ "Hl76":
/*!********************************************!*\
  !*** ./src/app/tabs/tabs.router.module.ts ***!
  \********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs.page */ "MJr+");





const routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_2__["TabsPage"],
        children: [
            // /app/ redirect
            {
                path: '',
                redirectTo: 'categories',
                pathMatch: 'full'
            },
            {
                path: 'categories',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | categories-categories-module */ "categories-categories-module").then(__webpack_require__.bind(null, /*! ../categories/categories.module */ "kMJQ")).then(m => m.CategoriesPageModule)
                    },
                    {
                        path: 'fashion',
                        loadChildren: () => Promise.all(/*! import() | fashion-listing-fashion-listing-module */[__webpack_require__.e("fashion-details-fashion-details-module~fashion-listing-fashion-listing-module"), __webpack_require__.e("fashion-listing-fashion-listing-module")]).then(__webpack_require__.bind(null, /*! ../fashion/listing/fashion-listing.module */ "0toQ")).then(m => m.FashionListingPageModule)
                    },
                    {
                        path: 'fashion/:productId',
                        loadChildren: () => Promise.all(/*! import() | fashion-details-fashion-details-module */[__webpack_require__.e("fashion-details-fashion-details-module~fashion-listing-fashion-listing-module"), __webpack_require__.e("fashion-details-fashion-details-module")]).then(__webpack_require__.bind(null, /*! ../fashion/details/fashion-details.module */ "8DSg")).then(m => m.FashionDetailsPageModule)
                    },
                    {
                        path: 'food',
                        loadChildren: () => Promise.all(/*! import() | food-listing-food-listing-module */[__webpack_require__.e("vendors~deals-details-deals-details-module~deals-listing-deals-listing-module~food-details-food-deta~513d615c"), __webpack_require__.e("food-details-food-details-module~food-listing-food-listing-module"), __webpack_require__.e("food-listing-food-listing-module")]).then(__webpack_require__.bind(null, /*! ../food/listing/food-listing.module */ "6i+d")).then(m => m.FoodListingPageModule)
                    },
                    {
                        path: 'food/:productId',
                        loadChildren: () => Promise.all(/*! import() | food-details-food-details-module */[__webpack_require__.e("vendors~deals-details-deals-details-module~deals-listing-deals-listing-module~food-details-food-deta~513d615c"), __webpack_require__.e("food-details-food-details-module~food-listing-food-listing-module"), __webpack_require__.e("food-details-food-details-module")]).then(__webpack_require__.bind(null, /*! ../food/details/food-details.module */ "OQzY")).then(m => m.FoodDetailsPageModule)
                    },
                    {
                        path: 'travel',
                        loadChildren: () => Promise.all(/*! import() | travel-listing-travel-listing-module */[__webpack_require__.e("travel-details-travel-details-module~travel-listing-travel-listing-module"), __webpack_require__.e("travel-listing-travel-listing-module")]).then(__webpack_require__.bind(null, /*! ../travel/listing/travel-listing.module */ "HbU+")).then(m => m.TravelListingPageModule)
                    },
                    {
                        path: 'travel/:productId',
                        loadChildren: () => Promise.all(/*! import() | travel-details-travel-details-module */[__webpack_require__.e("travel-details-travel-details-module~travel-listing-travel-listing-module"), __webpack_require__.e("travel-details-travel-details-module")]).then(__webpack_require__.bind(null, /*! ../travel/details/travel-details.module */ "Tsqc")).then(m => m.TravelDetailsPageModule)
                    },
                    {
                        path: 'deals',
                        loadChildren: () => Promise.all(/*! import() | deals-listing-deals-listing-module */[__webpack_require__.e("vendors~deals-details-deals-details-module~deals-listing-deals-listing-module~food-details-food-deta~513d615c"), __webpack_require__.e("deals-details-deals-details-module~deals-listing-deals-listing-module"), __webpack_require__.e("deals-listing-deals-listing-module")]).then(__webpack_require__.bind(null, /*! ../deals/listing/deals-listing.module */ "bkrf")).then(m => m.DealsListingPageModule)
                    },
                    {
                        path: 'deals/:productId',
                        loadChildren: () => Promise.all(/*! import() | deals-details-deals-details-module */[__webpack_require__.e("vendors~deals-details-deals-details-module~deals-listing-deals-listing-module~food-details-food-deta~513d615c"), __webpack_require__.e("deals-details-deals-details-module~deals-listing-deals-listing-module"), __webpack_require__.e("deals-details-deals-details-module")]).then(__webpack_require__.bind(null, /*! ../deals/details/deals-details.module */ "pvlM")).then(m => m.DealsDetailsPageModule)
                    },
                    {
                        path: 'real-estate',
                        loadChildren: () => Promise.all(/*! import() | real-estate-listing-real-estate-listing-module */[__webpack_require__.e("real-estate-details-real-estate-details-module~real-estate-listing-real-estate-listing-module"), __webpack_require__.e("real-estate-listing-real-estate-listing-module")]).then(__webpack_require__.bind(null, /*! ../real-estate/listing/real-estate-listing.module */ "+Dkm")).then(m => m.RealEstateListingPageModule)
                    },
                    {
                        path: 'real-estate/:productId',
                        loadChildren: () => Promise.all(/*! import() | real-estate-details-real-estate-details-module */[__webpack_require__.e("real-estate-details-real-estate-details-module~real-estate-listing-real-estate-listing-module"), __webpack_require__.e("real-estate-details-real-estate-details-module")]).then(__webpack_require__.bind(null, /*! ../real-estate/details/real-estate-details.module */ "lkbD")).then(m => m.RealEstateDetailsPageModule)
                    }
                ]
            },
            {
                path: 'user',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | user-profile-user-profile-module */[__webpack_require__.e("user-friends-user-friends-module~user-profile-user-profile-module"), __webpack_require__.e("user-profile-user-profile-module")]).then(__webpack_require__.bind(null, /*! ../user/profile/user-profile.module */ "sSds")).then(m => m.UserProfilePageModule)
                    },
                    {
                        path: 'friends',
                        loadChildren: () => Promise.all(/*! import() | user-friends-user-friends-module */[__webpack_require__.e("user-friends-user-friends-module~user-profile-user-profile-module"), __webpack_require__.e("user-friends-user-friends-module")]).then(__webpack_require__.bind(null, /*! ../user/friends/user-friends.module */ "SJx6")).then(m => m.UserFriendsPageModule)
                    }
                ]
            },
            {
                path: 'notifications',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | notifications-notifications-module */ "notifications-notifications-module").then(__webpack_require__.bind(null, /*! ../notifications/notifications.module */ "wMrW")).then(m => m.NotificationsPageModule)
                    }
                ]
            }
        ]
    }
];
class TabsPageRoutingModule {
}
TabsPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TabsPageRoutingModule });
TabsPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TabsPageRoutingModule_Factory(t) { return new (t || TabsPageRoutingModule)(); }, providers: [], imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TabsPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabsPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
                providers: []
            }]
    }], null, null); })();


/***/ }),

/***/ "MJr+":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");





const _c0 = function () { return ["tab-selected"]; };
const _c1 = function () { return ["/app/categories"]; };
const _c2 = function () { return ["/app/user"]; };
const _c3 = function () { return ["/app/notifications"]; };
class TabsPage {
    constructor(menu) {
        this.menu = menu;
    }
    ionViewWillEnter() {
        this.menu.enable(true);
    }
    ionTabsDidChange(event) {
        // console.log('ionTabsDidChange', event);
    }
}
TabsPage.ɵfac = function TabsPage_Factory(t) { return new (t || TabsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"])); };
TabsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabsPage, selectors: [["app-tabs"]], decls: 14, vars: 12, consts: [[3, "ionTabsDidChange"], ["slot", "bottom"], ["tab", "categories", 3, "routerLinkActive", "routerLink"], ["name", "list-outline"], [1, "tab-title"], ["tab", "user", 3, "routerLinkActive", "routerLink"], ["name", "person-outline"], ["tab", "notifications", 3, "routerLinkActive", "routerLink"], ["name", "notifications-outline"]], template: function TabsPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-tabs", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionTabsDidChange", function TabsPage_Template_ion_tabs_ionTabsDidChange_0_listener($event) { return ctx.ionTabsDidChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-tab-bar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-tab-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-tab-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ion-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-tab-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "ion-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c3));
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTabs"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTabBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTabButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["RouterLinkDelegate"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"]], styles: ["ion-tab-button[_ngcontent-%COMP%] {\n  --color: var(--ion-color-medium-shade);\n  --color-selected: var(--ion-color-dark);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9zdHlsZXMvdGFicy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxzQ0FBQTtFQUNBLHVDQUFBO0FBQUYiLCJmaWxlIjoic3JjL2FwcC90YWJzL3N0eWxlcy90YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5vdGU6ICBBbGwgdGhlIENTUyB2YXJpYWJsZXMgZGVmaW5lZCBiZWxvdyBhcmUgb3ZlcnJpZGVzIG9mIElvbmljIGVsZW1lbnRzIENTUyBDdXN0b20gUHJvcGVydGllc1xuaW9uLXRhYi1idXR0b24ge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgLS1jb2xvci1zZWxlY3RlZDogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabsPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tabs',
                templateUrl: 'tabs.page.html',
                styleUrls: [
                    './styles/tabs.page.scss'
                ]
            }]
    }], function () { return [{ type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"] }]; }, null); })();


/***/ }),

/***/ "hO9l":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tabs_router_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs.router.module */ "Hl76");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs.page */ "MJr+");







class TabsPageModule {
}
TabsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TabsPageModule });
TabsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function TabsPageModule_Factory(t) { return new (t || TabsPageModule)(); }, imports: [[
            _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _tabs_router_module__WEBPACK_IMPORTED_MODULE_4__["TabsPageRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TabsPageModule, { declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_5__["TabsPage"]], imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _tabs_router_module__WEBPACK_IMPORTED_MODULE_4__["TabsPageRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TabsPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _tabs_router_module__WEBPACK_IMPORTED_MODULE_4__["TabsPageRoutingModule"]
                ],
                declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_5__["TabsPage"]]
            }]
    }], null, null); })();


/***/ })

};;
//# sourceMappingURL=tabs-tabs-module.js.map