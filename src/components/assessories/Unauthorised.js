import React from "react";
import "./assStyle.css";
export default function Unauthorised() {
  return (
    <div className="box-container">
      <div className="m-box">
        <div className="cont">
          <i className="fas fa-skull-crossbones fa-3x mt-4 switch"></i>
          <h3 className="my-3 switch">Unauthorized Access!</h3>
        </div>
      </div>
    </div>
  );
}
