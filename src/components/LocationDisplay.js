import React from 'react';
import { useLocation} from "react-router-dom";
function LocationDisplay(){
    const obj=useLocation();
return (<div data-testid="location-display">{obj.pathname}</div>)
}
export default LocationDisplay;