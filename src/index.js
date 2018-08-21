import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import {
  ButtonBig,
  ButtonGreen,
  ButtonRed,
  ButtonOutline
} from "./baseComponent";
import { Half, Third, Quarter } from "./layoutComponent";

function App() {
  return (
    <div className="App">
      <h1>Base Component</h1>
      <h2>Buttons example</h2>
      <ButtonBig>Button 1</ButtonBig>
      <ButtonGreen>Button 2</ButtonGreen>
      <ButtonRed>Button 3</ButtonRed>
      <ButtonOutline>Button 3</ButtonOutline>
      <br />
      <br />
      <hr />
      <br />
      <h1>Layout Component</h1>
      <div>
        <div>
          <Half>Half width column</Half>
          <Half>Half width column</Half>
        </div>
        <div>
          <Third>Third width column</Third>
          <Third>Third width column</Third>
          <Third>Third width column</Third>
        </div>
        <div>
          <Quarter>Quarter width column</Quarter>
          <Quarter>Quarter width column</Quarter>
          <Quarter>Quarter width column</Quarter>
          <Quarter>Quarter width column</Quarter>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
