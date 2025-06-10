// data.js - Fichier contenant les données des personnes (syntaxe ES6)

const people = [
    {
        name: "Alice Martin",
        age: 28,
        location: "Paris"
    },
    {
        name: "Bob Durand",
        age: 34,
        location: "Lyon"
    },
    {
        name: "Catherine Lefebvre",
        age: 22,
        location: "Marseille"
    },
    {
        name: "David Bernard",
        age: 41,
        location: "Toulouse"
    },
    {
        name: "Emma Rousseau",
        age: 29,
        location: "Nice"
    },
    {
        name: "François Moreau",
        age: 36,
        location: "Nantes"
    },
    {
        name: "Gabrielle Simon",
        age: 25,
        location: "Strasbourg"
    },
    {
        name: "Henri Dubois",
        age: 52,
        location: "Bordeaux"
    }
];

// Export du tableau en utilisant la syntaxe ES6
export default people;

// Vous pouvez aussi exporter des éléments nommés si nécessaire
export const totalPeople = people.length;
export const locations = [...new Set(people.map(person => person.location))];