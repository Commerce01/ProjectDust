import Chart6 from "@/components/Subcomponent/Chart6";

import React from "react";

function bd6page() {
  return (
    <div className="container">
      <div className="flex justify-center items-center ">
        <p className="py-3 font-bold text-2xl ">กราฟเเสดงค่าฝุ่น</p>
      </div>
      <div className="py-5">
        <Chart6 />
      </div>
    </div>
  );
}

export default bd6page;
