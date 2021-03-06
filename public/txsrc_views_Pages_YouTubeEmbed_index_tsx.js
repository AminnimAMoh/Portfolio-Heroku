"use strict";
(self["webpackChunkandramedian_design"] = self["webpackChunkandramedian_design"] || []).push([["txsrc_views_Pages_YouTubeEmbed_index_tsx"],{

/***/ "./txsrc/views/Pages/YouTubeEmbed/index.tsx":
/*!**************************************************!*\
  !*** ./txsrc/views/Pages/YouTubeEmbed/index.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ "./txsrc/views/Pages/styles.tsx");
/* harmony import */ var react_use_measure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-use-measure */ "./node_modules/react-use-measure/dist/web.js");




function YouTubeEmbed({
  embedID
}) {
  const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const [videoContainer, {
    width
  }] = (0,react_use_measure__WEBPACK_IMPORTED_MODULE_2__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.video_container,
    ref: videoContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.video_root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.video_responsive
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("iframe", {
    width: "100%",
    height: width / 2,
    src: `https://www.youtube.com/embed/${embedID}`,
    frameBorder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true,
    title: "Embedded youtube"
  }))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (YouTubeEmbed);

/***/ })

}]);
//# sourceMappingURL=txsrc_views_Pages_YouTubeEmbed_index_tsx.js.map