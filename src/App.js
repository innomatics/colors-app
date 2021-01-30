import { useState, useEffect } from "react";
import "./App.css";
import Swatch from "./components/Swatch";

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
      <Swatch srgbColors={data.srgb_colors} />
    </div>
  );
}

export default App;
