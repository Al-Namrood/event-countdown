import React, { useEffect, useState } from "react";
import { DateTime } from "luxon";
import formatDate from "../helpers/formatDate";

const EventList = (props) => {
  const { value } = props;
  console.log(value, "testteste");

  // const [month, setMonth] = useState(0);
  // const [days, setDays] = useState(0);
  // const [hours, setHours] = useState(0);
  // const [minutes, setMinutes] = useState(0);

  // useEffect(() => {
  //   setInterval(() => {
  //     const now = DateTime.local();
  //     const then = DateTime(value.date).setZone("local");
  //     console.log(then, "thendate");
  //     const countdown = DateTime(then - now);
  //     console.log(countdown, "now");
  //     // setMonth(countdown.format('D'))
  //     // setDays(countdown.format('D'))
  //     // setHours(countdown.format('HH'))
  //     // setMinutes(countdown.format('mm'))
  //   }, 1000);
  // }, []);

  // const formatDate = (date) => {
  //   date = new Date(date);
  //   return `${date.getDate()}/${("0" + (date.getMonth() + 1)).slice(
  //     -2
  //   )}/${date.getFullYear()}`;
  // };

  return (
    <div>
      {value.map((e) => (
        <div key={e.id}>
          <h2>{e.event}</h2>
          <p>{formatDate(e.date)}</p>
        </div>
      ))}
    </div>
  );
};

export default EventList;
