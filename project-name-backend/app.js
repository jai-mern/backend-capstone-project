// app.js
const express = require('express');
const mongoose = require('mongoose');
const errorHandler = require('./Middleware/errorHandling');
const app = express();

// Your existing middleware and route imports
const authRoutes = require('./routes/authRoutes');
const inventoryRoutes = require('./routes/inventoryRoutes');
const billingRoutes = require('./routes/billingRoutes');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
const { url } = require('./config/database');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to the database');
});

// Routes
app.use('/auth', authRoutes);
app.use('/inventory', inventoryRoutes);
app.use('/billing', billingRoutes);

// Error handler middleware
app.use(errorHandler);

module.exports = app;
