import React from "react";

const Events = ({ eventCountDown }) => {
  console.log(eventCountDown, "popopô");
  return eventCountDown.map((event) => (
    <div>
      <div key={event.id}>
        {event.event} {event.date}
      </div>
    </div>
  ));
};

export default Events;
