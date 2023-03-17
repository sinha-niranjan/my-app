import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
function App() {
  return (
    <>
      <Navbar tittle="TextUtils" aboutText="About textUtils" />
      {/* <Navbar tittle="textUtils" /> */}
      <div className="container my-3">
        <Textform heading="Enter the text for analyze below"/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
