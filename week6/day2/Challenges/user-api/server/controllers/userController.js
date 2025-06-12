const UserModel = require('../models/userModel');

class UserController {
  // Register a new user
  static async register(req, res, next) {
    try {
      const { email, username, firstName, lastName, password } = req.body;

      // Validation
      if (!email || !username || !firstName || !lastName || !password) {
        return res.status(400).json({
          success: false,
          error: 'All fields are required',
          required: ['email', 'username', 'firstName', 'lastName', 'password']
        });
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({
          success: false,
          error: 'Please provide a valid email address'
        });
      }

      // Password validation
      if (password.length < 6) {
        return res.status(400).json({
          success: false,
          error: 'Password must be at least 6 characters long'
        });
      }

      // Check if username already exists
      const usernameExists = await UserModel.usernameExists(username);
      if (usernameExists) {
        return res.status(409).json({
          success: false,
          error: 'Username already exists'
        });
      }

      // Check if email already exists
      const emailExists = await UserModel.emailExists(email);
      if (emailExists) {
        return res.status(409).json({
          success: false,
          error: 'Email already exists'
        });
      }

      const newUser = await UserModel.create({
        email: email.toLowerCase().trim(),
        username: username.trim(),
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        password
      });

      res.status(201).json({
        success: true,
        message: 'User registered successfully',
        data: {
          user: newUser
        }
      });
    } catch (error) {
      next(error);
    }
  }

  // Login user
  static async login(req, res, next) {
    try {
      const { username, password } = req.body;

      if (!username || !password) {
        return res.status(400).json({
          success: false,
          error: 'Username and password are required'
        });
      }

      const isValidPassword = await UserModel.verifyPassword(username, password);
      
      if (!isValidPassword) {
        return res.status(401).json({
          success: false,
          error: 'Invalid username or password'
        });
      }

      const user = await UserModel.findByUsername(username);
      
      res.json({
        success: true,
        message: 'Login successful',
        data: {
          user: {
            id: user.id,
            email: user.email,
            username: user.username,
            firstName: user.first_name,
            lastName: user.last_name
          }
        }
      });
    } catch (error) {
      next(error);
    }
  }

  // Get all users
  static async getAllUsers(req, res, next) {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const offset = (page - 1) * limit;

      const users = await UserModel.findAll(limit, offset);
      const totalUsers = await UserModel.count();
      
      const formattedUsers = users.map(user => ({
        id: user.id,
        email: user.email,
        username: user.username,
        firstName: user.first_name,
        lastName: user.last_name,
        createdAt: user.created_at
      }));

      res.json({
        success: true,
        message: 'Users retrieved successfully',
        data: {
          users: formattedUsers,
          pagination: {
            currentPage: page,
            totalPages: Math.ceil(totalUsers / limit),
            totalUsers,
            hasNext: page < Math.ceil(totalUsers / limit),
            hasPrev: page > 1
          }
        }
      });
    } catch (error) {
      next(error);
    }
  }

  // Get user by ID
  static async getUserById(req, res, next) {
    try {
      const { id } = req.params;
      
      if (!id || isNaN(id)) {
        return res.status(400).json({
          success: false,
          error: 'Valid user ID is required'
        });
      }

      const user = await UserModel.findById(id);
      
      if (!user) {
        return res.status(404).json({
          success: false,
          error: 'User not found'
        });
      }

      res.json({
        success: true,
        message: 'User retrieved successfully',
        data: {
          user: {
            id: user.id,
            email: user.email,
            username: user.username,
            firstName: user.first_name,
            lastName: user.last_name,
            createdAt: user.created_at
          }
        }
      });
    } catch (error) {
      next(error);
    }
  }

  // Update user by ID
  static async updateUser(req, res, next) {
    try {
      const { id } = req.params;
      const { email, username, firstName, lastName } = req.body;

      if (!id || isNaN(id)) {
        return res.status(400).json({
          success: false,
          error: 'Valid user ID is required'
        });
      }

      if (!email || !username || !firstName || !lastName) {
        return res.status(400).json({
          success: false,
          error: 'All fields are required',
          required: ['email', 'username', 'firstName', 'lastName']
        });
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({
          success: false,
          error: 'Please provide a valid email address'
        });
      }

      // Check if user exists
      const existingUser = await UserModel.findById(id);
      if (!existingUser) {
        return res.status(404).json({
          success: false,
          error: 'User not found'
        });
      }

      // Check if new username/email already exists (excluding current user)
      const usernameExists = await UserModel.findByUsername(username);
      if (usernameExists && usernameExists.id !== parseInt(id)) {
        return res.status(409).json({
          success: false,
          error: 'Username already exists'
        });
      }

      const emailExists = await UserModel.findByEmail(email);
      if (emailExists && emailExists.id !== parseInt(id)) {
        return res.status(409).json({
          success: false,
          error: 'Email already exists'
        });
      }

      const result = await UserModel.updateById(id, {
        email: email.toLowerCase().trim(),
        username: username.trim(),
        firstName: firstName.trim(),
        lastName: lastName.trim()
      });

      if (result === 0) {
        return res.status(404).json({
          success: false,
          error: 'User not found or no changes made'
        });
      }

      const updatedUser = await UserModel.findById(id);
      
      res.json({
        success: true,
        message: 'User updated successfully',
        data: {
          user: {
            id: updatedUser.id,
            email: updatedUser.email,
            username: updatedUser.username,
            firstName: updatedUser.first_name,
            lastName: updatedUser.last_name,
            createdAt: updatedUser.created_at
          }
        }
      });
    } catch (error) {
      next(error);
    }
  }

  // Delete user by ID
  static async deleteUser(req, res, next) {
    try {
      const { id } = req.params;
      
      if (!id || isNaN(id)) {
        return res.status(400).json({
          success: false,
          error: 'Valid user ID is required'
        });
      }

      const result = await UserModel.deleteById(id);
      
      if (result === 0) {
        return res.status(404).json({
          success: false,
          error: 'User not found'
        });
      }

      res.json({
        success: true,
        message: 'User deleted successfully'
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
