import { createTheme } from "@mui/material";

export const General = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#f50057",
    },
    text: {
      primary: "#ffffff",
      secondary: "#ffffff",
    },
    background: {
      // default : '#000000',
      paper: "#9500ae",
    },
  },
  typography: {
    fontSize: 13,
  },
});
