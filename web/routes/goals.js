const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const goalController = require('../controllers/goals');

// Validation middleware for goals
const validateGoal = [
  check('title')
    .notEmpty().withMessage('Title is required')
    .isLength({ min: 3, max: 100 }).withMessage('Title must be between 3 and 100 characters'),
  check('goalType')
    .notEmpty().withMessage('Goal type is required')
    .isIn(['weight', 'distance', 'time', 'repetition', 'other']).withMessage('Invalid goal type'),
  check('targetValue')
    .notEmpty().withMessage('Target value is required')
    .isNumeric().withMessage('Target value must be a number'),
  check('unit')
    .notEmpty().withMessage('Unit is required'),
  check('endDate')
    .notEmpty().withMessage('End date is required')
    .isISO8601().withMessage('Invalid date format')
];

// Get all goals
router.get('/', goalController.getAllGoals);

// Create new goal form
router.get('/create', goalController.getCreateGoalForm);

// Create new goal
router.post('/', validateGoal, goalController.createGoal);

// Get single goal
router.get('/:id', goalController.getGoalById);

// Update goal form
router.get('/:id/edit', goalController.getUpdateGoalForm);

// Update goal
router.put('/:id', validateGoal, goalController.updateGoal);

// Delete goal
router.delete('/:id', goalController.deleteGoal);

module.exports = router; 