import { initializeApp } from 'firebase/app';
import { connectAuthEmulator, getAuth } from 'firebase/auth';

const config = {
    // apiKey: `${process.env.API_KEY}`,
    // authDomain: process.env.AUTH_DOMAIN,
    // projectId: process.env.PROJECT_ID,
    // storageBucket: process.env.STORAGE_BUCKET,
    // messagingSenderId: process.env.MESSAGING_SENDER_ID,
    // appId: process.env.APP_ID
    apiKey: "AIzaSyDDckNkklqBucuJFbQVZw4j-YApZ1F1DcU",
    authDomain: "worex-charts.firebaseapp.com",
    projectId: "worex-charts",
    storageBucket: "worex-charts.appspot.com",
    messagingSenderId: "674759504869",
    appId: "1:674759504869:web:bc4d9f8d66d790fe27750c"
};

const firebase = initializeApp(config);

const auth = getAuth(firebase);
// connectAuthEmulator(auth, "http://localhost:3000");

export { firebase, auth };