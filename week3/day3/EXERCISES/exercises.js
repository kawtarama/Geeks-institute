// 1
function displayNumbersDivisible() {
    let sum = 0;

    for (let i = 0; i <= 500; i++) {
        if (i % 23 === 0) {
            console.log(i);
            sum += i;
        }
    }

    console.log("Sum:", sum);
}

// Bonus version: make it dynamic with a parameter
function displayNumbersDivisible(divisor = 23) {
    let sum = 0;

    for (let i = 0; i <= 500; i++) {
        if (i % divisor === 0) {
            console.log(i);
            sum += i;
        }
    }

    console.log("Sum:", sum);
}

// Test examples
displayNumbersDivisible();      // Default: divisor = 23
// displayNumbersDivisible(3);  // For 3
// displayNumbersDivisible(45); // For 45

// 2

// Provided stock and prices
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
};

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
};

// Your shopping list
const shoppingList = ["banana", "orange", "apple"];

// Function to calculate total bill
function myBill() {
    let total = 0;

    for (let item of shoppingList) {
        // Check if item exists in stock and is in stock
        if (item in stock && stock[item] > 0) {
            total += prices[item];      // Add price to total
            stock[item] -= 1;           // Bonus: decrease stock by 1
        }
    }

    return total;
}

// Call the function
const totalPrice = myBill();
console.log("Total bill:", totalPrice);
console.log("Updated stock:", stock);
// 3

function changeEnough(itemPrice, amountOfChange) {
    const [quarters, dimes, nickels, pennies] = amountOfChange;
    const total = (quarters * 0.25) + (dimes * 0.10) + (nickels * 0.05) + (pennies * 0.01);

    return total >= itemPrice;
}

// Test examples:
console.log(changeEnough(4.25, [25, 20, 5, 0])); // true
console.log(changeEnough(14.11, [2, 100, 0, 0])); // false
console.log(changeEnough(0.75, [0, 0, 20, 5])); // true


// 4


function hotelCost(nights) {
    const costPerNight = 140;
    return nights * costPerNight;
}

function planeRideCost(destination) {
    destination = destination.toLowerCase();

    if (destination === "london") return 183;
    if (destination === "paris") return 220;
    return 300;
}

function rentalCarCost(days) {
    const dailyRate = 40;
    let total = days * dailyRate;

    if (days > 10) {
        total *= 0.95; // 5% discount
    }

    return total;
}

function totalVacationCost() {
    let nights, destination, days;

    // Get valid number of hotel nights
    while (true) {
        nights = prompt("How many nights would you like to stay at the hotel?");
        if (!isNaN(nights) && nights !== "" && nights !== null) {
            nights = Number(nights);
            break;
        }
        alert("Please enter a valid number of nights.");
    }

    // Get valid destination
    while (true) {
        destination = prompt("Where are you flying to? (London, Paris, or other)");
        if (destination && isNaN(destination)) {
            break;
        }
        alert("Please enter a valid destination.");
    }

    // Get valid number of rental days
    while (true) {
        days = prompt("How many days do you want to rent a car?");
        if (!isNaN(days) && days !== "" && days !== null) {
            days = Number(days);
            break;
        }
        alert("Please enter a valid number of days.");
    }

    const hotel = hotelCost(nights);
    const plane = planeRideCost(destination);
    const car = rentalCarCost(days);

    console.log(`The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}.`);
    console.log(`Total vacation cost: $${car + hotel + plane}`);
}

// Call the main function
totalVacationCost();
