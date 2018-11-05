/*! googleKeepCodeFormatter v0.2.0 by ryanpcmcquen */
//
// Ryan P. C. McQuen | Everett, WA | ryanpcmcquen@member.fsf.org
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation; either version 2 of the License, or
// (at your option) any later version, with the following exception:
// the text of the GPL license may be omitted.
//
// This program is distributed in the hope that it will be useful, but
// without any warranty; without even the implied warranty of
// merchantability or fitness for a particular purpose. Compiling,
// interpreting, executing or merely reading the text of the program
// may result in lapses of consciousness and/or very being, up to and
// including the end of all existence and the Universe as we know it.
// See the GNU General Public License for more details.
//
// You may have received a copy of the GNU General Public License along
// with this program (most likely, a file named COPYING).  If not, see
// <https://www.gnu.org/licenses/>.
//
/*global window, codeFormatter, PR*/
/*jslint browser:true*/

(function () {

    "use strict";

    var nikeIt = function () {
        codeFormatter(".notranslate");
        // Syntax highlight after the markup:
        PR.prettyPrint();
    };

    window.addEventListener("load", function () {
        nikeIt();
    });
    window.addEventListener("blur", function () {
        nikeIt();
    });
    window.addEventListener("focus", function () {
        nikeIt();
    });
    window.addEventListener("focusin", function () {
        nikeIt();
    });
    window.addEventListener("focusout", function () {
        nikeIt();
    });

}());
