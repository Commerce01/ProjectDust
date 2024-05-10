"use client";
import React, { useState, useEffect } from "react";

const Clock: React.FC = () => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = time.toLocaleTimeString();

  return <div>{formattedTime}</div>;
};

export default Clock;

// import React, { useEffect, useState } from "react";

// function TimePicker() {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     setInterval(() => setTime(new Date()), 1000);
//   }, []);

//   return (
//     <div>
//       <p>{time.toLocaleTimeString()}</p>
//     </div>
//   );
// }

// export default TimePicker;
