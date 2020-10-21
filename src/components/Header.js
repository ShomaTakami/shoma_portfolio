import React, { Component } from "react";
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header id="home">
          {/* <nav id="nav-wrap">
            <div className="nav-box">
              {" "}
              <a
                className="mobile-btn"
                href="#nav-wrap"
                title="Show navigation"
              >
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
                </li>
              </ul>
            </div>
          </nav> */}

          <div className="row banner">
            <div className="banner-text">
              {" "}
              <h1 className="responsive-headline">
                I am{" "}
                <span
                  className="typer"
                  id="some-id"
                  data-words="_,_,Frontend Developer,Shoma Takami"
                  data-colors="#fff,#fff,#fff,#f06000"
                  data-delay="63"
                  data-loop="1"
                ></span>
              </h1>
              <div className="banner-btn">
                {" "}
                <a
                  className="button"
                  href="https://shomatakami.ca/images/shoma_resume.pdf"
                  download="shoma.pdf"
                >
                  <i className="fa fa-download"></i> Resume
                </a>
              </div>
            </div>
            <br />
            {/* <p className="scrolldown">
              <a className="smoothscroll" href="#testimonials">
                <i className="icon-down-circle"></i>
              </a>
            </p> */}
          </div>
        </header>
      </React.Fragment>
    );
  }
}
