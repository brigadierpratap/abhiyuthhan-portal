import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { Howl, Howler } from "howler";
//import demo from "../../assets/demo.jpg";
class Question extends Component {
  constructor(props) {
    super(props);

    this.state = {
      select: "",
      innerWidth: window.innerWidth,
      counter: localStorage.getItem(`${this.props.questionnum}`)
        ? localStorage.getItem(`${this.props.questionnum}`)
        : 60,
    };
    const interval = 0;
  }
  soundPlay = (src) => {
    const sound = new Howl({
      src,
      html5: true,
      autoplay: true,
      volume: 1.0,
      pool: 10,
    });
    sound.play();
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.counter > 0) {
        this.setState({ counter: this.state.counter - 1 });
        //this.props.passCounter(this.state.counter);
      } else if (this.state.counter === 0) {
        if (this.props.questionnum === this.props.qmax) {
          this.props.handleTime();
        } else {
          localStorage.setItem(`${this.props.questionnum}`, this.state.counter);
          this.props.nextQuestion(0);
        }
      }
    }, 1000);
    if (this.state.counter > 0) {
      setTimeout(
        () => this.soundPlay(`/assets/mp3/${this.props.question.sound}`),
        2000
      );
    }
    const questionnum = this.props.questionnum;
    if (sessionStorage.getItem(`${questionnum}`))
      document.getElementById(
        sessionStorage.getItem(`${questionnum}`)
      ).checked = true;
  }

  componentWillUnmount() {
    Howler.stop();
    clearInterval(this.interval);
  }

  handlechange = (event) => {
    const email = this.props.currentUser.email;
    const questionnum = this.props.questionnum;
    const { id, name, value } = event.target;
    sessionStorage.setItem(`${questionnum}`, String(id));
    fetch("https://eventnitrob.herokuapp.com/quizopedia/submit-question2", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        questionnum: questionnum,
        answer: value,
      }),
    })
      .then((res) => {
        if (res.status === 500) throw res.statusText;
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { question, questionnum } = this.props;
    const styles = {
      maxWidth: this.state.innerWidth < 1024 ? "" : "min-content",
      maxHeight: "50vh",
      margin: "auto",
    };
    return (
      <>
        <Row>
          <img
            src={process.env.PUBLIC_URL + `/assets/images/${question.pic}`}
            alt={`${question.pic}`}
            style={styles}
          />
        </Row>
        <div>Time left : {this.state.counter}</div>
        <Row className="question-title">
          <Col sm="12" style={{ lineHeight: "1.5" }}>
            <span>Q{questionnum}. </span>
            <span>{question.question}</span>
          </Col>
        </Row>
        {/* </div> */}
        <form action="" className="options">
          <Row>
            <Col xs="12">
              <input
                id="option1"
                type="radio"
                name="select"
                onClick={this.handlechange}
                value={question.option1}
              ></input>
              <span>1.</span>
              <label for="option1">{question.option1}</label>
              <br />
            </Col>
            <Col xs="12">
              <input
                id="option2"
                type="radio"
                name="select"
                onClick={this.handlechange}
                value={question.option2}
              ></input>
              <span>2.</span>
              <label for="option2">{question.option2}</label>
              <br />
            </Col>
          </Row>

          <Row>
            <Col xs="12">
              <input
                id="option3"
                type="radio"
                name="select"
                onClick={this.handlechange}
                value={question.option3}
              ></input>
              <span>3.</span>
              <label for="option3">{question.option3}</label>
              <br />
            </Col>
            <Col xs="12">
              <input
                id="option4"
                type="radio"
                name="select"
                onClick={this.handlechange}
                value={question.option4}
              ></input>
              <span>4.</span>
              <label for="option4">{question.option4}</label>
              <br />
            </Col>
          </Row>
        </form>
      </>
    );
  }
}

export default Question;
