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
            <div className="ten columns flex-container">
              <div className="bgrid-thirds s-bgrid-halves ">
                <ul>
                  {resumeData.portfolio &&
                    resumeData.portfolio.map(item => {
                      return (
                        <li
                          key={item.name}
                          className="column row"
                          style={{
                            backgroundColor: "white",
                            border: "1px solid black",
                            paddingTop: "10px",
                            marginTop: "5px"
                          }}
                        >
                          <div className="item-wrap">
                            <img
                              src={`${item.imgurl}`}
                              style={{
                                width: "30em",
                                height: "20em",
                                objectFit: "cover"
                              }}
                              alt={`${item.name}`}
                            />
                            <h4>{item.name}</h4>
                            <p style={{ padding: "20px" }}>
                              {item.description}
                            </p>
                            <p style={{ color: "red", fontWeight: "3px" }}>
                              {item.lan}
                            </p>
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
