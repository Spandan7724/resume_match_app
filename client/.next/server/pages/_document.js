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
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./pages/_document.js":
/*!****************************!*\
  !*** ./pages/_document.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyDocument)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/document */ \"./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/server/create-instance */ \"@emotion/server/create-instance\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/theme */ \"./styles/theme.js\");\n/* harmony import */ var _utils_createEmotionCache__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/createEmotionCache */ \"./utils/createEmotionCache.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_3__, _utils_createEmotionCache__WEBPACK_IMPORTED_MODULE_5__]);\n([_emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_3__, _utils_createEmotionCache__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// pages/_document.js\n\n\n\n\n\n\nclass MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_2___default()) {\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Html, {\n            lang: \"en\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Head, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"theme-color\",\n                            content: _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].palette.primary.main\n                        }, void 0, false, {\n                            fileName: \"D:\\\\resume-match-app\\\\client\\\\pages\\\\_document.js\",\n                            lineNumber: 15,\n                            columnNumber: 21\n                        }, this),\n                        this.props.emotionStyleTags\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\resume-match-app\\\\client\\\\pages\\\\_document.js\",\n                    lineNumber: 13,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Main, {}, void 0, false, {\n                            fileName: \"D:\\\\resume-match-app\\\\client\\\\pages\\\\_document.js\",\n                            lineNumber: 20,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.NextScript, {}, void 0, false, {\n                            fileName: \"D:\\\\resume-match-app\\\\client\\\\pages\\\\_document.js\",\n                            lineNumber: 21,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\resume-match-app\\\\client\\\\pages\\\\_document.js\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\resume-match-app\\\\client\\\\pages\\\\_document.js\",\n            lineNumber: 12,\n            columnNumber: 13\n        }, this);\n    }\n}\n// Implement getInitialProps to extract Emotion's critical CSS\nMyDocument.getInitialProps = async (ctx)=>{\n    const originalRenderPage = ctx.renderPage;\n    // Create an instance of Emotion cache\n    const cache = (0,_utils_createEmotionCache__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    const { extractCriticalToChunks } = (0,_emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(cache);\n    // Enhance the app to collect styles\n    ctx.renderPage = ()=>originalRenderPage({\n            enhanceApp: (App)=>(props)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(App, {\n                        emotionCache: cache,\n                        ...props\n                    }, void 0, false, {\n                        fileName: \"D:\\\\resume-match-app\\\\client\\\\pages\\\\_document.js\",\n                        lineNumber: 39,\n                        columnNumber: 45\n                    }, undefined)\n        });\n    // Get the initial document props\n    const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_2___default().getInitialProps(ctx);\n    // Extract the critical CSS\n    const emotionStyles = extractCriticalToChunks(initialProps.html);\n    const emotionStyleTags = emotionStyles.styles.map((style)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"style\", {\n            \"data-emotion\": `${style.key} ${style.ids.join(' ')}`,\n            // eslint-disable-next-line\n            dangerouslySetInnerHTML: {\n                __html: style.css\n            }\n        }, style.key, false, {\n            fileName: \"D:\\\\resume-match-app\\\\client\\\\pages\\\\_document.js\",\n            lineNumber: 48,\n            columnNumber: 9\n        }, undefined));\n    return {\n        ...initialProps,\n        emotionStyleTags\n    };\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fZG9jdW1lbnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFCQUFxQjs7QUFFVTtBQUN3QztBQUNMO0FBQzlCO0FBQ3lCO0FBRTlDLE1BQU1TLG1CQUFtQlIsc0RBQVFBO0lBQzVDUyxTQUFTO1FBQ0wscUJBQ0ksOERBQUNSLCtDQUFJQTtZQUFDUyxNQUFLOzs4QkFDUCw4REFBQ1IsK0NBQUlBOztzQ0FFRCw4REFBQ1M7NEJBQUtDLE1BQUs7NEJBQWNDLFNBQVNQLHFEQUFLQSxDQUFDUSxPQUFPLENBQUNDLE9BQU8sQ0FBQ0MsSUFBSTs7Ozs7O3dCQUUzRCxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsZ0JBQWdCOzs7Ozs7OzhCQUVoQyw4REFBQ0M7O3NDQUNHLDhEQUFDaEIsK0NBQUlBOzs7OztzQ0FDTCw4REFBQ0MscURBQVVBOzs7Ozs7Ozs7Ozs7Ozs7OztJQUkzQjtBQUNKO0FBRUEsOERBQThEO0FBQzlESSxXQUFXWSxlQUFlLEdBQUcsT0FBT0M7SUFDaEMsTUFBTUMscUJBQXFCRCxJQUFJRSxVQUFVO0lBRXpDLHNDQUFzQztJQUN0QyxNQUFNQyxRQUFRakIscUVBQWtCQTtJQUNoQyxNQUFNLEVBQUVrQix1QkFBdUIsRUFBRSxHQUFHcEIsMkVBQW1CQSxDQUFDbUI7SUFFeEQsb0NBQW9DO0lBQ3BDSCxJQUFJRSxVQUFVLEdBQUcsSUFDYkQsbUJBQW1CO1lBQ2ZJLFlBQVksQ0FBQ0MsTUFBUSxDQUFDVixzQkFBVSw4REFBQ1U7d0JBQUlDLGNBQWNKO3dCQUFRLEdBQUdQLEtBQUs7Ozs7OztRQUN2RTtJQUVKLGlDQUFpQztJQUNqQyxNQUFNWSxlQUFlLE1BQU03QixvRUFBd0IsQ0FBQ3FCO0lBRXBELDJCQUEyQjtJQUMzQixNQUFNUyxnQkFBZ0JMLHdCQUF3QkksYUFBYUUsSUFBSTtJQUMvRCxNQUFNYixtQkFBbUJZLGNBQWNFLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLHNCQUMvQyw4REFBQ0E7WUFDR0MsZ0JBQWMsR0FBR0QsTUFBTUUsR0FBRyxDQUFDLENBQUMsRUFBRUYsTUFBTUcsR0FBRyxDQUFDQyxJQUFJLENBQUMsTUFBTTtZQUVuRCwyQkFBMkI7WUFDM0JDLHlCQUF5QjtnQkFBRUMsUUFBUU4sTUFBTU8sR0FBRztZQUFDO1dBRnhDUCxNQUFNRSxHQUFHOzs7OztJQU10QixPQUFPO1FBQ0gsR0FBR1AsWUFBWTtRQUNmWDtJQUNKO0FBQ0oiLCJzb3VyY2VzIjpbIkQ6XFxyZXN1bWUtbWF0Y2gtYXBwXFxjbGllbnRcXHBhZ2VzXFxfZG9jdW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvX2RvY3VtZW50LmpzXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBEb2N1bWVudCwgeyBIdG1sLCBIZWFkLCBNYWluLCBOZXh0U2NyaXB0IH0gZnJvbSAnbmV4dC9kb2N1bWVudCc7XHJcbmltcG9ydCBjcmVhdGVFbW90aW9uU2VydmVyIGZyb20gJ0BlbW90aW9uL3NlcnZlci9jcmVhdGUtaW5zdGFuY2UnO1xyXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vc3R5bGVzL3RoZW1lJztcclxuaW1wb3J0IGNyZWF0ZUVtb3Rpb25DYWNoZSBmcm9tICcuLi91dGlscy9jcmVhdGVFbW90aW9uQ2FjaGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlEb2N1bWVudCBleHRlbmRzIERvY3VtZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8SHRtbCBsYW5nPVwiZW5cIj5cclxuICAgICAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBTZXQgdGhlIHByaW1hcnkgY29sb3IgZm9yIHRoZSBicm93c2VyIHRoZW1lICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9e3RoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWlufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBJbmplY3QgRW1vdGlvbidzIGNyaXRpY2FsIENTUyAqL31cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5lbW90aW9uU3R5bGVUYWdzfVxyXG4gICAgICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICAgICAgPGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1haW4gLz5cclxuICAgICAgICAgICAgICAgICAgICA8TmV4dFNjcmlwdCAvPlxyXG4gICAgICAgICAgICAgICAgPC9ib2R5PlxyXG4gICAgICAgICAgICA8L0h0bWw+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gSW1wbGVtZW50IGdldEluaXRpYWxQcm9wcyB0byBleHRyYWN0IEVtb3Rpb24ncyBjcml0aWNhbCBDU1NcclxuTXlEb2N1bWVudC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgICBjb25zdCBvcmlnaW5hbFJlbmRlclBhZ2UgPSBjdHgucmVuZGVyUGFnZTtcclxuXHJcbiAgICAvLyBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgRW1vdGlvbiBjYWNoZVxyXG4gICAgY29uc3QgY2FjaGUgPSBjcmVhdGVFbW90aW9uQ2FjaGUoKTtcclxuICAgIGNvbnN0IHsgZXh0cmFjdENyaXRpY2FsVG9DaHVua3MgfSA9IGNyZWF0ZUVtb3Rpb25TZXJ2ZXIoY2FjaGUpO1xyXG5cclxuICAgIC8vIEVuaGFuY2UgdGhlIGFwcCB0byBjb2xsZWN0IHN0eWxlc1xyXG4gICAgY3R4LnJlbmRlclBhZ2UgPSAoKSA9PlxyXG4gICAgICAgIG9yaWdpbmFsUmVuZGVyUGFnZSh7XHJcbiAgICAgICAgICAgIGVuaGFuY2VBcHA6IChBcHApID0+IChwcm9wcykgPT4gPEFwcCBlbW90aW9uQ2FjaGU9e2NhY2hlfSB7Li4ucHJvcHN9IC8+LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIC8vIEdldCB0aGUgaW5pdGlhbCBkb2N1bWVudCBwcm9wc1xyXG4gICAgY29uc3QgaW5pdGlhbFByb3BzID0gYXdhaXQgRG9jdW1lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XHJcblxyXG4gICAgLy8gRXh0cmFjdCB0aGUgY3JpdGljYWwgQ1NTXHJcbiAgICBjb25zdCBlbW90aW9uU3R5bGVzID0gZXh0cmFjdENyaXRpY2FsVG9DaHVua3MoaW5pdGlhbFByb3BzLmh0bWwpO1xyXG4gICAgY29uc3QgZW1vdGlvblN0eWxlVGFncyA9IGVtb3Rpb25TdHlsZXMuc3R5bGVzLm1hcCgoc3R5bGUpID0+IChcclxuICAgICAgICA8c3R5bGVcclxuICAgICAgICAgICAgZGF0YS1lbW90aW9uPXtgJHtzdHlsZS5rZXl9ICR7c3R5bGUuaWRzLmpvaW4oJyAnKX1gfVxyXG4gICAgICAgICAgICBrZXk9e3N0eWxlLmtleX1cclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogc3R5bGUuY3NzIH19XHJcbiAgICAgICAgLz5cclxuICAgICkpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uaW5pdGlhbFByb3BzLFxyXG4gICAgICAgIGVtb3Rpb25TdHlsZVRhZ3MsXHJcbiAgICB9O1xyXG59O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJEb2N1bWVudCIsIkh0bWwiLCJIZWFkIiwiTWFpbiIsIk5leHRTY3JpcHQiLCJjcmVhdGVFbW90aW9uU2VydmVyIiwidGhlbWUiLCJjcmVhdGVFbW90aW9uQ2FjaGUiLCJNeURvY3VtZW50IiwicmVuZGVyIiwibGFuZyIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsInByb3BzIiwiZW1vdGlvblN0eWxlVGFncyIsImJvZHkiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJvcmlnaW5hbFJlbmRlclBhZ2UiLCJyZW5kZXJQYWdlIiwiY2FjaGUiLCJleHRyYWN0Q3JpdGljYWxUb0NodW5rcyIsImVuaGFuY2VBcHAiLCJBcHAiLCJlbW90aW9uQ2FjaGUiLCJpbml0aWFsUHJvcHMiLCJlbW90aW9uU3R5bGVzIiwiaHRtbCIsInN0eWxlcyIsIm1hcCIsInN0eWxlIiwiZGF0YS1lbW90aW9uIiwia2V5IiwiaWRzIiwiam9pbiIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiY3NzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_document.js\n");

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

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

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

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "@emotion/cache":
/*!*********************************!*\
  !*** external "@emotion/cache" ***!
  \*********************************/
/***/ ((module) => {

module.exports = import("@emotion/cache");;

/***/ }),

/***/ "@emotion/server/create-instance":
/*!**************************************************!*\
  !*** external "@emotion/server/create-instance" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = import("@emotion/server/create-instance");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@mui","vendor-chunks/@swc","vendor-chunks/@babel"], () => (__webpack_exec__("./pages/_document.js")));
module.exports = __webpack_exports__;

})();