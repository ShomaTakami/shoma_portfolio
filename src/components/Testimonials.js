import React, { Component } from "react";

export default class Testimonials extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="testimonials">
        <div className="text-container">
          <div className="row work-width">
            <div className="two columns header-col">
              <h1>Check Out Some of My Works.</h1>
            </div>
            <div className="nine columns flex-container">
              <div className="bgrid-thirds s-bgrid-halves">
                <ul>
                  {resumeData.portfolio &&
                    resumeData.portfolio.map(item => {
                      return (
                        <li
                          key={item.name}
                          className=""
                          style={{
                            backgroundColor: "rgba(20,24,25,0.7)",
                            padding: "10px",
                            marginTop: "5px"
                          }}
                        >
                          <div className="item-wrap">
                            <img
                              src={`${item.imgurl}`}
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover"
                              }}
                              alt={`${item.name}`}
                            />
                            <h3
                              style={{
                                color: "white",
                                fontSize: "50px",
                                margin: "5rem",
                                lineHeight: "70px",
                                textAlign: "center"
                              }}
                            >
                              {item.name}
                            </h3>
                            <h3 style={{ padding: "20px" }}>
                              {item.description}
                            </h3>
                            <h3 style={{ color: "red", fontWeight: "3px" }}>
                              {item.lan}
                            </h3>
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
                                  View code
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
