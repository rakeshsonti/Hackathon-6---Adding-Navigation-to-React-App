import React from 'react';
import { useLocation} from "react-router-dom";
function LocationDisplay(){
    const obj=useLocation();
    console.log('aaya');
return (<div data-testid="location-display">{obj.pathname}</div>)
}
export default LocationDisplay;

