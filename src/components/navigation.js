import React, { Component } from "react";

export default class Navigation extends Component {
  render() {
    let resumeData = this.props.resumeData;

    return (
      <nav id="nav-wrap">
        <div className="nav-box social-links">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <ul id="nav" className="nav">
            <li>
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#testimonials">
                Work
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>{" "}
            {/* <div className="twelve columns"> */}
            {/* <ul className="social-links"> */}
            {resumeData.socialLinks &&
              resumeData.socialLinks.map((item) => {
                return (
                  <li key={item.className}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className={item.className} />
                    </a>
                  </li>
                );
              })}
            {/* </ul> */}
            {/* </div> */}
          </ul>
        </div>{" "}
      </nav>
    );
  }
}
