import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import './App.css';

class Header extends Component {
  render() {
  return (
      <HashRouter>
      <div>
      <nav className="navbar navbar-expand-lg navbar-dark">
          <NavLink to="/" className="navbar-brand" >
          <i className="fas fa-cheese"></i>  Bon Appetite
          </NavLink>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
              <li className="nav-item">
                      <NavLink to="/" exact={true} className="nav-link" >
                      <i class="fa fa-home"></i>  Home
                      </NavLink>
                  </li>
                  <li className="nav-item">
                      <NavLink to="/About" className="nav-link" >
                      <i class="fa fa-book"></i> About
                      </NavLink>
                  </li>
                  <li className="nav-item">
                      <NavLink to="/Contact" className="nav-link" >
                      <i className="fa fa-envelope"></i> Contact
                      </NavLink>
                  </li>
              </ul>
          </div>


      </nav>
      <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/About" component={About}/>
            <Route path="/Contact" component={Contact}/>
          </div>
      </div>
      </HashRouter>
  );
}
}

export default Header;
