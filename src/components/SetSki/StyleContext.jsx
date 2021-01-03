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
  const [styleList, setStyleList] = React.useContext(StyleContext);
  const filteredDefaultList = StyleList.filter(
    (record) => record.title === newValue
  );
  const filteredList = styleList
    ? styleList.filter((record) => record.title === newValue)
    : filteredDefaultList;
  return !filteredList[0] ? filteredDefaultList[0] : filteredList[0];
  //   return filteredDefaultList
};
