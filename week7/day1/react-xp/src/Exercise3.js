import React from "react";
import "./Exercise3.css";

// Objet de style en ligne
const style_header = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
};

function Exercise3() {
  return (
    <div>
    
      <h1 style={style_header}>
        Ceci est mon titre en ligne
      </h1>

      <p className="para">
        Ceci est mon paragraphe stylisé avec du CSS.
      </p>

  
      <a href="https://example.com" target="_blank" rel="noreferrer">
        Visiter le site
      </a>

    
      <form>
        <input type="text" placeholder="Nom" />
        <input type="submit" value="Envoyer" />
      </form>

  
        <div>
<img src="https://png.pngtree.com/element_pic/00/16/09/2057e0eecf792fb.jpg " alt="Chat mignon" />
    </div>


      <ul>
        <li>Élément 1</li>
        <li>Élément 2</li>
        <li>Élément 3</li>
      </ul>
    </div>
  )
}

export default Exercise3;
