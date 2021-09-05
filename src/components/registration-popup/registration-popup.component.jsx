import React from "react";
import { withRouter } from "react-router";
import "./registration-popup.styles.css";

const RegistrationPopup = ({ description, togglepopup, history, path }) => {
  return (
    <div className="popup">
      <div className="overlay"></div>
      <div className="overlay-content">
        <div className="close-btn" onClick={togglepopup}>
          &times;
        </div>
        <div>
          <h1>Rules</h1>
          <p>{description}</p>
          <button
            onClick={() => {
              history.push(`${path}/live`);
            }}
            className="registration__register-button"
          >{`Join the Event`}</button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(RegistrationPopup);
