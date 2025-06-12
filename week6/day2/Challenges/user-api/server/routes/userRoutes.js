const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// User authentication routes
router.post('/register', UserController.register);
router.post('/login', UserController.login);

// User CRUD routes
router.get('/users', UserController.getAllUsers);
router.get('/users/:id', UserController.getUserById);
router.put('/users/:id', UserController.updateUser);
router.delete('/users/:id', UserController.deleteUser);

module.exports = router;

// migrations/001_create_users_table.js
exports.up = function(knex) {
  return knex.schema.createTable('users', function(table) {
    table.increments('id').primary();
    table.string('email').notNullable().unique();
    table.string('username').notNullable().unique();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.timestamps(true, true);
    
    // Indexes
    table.index(['email']);
    table.index(['username']);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};

// migrations/002_create_hashpwd_table.js
exports.up = function(knex) {
  return knex.schema.createTable('hashpwd', function(table) {
    table.increments('id').primary();
    table.string('username').notNullable().unique();
    table.text('password').notNullable();
    table.timestamps(true, true);
    
    // Foreign key constraint
    table.foreign('username').references('username').inTable('users').onDelete('CASCADE');
    
    // Index
    table.index(['username']);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('hashpwd');
};