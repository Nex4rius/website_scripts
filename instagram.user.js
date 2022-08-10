// ==UserScript==
// @name        instagram
// @author      Nexarius
// @version     4
// @homepage    https://github.com/Nex4rius/website_scripts
// @description remove obstruction for the html image element -> rightclick works now normally again -> fuck you facebook

// @include    *instagram.com*
// ==/UserScript==

"use strict";

var styleSheet = `
._aakl,
._aagw,
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
