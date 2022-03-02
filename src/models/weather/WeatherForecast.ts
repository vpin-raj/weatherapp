import { Weather } from './Weather';

export class WeatherForecast{
    
    cityName: string;
    forecast: Weather[];

    constructor() {
        this.cityName = '';
        this.forecast = [];
    }
  
    
}