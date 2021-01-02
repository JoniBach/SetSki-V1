import React, { useState } from "react";
import { StyleList } from "./StyleList";

export const StyleContext = React.createContext();

export const StyleProvider = (props) => {
  const [styleList, setStyleList] = useState([]);

  return (
    <StyleContext.Provider value={[styleList, setStyleList]}>
      {props.children}
    </StyleContext.Provider>
  );
};

export const GetStyle = (newValue) => {
  const [styleList, setStyleList] = React.useContext(StyleContext)
  const filteredList = styleList.filter((record) => record.title === newValue);
  const filteredDefaultList = StyleList.filter((record) => record.title === newValue);
  return !filteredList[0] ? filteredDefaultList[0] : filteredList[0];
};
