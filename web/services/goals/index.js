const Goal = require('../../models/Goal');

/**
 * Get all goals
 * @returns {Promise<Array>} List of all goals
 */
exports.getAllGoals = async () => {
  return await Goal.find().sort({ createdAt: -1 });
};

/**
 * Get goal by ID
 * @param {string} id - Goal ID
 * @returns {Promise<Object>} Goal object
 */
exports.getGoalById = async (id) => {
  return await Goal.findById(id);
};

/**
 * Create new goal
 * @param {Object} goalData - Goal data
 * @returns {Promise<Object>} Created goal
 */
exports.createGoal = async (goalData) => {
  const goal = new Goal(goalData);
  return await goal.save();
};

/**
 * Update goal
 * @param {string} id - Goal ID
 * @param {Object} goalData - Goal data to update
 * @returns {Promise<Object>} Updated goal
 */
exports.updateGoal = async (id, goalData) => {
  return await Goal.findByIdAndUpdate(id, goalData, {
    new: true,
    runValidators: true
  });
};

/**
 * Delete goal
 * @param {string} id - Goal ID
 * @returns {Promise<Object>} Deleted goal
 */
exports.deleteGoal = async (id) => {
  return await Goal.findByIdAndDelete(id);
}; 