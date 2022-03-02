import React, { useEffect } from "react";
import { City } from "../../../models/city/City";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/Store";

const SelectCity = (props: {
  cities: City[];
  cityValue?: string;
  onChange: Function;
}) => {
  //#region Hooks
  const [city, setCity] = React.useState("");

  useEffect(() => {
    if (props.cityValue !== "" && props.cityValue !== undefined) {
      setCity(props.cityValue);
    }
  }, [props.cityValue]);

  //#endregion Hooks

  //#region Event handling
  const handleChange = (event: SelectChangeEvent) => {
    setCity(event.target.value);
    props.onChange(event);
  };

  //#endregion Event handling

  //#region Functions
  const menuitems = props.cities.map((city) => {
    return (
      <MenuItem value={city.name} key={city.id}>
        {city.name}
      </MenuItem>
    );
  });

  //#endregion Functions

  return (
    <Box>
      <FormControl variant="standard" sx={{ minWidth: 500 }}>
        <InputLabel id="city-label">
          Please select a city to continue...
        </InputLabel>
        <Select
          labelId="city-label"
          id="city-select"
          value={city}
          label="City"
          onChange={handleChange}
        >
          {menuitems}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectCity;
