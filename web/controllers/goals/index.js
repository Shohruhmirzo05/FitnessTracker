const { validationResult } = require('express-validator');
const goalService = require('../../services/goals');
const mongoose = require('mongoose');

/**
 * GET all goals
 */
exports.getAllGoals = async (req, res) => {
  try {
    if (!mongoose.connection.readyState) {
      throw new Error('Database connection not ready');
    }
    const goals = await goalService.getAllGoals();
    res.render('goals/index', { 
      title: 'All Goals',
      goals,
      error: null
    });
  } catch (error) {
    console.error('Error retrieving goals:', error);
    res.render('goals/index', { 
      title: 'All Goals',
      goals: [],
      error: 'Error retrieving goals. Please try again later.'
    });
  }
};

/**
 * GET goal by ID
 */
exports.getGoalById = async (req, res) => {
  try {
    const goal = await goalService.getGoalById(req.params.id);
    if (!goal) {
      return res.status(404).render('error', { 
        message: 'Goal not found' 
      });
    }
    res.render('goals/details', { 
      title: goal.title, 
      goal 
    });
  } catch (error) {
    console.error(error);
    res.status(500).render('error', { 
      message: 'Error retrieving goal',
      error 
    });
  }
};

/**
 * GET create goal form
 */
exports.getCreateGoalForm = (req, res) => {
  res.render('goals/create', { 
    title: 'Create New Goal' 
  });
};

/**
 * POST create new goal
 */
exports.createGoal = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.render('goals/create', {
      title: 'Create New Goal',
      errors: errors.array(),
      formData: req.body
    });
  }

  try {
    await goalService.createGoal(req.body);
    res.redirect('/goals');
  } catch (error) {
    console.error(error);
    res.render('goals/create', {
      title: 'Create New Goal',
      error: 'Error creating goal',
      formData: req.body
    });
  }
};

/**
 * GET update goal form
 */
exports.getUpdateGoalForm = async (req, res) => {
  try {
    const goal = await goalService.getGoalById(req.params.id);
    if (!goal) {
      return res.status(404).render('error', { 
        message: 'Goal not found' 
      });
    }
    res.render('goals/edit', { 
      title: 'Edit Goal',
      goal 
    });
  } catch (error) {
    console.error(error);
    res.status(500).render('error', { 
      message: 'Error retrieving goal',
      error 
    });
  }
};

/**
 * PUT update goal
 */
exports.updateGoal = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.render('goals/edit', {
      title: 'Edit Goal',
      errors: errors.array(),
      goal: { ...req.body, _id: req.params.id }
    });
  }

  try {
    const goal = await goalService.updateGoal(req.params.id, req.body);
    if (!goal) {
      return res.status(404).render('error', { 
        message: 'Goal not found' 
      });
    }
    res.redirect(`/goals/${req.params.id}`);
  } catch (error) {
    console.error(error);
    res.render('goals/edit', {
      title: 'Edit Goal',
      error: 'Error updating goal',
      goal: { ...req.body, _id: req.params.id }
    });
  }
};

/**
 * DELETE goal
 */
exports.deleteGoal = async (req, res) => {
  try {
    const goal = await goalService.deleteGoal(req.params.id);
    if (!goal) {
      return res.status(404).render('error', { 
        message: 'Goal not found' 
      });
    }
    res.redirect('/goals');
  } catch (error) {
    console.error(error);
    res.status(500).render('error', { 
      message: 'Error deleting goal',
      error 
    });
  }
}; 