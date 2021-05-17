import React from "react";
import { useState } from "react";
import Form from "./Form";
import Event from "./Event";

const AddEvent = () => {
  const [eventCountDown, SetEventCountdown] = useState([]);

  //Create
  const addEvent = (event) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newEventCountdown = { id, ...event };
    SetEventCountdown([...eventCountDown, newEventCountdown]);
  };

  return (
    <>
      <h1>Add event</h1>
      <Form onSubmit={addEvent} />
      <Event eventCountDown={eventCountDown} />
    </>
  );
};

export default AddEvent;
