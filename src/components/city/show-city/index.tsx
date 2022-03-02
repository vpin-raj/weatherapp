import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Card } from "@mui/material";
import { padding } from "@mui/system";
import { SShowCity } from "./index.styles";

const ShowCity = (props: { cityName: string }) => {
  const { cityName } = props;
  const showCity = () => {
    if (cityName !== "") {
      return (
        // <Card sx={{padding:1, paddingLeft:3, paddingRight:3}}>
        <SShowCity>
          <Typography variant="subtitle1" component="div">
            {cityName ? `The selected city is ${cityName}` : ""}
          </Typography>
        </SShowCity>
        //  </Card>
      );
    }
  };

  return <Box>{showCity()}</Box>;
};

export default ShowCity;
