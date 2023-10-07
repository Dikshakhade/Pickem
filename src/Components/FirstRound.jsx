import Teams from "./Teams.jsx";
import { useContext, useEffect, useState } from "react";
import { reset } from "../features/team/teamSlice.js";
import axios from "axios";
import { Context } from "../App.js";
import { useDispatch } from "react-redux";
function FirstRound() {
  const [teamOne, setTeamOne] = useState([]);
  const [teamTwo, setTeamTwo] = useState([]);
  const dispatch = useDispatch();
  // debugger;
  useEffect(async () => {
    axios
      .get("http://localhost:3000/data")
      .then((res) => {
        setTeamOne(res.data[0].namesOne);
        setTeamTwo(res.data[0].namesTwo);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {
      dispatch(reset);
    };
  }, []);

  let [generate] = useContext(Context);

  return (
    <>
      {teamOne[0] && teamTwo[0] ? (
        <div>
          {[...Array(generate)].map((value, index) => (
            <Teams data1={teamOne[index]} data2={teamTwo[index]} key={index} />
          ))}
        </div>
      ) : (
        " "
      )}
    </>
  );
}

export default FirstRound;
