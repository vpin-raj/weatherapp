import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { States } from "../../../models/common/States";
import { Severity } from "../../../models/common/Severity";
// import { GetWeather } from "../..";
// import { createSagaAction  } from 'saga-toolkit';
import { WeatherServiceModel } from "../../../models/weather/WeatherServiceModel";
import { RootState } from "../../Store";
import { WeatherForecast } from "../../../models/weather/WeatherForecast";

//#region Weather State

// const initialState : States<WeatherServiceModel> = { 
//     loading : false,
//     error : { 
//         message : '',
//         severity : Severity.NILL,
//         errorCode : ''
//     },
//     data :
//     {
//     cod:0,
//     message:0,
//     cnt:0,
//     list: [
//         {
//             dt:0,
//             main: {
//                 temp:0,
//                 feels_like:0,
//                 temp_min:0,
//                 temp_max:0,
//                 pressure:0,
//                 sea_level:0,
//                 grnd_level:0,
//                 humidity:0,
//                 temp_kf: 0
//             },
//             dt_txt: ''
//         }
//     ],
//     city: {
//         id:0,
//         name: '',
//         coord: {
//             lat:0,
//             lon: 0
//         },
//         country: ''       
//     }
// }
// };


const initialState : States<WeatherForecast> = {
    loading : false,
    error : { 
        message : '',
        severity : Severity.NILL,
        errorCode : ''
    },
    data : {
        cityName : '',
        forecast : [{
            day : '',
            humidity : 0,
            temperature : 0
        }]
    }
}
//#endregion Weather State

export const Weather = createSlice({
    name : 'weather',
    initialState,
    reducers :{
        getWeatherData : (state, action) => {
            state.loading = true;

        },
        setWeatherData : (state, action: PayloadAction<States<WeatherForecast>>) => {
            state.data.cityName = action.payload.data.cityName;
            state.data.forecast = action.payload.data.forecast;
            state.loading = false;
        },
        setErrorData  : (state, action : PayloadAction<States<WeatherForecast>>) => {
            state.loading = false;
            // console.log('action.payload.error.message');
            throw(action.payload.error.message);
        }      
    },
    
}) 

// export const Weather = createSlice({
//     name : 'weather',
//     initialState,
//     reducers :{
//         getWeatherData : (state, action) => {
//             state.loading = true;

//         },
//         setWeatherData : (state, action: PayloadAction<States<WeatherServiceModel>>) => {
//             state.data.city = action.payload.data.city;
//             state.data.cnt = action.payload.data.cnt;
//             state.data.cod = action.payload.data.cod;
//             state.data.list = action.payload.data.list;
//             state.loading = false;
//         },
//         setErrorData  : (state, action : PayloadAction<States<WeatherServiceModel>>) => {
//             state.loading = false;
//             // console.log('action.payload.error.message');
//             throw(action.payload.error.message);
//         }      
//     },
    
// }) 

export const { setWeatherData, getWeatherData, setErrorData } = Weather.actions;
export default Weather.reducer;


// export const Weather = createSlice({
//     name : 'Weather',
//     initialState,
//     reducers :{},
//     extraReducers : (builder) => {
//         builder.addCase(GetWeather.fulfilled, (state, {payload}) => {
//            state.city = payload.data.city;
//            state.cnt = payload.data.cnt;
//            state.cod = payload.data.cod;
//            state.list = payload.data.list;
//            state.message = payload.data.message;
//         })
//         builder.addCase(GetWeather.rejected, (state, action) => {
//             console.error(action.error);
//          })
//     }
// }) 
// export default Weather.reducer;