import React from 'react';
import { useLocation,Link, Route, BrowserRouter  } from "react-router-dom";
function LocationDisplay(){
    const obj=useLocation();
    // console.log(pathname);
return (<div data-testid="location-display">{obj.pathname}</div>)
}
export default LocationDisplay;