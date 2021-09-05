import React from "react";
import $ from "jquery";
import "./loop-of-code.styles.css";
import Sponsors from "../sponsors/sponsors.component";
// import { Link } from "react-router-dom";

class Loopofcode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.currentUser.email,
      name: "",
      year: "",
      contact: "",
      college: "",
      registered: 101,
    };
  }

  componentDidMount() {
    $.post(
      "https://eventnitrob.herokuapp.com/code/check-register",
      { email: this.state.email },
      (data) => {
        if (data.status === "success") {
          if (data.message === "registered") {
            this.setState({
              registered: true,
              email: data.curruser.email,
              contact: data.curruser.contact,
              name: data.curruser.name,
              year: data.curruser.year,
              college: data.curruser.college,
            });
          } else this.setState({ registered: false });
        } else {
          console.log(data);
        }
      }
    );
  }

  handlesubmit = (e) => {
    e.preventDefault();
    if (
      this.state.email === "" ||
      this.state.name === "" ||
      this.state.contact === "" ||
      this.state.year === "" ||
      this.state.college === "" ||
      this.state.contact.length !== 10
    ) {
      alert("Please fill the form correctly");
    } else {
      document.getElementById("dtd-btn").disabled = true;
      $.post(
        "https://eventnitrob.herokuapp.com/code/do-register",
        {
          email: this.state.email,
          name: this.state.name,
          contact: this.state.contact,
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
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        {this.state.registered === 101 ? (
          "Loading..."
        ) : (
          <div className="dtd-flex_wrap">
            <div className="dtd-container-top">
              <Sponsors />
            </div>
            <div
              style={{ color: "white", textAlign: "left" }}
              className="dtd-container"
            >
              <img
                className="dtd-image-tinker"
                src="https://images.prismic.io/tkv3/cdf85180f382c72998c7664e4fe7ea456fe9ed9c_hero-home-drkr.jpg?auto=compress"
                alt="prism"
              ></img>
              {this.state.registered === true ? (
                <form>
                  <h4
                    style={{ textAlign: "center" }}
                    className="dtd-heading_h1"
                  >
                    Loop of code
                  </h4>
                  <p className="dtd-heading_p">registered</p>
                  
                  <br />
                  <br />
                  <label for="temail" className="dtd-label">
                    Email id
                  </label>
                  <input
                    className="dtd-input"
                    type="email"
                    id="temail"
                    value={this.state.email}
                    name="email"
                    placeholder=""
                    disabled={true}
                  />
                  <label for="fname" className="dtd-label">
                    Name
                  </label>
                  <input
                    className="dtd-input"
                    type="text"
                    id="fname"
                    name="name"
                    disabled={true}
                    value={this.state.name}
                    placeholder="First Member's Name.."
                  />
                  <label for="lname" className="dtd-label">
                    Contact number
                  </label>
                  <input
                    className="dtd-input"
                    type="text"
                    id="lname"
                    name="contact"
                    disabled={true}
                    value={this.state.contact}
                    placeholder="Contact number"
                  />
                  <label for="year" className="dtd-label">
                    Enter Year
                  </label>
                  <input
                    className="dtd-input"
                    type="text"
                    id="year"
                    name="year"
                    value={this.state.year}
                    disabled={true}
                    placeholder="Enter your Year.."
                  />
                  <label for="cname" className="dtd-label">
                    College Name
                  </label>
                  <input
                    className="dtd-input"
                    type="text"
                    id="cname"
                    name="college"
                    value={this.state.college}
                    disabled={true}
                    placeholder="Enter your college.."
                  />
                  <input
                    className="dtd-submit-btn"
                    disabled={true}
                    style={{ cursor: "not-allowed" }}
                    type="submit"
                    value="registered"
                  />
                </form>
              ) : (
                <form>
                  <h4
                    style={{ textAlign: "center" }}
                    className="dtd-heading_h1"
                  >
                    Loop of code
                  </h4>

                  <label for="temail" className="dtd-label">
                    Email id
                  </label>
                  <input
                    className="dtd-input"
                    type="email"
                    id="temail"
                    value={this.state.email}
                    name="email"
                    placeholder=""
                    disabled={true}
                  />
                  <label for="semail" className="dtd-label">
                    Enter your name
                  </label>
                  <input
                    className="dtd-input"
                    style={{ backgroundColor: "transparent" }}
                    type="text"
                    required
                    id="fname"
                    name="name"
                    onChange={this.handleChange}
                    value={this.state.name}
                    placeholder="Enter your Name.."
                  />
                  <label for="lname" className="dtd-label">
                    Contact number
                  </label>
                  <input
                    className="dtd-input"
                    style={{ backgroundColor: "transparent" }}
                    type="number"
                    maxLength="10"
                    minLength="10"
                    required
                    id="lname"
                    name="contact"
                    onChange={this.handleChange}
                    value={this.state.contact}
                    placeholder="Contact number.."
                  />
                  <label for="year" className="dtd-label">
                    Enter Year
                  </label>
                  <input
                    className="dtd-input"
                    style={{ backgroundColor: "transparent" }}
                    type="text"
                    required
                    id="year"
                    name="year"
                    onChange={this.handleChange}
                    value={this.state.year}
                    placeholder="Enter your Year.."
                  />
                  <label for="cname" className="dtd-label">
                    College Name
                  </label>
                  <input
                    className="dtd-input"
                    type="text"
                    style={{ backgroundColor: "transparent" }}
                    required
                    id="cname"
                    name="college"
                    onChange={this.handleChange}
                    value={this.state.college}
                    placeholder="Enter your college.."
                  />
                  <input
                    className="dtd-submit-btn"
                    id="dtd-btn"
                    onClick={this.handlesubmit}
                    type="submit"
                    value="submit"
                  />
                </form>
              )}
            </div>
          </div>
        )}
        <p>
          If you facing any problem regarding registration contact :
          7250720774(Aman Bharti)
        </p>
      </div>
    );
  }
}

export default Loopofcode;
