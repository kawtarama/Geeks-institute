import React, { useRef, useState } from "react";

function CharacterCounter() {
  const inputRef = useRef();
  const [length, setLength] = useState(0);

  const handleInput = () => {
    setLength(inputRef.current.value.length);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Compteur de caractères</h2>
      <input
        type="text"
        ref={inputRef}
        onInput={handleInput}
        placeholder="Tape ici..."
        style={{ padding: "10px", width: "300px" }}
      />
      <p>Nombre de caractères : {length}</p>
    </div>
  );
}

function App() {
  return <CharacterCounter />;
}

export default App;
