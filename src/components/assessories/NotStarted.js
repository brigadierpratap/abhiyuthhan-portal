import React from "react";
import "./assStyle.css";
export default function NotStarted() {
  return (
    <div className="box-container">
      <div className="m-box">
        <div className="cont">
          <i className="fas fa-exclamation-triangle fa-3x mt-4 switch"></i>
          <h3 className="my-3 switch">Contest Not Started Yet!</h3>
        </div>
      </div>
    </div>
  );
}
