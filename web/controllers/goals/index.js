const { validationResult } = require('express-validator');
const goalService = require('../../services/goals');

/**
 * GET all goals
 */
exports.getAllGoals = async (req, res) => {
  try {
    const goals = await goalService.getAllGoals();
    res.render('goals/index', { 
      title: 'All Fitness Goals',
      goals 
    });
  } catch (error) {
    console.error(error);
    res.status(500).render('error', { 
      message: 'Error retrieving goals',
      error 
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
  // Validate input
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).render('goals/create', {
      title: 'Create New Goal',
      errors: errors.array(),
      formData: req.body
    });
  }

  try {
    const goalData = {
      title: req.body.title,
      description: req.body.description,
      goalType: req.body.goalType,
      targetValue: req.body.targetValue,
      unit: req.body.unit,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      currentValue: req.body.currentValue || 0
    };

    await goalService.createGoal(goalData);
    res.redirect('/goals');
  } catch (error) {
    console.error(error);
    res.status(500).render('goals/create', {
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
  // Validate input
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).render('goals/edit', {
      title: 'Edit Goal',
      errors: errors.array(),
      goal: { 
        _id: req.params.id,
        ...req.body 
      }
    });
  }

  try {
    const goalData = {
      title: req.body.title,
      description: req.body.description,
      goalType: req.body.goalType,
      targetValue: req.body.targetValue,
      unit: req.body.unit,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      currentValue: req.body.currentValue
    };

    const updatedGoal = await goalService.updateGoal(req.params.id, goalData);
    if (!updatedGoal) {
      return res.status(404).render('error', { 
        message: 'Goal not found' 
      });
    }
    res.redirect(`/goals/${req.params.id}`);
  } catch (error) {
    console.error(error);
    res.status(500).render('goals/edit', {
      title: 'Edit Goal',
      error: 'Error updating goal',
      goal: { 
        _id: req.params.id,
        ...req.body 
      }
    });
  }
};

/**
 * DELETE goal
 */
exports.deleteGoal = async (req, res) => {
  try {
    const result = await goalService.deleteGoal(req.params.id);
    if (!result) {
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