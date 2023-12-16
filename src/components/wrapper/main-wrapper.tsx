import React from "react";

function MainWrapper({ children }: { children: React.ReactNode }) {
  return <div className="container">{children}</div>;
}

export default MainWrapper;
