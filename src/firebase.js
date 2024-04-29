// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Import Firestore
const firebaseConfig = {
    apiKey: "AIzaSyAIHyYNr7j3wISzjgi4glvCXHpYLdF8I6I",
    authDomain: "react-contact-c94f4.firebaseapp.com",
    databaseURL: "https://react-contact-c94f4-default-rtdb.firebaseio.com",
    projectId: "react-contact-c94f4",
    storageBucket: "react-contact-c94f4.appspot.com",
    messagingSenderId: "330554779169",
    appId: "1:330554779169:web:817f1ee84c164f92936560"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("Firebase app initialized successfully!"); // Added console log

const analytics = getAnalytics(app);

export const db = getFirestore(app);

export default app;