import React, { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);
  const [operation, setOperation] = useState("add");

  const handleCalculate = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult("Please enter valid numbers");
      return;
    }

    let res;
    switch (operation) {
      case "add":
        res = a + b;
        break;
      case "subtract":
        res = a - b;
        break;
      case "multiply":
        res = a * b;
        break;
      case "divide":
        res = b !== 0 ? a / b : "Cannot divide by 0";
        break;
      default:
        res = "Invalid operation";
    }

    setResult(res);
  };

  return (
    <div style={{
      backgroundColor: "#3c0a6b",
      minHeight: "100vh",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Arial, sans-serif",
    }}>
      <h1>Adding Two Numbers</h1>

      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          style={{
            fontSize: "2rem",
            padding: "0.5rem",
            borderRadius: "10px",
            border: "none",
            backgroundColor: "#d7bfff",
            textAlign: "center",
            width: "120px"
          }}
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          style={{
            fontSize: "2rem",
            padding: "0.5rem",
            borderRadius: "10px",
            border: "none",
            backgroundColor: "#d7bfff",
            textAlign: "center",
            width: "120px"
          }}
        />
      </div>

      <select
        value={operation}
        onChange={(e) => setOperation(e.target.value)}
        style={{
          fontSize: "1.2rem",
          padding: "0.5rem",
          borderRadius: "8px",
          marginBottom: "1rem"
        }}
      >
        <option value="add">Addition</option>
        <option value="subtract">Soustraction</option>
        <option value="multiply">Multiplication</option>
        <option value="divide">Division</option>
      </select>

      <button
        onClick={handleCalculate}
        style={{
          backgroundColor: "#6a0dad",
          color: "#fff",
          padding: "0.75rem 1.5rem",
          fontSize: "1.2rem",
          borderRadius: "12px",
          border: "none",
          cursor: "pointer",
          marginBottom: "1rem"
        }}
      >
        Add Them!
      </button>

      {result !== null && (
        <h2 style={{ fontSize: "3rem", marginTop: "1rem" }}>{result}</h2>
      )}
    </div>
  );
}

export default App;
