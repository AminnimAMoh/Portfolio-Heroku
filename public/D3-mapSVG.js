"use strict";
(self["webpackChunkandramedian_design"] = self["webpackChunkandramedian_design"] || []).push([["D3-mapSVG"],{

/***/ "./txsrc/views/Pages/D3/MapComponents/Map.js":
/*!***************************************************!*\
  !*** ./txsrc/views/Pages/D3/MapComponents/Map.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities */ "./txsrc/views/Pages/D3/utilities.js");


const SVGMAP=(container, data)=>{
    const mapContainer=container.append("g")
    .attr("id", "mapContainer")
    .attr('transform', "translate(-710,-175)");

    let names = [];
    if (data) {
      for (let i = 0; i < data.features.length; i++) {
        names.push(data.features[i].properties.NAME_4);
      }
      mapContainer
        .selectAll("path")
        .data(data.features)
        .enter()
        .append("path")
        .attr("d", (d) => (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.geoLocations)(d));
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SVGMAP);

/***/ }),

/***/ "./txsrc/views/Pages/D3/utilities.js":
/*!*******************************************!*\
  !*** ./txsrc/views/Pages/D3/utilities.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findMinMax": () => (/* binding */ findMinMax),
/* harmony export */   "onClickTextFunction": () => (/* binding */ onClickTextFunction),
/* harmony export */   "slumScale": () => (/* binding */ slumScale),
/* harmony export */   "geoLocations": () => (/* binding */ geoLocations),
/* harmony export */   "citiesProjection": () => (/* binding */ citiesProjection),
/* harmony export */   "angleScale": () => (/* binding */ angleScale)
/* harmony export */ });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/src/index.js");


const findMinMax = (data) => {
  const firstMin = d3__WEBPACK_IMPORTED_MODULE_0__.min(data);
  const firstMax = d3__WEBPACK_IMPORTED_MODULE_0__.max(data);
  return [firstMin, firstMax];
};

const onClickTextFunction = (d, yearsContainer) => {
  yearsContainer
    .selectAll("text")
    .attr("font-size", 12)
    .style("fill", "white")

  d3__WEBPACK_IMPORTED_MODULE_0__.select(d)
    .attr("font-size", 24)
    .style("fill", "#9C3C41")
};

const slumScale = (data,slums) => {
  const scale=d3__WEBPACK_IMPORTED_MODULE_0__.scaleLinear()
    .domain([slums.data[0].min, slums.data[0].max])
    .range([20, 100]);
  return scale(data)
};

const geoLocations=(data)=>{
  const projection = d3__WEBPACK_IMPORTED_MODULE_0__.geoEquirectangular();

  const geoGenerator = d3__WEBPACK_IMPORTED_MODULE_0__.geoPath().projection(projection);

  return geoGenerator(data)
}

const citiesProjection=(data)=>{
  const projectionTest = d3__WEBPACK_IMPORTED_MODULE_0__.geoEquirectangular()
    .scale(5760)
    .translate([-8650, 2860]);
    return projectionTest(data)
}

const angleScale=(data)=>{
  const angleScale = d3__WEBPACK_IMPORTED_MODULE_0__.scaleLinear()
  .domain([0, 4])
  .range([0, Math.PI * 2]);
  return angleScale(data)
}

/***/ })

}]);
//# sourceMappingURL=D3-mapSVG.js.map