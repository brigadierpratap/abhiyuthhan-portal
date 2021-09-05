import React from "react";
import { withRouter } from "react-router";
import Timer from "react-compound-timer";
import moment from "moment";
import { Container, Button, Row, Col } from "reactstrap";
import "./quiz.styles.css";

// import Countdown from '../../components/countdown/countdown.component';
import Question from "../../components/Quesopedia-round1/Quesopedia-round1.component";
import Ended from "../../components/assessories/Ended";

class Quiz1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionnum: 1,
      question: "",
      qmax: Number(this.props.qmax),
      timez: 0,
      submitted: false,
    };
  }

  getquestion = () => {
    fetch("https://eventnitrob.herokuapp.com/quizopedia/get-question", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        questionnum: Number(this.state.questionnum),
      }),
    })
      .then((res) => {
        if (res.status === 500) throw res.statusText;
        return res.json();
      })
      .then((data) => {
        this.setState({ question: data.message });
      })
      .catch((err) => console.log(err));
  };

  async componentDidMount() {
    // eslint-disable-next-line no-unused-vars
    const { eventended, eventendtime, currentUser } = this.props;

    await fetch("https://eventnitrob.herokuapp.com/quizopedia/check-submit", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: currentUser.email,
      }),
    })
      .then((res) => {
        if (res.status === 500) throw res.statusText;
        return res.json();
      })
      .then((data) => {
        if (data.message === true) {
          this.setState({ submitted: true });
        } else {
          this.setState({
            timez:
              (eventendtime, "MM DD YYYY, h:mm a") - moment.now() > 0
                ? String(
                    moment(eventendtime, "MM DD YYYY, h:mm a") - moment.now()
                  )
                : 0,
          });
          this.getquestion();
        }
      })
      .catch((err) => console.log(err));
  }

  previousquestion = async () => {
    await this.setState({ questionnum: this.state.questionnum - 1 });
    await this.getquestion();
  };

  nextquestion = async () => {
    await this.setState({
      questionnum:
        this.state.questionnum < this.props.qmax
          ? this.state.questionnum + 1
          : this.state.questionnum,
    });
    await this.getquestion();
  };

  handlesubmit = () => {
    const { history } = this.props;

    const { currentUser } = this.props;
    fetch("https://eventnitrob.herokuapp.com/quizopedia/submit-test", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: currentUser.email,
      }),
    })
      .then((res) => {
        if (res.status === 500) throw res.statusText;
        return res.json();
      })
      .then((data) => {
        alert("test submitted successfully");
        sessionStorage.clear();
        history.push("/");
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { eventended, eventendtime, currentUser } = this.props;
    return (
      <div>
        {this.state.timez > 0 ? (
          <Timer initialTime={this.state.timez} direction="backward">
            {() => (
              <React.Fragment>
                <div>
                  <Timer.Minutes /> minutes
                  <Timer.Seconds /> seconds
                </div>
                <br />
              </React.Fragment>
            )}
          </Timer>
        ) : (
          ""
        )}

        {eventended === true || this.state.submitted === true ? (
          <Ended />
        ) : (
          <div>
            <Container className="quiz1-container">
              <Row>
                <Col sm="12">
                  <Question
                    key={this.state.questionnum}
                    eventended={eventended}
                    eventendtime={eventendtime}
                    currentUser={currentUser}
                    questionnum={this.state.questionnum}
                    question={this.state.question}
                  />
                </Col>
              </Row>

              <Row
                style={{
                  justifyContent: "space-between",
                  marginBottom: "2rem",
                }}
              >
                <Col xs="6" style={{ alignItems: "left" }}>
                  <Button
                    className="control-btns"
                    id="prev-btn"
                    disabled={this.state.questionnum === 1 ? true : false}
                    onClick={this.previousquestion}
                  >
                    Previous Question
                  </Button>
                </Col>
                <Col xs="6">
                  <Button
                    className="control-btns"
                    id="next-btn"
                    disabled={
                      this.state.questionnum === Number(this.props.qmax)
                        ? true
                        : false
                    }
                    onClick={this.nextquestion}
                  >
                    Next Question
                  </Button>
                </Col>
              </Row>
              <Button className="submit-button" onClick={this.handlesubmit}>
                Submit the test
              </Button>
            </Container>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Quiz1);
