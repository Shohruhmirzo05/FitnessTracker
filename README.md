# Fitness Goal Tracker

A web application for tracking fitness goals and progress, built with Express.js and Node.js.

## About the App

This web application was created to fulfill Web Technology module's requirements and does not represent an actual company or service.

The Fitness Goal Tracker helps you manage your fitness journey by allowing you to:
- Create and track fitness goals (weight loss, running distance, etc.)
- Monitor your progress with visual indicators
- Update goals as you progress
- Remove completed or outdated goals
- View your goal statistics

## Project Structure

```
/fitness-tracker
├── app.js                 # Main application file
├── package.json          # Project configuration
├── .gitignore           # Git ignore file
├── /public              # Static files
│   ├── /images
│   ├── /javascripts
│   └── /styles
│       └── style.css
├── /routes              # Route definitions
│   ├── index.js
│   └── goals.js
├── /controllers         # Request handlers
│   ├── index.js
│   └── /goals
│       └── index.js
├── /services           # Business logic
│   └── /goals
│       └── index.js
├── /views              # Pug templates
│   ├── layout.pug
│   ├── index.pug
│   └── /goals
│       ├── index.pug
│       ├── create.pug
│       ├── edit.pug
│       └── details.pug
└── /models             # Database models
    └── Goal.js
```

## Dependencies

- express: ^4.18.2
- mongoose: ^8.0.3
- pug: ^3.0.2
- dotenv: ^16.3.1
- method-override: ^3.0.0
- express-validator: ^7.0.1

## Installation and Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Shohruhmirzo05/FitnessTracker.git
   cd FitnessTracker/web
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up MongoDB**:
   - Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
   - Create a new cluster (free tier is sufficient)
   - Set up database access:
     - Go to Security → Database Access
     - Create a new database user with read/write permissions
   - Set up network access:
     - Go to Security → Network Access
     - Add IP Address → Allow Access from Anywhere (0.0.0.0/0)
   - Get your connection string:
     - Go to your cluster → Connect → Connect your application
     - Copy the connection string

4. **Configure environment variables**:
   Create a `.env` file in the root directory with:
   ```
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   NODE_ENV=development
   ```
   Replace `your_mongodb_connection_string` with the connection string from MongoDB Atlas.
   Make sure to replace `<username>`, `<password>`, and `<dbname>` in the connection string with your actual values.

5. **Start the application**:
   ```bash
   npm start
   ```

6. **Access the application**:
   Open your browser and go to `http://localhost:3000`

## Features

- Create, read, update, and delete fitness goals
- Track progress with visual indicators
- Set target values and deadlines
- View goal completion status
- Responsive design for all devices
- Form validation and error handling
- MongoDB database integration

## Links

* GitHub Repository: [FitnessTracker](https://github.com/Shohruhmirzo05/FitnessTracker)
* Live Application: [FitnessTracker App](https://dashboard.render.com/) (Application is live and fully functional - you can check it out!)

## Technologies Used

- Backend: Node.js, Express.js
- Database: MongoDB with Mongoose
- Template Engine: Pug
- Frontend: HTML, CSS, JavaScript
- Validation: express-validator
- Environment Variables: dotenv 