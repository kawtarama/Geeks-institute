// Color.js
import React, { useEffect, useState } from "react";

function Color() {
  const [favoriteColor, setFavoriteColor] = useState("red");

  useEffect(() => {
    alert("useEffect reached");
  }, [favoriteColor]);

  const changeColor = () => {
    setFavoriteColor("blue");
  };

  return (
    <div>
      <h2>My favorite color is {favoriteColor}</h2>
      <button onClick={changeColor}>Change to Blue</button>
    </div>
  );
}

export default Color;
