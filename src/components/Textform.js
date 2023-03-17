import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    //console.log("handleupclick is clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    //console.log("handleupclick is clicked " + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    //console.log("handleupclick is clicked " + text);
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    //console.log("Handle on change ");
    setText(event.target.value);
  };

  const handleCopyClick = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const [text, setText] = useState("Enter text here  ");
  // text = "new text";// wrong way to change the state
  // setText("new text"); // correct way to change the state
  return (
    <>
      <div class="container">
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
          <div className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>
            Convert to upper case
          </div>
          <div className="btn btn-primary my-3 mx-2" onClick={handleLoClick}>
            Convert to lower case
          </div>
          <div className="btn btn-primary my-3 mx-2" onClick={handleClearClick}>
            Clear Text
          </div>
          <div
            className="btn btn-primary my-3 mx-2"
            onClick={handleExtraSpaces}
          >
            Remove extra spaces
          </div>
        </div>
      </div>
      <div className="container">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
