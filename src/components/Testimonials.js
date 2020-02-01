import React, { Component } from "react";

export default class Testimonials extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="testimonials">
        <div className="text-container">
          <div className="work-width">
            <div className="two columns header-col">
              <h1>Check Out Some of My Works.</h1>
            </div>
            <div className="flex-container">
              <div className="bgrid-thirds s-bgrid-halves">
                <ul>
                  {resumeData.portfolio &&
                    resumeData.portfolio.map(item => {
                      return (
                        <li key={item.name} className="list-item">
                          <div className="item-wrap">
                            <img
                              src={`${item.imgurl}`}
                              className="item-img"
                              alt={`${item.name}`}
                            />
                            {/* <h3 className="item-title">{item.name}</h3>
                            <h3 className="item-des">{item.description}</h3>
                            <h3 className="item-lan">{item.lan}</h3> */}
                            <div className="overlay">
                              <div className="portfolio-item-meta">
                                <button
                                  onClick={() => {
                                    window.open(`${item.url}`);
                                  }}
                                >
                                  View More
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
