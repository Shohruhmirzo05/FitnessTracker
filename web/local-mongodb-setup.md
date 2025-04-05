# Local MongoDB Setup Guide for macOS

Follow these steps to install and run MongoDB locally on your Mac:

## Install MongoDB using Homebrew

1. Make sure Homebrew is installed:
   ```
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

2. Update Homebrew:
   ```
   brew update
   ```

3. Tap the MongoDB Homebrew Tap:
   ```
   brew tap mongodb/brew
   ```

4. Install MongoDB Community Edition:
   ```
   brew install mongodb-community
   ```

## Starting MongoDB

1. Start the MongoDB service:
   ```
   brew services start mongodb-community
   ```

2. Verify MongoDB is running:
   ```
   brew services list
   ```
   You should see `mongodb-community` listed as `started`

## Stopping MongoDB

If you need to stop MongoDB:
```
brew services stop mongodb-community
```

## Connecting to MongoDB

1. Use the MongoDB shell:
   ```
   mongosh
   ```

2. You can create a new database:
   ```
   use fitness-tracker
   ```

3. Create a collection:
   ```
   db.createCollection("goals")
   ```

4. Insert a test document:
   ```
   db.goals.insertOne({ title: "Test Goal", description: "Test Description", goalType: "weight", targetValue: 70, unit: "kg", endDate: new Date() })
   ```

5. Find all documents:
   ```
   db.goals.find()
   ```

## Potential Issues

If you encounter "connection refused" errors:

1. Check if MongoDB is actually running:
   ```
   ps aux | grep mongod
   ```

2. Verify the MongoDB data directory exists:
   ```
   ls -la /usr/local/var/mongodb
   ```

3. If it doesn't exist, create it:
   ```
   mkdir -p /usr/local/var/mongodb
   ```

4. Set permissions:
   ```
   sudo chown -R $(whoami) /usr/local/var/mongodb
   ```

5. Try restarting MongoDB:
   ```
   brew services restart mongodb-community
   ```

## Installing MongoDB Compass (GUI)

MongoDB Compass is a graphical user interface for MongoDB:

```
brew install --cask mongodb-compass
```

After installation, open MongoDB Compass and connect to:
```
mongodb://localhost:27017
``` 