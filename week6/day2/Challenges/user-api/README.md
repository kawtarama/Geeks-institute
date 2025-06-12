 User Management API

A robust User Management API built with Express.js, Knex.js, and SQLite.

## Features

- User registration with password hashing
- User authentication
- CRUD operations for users
- Database transactions
- Input validation
- Error handling
- Pagination support
- Security middleware

## Installation

1. Install dependencies:
```bash
npm install
```

2. Run database migrations:
```bash
npm run migrate
```

3. Start the server:
```bash
npm start
# or for development
npm run dev
```

## API Endpoints

### Authentication
- `POST /api/register` - Register a new user
- `POST /api/login` - User login

### User Management
- `GET /api/users` - Get all users (with pagination)
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

## Example Usage

### Register User
```bash
curl -X POST http://localhost:3000/api/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "username": "johndoe",
    "firstName": "John",
    "lastName": "Doe",
    "password": "password123"
  }'
```

### Login
```bash
curl -X POST http://localhost:3000/api/login \
  -H "Content-Type: application/json" \
  -d '{
    "username": "johndoe",
    "password": "password123"
  }'
```