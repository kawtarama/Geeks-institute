// app.js
const { greet } = require('./greeting');
const { showColorfulMessage } = require('./colorful-message');
const { readFileContent } = require('./read-file');

console.log(greet('Alice'));

showColorfulMessage();

readFileContent();
