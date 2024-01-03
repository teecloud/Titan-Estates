exports.ids = ["route-resolvers-ux-route-resolvers-ux-module"];
exports.modules = {

/***/ "5e4S":
/*!**********************************************!*\
  !*** ./src/app/showcase/showcase.service.ts ***!
  \**********************************************/
/*! exports provided: ShowcaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseService", function() { return ShowcaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _showcase_shell_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./showcase-shell.model */ "wwno");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shell/data-store */ "f/Ol");




// tslint:disable-next-line:max-line-length




class ShowcaseService {
    constructor(http) {
        this.http = http;
        this.openDataStream = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"]();
    }
    getDataSourceWithDelay() {
        return this.http.get('./assets/sample-data/showcase/shell.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(val => {
            console.log('getData STARTED');
            // tslint:disable-next-line:no-console
            console.time('getData Roundtrip');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(5000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => {
            console.log('getData COMPLETED');
            // tslint:disable-next-line:no-console
            console.timeEnd('getData Roundtrip');
        }));
    }
    getSimpleDataSource() {
        return this.http.get('./assets/sample-data/showcase/shell.json');
    }
    getSimpleDataStore(dataSource) {
        // Use cache if available
        if (!this.showcaseDataStore) {
            // Initialize the model specifying that it is a shell model
            const shellModel = new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_4__["ShowcaseShellModel"]();
            this.showcaseDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_5__["DataStore"](shellModel);
            // Trigger the loading mechanism (with shell) in the dataStore
            this.showcaseDataStore.load(dataSource);
        }
        return this.showcaseDataStore;
    }
    getListDataSource() {
        return this.http.get('https://reqres.in/api/users').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(result => result['data']));
    }
    getPaginationDataSource(page) {
        return this.http.get('https://reqres.in/api/users?page=' + page).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(result => result['data']), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(results => results.length > 0));
    }
    getMultipleDataSourceA() {
        return this.http.get('./assets/sample-data/travel/listing.json');
    }
    getMultipleDataSourceB() {
        return this.http.get('./assets/sample-data/fashion/listing.json');
    }
    getDependantDataSourcePost() {
        return this.http.get('https://jsonplaceholder.typicode.com/posts/1');
    }
    // tslint:disable-next-line:max-line-length
    getDependantDataSourcePostComments(dependantDataSource) {
        return dependantDataSource.pipe(
        // Filter user values that are not shells. We need to add this filter if using the combinedUserDataStore timeline
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(post => !post.isShell), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(post => {
            return this.http.get('https://jsonplaceholder.typicode.com/comments?postId=' + post.id);
        }));
    }
    getUser(userId) {
        return this.http.get('https://jsonplaceholder.typicode.com/users/' + userId);
    }
    // get the company details, a subset of the user data
    getUserSubsetData(userId) {
        const dataObservable = this.http.get('https://jsonplaceholder.typicode.com/users/' + userId);
        return dataObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((jsonResponse) => {
            const filteredData = Object.assign({}, jsonResponse.company);
            return filteredData;
        }));
    }
    getTasks() {
        return this.http.get('https://jsonplaceholder.typicode.com/todos');
    }
    // Concat the task with the details of the user
    getCombinedTasksUserDataSource() {
        return this.getTasks().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(tasks => {
            const completeTaskData = tasks.map(task => {
                // for each task retrun a new observable with the ShowcaseCombinedTaskUserModel
                const taskUser = this.getUser(task.userId);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(task),
                    taskUser
                ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(([taskData, user]) => {
                    return Object.assign(Object.assign({}, taskData), { user: user });
                }));
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(completeTaskData);
        }));
    }
    getOpenDataStream() {
        const firstLoadData = this.getPaginationDataSource(1);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(this.openDataStream.asObservable(), firstLoadData);
    }
    pushValuesToOpenStream() {
        const stackedValues = this.getStackedValues();
        this.openDataStream.next(stackedValues);
    }
    getStackedValuesDataSource() {
        const stackedValues = this.getStackedValues();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(stackedValues).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(3000));
    }
    getStackedValues() {
        const newUser = {
            first_name: 'Agustin',
            last_name: 'Nitsuga',
            avatar: './assets/sample-images/user/person_1.jpg'
        };
        // Get a random integer between 1 (and only 1) and 'max'
        const getRand = (max, min = 1) => {
            return Math.floor(Math.random() * max) + min;
        };
        // Randomly send one, two or three users
        return Array(getRand(3)).fill(newUser);
    }
}
ShowcaseService.ɵfac = function ShowcaseService_Factory(t) { return new (t || ShowcaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ShowcaseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ShowcaseService, factory: ShowcaseService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowcaseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Wl+E":
/*!*******************************************************************************************!*\
  !*** ./src/app/showcase/route-resolvers-ux/blocking-resolvers/blocking-resolvers.page.ts ***!
  \*******************************************************************************************/
/*! exports provided: BlockingResovlersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockingResovlersPage", function() { return BlockingResovlersPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shell/aspect-ratio/aspect-ratio.component */ "B7gC");







const _c0 = function (a0) { return { "background-image": a0 }; };
const _c1 = function () { return { w: 2, h: 1 }; };
const _c2 = function () { return { w: 1, h: 1 }; };
class BlockingResovlersPage {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        console.log('Showcase Blocking Resovlers - ngOnInit()');
        if (this.route && this.route.data) {
            const dataObservable = this.route.data;
            console.log('Showcase Blocking Resovlers - Route Resolve Observable => dataObservable: ', dataObservable);
            if (dataObservable) {
                dataObservable.subscribe(observableValue => {
                    const pageData = observableValue['data'];
                    // tslint:disable-next-line:max-line-length
                    console.log('Showcase Blocking Resovlers - Subscribe to dataObservable (will emmit just one value) => PageData (' + ((pageData && pageData.isShell) ? 'SHELL' : 'REAL') + '): ', pageData);
                    if (pageData) {
                        this.routeResolveData = pageData;
                    }
                });
            }
            else {
                console.warn('No dataObservable coming from Route Resolver data');
            }
        }
        else {
            console.warn('No data coming from Route Resolver');
        }
    }
}
BlockingResovlersPage.ɵfac = function BlockingResovlersPage_Factory(t) { return new (t || BlockingResovlersPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
BlockingResovlersPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlockingResovlersPage, selectors: [["app-showcase-blocking-resolvers"]], decls: 27, vars: 10, consts: [["color", "primary"], ["slot", "start"], ["defaultHref", "showcase/route-resolvers-ux"], [1, "showcase-content"], [1, "showcase-section"], [2, "background-color", "#FFF", "padding", "10px"], ["size", "12"], [2, "background-size", "cover", "background-repeat", "no-repeat", 3, "ngStyle"], [3, "ratio"], [2, "margin", "10px", "text-align", "center", "color", "#FFF"], ["size", "4"], ["alt", "Sample Image", 2, "width", "100%", "height", "100%", 3, "src"], ["size", "8"], [2, "margin-top", "0px"]], template: function BlockingResovlersPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Blocking Resovler Showcase ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Notice how the UX degrades when using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Blocking");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Route Resolvers in Angular ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-row", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-col", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "app-aspect-ratio", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Heading on top of a cover image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ion-col", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "app-aspect-ratio", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ion-col", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, "url(" + (ctx.routeResolveData == null ? null : ctx.routeResolveData.cover) + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.routeResolveData == null ? null : ctx.routeResolveData.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.routeResolveData == null ? null : ctx.routeResolveData.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.routeResolveData == null ? null : ctx.routeResolveData.description, " ");
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_4__["AspectRatioComponent"]], styles: [".showcase-content[_ngcontent-%COMP%] {\n  --background: var(--app-background-shade);\n}\n.showcase-content[_ngcontent-%COMP%]   .showcase-section[_ngcontent-%COMP%] {\n  margin: 20px 20px 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvd2Nhc2Uvcm91dGUtcmVzb2x2ZXJzLXV4L2Jsb2NraW5nLXJlc29sdmVycy9ibG9ja2luZy1yZXNvbHZlcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUNBQUE7QUFDRjtBQUNFO0VBQ0UsdUJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3Nob3djYXNlL3JvdXRlLXJlc29sdmVycy11eC9ibG9ja2luZy1yZXNvbHZlcnMvYmxvY2tpbmctcmVzb2x2ZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG93Y2FzZS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG5cbiAgLnNob3djYXNlLXNlY3Rpb24ge1xuICAgIG1hcmdpbjogMjBweCAyMHB4IDEwMHB4O1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlockingResovlersPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-showcase-blocking-resolvers',
                templateUrl: './blocking-resolvers.page.html',
                styleUrls: ['./blocking-resolvers.page.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "XxPA":
/*!**************************************************************************!*\
  !*** ./src/app/showcase/route-resolvers-ux/route-resolvers-ux.module.ts ***!
  \**************************************************************************/
/*! exports provided: RouteResolversUXModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteResolversUXModule", function() { return RouteResolversUXModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");
/* harmony import */ var _route_resolvers_ux_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./route-resolvers-ux.page */ "ns/t");
/* harmony import */ var _non_blocking_resolvers_non_blocking_resolvers_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./non-blocking-resolvers/non-blocking-resolvers.page */ "wE9v");
/* harmony import */ var _blocking_resolvers_blocking_resolvers_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blocking-resolvers/blocking-resolvers.page */ "Wl+E");
/* harmony import */ var _progressive_shell_resolvers_progressive_shell_resolvers_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./progressive-shell-resolvers/progressive-shell-resolvers.page */ "xVA3");
/* harmony import */ var _blocking_resolvers_blocking_resolver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blocking-resolvers/blocking.resolver */ "giDr");
/* harmony import */ var _non_blocking_resolvers_non_blocking_resolver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./non-blocking-resolvers/non-blocking.resolver */ "jILq");
/* harmony import */ var _progressive_shell_resolvers_progressive_shell_resolver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./progressive-shell-resolvers/progressive-shell.resolver */ "ZvPJ");
/* harmony import */ var _showcase_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../showcase.service */ "5e4S");
















const routes = [
    {
        path: '',
        component: _route_resolvers_ux_page__WEBPACK_IMPORTED_MODULE_6__["RouteResovlersUXPage"]
    },
    {
        path: 'blocking-resolvers',
        component: _blocking_resolvers_blocking_resolvers_page__WEBPACK_IMPORTED_MODULE_8__["BlockingResovlersPage"],
        resolve: {
            data: _blocking_resolvers_blocking_resolver__WEBPACK_IMPORTED_MODULE_10__["BlockingResolver"]
        }
    },
    {
        path: 'non-blocking-resolvers',
        component: _non_blocking_resolvers_non_blocking_resolvers_page__WEBPACK_IMPORTED_MODULE_7__["NonBlockingResolversPage"],
        resolve: {
            data: _non_blocking_resolvers_non_blocking_resolver__WEBPACK_IMPORTED_MODULE_11__["NonBlockingResolver"]
        }
    },
    {
        path: 'progressive-shell-resolvers',
        component: _progressive_shell_resolvers_progressive_shell_resolvers_page__WEBPACK_IMPORTED_MODULE_9__["ProgressiveShellResovlersPage"],
        resolve: {
            data: _progressive_shell_resolvers_progressive_shell_resolver__WEBPACK_IMPORTED_MODULE_12__["ProgressiveShellResolver"]
        }
    }
];
class RouteResolversUXModule {
}
RouteResolversUXModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RouteResolversUXModule });
RouteResolversUXModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RouteResolversUXModule_Factory(t) { return new (t || RouteResolversUXModule)(); }, providers: [
        _blocking_resolvers_blocking_resolver__WEBPACK_IMPORTED_MODULE_10__["BlockingResolver"],
        _non_blocking_resolvers_non_blocking_resolver__WEBPACK_IMPORTED_MODULE_11__["NonBlockingResolver"],
        _progressive_shell_resolvers_progressive_shell_resolver__WEBPACK_IMPORTED_MODULE_12__["ProgressiveShellResolver"],
        _showcase_service__WEBPACK_IMPORTED_MODULE_13__["ShowcaseService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RouteResolversUXModule, { declarations: [_route_resolvers_ux_page__WEBPACK_IMPORTED_MODULE_6__["RouteResovlersUXPage"],
        _blocking_resolvers_blocking_resolvers_page__WEBPACK_IMPORTED_MODULE_8__["BlockingResovlersPage"],
        _non_blocking_resolvers_non_blocking_resolvers_page__WEBPACK_IMPORTED_MODULE_7__["NonBlockingResolversPage"],
        _progressive_shell_resolvers_progressive_shell_resolvers_page__WEBPACK_IMPORTED_MODULE_9__["ProgressiveShellResovlersPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RouteResolversUXModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                    _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]
                ],
                declarations: [
                    _route_resolvers_ux_page__WEBPACK_IMPORTED_MODULE_6__["RouteResovlersUXPage"],
                    _blocking_resolvers_blocking_resolvers_page__WEBPACK_IMPORTED_MODULE_8__["BlockingResovlersPage"],
                    _non_blocking_resolvers_non_blocking_resolvers_page__WEBPACK_IMPORTED_MODULE_7__["NonBlockingResolversPage"],
                    _progressive_shell_resolvers_progressive_shell_resolvers_page__WEBPACK_IMPORTED_MODULE_9__["ProgressiveShellResovlersPage"]
                ],
                providers: [
                    _blocking_resolvers_blocking_resolver__WEBPACK_IMPORTED_MODULE_10__["BlockingResolver"],
                    _non_blocking_resolvers_non_blocking_resolver__WEBPACK_IMPORTED_MODULE_11__["NonBlockingResolver"],
                    _progressive_shell_resolvers_progressive_shell_resolver__WEBPACK_IMPORTED_MODULE_12__["ProgressiveShellResolver"],
                    _showcase_service__WEBPACK_IMPORTED_MODULE_13__["ShowcaseService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZvPJ":
/*!*******************************************************************************************************!*\
  !*** ./src/app/showcase/route-resolvers-ux/progressive-shell-resolvers/progressive-shell.resolver.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ProgressiveShellResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressiveShellResolver", function() { return ProgressiveShellResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _showcase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../showcase.service */ "5e4S");




class ProgressiveShellResolver {
    constructor(showcaseService) {
        this.showcaseService = showcaseService;
    }
    resolve() {
        const dataSource = this.showcaseService.getDataSourceWithDelay();
        const dataStore = this.showcaseService.getSimpleDataStore(dataSource);
        return dataStore;
    }
}
ProgressiveShellResolver.ɵfac = function ProgressiveShellResolver_Factory(t) { return new (t || ProgressiveShellResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_showcase_service__WEBPACK_IMPORTED_MODULE_1__["ShowcaseService"])); };
ProgressiveShellResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProgressiveShellResolver, factory: ProgressiveShellResolver.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressiveShellResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _showcase_service__WEBPACK_IMPORTED_MODULE_1__["ShowcaseService"] }]; }, null); })();


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

/***/ "giDr":
/*!*************************************************************************************!*\
  !*** ./src/app/showcase/route-resolvers-ux/blocking-resolvers/blocking.resolver.ts ***!
  \*************************************************************************************/
/*! exports provided: BlockingResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockingResolver", function() { return BlockingResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "zOht");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _showcase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../showcase.service */ "5e4S");









class BlockingResolver {
    constructor(showcaseService, loadingController) {
        this.showcaseService = showcaseService;
        this.loadingController = loadingController;
    }
    presentLoader() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loadingElement = yield this.loadingController.create({
                message: 'Loading ...'
            });
            yield this.loadingElement.present();
        });
    }
    dismissLoader() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.loadingElement) {
                yield this.loadingElement.dismiss();
            }
        });
    }
    resolve() {
        // WITHOUT LOADING INDICATOR
        // Base Observable (where we get data from)
        // const dataObservable = this.showcaseService.getData();
        // Basic Resolver that returns the base Observable
        // return dataObservable;
        // WITH LOADING INDICATOR
        // Base Observable (where we get data from)
        const dataObservable = this.showcaseService.getDataSourceWithDelay().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => {
            console.log('dataObservable COMPLETED - HIDE LOADER');
            this.dismissLoader();
        }));
        const deferedObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["defer"])(() => {
            // Will be logged at the moment of subscription
            console.log('dataObservable STARTED - SHOW LOADER');
            this.presentLoader();
            return dataObservable;
        });
        // Basic Resolver that returns the base Observable
        return deferedObservable;
    }
}
BlockingResolver.ɵfac = function BlockingResolver_Factory(t) { return new (t || BlockingResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_showcase_service__WEBPACK_IMPORTED_MODULE_5__["ShowcaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"])); };
BlockingResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BlockingResolver, factory: BlockingResolver.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BlockingResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _showcase_service__WEBPACK_IMPORTED_MODULE_5__["ShowcaseService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }]; }, null); })();


/***/ }),

/***/ "jILq":
/*!*********************************************************************************************!*\
  !*** ./src/app/showcase/route-resolvers-ux/non-blocking-resolvers/non-blocking.resolver.ts ***!
  \*********************************************************************************************/
/*! exports provided: NonBlockingResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NonBlockingResolver", function() { return NonBlockingResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _showcase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../showcase.service */ "5e4S");




class NonBlockingResolver {
    constructor(showcaseService) {
        this.showcaseService = showcaseService;
    }
    resolve() {
        // Base Observable (where we get data from)
        const dataObservable = this.showcaseService.getDataSourceWithDelay();
        // NON-BLOCKING RESOLVERS
        // Resolver using a ReplySubject that emits the base Observable and then completes
        // const subject = new ReplaySubject();
        // subject.next(dataObservable);
        // subject.complete();
        // return subject;
        // Resolver using an Observable that emits the base Observable and then completes
        // const observable = Observable.create((observer) => {
        //   observer.next(dataObservable);
        //   observer.complete();
        // });
        // return observable;
        // Resolver using a Promise that resolves the base Observable
        const observablePromise = new Promise((resolve, reject) => {
            resolve(dataObservable);
        });
        return observablePromise;
    }
}
NonBlockingResolver.ɵfac = function NonBlockingResolver_Factory(t) { return new (t || NonBlockingResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_showcase_service__WEBPACK_IMPORTED_MODULE_1__["ShowcaseService"])); };
NonBlockingResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NonBlockingResolver, factory: NonBlockingResolver.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NonBlockingResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _showcase_service__WEBPACK_IMPORTED_MODULE_1__["ShowcaseService"] }]; }, null); })();


/***/ }),

/***/ "ns/t":
/*!************************************************************************!*\
  !*** ./src/app/showcase/route-resolvers-ux/route-resolvers-ux.page.ts ***!
  \************************************************************************/
/*! exports provided: RouteResovlersUXPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteResovlersUXPage", function() { return RouteResovlersUXPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




const _c0 = function () { return ["/showcase/route-resolvers-ux/blocking-resolvers"]; };
const _c1 = "/showcase/route-resolvers-ux/non-blocking-resolvers";
const _c2 = function () { return [_c1]; };
const _c3 = "/showcase/route-resolvers-ux/progressive-shell-resolvers";
const _c4 = function () { return [_c3]; };
class RouteResovlersUXPage {
    constructor() { }
}
RouteResovlersUXPage.ɵfac = function RouteResovlersUXPage_Factory(t) { return new (t || RouteResovlersUXPage)(); };
RouteResovlersUXPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RouteResovlersUXPage, selectors: [["app-showcase-route-resolvers-ux"]], decls: 52, vars: 6, consts: [["color", "primary"], ["slot", "start"], [1, "showcase-content"], [1, "showcase-section"], ["expand", "block", 3, "routerLink"]], template: function RouteResovlersUXPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-menu-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Improve Route Resolvers UX ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Lets see the difference between the different implementations of Route Resolvers. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Blocking Route Resolvers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " By default, Angular Route Resolvers won't transition to the page until the Resolver Observable completes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Let's suppose the backend is slow and takes 5 seconds to fetch data and return it to the client, this is what's going to happen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Expected behavior:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Page transition will be delayed 5 seconds until the server sends data back to the client. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ion-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Blocking Resolvers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "NON-Blocking Route Resolvers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " To avoid waiting for the Observable to complete, we can wrap the base Observable (the one we are getting data from) with a dummy Observable, Subject or Promise that emits the base Observable and immediately completes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Expected behavior:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Page transition will be instant and the transitioned page will show a blank state while the server sends data back to the client. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ion-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Non-Blocking Resolvers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Progressive Shell Resolvers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " By using the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "DataStore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " utility in conjunction with Angular Route Resolvers, we can solve this UX problem and make page transitions immediate. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " This approach uses a non-blocking Resolver in conjunction with the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "DataStore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " utility. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Expected behavior:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Page transition will be instant and the transitioned page will show some shell elements while the server sends data back to the client. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "ion-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Progressive Shell Resolvers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c4));
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonMenuButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["RouterLinkDelegate"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".showcase-content[_ngcontent-%COMP%] {\n  --background: var(--app-background-shade);\n}\n.showcase-content[_ngcontent-%COMP%]   .showcase-section[_ngcontent-%COMP%] {\n  margin: 20px 20px 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvd2Nhc2Uvcm91dGUtcmVzb2x2ZXJzLXV4L3JvdXRlLXJlc29sdmVycy11eC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5Q0FBQTtBQUNGO0FBQ0U7RUFDRSx1QkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvc2hvd2Nhc2Uvcm91dGUtcmVzb2x2ZXJzLXV4L3JvdXRlLXJlc29sdmVycy11eC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xuXG4gIC5zaG93Y2FzZS1zZWN0aW9uIHtcbiAgICBtYXJnaW46IDIwcHggMjBweCAxMDBweDtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RouteResovlersUXPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-showcase-route-resolvers-ux',
                templateUrl: './route-resolvers-ux.page.html',
                styleUrls: ['./route-resolvers-ux.page.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "wE9v":
/*!***************************************************************************************************!*\
  !*** ./src/app/showcase/route-resolvers-ux/non-blocking-resolvers/non-blocking-resolvers.page.ts ***!
  \***************************************************************************************************/
/*! exports provided: NonBlockingResolversPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NonBlockingResolversPage", function() { return NonBlockingResolversPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shell/aspect-ratio/aspect-ratio.component */ "B7gC");







function NonBlockingResolversPage_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ion-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "You can show a static shell while fetching data from the backend");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
const _c0 = function (a0) { return { "background-image": a0 }; };
const _c1 = function () { return { w: 2, h: 1 }; };
const _c2 = function () { return { w: 1, h: 1 }; };
function NonBlockingResolversPage_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-row", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-col", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-aspect-ratio", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Heading on top of a cover image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-col", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "app-aspect-ratio", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-col", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, "url(" + (ctx_r1.routeResolveData == null ? null : ctx_r1.routeResolveData.cover) + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.routeResolveData == null ? null : ctx_r1.routeResolveData.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.routeResolveData == null ? null : ctx_r1.routeResolveData.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.routeResolveData == null ? null : ctx_r1.routeResolveData.description, " ");
} }
class NonBlockingResolversPage {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        console.log('Showcase NON Blocking Resovlers - ngOnInit()');
        if (this.route && this.route.data) {
            // We resolved a promise for the data Observable
            const promiseObservable = this.route.data;
            console.log('Showcase NON Blocking Resovlers - Route Resolve Observable => promiseObservable: ', promiseObservable);
            if (promiseObservable) {
                promiseObservable.subscribe(promiseValue => {
                    const dataObservable = promiseValue['data'];
                    console.log('Showcase NON Blocking Resovlers - Subscribe to promiseObservable => dataObservable: ', dataObservable);
                    if (dataObservable) {
                        dataObservable.subscribe(observableValue => {
                            const pageData = observableValue;
                            // tslint:disable-next-line:max-line-length
                            console.log('Showcase NON Blocking Resovlers - Subscribe to dataObservable (will emmit just one value) => PageData (' + ((pageData && pageData.isShell) ? 'SHELL' : 'REAL') + '): ', pageData);
                            if (pageData) {
                                this.routeResolveData = pageData;
                            }
                        });
                    }
                    else {
                        console.warn('No dataObservable coming from Route Resolver promiseObservable');
                    }
                });
            }
            else {
                console.warn('No promiseObservable coming from Route Resolver data');
            }
        }
        else {
            console.warn('No data coming from Route Resolver');
        }
    }
}
NonBlockingResolversPage.ɵfac = function NonBlockingResolversPage_Factory(t) { return new (t || NonBlockingResolversPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
NonBlockingResolversPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NonBlockingResolversPage, selectors: [["app-showcase-non-blocking-resolvers"]], decls: 12, vars: 2, consts: [["color", "primary"], ["slot", "start"], ["defaultHref", "showcase/route-resolvers-ux"], [1, "showcase-content"], [1, "showcase-section"], [4, "ngIf"], [2, "margin", "20px 40px", "text-align", "center"], [2, "background-color", "#FFF", "padding", "10px"], ["size", "12"], [2, "background-size", "cover", "background-repeat", "no-repeat", 3, "ngStyle"], [3, "ratio"], [2, "margin", "10px", "text-align", "center", "color", "#FFF"], ["size", "4"], ["alt", "Sample Image", 2, "width", "100%", "height", "100%", 3, "src"], ["size", "8"], [2, "margin-top", "0px"]], template: function NonBlockingResolversPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " NON Blocking Resovler Showcase ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " With Non-Blocking Resolvers, page transition is immediate. However UX degrades because you are showing a static loading indicator while the server sends data back to the client. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NonBlockingResolversPage_ng_container_10_Template, 6, 0, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NonBlockingResolversPage_ng_container_11_Template, 15, 10, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.routeResolveData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.routeResolveData);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSpinner"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_4__["AspectRatioComponent"]], styles: [".showcase-content[_ngcontent-%COMP%] {\n  --background: var(--app-background-shade);\n}\n.showcase-content[_ngcontent-%COMP%]   .showcase-section[_ngcontent-%COMP%] {\n  margin: 20px 20px 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvd2Nhc2Uvcm91dGUtcmVzb2x2ZXJzLXV4L25vbi1ibG9ja2luZy1yZXNvbHZlcnMvbm9uLWJsb2NraW5nLXJlc29sdmVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5Q0FBQTtBQUNGO0FBQ0U7RUFDRSx1QkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvc2hvd2Nhc2Uvcm91dGUtcmVzb2x2ZXJzLXV4L25vbi1ibG9ja2luZy1yZXNvbHZlcnMvbm9uLWJsb2NraW5nLXJlc29sdmVycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xuXG4gIC5zaG93Y2FzZS1zZWN0aW9uIHtcbiAgICBtYXJnaW46IDIwcHggMjBweCAxMDBweDtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NonBlockingResolversPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-showcase-non-blocking-resolvers',
                templateUrl: './non-blocking-resolvers.page.html',
                styleUrls: ['./non-blocking-resolvers.page.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "wwno":
/*!**************************************************!*\
  !*** ./src/app/showcase/showcase-shell.model.ts ***!
  \**************************************************/
/*! exports provided: ShowcaseShellModel, ShowcaseShellUserModel, ShowcaseCommentModel, ShowcasePostModel, ShowcaseTaskModel, ShowcaseUser2Model, ShowcaseCompanyModel, ShowcaseCombinedTaskUserModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseShellModel", function() { return ShowcaseShellModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseShellUserModel", function() { return ShowcaseShellUserModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseCommentModel", function() { return ShowcaseCommentModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcasePostModel", function() { return ShowcasePostModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseTaskModel", function() { return ShowcaseTaskModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseUser2Model", function() { return ShowcaseUser2Model; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseCompanyModel", function() { return ShowcaseCompanyModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseCombinedTaskUserModel", function() { return ShowcaseCombinedTaskUserModel; });
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shell/data-store */ "f/Ol");

class ShowcaseShellModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
    }
}
class ShowcaseShellUserModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
    }
}
class ShowcaseCommentModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
    }
}
class ShowcasePostModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
    }
}
class ShowcaseTaskModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
    }
}
class ShowcaseUser2Model extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
    }
}
class ShowcaseCompanyModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
    }
}
class ShowcaseCombinedTaskUserModel extends ShowcaseTaskModel {
    constructor() {
        super();
    }
}


/***/ }),

/***/ "xVA3":
/*!*************************************************************************************************************!*\
  !*** ./src/app/showcase/route-resolvers-ux/progressive-shell-resolvers/progressive-shell-resolvers.page.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ProgressiveShellResovlersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressiveShellResovlersPage", function() { return ProgressiveShellResovlersPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shell/image-shell/image-shell.component */ "2gss");
/* harmony import */ var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shell/aspect-ratio/aspect-ratio.component */ "B7gC");
/* harmony import */ var _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shell/text-shell/text-shell.component */ "zK/y");









const _c0 = function () { return { w: 2, h: 1 }; };
const _c1 = function () { return { w: 1, h: 1 }; };
class ProgressiveShellResovlersPage {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        console.log('Showcase Progressive Shell Resovlers - ngOnInit()');
        this.route.data
            .pipe(
        // Extract data for this page
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((resolvedRouteData) => resolvedRouteData['data'].state))
            .subscribe((state) => {
            this.routeResolveData = state;
        }, (error) => console.log(error));
    }
}
ProgressiveShellResovlersPage.ɵfac = function ProgressiveShellResovlersPage_Factory(t) { return new (t || ProgressiveShellResovlersPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
ProgressiveShellResovlersPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProgressiveShellResovlersPage, selectors: [["app-showcase-progressive-shell-resolvers"]], decls: 22, vars: 11, consts: [["color", "primary"], ["slot", "start"], ["defaultHref", "showcase/route-resolvers-ux"], [1, "showcase-content"], [1, "showcase-section"], [2, "background-color", "#FFF", "padding", "10px"], ["size", "12"], ["animation", "spinner", 1, "add-overlay", 3, "display", "src", "alt"], [3, "ratio"], [2, "margin", "10px", "text-align", "center", "color", "#FFF"], ["size", "4"], ["animation", "spinner", 3, "src", "alt"], ["size", "8"], [2, "margin-top", "0px"], [3, "data"], ["animation", "bouncing", "lines", "3", 3, "data"]], template: function ProgressiveShellResovlersPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Progressive Shell Showcase ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-row", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-col", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-image-shell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "app-aspect-ratio", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Heading on top of a cover image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-col", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "app-aspect-ratio", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-image-shell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ion-col", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-text-shell", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-text-shell", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("display", "cover")("src", ctx.routeResolveData == null ? null : ctx.routeResolveData.cover)("alt", "Sample Image Cover");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.routeResolveData == null ? null : ctx.routeResolveData.image)("alt", "Sample Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.routeResolveData == null ? null : ctx.routeResolveData.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.routeResolveData == null ? null : ctx.routeResolveData.description);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_4__["ImageShellComponent"], _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_5__["AspectRatioComponent"], _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_6__["TextShellComponent"]], styles: [".showcase-content[_ngcontent-%COMP%] {\n  --background: var(--app-background-shade);\n}\n.showcase-content[_ngcontent-%COMP%]   .showcase-section[_ngcontent-%COMP%] {\n  margin: 20px 20px 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvd2Nhc2Uvcm91dGUtcmVzb2x2ZXJzLXV4L3Byb2dyZXNzaXZlLXNoZWxsLXJlc29sdmVycy9wcm9ncmVzc2l2ZS1zaGVsbC1yZXNvbHZlcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUNBQUE7QUFDRjtBQUNFO0VBQ0UsdUJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3Nob3djYXNlL3JvdXRlLXJlc29sdmVycy11eC9wcm9ncmVzc2l2ZS1zaGVsbC1yZXNvbHZlcnMvcHJvZ3Jlc3NpdmUtc2hlbGwtcmVzb2x2ZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG93Y2FzZS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG5cbiAgLnNob3djYXNlLXNlY3Rpb24ge1xuICAgIG1hcmdpbjogMjBweCAyMHB4IDEwMHB4O1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressiveShellResovlersPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-showcase-progressive-shell-resolvers',
                templateUrl: './progressive-shell-resolvers.page.html',
                styleUrls: ['./progressive-shell-resolvers.page.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ })

};;
//# sourceMappingURL=route-resolvers-ux-route-resolvers-ux-module.js.map