import React from "react";
import './Header.css'
import download from '../../Files/CV.pdf'
// import Logo from '../../../img/logo.png'
const Header = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="button">
          <i className="fa fa-bars" aria-hidden="true"></i>
          <div className="text">&nbsp;&nbsp;&nbsp;Start</div>
        </div>

        <div className="button">
          <i className="fa fa-random" aria-hidden="true"></i>
          <div className="text">&nbsp;&nbsp;About me</div>
        </div>
        <a href={download} download="CV">
        <div className="button">
          <i className="fa fa-download" aria-hidden="true"></i>
          <div className="text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Download CV</div>
        </div>
        </a>
        <div className="button">
          <i className="fa fa-envelope" aria-hidden="true"></i>
          <div className="text">&nbsp;&nbsp;&nbsp;&nbsp;Contact</div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Header;
