import React from "react";
import UserFavoriteAnimals from "./UserFavoriteAnimals.js";
import Exercise3 from "./Exercise3.js";

// Objet User
const user = {
  firstName: "Bob",
  lastName: "Dylan",
  favAnimals : ['Horse', 'Turtle', 'Elephant', 'Monkey']
};

function App() {
  // Élément JSX
  const myelement = <h1>I Love JSX!</h1>;
  
  // Somme
  const sum = 5 + 5;

  return (
    <div>
      {/* Exercice 1 */}
      <p>Bonjour tout le monde ! </p>
      {myelement}
      <p>React is {sum} times better with JSX</p>

      {/* Exercice 2 */}
      <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>
      <UserFavoriteAnimals favAnimals={user.favAnimals} />

      {/* Exercice 3 */}
      <Exercise3 />
    </div>
  )
}

export default App;
