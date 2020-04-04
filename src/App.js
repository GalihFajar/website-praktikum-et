import React from "react";
import Brand from "./components/Brand";
import "./App.css";
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import Praktikum from "./components/Praktikum";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <Brand />
      <NavBar />
      <div className="container">
        <Jumbotron />
        <Praktikum />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
