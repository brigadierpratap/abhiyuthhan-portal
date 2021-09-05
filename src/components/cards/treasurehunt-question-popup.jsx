import "./treasurehunt-question-popup.css";
import { Component } from "react";

class PopupCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level_no: this.props.level_no,
      message: this.props.message,
      completed: this.props.completed,
      hint: this.props.hint,
      ans: "",
    };
  }
  onAnswerChange = (event) => {
    this.setState({
      ans: event.target.value,
    });
  };
  onAnswerSubmit = (ans, hint_checked, skipped) => {
    fetch("https://eventnitrob.herokuapp.com/question/treasure_answer_check", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_email: this.props.currentUser.email,
        set_no: this.props.set_no,
        level_no: this.state.level_no,
        ans: ans,
        hint_checked: hint_checked,
        skipped: skipped,
      }),
    })
      .then((res) => {
        if (res.status === 500) throw res.statusText;
        return res.json();
      })
      .then((data) => {
        this.props.setScore();
        this.setState({
          hint: data.hint,
        });
        if (data.correct) {
          if (this.state.level_no < 5)
            this.props.onSetChange(this.props.set_no);
          this.setState({
            message: "you might proceed to the next level", /////////////
            completed: true,
          });
        }
      })
      .catch((err) => alert(err));
  };
  desableFields = () => {};
  render() {
    return (
      <div className="popup">
        <div className="overlay"></div>
        <div className="overlay-content">
          <div className="close-btn" onClick={this.props.togglePopup}>
            &times;
          </div>
          <div>
            <h3 id="treasure-level-name">LEVEL {this.state.level_no}</h3>
            <img id="treasure-que-img" src={this.props.img} onError={(e)=>{e.target.onerror = null; e.target.src="https://12bytes.org/wp-content/uploads/search.jpg"}} alt="treasure" />
            <p style={{ fontSize: "20px" }}>{this.props.question}</p>
            <input
              id="treasure-answer-submit-field"
              type="txt"
              placeholder="Enter here"
              onChange={this.onAnswerChange}
            />
            <input
              id="treasure-answer-submit-btn"
              type="submit"
              value="Submit"
              onClick={() => this.onAnswerSubmit(this.state.ans, false, false)}
            />
            <p style={{ textDecoration: "underline" }}>{this.state.message}</p>
          </div>
          <div id="hint-skip-btns">
            <input
              id="treasure-hint-btn"
              type="submit"
              value="Hint"
              onClick={() => this.onAnswerSubmit("#", true, false)}
            />
            <input
              id="treasure-skip-btn"
              type="submit"
              value="Skip"
              onClick={() => this.onAnswerSubmit("#", false, true)}
            />
          </div>
          <p id="treasure-hint-message">{this.state.hint}</p>
        </div>
      </div>
    );
  }
}

export default PopupCard;
