import React from "react";
import Brand from "./components/Brand";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Register from "./components/Register";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Brand />
      <NavBar />
      <Route path="/" exact component={LandingPage} />
      <Route path="/register" exact component={Register} />
      <Route path="/login" exact component={Login} />
      <Footer />
    </Router>
  );
}

export default App;
