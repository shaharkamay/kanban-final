/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/background-image.jpg */ "./images/background-image.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  /* Dark Theme */\r\n  --dark-background-color: #111111;\r\n  --dark-background-color-alt: #222222;\r\n  --dark-trim-color: #333333;\r\n  --dark-text-color: #eeeeee;\r\n  --dark-button-color: #004781;\r\n  --dark-icon: '🌛︎';\r\n  --box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.2);\r\n  --border: 1px solid rgba(0, 0, 0, 0.2);\r\n}\r\n\r\nbody {\r\n  /* Light Theme */\r\n  --background-color: #ffffff;\r\n  --background-color-alt: #eeeeee;\r\n  --trim-color: #dddddd;\r\n  --text-color: #333333;\r\n  --button-color: #008cff;\r\n  --body-background: linear-gradient(\r\n      0deg,\r\n      rgba(0, 140, 255, 0.3),\r\n      rgba(0, 71, 129, 0.3)\r\n    ),\r\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat fixed center;\r\n\r\n  --primary-color: #006fcc;\r\n  --primary-color-alt: #333333;\r\n  --font-family: 'Quicksand', sans-serif;\r\n  --icon: '☀';\r\n\r\n  color: var(--text-color);\r\n  font-family: var(--font-family);\r\n  background: var(--body-background);\r\n\r\n  position: relative;\r\n  min-height: 99vh;\r\n  background-size: cover;\r\n}\r\nbody.theme-dark {\r\n  --background-color: var(--dark-background-color);\r\n  --background-color-alt: var(--dark-background-color-alt);\r\n  --trim-color: var(--dark-trim-color);\r\n  --text-color: var(--dark-text-color);\r\n  --button-color: var(--dark-button-color);\r\n  --icon: var(--dark-icon);\r\n  --body-background: var(--dark-background-color);\r\n}\r\n\r\n@media (prefers-color-scheme: dark) {\r\n  body.theme-auto {\r\n    --background-color: var(--dark-background-color);\r\n    --background-color-alt: var(--dark-background-color-alt);\r\n    --trim-color: var(--dark-trim-color);\r\n    --text-color: var(--dark-text-color);\r\n    --button-color: var(--dark-button-color);\r\n    --icon: var(--dark-icon);\r\n    --body-background: var(--dark-background-color);\r\n  }\r\n}\r\n\r\nbody,\r\nh1,\r\nh2 {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\ninput {\r\n  border: var(--border);\r\n  padding: 0.5em;\r\n  color: var(--text-color);\r\n  background-color: var(--background-color);\r\n}\r\nbutton {\r\n  cursor: pointer;\r\n  border: 1px solid var(--button-color);\r\n  background: var(--button-color);\r\n  padding: 0.5em;\r\n  border-radius: 0.2em;\r\n  font-weight: bolder;\r\n  color: white;\r\n  transition: all 0.2s;\r\n}\r\nbutton:hover {\r\n  background: none;\r\n  color: var(--button-color);\r\n  transition: all 0.2s;\r\n}\r\nheader {\r\n  position: sticky;\r\n  top: 0;\r\n  width: 100%;\r\n  z-index: 1;\r\n  background-color: var(--primary-color);\r\n  color: white;\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\r\n}\r\nheader > div {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-wrap: wrap;\r\n  margin: 0 auto;\r\n  width: 90%;\r\n  padding: 10px;\r\n}\r\nh1 {\r\n  font-size: 1.5rem;\r\n  margin: auto 0;\r\n}\r\nheader > div > div {\r\n  margin: auto 0;\r\n}\r\nheader > div > div:first-child {\r\n  width: 25%;\r\n}\r\n.select {\r\n  width: 25%;\r\n  text-align: right;\r\n  padding: 5px 0;\r\n  border-radius: 10px;\r\n}\r\n.select__input {\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n  padding: 7px 14px;\r\n  background: none;\r\n  border: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n  color: white;\r\n  font-weight: 500;\r\n  font-family: var(--font-family);\r\n}\r\n.select__input option {\r\n  color: #000000;\r\n}\r\n.select label::after {\r\n  content: var(--icon);\r\n}\r\n\r\nmain {\r\n  width: 100%;\r\n}\r\n.api-interaction > div {\r\n  display: flex;\r\n  max-width: 1200px;\r\n  margin: 0 auto;\r\n  padding: 1em 1em 0;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n.api-interaction > div p {\r\n  text-align: center;\r\n  border: var(--border);\r\n  background-color: var(--background-color-alt);\r\n  color: var(--text-color);\r\n  font-weight: 600;\r\n  padding: 0.2em 1em;\r\n  margin: 0;\r\n  cursor: default;\r\n}\r\n.api-interaction > div p::first-letter {\r\n  font-size: 2em;\r\n}\r\n.api-interaction img {\r\n  padding: 1em;\r\n  height: 5em;\r\n  position: absolute;\r\n}\r\n.lists-section {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 1em;\r\n  margin: 0 auto;\r\n  padding: 1em;\r\n  max-width: 1200px;\r\n}\r\n.lists-section > section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex: 1 1 12em;\r\n  box-shadow: var(--box-shadow);\r\n  padding: 1em;\r\n  background-color: var(--background-color-alt);\r\n}\r\n.lists-section ul {\r\n  list-style: none;\r\n  padding: 0;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.lists-section h2 {\r\n  font-size: 1rem;\r\n}\r\n.add-task {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-top: auto;\r\n  gap: 1em;\r\n}\r\n.add-task input {\r\n  width: 70%;\r\n}\r\n.add-task button {\r\n  width: 30%;\r\n}\r\n\r\n.task {\r\n  border: var(--border);\r\n  background: var(--primary-color);\r\n  color: #eee;\r\n  padding: 0.5em;\r\n  margin: 0;\r\n  cursor: move;\r\n  transition: opacity 0.2s;\r\n  width: 85%;\r\n}\r\n.task.dragging {\r\n  opacity: 0.5;\r\n  transition: opacity 0.2s;\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  margin: auto;\r\n  background: var(--background-color-alt);\r\n  color: var(--black);\r\n  padding: 1em 0;\r\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\r\n  position: fixed;\r\n  width: 100%;\r\n  bottom: 0;\r\n  left: 0;\r\n}\r\nfooter .copyright {\r\n  margin: 0 auto;\r\n  font-size: 18px;\r\n}\r\n\r\n.red-bg-color {\r\n  background: red !important;\r\n  color: white !important;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.info-icon {\r\n  font-size: 1.2em;\r\n  padding: 0.2em;\r\n  cursor: pointer;\r\n  transition: all 0.2s;\r\n}\r\n.info-icon:hover {\r\n  text-shadow: 0px 0px 15px rgba(0, 0, 0, 0.8);\r\n  transition: all 0.3s;\r\n}\r\n\r\n.info-div {\r\n  position: absolute;\r\n  transform: translate(-50%, -50%);\r\n  border: var(--border);\r\n  background: var(--trim-color);\r\n  z-index: 1;\r\n  padding: 1em;\r\n}\r\n.info-div ul {\r\n  margin: 0;\r\n  padding-left: 1em;\r\n}\r\n.info-div ul li {\r\n  font-size: 0.7em;\r\n}\r\n.info-div ul li::before {\r\n  font-weight: bold;\r\n  content: attr(data-highlightword);\r\n}\r\n\r\n.display-none {\r\n  display: none;\r\n}\r\n\r\n.text-cursor {\r\n  cursor: text;\r\n}\r\n\r\n.dragover-border-bottom {\r\n  border-bottom: 1px solid black;\r\n}\r\n.dragover-border-top {\r\n  border-top: 1px solid black;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n  /* Dark Theme */\r\n  --dark-background-color: #111111;\r\n  --dark-background-color-alt: #222222;\r\n  --dark-trim-color: #333333;\r\n  --dark-text-color: #eeeeee;\r\n  --dark-button-color: #004781;\r\n  --dark-icon: '🌛︎';\r\n  --box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.2);\r\n  --border: 1px solid rgba(0, 0, 0, 0.2);\r\n}\r\n\r\nbody {\r\n  /* Light Theme */\r\n  --background-color: #ffffff;\r\n  --background-color-alt: #eeeeee;\r\n  --trim-color: #dddddd;\r\n  --text-color: #333333;\r\n  --button-color: #008cff;\r\n  --body-background: linear-gradient(\r\n      0deg,\r\n      rgba(0, 140, 255, 0.3),\r\n      rgba(0, 71, 129, 0.3)\r\n    ),\r\n    url('../images/background-image.jpg') no-repeat fixed center;\r\n\r\n  --primary-color: #006fcc;\r\n  --primary-color-alt: #333333;\r\n  --font-family: 'Quicksand', sans-serif;\r\n  --icon: '☀';\r\n\r\n  color: var(--text-color);\r\n  font-family: var(--font-family);\r\n  background: var(--body-background);\r\n\r\n  position: relative;\r\n  min-height: 99vh;\r\n  background-size: cover;\r\n}\r\nbody.theme-dark {\r\n  --background-color: var(--dark-background-color);\r\n  --background-color-alt: var(--dark-background-color-alt);\r\n  --trim-color: var(--dark-trim-color);\r\n  --text-color: var(--dark-text-color);\r\n  --button-color: var(--dark-button-color);\r\n  --icon: var(--dark-icon);\r\n  --body-background: var(--dark-background-color);\r\n}\r\n\r\n@media (prefers-color-scheme: dark) {\r\n  body.theme-auto {\r\n    --background-color: var(--dark-background-color);\r\n    --background-color-alt: var(--dark-background-color-alt);\r\n    --trim-color: var(--dark-trim-color);\r\n    --text-color: var(--dark-text-color);\r\n    --button-color: var(--dark-button-color);\r\n    --icon: var(--dark-icon);\r\n    --body-background: var(--dark-background-color);\r\n  }\r\n}\r\n\r\nbody,\r\nh1,\r\nh2 {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\ninput {\r\n  border: var(--border);\r\n  padding: 0.5em;\r\n  color: var(--text-color);\r\n  background-color: var(--background-color);\r\n}\r\nbutton {\r\n  cursor: pointer;\r\n  border: 1px solid var(--button-color);\r\n  background: var(--button-color);\r\n  padding: 0.5em;\r\n  border-radius: 0.2em;\r\n  font-weight: bolder;\r\n  color: white;\r\n  transition: all 0.2s;\r\n}\r\nbutton:hover {\r\n  background: none;\r\n  color: var(--button-color);\r\n  transition: all 0.2s;\r\n}\r\nheader {\r\n  position: sticky;\r\n  top: 0;\r\n  width: 100%;\r\n  z-index: 1;\r\n  background-color: var(--primary-color);\r\n  color: white;\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\r\n}\r\nheader > div {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-wrap: wrap;\r\n  margin: 0 auto;\r\n  width: 90%;\r\n  padding: 10px;\r\n}\r\nh1 {\r\n  font-size: 1.5rem;\r\n  margin: auto 0;\r\n}\r\nheader > div > div {\r\n  margin: auto 0;\r\n}\r\nheader > div > div:first-child {\r\n  width: 25%;\r\n}\r\n.select {\r\n  width: 25%;\r\n  text-align: right;\r\n  padding: 5px 0;\r\n  border-radius: 10px;\r\n}\r\n.select__input {\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n  padding: 7px 14px;\r\n  background: none;\r\n  border: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n  color: white;\r\n  font-weight: 500;\r\n  font-family: var(--font-family);\r\n}\r\n.select__input option {\r\n  color: #000000;\r\n}\r\n.select label::after {\r\n  content: var(--icon);\r\n}\r\n\r\nmain {\r\n  width: 100%;\r\n}\r\n.api-interaction > div {\r\n  display: flex;\r\n  max-width: 1200px;\r\n  margin: 0 auto;\r\n  padding: 1em 1em 0;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n.api-interaction > div p {\r\n  text-align: center;\r\n  border: var(--border);\r\n  background-color: var(--background-color-alt);\r\n  color: var(--text-color);\r\n  font-weight: 600;\r\n  padding: 0.2em 1em;\r\n  margin: 0;\r\n  cursor: default;\r\n}\r\n.api-interaction > div p::first-letter {\r\n  font-size: 2em;\r\n}\r\n.api-interaction img {\r\n  padding: 1em;\r\n  height: 5em;\r\n  position: absolute;\r\n}\r\n.lists-section {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 1em;\r\n  margin: 0 auto;\r\n  padding: 1em;\r\n  max-width: 1200px;\r\n}\r\n.lists-section > section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex: 1 1 12em;\r\n  box-shadow: var(--box-shadow);\r\n  padding: 1em;\r\n  background-color: var(--background-color-alt);\r\n}\r\n.lists-section ul {\r\n  list-style: none;\r\n  padding: 0;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.lists-section h2 {\r\n  font-size: 1rem;\r\n}\r\n.add-task {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-top: auto;\r\n  gap: 1em;\r\n}\r\n.add-task input {\r\n  width: 70%;\r\n}\r\n.add-task button {\r\n  width: 30%;\r\n}\r\n\r\n.task {\r\n  border: var(--border);\r\n  background: var(--primary-color);\r\n  color: #eee;\r\n  padding: 0.5em;\r\n  margin: 0;\r\n  cursor: move;\r\n  transition: opacity 0.2s;\r\n  width: 85%;\r\n}\r\n.task.dragging {\r\n  opacity: 0.5;\r\n  transition: opacity 0.2s;\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  margin: auto;\r\n  background: var(--background-color-alt);\r\n  color: var(--black);\r\n  padding: 1em 0;\r\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\r\n  position: fixed;\r\n  width: 100%;\r\n  bottom: 0;\r\n  left: 0;\r\n}\r\nfooter .copyright {\r\n  margin: 0 auto;\r\n  font-size: 18px;\r\n}\r\n\r\n.red-bg-color {\r\n  background: red !important;\r\n  color: white !important;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.info-icon {\r\n  font-size: 1.2em;\r\n  padding: 0.2em;\r\n  cursor: pointer;\r\n  transition: all 0.2s;\r\n}\r\n.info-icon:hover {\r\n  text-shadow: 0px 0px 15px rgba(0, 0, 0, 0.8);\r\n  transition: all 0.3s;\r\n}\r\n\r\n.info-div {\r\n  position: absolute;\r\n  transform: translate(-50%, -50%);\r\n  border: var(--border);\r\n  background: var(--trim-color);\r\n  z-index: 1;\r\n  padding: 1em;\r\n}\r\n.info-div ul {\r\n  margin: 0;\r\n  padding-left: 1em;\r\n}\r\n.info-div ul li {\r\n  font-size: 0.7em;\r\n}\r\n.info-div ul li::before {\r\n  font-weight: bold;\r\n  content: attr(data-highlightword);\r\n}\r\n\r\n.display-none {\r\n  display: none;\r\n}\r\n\r\n.text-cursor {\r\n  cursor: text;\r\n}\r\n\r\n.dragover-border-bottom {\r\n  border-bottom: 1px solid black;\r\n}\r\n.dragover-border-top {\r\n  border-top: 1px solid black;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./images/background-image.jpg":
/*!*************************************!*\
  !*** ./images/background-image.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "background-image.jpg";

/***/ }),

/***/ "./images/icon.png":
/*!*************************!*\
  !*** ./images/icon.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icon.png";

/***/ }),

/***/ "./images/loading.gif":
/*!****************************!*\
  !*** ./images/loading.gif ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "loading.gif";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _images_icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/icon.png */ "./images/icon.png");
/* harmony import */ var _images_loading_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/loading.gif */ "./images/loading.gif");


('use strict')

/*
Page structure
*/
;(() => {
  setLocalStorage()

  //light/dark theme
  indicateTheme()

  //event listener to add-task inputs to sense 'Enter' press
  const inputTasksElements = document.querySelectorAll('.add-task__input')
  for (const input of inputTasksElements)
    input.addEventListener('keyup', clickAddTaskEventHandler)

  //event listeners to the section of all lists together
  const listsSection = document.getElementById('lists')
  addEventsToElement(listsSection, {
    click: clickAddTaskEventHandler,
    dblclick: editTaskEventHandler,
    keydown: editTaskEventHandler,
  })

  //event listeners to the section the api section
  const apiSection = document.getElementById('api-interaction-section')
  apiSection.addEventListener('click', clickEventHandlerApi)

  //event listener to search input
  addEventsToElement(document.getElementById('search'), {
    keyup: searchEventHandler,
  })

  //add event listener for each task-list to enable drag option
  const listSections = listsSection.querySelectorAll('.list-section')
  listSections.forEach((listSection) => {
    listSection.addEventListener('dragover', (e) => e.preventDefault())
  })

  //add event listener to the 'trash' element
  const deleteDrag = document.getElementById('delete-drag')
  deleteDrag.addEventListener('dragover', (e) => e.preventDefault())

  //add event listener to reminder inputs
  const reminderInputs = document.querySelectorAll(
    "[placeholder='Add reminder']"
  )
  for (const input of reminderInputs) {
    input.addEventListener('focus', (e) => {
      e.target.type = 'datetime-local'
      e.target.min = new Date().toISOString().split('.')[0]
    })
    input.addEventListener('blur', (e) => {
      if (!e.target.value) e.target.type = 'text'
    })
  }

  generateLists()
})()

/*
DOM functions
*/

//light/dark theme
function indicateTheme() {
  document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'auto'
    applyTheme(savedTheme)
    for (const optionElement of document.querySelectorAll('#selTheme option')) {
      optionElement.selected = savedTheme === optionElement.value
    }
    document.getElementById('selTheme').addEventListener('change', function () {
      localStorage.setItem('theme', this.value)
      applyTheme(this.value)
    })
  })
}

//Light/Dark theme mode
function applyTheme(theme) {
  document.body.classList.remove('theme-auto', 'theme-light', 'theme-dark')
  document.body.classList.add(`theme-${theme}`)
}

//Displays the tasks lists to DOM
function generateLists() {
  const listsSection = document.getElementById('lists')
  const ulLists = listsSection.querySelectorAll('ul')

  for (const list of ulLists) {
    while (list.firstChild) list.removeChild(list.firstChild)
    const tasksList = getTasksList(
      list.closest('.list-section').dataset.listType
    )
    for (const task of tasksList) {
      const li = createTaskElement(task)
      const span = createInfoElement()
      list.append(li, span)
    }
  }
}

function createTaskElement(task = {}) {
  const li = createElement(
    'li',
    [task.task],
    ['task'],
    {
      'data-task': task.task,
      'data-date': task.date,
      'data-reminder': task.reminder,
      draggable: 'true',
    },
    {
      blur: blurEventHandler,
      mouseover: mouseoverTaskEventHandler,
      dragstart: dragstartTaskEventHandler,
      dragend: dragendTaskEventHandler,
      dragover: dragoverTaskEventHandler,
      dragleave: dragleaveTaskEventHandler,
    }
  )
  return li
}

function createInfoElement() {
  const span = createElement(
    'span',
    ['🛈'],
    ['info-icon'],
    {},
    {
      mouseover: mouseoverInfoEventHandler,
      mouseout: mouseoutInfoEventHandler,
    }
  )
  return span
}

//Takes an object that has keys=types and its values=functions and sets the event listener in the element
function addEventsToElement(elem, eventListenerObj) {
  for (const type in eventListenerObj) {
    elem.addEventListener(type, eventListenerObj[type])
  }
}

function filterLists(query) {
  const allLiTasks = document.querySelectorAll('.task')

  for (const liTask of allLiTasks) {
    const task = liTask.textContent.toLowerCase()
    const infoSpan = liTask.nextElementSibling
    if (searchByQuery(task, query)) elementsDisplay([liTask, infoSpan])
    else elementsDisplay([liTask, infoSpan], 'none')
  }
}

function searchByQuery(str, query) {
  return str.search(new RegExp(query.replace(/\s+/, '|'))) !== -1
}

function elementsDisplay(elements, display = '') {
  for (const elem of elements) {
    elem.style.display = display
  }
}

/**
 * Creates a new DOM element.
 *
 * Example usage:
 * createElement("div", ["just text", createElement(...)], ["nana", "banana"], {id: "bla"})
 *
 * @param {String} tagName - the type of the element
 * @param {Array} children - the child elements for the new element.
 *                           Each child can be a DOM element, or a string (if you just want a text element).
 * @param {Array} classes - the class list of the new element
 * @param {Object} attributes - the attributes for the new element
 */

function createElement(
  tagName,
  children = [],
  classes = [],
  attributes = {},
  eventListeners = {}
) {
  const element = document.createElement(tagName)
  for (const child of children) element.append(child)

  element.classList = classes.join(' ')
  for (const attr in attributes) element.setAttribute(attr, attributes[attr])

  for (const event in eventListeners)
    element.addEventListener(event, eventListeners[event])

  return element
}

function getDragIndexTaskDOM(y, listBounds, taskHeight = 36) {
  const height = listBounds.height
  const taskPosition = height - (y - listBounds.top)
  const index = Math.round((height - taskPosition) / taskHeight)
  return index
}

/*
Event handlers
*/

//Handles the add task event
function clickAddTaskEventHandler(e) {
  if (
    !e.target.classList.contains('add-task__input') &&
    !e.target.classList.contains('add-task__button')
  )
    return
  if (e.target.classList.contains('add-task__input')) {
    if (e.key !== 'Enter') return
  }
  const listSection = e.target.closest('.list-section')
  const [taskInput, reminderInput] = [
    listSection.querySelector('.add-task__input'),
    listSection.querySelector('.add-task__reminder'),
  ]
  const listType = listSection.dataset.listType

  if (isVarFalsyAlert(taskInput.value, () => window.alert('Invalid Input!')))
    return

  const task = taskConstructor(
    taskInput.value,
    reminderInput.value ? new Date(reminderInput.value).toLocaleString() : null
  )

  if (task.reminder)
    setReminderTimeout(task.date, task.reminder, () =>
      alert(`Reminder from "${listType}" list:\n"${task.task}"`)
    )

  addTask(task, listType)
  ;[taskInput.value, reminderInput.value, reminderInput.type] = ['', '', 'text']

  generateLists()
}

function setReminderTimeout(date, reminder, func) {
  const reminderInMilliseconds =
    new Date(reminder).getTime() - new Date(date).getTime()
  setTimeout(func, reminderInMilliseconds)
}

//Handles the dragstart of a task element
function dragstartTaskEventHandler(e) {
  e.target.classList.add('dragging')
  document.getElementById('delete-drag').classList.add('red-bg-color')
}

//Handles the dragend of a task element
function dragendTaskEventHandler(e) {
  e.target.classList.remove('dragging')
  document.getElementById('delete-drag').classList.remove('red-bg-color')
  dragendEventHandler(e)
}

//Handles the task edit
function editTaskEventHandler(e) {
  if (!e.target.classList.contains('task')) return

  const liTask = e.target
  toggleEditTaskProperties(liTask, e)

  if (e.key === 'Enter') liTask.blur() // it executes the blurEventHandler which updates the task
}

function toggleEditTaskProperties(liTask, e = { type: null }) {
  liTask.contentEditable = liTask.contentEditable ? true : null //true
  liTask.draggable = liTask.draggable ? false : true //false
  liTask.classList.toggle('text-cursor')
  if (e.type === 'dblclick') liTask.focus()
}

//Handles the blur event so if the task element loses focus, the change will be saved.
function blurEventHandler(e) {
  if (e.target.classList.contains('task')) {
    const liTask = e.target
    toggleEditTaskProperties(liTask, e)
    updateEditedTask(liTask)
    generateLists()
  }
}

function updateEditedTask(liTask) {
  const listType = liTask.closest('.list-section').dataset.listType
  const newTask = taskConstructor(liTask.textContent, liTask.dataset.reminder)
  const oldTask = taskConstructor(
    liTask.dataset.task,
    liTask.dataset.date,
    liTask.dataset.reminder
  )
  updateTask(newTask, oldTask, listType)
}

//Handles the task movements between lists
function mouseoverTaskEventHandler(e) {
  document.addEventListener('keydown', numberKeyDownEventHandler)
  e.target.addEventListener('mouseout', mouseoutTaskEventHandler)
}

function mouseoutTaskEventHandler(e) {
  document.removeEventListener('keydown', numberKeyDownEventHandler)
  e.target.removeEventListener('mouseout', mouseoutTaskEventHandler)
}

function numberKeyDownEventHandler(e) {
  const listsObj = { 1: 'todo', 2: 'in-progress', 3: 'done' }
  if (!(e.key in listsObj) || !e.altKey) return

  const mouseOverElements = document.querySelectorAll(':hover')
  const liMouseOn =
    mouseOverElements[mouseOverElements.length - 1].closest('.task')

  const task = taskConstructor(
    liMouseOn.textContent,
    liMouseOn.dataset.reminder,
    liMouseOn.dataset.date
  )

  const previousListType = liMouseOn.closest('.list-section').dataset.listType

  const newListType = listsObj[e.key]

  moveTask(task, previousListType, newListType)
}

//Handles the keyup event so when the user types a letter, the interface will change accordingly.
function searchEventHandler(e) {
  if (document.activeElement.id !== 'search') return
  const searchInput = document.activeElement

  let query = searchInput.value

  filterLists(query.toLowerCase())
}

//Handles the save and load buttons click and save data to the API or load data from the API
async function clickEventHandlerApi(e) {
  toggleLoader()
  if (e.target.id === 'save-btn') {
    //Save to api
    const tasksObjects = JSON.parse(localStorage.getItem('tasksObjects'))
    await saveTasksToApi(tasksObjects)
  } else if (e.target.id === 'load-btn') {
    //Load from api
    await loadTasksFromApi()
    generateLists()
  }
  toggleLoader()
}

//Handles the dragend event of a task and deletes/moves the task
function dragendEventHandler(e) {
  const hoverElements = document.querySelectorAll(':hover')
  //Delete drag task
  if (hoverElements[hoverElements.length - 1].closest('#delete-drag'))
    return deleteTaskHandler(e)

  const listSection =
    hoverElements[hoverElements.length - 1].closest('.list-section')
  if (
    isVarFalsyAlert(listSection, () =>
      window.alert('You are not allowed to drag there!')
    )
  )
    return

  const ulList = listSection.querySelector('ul')
  const newListType = listSection.dataset.listType
  const previousListType = e.target.closest('.list-section').dataset.listType
  const task = taskConstructor(
    e.target.textContent,
    e.target.dataset.reminder,
    e.target.dataset.date
  )

  const index = indicateTaskDragIndex(ulList, e)

  moveTask(task, previousListType, newListType, index)
}

function deleteTaskHandler(e) {
  const listType = e.target.closest('.list-section').dataset.listType
  const task = taskConstructor(
    e.target.textContent,
    e.target.dataset.reminder,
    e.target.dataset.date
  )
  removeTask(task, listType)
  generateLists()
  return true
}

//Handles the dragover/dragleave event of a task and add a class to indicate what position to insert in
function dragoverTaskEventHandler(e) {
  const ulList = e.target.closest('ul')
  const listBounds = ulList.getBoundingClientRect()
  const y = e.clientY
  const liTasks = ulList.querySelectorAll('li')
  const dragIndex = getDragIndexTaskDOM(y, listBounds, liTasks[0].offsetHeight)
  const taskIndex = getElementIndex(e.target)

  liTasks.forEach((li) => {
    li.classList.remove('dragover-border-bottom', 'dragover-border-top')
  })

  if (dragIndex !== liTasks.length)
    liTasks[dragIndex].classList.add('dragover-border-top')
  else liTasks[taskIndex].classList.add('dragover-border-bottom')
}

function dragleaveTaskEventHandler(e) {
  const liTasks = e.target.closest('ul').querySelectorAll('li')
  liTasks.forEach((li) => {
    li.classList.remove('dragover-border-bottom', 'dragover-border-top')
  })
}

//Handles the mouseover event and displays a div with info of the task
function mouseoverInfoEventHandler(e) {
  const infoDiv = document.querySelector('.info-div')
  infoDiv.classList.remove('display-none')

  const task = getTaskByName(
    e.target.previousElementSibling.dataset.task,
    e.target.closest('.list-section').dataset.listType
  )

  const ulTask = createElement('ul', createInfoList(task))
  infoDiv.append(ulTask)

  const left = e.pageX
  const top = e.pageY
  const divHeight = infoDiv.offsetHeight
  infoDiv.style.left = left - 100 + 'px'
  infoDiv.style.top = top - divHeight / 2 - 20 + 'px'
}

function createInfoList(task) {
  const liTaskText = createElement('li', [task.task], [], {
    'data-highlightword': 'Task: ',
  })
  const liTaskDate = createElement('li', [task.date.split(', ')[0]], [], {
    'data-highlightword': 'Date: ',
  })
  const liTaskTime = createElement('li', [task.date.split(', ')[1]], [], {
    'data-highlightword': 'Time: ',
  })
  const liTaskReminder = createElement('li', [task.reminder], [], {
    'data-highlightword': 'Reminder: ',
  })
  return [liTaskText, liTaskDate, liTaskTime, liTaskReminder]
}
function mouseoutInfoEventHandler(e) {
  const infoDiv = document.querySelector('.info-div')
  infoDiv.classList.add('display-none')
  while (infoDiv.firstChild) infoDiv.removeChild(infoDiv.firstChild)
}

/*
Local Storage functions (task is an object)
*/

function addTask(task, listType) {
  const allTasksObj = JSON.parse(localStorage.getItem('tasks'))
  allTasksObj[listType].unshift(task.task)
  localStorage.setItem('tasks', JSON.stringify(allTasksObj))

  const allObjectsTasks = JSON.parse(localStorage.getItem('tasksObjects'))
  allObjectsTasks[listType].unshift(task)
  localStorage.setItem('tasksObjects', JSON.stringify(allObjectsTasks))
}

function updateTask(newTask, oldTask, listType) {
  const allTasksObj = JSON.parse(localStorage.getItem('tasks'))
  const i = allTasksObj[listType].findIndex((x) => x === oldTask.task)
  allTasksObj[listType][i] = newTask.task
  localStorage.setItem('tasks', JSON.stringify(allTasksObj))

  const allObjectsTasks = JSON.parse(localStorage.getItem('tasksObjects'))
  const j = allObjectsTasks[listType].findIndex((x) => x.task === oldTask.task)
  allObjectsTasks[listType][j] = newTask
  localStorage.setItem('tasksObjects', JSON.stringify(allObjectsTasks))
}

function removeTask(task, listType) {
  const allTasksObj = JSON.parse(localStorage.getItem('tasks'))
  const i = allTasksObj[listType].findIndex((x) => x === task.task)
  allTasksObj[listType].splice(i, 1)
  localStorage.setItem('tasks', JSON.stringify(allTasksObj))

  const allObjectsTasks = JSON.parse(localStorage.getItem('tasksObjects'))
  const j = allObjectsTasks[listType].findIndex((x) => x.task === task.task)
  allObjectsTasks[listType].splice(j, 1)
  localStorage.setItem('tasksObjects', JSON.stringify(allObjectsTasks))
}

function moveTask(task, previousListType, newListType, spliceIndex = null) {
  removeTask(task, previousListType)

  if (!spliceIndex) addTask(task, newListType)
  else spliceTasks(task, spliceIndex, newListType)

  generateLists()
}

function setLocalStorage() {
  const setTasks = {
    todo: [],
    'in-progress': [],
    done: [],
  }
  if (!localStorage.getItem('tasks'))
    localStorage.setItem('tasks', JSON.stringify(setTasks))
  if (!localStorage.getItem('tasksObjects'))
    localStorage.setItem('tasksObjects', JSON.stringify(setTasks))
}

function removeAllTasks() {
  localStorage.removeItem('tasks')
  localStorage.removeItem('tasksObjects')
}

function replaceAllTasks(tasks) {
  removeAllTasks()
  const todo = []
  const inProgress = []
  const done = []

  for (const task of tasks['todo']) todo.push(task.task)
  for (const task of tasks['in-progress']) inProgress.push(task.task)
  for (const task of tasks['done']) done.push(task.task)

  const tasksStrings = {
    todo: todo,
    'in-progress': inProgress,
    done: done,
  }
  localStorage.setItem('tasks', JSON.stringify(tasksStrings))
  localStorage.setItem('tasksObjects', JSON.stringify(tasks))
}

function spliceTasks(task, startIndex, listType, deleteCount = 0) {
  const allTasksObj = JSON.parse(localStorage.getItem('tasks'))
  allTasksObj[listType].splice(startIndex, deleteCount, task.task)
  localStorage.setItem('tasks', JSON.stringify(allTasksObj))

  const allObjectsTasks = JSON.parse(localStorage.getItem('tasksObjects'))
  allObjectsTasks[listType].splice(startIndex, deleteCount, task)
  localStorage.setItem('tasksObjects', JSON.stringify(allObjectsTasks))
}

function getTaskByName(taskName, listType) {
  const allObjectsTasks = JSON.parse(localStorage.getItem('tasksObjects'))
  const i = allObjectsTasks[listType].findIndex((x) => x.task === taskName)
  return allObjectsTasks[listType][i]
}

function getTasksList(listType, item = 'tasksObjects') {
  const allObjectsTasks = JSON.parse(localStorage.getItem(item))
  return allObjectsTasks[listType]
}

/*
API functions
*/
async function apiRequest(method, tasksObjects = null) {
  const response = await fetch(
    'https://json-bins.herokuapp.com/bin/614afa054021ac0e6c080cc3',
    {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: tasksObjects ? JSON.stringify({ tasks: tasksObjects }) : null,
    }
  )
  return response
}

async function saveTasksToApi(tasksObjects) {
  const response = await apiRequest('PUT', tasksObjects)

  if (!response.ok) alert(`error status! ${response.status}`)
}

async function loadTasksFromApi() {
  const response = await apiRequest('GET')

  if (!response.ok) alert(`status error! ${response.status}`)

  const data = await response.json()
  const tasks = data.tasks

  replaceAllTasks(tasks)
}

/*
Helper functions
*/

//loader gif display function
function toggleLoader() {
  const div = document.querySelector('.api-interaction > div')
  if (div.lastElementChild.tagName === 'IMG') {
    document.getElementById('loader-img').remove()
  } else {
    const loaderImg = createElement('img', [], ['loader'], {
      id: 'loader-img',
      src: './loading.gif',
    })
    div.append(loaderImg)
  }
}

function getElementIndex(element) {
  const parent = element.parentElement
  const childrenType = parent.querySelectorAll(element.tagName)
  return Array.prototype.indexOf.call(childrenType, element)
}

function taskConstructor(task, reminder, date = new Date().toLocaleString()) {
  return { task, date, reminder }
}

function indicateTaskDragIndex(ulList, e) {
  const listBounds = ulList.getBoundingClientRect()
  const y = e.clientY
  let index = getDragIndexTaskDOM(y, listBounds, e.target.offsetHeight)

  if (e.target.closest('ul') === ulList) {
    const liIndex = getElementIndex(e.target)
    if (liIndex < index) index--
  }
  return index
}

/*
Validate functions
*/

function isVarFalsyAlert(
  variable,
  alertMessage = () => window.alert('Invalid!')
) {
  if (variable) {
    return false
  }
  alertMessage()
  return true
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztXQUVBOzs7Ozs7Ozs7Ozs7OztBQ3JCZ0M7QUFDSztBQUVwQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxNQUFNO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRkFBZ0YsVUFBVTtBQUMxRjtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLE9BQU87QUFDbEI7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixTQUFTLFlBQVksVUFBVTtBQUM3RDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELFlBQVk7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLDRDQUE0QyxxQkFBcUI7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxnQkFBZ0I7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxnQkFBZ0I7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maW5hbC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL2ZpbmFsLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9maW5hbC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vZmluYWwvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9maW5hbC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vZmluYWwvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZmluYWwvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2ZpbmFsLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2ZpbmFsLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2ZpbmFsLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZmluYWwvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9maW5hbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9maW5hbC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9maW5hbC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZmluYWwvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9maW5hbC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2ZpbmFsL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZmluYWwvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZmluYWwvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vZmluYWwvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9iYWNrZ3JvdW5kLWltYWdlLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gIC8qIERhcmsgVGhlbWUgKi9cXHJcXG4gIC0tZGFyay1iYWNrZ3JvdW5kLWNvbG9yOiAjMTExMTExO1xcclxcbiAgLS1kYXJrLWJhY2tncm91bmQtY29sb3ItYWx0OiAjMjIyMjIyO1xcclxcbiAgLS1kYXJrLXRyaW0tY29sb3I6ICMzMzMzMzM7XFxyXFxuICAtLWRhcmstdGV4dC1jb2xvcjogI2VlZWVlZTtcXHJcXG4gIC0tZGFyay1idXR0b24tY29sb3I6ICMwMDQ3ODE7XFxyXFxuICAtLWRhcmstaWNvbjogJ/CfjJvvuI4nO1xcclxcbiAgLS1ib3gtc2hhZG93OiAwcHggNXB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxuICAtLWJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAvKiBMaWdodCBUaGVtZSAqL1xcclxcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yLWFsdDogI2VlZWVlZTtcXHJcXG4gIC0tdHJpbS1jb2xvcjogI2RkZGRkZDtcXHJcXG4gIC0tdGV4dC1jb2xvcjogIzMzMzMzMztcXHJcXG4gIC0tYnV0dG9uLWNvbG9yOiAjMDA4Y2ZmO1xcclxcbiAgLS1ib2R5LWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgICAwZGVnLFxcclxcbiAgICAgIHJnYmEoMCwgMTQwLCAyNTUsIDAuMyksXFxyXFxuICAgICAgcmdiYSgwLCA3MSwgMTI5LCAwLjMpXFxyXFxuICAgICksXFxyXFxuICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgbm8tcmVwZWF0IGZpeGVkIGNlbnRlcjtcXHJcXG5cXHJcXG4gIC0tcHJpbWFyeS1jb2xvcjogIzAwNmZjYztcXHJcXG4gIC0tcHJpbWFyeS1jb2xvci1hbHQ6ICMzMzMzMzM7XFxyXFxuICAtLWZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcXHJcXG4gIC0taWNvbjogJ+KYgCc7XFxyXFxuXFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHkpO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tYm9keS1iYWNrZ3JvdW5kKTtcXHJcXG5cXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIG1pbi1oZWlnaHQ6IDk5dmg7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG5ib2R5LnRoZW1lLWRhcmsge1xcclxcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJhY2tncm91bmQtY29sb3IpO1xcclxcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yLWFsdDogdmFyKC0tZGFyay1iYWNrZ3JvdW5kLWNvbG9yLWFsdCk7XFxyXFxuICAtLXRyaW0tY29sb3I6IHZhcigtLWRhcmstdHJpbS1jb2xvcik7XFxyXFxuICAtLXRleHQtY29sb3I6IHZhcigtLWRhcmstdGV4dC1jb2xvcik7XFxyXFxuICAtLWJ1dHRvbi1jb2xvcjogdmFyKC0tZGFyay1idXR0b24tY29sb3IpO1xcclxcbiAgLS1pY29uOiB2YXIoLS1kYXJrLWljb24pO1xcclxcbiAgLS1ib2R5LWJhY2tncm91bmQ6IHZhcigtLWRhcmstYmFja2dyb3VuZC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcXHJcXG4gIGJvZHkudGhlbWUtYXV0byB7XFxyXFxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1iYWNrZ3JvdW5kLWNvbG9yKTtcXHJcXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yLWFsdDogdmFyKC0tZGFyay1iYWNrZ3JvdW5kLWNvbG9yLWFsdCk7XFxyXFxuICAgIC0tdHJpbS1jb2xvcjogdmFyKC0tZGFyay10cmltLWNvbG9yKTtcXHJcXG4gICAgLS10ZXh0LWNvbG9yOiB2YXIoLS1kYXJrLXRleHQtY29sb3IpO1xcclxcbiAgICAtLWJ1dHRvbi1jb2xvcjogdmFyKC0tZGFyay1idXR0b24tY29sb3IpO1xcclxcbiAgICAtLWljb246IHZhcigtLWRhcmstaWNvbik7XFxyXFxuICAgIC0tYm9keS1iYWNrZ3JvdW5kOiB2YXIoLS1kYXJrLWJhY2tncm91bmQtY29sb3IpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5ib2R5LFxcclxcbmgxLFxcclxcbmgyIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcbmlucHV0IHtcXHJcXG4gIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcXHJcXG4gIHBhZGRpbmc6IDAuNWVtO1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxyXFxufVxcclxcbmJ1dHRvbiB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1idXR0b24tY29sb3IpO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLWNvbG9yKTtcXHJcXG4gIHBhZGRpbmc6IDAuNWVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4yZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxyXFxufVxcclxcbmJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvcik7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXHJcXG59XFxyXFxuaGVhZGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxyXFxuICB0b3A6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG59XFxyXFxuaGVhZGVyID4gZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5oMSB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIG1hcmdpbjogYXV0byAwO1xcclxcbn1cXHJcXG5oZWFkZXIgPiBkaXYgPiBkaXYge1xcclxcbiAgbWFyZ2luOiBhdXRvIDA7XFxyXFxufVxcclxcbmhlYWRlciA+IGRpdiA+IGRpdjpmaXJzdC1jaGlsZCB7XFxyXFxuICB3aWR0aDogMjUlO1xcclxcbn1cXHJcXG4uc2VsZWN0IHtcXHJcXG4gIHdpZHRoOiAyNSU7XFxyXFxuICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gIHBhZGRpbmc6IDVweCAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuLnNlbGVjdF9faW5wdXQge1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgcGFkZGluZzogN3B4IDE0cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHkpO1xcclxcbn1cXHJcXG4uc2VsZWN0X19pbnB1dCBvcHRpb24ge1xcclxcbiAgY29sb3I6ICMwMDAwMDA7XFxyXFxufVxcclxcbi5zZWxlY3QgbGFiZWw6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IHZhcigtLWljb24pO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG4uYXBpLWludGVyYWN0aW9uID4gZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgcGFkZGluZzogMWVtIDFlbSAwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmFwaS1pbnRlcmFjdGlvbiA+IGRpdiBwIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItYWx0KTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBwYWRkaW5nOiAwLjJlbSAxZW07XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxufVxcclxcbi5hcGktaW50ZXJhY3Rpb24gPiBkaXYgcDo6Zmlyc3QtbGV0dGVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMmVtO1xcclxcbn1cXHJcXG4uYXBpLWludGVyYWN0aW9uIGltZyB7XFxyXFxuICBwYWRkaW5nOiAxZW07XFxyXFxuICBoZWlnaHQ6IDVlbTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuLmxpc3RzLXNlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGdhcDogMWVtO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBwYWRkaW5nOiAxZW07XFxyXFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXHJcXG59XFxyXFxuLmxpc3RzLXNlY3Rpb24gPiBzZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZmxleDogMSAxIDEyZW07XFxyXFxuICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcXHJcXG4gIHBhZGRpbmc6IDFlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItYWx0KTtcXHJcXG59XFxyXFxuLmxpc3RzLXNlY3Rpb24gdWwge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4ubGlzdHMtc2VjdGlvbiBoMiB7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcbi5hZGQtdGFzayB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG4gIGdhcDogMWVtO1xcclxcbn1cXHJcXG4uYWRkLXRhc2sgaW5wdXQge1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG59XFxyXFxuLmFkZC10YXNrIGJ1dHRvbiB7XFxyXFxuICB3aWR0aDogMzAlO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayB7XFxyXFxuICBib3JkZXI6IHZhcigtLWJvcmRlcik7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gIGNvbG9yOiAjZWVlO1xcclxcbiAgcGFkZGluZzogMC41ZW07XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBjdXJzb3I6IG1vdmU7XFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XFxyXFxuICB3aWR0aDogODUlO1xcclxcbn1cXHJcXG4udGFzay5kcmFnZ2luZyB7XFxyXFxuICBvcGFjaXR5OiAwLjU7XFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1hbHQpO1xcclxcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcXHJcXG4gIHBhZGRpbmc6IDFlbSAwO1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG59XFxyXFxuZm9vdGVyIC5jb3B5cmlnaHQge1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxufVxcclxcblxcclxcbi5yZWQtYmctY29sb3Ige1xcclxcbiAgYmFja2dyb3VuZDogcmVkICFpbXBvcnRhbnQ7XFxyXFxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mby1pY29uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxuICBwYWRkaW5nOiAwLjJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcclxcbn1cXHJcXG4uaW5mby1pY29uOmhvdmVyIHtcXHJcXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjgpO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxyXFxufVxcclxcblxcclxcbi5pbmZvLWRpdiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLXRyaW0tY29sb3IpO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIHBhZGRpbmc6IDFlbTtcXHJcXG59XFxyXFxuLmluZm8tZGl2IHVsIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMWVtO1xcclxcbn1cXHJcXG4uaW5mby1kaXYgdWwgbGkge1xcclxcbiAgZm9udC1zaXplOiAwLjdlbTtcXHJcXG59XFxyXFxuLmluZm8tZGl2IHVsIGxpOjpiZWZvcmUge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBjb250ZW50OiBhdHRyKGRhdGEtaGlnaGxpZ2h0d29yZCk7XFxyXFxufVxcclxcblxcclxcbi5kaXNwbGF5LW5vbmUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtY3Vyc29yIHtcXHJcXG4gIGN1cnNvcjogdGV4dDtcXHJcXG59XFxyXFxuXFxyXFxuLmRyYWdvdmVyLWJvcmRlci1ib3R0b20ge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG4uZHJhZ292ZXItYm9yZGVyLXRvcCB7XFxyXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZUFBZTtFQUNmLGdDQUFnQztFQUNoQyxvQ0FBb0M7RUFDcEMsMEJBQTBCO0VBQzFCLDBCQUEwQjtFQUMxQiw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLDRDQUE0QztFQUM1QyxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLCtCQUErQjtFQUMvQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2Qjs7Ozs7a0VBSzhEOztFQUU5RCx3QkFBd0I7RUFDeEIsNEJBQTRCO0VBQzVCLHNDQUFzQztFQUN0QyxXQUFXOztFQUVYLHdCQUF3QjtFQUN4QiwrQkFBK0I7RUFDL0Isa0NBQWtDOztFQUVsQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsZ0RBQWdEO0VBQ2hELHdEQUF3RDtFQUN4RCxvQ0FBb0M7RUFDcEMsb0NBQW9DO0VBQ3BDLHdDQUF3QztFQUN4Qyx3QkFBd0I7RUFDeEIsK0NBQStDO0FBQ2pEOztBQUVBO0VBQ0U7SUFDRSxnREFBZ0Q7SUFDaEQsd0RBQXdEO0lBQ3hELG9DQUFvQztJQUNwQyxvQ0FBb0M7SUFDcEMsd0NBQXdDO0lBQ3hDLHdCQUF3QjtJQUN4QiwrQ0FBK0M7RUFDakQ7QUFDRjs7QUFFQTs7O0VBR0UsU0FBUztFQUNULFVBQVU7QUFDWjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIseUNBQXlDO0FBQzNDO0FBQ0E7RUFDRSxlQUFlO0VBQ2YscUNBQXFDO0VBQ3JDLCtCQUErQjtFQUMvQixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsMEJBQTBC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IixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgLyogRGFyayBUaGVtZSAqL1xcclxcbiAgLS1kYXJrLWJhY2tncm91bmQtY29sb3I6ICMxMTExMTE7XFxyXFxuICAtLWRhcmstYmFja2dyb3VuZC1jb2xvci1hbHQ6ICMyMjIyMjI7XFxyXFxuICAtLWRhcmstdHJpbS1jb2xvcjogIzMzMzMzMztcXHJcXG4gIC0tZGFyay10ZXh0LWNvbG9yOiAjZWVlZWVlO1xcclxcbiAgLS1kYXJrLWJ1dHRvbi1jb2xvcjogIzAwNDc4MTtcXHJcXG4gIC0tZGFyay1pY29uOiAn8J+Mm++4jic7XFxyXFxuICAtLWJveC1zaGFkb3c6IDBweCA1cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gIC0tYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIC8qIExpZ2h0IFRoZW1lICovXFxyXFxuICAtLWJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxuICAtLWJhY2tncm91bmQtY29sb3ItYWx0OiAjZWVlZWVlO1xcclxcbiAgLS10cmltLWNvbG9yOiAjZGRkZGRkO1xcclxcbiAgLS10ZXh0LWNvbG9yOiAjMzMzMzMzO1xcclxcbiAgLS1idXR0b24tY29sb3I6ICMwMDhjZmY7XFxyXFxuICAtLWJvZHktYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICAgIDBkZWcsXFxyXFxuICAgICAgcmdiYSgwLCAxNDAsIDI1NSwgMC4zKSxcXHJcXG4gICAgICByZ2JhKDAsIDcxLCAxMjksIDAuMylcXHJcXG4gICAgKSxcXHJcXG4gICAgdXJsKCcuLi9pbWFnZXMvYmFja2dyb3VuZC1pbWFnZS5qcGcnKSBuby1yZXBlYXQgZml4ZWQgY2VudGVyO1xcclxcblxcclxcbiAgLS1wcmltYXJ5LWNvbG9yOiAjMDA2ZmNjO1xcclxcbiAgLS1wcmltYXJ5LWNvbG9yLWFsdDogIzMzMzMzMztcXHJcXG4gIC0tZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xcclxcbiAgLS1pY29uOiAn4piAJztcXHJcXG5cXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseSk7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ib2R5LWJhY2tncm91bmQpO1xcclxcblxcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbWluLWhlaWdodDogOTl2aDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcbmJvZHkudGhlbWUtZGFyayB7XFxyXFxuICAtLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmFja2dyb3VuZC1jb2xvcik7XFxyXFxuICAtLWJhY2tncm91bmQtY29sb3ItYWx0OiB2YXIoLS1kYXJrLWJhY2tncm91bmQtY29sb3ItYWx0KTtcXHJcXG4gIC0tdHJpbS1jb2xvcjogdmFyKC0tZGFyay10cmltLWNvbG9yKTtcXHJcXG4gIC0tdGV4dC1jb2xvcjogdmFyKC0tZGFyay10ZXh0LWNvbG9yKTtcXHJcXG4gIC0tYnV0dG9uLWNvbG9yOiB2YXIoLS1kYXJrLWJ1dHRvbi1jb2xvcik7XFxyXFxuICAtLWljb246IHZhcigtLWRhcmstaWNvbik7XFxyXFxuICAtLWJvZHktYmFja2dyb3VuZDogdmFyKC0tZGFyay1iYWNrZ3JvdW5kLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xcclxcbiAgYm9keS50aGVtZS1hdXRvIHtcXHJcXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJhY2tncm91bmQtY29sb3IpO1xcclxcbiAgICAtLWJhY2tncm91bmQtY29sb3ItYWx0OiB2YXIoLS1kYXJrLWJhY2tncm91bmQtY29sb3ItYWx0KTtcXHJcXG4gICAgLS10cmltLWNvbG9yOiB2YXIoLS1kYXJrLXRyaW0tY29sb3IpO1xcclxcbiAgICAtLXRleHQtY29sb3I6IHZhcigtLWRhcmstdGV4dC1jb2xvcik7XFxyXFxuICAgIC0tYnV0dG9uLWNvbG9yOiB2YXIoLS1kYXJrLWJ1dHRvbi1jb2xvcik7XFxyXFxuICAgIC0taWNvbjogdmFyKC0tZGFyay1pY29uKTtcXHJcXG4gICAgLS1ib2R5LWJhY2tncm91bmQ6IHZhcigtLWRhcmstYmFja2dyb3VuZC1jb2xvcik7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbmJvZHksXFxyXFxuaDEsXFxyXFxuaDIge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuaW5wdXQge1xcclxcbiAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xcclxcbiAgcGFkZGluZzogMC41ZW07XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXHJcXG59XFxyXFxuYnV0dG9uIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJ1dHRvbi1jb2xvcik7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b24tY29sb3IpO1xcclxcbiAgcGFkZGluZzogMC41ZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXHJcXG59XFxyXFxuYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBjb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yKTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcclxcbn1cXHJcXG5oZWFkZXIge1xcclxcbiAgcG9zaXRpb246IHN0aWNreTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbn1cXHJcXG5oZWFkZXIgPiBkaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcbmgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgbWFyZ2luOiBhdXRvIDA7XFxyXFxufVxcclxcbmhlYWRlciA+IGRpdiA+IGRpdiB7XFxyXFxuICBtYXJnaW46IGF1dG8gMDtcXHJcXG59XFxyXFxuaGVhZGVyID4gZGl2ID4gZGl2OmZpcnN0LWNoaWxkIHtcXHJcXG4gIHdpZHRoOiAyNSU7XFxyXFxufVxcclxcbi5zZWxlY3Qge1xcclxcbiAgd2lkdGg6IDI1JTtcXHJcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgcGFkZGluZzogNXB4IDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG4uc2VsZWN0X19pbnB1dCB7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiA3cHggMTRweDtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseSk7XFxyXFxufVxcclxcbi5zZWxlY3RfX2lucHV0IG9wdGlvbiB7XFxyXFxuICBjb2xvcjogIzAwMDAwMDtcXHJcXG59XFxyXFxuLnNlbGVjdCBsYWJlbDo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogdmFyKC0taWNvbik7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbi5hcGktaW50ZXJhY3Rpb24gPiBkaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBwYWRkaW5nOiAxZW0gMWVtIDA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uYXBpLWludGVyYWN0aW9uID4gZGl2IHAge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1hbHQpO1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIHBhZGRpbmc6IDAuMmVtIDFlbTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGN1cnNvcjogZGVmYXVsdDtcXHJcXG59XFxyXFxuLmFwaS1pbnRlcmFjdGlvbiA+IGRpdiBwOjpmaXJzdC1sZXR0ZXIge1xcclxcbiAgZm9udC1zaXplOiAyZW07XFxyXFxufVxcclxcbi5hcGktaW50ZXJhY3Rpb24gaW1nIHtcXHJcXG4gIHBhZGRpbmc6IDFlbTtcXHJcXG4gIGhlaWdodDogNWVtO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cXHJcXG4ubGlzdHMtc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgZ2FwOiAxZW07XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIHBhZGRpbmc6IDFlbTtcXHJcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcclxcbn1cXHJcXG4ubGlzdHMtc2VjdGlvbiA+IHNlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBmbGV4OiAxIDEgMTJlbTtcXHJcXG4gIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xcclxcbiAgcGFkZGluZzogMWVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1hbHQpO1xcclxcbn1cXHJcXG4ubGlzdHMtc2VjdGlvbiB1bCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5saXN0cy1zZWN0aW9uIGgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuLmFkZC10YXNrIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcclxcbiAgZ2FwOiAxZW07XFxyXFxufVxcclxcbi5hZGQtdGFzayBpbnB1dCB7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbn1cXHJcXG4uYWRkLXRhc2sgYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiAzMCU7XFxyXFxufVxcclxcblxcclxcbi50YXNrIHtcXHJcXG4gIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbiAgY29sb3I6ICNlZWU7XFxyXFxuICBwYWRkaW5nOiAwLjVlbTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGN1cnNvcjogbW92ZTtcXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcXHJcXG4gIHdpZHRoOiA4NSU7XFxyXFxufVxcclxcbi50YXNrLmRyYWdnaW5nIHtcXHJcXG4gIG9wYWNpdHk6IDAuNTtcXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLWFsdCk7XFxyXFxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xcclxcbiAgcGFkZGluZzogMWVtIDA7XFxyXFxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbn1cXHJcXG5mb290ZXIgLmNvcHlyaWdodCB7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlZC1iZy1jb2xvciB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZWQgIWltcG9ydGFudDtcXHJcXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxyXFxufVxcclxcblxcclxcbi5pbmZvLWljb24ge1xcclxcbiAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuMmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxyXFxufVxcclxcbi5pbmZvLWljb246aG92ZXIge1xcclxcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuOCk7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLmluZm8tZGl2IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tdHJpbS1jb2xvcik7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgcGFkZGluZzogMWVtO1xcclxcbn1cXHJcXG4uaW5mby1kaXYgdWwge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxZW07XFxyXFxufVxcclxcbi5pbmZvLWRpdiB1bCBsaSB7XFxyXFxuICBmb250LXNpemU6IDAuN2VtO1xcclxcbn1cXHJcXG4uaW5mby1kaXYgdWwgbGk6OmJlZm9yZSB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1oaWdobGlnaHR3b3JkKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc3BsYXktbm9uZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1jdXJzb3Ige1xcclxcbiAgY3Vyc29yOiB0ZXh0O1xcclxcbn1cXHJcXG5cXHJcXG4uZHJhZ292ZXItYm9yZGVyLWJvdHRvbSB7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcbi5kcmFnb3Zlci1ib3JkZXItdG9wIHtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRoaXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNbX2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgbW9kdWxlcy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pMl0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCBzdHlsZSBmcm9tICcuL3N0eWxlcy5jc3MnXHJcbmltcG9ydCBpY29uIGZyb20gJy4uL2ltYWdlcy9pY29uLnBuZydcclxuaW1wb3J0IGxvYWRpbmdHaWYgZnJvbSAnLi4vaW1hZ2VzL2xvYWRpbmcuZ2lmJ1xyXG47KCd1c2Ugc3RyaWN0JylcclxuXHJcbi8qXHJcblBhZ2Ugc3RydWN0dXJlXHJcbiovXHJcbjsoKCkgPT4ge1xyXG4gIHNldExvY2FsU3RvcmFnZSgpXHJcblxyXG4gIC8vbGlnaHQvZGFyayB0aGVtZVxyXG4gIGluZGljYXRlVGhlbWUoKVxyXG5cclxuICAvL2V2ZW50IGxpc3RlbmVyIHRvIGFkZC10YXNrIGlucHV0cyB0byBzZW5zZSAnRW50ZXInIHByZXNzXHJcbiAgY29uc3QgaW5wdXRUYXNrc0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFkZC10YXNrX19pbnB1dCcpXHJcbiAgZm9yIChjb25zdCBpbnB1dCBvZiBpbnB1dFRhc2tzRWxlbWVudHMpXHJcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGNsaWNrQWRkVGFza0V2ZW50SGFuZGxlcilcclxuXHJcbiAgLy9ldmVudCBsaXN0ZW5lcnMgdG8gdGhlIHNlY3Rpb24gb2YgYWxsIGxpc3RzIHRvZ2V0aGVyXHJcbiAgY29uc3QgbGlzdHNTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3RzJylcclxuICBhZGRFdmVudHNUb0VsZW1lbnQobGlzdHNTZWN0aW9uLCB7XHJcbiAgICBjbGljazogY2xpY2tBZGRUYXNrRXZlbnRIYW5kbGVyLFxyXG4gICAgZGJsY2xpY2s6IGVkaXRUYXNrRXZlbnRIYW5kbGVyLFxyXG4gICAga2V5ZG93bjogZWRpdFRhc2tFdmVudEhhbmRsZXIsXHJcbiAgfSlcclxuXHJcbiAgLy9ldmVudCBsaXN0ZW5lcnMgdG8gdGhlIHNlY3Rpb24gdGhlIGFwaSBzZWN0aW9uXHJcbiAgY29uc3QgYXBpU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcGktaW50ZXJhY3Rpb24tc2VjdGlvbicpXHJcbiAgYXBpU2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrRXZlbnRIYW5kbGVyQXBpKVxyXG5cclxuICAvL2V2ZW50IGxpc3RlbmVyIHRvIHNlYXJjaCBpbnB1dFxyXG4gIGFkZEV2ZW50c1RvRWxlbWVudChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoJyksIHtcclxuICAgIGtleXVwOiBzZWFyY2hFdmVudEhhbmRsZXIsXHJcbiAgfSlcclxuXHJcbiAgLy9hZGQgZXZlbnQgbGlzdGVuZXIgZm9yIGVhY2ggdGFzay1saXN0IHRvIGVuYWJsZSBkcmFnIG9wdGlvblxyXG4gIGNvbnN0IGxpc3RTZWN0aW9ucyA9IGxpc3RzU2VjdGlvbi5xdWVyeVNlbGVjdG9yQWxsKCcubGlzdC1zZWN0aW9uJylcclxuICBsaXN0U2VjdGlvbnMuZm9yRWFjaCgobGlzdFNlY3Rpb24pID0+IHtcclxuICAgIGxpc3RTZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGUpID0+IGUucHJldmVudERlZmF1bHQoKSlcclxuICB9KVxyXG5cclxuICAvL2FkZCBldmVudCBsaXN0ZW5lciB0byB0aGUgJ3RyYXNoJyBlbGVtZW50XHJcbiAgY29uc3QgZGVsZXRlRHJhZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxldGUtZHJhZycpXHJcbiAgZGVsZXRlRHJhZy5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCkpXHJcblxyXG4gIC8vYWRkIGV2ZW50IGxpc3RlbmVyIHRvIHJlbWluZGVyIGlucHV0c1xyXG4gIGNvbnN0IHJlbWluZGVySW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgIFwiW3BsYWNlaG9sZGVyPSdBZGQgcmVtaW5kZXInXVwiXHJcbiAgKVxyXG4gIGZvciAoY29uc3QgaW5wdXQgb2YgcmVtaW5kZXJJbnB1dHMpIHtcclxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKGUpID0+IHtcclxuICAgICAgZS50YXJnZXQudHlwZSA9ICdkYXRldGltZS1sb2NhbCdcclxuICAgICAgZS50YXJnZXQubWluID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KCcuJylbMF1cclxuICAgIH0pXHJcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKGUpID0+IHtcclxuICAgICAgaWYgKCFlLnRhcmdldC52YWx1ZSkgZS50YXJnZXQudHlwZSA9ICd0ZXh0J1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGdlbmVyYXRlTGlzdHMoKVxyXG59KSgpXHJcblxyXG4vKlxyXG5ET00gZnVuY3Rpb25zXHJcbiovXHJcblxyXG4vL2xpZ2h0L2RhcmsgdGhlbWVcclxuZnVuY3Rpb24gaW5kaWNhdGVUaGVtZSgpIHtcclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgY29uc3Qgc2F2ZWRUaGVtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpIHx8ICdhdXRvJ1xyXG4gICAgYXBwbHlUaGVtZShzYXZlZFRoZW1lKVxyXG4gICAgZm9yIChjb25zdCBvcHRpb25FbGVtZW50IG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNzZWxUaGVtZSBvcHRpb24nKSkge1xyXG4gICAgICBvcHRpb25FbGVtZW50LnNlbGVjdGVkID0gc2F2ZWRUaGVtZSA9PT0gb3B0aW9uRWxlbWVudC52YWx1ZVxyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbFRoZW1lJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCB0aGlzLnZhbHVlKVxyXG4gICAgICBhcHBseVRoZW1lKHRoaXMudmFsdWUpXHJcbiAgICB9KVxyXG4gIH0pXHJcbn1cclxuXHJcbi8vTGlnaHQvRGFyayB0aGVtZSBtb2RlXHJcbmZ1bmN0aW9uIGFwcGx5VGhlbWUodGhlbWUpIHtcclxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3RoZW1lLWF1dG8nLCAndGhlbWUtbGlnaHQnLCAndGhlbWUtZGFyaycpXHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKGB0aGVtZS0ke3RoZW1lfWApXHJcbn1cclxuXHJcbi8vRGlzcGxheXMgdGhlIHRhc2tzIGxpc3RzIHRvIERPTVxyXG5mdW5jdGlvbiBnZW5lcmF0ZUxpc3RzKCkge1xyXG4gIGNvbnN0IGxpc3RzU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0cycpXHJcbiAgY29uc3QgdWxMaXN0cyA9IGxpc3RzU2VjdGlvbi5xdWVyeVNlbGVjdG9yQWxsKCd1bCcpXHJcblxyXG4gIGZvciAoY29uc3QgbGlzdCBvZiB1bExpc3RzKSB7XHJcbiAgICB3aGlsZSAobGlzdC5maXJzdENoaWxkKSBsaXN0LnJlbW92ZUNoaWxkKGxpc3QuZmlyc3RDaGlsZClcclxuICAgIGNvbnN0IHRhc2tzTGlzdCA9IGdldFRhc2tzTGlzdChcclxuICAgICAgbGlzdC5jbG9zZXN0KCcubGlzdC1zZWN0aW9uJykuZGF0YXNldC5saXN0VHlwZVxyXG4gICAgKVxyXG4gICAgZm9yIChjb25zdCB0YXNrIG9mIHRhc2tzTGlzdCkge1xyXG4gICAgICBjb25zdCBsaSA9IGNyZWF0ZVRhc2tFbGVtZW50KHRhc2spXHJcbiAgICAgIGNvbnN0IHNwYW4gPSBjcmVhdGVJbmZvRWxlbWVudCgpXHJcbiAgICAgIGxpc3QuYXBwZW5kKGxpLCBzcGFuKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGFza0VsZW1lbnQodGFzayA9IHt9KSB7XHJcbiAgY29uc3QgbGkgPSBjcmVhdGVFbGVtZW50KFxyXG4gICAgJ2xpJyxcclxuICAgIFt0YXNrLnRhc2tdLFxyXG4gICAgWyd0YXNrJ10sXHJcbiAgICB7XHJcbiAgICAgICdkYXRhLXRhc2snOiB0YXNrLnRhc2ssXHJcbiAgICAgICdkYXRhLWRhdGUnOiB0YXNrLmRhdGUsXHJcbiAgICAgICdkYXRhLXJlbWluZGVyJzogdGFzay5yZW1pbmRlcixcclxuICAgICAgZHJhZ2dhYmxlOiAndHJ1ZScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBibHVyOiBibHVyRXZlbnRIYW5kbGVyLFxyXG4gICAgICBtb3VzZW92ZXI6IG1vdXNlb3ZlclRhc2tFdmVudEhhbmRsZXIsXHJcbiAgICAgIGRyYWdzdGFydDogZHJhZ3N0YXJ0VGFza0V2ZW50SGFuZGxlcixcclxuICAgICAgZHJhZ2VuZDogZHJhZ2VuZFRhc2tFdmVudEhhbmRsZXIsXHJcbiAgICAgIGRyYWdvdmVyOiBkcmFnb3ZlclRhc2tFdmVudEhhbmRsZXIsXHJcbiAgICAgIGRyYWdsZWF2ZTogZHJhZ2xlYXZlVGFza0V2ZW50SGFuZGxlcixcclxuICAgIH1cclxuICApXHJcbiAgcmV0dXJuIGxpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUluZm9FbGVtZW50KCkge1xyXG4gIGNvbnN0IHNwYW4gPSBjcmVhdGVFbGVtZW50KFxyXG4gICAgJ3NwYW4nLFxyXG4gICAgWyfwn5uIJ10sXHJcbiAgICBbJ2luZm8taWNvbiddLFxyXG4gICAge30sXHJcbiAgICB7XHJcbiAgICAgIG1vdXNlb3ZlcjogbW91c2VvdmVySW5mb0V2ZW50SGFuZGxlcixcclxuICAgICAgbW91c2VvdXQ6IG1vdXNlb3V0SW5mb0V2ZW50SGFuZGxlcixcclxuICAgIH1cclxuICApXHJcbiAgcmV0dXJuIHNwYW5cclxufVxyXG5cclxuLy9UYWtlcyBhbiBvYmplY3QgdGhhdCBoYXMga2V5cz10eXBlcyBhbmQgaXRzIHZhbHVlcz1mdW5jdGlvbnMgYW5kIHNldHMgdGhlIGV2ZW50IGxpc3RlbmVyIGluIHRoZSBlbGVtZW50XHJcbmZ1bmN0aW9uIGFkZEV2ZW50c1RvRWxlbWVudChlbGVtLCBldmVudExpc3RlbmVyT2JqKSB7XHJcbiAgZm9yIChjb25zdCB0eXBlIGluIGV2ZW50TGlzdGVuZXJPYmopIHtcclxuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBldmVudExpc3RlbmVyT2JqW3R5cGVdKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZmlsdGVyTGlzdHMocXVlcnkpIHtcclxuICBjb25zdCBhbGxMaVRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKVxyXG5cclxuICBmb3IgKGNvbnN0IGxpVGFzayBvZiBhbGxMaVRhc2tzKSB7XHJcbiAgICBjb25zdCB0YXNrID0gbGlUYXNrLnRleHRDb250ZW50LnRvTG93ZXJDYXNlKClcclxuICAgIGNvbnN0IGluZm9TcGFuID0gbGlUYXNrLm5leHRFbGVtZW50U2libGluZ1xyXG4gICAgaWYgKHNlYXJjaEJ5UXVlcnkodGFzaywgcXVlcnkpKSBlbGVtZW50c0Rpc3BsYXkoW2xpVGFzaywgaW5mb1NwYW5dKVxyXG4gICAgZWxzZSBlbGVtZW50c0Rpc3BsYXkoW2xpVGFzaywgaW5mb1NwYW5dLCAnbm9uZScpXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZWFyY2hCeVF1ZXJ5KHN0ciwgcXVlcnkpIHtcclxuICByZXR1cm4gc3RyLnNlYXJjaChuZXcgUmVnRXhwKHF1ZXJ5LnJlcGxhY2UoL1xccysvLCAnfCcpKSkgIT09IC0xXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVsZW1lbnRzRGlzcGxheShlbGVtZW50cywgZGlzcGxheSA9ICcnKSB7XHJcbiAgZm9yIChjb25zdCBlbGVtIG9mIGVsZW1lbnRzKSB7XHJcbiAgICBlbGVtLnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIG5ldyBET00gZWxlbWVudC5cclxuICpcclxuICogRXhhbXBsZSB1c2FnZTpcclxuICogY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJqdXN0IHRleHRcIiwgY3JlYXRlRWxlbWVudCguLi4pXSwgW1wibmFuYVwiLCBcImJhbmFuYVwiXSwge2lkOiBcImJsYVwifSlcclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IHRhZ05hbWUgLSB0aGUgdHlwZSBvZiB0aGUgZWxlbWVudFxyXG4gKiBAcGFyYW0ge0FycmF5fSBjaGlsZHJlbiAtIHRoZSBjaGlsZCBlbGVtZW50cyBmb3IgdGhlIG5ldyBlbGVtZW50LlxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgIEVhY2ggY2hpbGQgY2FuIGJlIGEgRE9NIGVsZW1lbnQsIG9yIGEgc3RyaW5nIChpZiB5b3UganVzdCB3YW50IGEgdGV4dCBlbGVtZW50KS5cclxuICogQHBhcmFtIHtBcnJheX0gY2xhc3NlcyAtIHRoZSBjbGFzcyBsaXN0IG9mIHRoZSBuZXcgZWxlbWVudFxyXG4gKiBAcGFyYW0ge09iamVjdH0gYXR0cmlidXRlcyAtIHRoZSBhdHRyaWJ1dGVzIGZvciB0aGUgbmV3IGVsZW1lbnRcclxuICovXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KFxyXG4gIHRhZ05hbWUsXHJcbiAgY2hpbGRyZW4gPSBbXSxcclxuICBjbGFzc2VzID0gW10sXHJcbiAgYXR0cmlidXRlcyA9IHt9LFxyXG4gIGV2ZW50TGlzdGVuZXJzID0ge31cclxuKSB7XHJcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSlcclxuICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSBlbGVtZW50LmFwcGVuZChjaGlsZClcclxuXHJcbiAgZWxlbWVudC5jbGFzc0xpc3QgPSBjbGFzc2VzLmpvaW4oJyAnKVxyXG4gIGZvciAoY29uc3QgYXR0ciBpbiBhdHRyaWJ1dGVzKSBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCBhdHRyaWJ1dGVzW2F0dHJdKVxyXG5cclxuICBmb3IgKGNvbnN0IGV2ZW50IGluIGV2ZW50TGlzdGVuZXJzKVxyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBldmVudExpc3RlbmVyc1tldmVudF0pXHJcblxyXG4gIHJldHVybiBlbGVtZW50XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldERyYWdJbmRleFRhc2tET00oeSwgbGlzdEJvdW5kcywgdGFza0hlaWdodCA9IDM2KSB7XHJcbiAgY29uc3QgaGVpZ2h0ID0gbGlzdEJvdW5kcy5oZWlnaHRcclxuICBjb25zdCB0YXNrUG9zaXRpb24gPSBoZWlnaHQgLSAoeSAtIGxpc3RCb3VuZHMudG9wKVxyXG4gIGNvbnN0IGluZGV4ID0gTWF0aC5yb3VuZCgoaGVpZ2h0IC0gdGFza1Bvc2l0aW9uKSAvIHRhc2tIZWlnaHQpXHJcbiAgcmV0dXJuIGluZGV4XHJcbn1cclxuXHJcbi8qXHJcbkV2ZW50IGhhbmRsZXJzXHJcbiovXHJcblxyXG4vL0hhbmRsZXMgdGhlIGFkZCB0YXNrIGV2ZW50XHJcbmZ1bmN0aW9uIGNsaWNrQWRkVGFza0V2ZW50SGFuZGxlcihlKSB7XHJcbiAgaWYgKFxyXG4gICAgIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWRkLXRhc2tfX2lucHV0JykgJiZcclxuICAgICFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FkZC10YXNrX19idXR0b24nKVxyXG4gIClcclxuICAgIHJldHVyblxyXG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FkZC10YXNrX19pbnB1dCcpKSB7XHJcbiAgICBpZiAoZS5rZXkgIT09ICdFbnRlcicpIHJldHVyblxyXG4gIH1cclxuICBjb25zdCBsaXN0U2VjdGlvbiA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5saXN0LXNlY3Rpb24nKVxyXG4gIGNvbnN0IFt0YXNrSW5wdXQsIHJlbWluZGVySW5wdXRdID0gW1xyXG4gICAgbGlzdFNlY3Rpb24ucXVlcnlTZWxlY3RvcignLmFkZC10YXNrX19pbnB1dCcpLFxyXG4gICAgbGlzdFNlY3Rpb24ucXVlcnlTZWxlY3RvcignLmFkZC10YXNrX19yZW1pbmRlcicpLFxyXG4gIF1cclxuICBjb25zdCBsaXN0VHlwZSA9IGxpc3RTZWN0aW9uLmRhdGFzZXQubGlzdFR5cGVcclxuXHJcbiAgaWYgKGlzVmFyRmFsc3lBbGVydCh0YXNrSW5wdXQudmFsdWUsICgpID0+IHdpbmRvdy5hbGVydCgnSW52YWxpZCBJbnB1dCEnKSkpXHJcbiAgICByZXR1cm5cclxuXHJcbiAgY29uc3QgdGFzayA9IHRhc2tDb25zdHJ1Y3RvcihcclxuICAgIHRhc2tJbnB1dC52YWx1ZSxcclxuICAgIHJlbWluZGVySW5wdXQudmFsdWUgPyBuZXcgRGF0ZShyZW1pbmRlcklucHV0LnZhbHVlKS50b0xvY2FsZVN0cmluZygpIDogbnVsbFxyXG4gIClcclxuXHJcbiAgaWYgKHRhc2sucmVtaW5kZXIpXHJcbiAgICBzZXRSZW1pbmRlclRpbWVvdXQodGFzay5kYXRlLCB0YXNrLnJlbWluZGVyLCAoKSA9PlxyXG4gICAgICBhbGVydChgUmVtaW5kZXIgZnJvbSBcIiR7bGlzdFR5cGV9XCIgbGlzdDpcXG5cIiR7dGFzay50YXNrfVwiYClcclxuICAgIClcclxuXHJcbiAgYWRkVGFzayh0YXNrLCBsaXN0VHlwZSlcclxuICA7W3Rhc2tJbnB1dC52YWx1ZSwgcmVtaW5kZXJJbnB1dC52YWx1ZSwgcmVtaW5kZXJJbnB1dC50eXBlXSA9IFsnJywgJycsICd0ZXh0J11cclxuXHJcbiAgZ2VuZXJhdGVMaXN0cygpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFJlbWluZGVyVGltZW91dChkYXRlLCByZW1pbmRlciwgZnVuYykge1xyXG4gIGNvbnN0IHJlbWluZGVySW5NaWxsaXNlY29uZHMgPVxyXG4gICAgbmV3IERhdGUocmVtaW5kZXIpLmdldFRpbWUoKSAtIG5ldyBEYXRlKGRhdGUpLmdldFRpbWUoKVxyXG4gIHNldFRpbWVvdXQoZnVuYywgcmVtaW5kZXJJbk1pbGxpc2Vjb25kcylcclxufVxyXG5cclxuLy9IYW5kbGVzIHRoZSBkcmFnc3RhcnQgb2YgYSB0YXNrIGVsZW1lbnRcclxuZnVuY3Rpb24gZHJhZ3N0YXJ0VGFza0V2ZW50SGFuZGxlcihlKSB7XHJcbiAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnZHJhZ2dpbmcnKVxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxldGUtZHJhZycpLmNsYXNzTGlzdC5hZGQoJ3JlZC1iZy1jb2xvcicpXHJcbn1cclxuXHJcbi8vSGFuZGxlcyB0aGUgZHJhZ2VuZCBvZiBhIHRhc2sgZWxlbWVudFxyXG5mdW5jdGlvbiBkcmFnZW5kVGFza0V2ZW50SGFuZGxlcihlKSB7XHJcbiAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2dpbmcnKVxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxldGUtZHJhZycpLmNsYXNzTGlzdC5yZW1vdmUoJ3JlZC1iZy1jb2xvcicpXHJcbiAgZHJhZ2VuZEV2ZW50SGFuZGxlcihlKVxyXG59XHJcblxyXG4vL0hhbmRsZXMgdGhlIHRhc2sgZWRpdFxyXG5mdW5jdGlvbiBlZGl0VGFza0V2ZW50SGFuZGxlcihlKSB7XHJcbiAgaWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2snKSkgcmV0dXJuXHJcblxyXG4gIGNvbnN0IGxpVGFzayA9IGUudGFyZ2V0XHJcbiAgdG9nZ2xlRWRpdFRhc2tQcm9wZXJ0aWVzKGxpVGFzaywgZSlcclxuXHJcbiAgaWYgKGUua2V5ID09PSAnRW50ZXInKSBsaVRhc2suYmx1cigpIC8vIGl0IGV4ZWN1dGVzIHRoZSBibHVyRXZlbnRIYW5kbGVyIHdoaWNoIHVwZGF0ZXMgdGhlIHRhc2tcclxufVxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlRWRpdFRhc2tQcm9wZXJ0aWVzKGxpVGFzaywgZSA9IHsgdHlwZTogbnVsbCB9KSB7XHJcbiAgbGlUYXNrLmNvbnRlbnRFZGl0YWJsZSA9IGxpVGFzay5jb250ZW50RWRpdGFibGUgPyB0cnVlIDogbnVsbCAvL3RydWVcclxuICBsaVRhc2suZHJhZ2dhYmxlID0gbGlUYXNrLmRyYWdnYWJsZSA/IGZhbHNlIDogdHJ1ZSAvL2ZhbHNlXHJcbiAgbGlUYXNrLmNsYXNzTGlzdC50b2dnbGUoJ3RleHQtY3Vyc29yJylcclxuICBpZiAoZS50eXBlID09PSAnZGJsY2xpY2snKSBsaVRhc2suZm9jdXMoKVxyXG59XHJcblxyXG4vL0hhbmRsZXMgdGhlIGJsdXIgZXZlbnQgc28gaWYgdGhlIHRhc2sgZWxlbWVudCBsb3NlcyBmb2N1cywgdGhlIGNoYW5nZSB3aWxsIGJlIHNhdmVkLlxyXG5mdW5jdGlvbiBibHVyRXZlbnRIYW5kbGVyKGUpIHtcclxuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YXNrJykpIHtcclxuICAgIGNvbnN0IGxpVGFzayA9IGUudGFyZ2V0XHJcbiAgICB0b2dnbGVFZGl0VGFza1Byb3BlcnRpZXMobGlUYXNrLCBlKVxyXG4gICAgdXBkYXRlRWRpdGVkVGFzayhsaVRhc2spXHJcbiAgICBnZW5lcmF0ZUxpc3RzKClcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUVkaXRlZFRhc2sobGlUYXNrKSB7XHJcbiAgY29uc3QgbGlzdFR5cGUgPSBsaVRhc2suY2xvc2VzdCgnLmxpc3Qtc2VjdGlvbicpLmRhdGFzZXQubGlzdFR5cGVcclxuICBjb25zdCBuZXdUYXNrID0gdGFza0NvbnN0cnVjdG9yKGxpVGFzay50ZXh0Q29udGVudCwgbGlUYXNrLmRhdGFzZXQucmVtaW5kZXIpXHJcbiAgY29uc3Qgb2xkVGFzayA9IHRhc2tDb25zdHJ1Y3RvcihcclxuICAgIGxpVGFzay5kYXRhc2V0LnRhc2ssXHJcbiAgICBsaVRhc2suZGF0YXNldC5kYXRlLFxyXG4gICAgbGlUYXNrLmRhdGFzZXQucmVtaW5kZXJcclxuICApXHJcbiAgdXBkYXRlVGFzayhuZXdUYXNrLCBvbGRUYXNrLCBsaXN0VHlwZSlcclxufVxyXG5cclxuLy9IYW5kbGVzIHRoZSB0YXNrIG1vdmVtZW50cyBiZXR3ZWVuIGxpc3RzXHJcbmZ1bmN0aW9uIG1vdXNlb3ZlclRhc2tFdmVudEhhbmRsZXIoZSkge1xyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBudW1iZXJLZXlEb3duRXZlbnRIYW5kbGVyKVxyXG4gIGUudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgbW91c2VvdXRUYXNrRXZlbnRIYW5kbGVyKVxyXG59XHJcblxyXG5mdW5jdGlvbiBtb3VzZW91dFRhc2tFdmVudEhhbmRsZXIoZSkge1xyXG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBudW1iZXJLZXlEb3duRXZlbnRIYW5kbGVyKVxyXG4gIGUudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgbW91c2VvdXRUYXNrRXZlbnRIYW5kbGVyKVxyXG59XHJcblxyXG5mdW5jdGlvbiBudW1iZXJLZXlEb3duRXZlbnRIYW5kbGVyKGUpIHtcclxuICBjb25zdCBsaXN0c09iaiA9IHsgMTogJ3RvZG8nLCAyOiAnaW4tcHJvZ3Jlc3MnLCAzOiAnZG9uZScgfVxyXG4gIGlmICghKGUua2V5IGluIGxpc3RzT2JqKSB8fCAhZS5hbHRLZXkpIHJldHVyblxyXG5cclxuICBjb25zdCBtb3VzZU92ZXJFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJzpob3ZlcicpXHJcbiAgY29uc3QgbGlNb3VzZU9uID1cclxuICAgIG1vdXNlT3ZlckVsZW1lbnRzW21vdXNlT3ZlckVsZW1lbnRzLmxlbmd0aCAtIDFdLmNsb3Nlc3QoJy50YXNrJylcclxuXHJcbiAgY29uc3QgdGFzayA9IHRhc2tDb25zdHJ1Y3RvcihcclxuICAgIGxpTW91c2VPbi50ZXh0Q29udGVudCxcclxuICAgIGxpTW91c2VPbi5kYXRhc2V0LnJlbWluZGVyLFxyXG4gICAgbGlNb3VzZU9uLmRhdGFzZXQuZGF0ZVxyXG4gIClcclxuXHJcbiAgY29uc3QgcHJldmlvdXNMaXN0VHlwZSA9IGxpTW91c2VPbi5jbG9zZXN0KCcubGlzdC1zZWN0aW9uJykuZGF0YXNldC5saXN0VHlwZVxyXG5cclxuICBjb25zdCBuZXdMaXN0VHlwZSA9IGxpc3RzT2JqW2Uua2V5XVxyXG5cclxuICBtb3ZlVGFzayh0YXNrLCBwcmV2aW91c0xpc3RUeXBlLCBuZXdMaXN0VHlwZSlcclxufVxyXG5cclxuLy9IYW5kbGVzIHRoZSBrZXl1cCBldmVudCBzbyB3aGVuIHRoZSB1c2VyIHR5cGVzIGEgbGV0dGVyLCB0aGUgaW50ZXJmYWNlIHdpbGwgY2hhbmdlIGFjY29yZGluZ2x5LlxyXG5mdW5jdGlvbiBzZWFyY2hFdmVudEhhbmRsZXIoZSkge1xyXG4gIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50LmlkICE9PSAnc2VhcmNoJykgcmV0dXJuXHJcbiAgY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50XHJcblxyXG4gIGxldCBxdWVyeSA9IHNlYXJjaElucHV0LnZhbHVlXHJcblxyXG4gIGZpbHRlckxpc3RzKHF1ZXJ5LnRvTG93ZXJDYXNlKCkpXHJcbn1cclxuXHJcbi8vSGFuZGxlcyB0aGUgc2F2ZSBhbmQgbG9hZCBidXR0b25zIGNsaWNrIGFuZCBzYXZlIGRhdGEgdG8gdGhlIEFQSSBvciBsb2FkIGRhdGEgZnJvbSB0aGUgQVBJXHJcbmFzeW5jIGZ1bmN0aW9uIGNsaWNrRXZlbnRIYW5kbGVyQXBpKGUpIHtcclxuICB0b2dnbGVMb2FkZXIoKVxyXG4gIGlmIChlLnRhcmdldC5pZCA9PT0gJ3NhdmUtYnRuJykge1xyXG4gICAgLy9TYXZlIHRvIGFwaVxyXG4gICAgY29uc3QgdGFza3NPYmplY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3NPYmplY3RzJykpXHJcbiAgICBhd2FpdCBzYXZlVGFza3NUb0FwaSh0YXNrc09iamVjdHMpXHJcbiAgfSBlbHNlIGlmIChlLnRhcmdldC5pZCA9PT0gJ2xvYWQtYnRuJykge1xyXG4gICAgLy9Mb2FkIGZyb20gYXBpXHJcbiAgICBhd2FpdCBsb2FkVGFza3NGcm9tQXBpKClcclxuICAgIGdlbmVyYXRlTGlzdHMoKVxyXG4gIH1cclxuICB0b2dnbGVMb2FkZXIoKVxyXG59XHJcblxyXG4vL0hhbmRsZXMgdGhlIGRyYWdlbmQgZXZlbnQgb2YgYSB0YXNrIGFuZCBkZWxldGVzL21vdmVzIHRoZSB0YXNrXHJcbmZ1bmN0aW9uIGRyYWdlbmRFdmVudEhhbmRsZXIoZSkge1xyXG4gIGNvbnN0IGhvdmVyRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCc6aG92ZXInKVxyXG4gIC8vRGVsZXRlIGRyYWcgdGFza1xyXG4gIGlmIChob3ZlckVsZW1lbnRzW2hvdmVyRWxlbWVudHMubGVuZ3RoIC0gMV0uY2xvc2VzdCgnI2RlbGV0ZS1kcmFnJykpXHJcbiAgICByZXR1cm4gZGVsZXRlVGFza0hhbmRsZXIoZSlcclxuXHJcbiAgY29uc3QgbGlzdFNlY3Rpb24gPVxyXG4gICAgaG92ZXJFbGVtZW50c1tob3ZlckVsZW1lbnRzLmxlbmd0aCAtIDFdLmNsb3Nlc3QoJy5saXN0LXNlY3Rpb24nKVxyXG4gIGlmIChcclxuICAgIGlzVmFyRmFsc3lBbGVydChsaXN0U2VjdGlvbiwgKCkgPT5cclxuICAgICAgd2luZG93LmFsZXJ0KCdZb3UgYXJlIG5vdCBhbGxvd2VkIHRvIGRyYWcgdGhlcmUhJylcclxuICAgIClcclxuICApXHJcbiAgICByZXR1cm5cclxuXHJcbiAgY29uc3QgdWxMaXN0ID0gbGlzdFNlY3Rpb24ucXVlcnlTZWxlY3RvcigndWwnKVxyXG4gIGNvbnN0IG5ld0xpc3RUeXBlID0gbGlzdFNlY3Rpb24uZGF0YXNldC5saXN0VHlwZVxyXG4gIGNvbnN0IHByZXZpb3VzTGlzdFR5cGUgPSBlLnRhcmdldC5jbG9zZXN0KCcubGlzdC1zZWN0aW9uJykuZGF0YXNldC5saXN0VHlwZVxyXG4gIGNvbnN0IHRhc2sgPSB0YXNrQ29uc3RydWN0b3IoXHJcbiAgICBlLnRhcmdldC50ZXh0Q29udGVudCxcclxuICAgIGUudGFyZ2V0LmRhdGFzZXQucmVtaW5kZXIsXHJcbiAgICBlLnRhcmdldC5kYXRhc2V0LmRhdGVcclxuICApXHJcblxyXG4gIGNvbnN0IGluZGV4ID0gaW5kaWNhdGVUYXNrRHJhZ0luZGV4KHVsTGlzdCwgZSlcclxuXHJcbiAgbW92ZVRhc2sodGFzaywgcHJldmlvdXNMaXN0VHlwZSwgbmV3TGlzdFR5cGUsIGluZGV4KVxyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVUYXNrSGFuZGxlcihlKSB7XHJcbiAgY29uc3QgbGlzdFR5cGUgPSBlLnRhcmdldC5jbG9zZXN0KCcubGlzdC1zZWN0aW9uJykuZGF0YXNldC5saXN0VHlwZVxyXG4gIGNvbnN0IHRhc2sgPSB0YXNrQ29uc3RydWN0b3IoXHJcbiAgICBlLnRhcmdldC50ZXh0Q29udGVudCxcclxuICAgIGUudGFyZ2V0LmRhdGFzZXQucmVtaW5kZXIsXHJcbiAgICBlLnRhcmdldC5kYXRhc2V0LmRhdGVcclxuICApXHJcbiAgcmVtb3ZlVGFzayh0YXNrLCBsaXN0VHlwZSlcclxuICBnZW5lcmF0ZUxpc3RzKClcclxuICByZXR1cm4gdHJ1ZVxyXG59XHJcblxyXG4vL0hhbmRsZXMgdGhlIGRyYWdvdmVyL2RyYWdsZWF2ZSBldmVudCBvZiBhIHRhc2sgYW5kIGFkZCBhIGNsYXNzIHRvIGluZGljYXRlIHdoYXQgcG9zaXRpb24gdG8gaW5zZXJ0IGluXHJcbmZ1bmN0aW9uIGRyYWdvdmVyVGFza0V2ZW50SGFuZGxlcihlKSB7XHJcbiAgY29uc3QgdWxMaXN0ID0gZS50YXJnZXQuY2xvc2VzdCgndWwnKVxyXG4gIGNvbnN0IGxpc3RCb3VuZHMgPSB1bExpc3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuICBjb25zdCB5ID0gZS5jbGllbnRZXHJcbiAgY29uc3QgbGlUYXNrcyA9IHVsTGlzdC5xdWVyeVNlbGVjdG9yQWxsKCdsaScpXHJcbiAgY29uc3QgZHJhZ0luZGV4ID0gZ2V0RHJhZ0luZGV4VGFza0RPTSh5LCBsaXN0Qm91bmRzLCBsaVRhc2tzWzBdLm9mZnNldEhlaWdodClcclxuICBjb25zdCB0YXNrSW5kZXggPSBnZXRFbGVtZW50SW5kZXgoZS50YXJnZXQpXHJcblxyXG4gIGxpVGFza3MuZm9yRWFjaCgobGkpID0+IHtcclxuICAgIGxpLmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdvdmVyLWJvcmRlci1ib3R0b20nLCAnZHJhZ292ZXItYm9yZGVyLXRvcCcpXHJcbiAgfSlcclxuXHJcbiAgaWYgKGRyYWdJbmRleCAhPT0gbGlUYXNrcy5sZW5ndGgpXHJcbiAgICBsaVRhc2tzW2RyYWdJbmRleF0uY2xhc3NMaXN0LmFkZCgnZHJhZ292ZXItYm9yZGVyLXRvcCcpXHJcbiAgZWxzZSBsaVRhc2tzW3Rhc2tJbmRleF0uY2xhc3NMaXN0LmFkZCgnZHJhZ292ZXItYm9yZGVyLWJvdHRvbScpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRyYWdsZWF2ZVRhc2tFdmVudEhhbmRsZXIoZSkge1xyXG4gIGNvbnN0IGxpVGFza3MgPSBlLnRhcmdldC5jbG9zZXN0KCd1bCcpLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJylcclxuICBsaVRhc2tzLmZvckVhY2goKGxpKSA9PiB7XHJcbiAgICBsaS5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnb3Zlci1ib3JkZXItYm90dG9tJywgJ2RyYWdvdmVyLWJvcmRlci10b3AnKVxyXG4gIH0pXHJcbn1cclxuXHJcbi8vSGFuZGxlcyB0aGUgbW91c2VvdmVyIGV2ZW50IGFuZCBkaXNwbGF5cyBhIGRpdiB3aXRoIGluZm8gb2YgdGhlIHRhc2tcclxuZnVuY3Rpb24gbW91c2VvdmVySW5mb0V2ZW50SGFuZGxlcihlKSB7XHJcbiAgY29uc3QgaW5mb0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvLWRpdicpXHJcbiAgaW5mb0Rpdi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5LW5vbmUnKVxyXG5cclxuICBjb25zdCB0YXNrID0gZ2V0VGFza0J5TmFtZShcclxuICAgIGUudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZGF0YXNldC50YXNrLFxyXG4gICAgZS50YXJnZXQuY2xvc2VzdCgnLmxpc3Qtc2VjdGlvbicpLmRhdGFzZXQubGlzdFR5cGVcclxuICApXHJcblxyXG4gIGNvbnN0IHVsVGFzayA9IGNyZWF0ZUVsZW1lbnQoJ3VsJywgY3JlYXRlSW5mb0xpc3QodGFzaykpXHJcbiAgaW5mb0Rpdi5hcHBlbmQodWxUYXNrKVxyXG5cclxuICBjb25zdCBsZWZ0ID0gZS5wYWdlWFxyXG4gIGNvbnN0IHRvcCA9IGUucGFnZVlcclxuICBjb25zdCBkaXZIZWlnaHQgPSBpbmZvRGl2Lm9mZnNldEhlaWdodFxyXG4gIGluZm9EaXYuc3R5bGUubGVmdCA9IGxlZnQgLSAxMDAgKyAncHgnXHJcbiAgaW5mb0Rpdi5zdHlsZS50b3AgPSB0b3AgLSBkaXZIZWlnaHQgLyAyIC0gMjAgKyAncHgnXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUluZm9MaXN0KHRhc2spIHtcclxuICBjb25zdCBsaVRhc2tUZXh0ID0gY3JlYXRlRWxlbWVudCgnbGknLCBbdGFzay50YXNrXSwgW10sIHtcclxuICAgICdkYXRhLWhpZ2hsaWdodHdvcmQnOiAnVGFzazogJyxcclxuICB9KVxyXG4gIGNvbnN0IGxpVGFza0RhdGUgPSBjcmVhdGVFbGVtZW50KCdsaScsIFt0YXNrLmRhdGUuc3BsaXQoJywgJylbMF1dLCBbXSwge1xyXG4gICAgJ2RhdGEtaGlnaGxpZ2h0d29yZCc6ICdEYXRlOiAnLFxyXG4gIH0pXHJcbiAgY29uc3QgbGlUYXNrVGltZSA9IGNyZWF0ZUVsZW1lbnQoJ2xpJywgW3Rhc2suZGF0ZS5zcGxpdCgnLCAnKVsxXV0sIFtdLCB7XHJcbiAgICAnZGF0YS1oaWdobGlnaHR3b3JkJzogJ1RpbWU6ICcsXHJcbiAgfSlcclxuICBjb25zdCBsaVRhc2tSZW1pbmRlciA9IGNyZWF0ZUVsZW1lbnQoJ2xpJywgW3Rhc2sucmVtaW5kZXJdLCBbXSwge1xyXG4gICAgJ2RhdGEtaGlnaGxpZ2h0d29yZCc6ICdSZW1pbmRlcjogJyxcclxuICB9KVxyXG4gIHJldHVybiBbbGlUYXNrVGV4dCwgbGlUYXNrRGF0ZSwgbGlUYXNrVGltZSwgbGlUYXNrUmVtaW5kZXJdXHJcbn1cclxuZnVuY3Rpb24gbW91c2VvdXRJbmZvRXZlbnRIYW5kbGVyKGUpIHtcclxuICBjb25zdCBpbmZvRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm8tZGl2JylcclxuICBpbmZvRGl2LmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktbm9uZScpXHJcbiAgd2hpbGUgKGluZm9EaXYuZmlyc3RDaGlsZCkgaW5mb0Rpdi5yZW1vdmVDaGlsZChpbmZvRGl2LmZpcnN0Q2hpbGQpXHJcbn1cclxuXHJcbi8qXHJcbkxvY2FsIFN0b3JhZ2UgZnVuY3Rpb25zICh0YXNrIGlzIGFuIG9iamVjdClcclxuKi9cclxuXHJcbmZ1bmN0aW9uIGFkZFRhc2sodGFzaywgbGlzdFR5cGUpIHtcclxuICBjb25zdCBhbGxUYXNrc09iaiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpXHJcbiAgYWxsVGFza3NPYmpbbGlzdFR5cGVdLnVuc2hpZnQodGFzay50YXNrKVxyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KGFsbFRhc2tzT2JqKSlcclxuXHJcbiAgY29uc3QgYWxsT2JqZWN0c1Rhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3NPYmplY3RzJykpXHJcbiAgYWxsT2JqZWN0c1Rhc2tzW2xpc3RUeXBlXS51bnNoaWZ0KHRhc2spXHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzT2JqZWN0cycsIEpTT04uc3RyaW5naWZ5KGFsbE9iamVjdHNUYXNrcykpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVRhc2sobmV3VGFzaywgb2xkVGFzaywgbGlzdFR5cGUpIHtcclxuICBjb25zdCBhbGxUYXNrc09iaiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpXHJcbiAgY29uc3QgaSA9IGFsbFRhc2tzT2JqW2xpc3RUeXBlXS5maW5kSW5kZXgoKHgpID0+IHggPT09IG9sZFRhc2sudGFzaylcclxuICBhbGxUYXNrc09ialtsaXN0VHlwZV1baV0gPSBuZXdUYXNrLnRhc2tcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeShhbGxUYXNrc09iaikpXHJcblxyXG4gIGNvbnN0IGFsbE9iamVjdHNUYXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzT2JqZWN0cycpKVxyXG4gIGNvbnN0IGogPSBhbGxPYmplY3RzVGFza3NbbGlzdFR5cGVdLmZpbmRJbmRleCgoeCkgPT4geC50YXNrID09PSBvbGRUYXNrLnRhc2spXHJcbiAgYWxsT2JqZWN0c1Rhc2tzW2xpc3RUeXBlXVtqXSA9IG5ld1Rhc2tcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3NPYmplY3RzJywgSlNPTi5zdHJpbmdpZnkoYWxsT2JqZWN0c1Rhc2tzKSlcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlVGFzayh0YXNrLCBsaXN0VHlwZSkge1xyXG4gIGNvbnN0IGFsbFRhc2tzT2JqID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSlcclxuICBjb25zdCBpID0gYWxsVGFza3NPYmpbbGlzdFR5cGVdLmZpbmRJbmRleCgoeCkgPT4geCA9PT0gdGFzay50YXNrKVxyXG4gIGFsbFRhc2tzT2JqW2xpc3RUeXBlXS5zcGxpY2UoaSwgMSlcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeShhbGxUYXNrc09iaikpXHJcblxyXG4gIGNvbnN0IGFsbE9iamVjdHNUYXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzT2JqZWN0cycpKVxyXG4gIGNvbnN0IGogPSBhbGxPYmplY3RzVGFza3NbbGlzdFR5cGVdLmZpbmRJbmRleCgoeCkgPT4geC50YXNrID09PSB0YXNrLnRhc2spXHJcbiAgYWxsT2JqZWN0c1Rhc2tzW2xpc3RUeXBlXS5zcGxpY2UoaiwgMSlcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3NPYmplY3RzJywgSlNPTi5zdHJpbmdpZnkoYWxsT2JqZWN0c1Rhc2tzKSlcclxufVxyXG5cclxuZnVuY3Rpb24gbW92ZVRhc2sodGFzaywgcHJldmlvdXNMaXN0VHlwZSwgbmV3TGlzdFR5cGUsIHNwbGljZUluZGV4ID0gbnVsbCkge1xyXG4gIHJlbW92ZVRhc2sodGFzaywgcHJldmlvdXNMaXN0VHlwZSlcclxuXHJcbiAgaWYgKCFzcGxpY2VJbmRleCkgYWRkVGFzayh0YXNrLCBuZXdMaXN0VHlwZSlcclxuICBlbHNlIHNwbGljZVRhc2tzKHRhc2ssIHNwbGljZUluZGV4LCBuZXdMaXN0VHlwZSlcclxuXHJcbiAgZ2VuZXJhdGVMaXN0cygpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldExvY2FsU3RvcmFnZSgpIHtcclxuICBjb25zdCBzZXRUYXNrcyA9IHtcclxuICAgIHRvZG86IFtdLFxyXG4gICAgJ2luLXByb2dyZXNzJzogW10sXHJcbiAgICBkb25lOiBbXSxcclxuICB9XHJcbiAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSlcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHNldFRhc2tzKSlcclxuICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrc09iamVjdHMnKSlcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrc09iamVjdHMnLCBKU09OLnN0cmluZ2lmeShzZXRUYXNrcykpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUFsbFRhc2tzKCkge1xyXG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0YXNrcycpXHJcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rhc2tzT2JqZWN0cycpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlcGxhY2VBbGxUYXNrcyh0YXNrcykge1xyXG4gIHJlbW92ZUFsbFRhc2tzKClcclxuICBjb25zdCB0b2RvID0gW11cclxuICBjb25zdCBpblByb2dyZXNzID0gW11cclxuICBjb25zdCBkb25lID0gW11cclxuXHJcbiAgZm9yIChjb25zdCB0YXNrIG9mIHRhc2tzWyd0b2RvJ10pIHRvZG8ucHVzaCh0YXNrLnRhc2spXHJcbiAgZm9yIChjb25zdCB0YXNrIG9mIHRhc2tzWydpbi1wcm9ncmVzcyddKSBpblByb2dyZXNzLnB1c2godGFzay50YXNrKVxyXG4gIGZvciAoY29uc3QgdGFzayBvZiB0YXNrc1snZG9uZSddKSBkb25lLnB1c2godGFzay50YXNrKVxyXG5cclxuICBjb25zdCB0YXNrc1N0cmluZ3MgPSB7XHJcbiAgICB0b2RvOiB0b2RvLFxyXG4gICAgJ2luLXByb2dyZXNzJzogaW5Qcm9ncmVzcyxcclxuICAgIGRvbmU6IGRvbmUsXHJcbiAgfVxyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzU3RyaW5ncykpXHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzT2JqZWN0cycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSlcclxufVxyXG5cclxuZnVuY3Rpb24gc3BsaWNlVGFza3ModGFzaywgc3RhcnRJbmRleCwgbGlzdFR5cGUsIGRlbGV0ZUNvdW50ID0gMCkge1xyXG4gIGNvbnN0IGFsbFRhc2tzT2JqID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSlcclxuICBhbGxUYXNrc09ialtsaXN0VHlwZV0uc3BsaWNlKHN0YXJ0SW5kZXgsIGRlbGV0ZUNvdW50LCB0YXNrLnRhc2spXHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkoYWxsVGFza3NPYmopKVxyXG5cclxuICBjb25zdCBhbGxPYmplY3RzVGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrc09iamVjdHMnKSlcclxuICBhbGxPYmplY3RzVGFza3NbbGlzdFR5cGVdLnNwbGljZShzdGFydEluZGV4LCBkZWxldGVDb3VudCwgdGFzaylcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3NPYmplY3RzJywgSlNPTi5zdHJpbmdpZnkoYWxsT2JqZWN0c1Rhc2tzKSlcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VGFza0J5TmFtZSh0YXNrTmFtZSwgbGlzdFR5cGUpIHtcclxuICBjb25zdCBhbGxPYmplY3RzVGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrc09iamVjdHMnKSlcclxuICBjb25zdCBpID0gYWxsT2JqZWN0c1Rhc2tzW2xpc3RUeXBlXS5maW5kSW5kZXgoKHgpID0+IHgudGFzayA9PT0gdGFza05hbWUpXHJcbiAgcmV0dXJuIGFsbE9iamVjdHNUYXNrc1tsaXN0VHlwZV1baV1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VGFza3NMaXN0KGxpc3RUeXBlLCBpdGVtID0gJ3Rhc2tzT2JqZWN0cycpIHtcclxuICBjb25zdCBhbGxPYmplY3RzVGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGl0ZW0pKVxyXG4gIHJldHVybiBhbGxPYmplY3RzVGFza3NbbGlzdFR5cGVdXHJcbn1cclxuXHJcbi8qXHJcbkFQSSBmdW5jdGlvbnNcclxuKi9cclxuYXN5bmMgZnVuY3Rpb24gYXBpUmVxdWVzdChtZXRob2QsIHRhc2tzT2JqZWN0cyA9IG51bGwpIHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgJ2h0dHBzOi8vanNvbi1iaW5zLmhlcm9rdWFwcC5jb20vYmluLzYxNGFmYTA1NDAyMWFjMGU2YzA4MGNjMycsXHJcbiAgICB7XHJcbiAgICAgIG1ldGhvZCxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IHRhc2tzT2JqZWN0cyA/IEpTT04uc3RyaW5naWZ5KHsgdGFza3M6IHRhc2tzT2JqZWN0cyB9KSA6IG51bGwsXHJcbiAgICB9XHJcbiAgKVxyXG4gIHJldHVybiByZXNwb25zZVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzYXZlVGFza3NUb0FwaSh0YXNrc09iamVjdHMpIHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaVJlcXVlc3QoJ1BVVCcsIHRhc2tzT2JqZWN0cylcclxuXHJcbiAgaWYgKCFyZXNwb25zZS5vaykgYWxlcnQoYGVycm9yIHN0YXR1cyEgJHtyZXNwb25zZS5zdGF0dXN9YClcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gbG9hZFRhc2tzRnJvbUFwaSgpIHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaVJlcXVlc3QoJ0dFVCcpXHJcblxyXG4gIGlmICghcmVzcG9uc2Uub2spIGFsZXJ0KGBzdGF0dXMgZXJyb3IhICR7cmVzcG9uc2Uuc3RhdHVzfWApXHJcblxyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICBjb25zdCB0YXNrcyA9IGRhdGEudGFza3NcclxuXHJcbiAgcmVwbGFjZUFsbFRhc2tzKHRhc2tzKVxyXG59XHJcblxyXG4vKlxyXG5IZWxwZXIgZnVuY3Rpb25zXHJcbiovXHJcblxyXG4vL2xvYWRlciBnaWYgZGlzcGxheSBmdW5jdGlvblxyXG5mdW5jdGlvbiB0b2dnbGVMb2FkZXIoKSB7XHJcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFwaS1pbnRlcmFjdGlvbiA+IGRpdicpXHJcbiAgaWYgKGRpdi5sYXN0RWxlbWVudENoaWxkLnRhZ05hbWUgPT09ICdJTUcnKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZGVyLWltZycpLnJlbW92ZSgpXHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IGxvYWRlckltZyA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycsIFtdLCBbJ2xvYWRlciddLCB7XHJcbiAgICAgIGlkOiAnbG9hZGVyLWltZycsXHJcbiAgICAgIHNyYzogJy4vbG9hZGluZy5naWYnLFxyXG4gICAgfSlcclxuICAgIGRpdi5hcHBlbmQobG9hZGVySW1nKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RWxlbWVudEluZGV4KGVsZW1lbnQpIHtcclxuICBjb25zdCBwYXJlbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnRcclxuICBjb25zdCBjaGlsZHJlblR5cGUgPSBwYXJlbnQucXVlcnlTZWxlY3RvckFsbChlbGVtZW50LnRhZ05hbWUpXHJcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoY2hpbGRyZW5UeXBlLCBlbGVtZW50KVxyXG59XHJcblxyXG5mdW5jdGlvbiB0YXNrQ29uc3RydWN0b3IodGFzaywgcmVtaW5kZXIsIGRhdGUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCkpIHtcclxuICByZXR1cm4geyB0YXNrLCBkYXRlLCByZW1pbmRlciB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluZGljYXRlVGFza0RyYWdJbmRleCh1bExpc3QsIGUpIHtcclxuICBjb25zdCBsaXN0Qm91bmRzID0gdWxMaXN0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcbiAgY29uc3QgeSA9IGUuY2xpZW50WVxyXG4gIGxldCBpbmRleCA9IGdldERyYWdJbmRleFRhc2tET00oeSwgbGlzdEJvdW5kcywgZS50YXJnZXQub2Zmc2V0SGVpZ2h0KVxyXG5cclxuICBpZiAoZS50YXJnZXQuY2xvc2VzdCgndWwnKSA9PT0gdWxMaXN0KSB7XHJcbiAgICBjb25zdCBsaUluZGV4ID0gZ2V0RWxlbWVudEluZGV4KGUudGFyZ2V0KVxyXG4gICAgaWYgKGxpSW5kZXggPCBpbmRleCkgaW5kZXgtLVxyXG4gIH1cclxuICByZXR1cm4gaW5kZXhcclxufVxyXG5cclxuLypcclxuVmFsaWRhdGUgZnVuY3Rpb25zXHJcbiovXHJcblxyXG5mdW5jdGlvbiBpc1ZhckZhbHN5QWxlcnQoXHJcbiAgdmFyaWFibGUsXHJcbiAgYWxlcnRNZXNzYWdlID0gKCkgPT4gd2luZG93LmFsZXJ0KCdJbnZhbGlkIScpXHJcbikge1xyXG4gIGlmICh2YXJpYWJsZSkge1xyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG4gIGFsZXJ0TWVzc2FnZSgpXHJcbiAgcmV0dXJuIHRydWVcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=