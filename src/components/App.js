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
// import LocationDisplay from "./LocationDisplay";
function BadRequest() {
  return <div>'No match'</div>;
}
function LocationDisplay(){
  const obj=useLocation();
return (<div ata-tdestid="location-display">{obj.pathname}</div>)
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
            <Route exact path="/about" component={About} />
            <Route exact path="/" component={Home} />
            <Route component={BadRequest}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
