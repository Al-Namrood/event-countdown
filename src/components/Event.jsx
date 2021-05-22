import React from "react";
import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
} from "@material-ui/core";
import Form from "./Form";
import EventList from "./EventList";

const Event = () => {
  const [eventCountDown, SetEventCountdown] = useState([]);
  console.log(eventCountDown);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //Create
  const addEvent = (event) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newEventCountdown = { id, ...event };
    SetEventCountdown([...eventCountDown, newEventCountdown]);
  };

  return (
    <>
      <h1>Add event</h1>

      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Ajouter
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>

        <DialogContent>
          <Form onSubmit={addEvent} onClick={handleClose} />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Fermer
          </Button>
        </DialogActions>
      </Dialog>

      <EventList value={eventCountDown} />
    </>
  );
};

export default Event;
