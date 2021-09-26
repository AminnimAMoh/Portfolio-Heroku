import "@babel/polyfill";
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store";
import Loading from "./views/Loading";
import { ThemeProvider } from "@mui/private-theming";
import theme from "./theme";
const App = lazy(() => import("./App"));

ReactDOM.hydrate(
  <Suspense fallback={<Loading />}>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </Suspense>,
  document.getElementById("root"),
  () => {
    document.getElementById("jss-server-side")?.remove();
  }
);
