# Firebase Setup Guide

This guide provides complete instructions for setting up Firebase for the `vozaci-apps` project.

## Step 1: Create a Firebase Project
1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Click on **Add project**.
3. Enter a project name, for example, `vozaci-app`. 
4. (Optional) Set up Google Analytics for your project. Choose your preferences and click **Create project**.
5. Once the project is created, click **Continue**.

## Step 2: Get Configuration Keys
1. In the Firebase console, click on the **Settings** (gear icon) next to Project Overview.
2. Click on **Project settings**.
3. Scroll down to your apps section (Web Apps) and click on **Add app** if you haven’t added one already.
4. Select **Web** and enter a nickname for your app.
5. Click **Register app**.
6. You will now see your Firebase configuration keys (apiKey, authDomain, etc.). Copy these for later use.

## Step 3: Enable Database and Authentication
### Enable Firestore Database
1. In the Firebase console, on the left-hand menu, click on **Firestore Database**.
2. Click **Create database**.
3. Start in test mode to ease development, then click **Next**.
4. Select a location for your Firestore and click **Done**.

### Enable Authentication
1. In the Firebase console, click on **Authentication**.
2. Click on **Get Started**.
3. Click on the **Sign-in method** tab.
4. Enable the method you want (e.g., Email/Password) by clicking the toggle.
5. Click **Save**.

## Step 4: Update HTML Files with the Config
1. Open your HTML file where Firebase will be initialized (e.g., `index.html`).
2. Add the Firebase config snippet you copied earlier, inside a `<script>` tag:
   ```html
   <script>
       var firebaseConfig = {
           apiKey: "YOUR_API_KEY",
           authDomain: "YOUR_AUTH_DOMAIN",
           projectId: "YOUR_PROJECT_ID",
           storageBucket: "YOUR_STORAGE_BUCKET",
           messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
           appId: "YOUR_APP_ID"
       };
       // Initialize Firebase
       firebase.initializeApp(firebaseConfig);
   </script>
   ```
3. Ensure you include the Firebase SDK in your HTML:
   ```html
   <script src="https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js"></script>
   <script src="https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js"></script>
   <script src="https://www.gstatic.com/firebasejs/9.1.2/firebase-firestore.js"></script>
   ```

## Usage Instructions
- You can now start using Firebase services like Authentication and Firestore within your app.
- Refer to the Firebase documentation for detailed usage scenarios: [Firebase Docs](https://firebase.google.com/docs).

## Troubleshooting Guide
- If you face issues, ensure that:
  - Your Firebase config keys are correctly copied and pasted.
  - The necessary Authentication methods are enabled in the Firebase console.
  - Check Firestore permissions if you encounter access errors.
- Always refer to the Firebase documentation for common troubleshooting steps.