import React, { useState } from 'react';

export const StyleContext = React.createContext();

export const StyleProvider = (props) => {
const [styleList, setStyleList] = useState([]);

        return (
            <StyleContext.Provider value={[styleList, setStyleList]}>
                {props.children}
            </StyleContext.Provider>
        );

}