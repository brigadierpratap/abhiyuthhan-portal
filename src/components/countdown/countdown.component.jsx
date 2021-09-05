import React from "react";
import moment from "moment";
import "./countdown.styles.css";

class Countdown extends React.Component {
  state = {
    days: undefined,
    hours: undefined,
    minutes: undefined,
    seconds: undefined,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      const { timeTillDate, timeFormat } = this.props;
      const then = moment(timeTillDate, timeFormat);
      const now = moment();
      const countdown = moment(then - now);
      const days = countdown.format("D");
      const hours = countdown.format("HH");
      const minutes = countdown.format("mm");
      const seconds = countdown.format("ss");

      this.setState({ days, hours, minutes, seconds });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;

    // Mapping the date values to radius values

    if (!seconds) {
      return null;
    }

    return (
      <div className="countdown-wrapper">
        <h1 className="countdown-h1">Event will start in</h1>
        <div className="countdown-collection">
          {days && (
            <div className="countdown-item">
              <span style={{ fontSize: "15px" }}>{days}d : </span>
            </div>
          )}
          {hours && (
            <div className="countdown-item">
              <span style={{ fontSize: "15px" }}>{hours}h : </span>
            </div>
          )}
          {minutes && (
            <div className="countdown-item">
              <span style={{ fontSize: "15px" }}>{minutes}m : </span>
            </div>
          )}
          {seconds && (
            <div className="countdown-item">
              <span style={{ fontSize: "15px" }}>{seconds}s </span>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Countdown;
