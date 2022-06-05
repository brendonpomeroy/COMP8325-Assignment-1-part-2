
if (brightcove == undefined) {
    var brightcove = {};
    brightcove.getExperience = function() {
        alert("Please import APIModules_all.js in order to use the API.");
    };
}
if (brightcove.experiences == undefined) {
    brightcove.servicesURL = 'http://c.brightcove.com/services';
    brightcove.cdnURL = 'http://admin.brightcove.com';
    brightcove.secureCDNURL = 'https://sadmin.brightcove.com';
    brightcove.secureServicesURL = 'https://secure.brightcove.com/services';
    brightcove.pubHost = 'c.$pubcode$.$zoneprefix$$zone$';
    brightcove.pubSecureHost = 'secure.$pubcode$.$zoneprefix$$zone$';
    brightcove.pubSubdomain = 'ariessaucetown.local';
    brightcove.experiences = {};
    brightcove.experienceObjects = {};
    brightcove.timeouts = {};
    brightcove.flashTimeoutInterval = 10000;
    brightcove.htmlTimeoutInterval = 10000;
    brightcove.experienceNum = 0;
    brightcove.majorVersion = 9;
    brightcove.majorRevision = 0;
    brightcove.minorRevision = 28;
    brightcove.servlet = {
        AS3: "federated_f9",
        HTML: "htmlFederated"
    };
    brightcove.playerType = {
        FLASH: "flash",
        HTML: "html",
        FLASH_IFRAME: "flashIFrame",
        INSTALLER: "installer",
        NO_SUPPORT: "nosupport"
    };
    brightcove.errorCodes = {
        UNKNOWN: 0,
        DOMAIN_RESTRICTED: 1,
        GEO_RESTRICTED: 2,
        INVALID_ID: 3,
        NO_CONTENT: 4,
        UNAVAILABLE_CONTENT: 5,
        UPGRADE_REQUIRED_FOR_VIDEO: 6,
        UPGRADE_REQUIRED_FOR_PLAYER: 7,
        SERVICE_UNAVAILABLE: 8
    };
    brightcove.defaultParam = {};
    brightcove.defaultParam.width = '100%';
    brightcove.defaultParam.height = '100%';
    brightcove.defaultFlashParam = {};
    brightcove.defaultFlashParam.allowScriptAccess = 'always';
    brightcove.defaultFlashParam.allowFullScreen = 'true';
    brightcove.defaultFlashParam.seamlessTabbing = false;
    brightcove.defaultFlashParam.swliveconnect = true;
    brightcove.defaultFlashParam.wmode = 'window';
    brightcove.defaultFlashParam.quality = 'high';
    brightcove.defaultFlashParam.bgcolor = '#999999';
    brightcove.hasActiveX = brightcove.isIE = (window.ActiveXObject != undefined);
    brightcove.userAgent = navigator.userAgent;
    brightcove._queuedAPICalls = [];
    var brightcoveJS = brightcove;
    brightcove.createExperiences = function(pEvent, pElementID) {
        var experiences = [];
        var params;
        var experience;
        var flashSupport = brightcove.checkFlashSupport();
        var htmlSupport = brightcove.checkHtmlSupport();
        if (pElementID != null) {
            experiences.push(document.getElementById(pElementID));
        } else {
            experiences = brightcove.collectExperiences();
        }
        if (brightcove.hasActiveX) {
            params = document.getElementsByTagName('param');
        }
        var urlParams = brightcove.cacheUrlParams();
        var numExperiences = experiences.length;
        for (var i = 0; i < numExperiences; i++) {
            experience = experiences[i];
            experience = brightcove.copyDefaultParams(experience);
            experience = brightcove.copySnippetParams(experience, params);
            experience = brightcove.copyUrlParams(experience, urlParams, numExperiences);
            var playerType = brightcove.determinePlayerType(experience, flashSupport, htmlSupport);
            var secureConnections = false;
            if (playerType == brightcove.playerType.HTML) {
                secureConnections = experience.params.secureHTMLConnections == "true";
            } else {
                secureConnections = experience.params.secureConnections == "true";
            }
            if (playerType == brightcove.playerType.NO_SUPPORT) {
                brightcove.renderInstallGif(experience, secureConnections);
                brightcove.reportUpgradeRequired(experience);
                continue;
            }
            if (playerType == brightcove.playerType.HTML) {
                delete experience.params.linkBaseURL;
            } else {
                if (experience.params.includeAPI && experience.params.templateReadyHandler != null) {
                    experience.params.originalTemplateReadyHandler = experience.params.templateReadyHandler;
                    var handlerName = "templateReadyHandler" + experience.id;
                    brightcove[handlerName] = (function(id) {
                        return function(event) {
                            if (brightcove.internal != null && brightcove.internal._instances[id] != null) {
                                brightcove._addModuleToEvent(id, event);
                            }
                            var player = brightcove.experienceObjects[id];
                            brightcove.callHandlerForPlayer(player, "originalTemplateReadyHandler", event);
                        };
                    })(experience.id);
                    experience.params.templateReadyHandler = 'brightcove["' + handlerName + '"]';
                }
            }
            var file = brightcove.generateRequestUrl(experience, playerType, secureConnections);
            if (document.location.protocol == "http:") {
                var event = 'http://goku.brightcove.com/1pix.gif?';
                var gokuParams = ["dcsuri=/viewer/player_load_req", "playerType=" + playerType, "playerURL=" + encodeURIComponent(document.location || "")];
                var image = brightcove.createElement('image');
                for (var j in experience.params) {
                    gokuParams.push([encodeURIComponent(j) + "=" + encodeURIComponent(experience.params[j])]);
                }
                event += gokuParams.join('&');
                image.src = event;
            }
            brightcove.renderExperience(experience, file, playerType, secureConnections);
        }
    };
    brightcove.collectExperiences = function() {
        var experiences = [];
        var allObjects = document.getElementsByTagName('object');
        var numObjects = allObjects.length;
        for (var i = 0; i < numObjects; i++) {
            if (/\bBrightcoveExperience\b/.test(allObjects[i].className)) {
                if (allObjects[i].type != 'application/x-shockwave-flash') {
                    experiences.push(allObjects[i]);
                }
            }
        }
        return experiences;
    };
    brightcove.cacheUrlParams = function() {
        var urlParams = {};
        urlParams.playerKey = decodeURIComponent(brightcove.getParameter("bckey"));
        urlParams.playerID = brightcove.getParameter("bcpid");
        urlParams.titleID = brightcove.getParameter("bctid");
        urlParams.lineupID = brightcove.getParameter("bclid");
        urlParams.autoStart = brightcove.getParameter("autoStart");
        urlParams.debuggerID = brightcove.getParameter("debuggerID");
        urlParams.forceHTML = brightcove.getParameter("forceHTML");
        urlParams.forceFlashIFrame = brightcove.getParameter("forceFlashIFrame");
        urlParams.debug = brightcove.getParameter("debug");
        urlParams.showNoContentMessage = brightcove.getParameter("showNoContentMessage");
        urlParams.htmlDefaultBitrate = brightcove.getParameter("htmlDefaultBitrate");
        urlParams.linkSrc = brightcove.getParameter("linkSrc");
        return urlParams;
    };
    brightcove.copyDefaultParams = function(experience) {
        if (!experience.params)
            experience.params = {};
        if (!experience.flashParams)
            experience.flashParams = {};
        for (var i in brightcove.defaultParam) {
            experience.params[i] = brightcove.defaultParam[i];
        }
        for (var j in brightcove.defaultFlashParam) {
            experience.flashParams[j] = brightcove.defaultFlashParam[j];
        }
        if (experience.id.length > 0) {
            experience.params.flashID = experience.id;
        } else {
            experience.id = experience.params.flashID = 'bcExperienceObj' + (brightcove.experienceNum++);
        }
        return experience;
    };
    brightcove.copySnippetParams = function(experience, params) {
        if (!brightcove.hasActiveX) {
            params = experience.getElementsByTagName('param');
        }
        var numParams = params.length;
        var param;
        for (var j = 0; j < numParams; j++) {
            param = params[j];
            if (brightcove.hasActiveX && param.parentNode.id != experience.id) {
                continue;
            }
            experience.params[param.name] = param.value;
        }
        if (experience.params.bgcolor != undefined)
            experience.flashParams.bgcolor = experience.params.bgcolor;
        if (experience.params.wmode != undefined)
            experience.flashParams.wmode = experience.params.wmode;
        if (experience.params.seamlessTabbing != undefined)
            experience.flashParams.seamlessTabbing = experience.params.seamlessTabbing;
        return experience;
    };
    brightcove.copyUrlParams = function(experience, urlParams) {
        if (experience.params.autoStart == undefined && urlParams.autoStart != undefined) {
            experience.params.autoStart = urlParams.autoStart;
        }
        if (urlParams.debuggerID != undefined) {
            experience.params.debuggerID = urlParams.debuggerID;
        }
        if (urlParams.forceHTML != undefined && urlParams.forceHTML !== '') {
            experience.params.forceHTML = urlParams.forceHTML;
        }
        if (urlParams.forceFlashIFrame != undefined && urlParams.forceFlashIFrame !== '') {
            experience.params.forceFlashIFrame = urlParams.forceFlashIFrame;
        }
        if (urlParams.debug != undefined && urlParams.debug !== '') {
            experience.params.debug = urlParams.debug;
        }
        if (urlParams.showNoContentMessage != undefined && urlParams.showNoContentMessage != '') {
            experience.params.showNoContentMessage = urlParams.showNoContentMessage;
        }
        if (urlParams.htmlDefaultBitrate != undefined && urlParams.htmlDefaultBitrate !== '') {
            experience.params.htmlDefaultBitrate = urlParams.htmlDefaultBitrate;
        }
        if (urlParams.linkSrc != undefined && urlParams.linkSrc != '') {
            experience.params.linkSrc = urlParams.linkSrc;
        }
        var overrideContent = (urlParams.playerID.length < 1 && urlParams.playerKey.length < 1) || (urlParams.playerID == experience.params.playerID) || (urlParams.playerKey == experience.params.playerKey);
        if (overrideContent) {
            if (urlParams.titleID.length > 0) {
                experience.params.videoID = urlParams.titleID;
                experience.params["@videoPlayer"] = urlParams.titleID;
                experience.params.autoStart = (experience.params.autoStart != "false" && urlParams.autoStart != "false");
            }
            if (urlParams.lineupID.length > 0) {
                experience.params.lineupID = urlParams.lineupID;
            }
        }
        return experience;
    };
    brightcove.determinePlayerType = function(experience, flashSupport, htmlSupport) {
        if (flashSupport == null && htmlSupport == false) {
            return brightcove.playerType.NO_SUPPORT;
        }
        if (experience.params.forceHTML) {
            if (window.console) {
                var message = "The forceHTML parameter was used for the Brightcove player. This value should ONLY be used for";
                message += " development and testing purposes and is not supported in production environments.";
                console.log(message);
            }
            return brightcove.playerType.HTML;
        }
        if (experience.params.forceFlashIFrame || (brightcove.isMetroIE() && flashSupport == null)) {
            return brightcove.playerType.FLASH_IFRAME;
        }
        if (flashSupport != null) {
            if (brightcove.isFlashVersionSufficient(experience, flashSupport)) {
                return brightcove.playerType.FLASH;
            } else {
                return brightcove.playerType.INSTALLER;
            }
        }
        if (htmlSupport) {
            if (brightcove.isSupportedHTMLDevice() || experience.params.htmlFallback) {
                return brightcove.playerType.HTML;
            }
        }
        return brightcove.playerType.NO_SUPPORT;
    };
    brightcove.isFlashVersionSufficient = function(experience, flashSupport) {
        if (flashSupport == null)
            return false;
        var setMajorVersion = false;
        var requestedMajorVersion;
        var requestedMajorRevision;
        var requestedMinorRevision;
        if (experience.params.majorVersion != undefined) {
            requestedMajorVersion = parseInt(experience.params.majorVersion, 10);
            setMajorVersion = true;
        } else {
            requestedMajorVersion = brightcove.majorVersion;
        }
        if (experience.params.majorRevision != undefined) {
            requestedMajorRevision = parseInt(experience.params.majorRevision, 10);
        } else {
            if (setMajorVersion) {
                requestedMajorRevision = 0;
            } else {
                requestedMajorRevision = brightcove.majorRevision;
            }
        }
        if (experience.params.minorRevision != undefined) {
            requestedMinorRevision = parseInt(experience.params.minorRevision, 10);
        } else {
            if (setMajorVersion) {
                requestedMinorRevision = 0;
            } else {
                requestedMinorRevision = brightcove.minorRevision;
            }
        }
        return (flashSupport.majorVersion > requestedMajorVersion || (flashSupport.majorVersion == requestedMajorVersion && flashSupport.majorRevision > requestedMajorRevision) || (flashSupport.majorVersion == requestedMajorVersion && flashSupport.majorRevision == requestedMajorRevision && flashSupport.minorRevision >= requestedMinorRevision));
    };
    brightcove.generateRequestUrl = function(experience, playerType, secureConnections) {
        var file;
        if (playerType == brightcove.playerType.INSTALLER) {
            file = brightcove.cdnURL + "/viewer/playerProductInstall.swf";
            var MMPlayerType = brightcove.hasActiveX ? "ActiveX": "PlugIn";
            document.title = document.title.slice(0, 47) + " - Flash Player Installation";
            var MMdoctitle = document.title;
            file += "?&MMredirectURL=" + window.location + '&MMplayerType=' + MMPlayerType + '&MMdoctitle=' + MMdoctitle;
            brightcove.reportUpgradeRequired(experience);
        } else {
            if (secureConnections) {
                file = brightcove.getPubURL(brightcove.secureServicesURL, brightcove.pubSecureHost, experience.params.pubCode);
            } else {
                file = brightcove.getPubURL(brightcove.servicesURL, brightcove.pubHost, experience.params.pubCode);
            }
            var servlet = (playerType == brightcove.playerType.HTML) ? brightcove.servlet.HTML: brightcove.servlet.AS3;
            file += '/viewer/' + servlet + '?' + brightcove.getOverrides();
            for (var config in experience.params) {
                file += '&' + encodeURIComponent(config) + '=' + encodeURIComponent(experience.params[config]);
            }
        }
        return file;
    };
    brightcove.renderInstallGif = function(experience, secureConnections) {
        var containerID = '_container' + experience.id;
        var container = brightcove.createElement('span');
        if (experience.params.height.charAt(experience.params.height.length - 1) == "%") {
            container.style.display = 'block';
        } else {
            container.style.display = 'inline-block';
        }
        container.id = containerID;
        var cdnURL = secureConnections ? brightcove.secureCDNURL: brightcove.cdnURL;
        var upgradeFlashImage = cdnURL.indexOf('.co.jp') > 0 ? "upgrade_flash_player_kk.gif": "upgrade_flash_player2.gif";
        var linkHTML = "<a href='http://www.adobe.com/go/getflash/' target='_blank'><img src='" + cdnURL + "/viewer/" + upgradeFlashImage + "' alt='Get Flash Player' width='314' height='200' border='0'></a>";
        experience.parentNode.replaceChild(container, experience);
        document.getElementById(containerID).innerHTML = linkHTML;
    };
    brightcove.renderExperience = function(experience, file, playerType, secureConnections) {
        var experienceElement;
        var experienceID = experience.id;
        var container;
        var timeout = brightcove.flashTimeoutInterval;
        if (!(experience.params.playerKey || experience.params.playerID || experience.params.playerId || experience.params.playerid)) {
            if (window.console) {
                console.log("No playerID or playerKey was found for the Brightcove player, so it can not be rendered.");
            }
            return;
        }
        brightcove.experienceObjects[experienceID] = experience;
        var unminified = (brightcove.getParameter("unminified") == "true") || (experience.params.unminified === "true");
        if (experience.params.includeAPI === "true"&&!(brightcove._apiRequested || brightcove.api)) {
            var source = "/js/api/";
            if (unminified) {
                source += "unminified/";
            }
            source += "SmartPlayerAPI.js";
            var apiInclude = brightcove.createElement('script');
            apiInclude.type = "text/javascript";
            var cdnURL = secureConnections ? brightcove.secureCDNURL: brightcove.cdnURL;
            apiInclude.src = cdnURL + source;
            experience.parentNode.appendChild(apiInclude);
            brightcove._apiRequested = true;
        }
        file += "&startTime=" + new Date().getTime();
        if (playerType === brightcove.playerType.HTML) {
            timeout = brightcove.htmlTimeoutInterval;
            file += "&refURL=" + (window.document.referrer ? window.document.referrer : 'not available');
            if (unminified) {
                file += "&unminified=true";
            }
            experienceElement = brightcove.createIFrame(experience);
            experience.parentNode.replaceChild(experienceElement, experience);
            brightcove.experiences[experienceID] = experienceElement;
            experience.element = experienceElement;
            if (experience.params.videoID || experience.params.videoId) {
                file += "&" + encodeURIComponent("@videoPlayer") + "=" + encodeURIComponent(experience.params.videoID || experience.params.videoId);
            }
            experienceElement.src = file;
        } else if (playerType === brightcove.playerType.FLASH_IFRAME) {
            var currentCDN = secureConnections ? brightcove.secureCDNURL: brightcove.cdnURL;
            var iframeURL = currentCDN + "/js/flash_iframe.html?parentPage=" + window.location.toString().split("?")[0];
            iframeURL += '&currentCDN=' + currentCDN;
            if (unminified) {
                iframeURL += '&unminified=' + unminified;
            }
            experienceElement = brightcove.createIFrame(experience);
            experience.parentNode.replaceChild(experienceElement, experience);
            brightcove.experiences[experienceID] = experienceElement;
            experience.element = experienceElement;
            experienceElement.src = iframeURL;
            window.addEventListener('message', function(event) {
                if (event.origin.split("/")[2] !== currentCDN.split("/")[2])
                    return;
                var data = JSON.parse(event.data);
                if (data != "bcIframeInitialized") {
                    return;
                }
                var playerConfig;
                if (brightcove.hasActiveX) {
                    experience.flashParams.movie = file;
                    var flashEmbedStr = brightcove.getFlashEmbedString(experience, secureConnections);
                    playerConfig = {
                        activeX: flashEmbedStr,
                        height: experience.params.height,
                        id: '_container' + experience.id,
                        file: file
                    };
                } else {
                    playerConfig = brightcove.getFlashObjectParams(experience, file);
                }
                var playerConfigStr = JSON.stringify(playerConfig);
                experienceElement.contentWindow.postMessage(playerConfigStr, currentCDN);
            }, false);
            window.addEventListener('message', function(event) {
                if (event.origin.split("/")[2] !== currentCDN.split("/")[2])
                    return;
                var data = JSON.parse(event.data);
                if (data.api && brightcove.internal && brightcove.internal._setAPICallback) {
                    if (data.api == "apiCallback") {
                        brightcove.internal._setAPICallback(data.pid, data.callback, iframeURL);
                    } else if (data.api == "loadEvent") {
                        window[data.callback](data.event);
                    } else if (data.api == "onTemplateReadyEvent") {
                        brightcove[data.callback](data.event);
                    }
                }
            }, false);
        } else {
            if (brightcove.hasActiveX) {
                experience.flashParams.movie = file;
                var flashEmbedStr = brightcove.getFlashEmbedString(experience, secureConnections);
                var containerID = '_container' + experience.id;
                container = brightcove.createFlashEmbed(containerID, experience.params.height);
                experience.parentNode.replaceChild(container, experience);
                document.getElementById(containerID).innerHTML = flashEmbedStr;
                brightcove.experiences[experienceID] = container;
            } else {
                var flashObjectParams = brightcove.getFlashObjectParams(experience, file);
                experienceElement = brightcove.createFlashObject(flashObjectParams);
                experience.parentNode.replaceChild(experienceElement, experience);
                brightcove.experiences[experienceID] = experienceElement;
            }
        }
        brightcove.timeouts[experience.id] = setTimeout(function() {
            brightcove.handleExperienceTimeout(experienceID);
        }, timeout);
    };
    brightcove.createIFrame = function(experience) {
        var iframeElement = brightcove.createElement('iframe');
        iframeElement.id = experience.id;
        iframeElement.width = experience.params.width;
        iframeElement.height = experience.params.height;
        iframeElement.className = experience.className;
        iframeElement.frameborder = 0;
        iframeElement.scrolling = "no";
        iframeElement.style.borderStyle = "none";
        return iframeElement;
    };
    brightcove.getFlashEmbedString = function(experience, secureConnections) {
        var options = '';
        var flashParams = experience.flashParams;
        for (var pOption in flashParams) {
            options += '<param name="' + pOption + '" value="' + experience.flashParams[pOption] + '" />';
        }
        var protocol = secureConnections ? "https": "http";
        return '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'
        + ' codebase="' + protocol + '://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=' + brightcove.majorVersion + ',' + brightcove.majorRevision + ',' + brightcove.minorRevision + ',0"'
        + ' id="' + experience.id + '"'
        + ' width="' + experience.params.width + '"'
        + ' height="' + experience.params.height + '"'
        + ' type="application/x-shockwave-flash"'
        + ' class="BrightcoveExperience">'
        + options
        + '</object>';
    };
    brightcove.getFlashObjectParams = function(experience, file) {
        var experienceObject = {};
        experienceObject.type = 'application/x-shockwave-flash';
        experienceObject.data = file;
        experienceObject.id = experience.params.flashID;
        experienceObject.width = experience.params.width;
        experienceObject.height = experience.params.height;
        experienceObject.className = experience.className;
        experienceObject.seamlesstabbing = experience.flashParams.seamlessTabbing;
        for (var config in experience.flashParams) {
            experienceObject["flashParam_" + config] = experience.flashParams[config];
        }
        return experienceObject;
    };
    brightcove.createFlashEmbed = function(experienceId, height) {
        var container = brightcove.createElement('span');
        if (height.charAt(height.length - 1) == "%") {
            container.style.display = 'block';
        } else {
            container.style.display = 'inline-block';
        }
        container.id = experienceId;
        return container;
    };
    brightcove.createFlashObject = function(playerConfig) {
        var experienceElement = brightcove.createElement('object');
        experienceElement.type = playerConfig.type;
        experienceElement.data = playerConfig.data;
        experienceElement.id = playerConfig.id;
        experienceElement.width = playerConfig.width;
        experienceElement.height = playerConfig.height;
        experienceElement.className = playerConfig.className;
        experienceElement.setAttribute("seamlesstabbing", playerConfig.seamlessTabbing);
        var tempParam;
        var flashParamPrefix = "flashParam_";
        for (var config in playerConfig) {
            var flashParamInd = config.indexOf(flashParamPrefix);
            if (flashParamInd == 0) {
                tempParam = brightcove.createElement('param');
                tempParam.name = config.substring(flashParamPrefix.length);
                tempParam.value = playerConfig[config];
                experienceElement.appendChild(tempParam);
            }
        }
        return experienceElement;
    };
    brightcove.handleExperienceTimeout = function(pID) {
        brightcove.executeErrorHandlerForExperience(brightcove.experienceObjects[pID], {
            type: "templateError",
            errorType: "serviceUnavailable",
            code: brightcove.errorCodes.SERVICE_UNAVAILABLE,
            info: pID
        });
    };
    brightcove.reportPlayerLoad = function(pID) {
        var timeout = brightcove.timeouts[pID];
        if (timeout) {
            clearTimeout(timeout);
        }
    };
    brightcove.reportUpgradeRequired = function(pExperience) {
        brightcove.executeErrorHandlerForExperience(pExperience, {
            type: "templateError",
            errorType: "upgradeRequiredForPlayer",
            code: brightcove.errorCodes.UPGRADE_REQUIRED_FOR_PLAYER,
            info: pExperience.id
        });
    };
    brightcove.checkFlashSupport = function() {
        var hasActiveX = (window.ActiveXObject != undefined);
        return (hasActiveX) ? brightcove.checkFlashSupportIE() : brightcove.checkFlashSupportStandard();
    };
    brightcove.checkFlashSupportIE = function() {
        var versions;
        try {
            var flash = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
            var version = flash.GetVariable('$version');
            versions = / ([0-9]+),([0-9]+),([0-9]+),/.exec(version);
        } catch (exception) {
            return null;
        }
        return {
            majorVersion: versions[1],
            majorRevision: versions[2],
            minorRevision: versions[3]
        };
    };
    brightcove.isMetroIE = function() {
        var version = 0;
        if (navigator.appVersion.indexOf("MSIE")!=-1) {
            var appSplit = navigator.appVersion.split("MSIE");
            if (appSplit.length > 1) {
                version = parseFloat(appSplit[1]);
            }
        }
        if (version < 10 || isNaN(version)) {
            return false;
        }
        var activeXSupport = false;
        try {
            activeXSupport=!!new ActiveXObject("htmlfile");
        } catch (e) {
            activeXSupport = false;
        }
        return !activeXSupport;
    };
    brightcove.checkFlashSupportStandard = function() {
        var versions;
        var majorVersion;
        var majorRevision;
        var minorRevision;
        try {
            if (typeof navigator.plugins != 'undefined' && navigator.plugins.length > 0) {
                if (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]) {
                    var swfVersion = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0": "";
                    var description = navigator.plugins["Shockwave Flash" + swfVersion].description;
                    var filename = navigator.plugins["Shockwave Flash" + swfVersion].filename;
                    if (filename.match) {
                        if (filename.toLowerCase().match(/lite/)) {
                            throw new Error();
                        }
                    }
                    versions = description.split(" ");
                    majorVersion = versions[2].split(".")[0];
                    majorRevision = versions[2].split(".")[1];
                    minorRevision = versions[3];
                    if (minorRevision == "") {
                        minorRevision = versions[4];
                    }
                    if (minorRevision[0] == "d") {
                        minorRevision = minorRevision.substring(1);
                    } else if (minorRevision[0] == "r") {
                        minorRevision = minorRevision.substring(1);
                        if (minorRevision.indexOf("d") > 0) {
                            minorRevision = minorRevision.substring(0, minorRevision.indexOf("d"));
                        }
                    }
                } else {
                    throw new Error();
                }
            } else {
                return null;
            }
        } catch (exception) {
            return null;
        }
        return {
            majorVersion: majorVersion,
            majorRevision: majorRevision,
            minorRevision: minorRevision
        };
    };
    brightcove.checkHtmlSupport = function() {
        var v = brightcove.createElement('video');
        var videoSupport = true;
        if (!brightcove.userAgent.match(new RegExp("android", "i"))) {
            videoSupport=!!(v.canPlayType && v.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/no/, ''));
        }
        if (brightcove.userAgent.match(/BlackBerry.*Version\/6\.0/)) {
            return false;
        }
        var canvasSupport=!!brightcove.createElement('canvas').getContext;
        return videoSupport && canvasSupport;
    };
    brightcove.isSupportedHTMLDevice = function(pUAString) {
        var types = ["iPad", "iPhone", "iPod", "android", "Silk"];
        var numTypes = types.length;
        var uaString = pUAString || brightcove.userAgent;
        for (var i = 0; i < numTypes; i++) {
            if (uaString.match(new RegExp(types[i], "i"))) {
                return true;
            }
        }
        return false;
    };
    brightcove.getTechnology = function(pExperienceId) {
        for (var id in brightcove.experiences) {
            if (pExperienceId == id) {
                return (brightcove.experiences[id].tagName == "object") ? brightcove.playerType.FLASH : brightcove.playerType.HTML;
            }
        }
        return brightcove.playerType.NO_SUPPORT;
    };
    brightcove.respondToMessages = function(pMessage) {
        if (brightcove.verifyMessage(pMessage)) {
            var messageData = pMessage.data;
            if (messageData.charAt(0) == "\"") {
                if (window.JSON) {
                    messageData = window.JSON.parse(messageData);
                } else {
                    messageData = brightcove.json_parse(messageData);
                }
            }
            var messageParts = messageData.split("::");
            var type = messageParts[1];
            var messageJson = messageParts[2].split("\n").join(" ");
            var messageDataObject;
            if (window.JSON) {
                messageDataObject = window.JSON.parse(messageJson);
            } else {
                messageDataObject = brightcove.json_parse(messageJson);
            }
            switch (type) {
            case"error":
                brightcove.executeMessageCallback(messageDataObject, brightcove.executeErrorHandlerForExperience);
                break;
            case"api":
                brightcove.handleAPICallForHTML(messageDataObject);
                break;
            case"handler":
                var event = brightcove.internal._convertDates(messageDataObject.event);
                try {
                    brightcove.internal._handlers[messageDataObject.handler](event);
                } catch (e) {}
                break;
            case"asyncGetter":
                var data = brightcove.internal._convertDates(messageDataObject.data);
                brightcove.internal._handlers[messageDataObject.handler](data);
                break;
            }
        }
    };
    brightcove.verifyMessage = function(pMessage) {
        return (/^brightcove\.player/).test(pMessage.data);
    };
    brightcove.handleAPICallForHTML = function(pMessageObject) {
        var experience = brightcove.experienceObjects[pMessageObject.id];
        if (experience == null) {
            return;
        }
        var id = experience.id;
        var method = pMessageObject.method;
        switch (method) {
        case"initializeBridge":
            brightcove.reportPlayerLoad(id);
            if (pMessageObject.arguments[0]) {
                if (brightcove.internal != null) {
                    brightcove.internal._setAPICallback(id, null, pMessageObject.arguments[1]);
                    brightcove.callHandlerForPlayer(experience, "templateLoadHandler", id);
                } else if (brightcove._apiRequested) {
                    brightcove._queuedAPICalls.push(pMessageObject);
                }
            }
            break;
        case"callTemplateReady":
            if (brightcove._apiRequested&&!brightcove.internal) {
                brightcove._queuedAPICalls.push(pMessageObject);
            } else {
                var event = pMessageObject.arguments;
                brightcove._addModuleToEvent(id, event);
                brightcove.callHandlerForPlayer(experience, "templateReadyHandler", event);
            }
            break;
        }
    };
    brightcove._addModuleToEvent = function(pID, pEvent) {
        if (pEvent.type != null && brightcove.api) {
            var experience = brightcove.api.getExperience(pID);
            if (experience) {
                pEvent.target = experience.getModule("experience");
            }
        }
    };
    brightcove.callHandlerForPlayer = function(pExperience, pHandler, pArgument) {
        if (pExperience && pExperience.params && pExperience.params[pHandler]) {
            var namespaceArray = pExperience.params[pHandler].split(".");
            var namespaces;
            if ((namespaces = namespaceArray.length) > 1) {
                var trace = window;
                for (var i = 0; i < namespaces; i++) {
                    trace = trace[namespaceArray[i]];
                }
                if (typeof trace === "function") {
                    trace(pArgument);
                }
            } else {
                window[pExperience.params[pHandler]](pArgument);
            }
        }
    };
    brightcove.executeErrorHandlerForExperience = function(pExperience, pErrorObject) {
        brightcove.callHandlerForPlayer(pExperience, "templateErrorHandler", pErrorObject);
    };
    brightcove.executeMessageCallback = function(pMessageDataObject, pCallback) {
        var experience;
        for (var experienceKey in brightcove.experienceObjects) {
            experience = brightcove.experienceObjects[experienceKey];
            if (experience.element.src === pMessageDataObject.__srcUrl) {
                delete pMessageDataObject.__srcUrl;
                pCallback(experience, pMessageDataObject);
                break;
            }
        }
    };
    brightcove.createExperience = function(pElement, pParentOrSibling, pAppend) {
        if (!pElement.id || pElement.id.length < 1) {
            pElement.id = 'bcExperienceObj' + (brightcove.experienceNum++);
        }
        if (pAppend) {
            pParentOrSibling.appendChild(pElement);
        } else {
            pParentOrSibling.parentNode.insertBefore(pElement, pParentOrSibling);
        }
        brightcove.createExperiences(null, pElement.id);
    };
    brightcove.removeExperience = function(pID) {
        if (brightcove.experiences[pID] != null) {
            brightcove.experiences[pID].parentNode.removeChild(brightcove.experiences[pID]);
        }
    };
    brightcove.getURL = function() {
        var url;
        if (typeof window.location.search != 'undefined') {
            url = window.location.search;
        } else {
            url = /(\?.*)$/.exec(document.location.href);
        }
        return url;
    };
    brightcove.getOverrides = function() {
        var url = brightcove.getURL();
        var query = new RegExp('@[\\w\\.]+=[^&]+', 'g');
        var value = query.exec(url);
        var overrides = "";
        while (value != null) {
            overrides += "&" + value;
            value = query.exec(url);
        }
        return overrides;
    };
    brightcove.getParameter = function(pName, pDefaultValue) {
        if (pDefaultValue == null)
            pDefaultValue = "";
        var url = brightcove.getURL();
        var query = new RegExp(pName + '=([^&]*)');
        var value = query.exec(url);
        if (value != null) {
            return value[1];
        } else {
            return pDefaultValue;
        }
    };
    brightcove.createElement = function(el) {
        if (document.createElementNS) {
            return document.createElementNS('http://www.w3.org/1999/xhtml', el);
        } else {
            return document.createElement(el);
        }
    };
    brightcove.i18n = {
        'BROWSER_TOO_OLD': 'The browser you are using is too old. Please upgrade to the latest version of your browser.'
    };
    brightcove.removeListeners = function() {
        if (/KHTML/i.test(navigator.userAgent)) {
            clearInterval(checkLoad);
            document.removeEventListener('load', brightcove.createExperiences, false);
        }
        if (typeof document.addEventListener != 'undefined') {
            document.removeEventListener('DOMContentLoaded', brightcove.createExperiences, false);
            document.removeEventListener('load', brightcove.createExperiences, false);
        } else if (typeof window.attachEvent != 'undefined') {
            window.detachEvent('onload', brightcove.createExperiences);
        }
    };
    brightcove.getPubURL = function(source, host, pubCode) {
        if (!pubCode || pubCode == "")
            return source;
        var re = /^([htps]{4,5}\:\/\/)([^\/\:]+)/i;
        host = host.replace("$pubcode$", pubCode).replace("$zoneprefix$$zone$", brightcove.pubSubdomain);
        return source.replace(re, "$1" + host);
    };
    brightcove.createExperiencesPostLoad = function() {
        brightcove.removeListeners();
        brightcove.createExperiences();
    };
    brightcove.encode = function(string) {
        string = escape(string);
        string = string.replace(/\+/g, "%2B");
        string = string.replace(/\-/g, "%2D");
        string = string.replace(/\*/g, "%2A");
        string = string.replace(/\//g, "%2F");
        string = string.replace(/\./g, "%2E");
        string = string.replace(/_/g, "%5F");
        string = string.replace(/@/g, "%40");
        return string;
    };
    if (/KHTML/i.test(navigator.userAgent)) {
        var checkLoad = setInterval(function() {
            if (/loaded|complete/.test(document.readyState)) {
                clearInterval(checkLoad);
                brightcove.createExperiencesPostLoad();
            }
        }, 70);
        document.addEventListener('load', brightcove.createExperiencesPostLoad, false);
    }
    if (typeof document.addEventListener != 'undefined') {
        document.addEventListener('DOMContentLoaded', brightcove.createExperiencesPostLoad, false);
        document.addEventListener('load', brightcove.createExperiencesPostLoad, false);
        window.addEventListener("message", brightcove.respondToMessages, false);
    } else if (typeof window.attachEvent != 'undefined') {
        window.attachEvent('onload', brightcove.createExperiencesPostLoad);
    } else {
        alert(brightcove.i18n.BROWSER_TOO_OLD);
    }
}
brightcove.json_parse = (function() {
    "use strict";
    var state, stack, container, key, value, escapes = {
        '\\': '\\',
        '"': '"',
        '/': '/',
        't': '\t',
        'n': '\n',
        'r': '\r',
        'f': '\f',
        'b': '\b'
    }, string = {
        go: function() {
            state = 'ok';
        },
        firstokey: function() {
            key = value;
            state = 'colon';
        },
        okey: function() {
            key = value;
            state = 'colon';
        },
        ovalue: function() {
            state = 'ocomma';
        },
        firstavalue: function() {
            state = 'acomma';
        },
        avalue: function() {
            state = 'acomma';
        }
    }, number = {
        go: function() {
            state = 'ok';
        },
        ovalue: function() {
            state = 'ocomma';
        },
        firstavalue: function() {
            state = 'acomma';
        },
        avalue: function() {
            state = 'acomma';
        }
    }, action = {
        '{': {
            go: function() {
                stack.push({
                    state: 'ok'
                });
                container = {};
                state = 'firstokey';
            },
            ovalue: function() {
                stack.push({
                    container: container,
                    state: 'ocomma',
                    key: key
                });
                container = {};
                state = 'firstokey';
            },
            firstavalue: function() {
                stack.push({
                    container: container,
                    state: 'acomma'
                });
                container = {};
                state = 'firstokey';
            },
            avalue: function() {
                stack.push({
                    container: container,
                    state: 'acomma'
                });
                container = {};
                state = 'firstokey';
            }
        },
        '}': {
            firstokey: function() {
                var pop = stack.pop();
                value = container;
                container = pop.container;
                key = pop.key;
                state = pop.state;
            },
            ocomma: function() {
                var pop = stack.pop();
                container[key] = value;
                value = container;
                container = pop.container;
                key = pop.key;
                state = pop.state;
            }
        },
        '[': {
            go: function() {
                stack.push({
                    state: 'ok'
                });
                container = [];
                state = 'firstavalue';
            },
            ovalue: function() {
                stack.push({
                    container: container,
                    state: 'ocomma',
                    key: key
                });
                container = [];
                state = 'firstavalue';
            },
            firstavalue: function() {
                stack.push({
                    container: container,
                    state: 'acomma'
                });
                container = [];
                state = 'firstavalue';
            },
            avalue: function() {
                stack.push({
                    container: container,
                    state: 'acomma'
                });
                container = [];
                state = 'firstavalue';
            }
        },
        ']': {
            firstavalue: function() {
                var pop = stack.pop();
                value = container;
                container = pop.container;
                key = pop.key;
                state = pop.state;
            },
            acomma: function() {
                var pop = stack.pop();
                container.push(value);
                value = container;
                container = pop.container;
                key = pop.key;
                state = pop.state;
            }
        },
        ':': {
            colon: function() {
                if (Object.hasOwnProperty.call(container, key)) {
                    throw new SyntaxError('Duplicate key "' + key + '"');
                }
                state = 'ovalue';
            }
        },
        ',': {
            ocomma: function() {
                container[key] = value;
                state = 'okey';
            },
            acomma: function() {
                container.push(value);
                state = 'avalue';
            }
        },
        'true': {
            go: function() {
                value = true;
                state = 'ok';
            },
            ovalue: function() {
                value = true;
                state = 'ocomma';
            },
            firstavalue: function() {
                value = true;
                state = 'acomma';
            },
            avalue: function() {
                value = true;
                state = 'acomma';
            }
        },
        'false': {
            go: function() {
                value = false;
                state = 'ok';
            },
            ovalue: function() {
                value = false;
                state = 'ocomma';
            },
            firstavalue: function() {
                value = false;
                state = 'acomma';
            },
            avalue: function() {
                value = false;
                state = 'acomma';
            }
        },
        'null': {
            go: function() {
                value = null;
                state = 'ok';
            },
            ovalue: function() {
                value = null;
                state = 'ocomma';
            },
            firstavalue: function() {
                value = null;
                state = 'acomma';
            },
            avalue: function() {
                value = null;
                state = 'acomma';
            }
        }
    };
    function debackslashify(text) {
        return text.replace(/\\(?:u(.{4})|([^u]))/g, function(a, b, c) {
            return b ? String.fromCharCode(parseInt(b, 16)) : escapes[c];
        });
    }
    return function(source, reviver) {
        var r, tx = /^[\x20\t\n\r]*(?:([,:\[\]{}]|true|false|null)|(-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)|"((?:[^\r\n\t\\\"]|\\(?:["\\\/trnfb]|u[0-9a-fA-F]{4}))*)")/;
        state = 'go';
        stack = [];
        try {
            for (; ;) {
                r = tx.exec(source);
                if (!r) {
                    break;
                }
                if (r[1]) {
                    action[r[1]][state]();
                } else if (r[2]) {
                    value =+ r[2];
                    number[state]();
                } else {
                    value = debackslashify(r[3]);
                    string[state]();
                }
                source = source.slice(r[0].length);
            }
        } catch (e) {
            state = e;
        }
        if (state !== 'ok' || (/[^\x20\t\n\r]/).test(source)) {
            throw state instanceof SyntaxError ? state : new SyntaxError('JSON');
        }
        return typeof reviver === 'function' ? (function walk(holder, key) {
            var k, v, value = holder[key];
            if (value && typeof value === 'object') {
                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = walk(value, k);
                        if (v !== undefined) {
                            value[k] = v;
                        } else {
                            delete value[k];
                        }
                    }
                }
            }
            return reviver.call(holder, key, value);
        }({
            '': value
        }, '')) : value;
    };
}());
var APIModules = {};
APIModules.EXPERIENCE = "experience";
APIModules.CONTENT = "content";
APIModules.VIDEO_PLAYER = "videoPlayer";
APIModules.SOCIAL = "social";
APIModules.SEARCH = "search";
APIModules.CUE_POINTS = "cuePoints";
APIModules.ADVERTISING = "advertising";
APIModules.MENU = "menu";
APIModules.EFFECTS = "effects";
APIModules.CONVIVA = "conviva";
APIModules.CAPTIONS = "captions";
APIModules.AUTH = "auth";
APIModules.HTML5 = "_html5";
if (brightcove == undefined) {
    var brightcove = {
        playerType: {
            FLASH: "flash",
            HTML: "html",
            INSTALLER: "installer",
            NO_SUPPORT: "nosupport"
        }
    };
}
brightcove.instances = {};
brightcove.modules = {};
brightcove.ID_DELIM = "|||";
var bcPlayer = brightcove;
brightcove.getExperience = function(pExperience) {
    if (this.instances[pExperience] == null) {
        if (window.console) {
            console.log("Experience '" + pExperience + "' not found. Please ensure the name is correct and the API for the player is enabled.");
        }
    }
    return this.instances[pExperience];
};
brightcove.getPlayer = brightcove.getExperience;
brightcove.stringify = function(pObject) {
    var type = typeof pObject;
    if (type == "function" || pObject == undefined) {
        return "\"\"";
    } else if (type == "string") {
        return "\"" + pObject.replace(/"/g, "\\\"") + "\"";
    } else if (pObject instanceof Array) {
        var json = "[";
        for (var i in pObject) {
            if (typeof pObject[i] == "function") {
                json += ("\"\",");
            } else {
                json += (this.stringify(pObject[i]) + ",");
            }
        }
        if (json.substr( - 1) == ",") {
            json = json.substr(0, json.length - 1);
        }
        return json + "]";
    } else if (type == "object") {
        var json = "{";
        var i;
        var props = pObject.enumerableProperties;
        if (props) {
            for (i in props) {
                json += ("\"" + props[i] + "\":" + this.stringify(pObject[props[i]]) + ",");
            }
        } else {
            for (i in pObject) {
                if (typeof pObject[i] != "function" && i != "__proto__") {
                    json += ("\"" + i + "\":" + this.stringify(pObject[i]) + ",");
                }
            }
        }
        if (json.substr( - 1) == ",") {
            json = json.substr(0, json.length - 1);
        }
        return json + "}";
    } else {
        return pObject;
    }
}
function setAPICallback(pID, pCallback, pURL) {
    brightcove.instances[pID] = new BrightcoveExperience(pCallback, pID, pURL);
}
function BrightcoveExperience(pCallback, pID, pURL) {
    if (pCallback == null) {
        this.type = brightcove.playerType.HTML;
        this.playerURL = pURL;
        this.callback = brightcove.experiences[pID].contentWindow;
    } else {
        this.type = brightcove.playerType.FLASH;
        this.callback = pCallback;
    }
    this.modules = {};
}
BrightcoveExperience.prototype.getModule = function(pModule) {
    if (this.type == brightcove.playerType.HTML) {
        pModule += APIModules.HTML5;
    }
    if (this.modules[pModule] == null && brightcove.modules[pModule]) {
        var module = new brightcove.modules[pModule](this);
        module.playerURL = this.playerURL;
        if (module.isPlayerDefined != null) {
            if (!module.isPlayerDefined()
                ) {
                return null;
            }
        }
        this.modules[pModule] = module;
    }
    return this.modules[pModule];
};
function APIModule() {
    this.handlers = [];
}
APIModule.handlerCount = 0;
APIModule.getHandler = function() {
    return "bc_handler" + (APIModule.handlerCount++);
};
APIModule.callFlash = function(pCallback, pParams) {
    var pCallbackArray = pCallback.split(brightcove.ID_DELIM);
    if (pCallbackArray.length < 2)
        return;
    if (pCallbackArray[0].length < 1)
        return;
    var pFlashId = pCallbackArray[0];
    var pCallback = pCallbackArray[1];
    var pExperience = document.getElementById(pFlashId);
    if (pExperience[pCallback] != null) {
        return pExperience[pCallback](BCXML.convertToXML(pParams, "js2flash"));
    }
};
APIModule.prototype.name = "APIModule";
APIModule.prototype.addEventListener = function(pEvent, pHandler, pPriority) {
    var pNewHandler = APIModule.getHandler();
    this.handlers.push({
        handler: pHandler,
        bcHandler: pNewHandler,
        event: pEvent
    });
    window[pNewHandler] = pHandler;
    return this.callMethod("addEventListener", [pEvent, pNewHandler, pPriority]);
};
APIModule.prototype.removeEventListener = function(pEvent, pHandler) {
    var pNum = this.handlers.length;
    for (var i = 0; i < pNum; i++) {
        if (this.handlers[i].event == pEvent && this.handlers[i].handler == pHandler) {
            var pBCHandler = this.handlers[i].bcHandler;
            this.handlers.splice(i, 1);
            break;
        }
    }
    if (pBCHandler == undefined)
        return;
    return this.callMethod("removeEventListener", [pEvent, pBCHandler]);
};
APIModule.prototype.callPlayer = function(pCallback, pParams) {
    if (this.playerURL != undefined) {
        return this.callHTML5(pParams);
    } else {
        return APIModule.callFlash(pCallback, pParams);
    }
};
APIModule.prototype.callMethod = function(pMethod, pArguments) {
    var pArgs = [];
    for (var i = 0; i < pArguments.length; i++)
        pArgs.push(pArguments[i]);
    return this.callPlayer(this.callback, {
        module: this.name,
        method: pMethod,
        params: pArgs
    });
};
APIModule.prototype.callHTML5 = function(pParams) {
    if (!this.callback.postMessage) {
        return null;
    }
    var json;
    if (window.JSON) {
        json = window.JSON.stringify(pParams);
    } else {
        json = brightcove.stringify(pParams);
    }
    if (json) {
        this.callback.postMessage(json, this.playerURL);
    }
    return null;
};
var BCXML = {};
BCXML.convertToXML = function(pObj, pNodeName) {
    if (pObj instanceof Function)
        return "";
    var pType = BCXML.getType(pObj);
    var pXML = "<" + pType.name + pNodeName + ">";
    if (pType.name == "obj") {
        for (var i in pObj) {
            pXML += BCXML.convertToXML(pObj[i], i);
        }
    } else if (pType.name == "arr") {
        for (var j = 0; j < pObj.length; j++) {
            pXML += BCXML.convertToXML(pObj[j], j);
        }
    } else if (pType.name == "str") {
        pObj = BCXML.replaceEntities(pObj);
        pXML += pObj;
    } else {
        pXML += pObj;
    }
    pXML += "</" + pType.name + pNodeName + ">";
    return pXML;
};
BCXML.replaceEntities = function(pObj) {
    pObj = pObj.replace(new RegExp("&", "g"), "&amp;");
    pObj = pObj.replace(new RegExp("<", "g"), "&lt;");
    pObj = pObj.replace(new RegExp(">", "g"), "&gt;");
    return pObj;
};
BCXML.getType = function(pObj) {
    switch (typeof(pObj)) {
    case"boolean":
        return {
            name: "boo",
            type: Boolean
        };
    case"string":
        return {
            name: "str",
            type: String
        };
    case"number":
        return {
            name: "num",
            type: Number
        };
    default:
        if (pObj instanceof Array) {
            return {
                name: "arr",
                type: Array
            };
        } else {
            return {
                name: "obj",
                type: Object
            };
        }
    }
};
BCAdvertisingEvent = {}
BCAdvertisingEvent.AD_COMPLETE = "adComplete";
BCAdvertisingEvent.AD_POSTROLLS_COMPLETE = "adPostRollsComplete";
BCAdvertisingEvent.AD_PAUSE = "adPause";
BCAdvertisingEvent.AD_PROGRESS = "adProgress";
BCAdvertisingEvent.AD_RESUME = "adResume";
BCAdvertisingEvent.AD_RECEIVED = "adReceived";
BCAdvertisingEvent.AD_START = "adStart";
BCAdvertisingEvent.AD_CLICK = "adClick";
BCAdvertisingEvent.EXTERNAL_AD = "externalAd";
BCAdvertisingEvent.AD_RULES_READY = "adRulesReady";
brightcove.modules[APIModules.ADVERTISING] = AdvertisingAPI;
function AdvertisingAPI(pExperience) {
    this.experience = pExperience;
    this.callback = pExperience.callback;
    this.name = APIModules.ADVERTISING;
}
var pttp = AdvertisingAPI.prototype = new APIModule();
pttp.showAd = function() {
    return this.callMethod("showAd", arguments);
};
pttp.resumeAfterExternalAd = function() {
    return this.callMethod("resumeAfterExternalAd", arguments);
};
pttp.getEnabledAdFormats = function() {
    return this.callMethod("getEnabledAdFormats", arguments);
};
pttp.enableAdFormats = function() {
    return this.callMethod("enableAdFormats", arguments);
};
pttp.enableExternalAds = function() {
    return this.callMethod("enableExternalAds", arguments);
};
pttp.enableOverrideAds = function() {
    return this.callMethod("enableOverrideAds", arguments);
};
pttp.getExternalAdsEnabled = function() {
    return this.callMethod("getExternalAdsEnabled", arguments);
};
pttp.getOverrideAdsEnabled = function() {
    return this.callMethod("getOverrideAdsEnabled", arguments);
};
pttp.disableForExternalAd = function() {
    return this.callMethod("disableForExternalAd", arguments);
};
pttp.getCurrentAdProperties = function() {
    return this.callMethod("getCurrentAdProperties", arguments);
};
pttp.showSponsorMessage = function() {
    return this.callMethod("showSponsorMessage", arguments);
};
pttp.getShowSponsorMessage = function() {
    return this.callMethod("getShowSponsorMessage", arguments);
};
pttp.allowThirdPartyControl = function() {
    return this.callMethod("allowThirdPartyControl", arguments);
};
pttp.setThirdPartyTime = function() {
    return this.callMethod("setThirdPartyTime", arguments);
};
pttp.getThirdPartyTime = function() {
    return this.callMethod("getThirdPartyTime", arguments);
};
pttp.getAdPolicy = function() {
    return this.callMethod("getAdPolicy", arguments);
};
pttp.setAdPolicy = function() {
    return this.callMethod("setAdPolicy", arguments);
};
pttp.setAdRules = function() {
    return this.callMethod("setAdRules", arguments);
};
pttp.getCurrentAdRules = function() {
    return this.callMethod("getCurrentAdRules", arguments);
};
pttp.setAdTranslator = function() {
    return this.callMethod("setAdTranslator", arguments);
};
pttp.getCurrentAdTranslator = function() {
    return this.callMethod("getCurrentAdTranslator", arguments);
};
pttp.requestAd = function() {
    return this.callMethod("requestAd", arguments);
};
pttp.getStayInFullScreen = function() {
    return this.callMethod("getStayInFullScreen", arguments);
};
pttp.setStayInFullScreen = function() {
    return this.callMethod("setStayInFullScreen", arguments);
};
pttp.stopAd = function() {
    return this.callMethod("stopAd", arguments);
};
pttp.DEFAULT_AD_TRANSLATOR = "defaultAdTranslator";
BCAuthEvent = {}
BCAuthEvent.AUTH_NEEDED = "authNeeded";
brightcove.modules[APIModules.AUTH] = AuthAPI;
BCAuthService = {}
BCAuthService.ADOBE_PASS = "adobepass";
BCAuthService.AIS = "ais";
function AuthAPI(pExperience) {
    this.experience = pExperience;
    this.callback = pExperience.callback;
    this.name = APIModules.AUTH;
}
var pttp = AuthAPI.prototype = new APIModule();
pttp.checkStatus = function() {
    return this.callMethod("checkStatus", arguments);
};
pttp.showMessage = function() {
    return this.callMethod("showMessage", arguments);
};
pttp.removeMessage = function() {
    return this.callMethod("removeMessage", arguments);
};
pttp.playWithToken = function() {
    return this.callMethod("playWithToken", arguments);
};
BCCaptionsEvent = {}
BCCaptionsEvent.DFXP_LOAD_SUCCESS = "dfxpLoadSuccess";
BCCaptionsEvent.DFXP_LOAD_ERROR = "dfxpLoadError";
brightcove.modules[APIModules.CAPTIONS] = CaptionsAPI;
function CaptionsAPI(pExperience) {
    this.experience = pExperience;
    this.callback = pExperience.callback;
    this.name = APIModules.CAPTIONS;
}
var pttp = CaptionsAPI.prototype = new APIModule();
pttp.loadDFXP = function() {
    return this.callMethod("loadDFXP", arguments);
};
pttp.setLanguage = function() {
    return this.callMethod("setLanguage", arguments);
};
pttp.getLanguages = function() {
    return this.callMethod("getLanguages", arguments);
};
pttp.getStyleOptions = function() {
    return this.callMethod("getStyleOptions", arguments);
};
pttp.setStyleOptions = function() {
    return this.callMethod("setStyleOptions", arguments);
};
pttp.getCaptionsEnabled = function() {
    return this.callMethod("getCaptionsEnabled", arguments);
};
pttp.setCaptionsEnabled = function() {
    return this.callMethod("setCaptionsEnabled", arguments);
};
pttp.showOptions = function() {
    return this.callMethod("showOptions", arguments);
};
BCContentEvent = {}
BCContentEvent.VIDEO_LOAD = "videoLoad";
BCContentEvent.PLAYLIST_LOAD = "playlistLoad";
BCContentEvent.MEDIA_LOAD = "mediaLoad";
BCContentEvent.MEDIA_COLLECTION_LOAD = "mediaCollectionLoad";
brightcove.modules[APIModules.CONTENT] = ContentAPI;
function ContentAPI(pExperience) {
    this.experience = pExperience;
    if (pExperience) {
        this.callback = pExperience.callback;
    }
    this.name = APIModules.CONTENT;
}
var pttp = ContentAPI.prototype = new APIModule();
pttp.getAllMediaCollections = function() {
    return this.callMethod("getAllMediaCollections", arguments);
};
pttp.getAllMediaCollectionIDs = function() {
    return this.callMethod("getAllMediaCollectionIDs", arguments);
};
pttp.getAllPlaylists = function() {
    return this.callMethod("getAllPlaylists", arguments);
};
pttp.getAllPlaylistIDs = function() {
    return this.callMethod("getAllPlaylistIDs", arguments);
};
pttp.getMediaCollection = function() {
    return this.callMethod("getMediaCollection", arguments);
};
pttp.getMediaCollectionAsynch = function() {
    return this.callMethod("getMediaCollectionAsynch", arguments);
};
pttp.getPlaylist = function() {
    return this.callMethod("getPlaylist", arguments);
};
pttp.getPlaylistAsynch = function() {
    return this.callMethod("getPlaylistAsynch", arguments);
};
pttp.getMedia = function() {
    return this.callMethod("getMedia", arguments);
};
pttp.getMediaAsynch = function() {
    return this.callMethod("getMediaAsynch", arguments);
};
pttp.getVideo = function() {
    return this.callMethod("getVideo", arguments);
};
pttp.getVideoAsynch = function() {
    return this.callMethod("getVideoAsynch", arguments);
};
pttp.purgeAllContent = function() {
    return this.callMethod("purgeAllContent", arguments);
};
pttp.purgeMediaCollections = function() {
    return this.callMethod("purgeMediaCollections", arguments);
};
pttp.purgeMedia = function() {
    return this.callMethod("purgeMedia", arguments);
};
pttp.purgePlaylist = function() {
    return this.callMethod("purgePlaylist", arguments);
};
pttp.purgePlaylists = function() {
    return this.callMethod("purgePlaylists", arguments);
};
pttp.purgeVideo = function() {
    return this.callMethod("purgeVideo", arguments);
};
pttp.purgeVideos = function() {
    return this.callMethod("purgeVideos", arguments);
};
pttp.getMediaInGroupAsynch = function() {
    return this.callMethod("getMediaInGroupAsynch", arguments);
};
pttp.createRuntimeMediaCollection = function() {
    return this.callMethod("createRuntimeMediaCollection", arguments);
};
pttp.updateMedia = function() {
    return this.callMethod("updateMedia", arguments);
};
pttp.appendArgsToMediaRequest = function() {
    return this.callMethod("appendArgsToMediaRequest", arguments);
};
brightcove.modules[APIModules.CONVIVA] = ConvivaAPI;
function ConvivaAPI(pExperience) {
    this.experience = pExperience;
    this.callback = pExperience.callback;
    this.name = APIModules.CONVIVA;
}
var pttp = ConvivaAPI.prototype = new APIModule();
pttp.sendEvent = function() {
    return this.callMethod("sendEvent", arguments);
};
BCCuePointEvent = {}
BCCuePointEvent.CUE = "cuePoint";
brightcove.modules[APIModules.CUE_POINTS] = CuePointsAPI;
function CuePointsAPI(pExperience) {
    this.experience = pExperience;
    this.callback = pExperience.callback;
    this.name = APIModules.CUE_POINTS;
}
var pttp = CuePointsAPI.prototype = new APIModule();
pttp.addCuePoints = function() {
    return this.callMethod("addCuePoints", arguments);
};
pttp.clearCodeCuePoints = function() {
    return this.callMethod("clearCodeCuePoints", arguments);
};
pttp.removeCodeCuePointsAtTime = function() {
    return this.callMethod("removeCodeCuePointsAtTime", arguments);
};
pttp.getCuePoints = function() {
    return this.callMethod("getCuePoints", arguments);
};
pttp.clearAdCuePoints = function() {
    return this.callMethod("clearAdCuePoints", arguments);
};
pttp.removeAdCuePointsAtTime = function() {
    return this.callMethod("removeAdCuePointsAtTime", arguments);
};
BCEffectsEvent = {};
BCEffectsEvent.BEGIN = "animationBegin";
BCEffectsEvent.COMPLETE = "animationComplete";
BCEffectsEvent.CHANGE = "animationChange";
brightcove.modules[APIModules.EFFECTS] = EffectsAPI;
function EffectsAPI(pExperience) {
    this.experience = pExperience;
    this.callback = pExperience.callback;
    this.name = APIModules.EFFECTS;
}
EffectsAPI.animations = {};
var pttp = EffectsAPI.prototype = new APIModule();
pttp.createAnimation = function() {
    var pID = this.callMethod("createAnimationJS", arguments);
    return this.getAnimation(pID);
};
pttp.getAnimation = function() {
    var pID = this.callMethod("getAnimationJS", arguments);
    if (pID) {
        return this.getAnimationWrapper(pID);
    }
    return null;
};
pttp.getAnimationWrapper = function(pID) {
    var pAnimation = EffectsAPI.animations[pID];
    if (pAnimation == undefined) {
        pAnimation = new EffectsAPIAnimation(pID, this.callback);
        EffectsAPI.animations[pID] = pAnimation;
    }
    return pAnimation;
};
function EffectsAPIAnimation(pID, pCallback) {
    this.id = pID;
    this.name = APIModules.EFFECTS;
    this.callback = pCallback;
}
pttp = EffectsAPIAnimation.prototype = new APIModule();
pttp.id =- 1;
pttp.callMethod = function(pMethod, pArguments) {
    if (pArguments == undefined)
        pArguments = [];
    var pArgs = [this.id];
    for (var i = 0; i < pArguments.length; i++)
        pArgs.push(pArguments[i]);
    return APIModule.callFlash(this.callback, {
        module: this.name,
        method: pMethod,
        params: pArgs
    });
};
pttp.start = function() {
    return this.callMethod("startJS", arguments);
};
pttp.stop = function() {
    return this.callMethod("stopJS", arguments);
};
pttp.apply = function(target) {
    var targetID = target.getID();
    if (targetID) {
        return this.callMethod("applyJS", [targetID]);
    }
};
pttp.addEventListener = function(pEvent, pHandler) {
    var pNewHandler = APIModule.getHandler();
    this.handlers.push({
        handler: pHandler,
        bcHandler: pNewHandler,
        event: pEvent
    });
    window[pNewHandler] = pHandler;
    return this.callMethod("addEventListenerJS", [pEvent, pNewHandler]);
};
pttp.removeEventListener = function(pEvent, pHandler) {
    var pNum = this.handlers.length;
    for (var i = 0; i < pNum; i++) {
        if (this.handlers[i].event == pEvent && this.handlers[i].handler == pHandler) {
            var pBCHandler = this.handlers[i].bcHandler;
            this.handlers.splice(i, 1);
            break;
        }
    }
    if (pBCHandler == undefined)
        return;
    return this.callMethod("removeEventListenerJS", [pEvent, pBCHandler]);
};
BCExperienceEvent = {}
BCExperienceEvent.CONTENT_LOAD = "contentLoad";
BCExperienceEvent.USER_MESSAGE = "userMessage";
BCExperienceEvent.TEMPLATE_READY = "templateReady";
BCExperienceEvent.ENTER_FULLSCREEN = "enterFullScreen";
BCExperienceEvent.EXIT_FULLSCREEN = "exitFullScreen";
brightcove.modules[APIModules.EXPERIENCE] = ExperienceAPI;
BCComponentModules = {};
function ExperienceAPI(pExperience) {
    this.experience = pExperience;
    if (pExperience) {
        this.callback = pExperience.callback;
    }
    this.name = APIModules.EXPERIENCE;
}
var pttp = ExperienceAPI.prototype = new APIModule();
pttp.setSize = function() {
    return this.callMethod("setSize", arguments);
};
pttp.getPlayerName = function() {
    return this.callMethod("getPlayerName", arguments);
};
pttp.getReady = function() {
    return this.callMethod("getReady", arguments);
};
pttp.getWidth = function() {
    return this.callMethod("getWidth", arguments);
};
pttp.getHeight = function() {
    return this.callMethod("getHeight", arguments);
};
pttp.getAdEnabled = function() {
    return this.callMethod("getAdEnabled", arguments);
};
pttp.getEnabled = function() {
    return this.callMethod("getEnabled", arguments);
};
pttp.setEnabled = function() {
    return this.callMethod("setEnabled", arguments);
};
pttp.loadExperience = function() {
    return this.callMethod("loadExperience", arguments);
};
pttp.getLayout = function() {
    return this.callMethod("getLayout", arguments);
};
pttp.getAffiliateID = function() {
    return this.callMethod("getAffiliateID", arguments);
};
pttp.getExperienceID = function() {
    return this.callMethod("getExperienceID", arguments);
};
pttp.getPublisherID = function() {
    return this.callMethod("getPublisherID", arguments);
};
pttp.getExperienceURL = function() {
    return this.callMethod("getExperienceURL", arguments);
};
pttp.getReferrerURL = function() {
    return this.callMethod("getReferrerURL", arguments);
};
pttp.getConfiguredPropertiesForID = function() {
    return this.callMethod("getConfiguredPropertiesForID", arguments);
};
pttp.getPlayerParameter = function() {
    return this.callMethod("getPlayerParameter", arguments);
};
pttp.getLayoutRoot = function() {
    var pObj = this.callMethod("getLayoutRootJS", arguments);
    if (pObj != null) {
        if (BCComponentModules[pObj.elementName] != null) {
            return new BCComponentModules[pObj.elementName](this.experience, this.callback, pObj.elementID);
        }
    }
    return null;
};
pttp.getElementByID = function() {
    var pNodeName = this.callMethod("getJSElementByID", arguments);
    if (pNodeName != null) {
        if (pNodeName == "VideoPlayer" || pNodeName == "VideoDisplay") {
            var pPlayerAPI = this.experience.getModule(APIModules.VIDEO_PLAYER);
            if (pPlayerAPI) {
                pPlayerAPI.initializeComponentAPI();
                return pPlayerAPI;
            }
        } else if (BCComponentModules[pNodeName] != null) {
            return new BCComponentModules[pNodeName](this.experience, this.callback, arguments[0]);
        }
    }
    return null;
};
pttp.getElementsByType = function() {
    var pIDs = this.callMethod("getJSElementsByType", arguments);
    var pElements = [];
    var pElement;
    for (var i in pIDs) {
        if (typeof(pIDs[i]) != "function") {
            pElement = this.getElementByID(pIDs[i]);
            if (pElement)
                pElements.push(pElement);
        }
    }
    return pElements;
};
pttp.getModules = function() {
    return this.callMethod("getModules", arguments);
};
pttp.unload = function() {
    return this.callMethod("unload", arguments);
};
pttp.debug = function() {
    return this.callMethod("debug", arguments);
};
pttp.getUserCountry = function() {
    return this.callMethod("getUserCountry", arguments);
};
pttp.getTranslation = function() {
    return this.callMethod("getTranslation", arguments);
};
BCMenuEvent = {}
BCMenuPage = {}
BCMenuAdditionalMedia = {}
BCMenuEvent.MENU_PAGE_OPEN = "menuPageOpen";
BCMenuEvent.MENU_PAGE_CLOSE = "menuPageClose";
BCMenuEvent.OVERLAY_MENU_OPEN = "overlayMenuOpen";
BCMenuEvent.OVERLAY_MENU_CLOSE = "overlayMenuClose";
BCMenuEvent.OVERLAY_MENU_PLAY_CLICK = "overlayMenuPlayClick";
BCMenuEvent.ICON_MENU_OPEN = "iconMenuOpen";
BCMenuEvent.ICON_MENU_CLOSE = "iconMenuClose";
BCMenuEvent.SEND_EMAIL_CLICK = "sendEmailClick";
BCMenuEvent.BLOG_POST_CLICK = "blogPostClick";
BCMenuEvent.COPY_LINK = "copyLink";
BCMenuEvent.COPY_CODE = "copyCode";
BCMenuEvent.VIDEO_REQUEST = "videoRequest";
BCMenuPage.EMAIL = "Email";
BCMenuPage.SHARE = "Share";
BCMenuPage.LINK = "Link";
BCMenuPage.CODE = "Embed";
BCMenuPage.INFO = "Info";
BCMenuAdditionalMedia.RELATED_VIDEOS = "related videos";
BCMenuAdditionalMedia.NEWEST_VIDEOS = "newest videos";
BCMenuAdditionalMedia.MOST_VIEWED_VIDEOS = "most viewed videos";
brightcove.modules[APIModules.MENU] = MenuAPI;
function MenuAPI(pExperience) {
    this.experience = pExperience;
    this.callback = pExperience.callback;
    this.name = APIModules.MENU;
}
var pttp = MenuAPI.prototype = new APIModule();
pttp.showIconMenu = function() {
    return this.callMethod("showIconMenu", arguments);
};
pttp.isIconMenuShowing = function() {
    return this.callMethod("isIconMenuShowing", arguments);
};
pttp.showMenuPage = function() {
    return this.callMethod("showMenuPage", arguments);
};
pttp.closeMenuPage = function() {
    return this.callMethod("closeMenuPage", arguments);
};
pttp.isMenuPageShowing = function() {
    return this.callMethod("isMenuPageShowing", arguments);
};
pttp.isOverlayMenuShowing = function() {
    return this.callMethod("isOverlayMenuShowing", arguments);
};
pttp.removeOverlayMenu = function() {
    return this.callMethod("removeOverlayMenu", arguments);
};
pttp.getCurrentMenuPage = function() {
    return this.callMethod("getCurrentMenuPage", arguments);
};
pttp.setOverlayMenuVisible = function() {
    return this.callMethod("setOverlayMenuVisible", arguments);
};
pttp.getOverlayMenuVisible = function() {
    return this.callMethod("getOverlayMenuVisible", arguments);
};
pttp.setAdditionalMediaForType = function() {
    return this.callMethod("setAdditionalMediaForType", arguments);
};
pttp.getAdditionalMediaForType = function() {
    return this.callMethod("getAdditionalMediaForType", arguments);
};
var bcAdditionalMediaCallback;
pttp.setAdditionalMediaCallback = function(pCallback, pTypes) {
    bcAdditionalMediaCallback = pCallback;
    return this.callMethod("setAdditionalMediaCallbackJS", ["bcCallAdditionalMediaCallback", pTypes]);
};
function bcCallAdditionalMediaCallback(pType, pMedia) {
    return bcAdditionalMediaCallback(pType, pMedia);
};
BCSearchEvent = {};
BCSearchEvent.RESULT = "searchResult";
BCSearchEvent.ERROR = "searchError";
brightcove.modules[APIModules.SEARCH] = SearchAPI;
SortOrderType = {
    ASC: "ASC",
    DESC: "DESC"
};
SortByType = {
    PUBLISH_DATE: "PUBLISH_DATE",
    CREATION_DATE: "CREATION_DATE",
    MODIFIED_DATE: "MODIFIED_DATE",
    PLAYS_TOTAL: "PLAYS_TOTAL",
    PLAYS_TRAILING_WEEK: "PLAYS_TRAILING_WEEK"
};
function SearchAPI(pExperience) {
    this.experience = pExperience;
    this.callback = pExperience.callback;
    this.name = APIModules.SEARCH;
}
SearchAPI.searches = {};
var pttp = SearchAPI.prototype = new APIModule();
pttp.findRelatedVideos = function() {
    var pID = this.callMethod("findRelatedVideosJS", arguments);
    return this.getVideoSearch(pID);
};
pttp.findVideosByText = function() {
    var pID = this.callMethod("findVideosByTextJS", arguments);
    return this.getVideoSearch(pID);
};
pttp.findVideosByTags = function() {
    var pID = this.callMethod("findVideosByTagsJS", arguments);
    return this.getVideoSearch(pID);
};
pttp.findAllVideos = function() {
    var pID = this.callMethod("findAllVideosJS", arguments);
    return this.getVideoSearch(pID);
};
pttp.getVideoSearch = function(pID) {
    var pSearch = SearchAPI.searches[pID];
    if (pSearch == undefined) {
        pSearch = new VideoSearch(pID, this.callback);
        SearchAPI.searches[pID] = pSearch;
    }
    return pSearch;
};
pttp.getMaxItemsInMemory = function() {
    return this.callMethod("getMaxItemsInMemory", arguments);
};
pttp.setMaxItemsInMemory = function() {
    return this.callMethod("setMaxItemsInMemory", arguments);
};
function VideoSearch(pID, pCallback) {
    this.id = pID;
    this.name = APIModules.SEARCH;
    this.callback = pCallback;
}
pttp = VideoSearch.prototype = new APIModule();
pttp.id =- 1;
pttp.callMethod = function(pMethod, pArguments) {
    if (pArguments == undefined)
        pArguments = [];
    var pArgs = [this.id];
    for (var i = 0; i < pArguments.length; i++)
        pArgs.push(pArguments[i]);
    return APIModule.callFlash(this.callback, {
        module: this.name,
        method: pMethod,
        params: pArgs
    });
};
pttp.getItems = function() {
    return this.callMethod("getItems", arguments);
};
pttp.getPage = function() {
    return this.callMethod("getPage", arguments);
};
pttp.getPageAsynch = function() {
    this.pageNumber = this.callMethod("getPageNumber");
    return this.callMethod("getPageAsynch", arguments);
};
pttp.getNextPage = function() {
    return this.callMethod("getNextPage", arguments);
};
pttp.getNextPageAsynch = function() {
    return this.callMethod("getNextPageAsynch", arguments);
};
pttp.getPreviousPage = function() {
    return this.callMethod("getPreviousPage", arguments);
};
pttp.getPreviousPageAsynch = function() {
    return this.callMethod("getPreviousPageAsynch", arguments);
};
pttp.getRow = function() {
    return this.callMethod("getRow", arguments);
};
pttp.getRowOnPage = function() {
    return this.callMethod("getRowOnPage", arguments);
};
pttp.purgeAll = function() {
    return this.callMethod("purgeAll", arguments);
};
pttp.purgePage = function() {
    return this.callMethod("purgePage", arguments);
};
pttp.getTotalRows = function() {
    return this.callMethod("getTotalRows", arguments);
};
pttp.getTotalPages = function() {
    return this.callMethod("getTotalPages", arguments);
};
pttp.getPageNumber = function() {
    return this.callMethod("getPageNumber", arguments);
};
pttp.getPageSize = function() {
    return this.callMethod("getPageSize", arguments);
};
pttp.getMaxPagesInMemory = function() {
    return this.callMethod("getMaxPagesInMemory", arguments);
};
pttp.setMaxPagesInMemory = function() {
    return this.callMethod("setMaxPagesInMemory", arguments);
};
BCSocialEvent = {}
BCSocialEvent.EMBED_CODE_RETRIEVED = "embedCodeRetrieved";
BCSocialEvent.LINK_GENERATED = "linkGenerated";
brightcove.modules[APIModules.SOCIAL] = SocialAPI;
function SocialAPI(pExperience) {
    this.experience = pExperience;
    this.callback = pExperience.callback;
    this.name = APIModules.SOCIAL;
}
var pttp = SocialAPI.prototype = new APIModule();
pttp.shareVideoViaEmail = function() {
    return this.callMethod("shareVideoViaEmail", arguments);
};
pttp.getEmbedCode = function() {
    return this.callMethod("getEmbedCode", arguments);
};
pttp.setEmbedCode = function() {
    return this.callMethod("setEmbedCode", arguments);
};
pttp.setLink = function() {
    return this.callMethod("setLink", arguments);
};
pttp.getLink = function() {
    return this.callMethod("getLink", arguments);
};
pttp.isURLShortenedForMedia = function() {
    return this.callMethod("isURLShortenedForMedia", arguments);
};
pttp.getRSS = function() {
    return this.callMethod("getRSS", arguments);
};
pttp.enableBlogging = function() {
    return this.callMethod("enableBlogging", arguments);
};
if (BCMediaEvent == undefined) {
    var BCMediaEvent = {}
    BCMediaEvent.BEGIN = "mediaBegin";
    BCMediaEvent.BUFFER_BEGIN = "mediaBufferBegin";
    BCMediaEvent.BUFFER_COMPLETE = "mediaBufferComplete";
    BCMediaEvent.CHANGE = "mediaChange";
    BCMediaEvent.COMPLETE = "mediaComplete";
    BCMediaEvent.ERROR = "mediaError";
    BCMediaEvent.MUTE_CHANGE = "mediaMuteChange";
    BCMediaEvent.PLAY = "mediaPlay";
    BCMediaEvent.PROGRESS = "mediaProgress";
    BCMediaEvent.SEEK = "mediaSeek";
    BCMediaEvent.SEEK_NOTIFY = "mediaSeekNotify";
    BCMediaEvent.STOP = "mediaStop";
    BCMediaEvent.VOLUME_CHANGE = "mediaVolumeChange";
}
var BCVideoEvent = {}
BCVideoEvent.END_BUFFER = "endBuffering";
BCVideoEvent.RENDITION_CHANGE = "renditionChange";
BCVideoEvent.VIDEO_CHANGE = "videoChange";
BCVideoEvent.VIDEO_COMPLETE = "videoComplete";
BCVideoEvent.VIDEO_CONNECT = "videoConnect";
BCVideoEvent.VIDEO_LOAD = "videoLoad";
BCVideoEvent.VIDEO_PROGRESS = "videoProgress";
BCVideoEvent.VIDEO_START = "videoStart";
BCVideoEvent.VIDEO_STOP = "videoStop";
BCVideoEvent.VIDEO_MUTE = "ui_mute";
BCVideoEvent.VIDEO_SEEK = "seek";
BCVideoEvent.START_BUFFER = "startBuffering";
BCVideoEvent.STREAM_START = "streamStart";
BCVideoEvent.VOLUME_CHANGE = "volumeChange";
brightcove.modules[APIModules.VIDEO_PLAYER] = VideoPlayerAPI;
function VideoPlayerAPI(pExperience) {
    this.experience = pExperience;
    if (pExperience) {
        this.callback = pExperience.callback;
    }
    this.name = APIModules.VIDEO_PLAYER;
}
var pttp = VideoPlayerAPI.prototype = new APIModule();
pttp.initializeComponentAPI = function() {
    return this.callMethod("initializeComponentAPI", arguments);
};
pttp.getComponentAPI = function(pElementName, pElementID) {
    if (pElementName != null) {
        if (pElementName == "VideoPlayer" || pElementName == "VideoDisplay") {
            var pPlayerAPI = this.experience.getModule(APIModules.VIDEO_PLAYER);
            pPlayerAPI.initializeComponentAPI();
            return pPlayerAPI;
        } else if (BCComponentModules[pElementName] != null) {
            return new BCComponentModules[pElementName](this.experience, this.callback, pElementID);
        }
    }
    return null;
};
pttp.isPlayerDefined = function() {
    return this.callMethod("isPlayerDefined", arguments);
};
pttp.setVideoFilter = function() {
    return this.callMethod("setVideoFilter", arguments);
};
pttp.getCurrentVideo = function() {
    return this.callMethod("getCurrentVideo", arguments);
};
pttp.getCurrentRendition = function() {
    return this.callMethod("getCurrentRendition", arguments);
};
pttp.loadVideo = function() {
    return this.callMethod("loadVideo", arguments);
};
pttp.cueVideo = function() {
    return this.callMethod("cueVideo", arguments);
};
pttp.play = function() {
    return this.callMethod("play", arguments);
};
pttp.stop = function() {
    return this.callMethod("stop", arguments);
};
pttp.pause = function() {
    return this.callMethod("pause", arguments);
};
pttp.seek = function() {
    return this.callMethod("seek", arguments);
};
pttp.mute = function() {
    return this.callMethod("mute", arguments);
};
pttp.setVolume = function() {
    return this.callMethod("setVolume", arguments);
};
pttp.getVolume = function() {
    return this.callMethod("getVolume", arguments);
};
pttp.showVolumeControls = function() {
    return this.callMethod("showVolumeControls", arguments);
};
pttp.getVideoPosition = function() {
    return this.callMethod("getVideoPosition", arguments);
};
pttp.getVideoDuration = function() {
    return this.callMethod("getVideoDuration", arguments);
};
pttp.getVideoBytesLoaded = function() {
    return this.callMethod("getVideoBytesLoaded", arguments);
};
pttp.getVideoBytesTotal = function() {
    return this.callMethod("getVideoBytesTotal", arguments);
};
pttp.isPlaying = function() {
    return this.callMethod("isPlaying", arguments);
};
pttp.isMuted = function() {
    return this.callMethod("isMuted", arguments);
};
pttp.getContentTypeDisplayed = function() {
    return this.callMethod("getContentTypeDisplayed", arguments);
};
pttp.setSize = function() {
    return this.callMethod("setSize", arguments);
};
pttp.move = function() {
    return this.callMethod("move", arguments);
};
pttp.getX = function() {
    return this.callMethod("getX", arguments);
};
pttp.getY = function() {
    return this.callMethod("getY", arguments);
};
pttp.getDefinition = function() {
    return this.callMethod("getDefinition", arguments);
};
pttp.getID = function() {
    return this.callMethod("getID", arguments);
};
pttp.getWidth = function() {
    return this.callMethod("getWidth", arguments);
};
pttp.getHeight = function() {
    return this.callMethod("getHeight", arguments);
};
pttp.getDisplayWidth = function() {
    return this.callMethod("getDisplayWidth", arguments);
};
pttp.getDisplayHeight = function() {
    return this.callMethod("getDisplayHeight", arguments);
};
pttp.getCurrentVideoWidth = function() {
    return this.callMethod('getCurrentVideoWidth', arguments);
};
pttp.getCurrentVideoHeight = function() {
    return this.callMethod('getCurrentVideoHeight', arguments);
};
pttp.getCurrentDisplayX = function() {
    return this.callMethod('getCurrentDisplayX', arguments);
}
pttp.getCurrentDisplayY = function() {
    return this.callMethod('getCurrentDisplayY', arguments);
}
pttp.getCurrentDisplayWidth = function() {
    return this.callMethod('getCurrentDisplayWidth', arguments);
};
pttp.getCurrentDisplayHeight = function() {
    return this.callMethod('getCurrentDisplayHeight', arguments);
};
pttp.getEnabled = function() {
    return this.callMethod("getEnabled", arguments);
};
pttp.setStyles = function() {
    return this.callMethod("setStyles", arguments);
};
pttp.setEnabled = function() {
    return this.callMethod("setEnabled", arguments);
};
pttp.getVisible = function() {
    return this.callMethod("getVisible", arguments);
};
pttp.setVisible = function() {
    return this.callMethod("setVisible", arguments);
};
pttp.getAlpha = function() {
    return this.callMethod("getAlpha", arguments);
};
pttp.setAlpha = function() {
    return this.callMethod("setAlpha", arguments);
};
pttp.getBlendMode = function() {
    return this.callMethod("getBlendMode", arguments);
};
pttp.setBlendMode = function() {
    return this.callMethod("setBlendMode", arguments);
};
pttp.getRotation = function() {
    return this.callMethod("getRotation", arguments);
};
pttp.setRotation = function() {
    return this.callMethod("setRotation", arguments);
};
pttp.getIndex = function() {
    return this.callMethod("getIndex", arguments);
};
pttp.toggleVolumeControls = function() {
    return this.callMethod("toggleVolumeControls", arguments);
};
pttp.toggleMenuPage = function() {
    return this.callMethod("toggleMenuPage", arguments);
};
pttp.getContainer = function() {
    var pObj = this.callMethod("getContainerJS", arguments);
    if (pObj) {
        return this.getComponentAPI(pObj.elementName, pObj.elementID);
    }
    return null;
};
pttp.getNextSibling = function() {
    var pObj = this.callMethod("getNextSiblingJS", arguments);
    if (pObj) {
        return this.getComponentAPI(pObj.elementName, pObj.elementID);
    }
    return null;
};
pttp.getPreviousSibling = function() {
    var pObj = this.callMethod("getPreviousSiblingJS", arguments);
    if (pObj) {
        return this.getComponentAPI(pObj.elementName, pObj.elementID);
    }
    return null;
};
pttp.getCSS = function() {
    return this.callMethod("getCSS", arguments);
};
pttp.mediaIsLive = function() {
    return this.callMethod("mediaIsLive", arguments);
};
pttp.setDynamicDeliveryParameters = function() {
    return this.callMethod("setDynamicDeliveryParameters", arguments);
};
pttp.removeUserMessage = function() {
    return this.callMethod("removeUserMessage", arguments);
};
pttp.enableInitialBandwidthDetection = function() {
    return this.callMethod("enableInitialBandwidthDetection", arguments);
};
pttp.getInitialBandwidthDetectionEnabled = function() {
    return this.callMethod("getInitialBandwidthDetectionEnabled", arguments);
};
pttp.setBufferCapacity = function() {
    return this.callMethod("setBufferCapacity", arguments);
};
pttp.getBufferCapacity = function() {
    return this.callMethod("getBufferCapacity", arguments);
};
pttp.setDefaultBufferTime = function() {
    return this.callMethod("setDefaultBufferTime", arguments);
};
pttp.getDefaultBufferTime = function() {
    return this.callMethod("getDefaultBufferTime", arguments);
};
pttp.getBufferLength = function() {
    return this.callMethod("getBufferLength", arguments);
};
pttp.getBackBufferLength = function() {
    return this.callMethod("getBackBufferLength", arguments);
};
pttp.getBackBufferCapacity = function() {
    return this.callMethod("getBackBufferCapacity", arguments);
};
pttp.setBackBufferCapacity = function() {
    return this.callMethod("setBackBufferCapacity", arguments);
};
pttp.setConnectOnLoad = function() {
    return this.callMethod("setConnectOnLoad", arguments);
};
pttp.setBitRateRange = function() {
    return this.callMethod("setBitRateRange", arguments);
};
pttp.requestRenditionChange = function() {
    return this.callMethod("requestRenditionChange", arguments);
};
pttp.getCurrentBandwidth = function() {
    return this.callMethod("getCurrentBandwidth", arguments);
};
pttp.getCurrentFrameRate = function() {
    return this.callMethod("getCurrentFrameRate", arguments);
};
pttp.setPrivacyMode = function() {
    return this.callMethod("setPrivacyMode", arguments);
};
pttp.getPrivacyMode = function() {
    return this.callMethod("getPrivacyMode", arguments);
};
pttp.getMediaControllerProperty = function() {
    return this.callMethod("getMediaControllerProperty", arguments);
};
var bcRenditionSelectionCallback;
pttp.setRenditionSelectionCallback = function(pSelector) {
    bcRenditionSelectionCallback = pSelector;
    if (bcRenditionSelectionCallback != null) {
        return this.callMethod("setRenditionSelectionCallbackJS", ["bcCallRenditionSelectionCallback"]);
    } else {
        return this.callMethod("setRenditionSelectionCallbackJS", []);
    }
};
function bcCallRenditionSelectionCallback(pContext) {
    return bcRenditionSelectionCallback(pContext);
};
function ComponentAPI() {
    this.name = APIModules.EXPERIENCE;
}
var pttp = ComponentAPI.prototype = new APIModule();
pttp.callMethod = function(pMethod, pArguments) {
    var pArgs = [];
    for (var i = 0; i < pArguments.length; i++)
        pArgs.push(pArguments[i]);
    return APIModule.callFlash(this.callback, {
        module: this.name,
        element: this.elementID,
        method: "getComponentAPI",
        componentMethod: pMethod,
        params: pArgs
    });
};
pttp.getComponentAPI = function(pElementName, pElementID) {
    if (pElementName != null) {
        if (pElementName == "VideoPlayer" || pElementName == "VideoDisplay") {
            var pPlayerAPI = this.experience.getModule(APIModules.VIDEO_PLAYER);
            pPlayerAPI.initializeComponentAPI();
            return pPlayerAPI;
        } else if (BCComponentModules[pElementName] != null) {
            return new BCComponentModules[pElementName](this.experience, this.callback, pElementID);
        }
    }
    return null;
};
pttp.setSize = function() {
    return this.callMethod("setSize", arguments);
};
pttp.move = function() {
    return this.callMethod("move", arguments);
};
pttp.getX = function() {
    return this.callMethod("getX", arguments);
};
pttp.getY = function() {
    return this.callMethod("getY", arguments);
};
pttp.getVisible = function() {
    return this.callMethod("getVisible", arguments);
};
pttp.setVisible = function() {
    return this.callMethod("setVisible", arguments);
};
pttp.getIncludeInLayout = function() {
    return this.callMethod("getIncludeInLayout", arguments);
};
pttp.setIncludeInLayout = function() {
    return this.callMethod("setIncludeInLayout", arguments);
};
pttp.getAlpha = function() {
    return this.callMethod("getAlpha", arguments);
};
pttp.setAlpha = function() {
    return this.callMethod("setAlpha", arguments);
};
pttp.getDefinition = function() {
    return this.callMethod("getDefinition", arguments);
};
pttp.getID = function() {
    return this.callMethod("getID", arguments);
};
pttp.getWidth = function() {
    return this.callMethod("getWidth", arguments);
};
pttp.getHeight = function() {
    return this.callMethod("getHeight", arguments);
};
pttp.getIndex = function() {
    return this.callMethod("getIndex", arguments);
};
pttp.getContainer = function() {
    var pObj = this.callMethod("getContainerJS", arguments);
    if (pObj) {
        return this.getComponentAPI(pObj.elementName, pObj.elementID);
    }
    return null;
};
pttp.getNextSibling = function() {
    var pObj = this.callMethod("getNextSiblingJS", arguments);
    if (pObj) {
        return this.getComponentAPI(pObj.elementName, pObj.elementID);
    }
    return null;
};
pttp.getPreviousSibling = function() {
    var pObj = this.callMethod("getPreviousSiblingJS", arguments);
    if (pObj) {
        return this.getComponentAPI(pObj.elementName, pObj.elementID);
    }
    return null;
};
function UIObjectAPI(pCallback, pElementID) {
    this.callback = pCallback;
    this.elementID = pElementID;
}
var pttp = UIObjectAPI.prototype = new ComponentAPI();
pttp.getEnabled = function() {
    return this.callMethod("getEnabled", arguments);
};
pttp.setEnabled = function() {
    return this.callMethod("setEnabled", arguments);
};
pttp.getBlendMode = function() {
    return this.callMethod("getBlendMode", arguments);
};
pttp.setBlendMode = function() {
    return this.callMethod("setBlendMode", arguments);
};
pttp.getRotation = function() {
    return this.callMethod("getRotation", arguments);
};
pttp.setRotation = function() {
    return this.callMethod("setRotation", arguments);
};
pttp.setStyles = function() {
    return this.callMethod("setStyles", arguments);
};
pttp.getCSS = function() {
    return this.callMethod("getCSS", arguments);
};
if (BCMediaEvent == undefined) {
    var BCMediaEvent = {}
    BCMediaEvent.BEGIN = "mediaBegin";
    BCMediaEvent.BUFFER_BEGIN = "mediaBufferBegin";
    BCMediaEvent.BUFFER_COMPLETE = "mediaBufferComplete";
    BCMediaEvent.CHANGE = "mediaChange";
    BCMediaEvent.COMPLETE = "mediaComplete";
    BCMediaEvent.ERROR = "mediaError";
    BCMediaEvent.MUTE_CHANGE = "mediaMuteChange";
    BCMediaEvent.PLAY = "mediaPlay";
    BCMediaEvent.PROGRESS = "mediaProgress";
    BCMediaEvent.SEEK = "mediaSeek";
    BCMediaEvent.STOP = "mediaStop";
    BCMediaEvent.VOLUME_CHANGE = "mediaVolumeChange";
}
BCComponentModules["AudioPlayer"] = AudioPlayerAPI;
function AudioPlayerAPI(pExperience, pCallback, pElementID) {
    this.experience = pExperience;
    this.callback = pCallback;
    this.elementID = pElementID;
}
var pttp = AudioPlayerAPI.prototype = new ComponentAPI();
pttp.play = function() {
    return this.callMethod("play", arguments);
};
pttp.pause = function() {
    return this.callMethod("pause", arguments);
};
pttp.stop = function() {
    return this.callMethod("stop", arguments);
};
pttp.seek = function() {
    return this.callMethod("seek", arguments);
};
pttp.mute = function() {
    return this.callMethod("mute", arguments);
};
pttp.setVolume = function() {
    return this.callMethod("setVolume", arguments);
};
pttp.getVolume = function() {
    return this.callMethod("getVolume", arguments);
};
pttp.isPlaying = function() {
    return this.callMethod("isPlaying", arguments);
};
pttp.isMuted = function() {
    return this.callMethod("isMuted", arguments);
};
pttp.getMediaBytesLoaded = function() {
    return this.callMethod("getMediaBytesLoaded", arguments);
};
pttp.getMediaBytesTotal = function() {
    return this.callMethod("getMediaBytesTotal", arguments);
};
pttp.getMediaDuration = function() {
    return this.callMethod("getMediaDuration", arguments);
};
pttp.getMediaPosition = function() {
    return this.callMethod("getMediaPosition", arguments);
};
pttp.getCurrentMedia = function() {
    return this.callMethod("getCurrentMedia", arguments);
};
pttp.cueMedia = function() {
    return this.callMethod("cueMedia", arguments);
};
pttp.loadMedia = function() {
    return this.callMethod("loadMedia", arguments);
};
BCComponentModules["Banner"] = BannerAPI;
function BannerAPI(pExperience, pCallback, pElementID) {
    this.experience = pExperience;
    this.callback = pCallback;
    this.elementID = pElementID;
}
var pttp = BannerAPI.prototype = new UIObjectAPI();
BCComponentModules["Button"] = ButtonAPI;
function ButtonAPI(pExperience, pCallback, pElementID) {
    this.experience = pExperience;
    this.callback = pCallback;
    this.elementID = pElementID;
}
var pttp = ButtonAPI.prototype = new UIObjectAPI();
pttp.getLabel = function() {
    return this.callMethod("getLabel", arguments);
};
pttp.setLabel = function() {
    return this.callMethod("setLabel", arguments);
};
pttp.setFont = function() {
    return this.callMethod("setFont", arguments);
};
pttp.getFont = function() {
    return this.callMethod("getFont", arguments);
};
pttp.setLabelSize = function() {
    return this.callMethod("setLabelSize", arguments);
};
pttp.getLabelSize = function() {
    return this.callMethod("getLabelSize", arguments);
};
pttp.getAutoSize = function() {
    return this.callMethod("getAutoSize", arguments);
};
pttp.setAutoSize = function() {
    return this.callMethod("setAutoSize", arguments);
};
pttp.getTruncateLabel = function() {
    return this.callMethod("getTruncateLabel", arguments);
};
pttp.setTruncateLabel = function() {
    return this.callMethod("setTruncateLabel", arguments);
};
pttp.getMultiline = function() {
    return this.callMethod("getMultiline", arguments);
};
pttp.setMultiline = function() {
    return this.callMethod("setMultiline", arguments);
};
pttp.getIsTruncated = function() {
    return this.callMethod("getIsTruncated", arguments);
};
pttp.getLabelWidth = function() {
    return this.callMethod("getLabelWidth", arguments);
};
pttp.getShowBack = function() {
    return this.callMethod("getShowBack", arguments);
};
pttp.setShowBack = function() {
    return this.callMethod("setShowBack", arguments);
};
pttp.getTooltip = function() {
    return this.callMethod("getTooltip", arguments);
};
pttp.setTooltip = function() {
    return this.callMethod("setTooltip", arguments);
};
pttp.getIconScale = function() {
    return this.callMethod("getIconScale", arguments);
};
pttp.setIconScale = function() {
    return this.callMethod("setIconScale", arguments);
};
pttp.getIconOffsetX = function() {
    return this.callMethod("getIconOffsetX", arguments);
};
pttp.setIconOffsetX = function() {
    return this.callMethod("setIconOffsetX", arguments);
};
pttp.getIconOffsetY = function() {
    return this.callMethod("getIconOffsetY", arguments);
};
pttp.setIconOffsetY = function() {
    return this.callMethod("setIconOffsetY", arguments);
};
pttp.getLabelOffsetX = function() {
    return this.callMethod("getLabelOffsetX", arguments);
};
pttp.setLabelOffsetX = function() {
    return this.callMethod("setLabelOffsetX", arguments);
};
pttp.getLabelOffsetY = function() {
    return this.callMethod("getLabelOffsetY", arguments);
};
pttp.setLabelOffsetY = function() {
    return this.callMethod("setLabelOffsetY", arguments);
};
pttp.getLabelBuffer = function() {
    return this.callMethod("getLabelBuffer", arguments);
};
pttp.setLabelBuffer = function() {
    return this.callMethod("setLabelBuffer", arguments);
};
pttp.getIconAlignmentH = function() {
    return this.callMethod("getIconAlignmentH", arguments);
};
pttp.setIconAlignmentH = function() {
    return this.callMethod("setIconAlignmentH", arguments);
};
pttp.getIconAlignmentV = function() {
    return this.callMethod("getIconAlignmentV", arguments);
};
pttp.setIconAlignmentV = function() {
    return this.callMethod("setIconAlignmentV", arguments);
};
pttp.getLabelAlignmentH = function() {
    return this.callMethod("getLabelAlignmentH", arguments);
};
pttp.setLabelAlignmentH = function() {
    return this.callMethod("setLabelAlignmentH", arguments);
};
pttp.getLabelAlignmentV = function() {
    return this.callMethod("getLabelAlignmentV", arguments);
};
pttp.setLabelAlignmentV = function() {
    return this.callMethod("setLabelAlignmentV", arguments);
};
pttp.getIconName = function() {
    return this.callMethod("getIconName", arguments);
};
pttp.setIconName = function() {
    return this.callMethod("setIconName", arguments);
};
BCComponentModules["ChromelessVideoPlayer"] = ChromelessVideoPlayerAPI;
function ChromelessVideoPlayerAPI(pExperience, pCallback, pElementID) {
    this.experience = pExperience;
    this.callback = pCallback;
    this.elementID = pElementID;
    this.initializeComponentAPI();
}
var pttp = ChromelessVideoPlayerAPI.prototype = new VideoPlayerAPI();
pttp.callChromelessComponentMethod = function(pMethod, pArguments) {
    var args = [];
    for (var i = 0; i < pArguments.length; i++)
        args.push(pArguments[i]);
    return APIModule.callFlash(this.callback, {
        module: APIModules.EXPERIENCE,
        element: this.elementID,
        method: "getComponentAPI",
        componentMethod: pMethod,
        params: args
    });
};
pttp.getControls = function() {
    var controls = this.callChromelessComponentMethod("getControlsJS", arguments);
    if (controls) {
        return this.getComponentAPI(controls.elementName, controls.elementID);
    }
    return null;
};
pttp.showControls = function() {
    return this.callChromelessComponentMethod("showControls", arguments);
};
pttp.getControlsVisible = function() {
    return this.callChromelessComponentMethod("getControlsVisible", arguments);
};
pttp.getIncludeInLayout = function() {
    return this.callChromelessComponentMethod("getIncludeInLayout", arguments);
};
pttp.setIncludeInLayout = function() {
    return this.callChromelessComponentMethod("setIncludeInLayout", arguments);
};
BCComponentModules["ComboBox"] = ComboBoxAPI;
function ComboBoxAPI(pExperience, pCallback, pElementID) {
    this.experience = pExperience;
    this.callback = pCallback;
    this.elementID = pElementID;
}
var pttp = ComboBoxAPI.prototype = new UIObjectAPI();
pttp.setSelectedIndex = function() {
    return this.callMethod("setSelectedIndex", arguments);
};
pttp.getSelectedIndex = function() {
    return this.callMethod("getSelectedIndex", arguments);
};
pttp.getSelectedData = function() {
    return this.callMethod("getSelectedData", arguments);
};
pttp.getDataAtIndex = function() {
    return this.callMethod("getDataAtIndex", arguments);
};
pttp.getData = function() {
    return this.callMethod("getData", arguments);
};
pttp.setData = function() {
    return this.callMethod("setData", arguments);
};
pttp.getNumItems = function() {
    return this.callMethod("getNumItems", arguments);
};
pttp.getScrollerWidth = function() {
    return this.callMethod("getScrollerWidth", arguments);
};
pttp.setScrollerWidth = function() {
    return this.callMethod("setScrollerWidth", arguments);
};
pttp.getScrollerInset = function() {
    return this.callMethod("getScrollerInset", arguments);
};
pttp.setScrollerInset = function() {
    return this.callMethod("setScrollerInset", arguments);
};
pttp.getItemLeading = function() {
    return this.callMethod("getItemLeading", arguments);
};
pttp.setItemLeading = function() {
    return this.callMethod("setItemLeading", arguments);
};
pttp.getItemInsetH = function() {
    return this.callMethod("getItemInsetH", arguments);
};
pttp.setItemInsetH = function() {
    return this.callMethod("setItemInsetH", arguments);
};
pttp.getItemInsetV = function() {
    return this.callMethod("getItemInsetV", arguments);
};
pttp.setItemInsetV = function() {
    return this.callMethod("setItemInsetV", arguments);
};
pttp.getRowHeight = function() {
    return this.callMethod("getRowHeight", arguments);
};
pttp.setRowHeight = function() {
    return this.callMethod("setRowHeight", arguments);
};
pttp.getLabelBufferLeft = function() {
    return this.callMethod("getLabelBufferLeft", arguments);
};
pttp.setLabelBufferLeft = function() {
    return this.callMethod("setLabelBufferLeft", arguments);
};
pttp.getLabelBufferRight = function() {
    return this.callMethod("getLabelBufferRight", arguments);
};
pttp.setLabelBufferRight = function() {
    return this.callMethod("setLabelBufferRight", arguments);
};
pttp.getLabelBufferTop = function() {
    return this.callMethod("getLabelBufferTop", arguments);
};
pttp.setLabelBufferTop = function() {
    return this.callMethod("setLabelBufferTop", arguments);
};
pttp.getAnimated = function() {
    return this.callMethod("getAnimated", arguments);
};
pttp.setAnimated = function() {
    return this.callMethod("setAnimated", arguments);
};
pttp.getLabelField = function() {
    return this.callMethod("getLabelField", arguments);
};
pttp.setLabelField = function() {
    return this.callMethod("setLabelField", arguments);
};
pttp.getLabel = function() {
    return this.callMethod("getLabel", arguments);
};
pttp.setLabel = function() {
    return this.callMethod("setLabel", arguments);
};
function ContainerAPI(pExperience, pCallback, pElementID) {
    this.experience = pExperience;
    this.callback = pCallback;
    this.elementID = pElementID;
}
var pttp = ContainerAPI.prototype = new UIObjectAPI();
pttp.getHAlign = function() {
    return this.callMethod("getHAlign", arguments);
};
pttp.setHAlign = function() {
    return this.callMethod("setHAlign", arguments);
};
pttp.getVAlign = function() {
    return this.callMethod("getVAlign", arguments);
};
pttp.setVAlign = function() {
    return this.callMethod("setVAlign", arguments);
};
pttp.getBackgroundColor = function() {
    return this.callMethod("getBackgroundColor", arguments);
};
pttp.setBackgroundColor = function() {
    return this.callMethod("setBackgroundColor", arguments);
};
pttp.getBackgroundImage = function() {
    return this.callMethod("getBackgroundImage", arguments);
};
pttp.setBackgroundImage = function() {
    return this.callMethod("setBackgroundImage", arguments);
};
pttp.getGutter = function() {
    return this.callMethod("getGutter", arguments);
};
pttp.setGutter = function() {
    return this.callMethod("setGutter", arguments);
};
pttp.getPadding = function() {
    return this.callMethod("getPadding", arguments);
};
pttp.setPadding = function() {
    return this.callMethod("setPadding", arguments);
};
pttp.appendChild = function() {
    return this.callMethod("appendChild", arguments);
};
pttp.insertChildAt = function() {
    return this.callMethod("insertChildAt", arguments);
};
pttp.removeChildByID = function() {
    return this.callMethod("removeChildByID", arguments);
};
pttp.getNumChildren = function() {
    return this.callMethod("getNumChildren", arguments);
};
pttp.removeChildAt = function() {
    return this.callMethod("removeChildAt", arguments);
};
pttp.getChildAt = function() {
    var pObj = this.callMethod("getChildAtJS", arguments);
    if (pObj) {
        return this.getComponentAPI(pObj.elementName, pObj.elementID);
    }
    return null;
};
BCComponentModules["ExpandingBanner"] = ExpandingBannerAPI;
function ExpandingBannerAPI(pExperience, pCallback, pElementID) {
    this.experience = pExperience;
    this.callback = pCallback;
    this.elementID = pElementID;
}
var pttp = ExpandingBannerAPI.prototype = new UIObjectAPI();
pttp.expand = function() {
    return this.callMethod("expand", arguments);
};
pttp.contract = function() {
    return this.callMethod("contract", arguments);
};
pttp.getExpanded = function() {
    return this.callMethod("getExpanded", arguments);
};
pttp.synchBannerWithExternal = function() {
    return this.callMethod("synchBannerWithExternal", arguments);
};
BCComponentModules["GraphicBlock"] = GraphicBlockAPI;
function GraphicBlockAPI(pExperience, pCallback, pElementID) {
    this.experience = pExperience;
    this.callback = pCallback;
    this.elementID = pElementID;
}
var pttp = GraphicBlockAPI.prototype = new UIObjectAPI();
BCComponentModules["Image"] = ImageAPI;
function ImageAPI(pExperience, pCallback, pElementID) {
    this.experience = pExperience;
    this.callback = pCallback;
    this.elementID = pElementID;
}
var pttp = ImageAPI.prototype = new UIObjectAPI();
pttp.setSource = function() {
    return this.callMethod("setSource", arguments);
};
pttp.getSource = function() {
    return this.callMethod("getSource", arguments);
};
pttp.getScaleMode = function() {
    return this.callMethod("getScaleMode", arguments);
};
pttp.setScaleMode = function() {
    return this.callMethod("setScaleMode", arguments);
};
pttp.getHAlign = function() {
    return this.callMethod("getHAlign", arguments);
};
pttp.setHAlign = function() {
    return this.callMethod("setHAlign", arguments);
};
pttp.getVAlign = function() {
    return this.callMethod("getVAlign", arguments);
};
pttp.setVAlign = function() {
    return this.callMethod("setVAlign", arguments);
};
pttp.getURL = function() {
    return this.callMethod("getURL", arguments);
};
pttp.setURL = function() {
    return this.callMethod("setURL", arguments);
};
pttp.getTooltip = function() {
    return this.callMethod("getTooltip", arguments);
};
pttp.setTooltip = function() {
    return this.callMethod("setTooltip", arguments);
};
pttp.getInset = function() {
    return this.callMethod("getInset", arguments);
};
pttp.setInset = function() {
    return this.callMethod("setInset", arguments);
};
pttp.getContentWidth = function() {
    return this.callMethod("getContentWidth", arguments);
};
pttp.getContentHeight = function() {
    return this.callMethod("getContentHeight", arguments);
};
BCComponentModules["Label"] = LabelAPI;
function LabelAPI(pExperience, pCallback, pElementID) {
    this.experience = pExperience;
    this.callback = pCallback;
    this.elementID = pElementID;
}
var pttp = LabelAPI.prototype = new UIObjectAPI();
pttp.setText = function() {
    return this.callMethod("setText", arguments);
};
pttp.getText = function() {
    return this.callMethod("getText", arguments);
};
pttp.setType = function() {
    return this.callMethod("setType", arguments);
};
pttp.getType = function() {
    return this.callMethod("getType", arguments);
};
pttp.setFont = function() {
    return this.callMethod("setFont", arguments);
};
pttp.getFont = function() {
    return this.callMethod("getFont", arguments);
};
pttp.setColor = function() {
    return this.callMethod("setColor", arguments);
};
pttp.getColor = function() {
    return this.callMethod("getColor", arguments);
};
pttp.setTextSize = function() {
    return this.callMethod("setTextSize", arguments);
};
pttp.getTextSize = function() {
    return this.callMethod("getTextSize", arguments);
};
pttp.getHAlign = function() {
    return this.callMethod("getHAlign", arguments);
};
pttp.setHAlign = function() {
    return this.callMethod("setHAlign", arguments);
};
pttp.getVAlign = function() {
    return this.callMethod("getVAlign", arguments);
};
pttp.setVAlign = function() {
    return this.callMethod("setVAlign", arguments);
};
pttp.setUnderline = function() {
    return this.callMethod("setUnderline", arguments);
};
pttp.getUnderline = function() {
    return this.callMethod("getUnderline", arguments);
};
pttp.setHTMLEnabled = function() {
    return this.callMethod("setHTMLEnabled", arguments);
};
pttp.getHTMLEnabled = function() {
    return this.callMethod("getHTMLEnabled", arguments);
};
pttp.setAutoSize = function() {
    return this.callMethod("setAutoSize", arguments);
};
pttp.getAutoSize = function() {
    return this.callMethod("getAutoSize", arguments);
};
pttp.setTruncate = function() {
    return this.callMethod("setTruncate", arguments);
};
pttp.getTruncate = function() {
    return this.callMethod("getTruncate", arguments);
};
pttp.setMultiline = function() {
    return this.callMethod("setMultiline", arguments);
};
pttp.getMultiline = function() {
    return this.callMethod("getMultiline", arguments);
};
pttp.getIsTruncated = function() {
    return this.callMethod("getIsTruncated", arguments);
};
pttp.getTextWidth = function() {
    return this.callMethod("getTextWidth", arguments);
};
pttp.getTextHeight = function() {
    return this.callMethod("getTextHeight", arguments);
};
BCComponentModules["LayoutBox"] = LayoutBoxAPI;
function LayoutBoxAPI(pExperience, pCallback, pElementID) {
    this.experience = pExperience;
    this.callback = pCallback;
    this.elementID = pElementID;
}
var pttp = LayoutBoxAPI.prototype = new ComponentAPI();
pttp.getHAlign = function() {
    return this.callMethod("getHAlign", arguments);
};
pttp.setHAlign = function() {
    return this.callMethod("setHAlign", arguments);
};
pttp.getVAlign = function() {
    return this.callMethod("getVAlign", arguments);
};
pttp.setVAlign = function() {
    return this.callMethod("setVAlign", arguments);
};
pttp.getBackgroundColor = function() {
    return this.callMethod("getBackgroundColor", arguments);
};
pttp.setBackgroundColor = function() {
    return this.callMethod("setBackgroundColor", arguments);
};
pttp.getBackgroundImage = function() {
    return this.callMethod("getBackgroundImage", arguments);
};
pttp.setBackgroundImage = function() {
    return this.callMethod("setBackgroundImage", arguments);
};
pttp.getGutter = function() {
    return this.callMethod("getGutter", arguments);
};
pttp.setGutter = function() {
    return this.callMethod("setGutter", arguments);
};
pttp.getPadding = function() {
    return this.callMethod("getPadding", arguments);
};
pttp.setPadding = function() {
    return this.callMethod("setPadding", arguments);
};
pttp.appendChild = function() {
    return this.callMethod("appendChild", arguments);
};
pttp.insertChildAt = function() {
    return this.callMethod("insertChildAt", arguments);
};
pttp.removeChildByID = function() {
    return this.callMethod("removeChildByID", arguments);
};
pttp.getNumChildren = function() {
    return this.callMethod("getNumChildren", arguments);
};
pttp.removeChildAt = function() {
    return this.callMethod("removeChildAt", arguments);
};
pttp.getChildAt = function() {
    var pObj = this.callMethod("getChildAtJS", arguments);
    if (pObj) {
        return this.getComponentAPI(pObj.elementName, pObj.elementID);
    }
    return null;
};
BCComponentModules["Link"] = LinkAPI;
function LinkAPI(pExperience, pCallback, pElementID) {
    this.experience = pExperience;
    this.callback = pCallback;
    this.elementID = pElementID;
}
var pttp = LinkAPI.prototype = new UIObjectAPI();
pttp.setText = function() {
    return this.callMethod("setText", arguments);
};
pttp.getText = function() {
    return this.callMethod("getText", arguments);
};
pttp.setAutoSize = function() {
    return this.callMethod("setAutoSize", arguments);
};
pttp.getAutoSize = function() {
    return this.callMethod("getAutoSize", arguments);
};
pttp.setFont = function() {
    return this.callMethod("setFont", arguments);
};
pttp.getFont = function() {
    return this.callMethod("getFont", arguments);
};
pttp.setTextSize = function() {
    return this.callMethod("setTextSize", arguments);
};
pttp.getTextSize = function() {
    return this.callMethod("getTextSize", arguments);
};
pttp.getHAlign = function() {
    return this.callMethod("getHAlign", arguments);
};
pttp.setHAlign = function() {
    return this.callMethod("setHAlign", arguments);
};
pttp.getVAlign = function() {
    return this.callMethod("getVAlign", arguments);
};
pttp.setVAlign = function() {
    return this.callMethod("setVAlign", arguments);
};
pttp.setMultiline = function() {
    return this.callMethod("setMultiline", arguments);
};
pttp.getMultiline = function() {
    return this.callMethod("getMultiline", arguments);
};
pttp.getURL = function() {
    return this.callMethod("getURL", arguments);
};
pttp.setURL = function() {
    return this.callMethod("setURL", arguments);
};
pttp.getTooltip = function() {
    return this.callMethod("getTooltip", arguments);
};
pttp.setTooltip = function() {
    return this.callMethod("setTooltip", arguments);
};
BCComponentModules["List"] = ListAPI;
function ListAPI(pExperience, pCallback, pElementID) {
    this.experience = pExperience;
    this.callback = pCallback;
    this.elementID = pElementID;
}
var pttp = ListAPI.prototype = new UIObjectAPI();
pttp.setSelectedIndex = function() {
    return this.callMethod("setSelectedIndex", arguments);
};
pttp.getSelectedIndex = function() {
    return this.callMethod("getSelectedIndex", arguments);
};
pttp.previous = function() {
    return this.callMethod("previous", arguments);
};
pttp.next = function() {
    return this.callMethod("next", arguments);
};
pttp.scrollTo = function() {
    return this.callMethod("scrollTo", arguments);
};
pttp.getSelectedData = function() {
    return this.callMethod("getSelectedData", arguments);
};
pttp.getDataAtIndex = function() {
    return this.callMethod("getDataAtIndex", arguments);
};
pttp.getData = function() {
    return this.callMethod("getData", arguments);
};
pttp.setData = function() {
    return this.callMethod("setData", arguments);
};
pttp.showPlaylist = function() {
    return this.callMethod("showPlaylist", arguments);
};
pttp.getNumItems = function() {
    return this.callMethod("getNumItems", arguments);
};
pttp.getAutomaticAdvance = function() {
    return this.callMethod("getAutomaticAdvance", arguments);
};
pttp.setAutomaticAdvance = function() {
    return this.callMethod("setAutomaticAdvance", arguments);
};
pttp.getScrollerWidth = function() {
    return this.callMethod("getScrollerWidth", arguments);
};
pttp.setScrollerWidth = function() {
    return this.callMethod("setScrollerWidth", arguments);
};
pttp.getScrollerInset = function() {
    return this.callMethod("getScrollerInset", arguments);
};
pttp.setScrollerInset = function() {
    return this.callMethod("setScrollerInset", arguments);
};
pttp.getItemLeading = function() {
    return this.callMethod("getItemLeading", arguments);
};
pttp.setItemLeading = function() {
    return this.callMethod("setItemLeading", arguments);
};
pttp.getItemInsetH = function() {
    return this.callMethod("getItemInsetH", arguments);
};
pttp.setItemInsetH = function() {
    return this.callMethod("setItemInsetH", arguments);
};
pttp.getItemInsetV = function() {
    return this.callMethod("getItemInsetV", arguments);
};
pttp.setItemInsetV = function() {
    return this.callMethod("setItemInsetV", arguments);
};
pttp.getRowHeight = function() {
    return this.callMethod("getRowHeight", arguments);
};
pttp.setRowHeight = function() {
    return this.callMethod("setRowHeight", arguments);
};
BCComponentModules["LiveButton"] = ButtonAPI;
BCComponentModules["Mask"] = MaskAPI;
function MaskAPI(pExperience, pCallback, pElementID) {
    this.experience = pExperience;
    this.callback = pCallback;
    this.elementID = pElementID;
}
var pttp = MaskAPI.prototype = new UIObjectAPI();
BCComponentModules["MediaControls"] = MediaControlsAPI;
function MediaControlsAPI(pExperience, pCallback, pElementID) {
    this.experience = pExperience;
    this.callback = pCallback;
    this.elementID = pElementID;
}
var pttp = MediaControlsAPI.prototype = new ContainerAPI();
BCComponentModules["Module"] = ModuleAPI;
function ModuleAPI(pExperience, pCallback, pElementID) {
    this.name = APIModules.EXPERIENCE;
    this.experience = pExperience;
    this.callback = pCallback;
    this.elementID = pElementID;
    var methods = this.experience.getModule("experience").callMethod("getCustomModuleMethods", [pElementID]);
    var method;
    for (var i = 0; i < methods.length; i++) {
        method = methods[i];
        this[method] = (function(methodName) {
            return function() {
                return this.callMethod(methodName, arguments);
            }
        })(method);
    }
}
var pttp = ModuleAPI.prototype = new APIModule();
pttp.callMethod = function(pMethod, pArguments) {
    var args = [];
    for (var i = 0; i < pArguments.length; i++) {
        args.push(pArguments[i]);
    }
    return APIModule.callFlash(this.callback, {
        module: this.name,
        element: this.elementID,
        method: "getComponentAPI",
        componentMethod: pMethod,
        params: args
    });
};
BCComponentModules["Playhead"] = PlayheadAPI;
function PlayheadAPI(pExperience, pCallback, pElementID) {
    this.experience = pExperience;
    this.callback = pCallback;
    this.elementID = pElementID;
}
var pttp = PlayheadAPI.prototype = new UIObjectAPI();
pttp.getSliderWidth = function() {
    return this.callMethod("getSliderWidth", arguments);
};
pttp.setSliderWidth = function() {
    return this.callMethod("setSliderWidth", arguments);
};
pttp.getAutohideSlider = function() {
    return this.callMethod("getAutohideSlider", arguments);
};
pttp.setAutohideSlider = function() {
    return this.callMethod("setAutohideSlider", arguments);
};
if (BCLoaderEvent == undefined) {
    var BCLoaderEvent = {};
    BCLoaderEvent.PROGRESS = "loaderProgress";
    BCLoaderEvent.INIT = "loaderInit";
    BCLoaderEvent.COMPLETE = "loaderComplete";
    BCLoaderEvent.ERROR = "loaderError";
}
if (BCLoaderState == undefined) {
    var BCLoaderState = {};
    BCLoaderState.DEFAULT = "default";
    BCLoaderState.LOADING = "loading";
    BCLoaderState.LOADED = "loaded";
    BCLoaderState.ERROR = "error";
}
BCComponentModules["SWFLoader"] = SWFLoaderAPI;
function SWFLoaderAPI(pExperience, pCallback, pElementID) {
    this.experience = pExperience;
    this.callback = pCallback;
    this.elementID = pElementID;
}
var pttp = SWFLoaderAPI.prototype = new UIObjectAPI();
pttp.getState = function() {
    return this.callMethod("getState", arguments);
}
pttp.setSource = function() {
    return this.callMethod("setSource", arguments);
};
pttp.getSource = function() {
    return this.callMethod("getSource", arguments);
};
pttp.callSWFMethod = function() {
    return this.callMethod("callSWFMethod", arguments);
};
BCComponentModules["TabBar"] = TabBarAPI;
function TabBarAPI(pExperience, pCallback, pElementID) {
    this.experience = pExperience;
    this.callback = pCallback;
    this.elementID = pElementID;
}
var pttp = TabBarAPI.prototype = new UIObjectAPI();
pttp.setSelectedIndex = function() {
    return this.callMethod("setSelectedIndex", arguments);
};
pttp.getSelectedIndex = function() {
    return this.callMethod("getSelectedIndex", arguments);
};
pttp.getSelectedData = function() {
    return this.callMethod("getSelectedData", arguments);
};
pttp.getDataAtIndex = function() {
    return this.callMethod("getDataAtIndex", arguments);
};
pttp.getData = function() {
    return this.callMethod("getData", arguments);
};
pttp.setData = function() {
    return this.callMethod("setData", arguments);
};
pttp.getNumItems = function() {
    return this.callMethod("getNumItems", arguments);
};
pttp.getAutoSizeTabs = function() {
    return this.callMethod("getAutoSizeTabs", arguments);
};
pttp.setAutoSizeTabs = function() {
    return this.callMethod("setAutoSizeTabs", arguments);
};
pttp.getTabWidth = function() {
    return this.callMethod("getTabWidth", arguments);
};
pttp.setTabWidth = function() {
    return this.callMethod("setTabWidth", arguments);
};
pttp.getLabelBuffer = function() {
    return this.callMethod("getLabelBuffer", arguments);
};
pttp.setLabelBuffer = function() {
    return this.callMethod("setLabelBuffer", arguments);
};
pttp.getLabelField = function() {
    return this.callMethod("getLabelField", arguments);
};
pttp.setLabelField = function() {
    return this.callMethod("setLabelField", arguments);
};
pttp.getTabPadding = function() {
    return this.callMethod("getTabPadding", arguments);
};
pttp.setTabPadding = function() {
    return this.callMethod("setTabPadding", arguments);
};
pttp.getTabAlign = function() {
    return this.callMethod("getTabAlign", arguments);
};
pttp.setTabAlign = function() {
    return this.callMethod("setTabAlign", arguments);
};
pttp.getIncludeMenu = function() {
    return this.callMethod("getIncludeMenu", arguments);
};
pttp.setIncludeMenu = function() {
    return this.callMethod("setIncludeMenu", arguments);
};
pttp.getMenuWidth = function() {
    return this.callMethod("getMenuWidth", arguments);
};
pttp.setMenuWidth = function() {
    return this.callMethod("setMenuWidth", arguments);
};
pttp.getMenuRowHeight = function() {
    return this.callMethod("getMenuRowHeight", arguments);
};
pttp.setMenuRowHeight = function() {
    return this.callMethod("setMenuRowHeight", arguments);
};
pttp.getMenuItemInset = function() {
    return this.callMethod("getMenuItemInset", arguments);
};
pttp.setMenuItemInset = function() {
    return this.callMethod("setMenuItemInset", arguments);
};
pttp.getMaxMenuRows = function() {
    return this.callMethod("getMaxMenuRows", arguments);
};
pttp.setMaxMenuRows = function() {
    return this.callMethod("setMaxMenuRows", arguments);
};
pttp.getHideSingleTab = function() {
    return this.callMethod("getHideSingleTab", arguments);
};
pttp.setHideSingleTab = function() {
    return this.callMethod("setHideSingleTab", arguments);
};
pttp.appendTab = function() {
    return this.callMethod("appendTab", arguments);
};
pttp.insertTabAt = function() {
    return this.callMethod("insertTabAt", arguments);
};
pttp.replaceTabAt = function() {
    return this.callMethod("replaceTabAt", arguments);
};
pttp.removeTabAt = function() {
    return this.callMethod("removeTabAt", arguments);
};
BCComponentModules["TextRegion"] = TextRegionAPI;
function TextRegionAPI(pExperience, pCallback, pElementID) {
    this.experience = pExperience;
    this.callback = pCallback;
    this.elementID = pElementID;
}
var pttp = TextRegionAPI.prototype = new ContainerAPI();
BCComponentModules["TileList"] = TileListAPI;
function TileListAPI(pExperience, pCallback, pElementID) {
    this.experience = pExperience;
    this.callback = pCallback;
    this.elementID = pElementID;
}
var pttp = TileListAPI.prototype = new UIObjectAPI();
pttp.setSelectedIndex = function() {
    return this.callMethod("setSelectedIndex", arguments);
};
pttp.getSelectedIndex = function() {
    return this.callMethod("getSelectedIndex", arguments);
};
pttp.getSelectedData = function() {
    return this.callMethod("getSelectedData", arguments);
};
pttp.getDataAtIndex = function() {
    return this.callMethod("getDataAtIndex", arguments);
};
pttp.getData = function() {
    return this.callMethod("getData", arguments);
};
pttp.setData = function() {
    return this.callMethod("setData", arguments);
};
pttp.showPlaylist = function() {
    return this.callMethod("showPlaylist", arguments);
};
pttp.previous = function() {
    return this.callMethod("previous", arguments);
};
pttp.next = function() {
    return this.callMethod("next", arguments);
};
pttp.getNumItems = function() {
    return this.callMethod("getNumItems", arguments);
};
pttp.getAutomaticAdvance = function() {
    return this.callMethod("getAutomaticAdvance", arguments);
};
pttp.setAutomaticAdvance = function() {
    return this.callMethod("setAutomaticAdvance", arguments);
};
pttp.getButtonOffsetX = function() {
    return this.callMethod("getButtonOffsetX", arguments);
};
pttp.setButtonOffsetX = function() {
    return this.callMethod("setButtonOffsetX", arguments);
};
pttp.getButtonOffsetY = function() {
    return this.callMethod("getButtonOffsetY", arguments);
};
pttp.setButtonOffsetY = function() {
    return this.callMethod("setButtonOffsetY", arguments);
};
pttp.getButtonSize = function() {
    return this.callMethod("getButtonSize", arguments);
};
pttp.setButtonSize = function() {
    return this.callMethod("setButtonSize", arguments);
};
pttp.getNumRows = function() {
    return this.callMethod("getNumRows", arguments);
};
pttp.setNumRows = function() {
    return this.callMethod("setNumRows", arguments);
};
pttp.getNumColumns = function() {
    return this.callMethod("getNumColumns", arguments);
};
pttp.setNumColumns = function() {
    return this.callMethod("setNumColumns", arguments);
};
pttp.getRowHeight = function() {
    return this.callMethod("getRowHeight", arguments);
};
pttp.setRowHeight = function() {
    return this.callMethod("setRowHeight", arguments);
};
pttp.getColumnWidth = function() {
    return this.callMethod("getColumnWidth", arguments);
};
pttp.setColumnWidth = function() {
    return this.callMethod("setColumnWidth", arguments);
};
pttp.getColumnGutter = function() {
    return this.callMethod("getColumnGutter", arguments);
};
pttp.setColumnGutter = function() {
    return this.callMethod("setColumnGutter", arguments);
};
pttp.getRowGutter = function() {
    return this.callMethod("getRowGutter", arguments);
};
pttp.setRowGutter = function() {
    return this.callMethod("setRowGutter", arguments);
};
pttp.getContentInsetV = function() {
    return this.callMethod("getContentInsetV", arguments);
};
pttp.setContentInsetV = function() {
    return this.callMethod("setContentInsetV", arguments);
};
pttp.getContentInsetH = function() {
    return this.callMethod("getContentInsetH", arguments);
};
pttp.setContentInsetH = function() {
    return this.callMethod("setContentInsetH", arguments);
};
pttp.setScrollDirection = function() {
    return this.callMethod("setScrollDirection", arguments);
};
pttp.getScrollDirection = function() {
    return this.callMethod("getScrollDirection", arguments);
};
pttp.getAnimationType = function() {
    return this.callMethod("getAnimationType", arguments);
};
pttp.setAnimationType = function() {
    return this.callMethod("setAnimationType", arguments);
};
pttp.getUseBlur = function() {
    return this.callMethod("getUseBlur", arguments);
};
pttp.setUseBlur = function() {
    return this.callMethod("setUseBlur", arguments);
};
pttp.showPage = function() {
    return this.callMethod("showPage", arguments);
};
pttp.showNextPage = function() {
    return this.callMethod("showNextPage", arguments);
};
pttp.showPreviousPage = function() {
    return this.callMethod("showPreviousPage", arguments);
};
pttp.getPageIndex = function() {
    return this.callMethod("getPageIndex", arguments);
};
pttp.getNumPages = function() {
    return this.callMethod("getNumPages", arguments);
};
pttp.getCenterContent = function() {
    return this.callMethod("getCenterContent", arguments);
};
pttp.setCenterContent = function() {
    return this.callMethod("setCenterContent", arguments);
};
pttp.getColumnCount = function() {
    return this.callMethod("getColumnCount", arguments);
};
pttp.getRowCount = function() {
    return this.callMethod("getRowCount", arguments);
};
BCComponentModules["TitleLabel"] = TitleLabelAPI;
function TitleLabelAPI(pExperience, pCallback, pElementID) {
    this.experience = pExperience;
    this.callback = pCallback;
    this.elementID = pElementID;
}
var pttp = TitleLabelAPI.prototype = new UIObjectAPI();
pttp.setText = function() {
    return this.callMethod("setText", arguments);
};
pttp.getText = function() {
    return this.callMethod("getText", arguments);
};
pttp.setFont = function() {
    return this.callMethod("setFont", arguments);
};
pttp.getFont = function() {
    return this.callMethod("getFont", arguments);
};
pttp.setTextSize = function() {
    return this.callMethod("setTextSize", arguments);
};
pttp.getTextSize = function() {
    return this.callMethod("getTextSize", arguments);
};
pttp.getHAlign = function() {
    return this.callMethod("getHAlign", arguments);
};
pttp.setHAlign = function() {
    return this.callMethod("setHAlign", arguments);
};
pttp.getVAlign = function() {
    return this.callMethod("getVAlign", arguments);
};
pttp.setVAlign = function() {
    return this.callMethod("setVAlign", arguments);
};
pttp.setAutoSize = function() {
    return this.callMethod("setAutoSize", arguments);
};
pttp.getAutoSize = function() {
    return this.callMethod("getAutoSize", arguments);
};
pttp.setTruncate = function() {
    return this.callMethod("setTruncate", arguments);
};
pttp.getTruncate = function() {
    return this.callMethod("getTruncate", arguments);
};
pttp.setMultiline = function() {
    return this.callMethod("setMultiline", arguments);
};
pttp.getMultiline = function() {
    return this.callMethod("getMultiline", arguments);
};
pttp.getIsTruncated = function() {
    return this.callMethod("getIsTruncated", arguments);
};
pttp.getTextWidth = function() {
    return this.callMethod("getTextWidth", arguments);
};
pttp.getSelected = function() {
    return this.callMethod("getSelected", arguments);
};
pttp.setSelected = function() {
    return this.callMethod("setSelected", arguments);
};
BCComponentModules["ToggleButton"] = ToggleButtonAPI;
function ToggleButtonAPI(pExperience, pCallback, pElementID) {
    this.experience = pExperience;
    this.callback = pCallback;
    this.elementID = pElementID;
}
var pttp = ToggleButtonAPI.prototype = new ButtonAPI();
pttp.getToggledLabel = function() {
    return this.callMethod("getToggledLabel", arguments);
};
pttp.setToggledLabel = function() {
    return this.callMethod("setToggledLabel", arguments);
};
pttp.getToggledTooltip = function() {
    return this.callMethod("getToggledTooltip", arguments);
};
pttp.setToggledTooltip = function() {
    return this.callMethod("setToggledTooltip", arguments);
};
pttp.getToggledIconName = function() {
    return this.callMethod("getToggledIconName", arguments);
};
pttp.setToggledIconName = function() {
    return this.callMethod("setToggledIconName", arguments);
};
pttp.getIsToggled = function() {
    return this.callMethod("getIsToggled", arguments);
};
pttp.setIsToggled = function() {
    return this.callMethod("setIsToggled", arguments);
};
BCComponentModules["ViewStack"] = ViewStackAPI;
function ViewStackAPI(pExperience, pCallback, pElementID) {
    this.experience = pExperience;
    this.callback = pCallback;
    this.elementID = pElementID;
}
var pttp = ViewStackAPI.prototype = new LayoutBoxAPI();
pttp.getSelectedIndex = function() {
    return this.callMethod("getSelectedIndex", arguments);
};
pttp.setSelectedIndex = function() {
    return this.callMethod("setSelectedIndex", arguments);
};
pttp.getSelectedItemID = function() {
    return this.callMethod("getSelectedItemID", arguments);
};
pttp.setSelectedItemID = function() {
    return this.callMethod("setSelectedItemID", arguments);
};
BCComponentModules["VolumeControl"] = VolumeControlAPI;
function VolumeControlAPI(pExperience, pCallback, pElementID) {
    this.experience = pExperience;
    this.callback = pCallback;
    this.elementID = pElementID;
}
var pttp = VolumeControlAPI.prototype = new UIObjectAPI();
pttp.getShowBack = function() {
    return this.callMethod("getShowBack", arguments);
};
pttp.setShowBack = function() {
    return this.callMethod("setShowBack", arguments);
};
pttp.getTooltip = function() {
    return this.callMethod("getTooltip", arguments);
};
pttp.setTooltip = function() {
    return this.callMethod("setTooltip", arguments);
};
pttp.getIconScale = function() {
    return this.callMethod("getIconScale", arguments);
};
pttp.setIconScale = function() {
    return this.callMethod("setIconScale", arguments);
};
pttp.getIconOffsetX = function() {
    return this.callMethod("getIconOffsetX", arguments);
};
pttp.setIconOffsetX = function() {
    return this.callMethod("setIconOffsetX", arguments);
};
pttp.getIconOffsetY = function() {
    return this.callMethod("getIconOffsetY", arguments);
};
pttp.setIconOffsetY = function() {
    return this.callMethod("setIconOffsetY", arguments);
};
pttp.getIconAlignmentH = function() {
    return this.callMethod("getIconAlignmentH", arguments);
};
pttp.setIconAlignmentH = function() {
    return this.callMethod("setIconAlignmentH", arguments);
};
pttp.getIconAlignmentV = function() {
    return this.callMethod("getIconAlignmentV", arguments);
};
pttp.setIconAlignmentV = function() {
    return this.callMethod("setIconAlignmentV", arguments);
};
pttp.getIconName = function() {
    return this.callMethod("getIconName", arguments);
};
pttp.setIconName = function() {
    return this.callMethod("setIconName", arguments);
};
pttp.getMutedTooltip = function() {
    return this.callMethod("getMutedTooltip", arguments);
};
pttp.setMutedTooltip = function() {
    return this.callMethod("setMutedTooltip", arguments);
};
pttp.getMutedIconName = function() {
    return this.callMethod("getMutedIconName", arguments);
};
pttp.setMutedIconName = function() {
    return this.callMethod("setMutedIconName", arguments);
};
pttp.getIsToggled = function() {
    return this.callMethod("getIsToggled", arguments);
};
pttp.setIsToggled = function() {
    return this.callMethod("setIsToggled", arguments);
};
pttp.getSliderHeight = function() {
    return this.callMethod("getSliderHeight", arguments);
};
pttp.setSliderHeight = function() {
    return this.callMethod("setSliderHeight", arguments);
};
pttp.getPopupHeight = function() {
    return this.callMethod("getPopupHeight", arguments);
};
pttp.setPopupHeight = function() {
    return this.callMethod("setPopupHeight", arguments);
};
pttp.getHorizontalPadding = function() {
    return this.callMethod("getHorizontalPadding", arguments);
};
pttp.setHorizontalPadding = function() {
    return this.callMethod("setHorizontalPadding", arguments);
};
pttp.getVerticalPadding = function() {
    return this.callMethod("getVerticalPadding", arguments);
};
pttp.setVerticalPadding = function() {
    return this.callMethod("setVerticalPadding", arguments);
};
pttp.getDirection = function() {
    return this.callMethod("getDirection", arguments);
};
pttp.setDirection = function() {
    return this.callMethod("setDirection", arguments);
};
pttp.getAnimated = function() {
    return this.callMethod("getAnimated", arguments);
};
pttp.setAnimated = function() {
    return this.callMethod("setAnimated", arguments);
};

