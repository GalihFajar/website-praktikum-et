import React, { Component } from "react";
class NavBar extends Component {
  state = {};
  styles1 = {
    color: "white",
  };
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark row">
          <button className="btn btn-outline-primary btn-sm ml-2 col-0">
            Home
          </button>
          <div className="m-2 d-flex justify-content-end col">
            <button className="btn btn-outline-primary  btn-sm ml-2">
              Jadwal Praktikum
            </button>
            <button className="btn btn-outline-primary  btn-sm ml-2">
              Nilai Praktikum
            </button>
            <button className="btn btn-outline-primary  btn-sm ml-2">
              Perizinan/Tukar Jadwal
            </button>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
