import { Box, Button, Container, IconButton, Paper } from "@mui/material";
import styled from "styled-components";


export const WeatherDetailsContainer = styled(Container)`
    display: flex;
    /* align-items: center; */
    justify-content: center;
    justify-items: center;
    height: 100vh;
    padding: 30px 0px;
    /* width: 100%; */
    
`
export const WeatherContainer = styled(Box)`
    padding: 20px 20px;
`
export const WeatherDataContainer =  styled(Box)`
    padding: 20px 0px;
`
export const WeatherDetailsPaper = styled(Paper)`
    /* margin: auto; */
    border-radius: 10px;
    padding-top: 30px;
    width : 500px;

    /* height: 70vh; */
    color: #9500ae;
    background-color: #ffffff;
`

export const BackButton = styled(IconButton)`
    height: 50px;
    padding: 30px;
    color: #ebebeb;
`