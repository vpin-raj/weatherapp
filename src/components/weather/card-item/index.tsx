import React, { MouseEvent } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { WiSprinkle } from "react-icons/wi";
import { IconContext } from "react-icons";
import { Weather } from "../../../models/weather/Weather";
import SundayImg from "../../../assets/weather/Sunday.jpg";
import MondayImg from "../../../assets/weather/Monday.jpg";
import TuesdayImg from "../../../assets/weather/Tuesday.jpg";
import WednesdayImg from "../../../assets/weather/Wednesday.jpg";
import ThursdayImg from "../../../assets/weather/Thursday.jpg";
import FridayImg from "../../../assets/weather/Friday.jpg";
import SaturdayImg from "../../../assets/weather/Saturday.jpg";
import {
  SWeatherCard,
  SWeatherCardBottomDay,
  SWeatherCardBottomHumidity,
  SWeatherCardTemperature,
} from "./index.styles";
import { useNavigate } from "react-router-dom";

//#region Functions

export const setImage = (day: string): string => {
  switch (day) {
    case "Sunday":
      return SundayImg;
    case "Monday":
      return MondayImg;
    case "Tuesday":
      return TuesdayImg;
    case "Wednesday":
      return WednesdayImg;
    case "Thursday":
      return ThursdayImg;
    case "Friday":
      return FridayImg;
    case "Saturday":
      return SaturdayImg;

    default:
      return "";
  }
};

//#endregion Functions

const WeatherCard = (props: Weather) => {
  const navigate = useNavigate();

  const clickHandler = (e: MouseEvent<HTMLElement>, day: string) => {
    navigate(`Details/${day}`);
  };

  const imagePath = setImage(props.day);
  return (
    <SWeatherCard
      bgImage={setImage(props.day)}
      onClick={(e) => clickHandler(e, props.day)}
    >
      <SWeatherCardTemperature>
        <Box>
          <Typography variant="h3" component="div">
            {props.temperature}°
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" component="div">
            {props.day}
          </Typography>
        </Box>
      </SWeatherCardTemperature>
      <SWeatherCardBottomDay>
        <Box>
          <Typography variant="h6" component="div">
            {props.day}
          </Typography>
        </Box>
        <SWeatherCardBottomHumidity>
          <IconContext.Provider value={{ size: "3em" }}>
            <WiSprinkle />
          </IconContext.Provider>
          <Typography variant="h6" component="div">
            {props.humidity}
          </Typography>
        </SWeatherCardBottomHumidity>
      </SWeatherCardBottomDay>
    </SWeatherCard>
  );
};

export default WeatherCard;
