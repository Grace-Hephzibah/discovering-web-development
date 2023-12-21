//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";

//Created by YOURNAME.
const author = "Grace";
//Copyright CURRENTYEAR.
const year = "2023";

//It should display 2 paragraph HTML elements.
ReactDOM.render(
  <div>
    <p>Created by {author}!</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);

//The paragraphs should say:
//Created by Angela Yu.
//Copyright 2019.

/*
// Answer Code
const name = "Angela";
const currentDate = new Date();
const year = currentDate.getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {name}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
*/