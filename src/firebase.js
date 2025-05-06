// src/firebase.js

// Import Firebase core and services
import { initializeApp } from "firebase/app"; // Used to initialize Firebase
import { getFirestore } from "firebase/firestore"; // Firestore database service
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // Firebase Authentication and Google provider

// Firebase project configuration (taken from Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyDEfn5AXkA_OiirSmI-8-XHht5c7wyLWMo", // Public API key
  authDomain: "cpit405-457723.firebaseapp.com", // Authentication domain
  projectId: "cpit405-457723", // Firebase project ID
  storageBucket: "cpit405-457723.appspot.com", // (Optional) used for file storage
  messagingSenderId: "341977713980", // (Optional) used for messaging
  appId: "1:341977713980:web:87e07462f2cdb7f822239", // Unique app ID
};

// Initialize Firebase app using the config
const app = initializeApp(firebaseConfig);

// Get Firestore database instance
const db = getFirestore(app);

// Get Firebase Authentication instance
const auth = getAuth(app);

// Create Google sign-in provider
const provider = new GoogleAuthProvider();

// Export db, auth, and provider so we can use them in other parts of the app
export { db, auth, provider };
