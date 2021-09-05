import React from "react";
import { Route, Switch } from "react-router-dom";
import "./registration.styles.css";
import $ from "jquery";

import RegistrationLeft from "../registration-left/registration-left.component";
import Treasure from "../../pages/treasurehunt/treasurehunt.component";
import Quiz from "../../pages/quiz/quiz.component";
import Loading from "../assessories/Loading";
import NotStarted from "../assessories/NotStarted";
import Ended from "../assessories/Ended";

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      score: 0,
      eventtime: "",
      eventendtime: "",
      registered: 101,
      eventstarted: false,
      eventended: false,
      email: this.props.currentUser.email,
      name: "",
      year: "",
      college: "",
      qmax: "",
      popup: false,
      registered2:101,
      eventtime2: "",
      description2: "",
      qmax2: "",
      eventstarted2: "",
      eventendtime2: "",
      eventended2: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  togglepopup = () => {
    this.setState({ popup: !this.state.popup });
  };


  handlesubmit = (e) => {
    const { eventkey } = this.props;
    if (
      this.state.email === "" ||
      this.state.name === "" ||
      this.state.year === "" ||
      this.state.college === ""
    ) {
      alert("Please fill the form completely");
    } else {
      document.getElementById("dtd-btn").disabled = true;
      $.post(
        `https://eventnitrob.herokuapp.com/${eventkey}/do-register`,
        {
          email: this.state.email,
          name: this.state.name,
          year: this.state.year,
          college: this.state.college,
        },
        (data) => {
          if (data.status === "success") {
            alert("registration success!");
            this.componentDidMount();
            document.getElementById("dtd-btn").disabled = false;
          } else {
            alert("please try again later");
            document.getElementById("dtd-btn").disabled = false;
          }
        }
      );
      e.preventDefault();
    }
  };

 componentDidMount() {
    const { event_name } = this.props;
    const { eventkey, currentUser } = this.props;
    
    $.post(
      "https://eventnitrob.herokuapp.com/event/getevent",
      { eventname: event_name },
      async (el) => {
        console.log('check',el);
        await this.setState({
          eventtime: el.message.eventdate,
          description: el.message.description,
          qmax: el.message.qmax,
          eventstarted: el.message.eventstarted,
          eventendtime: el.message.eventendtime,
          eventended: el.message.eventended,
        });
      }
    ).then(async () => {
      await $.post(
        `https://eventnitrob.herokuapp.com/${eventkey}/check-register`,
        { email: currentUser.email },
        async (data) => {
          if (data.status === "success") {
            if (data.message === "registered") {
              this.setState({
                registered: true,
                name: data.curruser.name,
                year: data.curruser.year,
                college: data.curruser.college,
              });
            } else this.setState({ registered: false });
          }
        }
      );
    });
//Round 2 Calls
    $.post(
      "https://eventnitrob.herokuapp.com/event/getevent",
      { eventname: "Quiz2" },
      async (el) => {
        await this.setState({
          eventtime2: el.message.eventdate,
          description2: el.message.description,
          qmax2: el.message.qmax,
          eventstarted2: el.message.eventstarted,
          eventendtime2: el.message.eventendtime,
          eventended2: el.message.eventended,
        });
      }
    ).then(async () => {
      await $.post(
        "https://eventnitrob.herokuapp.com/quizopedia/check-register2",
        { email: currentUser.email },
        async (data) => {
          if (data.status === "success") {
            if (data.message === "registered") {
              this.setState(
                {registered2: true,}
              );
            }else{
              this.setState(prev=>({registered2:false}))
            }
          }
        }
      );
    });
  }

  render = () => {
    
    const { path, event_name, currentUser } = this.props;
    return (
      <Switch>
        <Route exact path={`${path}/`}>
          <div id="registration-content">
            {this.state.registered === 101 ? (
              <Loading/>
            ) : (
              <RegistrationLeft
                currentUser={currentUser}
                name={this.state.name}
                email={this.state.email}
                college={this.state.college}
                year={this.state.year}
                registered={this.state.registered}
                eventtime={this.state.eventtime}
                eventstarted={this.state.eventstarted}
                eventended={this.state.eventended}
                path={path}
                description={this.state.description}
                event_name={event_name}
                handleChange={this.handleChange}
                handlesubmit={this.handlesubmit}
                togglepopup={this.togglepopup}
                popup={this.state.popup}
              />
            )}
          </div>
        </Route>
        <Route exact path={`/Kasa-parabel/live`}>
          {this.state.eventended === false &&
          this.state.eventstarted === true ? (
            <Treasure currentUser={currentUser} />
          ) : this.state.eventstarted === false ? (
            <NotStarted/>
          ) : (
            <Ended />
          )}
        </Route>
        <Route path={"/Quiz/live"}>
        {this.state.registered2===101?(<Loading/>):<Quiz
            registered={this.state.registered}
            qmax={this.state.qmax}
            eventstarted={this.state.eventstarted}
            eventended={this.state.eventended}
            eventendtime={this.state.eventendtime}
            currentUser={currentUser}
            registered2={this.state.registered2}
            qmax2={this.state.qmax2}
            eventstarted2={this.state.eventstarted2}
            eventended2={this.state.eventended2}
            eventendtime2={this.state.eventendtime2}
          />}
        </Route>
      </Switch>
    );
  };
}

export default Registration;
