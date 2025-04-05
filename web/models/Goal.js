const mongoose = require('mongoose');

const GoalSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  goalType: {
    type: String,
    required: true,
    enum: ['weight', 'distance', 'time', 'repetition', 'other'],
    default: 'other'
  },
  targetValue: {
    type: Number,
    required: true
  },
  unit: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    default: Date.now
  },
  endDate: {
    type: Date,
    required: true
  },
  currentValue: {
    type: Number,
    default: 0
  },
  progress: {
    type: Number,
    default: 0
  },
  completed: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Calculate progress when saving
GoalSchema.pre('save', function(next) {
  this.progress = (this.currentValue / this.targetValue) * 100;
  
  // Check if goal is completed
  if (this.progress >= 100) {
    this.completed = true;
    this.progress = 100;
  }
  
  next();
});

module.exports = mongoose.model('Goal', GoalSchema); 