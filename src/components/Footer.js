import React, { Component } from "react";
export default class Footer extends Component {
  render() {
    return (
      <footer className="fade_on">
        <div className="row container">
          <span>© 2020 created by Shoma Takami </span>

          {/* <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open" />
            </a>
          </div> */}
        </div>
      </footer>
    );
  }
}
