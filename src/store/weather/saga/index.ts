import {StrictEffect, take, takeEvery, takeLatest} from 'redux-saga/effects';
import { getWeatherDetails } from '../../../services/weather/WeatherService';
import { handleGetWeather } from '../api/handler';
import { ActionTypes } from '../Types/ActionType';
// import { handleGetWeather } from './WeatherHandlers';
// import {actionType} from '../../Types/ActionType'

export function* watcherSaga() : Generator<StrictEffect>{
   try {
         console.log('In watcher');
         yield takeEvery(`weather/${ActionTypes.GET_WEATHER_DATA}`, handleGetWeather);
      
   } catch (error) {
      
   }

}


/* CREATE SAGA WATCHER USING ASYNC THUNK  */

// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { getWeatherDetails } from '../Services/WeatherService';

// export const GetWeather = createAsyncThunk('weather/GetWeather',
// async (coord : {lat : number, lon : number})=> {
//    const {lat, lon} = coord; 
//    return getWeatherDetails(lat,lon);
// })


// export const SetThemes = createAsyncThunk('Themes/SetThemes',
// async (theam : {name : string})=> {
//    const {name} = theam; 
//    console.log(name)
//    return theam;
// })

/* CREATE SAGA WATCHER USING ASYNC THUNK  */

