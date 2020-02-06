import React, { Component } from "react";

export default class Testimonials extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="testimonials">
        <div className="bgrid-thirds s-bgrid-halves">
          {resumeData.portfolio &&
            resumeData.portfolio.map(item => {
              return (
                <div key={item.name} className="list-item column ">
                  <div className="item-wrap">
                    <div className="img-flame">
                      <img
                        src={`${item.imgurl}`}
                        className="item-img"
                        alt={`${item.name}`}
                      />
                    </div>
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <a className="button work_button" href={`${item.url}`}>
                          View
                        </a>
                        <a
                          className="button work_button"
                          href={`${item.giturl}`}
                        >
                          Github
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    );
  }
}
