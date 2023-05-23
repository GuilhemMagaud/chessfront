// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAtImVr0Z8s3gieIzCh5ZVfOYhHX1adBGo",
    authDomain: "chess-royal-db.firebaseapp.com",
    projectId: "chess-royal-db",
    storageBucket: "chess-royal-db.appspot.com",
    messagingSenderId: "348704750973",
    appId: "1:348704750973:web:edbe3fd87f7a132f166014"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firestore
const firestore = firebase.firestore();

// Auth
const auth = firebase.auth();

export { firebase, firestore, auth };

