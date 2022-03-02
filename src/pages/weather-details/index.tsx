import {
  Box,
  Button,
  CardMedia,
  Container,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import React, { MouseEvent } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setImage } from "../../components/weather/card-item";
import { RootState } from "../../store/Store";
import { AiOutlineLeftCircle } from "react-icons/ai";
import {
  BackButton,
  WeatherContainer,
  WeatherDataContainer,
  WeatherDetailsContainer,
  WeatherDetailsPaper,
} from "./index.styles";

const WeatherDetails = () => {
  const { day } = useParams();

  //#region Hooks
  const navigate = useNavigate();
  //#endregion Hooks

  //#region Functions

  const weatherData = useSelector(
    (state: RootState) => state.weatherData?.data
  );

  const weather = weatherData.forecast.filter(
    (weather) => weather.day === day
  )[0];

  const backButtonHandler = (e: MouseEvent<HTMLElement>) => {
    navigate("/");
  };

  const weatherImage = setImage(day ?? "");
  //#endregion Functions

  return (
    <WeatherDetailsContainer>
      <BackButton onClick={backButtonHandler}>
        <AiOutlineLeftCircle size={56} />
      </BackButton>
      <WeatherDetailsPaper>
        <Box>
          <CardMedia
            component="img"
            height="400"
            image={weatherImage}
            alt={day}
          />
          <WeatherContainer>
            <Typography variant="h4" component="div">
              {weatherData?.cityName}
            </Typography>
            <Divider />
            <WeatherDataContainer>
              <Typography variant="subtitle1" component="div">
                Day : {day}
              </Typography>
              <Typography variant="subtitle1" component="div">
                Temperature : {weather?.temperature}°
              </Typography>
              <Typography variant="subtitle1" component="div">
                Humidity : {weather?.humidity}
              </Typography>
            </WeatherDataContainer>
          </WeatherContainer>
        </Box>
      </WeatherDetailsPaper>
    </WeatherDetailsContainer>
  );
};

export default WeatherDetails;
