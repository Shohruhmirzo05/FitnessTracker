# MongoDB Atlas Setup Guide

Follow these steps to set up a free MongoDB Atlas cluster and connect it to your Fitness Goal Tracker app:

## 1. Create MongoDB Atlas Account

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
2. Sign up for a free account (or login if you already have one)

## 2. Create a Free Cluster

1. Click "Build a Database"
2. Choose the "FREE" shared tier
3. Select AWS as the provider and a region close to you
4. Click "Create Cluster" (this may take a few minutes to create)

## 3. Set Up Database Access

1. In the left sidebar, click "Database Access" under SECURITY
2. Click "Add New Database User"
3. Select "Password" authentication method
4. Enter a username and password (IMPORTANT: Remember these!)
5. Select "Read and write to any database" for user privileges
6. Click "Add User"

## 4. Set Up Network Access

1. In the left sidebar, click "Network Access" under SECURITY
2. Click "Add IP Address"
3. Click "ALLOW ACCESS FROM ANYWHERE" (for development only)
4. Click "Confirm"

## 5. Get Connection String

1. In the left sidebar, click "Database" under DEPLOYMENT
2. Click "Connect" on your cluster
3. Select "Connect your application"
4. Copy the connection string

## 6. Update Your Application

1. Edit your `.env` file in your project
2. Add or update the MONGODB_URI variable with your connection string:
   ```
   MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/fitness-tracker
   ```
3. Replace `<username>`, `<password>`, and `<cluster-name>` with your actual values
4. Make sure to replace `<password>` with the password you created for your database user
5. The `/fitness-tracker` at the end of the URI is your database name

## 7. Restart Your Application

1. Restart your application:
   ```
   npm run dev
   ```

Your application should now connect to MongoDB Atlas instead of a local MongoDB instance. 