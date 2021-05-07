(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "+EN/":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "LboF");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--13-1!../node_modules/postcss-loader/src??embedded!../node_modules/resolve-url-loader??ref--13-3!../node_modules/sass-loader/dist/cjs.js??ref--13-4!./styles.scss */ "/I9Y");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "/I9Y":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--13-1!./node_modules/postcss-loader/src??embedded!./node_modules/resolve-url-loader??ref--13-3!./node_modules/sass-loader/dist/cjs.js??ref--13-4!./src/styles.scss ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "JPst");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* You can add global styles to this file, and also import other style files */\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\r\n   ========================================================================== */\n/**\r\n * 1. Correct the line height in all browsers.\r\n * 2. Prevent adjustments of font size after orientation changes in iOS.\r\n */\nhtml {\r\n    line-height: 1.15; /* 1 */\r\n    -webkit-text-size-adjust: 100%; /* 2 */\r\n  }\n/* Sections\r\n     ========================================================================== */\n/**\r\n   * Remove the margin in all browsers.\r\n   */\nbody {\r\n    margin: 0;\r\n  }\n/**\r\n   * Render the `main` element consistently in IE.\r\n   */\nmain {\r\n    display: block;\r\n  }\n/**\r\n   * Correct the font size and margin on `h1` elements within `section` and\r\n   * `article` contexts in Chrome, Firefox, and Safari.\r\n   */\nh1 {\r\n    font-size: 2em;\r\n    margin: 0.67em 0;\r\n  }\n/* Grouping content\r\n     ========================================================================== */\n/**\r\n   * 1. Add the correct box sizing in Firefox.\r\n   * 2. Show the overflow in Edge and IE.\r\n   */\nhr {\r\n    box-sizing: content-box; /* 1 */\r\n    height: 0; /* 1 */\r\n    overflow: visible; /* 2 */\r\n  }\n/**\r\n   * 1. Correct the inheritance and scaling of font size in all browsers.\r\n   * 2. Correct the odd `em` font sizing in all browsers.\r\n   */\npre {\r\n    font-family: monospace, monospace; /* 1 */\r\n    font-size: 1em; /* 2 */\r\n  }\n/* Text-level semantics\r\n     ========================================================================== */\n/**\r\n   * Remove the gray background on active links in IE 10.\r\n   */\na {\r\n    background-color: transparent;\r\n  }\n/**\r\n   * 1. Remove the bottom border in Chrome 57-\r\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n   */\nabbr[title] {\r\n    border-bottom: none; /* 1 */\r\n    text-decoration: underline; /* 2 */\r\n    -webkit-text-decoration: underline dotted;\r\n            text-decoration: underline dotted; /* 2 */\r\n  }\n/**\r\n   * Add the correct font weight in Chrome, Edge, and Safari.\r\n   */\nb,\r\n  strong {\r\n    font-weight: bolder;\r\n  }\n/**\r\n   * 1. Correct the inheritance and scaling of font size in all browsers.\r\n   * 2. Correct the odd `em` font sizing in all browsers.\r\n   */\ncode,\r\n  kbd,\r\n  samp {\r\n    font-family: monospace, monospace; /* 1 */\r\n    font-size: 1em; /* 2 */\r\n  }\n/**\r\n   * Add the correct font size in all browsers.\r\n   */\nsmall {\r\n    font-size: 80%;\r\n  }\n/**\r\n   * Prevent `sub` and `sup` elements from affecting the line height in\r\n   * all browsers.\r\n   */\nsub,\r\n  sup {\r\n    font-size: 75%;\r\n    line-height: 0;\r\n    position: relative;\r\n    vertical-align: baseline;\r\n  }\nsub {\r\n    bottom: -0.25em;\r\n  }\nsup {\r\n    top: -0.5em;\r\n  }\n/* Embedded content\r\n     ========================================================================== */\n/**\r\n   * Remove the border on images inside links in IE 10.\r\n   */\nimg {\r\n    border-style: none;\r\n  }\n/* Forms\r\n     ========================================================================== */\n/**\r\n   * 1. Change the font styles in all browsers.\r\n   * 2. Remove the margin in Firefox and Safari.\r\n   */\nbutton,\r\n  input,\r\n  optgroup,\r\n  select,\r\n  textarea {\r\n    font-family: inherit; /* 1 */\r\n    font-size: 100%; /* 1 */\r\n    line-height: 1.15; /* 1 */\r\n    margin: 0; /* 2 */\r\n  }\n/**\r\n   * Show the overflow in IE.\r\n   * 1. Show the overflow in Edge.\r\n   */\nbutton,\r\n  input { /* 1 */\r\n    overflow: visible;\r\n  }\n/**\r\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n   * 1. Remove the inheritance of text transform in Firefox.\r\n   */\nbutton,\r\n  select { /* 1 */\r\n    text-transform: none;\r\n  }\n/**\r\n   * Correct the inability to style clickable types in iOS and Safari.\r\n   */\nbutton,\r\n  [type=\"button\"],\r\n  [type=\"reset\"],\r\n  [type=\"submit\"] {\r\n    -webkit-appearance: button;\r\n  }\n/**\r\n   * Remove the inner border and padding in Firefox.\r\n   */\nbutton::-moz-focus-inner,\r\n  [type=\"button\"]::-moz-focus-inner,\r\n  [type=\"reset\"]::-moz-focus-inner,\r\n  [type=\"submit\"]::-moz-focus-inner {\r\n    border-style: none;\r\n    padding: 0;\r\n  }\n/**\r\n   * Restore the focus styles unset by the previous rule.\r\n   */\nbutton:-moz-focusring,\r\n  [type=\"button\"]:-moz-focusring,\r\n  [type=\"reset\"]:-moz-focusring,\r\n  [type=\"submit\"]:-moz-focusring {\r\n    outline: 1px dotted ButtonText;\r\n  }\n/**\r\n   * Correct the padding in Firefox.\r\n   */\nfieldset {\r\n    padding: 0.35em 0.75em 0.625em;\r\n  }\n/**\r\n   * 1. Correct the text wrapping in Edge and IE.\r\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n   * 3. Remove the padding so developers are not caught out when they zero out\r\n   *    `fieldset` elements in all browsers.\r\n   */\nlegend {\r\n    box-sizing: border-box; /* 1 */\r\n    color: inherit; /* 2 */\r\n    display: table; /* 1 */\r\n    max-width: 100%; /* 1 */\r\n    padding: 0; /* 3 */\r\n    white-space: normal; /* 1 */\r\n  }\n/**\r\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n   */\nprogress {\r\n    vertical-align: baseline;\r\n  }\n/**\r\n   * Remove the default vertical scrollbar in IE 10+.\r\n   */\ntextarea {\r\n    overflow: auto;\r\n  }\n/**\r\n   * 1. Add the correct box sizing in IE 10.\r\n   * 2. Remove the padding in IE 10.\r\n   */\n[type=\"checkbox\"],\r\n  [type=\"radio\"] {\r\n    box-sizing: border-box; /* 1 */\r\n    padding: 0; /* 2 */\r\n  }\n/**\r\n   * Correct the cursor style of increment and decrement buttons in Chrome.\r\n   */\n[type=\"number\"]::-webkit-inner-spin-button,\r\n  [type=\"number\"]::-webkit-outer-spin-button {\r\n    height: auto;\r\n  }\n/**\r\n   * 1. Correct the odd appearance in Chrome and Safari.\r\n   * 2. Correct the outline style in Safari.\r\n   */\n[type=\"search\"] {\r\n    -webkit-appearance: textfield; /* 1 */\r\n    outline-offset: -2px; /* 2 */\r\n  }\n/**\r\n   * Remove the inner padding in Chrome and Safari on macOS.\r\n   */\n[type=\"search\"]::-webkit-search-decoration {\r\n    -webkit-appearance: none;\r\n  }\n/**\r\n   * 1. Correct the inability to style clickable types in iOS and Safari.\r\n   * 2. Change font properties to `inherit` in Safari.\r\n   */\n::-webkit-file-upload-button {\r\n    -webkit-appearance: button; /* 1 */\r\n    font: inherit; /* 2 */\r\n  }\n/* Interactive\r\n     ========================================================================== */\n/*\r\n   * Add the correct display in Edge, IE 10+, and Firefox.\r\n   */\ndetails {\r\n    display: block;\r\n  }\n/*\r\n   * Add the correct display in all browsers.\r\n   */\nsummary {\r\n    display: list-item;\r\n  }\n/* Misc\r\n     ========================================================================== */\n/**\r\n   * Add the correct display in IE 10+.\r\n   */\ntemplate {\r\n    display: none;\r\n  }\n/**\r\n   * Add the correct display in IE 10.\r\n   */\n[hidden] {\r\n    display: none;\r\n  }\n@font-face {\n  font-family: \"poppins\";\n  src: url('Poppins-Medium.ttf') format(\"truetype\");\n}\n*,\n*:before,\n*:after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody,\nhtml {\n  width: 100%;\n  height: 100%;\n  overflow-x: hidden;\n  text-align: center;\n}\nbody {\n  font-size: 16px;\n  -webkit-font-smoothing: antialiased;\n  color: #111827;\n  background-color: #F7F9FC;\n  font-family: poppins, sans-serif;\n}\nh2 {\n  font-size: 2rem;\n  margin-bottom: 0.8rem;\n}\nbutton {\n  display: block;\n  text-transform: uppercase;\n  padding: 0.6rem 1rem;\n  border: 1px solid #111827;\n  border-radius: 4px;\n  box-shadow: 0 0.8rem 0.8rem rgba(0, 0, 0, 0.12);\n  position: relative;\n  overflow: hidden;\n  cursor: pointer;\n}\nbutton:focus {\n  outline: none;\n}\nbutton::before {\n  background: #3366ff1f;\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transition: all 0.6s ease;\n  transform: translate(-50%, -50%) rotate(45deg);\n  width: 100%;\n  height: 0%;\n  mix-blend-mode: difference;\n}\nbutton:hover::before {\n  height: 500%;\n}\nbutton.button--primary {\n  background-color: #111827;\n  color: #FFF;\n}\nbutton.button--secondary {\n  background-color: #3366ff1f;\n  color: #111827;\n}\nbutton.button--secondary:disabled {\n  opacity: 0.6;\n}\nbutton .button-icon {\n  width: 1rem;\n  vertical-align: middle;\n  color: #3366ff1f;\n}\n.red-color {\n  color: #ff333d;\n}\n.padding-low {\n  padding: 0.4rem;\n}\n.flex-evenly {\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n}\n.bottom-gradient:after {\n  content: \"\";\n  display: none;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(#b9cbff00 0%, #3366ff57 100%);\n  border-radius: 1rem;\n}\n.text-underline {\n  position: relative;\n  margin-bottom: 2rem;\n}\n.text-underline::after {\n  content: \"\";\n  width: 3rem;\n  height: 0.3rem;\n  background-color: #111827;\n  position: absolute;\n  bottom: -0.6rem;\n  left: 50%;\n  transform: translate(-50%);\n}\n.loader {\n  width: 100vw;\n  height: 100vh;\n  z-index: 10;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background: linear-gradient(135deg, #b9cbff00 0%, #3366ff57 100%);\n}\n.loader img {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.content {\n  margin: 0 auto;\n  width: 600px;\n  max-width: 80%;\n}\n.content p {\n  line-height: 140%;\n  margin: 1.8rem 0;\n}\n.service-card {\n  border: 1px solid #111827;\n  border-radius: 1rem;\n  box-shadow: 0 0.5rem 1rem 0 rgba(44, 51, 73, 0.1);\n  width: 18rem;\n  margin-bottom: 1.5rem;\n  transition: all 0.6s ease;\n}\n.service-card:hover {\n  background-color: #111827;\n  color: #F7F9FC;\n}\n.service-card:hover .service-card-header {\n  border-color: #F7F9FC;\n}\n.service-card .service-card-header {\n  border-bottom: 1px solid #111827;\n}\n.service-card .service-card-header img {\n  width: 8rem;\n}\n.service-card .service-card-body h4 {\n  margin-bottom: 1rem;\n}\n.service-card .service-card-body ul {\n  list-style-position: inside;\n  line-height: 130%;\n}\n.service-card .service-card-header, .service-card .service-card-body {\n  padding: 0.4rem 0.6rem;\n}\n@keyframes fade-disappear {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes puff-in-center {\n  0% {\n    transform: scale(1.2);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.main-form {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 3rem;\n}\nform {\n  position: relative;\n  padding: 1.2rem 0 2rem 0;\n  width: 600px;\n  max-width: 80%;\n}\nform input,\nform textarea {\n  width: 100%;\n  box-shadow: 0 0.5rem 1rem 0 rgba(44, 51, 73, 0.1);\n  display: block;\n  border: none;\n  border-bottom: 2px solid #fff;\n  border-bottom-width: 0%;\n  padding: 1rem 0.6rem;\n  margin-bottom: 1rem;\n  background-color: #fff;\n  color: #111827;\n  transition: border 1s ease-out;\n}\n@media (max-width: 1024px) and (orientation: landscape) {\n  form input,\nform textarea {\n    padding: 0.6rem 0.3rem;\n  }\n}\nform input::placeholder,\nform textarea::placeholder {\n  color: #3366ff4b;\n}\nform input:focus,\nform textarea:focus {\n  outline: none;\n  border-bottom: 2px solid #111827;\n  border-bottom-width: 100%;\n}\nform textarea {\n  margin-bottom: 2rem;\n}\nform button {\n  position: absolute;\n  bottom: 0;\n  right: 0.4rem;\n}\n.ng-invalid.ng-touched:not(form) {\n  border-bottom: 2px solid #ff333d !important;\n}\n.ng-valid.ng-touched:not(form) {\n  border-bottom: 2px solid #33ff8f !important;\n}\n.popup {\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n.popup .popup-success,\n.popup .popup-error {\n  z-index: 100;\n  border-radius: 2rem;\n  padding: 0.6rem;\n  margin-top: 0.2rem;\n  margin-bottom: 1rem;\n  text-align: center;\n  color: #FFF;\n  animation: puff-in-center 1s ease-out;\n}\n.popup .popup-success {\n  background-color: #33ff8f;\n}\n.popup .popup-error {\n  background-color: #ff333d;\n}", "",{"version":3,"sources":["webpack://src/styles.scss","webpack://src/theme/base/normalize.css","webpack://src/theme/base/font.scss","webpack://src/theme/base/base.scss","webpack://src/theme/base/variables.scss","webpack://src/theme/modules/button.scss","webpack://src/theme/modules/shared.scss","webpack://src/theme/modules/animation.scss","webpack://src/theme/modules/form.scss"],"names":[],"mappings":"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","sourcesContent":["/* You can add global styles to this file, and also import other style files */\n@import './theme/base/variables.scss';\n@import './theme/base/normalize.css';\n@import './theme/base/font.scss';\n@import './theme/base/base.scss';\n\n// modules\n@import './theme/modules/button.scss';\n@import './theme/modules/shared.scss';\n@import './theme/modules/animation.scss';\n@import './theme/modules/form.scss';","/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\r\n\r\n/* Document\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Correct the line height in all browsers.\r\n * 2. Prevent adjustments of font size after orientation changes in iOS.\r\n */\r\n\r\n html {\r\n    line-height: 1.15; /* 1 */\r\n    -webkit-text-size-adjust: 100%; /* 2 */\r\n  }\r\n  \r\n  /* Sections\r\n     ========================================================================== */\r\n  \r\n  /**\r\n   * Remove the margin in all browsers.\r\n   */\r\n  \r\n  body {\r\n    margin: 0;\r\n  }\r\n  \r\n  /**\r\n   * Render the `main` element consistently in IE.\r\n   */\r\n  \r\n  main {\r\n    display: block;\r\n  }\r\n  \r\n  /**\r\n   * Correct the font size and margin on `h1` elements within `section` and\r\n   * `article` contexts in Chrome, Firefox, and Safari.\r\n   */\r\n  \r\n  h1 {\r\n    font-size: 2em;\r\n    margin: 0.67em 0;\r\n  }\r\n  \r\n  /* Grouping content\r\n     ========================================================================== */\r\n  \r\n  /**\r\n   * 1. Add the correct box sizing in Firefox.\r\n   * 2. Show the overflow in Edge and IE.\r\n   */\r\n  \r\n  hr {\r\n    box-sizing: content-box; /* 1 */\r\n    height: 0; /* 1 */\r\n    overflow: visible; /* 2 */\r\n  }\r\n  \r\n  /**\r\n   * 1. Correct the inheritance and scaling of font size in all browsers.\r\n   * 2. Correct the odd `em` font sizing in all browsers.\r\n   */\r\n  \r\n  pre {\r\n    font-family: monospace, monospace; /* 1 */\r\n    font-size: 1em; /* 2 */\r\n  }\r\n  \r\n  /* Text-level semantics\r\n     ========================================================================== */\r\n  \r\n  /**\r\n   * Remove the gray background on active links in IE 10.\r\n   */\r\n  \r\n  a {\r\n    background-color: transparent;\r\n  }\r\n  \r\n  /**\r\n   * 1. Remove the bottom border in Chrome 57-\r\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n   */\r\n  \r\n  abbr[title] {\r\n    border-bottom: none; /* 1 */\r\n    text-decoration: underline; /* 2 */\r\n    text-decoration: underline dotted; /* 2 */\r\n  }\r\n  \r\n  /**\r\n   * Add the correct font weight in Chrome, Edge, and Safari.\r\n   */\r\n  \r\n  b,\r\n  strong {\r\n    font-weight: bolder;\r\n  }\r\n  \r\n  /**\r\n   * 1. Correct the inheritance and scaling of font size in all browsers.\r\n   * 2. Correct the odd `em` font sizing in all browsers.\r\n   */\r\n  \r\n  code,\r\n  kbd,\r\n  samp {\r\n    font-family: monospace, monospace; /* 1 */\r\n    font-size: 1em; /* 2 */\r\n  }\r\n  \r\n  /**\r\n   * Add the correct font size in all browsers.\r\n   */\r\n  \r\n  small {\r\n    font-size: 80%;\r\n  }\r\n  \r\n  /**\r\n   * Prevent `sub` and `sup` elements from affecting the line height in\r\n   * all browsers.\r\n   */\r\n  \r\n  sub,\r\n  sup {\r\n    font-size: 75%;\r\n    line-height: 0;\r\n    position: relative;\r\n    vertical-align: baseline;\r\n  }\r\n  \r\n  sub {\r\n    bottom: -0.25em;\r\n  }\r\n  \r\n  sup {\r\n    top: -0.5em;\r\n  }\r\n  \r\n  /* Embedded content\r\n     ========================================================================== */\r\n  \r\n  /**\r\n   * Remove the border on images inside links in IE 10.\r\n   */\r\n  \r\n  img {\r\n    border-style: none;\r\n  }\r\n  \r\n  /* Forms\r\n     ========================================================================== */\r\n  \r\n  /**\r\n   * 1. Change the font styles in all browsers.\r\n   * 2. Remove the margin in Firefox and Safari.\r\n   */\r\n  \r\n  button,\r\n  input,\r\n  optgroup,\r\n  select,\r\n  textarea {\r\n    font-family: inherit; /* 1 */\r\n    font-size: 100%; /* 1 */\r\n    line-height: 1.15; /* 1 */\r\n    margin: 0; /* 2 */\r\n  }\r\n  \r\n  /**\r\n   * Show the overflow in IE.\r\n   * 1. Show the overflow in Edge.\r\n   */\r\n  \r\n  button,\r\n  input { /* 1 */\r\n    overflow: visible;\r\n  }\r\n  \r\n  /**\r\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n   * 1. Remove the inheritance of text transform in Firefox.\r\n   */\r\n  \r\n  button,\r\n  select { /* 1 */\r\n    text-transform: none;\r\n  }\r\n  \r\n  /**\r\n   * Correct the inability to style clickable types in iOS and Safari.\r\n   */\r\n  \r\n  button,\r\n  [type=\"button\"],\r\n  [type=\"reset\"],\r\n  [type=\"submit\"] {\r\n    -webkit-appearance: button;\r\n  }\r\n  \r\n  /**\r\n   * Remove the inner border and padding in Firefox.\r\n   */\r\n  \r\n  button::-moz-focus-inner,\r\n  [type=\"button\"]::-moz-focus-inner,\r\n  [type=\"reset\"]::-moz-focus-inner,\r\n  [type=\"submit\"]::-moz-focus-inner {\r\n    border-style: none;\r\n    padding: 0;\r\n  }\r\n  \r\n  /**\r\n   * Restore the focus styles unset by the previous rule.\r\n   */\r\n  \r\n  button:-moz-focusring,\r\n  [type=\"button\"]:-moz-focusring,\r\n  [type=\"reset\"]:-moz-focusring,\r\n  [type=\"submit\"]:-moz-focusring {\r\n    outline: 1px dotted ButtonText;\r\n  }\r\n  \r\n  /**\r\n   * Correct the padding in Firefox.\r\n   */\r\n  \r\n  fieldset {\r\n    padding: 0.35em 0.75em 0.625em;\r\n  }\r\n  \r\n  /**\r\n   * 1. Correct the text wrapping in Edge and IE.\r\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n   * 3. Remove the padding so developers are not caught out when they zero out\r\n   *    `fieldset` elements in all browsers.\r\n   */\r\n  \r\n  legend {\r\n    box-sizing: border-box; /* 1 */\r\n    color: inherit; /* 2 */\r\n    display: table; /* 1 */\r\n    max-width: 100%; /* 1 */\r\n    padding: 0; /* 3 */\r\n    white-space: normal; /* 1 */\r\n  }\r\n  \r\n  /**\r\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n   */\r\n  \r\n  progress {\r\n    vertical-align: baseline;\r\n  }\r\n  \r\n  /**\r\n   * Remove the default vertical scrollbar in IE 10+.\r\n   */\r\n  \r\n  textarea {\r\n    overflow: auto;\r\n  }\r\n  \r\n  /**\r\n   * 1. Add the correct box sizing in IE 10.\r\n   * 2. Remove the padding in IE 10.\r\n   */\r\n  \r\n  [type=\"checkbox\"],\r\n  [type=\"radio\"] {\r\n    box-sizing: border-box; /* 1 */\r\n    padding: 0; /* 2 */\r\n  }\r\n  \r\n  /**\r\n   * Correct the cursor style of increment and decrement buttons in Chrome.\r\n   */\r\n  \r\n  [type=\"number\"]::-webkit-inner-spin-button,\r\n  [type=\"number\"]::-webkit-outer-spin-button {\r\n    height: auto;\r\n  }\r\n  \r\n  /**\r\n   * 1. Correct the odd appearance in Chrome and Safari.\r\n   * 2. Correct the outline style in Safari.\r\n   */\r\n  \r\n  [type=\"search\"] {\r\n    -webkit-appearance: textfield; /* 1 */\r\n    outline-offset: -2px; /* 2 */\r\n  }\r\n  \r\n  /**\r\n   * Remove the inner padding in Chrome and Safari on macOS.\r\n   */\r\n  \r\n  [type=\"search\"]::-webkit-search-decoration {\r\n    -webkit-appearance: none;\r\n  }\r\n  \r\n  /**\r\n   * 1. Correct the inability to style clickable types in iOS and Safari.\r\n   * 2. Change font properties to `inherit` in Safari.\r\n   */\r\n  \r\n  ::-webkit-file-upload-button {\r\n    -webkit-appearance: button; /* 1 */\r\n    font: inherit; /* 2 */\r\n  }\r\n  \r\n  /* Interactive\r\n     ========================================================================== */\r\n  \r\n  /*\r\n   * Add the correct display in Edge, IE 10+, and Firefox.\r\n   */\r\n  \r\n  details {\r\n    display: block;\r\n  }\r\n  \r\n  /*\r\n   * Add the correct display in all browsers.\r\n   */\r\n  \r\n  summary {\r\n    display: list-item;\r\n  }\r\n  \r\n  /* Misc\r\n     ========================================================================== */\r\n  \r\n  /**\r\n   * Add the correct display in IE 10+.\r\n   */\r\n  \r\n  template {\r\n    display: none;\r\n  }\r\n  \r\n  /**\r\n   * Add the correct display in IE 10.\r\n   */\r\n  \r\n  [hidden] {\r\n    display: none;\r\n  }","@font-face {\r\n    font-family: 'poppins';\r\n    src: url('../font/Poppins-Medium.ttf')  format('truetype');\r\n  }","*,\r\n*:before,\r\n*:after {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody,\r\nhtml {\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow-x: hidden;\r\n  text-align: center;\r\n}\r\n\r\nbody {\r\n  font-size: 16px;\r\n  -webkit-font-smoothing: antialiased;\r\n  color: $text-color;\r\n  background-color: $background_color;\r\n  font-family: poppins, sans-serif;\r\n}\r\n\r\nh2 {\r\n  font-size: 2rem;\r\n  margin-bottom: .8rem;\r\n}","$background_color: #F7F9FC;\r\n$button_color: #111827;\r\n$button_color_alternate: #3366ff1f;\r\n$input_color: #fff;\r\n$placeholder_color: #3366ff4b;\r\n$text_color: #111827;\r\n\r\n$black: #000;\r\n$white: #FFF;\r\n$bottom_gradient_start: #b9cbff00;\r\n$bottom_gradient_end: #3366ff57;\r\n\r\n$valid_color: #33ff8f;\r\n$invalid_color: #ff333d;\r\n","button {\r\n  display: block;\r\n  text-transform: uppercase;\r\n  padding: .6rem 1rem;\r\n  border: 1px solid $button_color;\r\n  border-radius: 4px;\r\n  box-shadow: 0 .8rem .8rem rgba(0, 0, 0, 0.12);\r\n  position: relative;\r\n  overflow: hidden;\r\n  cursor: pointer;\r\n\r\n  &:focus {\r\n    outline: none;\r\n  }\r\n\r\n  &::before {\r\n    background: $button_color_alternate;\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transition: all 0.6s ease;\r\n    transform: translate(-50%, -50%) rotate(45deg);\r\n    width: 100%;\r\n    height: 0%;\r\n    mix-blend-mode: difference;\r\n  }\r\n\r\n  &:hover::before {\r\n    height: 500%;\r\n  }\r\n\r\n  &.button--primary {\r\n    background-color: $button_color;\r\n    color: $white;\r\n  }\r\n\r\n  &.button--secondary {\r\n    background-color: $button_color_alternate;\r\n    color: $button_color;\r\n    &:disabled {\r\n        opacity: .6;\r\n    }\r\n  }\r\n\r\n  .button-icon {\r\n    width: 1rem;\r\n    vertical-align: middle;\r\n    color: $button_color_alternate;\r\n  }\r\n}\r\n",".red-color {\r\n  color: $invalid_color;\r\n}\r\n\r\n.padding-low {\r\n  padding: .4rem;\r\n}\r\n\r\n.flex-evenly {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.bottom-gradient {\r\n  &:after {\r\n    content: '';\r\n    display: none;\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: linear-gradient($bottom_gradient_start 0%, $bottom_gradient_end 100%);\r\n    border-radius: 1rem;\r\n  }\r\n}\r\n\r\n\r\n.text-underline {\r\n  position: relative;\r\n  margin-bottom: 2rem;\r\n\r\n  &::after {\r\n    content: '';\r\n    width: 3rem;\r\n    height: .3rem;\r\n    background-color: $text-color;\r\n    position: absolute;\r\n    bottom: -.6rem;\r\n    left: 50%;\r\n    transform: translate(-50%);\r\n  }\r\n}\r\n\r\n.loader {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  z-index: 10;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  background: linear-gradient(135deg, $bottom_gradient_start 0%, $bottom_gradient_end 100%);\r\n\r\n  img {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n  }\r\n}\r\n\r\n.content {\r\n  margin: 0 auto;\r\n  width: 600px;\r\n  max-width: 80%;\r\n\r\n  p {\r\n    line-height: 140%;\r\n    margin: 1.8rem 0;\r\n  }\r\n}\r\n\r\n.service-card {\r\n  border: 1px solid $button_color;\r\n  border-radius: 1rem;\r\n  box-shadow: 0 0.5rem 1rem 0 rgb(44 51 73 / 10%);\r\n  width: 18rem;\r\n  margin-bottom: 1.5rem;\r\n  transition: all 0.6s ease;\r\n\r\n  &:hover {\r\n    background-color: $button_color;\r\n    color: $background-color;\r\n    .service-card-header {\r\n      border-color: $background-color;\r\n    }\r\n  }\r\n\r\n  .service-card-header {\r\n    border-bottom: 1px solid $button_color;\r\n    img {\r\n      width: 8rem;\r\n    }\r\n  }\r\n\r\n  .service-card-body {\r\n    h4 {\r\n      margin-bottom: 1rem;\r\n    }\r\n    ul {\r\n      list-style-position: inside;\r\n      line-height: 130%;\r\n    }\r\n  }\r\n\r\n  .service-card-header, .service-card-body {\r\n    padding: .4rem .6rem;\r\n  }\r\n}","@keyframes fade-disappear {\r\n  0% {\r\n    opacity: 1;\r\n  }\r\n\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes puff-in-center {\r\n  0% {\r\n      transform: scale(1.2);\r\n      opacity: 0;\r\n  }\r\n\r\n  100% {\r\n      transform: scale(1);\r\n      opacity: 1;\r\n  }\r\n}",".main-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-top: 3rem;\r\n}\r\n\r\nform {\r\n  position: relative;\r\n  padding: 1.2rem 0 2rem 0;\r\n  width: 600px;\r\n  max-width: 80%;\r\n\r\n  input,\r\n  textarea {\r\n    width: 100%;\r\n    box-shadow: 0 0.5rem 1rem 0 rgb(44 51 73 / 10%);\r\n    display: block;\r\n    border: none;\r\n    border-bottom: 2px solid $input_color;\r\n    border-bottom-width: 0%;\r\n    padding: 1rem .6rem;\r\n    margin-bottom: 1rem;\r\n    background-color: $input_color;\r\n    color: $button_color;\r\n    transition: border 1s ease-out;\r\n\r\n    @media (max-width: 1024px) and (orientation: landscape) {\r\n      padding: .6rem .3rem;\r\n    }\r\n\r\n    &::placeholder {\r\n      color: $placeholder_color;\r\n    }\r\n\r\n    &:focus {\r\n      outline: none;\r\n      border-bottom: 2px solid $button_color;\r\n      border-bottom-width: 100%;\r\n    }\r\n  }\r\n\r\n  textarea {\r\n    margin-bottom: 2rem;\r\n  }\r\n\r\n  button {\r\n    position: absolute;\r\n    bottom: 0;\r\n    right: .4rem;\r\n  }\r\n}\r\n\r\n.ng-invalid.ng-touched:not(form) {\r\n  border-bottom: 2px solid $invalid_color !important;\r\n}\r\n\r\n.ng-valid.ng-touched:not(form) {\r\n  border-bottom: 2px solid $valid_color !important;\r\n}\r\n\r\n.popup {\r\n  width: 100vw;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n\r\n  .popup-success,\r\n  .popup-error {\r\n    z-index: 100;\r\n    border-radius: 2rem;\r\n    padding: .6rem;\r\n    margin-top: .2rem;\r\n    margin-bottom: 1rem;\r\n    text-align: center;\r\n    color: $white;\r\n    animation: puff-in-center 1s ease-out;\r\n  }\r\n\r\n  .popup-success {\r\n    background-color: $valid_color;\r\n  }\r\n\r\n  .popup-error {\r\n    background-color: $invalid_color;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Curedas-PC\Documents\PHP\Bara\portfolio\src\styles.scss */"+EN/");


/***/ }),

/***/ "JPst":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "LboF":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map