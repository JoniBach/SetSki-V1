import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/DeleteForever";
import OptionsIcon from "@material-ui/icons/MoreVert";
import CancelIcon from "@material-ui/icons/Cancel";
import AddIcon from "@material-ui/icons/Add";
import { StyleContext } from "./StyleContext";

const useStyles = makeStyles({
  buttons: {
    width: 0,
    padding: 0,
    margin: 0,
  },
});

const DisplayTable = (props) => {
  const classes = useStyles();
  const [optionsOpen, setOptionsOpen] = React.useState(false);
  const [styleList, setStyleList] = useContext(StyleContext);

  const handleLocalStorage = (message) => {
    localStorage.setItem("message", message);
    // sets the value of "message" in localStorage to be "saved in browser storage"

    console.log(localStorage.getItem("message"));
    // returns "saved in browser storage"
  };

  const handleRemoveValue = async (newValue) => {
    console.log(newValue);
    const filteredList = styleList.filter(
      (record) => record.title !== newValue
    );
    await setStyleList(() => {
      return [...filteredList];
    });
    await setOptionsOpen(false)
    
  };

  return (
    <TableRow key={props.label}>
      <TableCell>{props.label}</TableCell>
      <TableCell align="right">
        {props.info}
        {props.content}
      </TableCell>
      {optionsOpen ? (
        <>
          <TableCell align="right">
            <IconButton
              onClick={() => console.log(localStorage.getItem("message"))}
            >
              <CreateIcon />
            </IconButton>
            <IconButton onClick={() => handleRemoveValue(props.label)}>
              <DeleteIcon />
            </IconButton>
            <IconButton onClick={() => setOptionsOpen(false)}>
              <CancelIcon />
            </IconButton>
          </TableCell>
        </>
      ) : (
        <>
          <TableCell align="right">
            <IconButton onClick={() => setOptionsOpen(true)}>
              <OptionsIcon />
            </IconButton>
          </TableCell>
        </>
      )}
    </TableRow>
  );
};

const EditTable = () => {
  return <div></div>;
};

export default function FormTable(props) {
  const classes = useStyles();
  if (props.edit) {
    return <EditTable />;
  } else {
    return <DisplayTable {...props} />;
  }
}
