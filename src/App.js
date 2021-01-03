import logo from "./logo.svg";
import React from "react";
import "./App.css";
import MainView from "./views/MainView";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { StyleContext, GetStyle } from "./components/SetSki/StyleContext";
function App() {
  // const [styleList, setStyleList] = React.useContext(StyleContext);
  const theme = createMuiTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: GetStyle("Primary Color").details,
      },
      secondary: {
        // This is green.A700 as hex.
        main: GetStyle("Secondary Color").details,
      },
      type: GetStyle("Theme").details,
    },
    typography: {
      // fontFamily: GetStyle("Font Type").details,
      fontFamily: [
        GetStyle("Font Type").details,
        'Roboto',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      fontSize: GetStyle("Font Size").details,

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
