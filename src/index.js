import React from "react";
import ReactDOM from "react-dom";

const fName = "Eve";
const lName = "Easterbrook";
const number = 7;

//JS can be included within HTML code if inside {}
//can be a variable, an expression, but NOT a statement
ReactDOM.render(
  <div>
    <h1>
      Hello {fName} {lName}!
    </h1>
    <p>Your lucky number is {number}</p>
    <p>A random number is {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);
