import React from "react";

const Events = ({ eventCountDown }) => {
  return eventCountDown.map((event) => {
    // const formatDate = (date) => {
    //   return `${date.getDate()}:${date.getMonth() + 1}:${date.getFullYear()}`;
    // };

    const newDate = new Date(event.date);
    const formatDate = newDate.toLocaleDateString();
  

    return (
      <div>
        <div key={event.id}>
          <p>{event.event}</p>
          <p>{formatDate}</p>
        </div>
      </div>
    );
  });
};

export default Events;
