import React, { ReactNode, useEffect } from "react";
import SelectCity from "../../components/city/select-city";
import { SelectChangeEvent } from "@mui/material/Select";
import ShowCity from "../../components/city/show-city";
import { GetCityDetails } from "../../services/city/CityService";
import { useDispatch, useSelector } from "react-redux";
// import { GetWeather } from '../../Store'
import { RootState } from "../../store/Store";
import { mapWeatherDetails } from "../../services/weather/WeatherService";
import { WeatherForecast } from "../../models/weather/WeatherForecast";
import WeatherCards from "../../components/weather/card-list";
import { Weather } from "../../models/weather/Weather";
import { CityData } from "../../services/city/data/CityData";
import { makeStyles, styled } from "@mui/styles";
import { style } from "@mui/system";
import { createStyles } from "@mui/material";
import { getWeatherData } from "../../store/weather/slices";
import { watcherSaga } from "../../store/weather/saga";
import { CustomError } from "../../models/common/CustomError";
import Message from "../../components/common/message";
import { Severity } from "../../models/common/Severity";

//#region Styles

const selectCityStyles = createStyles({
  display: "flex",
  paddingTop: 30,
  justifyContent: "Center",
});

const weatherCardsStyles = createStyles({
  display: "flex",
  paddingTop: 30,
  justifyContent: "Center",
});

const useStyle = makeStyles({
  showCity: {
    display: "flex",
    paddingTop: 20,
    justifyContent: "Center",
  },
});

//#endregion Styles

const WeatherPage = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector(
    (state: RootState) => state.weatherData?.data
  );
  const classes = useStyle();

  //#region Hooks
  const [cityName, setCityName] = React.useState("");
  const [weathers, setWeathers] = React.useState([{}]);
  const [messageDetails, setMessageDetails] = React.useState<CustomError>();

  useEffect(() => {
    // const weatherForecastData = mapWeatherDetails(weatherData);
    setWeatherDetails(weatherData);
  }, [weatherData]);

  //#endregion Hooks

  //#region City Details

  const cities = GetCityDetails();

  //#endregion

  //#region Callbacks
  const onChange = (event: SelectChangeEvent) => {
    let cityName = event.target.value;
    setCityName(cityName);

    const cityCoord = CityData.filter((city) => city.name === cityName)[0];
    dispatch(getWeatherData(cityCoord));

    //  dispatch(GetWeather({lat: cityCoord.coord[0],lon: cityCoord.coord[1]}));
  };

  //#endregion Callbacks

  //#region Functions

  const setWeatherDetails = (weatherForecast: WeatherForecast) => {
    try {
      setWeathers(weatherForecast.forecast);

      // clearState();
    } catch (error) {
      let errorMessage = "";
      if (error instanceof Error) errorMessage = error.message;
      // return String(error)
      setMessageDetails({ message: errorMessage, severity: Severity.ERROR });
      console.error(error);
    } finally {
      // handleClose();
    }
  };

  const displayMessageSection = (
    message: string,
    severity: Severity
  ): ReactNode => {
    if (message !== "" && severity !== "") {
      return <Message message={message} severity={severity} />;
    } else {
      return <></>;
    }
  };

  //#endregion Function

  return (
    <div>
      {displayMessageSection(
        messageDetails?.message ?? "",
        messageDetails?.severity ?? Severity.NILL
      )}
      <div style={selectCityStyles}>
        <SelectCity
          cities={cities}
          cityValue={weatherData?.cityName}
          onChange={onChange}
        />
      </div>
      <div>
        <WeatherCards
          weatherList={weathers as Weather[]}
          customStyle={weatherCardsStyles}
        />
      </div>
      <div className={classes.showCity}>
        <ShowCity
          cityName={
            weatherData?.cityName !== "" && weatherData?.cityName !== undefined
              ? weatherData.cityName
              : cityName
          }
        />
      </div>
    </div>
  );
};

export default WeatherPage;
