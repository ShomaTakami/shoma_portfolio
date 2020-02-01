import React, { Component } from "react";
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
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
              {resumeData.aboutme}{" "}
              <button>
                <a
                  href="https://uploads.knightlab.com/storymapjs/170019ebe483a0e96e5be384e66cef02/shomas/draft.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Storymap
                </a>
              </button>
            </p>

            {/* <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{resumeData.name}</span>
                  <br></br>
                  <span>{resumeData.address}</span>
                  <br></br>
                  <a
                    href={resumeData.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span></span>
                  </a>
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    );
  }
}
