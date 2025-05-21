// 1. Changer l'id de navBar à socialNetworkNavigation
const navBar = document.getElementById('navBar');
navBar.setAttribute('id', 'socialNetworkNavigation');

// 2. Créer un nouvel élément <li> avec "Déconnexion"
const ul = document.querySelector('#socialNetworkNavigation ul');
const newLi = document.createElement('li');
const logoutText = document.createTextNode('Déconnexion');
newLi.appendChild(logoutText);
ul.appendChild(newLi);

// 3. Récupérer le premier et dernier <li> et afficher leur texte
const firstLi = ul.firstElementChild;
const lastLi = ul.lastElementChild;

console.log("Premier lien:", firstLi.textContent);
console.log("Dernier lien:", lastLi.textContent);