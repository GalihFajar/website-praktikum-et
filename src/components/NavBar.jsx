import React, { Component } from "react";
import { Link } from "react-router-dom";
class NavBar extends Component {
  state = {};
  styles1 = {
    color: "white",
  };
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark row">
          <Link to="/">
            <button className="btn btn-outline-primary btn-sm ml-2 col-0">
              Home
            </button>
          </Link>
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
            <Link to="/register">
              <button className="btn btn-outline-primary  btn-sm ml-2">
                Sign Up
              </button>
            </Link>
            <Link to="/login">
              <button className="btn btn-outline-primary  btn-sm ml-2">
                Sign In
              </button>
            </Link>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
