"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_video-playlist_video-playlist_module_ts"],{

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

/***/ 61833:
/*!********************************************************!*\
  !*** ./src/app/video-playlist/video-playlist.model.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoModel": () => (/* binding */ VideoModel),
/* harmony export */   "VideoPlaylistModel": () => (/* binding */ VideoPlaylistModel)
/* harmony export */ });
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shell/data-store */ 29760);

class VideoModel {}
class VideoPlaylistModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__.ShellModel {
  constructor() {
    super();
    this.selected_video = new VideoModel();
    this.video_playlist = [new VideoModel(), new VideoModel(), new VideoModel()];
  }
}

/***/ }),

/***/ 16074:
/*!*********************************************************!*\
  !*** ./src/app/video-playlist/video-playlist.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoPlaylistPageModule": () => (/* binding */ VideoPlaylistPageModule)
/* harmony export */ });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _video_playlist_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video-playlist.page */ 93714);
/* harmony import */ var _video_playlist_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video-playlist.resolver */ 23703);
/* harmony import */ var _video_playlist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./video-playlist.service */ 43298);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/components.module */ 45642);
/* harmony import */ var _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @videogular/ngx-videogular/core */ 49197);
/* harmony import */ var _videogular_ngx_videogular_controls__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @videogular/ngx-videogular/controls */ 86836);
/* harmony import */ var _videogular_ngx_videogular_overlay_play__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @videogular/ngx-videogular/overlay-play */ 8399);
/* harmony import */ var _videogular_ngx_videogular_buffering__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @videogular/ngx-videogular/buffering */ 16131);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);













const routes = [{
  path: '',
  component: _video_playlist_page__WEBPACK_IMPORTED_MODULE_0__.VideoPlaylistPage,
  resolve: {
    data: _video_playlist_resolver__WEBPACK_IMPORTED_MODULE_1__.VideoPlaylistResolver
  }
}];
class VideoPlaylistPageModule {
  static #_ = this.ɵfac = function VideoPlaylistPageModule_Factory(t) {
    return new (t || VideoPlaylistPageModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: VideoPlaylistPageModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    providers: [_video_playlist_resolver__WEBPACK_IMPORTED_MODULE_1__.VideoPlaylistResolver, _video_playlist_service__WEBPACK_IMPORTED_MODULE_2__.VideoPlaylistService],
    imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes), _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_8__.VgCoreModule, _videogular_ngx_videogular_controls__WEBPACK_IMPORTED_MODULE_9__.VgControlsModule, _videogular_ngx_videogular_overlay_play__WEBPACK_IMPORTED_MODULE_10__.VgOverlayPlayModule, _videogular_ngx_videogular_buffering__WEBPACK_IMPORTED_MODULE_11__.VgBufferingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](VideoPlaylistPageModule, {
    declarations: [_video_playlist_page__WEBPACK_IMPORTED_MODULE_0__.VideoPlaylistPage],
    imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_8__.VgCoreModule, _videogular_ngx_videogular_controls__WEBPACK_IMPORTED_MODULE_9__.VgControlsModule, _videogular_ngx_videogular_overlay_play__WEBPACK_IMPORTED_MODULE_10__.VgOverlayPlayModule, _videogular_ngx_videogular_buffering__WEBPACK_IMPORTED_MODULE_11__.VgBufferingModule]
  });
})();

/***/ }),

/***/ 93714:
/*!*******************************************************!*\
  !*** ./src/app/video-playlist/video-playlist.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoPlaylistPage": () => (/* binding */ VideoPlaylistPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _capacitor_share__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/share */ 58921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shell/aspect-ratio/aspect-ratio.component */ 89330);
/* harmony import */ var _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shell/image-shell/image-shell.component */ 71408);
/* harmony import */ var _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shell/text-shell/text-shell.component */ 94840);
/* harmony import */ var _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @videogular/ngx-videogular/core */ 49197);













function VideoPlaylistPage_video_11_source_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "source", 18);
  }
  if (rf & 2) {
    const video_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", video_r4.src, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("type", video_r4.type);
  }
}
function VideoPlaylistPage_video_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "video", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, VideoPlaylistPage_video_11_source_1_Template, 1, 2, "source", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.video_playlist_model == null ? null : ctx_r0.video_playlist_model.selected_video == null ? null : ctx_r0.video_playlist_model.selected_video.sources);
  }
}
function VideoPlaylistPage_vg_player_12_source_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "source", 18);
  }
  if (rf & 2) {
    const video_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", video_r7.src, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("type", video_r7.type);
  }
}
function VideoPlaylistPage_vg_player_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "vg-player", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onPlayerReady", function VideoPlaylistPage_vg_player_12_Template_vg_player_onPlayerReady_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.onPlayerReady($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "video", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, VideoPlaylistPage_vg_player_12_source_3_Template, 1, 2, "source", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("vgMedia", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.video_playlist_model == null ? null : ctx_r1.video_playlist_model.selected_video == null ? null : ctx_r1.video_playlist_model.selected_video.sources);
  }
}
const _c0 = function () {
  return {
    w: 3,
    h: 2
  };
};
function VideoPlaylistPage_ion_row_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-row", 22)(1, "ion-col", 23)(2, "app-image-shell", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VideoPlaylistPage_ion_row_19_Template_app_image_shell_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);
      const video_r10 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r11.playMedia(video_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "app-aspect-ratio", 6)(4, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VideoPlaylistPage_ion_row_19_Template_a_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);
      const video_r10 = restoredCtx.$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r13.playMedia(video_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "ion-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ion-col", 27)(7, "h4", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "app-text-shell", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "app-text-shell", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const video_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("display", "cover")("src", video_r10.thumbnail)("alt", "video thumbnail");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](6, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", video_r10.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", video_r10.description);
  }
}
const _c1 = function () {
  return {
    w: 16,
    h: 9
  };
};
class VideoPlaylistPage {
  constructor(route, platformId) {
    this.route = route;
    this.platformId = platformId;
    this.ssr = true;
    this.start_playing = false;
  }
  get isShell() {
    return this.video_playlist_model && this.video_playlist_model.isShell ? true : false;
  }
  ngOnInit() {
    // In SSR show a placeholder for the <vg-player>
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformBrowser)(this.platformId)) {
      this.ssr = false;
    }
    this.route.data.pipe(
    // Extract data for this page
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(resolvedRouteData => resolvedRouteData['data'].state)).subscribe({
      next: state => {
        this.video_playlist_model = state;
        if (!state.isShell) {
          this.video_playlist_model.video_playlist = state.videos;
          this.video_playlist_model.selected_video = state.videos[0];
        }
      },
      error: error => console.log(error)
    });
  }
  playMedia(media) {
    // Check if this media is not the same we are currently playing
    if (media !== this.video_playlist_model.selected_video) {
      // Change sources
      this.video_playlist_model.selected_video = media;
      // When changing sources we wait until the metadata is loaded and then we start playing the video
    }
  }
  onPlayerReady(api) {
    this.api = api;
    this.api.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.playVideo.bind(this));
  }
  playVideo() {
    if (this.start_playing) {
      this.api.play();
    } else {
      this.start_playing = true;
    }
  }
  shareMedia() {
    const selectedVideo = this.video_playlist_model.selected_video;
    _capacitor_share__WEBPACK_IMPORTED_MODULE_0__.Share.share({
      title: selectedVideo.title,
      text: selectedVideo.description,
      url: 'https://ionicthemes.com/',
      dialogTitle: 'Share Media'
    }).then(() => console.log('Successful share')).catch(error => console.log('Error sharing', error));
  }
  static #_ = this.ɵfac = function VideoPlaylistPage_Factory(t) {
    return new (t || VideoPlaylistPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: VideoPlaylistPage,
    selectors: [["app-video-playlist"]],
    hostVars: 2,
    hostBindings: function VideoPlaylistPage_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-shell", ctx.isShell);
      }
    },
    decls: 20,
    vars: 7,
    consts: [["color", "primary"], ["slot", "start"], ["slot", "end"], [3, "click"], ["slot", "icon-only", "name", "share"], [1, "video-playlist-content"], [3, "ratio"], ["class", "ssr-video", "controls", "", "preload", "auto", 4, "ngIf"], ["class", "video-player", 3, "onPlayerReady", 4, "ngIf"], [1, "video-data-section"], [1, "video-title"], ["animation", "gradient", 3, "data"], [1, "video-description"], ["lines", "5", "animation", "gradient", 3, "data"], [1, "video-playlist-section"], ["class", "playlist-item-row", 4, "ngFor", "ngForOf"], ["controls", "", "preload", "auto", 1, "ssr-video"], [3, "src", "type", 4, "ngFor", "ngForOf"], [3, "src", "type"], [1, "video-player", 3, "onPlayerReady"], ["controls", "", "id", "player-video", "preload", "auto", 3, "vgMedia"], ["player_video", ""], [1, "playlist-item-row"], ["size", "4"], ["animation", "spinner", 1, "video-image", 3, "display", "src", "alt", "click"], [1, "play-icon-wrapper", 3, "click"], ["name", "play", 1, "play-icon"], ["size", "8", 1, "video-info-wrapper"], [1, "image-title"], [1, "image-description"], ["lines", "3", "animation", "gradient", 3, "data"]],
    template: function VideoPlaylistPage_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "ion-menu-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Video Playlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ion-buttons", 2)(7, "ion-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VideoPlaylistPage_Template_ion_button_click_7_listener() {
          return ctx.shareMedia();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "ion-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ion-content", 5)(10, "app-aspect-ratio", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, VideoPlaylistPage_video_11_Template, 2, 1, "video", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, VideoPlaylistPage_vg_player_12_Template, 4, 2, "vg-player", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "section", 9)(14, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "app-text-shell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "app-text-shell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, VideoPlaylistPage_ion_row_19_Template, 11, 7, "ion-row", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](6, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.ssr);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.ssr);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx.video_playlist_model == null ? null : ctx.video_playlist_model.selected_video == null ? null : ctx.video_playlist_model.selected_video.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx.video_playlist_model == null ? null : ctx.video_playlist_model.selected_video == null ? null : ctx.video_playlist_model.selected_video.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.video_playlist_model == null ? null : ctx.video_playlist_model.video_playlist);
      }
    },
    dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonToolbar, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_1__.AspectRatioComponent, _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_2__.ImageShellComponent, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_3__.TextShellComponent, _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_9__.VgMediaDirective, _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_9__.VgPlayerComponent],
    styles: ["[_nghost-%COMP%] {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n}\n\n.video-playlist-content[_ngcontent-%COMP%] {\n  --background: var(--page-background);\n}\n.video-playlist-content[_ngcontent-%COMP%]   .ssr-video[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.video-playlist-content[_ngcontent-%COMP%]   .video-data-section[_ngcontent-%COMP%] {\n  padding: var(--page-margin);\n}\n.video-playlist-content[_ngcontent-%COMP%]   .video-data-section[_ngcontent-%COMP%]   .video-title[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  margin-bottom: calc(var(--page-margin) / 2);\n  color: var(--ion-color-secondary);\n}\n.video-playlist-content[_ngcontent-%COMP%]   .video-data-section[_ngcontent-%COMP%]   .video-description[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-size: 13px;\n  line-height: 1.3;\n  letter-spacing: 0.3px;\n  color: var(--ion-color-dark);\n}\n.video-playlist-content[_ngcontent-%COMP%]   .video-playlist-section[_ngcontent-%COMP%] {\n  padding: 0px var(--page-margin);\n  padding-bottom: var(--page-margin);\n}\n.video-playlist-content[_ngcontent-%COMP%]   .video-playlist-section[_ngcontent-%COMP%]   .playlist-item-row[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n}\n.video-playlist-content[_ngcontent-%COMP%]   .video-playlist-section[_ngcontent-%COMP%]   .playlist-item-row[_ngcontent-%COMP%]:not(:first-child) {\n  padding-top: calc(var(--page-margin) / 2);\n}\n.video-playlist-content[_ngcontent-%COMP%]   .video-playlist-section[_ngcontent-%COMP%]   .playlist-item-row[_ngcontent-%COMP%]:not(:last-child) {\n  padding-bottom: calc(var(--page-margin) / 2);\n  box-shadow: inset 0 -7px 3px -8px var(--ion-color-darkest);\n}\n.video-playlist-content[_ngcontent-%COMP%]   .video-playlist-section[_ngcontent-%COMP%]   .play-icon-wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n  text-decoration: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.video-playlist-content[_ngcontent-%COMP%]   .video-playlist-section[_ngcontent-%COMP%]   .play-icon-wrapper[_ngcontent-%COMP%]   .play-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-secondary);\n  background: rgba(var(--ion-color-lightest-rgb), 0.7);\n  font-size: 20px;\n  padding: 8px;\n  border-radius: 50%;\n}\n.video-playlist-content[_ngcontent-%COMP%]   .video-playlist-section[_ngcontent-%COMP%]   .video-info-wrapper[_ngcontent-%COMP%] {\n  padding-inline-start: var(--page-margin);\n  align-self: center;\n}\n.video-playlist-content[_ngcontent-%COMP%]   .video-playlist-section[_ngcontent-%COMP%]   .video-info-wrapper[_ngcontent-%COMP%]   .image-title[_ngcontent-%COMP%] {\n  margin: 0px;\n  margin-bottom: calc(var(--page-margin) / 4);\n  color: var(--ion-color-secondary);\n  font-size: 14px;\n}\n.video-playlist-content[_ngcontent-%COMP%]   .video-playlist-section[_ngcontent-%COMP%]   .video-info-wrapper[_ngcontent-%COMP%]   .image-title[_ngcontent-%COMP%]   app-text-shell[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.video-playlist-content[_ngcontent-%COMP%]   .video-playlist-section[_ngcontent-%COMP%]   .video-info-wrapper[_ngcontent-%COMP%]   .image-description[_ngcontent-%COMP%] {\n  margin: 0px;\n  color: var(--ion-color-dark);\n  font-size: 13px;\n  line-height: 1.3;\n  letter-spacing: 0.3px;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  overflow: hidden;\n  \n  -webkit-box-orient: vertical;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZGVvLXBsYXlsaXN0LnBhZ2Uuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL1RpdGFuJTIwRXN0YXRlcy9zcmMvYXBwL3ZpZGVvLXBsYXlsaXN0L3N0eWxlcy92aWRlby1wbGF5bGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxxQ0FBQTtFQUNBLHdDQUFBO0FDREY7O0FESUE7RUFDRSxvQ0FBQTtBQ0RGO0FER0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0RKO0FESUM7RUFDQywyQkFBQTtBQ0ZGO0FESUU7RUFDQyxlQUFBO0VBQ0csMkNBQUE7RUFDSCxpQ0FBQTtBQ0ZIO0FES0U7RUFDSSxXQUFBO0VBQ0QsZUFBQTtFQUNELGdCQUFBO0VBQ0QscUJBQUE7RUFDQSw0QkFBQTtBQ0hIO0FET0U7RUFDRSwrQkFBQTtFQUNBLGtDQUFBO0FDTEo7QURPSTtFQUNFLDhCQUFBO0FDTE47QURPTTtFQUNFLHlDQUFBO0FDTFI7QURRTTtFQUNFLDRDQUFBO0VBRUEsMERBQUE7QUNQUjtBRFdJO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNUTjtBRFdNO0VBQ0UsaUNBQUE7RUFDQSxvREFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNUUjtBRGFJO0VBQ0Usd0NBQUE7RUFDQSxrQkFBQTtBQ1hOO0FEYU07RUFDRSxXQUFBO0VBQ0EsMkNBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7QUNYUjtBRGFRO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDWFY7QURlTTtFQUNFLFdBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBR0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBRUEsOEJBQUE7RUFDQSw0QkFBQTtBQ2hCUiIsImZpbGUiOiJ2aWRlby1wbGF5bGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDdXN0b20gdmFyaWFibGVzXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcbn1cblxuLnZpZGVvLXBsYXlsaXN0LWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG5cbiAgLnNzci12aWRlbyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cblx0LnZpZGVvLWRhdGEtc2VjdGlvbiB7XG5cdFx0cGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pO1xuXG5cdFx0LnZpZGVvLXRpdGxlIHtcblx0XHRcdG1hcmdpbi10b3A6IDBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG5cdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG5cdFx0fVxuXG5cdFx0LnZpZGVvLWRlc2NyaXB0aW9uIHtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgIFx0Zm9udC1zaXplOiAxM3B4O1xuICBcdFx0bGluZS1oZWlnaHQ6IDEuMztcblx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjNweDtcblx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG5cdFx0fVxuXHR9XG5cbiAgLnZpZGVvLXBsYXlsaXN0LXNlY3Rpb25cdHtcbiAgICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG5cbiAgICAucGxheWxpc3QtaXRlbS1yb3cge1xuICAgICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICB9XG5cbiAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgICAvLyBib3gtc2hhZG93IGF0IHRoZSBib3R0b21cbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtN3B4IDNweCAtOHB4IHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucGxheS1pY29uLXdyYXBwZXIge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgLnBsYXktaWNvbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QtcmdiKSwgLjcpO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC52aWRlby1pbmZvLXdyYXBwZXIge1xuICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcblxuICAgICAgLmltYWdlLXRpdGxlIHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuXG4gICAgICAgIGFwcC10ZXh0LXNoZWxsIHtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmltYWdlLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuXG4gICAgICAgIC8vIGxpbmUgY2xhbXAgaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9saW5lLWNsYW1waW4vI2FydGljbGUtaGVhZGVyLWlkLTBcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMztcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgLy8gd2UgbmVlZCBhdXRvcHJlZml4ZXIgb2ZmIGZvciBuZXh0IGxpbmUgaHR0cHM6Ly9naXRodWIuY29tL3Bvc3Rjc3MvYXV0b3ByZWZpeGVyL2lzc3Vlcy83NzYjaXNzdWVjb21tZW50LTQ0NTI0OTE3NFxuICAgICAgICAvKiBhdXRvcHJlZml4ZXI6IGlnbm9yZSBuZXh0ICovXG4gICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG59XG5cbi52aWRlby1wbGF5bGlzdC1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xufVxuLnZpZGVvLXBsYXlsaXN0LWNvbnRlbnQgLnNzci12aWRlbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4udmlkZW8tcGxheWxpc3QtY29udGVudCAudmlkZW8tZGF0YS1zZWN0aW9uIHtcbiAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLnZpZGVvLXBsYXlsaXN0LWNvbnRlbnQgLnZpZGVvLWRhdGEtc2VjdGlvbiAudmlkZW8tdGl0bGUge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cbi52aWRlby1wbGF5bGlzdC1jb250ZW50IC52aWRlby1kYXRhLXNlY3Rpb24gLnZpZGVvLWRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xufVxuLnZpZGVvLXBsYXlsaXN0LWNvbnRlbnQgLnZpZGVvLXBsYXlsaXN0LXNlY3Rpb24ge1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLnZpZGVvLXBsYXlsaXN0LWNvbnRlbnQgLnZpZGVvLXBsYXlsaXN0LXNlY3Rpb24gLnBsYXlsaXN0LWl0ZW0tcm93IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xufVxuLnZpZGVvLXBsYXlsaXN0LWNvbnRlbnQgLnZpZGVvLXBsYXlsaXN0LXNlY3Rpb24gLnBsYXlsaXN0LWl0ZW0tcm93Om5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4udmlkZW8tcGxheWxpc3QtY29udGVudCAudmlkZW8tcGxheWxpc3Qtc2VjdGlvbiAucGxheWxpc3QtaXRlbS1yb3c6bm90KDpsYXN0LWNoaWxkKSB7XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBib3gtc2hhZG93OiBpbnNldCAwIC03cHggM3B4IC04cHggdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QpO1xufVxuLnZpZGVvLXBsYXlsaXN0LWNvbnRlbnQgLnZpZGVvLXBsYXlsaXN0LXNlY3Rpb24gLnBsYXktaWNvbi13cmFwcGVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnZpZGVvLXBsYXlsaXN0LWNvbnRlbnQgLnZpZGVvLXBsYXlsaXN0LXNlY3Rpb24gLnBsYXktaWNvbi13cmFwcGVyIC5wbGF5LWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIGJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0LXJnYiksIDAuNyk7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4udmlkZW8tcGxheWxpc3QtY29udGVudCAudmlkZW8tcGxheWxpc3Qtc2VjdGlvbiAudmlkZW8taW5mby13cmFwcGVyIHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuLnZpZGVvLXBsYXlsaXN0LWNvbnRlbnQgLnZpZGVvLXBsYXlsaXN0LXNlY3Rpb24gLnZpZGVvLWluZm8td3JhcHBlciAuaW1hZ2UtdGl0bGUge1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4udmlkZW8tcGxheWxpc3QtY29udGVudCAudmlkZW8tcGxheWxpc3Qtc2VjdGlvbiAudmlkZW8taW5mby13cmFwcGVyIC5pbWFnZS10aXRsZSBhcHAtdGV4dC1zaGVsbCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLnZpZGVvLXBsYXlsaXN0LWNvbnRlbnQgLnZpZGVvLXBsYXlsaXN0LXNlY3Rpb24gLnZpZGVvLWluZm8td3JhcHBlciAuaW1hZ2UtZGVzY3JpcHRpb24ge1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMS4zO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC8qIGF1dG9wcmVmaXhlcjogaWdub3JlIG5leHQgKi9cbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlkZW8tcGxheWxpc3Qvc3R5bGVzL3ZpZGVvLXBsYXlsaXN0LnBhZ2Uuc2NzcyIsIndlYnBhY2s6Ly8uLy4uL1RpdGFuJTIwRXN0YXRlcy9zcmMvYXBwL3ZpZGVvLXBsYXlsaXN0L3N0eWxlcy92aWRlby1wbGF5bGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxxQ0FBQTtFQUNBLHdDQUFBO0FDREY7O0FESUE7RUFDRSxvQ0FBQTtBQ0RGO0FER0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0RKO0FESUM7RUFDQywyQkFBQTtBQ0ZGO0FESUU7RUFDQyxlQUFBO0VBQ0csMkNBQUE7RUFDSCxpQ0FBQTtBQ0ZIO0FES0U7RUFDSSxXQUFBO0VBQ0QsZUFBQTtFQUNELGdCQUFBO0VBQ0QscUJBQUE7RUFDQSw0QkFBQTtBQ0hIO0FET0U7RUFDRSwrQkFBQTtFQUNBLGtDQUFBO0FDTEo7QURPSTtFQUNFLDhCQUFBO0FDTE47QURPTTtFQUNFLHlDQUFBO0FDTFI7QURRTTtFQUNFLDRDQUFBO0VBRUEsMERBQUE7QUNQUjtBRFdJO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNUTjtBRFdNO0VBQ0UsaUNBQUE7RUFDQSxvREFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNUUjtBRGFJO0VBQ0Usd0NBQUE7RUFDQSxrQkFBQTtBQ1hOO0FEYU07RUFDRSxXQUFBO0VBQ0EsMkNBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7QUNYUjtBRGFRO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDWFY7QURlTTtFQUNFLFdBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBR0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBRUEsOEJBQUE7RUFDQSw0QkFBQTtBQ2hCUjtBRENBLDQ3UEFBNDdQIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3VzdG9tIHZhcmlhYmxlc1xuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG46aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG59XG5cbi52aWRlby1wbGF5bGlzdC1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuXG4gIC5zc3ItdmlkZW8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG5cdC52aWRlby1kYXRhLXNlY3Rpb24ge1xuXHRcdHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuXHRcdC52aWRlby10aXRsZSB7XG5cdFx0XHRtYXJnaW4tdG9wOiAwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuXHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuXHRcdH1cblxuXHRcdC52aWRlby1kZXNjcmlwdGlvbiB7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICBcdGZvbnQtc2l6ZTogMTNweDtcbiAgXHRcdGxpbmUtaGVpZ2h0OiAxLjM7XG5cdFx0XHRsZXR0ZXItc3BhY2luZzogMC4zcHg7XG5cdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuXHRcdH1cblx0fVxuXG4gIC52aWRlby1wbGF5bGlzdC1zZWN0aW9uXHR7XG4gICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuXG4gICAgLnBsYXlsaXN0LWl0ZW0tcm93IHtcbiAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgfVxuXG4gICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgLy8gYm94LXNoYWRvdyBhdCB0aGUgYm90dG9tXG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTdweCAzcHggLThweCB2YXIoLS1pb24tY29sb3ItZGFya2VzdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnBsYXktaWNvbi13cmFwcGVyIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgIC5wbGF5LWljb24ge1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0LXJnYiksIC43KTtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAudmlkZW8taW5mby13cmFwcGVyIHtcbiAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG5cbiAgICAgIC5pbWFnZS10aXRsZSB7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgICAgICBhcHAtdGV4dC1zaGVsbCB7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5pbWFnZS1kZXNjcmlwdGlvbiB7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjNweDtcblxuICAgICAgICAvLyBsaW5lIGNsYW1wIGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vbGluZS1jbGFtcGluLyNhcnRpY2xlLWhlYWRlci1pZC0wXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIC8vIHdlIG5lZWQgYXV0b3ByZWZpeGVyIG9mZiBmb3IgbmV4dCBsaW5lIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3N0Y3NzL2F1dG9wcmVmaXhlci9pc3N1ZXMvNzc2I2lzc3VlY29tbWVudC00NDUyNDkxNzRcbiAgICAgICAgLyogYXV0b3ByZWZpeGVyOiBpZ25vcmUgbmV4dCAqL1xuICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xufVxuXG4udmlkZW8tcGxheWxpc3QtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbn1cbi52aWRlby1wbGF5bGlzdC1jb250ZW50IC5zc3ItdmlkZW8ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnZpZGVvLXBsYXlsaXN0LWNvbnRlbnQgLnZpZGVvLWRhdGEtc2VjdGlvbiB7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi52aWRlby1wbGF5bGlzdC1jb250ZW50IC52aWRlby1kYXRhLXNlY3Rpb24gLnZpZGVvLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG4udmlkZW8tcGxheWxpc3QtY29udGVudCAudmlkZW8tZGF0YS1zZWN0aW9uIC52aWRlby1kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbn1cbi52aWRlby1wbGF5bGlzdC1jb250ZW50IC52aWRlby1wbGF5bGlzdC1zZWN0aW9uIHtcbiAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi52aWRlby1wbGF5bGlzdC1jb250ZW50IC52aWRlby1wbGF5bGlzdC1zZWN0aW9uIC5wbGF5bGlzdC1pdGVtLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbn1cbi52aWRlby1wbGF5bGlzdC1jb250ZW50IC52aWRlby1wbGF5bGlzdC1zZWN0aW9uIC5wbGF5bGlzdC1pdGVtLXJvdzpub3QoOmZpcnN0LWNoaWxkKSB7XG4gIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLnZpZGVvLXBsYXlsaXN0LWNvbnRlbnQgLnZpZGVvLXBsYXlsaXN0LXNlY3Rpb24gLnBsYXlsaXN0LWl0ZW0tcm93Om5vdCg6bGFzdC1jaGlsZCkge1xuICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtN3B4IDNweCAtOHB4IHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcbn1cbi52aWRlby1wbGF5bGlzdC1jb250ZW50IC52aWRlby1wbGF5bGlzdC1zZWN0aW9uIC5wbGF5LWljb24td3JhcHBlciB7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi52aWRlby1wbGF5bGlzdC1jb250ZW50IC52aWRlby1wbGF5bGlzdC1zZWN0aW9uIC5wbGF5LWljb24td3JhcHBlciAucGxheS1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1saWdodGVzdC1yZ2IpLCAwLjcpO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnZpZGVvLXBsYXlsaXN0LWNvbnRlbnQgLnZpZGVvLXBsYXlsaXN0LXNlY3Rpb24gLnZpZGVvLWluZm8td3JhcHBlciB7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi52aWRlby1wbGF5bGlzdC1jb250ZW50IC52aWRlby1wbGF5bGlzdC1zZWN0aW9uIC52aWRlby1pbmZvLXdyYXBwZXIgLmltYWdlLXRpdGxlIHtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnZpZGVvLXBsYXlsaXN0LWNvbnRlbnQgLnZpZGVvLXBsYXlsaXN0LXNlY3Rpb24gLnZpZGVvLWluZm8td3JhcHBlciAuaW1hZ2UtdGl0bGUgYXBwLXRleHQtc2hlbGwge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbi52aWRlby1wbGF5bGlzdC1jb250ZW50IC52aWRlby1wbGF5bGlzdC1zZWN0aW9uIC52aWRlby1pbmZvLXdyYXBwZXIgLmltYWdlLWRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAvKiBhdXRvcHJlZml4ZXI6IGlnbm9yZSBuZXh0ICovXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */", "app-image-shell.video-image[_ngcontent-%COMP%] {\n  background-position: center;\n}\n\n.image-title[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-height: 14px;\n}\n\n.image-description[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-height: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZGVvLXBsYXlsaXN0LnNoZWxsLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9UaXRhbiUyMEVzdGF0ZXMvc3JjL2FwcC92aWRlby1wbGF5bGlzdC9zdHlsZXMvdmlkZW8tcGxheWxpc3Quc2hlbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7QUNDRiIsImZpbGUiOiJ2aWRlby1wbGF5bGlzdC5zaGVsbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWltYWdlLXNoZWxsLnZpZGVvLWltYWdlIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4uaW1hZ2UtdGl0bGUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbn1cblxuLmltYWdlLWRlc2NyaXB0aW9uID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDEzcHg7XG59XG4iLCJhcHAtaW1hZ2Utc2hlbGwudmlkZW8taW1hZ2Uge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5pbWFnZS10aXRsZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xufVxuXG4uaW1hZ2UtZGVzY3JpcHRpb24gPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTNweDtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlkZW8tcGxheWxpc3Qvc3R5bGVzL3ZpZGVvLXBsYXlsaXN0LnNoZWxsLnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi9UaXRhbiUyMEVzdGF0ZXMvc3JjL2FwcC92aWRlby1wbGF5bGlzdC9zdHlsZXMvdmlkZW8tcGxheWxpc3Quc2hlbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7QUNDRjtBRENBLDQvQkFBNC9CIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWltYWdlLXNoZWxsLnZpZGVvLWltYWdlIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4uaW1hZ2UtdGl0bGUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbn1cblxuLmltYWdlLWRlc2NyaXB0aW9uID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDEzcHg7XG59XG4iLCJhcHAtaW1hZ2Utc2hlbGwudmlkZW8taW1hZ2Uge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5pbWFnZS10aXRsZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xufVxuXG4uaW1hZ2UtZGVzY3JpcHRpb24gPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTNweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 23703:
/*!***********************************************************!*\
  !*** ./src/app/video-playlist/video-playlist.resolver.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoPlaylistResolver": () => (/* binding */ VideoPlaylistResolver)
/* harmony export */ });
/* harmony import */ var _video_playlist_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video-playlist.service */ 43298);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);



class VideoPlaylistResolver {
  constructor(videoPlaylistService) {
    this.videoPlaylistService = videoPlaylistService;
  }
  resolve() {
    const dataSource = this.videoPlaylistService.getVideoPlaylistDataSource();
    const dataStore = this.videoPlaylistService.getVideoPlaylistStore(dataSource);
    return dataStore;
  }
  static #_ = this.ɵfac = function VideoPlaylistResolver_Factory(t) {
    return new (t || VideoPlaylistResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_video_playlist_service__WEBPACK_IMPORTED_MODULE_0__.VideoPlaylistService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: VideoPlaylistResolver,
    factory: VideoPlaylistResolver.ɵfac
  });
}

/***/ }),

/***/ 43298:
/*!**********************************************************!*\
  !*** ./src/app/video-playlist/video-playlist.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoPlaylistService": () => (/* binding */ VideoPlaylistService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _video_playlist_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video-playlist.model */ 61833);
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shell/data-store */ 29760);
/* harmony import */ var _utils_transfer_state_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/transfer-state-helper */ 15009);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 58987);









class VideoPlaylistService {
  constructor(platformId, transferStateHelper, http) {
    this.platformId = platformId;
    this.transferStateHelper = transferStateHelper;
    this.http = http;
  }
  getVideoPlaylistDataSource() {
    const rawDataSource = this.http.get('./assets/sample-data/video-playlist/video-playlist.json');
    // This method tapps into the raw data source and stores the resolved data in the TransferState, then when
    // transitioning from the server rendered view to the browser, checks if we already loaded the data in the server to prevent
    // duplicate http requests.
    const cachedDataSource = this.transferStateHelper.checkDataSourceState('video-playlist-state', rawDataSource);
    return cachedDataSource;
  }
  getVideoPlaylistStore(dataSource) {
    // Use cache if available
    if (!this.videoPlaylistDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel = new _video_playlist_model__WEBPACK_IMPORTED_MODULE_0__.VideoPlaylistModel();
      this.videoPlaylistDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_1__.DataStore(shellModel);
      // If running in the server, then don't add shell to the Data Store
      // If we already loaded the Data Source in the server, then don't show a shell when transitioning back to the broswer from the server
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformServer)(this.platformId) || dataSource['ssr_state']) {
        // Trigger loading mechanism with 0 delay (this will prevent the shell to be shown)
        this.videoPlaylistDataStore.load(dataSource, 0);
      } else {
        // On browser transitions
        // Trigger the loading mechanism (with shell)
        this.videoPlaylistDataStore.load(dataSource);
      }
    }
    return this.videoPlaylistDataStore;
  }
  static #_ = this.ɵfac = function VideoPlaylistService_Factory(t) {
    return new (t || VideoPlaylistService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_utils_transfer_state_helper__WEBPACK_IMPORTED_MODULE_2__.TransferStateHelper), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: VideoPlaylistService,
    factory: VideoPlaylistService.ɵfac
  });
}

/***/ }),

/***/ 48470:
/*!***************************************************************!*\
  !*** ./node_modules/@capacitor/share/dist/esm/definitions.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 58921:
/*!*********************************************************!*\
  !*** ./node_modules/@capacitor/share/dist/esm/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Share": () => (/* binding */ Share)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 48470);

const Share = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Share', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_share_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 83656)).then(m => new m.ShareWeb())
});



/***/ }),

/***/ 16131:
/*!**************************************************************************************************!*\
  !*** ./node_modules/@videogular/ngx-videogular/fesm2020/videogular-ngx-videogular-buffering.mjs ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VgBufferingComponent": () => (/* binding */ VgBufferingComponent),
/* harmony export */   "VgBufferingModule": () => (/* binding */ VgBufferingModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @videogular/ngx-videogular/core */ 49197);





class VgBufferingComponent {
  constructor(ref, API) {
    this.API = API;
    this.checkInterval = 50;
    this.currentPlayPos = 0;
    this.lastPlayPos = 0;
    this.subscriptions = [];
    this.isBuffering = false;
    this.elem = ref.nativeElement;
  }
  ngOnInit() {
    if (this.API.isPlayerReady) {
      this.onPlayerReady();
    } else {
      this.subscriptions.push(this.API.playerReadyEvent.subscribe(() => this.onPlayerReady()));
    }
  }
  onPlayerReady() {
    this.target = this.API.getMediaById(this.vgFor);
    this.subscriptions.push(this.target.subscriptions.bufferDetected.subscribe(isBuffering => this.onUpdateBuffer(isBuffering)));
  }
  onUpdateBuffer(isBuffering) {
    this.isBuffering = isBuffering;
  }
  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
/** @nocollapse */
VgBufferingComponent.ɵfac = function VgBufferingComponent_Factory(t) {
  return new (t || VgBufferingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_1__.VgApiService));
};
/** @nocollapse */
VgBufferingComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: VgBufferingComponent,
  selectors: [["vg-buffering"]],
  hostVars: 2,
  hostBindings: function VgBufferingComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-buffering", ctx.isBuffering);
    }
  },
  inputs: {
    vgFor: "vgFor"
  },
  decls: 3,
  vars: 0,
  consts: [[1, "vg-buffering"], [1, "bufferingContainer"], [1, "loadingSpinner"]],
  template: function VgBufferingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
  },
  styles: ["vg-buffering{display:none;z-index:201}vg-buffering.is-buffering{display:block}.vg-buffering{position:absolute;display:block;width:100%;height:100%}.vg-buffering .bufferingContainer{width:100%;position:absolute;cursor:pointer;top:50%;margin-top:-50px;zoom:1;filter:alpha(opacity=60);opacity:.6}.vg-buffering .loadingSpinner{background-color:#0000;border:5px solid rgba(255,255,255,1);opacity:.9;border-top:5px solid rgba(0,0,0,0);border-left:5px solid rgba(0,0,0,0);border-radius:50px;box-shadow:0 0 35px #fff;width:50px;height:50px;margin:0 auto;-moz-animation:spin .5s infinite linear;-webkit-animation:spin .5s infinite linear}.vg-buffering .loadingSpinner .stop{-webkit-animation-play-state:paused;-moz-animation-play-state:paused}\n"],
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgBufferingComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'vg-buffering',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: `<div class="vg-buffering">
    <div class="bufferingContainer">
      <div class="loadingSpinner"></div>
    </div>
  </div>`,
      styles: ["vg-buffering{display:none;z-index:201}vg-buffering.is-buffering{display:block}.vg-buffering{position:absolute;display:block;width:100%;height:100%}.vg-buffering .bufferingContainer{width:100%;position:absolute;cursor:pointer;top:50%;margin-top:-50px;zoom:1;filter:alpha(opacity=60);opacity:.6}.vg-buffering .loadingSpinner{background-color:#0000;border:5px solid rgba(255,255,255,1);opacity:.9;border-top:5px solid rgba(0,0,0,0);border-left:5px solid rgba(0,0,0,0);border-radius:50px;box-shadow:0 0 35px #fff;width:50px;height:50px;margin:0 auto;-moz-animation:spin .5s infinite linear;-webkit-animation:spin .5s infinite linear}.vg-buffering .loadingSpinner .stop{-webkit-animation-play-state:paused;-moz-animation-play-state:paused}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_1__.VgApiService
    }];
  }, {
    vgFor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    isBuffering: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.is-buffering']
    }]
  });
})();
class VgBufferingModule {}
/** @nocollapse */
VgBufferingModule.ɵfac = function VgBufferingModule_Factory(t) {
  return new (t || VgBufferingModule)();
};
/** @nocollapse */
VgBufferingModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: VgBufferingModule
});
/** @nocollapse */
VgBufferingModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_1__.VgCoreModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgBufferingModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_1__.VgCoreModule],
      declarations: [VgBufferingComponent],
      exports: [VgBufferingComponent]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=videogular-ngx-videogular-buffering.mjs.map

/***/ }),

/***/ 86836:
/*!*************************************************************************************************!*\
  !*** ./node_modules/@videogular/ngx-videogular/fesm2020/videogular-ngx-videogular-controls.mjs ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VgControlsComponent": () => (/* binding */ VgControlsComponent),
/* harmony export */   "VgControlsModule": () => (/* binding */ VgControlsModule),
/* harmony export */   "VgFullscreenComponent": () => (/* binding */ VgFullscreenComponent),
/* harmony export */   "VgMuteComponent": () => (/* binding */ VgMuteComponent),
/* harmony export */   "VgPlayPauseComponent": () => (/* binding */ VgPlayPauseComponent),
/* harmony export */   "VgPlaybackButtonComponent": () => (/* binding */ VgPlaybackButtonComponent),
/* harmony export */   "VgQualitySelectorComponent": () => (/* binding */ VgQualitySelectorComponent),
/* harmony export */   "VgScrubBarBufferingTimeComponent": () => (/* binding */ VgScrubBarBufferingTimeComponent),
/* harmony export */   "VgScrubBarComponent": () => (/* binding */ VgScrubBarComponent),
/* harmony export */   "VgScrubBarCuePointsComponent": () => (/* binding */ VgScrubBarCuePointsComponent),
/* harmony export */   "VgScrubBarCurrentTimeComponent": () => (/* binding */ VgScrubBarCurrentTimeComponent),
/* harmony export */   "VgTimeDisplayComponent": () => (/* binding */ VgTimeDisplayComponent),
/* harmony export */   "VgTrackSelectorComponent": () => (/* binding */ VgTrackSelectorComponent),
/* harmony export */   "VgUtcPipe": () => (/* binding */ VgUtcPipe),
/* harmony export */   "VgVolumeComponent": () => (/* binding */ VgVolumeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 23280);
/* harmony import */ var _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @videogular/ngx-videogular/core */ 49197);







const _c0 = ["*"];
const _c1 = ["volumeBar"];
const _c2 = function (a0) {
  return {
    dragging: a0
  };
};
function VgTrackSelectorComponent_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const track_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", track_r1.id)("selected", track_r1.selected === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", track_r1.label, " ");
  }
}
function VgTimeDisplayComponent_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "LIVE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function VgTimeDisplayComponent_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "vgUtc");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r1.getTime(), ctx_r1.vgFormat));
  }
}
function VgQualitySelectorComponent_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const bitrate_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", bitrate_r1.qualityIndex)("selected", bitrate_r1.qualityIndex === (ctx_r0.bitrateSelected == null ? null : ctx_r0.bitrateSelected.qualityIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", bitrate_r1.label, " ");
  }
}
function VgScrubBarCuePointsComponent_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 2);
  }
  if (rf & 2) {
    const cp_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", cp_r1.$$style == null ? null : cp_r1.$$style.width)("left", cp_r1.$$style == null ? null : cp_r1.$$style.left);
  }
}
function VgScrubBarCurrentTimeComponent_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 2);
  }
}
class VgControlsComponent {
  // @ts-ignore
  constructor(API, ref, hidden) {
    this.API = API;
    this.hidden = hidden;
    this.isAdsPlaying = 'initial';
    this.hideControls = false;
    this.vgAutohide = false;
    this.vgAutohideTime = 3;
    this.subscriptions = [];
    this.elem = ref.nativeElement;
  }
  ngOnInit() {
    this.mouseMove$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(this.API.videogularElement, 'mousemove');
    this.subscriptions.push(this.mouseMove$.subscribe(this.show.bind(this)));
    this.touchStart$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(this.API.videogularElement, 'touchstart');
    this.subscriptions.push(this.touchStart$.subscribe(this.show.bind(this)));
    this.mouseClick$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(this.API.videogularElement, 'click');
    this.subscriptions.push(this.mouseClick$.subscribe(this.show.bind(this)));
    if (this.API.isPlayerReady) {
      this.onPlayerReady();
    } else {
      this.subscriptions.push(this.API.playerReadyEvent.subscribe(() => this.onPlayerReady()));
    }
  }
  onPlayerReady() {
    this.target = this.API.getMediaById(this.vgFor);
    this.subscriptions.push(this.target.subscriptions.play.subscribe(this.onPlay.bind(this)));
    this.subscriptions.push(this.target.subscriptions.pause.subscribe(this.onPause.bind(this)));
    this.subscriptions.push(this.target.subscriptions.startAds.subscribe(this.onStartAds.bind(this)));
    this.subscriptions.push(this.target.subscriptions.endAds.subscribe(this.onEndAds.bind(this)));
  }
  ngAfterViewInit() {
    if (this.vgAutohide) {
      this.hide();
    } else {
      this.show();
    }
  }
  onPlay() {
    if (this.vgAutohide) {
      this.hide();
    }
  }
  onPause() {
    clearTimeout(this.timer);
    this.hideControls = false;
    this.hidden.state(false);
  }
  onStartAds() {
    this.isAdsPlaying = 'none';
  }
  onEndAds() {
    this.isAdsPlaying = 'initial';
  }
  hide() {
    if (this.vgAutohide) {
      clearTimeout(this.timer);
      this.hideAsync();
    }
  }
  show() {
    clearTimeout(this.timer);
    this.hideControls = false;
    this.hidden.state(false);
    if (this.vgAutohide) {
      this.hideAsync();
    }
  }
  hideAsync() {
    if (this.API.state === _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__.VgStates.VG_PLAYING) {
      this.timer = setTimeout(() => {
        this.hideControls = true;
        this.hidden.state(true);
      }, this.vgAutohideTime * 1000);
    }
  }
  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
/** @nocollapse */
VgControlsComponent.ɵfac = function VgControlsComponent_Factory(t) {
  return new (t || VgControlsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__.VgApiService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__.VgControlsHiddenService));
};
/** @nocollapse */
VgControlsComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: VgControlsComponent,
  selectors: [["vg-controls"]],
  hostVars: 4,
  hostBindings: function VgControlsComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("pointer-events", ctx.isAdsPlaying);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide", ctx.hideControls);
    }
  },
  inputs: {
    vgFor: "vgFor",
    vgAutohide: "vgAutohide",
    vgAutohideTime: "vgAutohideTime"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function VgControlsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    }
  },
  styles: ["vg-controls{position:absolute;display:flex;width:100%;height:50px;z-index:300;bottom:0;background-color:#00000080;transition:bottom 1s}vg-controls.hide{bottom:-50px}\n"],
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgControlsComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'vg-controls',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: `<ng-content></ng-content>`,
      styles: ["vg-controls{position:absolute;display:flex;width:100%;height:50px;z-index:300;bottom:0;background-color:#00000080;transition:bottom 1s}vg-controls.hide{bottom:-50px}\n"]
    }]
  }], function () {
    return [{
      type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__.VgApiService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__.VgControlsHiddenService
    }];
  }, {
    isAdsPlaying: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.pointer-events']
    }],
    hideControls: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.hide']
    }],
    vgFor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    vgAutohide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    vgAutohideTime: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class VgVolumeComponent {
  constructor(ref, API) {
    this.API = API;
    this.subscriptions = [];
    this.elem = ref.nativeElement;
    this.isDragging = false;
  }
  ngOnInit() {
    if (this.API.isPlayerReady) {
      this.onPlayerReady();
    } else {
      this.subscriptions.push(this.API.playerReadyEvent.subscribe(() => this.onPlayerReady()));
    }
  }
  onPlayerReady() {
    this.target = this.API.getMediaById(this.vgFor);
    this.ariaValue = this.getVolume() * 100;
  }
  onClick(event) {
    this.setVolume(this.calculateVolume(event.clientX));
  }
  onMouseDown(event) {
    this.mouseDownPosX = event.clientX;
    this.isDragging = true;
  }
  onDrag(event) {
    if (this.isDragging) {
      this.setVolume(this.calculateVolume(event.clientX));
    }
  }
  onStopDrag(event) {
    if (this.isDragging) {
      this.isDragging = false;
      if (this.mouseDownPosX === event.clientX) {
        this.setVolume(this.calculateVolume(event.clientX));
      }
    }
  }
  arrowAdjustVolume(event) {
    if (event.keyCode === 38 || event.keyCode === 39) {
      event.preventDefault();
      this.setVolume(Math.max(0, Math.min(100, this.getVolume() * 100 + 10)));
    } else if (event.keyCode === 37 || event.keyCode === 40) {
      event.preventDefault();
      this.setVolume(Math.max(0, Math.min(100, this.getVolume() * 100 - 10)));
    }
  }
  calculateVolume(mousePosX) {
    const recObj = this.volumeBarRef.nativeElement.getBoundingClientRect();
    const volumeBarOffsetLeft = recObj.left;
    const volumeBarWidth = recObj.width;
    return (mousePosX - volumeBarOffsetLeft) / volumeBarWidth * 100;
  }
  setVolume(vol) {
    this.target.volume = Math.max(0, Math.min(1, vol / 100));
    this.ariaValue = this.target.volume * 100;
  }
  getVolume() {
    return this.target ? this.target.volume : 0;
  }
  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
/** @nocollapse */
VgVolumeComponent.ɵfac = function VgVolumeComponent_Factory(t) {
  return new (t || VgVolumeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__.VgApiService));
};
/** @nocollapse */
VgVolumeComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: VgVolumeComponent,
  selectors: [["vg-volume"]],
  viewQuery: function VgVolumeComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.volumeBarRef = _t.first);
    }
  },
  hostBindings: function VgVolumeComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousemove", function VgVolumeComponent_mousemove_HostBindingHandler($event) {
        return ctx.onDrag($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("mouseup", function VgVolumeComponent_mouseup_HostBindingHandler($event) {
        return ctx.onStopDrag($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("keydown", function VgVolumeComponent_keydown_HostBindingHandler($event) {
        return ctx.arrowAdjustVolume($event);
      });
    }
  },
  inputs: {
    vgFor: "vgFor"
  },
  decls: 5,
  vars: 9,
  consts: [["tabindex", "0", "role", "slider", "aria-label", "volume level", "aria-level", "polite", "aria-valuemin", "0", "aria-valuemax", "100", "aria-orientation", "horizontal", 1, "volumeBar", 3, "click", "mousedown"], ["volumeBar", ""], [1, "volumeBackground", 3, "ngClass"], [1, "volumeValue"], [1, "volumeKnob"]],
  template: function VgVolumeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VgVolumeComponent_Template_div_click_0_listener($event) {
        return ctx.onClick($event);
      })("mousedown", function VgVolumeComponent_Template_div_mousedown_0_listener($event) {
        return ctx.onMouseDown($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3)(4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuenow", ctx.ariaValue)("aria-valuetext", ctx.ariaValue + "%");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, ctx.isDragging));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.getVolume() * (100 - 15) + "%");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", ctx.getVolume() * (100 - 15) + "%");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass],
  styles: ["vg-volume{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;display:flex;justify-content:center;height:50px;width:100px;cursor:pointer;color:#fff;line-height:50px}vg-volume .volumeBar{position:relative;display:flex;flex-grow:1;align-items:center}vg-volume .volumeBackground{display:flex;flex-grow:1;height:5px;pointer-events:none;background-color:#333}vg-volume .volumeValue{display:flex;height:5px;pointer-events:none;background-color:#fff;transition:all .2s ease-out}vg-volume .volumeKnob{position:absolute;width:15px;height:15px;left:0;top:50%;transform:translateY(-50%);border-radius:15px;pointer-events:none;background-color:#fff;transition:all .2s ease-out}vg-volume .volumeBackground.dragging .volumeValue,vg-volume .volumeBackground.dragging .volumeKnob{transition:none}\n"],
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgVolumeComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'vg-volume',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: `
    <div
      #volumeBar
      class="volumeBar"
      tabindex="0"
      role="slider"
      aria-label="volume level"
      aria-level="polite"
      [attr.aria-valuenow]="ariaValue"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-orientation="horizontal"
      [attr.aria-valuetext]="ariaValue + '%'"
      (click)="onClick($event)"
      (mousedown)="onMouseDown($event)"
    >
      <div class="volumeBackground" [ngClass]="{ dragging: isDragging }">
        <div
          class="volumeValue"
          [style.width]="getVolume() * (100 - 15) + '%'"
        ></div>
        <div
          class="volumeKnob"
          [style.left]="getVolume() * (100 - 15) + '%'"
        ></div>
      </div>
    </div>
  `,
      styles: ["vg-volume{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;display:flex;justify-content:center;height:50px;width:100px;cursor:pointer;color:#fff;line-height:50px}vg-volume .volumeBar{position:relative;display:flex;flex-grow:1;align-items:center}vg-volume .volumeBackground{display:flex;flex-grow:1;height:5px;pointer-events:none;background-color:#333}vg-volume .volumeValue{display:flex;height:5px;pointer-events:none;background-color:#fff;transition:all .2s ease-out}vg-volume .volumeKnob{position:absolute;width:15px;height:15px;left:0;top:50%;transform:translateY(-50%);border-radius:15px;pointer-events:none;background-color:#fff;transition:all .2s ease-out}vg-volume .volumeBackground.dragging .volumeValue,vg-volume .volumeBackground.dragging .volumeKnob{transition:none}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__.VgApiService
    }];
  }, {
    vgFor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    volumeBarRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['volumeBar', {
        static: true
      }]
    }],
    onDrag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['document:mousemove', ['$event']]
    }],
    onStopDrag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['document:mouseup', ['$event']]
    }],
    arrowAdjustVolume: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown', ['$event']]
    }]
  });
})();
class VgTrackSelectorComponent {
  constructor(ref, API) {
    this.API = API;
    this.subscriptions = [];
    this.elem = ref.nativeElement;
  }
  ngOnInit() {
    if (this.API.isPlayerReady) {
      this.onPlayerReady();
    } else {
      this.subscriptions.push(this.API.playerReadyEvent.subscribe(() => this.onPlayerReady()));
    }
  }
  onPlayerReady() {
    this.target = this.API.getMediaById(this.vgFor);
    const subs = Array.from(this.API.getMasterMedia().elem.children).filter(item => item.tagName === 'TRACK').filter(item => item.kind === 'subtitles').map(item => ({
      label: item.label,
      selected: item.default === true,
      id: item.srclang
    }));
    this.tracks = [...subs, {
      id: null,
      label: 'Off',
      selected: subs.every(item => item.selected === false)
    }];
    const track = this.tracks.filter(item => item.selected === true)[0];
    this.trackSelected = track.id;
    this.ariaValue = track.label;
  }
  selectTrack(trackId) {
    this.trackSelected = trackId === 'null' ? null : trackId;
    this.ariaValue = 'No track selected';
    Array.from(this.API.getMasterMedia().elem.textTracks).forEach(item => {
      if (item.language === trackId) {
        this.ariaValue = item.label;
        item.mode = 'showing';
      } else {
        item.mode = 'hidden';
      }
    });
  }
  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
/** @nocollapse */
VgTrackSelectorComponent.ɵfac = function VgTrackSelectorComponent_Factory(t) {
  return new (t || VgTrackSelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__.VgApiService));
};
/** @nocollapse */
VgTrackSelectorComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: VgTrackSelectorComponent,
  selectors: [["vg-track-selector"]],
  inputs: {
    vgFor: "vgFor"
  },
  decls: 5,
  vars: 5,
  consts: [[1, "container"], [1, "track-selected"], ["tabindex", "0", "aria-label", "track selector", 1, "trackSelector", 3, "change"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [3, "value", "selected"]],
  template: function VgTrackSelectorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function VgTrackSelectorComponent_Template_select_change_3_listener($event) {
        return ctx.selectTrack($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, VgTrackSelectorComponent_option_4_Template, 2, 3, "option", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("vg-icon-closed_caption", !ctx.trackSelected);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.trackSelected || "", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuetext", ctx.ariaValue);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tracks);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf],
  styles: ["vg-track-selector{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;display:flex;justify-content:center;width:50px;height:50px;cursor:pointer;color:#fff;line-height:50px}vg-track-selector .container{position:relative;display:flex;flex-grow:1;align-items:center;padding:0;margin:5px}vg-track-selector select.trackSelector{width:50px;padding:5px 8px;border:none;background:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;color:transparent;font-size:16px}vg-track-selector select.trackSelector::-ms-expand{display:none}vg-track-selector select.trackSelector option{color:#000}vg-track-selector .track-selected{position:absolute;width:100%;height:50px;top:-6px;text-align:center;text-transform:uppercase;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;padding-top:2px;pointer-events:none}vg-track-selector .vg-icon-closed_caption:before{width:100%}\n"],
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgTrackSelectorComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'vg-track-selector',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: `
    <div class="container">
      <div
        class="track-selected"
        [class.vg-icon-closed_caption]="!trackSelected"
      >
        {{ trackSelected || '' }}
      </div>
      <select
        class="trackSelector"
        (change)="selectTrack($event.target.value)"
        tabindex="0"
        aria-label="track selector"
        [attr.aria-valuetext]="ariaValue"
      >
        <option
          *ngFor="let track of tracks"
          [value]="track.id"
          [selected]="track.selected === true"
        >
          {{ track.label }}
        </option>
      </select>
    </div>
  `,
      styles: ["vg-track-selector{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;display:flex;justify-content:center;width:50px;height:50px;cursor:pointer;color:#fff;line-height:50px}vg-track-selector .container{position:relative;display:flex;flex-grow:1;align-items:center;padding:0;margin:5px}vg-track-selector select.trackSelector{width:50px;padding:5px 8px;border:none;background:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;color:transparent;font-size:16px}vg-track-selector select.trackSelector::-ms-expand{display:none}vg-track-selector select.trackSelector option{color:#000}vg-track-selector .track-selected{position:absolute;width:100%;height:50px;top:-6px;text-align:center;text-transform:uppercase;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;padding-top:2px;pointer-events:none}vg-track-selector .vg-icon-closed_caption:before{width:100%}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__.VgApiService
    }];
  }, {
    vgFor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

// Workaround until we can use UTC with Angular Date Pipe
class VgUtcPipe {
  transform(value, format) {
    let date = new Date(value);
    let result = format;
    let ss = date.getUTCSeconds();
    let mm = date.getUTCMinutes();
    let hh = date.getUTCHours();
    if (ss < 10) {
      ss = '0' + ss;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    if (hh < 10) {
      hh = '0' + hh;
    }
    result = result.replace(/ss/g, ss);
    result = result.replace(/mm/g, mm);
    result = result.replace(/hh/g, hh);
    return result;
  }
}
/** @nocollapse */
VgUtcPipe.ɵfac = function VgUtcPipe_Factory(t) {
  return new (t || VgUtcPipe)();
};
/** @nocollapse */
VgUtcPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "vgUtc",
  type: VgUtcPipe,
  pure: true
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgUtcPipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
    args: [{
      name: 'vgUtc'
    }]
  }], null, null);
})();
class VgTimeDisplayComponent {
  constructor(ref, API) {
    this.API = API;
    this.vgProperty = 'current';
    this.vgFormat = 'mm:ss';
    this.subscriptions = [];
    this.elem = ref.nativeElement;
  }
  ngOnInit() {
    if (this.API.isPlayerReady) {
      this.onPlayerReady();
    } else {
      this.subscriptions.push(this.API.playerReadyEvent.subscribe(() => this.onPlayerReady()));
    }
  }
  onPlayerReady() {
    this.target = this.API.getMediaById(this.vgFor);
  }
  getTime() {
    let t = 0;
    if (this.target) {
      t = Math.round(this.target.time[this.vgProperty]);
      t = isNaN(t) || this.target.isLive ? 0 : t;
    }
    return t;
  }
  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
/** @nocollapse */
VgTimeDisplayComponent.ɵfac = function VgTimeDisplayComponent_Factory(t) {
  return new (t || VgTimeDisplayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__.VgApiService));
};
/** @nocollapse */
VgTimeDisplayComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: VgTimeDisplayComponent,
  selectors: [["vg-time-display"]],
  inputs: {
    vgFor: "vgFor",
    vgProperty: "vgProperty",
    vgFormat: "vgFormat"
  },
  ngContentSelectors: _c0,
  decls: 3,
  vars: 2,
  consts: [[4, "ngIf"]],
  template: function VgTimeDisplayComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, VgTimeDisplayComponent_span_0_Template, 2, 0, "span", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VgTimeDisplayComponent_span_1_Template, 3, 4, "span", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.target == null ? null : ctx.target.isLive);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.target == null ? null : ctx.target.isLive));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, VgUtcPipe],
  styles: ["vg-time-display{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;display:flex;justify-content:center;height:50px;width:60px;cursor:pointer;color:#fff;line-height:50px;pointer-events:none;font-family:Helvetica Neue,Helvetica,Arial,sans-serif}\n"],
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgTimeDisplayComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'vg-time-display',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: `
    <span *ngIf="target?.isLive">LIVE</span>
    <span *ngIf="!target?.isLive">{{ getTime() | vgUtc: vgFormat }}</span>
    <ng-content></ng-content>
  `,
      styles: ["vg-time-display{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;display:flex;justify-content:center;height:50px;width:60px;cursor:pointer;color:#fff;line-height:50px;pointer-events:none;font-family:Helvetica Neue,Helvetica,Arial,sans-serif}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__.VgApiService
    }];
  }, {
    vgFor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    vgProperty: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    vgFormat: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class VgScrubBarComponent {
  constructor(ref, API, vgControlsHiddenState) {
    this.API = API;
    this.hideScrubBar = false;
    this.vgSlider = true;
    this.isSeeking = false;
    this.wasPlaying = false;
    this.subscriptions = [];
    this.elem = ref.nativeElement;
    this.subscriptions.push(vgControlsHiddenState.isHidden.subscribe(hide => this.onHideScrubBar(hide)));
  }
  ngOnInit() {
    if (this.API.isPlayerReady) {
      this.onPlayerReady();
    } else {
      this.subscriptions.push(this.API.playerReadyEvent.subscribe(() => this.onPlayerReady()));
    }
  }
  onPlayerReady() {
    this.target = this.API.getMediaById(this.vgFor);
  }
  seekStart() {
    if (this.target.canPlay) {
      this.isSeeking = true;
      if (this.target.state === _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__.VgStates.VG_PLAYING) {
        this.wasPlaying = true;
      }
      this.target.pause();
    }
  }
  seekMove(offset) {
    if (this.isSeeking) {
      const percentage = Math.max(Math.min(offset * 100 / this.elem.scrollWidth, 99.9), 0);
      this.target.time.current = percentage * this.target.time.total / 100;
      this.target.seekTime(percentage, true);
    }
  }
  seekEnd(offset) {
    this.isSeeking = false;
    if (this.target.canPlay) {
      if (offset !== false) {
        const percentage = Math.max(Math.min(offset * 100 / this.elem.scrollWidth, 99.9), 0);
        this.target.seekTime(percentage, true);
      }
      if (this.wasPlaying) {
        this.wasPlaying = false;
        this.target.play();
      }
    }
  }
  touchEnd() {
    this.isSeeking = false;
    if (this.wasPlaying) {
      this.wasPlaying = false;
      this.target.play();
    }
  }
  getTouchOffset(event) {
    let offsetLeft = 0;
    let element = event.target;
    while (element) {
      offsetLeft += element.offsetLeft;
      element = element.offsetParent;
    }
    return event.touches[0].pageX - offsetLeft;
  }
  onMouseDownScrubBar($event) {
    if (this.target) {
      if (!this.target.isLive) {
        if (!this.vgSlider) {
          this.seekEnd($event.offsetX);
        } else {
          this.seekStart();
        }
      }
    }
  }
  onMouseMoveScrubBar($event) {
    if (this.target) {
      if (!this.target.isLive && this.vgSlider && this.isSeeking) {
        this.seekMove($event.offsetX);
      }
    }
  }
  onMouseUpScrubBar($event) {
    if (this.target) {
      if (!this.target.isLive && this.vgSlider && this.isSeeking) {
        this.seekEnd($event.offsetX);
      }
    }
  }
  onTouchStartScrubBar(_$event) {
    if (this.target) {
      if (!this.target.isLive) {
        if (!this.vgSlider) {
          this.seekEnd(false);
        } else {
          this.seekStart();
        }
      }
    }
  }
  onTouchMoveScrubBar($event) {
    if (this.target) {
      if (!this.target.isLive && this.vgSlider && this.isSeeking) {
        this.seekMove(this.getTouchOffset($event));
      }
    }
  }
  // @ts-ignore
  onTouchCancelScrubBar(_$event) {
    if (this.target) {
      if (!this.target.isLive && this.vgSlider && this.isSeeking) {
        this.touchEnd();
      }
    }
  }
  // @ts-ignore
  onTouchEndScrubBar(_$event) {
    if (this.target) {
      if (!this.target.isLive && this.vgSlider && this.isSeeking) {
        this.touchEnd();
      }
    }
  }
  arrowAdjustVolume(event) {
    if (this.target) {
      if (event.keyCode === 38 || event.keyCode === 39) {
        event.preventDefault();
        this.target.seekTime((this.target.time.current + 5000) / 1000, false);
      } else if (event.keyCode === 37 || event.keyCode === 40) {
        event.preventDefault();
        this.target.seekTime((this.target.time.current - 5000) / 1000, false);
      }
    }
  }
  getPercentage() {
    return this.target ? Math.round(this.target.time.current * 100 / this.target.time.total) + '%' : '0%';
  }
  onHideScrubBar(hide) {
    this.hideScrubBar = hide;
  }
  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
/** @nocollapse */
VgScrubBarComponent.ɵfac = function VgScrubBarComponent_Factory(t) {
  return new (t || VgScrubBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__.VgApiService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__.VgControlsHiddenService));
};
/** @nocollapse */
VgScrubBarComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: VgScrubBarComponent,
  selectors: [["vg-scrub-bar"]],
  hostVars: 2,
  hostBindings: function VgScrubBarComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function VgScrubBarComponent_mousedown_HostBindingHandler($event) {
        return ctx.onMouseDownScrubBar($event);
      })("mousemove", function VgScrubBarComponent_mousemove_HostBindingHandler($event) {
        return ctx.onMouseMoveScrubBar($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("mouseup", function VgScrubBarComponent_mouseup_HostBindingHandler($event) {
        return ctx.onMouseUpScrubBar($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("touchstart", function VgScrubBarComponent_touchstart_HostBindingHandler($event) {
        return ctx.onTouchStartScrubBar($event);
      })("touchmove", function VgScrubBarComponent_touchmove_HostBindingHandler($event) {
        return ctx.onTouchMoveScrubBar($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("touchcancel", function VgScrubBarComponent_touchcancel_HostBindingHandler($event) {
        return ctx.onTouchCancelScrubBar($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("touchend", function VgScrubBarComponent_touchend_HostBindingHandler($event) {
        return ctx.onTouchEndScrubBar($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("keydown", function VgScrubBarComponent_keydown_HostBindingHandler($event) {
        return ctx.arrowAdjustVolume($event);
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide", ctx.hideScrubBar);
    }
  },
  inputs: {
    vgFor: "vgFor",
    vgSlider: "vgSlider"
  },
  ngContentSelectors: _c0,
  decls: 2,
  vars: 2,
  consts: [["tabindex", "0", "role", "slider", "aria-label", "scrub bar", "aria-level", "polite", "aria-valuemin", "0", "aria-valuemax", "100", 1, "scrubBar"]],
  template: function VgScrubBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuenow", ctx.getPercentage())("aria-valuetext", ctx.getPercentage());
    }
  },
  styles: ["vg-scrub-bar{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;position:absolute;width:100%;height:5px;bottom:50px;margin:0;cursor:pointer;align-items:center;background:rgba(0,0,0,.75);z-index:250;transition:bottom 1s,opacity .5s}vg-scrub-bar .scrubBar{position:relative;display:flex;flex-grow:1;align-items:center;height:100%}vg-controls vg-scrub-bar{position:relative;bottom:0;background:transparent;height:50px;flex-grow:1;flex-basis:0;margin:0 10px;transition:initial}vg-scrub-bar.hide{bottom:0;opacity:0}vg-controls vg-scrub-bar.hide{bottom:initial;opacity:initial}\n"],
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgScrubBarComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'vg-scrub-bar',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: `
    <div
      class="scrubBar"
      tabindex="0"
      role="slider"
      aria-label="scrub bar"
      aria-level="polite"
      [attr.aria-valuenow]="getPercentage()"
      aria-valuemin="0"
      aria-valuemax="100"
      [attr.aria-valuetext]="getPercentage()"
    >
      <ng-content></ng-content>
    </div>
  `,
      styles: ["vg-scrub-bar{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;position:absolute;width:100%;height:5px;bottom:50px;margin:0;cursor:pointer;align-items:center;background:rgba(0,0,0,.75);z-index:250;transition:bottom 1s,opacity .5s}vg-scrub-bar .scrubBar{position:relative;display:flex;flex-grow:1;align-items:center;height:100%}vg-controls vg-scrub-bar{position:relative;bottom:0;background:transparent;height:50px;flex-grow:1;flex-basis:0;margin:0 10px;transition:initial}vg-scrub-bar.hide{bottom:0;opacity:0}vg-controls vg-scrub-bar.hide{bottom:initial;opacity:initial}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__.VgApiService
    }, {
      type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__.VgControlsHiddenService
    }];
  }, {
    hideScrubBar: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.hide']
    }],
    vgFor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    vgSlider: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onMouseDownScrubBar: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['mousedown', ['$event']]
    }],
    onMouseMoveScrubBar: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['document:mousemove', ['$event']]
    }],
    onMouseUpScrubBar: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['document:mouseup', ['$event']]
    }],
    onTouchStartScrubBar: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['touchstart', ['$event']]
    }],
    onTouchMoveScrubBar: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['document:touchmove', ['$event']]
    }],
    onTouchCancelScrubBar: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['document:touchcancel', ['$event']]
    }],
    onTouchEndScrubBar: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['document:touchend', ['$event']]
    }],
    arrowAdjustVolume: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown', ['$event']]
    }]
  });
})();
class VgQualitySelectorComponent {
  constructor(ref, API) {
    this.API = API;
    this.onBitrateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.subscriptions = [];
    this.elem = ref.nativeElement;
  }
  ngOnInit() {}
  ngOnChanges(changes) {
    if (changes.bitrates.currentValue && changes.bitrates.currentValue.length) {
      this.bitrates.forEach(item => item.label = item.label || Math.round(item.bitrate / 1000).toString());
    }
  }
  selectBitrate(index) {
    this.bitrateSelected = this.bitrates[index];
    this.onBitrateChange.emit(this.bitrates[index]);
  }
  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
/** @nocollapse */
VgQualitySelectorComponent.ɵfac = function VgQualitySelectorComponent_Factory(t) {
  return new (t || VgQualitySelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__.VgApiService));
};
/** @nocollapse */
VgQualitySelectorComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: VgQualitySelectorComponent,
  selectors: [["vg-quality-selector"]],
  inputs: {
    bitrates: "bitrates"
  },
  outputs: {
    onBitrateChange: "onBitrateChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 5,
  vars: 5,
  consts: [[1, "container"], [1, "quality-selected"], ["tabindex", "0", "aria-label", "quality selector", 1, "quality-selector", 3, "change"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [3, "value", "selected"]],
  template: function VgQualitySelectorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function VgQualitySelectorComponent_Template_select_change_3_listener($event) {
        return ctx.selectBitrate($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, VgQualitySelectorComponent_option_4_Template, 2, 3, "option", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("vg-icon-hd", !ctx.bitrateSelected);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.bitrateSelected == null ? null : ctx.bitrateSelected.label, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuetext", ctx.ariaValue);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bitrates);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf],
  styles: ["vg-quality-selector{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;display:flex;justify-content:center;width:50px;height:50px;cursor:pointer;color:#fff;line-height:50px}vg-quality-selector .container{position:relative;display:flex;flex-grow:1;align-items:center;padding:0;margin:5px}vg-quality-selector select.quality-selector{width:50px;padding:5px 8px;border:none;background:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;color:transparent;font-size:16px}vg-quality-selector select.quality-selector::-ms-expand{display:none}vg-quality-selector select.quality-selector option{color:#000}vg-quality-selector .quality-selected{position:absolute;width:100%;height:50px;top:-6px;text-align:center;text-transform:uppercase;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;padding-top:2px;pointer-events:none}vg-quality-selector .vg-icon-closed_caption:before{width:100%}\n"],
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgQualitySelectorComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'vg-quality-selector',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: `
    <div class="container">
      <div class="quality-selected" [class.vg-icon-hd]="!bitrateSelected">
        {{ bitrateSelected?.label }}
      </div>
      <select
        class="quality-selector"
        (change)="selectBitrate($event.target.value)"
        tabindex="0"
        aria-label="quality selector"
        [attr.aria-valuetext]="ariaValue"
      >
        <option
          *ngFor="let bitrate of bitrates"
          [value]="bitrate.qualityIndex"
          [selected]="bitrate.qualityIndex === bitrateSelected?.qualityIndex"
        >
          {{ bitrate.label }}
        </option>
      </select>
    </div>
  `,
      styles: ["vg-quality-selector{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;display:flex;justify-content:center;width:50px;height:50px;cursor:pointer;color:#fff;line-height:50px}vg-quality-selector .container{position:relative;display:flex;flex-grow:1;align-items:center;padding:0;margin:5px}vg-quality-selector select.quality-selector{width:50px;padding:5px 8px;border:none;background:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;color:transparent;font-size:16px}vg-quality-selector select.quality-selector::-ms-expand{display:none}vg-quality-selector select.quality-selector option{color:#000}vg-quality-selector .quality-selected{position:absolute;width:100%;height:50px;top:-6px;text-align:center;text-transform:uppercase;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;padding-top:2px;pointer-events:none}vg-quality-selector .vg-icon-closed_caption:before{width:100%}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__.VgApiService
    }];
  }, {
    bitrates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onBitrateChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
class VgPlaybackButtonComponent {
  constructor(ref, API, cdr) {
    this.API = API;
    this.cdr = cdr;
    this.subscriptions = [];
    this.ariaValue = 1;
    this.elem = ref.nativeElement;
    this.playbackValues = ['0.5', '1.0', '1.5', '2.0'];
    this.playbackIndex = 1;
  }
  ngOnInit() {
    if (this.API.isPlayerReady) {
      this.onPlayerReady();
    } else {
      this.subscriptions.push(this.API.playerReadyEvent.subscribe(() => this.onPlayerReady()));
    }
  }
  onPlayerReady() {
    this.target = this.API.getMediaById(this.vgFor);
  }
  onClick() {
    this.updatePlaybackSpeed();
  }
  onKeyDown(event) {
    // On press Enter (13) or Space (32)
    if (event.keyCode === 13 || event.keyCode === 32) {
      event.preventDefault();
      this.updatePlaybackSpeed();
    }
  }
  updatePlaybackSpeed() {
    this.playbackValues.forEach((playbackValue, index) => {
      if (playbackValue.length === 1) {
        this.playbackValues[index] = playbackValue + '.0';
      }
    });
    this.playbackIndex = ++this.playbackIndex % this.playbackValues.length;
    if (this.target instanceof _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__.VgApiService) {
      this.target.playbackRate = this.playbackValues[this.playbackIndex];
    } else {
      this.target.playbackRate[this.vgFor] = this.playbackValues[this.playbackIndex];
    }
    this.detectChanges();
  }
  getPlaybackRate() {
    this.ariaValue = this.target ? this.target.playbackRate : 1.0;
    return this.ariaValue;
  }
  detectChanges() {
    try {
      this.cdr.detectChanges();
    } catch (e) {
      console.warn(e);
    }
  }
  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
/** @nocollapse */
VgPlaybackButtonComponent.ɵfac = function VgPlaybackButtonComponent_Factory(t) {
  return new (t || VgPlaybackButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__.VgApiService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};
/** @nocollapse */
VgPlaybackButtonComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: VgPlaybackButtonComponent,
  selectors: [["vg-playback-button"]],
  hostBindings: function VgPlaybackButtonComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VgPlaybackButtonComponent_click_HostBindingHandler() {
        return ctx.onClick();
      })("keydown", function VgPlaybackButtonComponent_keydown_HostBindingHandler($event) {
        return ctx.onKeyDown($event);
      });
    }
  },
  inputs: {
    vgFor: "vgFor",
    playbackValues: "playbackValues"
  },
  decls: 2,
  vars: 2,
  consts: [["tabindex", "0", "role", "button", "aria-label", "playback speed button", 1, "button"]],
  template: function VgPlaybackButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuetext", ctx.ariaValue);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.getPlaybackRate(), "x ");
    }
  },
  styles: ["vg-playback-button{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;display:flex;justify-content:center;height:50px;width:50px;cursor:pointer;color:#fff;line-height:50px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif}vg-playback-button .button{display:flex;align-items:center;justify-content:center;width:50px}\n"],
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgPlaybackButtonComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'vg-playback-button',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: ` <span
    class="button"
    tabindex="0"
    role="button"
    aria-label="playback speed button"
    [attr.aria-valuetext]="ariaValue"
  >
    {{ getPlaybackRate() }}x
  </span>`,
      styles: ["vg-playback-button{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;display:flex;justify-content:center;height:50px;width:50px;cursor:pointer;color:#fff;line-height:50px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif}vg-playback-button .button{display:flex;align-items:center;justify-content:center;width:50px}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__.VgApiService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    vgFor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    playbackValues: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['click']
    }],
    onKeyDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown', ['$event']]
    }]
  });
})();
class VgPlayPauseComponent {
  constructor(ref, API) {
    this.API = API;
    this.subscriptions = [];
    this.ariaValue = _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__.VgStates.VG_PAUSED;
    this.elem = ref.nativeElement;
  }
  ngOnInit() {
    if (this.API.isPlayerReady) {
      this.onPlayerReady();
    } else {
      this.subscriptions.push(this.API.playerReadyEvent.subscribe(() => this.onPlayerReady()));
    }
  }
  onPlayerReady() {
    this.target = this.API.getMediaById(this.vgFor);
  }
  onClick() {
    this.playPause();
  }
  onKeyDown(event) {
    // On press Enter (13) or Space (32)
    if (event.keyCode === 13 || event.keyCode === 32) {
      event.preventDefault();
      this.playPause();
    }
  }
  playPause() {
    const state = this.getState();
    switch (state) {
      case _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__.VgStates.VG_PLAYING:
        this.target.pause();
        break;
      case _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__.VgStates.VG_PAUSED:
      case _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__.VgStates.VG_ENDED:
        this.target.play();
        break;
    }
  }
  getState() {
    this.ariaValue = this.target ? this.target.state : _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__.VgStates.VG_PAUSED;
    return this.ariaValue;
  }
  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
/** @nocollapse */
VgPlayPauseComponent.ɵfac = function VgPlayPauseComponent_Factory(t) {
  return new (t || VgPlayPauseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__.VgApiService));
};
/** @nocollapse */
VgPlayPauseComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: VgPlayPauseComponent,
  selectors: [["vg-play-pause"]],
  hostBindings: function VgPlayPauseComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VgPlayPauseComponent_click_HostBindingHandler() {
        return ctx.onClick();
      })("keydown", function VgPlayPauseComponent_keydown_HostBindingHandler($event) {
        return ctx.onKeyDown($event);
      });
    }
  },
  inputs: {
    vgFor: "vgFor"
  },
  decls: 1,
  vars: 6,
  consts: [["tabindex", "0", "role", "button", 1, "icon"]],
  template: function VgPlayPauseComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("vg-icon-pause", ctx.getState() === "playing")("vg-icon-play_arrow", ctx.getState() === "paused" || ctx.getState() === "ended");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.getState() === "paused" ? "play" : "pause")("aria-valuetext", ctx.ariaValue);
    }
  },
  styles: ["vg-play-pause{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;display:flex;justify-content:center;height:50px;width:50px;cursor:pointer;color:#fff;line-height:50px}vg-play-pause .icon{pointer-events:none}\n"],
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgPlayPauseComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'vg-play-pause',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: ` <div
    class="icon"
    [class.vg-icon-pause]="getState() === 'playing'"
    [class.vg-icon-play_arrow]="
      getState() === 'paused' || getState() === 'ended'
    "
    tabindex="0"
    role="button"
    [attr.aria-label]="getState() === 'paused' ? 'play' : 'pause'"
    [attr.aria-valuetext]="ariaValue"
  ></div>`,
      styles: ["vg-play-pause{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;display:flex;justify-content:center;height:50px;width:50px;cursor:pointer;color:#fff;line-height:50px}vg-play-pause .icon{pointer-events:none}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__.VgApiService
    }];
  }, {
    vgFor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['click']
    }],
    onKeyDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown', ['$event']]
    }]
  });
})();
class VgMuteComponent {
  constructor(ref, API) {
    this.API = API;
    this.subscriptions = [];
    this.ariaValue = 'unmuted';
    this.elem = ref.nativeElement;
  }
  ngOnInit() {
    if (this.API.isPlayerReady) {
      this.onPlayerReady();
    } else {
      this.subscriptions.push(this.API.playerReadyEvent.subscribe(() => this.onPlayerReady()));
    }
  }
  onPlayerReady() {
    this.target = this.API.getMediaById(this.vgFor);
    this.currentVolume = this.target.volume;
  }
  onClick() {
    this.changeMuteState();
  }
  onKeyDown(event) {
    // On press Enter (13) or Space (32)
    if (event.keyCode === 13 || event.keyCode === 32) {
      event.preventDefault();
      this.changeMuteState();
    }
  }
  changeMuteState() {
    const volume = this.getVolume();
    if (volume === 0) {
      if (this.target.volume === 0 && this.currentVolume === 0) {
        this.currentVolume = 1;
      }
      this.target.volume = this.currentVolume;
    } else {
      this.currentVolume = volume;
      this.target.volume = 0;
    }
  }
  getVolume() {
    const volume = this.target ? this.target.volume : 0;
    this.ariaValue = volume ? 'unmuted' : 'muted';
    return volume;
  }
  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
/** @nocollapse */
VgMuteComponent.ɵfac = function VgMuteComponent_Factory(t) {
  return new (t || VgMuteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__.VgApiService));
};
/** @nocollapse */
VgMuteComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: VgMuteComponent,
  selectors: [["vg-mute"]],
  hostBindings: function VgMuteComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VgMuteComponent_click_HostBindingHandler() {
        return ctx.onClick();
      })("keydown", function VgMuteComponent_keydown_HostBindingHandler($event) {
        return ctx.onKeyDown($event);
      });
    }
  },
  inputs: {
    vgFor: "vgFor"
  },
  decls: 1,
  vars: 9,
  consts: [["tabindex", "0", "role", "button", "aria-label", "mute button", 1, "icon"]],
  template: function VgMuteComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("vg-icon-volume_up", ctx.getVolume() >= 0.75)("vg-icon-volume_down", ctx.getVolume() >= 0.25 && ctx.getVolume() < 0.75)("vg-icon-volume_mute", ctx.getVolume() > 0 && ctx.getVolume() < 0.25)("vg-icon-volume_off", ctx.getVolume() === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuetext", ctx.ariaValue);
    }
  },
  styles: ["vg-mute{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;display:flex;justify-content:center;height:50px;width:50px;cursor:pointer;color:#fff;line-height:50px}vg-mute .icon{pointer-events:none}\n"],
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgMuteComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'vg-mute',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: ` <div
    class="icon"
    [class.vg-icon-volume_up]="getVolume() >= 0.75"
    [class.vg-icon-volume_down]="getVolume() >= 0.25 && getVolume() < 0.75"
    [class.vg-icon-volume_mute]="getVolume() > 0 && getVolume() < 0.25"
    [class.vg-icon-volume_off]="getVolume() === 0"
    tabindex="0"
    role="button"
    aria-label="mute button"
    [attr.aria-valuetext]="ariaValue"
  ></div>`,
      styles: ["vg-mute{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;display:flex;justify-content:center;height:50px;width:50px;cursor:pointer;color:#fff;line-height:50px}vg-mute .icon{pointer-events:none}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__.VgApiService
    }];
  }, {
    vgFor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['click']
    }],
    onKeyDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown', ['$event']]
    }]
  });
})();
class VgFullscreenComponent {
  constructor(ref, API, fsAPI) {
    this.API = API;
    this.fsAPI = fsAPI;
    this.isFullscreen = false;
    this.subscriptions = [];
    this.ariaValue = 'normal mode';
    this.elem = ref.nativeElement;
    this.subscriptions.push(this.fsAPI.onChangeFullscreen.subscribe(this.onChangeFullscreen.bind(this)));
  }
  ngOnInit() {
    if (this.API.isPlayerReady) {
      this.onPlayerReady();
    } else {
      this.subscriptions.push(this.API.playerReadyEvent.subscribe(() => this.onPlayerReady()));
    }
  }
  onPlayerReady() {
    this.target = this.API.getMediaById(this.vgFor);
  }
  onChangeFullscreen(fsState) {
    this.ariaValue = fsState ? 'fullscreen mode' : 'normal mode';
    this.isFullscreen = fsState;
  }
  onClick() {
    this.changeFullscreenState();
  }
  onKeyDown(event) {
    // On press Enter (13) or Space (32)
    if (event.keyCode === 13 || event.keyCode === 32) {
      event.preventDefault();
      this.changeFullscreenState();
    }
  }
  changeFullscreenState() {
    let element = this.target;
    if (this.target instanceof _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__.VgApiService) {
      element = null;
    }
    this.fsAPI.toggleFullscreen(element);
  }
  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
/** @nocollapse */
VgFullscreenComponent.ɵfac = function VgFullscreenComponent_Factory(t) {
  return new (t || VgFullscreenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__.VgApiService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__.VgFullscreenApiService));
};
/** @nocollapse */
VgFullscreenComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: VgFullscreenComponent,
  selectors: [["vg-fullscreen"]],
  hostBindings: function VgFullscreenComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VgFullscreenComponent_click_HostBindingHandler() {
        return ctx.onClick();
      })("keydown", function VgFullscreenComponent_keydown_HostBindingHandler($event) {
        return ctx.onKeyDown($event);
      });
    }
  },
  decls: 1,
  vars: 5,
  consts: [["tabindex", "0", "role", "button", "aria-label", "fullscreen button", 1, "icon"]],
  template: function VgFullscreenComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("vg-icon-fullscreen", !ctx.isFullscreen)("vg-icon-fullscreen_exit", ctx.isFullscreen);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuetext", ctx.ariaValue);
    }
  },
  styles: ["vg-fullscreen{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;display:flex;justify-content:center;height:50px;width:50px;cursor:pointer;color:#fff;line-height:50px}vg-fullscreen .icon{pointer-events:none}\n"],
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgFullscreenComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'vg-fullscreen',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: ` <div
    class="icon"
    [class.vg-icon-fullscreen]="!isFullscreen"
    [class.vg-icon-fullscreen_exit]="isFullscreen"
    tabindex="0"
    role="button"
    aria-label="fullscreen button"
    [attr.aria-valuetext]="ariaValue"
  ></div>`,
      styles: ["vg-fullscreen{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;display:flex;justify-content:center;height:50px;width:50px;cursor:pointer;color:#fff;line-height:50px}vg-fullscreen .icon{pointer-events:none}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__.VgApiService
    }, {
      type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__.VgFullscreenApiService
    }];
  }, {
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['click']
    }],
    onKeyDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown', ['$event']]
    }]
  });
})();
class VgScrubBarBufferingTimeComponent {
  constructor(ref, API) {
    this.API = API;
    this.subscriptions = [];
    this.elem = ref.nativeElement;
  }
  ngOnInit() {
    if (this.API.isPlayerReady) {
      this.onPlayerReady();
    } else {
      this.subscriptions.push(this.API.playerReadyEvent.subscribe(() => this.onPlayerReady()));
    }
  }
  onPlayerReady() {
    this.target = this.API.getMediaById(this.vgFor);
  }
  getBufferTime() {
    let bufferTime = '0%';
    if (this.target?.buffered?.length) {
      if (this.target.time.total === 0) {
        bufferTime = '0%';
      } else {
        bufferTime = this.target.buffer.end / this.target.time.total * 100 + '%';
      }
    }
    return bufferTime;
  }
  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
/** @nocollapse */
VgScrubBarBufferingTimeComponent.ɵfac = function VgScrubBarBufferingTimeComponent_Factory(t) {
  return new (t || VgScrubBarBufferingTimeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__.VgApiService));
};
/** @nocollapse */
VgScrubBarBufferingTimeComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: VgScrubBarBufferingTimeComponent,
  selectors: [["vg-scrub-bar-buffering-time"]],
  inputs: {
    vgFor: "vgFor"
  },
  decls: 1,
  vars: 2,
  consts: [[1, "background"]],
  template: function VgScrubBarBufferingTimeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.getBufferTime());
    }
  },
  styles: ["vg-scrub-bar-buffering-time{display:flex;width:100%;height:5px;pointer-events:none;position:absolute}vg-scrub-bar-buffering-time .background{background-color:#ffffff4d}vg-controls vg-scrub-bar-buffering-time{position:absolute;top:calc(50% - 3px)}vg-controls vg-scrub-bar-buffering-time .background{border-radius:2px}\n"],
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgScrubBarBufferingTimeComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'vg-scrub-bar-buffering-time',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: `<div class="background" [style.width]="getBufferTime()"></div>`,
      styles: ["vg-scrub-bar-buffering-time{display:flex;width:100%;height:5px;pointer-events:none;position:absolute}vg-scrub-bar-buffering-time .background{background-color:#ffffff4d}vg-controls vg-scrub-bar-buffering-time{position:absolute;top:calc(50% - 3px)}vg-controls vg-scrub-bar-buffering-time .background{border-radius:2px}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__.VgApiService
    }];
  }, {
    vgFor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

// tslint:disable-next-line: no-conflicting-lifecycle
class VgScrubBarCuePointsComponent {
  constructor(ref, API) {
    this.API = API;
    this.onLoadedMetadataCalled = false;
    this.cuePoints = [];
    this.subscriptions = [];
    this.totalCues = 0;
    this.elem = ref.nativeElement;
  }
  ngOnInit() {
    if (this.API.isPlayerReady) {
      this.onPlayerReady();
    } else {
      this.subscriptions.push(this.API.playerReadyEvent.subscribe(() => this.onPlayerReady()));
    }
  }
  onPlayerReady() {
    this.target = this.API.getMediaById(this.vgFor);
    const onTimeUpdate = this.target.subscriptions.loadedMetadata;
    this.subscriptions.push(onTimeUpdate.subscribe(this.onLoadedMetadata.bind(this)));
    if (this.onLoadedMetadataCalled) {
      this.onLoadedMetadata();
    }
  }
  onLoadedMetadata() {
    if (this.vgCuePoints) {
      // We need to transform the TextTrackCueList to Array or it doesn't work on IE11/Edge.
      // See: https://github.com/videogular/videogular2/issues/369
      this.cuePoints = [];
      for (let i = 0, l = this.vgCuePoints.length; i < l; i++) {
        const end = this.vgCuePoints[i].endTime >= 0 ? this.vgCuePoints[i].endTime : this.vgCuePoints[i].startTime + 1;
        const cuePointDuration = (end - this.vgCuePoints[i].startTime) * 1000;
        let position = '0';
        let percentWidth = '0';
        if (typeof cuePointDuration === 'number' && this.target.time.total) {
          percentWidth = cuePointDuration * 100 / this.target.time.total + '%';
          position = this.vgCuePoints[i].startTime * 100 / Math.round(this.target.time.total / 1000) + '%';
        }
        this.vgCuePoints[i].$$style = {
          width: percentWidth,
          left: position
        };
        this.cuePoints.push(this.vgCuePoints[i]);
      }
    }
  }
  updateCuePoints() {
    if (!this.target) {
      this.onLoadedMetadataCalled = true;
      return;
    }
    this.onLoadedMetadata();
  }
  ngOnChanges(changes) {
    if (changes.vgCuePoints.currentValue) {
      this.updateCuePoints();
    }
  }
  ngDoCheck() {
    if (this.vgCuePoints) {
      const changes = this.totalCues !== this.vgCuePoints.length;
      if (changes) {
        this.totalCues = this.vgCuePoints.length;
        this.updateCuePoints();
      }
    }
  }
  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
/** @nocollapse */
VgScrubBarCuePointsComponent.ɵfac = function VgScrubBarCuePointsComponent_Factory(t) {
  return new (t || VgScrubBarCuePointsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__.VgApiService));
};
/** @nocollapse */
VgScrubBarCuePointsComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: VgScrubBarCuePointsComponent,
  selectors: [["vg-scrub-bar-cue-points"]],
  inputs: {
    vgCuePoints: "vgCuePoints",
    vgFor: "vgFor"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 2,
  vars: 1,
  consts: [[1, "cue-point-container"], ["class", "cue-point", 3, "width", "left", 4, "ngFor", "ngForOf"], [1, "cue-point"]],
  template: function VgScrubBarCuePointsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VgScrubBarCuePointsComponent_span_1_Template, 1, 4, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cuePoints);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf],
  styles: ["vg-scrub-bar-cue-points{display:flex;width:100%;height:5px;pointer-events:none;position:absolute}vg-scrub-bar-cue-points .cue-point-container .cue-point{position:absolute;height:5px;background-color:#ffcc00b3}vg-controls vg-scrub-bar-cue-points{position:absolute;top:calc(50% - 3px)}\n"],
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgScrubBarCuePointsComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'vg-scrub-bar-cue-points',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: `
    <div class="cue-point-container">
      <span
        *ngFor="let cp of cuePoints"
        [style.width]="cp.$$style?.width"
        [style.left]="cp.$$style?.left"
        class="cue-point"
      ></span>
    </div>
  `,
      styles: ["vg-scrub-bar-cue-points{display:flex;width:100%;height:5px;pointer-events:none;position:absolute}vg-scrub-bar-cue-points .cue-point-container .cue-point{position:absolute;height:5px;background-color:#ffcc00b3}vg-controls vg-scrub-bar-cue-points{position:absolute;top:calc(50% - 3px)}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__.VgApiService
    }];
  }, {
    vgCuePoints: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    vgFor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class VgScrubBarCurrentTimeComponent {
  constructor(ref, API) {
    this.API = API;
    this.vgSlider = false;
    this.subscriptions = [];
    this.elem = ref.nativeElement;
  }
  ngOnInit() {
    if (this.API.isPlayerReady) {
      this.onPlayerReady();
    } else {
      this.subscriptions.push(this.API.playerReadyEvent.subscribe(() => this.onPlayerReady()));
    }
  }
  onPlayerReady() {
    this.target = this.API.getMediaById(this.vgFor);
  }
  getPercentage() {
    return this.target ? Math.round(this.target.time.current * 100 / this.target.time.total) + '%' : '0%';
  }
  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
/** @nocollapse */
VgScrubBarCurrentTimeComponent.ɵfac = function VgScrubBarCurrentTimeComponent_Factory(t) {
  return new (t || VgScrubBarCurrentTimeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__.VgApiService));
};
/** @nocollapse */
VgScrubBarCurrentTimeComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: VgScrubBarCurrentTimeComponent,
  selectors: [["vg-scrub-bar-current-time"]],
  inputs: {
    vgFor: "vgFor",
    vgSlider: "vgSlider"
  },
  decls: 2,
  vars: 3,
  consts: [[1, "background"], ["class", "slider", 4, "ngIf"], [1, "slider"]],
  template: function VgScrubBarCurrentTimeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VgScrubBarCurrentTimeComponent_span_1_Template, 1, 0, "span", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.getPercentage());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.vgSlider);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
  styles: ["vg-scrub-bar-current-time{display:flex;width:100%;height:5px;pointer-events:none;position:absolute}vg-scrub-bar-current-time .background{background-color:#fff}vg-controls vg-scrub-bar-current-time{position:absolute;top:calc(50% - 3px);border-radius:2px}vg-controls vg-scrub-bar-current-time .background{border:1px solid white;border-radius:2px}vg-scrub-bar-current-time .slider{background:white;height:15px;width:15px;border-radius:50%;box-shadow:0 0 10px #000;margin-top:-5px;margin-left:-10px}\n"],
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgScrubBarCurrentTimeComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'vg-scrub-bar-current-time',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: `<div class="background" [style.width]="getPercentage()"></div>
    <span class="slider" *ngIf="vgSlider"></span>`,
      styles: ["vg-scrub-bar-current-time{display:flex;width:100%;height:5px;pointer-events:none;position:absolute}vg-scrub-bar-current-time .background{background-color:#fff}vg-controls vg-scrub-bar-current-time{position:absolute;top:calc(50% - 3px);border-radius:2px}vg-controls vg-scrub-bar-current-time .background{border:1px solid white;border-radius:2px}vg-scrub-bar-current-time .slider{background:white;height:15px;width:15px;border-radius:50%;box-shadow:0 0 10px #000;margin-top:-5px;margin-left:-10px}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__.VgApiService
    }];
  }, {
    vgFor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    vgSlider: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
const components = [VgControlsComponent, VgVolumeComponent, VgTrackSelectorComponent, VgTimeDisplayComponent, VgScrubBarComponent, VgQualitySelectorComponent, VgPlaybackButtonComponent, VgPlayPauseComponent, VgMuteComponent, VgFullscreenComponent, VgUtcPipe, VgScrubBarBufferingTimeComponent, VgScrubBarCuePointsComponent, VgScrubBarCurrentTimeComponent];
class VgControlsModule {}
/** @nocollapse */
VgControlsModule.ɵfac = function VgControlsModule_Factory(t) {
  return new (t || VgControlsModule)();
};
/** @nocollapse */
VgControlsModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: VgControlsModule
});
/** @nocollapse */
VgControlsModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__.VgCoreModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgControlsModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__.VgCoreModule],
      declarations: [...components],
      exports: [...components]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=videogular-ngx-videogular-controls.mjs.map

/***/ }),

/***/ 49197:
/*!*********************************************************************************************!*\
  !*** ./node_modules/@videogular/ngx-videogular/fesm2020/videogular-ngx-videogular-core.mjs ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VgApiService": () => (/* binding */ VgApiService),
/* harmony export */   "VgControlsHiddenService": () => (/* binding */ VgControlsHiddenService),
/* harmony export */   "VgCoreModule": () => (/* binding */ VgCoreModule),
/* harmony export */   "VgCuePointsDirective": () => (/* binding */ VgCuePointsDirective),
/* harmony export */   "VgEvents": () => (/* binding */ VgEvents),
/* harmony export */   "VgFullscreenApiService": () => (/* binding */ VgFullscreenApiService),
/* harmony export */   "VgMediaDirective": () => (/* binding */ VgMediaDirective),
/* harmony export */   "VgMediaElement": () => (/* binding */ VgMediaElement),
/* harmony export */   "VgPlayerComponent": () => (/* binding */ VgPlayerComponent),
/* harmony export */   "VgStates": () => (/* binding */ VgStates),
/* harmony export */   "VgUtilsService": () => (/* binding */ VgUtilsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 23280);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 90833);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 26562);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 78947);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 50635);





const _c0 = ["*"];
class VgStates {}
VgStates.VG_ENDED = 'ended';
VgStates.VG_PAUSED = 'paused';
VgStates.VG_PLAYING = 'playing';
VgStates.VG_LOADING = 'waiting';
/** @nocollapse */
VgStates.ɵfac = function VgStates_Factory(t) {
  return new (t || VgStates)();
};
/** @nocollapse */
VgStates.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: VgStates,
  factory: VgStates.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgStates, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
class VgApiService {
  constructor() {
    this.medias = {}; // TODO: refactor to Set<IPlayable>
    this.playerReadyEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(true);
    this.isPlayerReady = false;
  }
  onPlayerReady(fsAPI) {
    this.fsAPI = fsAPI;
    this.isPlayerReady = true;
    this.playerReadyEvent.emit(this);
  }
  getDefaultMedia() {
    for (const item in this.medias) {
      if (this.medias[item]) {
        return this.medias[item];
      }
    }
  }
  getMasterMedia() {
    let master;
    for (const id in this.medias) {
      if (this.medias[id].vgMaster === 'true' || this.medias[id].vgMaster === true) {
        master = this.medias[id];
        break;
      }
    }
    return master || this.getDefaultMedia();
  }
  isMasterDefined() {
    let result = false;
    for (const id in this.medias) {
      if (this.medias[id].vgMaster === 'true' || this.medias[id].vgMaster === true) {
        result = true;
        break;
      }
    }
    return result;
  }
  getMediaById(id = null) {
    let media = this.medias[id];
    if (!id || id === '*') {
      media = this;
    }
    return media;
  }
  play() {
    for (const id in this.medias) {
      if (this.medias[id]) {
        this.medias[id].play();
      }
    }
  }
  pause() {
    for (const id in this.medias) {
      if (this.medias[id]) {
        this.medias[id].pause();
      }
    }
  }
  get duration() {
    return this.$$getAllProperties('duration');
  }
  set currentTime(seconds) {
    this.$$setAllProperties('currentTime', seconds);
  }
  get currentTime() {
    return this.$$getAllProperties('currentTime');
  }
  set state(state) {
    this.$$setAllProperties('state', state);
  }
  get state() {
    return this.$$getAllProperties('state');
  }
  set volume(volume) {
    this.$$setAllProperties('volume', volume);
  }
  get volume() {
    return this.$$getAllProperties('volume');
  }
  set playbackRate(rate) {
    this.$$setAllProperties('playbackRate', rate);
  }
  get playbackRate() {
    return this.$$getAllProperties('playbackRate');
  }
  get canPlay() {
    return this.$$getAllProperties('canPlay');
  }
  get canPlayThrough() {
    return this.$$getAllProperties('canPlayThrough');
  }
  get isMetadataLoaded() {
    return this.$$getAllProperties('isMetadataLoaded');
  }
  get isWaiting() {
    return this.$$getAllProperties('isWaiting');
  }
  get isCompleted() {
    return this.$$getAllProperties('isCompleted');
  }
  get isLive() {
    return this.$$getAllProperties('isLive');
  }
  get isMaster() {
    return this.$$getAllProperties('isMaster');
  }
  get time() {
    return this.$$getAllProperties('time');
  }
  get buffer() {
    return this.$$getAllProperties('buffer');
  }
  get buffered() {
    return this.$$getAllProperties('buffered');
  }
  get subscriptions() {
    return this.$$getAllProperties('subscriptions');
  }
  get textTracks() {
    return this.$$getAllProperties('textTracks');
  }
  seekTime(value, byPercent = false) {
    for (const id in this.medias) {
      if (this.medias[id]) {
        this.$$seek(this.medias[id], value, byPercent);
      }
    }
  }
  $$seek(media, value, byPercent = false) {
    let second;
    let duration = media.duration;
    if (byPercent) {
      if (this.isMasterDefined()) {
        duration = this.getMasterMedia().duration;
      }
      second = value * duration / 100;
    } else {
      second = value;
    }
    media.currentTime = second;
  }
  addTextTrack(type, label, language) {
    for (const id in this.medias) {
      if (this.medias[id]) {
        this.$$addTextTrack(this.medias[id], type, label, language);
      }
    }
  }
  $$addTextTrack(media, type, label, language) {
    media.addTextTrack(type, label, language);
  }
  $$getAllProperties(property) {
    const medias = {};
    let result;
    for (const id in this.medias) {
      if (this.medias[id]) {
        medias[id] = this.medias[id];
      }
    }
    const nMedias = Object.keys(medias).length;
    switch (nMedias) {
      case 0:
        // Return default values until vgMedia is initialized
        switch (property) {
          case 'state':
            result = VgStates.VG_PAUSED;
            break;
          case 'playbackRate':
          case 'volume':
            result = 1;
            break;
          case 'time':
            result = {
              current: 0,
              total: 0,
              left: 0
            };
            break;
        }
        break;
      case 1:
        // If there's only one media element then return the plain value
        const firstMediaId = Object.keys(medias)[0];
        result = medias[firstMediaId][property];
        break;
      default:
        // TODO: return 'master' value
        const master = this.getMasterMedia();
        result = medias[master.id][property];
    }
    return result;
  }
  $$setAllProperties(property, value) {
    for (const id in this.medias) {
      if (this.medias[id]) {
        this.medias[id][property] = value;
      }
    }
  }
  registerElement(elem) {
    this.videogularElement = elem;
  }
  registerMedia(media) {
    this.medias[media.id] = media;
  }
  unregisterMedia(media) {
    delete this.medias[media.id];
  }
}
/** @nocollapse */
VgApiService.ɵfac = function VgApiService_Factory(t) {
  return new (t || VgApiService)();
};
/** @nocollapse */
VgApiService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: VgApiService,
  factory: VgApiService.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgApiService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [];
  }, null);
})();
class VgControlsHiddenService {
  constructor() {
    this.isHiddenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.isHidden = this.isHiddenSubject.asObservable();
  }
  state(hidden) {
    this.isHiddenSubject.next(hidden);
  }
}
/** @nocollapse */
VgControlsHiddenService.ɵfac = function VgControlsHiddenService_Factory(t) {
  return new (t || VgControlsHiddenService)();
};
/** @nocollapse */
VgControlsHiddenService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: VgControlsHiddenService,
  factory: VgControlsHiddenService.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgControlsHiddenService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [];
  }, null);
})();
class VgUtilsService {
  /**
   * Inspired by Paul Irish
   * https://gist.github.com/paulirish/211209
   */
  static getZIndex() {
    let zIndex = 1;
    let elementZIndex;
    const tags = document.getElementsByTagName('*');
    for (let i = 0, l = tags.length; i < l; i++) {
      elementZIndex = parseInt(window.getComputedStyle(tags[i])['z-index'], 10);
      if (elementZIndex > zIndex) {
        zIndex = elementZIndex + 1;
      }
    }
    return zIndex;
  }
  // Very simple mobile detection, not 100% reliable
  static isMobileDevice() {
    // return (
    //   typeof window.screen.orientation !== 'undefined' ||
    //   navigator.userAgent.indexOf('IEMobile') !== -1
    // );
    // window.orientation is deprecated and we should use window.screen.orientation
    return typeof window.orientation !== 'undefined' || navigator.userAgent.indexOf('IEMobile') !== -1;
  }
  static isiOSDevice() {
    return (navigator.userAgent.match(/ip(hone|ad|od)/i) || VgUtilsService.isIpadOS()) && !navigator.userAgent.match(/(iemobile)[\/\s]?([\w\.]*)/i);
  }
  static isIpadOS() {
    return navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /MacIntel/.test(navigator.platform);
  }
  static isCordova() {
    return document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1;
  }
}
/** @nocollapse */
VgUtilsService.ɵfac = function VgUtilsService_Factory(t) {
  return new (t || VgUtilsService)();
};
/** @nocollapse */
VgUtilsService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: VgUtilsService,
  factory: VgUtilsService.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgUtilsService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
class VgFullscreenApiService {
  constructor() {
    this.nativeFullscreen = true;
    this.isFullscreen = false;
    this.onChangeFullscreen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  init(elem, medias) {
    this.videogularElement = elem;
    this.medias = medias;
    const APIs = {
      w3: {
        enabled: 'fullscreenEnabled',
        element: 'fullscreenElement',
        request: 'requestFullscreen',
        exit: 'exitFullscreen',
        onchange: 'fullscreenchange',
        onerror: 'fullscreenerror'
      },
      newWebkit: {
        enabled: 'webkitFullscreenEnabled',
        element: 'webkitFullscreenElement',
        request: 'webkitRequestFullscreen',
        exit: 'webkitExitFullscreen',
        onchange: 'webkitfullscreenchange',
        onerror: 'webkitfullscreenerror'
      },
      oldWebkit: {
        enabled: 'webkitIsFullScreen',
        element: 'webkitCurrentFullScreenElement',
        request: 'webkitRequestFullScreen',
        exit: 'webkitCancelFullScreen',
        onchange: 'webkitfullscreenchange',
        onerror: 'webkitfullscreenerror'
      },
      moz: {
        enabled: 'mozFullScreen',
        element: 'mozFullScreenElement',
        request: 'mozRequestFullScreen',
        exit: 'mozCancelFullScreen',
        onchange: 'mozfullscreenchange',
        onerror: 'mozfullscreenerror'
      },
      ios: {
        enabled: 'webkitFullscreenEnabled',
        element: 'webkitFullscreenElement',
        request: 'webkitEnterFullscreen',
        exit: 'webkitExitFullscreen',
        onchange: 'webkitendfullscreen',
        onerror: 'webkitfullscreenerror'
      },
      ms: {
        enabled: 'msFullscreenEnabled',
        element: 'msFullscreenElement',
        request: 'msRequestFullscreen',
        exit: 'msExitFullscreen',
        onchange: 'MSFullscreenChange',
        onerror: 'MSFullscreenError'
      }
    };
    for (const browser in APIs) {
      if (APIs[browser].enabled in document) {
        this.polyfill = APIs[browser];
        break;
      }
    }
    if (VgUtilsService.isiOSDevice()) {
      this.polyfill = APIs.ios;
    }
    this.isAvailable = this.polyfill != null;
    if (this.polyfill == null) {
      return;
    }
    let fsElemDispatcher;
    switch (this.polyfill.onchange) {
      // Mozilla dispatches the fullscreen change event from document, not the element
      // See: https://bugzilla.mozilla.org/show_bug.cgi?id=724816#c3
      case 'mozfullscreenchange':
        fsElemDispatcher = document;
        break;
      // iOS dispatches the fullscreen change event from video element
      case 'webkitendfullscreen':
        fsElemDispatcher = this.medias.toArray()[0].elem;
        break;
      // HTML5 implementation dispatches the fullscreen change event from the element
      default:
        fsElemDispatcher = elem;
    }
    this.fsChangeSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(fsElemDispatcher, this.polyfill.onchange).subscribe(() => {
      this.onFullscreenChange();
    });
  }
  onFullscreenChange() {
    this.isFullscreen = !!document[this.polyfill.element];
    this.onChangeFullscreen.emit(this.isFullscreen);
  }
  toggleFullscreen(element = null) {
    if (this.isFullscreen) {
      this.exit();
    } else {
      this.request(element);
    }
  }
  request(elem) {
    if (!elem) {
      elem = this.videogularElement;
    }
    this.isFullscreen = true;
    this.onChangeFullscreen.emit(true);
    // Perform native full screen support
    if (this.isAvailable && this.nativeFullscreen) {
      // Fullscreen for mobile devices
      if (VgUtilsService.isMobileDevice()) {
        // We should make fullscreen the video object if it doesn't have native fullscreen support
        // Fallback! We can't set vg-player on fullscreen, only video/audio objects
        if (!this.polyfill.enabled && elem === this.videogularElement || VgUtilsService.isiOSDevice()) {
          elem = this.medias.toArray()[0].elem;
        }
        this.enterElementInFullScreen(elem);
      } else {
        this.enterElementInFullScreen(this.videogularElement);
      }
    }
  }
  enterElementInFullScreen(elem) {
    elem[this.polyfill.request]();
  }
  exit() {
    this.isFullscreen = false;
    this.onChangeFullscreen.emit(false);
    // Exit from native fullscreen
    if (this.isAvailable && this.nativeFullscreen) {
      document[this.polyfill.exit]();
    }
  }
}
/** @nocollapse */
VgFullscreenApiService.ɵfac = function VgFullscreenApiService_Factory(t) {
  return new (t || VgFullscreenApiService)();
};
/** @nocollapse */
VgFullscreenApiService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: VgFullscreenApiService,
  factory: VgFullscreenApiService.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgFullscreenApiService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [];
  }, null);
})();
class VgEvents {}
VgEvents.VG_ABORT = 'abort';
VgEvents.VG_CAN_PLAY = 'canplay';
VgEvents.VG_CAN_PLAY_THROUGH = 'canplaythrough';
VgEvents.VG_DURATION_CHANGE = 'durationchange';
VgEvents.VG_EMPTIED = 'emptied';
VgEvents.VG_ENCRYPTED = 'encrypted';
VgEvents.VG_ENDED = 'ended';
VgEvents.VG_ERROR = 'error';
VgEvents.VG_LOADED_DATA = 'loadeddata';
VgEvents.VG_LOADED_METADATA = 'loadedmetadata';
VgEvents.VG_LOAD_START = 'loadstart';
VgEvents.VG_PAUSE = 'pause';
VgEvents.VG_PLAY = 'play';
VgEvents.VG_PLAYING = 'playing';
VgEvents.VG_PROGRESS = 'progress';
VgEvents.VG_RATE_CHANGE = 'ratechange';
VgEvents.VG_SEEK = 'seek';
VgEvents.VG_SEEKED = 'seeked';
VgEvents.VG_SEEKING = 'seeking';
VgEvents.VG_STALLED = 'stalled';
VgEvents.VG_SUSPEND = 'suspend';
VgEvents.VG_TIME_UPDATE = 'timeupdate';
VgEvents.VG_VOLUME_CHANGE = 'volumechange';
VgEvents.VG_WAITING = 'waiting';
VgEvents.VG_LOAD = 'load';
VgEvents.VG_ENTER = 'enter';
VgEvents.VG_EXIT = 'exit';
VgEvents.VG_START_ADS = 'startads';
VgEvents.VG_END_ADS = 'endads';
/** @nocollapse */
VgEvents.ɵfac = function VgEvents_Factory(t) {
  return new (t || VgEvents)();
};
/** @nocollapse */
VgEvents.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: VgEvents,
  factory: VgEvents.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgEvents, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
class VgCuePointsDirective {
  constructor(ref) {
    this.ref = ref;
    this.onEnterCuePoint = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onUpdateCuePoint = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onExitCuePoint = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onCompleteCuePoint = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.subscriptions = [];
    this.cuesSubscriptions = [];
    this.totalCues = 0;
  }
  ngOnInit() {
    this.onLoad$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(this.ref.nativeElement, VgEvents.VG_LOAD);
    this.subscriptions.push(this.onLoad$.subscribe(this.onLoad.bind(this)));
  }
  onLoad(event) {
    const cues = event.target.track.cues;
    this.ref.nativeElement.cues = cues;
    this.updateCuePoints(cues);
  }
  updateCuePoints(cues) {
    this.cuesSubscriptions.forEach(s => s.unsubscribe());
    for (let i = 0, l = cues.length; i < l; i++) {
      this.onEnter$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(cues[i], VgEvents.VG_ENTER);
      this.cuesSubscriptions.push(this.onEnter$.subscribe(this.onEnter.bind(this)));
      this.onExit$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(cues[i], VgEvents.VG_EXIT);
      this.cuesSubscriptions.push(this.onExit$.subscribe(this.onExit.bind(this)));
    }
  }
  onEnter(event) {
    this.onEnterCuePoint.emit(event.target);
  }
  onExit(event) {
    this.onExitCuePoint.emit(event.target);
  }
  ngDoCheck() {
    if (this.ref.nativeElement.track && this.ref.nativeElement.track.cues) {
      const changes = this.totalCues !== this.ref.nativeElement.track.cues.length;
      if (changes) {
        this.totalCues = this.ref.nativeElement.track.cues.length;
        this.ref.nativeElement.cues = this.ref.nativeElement.track.cues;
        this.updateCuePoints(this.ref.nativeElement.track.cues);
      }
    }
  }
  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
/** @nocollapse */
VgCuePointsDirective.ɵfac = function VgCuePointsDirective_Factory(t) {
  return new (t || VgCuePointsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
/** @nocollapse */
VgCuePointsDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: VgCuePointsDirective,
  selectors: [["", "vgCuePoints", ""]],
  outputs: {
    onEnterCuePoint: "onEnterCuePoint",
    onUpdateCuePoint: "onUpdateCuePoint",
    onExitCuePoint: "onExitCuePoint",
    onCompleteCuePoint: "onCompleteCuePoint"
  }
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgCuePointsDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[vgCuePoints]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    onEnterCuePoint: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onUpdateCuePoint: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onExitCuePoint: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onCompleteCuePoint: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
class VgMediaDirective {
  constructor(api, ref) {
    this.api = api;
    this.ref = ref;
    this.state = VgStates.VG_PAUSED;
    this.time = {
      current: 0,
      total: 0,
      left: 0
    };
    this.buffer = {
      end: 0
    };
    this.canPlay = false;
    this.canPlayThrough = false;
    this.isMetadataLoaded = false;
    this.isWaiting = false;
    this.isCompleted = false;
    this.isLive = false;
    this.isBufferDetected = false;
    this.checkInterval = 200;
    this.currentPlayPos = 0;
    this.lastPlayPos = 0;
    this.playAtferSync = false;
    this.bufferDetected = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  }
  ngOnInit() {
    if (this.vgMedia.nodeName) {
      // It's a native element
      this.elem = this.vgMedia;
    } else {
      // It's an Angular Class
      this.elem = this.vgMedia.elem;
    }
    // Just in case we're creating this vgMedia dynamically register again into API
    this.api.registerMedia(this);
    this.subscriptions = {
      // Native events
      abort: (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(this.elem, VgEvents.VG_ABORT),
      canPlay: (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(this.elem, VgEvents.VG_CAN_PLAY),
      canPlayThrough: (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(this.elem, VgEvents.VG_CAN_PLAY_THROUGH),
      durationChange: (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(this.elem, VgEvents.VG_DURATION_CHANGE),
      emptied: (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(this.elem, VgEvents.VG_EMPTIED),
      encrypted: (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(this.elem, VgEvents.VG_ENCRYPTED),
      ended: (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(this.elem, VgEvents.VG_ENDED),
      error: (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(this.elem, VgEvents.VG_ERROR),
      loadedData: (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(this.elem, VgEvents.VG_LOADED_DATA),
      loadedMetadata: (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(this.elem, VgEvents.VG_LOADED_METADATA),
      loadStart: (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(this.elem, VgEvents.VG_LOAD_START),
      pause: (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(this.elem, VgEvents.VG_PAUSE),
      play: (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(this.elem, VgEvents.VG_PLAY),
      playing: (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(this.elem, VgEvents.VG_PLAYING),
      progress: (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(this.elem, VgEvents.VG_PROGRESS),
      rateChange: (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(this.elem, VgEvents.VG_RATE_CHANGE),
      seeked: (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(this.elem, VgEvents.VG_SEEKED),
      seeking: (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(this.elem, VgEvents.VG_SEEKING),
      stalled: (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(this.elem, VgEvents.VG_STALLED),
      suspend: (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(this.elem, VgEvents.VG_SUSPEND),
      timeUpdate: (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(this.elem, VgEvents.VG_TIME_UPDATE),
      volumeChange: (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(this.elem, VgEvents.VG_VOLUME_CHANGE),
      waiting: (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(this.elem, VgEvents.VG_WAITING),
      // Advertisement only events
      startAds: (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(window, VgEvents.VG_START_ADS),
      endAds: (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(window, VgEvents.VG_END_ADS),
      // See changes on <source> child elements to reload the video file
      mutation: new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable(observer => {
        const domObs = new MutationObserver(mutations => {
          observer.next(mutations);
        });
        domObs.observe(this.elem, {
          childList: true,
          attributes: true
        });
        return () => {
          domObs.disconnect();
        };
      }),
      // Custom buffering detection
      bufferDetected: this.bufferDetected
    };
    this.mutationObs = this.subscriptions.mutation.subscribe(this.onMutation.bind(this));
    this.canPlayObs = this.subscriptions.canPlay.subscribe(this.onCanPlay.bind(this));
    this.canPlayThroughObs = this.subscriptions.canPlayThrough.subscribe(this.onCanPlayThrough.bind(this));
    this.loadedMetadataObs = this.subscriptions.loadedMetadata.subscribe(this.onLoadMetadata.bind(this));
    this.waitingObs = this.subscriptions.waiting.subscribe(this.onWait.bind(this));
    this.progressObs = this.subscriptions.progress.subscribe(this.onProgress.bind(this));
    this.endedObs = this.subscriptions.ended.subscribe(this.onComplete.bind(this));
    this.playingObs = this.subscriptions.playing.subscribe(this.onStartPlaying.bind(this));
    this.playObs = this.subscriptions.play.subscribe(this.onPlay.bind(this));
    this.pauseObs = this.subscriptions.pause.subscribe(this.onPause.bind(this));
    this.timeUpdateObs = this.subscriptions.timeUpdate.subscribe(this.onTimeUpdate.bind(this));
    this.volumeChangeObs = this.subscriptions.volumeChange.subscribe(this.onVolumeChange.bind(this));
    this.errorObs = this.subscriptions.error.subscribe(this.onError.bind(this));
    if (this.vgMaster) {
      this.api.playerReadyEvent.subscribe(() => {
        this.prepareSync();
      });
    }
  }
  prepareSync() {
    const canPlayAll = [];
    for (const media in this.api.medias) {
      if (this.api.medias[media]) {
        canPlayAll.push(this.api.medias[media].subscriptions.canPlay);
      }
    }
    this.canPlayAllSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.combineLatest)(canPlayAll).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((...params) => {
      const checkReadyState = event => {
        if (!event?.target) {
          return false;
        }
        return event.target.readyState === 4;
      };
      const allReady = params.some(checkReadyState);
      if (allReady && !this.syncSubscription) {
        this.startSync();
        this.syncSubscription.unsubscribe();
      }
    })).subscribe();
  }
  startSync() {
    this.syncSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.timer)(0, 1000).subscribe(() => {
      for (const media in this.api.medias) {
        if (this.api.medias[media] !== this) {
          const diff = this.api.medias[media].currentTime - this.currentTime;
          if (diff < -0.3 || diff > 0.3) {
            this.playAtferSync = this.state === VgStates.VG_PLAYING;
            this.pause();
            this.api.medias[media].pause();
            this.api.medias[media].currentTime = this.currentTime;
          } else {
            if (this.playAtferSync) {
              this.play();
              this.api.medias[media].play();
              this.playAtferSync = false;
            }
          }
        }
      }
    });
  }
  onMutation(mutations) {
    // Detect changes only for source elements or src attribute
    for (let i = 0, l = mutations.length; i < l; i++) {
      const mut = mutations[i];
      if (mut.type === 'attributes' && mut.attributeName === 'src') {
        // Only load src file if it's not a blob (for DASH / HLS sources)
        if (mut.target.src && mut.target.src.length > 0 && mut.target.src.indexOf('blob:') < 0) {
          this.loadMedia();
          break;
        }
      } else if (mut.type === 'childList' && mut.removedNodes.length && mut.removedNodes[0].nodeName.toLowerCase() === 'source') {
        this.loadMedia();
        break;
      }
    }
  }
  loadMedia() {
    this.vgMedia.pause();
    this.vgMedia.currentTime = 0;
    // Start buffering until we can play the media file
    this.stopBufferCheck();
    this.isBufferDetected = true;
    this.bufferDetected.next(this.isBufferDetected);
    // TODO: This is ugly, we should find something cleaner. For some reason a TimerObservable doesn't works.
    setTimeout(() => this.vgMedia.load(), 10);
  }
  play() {
    // short-circuit if already playing
    if (this.playPromise || this.state !== VgStates.VG_PAUSED && this.state !== VgStates.VG_ENDED) {
      return;
    }
    this.playPromise = this.vgMedia.play();
    // browser has async play promise
    if (this.playPromise && this.playPromise.then && this.playPromise.catch) {
      this.playPromise.then(() => {
        this.playPromise = null;
      }).catch(() => {
        this.playPromise = null;
        // deliberately empty for the sake of eating console noise
      });
    }
    return this.playPromise;
  }
  pause() {
    // browser has async play promise
    if (this.playPromise) {
      this.playPromise.then(() => {
        this.vgMedia.pause();
      });
    } else {
      this.vgMedia.pause();
    }
  }
  get id() {
    // We should return undefined if vgMedia still doesn't exist
    let result;
    if (this.vgMedia) {
      result = this.vgMedia.id;
    }
    return result;
  }
  get duration() {
    return this.vgMedia.duration === Infinity ? this.specifiedDuration : this.vgMedia.duration;
  }
  set currentTime(seconds) {
    this.vgMedia.currentTime = seconds;
    // this.elem.dispatchEvent(new CustomEvent(VgEvents.VG_SEEK));
  }
  get currentTime() {
    return this.vgMedia.currentTime;
  }
  set volume(volume) {
    this.vgMedia.volume = volume;
  }
  get volume() {
    return this.vgMedia.volume;
  }
  set playbackRate(rate) {
    this.vgMedia.playbackRate = rate;
  }
  get playbackRate() {
    return this.vgMedia.playbackRate;
  }
  get buffered() {
    return this.vgMedia.buffered;
  }
  get textTracks() {
    return this.vgMedia.textTracks;
  }
  // @ts-ignore
  onCanPlay(event) {
    this.isBufferDetected = false;
    this.bufferDetected.next(this.isBufferDetected);
    this.canPlay = true;
    this.ref.detectChanges();
  }
  // @ts-ignore
  onCanPlayThrough(event) {
    this.isBufferDetected = false;
    this.bufferDetected.next(this.isBufferDetected);
    this.canPlayThrough = true;
    this.ref.detectChanges();
  }
  // @ts-ignore
  onLoadMetadata(event) {
    this.isMetadataLoaded = true;
    this.time = {
      current: 0,
      left: 0,
      total: this.duration * 1000
    };
    this.state = VgStates.VG_PAUSED;
    // Live streaming check
    const t = Math.round(this.time.total);
    this.isLive = t === Infinity;
    this.ref.detectChanges();
  }
  // @ts-ignore
  onWait(event) {
    this.isWaiting = true;
    this.ref.detectChanges();
  }
  // @ts-ignore
  onComplete(event) {
    this.isCompleted = true;
    this.state = VgStates.VG_ENDED;
    this.ref.detectChanges();
  }
  // @ts-ignore
  onStartPlaying(event) {
    this.state = VgStates.VG_PLAYING;
    this.ref.detectChanges();
  }
  // @ts-ignore
  onPlay(event) {
    this.state = VgStates.VG_PLAYING;
    if (this.vgMaster) {
      if (!this.syncSubscription || this.syncSubscription.closed) {
        this.startSync();
      }
    }
    this.startBufferCheck();
    this.ref.detectChanges();
  }
  // @ts-ignore
  onPause(event) {
    this.state = VgStates.VG_PAUSED;
    if (this.vgMaster) {
      if (!this.playAtferSync) {
        this.syncSubscription.unsubscribe();
      }
    }
    this.stopBufferCheck();
    this.ref.detectChanges();
  }
  // @ts-ignore
  onTimeUpdate(event) {
    const end = this.buffered.length - 1;
    this.time = {
      current: this.currentTime * 1000,
      total: this.time.total,
      left: (this.duration - this.currentTime) * 1000
    };
    if (end >= 0) {
      this.buffer = {
        end: this.buffered.end(end) * 1000
      };
    }
    this.ref.detectChanges();
  }
  // @ts-ignore
  onProgress(event) {
    const end = this.buffered.length - 1;
    if (end >= 0) {
      this.buffer = {
        end: this.buffered.end(end) * 1000
      };
    }
    this.ref.detectChanges();
  }
  // @ts-ignore
  onVolumeChange(event) {
    // TODO: Save to localstorage the current volume
    this.ref.detectChanges();
  }
  // @ts-ignore
  onError(event) {
    // TODO: Handle error messages
    this.ref.detectChanges();
  }
  // http://stackoverflow.com/a/23828241/779529
  bufferCheck() {
    const offset = 1 / this.checkInterval;
    this.currentPlayPos = this.currentTime;
    if (!this.isBufferDetected && this.currentPlayPos < this.lastPlayPos + offset) {
      this.isBufferDetected = true;
    }
    if (this.isBufferDetected && this.currentPlayPos > this.lastPlayPos + offset) {
      this.isBufferDetected = false;
    }
    // Prevent calls to bufferCheck after ngOnDestroy have been called
    if (!this.bufferDetected.closed) {
      this.bufferDetected.next(this.isBufferDetected);
    }
    this.lastPlayPos = this.currentPlayPos;
  }
  startBufferCheck() {
    this.checkBufferSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.timer)(0, this.checkInterval).subscribe(() => {
      this.bufferCheck();
    });
  }
  stopBufferCheck() {
    if (this.checkBufferSubscription) {
      this.checkBufferSubscription.unsubscribe();
    }
    this.isBufferDetected = false;
    this.bufferDetected.next(this.isBufferDetected);
  }
  seekTime(value, byPercent = false) {
    let second;
    const duration = this.duration;
    if (byPercent) {
      second = value * duration / 100;
    } else {
      second = value;
    }
    this.currentTime = second;
  }
  addTextTrack(type, label, language, mode) {
    const newTrack = this.vgMedia.addTextTrack(type, label, language);
    if (mode) {
      newTrack.mode = mode;
    }
    return newTrack;
  }
  ngOnDestroy() {
    this.vgMedia.src = '';
    this.mutationObs?.unsubscribe();
    this.canPlayObs?.unsubscribe();
    this.canPlayThroughObs?.unsubscribe();
    this.loadedMetadataObs?.unsubscribe();
    this.waitingObs?.unsubscribe();
    this.progressObs?.unsubscribe();
    this.endedObs?.unsubscribe();
    this.playingObs?.unsubscribe();
    this.playObs?.unsubscribe();
    this.pauseObs?.unsubscribe();
    this.timeUpdateObs?.unsubscribe();
    this.volumeChangeObs?.unsubscribe();
    this.errorObs?.unsubscribe();
    this.checkBufferSubscription?.unsubscribe();
    this.syncSubscription?.unsubscribe();
    this.bufferDetected?.complete();
    this.bufferDetected?.unsubscribe();
    this.api.unregisterMedia(this);
  }
}
/** @nocollapse */
VgMediaDirective.ɵfac = function VgMediaDirective_Factory(t) {
  return new (t || VgMediaDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](VgApiService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};
/** @nocollapse */
VgMediaDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: VgMediaDirective,
  selectors: [["", "vgMedia", ""]],
  inputs: {
    vgMedia: "vgMedia",
    vgMaster: "vgMaster"
  }
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgMediaDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[vgMedia]'
    }]
  }], function () {
    return [{
      type: VgApiService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    vgMedia: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    vgMaster: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class VgPlayerComponent {
  constructor(ref, api, fsAPI, controlsHidden) {
    this.api = api;
    this.fsAPI = fsAPI;
    this.controlsHidden = controlsHidden;
    this.isFullscreen = false;
    this.isNativeFullscreen = false;
    this.areControlsHidden = false;
    this.onPlayerReady = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onMediaReady = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.subscriptions = [];
    this.elem = ref.nativeElement;
    this.api.registerElement(this.elem);
  }
  ngAfterContentInit() {
    this.medias.toArray().forEach(media => {
      this.api.registerMedia(media);
    });
    this.fsAPI.init(this.elem, this.medias);
    this.subscriptions.push(this.fsAPI.onChangeFullscreen.subscribe(this.onChangeFullscreen.bind(this)));
    this.subscriptions.push(this.controlsHidden.isHidden.subscribe(this.onHideControls.bind(this)));
    this.api.onPlayerReady(this.fsAPI);
    this.onPlayerReady.emit(this.api);
  }
  onChangeFullscreen(fsState) {
    if (!this.fsAPI.nativeFullscreen) {
      this.isFullscreen = fsState;
      this.zIndex = fsState ? VgUtilsService.getZIndex().toString() : 'auto';
    } else {
      this.isNativeFullscreen = fsState;
    }
  }
  onHideControls(hidden) {
    this.areControlsHidden = hidden;
  }
  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
/** @nocollapse */
VgPlayerComponent.ɵfac = function VgPlayerComponent_Factory(t) {
  return new (t || VgPlayerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](VgApiService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](VgFullscreenApiService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](VgControlsHiddenService));
};
/** @nocollapse */
VgPlayerComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: VgPlayerComponent,
  selectors: [["vg-player"]],
  contentQueries: function VgPlayerComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, VgMediaDirective, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.medias = _t);
    }
  },
  hostVars: 8,
  hostBindings: function VgPlayerComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("z-index", ctx.zIndex);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("fullscreen", ctx.isFullscreen)("native-fullscreen", ctx.isNativeFullscreen)("controls-hidden", ctx.areControlsHidden);
    }
  },
  outputs: {
    onPlayerReady: "onPlayerReady",
    onMediaReady: "onMediaReady"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([VgApiService, VgFullscreenApiService, VgControlsHiddenService])],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function VgPlayerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    }
  },
  styles: ["vg-player{font-family:videogular;position:relative;display:flex;width:100%;height:100%;overflow:hidden;background-color:#000}vg-player.fullscreen{position:fixed;left:0;top:0}vg-player.native-fullscreen.controls-hidden{cursor:none}\n"],
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgPlayerComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'vg-player',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: `<ng-content></ng-content>`,
      providers: [VgApiService, VgFullscreenApiService, VgControlsHiddenService],
      styles: ["vg-player{font-family:videogular;position:relative;display:flex;width:100%;height:100%;overflow:hidden;background-color:#000}vg-player.fullscreen{position:fixed;left:0;top:0}vg-player.native-fullscreen.controls-hidden{cursor:none}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: VgApiService
    }, {
      type: VgFullscreenApiService
    }, {
      type: VgControlsHiddenService
    }];
  }, {
    isFullscreen: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.fullscreen']
    }],
    isNativeFullscreen: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.native-fullscreen']
    }],
    areControlsHidden: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.controls-hidden']
    }],
    zIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.z-index']
    }],
    onPlayerReady: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onMediaReady: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    medias: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [VgMediaDirective, {
        descendants: true
      }]
    }]
  });
})();
const services = [VgApiService, VgControlsHiddenService, VgFullscreenApiService, VgUtilsService, VgEvents, VgStates];
const directives = [VgCuePointsDirective, VgMediaDirective];
class VgCoreModule {}
/** @nocollapse */
VgCoreModule.ɵfac = function VgCoreModule_Factory(t) {
  return new (t || VgCoreModule)();
};
/** @nocollapse */
VgCoreModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: VgCoreModule
});
/** @nocollapse */
VgCoreModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [...services],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgCoreModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule],
      providers: [...services],
      declarations: [...directives, VgPlayerComponent],
      exports: [...directives, VgPlayerComponent]
    }]
  }], null, null);
})();
class VgMediaElement {
  get audioTracks() {
    return null;
  }
  // @ts-ignore
  addTextTrack(kind, label, language) {
    return null;
  }
  // @ts-ignore
  canPlayType(type) {
    return null;
  }
  load() {}
  msClearEffects() {}
  msGetAsCastingSource() {
    return null;
  }
  // @ts-ignore
  msInsertAudioEffect(_activatableClassId, _effectRequired, _config) {}
  // @ts-ignore
  msSetMediaProtectionManager(mediaProtectionManager) {}
  pause() {}
  play() {
    return null;
  }
  // @ts-ignore
  setMediaKeys(mediaKeys) {
    return null;
  }
  // @ts-ignore
  addEventListener(_type, _listener, _useCapture) {}
}

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=videogular-ngx-videogular-core.mjs.map

/***/ }),

/***/ 8399:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@videogular/ngx-videogular/fesm2020/videogular-ngx-videogular-overlay-play.mjs ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VgOverlayPlayComponent": () => (/* binding */ VgOverlayPlayComponent),
/* harmony export */   "VgOverlayPlayModule": () => (/* binding */ VgOverlayPlayModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @videogular/ngx-videogular/core */ 49197);





class VgOverlayPlayComponent {
  constructor(ref, API, fsAPI, controlsHidden) {
    this.API = API;
    this.fsAPI = fsAPI;
    this.controlsHidden = controlsHidden;
    this.vgSkipIfControlsHidden = false;
    this.vgSkipIfControlsHiddenDelay = 0.5;
    this.isNativeFullscreen = false;
    this.areControlsHidden = false;
    this.areControlsHiddenChangeTime = 0;
    this.subscriptions = [];
    this.isBuffering = false;
    this.elem = ref.nativeElement;
  }
  ngOnInit() {
    if (this.API.isPlayerReady) {
      this.onPlayerReady();
    } else {
      this.subscriptions.push(this.API.playerReadyEvent.subscribe(() => this.onPlayerReady()));
    }
  }
  onPlayerReady() {
    this.target = this.API.getMediaById(this.vgFor);
    this.subscriptions.push(this.fsAPI.onChangeFullscreen.subscribe(this.onChangeFullscreen.bind(this)));
    this.subscriptions.push(this.controlsHidden.isHidden.subscribe(this.onHideControls.bind(this)));
    this.subscriptions.push(this.target.subscriptions.bufferDetected.subscribe(isBuffering => this.onUpdateBuffer(isBuffering)));
  }
  onUpdateBuffer(isBuffering) {
    this.isBuffering = isBuffering;
  }
  onChangeFullscreen(fsState) {
    if (this.fsAPI.nativeFullscreen) {
      this.isNativeFullscreen = fsState;
    }
  }
  onHideControls(hidden) {
    if (this.vgSkipIfControlsHidden && this.areControlsHidden != hidden) {
      this.areControlsHiddenChangeTime = Date.now();
    }
    this.areControlsHidden = hidden;
  }
  onClick() {
    if (this.vgSkipIfControlsHidden && (this.areControlsHidden || Date.now() - this.areControlsHiddenChangeTime < this.vgSkipIfControlsHiddenDelay * 1000)) {
      return;
    }
    const state = this.getState();
    switch (state) {
      case _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_0__.VgStates.VG_PLAYING:
        this.target.pause();
        break;
      case _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_0__.VgStates.VG_PAUSED:
      case _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_0__.VgStates.VG_ENDED:
        this.target.play();
        break;
    }
  }
  getState() {
    let state = _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_0__.VgStates.VG_PAUSED;
    if (this.target) {
      if (this.target.state instanceof Array) {
        for (let i = 0, l = this.target.state.length; i < l; i++) {
          if (this.target.state[i] === _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_0__.VgStates.VG_PLAYING) {
            state = _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_0__.VgStates.VG_PLAYING;
            break;
          }
        }
      } else {
        state = this.target.state;
      }
    }
    return state;
  }
  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
/** @nocollapse */
VgOverlayPlayComponent.ɵfac = function VgOverlayPlayComponent_Factory(t) {
  return new (t || VgOverlayPlayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_0__.VgApiService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_0__.VgFullscreenApiService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_0__.VgControlsHiddenService));
};
/** @nocollapse */
VgOverlayPlayComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: VgOverlayPlayComponent,
  selectors: [["vg-overlay-play"]],
  hostVars: 2,
  hostBindings: function VgOverlayPlayComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VgOverlayPlayComponent_click_HostBindingHandler() {
        return ctx.onClick();
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-buffering", ctx.isBuffering);
    }
  },
  inputs: {
    vgFor: "vgFor",
    vgSkipIfControlsHidden: "vgSkipIfControlsHidden",
    vgSkipIfControlsHiddenDelay: "vgSkipIfControlsHiddenDelay"
  },
  decls: 2,
  vars: 6,
  consts: [[1, "vg-overlay-play"], [1, "overlay-play-container"]],
  template: function VgOverlayPlayComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("native-fullscreen", ctx.isNativeFullscreen)("controls-hidden", ctx.areControlsHidden);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("vg-icon-play_arrow", ctx.getState() !== "playing");
    }
  },
  styles: ["vg-overlay-play{z-index:200}vg-overlay-play.is-buffering{display:none}vg-overlay-play .vg-overlay-play{transition:all .5s;cursor:pointer;position:absolute;display:block;color:#fff;width:100%;height:100%;font-size:80px;filter:alpha(opacity=60);opacity:.6}vg-overlay-play .vg-overlay-play.native-fullscreen.controls-hidden{cursor:none}vg-overlay-play .vg-overlay-play .overlay-play-container.vg-icon-play_arrow{pointer-events:none;width:100%;height:100%;position:absolute;display:flex;align-items:center;justify-content:center;font-size:80px}vg-overlay-play .vg-overlay-play:hover{filter:alpha(opacity=100);opacity:1}vg-overlay-play .vg-overlay-play:hover .overlay-play-container.vg-icon-play_arrow:before{transform:scale(1.2)}\n"],
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VgOverlayPlayComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'vg-overlay-play',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      template: `<div
    class="vg-overlay-play"
    [class.native-fullscreen]="isNativeFullscreen"
    [class.controls-hidden]="areControlsHidden"
  >
    <div
      class="overlay-play-container"
      [class.vg-icon-play_arrow]="getState() !== 'playing'"
    ></div>
  </div>`,
      styles: ["vg-overlay-play{z-index:200}vg-overlay-play.is-buffering{display:none}vg-overlay-play .vg-overlay-play{transition:all .5s;cursor:pointer;position:absolute;display:block;color:#fff;width:100%;height:100%;font-size:80px;filter:alpha(opacity=60);opacity:.6}vg-overlay-play .vg-overlay-play.native-fullscreen.controls-hidden{cursor:none}vg-overlay-play .vg-overlay-play .overlay-play-container.vg-icon-play_arrow{pointer-events:none;width:100%;height:100%;position:absolute;display:flex;align-items:center;justify-content:center;font-size:80px}vg-overlay-play .vg-overlay-play:hover{filter:alpha(opacity=100);opacity:1}vg-overlay-play .vg-overlay-play:hover .overlay-play-container.vg-icon-play_arrow:before{transform:scale(1.2)}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_0__.VgApiService
    }, {
      type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_0__.VgFullscreenApiService
    }, {
      type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_0__.VgControlsHiddenService
    }];
  }, {
    vgFor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    vgSkipIfControlsHidden: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    vgSkipIfControlsHiddenDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    isBuffering: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,
      args: ['class.is-buffering']
    }],
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
      args: ['click']
    }]
  });
})();
class VgOverlayPlayModule {}
/** @nocollapse */
VgOverlayPlayModule.ɵfac = function VgOverlayPlayModule_Factory(t) {
  return new (t || VgOverlayPlayModule)();
};
/** @nocollapse */
VgOverlayPlayModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: VgOverlayPlayModule
});
/** @nocollapse */
VgOverlayPlayModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_0__.VgCoreModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VgOverlayPlayModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_0__.VgCoreModule],
      declarations: [VgOverlayPlayComponent],
      exports: [VgOverlayPlayComponent]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=videogular-ngx-videogular-overlay-play.mjs.map

/***/ })

}]);
//# sourceMappingURL=src_app_video-playlist_video-playlist_module_ts.js.map