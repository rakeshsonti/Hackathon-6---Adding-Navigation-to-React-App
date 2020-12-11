import React, { Component, useState } from "react";
import {
  Link,
  Route,
  BrowserRouter,
  useLocation,
  Switch,
} from "react-router-dom";
import "../styles/App.css";
// import About from "./About/about";
// import Home from "./Home/home";
// import LocationDisplay from "./LocationDisplay";
function LocationDisplay(){
  const obj=useLocation();
return (<div data-testid="location-display">{obj.pathname}</div>)
}
function Home(){
  return (
      <div>
          You are home
      </div>
  )
  }
function About () {
  return <div>You are on the about page</div>;
};
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
          <Switch>
            <Route  path="/about">
            <LocationDisplay />
              <About/>
               </Route> 
            <Route exact path="/">
            <LocationDisplay />
              <Home/>
            </Route>
            <Route path="*">
            <LocationDisplay />
              <div>No match</div></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
