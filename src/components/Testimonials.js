import React, { Component } from "react";

export default class Testimonials extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="testimonials">
        <div className="text-container">
          <div className="work-width">
            {/* <div className="two columns header-col">
              <h1>
                <span>Works</span>
              </h1>
            </div> */}
            <div className="flex-container">
              <div className="bgrid-thirds s-bgrid-halves">
                <ul>
                  {resumeData.portfolio &&
                    resumeData.portfolio.map(item => {
                      return (
                        <li key={item.name} className="list-item">
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
                                <button
                                  onClick={() => {
                                    window.open(`${item.url}`);
                                  }}
                                >
                                  View
                                </button>
                                <button
                                  onClick={() => {
                                    window.open(`${item.giturl}`);
                                  }}
                                >
                                  Github
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                </ul>
              </div>{" "}
              {/* div.flexslider ends */}
            </div>{" "}
            {/* div.flex-container ends */}
          </div>{" "}
          {/* row ends */}
        </div>{" "}
        {/* text-container ends */}
      </section>
    );
  }
}
