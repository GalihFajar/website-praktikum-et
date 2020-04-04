import React, { Component } from "react";
class Praktikum extends Component {
  state = {};
  paragraphStyle = {
    textAlign: "justify",
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-sm-3 border border-primary rounded">
              <div className="p-2">
                <img
                  src="/calendar2.png"
                  className="mx-auto d-block"
                  height="120"
                  width="120"
                />
                <div className="d-flex justify-content-center mt-1">
                  <h3 className="justfify-content-center">Jadwal Praktikum</h3>
                </div>
                <p className="m-2" style={this.paragraphStyle}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quam, excepturi velit ex vitae asperiores facilis natus quidem
                  modi libero eaque. Modi rem quo quos in nesciunt eligendi
                  iusto consectetur veritatis.
                </p>
              </div>
            </div>
            <div className="col-sm-3 border border-primary rounded">
              <div className="p-2">
                <img
                  src="/grade.png"
                  className="mx-auto d-block"
                  height="120"
                  width="120"
                />
                <div className="d-flex justify-content-center mt-1">
                  <h3 className="justfify-content-center">Nilai Praktikum</h3>
                </div>
                <p className="m-2" style={this.paragraphStyle}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quam, excepturi velit ex vitae asperiores facilis natus quidem
                  modi libero eaque. Modi rem quo quos in nesciunt eligendi
                  iusto consectetur veritatis.
                </p>
              </div>
            </div>
            <div className="col-sm-3 border border-primary rounded">
              <div className="p-2">
                <img
                  src="/interpersonal.png"
                  className="mx-auto d-block"
                  height="120"
                  width="120"
                />
                <div className="row d-flex justify-content-center mt-1">
                  <h3 className="col-12" style={{ textAlign: "center" }}>
                    Perizinan/Tukar Jadwal
                  </h3>
                </div>
                <p className="m-2" style={this.paragraphStyle}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quam, excepturi velit ex vitae asperiores facilis natus quidem
                  modi libero eaque. Modi rem quo quos in nesciunt eligendi
                  iusto consectetur veritatis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Praktikum;
