import { useState, useEffect } from "react";
import "./App.css";
import Swatch from "./components/Swatch";

function App() {
  const [data, setData] = useState({ srgb_colors: [] });
  const [requestCount, setRequestCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://127.0.0.1:8000/swatches/new");
      if (response.ok) {
        const data = await response.json();
        setData(data);
      }
    };

    fetchData();
  }, [requestCount]);

  return (
    <div className="App">
      <header className="App-header">
        <p>Colors App</p>
        <button
          className="App-button"
          type="button"
          onClick={() => setRequestCount(requestCount + 1)}
        >
          Click here to generate new colors
        </button>
      </header>
      <Swatch srgbColors={data.srgb_colors} />
    </div>
  );
}

export default App;
