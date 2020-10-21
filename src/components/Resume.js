import React, { Component } from "react";
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume" className="fade_off slide">
        <div className="row container-other skill" id="skill_section">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>
          <div className="nine columns " id="skill_container">
            <div className="bgrid-thirds">
              <ul className="skills skill_ul">
                {resumeData.skills &&
                  resumeData.skills.map((item) => {
                    return (
                      <li
                        key={item.skillname}
                        className="column"
                        id="skill-box"
                      >
                        <img src={item.imgurl} alt={item.skillname} />
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
        <div className="row container-other education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            {resumeData.education &&
              resumeData.education.map((item) => {
                return (
                  <div className="row item" key={item.UniversityName}>
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>{" "}
                        <em className="date">
                          {item.MonthOfPassing} {item.YearOfPassing}
                        </em>
                      </p>
                      <p className="info">{item.Achievements}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    );
  }
}
