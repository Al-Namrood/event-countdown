import React, { useState } from "react";

const Form = (props) => {
  const [event, setEvent] = useState("");
  const [date, setDate] = useState("");

  const handleOnChangeEvent = (e) => {
    setEvent(e.target.value);
  };

  const handleOnChangeDate = (e) => {
    setDate(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 100000),
      event: event,
      date: date,
    });

    setEvent("");
    setDate("");
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div>
        <label>Enter an event: </label>
        <input
          type="text"
          name="event"
          placeholder="Go to Canada..."
          id="event"
          value={event}
          required
          onChange={handleOnChangeEvent}
        />
      </div>

      <div>
        <label>Enter a date: </label>
        <input
          type="text"
          name="date"
          placeholder="14/12/2024..."
          id="date"
          value={date}
          required
          onChange={handleOnChangeDate}
        />
      </div>

      <div>
        <input type="submit" value="Save event" />
      </div>
    </form>
  );
};

export default Form;
