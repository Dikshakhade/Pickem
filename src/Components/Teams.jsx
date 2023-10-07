import React, { useEffect, useRef, useState } from "react";
import "./teams.css";
import { useDispatch, useSelector } from "react-redux";
import {
  teamWinOne,
  teamWinTwo,
  reset,
  teamCheck,
  teamUnCheck,
} from "../features/team/teamSlice";
function Teams({ data1, data2 }) {
  const { win } = useSelector((state) => state.team);
  const dispatch = useDispatch();

  const myDebounce = (fn, delay) => {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };
  const [team, setTeam] = useState(null);
  const handleChange = (position) => {
    setTeam((prev) => (position == prev ? null : position));
  };

  return (
    <div className="main">
      {/* {name} */}
      {data1 && data2 ? (
        <div className="wrapper">
          <div
            className="container"
            // onClick={() => dispatch(teamWinOne(data1))}
          >
            This is
            <input
              type="checkbox"
              name="round"
              value={data1.name}
              checked={data1.id == team}
              onChange={(e) => {
                handleChange(data1.id);
                myDebounce(dispatch(teamCheck(data1)), 1000);

                // ? dispatch(teamCheck(data1))
                // : dispatch(teamUnCheck());
              }}
            />
            {data1.name}
          </div>
          <div className="container">
            This is
            <input
              type="checkbox"
              name="round"
              value={data2.name}
              checked={data2.id == team}
              onChange={(e) => {
                handleChange(data2.id);
                myDebounce(dispatch(teamCheck(data2)), 1000);
                // e.target.checked
                //   ? dispatch(teamCheck(data2))
                //   : dispatch(teamUnCheck());
              }}
            />
            {data2.name}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Teams;
