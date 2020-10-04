import React, { Component } from "react";
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about" className="fade_off slide">
        <div className="row">
          <div className="three columns header-col">
            <h1>
              <span>About Me</span>
            </h1>
            <img
              className="profile-pic"
              src="images/shoma_pic.jpg"
              alt="profile_pic"
            />
          </div>
          <div className="nine columns main-col text-center">
            <p>
              {resumeData.aboutme} <br />
              <a
                className="button"
                href="https://uploads.knightlab.com/storymapjs/170019ebe483a0e96e5be384e66cef02/shomas/draft.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Storymap
              </a>
            </p>
          </div>
        </div>
      </section>
    );
  }
}
