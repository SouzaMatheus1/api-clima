// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { config } from "dotenv"; config(); 
import { getDatabase } from "firebase/database";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const { 
    API_KEY_FIREBASE, 
    AUTH_DOMAIN, 
    PROJECT_ID, 
    SOTRAGE_BUCKET, 
    MESSAGING_SENDER_ID, 
    APP_ID 
} = process.env;

const firebaseConfig = {
  apiKey: API_KEY_FIREBASE,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: SOTRAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
module.exports = { db }