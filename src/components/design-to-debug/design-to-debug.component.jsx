import React from "react";
import $ from "jquery";
import "./design-to-debug.styles.css";
import Sponsors from "../sponsors/sponsors.component";
import Loading from "../assessories/Loading";

class Designregister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.currentUser.email,
      secondmemberemail: "",
      teamname: "",
      firstmember: "",
      secondmember: "",
      year: "",
      college: "",
      registered: 101,
    };
  }

  componentDidMount() {
    $.post(
      "https://eventnitrob.herokuapp.com/dtd/check-register",
      { email: this.state.email },
      (data) => {
        if (data.status === "success") {
          if (data.message === "registered") {
            this.setState({
              registered: true,
              email: data.curruser.email,
              teamname: data.curruser.teamname,
              firstmember: data.curruser.firstmember,
              secondmember: data.curruser.secondmember,
              year: data.curruser.year,
              college: data.curruser.college,
              secondmemberemail: data.curruser.secondmemberemail,
            });
            // console.log(data.curruser);
          } else this.setState({ registered: false });
        } else {
          console.log(data);
        }
      }
    );
  }

  handlesubmit = (e) => {
    if (
      this.state.email === "" ||
      this.state.teamname === "" ||
      this.state.firstmember === "" ||
      this.state.secondmember === "" ||
      this.state.secondmemberemail === "" ||
      this.state.year === "" ||
      this.state.college === ""
    ) {
      alert("Please fill the form completely");
    } else {
      document.getElementById("dtd-btn").disabled = true;
      $.post(
        "https://eventnitrob.herokuapp.com/dtd/do-register",
        {
          email: this.state.email,
          teamname: this.state.teamname,
          firstmember: this.state.firstmember,
          secondmember: this.state.secondmember,
          secondmemberemail: this.state.secondmemberemail,
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

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        {this.state.registered === 101 ? (
          <Loading />
        ) : (


          
          <div className="dtd-flex_wrap">
            

<div>
    <div className="abcd">
      <div className="question">
          <h2>Questions-Round2</h2>
          <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                window.location.href='https://drive.google.com/file/d/1Wm6uiAZDvzjDu1M02fuVC1H5IrUrnRES/view?usp=sharing';
                }}
          >Click here</button>
      </div>

      <div className="submit">
          <h2>Submit</h2>
          <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                window.location.href=' https://forms.gle/PzyZ4RdcMa4fUQtS8';
                }}
          > Click here</button>
      </div>
    </div>
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
                    Design to Debug
                  </h4>
                  <p className="dtd-heading_p">registered</p>
                  <label for="temail" className="dtd-label">
                    Team leader's Email id
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
                    Second Member's Email id
                  </label>
                  <input
                    className="dtd-input"
                    type="email"
                    id="semail"
                    value={this.state.secondmemberemail}
                    name="email"
                    placeholder="Enter email"
                    disabled={true}
                  />
                  <label for="tname" className="dtd-label">
                    Team Name
                  </label>
                  <input
                    className="dtd-input"
                    type="text"
                    id="tname"
                    name="teamname"
                    disabled={true}
                    value={this.state.teamname}
                    placeholder="Team Name.."
                  />
                  <label for="fname" className="dtd-label">
                    First Member's Name
                  </label>
                  <input
                    className="dtd-input"
                    type="text"
                    id="fname"
                    name="firstmember"
                    disabled={true}
                    value={this.state.firstmember}
                    placeholder="First Member's Name.."
                  />
                  <label for="lname" className="dtd-label">
                    Second Member's Name
                  </label>
                  <input
                    className="dtd-input"
                    type="text"
                    id="lname"
                    name="secondmember"
                    disabled={true}
                    value={this.state.secondmember}
                    placeholder="Second Member's Name.."
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
                    Design to Debug
                  </h4>
                  <label for="temail" className="dtd-label">
                    Team leader's Email id
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
                    Second Member's Email id
                  </label>
                  <input
                    className="dtd-input"
                    type="email"
                    required
                    id="semail"
                    value={this.state.secondmemberemail}
                    onChange={this.handleChange}
                    name="secondmemberemail"
                    placeholder="Enter email"
                  />
                  <label for="tname" className="dtd-label">
                    Team Name
                  </label>
                  <input
                    className="dtd-input"
                    type="text"
                    required
                    id="tname"
                    name="teamname"
                    onChange={this.handleChange}
                    value={this.state.teamname}
                    placeholder="Team Name.."
                  />
                  <label for="fname" className="dtd-label">
                    First Member's Name
                  </label>
                  <input
                    className="dtd-input"
                    type="text"
                    required
                    id="fname"
                    name="firstmember"
                    onChange={this.handleChange}
                    value={this.state.firstmember}
                    placeholder="First Member's Name.."
                  />
                  <label for="lname" className="dtd-label">
                    Second Member's Name
                  </label>
                  <input
                    className="dtd-input"
                    type="text"
                    required
                    id="lname"
                    name="secondmember"
                    onChange={this.handleChange}
                    value={this.state.secondmember}
                    placeholder="Second Member's Name.."
                  />
                  <label for="year" className="dtd-label">
                    Enter Year
                  </label>
                  <input
                    className="dtd-input"
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
          <a href="tel:7250720774">7250720774</a>(Aman Bharti)
        </p>
      </div>
    );
  }
}

export default Designregister;
