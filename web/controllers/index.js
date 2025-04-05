// Controllers for index routes

/**
 * GET home page
 */
exports.getHome = (req, res) => {
  res.render('index', { 
    title: 'Fitness Goal Tracker',
    message: 'Welcome to Fitness Goal Tracker'
  });
}; 