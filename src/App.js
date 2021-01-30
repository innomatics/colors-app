import { useState, useEffect } from "react";
import circle from "./circle.svg";
import "./App.css";

function App() {
  const [data, setData] = useState({ srgb_colors: [] });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://127.0.0.1:8000/swatches/new");
      if (response.ok) {
        const data = await response.json();
        setData(data);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Colors App</p>
      </header>
      <ul>
        {data.srgb_colors.map((srgbColor) => (
          <li>
            `Red: ${srgbColor.red} Green: ${srgbColor.green} Blue: $
            {srgbColor.blue}`
          </li>
        ))}
      </ul>
      {/* 

      <img src={circle} className="App-logo" alt="logo" />
      */}
    </div>
  );
}

export default App;
