import React, { Component } from "react";
class Jumbotron extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="jumbotron">
            <h1 className="display-4">Insert Nama Wibu Here</h1>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              officiis vero amet! Sint tempora architecto amet numquam
              obcaecati! Dicta eum impedit eius eos qui ut. Velit distinctio aut
              hic quod.
            </p>
            <hr className="my-4" />
            <p>
              Webnya masih jelek kan? Join Bengkrad yuk kalo mau benerin UwU
              (Pencet Tombol Di Bawah)
            </p>
            <p className="lead">
              <a
                className="btn btn-danger btn-lg"
                href="https://drive.google.com/file/d/1VtldAK6QmovToPN80vMlJAZYdmVs9zsN/view"
                role="button"
                target="_blank"
              >
                Join Sekuy
              </a>
              <div>
                <p>
                  Deadline <a style={{ color: "red" }}>18 April 23.59</a>
                </p>
              </div>
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Jumbotron;
