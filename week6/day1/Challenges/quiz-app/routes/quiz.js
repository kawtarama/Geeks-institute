// routes/quiz.js
const express = require('express');
const router = express.Router();

// Questions du quiz (codées en dur)
const triviaQuestions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  { question: "What is the largest mammal in the world?", answer: "Blue whale" }
];

// Simule l’état utilisateur (session en mémoire)
let userSession = {
  currentQuestionIndex: 0,
  score: 0
};

// GET /quiz — Démarre le quiz ou affiche la question actuelle
router.get('/', (req, res) => {
  const index = userSession.currentQuestionIndex;

  if (index >= triviaQuestions.length) {
    return res.json({ message: "Quiz terminé. Allez à /quiz/score pour voir votre résultat." });
  }

  res.json({
    questionNumber: index + 1,
    question: triviaQuestions[index].question
  });
});

// POST /quiz — Soumet une réponse et passe à la suivante
router.post('/', (req, res) => {
  const { answer } = req.body;
  const index = userSession.currentQuestionIndex;

  if (index >= triviaQuestions.length) {
    return res.json({ message: "Quiz terminé. Allez à /quiz/score pour voir votre résultat." });
  }

  const currentQuestion = triviaQuestions[index];
  let isCorrect = false;

  if (answer && answer.trim().toLowerCase() === currentQuestion.answer.toLowerCase()) {
    userSession.score++;
    isCorrect = true;
  }

  userSession.currentQuestionIndex++;

  if (userSession.currentQuestionIndex >= triviaQuestions.length) {
    return res.json({
      correct: isCorrect,
      message: "C'était la dernière question.",
      next: "/quiz/score"
    });
  }

  res.json({
    correct: isCorrect,
    nextQuestion: triviaQuestions[userSession.currentQuestionIndex].question
  });
});

// GET /quiz/score — Affiche le score final
router.get('/score', (req, res) => {
  const score = userSession.score;
  const total = triviaQuestions.length;

  // Réinitialiser la session pour rejouer
  const result = {
    message: `Votre score final est ${score}/${total}`,
  };

  userSession = {
    currentQuestionIndex: 0,
    score: 0
  };

  res.json(result);
});

module.exports = router;
