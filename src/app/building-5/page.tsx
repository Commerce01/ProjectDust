import Chart5 from "@/components/Subcomponent/Chart5";

import React from "react";

function bd5page() {
  return (
    <div className="container">
      <div className="flex justify-center items-center ">
        <p className="py-3 font-bold text-2xl">กราฟเเสดงค่าฝุ่น</p>
      </div>
      <div className="py-5">
        <Chart5 />
      </div>
    </div>
  );
}

export default bd5page;
