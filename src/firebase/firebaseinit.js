import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDqcDIe02ZX6a92e9B7hpRrR7w7fGYxmi4",
    authDomain: "weatherapp-c76d7.firebaseapp.com",
    projectId: "weatherapp-c76d7",
    storageBucket: "weatherapp-c76d7.appspot.com",
    messagingSenderId: "336078362155",
    appId: "1:336078362155:web:47b7a849cdf866dabffc6e"
  }

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();