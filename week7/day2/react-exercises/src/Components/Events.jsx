// Events.js
import React, { useState } from "react";

function Events() {
  const [isToggleOn, setIsToggleOn] = useState(true);

  const clickMe = () => {
    alert("I was clicked");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      alert(`You typed: ${e.target.value}`);
    }
  };

  const toggle = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <div>
      <h2>Event - Part I</h2>
      <button onClick={clickMe}>Click Me</button>

      <h2>Event - Part II</h2>
      <input type="text" onKeyDown={handleKeyDown} placeholder="Type and press Enter" />

      <h2>Event - Part III</h2>
      <button onClick={toggle}>{isToggleOn ? "ON" : "OFF"}</button>
    </div>
  );
}

export default Events;
