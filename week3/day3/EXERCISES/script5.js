
const div = document.getElementById('container');
console.log(div);

document.querySelectorAll('.list')[0].children[1].textContent = 'Richard';

const secondUl = document.querySelectorAll('.list')[1];
secondUl.removeChild(secondUl.children[1]);

const lists = document.querySelectorAll('.list');
lists.forEach(list => {
    list.children[0].textContent = 'Alex'; // Replace 'Alex' with your name
});


lists.forEach(list => {
    list.classList.add('student_list');
});


lists[0].classList.add('university', 'attendance');


div.style.backgroundColor = 'lightblue';
div.style.padding = '10px';

const danItem = document.querySelector('li:contains("Dan")'); // Not all browsers support :contains
// Alternative approach:
const allListItems = document.querySelectorAll('li');
allListItems.forEach(li => {
    if (li.textContent === 'Dan') {
        li.style.display = 'none';
    }
});


const richardItem = document.querySelector('li:contains("Richard")');
// Alternative approach:
allListItems.forEach(li => {
    if (li.textContent === 'Richard') {
        li.style.border = '1px solid black';
    }
});

// 10. Change body font size
document.body.style.fontSize = '18px';

// Bonus: Alert if div has light blue background
if (window.getComputedStyle(div).backgroundColor === 'rgb(173, 216, 230)') {
    const users = Array.from(document.querySelectorAll('.student_list > li:not([style*="display: none"])'))
                     .map(li => li.textContent)
                     .filter(name => name !== 'Alex'); // Exclude your name
    alert(`Hello ${users[0]} and ${users[1]}`);
}