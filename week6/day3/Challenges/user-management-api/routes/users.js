const express = require('express');
const fs = require('fs');
const bcrypt = require('bcrypt');
const router = express.Router();
const filePath = './users.json';

// Helper to read users
function readUsers() {
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

// Helper to write users
function writeUsers(users) {
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
}

// POST /register
router.post('/register', async (req, res) => {
  const { fname, lname, email, username, password } = req.body;
  const users = readUsers();

  const exists = users.find(u => u.username === username || u.email === email);
  if (exists) return res.send('Username already exists');

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = {
    id: Date.now(),
    fname,
    lname,
    email,
    username,
    password: hashedPassword
  };
  users.push(newUser);
  writeUsers(users);
  res.send('Hello Your account is now created!');
});

// POST /login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const users = readUsers();

  const user = users.find(u => u.username === username);
  if (!user) return res.send('Username or password incorrect');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.send('Username or password incorrect');

  res.send('Welcome! You are logged in.');
});

// GET /users
router.get('/users', (req, res) => {
  res.json(readUsers());
});

// GET /users/:id
router.get('/users/:id', (req, res) => {
  const users = readUsers();
  const user = users.find(u => u.id == req.params.id);
  if (!user) return res.status(404).send('User not found');
  res.json(user);
});

// PUT /users/:id
router.put('/users/:id', (req, res) => {
  const users = readUsers();
  const index = users.findIndex(u => u.id == req.params.id);
  if (index === -1) return res.status(404).send('User not found');

  users[index] = { ...users[index], ...req.body };
  writeUsers(users);
  res.send('User updated');
});

module.exports = router;
