import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="layout">
      <div className="box">box</div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
