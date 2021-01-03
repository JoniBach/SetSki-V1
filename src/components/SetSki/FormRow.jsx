import React, { useContext, useState, useEffect } from "react";
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
import { TextField } from "@material-ui/core";
import ApproveIcon from "@material-ui/icons/CheckCircle";
const useStyles = makeStyles({
  buttons: {
    width: 0,
    padding: 0,
    margin: 0,
  },
});

export default function FormTable(props) {
  const classes = useStyles();
  const [optionsOpen, setOptionsOpen] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  const [styleList, setStyleList] = useContext(StyleContext);
  const [newDetails, setnewDetails] = useState(props.details);
  useEffect(() => {
    setnewDetails(props.details);
  }, []);
  const handleLocalStorage = (message) => {
    localStorage.setItem("message", message);
    // sets the value of "message" in localStorage to be "saved in browser storage"

    console.log(localStorage.getItem("message"));
    // returns "saved in browser storage"
  };
  const getRecord = (newValue) => {
    const filteredList = styleList.filter(
      (record) => record.title === newValue
    );
    return filteredList[0];
  };
  const handleRemoveValue = async (newValue) => {
    const filteredList = styleList.filter(
      (record) => record.title !== newValue
    );
    await setStyleList(() => {
      return [...filteredList];
    });
    await setOptionsOpen(false);
  };

  const handleEditRecord = async (newValue) => {
    const oldRecord = await getRecord(newValue);
    const newRecord = {
      ...oldRecord,
      details: newDetails,
    };
    const filteredList = styleList.filter(
      (record) => record.title !== newValue
    );
    await setStyleList(() => {
      return [...filteredList];
    });
    await setOptionsOpen(false);
    await setStyleList(() => {
      return [newRecord, ...filteredList];
    });
    await setEdit(false);
  };

  if (edit) {
    return (
      <TableRow key={props.label}>
        <TableCell>
          <TextField
            value={newDetails}
            onChange={(e) => {
              setnewDetails(e.target.value);
            }}
          />
        </TableCell>
        {optionsOpen ? (
          <>
            <TableCell align="right">
              <IconButton
                onClick={() => {
                  setOptionsOpen(false);
                  handleEditRecord(props.label);
                  setEdit(false);
                  setnewDetails(props.details);
                }}
              >
                <ApproveIcon />
              </IconButton>
              <IconButton
                onClick={() => {
                  setEdit(false);
                  setnewDetails(props.details);
                }}
              >
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
  } else {
    return (
      <TableRow key={props.label}>
        <TableCell>{props.label}</TableCell>
        <TableCell align="right">
          {props.details}
          {props.content}
        </TableCell>
        {optionsOpen ? (
          <>
            <TableCell align="right">
              <IconButton
                onClick={() => {
                  setnewDetails(props.details);
                  setEdit(true);
                }}
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
  }
}
