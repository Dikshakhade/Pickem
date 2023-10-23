import { useEffect, useRef, useState } from "react";
import Teams1 from "./Components/Teams1";

function App() {
  const [generate, setGenerate] = useState(1);

  let colRef = useRef(null);
  const handleGenerate = (e) => {
    setGenerate(parseInt(e.target.innerText));
  };

  return (
    <>
      <div className="button-container" onClick={handleGenerate}>
        <button>2</button>
        <button>4</button>
        <button>8</button>
        <button>16</button>
        <button>32</button>
      </div>
      <div
        style={{
          display: "grid",
          gap: "1%",
          gridTemplateColumns: ` repeat(${Math.log2(generate) + 1},1fr)`,
        }}
      >
        {[...Array(Math.log2(generate) + 1)].map((a, row) => {
          return (
            <div
              key={row}
              className="square"
              id={row}
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              {[...Array(2 ** (Math.log2(generate) - row))].map((a, col) => {
                return <Teams1 id={[row, col]} />;
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
