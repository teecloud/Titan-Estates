"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tabs_tabs_module_ts"],{

/***/ 15564:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tabs_router_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.router.module */ 88345);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 7942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);






class TabsPageModule {
  static #_ = this.ɵfac = function TabsPageModule_Factory(t) {
    return new (t || TabsPageModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: TabsPageModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _tabs_router_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TabsPageModule, {
    declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage],
    imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _tabs_router_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule]
  });
})();

/***/ }),

/***/ 7942:
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);




const _c0 = function () {
  return ["tab-selected"];
};
const _c1 = function () {
  return ["/app/categories"];
};
const _c2 = function () {
  return ["/app/user"];
};
const _c3 = function () {
  return ["/app/notifications"];
};
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
  static #_ = this.ɵfac = function TabsPage_Factory(t) {
    return new (t || TabsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.MenuController));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TabsPage,
    selectors: [["app-tabs"]],
    decls: 14,
    vars: 12,
    consts: [[3, "ionTabsDidChange"], ["slot", "bottom"], ["tab", "categories", 3, "routerLinkActive", "routerLink"], ["name", "list-outline"], [1, "tab-title"], ["tab", "user", 3, "routerLinkActive", "routerLink"], ["name", "person-outline"], ["tab", "notifications", 3, "routerLinkActive", "routerLink"], ["name", "notifications-outline"]],
    template: function TabsPage_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-tabs", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionTabsDidChange", function TabsPage_Template_ion_tabs_ionTabsDidChange_0_listener($event) {
          return ctx.ionTabsDidChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-tab-bar", 1)(2, "ion-tab-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Listings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-tab-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ion-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-tab-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "ion-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c3));
      }
    },
    dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonTabBar, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonTabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonTabs, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.RouterLinkDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive],
    styles: ["ion-tab-button[_ngcontent-%COMP%] {\n  --color: var(--ion-color-medium-shade);\n  --color-selected: var(--ion-color-dark);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vVGl0YW4lMjBFc3RhdGVzL3NyYy9hcHAvdGFicy9zdHlsZXMvdGFicy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxzQ0FBQTtFQUNBLHVDQUFBO0FDQUYiLCJmaWxlIjoidGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOb3RlOiAgQWxsIHRoZSBDU1MgdmFyaWFibGVzIGRlZmluZWQgYmVsb3cgYXJlIG92ZXJyaWRlcyBvZiBJb25pYyBlbGVtZW50cyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbmlvbi10YWItYnV0dG9uIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gIC0tY29sb3Itc2VsZWN0ZWQ6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbn1cbiIsImlvbi10YWItYnV0dG9uIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gIC0tY29sb3Itc2VsZWN0ZWQ6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGFicy9zdHlsZXMvdGFicy5wYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi9UaXRhbiUyMEVzdGF0ZXMvc3JjL2FwcC90YWJzL3N0eWxlcy90YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHNDQUFBO0VBQ0EsdUNBQUE7QUNBRjtBRENBLHd2QkFBd3ZCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTm90ZTogIEFsbCB0aGUgQ1NTIHZhcmlhYmxlcyBkZWZpbmVkIGJlbG93IGFyZSBvdmVycmlkZXMgb2YgSW9uaWMgZWxlbWVudHMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG5pb24tdGFiLWJ1dHRvbiB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICAtLWNvbG9yLXNlbGVjdGVkOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59XG4iLCJpb24tdGFiLWJ1dHRvbiB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICAtLWNvbG9yLXNlbGVjdGVkOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 88345:
/*!********************************************!*\
  !*** ./src/app/tabs/tabs.router.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 7942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
  children: [
  // /app/ redirect
  {
    path: '',
    redirectTo: 'fashion',
    pathMatch: 'full'
  }, {
    path: 'categories',
    children: [{
      path: '',
      redirectTo: 'fashion',
      pathMatch: 'full'
      //loadChildren: () => import('../categories/categories.module').then(m => m.CategoriesPageModule)
    }, {
      path: 'fashion',
      loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_fashion_listing_fashion-listing_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../fashion/listing/fashion-listing.module */ 75928)).then(m => m.FashionListingPageModule)
    }, {
      path: 'fashion/:productId',
      loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_swiper_angular_fesm2015_swiper_angular_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_fashion_details_fashion-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../fashion/details/fashion-details.module */ 22616)).then(m => m.FashionDetailsPageModule)
    }, {
      path: 'food',
      loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_food_food_service_ts-src_app_pipes_pipes_module_ts-src_app_utils_resolver-helper_ts"), __webpack_require__.e("src_app_food_listing_food-listing_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../food/listing/food-listing.module */ 18470)).then(m => m.FoodListingPageModule)
    }, {
      path: 'food/:productId',
      loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_food_food_service_ts-src_app_pipes_pipes_module_ts-src_app_utils_resolver-helper_ts"), __webpack_require__.e("src_app_food_details_food-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../food/details/food-details.module */ 52048)).then(m => m.FoodDetailsPageModule)
    }, {
      path: 'travel',
      loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_travel_listing_travel-listing_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../travel/listing/travel-listing.module */ 59363)).then(m => m.TravelListingPageModule)
    }, {
      path: 'travel/:productId',
      loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_travel_details_travel-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../travel/details/travel-details.module */ 19525)).then(m => m.TravelDetailsPageModule)
    }, {
      path: 'deals',
      loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_deals_deals_service_ts-src_app_pipes_pipes_module_ts-src_app_utils_resolver-h-b3e0d0"), __webpack_require__.e("src_app_deals_listing_deals-listing_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../deals/listing/deals-listing.module */ 96599)).then(m => m.DealsListingPageModule)
    }, {
      path: 'deals/:productId',
      loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_swiper_angular_fesm2015_swiper_angular_mjs"), __webpack_require__.e("default-src_app_deals_deals_service_ts-src_app_pipes_pipes_module_ts-src_app_utils_resolver-h-b3e0d0"), __webpack_require__.e("src_app_deals_details_deals-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../deals/details/deals-details.module */ 73669)).then(m => m.DealsDetailsPageModule)
    }, {
      path: 'real-estate',
      loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_real-estate_listing_real-estate-listing_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../real-estate/listing/real-estate-listing.module */ 73045)).then(m => m.RealEstateListingPageModule)
    }, {
      path: 'real-estate/:productId',
      loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_real-estate_details_real-estate-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../real-estate/details/real-estate-details.module */ 41058)).then(m => m.RealEstateDetailsPageModule)
    }]
  }, {
    path: 'user',
    children: [{
      path: '',
      loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_user_user_service_ts-src_app_utils_resolver-helper_ts"), __webpack_require__.e("src_app_user_profile_user-profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../user/profile/user-profile.module */ 66261)).then(m => m.UserProfilePageModule)
    }, {
      path: 'friends',
      loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_user_user_service_ts-src_app_utils_resolver-helper_ts"), __webpack_require__.e("src_app_user_friends_user-friends_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../user/friends/user-friends.module */ 35895)).then(m => m.UserFriendsPageModule)
    }]
  }, {
    path: 'notifications',
    children: [{
      path: '',
      loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_notifications_notifications_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../notifications/notifications.module */ 89182)).then(m => m.NotificationsPageModule)
    }]
  }]
}];
class TabsPageRoutingModule {
  static #_ = this.ɵfac = function TabsPageRoutingModule_Factory(t) {
    return new (t || TabsPageRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: TabsPageRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TabsPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_tabs_module_ts.js.map