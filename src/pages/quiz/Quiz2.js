import React, { Component } from "react";
import { Container, Button, Row, Col } from "reactstrap";
import Question from "../../components/QuizoPediaRound2/Question";
import moment from "moment";
import Ended from "../../components/assessories/Ended";
import TimeUp from "../../components/assessories/TimeUp";
import Loading from "../../components/assessories/Loading";
import { withRouter } from "react-router-dom";
import { map } from "jquery";

class Quiz2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionnum: 1,
      question: "",
      qmax: Number(this.props.qmax),
      timez: 0,
      submitted: 101,
      timeup: false,
    };
  }

  handleTime = () => {
    this.setState({ timeup: true });
    //localStorage.clear();
    ////console.log("submit called");
    this.handlesubmit(false);
  };

  getquestion = () => {
    fetch("https://eventnitrob.herokuapp.com/quizopedia/get-question2", {
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

  nextquestion = async (counter) => {
    if (counter > 0) {
      await localStorage.setItem(`${this.state.questionnum}`, 0);
    }
    await this.setState({
      questionnum:
        this.state.questionnum < this.props.qmax
          ? this.state.questionnum + 1
          : this.state.questionnum,
    });
    await this.getquestion();
  };

  handlesubmit = (isClicked) => {
    const { history } = this.props;

    const { currentUser } = this.props;
    fetch("https://eventnitrob.herokuapp.com/quizopedia/submit-test2", {
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
        this.setState({ timeup: true });
        sessionStorage.clear();
        localStorage.clear();
      })
      .catch((err) => console.log(err));
  };

  async componentDidMount() {
    while (localStorage.getItem(`${this.state.questionnum}`)) {
      await this.nextquestion();
    }
    const { eventended, eventendtime, currentUser } = this.props;
    await fetch("https://eventnitrob.herokuapp.com/quizopedia/check-submit2", {
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
            submitted: false,
          });
          this.getquestion();
        }
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { eventended, eventendtime, currentUser } = this.props;
    return (
      <>
        {this.state.submitted === 101 ? (
          <Loading />
        ) : eventended === true || this.state.submitted || this.state.timeup ? (
          <Ended />
        ) : (
          <>
            <Container
              className="quiz1-container"
              style={{ transform: "translateY(5%)" }}
            >
              <Row>
                <Col sm="12">
                  <Question
                    key={this.state.questionnum}
                    questionnum={this.state.questionnum}
                    question={this.state.question}
                    currentUser={this.props.currentUser}
                    eventended={eventended}
                    eventendtime={eventendtime}
                    nextQuestion={this.nextquestion}
                    qmax={this.state.qmax}
                    handleTime={this.handleTime}
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
                      this.state.questionnum === Number(this.state.qmax)
                        ? true
                        : false
                    }
                    onClick={() => this.nextquestion(1)}
                  >
                    Next Question
                  </Button>
                </Col>
              </Row>
              <Button
                className="submit-button"
                onClick={() => this.handlesubmit(true)}
              >
                Submit the test
              </Button>
            </Container>
          </>
        )}
      </>
    );
  }
}

export default withRouter(Quiz2);
