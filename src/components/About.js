import React, { Component } from "react";
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns about_dis">
            <img
              className="profile-pic"
              src="images/shoma_pic.jpg"
              alt="profile_pic"
            />
          </div>
          <div className="nine columns main-col">
            <h2>
              <span>About Me</span>
            </h2>
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
