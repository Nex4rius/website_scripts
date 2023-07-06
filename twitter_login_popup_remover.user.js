// ==UserScript==
// @name         Twitter Login Popup Remover
// @namespace    https://greasyfork.org/en/scripts/441222-twitter-login-popup-remover
// @version      0.3.3 // last version before removal from Greasy Fork
// @description  Allows you to browse Twitter freely without logging in.
// @author       NPC Tim
// @match        *://*.twitter.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=twitter.com
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    let url = window.location.href;
    let url_type = url.substring(8,14);

    if(url_type == 'mobile') {
        // Execute this script on the mobile version of the site.
        // Check if the banner is loaded. If it is, then remove the banner.
        // Check every 100 milliseconds whether or not the banner appeared. Once it has appeared, stop checking for it.
        let banner = document.getElementsByClassName("css-1dbjc4n r-l5o3uw");
        let banner_interval = setInterval(function() {
            try {
                banner[0].remove();
                clearInterval(banner_interval);
            }
            catch(err) {
            }
        }, 100);

        // Check if the sign up prompt has appeared. If it is, then remove the sign up prompt. Also add scrolling capabilites back.
        // Check whether or not the prompt appeared.
        let prompt_1 = document.getElementsByClassName("css-1dbjc4n r-1awozwy r-1kihuf0 r-18u37iz r-1pi2tsx r-1777fci r-1pjcn9w r-xr3zp9 r-1xcajam r-ipm5af r-g6jmlv");
        let prompt_interval = setInterval(function() {
            try {
                let top = document.querySelector('html').style.top;
                document.querySelector('html').style.overflowY='scroll';
                prompt_1[0].remove();
                document.querySelector('html').style.removeProperty('position');
                document.querySelector('html').scrollTop = Math.abs(parseInt(top));
            }
            catch(err) {
            }
        }, 125);
    }
    else {
        // Execute this script on the desktop version of the site.
        // Check if the banner is loaded. If it is, then remove the banner.
        // Check whether or not the banner appeared. Once it has appeared, stop checking for it.
        let banner = document.getElementsByClassName("css-1dbjc4n r-l5o3uw");
        let banner_interval = setInterval(function() {
            try {
                banner[0].remove();
                clearInterval(banner_interval);
            }
            catch(err) {
            }
        }, 50);

        // Check if the sign up prompt has appeared. If it is, then remove the sign up prompt. Also add scrolling capabilites back.
        // Check whether or not the prompt appeared.
        let prompt_1 = document.getElementsByClassName("css-1dbjc4n r-1awozwy r-1kihuf0 r-18u37iz r-1pi2tsx r-1777fci r-1pjcn9w r-xr3zp9 r-1xcajam r-ipm5af r-g6jmlv");
        let prompt_interval = setInterval(function() {
            try {
                document.querySelector('html').style.overflowY='scroll';
                prompt_1[0].remove();
            }
            catch(err) {
            }
        }, 125);
    }
})();
