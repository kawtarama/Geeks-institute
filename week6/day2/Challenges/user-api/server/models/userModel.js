


const db = require('../config/db');
const bcrypt = require('bcrypt');

class UserModel {
  // Create a new user with transaction
  static async create(userData) {
    const { email, username, firstName, lastName, password } = userData;
    
    return db.transaction(async (trx) => {
      try {
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Insert user data
        const [userId] = await trx('users').insert({
          email,
          username,
          first_name: firstName,
          last_name: lastName
        });
        
        // Insert hashed password
        await trx('hashpwd').insert({
          username,
          password: hashedPassword
        });
        
        // Return user data without password
        return {
          id: userId,
          email,
          username,
          firstName,
          lastName
        };
      } catch (error) {
        throw error;
      }
    });
  }

  // Find user by username with password
  static async findByUsernameWithPassword(username) {
    const result = await db('users')
      .select(
        'users.id',
        'users.email',
        'users.username',
        'users.first_name',
        'users.last_name',
        'users.created_at',
        'hashpwd.password'
      )
      .join('hashpwd', 'users.username', 'hashpwd.username')
      .where('users.username', username)
      .first();
    
    return result;
  }

  // Find user by username without password
  static async findByUsername(username) {
    const result = await db('users')
      .select('id', 'email', 'username', 'first_name', 'last_name', 'created_at')
      .where('username', username)
      .first();
    
    return result;
  }

  // Find user by ID
  static async findById(id) {
    const result = await db('users')
      .select('id', 'email', 'username', 'first_name', 'last_name', 'created_at')
      .where('id', id)
      .first();
    
    return result;
  }

  // Find user by email
  static async findByEmail(email) {
    const result = await db('users')
      .select('id', 'email', 'username', 'first_name', 'last_name', 'created_at')
      .where('email', email)
      .first();
    
    return result;
  }

  // Get all users
  static async findAll(limit = 50, offset = 0) {
    const results = await db('users')
      .select('id', 'email', 'username', 'first_name', 'last_name', 'created_at')
      .orderBy('created_at', 'desc')
      .limit(limit)
      .offset(offset);
    
    return results;
  }

  // Update user by ID
  static async updateById(id, userData) {
    const { email, username, firstName, lastName } = userData;
    
    const updateData = {
      email,
      username,
      first_name: firstName,
      last_name: lastName,
      updated_at: db.fn.now()
    };
    
    const result = await db('users')
      .where('id', id)
      .update(updateData);
    
    return result;
  }

  // Delete user by ID (with transaction)
  static async deleteById(id) {
    return db.transaction(async (trx) => {
      try {
        // Get username first
        const user = await trx('users')
          .select('username')
          .where('id', id)
          .first();
        
        if (!user) {
          return 0;
        }
        
        // Delete from hashpwd table first
        await trx('hashpwd')
          .where('username', user.username)
          .del();
        
        // Delete from users table
        const result = await trx('users')
          .where('id', id)
          .del();
        
        return result;
      } catch (error) {
        throw error;
      }
    });
  }

  // Verify password
  static async verifyPassword(username, password) {
    const user = await this.findByUsernameWithPassword(username);
    
    if (!user) {
      return false;
    }
    
    return bcrypt.compare(password, user.password);
  }

  // Get user count
  static async count() {
    const result = await db('users').count('id as count').first();
    return result.count;
  }

  // Check if username exists
  static async usernameExists(username) {
    const result = await db('users')
      .where('username', username)
      .first();
    
    return !!result;
  }

  // Check if email exists
  static async emailExists(email) {
    const result = await db('users')
      .where('email', email)
      .first();
    
    return !!result;
  }
}

module.exports = UserModel;