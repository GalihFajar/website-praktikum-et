import React, { Component } from "react";

class Brand extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <nav className="navbar navbar-light bg-light col-xs-12">
            <a className="navbar-brand" href="#">
              <img src="/logostei.png" width="30" height="30" alt="" />
              <span className="m-2">
                Teknik Telekomunikasi Institut Teknologi Bandung
              </span>
            </a>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}

export default Brand;
