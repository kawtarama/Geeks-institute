// 1/

const people = ["Greg", "Mary", "Devon", "James"];
console.log("Original array:", people);


people.shift(); 
console.log("After removing Greg:", people);

people[people.indexOf("James")] = "Jason";
console.log("After replacing James with Jason:", people);

people.push("Claude");
console.log("After adding my name:", people);

const maryIndex = people.indexOf("Mary");
console.log("Mary's index:", maryIndex);

const peopleCopy = people.slice(1, 3); // This gives ["Devon", "Jason"]
console.log("Copy without Mary or Claude:", peopleCopy);

const fooIndex = people.indexOf("foo");
console.log("Index of 'foo':", fooIndex); 

const last = people[people.length - 1];
console.log("Last element:", last);


console.log("\nLooping through each person:");
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}


console.log("\nLooping until Devon:");
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Devon") {
        break;
    }
}


// 2/


console.log("EXERCISE 2: FAVORITE COLORS");

const colors = ["blue", "green", "purple", "teal", "orange"];

for (let i = 0; i < colors.length; i++) {
    console.log(`My #${i + 1} choice is ${colors[i]}`);
}

const suffixes = ["st", "nd", "rd", "th", "th"];
for (let i = 0; i < colors.length; i++) {
    console.log(`My ${i + 1}${suffixes[i]} choice is ${colors[i]}`);
}

// 3/

console.log("\nEXERCISE 3: REPEAT THE QUESTION");

function simulateExercise3() {
    let number = 5; 
    console.log(`Initial prompt returns: ${number} (type: ${typeof number})`);
    
    let counter = 1;
    do {
        console.log(`Attempt ${counter}: Number is ${number}, which is less than 10`);
        number += 2; 
        counter++;
    } while (number < 10);
    
    console.log(`Final number: ${number}, which is >= 10, so we exit the loop`);
}

simulateExercise3();

// 4/

//  Building Management
console.log("\nEXERCISE 4: BUILDING MANAGEMENT");
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}


console.log("Number of floors:", building.numberOfFloors);

console.log("Apartments on first floor:", building.numberOfAptByFloor.firstFloor);
console.log("Apartments on third floor:", building.numberOfAptByFloor.thirdFloor);

const secondTenant = building.nameOfTenants[1];
const secondTenantRooms = building.numberOfRoomsAndRent[secondTenant.toLowerCase()][0];
console.log(`The second tenant is ${secondTenant} and has ${secondTenantRooms} rooms`);

const sarahRent = building.numberOfRoomsAndRent.sarah[1];
const davidRent = building.numberOfRoomsAndRent.david[1];
const danRent = building.numberOfRoomsAndRent.dan[1];

console.log(`Sarah's rent: ${sarahRent}, David's rent: ${davidRent}, Total: ${sarahRent + davidRent}`);
console.log(`Dan's rent: ${danRent}`);

if (sarahRent + davidRent > danRent) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
    console.log(`Dan's rent increased to ${building.numberOfRoomsAndRent.dan[1]}`);
}

// 5/


console.log("\nEXERCISE 5: FAMILY");
const family = {
    father: "John",
    mother: "Jane",
    children: 2,
    pet: "dog",
    location: "New York"
};

console.log("Keys of the family object:");
for (let key in family) {
    console.log(key);
}

console.log("Values of the family object:");
for (let key in family) {
    console.log(family[key]);
}

// 6/
console.log("\nEXERCISE 6: RUDOLF");
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'reindeer'
};

let sentence = "";
for (let key in details) {
    sentence += key + " " + details[key] + " ";
}
sentence = sentence.trim();
console.log(sentence);

// 7/
console.log("\nEXERCISE 7: SECRET GROUP");
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

let firstLetters = [];
for (let i = 0; i < names.length; i++) {
    firstLetters.push(names[i][0]);
}
firstLetters.sort();
const secretSocietyName = firstLetters.join("");
console.log("Secret society name:", secretSocietyName);