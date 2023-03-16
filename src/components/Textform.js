import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    //console.log("handleupclick is clicked " + text);
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleOnChange = (event) =>{
    //console.log("Handle on change ");
    setText(event.target.value);
  }
  const [text, setText] = useState("Enter text here  ");
  // text = "new text";// wrong way to change the state
  // setText("new text"); // correct way to change the state
  return (
    <div>
      <h1>{props.heading} </h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
        <div className="btn btn-primary my-3 " onClick={handleUpClick}>
          Convert to upper case
        </div>
      </div>
    </div>
  );
}
