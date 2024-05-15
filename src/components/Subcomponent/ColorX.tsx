"use cLient";

import React from "react";

const ColorBar = () => {
  const colors = [
    "rgb(59, 204, 255)",
    "rgb(146, 208, 80)",
    "rgb(255, 255, 0)",
    "rgb(255, 162, 0)",
    "rgb(240, 70, 70)",
  ];

  return (
    <div
      data-v-a87e2bcc=""
      className="row"
      style={{ padding: "10px 10px 40px" }}
    >
      <div
        data-v-a87e2bcc=""
        className="col"
        style={{ display: "flex", alignItems: "center", padding: "0px" }}
      >
        {colors.map((color, index) => (
          <div
            key={index}
            data-v-a87e2bcc=""
            style={{
              width: "57px",
              height: "20px",
              background: color,
              borderRadius:
                index === 0
                  ? "10px 0 0 10px"
                  : index === colors.length - 1
                  ? "0 10px 10px 0"
                  : "0",
              marginRight: index === colors.length - 1 ? 0 : 5,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorBar;
