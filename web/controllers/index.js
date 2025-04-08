// Controllers for index routes
const Goal = require('../models/Goal');
const mongoose = require('mongoose');

/**
 * GET home page
 */
exports.getHome = async (req, res) => {
  try {
    // Check if database is connected
    if (mongoose.connection.readyState !== 1) {
      return res.render('index', { 
        title: 'Fitness Goal Tracker',
        message: 'Welcome to Fitness Goal Tracker',
        goalCount: 0,
        error: 'Database connection is not ready. Please try again later.'
      });
    }
    
    const goalCount = await Goal.countDocuments();
    res.render('index', { 
      title: 'Fitness Goal Tracker',
      message: 'Welcome to Fitness Goal Tracker',
      goalCount,
      error: null
    });
  } catch (error) {
    console.error('Error checking goals:', error);
    res.render('index', { 
      title: 'Fitness Goal Tracker',
      message: 'Welcome to Fitness Goal Tracker',
      goalCount: 0,
      error: 'Error retrieving data. Please try again later.'
    });
  }
}; 