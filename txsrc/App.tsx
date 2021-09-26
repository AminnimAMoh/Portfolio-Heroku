//This is the 'majula'. Dark Souls fans are familiar with this place. 😅
//Here we managing the main states.

import React, { useEffect, useState } from "react";

import useStyle from "./AppStyle";
import { Snackbar, Slide, Typography } from "@material-ui/core";

//Importing the redux store type.
import { RootState } from "./store";
import { useSelector, useDispatch } from "react-redux";
import { rowGridToggleToReverce } from "./redux/slices/ScreenSettingsSlice";
import { readDataAgain } from "./redux/slices/fetchSlice";
import { useMediaQuery } from "@material-ui/core";

import MenuButton from "./views/MenuButton";
import ContentContainer from "./views/ContentContainer";

const DataFetchPending = React.lazy(() => import("./views/DataFetchPending"));

//An easy way to apply transitions to Material-UI components.
//Pre writen transition from Material-UI.
//I could write it my self, just to show off some gadgeta. 😉
function TransitionUp(props: any | undefined | null) {
  return <Slide {...props} direction="up" />;
}

const ErrorMessage = ({err}: any) => {
  console.log(err.message);
  return (
    <div>
      <Typography variant="caption">Failed to fetch data. Click here to try again.</Typography>
      <br/>
      <Typography variant="caption" color="secondary">Error Message: </Typography>
      <Typography variant="caption">{err.message}</Typography>
    </div>
  );
};

function App(): React.ReactElement {
  // console.clear();
  const [svgSetupTrigger, setSVGSetupTrigger] = useState<boolean>(false);
  const [snackState, setSnackState] = useState<boolean>(false);
  const dispatch = useDispatch();
  const windowState = useMediaQuery("(max-width:1280px)");

  const {
    buttonAction: { rootState, buttonTrigered },
    dataStore: {
      annualrain,
      slums,
      population,
      months,
      mapJSON,
      errorState,
      error,
    },
  } = useSelector((state: RootState) => state);
  const classes = useStyle();

  useEffect(() => {
    if (windowState) {
      dispatch(rowGridToggleToReverce(window.innerWidth));
    }
  }, [windowState]);

  useEffect(() => {
    annualrain.state === "fulfilled" &&
      slums.state === "fulfilled" &&
      population.state === "fulfilled" &&
      months.state === "fulfilled" &&
      mapJSON.state === "fulfilled" &&
      setSVGSetupTrigger(true);

      console.log(svgSetupTrigger)

    errorState && setSnackState(true);
  }, [
    annualrain.state,
    slums.state,
    population.state,
    months.state,
    mapJSON.state,
    errorState,
  ]);

  //This function controles click action on the snack bar.
  const snackBarRefreshAction = () => {
    //First we set the 'refresh state of the 'fetchSlice' action to trigger the fetch
    //action on the asyncThunk function with state 'rejected'.
    //In this case only the rejected API will be called, not the rest. 🤯
    //More detail at 'fetchSlice.tsx'.
    dispatch(readDataAgain());
    //Close the snack bar.
    setSnackState(false);
  };

  return (
    <div
      className={rootState ? `${classes.root} open` : `${classes.root} close`}
    >
      {!svgSetupTrigger && buttonTrigered === "D3" && (
        <div className={classes.loading}>
          {console.log(svgSetupTrigger)}
          <DataFetchPending />
        </div>
      )}
      <Snackbar
        open={snackState}
        TransitionComponent={TransitionUp}
        message={<ErrorMessage err={error} />}
        onClick={snackBarRefreshAction}
        classes={{ root: classes.snackbar }}
      />
      <MenuButton />
      <ContentContainer />
    </div>
  );
}

export default App;
