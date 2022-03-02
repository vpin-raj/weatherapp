import React, { ReactNode, useEffect } from "react";
import WeatherPage from "./pages/weather";
import { ThemeProvider } from "@mui/material/styles";
import { General } from "./themes/general";
import { Provider, useDispatch, useSelector } from "react-redux";
import { RootState, sagaMiddleware, store } from "./store/Store";
import { makeStyles } from "@mui/styles";
// import { SetThemes } from './Store';
import ThemeSwitch from "./components/common/theme-switch";
import { createTheme } from "@mui/system";
import { watcherSaga } from "./store/weather/saga";
import RootSaga from "./store/RootSaga";
import ErrorBoundary from "./components/common/error-boundary";
import Message from "./components/common/message";
import { Severity } from "./models/common/Severity";
import { CustomError } from "./models/common/CustomError";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import WeatherDetails from "./pages/weather-details";

sagaMiddleware.run(RootSaga);

const theme = createTheme();
//#region Styles
const useStyles = makeStyles((theme?: any) => ({
  root: {
    width: "100%",
  },
}));
//#endregion Styles

function App() {
  //#region Hooks
  // const appTheme  = useSelector((state : RootState) => state.AppTheme)

  useEffect(() => {
    // if(appTheme.name === 'General'){
    document.body.style.backgroundColor = "#6d1b7b";
    // }
  }, []);

  //#endregion Hooks

  const classes = useStyles();
  return (
    <div>
      <ErrorBoundary>
        <Provider store={store}>
          {/* <ThemeSwitch /> */}
          <ThemeProvider theme={General}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<WeatherPage />}></Route>
                <Route
                  path="/Details/:day"
                  element={<WeatherDetails />}
                ></Route>
              </Routes>
            </BrowserRouter>
          </ThemeProvider>
        </Provider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
