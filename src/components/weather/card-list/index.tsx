import React from 'react'
import WeatherCard from '../card-item'
import Grid from '@mui/material/Grid';
import {Weather}from '../../../models/weather/Weather'
import { ClassNameMap } from '@mui/material';
import { Style } from 'util';

const WeatherCards = (props : {weatherList : Weather[], customStyle : any }) => {
 
    const {weatherList, customStyle } = props;

    const gridCards = weatherList.map(
      weather => {
         if(weather !== undefined && weather !== null && weather?.day !== undefined && weather?.day !== '')
         {
           return (
           <Grid item key={weather.day} >
               <WeatherCard day={weather.day} temperature={weather.temperature} humidity={weather.humidity}/>   
           </Grid>
           )
         }
      }
    );
  
    return (
      <Grid container spacing={4} style = {customStyle}>
          {gridCards}
      </Grid>
    )
}

export default WeatherCards
