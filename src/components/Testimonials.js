import React, { Component } from "react";
export default class Testimonials extends Component {
  onClick() {
    window.location.href = "https://www.google.ca/";
  }
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id='testimonials'>
        <div className='text-container'>
          <div className='row work-width'>
            <div className='two columns header-col'>
              <h1>Check Out Some of My Works.</h1>
            </div>
            <div className='ten columns flex-container'>
              <div className='flexslider'>
                <ul className='slides'>
                  {resumeData.portfolio &&
                    resumeData.portfolio.map(item => {
                      return (
                        <li key={item.name}>
                          <div className='item-wrap'>
                            {/* <a href='#modal-01'> */}
                            <img
                              src={`${item.imgurl}`}
                              className='item-img'
                              alt={`${item.name}`}
                            />
                            <div className='overlay'>
                              <div className='portfolio-item-meta'>
                                <h3>{item.name}</h3>
                                <button onClick={this.onClick}>
                                  View More
                                </button>
                              </div>
                            </div>
                            {/* </a> */}
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
