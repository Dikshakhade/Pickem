import { createContext, useState } from "react";
import FirstRound from "./Components/FirstRound.jsx";
import SecondRound from "./Components/SecondRound.jsx";
import ThridRound from "./Components/ThridRound.jsx";
import Buttons from "./Components/Buttons.jsx";

export const Context = createContext();

function App() {
  const [generate, setGenerate] = useState(1);
  const [visible, setVisible] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    setVisible(true);
  };
  return (
    <div className="App">
      <button onClick={submitHandler}>Generate</button>

      <div style={{ display: "flex" }}>
        <Context.Provider value={[generate, setGenerate]}>
          <Buttons />
          {visible ? (
            <div style={{ display: "flex" }}>
              <FirstRound />
              <SecondRound />
              {/* <ThridRound /> */}
            </div>
          ) : (
            ""
          )}
        </Context.Provider>
      </div>
    </div>
  );
}

export default App;
