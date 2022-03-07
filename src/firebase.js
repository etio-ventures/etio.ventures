import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore';

initializeApp({
    apiKey: "AIzaSyAqzs86ILi2T63NAwrJbW5821JPEDeq9-Y",
    authDomain: "newsletter-8d38d.firebaseapp.com",
    projectId: "newsletter-8d38d",
    storageBucket: "newsletter-8d38d.appspot.com",
    messagingSenderId: "889685366741",
    appId: "1:889685366741:web:dfe19585fff1f1a9bf8f5c"
});
const db = getFirestore();

export default db;