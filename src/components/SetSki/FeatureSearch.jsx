import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import { Box, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { StyleList } from "./StyleList";
import { StyleContext } from "./StyleContext"

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    // width: '100%',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function CustomizedInputBase() {
  const classes = useStyles();
  const [fieldSelected, setFieldSelected] = useState();
  const [fields, setFields] = useState([]);
  const [value, setValue] = React.useState(null);
  const [styleList, setStyleList] = useContext(StyleContext);

  const handleAddValue = async (newValue) => {
    await setValue(newValue);
    if (newValue !== null && !styleList.includes(newValue)) {
      await setStyleList(() => {
          return [newValue, ...styleList]
        })
    }
    await setValue()
  };

  return (
    <Paper component="form" className={classes.root}>
      <Autocomplete
        options={StyleList}
        getOptionLabel={(option) => option.title}
        fullWidth
        id="controlled-demo"
        value={value}
        onChange={(event, newValue) => {
            handleAddValue(newValue)
        }}
        renderInput={(params) => (
          <>
            <TextField
              placeholder="Start Typing..."
              {...params}
              label="Find a new style"
              variant="outlined"
            />
          </>
        )}
      />
      {!value && (
        <IconButton>
          <SearchIcon />
        </IconButton>
      )}
    </Paper>
  );
}
