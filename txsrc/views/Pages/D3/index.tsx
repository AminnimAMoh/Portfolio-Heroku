import React, { useRef, useEffect, useState } from "react";
import { select, Selection } from "d3-selection";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAnnualrainData,
  fetchSlumsData,
  fetchPopulationData,
  fetchMonthData,
  fetchMap,
} from "../../../redux/slices/fetchSlice";
import { RootState } from "../../../store";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  mapSVG: {

  },
  mapGUI: {
    // width: "100%",
    // height: "100%",
    position: 'absolute',
    top: "0",
    left: "0"
  },
}));

function D3(): React.ReactElement {
  const {
    dataStore: { annualrain, slums, population, months, mapJSON, refresh },
  } = useSelector((state: RootState) => state);
  const classes = useStyle();
  const dispatch = useDispatch();
  const svgRef = useRef<SVGSVGElement | null>(null);
  const mapSVG = useRef<SVGSVGElement | null>(null);
  const [svgSetupTrigger, setSVGSetupTrigger] = useState<boolean>(false);

  const [svg, setSvg] = useState<null | Selection<
    SVGSVGElement | null,
    unknown,
    null,
    undefined
  >>(null);

  const [mapSVGState, setMapSVGState] = useState<null | Selection<
    SVGSVGElement | null,
    unknown,
    null,
    undefined
  >>(null);

  useEffect(() => {
    if (annualrain.state === "empty" || annualrain.state === "rejected")
      dispatch(fetchAnnualrainData());
    if (slums.state === "empty" || slums.state === "rejected")
      dispatch(fetchSlumsData());
    if (population.state === "empty" || population.state === "rejected")
      dispatch(fetchPopulationData());
    if (months.state === "empty" || months.state === "rejected")
      dispatch(fetchMonthData());
    if (mapJSON.state === "empty" || mapJSON.state === "rejected")
      dispatch(fetchMap());
  }, [
    refresh,
    annualrain.state,
    slums.state,
    population.state,
    months.state,
    mapJSON.state,
    dispatch,
  ]);

  useEffect(() => {
    annualrain.state === "fulfilled" &&
      slums.state === "fulfilled" &&
      population.state === "fulfilled" &&
      months.state === "fulfilled" &&
      mapJSON.state === "fulfilled" &&
      setSVGSetupTrigger(true);
  }, [
    annualrain.state,
    slums.state,
    population.state,
    months.state,
    mapJSON.state,
  ]);

  useEffect(() => {
    !svg && svgSetupTrigger && setSvg(select(svgRef.current));
    if (annualrain.data.length > 0 && svg) {
      import(/* webpackChunkName: 'D3-Draw' */ "./Draw").then(
        ({ default: Draw }) => {
          Draw(
            svg,
            svgRef,
            annualrain,
            slums,
            population,
            months,
            mapJSON.data
          );
        }
      );
    }

    !mapSVGState && svgSetupTrigger && setMapSVGState(select(mapSVG.current));
    if (mapJSON.data && mapSVGState) {
      import(/* webpackChunkName: 'D3-mapSVG' */ "./MapComponents/Map").then(
        ({ default: SVGMAP }) => {
          SVGMAP(mapSVGState, mapJSON.data);
        }
      );
    }
  }, [
    svg,
    svgSetupTrigger,
    annualrain,
    slums,
    population,
    months,
    mapJSON,
    mapSVGState,
  ]);

  return (
    <div className={classes.root}>
      <svg className={classes.mapSVG} ref={mapSVG} viewBox="0 0 20 20" />
      <svg className={classes.mapGUI} ref={svgRef} viewBox="-100 0 800 800" />
    </div>
  );
}

export default D3;
