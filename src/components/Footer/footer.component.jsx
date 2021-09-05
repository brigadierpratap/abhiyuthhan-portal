import "./footer.style.css";
import facebook_icon from "../../assets/facebook_icon.png";
import gmail from "../../assets/gmail.png";
import instagram_icon from "../../assets/instagram_icon.png";
// import github from '../../assets/github.png';
import linkin_logo from "../../assets/linkin_logo.png";
function Footer() {
  return (
    <div className="homepage-footer" id="homepage-footer">
      <div className="footer2">
        <p className="ff4">
          Copyright &copy; 2020 Robotics Club NITP {new Date().getFullYear()}
        </p>
        <div className="social-footer">
          <a href="https://www.facebook.com/robonitp/ " target="_blank" rel="noreferrer">
            <img
              src={facebook_icon}
              alt="fb"
              className="footer-icon facebook"
            />
          </a>
          <a href="https://www.linkedin.com/company/robotics-club-nit-patna" target="_blank" rel="noreferrer">
            <img
              src={linkin_logo}
              alt="insta"
              className="footer-icon linkin"
            />
          </a>
          <a href="mailto:roboticsclub@nitp.ac.in" target="_blank" rel="noreferrer">
            <img
              src={gmail}
              alt="tweet"
              className="footer-icon twitter"
            />
          </a>
          <a href="https://instagram.com/robotics_club_nitp?igshid=1wisbtogmqkg8" target="_blank" rel="noreferrer">
            <img
              src={instagram_icon}
              alt="insta"
              className="footer-icon instagram"
            />
          </a>

        </div>
      </div>
    </div>
  );
}

export default Footer;

/*
import React from 'react';
import './footer.style.css';

const Footer =()=>{
        return(
        <div className="footer" style={{width: "100%"}}>
          <hr className="footer-hr"/>
            <p style={{textAlign:`center`,paddingBottom:"10px"}}>&copy; Robotics Club NITP {new Date().getFullYear()}</p>
          </div>
        )
}

export default Footer;
*/
