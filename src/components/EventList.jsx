import React, { useEffect, useState } from "react";
import formatDate from "../helpers/formatDate";
import moment from "moment";

const EventList = (props) => {
  const { value } = props;
  console.log(
    value.map((e) => e.date),
    "testteste"
  );

  const [days, setDays] = useState(null);
  const [hours, setHours] = useState(null);
  const [minutes, setMinutes] = useState(null);
  const [seconds, setSeconds] = useState(null);

  useEffect(() => {
    setInterval(() => {
      const now = moment().format("MM-DD-YYYY");
      // const then = moment(value.date);
      const then = moment(value.map((e) => e.date));
      // console.log(then, "then");

      const countdown = moment(then - now);
      setDays(countdown.format("D"));
      setHours(countdown.format("HH"));
      setMinutes(countdown.format("mm"));
      setSeconds(countdown.format("ss"));
    }, 1000);
  }, [value]);

  return (
    <div>
      {value.map((e) => (
        <div key={e.id}>
          <h2>{e.event}</h2>
          <p>{formatDate(e.date)}</p>
          <p>{`${days}:${hours}:${minutes}:${seconds}`}</p>
        </div>
      ))}
    </div>
  );
};

export default EventList;
