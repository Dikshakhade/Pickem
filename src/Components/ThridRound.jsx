import React, { useContext } from "react";
import Teams from "./Teams";
import { Context } from "../App";
function ThridRound() {
  const [generate] = useContext(Context);
  return (
    <div>
      <div>
        {[...Array(parseInt(generate / 4))].map((value, index) => (
          <Teams />
        ))}
      </div>
    </div>
  );
}

export default ThridRound;
