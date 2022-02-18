(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_reset_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/reset.scss */ "./assets/styles/reset.scss");
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _modules_themes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/themes.js */ "./assets/modules/themes.js");
/* harmony import */ var _modules_themes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_themes_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_flash_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/flash.js */ "./assets/modules/flash.js");
/* harmony import */ var _modules_flash_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_flash_js__WEBPACK_IMPORTED_MODULE_3__);
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)

 // script import


 // font awesome

__webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css");

__webpack_require__(/*! @fortawesome/fontawesome-free/js/all.js */ "./node_modules/@fortawesome/fontawesome-free/js/all.js");

/***/ }),

/***/ "./assets/modules/flash.js":
/*!*********************************!*\
  !*** ./assets/modules/flash.js ***!
  \*********************************/
/***/ (() => {

var flash = {
  init: function init() {
    // récupération du bouton permettant de fermer le flash message
    var buttonClose = document.querySelector('.messages__close');
    buttonClose.addEventListener('click', flash.handleCloseMessage);
  },

  /**
   * To close Flash Message
   * 
   * @param {*} evt 
   */
  handleCloseMessage: function handleCloseMessage(evt) {
    // récupération du bouton lié à l'event
    var buttonClose = evt.currentTarget; // récupération du parent du bouton de fermeture

    var messageBlock = buttonClose.closest(".messages"); // suppression du message

    messageBlock.remove();
  }
};
document.addEventListener("DOMContentLoaded", flash.init);

/***/ }),

/***/ "./assets/modules/themes.js":
/*!**********************************!*\
  !*** ./assets/modules/themes.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

var themes = {
  cookies: document.cookie.split('; '),
  init: function init() {
    if (themes.cookies.length > 2) {
      for (var i = 0; i < 2; i++) {
        themes.cookies.shift();
      }
    } // récupération du bouton permettant de changer le thème


    var switchButton = document.querySelector(".control");
    switchButton.addEventListener("click", themes.handleSwitchTheme);
  },

  /**
   * To switch theme (dark<<>>light)
   * 
   * @param {*} evt 
   */
  handleSwitchTheme: function handleSwitchTheme(evt) {
    var switchButton = evt.currentTarget; // changement de la classe en fonction de la valeur de la data

    if (document.body.className == "shadow") {
      // light theme
      switchButton.classList.remove("control__black"); // création d'un cookie (bouton pour switcher de theme)

      document.cookie = 'Control='; // suppression du black theme

      document.body.classList.remove("shadow");
      document.body.classList.add("light"); // création d'un cookie (theme sur l'ensemble du doc)

      document.cookie = 'Theme=light';
    } else {
      // black theme
      switchButton.classList.add("control__black"); // création d'un cookie (bouton pour switcher de theme)

      document.cookie = 'Control=control__black';
      document.body.classList.remove("light"); // ajout du black theme

      document.body.classList.add("shadow"); // création d'un cookie (theme sur l'ensemble du doc)

      document.cookie = 'Theme=shadow';
    }
  },

  /**
   * Charge le thème choisi à la précédente visite et stocké dans des cookies
   */
  handleLoadTemplate: function handleLoadTemplate() {
    // récupération bouton pour switcher de theme
    var switchButton = document.querySelector(".control");
    var cookies = themes.cookies;
    var buttonTheme = cookies[0].replace("Control=", "");
    var bodyTheme = cookies[1].replace("Theme=", "");
    var isCookie = document.cookie.indexOf("Theme=");

    if (isCookie >= 0) {
      if (buttonTheme === "") {
        switchButton.classList.remove("control__black");
      } else {
        switchButton.classList.add("control__black");
      }

      document.body.className = bodyTheme;
    }
  }
};
document.addEventListener("DOMContentLoaded", themes.init);
document.addEventListener('DOMContentLoaded', themes.handleLoadTemplate);

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/reset.scss":
/*!**********************************!*\
  !*** ./assets/styles/reset.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_fortawesome_fontawesome-free_js_all_js-node_modules_core-js_modules_es_a-354f6f"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEwQixrQkFBMUIsRUFBOENPLE1BQU0sQ0FBQ2Esa0JBQXJEOzs7Ozs7Ozs7Ozs7QUMvRUE7Ozs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21vZHVsZXMvZmxhc2guanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21vZHVsZXMvdGhlbWVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9yZXNldC5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4vc3R5bGVzL3Jlc2V0LnNjc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XG5cbi8vIHNjcmlwdCBpbXBvcnRcbmltcG9ydCAnLi9tb2R1bGVzL3RoZW1lcy5qcyc7XG5pbXBvcnQgJy4vbW9kdWxlcy9mbGFzaC5qcyc7XG5cbi8vIGZvbnQgYXdlc29tZVxucmVxdWlyZSgnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvY3NzL2FsbC5taW4uY3NzJyk7XG5yZXF1aXJlKCdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9qcy9hbGwuanMnKTtcbiIsImNvbnN0IGZsYXNoID0ge1xuXG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIHLDqWN1cMOpcmF0aW9uIGR1IGJvdXRvbiBwZXJtZXR0YW50IGRlIGZlcm1lciBsZSBmbGFzaCBtZXNzYWdlXG4gICAgICAgIGNvbnN0IGJ1dHRvbkNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2VzX19jbG9zZScpO1xuICAgICAgICBidXR0b25DbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZsYXNoLmhhbmRsZUNsb3NlTWVzc2FnZSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRvIGNsb3NlIEZsYXNoIE1lc3NhZ2VcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0geyp9IGV2dCBcbiAgICAgKi9cbiAgICBoYW5kbGVDbG9zZU1lc3NhZ2U6IGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICAvLyByw6ljdXDDqXJhdGlvbiBkdSBib3V0b24gbGnDqSDDoCBsJ2V2ZW50XG4gICAgICAgIGNvbnN0IGJ1dHRvbkNsb3NlID0gZXZ0LmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgIC8vIHLDqWN1cMOpcmF0aW9uIGR1IHBhcmVudCBkdSBib3V0b24gZGUgZmVybWV0dXJlXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VCbG9jayA9IGJ1dHRvbkNsb3NlLmNsb3Nlc3QoXCIubWVzc2FnZXNcIik7XG5cbiAgICAgICAgLy8gc3VwcHJlc3Npb24gZHUgbWVzc2FnZVxuICAgICAgICBtZXNzYWdlQmxvY2sucmVtb3ZlKCk7XG4gICAgfVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmbGFzaC5pbml0KTsiLCJjb25zdCB0aGVtZXMgPSB7XG5cbiAgICBjb29raWVzOiBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsgJyksXG5cbiAgICBpbml0OiBmdW5jdGlvbigpIHsgXG5cbiAgICAgICAgaWYodGhlbWVzLmNvb2tpZXMubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoZW1lcy5jb29raWVzLnNoaWZ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyByw6ljdXDDqXJhdGlvbiBkdSBib3V0b24gcGVybWV0dGFudCBkZSBjaGFuZ2VyIGxlIHRow6htZVxuICAgICAgICBjb25zdCBzd2l0Y2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRyb2xcIik7XG4gICAgICAgIHN3aXRjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhlbWVzLmhhbmRsZVN3aXRjaFRoZW1lKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVG8gc3dpdGNoIHRoZW1lIChkYXJrPDw+PmxpZ2h0KVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Kn0gZXZ0IFxuICAgICAqL1xuICAgIGhhbmRsZVN3aXRjaFRoZW1lOiBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgY29uc3Qgc3dpdGNoQnV0dG9uID0gZXZ0LmN1cnJlbnRUYXJnZXQ7XG5cbiAgICAgICAgLy8gY2hhbmdlbWVudCBkZSBsYSBjbGFzc2UgZW4gZm9uY3Rpb24gZGUgbGEgdmFsZXVyIGRlIGxhIGRhdGFcbiAgICAgICAgaWYoZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPT0gXCJzaGFkb3dcIikge1xuICAgICAgICAgICAgLy8gbGlnaHQgdGhlbWVcbiAgICAgICAgICAgIHN3aXRjaEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiY29udHJvbF9fYmxhY2tcIik7XG4gICAgICAgICAgICAvLyBjcsOpYXRpb24gZCd1biBjb29raWUgKGJvdXRvbiBwb3VyIHN3aXRjaGVyIGRlIHRoZW1lKVxuICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gJ0NvbnRyb2w9JztcblxuICAgICAgICAgICAgLy8gc3VwcHJlc3Npb24gZHUgYmxhY2sgdGhlbWVcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcInNoYWRvd1wiKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImxpZ2h0XCIpO1xuXG4gICAgICAgICAgICAvLyBjcsOpYXRpb24gZCd1biBjb29raWUgKHRoZW1lIHN1ciBsJ2Vuc2VtYmxlIGR1IGRvYylcbiAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9ICdUaGVtZT1saWdodCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBibGFjayB0aGVtZVxuICAgICAgICAgICAgc3dpdGNoQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjb250cm9sX19ibGFja1wiKTtcbiAgICAgICAgICAgIC8vIGNyw6lhdGlvbiBkJ3VuIGNvb2tpZSAoYm91dG9uIHBvdXIgc3dpdGNoZXIgZGUgdGhlbWUpXG4gICAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSAnQ29udHJvbD1jb250cm9sX19ibGFjayc7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxpZ2h0XCIpO1xuICAgICAgICAgICAgLy8gYWpvdXQgZHUgYmxhY2sgdGhlbWVcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcInNoYWRvd1wiKTtcblxuICAgICAgICAgICAgLy8gY3LDqWF0aW9uIGQndW4gY29va2llICh0aGVtZSBzdXIgbCdlbnNlbWJsZSBkdSBkb2MpXG4gICAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSAnVGhlbWU9c2hhZG93JztcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaGFyZ2UgbGUgdGjDqG1lIGNob2lzaSDDoCBsYSBwcsOpY8OpZGVudGUgdmlzaXRlIGV0IHN0b2Nrw6kgZGFucyBkZXMgY29va2llc1xuICAgICAqL1xuICAgIGhhbmRsZUxvYWRUZW1wbGF0ZSA6IGZ1bmN0aW9uKClcbiAgICB7XG4gICAgICAgIC8vIHLDqWN1cMOpcmF0aW9uIGJvdXRvbiBwb3VyIHN3aXRjaGVyIGRlIHRoZW1lXG4gICAgICAgIGNvbnN0IHN3aXRjaEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udHJvbFwiKTtcblxuICAgICAgICBjb25zdCBjb29raWVzID0gdGhlbWVzLmNvb2tpZXM7XG4gICAgICAgIGNvbnN0IGJ1dHRvblRoZW1lID0gY29va2llc1swXS5yZXBsYWNlKFwiQ29udHJvbD1cIiwgXCJcIik7XG4gICAgICAgIGNvbnN0IGJvZHlUaGVtZSA9IGNvb2tpZXNbMV0ucmVwbGFjZShcIlRoZW1lPVwiLCBcIlwiKTtcblxuICAgICAgICBjb25zdCBpc0Nvb2tpZSA9IGRvY3VtZW50LmNvb2tpZS5pbmRleE9mKCBcIlRoZW1lPVwiICk7XG5cbiAgICAgICAgaWYoIGlzQ29va2llID49IDApe1xuICAgICAgICAgICAgaWYoYnV0dG9uVGhlbWUgPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2hCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImNvbnRyb2xfX2JsYWNrXCIpOyAgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN3aXRjaEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY29udHJvbF9fYmxhY2tcIik7ICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lID0gYm9keVRoZW1lO1xuICAgICAgICB9XG4gICAgfSxcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgdGhlbWVzLmluaXQpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHRoZW1lcy5oYW5kbGVMb2FkVGVtcGxhdGUpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiZmxhc2giLCJpbml0IiwiYnV0dG9uQ2xvc2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlQ2xvc2VNZXNzYWdlIiwiZXZ0IiwiY3VycmVudFRhcmdldCIsIm1lc3NhZ2VCbG9jayIsImNsb3Nlc3QiLCJyZW1vdmUiLCJ0aGVtZXMiLCJjb29raWVzIiwiY29va2llIiwic3BsaXQiLCJsZW5ndGgiLCJpIiwic2hpZnQiLCJzd2l0Y2hCdXR0b24iLCJoYW5kbGVTd2l0Y2hUaGVtZSIsImJvZHkiLCJjbGFzc05hbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJoYW5kbGVMb2FkVGVtcGxhdGUiLCJidXR0b25UaGVtZSIsInJlcGxhY2UiLCJib2R5VGhlbWUiLCJpc0Nvb2tpZSIsImluZGV4T2YiXSwic291cmNlUm9vdCI6IiJ9