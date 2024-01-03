exports.ids = ["video-playlist-video-playlist-module"];
exports.modules = {

/***/ "J1pr":
/*!*******************************************************!*\
  !*** ./src/app/video-playlist/video-playlist.page.ts ***!
  \*******************************************************/
/*! exports provided: VideoPlaylistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPlaylistPage", function() { return VideoPlaylistPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "FUe0");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_capacitor_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shell/aspect-ratio/aspect-ratio.component */ "B7gC");
/* harmony import */ var _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shell/text-shell/text-shell.component */ "zK/y");
/* harmony import */ var _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @videogular/ngx-videogular/core */ "4w57");
/* harmony import */ var _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shell/image-shell/image-shell.component */ "2gss");













function VideoPlaylistPage_video_11_source_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "source", 18);
} if (rf & 2) {
    const video_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", video_r4.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("type", video_r4.type);
} }
function VideoPlaylistPage_video_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "video", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VideoPlaylistPage_video_11_source_1_Template, 1, 2, "source", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.video_playlist_model == null ? null : ctx_r0.video_playlist_model.selected_video == null ? null : ctx_r0.video_playlist_model.selected_video.sources);
} }
function VideoPlaylistPage_vg_player_12_source_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "source", 18);
} if (rf & 2) {
    const video_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", video_r7.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("type", video_r7.type);
} }
function VideoPlaylistPage_vg_player_12_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "vg-player", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onPlayerReady", function VideoPlaylistPage_vg_player_12_Template_vg_player_onPlayerReady_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onPlayerReady($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "video", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, VideoPlaylistPage_vg_player_12_source_3_Template, 1, 2, "source", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("vgMedia", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.video_playlist_model == null ? null : ctx_r1.video_playlist_model.selected_video == null ? null : ctx_r1.video_playlist_model.selected_video.sources);
} }
const _c0 = function () { return { w: 3, h: 2 }; };
function VideoPlaylistPage_ion_row_19_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-row", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-col", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-image-shell", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoPlaylistPage_ion_row_19_Template_app_image_shell_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const video_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.playMedia(video_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-aspect-ratio", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoPlaylistPage_ion_row_19_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const video_r10 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.playMedia(video_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ion-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-col", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-text-shell", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-text-shell", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const video_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("display", "cover")("src", video_r10.thumbnail)("alt", "video thumbnail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", video_r10.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", video_r10.description);
} }
const _c1 = function () { return { w: 16, h: 9 }; };
const { Share } = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"];
class VideoPlaylistPage {
    constructor(route, platformId) {
        this.route = route;
        this.platformId = platformId;
        this.ssr = true;
        this.start_playing = false;
    }
    get isShell() {
        return (this.video_playlist_model && this.video_playlist_model.isShell) ? true : false;
    }
    ngOnInit() {
        // In SSR show a placeholder for the <vg-player>
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformBrowser"])(this.platformId)) {
            this.ssr = false;
        }
        this.route.data
            .pipe(
        // Extract data for this page
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((resolvedRouteData) => resolvedRouteData['data'].state))
            .subscribe((state) => {
            this.video_playlist_model = state;
            if (!state.isShell) {
                this.video_playlist_model.video_playlist = state.videos;
                this.video_playlist_model.selected_video = state.videos[0];
            }
        }, (error) => console.log(error));
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
        }
        else {
            this.start_playing = true;
        }
    }
    shareMedia() {
        const selectedVideo = this.video_playlist_model.selected_video;
        Share.share({
            title: selectedVideo.title,
            text: selectedVideo.description,
            url: 'https://ionicthemes.com/',
            dialogTitle: 'Share Media'
        })
            .then(() => console.log('Successful share'))
            .catch((error) => console.log('Error sharing', error));
    }
}
VideoPlaylistPage.ɵfac = function VideoPlaylistPage_Factory(t) { return new (t || VideoPlaylistPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])); };
VideoPlaylistPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideoPlaylistPage, selectors: [["app-video-playlist"]], hostVars: 2, hostBindings: function VideoPlaylistPage_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-shell", ctx.isShell);
    } }, decls: 20, vars: 7, consts: [["color", "primary"], ["slot", "start"], ["slot", "end"], [3, "click"], ["slot", "icon-only", "name", "share"], [1, "video-playlist-content"], [3, "ratio"], ["class", "ssr-video", "controls", "", "preload", "auto", 4, "ngIf"], ["class", "video-player", 3, "onPlayerReady", 4, "ngIf"], [1, "video-data-section"], [1, "video-title"], ["animation", "gradient", 3, "data"], [1, "video-description"], ["lines", "5", "animation", "gradient", 3, "data"], [1, "video-playlist-section"], ["class", "playlist-item-row", 4, "ngFor", "ngForOf"], ["controls", "", "preload", "auto", 1, "ssr-video"], [3, "src", "type", 4, "ngFor", "ngForOf"], [3, "src", "type"], [1, "video-player", 3, "onPlayerReady"], ["controls", "", "id", "player-video", "preload", "auto", 3, "vgMedia"], ["player_video", ""], [1, "playlist-item-row"], ["size", "4"], ["animation", "spinner", 1, "video-image", 3, "display", "src", "alt", "click"], [1, "play-icon-wrapper", 3, "click"], ["name", "play", 1, "play-icon"], ["size", "8", 1, "video-info-wrapper"], [1, "image-title"], [1, "image-description"], ["lines", "3", "animation", "gradient", 3, "data"]], template: function VideoPlaylistPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-menu-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Video Playlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-buttons", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoPlaylistPage_Template_ion_button_click_7_listener() { return ctx.shareMedia(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ion-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-content", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-aspect-ratio", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, VideoPlaylistPage_video_11_Template, 2, 1, "video", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, VideoPlaylistPage_vg_player_12_Template, 4, 2, "vg-player", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-text-shell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-text-shell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, VideoPlaylistPage_ion_row_19_Template, 11, 7, "ion-row", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ssr);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.ssr);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.video_playlist_model == null ? null : ctx.video_playlist_model.selected_video == null ? null : ctx.video_playlist_model.selected_video.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.video_playlist_model == null ? null : ctx.video_playlist_model.selected_video == null ? null : ctx.video_playlist_model.selected_video.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.video_playlist_model == null ? null : ctx.video_playlist_model.video_playlist);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonMenuButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_6__["AspectRatioComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_7__["TextShellComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_8__["VgPlayerComponent"], _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_8__["VgMediaDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCol"], _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_9__["ImageShellComponent"]], styles: ["[_nghost-%COMP%] {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n}\n\n.video-playlist-content[_ngcontent-%COMP%] {\n  --background: var(--page-background);\n}\n\n.video-playlist-content[_ngcontent-%COMP%]   .ssr-video[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.video-playlist-content[_ngcontent-%COMP%]   .video-data-section[_ngcontent-%COMP%] {\n  padding: var(--page-margin);\n}\n\n.video-playlist-content[_ngcontent-%COMP%]   .video-data-section[_ngcontent-%COMP%]   .video-title[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  margin-bottom: calc(var(--page-margin) / 2);\n  color: var(--ion-color-secondary);\n}\n\n.video-playlist-content[_ngcontent-%COMP%]   .video-data-section[_ngcontent-%COMP%]   .video-description[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-size: 13px;\n  line-height: 1.3;\n  letter-spacing: 0.3px;\n  color: var(--ion-color-dark);\n}\n\n.video-playlist-content[_ngcontent-%COMP%]   .video-playlist-section[_ngcontent-%COMP%] {\n  padding: 0px var(--page-margin);\n  padding-bottom: var(--page-margin);\n}\n\n.video-playlist-content[_ngcontent-%COMP%]   .video-playlist-section[_ngcontent-%COMP%]   .playlist-item-row[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n}\n\n.video-playlist-content[_ngcontent-%COMP%]   .video-playlist-section[_ngcontent-%COMP%]   .playlist-item-row[_ngcontent-%COMP%]:not(:first-child) {\n  padding-top: calc(var(--page-margin) / 2);\n}\n\n.video-playlist-content[_ngcontent-%COMP%]   .video-playlist-section[_ngcontent-%COMP%]   .playlist-item-row[_ngcontent-%COMP%]:not(:last-child) {\n  padding-bottom: calc(var(--page-margin) / 2);\n  box-shadow: inset 0 -7px 3px -8px var(--ion-color-darkest);\n}\n\n.video-playlist-content[_ngcontent-%COMP%]   .video-playlist-section[_ngcontent-%COMP%]   .play-icon-wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n  text-decoration: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.video-playlist-content[_ngcontent-%COMP%]   .video-playlist-section[_ngcontent-%COMP%]   .play-icon-wrapper[_ngcontent-%COMP%]   .play-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-secondary);\n  background: rgba(var(--ion-color-lightest-rgb), 0.7);\n  font-size: 20px;\n  padding: 8px;\n  border-radius: 50%;\n}\n\n.video-playlist-content[_ngcontent-%COMP%]   .video-playlist-section[_ngcontent-%COMP%]   .video-info-wrapper[_ngcontent-%COMP%] {\n  -webkit-padding-start: var(--page-margin);\n          padding-inline-start: var(--page-margin);\n  align-self: center;\n}\n\n.video-playlist-content[_ngcontent-%COMP%]   .video-playlist-section[_ngcontent-%COMP%]   .video-info-wrapper[_ngcontent-%COMP%]   .image-title[_ngcontent-%COMP%] {\n  margin: 0px;\n  margin-bottom: calc(var(--page-margin) / 4);\n  color: var(--ion-color-secondary);\n  font-size: 14px;\n}\n\n.video-playlist-content[_ngcontent-%COMP%]   .video-playlist-section[_ngcontent-%COMP%]   .video-info-wrapper[_ngcontent-%COMP%]   .image-title[_ngcontent-%COMP%]   app-text-shell[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.video-playlist-content[_ngcontent-%COMP%]   .video-playlist-section[_ngcontent-%COMP%]   .video-info-wrapper[_ngcontent-%COMP%]   .image-description[_ngcontent-%COMP%] {\n  margin: 0px;\n  color: var(--ion-color-dark);\n  font-size: 13px;\n  line-height: 1.3;\n  letter-spacing: 0.3px;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  overflow: hidden;\n  \n  -webkit-box-orient: vertical;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW8tcGxheWxpc3Qvc3R5bGVzL3ZpZGVvLXBsYXlsaXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHFDQUFBO0VBQ0Esd0NBQUE7QUFERjs7QUFJQTtFQUNFLG9DQUFBO0FBREY7O0FBR0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQURKOztBQUlDO0VBQ0MsMkJBQUE7QUFGRjs7QUFJRTtFQUNDLGVBQUE7RUFDRywyQ0FBQTtFQUNILGlDQUFBO0FBRkg7O0FBS0U7RUFDSSxXQUFBO0VBQ0QsZUFBQTtFQUNELGdCQUFBO0VBQ0QscUJBQUE7RUFDQSw0QkFBQTtBQUhIOztBQU9FO0VBQ0UsK0JBQUE7RUFDQSxrQ0FBQTtBQUxKOztBQU9JO0VBQ0UsOEJBQUE7QUFMTjs7QUFPTTtFQUNFLHlDQUFBO0FBTFI7O0FBUU07RUFDRSw0Q0FBQTtFQUVBLDBEQUFBO0FBUFI7O0FBV0k7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQVROOztBQVdNO0VBQ0UsaUNBQUE7RUFDQSxvREFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFUUjs7QUFhSTtFQUNFLHlDQUFBO1VBQUEsd0NBQUE7RUFDQSxrQkFBQTtBQVhOOztBQWFNO0VBQ0UsV0FBQTtFQUNBLDJDQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0FBWFI7O0FBYVE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFYVjs7QUFlTTtFQUNFLFdBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBR0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBRUEsOEJBQUE7RUFDQSw0QkFBQTtBQWhCUiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvLXBsYXlsaXN0L3N0eWxlcy92aWRlby1wbGF5bGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDdXN0b20gdmFyaWFibGVzXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcbn1cblxuLnZpZGVvLXBsYXlsaXN0LWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG5cbiAgLnNzci12aWRlbyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cblx0LnZpZGVvLWRhdGEtc2VjdGlvbiB7XG5cdFx0cGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pO1xuXG5cdFx0LnZpZGVvLXRpdGxlIHtcblx0XHRcdG1hcmdpbi10b3A6IDBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG5cdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG5cdFx0fVxuXG5cdFx0LnZpZGVvLWRlc2NyaXB0aW9uIHtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgIFx0Zm9udC1zaXplOiAxM3B4O1xuICBcdFx0bGluZS1oZWlnaHQ6IDEuMztcblx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjNweDtcblx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG5cdFx0fVxuXHR9XG5cbiAgLnZpZGVvLXBsYXlsaXN0LXNlY3Rpb25cdHtcbiAgICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG5cbiAgICAucGxheWxpc3QtaXRlbS1yb3cge1xuICAgICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICB9XG5cbiAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgICAvLyBib3gtc2hhZG93IGF0IHRoZSBib3R0b21cbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtN3B4IDNweCAtOHB4IHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucGxheS1pY29uLXdyYXBwZXIge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgLnBsYXktaWNvbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QtcmdiKSwgLjcpO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC52aWRlby1pbmZvLXdyYXBwZXIge1xuICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcblxuICAgICAgLmltYWdlLXRpdGxlIHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuXG4gICAgICAgIGFwcC10ZXh0LXNoZWxsIHtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmltYWdlLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuXG4gICAgICAgIC8vIGxpbmUgY2xhbXAgaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9saW5lLWNsYW1waW4vI2FydGljbGUtaGVhZGVyLWlkLTBcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMztcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgLy8gd2UgbmVlZCBhdXRvcHJlZml4ZXIgb2ZmIGZvciBuZXh0IGxpbmUgaHR0cHM6Ly9naXRodWIuY29tL3Bvc3Rjc3MvYXV0b3ByZWZpeGVyL2lzc3Vlcy83NzYjaXNzdWVjb21tZW50LTQ0NTI0OTE3NFxuICAgICAgICAvKiBhdXRvcHJlZml4ZXI6IGlnbm9yZSBuZXh0ICovXG4gICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */", "app-image-shell.video-image[_ngcontent-%COMP%] {\n  background-position: center;\n}\n\n.image-title[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-height: 14px;\n}\n\n.image-description[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-height: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW8tcGxheWxpc3Qvc3R5bGVzL3ZpZGVvLXBsYXlsaXN0LnNoZWxsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBQTtBQUNGOztBQUVBO0VBQ0UsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLDhCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC92aWRlby1wbGF5bGlzdC9zdHlsZXMvdmlkZW8tcGxheWxpc3Quc2hlbGwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1pbWFnZS1zaGVsbC52aWRlby1pbWFnZSB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLmltYWdlLXRpdGxlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG59XG5cbi5pbWFnZS1kZXNjcmlwdGlvbiA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxM3B4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoPlaylistPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-video-playlist',
                templateUrl: './video-playlist.page.html',
                styleUrls: [
                    './styles/video-playlist.page.scss',
                    './styles/video-playlist.shell.scss'
                ]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }]; }, { isShell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.is-shell']
        }] }); })();


/***/ }),

/***/ "LCGB":
/*!***********************************************************!*\
  !*** ./src/app/video-playlist/video-playlist.resolver.ts ***!
  \***********************************************************/
/*! exports provided: VideoPlaylistResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPlaylistResolver", function() { return VideoPlaylistResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _video_playlist_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video-playlist.service */ "pXHv");




class VideoPlaylistResolver {
    constructor(videoPlaylistService) {
        this.videoPlaylistService = videoPlaylistService;
    }
    resolve() {
        const dataSource = this.videoPlaylistService.getVideoPlaylistDataSource();
        const dataStore = this.videoPlaylistService.getVideoPlaylistStore(dataSource);
        return dataStore;
    }
}
VideoPlaylistResolver.ɵfac = function VideoPlaylistResolver_Factory(t) { return new (t || VideoPlaylistResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_video_playlist_service__WEBPACK_IMPORTED_MODULE_1__["VideoPlaylistService"])); };
VideoPlaylistResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: VideoPlaylistResolver, factory: VideoPlaylistResolver.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoPlaylistResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _video_playlist_service__WEBPACK_IMPORTED_MODULE_1__["VideoPlaylistService"] }]; }, null); })();


/***/ }),

/***/ "PTlW":
/*!********************************************************!*\
  !*** ./src/app/video-playlist/video-playlist.model.ts ***!
  \********************************************************/
/*! exports provided: VideoModel, VideoPlaylistModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoModel", function() { return VideoModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPlaylistModel", function() { return VideoPlaylistModel; });
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shell/data-store */ "f/Ol");

class VideoModel {
}
class VideoPlaylistModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
        this.selected_video = new VideoModel();
        this.video_playlist = [
            new VideoModel(),
            new VideoModel(),
            new VideoModel()
        ];
    }
}


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

/***/ "pXHv":
/*!**********************************************************!*\
  !*** ./src/app/video-playlist/video-playlist.service.ts ***!
  \**********************************************************/
/*! exports provided: VideoPlaylistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPlaylistService", function() { return VideoPlaylistService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _video_playlist_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./video-playlist.model */ "PTlW");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shell/data-store */ "f/Ol");
/* harmony import */ var _utils_transfer_state_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/transfer-state-helper */ "O2zu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");









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
            const shellModel = new _video_playlist_model__WEBPACK_IMPORTED_MODULE_2__["VideoPlaylistModel"]();
            this.videoPlaylistDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_3__["DataStore"](shellModel);
            // If running in the server, then don't add shell to the Data Store
            // If we already loaded the Data Source in the server, then don't show a shell when transitioning back to the broswer from the server
            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["isPlatformServer"])(this.platformId) || dataSource['ssr_state']) {
                // Trigger loading mechanism with 0 delay (this will prevent the shell to be shown)
                this.videoPlaylistDataStore.load(dataSource, 0);
            }
            else { // On browser transitions
                // Trigger the loading mechanism (with shell)
                this.videoPlaylistDataStore.load(dataSource);
            }
        }
        return this.videoPlaylistDataStore;
    }
}
VideoPlaylistService.ɵfac = function VideoPlaylistService_Factory(t) { return new (t || VideoPlaylistService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_transfer_state_helper__WEBPACK_IMPORTED_MODULE_4__["TransferStateHelper"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
VideoPlaylistService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: VideoPlaylistService, factory: VideoPlaylistService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoPlaylistService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }, { type: _utils_transfer_state_helper__WEBPACK_IMPORTED_MODULE_4__["TransferStateHelper"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "v9/t":
/*!*********************************************************!*\
  !*** ./src/app/video-playlist/video-playlist.module.ts ***!
  \*********************************************************/
/*! exports provided: VideoPlaylistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPlaylistPageModule", function() { return VideoPlaylistPageModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _video_playlist_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./video-playlist.page */ "J1pr");
/* harmony import */ var _video_playlist_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./video-playlist.resolver */ "LCGB");
/* harmony import */ var _video_playlist_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./video-playlist.service */ "pXHv");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "j1ZV");
/* harmony import */ var _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @videogular/ngx-videogular/core */ "4w57");
/* harmony import */ var _videogular_ngx_videogular_controls__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @videogular/ngx-videogular/controls */ "v2j/");
/* harmony import */ var _videogular_ngx_videogular_overlay_play__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @videogular/ngx-videogular/overlay-play */ "cqME");
/* harmony import */ var _videogular_ngx_videogular_buffering__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @videogular/ngx-videogular/buffering */ "VKRg");














const routes = [
    {
        path: '',
        component: _video_playlist_page__WEBPACK_IMPORTED_MODULE_4__["VideoPlaylistPage"],
        resolve: {
            data: _video_playlist_resolver__WEBPACK_IMPORTED_MODULE_5__["VideoPlaylistResolver"]
        }
    }
];
class VideoPlaylistPageModule {
}
VideoPlaylistPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: VideoPlaylistPageModule });
VideoPlaylistPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function VideoPlaylistPageModule_Factory(t) { return new (t || VideoPlaylistPageModule)(); }, providers: [
        _video_playlist_resolver__WEBPACK_IMPORTED_MODULE_5__["VideoPlaylistResolver"],
        _video_playlist_service__WEBPACK_IMPORTED_MODULE_6__["VideoPlaylistService"]
    ], imports: [[
            _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
            _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_8__["VgCoreModule"],
            _videogular_ngx_videogular_controls__WEBPACK_IMPORTED_MODULE_9__["VgControlsModule"],
            _videogular_ngx_videogular_overlay_play__WEBPACK_IMPORTED_MODULE_10__["VgOverlayPlayModule"],
            _videogular_ngx_videogular_buffering__WEBPACK_IMPORTED_MODULE_11__["VgBufferingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](VideoPlaylistPageModule, { declarations: [_video_playlist_page__WEBPACK_IMPORTED_MODULE_4__["VideoPlaylistPage"]], imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_8__["VgCoreModule"],
        _videogular_ngx_videogular_controls__WEBPACK_IMPORTED_MODULE_9__["VgControlsModule"],
        _videogular_ngx_videogular_overlay_play__WEBPACK_IMPORTED_MODULE_10__["VgOverlayPlayModule"],
        _videogular_ngx_videogular_buffering__WEBPACK_IMPORTED_MODULE_11__["VgBufferingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](VideoPlaylistPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                    _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_8__["VgCoreModule"],
                    _videogular_ngx_videogular_controls__WEBPACK_IMPORTED_MODULE_9__["VgControlsModule"],
                    _videogular_ngx_videogular_overlay_play__WEBPACK_IMPORTED_MODULE_10__["VgOverlayPlayModule"],
                    _videogular_ngx_videogular_buffering__WEBPACK_IMPORTED_MODULE_11__["VgBufferingModule"]
                ],
                declarations: [_video_playlist_page__WEBPACK_IMPORTED_MODULE_4__["VideoPlaylistPage"]],
                providers: [
                    _video_playlist_resolver__WEBPACK_IMPORTED_MODULE_5__["VideoPlaylistResolver"],
                    _video_playlist_service__WEBPACK_IMPORTED_MODULE_6__["VideoPlaylistService"]
                ]
            }]
    }], null, null); })();


/***/ })

};;
//# sourceMappingURL=video-playlist-video-playlist-module.js.map