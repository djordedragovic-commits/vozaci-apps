'use strict';

// Firebase configuration
const firebaseConfig = {
  apiKey: 'your_api_key',
  authDomain: 'your_app.firebaseapp.com',
  databaseURL: 'https://your_app.firebaseio.com',
  projectId: 'your_app',
  storageBucket: 'your_app.appspot.com',
  messagingSenderId: 'your_messaging_sender_id',
  appId: 'your_app_id'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);