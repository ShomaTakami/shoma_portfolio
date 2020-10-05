import React, { Component } from "react";
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        <header id="home">
          <nav id="nav-wrap">
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
                <a className="smoothscroll" href="#testimonials">
                  Work
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="row banner">
            <div className="banner-text">
              {" "}
              <h1 className="responsive-headline">
                I am{" "}
                <span
                  class="typer"
                  id="some-id"
                  data-words="__,__,Frontend Developer,Shoma Takami"
                  data-colors="#fff,#fff,#f06000,#f06000"
                  data-delay="63"
                  data-loop="1"
                ></span>
              </h1>
              {/* <h1 className="responsive-headline">{resumeData.name}</h1>
              <h3
                style={{ color: "#fff", fontFamily: "sans-serif " }}
                className="fa-4x"
              >
                {resumeData.role}

              </h3> */}
              <div className="banner-btn">
                {" "}
                <a
                  className="button"
                  href="https://shomatakami.ca/images/shoma.pdf"
                  download="shoma.pdf"
                >
                  <i className="fa fa-download"></i> Resume
                </a>
                <ul className="social">
                  {resumeData.socialLinks &&
                    resumeData.socialLinks.map((item) => {
                      return (
                        <li key={item.name}>
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className={item.className}></i>
                          </a>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
            <br />
            <p className="scrolldown">
              <a className="smoothscroll" href="#about">
                <i className="icon-down-circle"></i>
              </a>
            </p>
          </div>
        </header>
      </React.Fragment>
    );
  }
}
