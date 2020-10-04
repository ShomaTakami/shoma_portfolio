import React, { Component } from "react";
export default class ContactMe extends Component {
  render() {
    // let resumeData = this.props.resumeData;
    return (
      <section id="contact" className="fade_off slide">
        <div className="row section-head">
          <div className="three columns header-col">
            <h1>
              <span>Contact</span>
            </h1>
          </div>
          <div className="nine columns main-col text-center">
            <div className="row item">
              <div className="twelve columns">
                <p>
                  I'm currently looking for job opportunities, my inbox is
                  always open. Whether for a potential project or just to say
                  hi, I'll try my best to answer your email!
                  <br />
                  <a
                    className="button"
                    href="mailto:hawklook.2331@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Say Hello!!
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
