import React from "react";
import { Redirect, withRouter } from "react-router-dom";

function TimeUp(props) {
  return (
    <div className="box-container">
      <div className="m-box">
        <div className="cont">
          <i className="fas fa-hourglass-end fa-3x mt-4 switch"></i>
          <h3 className="my-3 switch">
            Time's Up! <br /> Thank You for attempting!
            {setTimeout(props.history.push("/"), 3000)}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default withRouter(TimeUp);
