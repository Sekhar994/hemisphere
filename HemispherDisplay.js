import React from "react";
import north from './images/north.jpg';
import south from './images/south.jpg';
const hemisphereconfig={
    Northern:{
        text:'it is northern hemisphere',
        picture: north
    },
    Southern:{
        text:'it is southern hemisphere',
        picture: south
    }
}
const HemisphereDisplay = ({latitude})=>
{
console.log(latitude)
const Hemisphere = latitude > 0 ? 'Northeren' : 'Southeren '
const picture = latitude > 0 ? north : south ;   

return(
        <div>
            <img src={picture} alt="image"></img>
            {Hemisphere}
        </div>
    )
}
export default HemisphereDisplay;