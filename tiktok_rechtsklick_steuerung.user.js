// ==UserScript==
// @version     8
// @author      Nexarius
// @homepage    https://github.com/Nex4rius/website_scripts
// @name        tiktok rechtsklick steuerung
// @description Restore HTML Video controls for Tiktok videos + rightclick now opens context menu for video element directly

// @require     https://code.jquery.com/jquery-3.2.1.min.js
// @include     *tiktok.com*
// ==/UserScript==

"use strict";

let styleSheet = `
body:not(.hidden) .tiktok-12azhi0-DivHeaderContainer {
    z-index:1000000 !important;
}
`;

(function () {
    let s = document.createElement('style');
    s.type = "text/css";
    s.innerHTML = styleSheet;
    (document.head || document.documentElement).appendChild(s);
})();

$(document).ready(function() {
    let aktiv = false;

    function videocheck() {
        aktiv = true;
        const timer = setInterval(function() {
            const video = $("video");
            if (video.length == 1) {
                video.prop("controls", true);
                video.css({
                    "position" : "relative",
                    "z-index" : 999999
                });
                video.each(function() {
                    const hier = $(this);
                    const klasse = this.className;
                    if (hier && klasse && typeof klasse === "string" && klasse.includes("-VideoBasic")) {
                        console.log("gefunden1", hier);
                        aktiv = false;
                        clearInterval(timer);
                    }
                });
                if (!aktiv) {
                    return;
                }
                $("*").each(function() {
                    const hier = $(this);
                    const klasse = this.className;
                    if (hier && klasse && typeof klasse === "string" && klasse.includes("-DivVideoControlContainer")) {
                        console.log("gefunden2", hier);
                        hier.fadeOut().css("pointer-events", "none");
                        aktiv = false;
                        clearInterval(timer);
                    }
                });
            }
        }, 100);
    }

    videocheck();

    $(document).on("click", function() {
        if (!aktiv) {
            videocheck();
        }
    });
});
