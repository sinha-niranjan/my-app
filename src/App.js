import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
function App() {
  const [mode, setmode] = useState("light"); // This will show dark mode is enable or not.

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.background = "#000d50";
    } else {
      setmode("light");
      document.body.style.background = "white";
    }
  };

  return (
    <>
      <Navbar
        tittle="TextUtils"
        aboutText="About textUtils"
        mode={mode}
        toggleMode={toggleMode}
      />
      {/* <Navbar tittle="textUtils" /> */}
      <div className="container my-3">
        <Textform heading="Enter the text for analyze below" mode={mode} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
