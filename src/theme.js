import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";

function Blah() {
  const dada = "#11cb5f"
  return dada
}



export const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: Blah(),
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#11cb5f",
    },
    type: "dark",
  },
});
