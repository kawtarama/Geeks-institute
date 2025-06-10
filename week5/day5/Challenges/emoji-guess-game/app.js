const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    { emoji: '🚗', name: 'Car' },
    { emoji: '🐱', name: 'Cat' },
    { emoji: '🍕', name: 'Pizza' }
];

let score = 0;

function getRandomEmoji() {
    const correct = emojis[Math.floor(Math.random() * emojis.length)];
    const options = new Set();
    options.add(correct.name);

    while (options.size < 4) {
        const rand = emojis[Math.floor(Math.random() * emojis.length)];
        options.add(rand.name);
    }

    return {
        emoji: correct.emoji,
        correctAnswer: correct.name,
        options: Array.from(options).sort(() => Math.random() - 0.5)
    };
}

let currentQuestion = getRandomEmoji();

app.get('/', (req, res) => {
    res.render('index', { question: currentQuestion, score });
});

app.post('/guess', (req, res) => {
    const userAnswer = req.body.answer;

    const isCorrect = userAnswer === currentQuestion.correctAnswer;
    if (isCorrect) score++;

    const result = {
        isCorrect,
        correctAnswer: currentQuestion.correctAnswer,
        userAnswer
    };

    currentQuestion = getRandomEmoji();

    res.render('result', { result, score });
});

app.listen(port, () => {
    console.log(`🚀 Emoji game running at http://localhost:${port}`);
});
