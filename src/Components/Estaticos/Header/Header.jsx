import React from "react";
import "./Header.css";
import download from "../../Files/CV.pdf";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <React.Fragment>
      <div className="container">
        <Link to="/">
          <div className="button">
            <i className="fa fa-play" aria-hidden="true"></i>
            <div className="text">&nbsp;&nbsp;&nbsp;Start</div>
          </div>
        </Link>
        <Link to="/About">
          <div className="button">
            <i className="fa fa-user" aria-hidden="true"></i>
            <div className="text">&nbsp;&nbsp;About me</div>
          </div>
        </Link>
        <a href={download} download="CV">
          <div className="button">
            <i className="fa fa-download" aria-hidden="true"></i>
            <div className="text">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Download CV
            </div>
          </div>
        </a>
        <div className="button">
          <i className="fa fa-envelope" aria-hidden="true"></i>
          <div className="text">&nbsp;&nbsp;&nbsp;&nbsp;Contact</div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Header;
