EBGInfra = {
    declareNamespace: function(a) {
        for (var b = window.EBG, a = a.split("."), c = 0; c < a.length; c++) {
            var d = a[c], e = b[d];
            e || (e = b[d] = {});
            b = e
        }
    },
    declareClass: function(a, b) {
        a.prototype.constructor = a;
        if (b)
            a.__superClass = b, a.__basePrototypePending=!0, EBG._resolveInheritance(a);
        return a
    },
    runTimed: function(a, b, c, d) {
        return setTimeout(function() {
            b.apply(a, c)
        }, d)
    },
    setInterval: function(a, b, c, d) {
        return setInterval(function() {
            b.apply(a, c)
        }, d)
    },
    clearInterval: function(a) {
        clearInterval(a)
    },
    _resolveInheritance: function(a) {
        if (a.__basePrototypePending) {
            var b =
            a.__superClass;
            EBG._resolveInheritance(b);
            var b = b.prototype, c = a.prototype, d;
            for (d in b)
                c[d] = c[d] || b[d];
            delete a.__basePrototypePending
        }
    },
    callSuperConstructor: function(a, b, c) {
        (a = a.__superClass) && (c ? a.apply(b, c) : a.apply(b));
        return b
    },
    callSuperFunction: function(a, b, c, d) {
        if (a = a.__superClass)
            var e = a.prototype[c];
        if (e instanceof Function)
            return d ? e.apply(b, d) : e.apply(b)
    },
    typeOf: function(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array ||!(a instanceof Object) && "[object Array]" == Object.prototype.toString.call(a) ||
                "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))
                    return "array";
                    if (!(a instanceof Object) && ("[object Function]" == Object.prototype.toString.call(a) || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call")))
                        return "function"
            } else 
                return "null";
                else if ("function" == b && "undefined" == typeof a.call)
            return "object";
        return b
    },
    isFunc: function(a) {
        return "function" == EBG.typeOf(a)
    },
    isDefined: function(a) {
        return "undefined" !=
        EBG.typeOf(a)
    },
    notNull: function(a) {
        return null != a
    },
    isDefinedNotNull: function(a) {
        return this.isDefined(a) && this.notNull(a)
    },
    hasValue: function(a) {
        return null != a && "undefined" != EBG.typeOf(a)
    },
    getRandomNumber: function() {
        var a = "";
        try {
            a = Math.random().toString(), a = a.substr(a.indexOf(".") + 1)
        } catch (b) {
            a = ""
        }
        return a
    },
    isObj: function(a) {
        return "object" == EBG.typeOf(a)
    },
    isArray: function(a) {
        return "array" == EBG.typeOf(a)
    },
    isBool: function(a) {
        return "boolean" == EBG.typeOf(a)
    },
    isNumber: function(a) {
        return !isNaN(parseFloat(a)) &&
        isFinite(a)
    },
    format: function(a) {
        for (var b = 1; b < arguments.length; b++)
            a = a.replace(RegExp("\\{" + (b - 1) + "\\}", "gi"), "" + arguments[b]);
        return a
    },
    throwEx: function(a) {
        throw {
            name: "",
            message: a
        };
    },
    mergeObj: function(a, b, c) {
        var c=!!c, d;
        for (d in a)
            if (a.hasOwnProperty(d) && (!b.hasOwnProperty(d) || c))
                b[d] = a[d]
    },
    cloneObj: function(a) {
        if (!EBG.isObj(a))
            return null;
        var b = {}, c;
        for (c in a)
            a.hasOwnProperty(c) && (b[c] = EBG.isObj(a[c]) ? EBG.cloneObj(a[c]) : a[c]);
        return b
    },
    combinePaths: function(a, b) {
        a = a || "";
        b = b || "";
        a && "/" != a[a.length -
        1] && (a += "/");
        var c = a;
        b && (c += b);
        return c
    },
    px: function(a) {
        return EBG.format("{0}px", a)
    },
    strEQ: function(a, b, c) {
        return a && b ? c ? a === b : a.toLowerCase() === b.toLowerCase() : !1
    },
    indexOfArray: function(a, b) {
        for (var c = 0; c < a.length; c++)
            if (a[c] == b)
                return c;
        return - 1
    },
    isGlobalDef: function(a, b) {
        var c = "undefined" != eval("typeof(" + a + ")");
        b && c && (c = eval(a + "==" + b));
        return c
    },
    numberToEnum: function(a, b) {
        var c = "", d;
        for (d in b)
            if (b.hasOwnProperty(d) && b[d] === a) {
                c = d;
                break
            }
        return c
    },
    getPageUrl: function(a) {
        return a && a.location && a.location.href ?
        a.location.href : null
    },
    getFeatureFlagValue: function(a, b) {
        if (!EBG.isDefined(a))
            return !1;
        if (EBG.isArray(a)) {
            for (var c = 0; c < a.length; c++)
                if (a[c].name == b)
                    return a[c].state;
            return !1
        }
        return !!a[b]
    }
};
EBG = window.EBG || {};
EBGInfra.mergeObj(EBGInfra, EBG, !1);
EBG.declareNamespace("Logging");
EBG.Logging.LoggerLevels = {
    NONE: 0,
    ERROR: 1,
    INFO: 2,
    WARN: 3,
    DEBUG: 4
};
EBG.Logging.Logger = function(a) {
    this._level = a;
    this.startNestingGroupNames = [];
    this.endNestingGroupNames = []
};
EBG.Logging.Logger.prototype = {
    setLevel: function(a) {
        this._level = a
    },
    debug: function(a) {
        this._reportToLog(EBG.Logging.LoggerLevels.DEBUG, arguments)
    },
    info: function(a) {
        this._reportToLog(EBG.Logging.LoggerLevels.INFO, arguments)
    },
    warn: function(a) {
        this._reportToLog(EBG.Logging.LoggerLevels.WARN, arguments)
    },
    error: function(a) {
        this._reportToLog(EBG.Logging.LoggerLevels.ERROR, arguments)
    },
    exception: function(a, b) {
        var c = "string" !== b ? EBG.format("Exception in {0}. message: {1}", a, b.message): EBG.format("Exception in: {0}. message: {1}",
        a, b);
        b.stack && (c += EBG.format(" stack: {0}", b.stack));
        this._reportToLog(EBG.Logging.LoggerLevels.ERROR, [c])
    },
    startGroup: function(a) {
        this._supportNesting() && this.startNestingGroupNames.push(a)
    },
    endGroup: function() {
        this._supportNesting() && 0 < this.endNestingGroupNames.length && window.console.groupEnd(this.endNestingGroupNames.pop())
    },
    _consoleAvailable: function() {
        return void 0 !== window.console
    },
    _supportNesting: function() {
        return this._consoleAvailable() ? void 0 !== window.console.group : !1
    },
    _supportErrorMessage: function() {
        return void 0 !==
        window.console.error
    },
    _supportInfoMessage: function() {
        return void 0 !== window.console.info || void 0 !== window.opera
    },
    _supportWarnMessage: function() {
        return void 0 !== window.console.warn || void 0 !== window.opera
    },
    _supportObjectView: function() {
        return void 0 !== window.console.dir || void 0 !== window.opera
    },
    _callConsoleFunction: function(a, b) {
        var c=!1;
        switch (a) {
        case EBG.Logging.LoggerLevels.INFO:
            this._supportInfoMessage() && (window.console.info(b), c=!0);
            break;
        case EBG.Logging.LoggerLevels.WARN:
            this._supportWarnMessage() &&
            (window.console.warn(b), c=!0);
            break;
        case EBG.Logging.LoggerLevels.ERROR:
            this._supportErrorMessage() && (consoleFunction = window.console.error(b), c=!0)
        }
        c || window.console.log(b)
    },
    _reportToLog: function(a, b) {
        if (this._level >= a && this._consoleAvailable()) {
            var c = b[0];
            "[object String]" !== Object.prototype.toString.call(c) ? this._supportObjectView() || (c = c.toString()) : c = EBG.format.apply(null, b);
            if (void 0 === window.opera) {
                for (; this.startNestingGroupNames.length;)
                    window.console.group(this.startNestingGroupNames[0]),
                    this.endNestingGroupNames.push(this.startNestingGroupNames.shift());
                this._callConsoleFunction(a, c)
            } else 
                opera.postError(c)
        }
    }
};
EBG.declareClass(EBG.Logging.Logger, null);
EBG.log = EBG.log || new EBG.Logging.Logger(EBG.Logging.LoggerLevels.DEBUG);
EBG.declareNamespace("Reporter");
EBG.Reporter.ServerReporter = function(a) {
    this.reportFrequency = a.reportFrequency || 0
};
EBG.Reporter.ServerReporter.prototype = {
    report: function(a) {
        this._shouldReport() && this._reportMessage(a)
    },
    getCallStack: function() {
        try {
            throw Error();
        } catch (a) {
            return formatCallStack(a.stack)
        }
    },
    _shouldReport: function() {
        var a=!1;
        0 < this.reportFrequency && this.reportFrequency / 100 > Math.random() && (a=!0);
        return a
    },
    formatCallStack: function(a) {
        if (a) {
            for (var b; b != a;)
                b = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
            a = a.replace(/\n/g, "")
        }
        return a
    },
    _reportMessage: function(a) {
        var b = EBG.format("{0}{1}/BurstingPipe/adServer.bs?cn=cLog&ord={2}",
        EBG.protocol, EBG.bs, Math.random()), c;
        for (c in a)
            a.hasOwnProperty(c) && (b += "&" + c + "=" + a[c]);
        EBG.adaptor.reportToRemoteServerUsingImage(b)
    }
};
EBG.declareClass(EBG.Reporter.ServerReporter, null);
EBG.declareNamespace("API");
EBG.API.InjectionMethod = {
    APPEND: "append",
    INSERT_BEFORE: "insertBefore"
};
EBG.API.BrowserTypes = {
    NON_SUPPORTED: 0,
    IE: 1,
    FF: 2,
    NN: 3,
    SAFARI: 4,
    CHROME: 5,
    AOL: 6,
    OPERA: 7
};
EBG.API.PlatformTypes = {
    NON_SUPPORTED: 0,
    WIN_95: 1,
    WIN_98: 2,
    WIN_2000: 3,
    WIN_XP: 4,
    WIN_ME: 5,
    WIN_NT: 6,
    MAC: 7,
    WIN_VISTA: 8,
    WIN_7: 9,
    IPHONE: 10,
    IPAD: 11,
    IPOD: 12,
    ANDROID_2_TAB: 13,
    ANDROID_3_TAB: 14,
    BLACKBARRY_5: 15,
    WIN_MOBILE_7: 16,
    ANDROID_2_MOBILE: 17,
    ANDROID_3_MOBILE: 18,
    ANDROID_4_MOBILE: 21,
    MAC_NEW: 23
};
EBG.API.DeviceTypes = {
    DESKTOP: 0,
    MOBILE: 1,
    TABLET: 2,
    UNKNOWN: 3
};
EBG.VideoInteraction = {
    STARTED: "ebVideoStarted",
    PERCENT_25_PLAYED: "eb25Per_Played",
    PERCENT_50_PLAYED: "eb50Per_Played",
    PERCENT_75_PLAYED: "eb75Per_Played",
    FULLPLAY: "ebVideoFullPlay",
    MUTE: "ebVideoMute",
    UNMUTE: "ebVideoUnmute",
    PAUSE: "ebVideoPause",
    REPLAY: "ebVideoReplay",
    UNMUTED: "ebVideoUnmuted",
    FULLSCREEN_START: "ebFSStart",
    FULLSCREEN_END: "ebFSEnd",
    FULLSCREEN_MUTE: "ebFSVideoMute",
    FULLSCREEN_PAUSE: "ebFSVideoPause",
    SLIDER_DRAGGED: "ebSliderDragged",
    VIDEO_PLAY_DURATION: "ebVideoPlayDuration",
    VIDEO_ASSET_DURATION: "ebVideoAssetDuration",
    FULLSCREEN_DURATION: "ebFSVideoPlayDuration",
    FULLSCREEN_ASSET_DURATION: "ebFSVideoAssetDuration",
    USER_INITIATED_VIDEO: "ebUserInitiatedVideo"
};
EBG.EBMessage = {
    REQ_INIT: "reqInit",
    INIT: "ebInit",
    INITDONE: "ebInitDone",
    GET_ENVIROMENT: "ebGetEnvironment",
    SHOW_DEFAULT_IMAGE: "ebShowDefaultImage",
    CLICKTHROUGH: "ebclickthrough",
    VERSION_TRACKING_IMPRESSION: "ebversiontrackingimpression",
    USER_ACTION_COUNTER: "ebCIUserActionCounter",
    AUTOMATIC_EVENT_COUNTER: "ebCIAutomaticEventCounter",
    START_TIMER: "ebCIStartTimer",
    UPDATE_TIMER: "ebUpdateTimer",
    STOP_TIMER: "ebCIStopTimer",
    START_VIDEO_TIMER: "ebStartVideoTimer",
    STOP_VIDEO_TIMER: "ebendvideotimer",
    VIDEO_INTERACTION: "ebVideoInteraction",
    VIDEO_LOAD: "ebVideoLoad",
    INIT_VIDEO_LOADER: "ebInitVideoLoader",
    VIDEO_FS_OPEN: "ebVideoFSOpen",
    VIDEO_FS_CLOSE: "ebVideoFSClose",
    VIDEO_FS_AUTO_CLOSE: "ebVideoFSAutoClose",
    START_VIDEO: "ebtStartVideo",
    STOP_VIDEO: "ebtStoptVideo",
    UPDATE_VIDEO_DURATION: "ebtUpdateVideoDuration",
    FULL_SCREEN_OPEN: "ebFullScreenOpen",
    FULL_SCREEN_CLOSE: "ebFullScreenClose",
    FULL_SCREEN_AUTO_CLOSE: "ebFullScreenAutoClose",
    MOUSE_MOVE: "ebMouseMove",
    INIT_EXPANSION_PARAMS: "ebInitExpansionParams",
    EXPAND: "ebExpandPanel",
    EXPAND_DONE: "ebExpandDone",
    COLLAPSE: "ebCollapsePanel",
    COLLAPSE_DONE: "ebCollapseDone",
    NOTIFY_INTERACTION_MONITOR: "NotifyInteractionMonitor",
    HIDE_INTRO: "ebHideIntro",
    INTRO_FULL_PLAY: "ebIntroFullPlay",
    KEEP_AD_OPREN: "ebKeepAdOpen",
    GO_TO_MINISITE: "ebGoToMiniSite",
    UPDATE_CLICK: "ebUpdateClick",
    DOCUMENT_LOADED: "ebDocumentLoaded",
    PLAY_VIDEO_ON_NATIVE_PLAYER: "playVideoOnNativePlayer",
    CREATE_CALENDAR_EVENT: "createCalendarEvent",
    STORE_PICTURE: "storePicture",
    SDK_DATA_CHANGE: "sdkDataChange",
    SDK_EVENT: "sdkEvent",
    ADAPTOR_READY: "adaptorReady",
    SWIPE: "ebSwipe",
    DISPOSE: "ebDispose",
    SET_RESIZE_PROPS: "ebResizeProperties",
    RESIZE: "ebResize",
    SET_EXPAND_PROPS: "ebExpandProperties",
    SET_ORIENTATION_PROPS: "ebOrientationProperties",
    CLOSE: "ebClose",
    SET_STATE: "ebSetstate",
    RESET_STATE: "ebResetstate"
};
EBG.DurationInteraction = {
    TIMER: "Timer",
    AGGREGATE: "Aggregate"
};
EBG.INNERIFRAMEMessage = {
    LOADED: "ebInnerIframeLoaded",
    INIT: "ebInitInnerIframe",
    VERIFY: "ebVerifyInnerIframe",
    EBO: "ebO",
    GLOBALPARAMS: "ebGlobalParams",
    CONTINUE_SENDING: "ContinueSending",
    NOT_LASTMSG: "NotLastMsg",
    LASTMSG: "LastMsg",
    ADCONFIG_REQUEST: "AdConfig_Request",
    SECRET_TAGS: "Secret_Tags"
};
EBG.FS = {
    EB_VERSION_TRACKING_IMPRESSION: "ebversiontrackingimpression",
    EB_CLICKTHROUGH: "ebclickthrough",
    EB_CREATIVE_EVENT_SUBSCRIPTION: "ebcreativeaddhdr",
    EB_CI_USER_ACTION_COUNTER: "ebciuseractioncounter",
    EB_CI_AUTOMATIC_EVENT_COUNTER: "ebciautomaticeventcounter",
    EB_VIDEO_INTERACTION: "ebvideointeraction",
    EB_START_TIMER: "ebstarttimer",
    EB_END_TIMER: "ebendtimer",
    EB_CI_START_TIMER: "ebcistarttimer",
    EB_CI_STOP_TIMER: "ebcistoptimer",
    EB_UPDATE_TIMER: "ebupdatetimer",
    EB_START_VIDEO_TIMER: "ebstartvideotimer",
    EB_STOP_VIDEO_TIMER: "ebendvideotimer",
    EB_PAGE_LOAD: "ebpageload",
    EB_COMMAND: "ebcommand",
    EB_MSG: "ebmsg",
    EB_EXPAND_PANEL: "ebexpandpanel",
    EB_COLLAPSE_PANEL: "ebcollapsepanel",
    EB_SET_STATE: "ebsetstate",
    EB_RESET_STATE: "ebresetstate",
    EB_MOUSE_TRACKER: "ebmousetracker",
    EB_MOUSE_MOVE: "ebmousemove",
    EB_TEST_DC: "ebtestdc",
    EB_CLOSE_AD: "ebclosead",
    EB_REPLAY_AD: "ebreplayad",
    EB_REPLAY_EXP: "ebreplayexp",
    EB_LOAD_RICH_BANNER: "ebloadrichbanner",
    EB_SHOW_RICH_BANNER: "ebshowrichbanner",
    EB_INIT_VIDEO_LOADER: "ebinitvideoloader",
    EB_HIDE_INTRO: "ebhideintro",
    EB_INTRO_FULL_PLAY: "ebintrofullplay",
    EB_KEEP_AD_OPREN: "ebkeepadopen",
    EB_GO_TO_MINISITE: "ebgotominisite",
    EB_VIDEO_LOAD: "ebvideoload",
    EB_VIDEO_LOAD_AND_PLAY: "ebvideoloadandplay",
    EB_FULL_SCREEN_OPEN: "ebfullscreenopen",
    EB_FULL_SCREEN_CLOSE: "ebfullscreenclose",
    EB_FULL_SCREEN_AUTO_CLOSE: "ebfullscreenautoclose",
    EB_VIDEO_FS_OPEN: "ebvideofsopen",
    EB_VIDEO_FS_CLOSE: "ebvideofsclose",
    EB_VIDEO_FS_AUTO_CLOSE: "ebvideofsautoclose",
    EB_START_VIDEO: "ebtstartvideo",
    EB_STOP_VIDEO: "ebtstopvideo",
    EB_UPDATE_VIDEO_DURATION: "ebtupdatevideoduration",
    EB_GET_JS_VAR: "ebgetjsvar",
    EB_GET_ALL_JS_VARS: "ebgetalljsvars",
    EB_SET_JS_VAR: "ebsetjsvar",
    EB_INIT_SE: "ebinitse",
    EB_SET_SE_PROXY: "ebsetseproxy",
    EB_SE_EXPAND_STARTED: "ebseexpandstarted",
    EB_SE_RETRACT_STARTED: "ebseretractstarted",
    EB_SE_RETRACT_FINISHED: "ebseretractfinished",
    EB_NOTIFICATION: "notification",
    EB_VIDEO_ACTIVE_MODE: "ebvideoactivemode"
};
EBG.ActionType = {
    USER: "user",
    AUTO: "auto"
};
EBG.ExpBaseInteractions = {
    PANELS_VIEWED: "ebPanelsViewed",
    AUTO_SHOW: "autoshow",
    DURATION: "duration"
};
EBG.SingleExpInteractions = EBG.ExpBaseInteractions;
EBG.adTypes = {
    RichBannerHtml5: "Html5Banner",
    SEBannerHtml5: "Html5SEBanner",
    ExpBannerHtml5: "Html5ExpBanner",
    StdBanner: "StdBanner",
    Banner: "Banner",
    SingleExpBanner: "SingleExpBanner",
    ExpBanner: "ExpBanner",
    VisibilityAd: "Visibility",
    FloatingAd: "FloatingAd",
    FloatingAdWithRem: "FloatingAdWithReminder",
    TrackingAd: "Tracking"
};
EBG.WindowTarget = {
    BLANK: "_blank",
    SELF: "_self",
    PARENT: "_parent",
    TOP: "_top"
};
EBG.Const = {
    OUTER_DIV: "eyeDiv",
    DATACAPTURE: "/BurstingPipe/BurstingDataCapturePipe.asp",
    AKAMAIFCS_PLUID_9: "rtmp://flv.stream.atwola.com/flash/flv/mm",
    AKAMAIFCS_PLUID_43: "rtmp://eyeblaster.fcod.msecnd.net/vod/a10061/e1",
    AKAMAIFCS_PLUID_42_45: "rtmp://cp57388.edgefcs.net/ondemand",
    AKAMAI_DEFAULT: "rtmp://cp16207.edgefcs.net/ondemand",
    SHOW_HIDE_FLAG: "data-ebhidingoverlappingelement",
    SHOW_HIDE_BACKUP: "data-ebvisibilitybackup"
};
EBG.PanelPositionType = {
    PAGE_RELATIVE_PERCENTAGE: 0,
    BANNER_RELATIVE_PIXELS: 1,
    PAGE_RELATIVE_PIXELS: 2,
    VIEWPORT_RELATIVE_PERCENTAGE: 3,
    VIEWPORT_RELATIVE_PIXELS: 4
};
EBG.PanelCorner = {
    TOP_LEFT: 1,
    TOP_RIGHT: 2,
    BOTTOM_LEFT: 3,
    BOTTOM_RIGHT: 4
};
EBG.AnimationType = {
    NONE: "none",
    LINEAR: "linear",
    EASE_OUT: "easeout",
    EASE_OUT_SNAP: "easeoutsnap"
};
EBG.ExpandCollapseMethod = {
    CLIP: "clip",
    RESIZE: "resize"
};
EBG.AnimationDefaults = {
    easeOutCoefficient: 0.1,
    stepTime: 10,
    linearSteps: 50,
    snapThreshold: 10,
    animationType: EBG.AnimationType.NONE,
    snap: !1,
    checkShowHideOnEachStep: !1,
    hideAssetAfterExpand: !1,
    removeAssetAfterExpand: !1,
    hideAssetAfterCollapse: !0,
    removeAssetAfterCollapse: !0,
    method: EBG.ExpandCollapseMethod.ExpBanner,
    endAnimationHideAsset: !1,
    endAnimationRemoveAsset: !1
};
EBG.AnimationPushDownDefaults = {
    easeOutCoefficient: 0.1,
    stepTime: 50,
    linearSteps: 20,
    snapThreshold: 10,
    animationType: EBG.AnimationType.LINEAR,
    snap: !1,
    method: EBG.ExpandCollapseMethod.RESIZE,
    checkShowHideOnEachStep: !1,
    hideAssetAfterExpand: !1,
    removeAssetAfterExpand: !1,
    hideAssetAfterCollapse: !0,
    removeAssetAfterCollapse: !0,
    method: EBG.ExpandCollapseMethod.ExpBanner,
    endAnimationHideAsset: !1,
    endAnimationRemoveAsset: !1
};
EBG.AnimProps = {
    easeOutCoefficient: "easeOutCoefficient",
    snapThreshold: "snapThreshold",
    method: "method",
    endAnimationHideAsset: "endAnimationHideAsset",
    endAnimationRemoveAsset: "endAnimationRemoveAsset"
};
EBG.AnimDefaultProps = {
    stepTime: "stepTime",
    linearSteps: "linearSteps",
    animationType: "animationType"
};
EBG.AnimNonDefaultPanelValues = {
    animationType: EBG.AnimationType.NONE,
    stepTime: 0,
    linearSteps: 1
};
EBG.AnimExpansionProps = {
    hideAssetAfterExpand: "hideAssetAfterExpand",
    removeAssetAfterExpand: "removeAssetAfterExpand"
};
EBG.AnimCollapseProps = {
    hideAssetAfterCollapse: "hideAssetAfterCollapse",
    removeAssetAfterCollapse: "removeAssetAfterCollapse"
};
EBG.ProtectedElementIds = ["ebAd", "eyeDiv", "ebDefault", "ebRich", "ebDiv"];
EBG.VisibilityMode = {
    DEFAULT_MODE: "defaultMode",
    BASIC_MODE: "basicMode",
    ENHANCED_MODE: "enhancedMode"
};
EBG.AcCertProgram = {
    IAB_EU: 0,
    NAI_US: 1
};
EBG.AcIconPosition = {
    TopRight: 0,
    TopLeft: 1,
    BottomRight: 2,
    BottomLeft: 3
};
EBG.PreloadType = {
    DefaultImg: 0,
    PreloadImg: 1,
    DefaultFlash: 2
};
EBG.SDK_STATES = EBG.SDK_STATES || {};
EBG.SDK_STATES.API = {
    DEFAULT: "SDKdefault",
    EXPANDED: "SDKexpanded",
    LOADING: "SDKloading",
    RESIZED: "SDKresized"
};
EBG.SDK_EVENTS = EBG.SDK_EVENTS || {};
EBG.SDK_EVENTS.API = {
    STATE_CHANGE: "SDKstateChange",
    ERROR: "SDKerror",
    READY: "SDKready",
    VIEWABLE_CHANGE: "SDKviewableChange",
    SIZE_CHANGE: "SDKsizeChange",
    RESIZE_PROPS_CHANGE: "SDKresizePropsChange",
    EXPAND_PROPS_CHANGE: "SDKexpandPropsChange",
    WINDOW_SIZE_CHANGE: "windowSizeChange"
};
EBG.declareNamespace("Events");
EBG.Events.EventTiming = {
    BEFORE: "BEFORE",
    ONTIME: "ONTIME",
    AFTER: "AFTER",
    ONTIME_AND_AFTER: "ONTIME_AND_AFTER"
};
EBG.Events.EventNames = {
    STAM: "STAM",
    CREATE_AD: "CREATE_AD",
    CREATE_ADAPTOR: "CREATE_ADAPTOR",
    CREATE_INT_MGR: "CREATE_INT_MGR",
    CREATE_ANIM_MGR: "CREATE_ANIM_MGR",
    CREATE_POSITIONING_HELPER: "CREATE_POSITIONING_HELPER",
    SHOW_AD: "SHOW_AD",
    ADD_CREATIVES: "ADD_CREATIVES",
    ADD_INTERACTION: "ADD_INTERACTION",
    ADD_EYE_DIV: "ADD_EYE_DIV",
    ADD_HTML5_MAIN_CREATIVE: "ADD_HTML5_MAIN_CREATIVE",
    ADD_HTML5_PANEL_CREATIVE: "ADD_HTML5_PANEL_CREATIVE",
    ADD_EMPTY_BANNER_CREATIVE: "ADD_EMPTY_BANNER_CREATIVE",
    ADD_BANNER_DEFAULT_IMAGE_CREATIVE: "ADD_BANNER_DEFAULT_IMAGE_CREATIVE",
    ADD_BANNER_PRELOAD_IMAGE_CREATIVE: "ADD_BANNER_PRELOAD_IMAGE_CREATIVE",
    ADD_BANNER_DEFAULT_FLASH_CREATIVE: "ADD_BANNER_DEFAULT_FLASH_CREATIVE",
    ADD_BANNER_RICH_FLASH_CREATIVE: "ADD_BANNER_RICH_FLASH_CREATIVE",
    ADD_FLOATING_INTRO_CREATIVE: "ADD_FLOATING_INTRO_CREATIVE",
    ADD_FLOATING_REMINDER_CREATIVE: "ADD_FLOATING_REMINDER_CREATIVE",
    ADD_FLOATING_MINISITE_CREATIVE: "ADD_FLOATING_MINISITE_CREATIVE",
    ADD_PANEL_RICH_FLASH_CREATIVE: "ADD_PANEL_RICH_FLASH_CREATIVE",
    SHOW_BANNER_RICH_FLASH_CREATIVE: "SHOW_BANNER_RICH_FLASH_CREATIVE",
    SHOW_PANEL_RICH_FLASH_CREATIVE: "SHOW_PANEL_RICH_FLASH_CREATIVE",
    SHOW_PANEL_CREATIVE: "SHOW_PANEL_CREATIVE",
    SHOW_REMINDER: "SHOW_REMINDER",
    SHOW_MINISITE: "SHOW_MINISITE",
    PAGE_LOAD: "PAGE_LOAD",
    COLLECT_TIMERS: "COLLECT_TIMERS",
    PAGE_UNLOAD: "PAGE_UNLOAD",
    PAGE_BEFORE_UNLOAD: "PAGE_BEFORE_UNLOAD",
    PAGE_HIDE: "PAGE_HIDE",
    PAGE_RESIZE: "PAGE_RESIZE",
    PAGE_SCROLL: "PAGE_SCROLL",
    PAGE_FOCUS: "PAGE_FOCUS",
    PAGE_FOCUSIN: "PAGE_FOCUSIN",
    PAGE_FOCUSOUT: "PAGE_FOCUSOUT",
    PAGE_BLUR: "PAGE_BLUR",
    PAGE_HIDDEN: "PAGE_HIDDEN",
    PAGE_VISIBLE: "PAGE_VISIBLE",
    INTERACTION_REPORT_REMOTE_SERVERS: "INTERACTION_REPORT_REMOTE_SERVERS",
    START_TIMER: "START_TIMER",
    STOP_TIMER: "STOP_TIMER",
    UPDATE_TIMER: "UPDATE_TIMER",
    HANDLE_COUNTER_INTERACTION: "HANDLE_COUNTER_INTERACTION",
    DEFAULT_CLICK: "DEFAULT_CLICK",
    EXPAND: "EXPAND",
    COLLAPSE: "COLLAPSE",
    USER_INTERACTION: "USER_INTERACTION",
    MOUSE_OVER: "MOUSE_OVER",
    MOUSE_OUT: "MOUSE_OUT",
    MOUSE_MOVE: "MOUSE_MOVE",
    USER_INITIATED_VIDEO: "USER_INITIATED_VIDEO",
    DWELL_UNIQUE: "DWELL_UNIQUE",
    DWELL_VIDEO_START: "DWELL_VIDEO_START",
    DWELL_VIDEO_STOP: "DWELL_VIDEO_STOP",
    CREATIVE_CONTAINER_READY: "CREATIVE_CONTAINER_READY",
    RICH_FLASH_PLAYED: "RICH_FLASH_PLAYED",
    REPLAY_AD: "REPLAY_AD",
    BANDWITH_DETECTED: "BANDWITH_DETECTED",
    FULL_SCREEN_START: "FULL_SCREEN_START",
    FULL_SCREEN_END: "FULL_SCREEN_STOP",
    ANIMATE_PANEL: "ANIMATE_PANEL",
    CLOSE_AD: "CLOSE_AD",
    OPEN_PAGE: "OPEN_PAGE",
    MAX_AD_DURATION: "MAX_AD_DURATION",
    FLASH_IN_FRAME_TWO: "FLASH_IN_FRAME_TWO",
    SHOW_HIDE_ELEMENTS: "SHOW_HIDE_ELEMENTS",
    DEFAULT_IMPRESSION: "DEFAULT_IMPRESSION",
    AIE_LOADED: "AIE_LOADED",
    INIT_MANAGERS: "INIT_MANAGERS",
    MOUSE_MOVE_NEEDED: "MOUSE_MOVE_NEEDED",
    VISIBILITY_CHECK: "VISIBILITY_CHECK",
    VISIBILITY_HIDDEN: "VISIBILITY_HIDDEN",
    AD_START: "AD_START",
    ELEMENT_LOADED: "ELEMENT_LOADED"
};
EBG.Events.EbEventNames = {
    PAGE_LOAD: EBG.Events.EventNames.PAGE_LOAD
};
EBG.Events.EventSubscription = function(a, b, c) {
    this.eventName = a;
    this.callback = b;
    this.callbackBinding = c ? c : null
};
EBG.Events.EventSubscription.prototype = {
    dispatcherFilters: null,
    timing: EBG.Events.EventTiming.ONTIME,
    isElementEvent: !1,
    elementId: "",
    isDocumentEvent: !1,
    isValid: function() {
        return EBG.isFunc(this.callback) && (!this.callbackBinding || EBG.isObj(this.callbackBinding))
    },
    toString: function() {
        return EBG.format("EventSubscription: eventName={0}, timing={1}, callback={2}, callbackBinding={3}, dispatcherFilters={4}", this.eventName, this.timing, EBG.typeOf(this.callback), EBG.typeOf(this.callbackBinding), EBG.typeOf(this.dispatcherFilters))
    }
};
EBG.declareClass(EBG.Events.EventSubscription, null);
EBG.Events.Event = function(a) {
    this.name = a;
    this.creationTime =+ new Date
};
EBG.Events.Event.prototype = {
    dispatcher: null,
    eventData: null,
    timing: null,
    toString: function() {
        return EBG.format("Event: name={0}, creationTime={1}, dispatcher={2}, eventData={3}", this.name, this.creationTime, EBG.typeOf(this.dispatcher), EBG.typeOf(this.eventData))
    }
};
EBG.declareClass(EBG.Events.Event, null);
EBG.Events.EventManager = function() {
    this._subscriptions = {}
};
EBG.Events.EventManager.prototype = {
    _subscriptions: {},
    subscribeToEvent: function(a) {
        if (a.isValid())
            if (a.isElementEvent)
                EBG.adaptor && EBG.adaptor.subscribeToEventOnElement(a.eventName, a.elementId, a.callback);
            else {
                var b = this._subscriptions[a.eventName] = this._subscriptions[a.eventName] || {}, c;
                for (c in EBG.Events.EventTiming)
                    EBG.Events.EventTiming.hasOwnProperty(c) && (b[c] = b[c] || []);
                    - 1 == this._getSubscriptionId(a, b[a.timing]) && (b[a.timing].push(a), EBG.adaptor && EBG.adaptor.hasEvent(a.eventName) && EBG.adaptor.subscribeToEvent(a.eventName,
                    a.isDocumentEvent))
            }
    },
    unsubscribeFromEvent: function(a) {
        if (a && a.isValid())
            if (a.isElementEvent)
                EBG.adaptor && EBG.adaptor.unsubscribeFromEventOnElement(a.eventName, a.elementId, a.callback);
            else if (this._subscriptions[a.eventName] && this._subscriptions[a.eventName][a.timing]) {
                var b = this._subscriptions[a.eventName][a.timing], a = this._getSubscriptionId(a, b);
                - 1 != a && (b[a] = null)
            }
    },
    dispatchEvent: function(a) {
        var b=!1;
        switch (a.timing) {
        case EBG.Events.EventTiming.BEFORE:
        case EBG.Events.EventTiming.ONTIME:
        case EBG.Events.EventTiming.AFTER:
            b =
            this._dispatchEventByTiming(a, a.timing);
            break;
        case EBG.Events.EventTiming.ONTIME_AND_AFTER:
            b = (b = this._dispatchEventByTiming(a, EBG.Events.EventTiming.ONTIME)) || this._dispatchEventByTiming(a, EBG.Events.EventTiming.AFTER);
            break;
        default:
            b = (b = (b = this._dispatchEventByTiming(a, EBG.Events.EventTiming.BEFORE)) || this._dispatchEventByTiming(a, EBG.Events.EventTiming.ONTIME)) || this._dispatchEventByTiming(a, EBG.Events.EventTiming.AFTER)
        }
        return b
    },
    attachToAdaptor: function() {
        EBG.adaptor.setListener(this.dispatchEvent,
        this)
    },
    _dispatchEventByTiming: function(a, b) {
        var c = this._subscriptions[a.name];
        if (!c)
            return !1;
        for (var c = c[b], d=!1, e = 0; e < c.length; e++) {
            var g = c[e];
            if (g && (g = this._dispatchEventToSubscription(a, g), EBG.isBool(g)&&!g)) {
                d=!0;
                break
            }
        }
        return d
    },
    _dispatchEventToSubscription: function(a, b) {
        var c = b.dispatcherFilters;
        if (EBG.isObj(c))
            for (var d in c)
                if (c.hasOwnProperty(d)) {
                    var e = c[d], g=!0, f = d.split("."), h = a.dispatcher;
                    if (h)
                        for (var i = 0; i < f.length; i++) {
                            var h = h[f[i]], j = i == f.length - 1;
                            if (!h || j && h !== e) {
                                g=!1;
                                break
                            }
                        }
                        if (!g)
                            return null
                }
        c =
        null;
        d = b.callback;
        if (EBG.isFunc(d)) {
            e = [a];
            try {
                c = d.apply(b.callbackBinding, e)
            } catch (l) {}
        }
        return c
    },
    _getSubscriptionId: function(a, b) {
        for (var c = 0; c < b.length; c++)
            if (b[c] && b[c].callback === a.callback && b[c].callbackBinding === a.callbackBinding && b[c].isDocumentEvent === a.isDocumentEvent && this._compareFilters(b[c].dispatcherFilters, a.dispatcherFilters))
                return c;
        return - 1
    },
    _compareFilters: function(a, b) {
        if (!EBG.isObj(a))
            return EBG.isObj(b)?!1 : !0;
        if (!EBG.isObj(b))
            return !1;
        for (var c in a)
            if (a.hasOwnProperty(c))
                if (b.hasOwnProperty(c)) {
                    if (a[c] !==
                    b[c])
                        return !1
                } else 
                    return !1;
        for (c in b)
            if (b.hasOwnProperty(c)&&!a.hasOwnProperty(c))
                return !1;
        return !0
    }
};
EBG.declareClass(EBG.Events.EventManager, null);
EBG.eventMgr = EBG.eventMgr || new EBG.Events.EventManager;
EBG.declareNamespace("Adaptors");
EBG.Adaptors.TagNames = {
    DIV: "div",
    IFRAME: "iframe",
    IMG: "img",
    SCRIPT: "script",
    OBJECT: "object",
    EMBED: "embed",
    SPAN: "span",
    A: "a"
};
EBG.Adaptors.InjectionMethod = EBG.API.InjectionMethod;
EBG.Adaptors.WindowProp = {
    top: "top",
    left: "left",
    location: "location",
    menubar: "menubar",
    width: "width",
    height: "height"
};
EBG.Adaptors.MoreSupportedEvent = {
    visibilitychange: 1,
    mozvisibilitychange: 1,
    msvisibilitychange: 1,
    webkitvisibilitychange: 1
};
EBG.Adaptors.StdWebAdaptor = function() {
    this._setEvents()
};
EBG.Adaptors.StdWebAdaptor.onEnvEvent = function() {
    EBG.adaptor._handleEvent.apply(EBG.adaptor, arguments)
};
EBG.Adaptors.StdWebAdaptor.prototype = {
    _environmentEvents: {},
    _logicalEvents: {},
    _subscribedEvents: {},
    _subscribedEventsOnElement: [],
    _listener: null,
    _listenerBinding: null,
    initInnerModules: function(a, b, c, d, e) {
        if (!this.browser)
            this.browser = new EBG.Adaptors.Browser(a, b, c, d, e);
        if (!this.flash)
            this.flash = EBG.Adaptors.FlashDetector ? new EBG.Adaptors.FlashDetector : null
    },
    registerSpecialBrowserEvents: function() {},
    copy: function(a) {
        for (var b in this._subscribedEvents)
            this._subscribedEvents.hasOwnProperty(b) && (this._removeEventListener(window,
            this._environmentEvents[b].name, EBG.Adaptors.StdWebAdaptor.onEnvEvent), a.subscribeToEvent(b));
        for (b = 0; b < this._subscribedEventsOnElement.length; b++) {
            var c = this._subscribedEventsOnElement[b];
            if (c) {
                var d = c.elementId, e = c.eventName, c = c.callback, g = this.getElementById(d);
                g && (this._removeEventListener(g, e, c), a.subscribeToEventOnElement(e, d, c))
            }
        }
    },
    intMonitorExist: function() {
        return EBG.isPreview && top.ebHandleFsCommandsPrev
    },
    notifyIntMonitor: function(a) {
        top.ebHandleFsCommandsPrev(a.command, a.args, a.objName,
        a.adId, a.elapsedTime)
    },
    hasEvent: function(a) {
        return !!this._environmentEvents[a]
    },
    generateElementId: function(a, b) {
        return EBG.format("eb{0}_{1}", a, b)
    },
    _getTags: function(a, b) {
        EBG.isGlobalDef("JSON");
        var c = "";
        if (b && a.tagName == EBG.Adaptors.TagNames.SCRIPT && a.text&&!a.attributes)
            b.push(a);
        else {
            c = "";
            a.attributes && (this._setObjDefaultAttributes(a), c = this._getObjAttributesStr(a));
            c = EBG.format("<{0} {1}>", a.tagName, c);
            a.innerHTML && (c += a.innerHTML);
            a.text && (c += a.text);
            a.params && (c += this._getObjParamsStr(a));
            if (a.children)
                for (var d = 0; d < a.children.length; d++)
                    c += this._getTags(a.children[d], b);
            c += EBG.format("</{0}>", a.tagName)
        }
        return c
    },
    writeReportingIFrame: function(a, b, c) {
        this.inject({
            tagName: EBG.Adaptors.TagNames.IFRAME,
            attributes: {
                id: a,
                src: b,
                style: {
                    width: "0px",
                    height: "0px"
                },
                frameborder: 0
            }
        }, EBG.Adaptors.InjectionMethod.APPEND, this.getElementById(c))
    },
    writeScript: function(a, b, c) {
        try {
            this.inject({
                tagName: EBG.Adaptors.TagNames.SCRIPT,
                attributes: {
                    id: a,
                    name: a,
                    src: b
                }
            }, EBG.Adaptors.InjectionMethod.APPEND, this.getElementById(c))
        } catch (d) {}
    },
    write: function(a) {
        this._documentWrite(this._getTags(a))
    },
    inject: function(a, b, c) {
        var d = c.ownerDocument.createElement(a.tagName);
        if (a.attributes) {
            this._setObjDefaultAttributes(a);
            for (var e in a.attributes)
                EBG.isObj(a.attributes[e]) ? this.setStyleToElem(d, a.attributes[e]) : d.setAttribute(e, a.attributes[e])
        }
        switch (b) {
        case EBG.Adaptors.InjectionMethod.INSERT_BEFORE:
            c.parentNode.insertBefore(d, c);
            break;
        default:
            c.appendChild(d)
        }
        e = "";
        if (a.innerHTML)
            e = a.innerHTML;
        var g = [];
        if (a.children)
            for (var f = 0; f < a.children.length; f++)
                e +=
                EBG.adaptor._getTags(a.children[f], g);
        if (e)
            d.innerHTML = e;
        if (a.text)
            d.text = a.text;
        for (f = 0; f < g.length; f++)
            this.inject(g[f], b, c)
    },
    addInlineDOM: function(a, b) {
        this.inject(a, EBG.Adaptors.InjectionMethod.APPEND, this.getElementById(b))
    },
    setInnerHtml: function(a, b) {
        a.innerHTML = b
    },
    setStyleToElem: function(a, b) {
        for (var c in b)
            b.hasOwnProperty(c) && (a.style[c] = b[c])
    },
    getStyleOfElem: function(a) {
        if (a)
            return a.style
    },
    setListener: function(a, b) {
        this._listener = a;
        this._listenerBinding = b
    },
    subscribeToEvent: function(a, b) {
        var c =
        this.getDisplayWin(), d = this.getPageWin();
        if (this.hasEvent(a)&&!this._subscribedEvents[a]) {
            var e = this._environmentEvents[a], g = e.inCurWin ? window: this.getPageWin();
            if (b)
                g = g.document;
            this._logicalEvents[e.name].signInAllWindows && this.serving.detectServingMode(!0) === EBG.Adaptors.ServingMode.FRIENDLY_IFRAME && c !== d ? (this._addEventListener(d, e.name, EBG.Adaptors.StdWebAdaptor.onEnvEvent), this._addEventListener(c, e.name, EBG.Adaptors.StdWebAdaptor.onEnvEvent)) : this._addEventListener(g, e.name, EBG.Adaptors.StdWebAdaptor.onEnvEvent);
            this._subscribedEvents[a] = {}
        }
    },
    subscribeToEventOnElement: function(a, b, c) {
        var d=!1, e = "string" == typeof b ? this.getDisplayWin().document.getElementById(b) : b;
        e || (d=!0);
        for (var g = this._subscribedEventsOnElement.length, f = 0; f < g; f++)
            if (this._subscribedEventsOnElement[f] && this._subscribedEventsOnElement[f].elementId == b && this._subscribedEventsOnElement[f].eventName == a) {
                d=!0;
                break
            }
        d || (this._addEventListener(e, a, c), this._subscribedEventsOnElement[g] = {
            elementId: b,
            eventName: a,
            callback: c
        })
    },
    unsubscribeFromEventOnElement: function(a,
    b, c) {
        var d = "string" == typeof b ? this.getDisplayWin().document.getElementById(b): b;
        if (d) {
            for (var e = this._subscribedEventsOnElement.length, g =- 1, f = 0; f < e; f++)
                if (this._subscribedEventsOnElement[f] && this._subscribedEventsOnElement[f].elementId == b && this._subscribedEventsOnElement[f].eventName == a && this._subscribedEventsOnElement[f].callback == c) {
                    g = f;
                    break
                }
            0 <= f && (this._removeEventListener(d, a, c), this._subscribedEventsOnElement[g] = null)
        }
    },
    _addEventListener: function(a, b, c) {
        "load" == b && this.isPageLoaded() ? setTimeout(function() {
            c({
                type: "load"
            })
        },
        5) : window.addEventListener ? a.addEventListener(b, c, !1) : window.attachEvent && a.attachEvent("on" + b, c)
    },
    _removeEventListener: function(a, b, c) {
        window.removeEventListener ? a.removeEventListener(b, c, !1) : window.detachEvent && a.detachEvent("on" + b, c)
    },
    _checkIfPropExist: function(a, b) {
        return a && 0 <= a ? EBG.format(", {0}={1}", b, a) : ""
    },
    openPage: function(a, b) {
        var c = EBG.WindowTarget.BLANK, d = "", e = null;
        if (b && (c = b.target, b.xPos || b.yPos || b.width || b.height))
            d = "titlebar=1,resizable=1,scrollbars=1,directories=0,toolbar=1,status=1" +
            this._checkIfPropExist(b.yPos, EBG.Adaptors.WindowProp.top), d += this._checkIfPropExist(b.xPos, EBG.Adaptors.WindowProp.left), d += this._checkIfPropExist(b.showAddressBar, EBG.Adaptors.WindowProp.location), d += this._checkIfPropExist(b.showMenuBar, EBG.Adaptors.WindowProp.menubar), d += this._checkIfPropExist(b.width, EBG.Adaptors.WindowProp.width), d += this._checkIfPropExist(b.height, EBG.Adaptors.WindowProp.height);
        return e = "" != d ? window.open(a, c, d) : window.open(a, c)
    },
    reportToRemoteServerUsingImage: function(a) {
        this.ReportingImg =
        new Image;
        this.ReportingImg.src = a
    },
    getDataFromRemoteServer: function(a, b, c, d, e) {
        if (!a || EBG.isOfflineDemo)
            return !1;
        var d = EBG.isBool(d) ? d: !0, e = EBG.isBool(e) ? e: !1, g = function() {
            try {
                if (e) {
                    var a, d;
                    a = document.createElement("div");
                    a.innerHTML = "<xml>" + i.responseText + "</xml>";
                    document.body.appendChild(a);
                    d = a.firstChild.XMLDocument;
                    document.body.removeChild(a);
                    b.call(c, d)
                } else 
                    b.call(c, i.responseText)
            } catch (f) {
                b.call(c)
            }
        }, f=!1;
        try {
            if (this._isXMLHttpRequestSupported()) {
                var h = new XMLHttpRequest;
                h.open("GET", a,
                d);
                f=!0;
                if (d)
                    h.onreadystatechange = function() {
                        4 == h.readyState && (200 == h.status ? b.call(c, e ? h.responseXML : h.responseText) : b.call(c))
                    };
                h.send();
                d || b.call(c, e ? h.responseXML : h.responseText)
            } else if (window.XDomainRequest && d) {
                var i = new XDomainRequest;
                if (i)
                    i.onerror = function() {
                        EBG.log.error("XDomain request error");
                        b.call(c)
                    }, i.ontimeout = function() {
                        EBG.log.error("XDomain request timeout");
                        b.call(c)
                    }, i.onload = g, i.open("get", a), i.send(), f=!0
            }
        } catch (j) {
            f=!1
        }
        return f
    },
    reportToRemoteServer: function(a, b, c) {
        if (a &&
        !EBG.isOfflineDemo) {
            var b = EBG.isBool(b) ? b: !0, d=!1;
            try {
                if (this._isXMLHttpRequestSupported()) {
                    var e = new XMLHttpRequest;
                    e.open("GET", a, b);
                    if (b ||!b&&!this.browser.isFF())
                        e.withCredentials=!0;
                    try {
                        e.send()
                    } catch (g) {
                        if (b)
                            throw g;
                    }
                    d=!0
                } else if (window.XDomainRequest && (!EBG.isDefined(c) ||!c) && b) {
                    var f = new XDomainRequest;
                    f.open("GET", a);
                    f.send();
                    d=!0
                }
            } catch (h) {
                d=!1
            }
            d || this.reportToRemoteServerUsingImage(a)
        }
    },
    getElementById: function(a, b) {
        var c = null, b = b ? b: this.getDisplayWin();
        EBG.isDefinedNotNull(a) && (c = b.document.getElementById(a));
        return c
    },
    supportsPageLoadEvents: function() {
        return !(this.browser.isOpera() && 14 > this.browser.getVersion())&&!(this.browser.isIE() && 7 > this.browser.getVersion())
    },
    getHostName: function(a) {
        return (a ? a : this.getDisplayWin()).location.hostname
    },
    getDomain: function(a) {
        return (a ? a : this.getDisplayWin()).document.domain
    },
    getDisplayWin: function() {
        return window
    },
    getPageWin: function() {
        return window
    },
    inInnerIframe: function() {
        return !1
    },
    inPlacementIframe: function() {
        return !1
    },
    _setEvents: function() {
        this.supportsPageLoadEvents &&
        (this._setEvent(EBG.Events.EventNames.PAGE_LOAD, "load"), this._setEvent(EBG.Events.EventNames.PAGE_UNLOAD, "unload", !0), this._setEvent(EBG.Events.EventNames.PAGE_BEFORE_UNLOAD, "beforeunload", !0), this._setEvent(EBG.Events.EventNames.PAGE_HIDE, "pagehide", !0));
        this._setEvent(EBG.Events.EventNames.PAGE_RESIZE, "resize");
        this._setEvent(EBG.Events.EventNames.MOUSE_MOVE, "mousemove", !1, ["clientX", "clientY", "pageX", "pageY", "view"], !0)
    },
    _setEvent: function(a, b, c, d, e) {
        this._environmentEvents[a] = {
            name: b,
            inCurWin: c ?
            c: !1
        };
        this._logicalEvents[b] = {
            name: a,
            signInAllWindows: e
        };
        if (d) {
            this._logicalEvents[b].attr = [];
            for (a = 0; a < d.length; a++)
                this._logicalEvents[b].attr[a] = d[a]
        }
    },
    _documentWrite: function(a) {
        document.write(a)
    },
    _isXMLHttpRequestSupported: function() {
        var a = window.XMLHttpRequest ? new XMLHttpRequest: null;
        return a && EBG.isBool(a.withCredentials)
    },
    isPageLoaded: function() {
        if (this._isPageLoaded)
            return !0;
        this._isPageLoaded = EBGInfra.isDefined(window.gEBMainWindow) && EBGInfra.isDefined(gEBMainWindow.EBP.downloadMgr) && gEBMainWindow.EBP.isPageLoaded;
        if (!this._isPageLoaded && this.getPageWin().document.readyState)
            this._isPageLoaded = "complete" == this.getPageWin().document.readyState;
        return EBG.adaptor._isPageLoaded
    },
    _handleEvent: function(a) {
        var b = this._logicalEvents[a.type].name;
        switch (b) {
        case EBG.Events.EventNames.PAGE_LOAD:
            this._isPageLoaded=!0;
            break;
        case EBG.Events.EventNames.PAGE_RESIZE:
            EBG.adaptor.inInnerIframe() && this.serving.rehidePlacementIframe();
            break;
        case EBG.Events.EventNames.PAGE_BEFORE_UNLOAD:
            if (this.browser.isIE())
                return 
        }
        b && (b = new EBG.Events.Event(b),
        EBGInfra.isDefinedNotNull(this._logicalEvents[a.type].attr) && this._prepareLogicalEventData(b, a, this._logicalEvents[a.type].attr), EBG.isFunc(this._listener) && this._listener.call(this._listenerBinding, b))
    },
    _prepareLogicalEventData: function(a, b, c) {
        try {
            a.eventData = {};
            for (var d = 0; d < c.length; d++)
                a.eventData[c[d]] = b[c[d]]
        } catch (e) {}
    },
    _getDefaultAttributes: function(a) {
        var b = {};
        switch (a.toLowerCase()) {
        case EBG.Adaptors.TagNames.IFRAME:
            b = {
                marginheight: "0px",
                marginwidth: "0px",
                frameborder: "0",
                scrolling: "no"
            }
        }
        return b
    },
    _getDefaultStyle: function(a) {
        var b = {
            border: "0px",
            padding: "0px",
            margin: "0px"
        };
        switch (a.toLowerCase()) {
        case EBG.Adaptors.TagNames.DIV:
            EBG.mergeObj({
                top: "0px",
                left: "0px",
                overflow: "visible",
                fontSize: "0px",
                lineHeight: "0px",
                textAlign: "left"
            }, b, !0)
        }
        return b
    },
    _setObjDefaultAttributes: function(a) {
        var b = this._getDefaultAttributes(a.tagName);
        EBG.mergeObj(a.attributes, b, !0);
        b.style = this._getDefaultStyle(a.tagName);
        a.attributes.style && EBG.mergeObj(a.attributes.style, b.style, !0);
        a.attributes = b
    },
    _getObjParamsStr: function(a) {
        var a =
        a.params, b = "", c;
        for (c in a)
            a.hasOwnProperty(c) && (b += EBG.format("<PARAM name='{0}' value='{1}'>", c, a[c]));
        return b
    },
    _getObjAttributesStr: function(a) {
        var a = a.attributes, b = "", c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                if (EBG.isObj(d)) {
                    var e = d, d = "", g;
                    for (g in e)
                        if (e.hasOwnProperty(g)) {
                            var f = e[g];
                            "textAlign" == g && (g = "text-align");
                            d += EBG.format("{0}:{1}; ", g, f)
                        }
                }
                if (d)
                    try {
                        d = d.toString().replace(/\"/ig, "&quot;"), b += EBG.format(' {0}="{1}"', c, d)
                    } catch (h) {}
        }
        return b
    },
    handleEvent: function(a) {
        this._handleEvent(a)
    },
    setElemStyle: function(a, b, c) {
        a.style[b] = c
    },
    getBrowserLanguage: function() {
        var a = "en-US";
        if ("undefined" !== typeof navigator.language)
            a = navigator.language;
        else if ("undefined" !== typeof navigator.userLanguage)
            a = navigator.userLanguage;
        return a
    },
    getPositioningById: function(a, b, c) {
        return this.getPositioningByElement(this.getElementById(a), b, c)
    },
    getPositioningByElement: function(a, b, c) {
        a = a && a.getBoundingClientRect ? a.getBoundingClientRect() : null;
        if (!a)
            return null;
        b = this.getScrollLeftTop(b, c);
        return {
            X: Math.floor(a.left) +
            b.X,
            Y: Math.floor(a.top) + b.Y
        }
    },
    getScrollLeftTop: function(a, b) {
        var c = this._getCurrentWindow(a, b), d = c.document, e = {
            X: {
                "0": "XOffset",
                1: "Left"
            },
            Y: {
                "0": "YOffset",
                1: "Top"
            }
        }, g;
        for (g in e)
            e[g] = c["page" + e[g][0]] || (d.documentElement ? d.documentElement["scroll" + e[g][1]] : d.documentElement["page" + e[g][0]]) || (d.body ? d.body["scroll" + e[g][1]] : 0);
        return e
    },
    _getCurrentWindow: function(a) {
        try {
            return a ? this.getDisplayWin() : top
        } catch (b) {}
    },
    removeElement: function(a) {
        if (a = this.getElementById(a))
            a.parentNode.removeChild(a),
            a.removeNode && a.removeNode(!0)
    },
    appendChildElement: function(a, b) {
        a && b && this.getElementById(a).appendChild(b)
    },
    getMaxZIndex: function(a) {
        if (this.browser.isIE() && 8 > this.browser.getVersion())
            return 10001;
        var b = 0;
        if (a) {
            var c = this.getStyleOfElem(a);
            c && c.zIndex && (b = c.zIndex);
            for (var d in a.childNodes)
                d && a.childNodes[d] && (c = this.getMaxZIndex(a.childNodes[d]), b = b > c ? b : c)
        }
        return b
    },
    setCookieKeyValuePair: function(a, b, c) {
        if (EBG.isDefined(a) && "" != a && EBG.isDefined(b))
            b = EBG.isDefined(c) && c ? escape(b) : b, document.cookie =
            a + "=" + b + ";"
        },
    isSafeFrame: function() {
        return !(!window.$sf ||!$sf.ext)
    },
    isInApp: function() {
        return !1
    }
};
EBG.declareClass(EBG.Adaptors.StdWebAdaptor, null);
EBG.Adaptors.Browser = function(a, b, c, d, e) {
    this.set(a, b, c, d, e)
};
EBG.Adaptors.Browser.prototype = {
    _platform: 0,
    _browserType: 0,
    _browserVer: 0,
    _browserCode: 0,
    _deviceType: 0,
    _browserTypes: EBG.API.BrowserTypes,
    _platformTypes: EBG.API.PlatformTypes,
    _deviceTypes: EBG.API.DeviceTypes,
    set: function(a, b, c, d, e) {
        a = a ? a : this._platformTypes.NON_SUPPORTED;
        b = b ? b : this._browserTypes.NON_SUPPORTED;
        e = e ? e : this._browserTypes.NON_SUPPORTED;
        this._platform = a;
        this._browserType = b;
        this._browserVer = c ? c : 0;
        this._browserCode = e;
        this._deviceType = d ? d : 0
    },
    getVersion: function() {
        return this._browserVer
    },
    getDocumentMode: function() {
        return window.document.documentMode
    },
    isIE: function() {
        return this._browserType == this._browserTypes.IE || this._browserType == this._browserTypes.AOL
    },
    isStrictType: function(a) {
        var b=!1;
        this.isIE() && (b = a ? "CSS1Compat" == a.compatMode : "CSS1Compat" == document.compatMode);
        return b
    },
    isFF: function() {
        return this._browserType == this._browserTypes.FF
    },
    isSafari: function() {
        return this._browserType == this._browserTypes.SAFARI
    },
    isChrome: function() {
        return this._browserType == this._browserTypes.CHROME
    },
    isOpera: function() {
        return this._browserType == this._browserTypes.OPERA
    },
    isMac: function() {
        return this._platform == this._platformTypes.MAC || this._platform == this._platformTypes.MAC_NEW
    },
    isMobile: function() {
        var a=!1;
        if (this._deviceType == this._deviceTypes.MOBILE || this._deviceType == this._deviceTypes.TABLET)
            a=!0;
        return a
    },
    isAndroid: function() {
        for (var a in this._platformTypes)
            if (this._platformTypes[a] == this._platform && 0 <= a.indexOf("ANDROID"))
                return !0;
        return !1
    },
    isAndroidNative: function() {
        return this.isAndroid() && this.isSafari()
    }
};
EBG.Adaptors.FlashDetector = function() {
    this._init()
};
EBG.Adaptors.FlashDetector.prototype = {
    version: 0,
    _init: function() {
        var a =- 1;
        try {
            a = (new ActiveXObject("Shockwaveflash.Shockwaveflash.7")).GetVariable("$version"), a = this._splitFlashMajorMinorVersions(a), a = Number(a)
        } catch (b) {}
        if ( - 1 == a)
            try {
                var c = 0, d = 0, e = 0;
                if (null != navigator.plugins && 0 < navigator.plugins.length) {
                    var g = navigator.mimeTypes;
                    if (g && g["application/x-shockwave-flash"] && g["application/x-shockwave-flash"].enabledPlugin && g["application/x-shockwave-flash"].enabledPlugin.description) {
                        var f = g["application/x-shockwave-flash"].enabledPlugin.description.split(" "),
                        h = f[2].split("."), c = h[0], d = h[1], e = f[3];
                        "" == e && (e = f[4]);
                        isNaN(e[0]) && (e = e.substring(1));
                        0 < e.indexOf("d") && (e = e.substring(0, e.indexOf("d")))
                    }
                    a = Number(c + "." + d + e)
                }
            } catch (i) {}
        if (!isNaN(a))
            this.version = a
    },
    _splitFlashMajorMinorVersions: function(a) {
        if (a)
            return a = a.split(" ")[1].split(","), EBG.format("{0}.{1}{2}", a[0], a[1], a[2])
        }
};
EBG.declareNamespace("Interactions");
EBG.Interactions.SystemInts = {
    CLICK: "_eyeblaster",
    AD_DURATION: "ebAdDuration",
    REPLAY: "ebReplay",
    CLOSE: "ebClose",
    CLOSE_REM: "ebRemClose",
    DEFAULT_CLICK: "ebDefaultClick",
    USER_INTERACTION: "ebUserInteraction",
    UNIQUE_VIDEO_STARTED: "ebUniqueVideoStarted",
    DWELL_TIME: "ebDwellTime",
    DWELL_UNIQUE: "ebUniqueDwell",
    RICH_FLASH_PLAYED: "ebRichFlashPlayed",
    INT_DURATION: "ebIntDuration",
    VISIBILITY_RECORDABLE: "VsR",
    VISIBILITY_AGENCY_RECORDABLE: "VsRAg",
    VISIBILITY_ADVERTISER_RECORDABLE: "VsRAd",
    VISIBILITY_ADVERTISER: "VsAd",
    VISIBILITY_AGENCY: "VsAg",
    VISIBILITY_IAB: "VsIAB",
    VISIBILITY_ADVERTISER_DURATION: "VsAdDu",
    VISIBILITY_AGENCY_DURATION: "VsAgDu",
    VISIBILITY_AVG_AD_SURFACE: "VsAvSu",
    VISIBILITY_AVG_SCREEN_SHARE: "VsAvSc",
    REM_DURATION: "ebRemDuration",
    INTRO_FULL_PLAY: "ebFullPlay",
    REM_FULL_PLAY: "ebRemFullPlay",
    SWIPE: "ebSwipe",
    AD_START: "AdStart"
};
EBG.Interactions.VideoInteractionOrder = [EBG.VideoInteraction.STARTED, EBG.VideoInteraction.PERCENT_25_PLAYED, EBG.VideoInteraction.PERCENT_50_PLAYED, EBG.VideoInteraction.PERCENT_75_PLAYED, EBG.VideoInteraction.FULLPLAY];
EBG.Interactions.Categories = {
    SYSTEM: 2,
    VIDEO: 1,
    CUSTOM: 0
};
EBG.Interactions.InitiationTypes = {
    AUTO: "auto",
    USER: "user"
};
EBG.Interactions.InteractionTypes = {
    COUNTER: "Counter",
    TIMER: "Timer"
};
EBG.Interactions.checkURL = function(a) {
    var b = a.toLowerCase();
    - 1 == b.indexOf("http://")&&-1 == b.indexOf("https://")&&-1 == b.indexOf("ftp://")&&-1 == b.indexOf("aim:")&&-1 == b.indexOf("mailto:") && (a = 0 == b.indexOf("/") ? "http://" + EBG.adaptor.getHostName() + a : "http://" + a);
    return a
};
EBG.Interactions.RemoteServersData = function() {};
EBG.Interactions.RemoteServersData.prototype = {
    networkUrl: null,
    agencyUrl: null
};
EBG.declareClass(EBG.Interactions.RemoteServersData, null);
EBG.Interactions.InteractionData = function(a, b, c) {
    this.reportingName = a;
    this.adUId = b;
    this.category = c
};
EBG.Interactions.InteractionData.prototype = {
    initiationType: EBG.Interactions.InitiationTypes.AUTO,
    category: EBG.Interactions.Categories.SYSTEM,
    isPanel: !1
};
EBG.declareClass(EBG.Interactions.InteractionData, null);
EBG.Interactions.CounterInteractionData = function(a, b, c) {
    EBG.callSuperConstructor(EBG.Interactions.CounterInteractionData, this, [a, c, b]);
    this.remoteServers = new EBG.Interactions.RemoteServersData
};
EBG.Interactions.CounterInteractionData.prototype = {
    reportImmediately: !1,
    countAsClick: !1,
    remoteServers: null,
    clickURL: null,
    numLeftToReport: 10,
    state: null
};
EBG.declareClass(EBG.Interactions.CounterInteractionData, EBG.Interactions.InteractionData);
EBG.Interactions.TimerInteractionData = function(a, b, c) {
    this.reportingName = a;
    EBG.callSuperConstructor(EBG.Interactions.TimerInteractionData, this, [a, c, b])
};
EBG.Interactions.TimerInteractionData.prototype = {
    value: 0,
    startTime: 0,
    idleDuration: 0
};
EBG.declareClass(EBG.Interactions.TimerInteractionData, EBG.Interactions.InteractionData);
EBG.Interactions.AggregationInteractionData = function(a, b, c) {
    this.reportingName = a;
    EBG.callSuperConstructor(EBG.Interactions.AggregationInteractionData, this, [a, c, b])
};
EBG.Interactions.AggregationInteractionData.prototype = {
    value: 0,
    isPlaying: !1
};
EBG.declareClass(EBG.Interactions.AggregationInteractionData, EBG.Interactions.InteractionData);
EBG.Interactions.Interaction = function() {};
EBG.Interactions.Interaction.prototype = {
    unique: 1,
    _escapeInteractionName: function(a) {
        a = a.toString();
        a = a.replace(/\~/ig, "_");
        a = a.replace(/\^/ig, "_");
        a = a.replace(/\|/ig, "_");
        return escape(a)
    },
    _buildReportFormat: function(a, b, c, d) {
        d || (d = 0);
        return EBG.format("{0}{2}{1}{3}{1}{4}{1}{5}{6}{7}{8}{9}", EBG.Interactions.InteractionManager.charIntDelimeter, EBG.Interactions.InteractionManager.charAdFieldsDelimeter, this._escapeInteractionName(this.interactionData.reportingName), c, d, a, this.unique, b, this.interactionData.category,
        this.interactionData.isPanel ? 1 : 0)
    }
};
EBG.Interactions.CounterInteraction = function(a) {
    EBG.callSuperConstructor(EBG.Interactions.CounterInteraction, this);
    this.interactionData = a ? a : new EBG.Interactions.CounterInteractionData
};
EBG.Interactions.CounterInteraction.prototype = {
    type: EBG.Interactions.InteractionTypes.COUNTER,
    handle: function(a) {
        var b = this.interactionData, c = b.counterJumpUrlData, d = c && c.tmpData ? c.tmpData.isClick: !1, e = c && c.tmpData ? c.tmpData.isProductClick: !1, g=!1, f=!0, h=!1, h = "", i = (c && c.tmpData ? c.tmpData.clickUrl : null) || (c ? c.jumpUrl : ""), c = c && c.tmpData && c.tmpData.windowWasOpen?!0 : !1;
        this.shouldReportInteraction() ? (this._handleRemoteServers(), b.counterJumpUrlData && (f = i && this._isEBClick()?!1 : !0, g = i && (d || this._isEBClick()) ?
        !0 : !1, (h = d || this._isEBClick()) ? g ? c || this.handleBRDFlow() : (d || e) && this.reportThirdPartyUrls() : !c && i && (i = EBG.Interactions.checkURL(i), this._openOrRedirect(i))), h = f ? this._getReportingData(a, g) : "") : !c && i && (i = EBG.Interactions.checkURL(i), this._openOrRedirect(i));
        return h
    },
    reportThirdPartyUrls: function() {
        var a = this.interactionData.reportingName.toLowerCase() == EBG.Interactions.SystemInts.DEFAULT_CLICK.toLowerCase(), b = this.interactionData.counterJumpUrlData, c = [];
        if (b && b.tmpData && b.tmpData.isClick && (c = this.interactionData.adConfig.clickTrackingUrls,
        a || this.interactionData.adConfig.showOnlyImage))
            for (a = 0; a < this.interactionData.adConfig.defaultClickTrackingUrls.length; a++)
                c[c.length] = this.interactionData.adConfig.defaultClickTrackingUrls[a];
        if (b && b.tmpData && b.tmpData.isProductClick && b.tmpData.clickedVerUrl)
            c[c.length] = b.tmpData.clickedVerUrl;
        for (a = 0; a < c.length; a++)
            EBG.adaptor.reportToRemoteServerUsingImage(c[a])
    },
    shouldReportInteraction: function() {
        var a=!0;
        0 == this.interactionData.numLeftToReport || EBG.isPreview ? a=!1 : this.interactionData.numLeftToReport--;
        return a
    },
    handleBRDFlow: function() {
        var a = this.interactionData, b = this.interactionData.counterJumpUrlData, c = EBGInfra.isDefinedNotNull(b) && b.tmpData ? b.tmpData.clickUrl: null, d = c || EBGInfra.isDefinedNotNull(b) && b.jumpUrl;
        this._isEBClick() && (c || (d = ""));
        a = a.reportingName.toLowerCase() == EBG.Interactions.SystemInts.DEFAULT_CLICK.toLowerCase();
        c = 0;
        b.tmpData.isClick ? c = 1 : b.tmpData.isProductClick && (c = 2);
        d = "" == d ? "" : EBG.Interactions.checkURL(d);
        d = this._getBannerRedirectUrl(d, c, a, b.tmpData.clickedVersion);
        (d = EBG.Interactions.checkURL(d)) &&
        this.interactionData.adConfig.usercookie && (d =- 1 != d.indexOf("?") ? d + ("&usercookie=" + this.interactionData.adConfig.usercookie) : d + ("?usercookie=" + this.interactionData.adConfig.usercookie));
        this._openOrRedirect(d)
    },
    _openOrRedirect: function(a) {
        - 1 == this.interactionData.counterJumpUrlData.target.indexOf(EBG.WindowTarget.BLANK) ? (this.interactionData.reportImmediately=!0, EBG.runTimed(this, this._openPage, [a, this.interactionData.counterJumpUrlData], 1E3)) : this._openPage(a, this.interactionData.counterJumpUrlData)
    },
    _getRequestMethod: function(a) {
        return EBG.adaptor.browser.isIE() && 6 == EBG.adaptor.browser.getVersion() || EBG.adaptor.isInApp() ? "GET" : this._getGETRequestSizeThreshold() < a.length ? "POST" : "GET"
    },
    getClickTagUrl: function(a) {
        var b = "", a = EBG.isDefined(a) && "" != a ? EBG.Interactions.checkURL(a): void 0;
        EBG.isPreview ? EBG.isInWorkshop ? b = EBG.format("ReportPage_{0}.html", HTMLPageVer) : (b = this.interactionData.counterJumpUrlData.jumpUrl, 4 <= b.length && "http" != b.substr(0, 4) && (b = EBG.format("{0}{1}", ebPtcl, b))) : (b = this._getBannerRedirectUrl(a,
        null, null, null, !0), b = EBG.format("{0}/ReportPage{1}.html?ebReportURL={2}$$ebImpressionID={3}", ebBigS, EBG.reportPageVer, escape(b), EBG.Ads.Ad.Fn.getRandFromAdUId(this.interactionData.adConfig.uid)), a =- 1, EBG.adaptor.browser.isIE() && (a = 9 <= EBG.adaptor.browser.getVersion() ? 4096 : 2048, a -= b.length), a = this._getReportPageTrackingUrls(a), b += a);
        return b
    },
    _getReportPageTrackingUrls: function(a) {
        var b = "$$ebTURLs=[";
        if ( - 1 != a) {
            if (b.length >= a)
                return "";
            a -= b.length
        }
        for (var c = this.interactionData.adConfig.clickTrackingUrls,
        d = 0; d < c.length; d++) {
            var e = EBG.format('{0}"{1}"', 0 != d ? "," : "", c[d]);
            if ( - 1 != a) {
                if (e.length >= a)
                    break;
                a -= e.length
            }
            b += e
        }
        return b + "]"
    },
    _openPage: function(a, b) {
        var c = b.tmpData.clickedVerUrl ? encodeURIComponent('"' + b.tmpData.clickedVerUrl.split("|").join('","') + '"'): "", d = b.tmpData.clickedVerUrl ? a + "&cvurl=" + c: a;
        switch (this._getRequestMethod(d)) {
        case "GET":
            EBG.adaptor.openPage(d, b);
            break;
        case "POST":
            var e = b.target;
            if (!(EBG.adaptor.browser.isIE() && 9 >= EBG.adaptor.browser.getVersion()))
                b.target=!b.target || b.target ==
                EBG.WindowTarget.BLANK ? "ebReportPage" + parseInt(1E8 * Math.random()) : b.target, EBG.adaptor.openPage("", b);
            EBG.runTimed(this, function() {
                function c(a, b) {
                    var d = document.createElement("input");
                    d.setAttribute("type", "hidden");
                    d.setAttribute("name", a);
                    d.setAttribute("value", b);
                    return d
                }
                var f = document.createElement("form");
                f.setAttribute("method", "post");
                f.setAttribute("action", a.substring(0, d.indexOf("?")) + "?cn=brd&ebReferrer=" + encodeURIComponent(this.interactionData.adConfig.ebReferrer));
                f.setAttribute("target",
                b.target);
                b.target = e;
                var h = this._urlQueryStringToJSON(d), i;
                for (i in h)
                    f.appendChild(c(i, unescape(h[i])));
                EBG.adaptor.getDisplayWin().document.body.appendChild(f);
                f.submit()
            }, [], 25);
            break;
        default:
            EBG.adaptor.openPage(d, b)
        }
    },
    _urlQueryStringToJSON: function(a) {
        var b = {}, c = a.substring(a.indexOf("?") + 1);
        if (!c)
            return b;
        for (var a = [], d = 0, e = 0; e < c.length; e++)
            switch (c.charAt(e)) {
            case "&":
                a.push(c.substring(d, e));
                d = e + 1;
                break;
            case "$":
                if ("=" == c.charAt(e - 1) && "$" == c.charAt(e + 1))
                    for (e += 2; !("$" == c.charAt(e) && "$" == c.charAt(e -
                    1));)
                        e++
            }
        a.push(c.substring(d));
        for (e = 0; e < a.length; e++)
            c = a[e], b[c.substring(0, c.indexOf("="))] = c.substring(c.indexOf("=") + 1);
        return b
    },
    _getGETRequestSizeThreshold: function() {
        return 2E3
    },
    _getReportScript: function(a, b) {
        return '<script type="text/javascript">var clkURLs = ["' + a.join('","') + '"];var reported = false;var cntr = 0; for (var i=0;i<' + a.length + ';i++){var img = document.createElement("img");img.onload = img.onerror = function(){cntr++; if (cntr==' + a.length + ' && !reported){reported = true; window.location.replace("' +
        b + '");}};try{img.src = clkURLs[i];}catch(e){cntr++; if (cntr==' + a.length + ' && !reported){reported = true; window.location.replace("' + b + '");}}}setTimeout(function(){if (!reported){reported=true;window.location.replace("' + b + '");}}, 1000);<\/script><body></body>'
    },
    _getReportingData: function(a, b) {
        var c = 0, d = 0;
        b || (c = this.interactionData.counterJumpUrlData && this.interactionData.counterJumpUrlData.tmpData.isClick ? 1 : 0, d = this.interactionData.initiationType == EBG.Interactions.InitiationTypes.USER ? 1 : 0);
        c = this._buildReportFormat(c,
        d, 0, a);
        this.unique = 0;
        return c
    },
    _getBannerRedirectUrl: function(a, b, c, d, e) {
        var c = EBG.isBool(c) ? c: !1, g = this.interactionData.adConfig, f = EBG.Ads.Ad.Fn.getAdIdFromAdUId(this.interactionData.adConfig.uid), f = EBG.protocol + EBG.combinePaths(EBG.bs, EBG.format("BurstingPipe/adServer.bs?cn=brd&Page={0}&PluID={1}&Pos={2}&EyeblasterID={3}", g.page, g.pluId, g.rnd, f));
        void 0 != b && (f = EBG.format("{0}&clk={1}", f, b));
        if (g.massVersioning.adVersions || g.massVersioning.defaultAdVersion)
            f = d ? f + EBG.format("&vid={0}&vcl=1", d) : f +
            EBG.format("&vid={0}", EBG.Ads.Ad.Fn.getVersionToReport(g.massVersioning.adVersions));
        !d && a && (f += "&rtu=" + encodeURIComponent(a));
        EBGInfra.isDefined(g.ncu) && (f += "&ncu=" + encodeURIComponent(g.ncu));
        g.massVersioning.targetAudienceId && (f += EBG.format("&ta={0}", g.massVersioning.targetAudienceId));
        g.massVersioning.deliveryGroupId && (f += EBG.format("&dg={0}", g.massVersioning.deliveryGroupId));
        g.sPublisherPlacementId && (f += EBG.format("&pc={0}", g.sPublisherPlacementId));
        c || (f += "&di=0");
        g.sID && (f += EBG.format("&sessionid={0}",
        g.sID));
        EBGInfra.isDefined(g.optOut) && (f += EBG.format("&OptOut={0}", g.optOut));
        !EBG.isPreview&&!e && (f += "&sct=1");
        g.ebReferrer && (f += EBG.format("&ebReferrer={0}", encodeURIComponent(g.ebReferrer)));
        EBGInfra.isDefined(g.lineId) && (f += EBG.format("&lineid={0}", g.lineId));
        return f
    },
    _handleRemoteServers: function() {
        if (!EBG.isPreview && this.interactionData.remoteServers) {
            var a = this.interactionData.remoteServers, b = new EBG.Events.Event(EBG.Events.EventNames.INTERACTION_REPORT_REMOTE_SERVERS);
            b.dispatcher = this;
            b.timing =
            EBG.Events.EventTiming.BEFORE;
            b.eventData = {
                remoteServers: a
            };
            EBG.eventMgr.dispatchEvent(b) || (a.networkUrl && (b = this._replaceRSTokens(a.networkUrl), EBG.adaptor.reportToRemoteServerUsingImage(b)), a.agencyUrl && (a = this._replaceRSTokens(a.agencyUrl), EBG.adaptor.reportToRemoteServerUsingImage(a)))
        }
    },
    _replaceRSTokens: function(a) {
        try {
            a = a.replace(/\[ebInteraction\]/ig, this.interactionData.reportingName), a = a.replace(/\[ebInteractionNum\]/ig, EBG.intMgr.adsData[this.interactionData.adConfig.uid].numOfInteractions)
        } catch (b) {}
        return a
    },
    _getReportingPage: function() {
        var a = this.interactionData.adConfig.page, a = a.replace(/\~/ig, "_"), a = a.replace(/\^/ig, "_"), a = a.replace(/\|/ig, "_");
        return escape(a)
    },
    _isEBClick: function() {
        return this.interactionData && (EBG.strEQ(this.interactionData.reportingName, EBG.Interactions.SystemInts.CLICK) || EBG.strEQ(this.interactionData.reportingName, EBG.Interactions.SystemInts.DEFAULT_CLICK))
    }
};
EBG.declareClass(EBG.Interactions.CounterInteraction, EBG.Interactions.Interaction);
EBG.Interactions.StdInteractionManager = function() {
    this.adsData = EBG.intMgr ? EBG.intMgr.adsData : {};
    this.adsIntQueues = EBG.intMgr ? EBG.intMgr.adsIntQueues : {}
};
EBG.Interactions.StdInteractionManager.prototype = {
    copy: function(a) {
        this.adsIntQueues = a.adsIntQueues;
        this.adsData = a.adsData
    },
    initAdData: function(a, b) {
        var c = a.uid;
        this.adsIntQueues[c] = [];
        c = this.adsData[c] = {
            adConfig: a,
            isUserInteractionOccur: !1,
            isClickOccur: !1,
            isProductClicked: [],
            numOfInteractions: 0,
            delayIntReport: b,
            videoState: {},
            assetsTimers: {},
            clickReportScript: ""
        };
        c[EBG.Interactions.InteractionTypes.COUNTER] = {};
        c[EBG.Interactions.InteractionTypes.TIMER] = {};
        c.adConfig.isStdAd || this._addSystemInteractions(a)
    },
    allowInteractionReport: function(a) {
        if (this.adsData[a])
            this.adsData[a].delayIntReport=!1
    },
    addInteraction: function(a, b) {
        var c = EBG.isDefinedNotNull(b) ? b.toLowerCase(): a.interactionData.reportingName.toLowerCase(), d = a.interactionData.adUId, e = new EBG.Events.Event(EBG.Events.EventNames.ADD_INTERACTION);
        e.eventData = a;
        e.dispatcher = {
            _adConfig: {
                rnd: this.adsData[d].adConfig.rnd
            }
        };
        e.timing = EBG.Events.EventTiming.BEFORE;
        var g = EBG.eventMgr.dispatchEvent(e), f = this.adsData[d];
        if (!g) {
            if (!f)
                return;
            f[a.type][c] = a;
            a.interactionData.adConfig =
            this.adsData[d].adConfig
        }
        e.timing = EBG.Events.EventTiming.ONTIME_AND_AFTER;
        EBG.eventMgr.dispatchEvent(e)
    },
    getClickTag: function(a) {
        return (a = this._getCounterInteraction(EBG.Interactions.SystemInts.CLICK, a)) ? a.getClickTagUrl() : ""
    },
    getClickTarget: function(a) {
        return (a = this._getCounterInteraction(EBG.Interactions.SystemInts.CLICK, a)) ? a.interactionData.counterJumpUrlData.target : ""
    },
    handleCloseAdParts: function(a) {
        if (a && 1 == a.fClose)
            a = new EBG.Events.Event(EBG.Events.EventNames.CLOSE_AD), a.dispatcher = this, a.eventData =
            {
                closeDueToClickthrough: !0
            }, EBG.eventMgr.dispatchEvent(a)
    },
    handleCounterInteraction: function(a, b, c, d, e, g) {
        var f = this._getCounterInteraction(a, b), h = f ? f.interactionData: null, i = h ? h.counterJumpUrlData: null, j = this.adsData[b], l = j.adConfig.isStdAd, k = "", g = EBGInfra.isDefined(g) ? g: !0, c = c || 0;
        if (!l && h)
            h.initiationType = d ? EBG.Interactions.InitiationTypes.USER : h.initiationType, this._handleUserInteraction(b, h), this._handleSpecialInteractions(a, b, c);
        if (f) {
            a = new EBG.Events.Event(EBG.Events.EventNames.HANDLE_COUNTER_INTERACTION);
            a.dispatcher = this;
            if (!a.dispatcher._adConfig)
                a.dispatcher._adConfig = {
                    rnd: EBG.Ads.Ad.Fn.getRandFromAdUId(b)
                };
            a.timing = EBG.Events.EventTiming.BEFORE;
            a.eventData = {
                interaction: f
            };
            if (!EBG.eventMgr.dispatchEvent(a)) {
                if (i)
                    i.tmpData = e, i.tmpData.isClick = h.countAsClick&&!j.isClickOccur, j.isClickOccur = i.tmpData.isClick?!0 : j.isClickOccur, i.tmpData.isProductClick = h.countAsClick && i.tmpData.clickedVersion&&!j.isProductClicked[i.tmpData.clickedVersion], i.tmpData.isProductClick && (j.isProductClicked[i.tmpData.clickedVersion] =
                !0);
                k = g ? f.handle(c) : "";
                j.numOfInteractions++;
                k && (this._handleReportData(b, h, k), this._isReportDataInQueue(b, k) || this.reportInteractionQueues());
                this.handleCloseAdParts(i);
                a.timing = EBG.Events.EventTiming.ONTIME_AND_AFTER;
                EBG.eventMgr.dispatchEvent(a)
            }
        }
    },
    isInteractionExist: function(a, b, c) {
        if (this.adsData[c] && this.adsData[c][b])
            return this.adsData[c][b][a]?!0 : !1
    },
    _getCounterInteraction: function(a, b) {
        a = a.toLowerCase();
        if (this.adsData[b] && this.adsData[b][EBG.Interactions.InteractionTypes.COUNTER] && this.adsData[b][EBG.Interactions.InteractionTypes.COUNTER][a])
            return this.adsData[b][EBG.Interactions.InteractionTypes.COUNTER][a]
    },
    getRepScr: function(a) {
        if (this.adsData[a] && this.adsData[a].clickReportScript)
            return this.adsData[a].clickReportScript
    }
};
EBG.declareClass(EBG.Interactions.StdInteractionManager, null);
EBG.declareNamespace("AdChoice");
EBG.AdChoice.AdChoiceManager = function(a) {
    this._adConfig = a;
    this._active = a.adChoice.includeMarker;
    this._iconAdded=!1
};
EBG.AdChoice.AdChoiceManager.ImageData = function() {
    this.iconSrc = "";
    this.id = ""
};
EBG.AdChoice.AdChoiceManager.IabIconData = {
    en: {
        icon: "OBA_DEFAULT.png",
        url: "http://www.youronlinechoices.com/uk/"
    },
    "de-at": {
        icon: "OBA_AUSTRIA.png",
        url: "http://www.youronlinechoices.com/at/"
    },
    "fr-be": {
        icon: "OBA_BELGIUM_FR.png",
        url: "http://www.youronlinechoices.com/be-fr/"
    },
    "nl-be": {
        icon: "OBA_BELGIUM_NL.png",
        url: "http://www.youronlinechoices.com/be-nl/"
    },
    bg: {
        icon: "OBA_BULGARIA.png",
        url: "http://www.youronlinechoices.com/bg/"
    },
    cs: {
        icon: "OBA_CZECH.png",
        url: "http://www.youronlinechoices.com/cs/"
    },
    da: {
        icon: "OBA_DENMARK.png",
        url: "http://www.youronlinechoices.com/den/"
    },
    fi: {
        icon: "OBA_FINLAND.png",
        url: "http://www.youronlinechoices.com/fi/"
    },
    fr: {
        icon: "OBA_FRANCE.png",
        url: "http://www.youronlinechoices.com/fr/"
    },
    de: {
        icon: "OBA_GERMANY.png",
        url: "http://www.youronlinechoices.com/de/"
    },
    el: {
        icon: "OBA_GREEK.png",
        url: "http://www.youronlinechoices.com/gr/"
    },
    hu: {
        icon: "OBA_HUNGARY.png",
        url: "http://www.youronlinechoices.com/hu/"
    },
    "en-ie": {
        icon: "OBA_IRELAND.png",
        url: "http://www.youronlinechoices.com/ie/"
    },
    it: {
        icon: "OBA_ITALY.png",
        url: "http://www.youronlinechoices.com/it/"
    },
    nl: {
        icon: "OBA_NETHERLANDS.png",
        url: "http://www.youronlinechoices.com/nl/"
    },
    no: {
        icon: "OBA_NORWAY.png",
        url: "http://www.youronlinechoices.com/nor/"
    },
    pl: {
        icon: "OBA_POLAND.png",
        url: "http://www.youronlinechoices.com/pl/"
    },
    ro: {
        icon: "OBA_ROMANIA.png",
        url: "http://www.youronlinechoices.com/ro/"
    },
    sl: {
        icon: "OBA_SLOVAKIA.png",
        url: "http://www.youronlinechoices.com/sl/"
    },
    es: {
        icon: "OBA_SPAIN.png",
        url: "http://www.youronlinechoices.com/es/"
    },
    sv: {
        icon: "OBA_SWEDEN.png",
        url: "http://www.youronlinechoices.com/se/"
    },
    "de-ch": {
        icon: "OBA_SWITZERLAND_DE.png",
        url: "http://www.youronlinechoices.com/ch-de/"
    },
    "fr-ch": {
        icon: "OBA_SWITZERLAND_FR.png",
        url: "http://www.youronlinechoices.com/ch-fr/"
    },
    "it-ch": {
        icon: "OBA_SWITZERLAND_IT.png",
        url: "http://www.youronlinechoices.com/ch-it/"
    },
    "en-gb": {
        icon: "OBA_UK.png",
        url: "http://www.youronlinechoices.com/uk/"
    },
    hr: {
        icon: "OBA_DEFAULT.png",
        url: "http://www.youronlinechoices.com/hr/"
    },
    is: {
        icon: "OBA_DEFAULT.png",
        url: "http://www.youronlinechoices.com/is/"
    },
    lt: {
        icon: "OBA_DEFAULT.png",
        url: "http://www.youronlinechoices.com/lt/"
    },
    lv: {
        icon: "OBA_DEFAULT.png",
        url: "http://www.youronlinechoices.com/lv/"
    },
    pt: {
        icon: "OBA_DEFAULT.png",
        url: "http://www.youronlinechoices.com/pt/"
    },
    sk: {
        icon: "OBA_DEFAULT.png",
        url: "http://www.youronlinechoices.com/sk/"
    }
};
EBG.AdChoice.AdChoiceManager.NaiIconData = {
    en: {
        icon: "OBA_DEFAULT.png",
        url: "http://www.aboutads.info/consumers"
    }
};
EBG.AdChoice.AdChoiceManager.IabClosedIconName = "OBA.png";
EBG.AdChoice.AdChoiceManager.NaiClosedIconName = "OBA.png";
EBG.AdChoice.AdChoiceManager.VisibilityState = {
    HIDDEN: "hidden",
    VISIBLE: "visible"
};
EBG.AdChoice.AdChoiceManager.Position = {
    ABSOLUTE: "absolute",
    RELATIVE: "relative"
};
EBG.AdChoice.AdChoiceManager.ImageLoadTimeout = 100;
EBG.AdChoice.AdChoiceManager.DefaultOffset =- 1E3;
EBG.AdChoice.AdChoiceManager.prototype = {
    _imgData: null,
    _imgExpData: null,
    _iconLocalData: null,
    _acCloseIconName: null,
    _spanId: null,
    _iconsBaseUrl: null,
    _containerId: null,
    _assetObjId: null,
    init: function() {
        if (this._active) {
            this._iconsBaseUrl = this._getIconsDir(this._adConfig.adChoice.iconPosition);
            var a = new EBG.Events.EventSubscription(EBG.Events.EventNames.ADD_CREATIVES, this._handleAdChoice, this);
            a.timing = EBG.Events.EventTiming.AFTER;
            a.dispatcherFilters = {
                "_adConfig.rnd": this._adConfig.rnd
            };
            EBG.eventMgr.subscribeToEvent(a);
            a = new EBG.Events.EventSubscription(EBG.Events.EventNames.ADD_BANNER_DEFAULT_IMAGE_CREATIVE, this._handleAdChoice, this);
            a.timing = EBG.Events.EventTiming.AFTER;
            a.dispatcherFilters = {
                "_adConfig.rnd": this._adConfig.rnd
            };
            EBG.eventMgr.subscribeToEvent(a);
            a = new EBG.Events.EventSubscription(EBG.Events.EventNames.ADD_BANNER_DEFAULT_FLASH_CREATIVE, this._handleAdChoice, this);
            a.timing = EBG.Events.EventTiming.AFTER;
            a.dispatcherFilters = {
                "_adConfig.rnd": this._adConfig.rnd
            };
            EBG.eventMgr.subscribeToEvent(a);
            EBG.eventMgr.subscribeToEvent(new EBG.Events.EventSubscription(EBG.Events.EventNames.PAGE_RESIZE,
            this._pageResizeHandler, this));
            this._adConfig.adChoice.certificationProgram == EBG.AcCertProgram.NAI_US ? (this._iconLocalData = this._getIconDataByLanguage(EBG.AdChoice.AdChoiceManager.NaiIconData), this._acCloseIconName = EBG.AdChoice.AdChoiceManager.NaiClosedIconName) : (this._iconLocalData = this._getIconDataByLanguage(EBG.AdChoice.AdChoiceManager.IabIconData), this._acCloseIconName = EBG.AdChoice.AdChoiceManager.IabClosedIconName)
        }
    },
    _handleAdChoice: function(a) {
        if (a.eventData&&!a.eventData.isPanel)
            this._assetObjId =
            a.eventData.assetId;
        if (this._iconAdded) {
            var a = EBG.adaptor.getElementById(this._containerId), b = EBG.adaptor.getElementById(this._spanId);
            EBG.adaptor.removeElement(b);
            EBG.adaptor.appendChildElement(a.id, b)
        } else 
            this._iconAdded=!0, this._containerId = this._adConfig.placeHolderId, this._imgData = this._getImageData(), this._imgExpData = this._getExpImageData(), this._addAdChoiceIcons(this._imgData, this._imgExpData, this._getAdChoiceUrl()), this._subscribeIconToEvents(this._imgData.id, this._imgExpData.id)
    },
    _getImageData: function() {
        var a =
        new EBG.AdChoice.AdChoiceManager.ImageData;
        a.iconSrc = this._iconsBaseUrl + this._acCloseIconName;
        a.id = "acImage_" + this._adConfig.uid;
        return a
    },
    _getExpImageData: function() {
        var a = new EBG.AdChoice.AdChoiceManager.ImageData;
        a.iconSrc = this._iconsBaseUrl + this._iconLocalData.icon;
        a.id = "acExpImage_" + this._adConfig.uid;
        return a
    },
    _getAdChoiceUrl: function() {
        var a = "";
        return a = this._adConfig.adChoice.customUrl ? unescape(this._adConfig.adChoice.customUrl) : this._iconLocalData.url
    },
    _getIconDataByLanguage: function(a) {
        var b =
        EBG.adaptor.getBrowserLanguage().toLowerCase(), c = a[b];
        c || (b = b.split("-")[0], c = a[b]);
        c || (c = a.en);
        return c
    },
    _getIconOffsets: function(a, b, c, d, e, g) {
        var f = {
            offsetLeft: EBG.px(EBG.AdChoice.AdChoiceManager.DefaultOffset),
            offsetTop: EBG.px(EBG.AdChoice.AdChoiceManager.DefaultOffset)
        };
        if (this._assetObjId && (adPos = EBG.adaptor.getPositioningById(this._assetObjId, !0, this._adConfig.actualServingMode))) {
            acPos = EBG.adaptor.getPositioningById(a, !0, this._adConfig.actualServingMode);
            var h = EBG.adaptor.getStyleOfElem(EBG.adaptor.getElementById(a)),
            a = parseInt(h.left) + adPos.X - acPos.X, h = parseInt(h.top) + adPos.Y - acPos.Y;
            switch (b) {
            case EBG.AcIconPosition.BottomLeft:
                f.offsetLeft = EBG.px(a);
                f.offsetTop = EBG.px(h + g - d);
                break;
            case EBG.AcIconPosition.BottomRight:
                f.offsetLeft = EBG.px(a + e - c);
                f.offsetTop = EBG.px(h + g - d);
                break;
            case EBG.AcIconPosition.TopLeft:
                f.offsetLeft = EBG.px(a);
                f.offsetTop = EBG.px(h);
                break;
            case EBG.AcIconPosition.TopRight:
                f.offsetLeft = EBG.px(a + e - c), f.offsetTop = EBG.px(h)
            }
        }
        return f
    },
    _getIconsDir: function(a) {
        var b = this._adConfig.imagesDir + "/AdChoice/";
        switch (a) {
        case EBG.AcIconPosition.BottomLeft:
            b += "BottomLeft/";
            break;
        case EBG.AcIconPosition.BottomRight:
            b += "BottomRight/";
            break;
        case EBG.AcIconPosition.TopLeft:
            b += "TopLeft/";
            break;
        case EBG.AcIconPosition.TopRight:
            b += "TopRight/"
        }
        return b
    },
    _addAdChoiceIcons: function(a, b, c) {
        var d = "acImgLinkWrapper_" + this._adConfig.uid;
        this._spanId = "acSpan_" + this._adConfig.uid;
        var e = EBG.adaptor.getElementById(this._containerId);
        if (e && (c = {
            tagName: EBG.Adaptors.TagNames.DIV,
            attributes: {
                id: this._spanId,
                style: {
                    position: EBG.AdChoice.AdChoiceManager.Position.ABSOLUTE,
                    zIndex: EBG.adaptor.getMaxZIndex(e) + 1
                }
            },
            children: [{
                tagName: EBG.Adaptors.TagNames.A,
                attributes: {
                    id: d,
                    target: "_blank",
                    href: c,
                    mmskipreplace: 1
                },
                children: null
            }
            ]
        }, this._containerId == this._adConfig.placeHolderId ? EBG.adaptor.inject(c, EBG.Adaptors.InjectionMethod.APPEND, e) : EBG.adaptor.inject(c, EBG.Adaptors.InjectionMethod.INSERT_BEFORE, e), d = EBG.adaptor.getElementById(d))) {
            e = {
                tagName: EBG.Adaptors.TagNames.IMG,
                attributes: {
                    id: a.id,
                    style: {
                        position: EBG.AdChoice.AdChoiceManager.Position.ABSOLUTE,
                        visibility: EBG.AdChoice.AdChoiceManager.VisibilityState.VISIBLE,
                        left: EBG.px(EBG.AdChoice.AdChoiceManager.DefaultOffset),
                        top: EBG.px(EBG.AdChoice.AdChoiceManager.DefaultOffset)
                    }
                },
                children: null
            };
            EBG.adaptor.inject(e, EBG.Adaptors.InjectionMethod.APPEND, d);
            e = {
                tagName: EBG.Adaptors.TagNames.IMG,
                attributes: {
                    id: b.id,
                    style: {
                        position: EBG.AdChoice.AdChoiceManager.Position.ABSOLUTE,
                        visibility: EBG.AdChoice.AdChoiceManager.VisibilityState.HIDDEN,
                        left: EBG.px(EBG.AdChoice.AdChoiceManager.DefaultOffset),
                        top: EBG.px(EBG.AdChoice.AdChoiceManager.DefaultOffset)
                    }
                },
                children: null
            };
            EBG.adaptor.inject(e,
            EBG.Adaptors.InjectionMethod.APPEND, d);
            var d = EBG.adaptor.getElementById(a.id), e = EBG.adaptor.getElementById(b.id), g = this, f = function() {
                EBG.runTimed(g, g._handleImgOnloadEvent, [a.id, 0], EBG.AdChoice.AdChoiceManager.ImageLoadTimeout)
            }, c = function() {
                EBG.runTimed(g, g._handleImgOnloadEvent, [b.id, 0], EBG.AdChoice.AdChoiceManager.ImageLoadTimeout)
            };
            if (d)
                f = new EBG.Events.EventSubscription("load", f, this), f.isElementEvent=!0, f.elementId = a.id, EBG.eventMgr.subscribeToEvent(f), d.src = a.iconSrc;
            if (e)
                f = new EBG.Events.EventSubscription("load",
                c, this), f.isElementEvent=!0, f.elementId = b.id, EBG.eventMgr.subscribeToEvent(f), e.src = b.iconSrc
        }
    },
    _subscribeIconToEvents: function(a, b) {
        var c = this, d = function() {
            c._handleMouseOverEvent(a, b)
        }, e = new EBG.Events.EventSubscription("mouseover", d, this);
        e.isElementEvent=!0;
        e.elementId = a;
        EBG.eventMgr.subscribeToEvent(e);
        e = new EBG.Events.EventSubscription("mouseout", d, this);
        e.isElementEvent=!0;
        e.elementId = b;
        EBG.eventMgr.subscribeToEvent(e)
    },
    _handleMouseOverEvent: function(a, b) {
        var c = EBG.adaptor.getElementById(a),
        d = EBG.adaptor.getElementById(b), e = EBG.adaptor.getStyleOfElem(c), g = EBG.AdChoice.AdChoiceManager.VisibilityState.VISIBLE, f = EBG.AdChoice.AdChoiceManager.VisibilityState.HIDDEN;
        if (e.visibility == EBG.AdChoice.AdChoiceManager.VisibilityState.VISIBLE)
            g = EBG.AdChoice.AdChoiceManager.VisibilityState.HIDDEN, f = EBG.AdChoice.AdChoiceManager.VisibilityState.VISIBLE;
        e = {
            visibility: f
        };
        EBG.adaptor.setStyleToElem(c, {
            visibility: g
        });
        EBG.adaptor.setStyleToElem(d, e)
    },
    _pageResizeHandler: function() {
        this._handleImgOnloadEvent(this._imgData.id);
        this._handleImgOnloadEvent(this._imgExpData.id)
    },
    _handleImgOnloadEvent: function(a, b) {
        var c = EBG.adaptor.getElementById(a);
        imgPos = this._getIconOffsets(a, this._adConfig.adChoice.iconPosition, c.width, c.height, this._adConfig.width, this._adConfig.height);
        EBGInfra.isDefinedNotNull(b) && 10 > b ? EBG.runTimed(this, this._rehandleImgOnloadEvent, [a, b], EBG.AdChoice.AdChoiceManager.ImageLoadTimeout) : EBG.adaptor.setStyleToElem(c, {
            left: imgPos.offsetLeft,
            top: imgPos.offsetTop
        })
    },
    _rehandleImgOnloadEvent: function(a, b) {
        this._handleImgOnloadEvent(a,
        b + 1)
    }
};
EBG.declareNamespace("Ads");
EBG.Ads.Ad = function(a) {
    this._adConfig = a;
    this._adConfig.isStdAd = this._isStdAd();
    this._fixPage();
    this._updateURLs();
    EBG.ads[a.uid] = this;
    this._show()
};
EBG.Ads.Ad.prototype = {
    resizePlaceHolder: !0,
    _adConfig: null,
    _adChoice: null,
    _showOnlyDefaultImg: !1,
    _isStdAd: function() {
        return !0
    },
    _counterInteractionHandler: function(a) {
        try {
            var b = a.eventData.intName;
            if (!b)
                b = EBG.Interactions.SystemInts.CLICK;
            a.eventData.clickUrl = this._replaceURLTokens(a.eventData.clickUrl);
            a.eventData.clickedVerUrl = this._replaceURLTokens(a.eventData.clickedVerUrl);
            EBG.intMgr.handleCounterInteraction(b, this._adConfig.uid, 0, null, a.eventData, "undefined" != typeof a.eventData.handleClickInt ?
            a.eventData.handleClickInt : !0)
        } catch (c) {}
    },
    _versionTrackingImpressionHandler: function(a) {
        try {
            a.eventData.impTrackingUrls && this._reportImpressionTrackingURLs(a.eventData.impTrackingUrls)
        } catch (b) {}
    },
    _reportImpressionTrackingURLs: function(a) {
        if (!EBG.isPreview)
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                c && (c = this._replaceURLTokens(c), EBG.adaptor.reportToRemoteServerUsingImage(c))
            }
    },
    _show: function() {
        var a=!this._canShow() || this._adConfig.showOnlyImage || this._adConfig.showAieDefaultImage;
        this._adConfig.defaultImageDisplayed =
        !(!a ||!this._adConfig.defaultImagePath);
        var b = this._adConfig.showOnlyImage, c = new EBG.Events.Event(EBG.Events.EventNames.SHOW_AD);
        c.dispatcher = this;
        c.timing = EBG.Events.EventTiming.BEFORE;
        c.eventData = {
            isDefaultImage: this._adConfig.defaultImageDisplayed
        };
        EBG.eventMgr.dispatchEvent(c);
        b !== this._adConfig.showOnlyImage && (a=!this._canShow() || this._adConfig.showOnlyImage || this._adConfig.showAieDefaultImage);
        this._subscribeToEvents();
        EBG.intMgr.initAdData(this._adConfig, this._adConfig.reportDelayedImpression ?
        !0 : !1);
        this._addSystemInteractions();
        this._verifyPlaceHolder();
        this._adChoice = new EBG.AdChoice.AdChoiceManager(this._adConfig);
        this._adChoice.init();
        (b = EBG.adaptor.getElementById(this._adConfig.placeHolderId)) && this.resizePlaceHolder && "undefined" != typeof this._adConfig.display && EBG.adaptor.setElemStyle(b, "display", this._adConfig.display);
        if (a)
            if (this._adConfig.defaultImagePath) {
                if (!this._adConfig.imageOnly)
                    a = new EBG.Events.Event(EBG.Events.EventNames.DEFAULT_IMPRESSION), a.eventData = {
                        impTrackingUrls: this._adConfig.defaultImpTrackingUrls
                    },
                    a.dispatcher = this, a.timing = EBG.Events.EventTiming.ONTIME, EBG.eventMgr.dispatchEvent(a);
                    this._subscribeToAdEvent(EBG.Events.EventNames.ADD_BANNER_DEFAULT_IMAGE_CREATIVE, this._terminateShow, EBG.Events.EventTiming.AFTER);
                    this._showOnlyDefaultImg=!0;
                    this.checkAndShowDefaultImage(this.showDefaultImage)
            } else 
                this._reportImpression(!0);
            else 
                this._showOnlyDefaultImg=!1, this._addVideoInteractions(), this._addCustomInteractions(), this._addCreatives(), this._terminateShow()
    },
    _terminateShow: function(a) {
        var b = EBG.adaptor.getElementById(this._adConfig.placeHolderId);
        b && this.resizePlaceHolder && (EBG.adaptor.setElemStyle(b, "width", EBG.px(this._adConfig.width)), EBG.adaptor.setElemStyle(b, "height", EBG.px(this._adConfig.height)), EBG.adaptor.setElemStyle(b, "margin", "0px auto"));
        b = new EBG.Events.Event(EBG.Events.EventNames.SHOW_AD);
        b.dispatcher = this;
        b.timing = EBG.Events.EventTiming.ONTIME_AND_AFTER;
        b.eventData = {
            isDefaultImage: a?!0: !1
        };
        EBG.eventMgr.dispatchEvent(b)
    },
    _verifyPlaceHolder: function() {
        !EBG.adaptor.getElementById(this._adConfig.placeHolderId)&&!document.body &&
        document.write('<img style="width:0;height:0"></img>');
        return EBG.adaptor.getElementById(this._adConfig.placeHolderId)
    },
    _canShow: function() {
        return !0
    },
    _onPlayHandler: function() {
        this._adConfig.arrOnPlayEvents && this._executeEvents(this._adConfig.arrOnPlayEvents)
    },
    _onDownloadHandler: function() {
        this._adConfig.arrOnStartDnlEvents && this._executeEvents(this._adConfig.arrOnStartDnlEvents)
    },
    _collectUrl: function() {
        if (!EBG.isPreview && this._adConfig.shouldCollectUrl)
            try {
                EBG.adaptor.reportToRemoteServer(EBG.format("{0}{1}/BurstingPipe/adServer.bs?cn=curl&ai={2}&url=$${3}$$",
                EBG.protocol, EBG.bs, this._adConfig.adId, top.document.URL))
        } catch (a) {}
    },
    _executeEvents: function(a) {
        for (var b = 0; b < a.length; b++) {
            var c, d = this._replaceURLTokens(a[b].url);
            switch (a[b].typeId) {
            case 3:
                c = "ebPlayScript" + b;
                EBG.adaptor.writeScript(EBG.adaptor.generateElementId(c, this._adConfig.uid), d, this._adConfig.placeHolderId);
                break;
            case 5:
                c = "ebDnlScript" + b;
                EBG.adaptor.writeScript(EBG.adaptor.generateElementId(c, this._adConfig.uid), d, this._adConfig.placeHolderId);
                break;
            case 4:
                c = "ebPlayIFR" + b;
                EBG.adaptor.writeReportingIFrame(EBG.adaptor.generateElementId(c,
                this._adConfig.uid), d, this._adConfig.placeHolderId);
                break;
            case 6:
                c = "ebDnlIFR" + b, EBG.adaptor.writeReportingIFrame(EBG.adaptor.generateElementId(c, this._adConfig.uid), d, this._adConfig.placeHolderId)
            }
        }
    },
    _addSystemInteractions: function() {
        try {
            var a = this._adConfig.interactions[EBG.Interactions.SystemInts.CLICK];
            if (a) {
                var b = EBG.Interactions.Categories.SYSTEM;
                this._adConfig.interactions[EBG.Interactions.SystemInts.DEFAULT_CLICK] = EBG.cloneObj(a);
                this._addCounterInteraction(EBG.Interactions.SystemInts.CLICK,
                b);
                this._addCounterInteraction(EBG.Interactions.SystemInts.DEFAULT_CLICK, b)
            }
            this._addCounterInteraction(EBG.Interactions.SystemInts.AD_START, b, !1, 1)
        } catch (c) {}
    },
    _addCounterInteraction: function(a, b, c) {
        var d = this._adConfig.interactions[a], b = new EBG.Interactions.CounterInteractionData(a, b, this._adConfig.uid);
        b.initiationType = d.nInitiated ? EBG.Interactions.InitiationTypes.USER : EBG.Interactions.InitiationTypes.AUTO;
        b.countAsClick = d.fClick;
        if (d.agencyURL)
            b.remoteServers.agencyUrl = d.agencyURL;
        if (d.networkURL)
            b.remoteServers.networkUrl =
            d.networkURL;
        this._adjustClickTarget(a);
        b.counterJumpUrlData = d;
        b.reportImmediately = c?!0 : !1;
        a = new EBG.Interactions.CounterInteraction(b);
        EBG.intMgr.addInteraction(a)
    },
    _addVideoInteractions: function() {},
    _addCustomInteractions: function() {},
    _adjustClickTarget: function(a) {
        var a = this._adConfig.interactions[a], b;
        switch (a.target) {
        case 0:
            b = EBG.WindowTarget.SELF;
            break;
        case 2:
            b = EBG.WindowTarget.TOP;
            break;
        default:
            b = EBG.WindowTarget.BLANK
        }
        a.target = b
    },
    _subscribeToEvents: function() {
        this._adConfig.interactionsToReport &&
        this._subscribeToAdEvent(EBG.Events.EventNames.ADD_INTERACTION, this._handleInteractionsSubscription, EBG.Events.EventTiming.BEFORE);
        this._subscribeToAdEvent(EBG.EBMessage.CLICKTHROUGH, this._counterInteractionHandler);
        this._subscribeToAdEvent(EBG.EBMessage.VERSION_TRACKING_IMPRESSION, this._versionTrackingImpressionHandler);
        this._subscribeToAdEvent(EBG.Events.EventNames.DEFAULT_IMPRESSION, this._versionTrackingImpressionHandler, EBG.Events.EventTiming.ONTIME);
        this._subscribeToAdEvent(EBG.Events.EventNames.DEFAULT_CLICK,
        this._counterInteractionHandler);
        this._subscribeToAdEvent(EBG.Events.EventNames.ADD_CREATIVES, this._onAddCreativesHandler, EBG.Events.EventTiming.ONTIME);
        this._subscribeToAdEvent(EBG.Events.EventNames.SHOW_AD, this._onDownloadHandler, EBG.Events.EventTiming.ONTIME);
        this._subscribeToAdEvent(EBG.Events.EventNames.SHOW_AD, this._onPlayHandler, EBG.Events.EventTiming.AFTER);
        this._subscribeToAdEvent(EBG.Events.EventNames.SHOW_AD, this._collectUrl, EBG.Events.EventTiming.AFTER);
        this._subscribeToAdEvent(EBG.EBMessage.NOTIFY_INTERACTION_MONITOR,
        this._notifyInteractionManager);
        var a = new EBG.Events.EventSubscription(EBG.Events.EventNames.ELEMENT_LOADED, function(a) {
            a.eventData.adUId == this._adConfig.uid && this._triggerAdStart()
        }, this);
        a.timing = EBG.Events.EventTiming.ONTIME;
        EBG.eventMgr.subscribeToEvent(a)
    },
    _handleInteractionsSubscription: function(a) {
        try {
            var b = a.eventData.interactionData.reportingName;
            return this._adConfig.interactionsToReport && this._adConfig.interactionsToReport[b]?!0 : !1
        } catch (c) {}
    },
    _onAddCreativesHandler: function(a) {
        try {
            if (!EBG.Initializer._getAdClass({
                tn: this._adConfig.templateName
            }).requiresIframeBust ||
            this._adConfig.actualServingMode == EBG.Adaptors.ServingMode.SCRIPT) {
                var b = a.dispatcher._adConfig.placeHolderId;
                if (b) {
                    var c = EBG.adaptor.getDisplayWin().document.getElementById(b);
                    if (c)
                        c.style.backgroundImage = "", c.onclick = function() {}
                }
            }
        } catch (d) {}
    },
    _onAdCreativesAdded: function() {
        var a = new EBG.Events.Event(EBG.Events.EventNames.AD_CREATIVES_ADDED);
        a.dispatcher = this;
        EBG.eventMgr.dispatchEvent(a)
    },
    _fixPage: function() {
        var a = this._adConfig.page, a = a.replace(/\~/ig, "_"), a = a.replace(/\^/ig, "_"), a = a.replace(/\|/ig,
        "_"), a = escape(a);
        this._adConfig.page = a
    },
    _updateURLs: function() {
        for (var a = this._adConfig.clickTrackingUrls, b = 0; b < a.length; b++)
            a[b] = this._replaceURLTokens(a[b]);
        var a = this._adConfig.interactions, c;
        for (c in a)
            if (a.hasOwnProperty(c))
                a[c].agencyURL = this._replaceURLTokens(a[c].agencyURL), a[c].networkURL = this._replaceURLTokens(a[c].networkURL), a[c].jumpUrl = this._replaceURLTokens(a[c].jumpUrl)
    },
    getAdId: function() {
        return this._adConfig.adId
    },
    _replaceURLTokens: function(a) {
        var b = this._adConfig;
        try {
            a && (a = a.replace(/\[%random%\]/ig,
            b.rnd), a = a.replace(/\[ebRandom\]/ig, b.rnd), a = a.replace(/\[timestamp\]/ig, b.rnd), a = a.replace(/\[%tp_adid%\]/ig, b.adId), a = a.replace(/\[%tp_flightid%\]/ig, b.placementId), a = a.replace(/\[%tp_campaignid%\]/ig, b.campaignId));
            if (!a ||!b.sUrlTokens)
                return a;
            if (!EBG.isObj(b.objURLTokens))
                b.oURLTokens = this._pairsToObj(b.sUrlTokens, "$$");
            for (var c in b.oURLTokens)
                b.oURLTokens.hasOwnProperty(c) && (a = a.replace(RegExp("\\[%" + c + "%\\]", "ig"), b.oURLTokens[c]))
        } catch (d) {}
        return a
    },
    _pairsToObj: function(a, b) {
        for (var c =
        {}, d = unescape(a).split(b), e = 0; e < d.length; e++)
            try {
                if (d[e]) {
                    var g = d[e].indexOf("="), f = d[e].substr(0, g), h = d[e].substr(g + 1);
                    c[f] = escape(h)
                }
            } catch (i) {}
        return c
    },
    _subscribeToAdEvent: function(a, b, c) {
        a = new EBG.Events.EventSubscription(a, b, this);
        a.dispatcherFilters = {
            "_adConfig.rnd": this._adConfig.rnd
        };
        if (c)
            a.timing = c;
        EBG.eventMgr.subscribeToEvent(a)
    },
    _getCDIUrl: function(a) {
        var a = EBG.format("{0}{1}/BurstingPipe/adServer.bs?cn=cdi&ai={2}&p={3}&pluid={4}&ru={5}&pc={6}&brt={7}&pltype={8}&ord={9}", EBG.protocol,
        EBG.bs, this._adConfig.adId, this._adConfig.page, this._adConfig.pluId, EBG.isDefinedNotNull(a) && "" != a ? a : EBG.combinePaths(this._adConfig.resourcePath, this._adConfig.defaultImagePath), this._adConfig.sPublisherPlacementId, EBG.adaptor.browser._browserCode, EBG.adaptor.browser._platform, this._adConfig.rnd), b = this._adConfig.massVersioning.targetAudienceId;
        b && (a += EBG.format("&ta={0}", b));
        (b = this._adConfig.massVersioning.deliveryGroupId) && (a += EBG.format("&dg={0}", b));
        this._adConfig.massVersioning.adVersions &&
        (b = this._removePrefixFromVersions(), a += EBG.format("&vid={0}", b));
        return a
    },
    _removePrefixFromVersions: function() {
        var a = "", b = this._adConfig.massVersioning.adVersions;
        if (b) {
            for (var a = [], b = b.split(","), c = 0; c < b.length; c++) {
                var d = b[c].indexOf("_");
                a.push( - 1 == d ? b[c] : b[c].substring(0, d))
            }
            a = a.join()
        }
        return a
    },
    buildJSONImgObj: function(a, b) {
        var c = EBG.format(a + "_{0}", this._adConfig.uid);
        return {
            tagName: EBG.Adaptors.TagNames.IMG,
            attributes: {
                id: c,
                src: b,
                width: this._adConfig.width,
                height: this._adConfig.height,
                style: {
                    width: this._adConfig.width,
                    height: this._adConfig.height
                },
                title: this._adConfig.title ? this._adConfig.title: "",
                onload: EBG.format('(function(e) { var event = new EBG.Events.Event(EBG.Events.EventNames.ELEMENT_LOADED);event.dispatcher = this;event.eventData = { DOMEvent: e, elementId: "{0}", adUId:"{1}" };event.timing = EBG.Events.EventTiming.ONTIME_AND_AFTER;EBG.eventMgr.dispatchEvent(event);} )(typeof arguments != "undefined" ? arguments[0] : null);', c, this._adConfig.uid)
            }
        }
    },
    setImageClick: function(a, b, c, d) {
        a.attributes.onclick =
        EBG.format('EBG.ads["' + this._adConfig.uid + '"].onImageClick("{0}", {1},"{2}", "{3}", "{4}")', this._adConfig.uid, b, a.attributes.id, c, d);
        EBG.mergeObj({
            cursor: "pointer; cursor: hand"
        }, a.attributes.style)
    },
    _addDefaultImgRequest: function() {
        this.checkAndShowDefaultImage(this.showDefaultImage)
    },
    checkAndShowDefaultImage: function(a) {
        var b = "", c = ".xml", d=!0;
        if (EBG.isDefinedNotNull(this._adConfig.svJSON) || EBG.isDefinedNotNull(this._adConfig.sv3CatalogMap))
            c = ".json", d=!1;
        if (EBG.isDefinedNotNull(this._adConfig.massVersioning) &&
        "" != this._adConfig.massVersioning.defaultAdVersion && "" != this._adConfig.massVersioning.adBasePath)
            b = this._adConfig.massVersioning.defaultAdVersion, b = 0 < this._adConfig.massVersioning.massVersionFolderDivider ? EBG.Ads.Ad.Fn.fixMVPathString(b, this._adConfig.massVersioning.massVersionFolderDivider) : b, b = EBG.combinePaths(this._adConfig.massVersioning.adBasePath, b + c), b = EBG.combinePaths(this._adConfig.resourcePath, b);
        c = d ? this._readMassVersionInfo : this._readJsonVersionInfo;
        (!b ||!EBG.adaptor.getDataFromRemoteServer(b,
        c, this, !0, d)) && a.apply(this)
    },
    showDefaultImage: function(a) {
        var b=!this._adConfig.imageOnly, c = "";
        this._adConfig.showOnlyImage || this._adConfig.imageOnly || this._adConfig.reportDelayedImpression ? c = a && a.isValid ? a.defaultImagePath : EBG.combinePaths(this._adConfig.resourcePath, this._adConfig.defaultImagePath) : (c = a && a.isValid ? this._getCDIUrl(a.defaultImagePath) : this._getCDIUrl(), this._adConfig.massVersioning.adVersions = "");
        var c = this.buildJSONImgObj("ebDefaultImg", c), d = a && a.isValid ? a.jumpUrl: b ? this._adConfig.interactions[EBG.Interactions.SystemInts.DEFAULT_CLICK].jumpUrl:
        this._adConfig.interactions[EBG.Interactions.SystemInts.CLICK].jumpUrl;
        d && this.setImageClick(c, b, d, a && a.isValid ? a.selectedVersion : "");
        a = new EBG.Events.Event(EBG.Events.EventNames.ADD_CREATIVES);
        a.dispatcher = this;
        a.eventData = {
            tagsObj: c,
            assetId: c.attributes.id,
            isPanel: !1,
            creativeType: EBG.Events.EventNames.ADD_BANNER_DEFAULT_IMAGE_CREATIVE
        };
        a.timing = EBG.Events.EventTiming.BEFORE;
        d = EBG.eventMgr.dispatchEvent(a);
        if (!d && (b = new EBG.Events.Event(EBG.Events.EventNames.ADD_BANNER_DEFAULT_IMAGE_CREATIVE), b.eventData =
        {
            assetId: c.attributes.id
        }, b.dispatcher = this, b.timing = EBG.Events.EventTiming.BEFORE, d = EBG.eventMgr.dispatchEvent(b), !d))
            c = EBG.adaptor._getTags(c), d = EBG.adaptor.getElementById(this._adConfig.placeHolderId), EBG.adaptor.setInnerHtml(d, c), b.timing = EBG.Events.EventTiming.ONTIME_AND_AFTER, EBG.eventMgr.dispatchEvent(b), a.timing = EBG.Events.EventTiming.ONTIME_AND_AFTER, EBG.eventMgr.dispatchEvent(a)
    },
    _triggerAdStart: function() {
        if (!this._adConfig.adStarted) {
            this._adConfig.adStarted=!0;
            var a = new EBG.Events.Event(EBG.Events.EventNames.AD_START);
            a.eventData = {
                intName: EBG.Interactions.SystemInts.Ad_START
            };
            a.dispatcher = this;
            a.timing = EBG.Events.EventTiming.BEFORE;
            if (!EBG.eventMgr.dispatchEvent(a))(this._adConfig.visibility.mode == EBG.VisibilityMode.BASIC_MODE || this._adConfig.visibility.mode == EBG.VisibilityMode.ENHANCED_MODE) && EBG.intMgr.handleCounterInteraction(EBG.Interactions.SystemInts.AD_START, this._adConfig.uid), a.timing = EBG.Events.EventTiming.ONTIME_AND_AFTER, EBG.eventMgr.dispatchEvent(a)
            }
    }, _readJsonVersionInfo: function(a) {
        var b = JSON.parse(a),
        a = this._adConfig.massVersioning.defaultAdVersion.indexOf("_"), a = {
            isValid: !!b.DefaultImage,
            jumpUrl: b.ClickthroughURL ? b.ClickthroughURL: "",
            defaultImagePath: b.DefaultImage ? b.DefaultImage: "",
            selectedVersion: - 1 == a ? this._adConfig.massVersioning.defaultAdVersion: this._adConfig.massVersioning.defaultAdVersion.substring(0, a)
        };
        if (a.isValid && EBG.isNumber(b.DefaultImage)) {
            a.isValid=!1;
            var b = this._adConfig.assets, c = "ebMovie" + a.defaultImagePath;
            if (EBG.isDefinedNotNull(b[c].dsPath))
                a.defaultImagePath = EBG.isInWorkshop ?
                b[c].dsPath : EBG.combinePaths(this._adConfig.resourcePath, b[c].dsPath), a.isValid=!0
        }
        this.showDefaultImage(a)
    }, _readMassVersionInfo: function(a) {
        var b = {
            isValid: !1,
            jumpUrl: "",
            defaultImagePath: "",
            selectedVersion: ""
        };
        try {
            if (EBG.isDefined(a) && null != a) {
                var c = a.documentElement.attributes.getNamedItem("productClickThrough"), d = a.documentElement.attributes.getNamedItem("DefaultImage"), e = this._adConfig.massVersioning.defaultAdVersion.indexOf("_"), b = {
                    isValid: null != d && "" != d.value,
                    jumpUrl: null != c ? c.value: "",
                    defaultImagePath: null !=
                    d ? d.value: "",
                    selectedVersion: - 1 == e ? this._adConfig.massVersioning.defaultAdVersion: this._adConfig.massVersioning.defaultAdVersion.substring(0, e)
                };
                if (b.isValid && EBG.isNumber(b.defaultImagePath)) {
                    b.isValid=!1;
                    var g = this._adConfig.assets, f = "ebMovie" + b.defaultImagePath;
                    if (EBG.isDefinedNotNull(g[f].dsPath))
                        b.defaultImagePath = EBG.isInWorkshop ? g[f].dsPath : EBG.combinePaths(this._adConfig.resourcePath, g[f].dsPath), b.isValid=!0
                }
            }(this._showOnlyDefaultImg ? this.showDefaultImage : this._showImgAsCreative).apply(this,
            [b])
        } catch (h) {
            this.showDefaultImage(b)
        }
    }, dispatchCustomEvent: function(a, b, c, d) {
        a = new EBG.Events.Event(a);
        a.dispatcher = d;
        a.eventData = {
            assetId: b
        };
        a.timing = c;
        return EBG.eventMgr.dispatchEvent(a)
    }, _notifyInteractionManager: function(a) {
        var b = {};
        if (a && a.eventData)
            b = a.eventData;
        b.elapsedTime = "";
        if (EBG.intMgr.getAdDuration)
            b.elapsedTime = EBG.intMgr.getAdDuration(this._adConfig.uid);
        EBG.adaptor.notifyIntMonitor(a.eventData)
    }, onImageClick: function(a, b, c, d, e) {
        try {
            var g = b ? new EBG.Events.Event(EBG.Events.EventNames.DEFAULT_CLICK):
            new EBG.Events.Event(EBG.EBMessage.CLICKTHROUGH);
            g.eventData = b ? {
                intName: EBG.Interactions.SystemInts.DEFAULT_CLICK
            } : {
                intName: EBG.Interactions.SystemInts.CLICK
            };
            if (EBG.isDefined(d))
                g.eventData.clickUrl = d;
            if (EBG.isDefined(e))
                g.eventData.clickedVersion = e;
            g.dispatcher = EBG.ads[a];
            EBG.eventMgr.dispatchEvent(g);
            if (EBG.adaptor.intMonitorExist()) {
                var f = new EBG.Events.Event(EBG.EBMessage.NOTIFY_INTERACTION_MONITOR);
                f.eventData = {
                    command: EBG.EBMessage.CLICKTHROUGH,
                    args: "",
                    objName: c,
                    adId: EBG.Ads.Ad.Fn.getAdIdFromAdUId(a)
                };
                EBG.eventMgr.dispatchEvent(f)
            }
        } catch (h) {}
    }
};
EBG.declareClass(EBG.Ads.Ad,
null);
EBG.Ads.Ad.Fn = {
    getAdIdFromAdUId: function(a) {
        return a.split("_")[0]
    }, getRandFromAdUId : function(a) {
        return a.split("_")[1]
    }, getVersionToReport: function(a) {
        return - 1 < a.indexOf(",") ? "m" : - 1 < a.indexOf("_") ? a.substr(0, a.indexOf("_")) : a
    }, getAdVersions: function(a) {
        for (var b = "", a = a.adVersions.split(","), c = 0; c < a.length; c++)
            b && (b += ","), b += a[c];
        return b
    }, fixMVPathString: function(a, b) {
        if (0 < b)
            for (var c = a.split(","), d = "", e = "", g, f, h, i = 0; i < c.length; i++)
                h = c[i], g = "", EBG.isDefinedNotNull(h.match("_")) && (g = h.substr(h.indexOf("_"))),
                h = parseInt(h), f = parseInt(h / b), h = f + g + "/" + h, d += e + h, "" == e && (e = ",");
        return d
    }, _handlePageResizeOrScroll: function() {}
};
EBG.Ads.StdBanner = function(a) {
    EBG.callSuperConstructor(EBG.Ads.StdBanner, this, [a])
};
EBG.Ads.StdBanner.requiresIframeBust=!1;
EBG.Ads.StdBanner.prototype = {
    _flashResID: null,
    _CCs: {},
    _canShow: function() {
        var a=!1;
        this._adConfig.flashResPath ? EBG.adaptor.flash.version >= this._adConfig.flashVer && (a=!0) : this._adConfig.imageOnly=!0;
        return a
    },
    _writeCreativeElements: function() {
        try {
            var a = {
                resPath: this._adConfig.flashResPath,
                resId: this._flashResID,
                width: this._adConfig.width,
                height: this._adConfig.height,
                play: "true",
                wmode: this._adConfig.wmode ? this._adConfig.wmode: "opaque"
            }, b = EBG.adaptor.generateElementId("StdBannerDiv", this._adConfig.uid),
            c = {
                tagName: EBG.Adaptors.TagNames.DIV,
                attributes: {
                    id: b,
                    dir: "ltr",
                    style: {
                        width: this._adConfig.width,
                        height: this._adConfig.height
                    }
                },
                children: this._CCs[this._flashResID].buildCreativeContainerJson(a)
            };
            if ("undefined" != typeof this._adConfig.display)
                c.attributes.style.display = this._adConfig.display;
            var d = new EBG.Events.Event(EBG.Events.EventNames.ADD_CREATIVES);
            d.dispatcher = this;
            d.eventData = {
                tagsObj: c,
                assetId: this._flashResID,
                isPanel: !1,
                creativeType: EBG.Events.EventNames.ADD_BANNER_DEFAULT_FLASH_CREATIVE
            };
            d.timing = EBG.Events.EventTiming.BEFORE;
            if (!EBG.eventMgr.dispatchEvent(d))
                EBG.adaptor.addInlineDOM(c, this._adConfig.placeHolderId), this._CCs[this._flashResID].checkPlaying(), d.timing = EBG.Events.EventTiming.ONTIME, EBG.eventMgr.dispatchEvent(d), d.timing = EBG.Events.EventTiming.AFTER, EBG.eventMgr.dispatchEvent(d)
        } catch (e) {}
    },
    _addCreatives: function() {
        this._flashResID = EBG.adaptor.generateElementId("StdBannerFlash", this._adConfig.uid);
        this._CCs[this._flashResID] = new EBG.FlashCC(this._adConfig);
        this._writeCreativeElements()
    }
};
EBG.declareClass(EBG.Ads.StdBanner, EBG.Ads.Ad);
EBG.declareNamespace("CreativeContainer");
EBG.CreativeContainer = function(a) {
    this._adConfig = a
};
EBG.declareClass(EBG.CreativeContainer, null);
EBG.declareNamespace("FlashCC");
EBG.FlashCC = function(a) {
    EBG.callSuperConstructor(EBG.FlashCC, this, [a]);
    this.fs = {};
    this._addSupportedFSCommands()
};
EBG.FlashCC.prototype = {
    _createIntMonitorObj: function(a, b) {
        return {
            command: a,
            args: b,
            objName: this._flashResID,
            adId: this._adConfig.adId
        }
    },
    _buildAdditionalResStr: function() {
        var a = "", b = this._adConfig.assets, c;
        for (c in b)
            try {
                var d = b[c], e = EBG.isInWorkshop ? d.dsPath: EBG.combinePaths(this._adConfig.resourcePath, d.dsPath), a = EBG.format("{0}{1}{2}={3}", a, a ? "&" : "", c, e)
        } catch (g) {}
        return a
    },
    _getSmartVersioningFlashVars: function() {
        var a = "", b = "", a = "undefined" != typeof this._adConfig.isSVSVP && this._adConfig.isSVSVP, c =
        this._adConfig.massVersioning.adVersions && this._adConfig.sv2DisplayMap;
        c && (b = EBG.Ads.Ad.Fn.getAdVersions(this._adConfig.massVersioning), b = 0 < this._adConfig.massVersioning.massVersionFolderDivider ? EBG.Ads.Ad.Fn.fixMVPathString(b, this._adConfig.massVersioning.massVersionFolderDivider) : b, b = EBG.format("&ebAdVersions={0}&ebAdMap={1}&ebResPath={2}&ebAdSVBasePath={3}", b, this._adConfig.sv2DisplayMap, EBG.isInWorkshop ? "" : this._adConfig.resourcePath, this._adConfig.massVersioning.adBasePath));
        if (this._adConfig.svXML &&
        (a ||!c))
            a = EBG.isGlobalDef("ebAdXmlPath") && ebAdXmlPath ? ebAdXmlPath : EBG.isInWorkshop ? this._adConfig.svXML : EBG.combinePaths(this._adConfig.resourcePath, this._adConfig.svXML), b += EBG.format("&ebAdXML={0}", a);
        return b
    },
    _getFlashParams: function() {
        var a = EBG.adaptor.getHostName(), b = EBG.intMgr.getClickTag(this._adConfig.uid), c = EBG.intMgr.getClickTarget(this._adConfig.uid), d = EBG.adaptor.browser.isIE() ? "": this._flashResID + "_DoFSCommand", e = EBG.format("ebDomain={0}&ebAdID={1}&clickTag={2}&clickTAG={2}&clicktag={2}&ebFSCmdHandler={3}&TemplateName={9}&clickTARGET={4}&ebFlashID={5}{6}&{7}{8}",
        a, this._adConfig.adId, escape(b), d, c, this._flashResID, this._getSmartVersioningFlashVars(), this._buildAdditionalResStr(), this._getAdditionalClickTagParams(), this._adConfig.templateName);
        EBG.adaptor.browser.isChrome() && 21 <= EBG.adaptor.browser.getVersion()&&!EBG.adaptor.browser.isMac() && (e = EBG.format("ebDomain={0}&ebAdID={1}&clickTag={2}&clickTAG={2}&clicktag={2}&TemplateName={9}&clickTARGET={4}&ebFlashID={5}{6}&{7}{8}", a, this._adConfig.adId, escape(b), d, c, this._flashResID, this._getSmartVersioningFlashVars(),
        this._buildAdditionalResStr(), this._getAdditionalClickTagParams(), this._adConfig.templateName));
        if (this._adConfig.additionalFlashVars)
            for (var g in this._adConfig.additionalFlashVars)
                this._adConfig.additionalFlashVars.hasOwnProperty(g) && g && (e += EBG.format("&{0}={1}", g.toLowerCase(), this._adConfig.additionalFlashVars[g]));
        return e
    },
    _getAdditionalClickTagParams: function() {
        var a = "", b = this._adConfig.interactions, c;
        for (c in b)
            try {
                if (/clicktag\d+/i.test(c)) {
                    var d = EBG.intMgr.adsData[this._adConfig.uid][EBG.Interactions.InteractionTypes.COUNTER][c.toLowerCase()],
                    e = d && "" != d.interactionData.counterJumpUrlData.jumpUrl ? d.getClickTagUrl(d.interactionData.counterJumpUrlData.jumpUrl): "";
                    "" != e && (a += EBG.format("&{0}={1}", c, escape(e)))
                }
            } catch (g) {}
        return a
    },
    buildCreativeContainerJson: function(a) {
        var b, c, d = null;
        b = ["transparent", "opaque", "window"];
        for (c = 0; 3 > c; c++)
            b[b[c]] = b[c];
        this._flashResID = a.resId;
        this.isIMPanel && 0 < a.unique && (a.resPath += "?" + Math.random());
        this._src = a.resPath;
        this._weight = a.weight;
        c = EBG.format("EBG.ads['{0}']._CCs['{1}']", this._adConfig.uid, this._flashResID);
        d = EBG.format("function {0}_DoFSCommand(command,args)", this._flashResID);
        d += EBG.format("{ try{ if(!args||args=='null')args='';command = command.replace(/FSCommand:/ig,''); return " + (this.isIMPanel ? "document.parentWindow.parent." : "") + "{0}._handleMessage(command,args,'{1}');}catch(e){if(window.mmFSExceptionAlert)mmFSExceptionAlert('Command: '+command+'\\nargs: '+args.toString()+'\\n\\nexception in DoFS func:\\n'+e.message)}}", c, this._flashResID);
        c = {
            tagName: EBG.Adaptors.TagNames.SCRIPT,
            text: d + "function ebIsFlashExtInterfaceExist(){return true;}"
        };
        var d = EBG.format("try{{0}_DoFSCommand(command,args);}catch(e){}", this._flashResID), d = {
            tagName: EBG.Adaptors.TagNames.SCRIPT,
            attributes: {
                "for": this._flashResID,
                event: "FSCommand(command,args)"
            },
            text: d
        }, e = this.getResPath(a.resPath), e =- 1 != e.toLowerCase().indexOf("http://")||-1 != e.toLowerCase().indexOf("https://") ? e : EBG.combinePaths(this._adConfig.resourcePath, e);
        b = {
            tagName: EBG.Adaptors.TagNames.OBJECT,
            attributes: {
                id: this._flashResID,
                dir: "ltr",
                name: this._flashResID,
                style: {
                    textAlign: "left",
                    width: EBG.format("{0}px",
                    a.width),
                    height: EBG.format("{0}px", a.height)
                },
                codebase: EBG.format("{0}download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#", EBG.protocol),
                version: EBG.format("{0},0,0,0", this._getFlashVersion()),
                title: this._adConfig.title ? this._adConfig.title: ""
            },
            params: {
                play: a.play,
                wmode: this.isIMPanel ? "opaque": b[a.wmode],
                menu: "false",
                flashVars: this._getFlashParams(),
                allowScriptAccess: "always",
                allowFullScreen: "true"
            }
        };
        this._isSupportShockwave() ? (b.attributes.type = "application/x-shockwave-flash", b.attributes.data =
        e) : (b.attributes.classid = "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", b.params.movie = e);
        return 0 < a.unique ? [b, d] : [b, c, d]
    },
    _isSupportShockwave: function() {
        var a=!0, b = EBG.adaptor.browser.getDocumentMode(), b = b ? b : 5;
        EBG.adaptor.browser.isIE() && 11 > b && (a=!1);
        return a
    },
    isPlaying: function() {
        if (!this._flashResID)
            return !1;
        var a = EBG.adaptor.getElementById(this._flashResID);
        if (!a)
            return !1;
        try {
            if ("undefined" == typeof a.PercentLoaded && "undefined" == typeof a.TGetProperty || "undefined" != typeof a.PercentLoaded && 100 == a.PercentLoaded())
                return !0;
            if ("undefined" != typeof a.TGetProperty)
                try {
                    return 1 < a.TGetProperty("/", 4)
                } catch (b) {}
        } catch (c) {
            return !0
        }
        return !1
    },
    checkPlaying: function() {
        if (this.isPlaying()) {
            var a = new EBG.Events.Event(EBG.Events.EventNames.ELEMENT_LOADED);
            a.dispatcher = this;
            a.eventData = {
                DOMEvent: null,
                elementId: this._flashResID,
                adUId: this._adConfig.uid
            };
            a.timing = EBG.Events.EventTiming.ONTIME_AND_AFTER;
            EBG.eventMgr.dispatchEvent(a)
        } else 
            EBG.runTimed(this, this.checkPlaying, [], 50)
    },
    getResPath: function(a) {
        return a
    },
    _getFlashVersion: function() {
        return this._adConfig.flashVer
    },
    _handleMessage: function(a, b, c) {
        var a = a.replace(/FSCommand:/ig, ""), d = a = a.toLowerCase(), e = b;
        a == EBG.EBMessage.CLICKTHROUGH && b && 0 == b.indexOf("SV2:")&&-1 != b.indexOf(String.fromCharCode(127)) && (e = b.substring(4), d = a + "sv2");
        var g = this.fs[d];
        if (g) {
            var f = g.mapEvent || d.toLowerCase(), f = new EBG.Events.Event(f);
            f.dispatcher = this;
            f.flashResId = c;
            var c = ",", h=!1;
            switch (d) {
            case EBG.EBMessage.CLICKTHROUGH:
                f.eventData = {};
                break;
            case EBG.EBMessage.CLICKTHROUGH + "sv2":
            case EBG.FS.EB_SET_JS_VAR:
                c = "\u007f";
                break;
            case EBG.EBMessage.VERSION_TRACKING_IMPRESSION:
                h =
                !0, f.eventData = {}, f.eventData[g.args[0]] = this._formatUrls(b)
            }
            if (g && g.args&&!h && (f.eventData = {
                adUId: this._adConfig.uid
            }, 0 < b.length)) {
                d = e.split(c);
                for (e = 0; e < g.args.length; e++)
                    c = g.args[e], h = "", e < d.length && (h = '"' == d[e].charAt(0) || "'" == d[e].charAt(0) || "false" == d[e] || "true" == d[e] ? eval(d[e]) : d[e]), f.eventData[c] = h
            }
            this._handleIntMonitor(a, b);
            if (g) {
                if (g.command)
                    return b = [f.eventData], g.command.call(this, b);
                g.combinedCommand && (b = [f.eventData], g.combinedCommand.call(this, b));
                EBG.eventMgr.dispatchEvent(f)
            }
        }
    },
    _formatUrls: function(a) {
        for (var b = [], a = a.split("\u007f"), c = 0; c < a.length; c++)
            for (var d = a[c].split("|"), e = 0; e < d.length; e++)
                b.push(d[e]);
        return b
    },
    _handleIntMonitor: function(a, b) {
        if (EBG.adaptor.intMonitorExist()) {
            var c = new EBG.Events.Event(EBG.EBMessage.NOTIFY_INTERACTION_MONITOR);
            c.eventData = this._createIntMonitorObj(a, b);
            EBG.eventMgr.dispatchEvent(c)
        }
    },
    _addSupportedFSCommands: function() {
        this.fs[EBG.FS.EB_CLICKTHROUGH] = {
            mapEvent: EBG.EBMessage.CLICKTHROUGH
        };
        this.fs[EBG.FS.EB_CLICKTHROUGH + "sv2"] = {
            mapEvent: EBG.EBMessage.CLICKTHROUGH,
            args: ["clickUrl", "clickedVersion", "clickedVerUrl"]
        };
        this.fs[EBG.FS.EB_VERSION_TRACKING_IMPRESSION] = {
            mapEvent: EBG.EBMessage.VERSION_TRACKING_IMPRESSION,
            args: ["impTrackingUrls"]
        };
        this.fs[EBG.FS.EB_CREATIVE_EVENT_SUBSCRIPTION] = {
            mapEvent: !1,
            args: ["eventHandler", "interAd"],
            command: this._addCreativeEventSubscription
        }
    },
    _addCreativeEventSubscription: function(a) {
        var b = a[0].eventHandler.split(String.fromCharCode(127)), c = new EBG.Events.EventSubscription(b[0], function(a) {
            this.call("ebCallHandlerWithObj", b[0],
            a.eventData)
        }, this);
        if (!a[0].interAd)
            c.dispatcherFilters = {
                "_adConfig.rnd": this._adConfig.rnd
            };
        EBG.eventMgr.subscribeToEvent(c)
    }
};
EBG.FlashCC.FlashProperty = {
    XPOSITION: 0,
    YPOSITION: 1,
    XSCALE: 2,
    YSCALE: 3,
    CURRENTFRAME: 4,
    TOTALFRAMES: 5,
    ALPHA: 6,
    VISIBILITY: 7,
    WIDTH: 8,
    HEIGHT: 9,
    ROTATION: 10,
    TARGET: 11,
    FRAMESLOADED: 12,
    NAME: 13,
    DROPTARGET: 14,
    URL: 15
};
EBG.declareClass(EBG.FlashCC, EBG.CreativeContainer);
var tempExtensionHook = ebO.extensionHooks;
try {
    ebO.extensionHooks.splice(0, 0, function(a, b) {
        function c() {
            if (EBG.Ads.ExpBaseHtml5)
                EBG.Ads.ExpBaseHtml5.prototype._subscribeToEvents = function() {
                    EBG.callSuperFunction(EBG.Ads.ExpBaseHtml5, this, "_subscribeToEvents");
                    this._subscribeToAdEvent(EBG.EBMessage.EXPAND, this._handleExpand);
                    this._subscribeToAdEvent(EBG.EBMessage.COLLAPSE, this._handleCollapse);
                    this._subscribeToAdEvent(EBG.Events.EventNames.CLOSE_AD, this._handleCollapse);
                    EBG.eventMgr.subscribeToEvent(new EBG.Events.EventSubscription(EBG.Events.EventNames.PAGE_UNLOAD,
                    this._unLoadHandler, this))
                };
            if (EBG.Ads.SEBannerHtml5)
                EBG.Ads.SEBannerHtml5.prototype._subscribeToEvents = function() {
                    EBG.callSuperFunction(EBG.Ads.SEBannerHtml5, this, "_subscribeToEvents");
                    this._subscribeToAdEvent(EBG.EBMessage.EXPAND, this._onExpand);
                    this._subscribeToAdEvent(EBG.EBMessage.COLLAPSE, this._onCollapse);
                    this._subscribeToAdEvent(EBG.Events.EventNames.CLOSE_AD, this._onCollapse);
                    this._subscribeToAdEvent(EBG.EBMessage.INIT_EXPANSION_PARAMS, this._onInitExpansionParams);
                    EBG.eventMgr.subscribeToEvent(new EBG.Events.EventSubscription(EBG.Events.EventNames.PAGE_UNLOAD,
                    this._unLoadHandler, this))
                }
        }
        EBG.getFeatureFlagValue(b.ffs, "CFF_CloseAdPart") && c()
    })
} catch (e$$35) {
    ebO.extensionHooks = tempExtensionHook
}
tempExtensionHook = ebO.extensionHooks;
try {
    ebO.extensionHooks.splice(0, 0, function(a, b) {
        if (!EBG.getFeatureFlagValue(b.ffs, "CFF_DynamicExpansion"))
            a.expandDynamic = 0
    })
} catch (e$$36) {
    ebO.extensionHooks = tempExtensionHook
}
tempExtensionHook = ebO.extensionHooks;
try {
    ebO.extensionHooks.splice(0, 0, function(a, b) {
        function c() {
            b.adConfig.UiVz=!1;
            EBG.Initializer._initServingMode = function(a) {
                var b = this._getAdClass(a);
                a.requiresIframeBust = b.requiresIframeBust;
                var c = EBGInfra.isDefined(EBG.adaptor.serving) ? EBG.adaptor.serving.detectServingMode(!0): null;
                if (b.requiresIframeBust) {
                    if (!a.ifrm || a.soi)
                        a.ifrm = 0;
                    if (a.innerIframe)
                        a.ifrm = EBG.Adaptors.ServingMode.INNER_IFRAME;
                    EBG.adaptor.initServingMode(a.ifrm, !1, c)
                } else if (a.ifrm = 0, b != EBG.Ads.StdBanner && (EBG.adaptor.initServingMode(a.ifrm,
                !b.requiresIframeBust, c), c == EBG.Adaptors.ServingMode.FRIENDLY_IFRAME))
                    try {
                        document.close()
                } catch (d) {}
                if (EBG.adaptor.inPlacementIframe() ||!a.innerIframe && c == EBG.Adaptors.ServingMode.IFRAME && b != EBG.Ads.StdBanner&&!EBG.adaptor.isSafeFrame())
                    a.ifrm = 1, b = new EBG.Events.EventSubscription(EBG.Events.EventNames.AIE_LOADED, this._handleAieLoad, this), b.dispatcherFilters = {
                        "_adConfig.rnd": a.rnd,
                        "_adConfig.templateName": a.tn
                    }, b.timing = EBG.Events.EventTiming.BEFORE, EBG.eventMgr.subscribeToEvent(b), EBG.adaptor.serving.handleAieServing(a)
            };
            if (EBG.Adaptors.ServingMgr.prototype)
                EBG.Adaptors.ServingMgr.prototype.checkAie = function(a, c, d) {
                    d.ebO = EBG.cloneObj(a);
                    EBG.isDefinedNotNull(EBG.iframeLocation) ? c.apply(d, [JSON.stringify({
                        iflExists: 1,
                        iflCheck: 0
                    })]) : EBG.isDefinedNotNull(b.aiE) && EBG.isDefinedNotNull(b.aiE.iflExists) ? c.apply(d, [JSON.stringify(b.aiE)]) : (a = this._ebGetHostName(document.referrer), "" == a ? c.apply(d) : EBG.adaptor.getDataFromRemoteServer(ebPtcl + b.bs + this.aieServerRequestPrefix + a + this.aieServerRequestPrefixVersion, c, d, !0, !1) || c.apply(d,
                    [JSON.stringify({
                        iflExists: 1,
                        iflCheck: 0
                    })]))
                }, EBG.Adaptors.ServingMgr.prototype.handleAieServing = function(a) {
                    this.checkAie(a, this._handleAddInEyeServerResponse, this)
                }, EBG.Adaptors.ServingMgr.prototype._handleAddInEyeServerResponse = function(a, b) {
                    var c;
                    try {
                        c=!b && EBG.isDefinedNotNull(a) ? JSON.parse(a) : {
                            iflExists: 0,
                            iflCheck: 1
                        }
                    } catch (d) {
                        c = {
                            iflExists: 0,
                            iflCheck: 1
                        }
                    }
                    this.ebO.aiE = c;
                    EBGInfra.isDefined(EBG.adaptor.serving) && EBG.adaptor.serving.detectServingMode(!0);
                    if (this.ebO.requiresIframeBust)
                        if (c && c.iflExists)
                            this.insertInnerIframe(this.ebO.phid,
                            c.iflCheck ? EBG.Adaptors.IframeMode.SERVEANDVERIFY : EBG.Adaptors.IframeMode.SERVE);
                        else {
                            this.ebO.ifrm = 0;
                            this.ebO.adConfig.showAieDefaultImage = 1;
                            var i = new EBG.Events.Event(EBG.Events.EventNames.AIE_LOADED);
                            i.eventData = {
                                loadDefault: this.ebO.adConfig.showAieDefaultImage,
                                currentResponse: this.ebO
                            };
                            i.timing = EBG.Events.EventTiming.BEFORE;
                            EBG.eventMgr.dispatchEvent(i);
                            c.iflCheck && this.insertInnerIframe(this.ebO.phid, EBG.Adaptors.IframeMode.VERIFY)
                        } else 
                            this.ebO.ifrm = 0, i = new EBG.Events.Event(EBG.Events.EventNames.AIE_LOADED),
                            i.eventData = {
                                loadDefault: !0,
                                currentResponse: this.ebO
                            }, i.timing = EBG.Events.EventTiming.BEFORE, EBG.eventMgr.dispatchEvent(i), c.iflCheck && this.insertInnerIframe(this.ebO.phid, EBG.Adaptors.IframeMode.VERIFY)
                        };
            if (EBG.RichModules.VisibilityManager) {
                var a = function() {
                    return !0
                };
                EBG.RichModules.BasicVisibilityProvider.prototype.shouldReportRecordable = a;
                EBG.RichModules.GeometricVisibilityProvider.prototype.shouldReportRecordable = a;
                EBG.RichModules.GeometricVisibilityProvider._isAvailable = function(a) {
                    return a.actualServingMode !=
                    EBG.Adaptors.ServingMode.IFRAME || EBG.adaptor.serving.servingMode == EBG.Adaptors.ServingMode.INNER_IFRAME
                };
                EBG.RichModules.MouseVisibilityProvider.prototype.shouldReportRecordable = a;
                EBG.RichModules.MouseVisibilityProvider.prototype.shouldReportRecordable = a;
                EBG.RichModules.GridVisibilityProvider.prototype.shouldReportRecordable = a;
                EBG.RichModules.FlashVisibilityProvider.prototype.shouldReportRecordable = a;
                EBG.RichModules.SafeFrameVisibilityProvider.prototype.shouldReportRecordable = a;
                EBG.RichModules.FFVisibilityProvider.prototype.shouldReportRecordable =
                a;
                EBG.RichModules.VisibilityManager.prototype._availableVisibilityProviders = [EBG.RichModules.GeometricVisibilityProvider, EBG.RichModules.SafeFrameVisibilityProvider, EBG.RichModules.AddingEyeProvider, EBG.RichModules.MouseVisibilityProvider, EBG.RichModules.GridVisibilityProvider, EBG.RichModules.FlashVisibilityProvider, EBG.RichModules.FFVisibilityProvider];
                a = EBG.RichModules.VisibilityManager.prototype;
                EBG.RichModules.VisibilityManager = function(a, b) {
                    this.adConfig = a;
                    this._resObjId = b;
                    this.actualServingMode =
                    this.adConfig.actualServingMode;
                    this._averageLastCalcTime = (new Date).getTime();
                    if (this._visibilityProvider = this._getVisibilityProvider(this._resObjId, this.adConfig))
                        if (this._initializeVisibilityData(), this._subscribeToEvents(), this.adConfig.adStarted)
                            this._visibilityProvider.shouldReportRecordable() && this._reportVisibilityRecordable(), this._visibilityProvider.start();
                        else {
                            var c = new EBG.Events.EventSubscription(EBG.Events.EventNames.AD_START, function() {
                                this._visibilityProvider.shouldReportRecordable() &&
                                this._reportVisibilityRecordable();
                                this._visibilityProvider.start()
                            }, this);
                            c.timing = EBG.Events.EventTiming.ONTIME;
                            EBG.eventMgr.subscribeToEvent(c)
                        }
                };
                EBG.RichModules.VisibilityManager.ThreholdType = {
                    IAB: 0,
                    Agency: 1,
                    Advertiser: 2
                };
                EBG.RichModules.VisibilityManager.VisibilityPollingTimer = 1E3;
                EBG.RichModules.VisibilityManager.prototype = a
            }
        }
        EBG.getFeatureFlagValue(b.ffs, "CFF_RemoveUivz") && c()
    })
} catch (e$$38) {
    ebO.extensionHooks = tempExtensionHook
}
EBG.declareNamespace("Initializer");
EBG.Initializer = {
    initialize: function() {
        var a = null, b;
        if (!(void 0 !== b && b))
            a = EBG.Initializer._getCurrentServerResponse(a), EBG.reporter = EBG.reporter || new EBG.Reporter.ServerReporter(a), EBG.Initializer._initGlobals(a), EBG.Initializer._callExtensionHooks(a), EBG.Initializer._initAdaptor(a), EBG.Initializer._initManagers(a), EBG.Initializer._initDisplayAd(a);
        return a
    },
    _initManagers: function(a) {
        var b = new EBG.Events.Event(EBG.Events.EventNames.INIT_MANAGERS);
        b.eventData = {
            "_adConfig.rnd": a.rnd
        };
        b.timing = EBG.Events.EventTiming.BEFORE;
        EBG.eventMgr.dispatchEvent(b);
        EBG.Initializer._initInteractionManager();
        EBG.Initializer._initAnimationManager();
        EBG.Initializer._initPositioningHelper();
        b.timing = EBG.Events.EventTiming.ONTIME_AND_AFTER;
        EBG.eventMgr.dispatchEvent(b)
    },
    _initDisplayAd: function(a) {
        EBG.Initializer._updateAdConfig(a);
        if (EBG.Initializer._shouldInitAd(a)) {
            if (!EBG.isDefined(EBG.adaptor.getDisplayWin().EBG))
                EBG.adaptor.getDisplayWin().EBG = EBG;
            EBG.Initializer._initAd(a)
        }
    },
    _InitAdPreGlobals: function(a) {
        try {
            var b = EBG.adaptor.getPageWin();
            if (!b.gEbPageGUID)
                b.gEbPageGUID = a.adConfig.rnd;
            EBG.pageGUID = b.gEbPageGUID
        } catch (c) {
            EBG.pageGUID = a.adConfig.rnd
        }
    },
    _shouldInitAd: function(a) {
        return a.innerIframe || 0 == a.ifrm||-1 == a.ifrm && EBG.adaptor.serving && EBG.adaptor.serving.servingMode != EBG.Adaptors.ServingMode.IFRAME
    },
    _getCurrentServerResponse: function() {
        for (var a = 0, b; a < ebOArr.length;) {
            if ((b = ebOArr[a]) && this._getAdClass(b)) {
                ebOArr.splice(a, 1);
                break
            }
            a++
        }
        return b
    },
    _initGlobals: function(a) {
        var b = navigator.userAgent.toLowerCase();
        EBG.isOfflineDemo =
        EBG.isGlobalDef("gEbfOfflineDemo") ? gEbfOfflineDemo : !1;
        EBG.resourcePath = ebResourcePath;
        a.adConfig.resourcePath = ebResourcePath;
        EBG.sms = a.sms ? a.sms : "";
        EBG.fcsVirtualPath = a.fvp ? a.fvp : "";
        EBG.pluId = a.pi;
        EBG.dataCapture = EBG.bs = a.bs;
        EBG.protocol = ebPtcl;
        EBG.reportPageVer = a.rpv;
        EBG.html5Ver = a.html5v;
        EBG.flashPixelVer = a.vfp;
        EBG.intReportTimeout = EBG.isDefined(a.irt) ? a.irt : null;
        EBG.isMSNMessenger = ( - 1 < b.indexOf("msn messenger")||-1 < b.indexOf("windows live messenger")) && window == parent;
        EBG.isIMBanner = EBG.isGlobalDef("gfEbExpBanerIM") ?
        gfEbExpBanerIM : EBG.isGlobalDef("gfEbExpBannerIM") ? gfEbExpBannerIM : !1;
        EBG.isPreview=!!a.pr;
        EBG.isInWorkshop = EBG.isGlobalDef("gEbFlyLocal") ? gEbFlyLocal : !1;
        EBG.iframeLocation = a.ifl ? a.ifl : EBG.isGlobalDef("gstrEbIframeLocation") ? gstrEbIframeLocation : void 0;
        EBG.minZIndex = a.z ? a.z : EBG.isGlobalDef("gnEbMinZIndex") ? gnEbMinZIndex : 1E4;
        EBG.eyeDivRefElement = EBG.isGlobalDef("gEbEyeDivRefElement") ? gEbEyeDivRefElement : !1;
        EBG.eventMgr = EBG.eventMgr || new EBG.Events.EventManager;
        EBG.ads = EBG.ads || {};
        EBG.serverResponses =
        EBG.serverResponses || {};
        b = a.adConfig.adHtmlPath;
        if (EBG.isDefinedNotNull(b) && EBG.isDefinedNotNull(a.h5mi))
            EBG.adKitData = {
                paths: {
                    cachedScript: ebBigS,
                    nonCachedScript: ebPtcl + a.sms,
                    folderRoot: ebResourcePath + b.substring(0, b.lastIndexOf("/") + 1)
                },
                version: a.h5mi.adkitversion
            }
    },
    _initServingMode: function(a) {
        var b = this._getAdClass(a);
        a.requiresIframeBust = b.requiresIframeBust;
        var c = EBGInfra.isDefined(EBG.adaptor.serving) ? EBG.adaptor.serving.detectServingMode(!0): null;
        if (b.requiresIframeBust) {
            if (a.innerIframe)
                a.ifrm =
                EBG.Adaptors.ServingMode.INNER_IFRAME;
            if (!a.ifrm || a.soi)
                a.ifrm = 0;
            if (EBG.getFeatureFlagValue(a.ffs, "sf") && EBG.adaptor.isSafeFrame())
                a.ifrm = 0;
            EBG.adaptor.initServingMode(a.ifrm, !1, c);
            if (EBG.adaptor.inPlacementIframe())
                b = new EBG.Events.EventSubscription(EBG.Events.EventNames.AIE_LOADED, this._handleAieLoad, this), b.dispatcherFilters = {
                    "_adConfig.rnd": a.rnd
                }, b.timing = EBG.Events.EventTiming.BEFORE, EBG.eventMgr.subscribeToEvent(b), EBG.adaptor.serving.handleAieServing(a)
        } else if (a.ifrm = 0, b != EBG.Ads.StdBanner) {
            EBG.adaptor.initServingMode(a.ifrm,
            !b.requiresIframeBust, c);
            if (c == EBG.Adaptors.ServingMode.FRIENDLY_IFRAME) {
                a.adConfig.UiVz=!1;
                try {
                    document.close()
                } catch (d) {}
            }
            if (c == EBG.Adaptors.ServingMode.SCRIPT)
                a.adConfig.UiVz=!1
        } else 
            a.adConfig.UiVz=!1
    },
    _handleAieLoad: function(a) {
        a.eventData.loadDefault && a.eventData.currentResponse.tn != EBG.adTypes.VisibilityAd && (EBG.Initializer._initManagers(a.eventData.currentResponse), EBG.Initializer._initDisplayAd(a.eventData.currentResponse))
    },
    _callExtensionHooks: function(a) {
        if (a.extensionHooks) {
            a.adConfig.rnd =
            a.rnd;
            for (a.adConfig.uid = EBG.format("{0}_{1}", a.adConfig.adId, a.adConfig.rnd); 0 !== a.extensionHooks.length;)
                a.extensionHooks.pop().apply(null, [a.adConfig, a])
        }
    },
    getRichestAdaptor: function() {
        for (var a = [EBG.Adaptors.StdWebAdaptor, EBG.Adaptors.WebAdaptor], b = a.length - 1; 0 <= b; b--)
            if (a[b])
                return a[b]
    },
    getRichestInteractionManager: function() {
        for (var a = [EBG.Interactions.StdInteractionManager, EBG.Interactions.InteractionManager], b = a.length - 1; 0 <= b; b--)
            if (a[b])
                return a[b]
    },
    _initAdaptor: function(a) {
        var b = this.getRichestAdaptor(),
        c = new EBG.Events.Event(EBG.Events.EventNames.CREATE_ADAPTOR);
        c.eventData = {
            currentClass: b
        };
        c.timing = EBG.Events.EventTiming.BEFORE;
        EBG.eventMgr.dispatchEvent(c);
        if ("undefined" == typeof EBG.adaptor || EBG.adaptor.constructor.toString() != c.eventData.currentClass.toString())
            b = new c.eventData.currentClass, EBG.adaptor = b;
        c.timing = EBG.Events.EventTiming.ONTIME_AND_AFTER;
        EBG.eventMgr.dispatchEvent(c);
        EBG.adaptor.initInnerModules(a.plt, a.bt, a.bv, a.dt, a.bc);
        this._initServingMode(a);
        EBG.adaptor.registerSpecialBrowserEvents();
        EBG.eventMgr.attachToAdaptor()
    },
    _initInteractionManager: function() {
        newEvent = new EBG.Events.Event(EBG.Events.EventNames.CREATE_INT_MGR);
        newEvent.eventData = {
            currentClass: this.getRichestInteractionManager()
        };
        newEvent.timing = EBG.Events.EventTiming.BEFORE;
        EBG.eventMgr.dispatchEvent(newEvent);
        if ("undefined" == typeof EBG.intMgr || EBG.intMgr.constructor.toString() != newEvent.eventData.currentClass.toString()) {
            var a = new newEvent.eventData.currentClass;
            EBG.intMgr = a
        }
        newEvent.timing = EBG.Events.EventTiming.ONTIME_AND_AFTER;
        EBG.eventMgr.dispatchEvent(newEvent)
    },
    _initAnimationManager: function() {
        try {
            if (EBG.RichModules && EBG.RichModules.AnimationManager) {
                newEvent = new EBG.Events.Event(EBG.Events.EventNames.CREATE_ANIM_MGR);
                newEvent.eventData = EBG.RichModules.AnimationManager;
                newEvent.timing = EBG.Events.EventTiming.BEFORE;
                EBG.eventMgr.dispatchEvent(newEvent);
                if (!EBG.animationMgr)
                    EBG.animationMgr = new newEvent.eventData;
                newEvent.timing = EBG.Events.EventTiming.ONTIME_AND_AFTER;
                EBG.eventMgr.dispatchEvent(newEvent)
            }
        } catch (a) {}
    },
    _initPositioningHelper: function() {
        try {
            if (EBG.Positioning &&
            EBG.Positioning.PositionManager) {
                newEvent = new EBG.Events.Event(EBG.Events.EventNames.CREATE_POSITIONING_HELPER);
                newEvent.eventData = EBG.Positioning.PositionManager;
                newEvent.timing = EBG.Events.EventTiming.BEFORE;
                EBG.eventMgr.dispatchEvent(newEvent);
                if (!EBG.posHelper)
                    EBG.posHelper = new newEvent.eventData;
                newEvent.timing = EBG.Events.EventTiming.ONTIME_AND_AFTER;
                EBG.eventMgr.dispatchEvent(newEvent)
            }
        } catch (a) {}
    },
    _initAd: function(a) {
        try {
            var b = this._getAdClass(a);
            newEvent = new EBG.Events.Event(EBG.Events.EventNames.CREATE_AD);
            newEvent.eventData = {
                currentClass: b,
                adConfig: a.adConfig
            };
            newEvent.timing = EBG.Events.EventTiming.BEFORE;
            newEvent.dispatcher = {
                _adConfig: {
                    rnd: a.adConfig.rnd,
                    uid: a.adConfig.uid
                }
            };
            EBG.eventMgr.dispatchEvent(newEvent);
            EBG.Initializer._InitAdPreGlobals(a);
            new newEvent.eventData.currentClass(a.adConfig);
            newEvent.timing = EBG.Events.EventTiming.ONTIME_AND_AFTER;
            EBG.eventMgr.dispatchEvent(newEvent);
            EBG.adaptor.getDisplayWin().EBG.ads[a.adConfig.uid] || (EBG.adaptor.getDisplayWin().EBG.ads[a.adConfig.uid] = EBG.ads[a.adConfig.uid]);
            if (EBGInfra.isDefined(EBG.BWDetection) && EBGInfra.isDefined(window.gEBMainWindow) && EBGInfra.isDefined(gEBMainWindow.EBP) && EBGInfra.isDefined(gEBMainWindow.EBP.ebBW) && EBGInfra.isDefined(gEBMainWindow.EBP.ebBW.checked))
                EBG.BWDetection.speed = gEBMainWindow.EBP.ebBW.speed, EBG.BWDetection.checked=!0;
            if (a.adConfig.pckAssets) {
                var b = 0, c;
                for (c in a.adConfig.pckAssets)
                    a.adConfig.pckAssets.hasOwnProperty(c) && b++;
                if (0 < b&&!EBG.BWDetection.checking&&!EBG.BWDetection.checked)
                    a.adConfig.bwApplied=!0, EBG.BWDetection.init();
                a.adConfig.BWD = EBG.BWDetection
            }
        } catch (d) {
            c = EBG.reporter.formatCallStack(d.stack), a = {
                msg: escape(d.message),
                pli: a.adConfig.placementId,
                adid: a.adConfig.adId,
                sid: a.adConfig.sID,
                sm: a.adConfig.actualServingMode,
                tn: a.adConfig.templateName,
                stk: escape(c),
                cwu: escape(EBG.adaptor.getDisplayWin().document.location.href),
                cwr: escape(EBG.adaptor.getDisplayWin().document.referrer)
            }, EBG.reporter.report(a)
        }
    },
    _getAdClass: function(a) {
        var b;
        switch (a.tn) {
        case EBG.adTypes.RichBannerHtml5:
            b = EBG.Ads.RichBannerHtml5;
            break;
        case EBG.adTypes.SEBannerHtml5:
            b = EBG.Ads.SEBannerHtml5;
            break;
        case EBG.adTypes.ExpBannerHtml5:
            b = EBG.Ads.ExpBannerHtml5;
            break;
        case EBG.adTypes.StdBanner:
            b = a.IABBV || a.IABEV ? EBG.Ads.StdBannerEx : EBG.Ads.StdBanner;
            break;
        case EBG.adTypes.Banner:
            b = EBG.Ads.RichBanner;
            break;
        case EBG.adTypes.SingleExpBanner:
            b = EBG.Ads.SingleExpBanner;
            break;
        case EBG.adTypes.ExpBanner:
            b = EBG.Ads.ExpBanner;
            break;
        case EBG.adTypes.VisibilityAd:
            b = EBG.Ads.VisibilityAd;
            break;
        case EBG.adTypes.FloatingAd:
            b = EBG.Ads.Floating;
            break;
        case EBG.adTypes.FloatingAdWithRem:
            b =
            EBG.Ads.FloatingWithReminder;
            break;
        case EBG.adTypes.TrackingAd:
            b = EBG.Ads.TrackingAd
        }
        return b
    },
    _updateAdConfig: function(a) {
        a.adConfig.rnd = a.rnd;
        a.adConfig.uid = EBG.format("{0}_{1}", a.adConfig.adId, a.adConfig.rnd);
        EBG.serverResponses[a.adConfig.uid] = a;
        a.adConfig.placeHolderId = a.phid;
        a.adConfig.sUrlTokens = a.ut;
        if (a.element_id)
            a.adConfig.element_id = a.element_id;
        a.adConfig.adStarted=!1;
        var b = EBG.adaptor.getPageWin();
        if (b = EBG.getPageUrl(b))
            a.adConfig.ebReferrer = b;
        a.adConfig.actualServingMode = EBGInfra.isDefined(EBG.adaptor.serving) ?
        EBG.adaptor.serving.detectServingMode(!0) : null;
        a.adConfig.showSinglePanel = a.adConfig.expandDynamic ? 1 : a.adConfig.showSinglePanel;
        if (!a.adConfig.clickTrackingUrls)
            a.adConfig.clickTrackingUrls = [];
        if (a.ncu)
            a.adConfig.clickTrackingUrls.push(a.ncu), a.adConfig.ncu = a.ncu;
        if (!a.adConfig.defaultImpTrackingUrls)
            a.adConfig.defaultImpTrackingUrls = [], a.adConfig.defaultClickTrackingUrls = [];
        if (a.dctu)
            a.adConfig.defaultClickTrackingUrls = a.dctu;
        if (a.ditu)
            a.adConfig.defaultImpTrackingUrls = a.ditu;
        if (a.delayedImpParams)
            a.adConfig.delayedImpParams =
            a.delayedImpParams;
        a.adConfig.impressionTrackingURLs = [];
        if (a.itu && 0 < a.itu.length)
            a.adConfig.impressionTrackingURLs = a.itu;
        "undefined" != typeof gEbBAd && gEbBAd && (gEbBAd.playRS && gEbBAd.playRS.strNUrl && a.adConfig.impressionTrackingURLs.push(gEbBAd.playRS.strNUrl), gEbBAd.strNImpUrl && a.adConfig.impressionTrackingURLs.push(gEbBAd.strNImpUrl));
        a.adConfig.imageOnly=!1;
        a.adConfig.page = a.p;
        a.adConfig.massVersioning = {
            targetAudienceId: a.ta && "-1" != a.ta ? a.ta: "",
            deliveryGroupId: a.dg && "-1" != a.dg ? a.dg: "",
            subDeliveryGroupId: a.sdg &&
            "-1" != a.sdg ? a.sdg: "",
            adVersions: a.av ? a.av: "",
            defaultAdVersion: a.avd ? a.avd: "",
            adBasePath: a.abp ? a.abp: "",
            massVersionFolderDivider: a.mvfd ? a.mvfd: 0
        };
        if (a.soi)
            a.adConfig.showOnlyImage = a.soi, a.adConfig.massVersioning.adVersions = a.adConfig.massVersioning.defaultAdVersion;
        a.adConfig.reportDelayedImpression = a.rdi ? a.rdi : 0;
        a.adConfig.defaultImageReason = a.dir ? a.dir : "";
        a.adConfig.mobileSDK = a.sdk ? a.sdk : "";
        a.adConfig.isOfflineDemo = EBG.isOfflineDemo;
        if ("undefined" == typeof a.adConfig.openWindow)
            a.adConfig.openWindow =
            !0;
        this._updateAdConfigToHandleOpenWindow(a);
        a.adConfig.bigSDir = unescape(ebBigS);
        a.adConfig.imagesDir = unescape(ebBigS) + "Res/Images" + a.imgv + "/";
        a.adConfig.arrOnStartDnlEvents = a.osde;
        a.adConfig.arrOnPlayEvents = a.ope;
        EBG.adaptor.optOut = a.adConfig.optOut = a.oo ? a.oo : 0;
        EBG.adaptor.histLen = a.adConfig.histLen = a.hl ? a.hl : 30;
        a.adConfig.sPublisherPlacementId = a.ppi ? a.ppi : "";
        a.adConfig.width = a.adConfig.width ? a.adConfig.width : "";
        a.adConfig.height = a.adConfig.height ? a.adConfig.height : "";
        a.adConfig.width = a.w ? a.w : a.adConfig.width;
        a.adConfig.height = a.h ? a.h : a.adConfig.height;
        a.adConfig.shouldCollectUrl = a.cu ? a.cu : 0;
        a.adConfig.sID = a.sid ? a.sid : "";
        a.adConfig.dlm = a.dlm ? a.dlm : 3;
        a.adConfig.testImp = a.t?!0 : !1;
        a.adConfig.usercookie = a.usercookie ? a.usercookie : "";
        a.adConfig.visibility = {};
        a.adConfig.visibility.mode = EBG.VisibilityMode.DEFAULT_MODE;
        if (a.IABEV)
            a.adConfig.visibility.mode = EBG.VisibilityMode.ENHANCED_MODE;
        else if (a.IABBV)
            a.adConfig.visibility.mode = EBG.VisibilityMode.BASIC_MODE;
        a.adConfig.visibility.iabMinSurface = a.IABMS;
        a.adConfig.visibility.iabMinDuration =
        a.IABMD;
        a.adConfig.visibility.agencyMinSurface = a.AgMS ? a.AgMS : a.IABMS;
        a.adConfig.visibility.agencyMinDuration = a.AgMD ? a.AgMD : a.IABMD;
        a.adConfig.visibility.advertiserMinSurface = a.AdMS ? a.AdMS : a.IABMS;
        a.adConfig.visibility.advertiserMinDuration = a.AdMD ? a.AdMD : a.IABMD;
        if (EBGInfra.isDefined(a.adConfig.interactionsToReport))
            a.adConfig.interactionsToReport[EBG.Interactions.SystemInts.AD_START] = EBG.Interactions.SystemInts.AD_START;
        if (EBGInfra.isDefined(a.adConfig.interactionsToReport) && a.adConfig.interactionsToReport.visibility)
            a.adConfig.interactionsToReport[EBG.Interactions.SystemInts.VISIBILITY_RECORDABLE] =
            EBG.Interactions.SystemInts.VISIBILITY_RECORDABLE, a.adConfig.interactionsToReport[EBG.Interactions.SystemInts.VISIBILITY_AGENCY_RECORDABLE] = EBG.Interactions.SystemInts.VISIBILITY_AGENCY_RECORDABLE, a.adConfig.interactionsToReport[EBG.Interactions.SystemInts.VISIBILITY_ADVERTISER_RECORDABLE] = EBG.Interactions.SystemInts.VISIBILITY_ADVERTISER_RECORDABLE, a.adConfig.interactionsToReport[EBG.Interactions.SystemInts.VISIBILITY_ADVERTISER] = EBG.Interactions.SystemInts.VISIBILITY_ADVERTISER, a.adConfig.interactionsToReport[EBG.Interactions.SystemInts.VISIBILITY_AGENCY] =
            EBG.Interactions.SystemInts.VISIBILITY_AGENCY, a.adConfig.interactionsToReport[EBG.Interactions.SystemInts.VISIBILITY_IAB] = EBG.Interactions.SystemInts.VISIBILITY_IAB, a.adConfig.interactionsToReport[EBG.Interactions.SystemInts.VISIBILITY_ADVERTISER_DURATION] = EBG.Interactions.SystemInts.VISIBILITY_ADVERTISER_DURATION, a.adConfig.interactionsToReport[EBG.Interactions.SystemInts.VISIBILITY_AGENCY_DURATION] = EBG.Interactions.SystemInts.VISIBILITY_AGENCY_DURATION, a.adConfig.interactionsToReport[EBG.Interactions.SystemInts.VISIBILITY_AVG_AD_SURFACE] =
            EBG.Interactions.SystemInts.VISIBILITY_AVG_AD_SURFACE, a.adConfig.interactionsToReport[EBG.Interactions.SystemInts.VISIBILITY_AVG_SCREEN_SHARE] = EBG.Interactions.SystemInts.VISIBILITY_AVG_SCREEN_SHARE;
        if (EBGInfra.isDefined(a.adConfig.defaultFlashName)&&!EBGInfra.isDefined(a.adConfig.defaultFlashPath))
            a.adConfig.defaultFlashPath = a.adConfig.imagesDir + "BannerAssets/" + a.adConfig.defaultFlashName;
        a.adConfig.offsetX = a.offsetX ? a.offsetX : 0;
        a.adConfig.offsetY = a.offsetY ? a.offsetY : 0;
        a.adConfig.adChoice = {};
        a.adConfig.adChoice.certificationProgram =
        a.AcCP;
        a.adConfig.adChoice.customUrl = a.CAcURL;
        a.adConfig.adChoice.includeMarker = a.adConfig.AcIncludeMarker;
        a.adConfig.adChoice.iconPosition = parseInt(a.adConfig.AcIconPosition);
        if (a.wm)
            a.adConfig.wmode = a.wm.toLowerCase();
        if (!EBGInfra.isDefined(a.adConfig.pushDownConfig) && "none" != a.disp)
            a.adConfig.display = EBGInfra.isDefined(a.disp) ? a.disp : "inline";
        a.adConfig.disableAutoExpand = EBGInfra.isDefined(a.dex) ? a.dex : 0;
        a.adConfig.aiE = a.aiE ? a.aiE : {};
        a.adConfig.appPool = a.appPool ? a.appPool : "BurstingPipe";
        a.adConfig.moduleInfo =
        a.h5mi ? a.h5mi : {};
        try {
            if ("undefined" != typeof gEbBAd && gEbBAd) {
                if (gEbBAd.panelsWMode)
                    a.adConfig.panelsWMode = gEbBAd.panelsWMode;
                if (gEbBAd.strWmode)
                    a.adConfig.wmode = gEbBAd.strWmode.toLowerCase()
                }
        } catch (c) {}
        if (EBG.getFeatureFlagValue(EBG.serverResponses[a.adConfig.uid].ffs, "sf") && EBG.adaptor.isSafeFrame()) {
            a.adConfig.isSafeFrame=!0;
            a.adConfig.expandDynamic = 0;
            for (var d in a.adConfig.panels) {
                b = a.adConfig.panels[d];
                try {
                    var e = $sf.ext.geom();
                    if (b.posType == EBG.PanelPositionType.PAGE_RELATIVE_PERCENTAGE || b.posType ==
                    EBG.PanelPositionType.VIEWPORT_RELATIVE_PERCENTAGE)
                        b.xPos = Math.round((e.win.w - b.width) * (b.xPos / 100)), b.yPos = Math.round((e.win.h - b.height) * (b.yPos / 100));
                    b.posType != EBG.PanelPositionType.BANNER_RELATIVE_PIXELS && (b.xPos -= e.self.l, b.yPos -= e.self.t)
                } catch (g) {
                    b.xPos = 0, b.yPos = 0
                }
                b.posType = EBG.PanelPositionType.BANNER_RELATIVE_PIXELS
            }
        }
    },
    _updateAdConfigToHandleOpenWindow: function(a) {
        a.adConfig.bsPath = EBG.bs;
        a.adConfig.pluId = EBG.pluId;
        a.adConfig.protocol = EBG.protocol;
        if (EBGInfra.isDefined(a.lid))
            a.adConfig.lineId =
            a.lid;
        a.adConfig.isPreview=!!a.pr
    }
};
try {
    var currentResponse = EBG.Initializer.initialize();
    if (currentResponse.adConfig.UiVz&&!currentResponse.requiresIframeBust && "Visibility" != currentResponse.tn) {
        var vizClone = EBG.cloneObj(currentResponse);
        vizClone.tn = vizClone.adConfig.templateName = "Visibility";
        vizClone.ifrm = 2;
        vizClone.soi = 0;
        ebOArr[ebOArr.length] = vizClone;
        var newEbSrc = ebSrc.replace(currentResponse.tn, vizClone.tn), newEbSrc = newEbSrc.replace(/ex(debug|_api|)\.js/ig, ".js"), newScript = document.createElement("SCRIPT");
        newScript.src = newEbSrc;
        vizClone.ebSrc = newEbSrc;
        if (currentResponse.adConfig.adStarted) {
            var target = document.getElementById(vizClone.phid);
            target && target.appendChild(newScript)
        } else {
            var sub = new EBG.Events.EventSubscription(EBG.Events.EventNames.AD_START, function() {
                var a = document.getElementById(vizClone.phid);
                a && a.appendChild(newScript)
            }, this);
            sub.timing = EBG.Events.EventTiming.ONTIME;
            EBG.eventMgr.subscribeToEvent(sub)
        }
    }
} catch (e$$44) {};

