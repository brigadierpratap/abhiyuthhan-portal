import "./register-card.css";
import demo from "../../assets/demo-event.jpg";
import quizImg from "../../assets/quiz-reg.jpg";
import { Link } from "react-router-dom";

const Card = ({ name, path, eventstarted, eventended }) => {
  const onClick = () => {
    //fetch here
  };
  return (
    <div className="registration-card">
      <img
        className="img-fluid"
        src={
          name === "Quiz Round 1" || name === "Quiz Round 2" ? quizImg : demo
        }
        alt={`${name}`}
      />
      <hr />
      <h2 className="mb-4">{name}</h2>

      {/* <p>count-down</p> */}
      {eventstarted === true && eventended === false ? (
        <Link className="register-btn mb-3" to={path} onClick={onClick}>
          Click to start
        </Link>
      ) : eventstarted === false ? (
        <Link className="register-btn mb-3" to="#" onClick={onClick}>
          Not started
        </Link>
      ) : (
        <Link className="register-btn mb-3" to="#" onClick={onClick}>
          Event Ended
        </Link>
      )}
    </div>
  );
};

export default Card;
