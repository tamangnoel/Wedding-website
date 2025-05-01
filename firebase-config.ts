//src/firebase-config.ts

// Import the function to initialize your firebase app
//Import the function to connect to firestore (the database)
// Import the function to connect to firebase storage (for file like images)
import { initializeApp } from "firebase/app"; 
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; 


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
};

// This connects your Next.js app to firebase using information provided
const app = initializeApp(firebaseConfig);

//This creates and exports a Firestore database connection and will use db to read/write data (like guests, photos)
export const db = getFirestore(app);

//this creates and exports a firebase storage connection and will use storage to upload and download files (like images)
export const storage = getStorage(app, "weddingweb-8af3c.firebasestorage.app");

