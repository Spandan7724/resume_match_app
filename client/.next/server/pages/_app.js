"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react */ \"@emotion/react\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/node/styles/index.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"./node_modules/@mui/material/node/CssBaseline/index.js\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/theme */ \"./styles/theme.js\");\n/* harmony import */ var _utils_createEmotionCache__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/createEmotionCache */ \"./utils/createEmotionCache.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react__WEBPACK_IMPORTED_MODULE_4__, _utils_createEmotionCache__WEBPACK_IMPORTED_MODULE_6__]);\n([_emotion_react__WEBPACK_IMPORTED_MODULE_4__, _utils_createEmotionCache__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// pages/_app.js\n\n\n\n\n\n\n\n\n\n// Create a client-side cache for Emotion\nconst clientSideEmotionCache = (0,_utils_createEmotionCache__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\nfunction MyApp(props) {\n    const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_emotion_react__WEBPACK_IMPORTED_MODULE_4__.CacheProvider, {\n        value: emotionCache,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"JobPortal\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\resume-match-app\\\\client\\\\pages\\\\_app.js\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\resume-match-app\\\\client\\\\pages\\\\_app.js\",\n                        lineNumber: 22,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.googleapis.com\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\resume-match-app\\\\client\\\\pages\\\\_app.js\",\n                        lineNumber: 24,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.gstatic.com\",\n                        crossOrigin: true\n                    }, void 0, false, {\n                        fileName: \"D:\\\\resume-match-app\\\\client\\\\pages\\\\_app.js\",\n                        lineNumber: 25,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\resume-match-app\\\\client\\\\pages\\\\_app.js\",\n                        lineNumber: 27,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\resume-match-app\\\\client\\\\pages\\\\_app.js\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__.ThemeProvider, {\n                theme: _styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                        fileName: \"D:\\\\resume-match-app\\\\client\\\\pages\\\\_app.js\",\n                        lineNumber: 34,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"D:\\\\resume-match-app\\\\client\\\\pages\\\\_app.js\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\resume-match-app\\\\client\\\\pages\\\\_app.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\resume-match-app\\\\client\\\\pages\\\\_app.js\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, this);\n}\nMyApp.propTypes = {\n    Component: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().elementType).isRequired,\n    pageProps: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object).isRequired,\n    emotionCache: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdCQUFnQjs7QUFFZTtBQUNJO0FBQ047QUFDa0I7QUFDTTtBQUNEO0FBQ2hCO0FBQ3lCO0FBRTdELHlDQUF5QztBQUN6QyxNQUFNUSx5QkFBeUJELHFFQUFrQkE7QUFFbEMsU0FBU0UsTUFBTUMsS0FBSztJQUMvQixNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFQyxlQUFlTCxzQkFBc0IsRUFBRSxHQUFHRTtJQUV4RSxxQkFDSSw4REFBQ1AseURBQWFBO1FBQUNXLE9BQU9EOzswQkFDbEIsOERBQUNYLGtEQUFJQTs7a0NBQ0QsOERBQUNhO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFXQyxTQUFROzs7Ozs7a0NBRTlCLDhEQUFDQzt3QkFBS0MsS0FBSTt3QkFBYUMsTUFBSzs7Ozs7O2tDQUM1Qiw4REFBQ0Y7d0JBQUtDLEtBQUk7d0JBQWFDLE1BQUs7d0JBQTRCQyxXQUFXOzs7Ozs7a0NBRW5FLDhEQUFDSDt3QkFDR0UsTUFBSzt3QkFDTEQsS0FBSTs7Ozs7Ozs7Ozs7OzBCQUdaLDhEQUFDaEIsK0RBQWFBO2dCQUFDRSxPQUFPQSxxREFBS0E7O2tDQUV2Qiw4REFBQ0QsaUVBQVdBOzs7OztrQ0FDWiw4REFBQ007d0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXhDO0FBRUFILE1BQU1jLFNBQVMsR0FBRztJQUNkWixXQUFXViwrREFBcUIsQ0FBQ3dCLFVBQVU7SUFDM0NiLFdBQVdYLDBEQUFnQixDQUFDd0IsVUFBVTtJQUN0Q1osY0FBY1osMERBQWdCO0FBQ2xDIiwic291cmNlcyI6WyJEOlxccmVzdW1lLW1hdGNoLWFwcFxcY2xpZW50XFxwYWdlc1xcX2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9fYXBwLmpzXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IENhY2hlUHJvdmlkZXIgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbXVpL21hdGVyaWFsL0Nzc0Jhc2VsaW5lJztcclxuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3N0eWxlcy90aGVtZSc7XHJcbmltcG9ydCBjcmVhdGVFbW90aW9uQ2FjaGUgZnJvbSAnLi4vdXRpbHMvY3JlYXRlRW1vdGlvbkNhY2hlJztcclxuXHJcbi8vIENyZWF0ZSBhIGNsaWVudC1zaWRlIGNhY2hlIGZvciBFbW90aW9uXHJcbmNvbnN0IGNsaWVudFNpZGVFbW90aW9uQ2FjaGUgPSBjcmVhdGVFbW90aW9uQ2FjaGUoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHByb3BzKSB7XHJcbiAgICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzLCBlbW90aW9uQ2FjaGUgPSBjbGllbnRTaWRlRW1vdGlvbkNhY2hlIH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDYWNoZVByb3ZpZGVyIHZhbHVlPXtlbW90aW9uQ2FjaGV9PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5Kb2JQb3J0YWw8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MSwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuICAgICAgICAgICAgICAgIHsvKiBQcmVjb25uZWN0IHRvIEdvb2dsZSBGb250cyAqL31cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIiBjcm9zc09yaWdpbiAvPlxyXG4gICAgICAgICAgICAgICAgey8qIFJvYm90byBmb250IGZvciBNYXRlcmlhbCBVSSAqL31cclxuICAgICAgICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86MzAwLDQwMCw1MDAsNzAwJmRpc3BsYXk9c3dhcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgICAgICAgICAgICB7LyogQ3NzQmFzZWxpbmUgYXBwbGllcyBhIGdsb2JhbCByZXNldCAqL31cclxuICAgICAgICAgICAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICAgICAgPC9DYWNoZVByb3ZpZGVyPlxyXG4gICAgKTtcclxufVxyXG5cclxuTXlBcHAucHJvcFR5cGVzID0ge1xyXG4gICAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcclxuICAgIHBhZ2VQcm9wczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4gICAgZW1vdGlvbkNhY2hlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG59O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJIZWFkIiwiQ2FjaGVQcm92aWRlciIsIlRoZW1lUHJvdmlkZXIiLCJDc3NCYXNlbGluZSIsInRoZW1lIiwiY3JlYXRlRW1vdGlvbkNhY2hlIiwiY2xpZW50U2lkZUVtb3Rpb25DYWNoZSIsIk15QXBwIiwicHJvcHMiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJlbW90aW9uQ2FjaGUiLCJ2YWx1ZSIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJjcm9zc09yaWdpbiIsInByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIm9iamVjdCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/theme.js":
/*!*************************!*\
  !*** ./styles/theme.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/node/styles/index.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);\n// styles/theme.js\n\n// Create a custom theme for your application\nconst theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({\n    palette: {\n        primary: {\n            main: '#1976d2'\n        },\n        secondary: {\n            main: '#dc004e'\n        }\n    },\n    typography: {\n        // You can customize typography here\n        fontFamily: 'Roboto, Arial, sans-serif'\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvdGhlbWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsa0JBQWtCO0FBRWlDO0FBRW5ELDZDQUE2QztBQUM3QyxNQUFNQyxRQUFRRCxpRUFBV0EsQ0FBQztJQUN0QkUsU0FBUztRQUNMQyxTQUFTO1lBQ0xDLE1BQU07UUFDVjtRQUNBQyxXQUFXO1lBQ1BELE1BQU07UUFDVjtJQUNKO0lBQ0FFLFlBQVk7UUFDUixvQ0FBb0M7UUFDcENDLFlBQVk7SUFDaEI7QUFDSjtBQUVBLGlFQUFlTixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJEOlxccmVzdW1lLW1hdGNoLWFwcFxcY2xpZW50XFxzdHlsZXNcXHRoZW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHN0eWxlcy90aGVtZS5qc1xyXG5cclxuaW1wb3J0IHsgY3JlYXRlVGhlbWUgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XHJcblxyXG4vLyBDcmVhdGUgYSBjdXN0b20gdGhlbWUgZm9yIHlvdXIgYXBwbGljYXRpb25cclxuY29uc3QgdGhlbWUgPSBjcmVhdGVUaGVtZSh7XHJcbiAgICBwYWxldHRlOiB7XHJcbiAgICAgICAgcHJpbWFyeToge1xyXG4gICAgICAgICAgICBtYWluOiAnIzE5NzZkMicsIC8vIEN1c3RvbWl6ZSB0aGlzIGNvbG9yIHRvIG1hdGNoIHlvdXIgYnJhbmRpbmdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlY29uZGFyeToge1xyXG4gICAgICAgICAgICBtYWluOiAnI2RjMDA0ZScsIC8vIEN1c3RvbWl6ZSB0aGlzIGNvbG9yIGFzIG5lZWRlZFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgdHlwb2dyYXBoeToge1xyXG4gICAgICAgIC8vIFlvdSBjYW4gY3VzdG9taXplIHR5cG9ncmFwaHkgaGVyZVxyXG4gICAgICAgIGZvbnRGYW1pbHk6ICdSb2JvdG8sIEFyaWFsLCBzYW5zLXNlcmlmJyxcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVUaGVtZSIsInRoZW1lIiwicGFsZXR0ZSIsInByaW1hcnkiLCJtYWluIiwic2Vjb25kYXJ5IiwidHlwb2dyYXBoeSIsImZvbnRGYW1pbHkiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/theme.js\n");

/***/ }),

/***/ "./utils/createEmotionCache.js":
/*!*************************************!*\
  !*** ./utils/createEmotionCache.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createEmotionCache)\n/* harmony export */ });\n/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/cache */ \"@emotion/cache\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_cache__WEBPACK_IMPORTED_MODULE_0__]);\n_emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// utils/createEmotionCache.js\n\n// This utility creates an instance of Emotion cache.\nfunction createEmotionCache() {\n    return (0,_emotion_cache__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        key: 'css',\n        prepend: true\n    });\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9jcmVhdGVFbW90aW9uQ2FjaGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSw4QkFBOEI7QUFFVztBQUV6QyxxREFBcUQ7QUFDdEMsU0FBU0M7SUFDcEIsT0FBT0QsMERBQVdBLENBQUM7UUFBRUUsS0FBSztRQUFPQyxTQUFTO0lBQUs7QUFDbkQiLCJzb3VyY2VzIjpbIkQ6XFxyZXN1bWUtbWF0Y2gtYXBwXFxjbGllbnRcXHV0aWxzXFxjcmVhdGVFbW90aW9uQ2FjaGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gdXRpbHMvY3JlYXRlRW1vdGlvbkNhY2hlLmpzXHJcblxyXG5pbXBvcnQgY3JlYXRlQ2FjaGUgZnJvbSAnQGVtb3Rpb24vY2FjaGUnO1xyXG5cclxuLy8gVGhpcyB1dGlsaXR5IGNyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgRW1vdGlvbiBjYWNoZS5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRW1vdGlvbkNhY2hlKCkge1xyXG4gICAgcmV0dXJuIGNyZWF0ZUNhY2hlKHsga2V5OiAnY3NzJywgcHJlcGVuZDogdHJ1ZSB9KTtcclxufVxyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ2FjaGUiLCJjcmVhdGVFbW90aW9uQ2FjaGUiLCJrZXkiLCJwcmVwZW5kIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/createEmotionCache.js\n");

/***/ }),

/***/ "@mui/system":
/*!******************************!*\
  !*** external "@mui/system" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@mui/system");

/***/ }),

/***/ "@mui/system/DefaultPropsProvider":
/*!***************************************************!*\
  !*** external "@mui/system/DefaultPropsProvider" ***!
  \***************************************************/
/***/ ((module) => {

module.exports = require("@mui/system/DefaultPropsProvider");

/***/ }),

/***/ "@mui/system/InitColorSchemeScript":
/*!****************************************************!*\
  !*** external "@mui/system/InitColorSchemeScript" ***!
  \****************************************************/
/***/ ((module) => {

module.exports = require("@mui/system/InitColorSchemeScript");

/***/ }),

/***/ "@mui/system/colorManipulator":
/*!***********************************************!*\
  !*** external "@mui/system/colorManipulator" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@mui/system/colorManipulator");

/***/ }),

/***/ "@mui/system/createBreakpoints":
/*!************************************************!*\
  !*** external "@mui/system/createBreakpoints" ***!
  \************************************************/
/***/ ((module) => {

module.exports = require("@mui/system/createBreakpoints");

/***/ }),

/***/ "@mui/system/createStyled":
/*!*******************************************!*\
  !*** external "@mui/system/createStyled" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@mui/system/createStyled");

/***/ }),

/***/ "@mui/system/createTheme":
/*!******************************************!*\
  !*** external "@mui/system/createTheme" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@mui/system/createTheme");

/***/ }),

/***/ "@mui/system/cssVars":
/*!**************************************!*\
  !*** external "@mui/system/cssVars" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@mui/system/cssVars");

/***/ }),

/***/ "@mui/system/spacing":
/*!**************************************!*\
  !*** external "@mui/system/spacing" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@mui/system/spacing");

/***/ }),

/***/ "@mui/system/styleFunctionSx":
/*!**********************************************!*\
  !*** external "@mui/system/styleFunctionSx" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@mui/system/styleFunctionSx");

/***/ }),

/***/ "@mui/system/useThemeProps":
/*!********************************************!*\
  !*** external "@mui/system/useThemeProps" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@mui/system/useThemeProps");

/***/ }),

/***/ "@mui/utils/deepmerge":
/*!***************************************!*\
  !*** external "@mui/utils/deepmerge" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/deepmerge");

/***/ }),

/***/ "@mui/utils/formatMuiErrorMessage":
/*!***************************************************!*\
  !*** external "@mui/utils/formatMuiErrorMessage" ***!
  \***************************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/formatMuiErrorMessage");

/***/ }),

/***/ "@mui/utils/generateUtilityClass":
/*!**************************************************!*\
  !*** external "@mui/utils/generateUtilityClass" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/generateUtilityClass");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "@emotion/cache":
/*!*********************************!*\
  !*** external "@emotion/cache" ***!
  \*********************************/
/***/ ((module) => {

module.exports = import("@emotion/cache");;

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/***/ ((module) => {

module.exports = import("@emotion/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/@mui","vendor-chunks/@babel"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();