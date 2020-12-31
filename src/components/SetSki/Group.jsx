import { Paper } from "@material-ui/core";
import React from "react";
import {theme} from '../../theme'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    group: {
     padding: theme.spacing(1),
    },
  });
  
export default function Group(props) {
  const classes = useStyles();
  return <Paper style={{backgroundColor: props.color}} className={classes.group}>{props.children}</Paper>;
}
