import React, { Component } from "react";

class Brand extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <img src="/logostei.png" width="30" height="30" alt="" />
            <span className="m-2">
              Teknik Telekomunikasi Institut Teknologi Bandung
            </span>
          </a>
        </nav>
      </React.Fragment>
    );
  }
}

export default Brand;
