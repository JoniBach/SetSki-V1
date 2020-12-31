import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "./Card";
import Group from "./Group";
import Modal from "@material-ui/core/Modal";
import BrushOutlinedIcon from "@material-ui/icons/BrushOutlined";
import IconButton from "@material-ui/core/IconButton";
import {theme} from '../../theme'
import { Paper } from "@material-ui/core";

const useStyles = makeStyles({
  modal: {
    position: 'fixed',
    width: '90%',
    height: '90%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    overflow: 'auto',
    padding: theme.spacing()
  },
});

const Stuff = [
    { title: 'blah', heading: 'Hi', subHeading: 'A greeting', content: 'Here is some words that you can have to read' },
    { title: 'lala' },
    { title: 'lala' },
    { title: 'lala' },
    { title: 'lala' },
]

export default function MainView() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

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
        // className={classes.modal}
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
          <Paper className={classes.modal}>

        <Group color="pink">
        {
           Stuff.map((d, i) => (
               <Card 
               title={d.title} 
               heading={d.heading}
               subHeading={d.subHeading}
               >
                  {d.content} 
                </Card>
           ))
       }
        </Group>
        </Paper>

      </Modal>
    </div>
  );
}
