import React from "react";
import "./style.css";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 50, textAlign: "center", backgroundColor: 'black', marginTop: '10px'}}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;