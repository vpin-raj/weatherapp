import axios, { AxiosResponse } from 'axios';
import {call, put} from 'redux-saga/effects';
// import getWeatherdata from './Weather-Api';
// import getWeatherdata from './Weather-Api';
// import { setWeatherData } from './WeatherForecastSagaSlice';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { getWeatherDetails, mapWeatherDetails } from '../../../services/weather/WeatherService';
import { City } from '../../../models/city/City';
// import { Coordinates } from '../Types/Coordinates';
import { setWeatherData,setErrorData } from '../slices';
import { States } from '../../../models/common/States';
import { WeatherServiceModel } from '../../../models/weather/WeatherServiceModel';
import { Severity } from '../../../models/common/Severity';
import { WeatherForecast } from '../../../models/weather/WeatherForecast';

export function* handleGetWeather({payload} : any){
  try {
    const payloadData  = payload as City;
    const response : AxiosResponse   = yield call(getWeatherDetails, payloadData.coord[0], payloadData.coord[1]);
    yield put(setWeatherData({data  : mapWeatherDetails(response.data)} as States<WeatherForecast>));

  } catch (error) {
    yield put(setErrorData({error : { 
        message : error,
        severity : Severity.ERROR
     }} as States<WeatherForecast>));
  }
}