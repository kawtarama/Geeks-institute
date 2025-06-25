import React, { useState, useEffect } from "react";
import quotes from "./QuotesDatabase";

const getRandomIndex = (excludeIndex, max) => {
  let index;
  do {
    index = Math.floor(Math.random() * max);
  } while (index === excludeIndex);
  return index;
};

const getRandomColor = () => {
  const colors = [
    "#16a085", "#27ae60", "#2c3e50", "#f39c12", "#e74c3c",
    "#9b59b6", "#FB6964", "#342224", "#472E32", "#BDBB99",
    "#77B1A9", "#73A857"
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

function App() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [color, setColor] = useState(getRandomColor());

  useEffect(() => {
    setQuoteIndex(getRandomIndex(-1, quotes.length));
  }, []);

  const handleNewQuote = () => {
    const newIndex = getRandomIndex(quoteIndex, quotes.length);
    setQuoteIndex(newIndex);
    setColor(getRandomColor());
  };

  const { quote, author } = quotes[quoteIndex];

  return (
    <div style={{ backgroundColor: color, minHeight: "100vh", transition: "0.5s" }}>
      <div style={{ color, backgroundColor: "#fff", maxWidth: "600px", margin: "auto", marginTop: "20vh", padding: "2rem", borderRadius: "8px", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }}>
        <h2 style={{ color }}>{quote}</h2>
        <p style={{ textAlign: "right", fontStyle: "italic" }}>{author || "Unknown"}</p>
        <button onClick={handleNewQuote} style={{
          backgroundColor: color,
          color: "#fff",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "20px"
        }}>
          Nouvelle citation
        </button>
      </div>
    </div>
  );
}

export default App;
