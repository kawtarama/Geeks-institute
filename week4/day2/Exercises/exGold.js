[1, 2, 3].map(num => {
  if (typeof num === 'number') return num * 2;
  return;
});

// 2
[[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2],
);

// 3
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    alert(num);
    return num * 2;
})
// 4


const array = [[1],[2],[3],[[[4]]],[[[5]]]];
[1, 2, 3, [4], [5]]
const neArray = array.flat(2);
console.log(newArray);  

const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
["Hello young grasshopper!", "you are", "learning fast!"]
const newGreeting = greeting.map(arr => arr.join(' '));
console.log(newGreeting);


const greetingString = newGreeting.join(' ');
console.log(greetingString);


const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
[3]
const untrapped = trapped.flat(Infinity);
console.log(untrapped);  
