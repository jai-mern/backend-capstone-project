// controllers/authController.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { secret } = require('../config/jwt');

const login = async (req, res) => {
  // Implement your login logic
};

const register = async (req, res) => {
  // Implement your registration logic
};

module.exports = {
  login,
  register,
};
