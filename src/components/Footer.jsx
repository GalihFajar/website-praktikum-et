import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="bg-primary mt-4">
          <div className="d-flex justify-content-center">
            <h5 className="text-white">Courtesy Bengkel Radio IMT</h5>
          </div>
          <div className="text-white d-flex justify-content-center">
            <p>
              Icons made by{" "}
              <a
                href="https://www.flaticon.com/authors/freepik"
                title="Freepik"
                className="text-white"
              >
                {" Freepik "}
              </a>{" "}
              from{" "}
              <a
                href="https://www.flaticon.com/"
                title="Flaticon"
                className="text-white"
              >
                {" "}
                www.flaticon.com
              </a>
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
