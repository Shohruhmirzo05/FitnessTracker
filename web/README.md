# Fitness Goal Tracker

A dynamic web application for tracking fitness goals. This application allows users to create, read, update, and delete fitness goals with specific targets and track their progress over time.

## About the App

Fitness Goal Tracker is a comprehensive web application that helps users manage their fitness journey. Users can:

- Create specific fitness goals with details such as target value, unit of measurement, and deadlines
- Track progress toward goals in real-time with progress bars and percentage indicators
- Update goal details or current progress as they advance in their fitness journey
- Delete completed or outdated goals
- View a dashboard of all active and completed goals

The application is built with modern web technologies and follows best practices for web development.

## How to Run the App Locally

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)

### Installation Steps

1. Clone the repository:
   ```
   git clone <repository-url>
   cd fitness-goal-tracker
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/fitness-tracker
   NODE_ENV=development
   ```

4. Make sure MongoDB is running. If using a local MongoDB instance, start it with:
   ```
   mongod
   ```

5. Start the application:
   ```
   npm start
   ```

6. For development with auto-restart on file changes:
   ```
   npm run dev
   ```

7. Access the application in your browser at:
   ```
   http://localhost:3000
   ```

## Application Dependencies

- **Express.js**: Web application framework
- **Mongoose**: MongoDB object modeling tool
- **Pug**: Template engine for rendering views
- **dotenv**: Environment variable management
- **express-validator**: Form validation middleware
- **method-override**: Middleware for HTTP method override (PUT/DELETE)
- **morgan**: HTTP request logger middleware
- **body-parser**: Request body parsing middleware

### Dev Dependencies

- **nodemon**: Development utility for auto-restarting server

## Project Structure

The application follows the MVC (Model-View-Controller) architecture pattern:

```
/fitness-goal-tracker
│
├── app.js                  # Main application file
├── package.json            # Project configuration
├── .env                    # Environment variables (not in repo)
├── .gitignore              # Git ignore file
│
├── /public                 # Static files
│   ├── /images             # Image assets
│   ├── /javascripts        # Client-side JavaScript
│   │   └── main.js
│   └── /styles             # CSS stylesheets
│       └── style.css
│
├── /routes                 # Route definitions
│   ├── index.js            # Main routes
│   └── goals.js            # Goal-related routes
│
├── /controllers            # Request handlers
│   ├── index.js            # Main controllers
│   └── /goals
│       └── index.js        # Goal-related controllers
│
├── /models                 # Data models
│   └── Goal.js             # Goal model definition
│
├── /services               # Business logic
│   ├── index.js
│   └── /goals
│       └── index.js        # Goal-related services
│
└── /views                  # Pug templates
    ├── layout.pug          # Main layout
    ├── index.pug           # Home page
    ├── error.pug           # Error page
    └── /goals
        ├── index.pug       # Goals listing
        ├── create.pug      # Create goal form
        ├── edit.pug        # Edit goal form
        └── details.pug     # Goal details
```

## Links

- GitHub Repository: [Link to GitHub repo]
- Hosted Application: [Link to hosted application]

## License

This project is licensed under the ISC License. 