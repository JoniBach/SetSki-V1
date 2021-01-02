import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "./Card";
import Group from "./Group";
import Modal from "@material-ui/core/Modal";
import BrushOutlinedIcon from "@material-ui/icons/BrushOutlined";
import IconButton from "@material-ui/core/IconButton";
import { theme } from "../../theme";
import { Button, Paper } from "@material-ui/core";
import FormTable from "./FormTable";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import FormRow from "./FormRow";
import FeatureSearch from './FeatureSearch'
import { StyleContext } from "./StyleContext"

const useStyles = makeStyles({
  modal: {
    position: "fixed",
    width: "90%",
    height: "90%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    overflow: "auto",
    padding: theme.spacing(),
  },
});

const Stuff = [
  {
    title: "blah",
    heading: "Hi",
    subHeading: "A greeting",
  }
];

export default function MainView() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [styleList, setStyleList] = React.useContext(StyleContext);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton
        onClick={handleOpen}
        color="primary"
        aria-label="upload picture"
        component="span"
      >
        <BrushOutlinedIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Paper className={classes.modal}>
          <Group color="pink">
            {Stuff.map((d, i) => (
              <Card
                title={d.title}
                heading={d.heading}
                subHeading={d.subHeading}
              >
                {d.content}
                <FeatureSearch />
                <TableContainer component={Paper}>
                  <Table aria-label="simple table">

                    <TableHead>
                        {
                            styleList.map((d,i) => (
                                <FormRow  label={d.title} details={d.details} edit={false} />
                            ))
                        }
                    </TableHead>
                  </Table>
                </TableContainer>
              </Card>
            ))}
          </Group>
        </Paper>
      </Modal>
    </div>
  );
}
