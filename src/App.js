import { useState } from "react";
import NewWindow from "./newWindow";

export default function App() {
  const [rendered, setRendered] = useState(false);

  function handleClick() {
    setRendered(true);
  }

  return (
    <div className="App">
      <button onClick={handleClick}>show</button>
      {rendered && (
        <NewWindow>
          <div style={{ width: 40, height: 40, background: "blue" }} />
        </NewWindow>
      )}
    </div>
  );
}
