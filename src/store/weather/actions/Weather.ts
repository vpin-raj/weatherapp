import { Action, createAction } from "@reduxjs/toolkit"

const increment = createAction('getWeatherData')
function getWeatherData(state : any ,action: Action) {
  if (increment.match(action)) {
    state.message = 0;
    // action.payload inferred correctly here
    action.payload
  }
}