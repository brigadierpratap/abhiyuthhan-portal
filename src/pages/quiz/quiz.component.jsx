import { Route} from "react-router-dom";
import Ended from "../../components/assessories/Ended.js";
import NotStarted from "../../components/assessories/NotStarted.js";
import Unauthorised from "../../components/assessories/Unauthorised.js";
import QuizCard from "../../components/cards/quiz-card.js";
import Quiz1 from "../../pages/quiz/Quiz1.jsx";
import "./quiz.styles.css";
import Quiz2 from "./Quiz2.js";

export default function Quiz({
  registered,
  eventended,
  eventstarted,
  eventendtime,
  currentUser,
  qmax,
  registered2,
  eventended2,
  eventstarted2,
  eventendtime2,
  qmax2,
}) {
  return (
    <div className="quiz-page-main">
      
      <Route exact path="/Quiz/live/">
        <section> <h3>Quiz O Quest</h3><hr style={{width:"50%",backgroundColor:"white",margin:"auto auto"}} /></section>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <QuizCard
            eventstarted={eventstarted}
            eventended={eventended}
            name="Quiz Round 1"
            path="/Quiz/live/quiz1"
          />
          <QuizCard
            eventstarted={eventstarted2}
            eventended={eventended2}
            name="Quiz Round 2"
            path="/Quiz/live/audio-visual"
          />
        </div>
      </Route>
      <Route exact path="/Quiz/live/audio-visual">
      {registered2 === false ? (
          <Unauthorised />
        ) : eventstarted2 === true && eventended2 === false ? (
          <Quiz2
            eventended={eventended2}
            qmax={qmax2}
            eventendtime={eventendtime2}
            currentUser={currentUser}
          />
        ) : eventstarted2 === false ? (
          <NotStarted />
        ) : (
          <Ended />
        )}
        
      </Route>
      <Route exact path="/Quiz/live/quiz1">
        {registered === false ? (
          <Unauthorised />
        ) : eventstarted === true && eventended === false ? (
          <Quiz1
            eventended={eventended}
            qmax={qmax}
            eventendtime={eventendtime}
            currentUser={currentUser}
          />
        ) : eventstarted === false ? (
          <NotStarted/>
        ) : (
          <Ended />
        )}
      </Route>
    </div>
  );
}
