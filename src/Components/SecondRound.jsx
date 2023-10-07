import React, { useEffect, useState, useContext } from "react";
import { Context } from "../App";
import Teams from "./Teams";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { reset } from "../features/team/teamSlice";
function SecondRound() {
  const dispatch = useDispatch();
  const { win } = useSelector((state) => state.team);
  const [teamOne, setTeamOne] = useState([]);
  const [teamTwo, setTeamTwo] = useState([]);
  const [generate] = useContext(Context);

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

  return (
    <>
      {/* <h1>Second Round</h1>
      {win.map((item) => (
        <div>
          <p>{item.id}</p>
          <p>{item.name}</p>
        </div>
      ))} */}

      <div>
        {[...Array(parseInt(generate / 2))].map((value, i) => (
          <Teams data1={win[i]} data2={win[i + 1]} />
        ))}
      </div>
    </>
  );
}

export default SecondRound;
