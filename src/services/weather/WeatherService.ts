import axios from "axios";
import { Weather } from "../../models/weather/Weather";
import { WeatherForecast } from "../../models/weather/WeatherForecast";
import { WeatherServiceModel } from "../../models/weather/WeatherServiceModel";

export const getWeatherDetails = (latitude : number, longitude: number) => {

  const apiUrl = `${process.env.REACT_APP_WEATHER_PROXY}/data/2.5/forecast?units=metric&lat=${latitude}&lon=${longitude}&appid=eb650a4904d34606fae8121ccb2a2bc2`;
  return axios.get(apiUrl);
  
}

export function mapWeatherDetails (response  : WeatherServiceModel) : WeatherForecast{

    let weatherForecast = new WeatherForecast();
    
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    weatherForecast.cityName = response?.city?.name;
    if(response?.list !== undefined && response?.list.length > 0)
    {
       let weatherDate  = '';
        response?.list?.forEach(( weatherData )=>{
          
          if(weatherDate !== new Date(weatherData.dt_txt).getDate().toString())
          {           
            weatherDate = new Date(weatherData.dt_txt).getDate().toString();
            
            let weather : Weather= {
                day : days[new Date(weatherData.dt_txt).getDay()],
                temperature : weatherData.main.temp,
                humidity : weatherData.main.humidity
            }
            weatherForecast.forecast.push(weather);
          }
         });
    } 

    
    return(weatherForecast);
}