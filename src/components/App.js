import React, { Component, useState } from "react";
import {
  Link,
  Route,
  BrowserRouter,
  useLocation,
  Switch,
} from "react-router-dom";
import "../styles/App.css";
import About from "./About/about";
import Home from "./Home/home";
import LocationDisplay from "./LocationDisplay";
function BadRequest() {
  return <div>'No match'</div>;
}
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="main">
        <BrowserRouter>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <LocationDisplay />
          <Switch>
            <Route exact path="/about" render={About}/>
            <Route exact path="/" render={Home}/>
            <Route>
      <BadRequest />
    </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
