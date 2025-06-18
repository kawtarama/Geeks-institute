import React, { useState } from "react";
import Garage from "./Garage";
// function Car({ car }) {
//   return (
//     <div>
//       <h2>This car is a {car.model}</h2>
//     </div>
//   );
// }




function Car({ car }) {
  const [color] = useState("red");

  return (
    <div>
      <h2>This car is a {color} {car.model}</h2>
      <Garage size="small" />
    </div>
  );
}



export default Car;
