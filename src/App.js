import React, { useState } from "react";
import "./App.css";
import BaslikBolumu from "./bileşenler/BaslikBolumu/BaslikBolumu.js";
import Fotograflar from "./bileşenler/Fotograflar/Fotograflar.js";
import Date from "./bileşenler/Date/Date.js";

function App() {
  return (
    <div className="App">
      <BaslikBolumu />
      <Fotograflar />
      <Date />
    </div>
  );
}

export default App;
