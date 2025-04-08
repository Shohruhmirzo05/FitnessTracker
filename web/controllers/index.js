// Controllers for index routes
const Goal = require('../models/Goal');

/**
 * GET home page
 */
exports.getHome = async (req, res) => {
  try {
    const goalsCount = await Goal.countDocuments();
    res.render('index', { 
      title: 'Fitness Goal Tracker',
      message: 'Welcome to Fitness Goal Tracker',
      hasGoals: goalsCount > 0
    });
  } catch (error) {
    console.error('Error checking goals:', error);
    res.render('index', { 
      title: 'Fitness Goal Tracker',
      message: 'Welcome to Fitness Goal Tracker',
      hasGoals: false
    });
  }
}; 