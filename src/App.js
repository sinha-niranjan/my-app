import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
function App() {
  const [mode, setmode] = useState("light"); // This will show dark mode is enable or not.
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({ msg: message, type: type });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.background = "#000d50";
      showAlert("Dark mode has been enabled.", "success : ");
      //document.title = "TextUtils - Dark mode";
    } else {
      setmode("light");
      document.body.style.background = "white";
      showAlert("Light mode has been enabled.", "success : ");
       //document.title = "TextUtils - Light mode";
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
      <Alert alert={alert} />
      <div className="container my-3">
        <Textform
          showAlert={showAlert}
          heading="Enter the text for analyze below"
          mode={mode}
        />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
