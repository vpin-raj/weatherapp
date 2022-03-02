import { spawn } from "redux-saga/effects";
import { watcherSaga } from "./weather/saga";

export default function* RootSaga() {

    console.log('rootSaga');
    yield spawn(watcherSaga)
  
  }