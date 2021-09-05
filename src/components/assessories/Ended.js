import React, { Component } from "react";
import meme from "../../assets/mp3/meme.mp3";
import "./assStyle.css";
import { Howl, Howler } from "howler";
class Ended extends Component {
  soundPlay = (src) => {
    const sound = new Howl({
      src,
      html5: true,
      autoplay: true,
      volume: 1.0,
      pool: 15,
    });
    sound.play();
  };
  componentDidMount() {
    this.soundPlay(meme);
  }

  render() {
    return (
      <div className="box-container">
        <div className="m-box">
          <img
            style={{
              width: "100%",
              height: "inherit",
              paddingTop: "0.5rem",
              paddingBottom: "0.5rem",

              paddingRight: "0.22rem",
              paddingLeft: "0.22rem",
              borderRadius: "7%",
            }}
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FwgbidRYab4g%2Fmaxresdefault.jpg&f=1&nofb=1"
          ></img>
        </div>
      </div>
    );
  }
}

export default Ended;
