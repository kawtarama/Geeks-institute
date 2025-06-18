// src/App.js
import React from "react";
import Car from "./Components/Car";
import Events from "./Components/Events";
import Phone from "./Components/Phone";
import Color from "./Components/Color";
import "./App.css";

const carinfo = { name: "Ford", model: "Mustang" };

function App() {
  return (
    <div>
      <h1>My React App</h1>
      <Car car={carinfo} />
      <Events />
      <hr />
      <Phone />
      <hr />
      <Color />

    </div>
  );
}

export default App;
