import React, { Component } from "react";
export default class ContactMe extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          {/* <div className="ten columns header-col">
            <h1>
              <span>Contact</span>
            </h1>
          </div> */}
          <div className="three columns header-col">
            <h1>
              <span>Contact</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h1>
                  <a
                    href="mailto:hawklook.2331@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {resumeData.mail}
                  </a>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
