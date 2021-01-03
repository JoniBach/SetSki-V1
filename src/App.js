import logo from "./logo.svg";
import React from "react";
import "./App.css";
import MainView from "./views/MainView";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { StyleContext, GetStyle } from "./components/SetSki/StyleContext";
function App() {
  const additionalFonts = [
    "Roboto",
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ];
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: GetStyle("Primary Color").details,
      },
      secondary: {
        main: GetStyle("Secondary Color").details,
      },
      background: {
        default: GetStyle("Background Default Color").details,
        paper: GetStyle("Background Paper Color").details,
      },
      type: GetStyle("Theme").details,
    },
    typography: {
      fontFamily: [GetStyle("Font Family").details, ...additionalFonts].join(","),
      fontSize: GetStyle("Font Size").details,
      fontWeightBold: GetStyle("Font Weight Bold").details,
      fontWeightLight: GetStyle("Font Weight Light").details,
      fontWeightMedium: GetStyle("Font Weight Medium").details,
      fontWeightRegular: GetStyle("Font Weight Regular").details,
      // h1: {
      //   fontFamily: [GetStyle("h1 Font Family").details, ...additionalFonts],
      //   fontSize: GetStyle("h1 Font Size").details,
      //   fontWeight: GetStyle("h1 Font Weight").details,
      //   lineHeight: GetStyle("h1 Font Height").details,
      // },
      // h2: {
      //   fontFamily: [GetStyle("h2 Font Family").details, ...additionalFonts],
      //   fontSize: GetStyle("h2 Font Size").details,
      //   fontWeight: GetStyle("h2 Font Weight").details,
      //   lineHeight: GetStyle("h2 Font Height").details,
      // },
      // h3: {
      //   fontFamily: [GetStyle("h3 Font Family").details, ...additionalFonts],
      //   fontSize: GetStyle("h3 Font Size").details,
      //   fontWeight: GetStyle("h3 Font Weight").details,
      //   lineHeight: GetStyle("h3 Font Height").details,
      // },
      // h4: {
      //   fontFamily: [GetStyle("h4 Font Family").details, ...additionalFonts],
      //   fontSize: GetStyle("h4 Font Size").details,
      //   fontWeight: GetStyle("h4 Font Weight").details,
      //   lineHeight: GetStyle("h4 Font Height").details,
      // },
      // h5: {
      //   fontFamily: [GetStyle("h5 Font Family").details, ...additionalFonts],
      //   fontSize: GetStyle("h5 Font Size").details,
      //   fontWeight: GetStyle("h5 Font Weight").details,
      //   lineHeight: GetStyle("h5 Font Height").details,
      // },
      // h6: {
      //   fontFamily: [GetStyle("h6 Font Family").details, ...additionalFonts],
      //   fontSize: GetStyle("h6 Font Size").details,
      //   fontWeight: GetStyle("h6 Font Weight").details,
      //   lineHeight: GetStyle("h6 Font Height").details,
      // },
      // body1: {
      //   fontFamily: [GetStyle("body1 Font Family").details, ...additionalFonts],
      //   fontSize: GetStyle("body1 Font Size").details,
      //   fontWeight: GetStyle("body1 Font Weight").details,
      //   lineHeight: GetStyle("body1 Font Height").details,
      // },
      // body2: {
      //   fontFamily: [GetStyle("body2 Font Family").details, ...additionalFonts],
      //   fontSize: GetStyle("body2 Font Size").details,
      //   fontWeight: GetStyle("body2 Font Weight").details,
      //   lineHeight: GetStyle("body2 Font Height").details,
      // },
      // button: {
      //   fontFamily: [
      //     GetStyle("button Font Family").details,
      //     ...additionalFonts,
      //   ],
      //   fontSize: GetStyle("button Font Size").details,
      //   fontWeight: GetStyle("button Font Weight").details,
      //   lineHeight: GetStyle("button Font Height").details,
      // },
      // caption: {
      //   fontFamily: [
      //     GetStyle("caption Font Family").details,
      //     ...additionalFonts,
      //   ],
      //   fontSize: GetStyle("caption Font Size").details,
      //   fontWeight: GetStyle("caption Font Weight").details,
      //   lineHeight: GetStyle("caption Font Height").details,
      // },
    },
  });

  console.log(theme);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <MainView />
      </ThemeProvider>
    </div>
  );
}

export default App;
