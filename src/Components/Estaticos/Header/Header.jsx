import React, { Component } from "react";
import './Header.css'
import Logo from '../../../img/logo.png'
class Header extends Component {
  render() {
    return (
      <header id="header">
        <div class="container main-menu">
          <div class="row align-items-center justify-content-between d-flex">
            <div id="logo">
              <a href="index.html">
                <img src={Logo} alt="" title="" />
              </a>
            </div>
            <nav id="nav-menu-container">
              <ul class="nav-menu">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a href="services.html">Services</a>
                </li>
                <li>
                  <a href="portfolio.html">Portfolio</a>
                </li>
                <li>
                  <a href="price.html">Pricing</a>
                </li>
                <li class="menu-has-children">
                  <a href="/">Blog</a>
                  <ul>
                    <li>
                      <a href="blog-home.html">Blog Home</a>
                    </li>
                    <li>
                      <a href="blog-single.html">Blog Single</a>
                    </li>
                  </ul>
                </li>
                <li class="menu-has-children">
                  <a href="/">Pages</a>
                  <ul>
                    <li>
                      <a href="elements.html">Elements</a>
                    </li>
                    <li class="menu-has-children">
                      <a href="/">Level 2 </a>
                      <ul>
                        <li>
                          <a href="/">Item One</a>
                        </li>
                        <li>
                          <a href="/">Item Two</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
