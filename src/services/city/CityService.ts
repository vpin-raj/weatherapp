import { City } from "../../models/city/City";
import { CityData } from "./data/CityData"


export const GetCityDetails = () : City[] => {
    return CityData;
}