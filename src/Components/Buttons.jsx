import React, { useContext, useState } from "react";
import { Context } from "../App";
function Buttons() {
  const [generate, setGenerate] = useContext(Context);
  return (
    <div
      style={{ display: "flex", justifyContent: "center" }}
      onClick={(e) => {
        setGenerate(parseInt(e.target.innerText));
      }}
    >
      <div>2</div>
      <div>4</div>
      <div>8</div>
    </div>
  );
}

export default Buttons;
