// app.js
const express = require('express');
const app = express();
const port = 3000;

const quizRouter = require('./routes/quiz');

app.use(express.json());

// Monte le routeur
app.use('/quiz', quizRouter);

app.listen(port, () => {
  console.log(`Quiz app en cours sur http://localhost:${port}`);
});
