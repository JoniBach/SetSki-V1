import React from "react";
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

import FormRow from "./FormRow";

export default function FormTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
        <FormRow info="lala" label="A Label" edit={false}/>
        </TableHead>
        <TableBody>
        <FormRow info="lala" label="A Label" edit={false}/>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
