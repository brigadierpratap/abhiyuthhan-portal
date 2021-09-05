import React from "react";
import { Row, Col } from "reactstrap";
import "./Quesopedia-round.styles.css";

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      select: "",
    };
  }

  componentDidMount() {
    const questionnum = this.props.questionnum;
    if (sessionStorage.getItem(`${questionnum}`))
      document.getElementById(
        sessionStorage.getItem(`${questionnum}`)
      ).checked = true;
  }

  handlechange = (event) => {
    const email = this.props.currentUser.email;
    const questionnum = this.props.questionnum;
    const { id, name, value } = event.target;
    sessionStorage.setItem(`${questionnum}`, String(id));
    fetch("https://eventnitrob.herokuapp.com/quizopedia/submit-question", {
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
    const {
      eventended,
      eventendtime,
      currentUser,
      question,
      questionnum,
    } = this.props;
    return (
      <div>
        {/* <div */}
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
          {/* <input id="option1" type="radio" name="select" onClick={this.handlechange} value={question.option1}></input>
                    <span>1.</span>
                    <label for="option1">{question.option1}</label><br/> */}
          {/* <input id="option2" type="radio" name="select" onClick={this.handlechange} value={question.option2}></input>
                    <span>2.</span>
                    <label for="option2">{question.option2}</label><br/> */}
          {/* <input id="option3" type="radio" name="select" onClick={this.handlechange} value={question.option3}></input>
                    <span>3.</span>
                    <label for="option3">{question.option3}</label><br/> */}
          {/* <input id="option4" type="radio" name="select" onClick={this.handlechange} value={question.option4}></input>
                    <span>4.</span>
                    <label for="option4">{question.option4}</label><br/> */}
        </form>
      </div>
    );
  }
}

export default Question;
