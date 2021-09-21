"use strict";
exports.id = "txsrc_views_Shared-Components_Page-header_index_tsx-_75d20";
exports.ids = ["txsrc_views_Shared-Components_Page-header_index_tsx-_75d20"];
exports.modules = {

/***/ "./txsrc/views/Shared-Components/Page-header/index.tsx":
/*!*************************************************************!*\
  !*** ./txsrc/views/Shared-Components/Page-header/index.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/es/Grid/Grid.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/es/Typography/Typography.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/es/Link/Link.js");
/* harmony import */ var _Pages_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Pages/styles */ "./txsrc/views/Pages/styles.tsx");






function PageHeader({ ...props
}) {
  const classes = (0,_Pages_styles__WEBPACK_IMPORTED_MODULE_1__["default"])();

  const preventDefault = event => event.preventDefault();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    justify: "space-between",
    alignContent: "flex-start",
    className: classes.topic_grid
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    lg: 6,
    md: 12,
    className: classes.topick_heading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "h3"
  }, props.ProjectName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "h4"
  }, "Collaboration Team:"), props.Collaboration && props.Collaboration.map(collaprators => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
      variant: "body2",
      style: {
        fontSize: "12px",
        color: "#426164"
      }
    }, collaprators);
  }), props.Links && props.Links.map(({
    href,
    linkTag
  }) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
      href: href,
      className: classes.onlineLink,
      style: {
        bottom: "0px"
      },
      onClick: e => preventDefault
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
      variant: "h5",
      className: classes.link_ToExternals
    }, linkTag));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    lg: 6,
    md: 12,
    className: classes.topic_pragraph
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "body1"
  }, props.description)));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageHeader);

/***/ })

};
;
//# sourceMappingURL=txsrc_views_Shared-Components_Page-header_index_tsx-_75d20.js.map