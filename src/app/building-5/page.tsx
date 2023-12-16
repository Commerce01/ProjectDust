import Chart5 from "@/components/Subcomponent/Chart5";
import TableRealtime5 from "@/components/Subcomponent/TableRealtime5";
import React from "react";

function bd5page() {
  return (
    <div className="container">
      <div className="py-5">
        <Chart5 />
        <TableRealtime5 />
      </div>
    </div>
  );
}

export default bd5page;
