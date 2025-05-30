let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
};

// 1️ Fonction displayGroceries
const displayGroceries = () => {
    groceries.fruits.forEach(fruit => console.log(fruit));
};

// Appel de la fonction pour afficher les fruits
displayGroceries();
// Affiche : pear, apple, banana

// 2️ Fonction cloneGroceries
const cloneGroceries = () => {
    // Pass by value (valeurs primitives)
    let user = client;

    // On change client
    client = "Betty";

    console.log("Client:", client); // Betty
    console.log("User:", user);     // John

    //  Pourquoi ? car `user` est une copie de la **valeur** de `client` (string = primitive)
    // => changement de `client` n'affecte pas `user`

    // Pass by reference (objets)
    let shopping = groceries;

    // On change totalPrice
    shopping.totalPrice = "35$";

    console.log("Groceries totalPrice:", groceries.totalPrice); // 35$

    //  Pourquoi ? car `shopping` pointe vers **le même objet en mémoire** que `groceries`

    // On change paid à false
    shopping.other.paid = false;

    console.log("Groceries paid:", groceries.other.paid); // false

    // Même explication : les objets sont passés par **référence**
};

// Appel de la fonction cloneGroceries
cloneGroceries();
