1.Digital Library

A simple Digital Library web application built with Node.js, Express, MongoDB (Mongoose), and Firebase Authentication. Users can sign up / log in and access library features through a clean web interface.

2.Features

User authentication (Sign up / Log in) via Firebase
Backend REST API built with Express
MongoDB database integration using Mongoose
Static frontend (HTML, CSS, JS)

3.Tech Stack

Backend: Node.js, Express.js
Database: MongoDB (Mongoose)
Authentication: Firebase Auth
Frontend: HTML, CSS, JavaScript


4.Prerequisites
Before running this project, make sure you have:

Node.js (v16 or higher recommended)
MongoDB (local installation or a MongoDB Atlas cluster)
A Firebase project with Authentication enabled


5.Getting Started

5.1. Clone the repository

bashgit clone https://github.com/keerthana1574/Digital_library.git
cd Digital_library

5.2. Install dependencies

bashnpm install

5.3. Configure MongoDB

Open server.js and update the MongoDB connection string with your own database URI:

jsmongoose.connect("your-mongodb-connection-string");

5.4. Configure Firebase

Open script.js and replace the Firebase config with your own project's credentials (from Firebase Console → Project Settings → General):

jsconst firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

Make sure Email/Password sign-in is enabled under Firebase Console → Authentication → Sign-in method.

5.5. Run the server

bashnpm start

The server should start and connect to MongoDB. By default it runs on the port specified in server.js (commonly http://localhost:3000).

5.6. Open the app

Open index.html in your browser, or use the VS Code Live Server extension for the best experience (right-click index.html → "Open with Live Server").

6.Project Structure

Digital_library/
├── index.html        # Landing / home page
├── auth.html          # Login / signup page
├── script.js          # Frontend logic + Firebase auth
├── server.js          # Express backend + MongoDB connection
├── package.json       # Project dependencies and scripts
└── README.md          # Project documentation

7.Troubleshooting

"Authentication failed" error: Make sure your Firebase config in script.js matches your own Firebase project, and that Email/Password sign-in is enabled in the Firebase console.
MongoDB connection errors: Double-check your connection string and ensure your IP is whitelisted if using MongoDB Atlas.


8.License
This project is open source and available for educational purposes.
