export interface WeatherServiceModel {
    cod: number;
    message: number;
    cnt: number;
    list: [
        {
            dt: number;
            main: {
                temp: number;
                feels_like: number;
                temp_min: number;
                temp_max: number;
                pressure: number;
                sea_level: number;
                grnd_level: number;
                humidity: number;
                temp_kf: number
            };
            dt_txt: string
        }
    ];
    city: {
        id: number;
        name: string;
        coord: {
            lat: number;
            lon: number
        };
        country: string       
    }
}