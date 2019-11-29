import React, { Component } from "react";
export default class ContactMe extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <h1>
              <span>Contact</span>
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="eigth footer-widgets">
            <div className="widget">
              <h4>
                <a
                  href="mailto:hawklook.2331@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mail : {resumeData.mail}
                </a>
              </h4>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
