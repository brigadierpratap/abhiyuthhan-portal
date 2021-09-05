// import Countdown from "../countdown/countdown.component";
import { withRouter } from "react-router";
import React from "react";
import Sponsors from "../sponsors/sponsors.component";
import Timer from "react-compound-timer";
import moment from "moment";

import RegistrationPopup from "../registration-popup/registration-popup.component";
import Treasurelogo from "../../assets/treasure-logo.jpeg";
import Quizlogo from "../../assets/quiz-logo.png";

import "./registration-left.styles.css";

const RegistrationLeft = (props) => {
  const {
    currentUser,
    eventtime,
    eventstarted,
    eventended,
    event_name,
    path,
    registered,
    description,
    email,
    handleChange,
    name,
    college,
    year,
    handlesubmit,
    togglepopup,
    popup,
  } = props;
  const timez = String(moment(eventtime, "MM DD YYYY, h:mm a") - moment.now());

  return (
    <div>
      <div className="reg-flex-wrap">
        <div className="reg-flex-left">
          <Sponsors />
        </div>
        <div className="reg-flex-right">
          <h1 className="reg-heading_h1" style={{ color: "white" }}>
            {event_name === "Quizopedia" ? "Quiz-o-Quest" : event_name}
          </h1>
          <img
            className="reg-img"
            alt="treasure"
            src={event_name === "Quizopedia" ? Quizlogo : Treasurelogo}
          ></img>

          <div
            style={{
              
              textAlign: "center",
              color: "white",
              justifyContent: "space-around",
              marginTop: "1rem",
            }}
          >
            {timez > 0 ? (
              <Timer  initialTime={timez} direction="backward">
                {() => (
                  <React.Fragment>
                    <div className="row justify-content-center mb-2">
                      <div className="col shadow-lg rounded rounded bg-danger border-2 mx-1 py-2" style={{textAlign:"center",maxWidth:"max-content"}}><h5 className="my-auto"><Timer.Days /></h5><p className="my-auto">Days</p></div>
                      <div className="col shadow-lg rounded rounded bg-danger border-2 mx-1 py-2" style={{textAlign:"center",maxWidth:"max-content"}}><h5 className="my-auto"><Timer.Hours /></h5><p className="my-auto">Hours</p></div>
                      <div className="col shadow-lg rounded rounded bg-danger border-2 mx-1 py-2" style={{textAlign:"center",maxWidth:"max-content"}}><h5 className="my-auto"><Timer.Minutes /></h5><p className="my-auto">Mins</p></div>
                      <div className="col shadow-lg rounded rounded bg-danger border-2 mx-1 py-2" style={{textAlign:"center",maxWidth:"max-content"}}><h5 className="my-auto"><Timer.Seconds /></h5><p className="my-auto">Secs</p></div>
                      
                      
                    </div>
                    
                  </React.Fragment>
                )}
              </Timer>
            ) : (
              ""
            )}

            {/* <Countdown className="countdown" timeTillDate={eventtime} timeFormat="MM DD YYYY, h:mm a" /> */}

            {registered === true ? (
              eventstarted === true ? (
                <button
                  className="reg-start-btn"
                  onClick={togglepopup}
                >{`Join the event`}</button>
              ) : (
                <button
                  className="reg-start-btn"
                  style={{ cursor: "default" }}
                  disabled={true}
                >{`Event not started`}</button>
              )
            ) : (
              <button
                className="reg-start-btn"
                style={{ cursor: "default", background: "red" }}
                disabled={true}
              >
                {`Please register to the event `}&#8681;
              </button>
            )}
          </div>
          {registered === false ? (
            <div style={{ color: "white" }}>
              <form>
                <label
                  style={{ color: "white" }}
                  htmlFor="temail"
                  className="reg-label"
                >
                  Email id
                </label>
                <input
                  style={{ color: "white" }}
                  className="reg-input"
                  type="email"
                  disabled={true}
                  id="temail"
                  value={email}
                  name="email"
                  placeholder=""
                />
                <label
                  style={{ color: "white" }}
                  htmlFor="fname"
                  className="reg-label"
                >
                  Name
                </label>
                <input
                  style={{ color: "white" }}
                  className="reg-input"
                  type="text"
                  required
                  id="name"
                  name="name"
                  onChange={handleChange}
                  value={name}
                  placeholder="Your Name.."
                />
                <label
                  style={{ color: "white" }}
                  htmlFor="year"
                  className="reg-label"
                >
                  Enter Year
                </label>
                <input
                  style={{ color: "white" }}
                  className="reg-input"
                  type="text"
                  required
                  id="year"
                  name="year"
                  onChange={handleChange}
                  value={year}
                  placeholder="Enter your Year.."
                />
                <label
                  style={{ color: "white" }}
                  htmlFor="cname"
                  className="reg-label"
                >
                  College Name
                </label>
                <input
                  style={{ color: "white" }}
                  className="reg-input"
                  type="text"
                  required
                  id="cname"
                  name="college"
                  onChange={handleChange}
                  value={college}
                  placeholder="Enter your college.."
                />
                <input
                  style={{ color: "white" }}
                  className="reg-submit-btn"
                  id="dtd-btn"
                  onClick={handlesubmit}
                  type="submit"
                  value="submit"
                />
              </form>
              {/* <button className="registration__register-button" onClick={onregister}>{`Register to the Event`}</button> */}
            </div>
          ) : (
            <div>
              <form>
                <label
                  style={{ color: "white" }}
                  htmlFor="temail"
                  className="reg-label"
                >
                  Email id
                </label>
                <input
                  style={{ color: "white" }}
                  className="reg-input"
                  type="email"
                  disabled={true}
                  id="temail"
                  value={currentUser.email}
                  name="email"
                  placeholder=""
                />
                <label
                  style={{ color: "white" }}
                  htmlFor="fname"
                  className="reg-label"
                >
                  Name
                </label>
                <input
                  style={{ color: "white" }}
                  className="reg-input"
                  type="text"
                  required
                  id="name"
                  disabled={true}
                  name="name"
                  value={name}
                  placeholder="Your Name.."
                />
                <label
                  style={{ color: "white" }}
                  htmlFor="year"
                  className="reg-label"
                >
                  Enter Year
                </label>
                <input
                  style={{ color: "white" }}
                  className="reg-input"
                  type="text"
                  required
                  id="year"
                  name="year"
                  disabled={true}
                  value={year}
                  placeholder="Enter your Year.."
                />
                <label
                  style={{ color: "white" }}
                  htmlFor="cname"
                  className="reg-label"
                >
                  College Name
                </label>
                <input
                  style={{ color: "white" }}
                  className="reg-input"
                  type="text"
                  required
                  id="cname"
                  name="college"
                  disabled={true}
                  value={college}
                  placeholder="Enter your college.."
                />
                <input
                  style={{ color: "white", cursor: "not-allowed" }}
                  className="reg-submit-btn"
                  id="dtd-btn"
                  disabled={true}
                  type="submit"
                  value="registered"
                />
              </form>
            </div>
          )}
        </div>
      </div>
      <p>
        If you facing any problem regarding registration contact :
        <a href="tel:+918707880499">8707880499</a>(Pawan Singh)
      </p>
      {popup === true ? (
        <RegistrationPopup
          description={description}
          togglepopup={togglepopup}
          path={path}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default withRouter(RegistrationLeft);
