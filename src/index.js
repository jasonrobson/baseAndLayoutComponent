import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import {
  ButtonBig,
  ButtonGreen,
  ButtonRed,
  ButtonOutline
} from "./baseComponent";

function App() {
  return (
    <div className="App">
      <h1>Layout Component</h1>
      <h2>Buttons example</h2>
      <ButtonBig>Button 1</ButtonBig>
      <ButtonGreen>Button 2</ButtonGreen>
      <ButtonRed>Button 3</ButtonRed>
      <ButtonOutline>Button 3</ButtonOutline>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
