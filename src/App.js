import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
function App() {
  return (
    <>
      <Navbar tittle="textUtils" aboutText="About textUtils" />
      {/* <Navbar tittle="textUtils" /> */}
      <div className="container my-3">
        <Textform heading="Enter the text for analyze below"/>
      </div>
    </>
  );
}

export default App;
