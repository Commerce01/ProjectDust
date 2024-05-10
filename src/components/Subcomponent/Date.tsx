"use client";
import React, { useEffect, useState } from "react";

function CustomData() {
  const [newDate, setNewDate] = useState("");
  useEffect(() => {
    let todayDate = new Date("May 11 2024"),
      day = "" + todayDate.getDate(),
      month = "" + (todayDate.getMonth() + 1),
      year = todayDate.getFullYear();
    if (day.length < 2) {
      day = "0" + day;
    }
    if (month.length < 2) {
      month = "0" + month;
    }
    console.log(day, month, year);
    setNewDate([day, month, year].join("/"));
  }, []);
  return (
    <div>
      <h1>{newDate}</h1>
    </div>
  );
}
export default CustomData;
