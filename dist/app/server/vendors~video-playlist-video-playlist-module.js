exports.ids = ["vendors~video-playlist-video-playlist-module"];
exports.modules = {

/***/ "4w57":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@videogular/ngx-videogular/__ivy_ngcc__/fesm2015/videogular-ngx-videogular-core.js ***!
  \*********************************************************************************************************/
/*! exports provided: VgApiService, VgControlsHiddenService, VgCoreModule, VgCuePointsDirective, VgEvents, VgFullscreenApiService, VgMediaDirective, VgMediaElement, VgPlayerComponent, VgStates, VgUtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VgApiService", function() { return VgApiService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VgControlsHiddenService", function() { return VgControlsHiddenService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VgCoreModule", function() { return VgCoreModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VgCuePointsDirective", function() { return VgCuePointsDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VgEvents", function() { return VgEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VgFullscreenApiService", function() { return VgFullscreenApiService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VgMediaDirective", function() { return VgMediaDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VgMediaElement", function() { return VgMediaElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VgPlayerComponent", function() { return VgPlayerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VgStates", function() { return VgStates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VgUtilsService", function() { return VgUtilsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/states/vg-states.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


const _c0 = ["*"];
class VgStates {
}
VgStates.ɵfac = function VgStates_Factory(t) { return new (t || VgStates)(); };
VgStates.VG_ENDED = 'ended';
VgStates.VG_PAUSED = 'paused';
VgStates.VG_PLAYING = 'playing';
VgStates.VG_LOADING = 'waiting';
/** @nocollapse */ VgStates.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function VgStates_Factory() { return new VgStates(); }, token: VgStates, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgStates, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/vg-api/vg-api.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VgApiService {
    constructor() {
        this.medias = {}; // TODO: refactor to Set<IPlayable>
        this.playerReadyEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.isPlayerReady = false;
    }
    /**
     * @param {?} fsAPI
     * @return {?}
     */
    onPlayerReady(fsAPI) {
        this.fsAPI = fsAPI;
        this.isPlayerReady = true;
        this.playerReadyEvent.emit(this);
    }
    /**
     * @return {?}
     */
    getDefaultMedia() {
        for (const item in this.medias) {
            if (this.medias[item]) {
                return this.medias[item];
            }
        }
    }
    /**
     * @return {?}
     */
    getMasterMedia() {
        /** @type {?} */
        let master;
        for (const id in this.medias) {
            if (this.medias[id].vgMaster === 'true' ||
                this.medias[id].vgMaster === true) {
                master = this.medias[id];
                break;
            }
        }
        return master || this.getDefaultMedia();
    }
    /**
     * @return {?}
     */
    isMasterDefined() {
        /** @type {?} */
        let result = false;
        for (const id in this.medias) {
            if (this.medias[id].vgMaster === 'true' ||
                this.medias[id].vgMaster === true) {
                result = true;
                break;
            }
        }
        return result;
    }
    /**
     * @param {?=} id
     * @return {?}
     */
    getMediaById(id = null) {
        /** @type {?} */
        let media = this.medias[id];
        if (!id || id === '*') {
            media = this;
        }
        return media;
    }
    /**
     * @return {?}
     */
    play() {
        for (const id in this.medias) {
            if (this.medias[id]) {
                this.medias[id].play();
            }
        }
    }
    /**
     * @return {?}
     */
    pause() {
        for (const id in this.medias) {
            if (this.medias[id]) {
                this.medias[id].pause();
            }
        }
    }
    /**
     * @return {?}
     */
    get duration() {
        return this.$$getAllProperties('duration');
    }
    /**
     * @param {?} seconds
     * @return {?}
     */
    set currentTime(seconds) {
        this.$$setAllProperties('currentTime', seconds);
    }
    /**
     * @return {?}
     */
    get currentTime() {
        return this.$$getAllProperties('currentTime');
    }
    /**
     * @param {?} state
     * @return {?}
     */
    set state(state) {
        this.$$setAllProperties('state', state);
    }
    /**
     * @return {?}
     */
    get state() {
        return this.$$getAllProperties('state');
    }
    /**
     * @param {?} volume
     * @return {?}
     */
    set volume(volume) {
        this.$$setAllProperties('volume', volume);
    }
    /**
     * @return {?}
     */
    get volume() {
        return this.$$getAllProperties('volume');
    }
    /**
     * @param {?} rate
     * @return {?}
     */
    set playbackRate(rate) {
        this.$$setAllProperties('playbackRate', rate);
    }
    /**
     * @return {?}
     */
    get playbackRate() {
        return this.$$getAllProperties('playbackRate');
    }
    /**
     * @return {?}
     */
    get canPlay() {
        return this.$$getAllProperties('canPlay');
    }
    /**
     * @return {?}
     */
    get canPlayThrough() {
        return this.$$getAllProperties('canPlayThrough');
    }
    /**
     * @return {?}
     */
    get isMetadataLoaded() {
        return this.$$getAllProperties('isMetadataLoaded');
    }
    /**
     * @return {?}
     */
    get isWaiting() {
        return this.$$getAllProperties('isWaiting');
    }
    /**
     * @return {?}
     */
    get isCompleted() {
        return this.$$getAllProperties('isCompleted');
    }
    /**
     * @return {?}
     */
    get isLive() {
        return this.$$getAllProperties('isLive');
    }
    /**
     * @return {?}
     */
    get isMaster() {
        return this.$$getAllProperties('isMaster');
    }
    /**
     * @return {?}
     */
    get time() {
        return this.$$getAllProperties('time');
    }
    /**
     * @return {?}
     */
    get buffer() {
        return this.$$getAllProperties('buffer');
    }
    /**
     * @return {?}
     */
    get buffered() {
        return this.$$getAllProperties('buffered');
    }
    /**
     * @return {?}
     */
    get subscriptions() {
        return this.$$getAllProperties('subscriptions');
    }
    /**
     * @return {?}
     */
    get textTracks() {
        return this.$$getAllProperties('textTracks');
    }
    /**
     * @param {?} value
     * @param {?=} byPercent
     * @return {?}
     */
    seekTime(value, byPercent = false) {
        for (const id in this.medias) {
            if (this.medias[id]) {
                this.$$seek(this.medias[id], value, byPercent);
            }
        }
    }
    /**
     * @param {?} media
     * @param {?} value
     * @param {?=} byPercent
     * @return {?}
     */
    $$seek(media, value, byPercent = false) {
        /** @type {?} */
        let second;
        /** @type {?} */
        let duration = media.duration;
        if (byPercent) {
            if (this.isMasterDefined()) {
                duration = this.getMasterMedia().duration;
            }
            second = (value * duration) / 100;
        }
        else {
            second = value;
        }
        media.currentTime = second;
    }
    /**
     * @param {?} type
     * @param {?=} label
     * @param {?=} language
     * @return {?}
     */
    addTextTrack(type, label, language) {
        for (const id in this.medias) {
            if (this.medias[id]) {
                this.$$addTextTrack(this.medias[id], type, label, language);
            }
        }
    }
    /**
     * @param {?} media
     * @param {?} type
     * @param {?=} label
     * @param {?=} language
     * @return {?}
     */
    $$addTextTrack(media, type, label, language) {
        media.addTextTrack(type, label, language);
    }
    /**
     * @param {?} property
     * @return {?}
     */
    $$getAllProperties(property) {
        /** @type {?} */
        const medias = {};
        /** @type {?} */
        let result;
        for (const id in this.medias) {
            if (this.medias[id]) {
                medias[id] = this.medias[id];
            }
        }
        /** @type {?} */
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
                        result = { current: 0, total: 0, left: 0 };
                        break;
                }
                break;
            case 1:
                // If there's only one media element then return the plain value
                /** @type {?} */
                const firstMediaId = Object.keys(medias)[0];
                result = medias[firstMediaId][property];
                break;
            default:
                // TODO: return 'master' value
                /** @type {?} */
                const master = this.getMasterMedia();
                result = medias[master.id][property];
        }
        return result;
    }
    /**
     * @param {?} property
     * @param {?} value
     * @return {?}
     */
    $$setAllProperties(property, value) {
        for (const id in this.medias) {
            if (this.medias[id]) {
                this.medias[id][property] = value;
            }
        }
    }
    /**
     * @param {?} elem
     * @return {?}
     */
    registerElement(elem) {
        this.videogularElement = elem;
    }
    /**
     * @param {?} media
     * @return {?}
     */
    registerMedia(media) {
        this.medias[media.id] = media;
    }
    /**
     * @param {?} media
     * @return {?}
     */
    unregisterMedia(media) {
        delete this.medias[media.id];
    }
}
VgApiService.ɵfac = function VgApiService_Factory(t) { return new (t || VgApiService)(); };
/** @nocollapse */
VgApiService.ctorParameters = () => [];
/** @nocollapse */ VgApiService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function VgApiService_Factory() { return new VgApiService(); }, token: VgApiService, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/vg-controls-hidden/vg-controls-hidden.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VgControlsHiddenService {
    constructor() {
        this.isHiddenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.isHidden = this.isHiddenSubject.asObservable();
    }
    /**
     * @param {?} hidden
     * @return {?}
     */
    state(hidden) {
        this.isHiddenSubject.next(hidden);
    }
}
VgControlsHiddenService.ɵfac = function VgControlsHiddenService_Factory(t) { return new (t || VgControlsHiddenService)(); };
/** @nocollapse */
VgControlsHiddenService.ctorParameters = () => [];
/** @nocollapse */ VgControlsHiddenService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function VgControlsHiddenService_Factory() { return new VgControlsHiddenService(); }, token: VgControlsHiddenService, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgControlsHiddenService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/vg-utils/vg-utils.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VgUtilsService {
    /**
     * Inspired by Paul Irish
     * https://gist.github.com/paulirish/211209
     * @return {?}
     */
    static getZIndex() {
        /** @type {?} */
        let zIndex = 1;
        /** @type {?} */
        let elementZIndex;
        /** @type {?} */
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
    /**
     * @return {?}
     */
    static isMobileDevice() {
        // return (
        //   typeof window.screen.orientation !== 'undefined' ||
        //   navigator.userAgent.indexOf('IEMobile') !== -1
        // );
        // window.orientation is deprecated and we should use window.screen.orientation
        return (typeof window.orientation !== 'undefined' ||
            navigator.userAgent.indexOf('IEMobile') !== -1);
    }
    /**
     * @return {?}
     */
    static isiOSDevice() {
        return (navigator.userAgent.match(/ip(hone|ad|od)/i) &&
            !navigator.userAgent.match(/(iemobile)[\/\s]?([\w\.]*)/i));
    }
    /**
     * @return {?}
     */
    static isCordova() {
        return (document.URL.indexOf('http://') === -1 &&
            document.URL.indexOf('https://') === -1);
    }
}
VgUtilsService.ɵfac = function VgUtilsService_Factory(t) { return new (t || VgUtilsService)(); };
/** @nocollapse */ VgUtilsService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function VgUtilsService_Factory() { return new VgUtilsService(); }, token: VgUtilsService, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgUtilsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/vg-fullscreen-api/vg-fullscreen-api.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VgFullscreenApiService {
    constructor() {
        this.nativeFullscreen = true;
        this.isFullscreen = false;
        this.onChangeFullscreen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} elem
     * @param {?} medias
     * @return {?}
     */
    init(elem, medias) {
        this.videogularElement = elem;
        this.medias = medias;
        /** @type {?} */
        const APIs = {
            w3: {
                enabled: 'fullscreenEnabled',
                element: 'fullscreenElement',
                request: 'requestFullscreen',
                exit: 'exitFullscreen',
                onchange: 'fullscreenchange',
                onerror: 'fullscreenerror',
            },
            newWebkit: {
                enabled: 'webkitFullscreenEnabled',
                element: 'webkitFullscreenElement',
                request: 'webkitRequestFullscreen',
                exit: 'webkitExitFullscreen',
                onchange: 'webkitfullscreenchange',
                onerror: 'webkitfullscreenerror',
            },
            oldWebkit: {
                enabled: 'webkitIsFullScreen',
                element: 'webkitCurrentFullScreenElement',
                request: 'webkitRequestFullScreen',
                exit: 'webkitCancelFullScreen',
                onchange: 'webkitfullscreenchange',
                onerror: 'webkitfullscreenerror',
            },
            moz: {
                enabled: 'mozFullScreen',
                element: 'mozFullScreenElement',
                request: 'mozRequestFullScreen',
                exit: 'mozCancelFullScreen',
                onchange: 'mozfullscreenchange',
                onerror: 'mozfullscreenerror',
            },
            ios: {
                enabled: 'webkitFullscreenEnabled',
                element: 'webkitFullscreenElement',
                request: 'webkitEnterFullscreen',
                exit: 'webkitExitFullscreen',
                onchange: 'webkitendfullscreen',
                // Hack for iOS: webkitfullscreenchange it's not firing
                onerror: 'webkitfullscreenerror',
            },
            ms: {
                enabled: 'msFullscreenEnabled',
                element: 'msFullscreenElement',
                request: 'msRequestFullscreen',
                exit: 'msExitFullscreen',
                onchange: 'MSFullscreenChange',
                onerror: 'MSFullscreenError',
            },
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
        /** @type {?} */
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
        this.fsChangeSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(fsElemDispatcher, this.polyfill.onchange).subscribe((/**
         * @return {?}
         */
        () => {
            this.onFullscreenChange();
        }));
    }
    /**
     * @return {?}
     */
    onFullscreenChange() {
        this.isFullscreen = !!document[this.polyfill.element];
        this.onChangeFullscreen.emit(this.isFullscreen);
    }
    /**
     * @param {?=} element
     * @return {?}
     */
    toggleFullscreen(element = null) {
        if (this.isFullscreen) {
            this.exit();
        }
        else {
            this.request(element);
        }
    }
    /**
     * @param {?} elem
     * @return {?}
     */
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
                if ((!this.polyfill.enabled && elem === this.videogularElement) ||
                    VgUtilsService.isiOSDevice()) {
                    elem = this.medias.toArray()[0].elem;
                }
                this.enterElementInFullScreen(elem);
            }
            else {
                this.enterElementInFullScreen(this.videogularElement);
            }
        }
    }
    /**
     * @param {?} elem
     * @return {?}
     */
    enterElementInFullScreen(elem) {
        elem[this.polyfill.request]();
    }
    /**
     * @return {?}
     */
    exit() {
        this.isFullscreen = false;
        this.onChangeFullscreen.emit(false);
        // Exit from native fullscreen
        if (this.isAvailable && this.nativeFullscreen) {
            document[this.polyfill.exit]();
        }
    }
}
VgFullscreenApiService.ɵfac = function VgFullscreenApiService_Factory(t) { return new (t || VgFullscreenApiService)(); };
/** @nocollapse */
VgFullscreenApiService.ctorParameters = () => [];
/** @nocollapse */ VgFullscreenApiService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function VgFullscreenApiService_Factory() { return new VgFullscreenApiService(); }, token: VgFullscreenApiService, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgFullscreenApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/events/vg-events.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VgEvents {
}
VgEvents.ɵfac = function VgEvents_Factory(t) { return new (t || VgEvents)(); };
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
/** @nocollapse */ VgEvents.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function VgEvents_Factory() { return new VgEvents(); }, token: VgEvents, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgEvents, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/vg-cue-points/vg-cue-points.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VgCuePointsDirective {
    /**
     * @param {?} ref
     */
    constructor(ref) {
        this.ref = ref;
        this.onEnterCuePoint = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onUpdateCuePoint = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onExitCuePoint = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onCompleteCuePoint = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.subscriptions = [];
        this.cuesSubscriptions = [];
        this.totalCues = 0;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.onLoad$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.ref.nativeElement, VgEvents.VG_LOAD);
        this.subscriptions.push(this.onLoad$.subscribe(this.onLoad.bind(this)));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onLoad(event) {
        /** @type {?} */
        const cues = event.target.track.cues;
        this.ref.nativeElement.cues = cues;
        this.updateCuePoints(cues);
    }
    /**
     * @param {?} cues
     * @return {?}
     */
    updateCuePoints(cues) {
        this.cuesSubscriptions.forEach((/**
         * @param {?} s
         * @return {?}
         */
        (s) => s.unsubscribe()));
        for (let i = 0, l = cues.length; i < l; i++) {
            this.onEnter$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(cues[i], VgEvents.VG_ENTER);
            this.cuesSubscriptions.push(this.onEnter$.subscribe(this.onEnter.bind(this)));
            this.onExit$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(cues[i], VgEvents.VG_EXIT);
            this.cuesSubscriptions.push(this.onExit$.subscribe(this.onExit.bind(this)));
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onEnter(event) {
        this.onEnterCuePoint.emit(event.target);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onExit(event) {
        this.onExitCuePoint.emit(event.target);
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (this.ref.nativeElement.track && this.ref.nativeElement.track.cues) {
            /** @type {?} */
            const changes = this.totalCues !== this.ref.nativeElement.track.cues.length;
            if (changes) {
                this.totalCues = this.ref.nativeElement.track.cues.length;
                this.ref.nativeElement.cues = this.ref.nativeElement.track.cues;
                this.updateCuePoints(this.ref.nativeElement.track.cues);
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions.forEach((/**
         * @param {?} s
         * @return {?}
         */
        (s) => s.unsubscribe()));
    }
}
VgCuePointsDirective.ɵfac = function VgCuePointsDirective_Factory(t) { return new (t || VgCuePointsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
VgCuePointsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: VgCuePointsDirective, selectors: [["", "vgCuePoints", ""]], outputs: { onEnterCuePoint: "onEnterCuePoint", onUpdateCuePoint: "onUpdateCuePoint", onExitCuePoint: "onExitCuePoint", onCompleteCuePoint: "onCompleteCuePoint" } });
/** @nocollapse */
VgCuePointsDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
VgCuePointsDirective.propDecorators = {
    onEnterCuePoint: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onUpdateCuePoint: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onExitCuePoint: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onCompleteCuePoint: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgCuePointsDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[vgCuePoints]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { onEnterCuePoint: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onUpdateCuePoint: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onExitCuePoint: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onCompleteCuePoint: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/vg-media/vg-media.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VgMediaDirective {
    /**
     * @param {?} api
     * @param {?} ref
     */
    constructor(api, ref) {
        this.api = api;
        this.ref = ref;
        this.state = VgStates.VG_PAUSED;
        this.time = { current: 0, total: 0, left: 0 };
        this.buffer = { end: 0 };
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
        this.bufferDetected = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.vgMedia.nodeName) {
            // It's a native element
            this.elem = this.vgMedia;
        }
        else {
            // It's an Angular Class
            this.elem = this.vgMedia.elem;
        }
        // Just in case we're creating this vgMedia dynamically register again into API
        this.api.registerMedia(this);
        this.subscriptions = {
            // Native events
            abort: Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])((/** @type {?} */ (this.elem)), VgEvents.VG_ABORT),
            canPlay: Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])((/** @type {?} */ (this.elem)), VgEvents.VG_CAN_PLAY),
            canPlayThrough: Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])((/** @type {?} */ (this.elem)), VgEvents.VG_CAN_PLAY_THROUGH),
            durationChange: Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])((/** @type {?} */ (this.elem)), VgEvents.VG_DURATION_CHANGE),
            emptied: Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])((/** @type {?} */ (this.elem)), VgEvents.VG_EMPTIED),
            encrypted: Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])((/** @type {?} */ (this.elem)), VgEvents.VG_ENCRYPTED),
            ended: Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])((/** @type {?} */ (this.elem)), VgEvents.VG_ENDED),
            error: Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])((/** @type {?} */ (this.elem)), VgEvents.VG_ERROR),
            loadedData: Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])((/** @type {?} */ (this.elem)), VgEvents.VG_LOADED_DATA),
            loadedMetadata: Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])((/** @type {?} */ (this.elem)), VgEvents.VG_LOADED_METADATA),
            loadStart: Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])((/** @type {?} */ (this.elem)), VgEvents.VG_LOAD_START),
            pause: Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])((/** @type {?} */ (this.elem)), VgEvents.VG_PAUSE),
            play: Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])((/** @type {?} */ (this.elem)), VgEvents.VG_PLAY),
            playing: Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])((/** @type {?} */ (this.elem)), VgEvents.VG_PLAYING),
            progress: Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])((/** @type {?} */ (this.elem)), VgEvents.VG_PROGRESS),
            rateChange: Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])((/** @type {?} */ (this.elem)), VgEvents.VG_RATE_CHANGE),
            seeked: Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])((/** @type {?} */ (this.elem)), VgEvents.VG_SEEKED),
            seeking: Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])((/** @type {?} */ (this.elem)), VgEvents.VG_SEEKING),
            stalled: Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])((/** @type {?} */ (this.elem)), VgEvents.VG_STALLED),
            suspend: Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])((/** @type {?} */ (this.elem)), VgEvents.VG_SUSPEND),
            timeUpdate: Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])((/** @type {?} */ (this.elem)), VgEvents.VG_TIME_UPDATE),
            volumeChange: Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])((/** @type {?} */ (this.elem)), VgEvents.VG_VOLUME_CHANGE),
            waiting: Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])((/** @type {?} */ (this.elem)), VgEvents.VG_WAITING),
            // Advertisement only events
            startAds: Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])((/** @type {?} */ (window)), VgEvents.VG_START_ADS),
            endAds: Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])((/** @type {?} */ (window)), VgEvents.VG_END_ADS),
            // See changes on <source> child elements to reload the video file
            mutation: new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((/**
             * @param {?} observer
             * @return {?}
             */
            (observer) => {
                /** @type {?} */
                const domObs = new MutationObserver((/**
                 * @param {?} mutations
                 * @return {?}
                 */
                (mutations) => {
                    observer.next(mutations);
                }));
                domObs.observe((/** @type {?} */ (this.elem)), { childList: true, attributes: true });
                return (/**
                 * @return {?}
                 */
                () => {
                    domObs.disconnect();
                });
            })),
            // Custom buffering detection
            bufferDetected: this.bufferDetected,
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
            this.api.playerReadyEvent.subscribe((/**
             * @return {?}
             */
            () => {
                this.prepareSync();
            }));
        }
    }
    /**
     * @return {?}
     */
    prepareSync() {
        /** @type {?} */
        const canPlayAll = [];
        for (const media in this.api.medias) {
            if (this.api.medias[media]) {
                canPlayAll.push(this.api.medias[media].subscriptions.canPlay);
            }
        }
        this.canPlayAllSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(canPlayAll)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((/**
         * @param {...?} params
         * @return {?}
         */
        (...params) => {
            /** @type {?} */
            const checkReadyState = (/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                return event.target.readyState === 4;
            });
            /** @type {?} */
            const allReady = params.some(checkReadyState);
            if (allReady && !this.syncSubscription) {
                this.startSync();
                this.syncSubscription.unsubscribe();
            }
        })))
            .subscribe();
    }
    /**
     * @return {?}
     */
    startSync() {
        this.syncSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, 1000).subscribe((/**
         * @return {?}
         */
        () => {
            for (const media in this.api.medias) {
                if (this.api.medias[media] !== this) {
                    /** @type {?} */
                    const diff = this.api.medias[media].currentTime - this.currentTime;
                    if (diff < -0.3 || diff > 0.3) {
                        this.playAtferSync = this.state === VgStates.VG_PLAYING;
                        this.pause();
                        this.api.medias[media].pause();
                        this.api.medias[media].currentTime = this.currentTime;
                    }
                    else {
                        if (this.playAtferSync) {
                            this.play();
                            this.api.medias[media].play();
                            this.playAtferSync = false;
                        }
                    }
                }
            }
        }));
    }
    /**
     * @param {?} mutations
     * @return {?}
     */
    onMutation(mutations) {
        // Detect changes only for source elements or src attribute
        for (let i = 0, l = mutations.length; i < l; i++) {
            /** @type {?} */
            const mut = mutations[i];
            if (mut.type === 'attributes' && mut.attributeName === 'src') {
                // Only load src file if it's not a blob (for DASH / HLS sources)
                if (((/** @type {?} */ (mut.target))).src &&
                    ((/** @type {?} */ (mut.target))).src.length > 0 &&
                    ((/** @type {?} */ (mut.target))).src.indexOf('blob:') < 0) {
                    this.loadMedia();
                    break;
                }
            }
            else if (mut.type === 'childList' &&
                mut.removedNodes.length &&
                mut.removedNodes[0].nodeName.toLowerCase() === 'source') {
                this.loadMedia();
                break;
            }
        }
    }
    /**
     * @return {?}
     */
    loadMedia() {
        this.vgMedia.pause();
        this.vgMedia.currentTime = 0;
        // Start buffering until we can play the media file
        this.stopBufferCheck();
        this.isBufferDetected = true;
        this.bufferDetected.next(this.isBufferDetected);
        // TODO: This is ugly, we should find something cleaner. For some reason a TimerObservable doesn't works.
        setTimeout((/**
         * @return {?}
         */
        () => this.vgMedia.load()), 10);
    }
    /**
     * @return {?}
     */
    play() {
        // short-circuit if already playing
        if (this.playPromise ||
            (this.state !== VgStates.VG_PAUSED && this.state !== VgStates.VG_ENDED)) {
            return;
        }
        this.playPromise = this.vgMedia.play();
        // browser has async play promise
        if (this.playPromise && this.playPromise.then && this.playPromise.catch) {
            this.playPromise
                .then((/**
             * @return {?}
             */
            () => {
                this.playPromise = null;
            }))
                .catch((/**
             * @return {?}
             */
            () => {
                this.playPromise = null;
                // deliberately empty for the sake of eating console noise
            }));
        }
        return this.playPromise;
    }
    /**
     * @return {?}
     */
    pause() {
        // browser has async play promise
        if (this.playPromise) {
            this.playPromise.then((/**
             * @return {?}
             */
            () => {
                this.vgMedia.pause();
            }));
        }
        else {
            this.vgMedia.pause();
        }
    }
    /**
     * @return {?}
     */
    get id() {
        // We should return undefined if vgMedia still doesn't exist
        /** @type {?} */
        let result;
        if (this.vgMedia) {
            result = this.vgMedia.id;
        }
        return result;
    }
    /**
     * @return {?}
     */
    get duration() {
        return this.vgMedia.duration === Infinity
            ? this.specifiedDuration
            : this.vgMedia.duration;
    }
    /**
     * @param {?} seconds
     * @return {?}
     */
    set currentTime(seconds) {
        this.vgMedia.currentTime = seconds;
        // this.elem.dispatchEvent(new CustomEvent(VgEvents.VG_SEEK));
    }
    /**
     * @return {?}
     */
    get currentTime() {
        return this.vgMedia.currentTime;
    }
    /**
     * @param {?} volume
     * @return {?}
     */
    set volume(volume) {
        this.vgMedia.volume = volume;
    }
    /**
     * @return {?}
     */
    get volume() {
        return this.vgMedia.volume;
    }
    /**
     * @param {?} rate
     * @return {?}
     */
    set playbackRate(rate) {
        this.vgMedia.playbackRate = rate;
    }
    /**
     * @return {?}
     */
    get playbackRate() {
        return this.vgMedia.playbackRate;
    }
    /**
     * @return {?}
     */
    get buffered() {
        return this.vgMedia.buffered;
    }
    /**
     * @return {?}
     */
    get textTracks() {
        return this.vgMedia.textTracks;
    }
    // @ts-ignore
    /**
     * @param {?} event
     * @return {?}
     */
    onCanPlay(event) {
        this.isBufferDetected = false;
        this.bufferDetected.next(this.isBufferDetected);
        this.canPlay = true;
        this.ref.detectChanges();
    }
    // @ts-ignore
    /**
     * @param {?} event
     * @return {?}
     */
    onCanPlayThrough(event) {
        this.isBufferDetected = false;
        this.bufferDetected.next(this.isBufferDetected);
        this.canPlayThrough = true;
        this.ref.detectChanges();
    }
    // @ts-ignore
    /**
     * @param {?} event
     * @return {?}
     */
    onLoadMetadata(event) {
        this.isMetadataLoaded = true;
        this.time = {
            current: 0,
            left: 0,
            total: this.duration * 1000,
        };
        this.state = VgStates.VG_PAUSED;
        // Live streaming check
        /** @type {?} */
        const t = Math.round(this.time.total);
        this.isLive = t === Infinity;
        this.ref.detectChanges();
    }
    // @ts-ignore
    /**
     * @param {?} event
     * @return {?}
     */
    onWait(event) {
        this.isWaiting = true;
        this.ref.detectChanges();
    }
    // @ts-ignore
    /**
     * @param {?} event
     * @return {?}
     */
    onComplete(event) {
        this.isCompleted = true;
        this.state = VgStates.VG_ENDED;
        this.ref.detectChanges();
    }
    // @ts-ignore
    /**
     * @param {?} event
     * @return {?}
     */
    onStartPlaying(event) {
        this.state = VgStates.VG_PLAYING;
        this.ref.detectChanges();
    }
    // @ts-ignore
    /**
     * @param {?} event
     * @return {?}
     */
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
    /**
     * @param {?} event
     * @return {?}
     */
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
    /**
     * @param {?} event
     * @return {?}
     */
    onTimeUpdate(event) {
        /** @type {?} */
        const end = this.buffered.length - 1;
        this.time = {
            current: this.currentTime * 1000,
            total: this.time.total,
            left: (this.duration - this.currentTime) * 1000,
        };
        if (end >= 0) {
            this.buffer = { end: this.buffered.end(end) * 1000 };
        }
        this.ref.detectChanges();
    }
    // @ts-ignore
    /**
     * @param {?} event
     * @return {?}
     */
    onProgress(event) {
        /** @type {?} */
        const end = this.buffered.length - 1;
        if (end >= 0) {
            this.buffer = { end: this.buffered.end(end) * 1000 };
        }
        this.ref.detectChanges();
    }
    // @ts-ignore
    /**
     * @param {?} event
     * @return {?}
     */
    onVolumeChange(event) {
        // TODO: Save to localstorage the current volume
        this.ref.detectChanges();
    }
    // @ts-ignore
    /**
     * @param {?} event
     * @return {?}
     */
    onError(event) {
        // TODO: Handle error messages
        this.ref.detectChanges();
    }
    // http://stackoverflow.com/a/23828241/779529
    /**
     * @return {?}
     */
    bufferCheck() {
        /** @type {?} */
        const offset = 1 / this.checkInterval;
        this.currentPlayPos = this.currentTime;
        if (!this.isBufferDetected &&
            this.currentPlayPos < this.lastPlayPos + offset) {
            this.isBufferDetected = true;
        }
        if (this.isBufferDetected &&
            this.currentPlayPos > this.lastPlayPos + offset) {
            this.isBufferDetected = false;
        }
        // Prevent calls to bufferCheck after ngOnDestroy have been called
        if (!this.bufferDetected.closed) {
            this.bufferDetected.next(this.isBufferDetected);
        }
        this.lastPlayPos = this.currentPlayPos;
    }
    /**
     * @return {?}
     */
    startBufferCheck() {
        this.checkBufferSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, this.checkInterval).subscribe((/**
         * @return {?}
         */
        () => {
            this.bufferCheck();
        }));
    }
    /**
     * @return {?}
     */
    stopBufferCheck() {
        if (this.checkBufferSubscription) {
            this.checkBufferSubscription.unsubscribe();
        }
        this.isBufferDetected = false;
        this.bufferDetected.next(this.isBufferDetected);
    }
    /**
     * @param {?} value
     * @param {?=} byPercent
     * @return {?}
     */
    seekTime(value, byPercent = false) {
        /** @type {?} */
        let second;
        /** @type {?} */
        const duration = this.duration;
        if (byPercent) {
            second = (value * duration) / 100;
        }
        else {
            second = value;
        }
        this.currentTime = second;
    }
    /**
     * @param {?} type
     * @param {?=} label
     * @param {?=} language
     * @param {?=} mode
     * @return {?}
     */
    addTextTrack(type, label, language, mode) {
        /** @type {?} */
        const newTrack = this.vgMedia.addTextTrack(type, label, language);
        if (mode) {
            newTrack.mode = mode;
        }
        return newTrack;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.vgMedia.src = '';
        this.mutationObs.unsubscribe();
        this.canPlayObs.unsubscribe();
        this.canPlayThroughObs.unsubscribe();
        this.loadedMetadataObs.unsubscribe();
        this.waitingObs.unsubscribe();
        this.progressObs.unsubscribe();
        this.endedObs.unsubscribe();
        this.playingObs.unsubscribe();
        this.playObs.unsubscribe();
        this.pauseObs.unsubscribe();
        this.timeUpdateObs.unsubscribe();
        this.volumeChangeObs.unsubscribe();
        this.errorObs.unsubscribe();
        if (this.checkBufferSubscription) {
            this.checkBufferSubscription.unsubscribe();
        }
        if (this.syncSubscription) {
            this.syncSubscription.unsubscribe();
        }
        this.bufferDetected.complete();
        this.bufferDetected.unsubscribe();
        this.api.unregisterMedia(this);
    }
}
VgMediaDirective.ɵfac = function VgMediaDirective_Factory(t) { return new (t || VgMediaDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](VgApiService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
VgMediaDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: VgMediaDirective, selectors: [["", "vgMedia", ""]], inputs: { vgMedia: "vgMedia", vgMaster: "vgMaster" } });
/** @nocollapse */
VgMediaDirective.ctorParameters = () => [
    { type: VgApiService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
VgMediaDirective.propDecorators = {
    vgMedia: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    vgMaster: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgMediaDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[vgMedia]'
            }]
    }], function () { return [{ type: VgApiService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { vgMedia: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], vgMaster: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/vg-player/vg-player.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VgPlayerComponent {
    /**
     * @param {?} ref
     * @param {?} api
     * @param {?} fsAPI
     * @param {?} controlsHidden
     */
    constructor(ref, api, fsAPI, controlsHidden) {
        this.api = api;
        this.fsAPI = fsAPI;
        this.controlsHidden = controlsHidden;
        this.isFullscreen = false;
        this.isNativeFullscreen = false;
        this.areControlsHidden = false;
        this.onPlayerReady = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onMediaReady = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.subscriptions = [];
        this.elem = ref.nativeElement;
        this.api.registerElement(this.elem);
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.medias.toArray().forEach((/**
         * @param {?} media
         * @return {?}
         */
        (media) => {
            this.api.registerMedia(media);
        }));
        this.fsAPI.init(this.elem, this.medias);
        this.subscriptions.push(this.fsAPI.onChangeFullscreen.subscribe(this.onChangeFullscreen.bind(this)));
        this.subscriptions.push(this.controlsHidden.isHidden.subscribe(this.onHideControls.bind(this)));
        this.api.onPlayerReady(this.fsAPI);
        this.onPlayerReady.emit(this.api);
    }
    /**
     * @param {?} fsState
     * @return {?}
     */
    onChangeFullscreen(fsState) {
        if (!this.fsAPI.nativeFullscreen) {
            this.isFullscreen = fsState;
            this.zIndex = fsState ? VgUtilsService.getZIndex().toString() : 'auto';
        }
        else {
            this.isNativeFullscreen = fsState;
        }
    }
    /**
     * @param {?} hidden
     * @return {?}
     */
    onHideControls(hidden) {
        this.areControlsHidden = hidden;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions.forEach((/**
         * @param {?} s
         * @return {?}
         */
        (s) => s.unsubscribe()));
    }
}
VgPlayerComponent.ɵfac = function VgPlayerComponent_Factory(t) { return new (t || VgPlayerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](VgApiService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](VgFullscreenApiService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](VgControlsHiddenService)); };
VgPlayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VgPlayerComponent, selectors: [["vg-player"]], contentQueries: function VgPlayerComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, VgMediaDirective, false);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.medias = _t);
    } }, hostVars: 8, hostBindings: function VgPlayerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("z-index", ctx.zIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("fullscreen", ctx.isFullscreen)("native-fullscreen", ctx.isNativeFullscreen)("controls-hidden", ctx.areControlsHidden);
    } }, outputs: { onPlayerReady: "onPlayerReady", onMediaReady: "onMediaReady" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([VgApiService, VgFullscreenApiService, VgControlsHiddenService])], ngContentSelectors: _c0, decls: 1, vars: 0, template: function VgPlayerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, styles: ["\n      vg-player {\n        font-family: 'videogular';\n        position: relative;\n        display: flex;\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n        background-color: black;\n      }\n      vg-player.fullscreen {\n        position: fixed;\n        left: 0;\n        top: 0;\n      }\n      vg-player.native-fullscreen.controls-hidden {\n        cursor: none;\n      }\n    "], encapsulation: 2 });
/** @nocollapse */
VgPlayerComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: VgApiService },
    { type: VgFullscreenApiService },
    { type: VgControlsHiddenService }
];
VgPlayerComponent.propDecorators = {
    isFullscreen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.fullscreen',] }],
    isNativeFullscreen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.native-fullscreen',] }],
    areControlsHidden: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.controls-hidden',] }],
    zIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.z-index',] }],
    onPlayerReady: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onMediaReady: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    medias: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [VgMediaDirective,] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgPlayerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'vg-player',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                template: `<ng-content></ng-content>`,
                providers: [VgApiService, VgFullscreenApiService, VgControlsHiddenService],
                styles: [`
      vg-player {
        font-family: 'videogular';
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background-color: black;
      }
      vg-player.fullscreen {
        position: fixed;
        left: 0;
        top: 0;
      }
      vg-player.native-fullscreen.controls-hidden {
        cursor: none;
      }
    `]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: VgApiService }, { type: VgFullscreenApiService }, { type: VgControlsHiddenService }]; }, { isFullscreen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.fullscreen']
        }], isNativeFullscreen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.native-fullscreen']
        }], areControlsHidden: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.controls-hidden']
        }], onPlayerReady: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onMediaReady: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], zIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.z-index']
        }], medias: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [VgMediaDirective]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/core.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const services = [
    VgApiService,
    VgControlsHiddenService,
    VgFullscreenApiService,
    VgUtilsService,
    VgEvents,
    VgStates
];
/** @type {?} */
const directives = [
    VgCuePointsDirective,
    VgMediaDirective
];
class VgCoreModule {
}
VgCoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: VgCoreModule });
VgCoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function VgCoreModule_Factory(t) { return new (t || VgCoreModule)(); }, providers: [...services], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VgCoreModule, { declarations: function () { return [VgCuePointsDirective, VgMediaDirective, VgPlayerComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]; }, exports: function () { return [VgCuePointsDirective, VgMediaDirective, VgPlayerComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgCoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                providers: [...services],
                declarations: [...directives, VgPlayerComponent],
                exports: [...directives, VgPlayerComponent]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/interfaces/bitrate-options.interface.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function BitrateOptions() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/interfaces/i-media-element.interface.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function IMediaElement() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/interfaces/idrm-license-server.interface.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function IDRMLicenseServer() { }

/**
 * @fileoverview added by tsickle
 * Generated from: lib/interfaces/ihls-config.interface.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function IHLSConfig() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/interfaces/vg-media-api.interface.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function IPlayable() { }
if (false) {}
/**
 * @record
 */
function IMediaSubscriptions() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/interfaces/deprecated-tracks-types.interface.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function AudioTrack() { }
if (false) {}
/**
 * @record
 */
function AudioTrackListEventMap() { }
if (false) {}
/**
 * Used to represent a list of the audio tracks contained within a given HTML media element, with each track represented by a separate AudioTrack object in the list.
 * @record
 */
function AudioTrackList() { }
if (false) {}
/**
 * A single video track from a <video> element.
 * @record
 */
function VideoTrack() { }
if (false) {}
/**
 * @record
 */
function VideoTrackListEventMap() { }
if (false) {}
/**
 * Used to represent a list of the video tracks contained within a <video> element, with each track represented by a separate VideoTrack object in the list.
 * @record
 */
function VideoTrackList() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/vg-media/vg-media-element.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VgMediaElement {
    /**
     * @return {?}
     */
    get audioTracks() {
        return null;
    }
    // @ts-ignore
    /**
     * @param {?} kind
     * @param {?=} label
     * @param {?=} language
     * @return {?}
     */
    addTextTrack(kind, label, language) {
        return null;
    }
    // @ts-ignore
    /**
     * @param {?} type
     * @return {?}
     */
    canPlayType(type) {
        return null;
    }
    /**
     * @return {?}
     */
    load() { }
    /**
     * @return {?}
     */
    msClearEffects() { }
    /**
     * @return {?}
     */
    msGetAsCastingSource() {
        return null;
    }
    // @ts-ignore
    /**
     * @param {?} _activatableClassId
     * @param {?} _effectRequired
     * @param {?=} _config
     * @return {?}
     */
    msInsertAudioEffect(_activatableClassId, _effectRequired, _config) { }
    // @ts-ignore
    /**
     * @param {?} mediaKeys
     * @return {?}
     */
    msSetMediaKeys(mediaKeys) { }
    // @ts-ignore
    /**
     * @param {?=} mediaProtectionManager
     * @return {?}
     */
    msSetMediaProtectionManager(mediaProtectionManager) { }
    /**
     * @return {?}
     */
    pause() { }
    /**
     * @return {?}
     */
    play() {
        return null;
    }
    // @ts-ignore
    /**
     * @param {?} mediaKeys
     * @return {?}
     */
    setMediaKeys(mediaKeys) {
        return null;
    }
    // @ts-ignore
    /**
     * @param {?} _type
     * @param {?} _listener
     * @param {?=} _useCapture
     * @return {?}
     */
    addEventListener(_type, _listener, _useCapture) { }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: videogular-ngx-videogular-core.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=videogular-ngx-videogular-core.js.map

/***/ }),

/***/ "VKRg":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@videogular/ngx-videogular/__ivy_ngcc__/fesm2015/videogular-ngx-videogular-buffering.js ***!
  \**************************************************************************************************************/
/*! exports provided: VgBufferingComponent, VgBufferingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VgBufferingComponent", function() { return VgBufferingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VgBufferingModule", function() { return VgBufferingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @videogular/ngx-videogular/core */ "4w57");




/**
 * @fileoverview added by tsickle
 * Generated from: lib/vg-buffering/vg-buffering.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


class VgBufferingComponent {
    /**
     * @param {?} ref
     * @param {?} API
     */
    constructor(ref, API) {
        this.API = API;
        this.checkInterval = 50;
        this.currentPlayPos = 0;
        this.lastPlayPos = 0;
        this.subscriptions = [];
        this.isBuffering = false;
        this.elem = ref.nativeElement;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe((/**
             * @return {?}
             */
            () => this.onPlayerReady())));
        }
    }
    /**
     * @return {?}
     */
    onPlayerReady() {
        this.target = this.API.getMediaById(this.vgFor);
        this.subscriptions.push(this.target.subscriptions.bufferDetected.subscribe((/**
         * @param {?} isBuffering
         * @return {?}
         */
        (isBuffering) => this.onUpdateBuffer(isBuffering))));
    }
    /**
     * @param {?} isBuffering
     * @return {?}
     */
    onUpdateBuffer(isBuffering) {
        this.isBuffering = isBuffering;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions.forEach((/**
         * @param {?} s
         * @return {?}
         */
        (s) => s.unsubscribe()));
    }
}
VgBufferingComponent.ɵfac = function VgBufferingComponent_Factory(t) { return new (t || VgBufferingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__["VgApiService"])); };
VgBufferingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VgBufferingComponent, selectors: [["vg-buffering"]], hostVars: 2, hostBindings: function VgBufferingComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-buffering", ctx.isBuffering);
    } }, inputs: { vgFor: "vgFor" }, decls: 3, vars: 0, consts: [[1, "vg-buffering"], [1, "bufferingContainer"], [1, "loadingSpinner"]], template: function VgBufferingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n      vg-buffering {\n        display: none;\n        z-index: 201;\n      }\n      vg-buffering.is-buffering {\n        display: block;\n      }\n\n      .vg-buffering {\n        position: absolute;\n        display: block;\n        width: 100%;\n        height: 100%;\n      }\n      .vg-buffering .bufferingContainer {\n        width: 100%;\n        position: absolute;\n        cursor: pointer;\n        top: 50%;\n        margin-top: -50px;\n        zoom: 1;\n        filter: alpha(opacity=60);\n        opacity: 0.6;\n      }\n      /* Loading Spinner\n        * http://www.alessioatzeni.com/blog/css3-loading-animation-loop/\n        */\n      .vg-buffering .loadingSpinner {\n        background-color: rgba(0, 0, 0, 0);\n        border: 5px solid rgba(255, 255, 255, 1);\n        opacity: 0.9;\n        border-top: 5px solid rgba(0, 0, 0, 0);\n        border-left: 5px solid rgba(0, 0, 0, 0);\n        border-radius: 50px;\n        box-shadow: 0 0 35px #ffffff;\n        width: 50px;\n        height: 50px;\n        margin: 0 auto;\n        -moz-animation: spin 0.5s infinite linear;\n        -webkit-animation: spin 0.5s infinite linear;\n      }\n      .vg-buffering .loadingSpinner .stop {\n        -webkit-animation-play-state: paused;\n        -moz-animation-play-state: paused;\n      }\n      @-moz-keyframes spin {\n        0% {\n          -moz-transform: rotate(0deg);\n        }\n        100% {\n          -moz-transform: rotate(360deg);\n        }\n      }\n      @-moz-keyframes spinoff {\n        0% {\n          -moz-transform: rotate(0deg);\n        }\n        100% {\n          -moz-transform: rotate(-360deg);\n        }\n      }\n      @-webkit-keyframes spin {\n        0% {\n          -webkit-transform: rotate(0deg);\n        }\n        100% {\n          -webkit-transform: rotate(360deg);\n        }\n      }\n      @-webkit-keyframes spinoff {\n        0% {\n          -webkit-transform: rotate(0deg);\n        }\n        100% {\n          -webkit-transform: rotate(-360deg);\n        }\n      }\n    "], encapsulation: 2 });
/** @nocollapse */
VgBufferingComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__["VgApiService"] }
];
VgBufferingComponent.propDecorators = {
    vgFor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isBuffering: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.is-buffering',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgBufferingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'vg-buffering',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                template: `<div class="vg-buffering">
    <div class="bufferingContainer">
      <div class="loadingSpinner"></div>
    </div>
  </div>`,
                styles: [`
      vg-buffering {
        display: none;
        z-index: 201;
      }
      vg-buffering.is-buffering {
        display: block;
      }

      .vg-buffering {
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
      }
      .vg-buffering .bufferingContainer {
        width: 100%;
        position: absolute;
        cursor: pointer;
        top: 50%;
        margin-top: -50px;
        zoom: 1;
        filter: alpha(opacity=60);
        opacity: 0.6;
      }
      /* Loading Spinner
        * http://www.alessioatzeni.com/blog/css3-loading-animation-loop/
        */
      .vg-buffering .loadingSpinner {
        background-color: rgba(0, 0, 0, 0);
        border: 5px solid rgba(255, 255, 255, 1);
        opacity: 0.9;
        border-top: 5px solid rgba(0, 0, 0, 0);
        border-left: 5px solid rgba(0, 0, 0, 0);
        border-radius: 50px;
        box-shadow: 0 0 35px #ffffff;
        width: 50px;
        height: 50px;
        margin: 0 auto;
        -moz-animation: spin 0.5s infinite linear;
        -webkit-animation: spin 0.5s infinite linear;
      }
      .vg-buffering .loadingSpinner .stop {
        -webkit-animation-play-state: paused;
        -moz-animation-play-state: paused;
      }
      @-moz-keyframes spin {
        0% {
          -moz-transform: rotate(0deg);
        }
        100% {
          -moz-transform: rotate(360deg);
        }
      }
      @-moz-keyframes spinoff {
        0% {
          -moz-transform: rotate(0deg);
        }
        100% {
          -moz-transform: rotate(-360deg);
        }
      }
      @-webkit-keyframes spin {
        0% {
          -webkit-transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(360deg);
        }
      }
      @-webkit-keyframes spinoff {
        0% {
          -webkit-transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(-360deg);
        }
      }
    `]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__["VgApiService"] }]; }, { isBuffering: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.is-buffering']
        }], vgFor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/buffering.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VgBufferingModule {
}
VgBufferingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: VgBufferingModule });
VgBufferingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function VgBufferingModule_Factory(t) { return new (t || VgBufferingModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__["VgCoreModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VgBufferingModule, { declarations: function () { return [VgBufferingComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__["VgCoreModule"]]; }, exports: function () { return [VgBufferingComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgBufferingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__["VgCoreModule"]],
                declarations: [VgBufferingComponent],
                exports: [VgBufferingComponent]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: videogular-ngx-videogular-buffering.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=videogular-ngx-videogular-buffering.js.map

/***/ }),

/***/ "cqME":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@videogular/ngx-videogular/__ivy_ngcc__/fesm2015/videogular-ngx-videogular-overlay-play.js ***!
  \*****************************************************************************************************************/
/*! exports provided: VgOverlayPlayComponent, VgOverlayPlayModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VgOverlayPlayComponent", function() { return VgOverlayPlayComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VgOverlayPlayModule", function() { return VgOverlayPlayModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @videogular/ngx-videogular/core */ "4w57");




/**
 * @fileoverview added by tsickle
 * Generated from: lib/vg-overlay-play.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


class VgOverlayPlayComponent {
    /**
     * @param {?} ref
     * @param {?} API
     * @param {?} fsAPI
     * @param {?} controlsHidden
     */
    constructor(ref, API, fsAPI, controlsHidden) {
        this.API = API;
        this.fsAPI = fsAPI;
        this.controlsHidden = controlsHidden;
        this.isNativeFullscreen = false;
        this.areControlsHidden = false;
        this.subscriptions = [];
        this.isBuffering = false;
        this.elem = ref.nativeElement;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe((/**
             * @return {?}
             */
            () => this.onPlayerReady())));
        }
    }
    /**
     * @return {?}
     */
    onPlayerReady() {
        this.target = this.API.getMediaById(this.vgFor);
        this.subscriptions.push(this.fsAPI.onChangeFullscreen.subscribe(this.onChangeFullscreen.bind(this)));
        this.subscriptions.push(this.controlsHidden.isHidden.subscribe(this.onHideControls.bind(this)));
        this.subscriptions.push(this.target.subscriptions.bufferDetected.subscribe((/**
         * @param {?} isBuffering
         * @return {?}
         */
        (isBuffering) => this.onUpdateBuffer(isBuffering))));
    }
    /**
     * @param {?} isBuffering
     * @return {?}
     */
    onUpdateBuffer(isBuffering) {
        this.isBuffering = isBuffering;
    }
    /**
     * @param {?} fsState
     * @return {?}
     */
    onChangeFullscreen(fsState) {
        if (this.fsAPI.nativeFullscreen) {
            this.isNativeFullscreen = fsState;
        }
    }
    /**
     * @param {?} hidden
     * @return {?}
     */
    onHideControls(hidden) {
        this.areControlsHidden = hidden;
    }
    /**
     * @return {?}
     */
    onClick() {
        /** @type {?} */
        const state = this.getState();
        switch (state) {
            case _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__["VgStates"].VG_PLAYING:
                this.target.pause();
                break;
            case _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__["VgStates"].VG_PAUSED:
            case _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__["VgStates"].VG_ENDED:
                this.target.play();
                break;
        }
    }
    /**
     * @return {?}
     */
    getState() {
        /** @type {?} */
        let state = _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__["VgStates"].VG_PAUSED;
        if (this.target) {
            if (this.target.state instanceof Array) {
                for (let i = 0, l = this.target.state.length; i < l; i++) {
                    if (this.target.state[i] === _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__["VgStates"].VG_PLAYING) {
                        state = _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__["VgStates"].VG_PLAYING;
                        break;
                    }
                }
            }
            else {
                state = this.target.state;
            }
        }
        return state;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions.forEach((/**
         * @param {?} s
         * @return {?}
         */
        (s) => s.unsubscribe()));
    }
}
VgOverlayPlayComponent.ɵfac = function VgOverlayPlayComponent_Factory(t) { return new (t || VgOverlayPlayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__["VgApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__["VgFullscreenApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__["VgControlsHiddenService"])); };
VgOverlayPlayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VgOverlayPlayComponent, selectors: [["vg-overlay-play"]], hostVars: 2, hostBindings: function VgOverlayPlayComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VgOverlayPlayComponent_click_HostBindingHandler() { return ctx.onClick(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-buffering", ctx.isBuffering);
    } }, inputs: { vgFor: "vgFor" }, decls: 2, vars: 6, consts: [[1, "vg-overlay-play"], [1, "overlay-play-container"]], template: function VgOverlayPlayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("native-fullscreen", ctx.isNativeFullscreen)("controls-hidden", ctx.areControlsHidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("vg-icon-play_arrow", ctx.getState() !== "playing");
    } }, styles: ["\n      vg-overlay-play {\n        z-index: 200;\n      }\n      vg-overlay-play.is-buffering {\n        display: none;\n      }\n      vg-overlay-play .vg-overlay-play {\n        transition: all 0.5s;\n        cursor: pointer;\n        position: absolute;\n        display: block;\n        color: white;\n        width: 100%;\n        height: 100%;\n        font-size: 80px;\n        filter: alpha(opacity=60);\n        opacity: 0.6;\n      }\n      vg-overlay-play .vg-overlay-play.native-fullscreen.controls-hidden {\n        cursor: none;\n      }\n      vg-overlay-play\n        .vg-overlay-play\n        .overlay-play-container.vg-icon-play_arrow {\n        pointer-events: none;\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        font-size: 80px;\n      }\n      vg-overlay-play .vg-overlay-play:hover {\n        filter: alpha(opacity=100);\n        opacity: 1;\n      }\n      vg-overlay-play\n        .vg-overlay-play:hover\n        .overlay-play-container.vg-icon-play_arrow:before {\n        transform: scale(1.2);\n      }\n    "], encapsulation: 2 });
/** @nocollapse */
VgOverlayPlayComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__["VgApiService"] },
    { type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__["VgFullscreenApiService"] },
    { type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__["VgControlsHiddenService"] }
];
VgOverlayPlayComponent.propDecorators = {
    vgFor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isBuffering: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.is-buffering',] }],
    onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgOverlayPlayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'vg-overlay-play',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
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
                styles: [`
      vg-overlay-play {
        z-index: 200;
      }
      vg-overlay-play.is-buffering {
        display: none;
      }
      vg-overlay-play .vg-overlay-play {
        transition: all 0.5s;
        cursor: pointer;
        position: absolute;
        display: block;
        color: white;
        width: 100%;
        height: 100%;
        font-size: 80px;
        filter: alpha(opacity=60);
        opacity: 0.6;
      }
      vg-overlay-play .vg-overlay-play.native-fullscreen.controls-hidden {
        cursor: none;
      }
      vg-overlay-play
        .vg-overlay-play
        .overlay-play-container.vg-icon-play_arrow {
        pointer-events: none;
        width: 100%;
        height: 100%;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 80px;
      }
      vg-overlay-play .vg-overlay-play:hover {
        filter: alpha(opacity=100);
        opacity: 1;
      }
      vg-overlay-play
        .vg-overlay-play:hover
        .overlay-play-container.vg-icon-play_arrow:before {
        transform: scale(1.2);
      }
    `]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__["VgApiService"] }, { type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__["VgFullscreenApiService"] }, { type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__["VgControlsHiddenService"] }]; }, { isBuffering: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.is-buffering']
        }], 
    /**
     * @return {?}
     */
    onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
        }], vgFor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/overlay-play.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VgOverlayPlayModule {
}
VgOverlayPlayModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: VgOverlayPlayModule });
VgOverlayPlayModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function VgOverlayPlayModule_Factory(t) { return new (t || VgOverlayPlayModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__["VgCoreModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VgOverlayPlayModule, { declarations: function () { return [VgOverlayPlayComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__["VgCoreModule"]]; }, exports: function () { return [VgOverlayPlayComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgOverlayPlayModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__["VgCoreModule"]],
                declarations: [VgOverlayPlayComponent],
                exports: [VgOverlayPlayComponent]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: videogular-ngx-videogular-overlay-play.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=videogular-ngx-videogular-overlay-play.js.map

/***/ }),

/***/ "v2j/":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@videogular/ngx-videogular/__ivy_ngcc__/fesm2015/videogular-ngx-videogular-controls.js ***!
  \*************************************************************************************************************/
/*! exports provided: VgControlsComponent, VgControlsModule, VgFullscreenComponent, VgMuteComponent, VgPlayPauseComponent, VgPlaybackButtonComponent, VgQualitySelectorComponent, VgScrubBarBufferingTimeComponent, VgScrubBarComponent, VgScrubBarCuePointsComponent, VgScrubBarCurrentTimeComponent, VgTimeDisplayComponent, VgTrackSelectorComponent, VgUtcPipe, VgVolumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VgControlsComponent", function() { return VgControlsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VgControlsModule", function() { return VgControlsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VgFullscreenComponent", function() { return VgFullscreenComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VgMuteComponent", function() { return VgMuteComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VgPlayPauseComponent", function() { return VgPlayPauseComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VgPlaybackButtonComponent", function() { return VgPlaybackButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VgQualitySelectorComponent", function() { return VgQualitySelectorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VgScrubBarBufferingTimeComponent", function() { return VgScrubBarBufferingTimeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VgScrubBarComponent", function() { return VgScrubBarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VgScrubBarCuePointsComponent", function() { return VgScrubBarCuePointsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VgScrubBarCurrentTimeComponent", function() { return VgScrubBarCurrentTimeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VgTimeDisplayComponent", function() { return VgTimeDisplayComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VgTrackSelectorComponent", function() { return VgTrackSelectorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VgUtcPipe", function() { return VgUtcPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VgVolumeComponent", function() { return VgVolumeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @videogular/ngx-videogular/core */ "4w57");





/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/vg-controls/vg-controls.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */




const _c0 = ["*"];
const _c1 = ["volumeBar"];
const _c2 = function (a0) { return { dragging: a0 }; };
function VgTrackSelectorComponent_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const track_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", track_r1.id)("selected", track_r1.selected === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", track_r1.label, " ");
} }
function VgTimeDisplayComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "LIVE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VgTimeDisplayComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "vgUtc");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r1.getTime(), ctx_r1.vgFormat));
} }
function VgQualitySelectorComponent_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bitrate_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", bitrate_r1.qualityIndex)("selected", bitrate_r1.qualityIndex === (ctx_r0.bitrateSelected == null ? null : ctx_r0.bitrateSelected.qualityIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", bitrate_r1.label, " ");
} }
function VgScrubBarCuePointsComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 2);
} if (rf & 2) {
    const cp_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", cp_r1.$$style == null ? null : cp_r1.$$style.width)("left", cp_r1.$$style == null ? null : cp_r1.$$style.left);
} }
function VgScrubBarCurrentTimeComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 2);
} }
class VgControlsComponent {
    // @ts-ignore
    /**
     * @param {?} API
     * @param {?} ref
     * @param {?} hidden
     */
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
    /**
     * @return {?}
     */
    ngOnInit() {
        this.mouseMove$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.API.videogularElement, 'mousemove');
        this.subscriptions.push(this.mouseMove$.subscribe(this.show.bind(this)));
        this.touchStart$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.API.videogularElement, 'touchstart');
        this.subscriptions.push(this.touchStart$.subscribe(this.show.bind(this)));
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe((/**
             * @return {?}
             */
            () => this.onPlayerReady())));
        }
    }
    /**
     * @return {?}
     */
    onPlayerReady() {
        this.target = this.API.getMediaById(this.vgFor);
        this.subscriptions.push(this.target.subscriptions.play.subscribe(this.onPlay.bind(this)));
        this.subscriptions.push(this.target.subscriptions.pause.subscribe(this.onPause.bind(this)));
        this.subscriptions.push(this.target.subscriptions.startAds.subscribe(this.onStartAds.bind(this)));
        this.subscriptions.push(this.target.subscriptions.endAds.subscribe(this.onEndAds.bind(this)));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.vgAutohide) {
            this.hide();
        }
        else {
            this.show();
        }
    }
    /**
     * @return {?}
     */
    onPlay() {
        if (this.vgAutohide) {
            this.hide();
        }
    }
    /**
     * @return {?}
     */
    onPause() {
        clearTimeout(this.timer);
        this.hideControls = false;
        this.hidden.state(false);
    }
    /**
     * @return {?}
     */
    onStartAds() {
        this.isAdsPlaying = 'none';
    }
    /**
     * @return {?}
     */
    onEndAds() {
        this.isAdsPlaying = 'initial';
    }
    /**
     * @return {?}
     */
    hide() {
        if (this.vgAutohide) {
            clearTimeout(this.timer);
            this.hideAsync();
        }
    }
    /**
     * @return {?}
     */
    show() {
        clearTimeout(this.timer);
        this.hideControls = false;
        this.hidden.state(false);
        if (this.vgAutohide) {
            this.hideAsync();
        }
    }
    /**
     * @private
     * @return {?}
     */
    hideAsync() {
        if (this.API.state === _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgStates"].VG_PLAYING) {
            this.timer = setTimeout((/**
             * @return {?}
             */
            () => {
                this.hideControls = true;
                this.hidden.state(true);
            }), this.vgAutohideTime * 1000);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions.forEach((/**
         * @param {?} s
         * @return {?}
         */
        (s) => s.unsubscribe()));
    }
}
VgControlsComponent.ɵfac = function VgControlsComponent_Factory(t) { return new (t || VgControlsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgControlsHiddenService"])); };
VgControlsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VgControlsComponent, selectors: [["vg-controls"]], hostVars: 4, hostBindings: function VgControlsComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("pointer-events", ctx.isAdsPlaying);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide", ctx.hideControls);
    } }, inputs: { vgAutohide: "vgAutohide", vgAutohideTime: "vgAutohideTime", vgFor: "vgFor" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function VgControlsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, styles: ["\n      vg-controls {\n        position: absolute;\n        display: flex;\n        width: 100%;\n        height: 50px;\n        z-index: 300;\n        bottom: 0;\n        background-color: rgba(0, 0, 0, 0.5);\n        -webkit-transition: bottom 1s;\n        -khtml-transition: bottom 1s;\n        -moz-transition: bottom 1s;\n        -ms-transition: bottom 1s;\n        transition: bottom 1s;\n      }\n      vg-controls.hide {\n        bottom: -50px;\n      }\n    "], encapsulation: 2 });
/** @nocollapse */
VgControlsComponent.ctorParameters = () => [
    { type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgControlsHiddenService"] }
];
VgControlsComponent.propDecorators = {
    isAdsPlaying: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.pointer-events',] }],
    hideControls: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.hide',] }],
    vgFor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    vgAutohide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    vgAutohideTime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgControlsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'vg-controls',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                template: `<ng-content></ng-content>`,
                styles: [`
      vg-controls {
        position: absolute;
        display: flex;
        width: 100%;
        height: 50px;
        z-index: 300;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        -webkit-transition: bottom 1s;
        -khtml-transition: bottom 1s;
        -moz-transition: bottom 1s;
        -ms-transition: bottom 1s;
        transition: bottom 1s;
      }
      vg-controls.hide {
        bottom: -50px;
      }
    `]
            }]
    }], function () { return [{ type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgControlsHiddenService"] }]; }, { isAdsPlaying: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.pointer-events']
        }], hideControls: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.hide']
        }], vgAutohide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], vgAutohideTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], vgFor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/vg-volume/vg-volume.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VgVolumeComponent {
    /**
     * @param {?} ref
     * @param {?} API
     */
    constructor(ref, API) {
        this.API = API;
        this.subscriptions = [];
        this.elem = ref.nativeElement;
        this.isDragging = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe((/**
             * @return {?}
             */
            () => this.onPlayerReady())));
        }
    }
    /**
     * @return {?}
     */
    onPlayerReady() {
        this.target = this.API.getMediaById(this.vgFor);
        this.ariaValue = this.getVolume() * 100;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        this.setVolume(this.calculateVolume(event.clientX));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMouseDown(event) {
        this.mouseDownPosX = event.clientX;
        this.isDragging = true;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDrag(event) {
        if (this.isDragging) {
            this.setVolume(this.calculateVolume(event.clientX));
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onStopDrag(event) {
        if (this.isDragging) {
            this.isDragging = false;
            if (this.mouseDownPosX === event.clientX) {
                this.setVolume(this.calculateVolume(event.clientX));
            }
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    arrowAdjustVolume(event) {
        if (event.keyCode === 38 || event.keyCode === 39) {
            event.preventDefault();
            this.setVolume(Math.max(0, Math.min(100, this.getVolume() * 100 + 10)));
        }
        else if (event.keyCode === 37 || event.keyCode === 40) {
            event.preventDefault();
            this.setVolume(Math.max(0, Math.min(100, this.getVolume() * 100 - 10)));
        }
    }
    /**
     * @param {?} mousePosX
     * @return {?}
     */
    calculateVolume(mousePosX) {
        /** @type {?} */
        const recObj = this.volumeBarRef.nativeElement.getBoundingClientRect();
        /** @type {?} */
        const volumeBarOffsetLeft = recObj.left;
        /** @type {?} */
        const volumeBarWidth = recObj.width;
        return ((mousePosX - volumeBarOffsetLeft) / volumeBarWidth) * 100;
    }
    /**
     * @param {?} vol
     * @return {?}
     */
    setVolume(vol) {
        this.target.volume = Math.max(0, Math.min(1, vol / 100));
        this.ariaValue = this.target.volume * 100;
    }
    /**
     * @return {?}
     */
    getVolume() {
        return this.target ? this.target.volume : 0;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions.forEach((/**
         * @param {?} s
         * @return {?}
         */
        (s) => s.unsubscribe()));
    }
}
VgVolumeComponent.ɵfac = function VgVolumeComponent_Factory(t) { return new (t || VgVolumeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"])); };
VgVolumeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VgVolumeComponent, selectors: [["vg-volume"]], viewQuery: function VgVolumeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.volumeBarRef = _t.first);
    } }, hostBindings: function VgVolumeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousemove", function VgVolumeComponent_mousemove_HostBindingHandler($event) { return ctx.onDrag($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("mouseup", function VgVolumeComponent_mouseup_HostBindingHandler($event) { return ctx.onStopDrag($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("keydown", function VgVolumeComponent_keydown_HostBindingHandler($event) { return ctx.arrowAdjustVolume($event); });
    } }, inputs: { vgFor: "vgFor" }, decls: 5, vars: 9, consts: [["tabindex", "0", "role", "slider", "aria-label", "volume level", "aria-level", "polite", "aria-valuemin", "0", "aria-valuemax", "100", "aria-orientation", "horizontal", 1, "volumeBar", 3, "click", "mousedown"], ["volumeBar", ""], [1, "volumeBackground", 3, "ngClass"], [1, "volumeValue"], [1, "volumeKnob"]], template: function VgVolumeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VgVolumeComponent_Template_div_click_0_listener($event) { return ctx.onClick($event); })("mousedown", function VgVolumeComponent_Template_div_mousedown_0_listener($event) { return ctx.onMouseDown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuenow", ctx.ariaValue)("aria-valuetext", ctx.ariaValue + "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, ctx.isDragging));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.getVolume() * (100 - 15) + "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", ctx.getVolume() * (100 - 15) + "%");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: ["\n      vg-volume {\n        -webkit-touch-callout: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        display: flex;\n        justify-content: center;\n        height: 50px;\n        width: 100px;\n        cursor: pointer;\n        color: white;\n        line-height: 50px;\n      }\n      vg-volume .volumeBar {\n        position: relative;\n        display: flex;\n        flex-grow: 1;\n        align-items: center;\n      }\n      vg-volume .volumeBackground {\n        display: flex;\n        flex-grow: 1;\n        height: 5px;\n        pointer-events: none;\n        background-color: #333;\n      }\n      vg-volume .volumeValue {\n        display: flex;\n        height: 5px;\n        pointer-events: none;\n        background-color: #fff;\n        transition: all 0.2s ease-out;\n      }\n      vg-volume .volumeKnob {\n        position: absolute;\n        width: 15px;\n        height: 15px;\n        left: 0;\n        top: 50%;\n        transform: translateY(-50%);\n        border-radius: 15px;\n        pointer-events: none;\n        background-color: #fff;\n        transition: all 0.2s ease-out;\n      }\n      vg-volume .volumeBackground.dragging .volumeValue,\n      vg-volume .volumeBackground.dragging .volumeKnob {\n        transition: none;\n      }\n    "], encapsulation: 2 });
/** @nocollapse */
VgVolumeComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"] }
];
VgVolumeComponent.propDecorators = {
    vgFor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    volumeBarRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['volumeBar', { static: true },] }],
    onDrag: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:mousemove', ['$event'],] }],
    onStopDrag: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:mouseup', ['$event'],] }],
    arrowAdjustVolume: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keydown', ['$event'],] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgVolumeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'vg-volume',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
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
                styles: [`
      vg-volume {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        display: flex;
        justify-content: center;
        height: 50px;
        width: 100px;
        cursor: pointer;
        color: white;
        line-height: 50px;
      }
      vg-volume .volumeBar {
        position: relative;
        display: flex;
        flex-grow: 1;
        align-items: center;
      }
      vg-volume .volumeBackground {
        display: flex;
        flex-grow: 1;
        height: 5px;
        pointer-events: none;
        background-color: #333;
      }
      vg-volume .volumeValue {
        display: flex;
        height: 5px;
        pointer-events: none;
        background-color: #fff;
        transition: all 0.2s ease-out;
      }
      vg-volume .volumeKnob {
        position: absolute;
        width: 15px;
        height: 15px;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 15px;
        pointer-events: none;
        background-color: #fff;
        transition: all 0.2s ease-out;
      }
      vg-volume .volumeBackground.dragging .volumeValue,
      vg-volume .volumeBackground.dragging .volumeKnob {
        transition: none;
      }
    `]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"] }]; }, { 
    /**
     * @param {?} event
     * @return {?}
     */
    onDrag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:mousemove', ['$event']]
        }], 
    /**
     * @param {?} event
     * @return {?}
     */
    onStopDrag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:mouseup', ['$event']]
        }], 
    /**
     * @param {?} event
     * @return {?}
     */
    arrowAdjustVolume: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keydown', ['$event']]
        }], vgFor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], volumeBarRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['volumeBar', { static: true }]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/vg-track-selector/vg-track-selector.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function Option() { }
if (false) {}
class VgTrackSelectorComponent {
    /**
     * @param {?} ref
     * @param {?} API
     */
    constructor(ref, API) {
        this.API = API;
        this.subscriptions = [];
        this.elem = ref.nativeElement;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe((/**
             * @return {?}
             */
            () => this.onPlayerReady())));
        }
    }
    /**
     * @return {?}
     */
    onPlayerReady() {
        this.target = this.API.getMediaById(this.vgFor);
        /** @type {?} */
        const subs = Array.from(((/** @type {?} */ (this.API.getMasterMedia().elem))).children)
            .filter((/**
         * @param {?} item
         * @return {?}
         */
        (item) => item.tagName === 'TRACK'))
            .filter((/**
         * @param {?} item
         * @return {?}
         */
        (item) => item.kind === 'subtitles'))
            .map((/**
         * @param {?} item
         * @return {?}
         */
        (item) => ({
            label: item.label,
            selected: item.default === true,
            id: item.srclang,
        })));
        this.tracks = [
            ...subs,
            {
                id: null,
                label: 'Off',
                selected: subs.every((/**
                 * @param {?} item
                 * @return {?}
                 */
                (item) => item.selected === false)),
            },
        ];
        /** @type {?} */
        const track = this.tracks.filter((/**
         * @param {?} item
         * @return {?}
         */
        (item) => item.selected === true))[0];
        this.trackSelected = track.id;
        this.ariaValue = track.label;
    }
    /**
     * @param {?} trackId
     * @return {?}
     */
    selectTrack(trackId) {
        this.trackSelected = trackId === 'null' ? null : trackId;
        this.ariaValue = 'No track selected';
        Array.from(((/** @type {?} */ (this.API.getMasterMedia().elem))).textTracks).forEach((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            if (item.language === trackId) {
                this.ariaValue = item.label;
                item.mode = 'showing';
            }
            else {
                item.mode = 'hidden';
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions.forEach((/**
         * @param {?} s
         * @return {?}
         */
        (s) => s.unsubscribe()));
    }
}
VgTrackSelectorComponent.ɵfac = function VgTrackSelectorComponent_Factory(t) { return new (t || VgTrackSelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"])); };
VgTrackSelectorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VgTrackSelectorComponent, selectors: [["vg-track-selector"]], inputs: { vgFor: "vgFor" }, decls: 5, vars: 5, consts: [[1, "container"], [1, "track-selected"], ["tabindex", "0", "aria-label", "track selector", 1, "trackSelector", 3, "change"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [3, "value", "selected"]], template: function VgTrackSelectorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function VgTrackSelectorComponent_Template_select_change_3_listener($event) { return ctx.selectTrack($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, VgTrackSelectorComponent_option_4_Template, 2, 3, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("vg-icon-closed_caption", !ctx.trackSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.trackSelected || "", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuetext", ctx.ariaValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tracks);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["\n      vg-track-selector {\n        -webkit-touch-callout: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        display: flex;\n        justify-content: center;\n        width: 50px;\n        height: 50px;\n        cursor: pointer;\n        color: white;\n        line-height: 50px;\n      }\n      vg-track-selector .container {\n        position: relative;\n        display: flex;\n        flex-grow: 1;\n        align-items: center;\n        padding: 0;\n        margin: 5px;\n      }\n      vg-track-selector select.trackSelector {\n        width: 50px;\n        padding: 5px 8px;\n        border: none;\n        background: none;\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        appearance: none;\n        color: transparent;\n        font-size: 16px;\n      }\n      vg-track-selector select.trackSelector::-ms-expand {\n        display: none;\n      }\n      vg-track-selector select.trackSelector option {\n        color: #000;\n      }\n      vg-track-selector .track-selected {\n        position: absolute;\n        width: 100%;\n        height: 50px;\n        top: -6px;\n        text-align: center;\n        text-transform: uppercase;\n        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n        padding-top: 2px;\n        pointer-events: none;\n      }\n      vg-track-selector .vg-icon-closed_caption:before {\n        width: 100%;\n      }\n    "], encapsulation: 2 });
/** @nocollapse */
VgTrackSelectorComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"] }
];
VgTrackSelectorComponent.propDecorators = {
    vgFor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgTrackSelectorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'vg-track-selector',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
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
                styles: [`
      vg-track-selector {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        display: flex;
        justify-content: center;
        width: 50px;
        height: 50px;
        cursor: pointer;
        color: white;
        line-height: 50px;
      }
      vg-track-selector .container {
        position: relative;
        display: flex;
        flex-grow: 1;
        align-items: center;
        padding: 0;
        margin: 5px;
      }
      vg-track-selector select.trackSelector {
        width: 50px;
        padding: 5px 8px;
        border: none;
        background: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        color: transparent;
        font-size: 16px;
      }
      vg-track-selector select.trackSelector::-ms-expand {
        display: none;
      }
      vg-track-selector select.trackSelector option {
        color: #000;
      }
      vg-track-selector .track-selected {
        position: absolute;
        width: 100%;
        height: 50px;
        top: -6px;
        text-align: center;
        text-transform: uppercase;
        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
        padding-top: 2px;
        pointer-events: none;
      }
      vg-track-selector .vg-icon-closed_caption:before {
        width: 100%;
      }
    `]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"] }]; }, { vgFor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/vg-time-display/vg-time-display.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Workaround until we can use UTC with Angular Date Pipe
class VgUtcPipe {
    /**
     * @param {?} value
     * @param {?} format
     * @return {?}
     */
    transform(value, format) {
        /** @type {?} */
        let date = new Date(value);
        /** @type {?} */
        let result = format;
        /** @type {?} */
        let ss = date.getUTCSeconds();
        /** @type {?} */
        let mm = date.getUTCMinutes();
        /** @type {?} */
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
        result = result.replace(/ss/g, (/** @type {?} */ (ss)));
        result = result.replace(/mm/g, (/** @type {?} */ (mm)));
        result = result.replace(/hh/g, (/** @type {?} */ (hh)));
        return result;
    }
}
VgUtcPipe.ɵfac = function VgUtcPipe_Factory(t) { return new (t || VgUtcPipe)(); };
VgUtcPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "vgUtc", type: VgUtcPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgUtcPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'vgUtc' }]
    }], null, null); })();
class VgTimeDisplayComponent {
    /**
     * @param {?} ref
     * @param {?} API
     */
    constructor(ref, API) {
        this.API = API;
        this.vgProperty = 'current';
        this.vgFormat = 'mm:ss';
        this.subscriptions = [];
        this.elem = ref.nativeElement;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe((/**
             * @return {?}
             */
            () => this.onPlayerReady())));
        }
    }
    /**
     * @return {?}
     */
    onPlayerReady() {
        this.target = this.API.getMediaById(this.vgFor);
    }
    /**
     * @return {?}
     */
    getTime() {
        /** @type {?} */
        let t = 0;
        if (this.target) {
            t = Math.round(this.target.time[this.vgProperty]);
            t = isNaN(t) || this.target.isLive ? 0 : t;
        }
        return t;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions.forEach((/**
         * @param {?} s
         * @return {?}
         */
        (s) => s.unsubscribe()));
    }
}
VgTimeDisplayComponent.ɵfac = function VgTimeDisplayComponent_Factory(t) { return new (t || VgTimeDisplayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"])); };
VgTimeDisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VgTimeDisplayComponent, selectors: [["vg-time-display"]], inputs: { vgProperty: "vgProperty", vgFormat: "vgFormat", vgFor: "vgFor" }, ngContentSelectors: _c0, decls: 3, vars: 2, consts: [[4, "ngIf"]], template: function VgTimeDisplayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, VgTimeDisplayComponent_span_0_Template, 2, 0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VgTimeDisplayComponent_span_1_Template, 3, 4, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.target == null ? null : ctx.target.isLive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.target == null ? null : ctx.target.isLive));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], pipes: [VgUtcPipe], styles: ["\n      vg-time-display {\n        -webkit-touch-callout: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        display: flex;\n        justify-content: center;\n        height: 50px;\n        width: 60px;\n        cursor: pointer;\n        color: white;\n        line-height: 50px;\n        pointer-events: none;\n        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n      }\n    "], encapsulation: 2 });
/** @nocollapse */
VgTimeDisplayComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"] }
];
VgTimeDisplayComponent.propDecorators = {
    vgFor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    vgProperty: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    vgFormat: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgTimeDisplayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'vg-time-display',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                template: `
    <span *ngIf="target?.isLive">LIVE</span>
    <span *ngIf="!target?.isLive">{{ getTime() | vgUtc: vgFormat }}</span>
    <ng-content></ng-content>
  `,
                styles: [`
      vg-time-display {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        display: flex;
        justify-content: center;
        height: 50px;
        width: 60px;
        cursor: pointer;
        color: white;
        line-height: 50px;
        pointer-events: none;
        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
      }
    `]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"] }]; }, { vgProperty: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], vgFormat: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], vgFor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/vg-scrub-bar/vg-scrub-bar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VgScrubBarComponent {
    /**
     * @param {?} ref
     * @param {?} API
     * @param {?} vgControlsHiddenState
     */
    constructor(ref, API, vgControlsHiddenState) {
        this.API = API;
        this.hideScrubBar = false;
        this.vgSlider = true;
        this.isSeeking = false;
        this.wasPlaying = false;
        this.subscriptions = [];
        this.elem = ref.nativeElement;
        this.subscriptions.push(vgControlsHiddenState.isHidden.subscribe((/**
         * @param {?} hide
         * @return {?}
         */
        (hide) => this.onHideScrubBar(hide))));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe((/**
             * @return {?}
             */
            () => this.onPlayerReady())));
        }
    }
    /**
     * @return {?}
     */
    onPlayerReady() {
        this.target = this.API.getMediaById(this.vgFor);
    }
    /**
     * @protected
     * @return {?}
     */
    seekStart() {
        if (this.target.canPlay) {
            this.isSeeking = true;
            if (this.target.state === _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgStates"].VG_PLAYING) {
                this.wasPlaying = true;
            }
            this.target.pause();
        }
    }
    /**
     * @protected
     * @param {?} offset
     * @return {?}
     */
    seekMove(offset) {
        if (this.isSeeking) {
            /** @type {?} */
            const percentage = Math.max(Math.min((offset * 100) / this.elem.scrollWidth, 99.9), 0);
            this.target.time.current = (percentage * this.target.time.total) / 100;
            this.target.seekTime(percentage, true);
        }
    }
    /**
     * @protected
     * @param {?} offset
     * @return {?}
     */
    seekEnd(offset) {
        this.isSeeking = false;
        if (this.target.canPlay) {
            /** @type {?} */
            const percentage = Math.max(Math.min((offset * 100) / this.elem.scrollWidth, 99.9), 0);
            this.target.seekTime(percentage, true);
            if (this.wasPlaying) {
                this.wasPlaying = false;
                this.target.play();
            }
        }
    }
    /**
     * @protected
     * @return {?}
     */
    touchEnd() {
        this.isSeeking = false;
        if (this.wasPlaying) {
            this.wasPlaying = false;
            this.target.play();
        }
    }
    /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    getTouchOffset(event) {
        /** @type {?} */
        let offsetLeft = 0;
        /** @type {?} */
        let element = event.target;
        while (element) {
            offsetLeft += element.offsetLeft;
            element = element.offsetParent;
        }
        return event.touches[0].pageX - offsetLeft;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onMouseDownScrubBar($event) {
        if (this.target) {
            if (!this.target.isLive) {
                if (!this.vgSlider) {
                    this.seekEnd($event.offsetX);
                }
                else {
                    this.seekStart();
                }
            }
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onMouseMoveScrubBar($event) {
        if (this.target) {
            if (!this.target.isLive && this.vgSlider && this.isSeeking) {
                this.seekMove($event.offsetX);
            }
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onMouseUpScrubBar($event) {
        if (this.target) {
            if (!this.target.isLive && this.vgSlider && this.isSeeking) {
                this.seekEnd($event.offsetX);
            }
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onTouchStartScrubBar($event) {
        if (this.target) {
            if (!this.target.isLive) {
                if (!this.vgSlider) {
                    this.seekEnd(this.getTouchOffset($event));
                }
                else {
                    this.seekStart();
                }
            }
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onTouchMoveScrubBar($event) {
        if (this.target) {
            if (!this.target.isLive && this.vgSlider && this.isSeeking) {
                this.seekMove(this.getTouchOffset($event));
            }
        }
    }
    // @ts-ignore
    /**
     * @param {?} _$event
     * @return {?}
     */
    onTouchCancelScrubBar(_$event) {
        if (this.target) {
            if (!this.target.isLive && this.vgSlider && this.isSeeking) {
                this.touchEnd();
            }
        }
    }
    // @ts-ignore
    /**
     * @param {?} _$event
     * @return {?}
     */
    onTouchEndScrubBar(_$event) {
        if (this.target) {
            if (!this.target.isLive && this.vgSlider && this.isSeeking) {
                this.touchEnd();
            }
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    arrowAdjustVolume(event) {
        if (this.target) {
            if (event.keyCode === 38 || event.keyCode === 39) {
                event.preventDefault();
                this.target.seekTime((this.target.time.current + 5000) / 1000, false);
            }
            else if (event.keyCode === 37 || event.keyCode === 40) {
                event.preventDefault();
                this.target.seekTime((this.target.time.current - 5000) / 1000, false);
            }
        }
    }
    /**
     * @return {?}
     */
    getPercentage() {
        return this.target
            ? Math.round((this.target.time.current * 100) / this.target.time.total) + '%'
            : '0%';
    }
    /**
     * @param {?} hide
     * @return {?}
     */
    onHideScrubBar(hide) {
        this.hideScrubBar = hide;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions.forEach((/**
         * @param {?} s
         * @return {?}
         */
        (s) => s.unsubscribe()));
    }
}
VgScrubBarComponent.ɵfac = function VgScrubBarComponent_Factory(t) { return new (t || VgScrubBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgControlsHiddenService"])); };
VgScrubBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VgScrubBarComponent, selectors: [["vg-scrub-bar"]], hostVars: 2, hostBindings: function VgScrubBarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function VgScrubBarComponent_mousedown_HostBindingHandler($event) { return ctx.onMouseDownScrubBar($event); })("mousemove", function VgScrubBarComponent_mousemove_HostBindingHandler($event) { return ctx.onMouseMoveScrubBar($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("mouseup", function VgScrubBarComponent_mouseup_HostBindingHandler($event) { return ctx.onMouseUpScrubBar($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("touchstart", function VgScrubBarComponent_touchstart_HostBindingHandler($event) { return ctx.onTouchStartScrubBar($event); })("touchmove", function VgScrubBarComponent_touchmove_HostBindingHandler($event) { return ctx.onTouchMoveScrubBar($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("touchcancel", function VgScrubBarComponent_touchcancel_HostBindingHandler($event) { return ctx.onTouchCancelScrubBar($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("touchend", function VgScrubBarComponent_touchend_HostBindingHandler($event) { return ctx.onTouchEndScrubBar($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("keydown", function VgScrubBarComponent_keydown_HostBindingHandler($event) { return ctx.arrowAdjustVolume($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide", ctx.hideScrubBar);
    } }, inputs: { vgSlider: "vgSlider", vgFor: "vgFor" }, ngContentSelectors: _c0, decls: 2, vars: 2, consts: [["tabindex", "0", "role", "slider", "aria-label", "scrub bar", "aria-level", "polite", "aria-valuemin", "0", "aria-valuemax", "100", 1, "scrubBar"]], template: function VgScrubBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuenow", ctx.getPercentage())("aria-valuetext", ctx.getPercentage());
    } }, styles: ["\n      vg-scrub-bar {\n        -webkit-touch-callout: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        position: absolute;\n        width: 100%;\n        height: 5px;\n        bottom: 50px;\n        margin: 0;\n        cursor: pointer;\n        align-items: center;\n        background: rgba(0, 0, 0, 0.75);\n        z-index: 250;\n        -webkit-transition: bottom 1s, opacity 0.5s;\n        -khtml-transition: bottom 1s, opacity 0.5s;\n        -moz-transition: bottom 1s, opacity 0.5s;\n        -ms-transition: bottom 1s, opacity 0.5s;\n        transition: bottom 1s, opacity 0.5s;\n      }\n      vg-scrub-bar .scrubBar {\n        position: relative;\n        display: flex;\n        flex-grow: 1;\n        align-items: center;\n        height: 100%;\n      }\n      vg-controls vg-scrub-bar {\n        position: relative;\n        bottom: 0;\n        background: transparent;\n        height: 50px;\n        flex-grow: 1;\n        flex-basis: 0;\n        margin: 0 10px;\n        -webkit-transition: initial;\n        -khtml-transition: initial;\n        -moz-transition: initial;\n        -ms-transition: initial;\n        transition: initial;\n      }\n      vg-scrub-bar.hide {\n        bottom: 0;\n        opacity: 0;\n      }\n      vg-controls vg-scrub-bar.hide {\n        bottom: initial;\n        opacity: initial;\n      }\n    "], encapsulation: 2 });
/** @nocollapse */
VgScrubBarComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"] },
    { type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgControlsHiddenService"] }
];
VgScrubBarComponent.propDecorators = {
    hideScrubBar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.hide',] }],
    vgFor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    vgSlider: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onMouseDownScrubBar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mousedown', ['$event'],] }],
    onMouseMoveScrubBar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:mousemove', ['$event'],] }],
    onMouseUpScrubBar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:mouseup', ['$event'],] }],
    onTouchStartScrubBar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['touchstart', ['$event'],] }],
    onTouchMoveScrubBar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:touchmove', ['$event'],] }],
    onTouchCancelScrubBar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:touchcancel', ['$event'],] }],
    onTouchEndScrubBar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:touchend', ['$event'],] }],
    arrowAdjustVolume: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keydown', ['$event'],] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgScrubBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'vg-scrub-bar',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
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
                styles: [`
      vg-scrub-bar {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        position: absolute;
        width: 100%;
        height: 5px;
        bottom: 50px;
        margin: 0;
        cursor: pointer;
        align-items: center;
        background: rgba(0, 0, 0, 0.75);
        z-index: 250;
        -webkit-transition: bottom 1s, opacity 0.5s;
        -khtml-transition: bottom 1s, opacity 0.5s;
        -moz-transition: bottom 1s, opacity 0.5s;
        -ms-transition: bottom 1s, opacity 0.5s;
        transition: bottom 1s, opacity 0.5s;
      }
      vg-scrub-bar .scrubBar {
        position: relative;
        display: flex;
        flex-grow: 1;
        align-items: center;
        height: 100%;
      }
      vg-controls vg-scrub-bar {
        position: relative;
        bottom: 0;
        background: transparent;
        height: 50px;
        flex-grow: 1;
        flex-basis: 0;
        margin: 0 10px;
        -webkit-transition: initial;
        -khtml-transition: initial;
        -moz-transition: initial;
        -ms-transition: initial;
        transition: initial;
      }
      vg-scrub-bar.hide {
        bottom: 0;
        opacity: 0;
      }
      vg-controls vg-scrub-bar.hide {
        bottom: initial;
        opacity: initial;
      }
    `]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"] }, { type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgControlsHiddenService"] }]; }, { hideScrubBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.hide']
        }], vgSlider: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], 
    /**
     * @param {?} $event
     * @return {?}
     */
    onMouseDownScrubBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mousedown', ['$event']]
        }], 
    /**
     * @param {?} $event
     * @return {?}
     */
    onMouseMoveScrubBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:mousemove', ['$event']]
        }], 
    /**
     * @param {?} $event
     * @return {?}
     */
    onMouseUpScrubBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:mouseup', ['$event']]
        }], 
    /**
     * @param {?} $event
     * @return {?}
     */
    onTouchStartScrubBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['touchstart', ['$event']]
        }], 
    /**
     * @param {?} $event
     * @return {?}
     */
    onTouchMoveScrubBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:touchmove', ['$event']]
        }], 
    // @ts-ignore
    /**
     * @param {?} _$event
     * @return {?}
     */
    onTouchCancelScrubBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:touchcancel', ['$event']]
        }], 
    // @ts-ignore
    /**
     * @param {?} _$event
     * @return {?}
     */
    onTouchEndScrubBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:touchend', ['$event']]
        }], 
    /**
     * @param {?} event
     * @return {?}
     */
    arrowAdjustVolume: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keydown', ['$event']]
        }], vgFor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/vg-quality-selector/vg-quality-selector.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VgQualitySelectorComponent {
    /**
     * @param {?} ref
     * @param {?} API
     */
    constructor(ref, API) {
        this.API = API;
        this.onBitrateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.subscriptions = [];
        this.elem = ref.nativeElement;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.bitrates.currentValue && changes.bitrates.currentValue.length) {
            this.bitrates.forEach((/**
             * @param {?} item
             * @return {?}
             */
            (item) => (item.label =
                item.label || Math.round(item.bitrate / 1000).toString())));
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    selectBitrate(index) {
        this.bitrateSelected = this.bitrates[index];
        this.onBitrateChange.emit(this.bitrates[index]);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions.forEach((/**
         * @param {?} s
         * @return {?}
         */
        (s) => s.unsubscribe()));
    }
}
VgQualitySelectorComponent.ɵfac = function VgQualitySelectorComponent_Factory(t) { return new (t || VgQualitySelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"])); };
VgQualitySelectorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VgQualitySelectorComponent, selectors: [["vg-quality-selector"]], inputs: { bitrates: "bitrates" }, outputs: { onBitrateChange: "onBitrateChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 5, consts: [[1, "container"], [1, "quality-selected"], ["tabindex", "0", "aria-label", "quality selector", 1, "quality-selector", 3, "change"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [3, "value", "selected"]], template: function VgQualitySelectorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function VgQualitySelectorComponent_Template_select_change_3_listener($event) { return ctx.selectBitrate($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, VgQualitySelectorComponent_option_4_Template, 2, 3, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("vg-icon-hd", !ctx.bitrateSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.bitrateSelected == null ? null : ctx.bitrateSelected.label, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuetext", ctx.ariaValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bitrates);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["\n      vg-quality-selector {\n        -webkit-touch-callout: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        display: flex;\n        justify-content: center;\n        width: 50px;\n        height: 50px;\n        cursor: pointer;\n        color: white;\n        line-height: 50px;\n      }\n      vg-quality-selector .container {\n        position: relative;\n        display: flex;\n        flex-grow: 1;\n        align-items: center;\n        padding: 0;\n        margin: 5px;\n      }\n      vg-quality-selector select.quality-selector {\n        width: 50px;\n        padding: 5px 8px;\n        border: none;\n        background: none;\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        appearance: none;\n        color: transparent;\n        font-size: 16px;\n      }\n      vg-quality-selector select.quality-selector::-ms-expand {\n        display: none;\n      }\n      vg-quality-selector select.quality-selector option {\n        color: #000;\n      }\n      vg-quality-selector .quality-selected {\n        position: absolute;\n        width: 100%;\n        height: 50px;\n        top: -6px;\n        text-align: center;\n        text-transform: uppercase;\n        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n        padding-top: 2px;\n        pointer-events: none;\n      }\n      vg-quality-selector .vg-icon-closed_caption:before {\n        width: 100%;\n      }\n    "], encapsulation: 2 });
/** @nocollapse */
VgQualitySelectorComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"] }
];
VgQualitySelectorComponent.propDecorators = {
    bitrates: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onBitrateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgQualitySelectorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'vg-quality-selector',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
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
                styles: [`
      vg-quality-selector {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        display: flex;
        justify-content: center;
        width: 50px;
        height: 50px;
        cursor: pointer;
        color: white;
        line-height: 50px;
      }
      vg-quality-selector .container {
        position: relative;
        display: flex;
        flex-grow: 1;
        align-items: center;
        padding: 0;
        margin: 5px;
      }
      vg-quality-selector select.quality-selector {
        width: 50px;
        padding: 5px 8px;
        border: none;
        background: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        color: transparent;
        font-size: 16px;
      }
      vg-quality-selector select.quality-selector::-ms-expand {
        display: none;
      }
      vg-quality-selector select.quality-selector option {
        color: #000;
      }
      vg-quality-selector .quality-selected {
        position: absolute;
        width: 100%;
        height: 50px;
        top: -6px;
        text-align: center;
        text-transform: uppercase;
        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
        padding-top: 2px;
        pointer-events: none;
      }
      vg-quality-selector .vg-icon-closed_caption:before {
        width: 100%;
      }
    `]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"] }]; }, { onBitrateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], bitrates: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/vg-playback-button/vg-playback-button.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VgPlaybackButtonComponent {
    /**
     * @param {?} ref
     * @param {?} API
     * @param {?} cdr
     */
    constructor(ref, API, cdr) {
        this.API = API;
        this.cdr = cdr;
        this.subscriptions = [];
        this.ariaValue = 1;
        this.elem = ref.nativeElement;
        this.playbackValues = ['0.5', '1.0', '1.5', '2.0'];
        this.playbackIndex = 1;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe((/**
             * @return {?}
             */
            () => this.onPlayerReady())));
        }
    }
    /**
     * @return {?}
     */
    onPlayerReady() {
        this.target = this.API.getMediaById(this.vgFor);
    }
    /**
     * @return {?}
     */
    onClick() {
        this.updatePlaybackSpeed();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) {
        // On press Enter (13) or Space (32)
        if (event.keyCode === 13 || event.keyCode === 32) {
            event.preventDefault();
            this.updatePlaybackSpeed();
        }
    }
    /**
     * @return {?}
     */
    updatePlaybackSpeed() {
        this.playbackIndex = ++this.playbackIndex % this.playbackValues.length;
        if (this.target instanceof _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"]) {
            this.target.playbackRate = this.playbackValues[this.playbackIndex];
        }
        else {
            this.target.playbackRate[this.vgFor] = this.playbackValues[this.playbackIndex];
        }
        this.detectChanges();
    }
    /**
     * @return {?}
     */
    getPlaybackRate() {
        this.ariaValue = this.target ? this.target.playbackRate : 1.0;
        return this.ariaValue;
    }
    /**
     * @return {?}
     */
    detectChanges() {
        try {
            this.cdr.detectChanges();
        }
        catch (e) {
            console.warn(e);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions.forEach((/**
         * @param {?} s
         * @return {?}
         */
        (s) => s.unsubscribe()));
    }
}
VgPlaybackButtonComponent.ɵfac = function VgPlaybackButtonComponent_Factory(t) { return new (t || VgPlaybackButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
VgPlaybackButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VgPlaybackButtonComponent, selectors: [["vg-playback-button"]], hostBindings: function VgPlaybackButtonComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VgPlaybackButtonComponent_click_HostBindingHandler() { return ctx.onClick(); })("keydown", function VgPlaybackButtonComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); });
    } }, inputs: { playbackValues: "playbackValues", vgFor: "vgFor" }, decls: 2, vars: 2, consts: [["tabindex", "0", "role", "button", "aria-label", "playback speed button", 1, "button"]], template: function VgPlaybackButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuetext", ctx.ariaValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.getPlaybackRate(), "x ");
    } }, styles: ["\n      vg-playback-button {\n        -webkit-touch-callout: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        display: flex;\n        justify-content: center;\n        height: 50px;\n        width: 50px;\n        cursor: pointer;\n        color: white;\n        line-height: 50px;\n        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n      }\n      vg-playback-button .button {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        width: 50px;\n      }\n    "], encapsulation: 2 });
/** @nocollapse */
VgPlaybackButtonComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
VgPlaybackButtonComponent.propDecorators = {
    vgFor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    playbackValues: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] }],
    onKeyDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keydown', ['$event'],] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgPlaybackButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'vg-playback-button',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                template: ` <span
    class="button"
    tabindex="0"
    role="button"
    aria-label="playback speed button"
    [attr.aria-valuetext]="ariaValue"
  >
    {{ getPlaybackRate() }}x
  </span>`,
                styles: [`
      vg-playback-button {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        display: flex;
        justify-content: center;
        height: 50px;
        width: 50px;
        cursor: pointer;
        color: white;
        line-height: 50px;
        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
      }
      vg-playback-button .button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
      }
    `]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { playbackValues: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], 
    /**
     * @return {?}
     */
    onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
        }], 
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keydown', ['$event']]
        }], vgFor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/vg-play-pause/vg-play-pause.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VgPlayPauseComponent {
    /**
     * @param {?} ref
     * @param {?} API
     */
    constructor(ref, API) {
        this.API = API;
        this.subscriptions = [];
        this.ariaValue = _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgStates"].VG_PAUSED;
        this.elem = ref.nativeElement;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe((/**
             * @return {?}
             */
            () => this.onPlayerReady())));
        }
    }
    /**
     * @return {?}
     */
    onPlayerReady() {
        this.target = this.API.getMediaById(this.vgFor);
    }
    /**
     * @return {?}
     */
    onClick() {
        this.playPause();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) {
        // On press Enter (13) or Space (32)
        if (event.keyCode === 13 || event.keyCode === 32) {
            event.preventDefault();
            this.playPause();
        }
    }
    /**
     * @return {?}
     */
    playPause() {
        /** @type {?} */
        const state = this.getState();
        switch (state) {
            case _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgStates"].VG_PLAYING:
                this.target.pause();
                break;
            case _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgStates"].VG_PAUSED:
            case _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgStates"].VG_ENDED:
                this.target.play();
                break;
        }
    }
    /**
     * @return {?}
     */
    getState() {
        this.ariaValue = this.target ? this.target.state : _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgStates"].VG_PAUSED;
        return this.ariaValue;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions.forEach((/**
         * @param {?} s
         * @return {?}
         */
        (s) => s.unsubscribe()));
    }
}
VgPlayPauseComponent.ɵfac = function VgPlayPauseComponent_Factory(t) { return new (t || VgPlayPauseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"])); };
VgPlayPauseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VgPlayPauseComponent, selectors: [["vg-play-pause"]], hostBindings: function VgPlayPauseComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VgPlayPauseComponent_click_HostBindingHandler() { return ctx.onClick(); })("keydown", function VgPlayPauseComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); });
    } }, inputs: { vgFor: "vgFor" }, decls: 1, vars: 6, consts: [["tabindex", "0", "role", "button", 1, "icon"]], template: function VgPlayPauseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("vg-icon-pause", ctx.getState() === "playing")("vg-icon-play_arrow", ctx.getState() === "paused" || ctx.getState() === "ended");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.getState() === "paused" ? "play" : "pause")("aria-valuetext", ctx.ariaValue);
    } }, styles: ["\n      vg-play-pause {\n        -webkit-touch-callout: none;\n        -webkit-user-select: none;\n        -khtml-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        display: flex;\n        justify-content: center;\n        height: 50px;\n        width: 50px;\n        cursor: pointer;\n        color: white;\n        line-height: 50px;\n      }\n      vg-play-pause .icon {\n        pointer-events: none;\n      }\n    "], encapsulation: 2 });
/** @nocollapse */
VgPlayPauseComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"] }
];
VgPlayPauseComponent.propDecorators = {
    vgFor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] }],
    onKeyDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keydown', ['$event'],] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgPlayPauseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'vg-play-pause',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
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
                styles: [`
      vg-play-pause {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        display: flex;
        justify-content: center;
        height: 50px;
        width: 50px;
        cursor: pointer;
        color: white;
        line-height: 50px;
      }
      vg-play-pause .icon {
        pointer-events: none;
      }
    `]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"] }]; }, { 
    /**
     * @return {?}
     */
    onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
        }], 
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keydown', ['$event']]
        }], vgFor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/vg-mute/vg-mute.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VgMuteComponent {
    /**
     * @param {?} ref
     * @param {?} API
     */
    constructor(ref, API) {
        this.API = API;
        this.subscriptions = [];
        this.ariaValue = 'unmuted';
        this.elem = ref.nativeElement;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe((/**
             * @return {?}
             */
            () => this.onPlayerReady())));
        }
    }
    /**
     * @return {?}
     */
    onPlayerReady() {
        this.target = this.API.getMediaById(this.vgFor);
        this.currentVolume = this.target.volume;
    }
    /**
     * @return {?}
     */
    onClick() {
        this.changeMuteState();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) {
        // On press Enter (13) or Space (32)
        if (event.keyCode === 13 || event.keyCode === 32) {
            event.preventDefault();
            this.changeMuteState();
        }
    }
    /**
     * @return {?}
     */
    changeMuteState() {
        /** @type {?} */
        const volume = this.getVolume();
        if (volume === 0) {
            if (this.target.volume === 0 && this.currentVolume === 0) {
                this.currentVolume = 1;
            }
            this.target.volume = this.currentVolume;
        }
        else {
            this.currentVolume = volume;
            this.target.volume = 0;
        }
    }
    /**
     * @return {?}
     */
    getVolume() {
        /** @type {?} */
        const volume = this.target ? this.target.volume : 0;
        this.ariaValue = volume ? 'unmuted' : 'muted';
        return volume;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions.forEach((/**
         * @param {?} s
         * @return {?}
         */
        (s) => s.unsubscribe()));
    }
}
VgMuteComponent.ɵfac = function VgMuteComponent_Factory(t) { return new (t || VgMuteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"])); };
VgMuteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VgMuteComponent, selectors: [["vg-mute"]], hostBindings: function VgMuteComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VgMuteComponent_click_HostBindingHandler() { return ctx.onClick(); })("keydown", function VgMuteComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); });
    } }, inputs: { vgFor: "vgFor" }, decls: 1, vars: 9, consts: [["tabindex", "0", "role", "button", "aria-label", "mute button", 1, "icon"]], template: function VgMuteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("vg-icon-volume_up", ctx.getVolume() >= 0.75)("vg-icon-volume_down", ctx.getVolume() >= 0.25 && ctx.getVolume() < 0.75)("vg-icon-volume_mute", ctx.getVolume() > 0 && ctx.getVolume() < 0.25)("vg-icon-volume_off", ctx.getVolume() === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuetext", ctx.ariaValue);
    } }, styles: ["\n      vg-mute {\n        -webkit-touch-callout: none;\n        -webkit-user-select: none;\n        -khtml-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        display: flex;\n        justify-content: center;\n        height: 50px;\n        width: 50px;\n        cursor: pointer;\n        color: white;\n        line-height: 50px;\n      }\n      vg-mute .icon {\n        pointer-events: none;\n      }\n    "], encapsulation: 2 });
/** @nocollapse */
VgMuteComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"] }
];
VgMuteComponent.propDecorators = {
    vgFor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] }],
    onKeyDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keydown', ['$event'],] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgMuteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'vg-mute',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
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
                styles: [`
      vg-mute {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        display: flex;
        justify-content: center;
        height: 50px;
        width: 50px;
        cursor: pointer;
        color: white;
        line-height: 50px;
      }
      vg-mute .icon {
        pointer-events: none;
      }
    `]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"] }]; }, { 
    /**
     * @return {?}
     */
    onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
        }], 
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keydown', ['$event']]
        }], vgFor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/vg-fullscreen/vg-fullscreen.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VgFullscreenComponent {
    /**
     * @param {?} ref
     * @param {?} API
     * @param {?} fsAPI
     */
    constructor(ref, API, fsAPI) {
        this.API = API;
        this.fsAPI = fsAPI;
        this.isFullscreen = false;
        this.subscriptions = [];
        this.ariaValue = 'normal mode';
        this.elem = ref.nativeElement;
        this.subscriptions.push(this.fsAPI.onChangeFullscreen.subscribe(this.onChangeFullscreen.bind(this)));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe((/**
             * @return {?}
             */
            () => this.onPlayerReady())));
        }
    }
    /**
     * @return {?}
     */
    onPlayerReady() {
        this.target = this.API.getMediaById(this.vgFor);
    }
    /**
     * @param {?} fsState
     * @return {?}
     */
    onChangeFullscreen(fsState) {
        this.ariaValue = fsState ? 'fullscreen mode' : 'normal mode';
        this.isFullscreen = fsState;
    }
    /**
     * @return {?}
     */
    onClick() {
        this.changeFullscreenState();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) {
        // On press Enter (13) or Space (32)
        if (event.keyCode === 13 || event.keyCode === 32) {
            event.preventDefault();
            this.changeFullscreenState();
        }
    }
    /**
     * @return {?}
     */
    changeFullscreenState() {
        /** @type {?} */
        let element = this.target;
        if (this.target instanceof _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"]) {
            element = null;
        }
        this.fsAPI.toggleFullscreen(element);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions.forEach((/**
         * @param {?} s
         * @return {?}
         */
        (s) => s.unsubscribe()));
    }
}
VgFullscreenComponent.ɵfac = function VgFullscreenComponent_Factory(t) { return new (t || VgFullscreenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgFullscreenApiService"])); };
VgFullscreenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VgFullscreenComponent, selectors: [["vg-fullscreen"]], hostBindings: function VgFullscreenComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VgFullscreenComponent_click_HostBindingHandler() { return ctx.onClick(); })("keydown", function VgFullscreenComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); });
    } }, decls: 1, vars: 5, consts: [["tabindex", "0", "role", "button", "aria-label", "fullscreen button", 1, "icon"]], template: function VgFullscreenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("vg-icon-fullscreen", !ctx.isFullscreen)("vg-icon-fullscreen_exit", ctx.isFullscreen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuetext", ctx.ariaValue);
    } }, styles: ["\n      vg-fullscreen {\n        -webkit-touch-callout: none;\n        -webkit-user-select: none;\n        -khtml-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        display: flex;\n        justify-content: center;\n        height: 50px;\n        width: 50px;\n        cursor: pointer;\n        color: white;\n        line-height: 50px;\n      }\n      vg-fullscreen .icon {\n        pointer-events: none;\n      }\n    "], encapsulation: 2 });
/** @nocollapse */
VgFullscreenComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"] },
    { type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgFullscreenApiService"] }
];
VgFullscreenComponent.propDecorators = {
    onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] }],
    onKeyDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keydown', ['$event'],] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgFullscreenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'vg-fullscreen',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                template: ` <div
    class="icon"
    [class.vg-icon-fullscreen]="!isFullscreen"
    [class.vg-icon-fullscreen_exit]="isFullscreen"
    tabindex="0"
    role="button"
    aria-label="fullscreen button"
    [attr.aria-valuetext]="ariaValue"
  ></div>`,
                styles: [`
      vg-fullscreen {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        display: flex;
        justify-content: center;
        height: 50px;
        width: 50px;
        cursor: pointer;
        color: white;
        line-height: 50px;
      }
      vg-fullscreen .icon {
        pointer-events: none;
      }
    `]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"] }, { type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgFullscreenApiService"] }]; }, { 
    /**
     * @return {?}
     */
    onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
        }], 
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keydown', ['$event']]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/vg-scrub-bar/vg-scrub-bar-buffering-time/vg-scrub-bar-buffering-time.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VgScrubBarBufferingTimeComponent {
    /**
     * @param {?} ref
     * @param {?} API
     */
    constructor(ref, API) {
        this.API = API;
        this.subscriptions = [];
        this.elem = ref.nativeElement;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe((/**
             * @return {?}
             */
            () => this.onPlayerReady())));
        }
    }
    /**
     * @return {?}
     */
    onPlayerReady() {
        this.target = this.API.getMediaById(this.vgFor);
    }
    /**
     * @return {?}
     */
    getBufferTime() {
        /** @type {?} */
        let bufferTime = '0%';
        if (this.target && this.target.buffer && this.target.buffered.length) {
            if (this.target.time.total === 0) {
                bufferTime = '0%';
            }
            else {
                bufferTime =
                    (this.target.buffer.end / this.target.time.total) * 100 + '%';
            }
        }
        return bufferTime;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions.forEach((/**
         * @param {?} s
         * @return {?}
         */
        (s) => s.unsubscribe()));
    }
}
VgScrubBarBufferingTimeComponent.ɵfac = function VgScrubBarBufferingTimeComponent_Factory(t) { return new (t || VgScrubBarBufferingTimeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"])); };
VgScrubBarBufferingTimeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VgScrubBarBufferingTimeComponent, selectors: [["vg-scrub-bar-buffering-time"]], inputs: { vgFor: "vgFor" }, decls: 1, vars: 2, consts: [[1, "background"]], template: function VgScrubBarBufferingTimeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.getBufferTime());
    } }, styles: ["\n      vg-scrub-bar-buffering-time {\n        display: flex;\n        width: 100%;\n        height: 5px;\n        pointer-events: none;\n        position: absolute;\n      }\n      vg-scrub-bar-buffering-time .background {\n        background-color: rgba(255, 255, 255, 0.3);\n      }\n      vg-controls vg-scrub-bar-buffering-time {\n        position: absolute;\n        top: calc(50% - 3px);\n      }\n      vg-controls vg-scrub-bar-buffering-time .background {\n        -webkit-border-radius: 2px;\n        -moz-border-radius: 2px;\n        border-radius: 2px;\n      }\n    "], encapsulation: 2 });
/** @nocollapse */
VgScrubBarBufferingTimeComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"] }
];
VgScrubBarBufferingTimeComponent.propDecorators = {
    vgFor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgScrubBarBufferingTimeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'vg-scrub-bar-buffering-time',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                template: `<div class="background" [style.width]="getBufferTime()"></div>`,
                styles: [`
      vg-scrub-bar-buffering-time {
        display: flex;
        width: 100%;
        height: 5px;
        pointer-events: none;
        position: absolute;
      }
      vg-scrub-bar-buffering-time .background {
        background-color: rgba(255, 255, 255, 0.3);
      }
      vg-controls vg-scrub-bar-buffering-time {
        position: absolute;
        top: calc(50% - 3px);
      }
      vg-controls vg-scrub-bar-buffering-time .background {
        -webkit-border-radius: 2px;
        -moz-border-radius: 2px;
        border-radius: 2px;
      }
    `]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"] }]; }, { vgFor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/vg-scrub-bar/vg-scrub-bar-cue-points/vg-scrub-bar-cue-points.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable-next-line: no-conflicting-lifecycle
class VgScrubBarCuePointsComponent {
    /**
     * @param {?} ref
     * @param {?} API
     */
    constructor(ref, API) {
        this.API = API;
        this.onLoadedMetadataCalled = false;
        this.cuePoints = [];
        this.subscriptions = [];
        this.totalCues = 0;
        this.elem = ref.nativeElement;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe((/**
             * @return {?}
             */
            () => this.onPlayerReady())));
        }
    }
    /**
     * @return {?}
     */
    onPlayerReady() {
        this.target = this.API.getMediaById(this.vgFor);
        /** @type {?} */
        const onTimeUpdate = this.target.subscriptions.loadedMetadata;
        this.subscriptions.push(onTimeUpdate.subscribe(this.onLoadedMetadata.bind(this)));
        if (this.onLoadedMetadataCalled) {
            this.onLoadedMetadata();
        }
    }
    /**
     * @return {?}
     */
    onLoadedMetadata() {
        if (this.vgCuePoints) {
            // We need to transform the TextTrackCueList to Array or it doesn't work on IE11/Edge.
            // See: https://github.com/videogular/videogular2/issues/369
            this.cuePoints = [];
            for (let i = 0, l = this.vgCuePoints.length; i < l; i++) {
                /** @type {?} */
                const end = this.vgCuePoints[i].endTime >= 0
                    ? this.vgCuePoints[i].endTime
                    : this.vgCuePoints[i].startTime + 1;
                /** @type {?} */
                const cuePointDuration = (end - this.vgCuePoints[i].startTime) * 1000;
                /** @type {?} */
                let position = '0';
                /** @type {?} */
                let percentWidth = '0';
                if (typeof cuePointDuration === 'number' && this.target.time.total) {
                    percentWidth =
                        (cuePointDuration * 100) / this.target.time.total + '%';
                    position =
                        (this.vgCuePoints[i].startTime * 100) /
                            Math.round(this.target.time.total / 1000) +
                            '%';
                }
                ((/** @type {?} */ (this.vgCuePoints[i]))).$$style = {
                    width: percentWidth,
                    left: position,
                };
                this.cuePoints.push(this.vgCuePoints[i]);
            }
        }
    }
    /**
     * @return {?}
     */
    updateCuePoints() {
        if (!this.target) {
            this.onLoadedMetadataCalled = true;
            return;
        }
        this.onLoadedMetadata();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.vgCuePoints.currentValue) {
            this.updateCuePoints();
        }
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (this.vgCuePoints) {
            /** @type {?} */
            const changes = this.totalCues !== this.vgCuePoints.length;
            if (changes) {
                this.totalCues = this.vgCuePoints.length;
                this.updateCuePoints();
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions.forEach((/**
         * @param {?} s
         * @return {?}
         */
        (s) => s.unsubscribe()));
    }
}
VgScrubBarCuePointsComponent.ɵfac = function VgScrubBarCuePointsComponent_Factory(t) { return new (t || VgScrubBarCuePointsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"])); };
VgScrubBarCuePointsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VgScrubBarCuePointsComponent, selectors: [["vg-scrub-bar-cue-points"]], inputs: { vgCuePoints: "vgCuePoints", vgFor: "vgFor" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 1, consts: [[1, "cue-point-container"], ["class", "cue-point", 3, "width", "left", 4, "ngFor", "ngForOf"], [1, "cue-point"]], template: function VgScrubBarCuePointsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VgScrubBarCuePointsComponent_span_1_Template, 1, 4, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cuePoints);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["\n      vg-scrub-bar-cue-points {\n        display: flex;\n        width: 100%;\n        height: 5px;\n        pointer-events: none;\n        position: absolute;\n      }\n      vg-scrub-bar-cue-points .cue-point-container .cue-point {\n        position: absolute;\n        height: 5px;\n        background-color: rgba(255, 204, 0, 0.7);\n      }\n      vg-controls vg-scrub-bar-cue-points {\n        position: absolute;\n        top: calc(50% - 3px);\n      }\n    "], encapsulation: 2 });
/** @nocollapse */
VgScrubBarCuePointsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"] }
];
VgScrubBarCuePointsComponent.propDecorators = {
    vgCuePoints: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    vgFor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgScrubBarCuePointsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'vg-scrub-bar-cue-points',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
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
                styles: [`
      vg-scrub-bar-cue-points {
        display: flex;
        width: 100%;
        height: 5px;
        pointer-events: none;
        position: absolute;
      }
      vg-scrub-bar-cue-points .cue-point-container .cue-point {
        position: absolute;
        height: 5px;
        background-color: rgba(255, 204, 0, 0.7);
      }
      vg-controls vg-scrub-bar-cue-points {
        position: absolute;
        top: calc(50% - 3px);
      }
    `]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"] }]; }, { vgCuePoints: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], vgFor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/vg-scrub-bar/vg-scrub-bar-current-time/vg-scrub-bar-current-time.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VgScrubBarCurrentTimeComponent {
    /**
     * @param {?} ref
     * @param {?} API
     */
    constructor(ref, API) {
        this.API = API;
        this.vgSlider = false;
        this.subscriptions = [];
        this.elem = ref.nativeElement;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe((/**
             * @return {?}
             */
            () => this.onPlayerReady())));
        }
    }
    /**
     * @return {?}
     */
    onPlayerReady() {
        this.target = this.API.getMediaById(this.vgFor);
    }
    /**
     * @return {?}
     */
    getPercentage() {
        return this.target
            ? Math.round((this.target.time.current * 100) / this.target.time.total) +
                '%'
            : '0%';
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions.forEach((/**
         * @param {?} s
         * @return {?}
         */
        (s) => s.unsubscribe()));
    }
}
VgScrubBarCurrentTimeComponent.ɵfac = function VgScrubBarCurrentTimeComponent_Factory(t) { return new (t || VgScrubBarCurrentTimeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"])); };
VgScrubBarCurrentTimeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VgScrubBarCurrentTimeComponent, selectors: [["vg-scrub-bar-current-time"]], inputs: { vgSlider: "vgSlider", vgFor: "vgFor" }, decls: 2, vars: 3, consts: [[1, "background"], ["class", "slider", 4, "ngIf"], [1, "slider"]], template: function VgScrubBarCurrentTimeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VgScrubBarCurrentTimeComponent_span_1_Template, 1, 0, "span", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.getPercentage());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.vgSlider);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["\n      vg-scrub-bar-current-time {\n        display: flex;\n        width: 100%;\n        height: 5px;\n        pointer-events: none;\n        position: absolute;\n      }\n      vg-scrub-bar-current-time .background {\n        background-color: white;\n      }\n      vg-controls vg-scrub-bar-current-time {\n        position: absolute;\n        top: calc(50% - 3px);\n        -webkit-border-radius: 2px;\n        -moz-border-radius: 2px;\n        border-radius: 2px;\n      }\n      vg-controls vg-scrub-bar-current-time .background {\n        border: 1px solid white;\n        -webkit-border-radius: 2px;\n        -moz-border-radius: 2px;\n        border-radius: 2px;\n      }\n      vg-scrub-bar-current-time .slider {\n        background: white;\n        height: 15px;\n        width: 15px;\n        border-radius: 50%;\n        box-shadow: 0px 0px 10px black;\n        margin-top: -5px;\n        margin-left: -10px;\n      }\n    "], encapsulation: 2 });
/** @nocollapse */
VgScrubBarCurrentTimeComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"] }
];
VgScrubBarCurrentTimeComponent.propDecorators = {
    vgFor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    vgSlider: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgScrubBarCurrentTimeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'vg-scrub-bar-current-time',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                template: `<div class="background" [style.width]="getPercentage()"></div>
    <span class="slider" *ngIf="vgSlider"></span>`,
                styles: [`
      vg-scrub-bar-current-time {
        display: flex;
        width: 100%;
        height: 5px;
        pointer-events: none;
        position: absolute;
      }
      vg-scrub-bar-current-time .background {
        background-color: white;
      }
      vg-controls vg-scrub-bar-current-time {
        position: absolute;
        top: calc(50% - 3px);
        -webkit-border-radius: 2px;
        -moz-border-radius: 2px;
        border-radius: 2px;
      }
      vg-controls vg-scrub-bar-current-time .background {
        border: 1px solid white;
        -webkit-border-radius: 2px;
        -moz-border-radius: 2px;
        border-radius: 2px;
      }
      vg-scrub-bar-current-time .slider {
        background: white;
        height: 15px;
        width: 15px;
        border-radius: 50%;
        box-shadow: 0px 0px 10px black;
        margin-top: -5px;
        margin-left: -10px;
      }
    `]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"] }]; }, { vgSlider: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], vgFor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/controls.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components = [
    VgControlsComponent,
    VgVolumeComponent,
    VgTrackSelectorComponent,
    VgTimeDisplayComponent,
    VgScrubBarComponent,
    VgQualitySelectorComponent,
    VgPlaybackButtonComponent,
    VgPlayPauseComponent,
    VgMuteComponent,
    VgFullscreenComponent,
    VgUtcPipe,
    VgScrubBarBufferingTimeComponent,
    VgScrubBarCuePointsComponent,
    VgScrubBarCurrentTimeComponent
];
class VgControlsModule {
}
VgControlsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: VgControlsModule });
VgControlsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function VgControlsModule_Factory(t) { return new (t || VgControlsModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgCoreModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VgControlsModule, { declarations: function () { return [VgControlsComponent, VgVolumeComponent, VgTrackSelectorComponent, VgTimeDisplayComponent, VgScrubBarComponent, VgQualitySelectorComponent, VgPlaybackButtonComponent, VgPlayPauseComponent, VgMuteComponent, VgFullscreenComponent, VgUtcPipe, VgScrubBarBufferingTimeComponent, VgScrubBarCuePointsComponent, VgScrubBarCurrentTimeComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgCoreModule"]]; }, exports: function () { return [VgControlsComponent, VgVolumeComponent, VgTrackSelectorComponent, VgTimeDisplayComponent, VgScrubBarComponent, VgQualitySelectorComponent, VgPlaybackButtonComponent, VgPlayPauseComponent, VgMuteComponent, VgFullscreenComponent, VgUtcPipe, VgScrubBarBufferingTimeComponent, VgScrubBarCuePointsComponent, VgScrubBarCurrentTimeComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgControlsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgCoreModule"]],
                declarations: [...components],
                exports: [...components]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: videogular-ngx-videogular-controls.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=videogular-ngx-videogular-controls.js.map

/***/ })

};;
//# sourceMappingURL=vendors~video-playlist-video-playlist-module.js.map