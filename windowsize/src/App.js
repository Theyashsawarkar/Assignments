import "./App.css";
import { useEffect, useState } from "react";
function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  function sizeHandler() {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  }

  window.addEventListener("resize", sizeHandler);
  return (
    <div className="App">
      <h1>Display Size</h1>
      <div className="container">
        <h2>width :- {width}</h2>
        <h2>height :- {height}</h2>
      </div>
    </div>
  );
}

export default App;
