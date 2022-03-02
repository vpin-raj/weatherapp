import styled from "styled-components"
import Card from '@mui/material/Card';
import { Box } from "@mui/material";

export const SWeatherCard = styled(Card)`
    background-image: url(${(props : {bgImage : string}) => props.bgImage});
    background-size: cover;
    border-radius:1em;
    width:275px;
    height:375px;
    display: flex;
    flex-direction:column;
    text-shadow: 2px 1px 8px #000000;
    
`

export const SWeatherCardTemperature = styled(Box)`
    display: flex;
    height: 100%;
    padding-top: -100;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


export const SWeatherCardBottomDay = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 1em;
`

export const SWeatherCardBottomHumidity = styled(Box)`
    display: flex;
    align-items: center;
    flex-direction: column;
`
