import React, { Component, useState } from "react";
import { useLocation,Link, Route, BrowserRouter  } from "react-router-dom";
import "../styles/App.css";
import About from "./About/about";
import Home from "./Home/home";
import LocationDisplay from './DisplayLocation';
class App extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <div id="main">
        {/* <Router>
          <Link to="/">Home</Link>
          <Link to="/about/">About</Link>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about/" exact component={About}></Route>
        </Router> */}
        <BrowserRouter>
        <LocationDisplay/>
        <Link to="/">Home</Link>
          <Link to="/about/">About</Link>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about/" exact component={About}></Route>
        </BrowserRouter>
      </div>
    );
  }
  
}

export default App;
