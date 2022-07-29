// ==UserScript==
// @version     1
// @author      Nexarius
// @homepage    https://github.com/Nex4rius/website_scripts
// @name        instgram
// @description remove obstruction for the html image element -> rightclick works now normally again

// @include    *instgram.com*
// ==/UserScript==

"use strict";

var styleSheet = `
._9AhH0 {
    pointer-events:none !important;
}
`;

(function () {
    let s = document.createElement('style');
    s.type = "text/css";
    s.innerHTML = styleSheet;
    (document.head || document.documentElement).appendChild(s);
})();
