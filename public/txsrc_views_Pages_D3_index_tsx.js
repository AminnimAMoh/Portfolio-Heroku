"use strict";
(self["webpackChunkandramedian_design"] = self["webpackChunkandramedian_design"] || []).push([["txsrc_views_Pages_D3_index_tsx"],{

/***/ "./txsrc/views/Pages/D3/index.tsx":
/*!****************************************!*\
  !*** ./txsrc/views/Pages/D3/index.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/select.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_slices_fetchSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../redux/slices/fetchSlice */ "./txsrc/redux/slices/fetchSlice.tsx");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/es/styles/makeStyles.js");





const useStyle = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["default"])(theme => ({
  root: {
    width: "100%",
    height: "100%",
    position: "relative"
  },
  mapSVG: {},
  mapGUI: {
    // width: "100%",
    // height: "100%",
    position: 'absolute',
    top: "0",
    left: "0"
  }
}));

function D3() {
  const {
    dataStore: {
      annualrain,
      slums,
      population,
      months,
      mapJSON,
      refresh
    }
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state);
  const classes = useStyle();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const svgRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const mapSVG = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [svgSetupTrigger, setSVGSetupTrigger] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [svg, setSvg] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [mapSVGState, setMapSVGState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (annualrain.state === "empty" || annualrain.state === "rejected") dispatch((0,_redux_slices_fetchSlice__WEBPACK_IMPORTED_MODULE_2__.fetchAnnualrainData)());
    if (slums.state === "empty" || slums.state === "rejected") dispatch((0,_redux_slices_fetchSlice__WEBPACK_IMPORTED_MODULE_2__.fetchSlumsData)());
    if (population.state === "empty" || population.state === "rejected") dispatch((0,_redux_slices_fetchSlice__WEBPACK_IMPORTED_MODULE_2__.fetchPopulationData)());
    if (months.state === "empty" || months.state === "rejected") dispatch((0,_redux_slices_fetchSlice__WEBPACK_IMPORTED_MODULE_2__.fetchMonthData)());
    if (mapJSON.state === "empty" || mapJSON.state === "rejected") dispatch((0,_redux_slices_fetchSlice__WEBPACK_IMPORTED_MODULE_2__.fetchMap)());
  }, [refresh, annualrain.state, slums.state, population.state, months.state, mapJSON.state, dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    annualrain.state === "fulfilled" && slums.state === "fulfilled" && population.state === "fulfilled" && months.state === "fulfilled" && mapJSON.state === "fulfilled" && setSVGSetupTrigger(true);
  }, [annualrain.state, slums.state, population.state, months.state, mapJSON.state]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    !svg && svgSetupTrigger && setSvg((0,d3_selection__WEBPACK_IMPORTED_MODULE_4__["default"])(svgRef.current));

    if (annualrain.data.length > 0 && svg) {
      Promise.all(/*! import() | D3-Draw */[__webpack_require__.e("vendors-node_modules_d3_src_index_js"), __webpack_require__.e("D3-Draw")]).then(__webpack_require__.bind(__webpack_require__, /*! ./Draw */ "./txsrc/views/Pages/D3/Draw.js")).then(({
        default: Draw
      }) => {
        Draw(svg, svgRef, annualrain, slums, population, months, mapJSON.data);
      });
    }

    !mapSVGState && svgSetupTrigger && setMapSVGState((0,d3_selection__WEBPACK_IMPORTED_MODULE_4__["default"])(mapSVG.current));

    if (mapJSON.data && mapSVGState) {
      Promise.all(/*! import() | D3-mapSVG */[__webpack_require__.e("vendors-node_modules_d3_src_index_js"), __webpack_require__.e("D3-mapSVG")]).then(__webpack_require__.bind(__webpack_require__, /*! ./MapComponents/Map */ "./txsrc/views/Pages/D3/MapComponents/Map.js")).then(({
        default: SVGMAP
      }) => {
        SVGMAP(mapSVGState, mapJSON.data);
      });
    }
  }, [svg, svgSetupTrigger, annualrain, slums, population, months, mapJSON, mapSVGState]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    className: classes.mapSVG,
    ref: mapSVG,
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    className: classes.mapGUI,
    ref: svgRef,
    viewBox: "-100 0 800 800"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (D3);

/***/ })

}]);
//# sourceMappingURL=txsrc_views_Pages_D3_index_tsx.js.map