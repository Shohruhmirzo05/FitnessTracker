const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Load environment variables
dotenv.config();

// Import routes
const indexRouter = require('./routes/index');
const goalsRouter = require('./routes/goals');

// Initialize Express app
const app = express();

// Set up view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', indexRouter);
app.use('/goals', goalsRouter);

// Error handling
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

// MongoDB connection and server startup
const mongoURI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 3000;

// Connect to MongoDB and start server
async function startServer() {
  try {
    // Connect to MongoDB
    await mongoose.connect(mongoURI, {
      bufferCommands: false,
      retryWrites: true,
      w: 'majority'
    });
    console.log('Connected to MongoDB');
    
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
}

// Handle MongoDB connection errors
mongoose.connection.on('error', err => {
  console.error('Mongoose connection error:', err);
});

// Start the application
startServer();

module.exports = app;