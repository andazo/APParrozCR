// Firebase configuration
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyASOh6bMoe0EADw0UOMQM9DQzD0leN8uMY",
    authDomain: "crarroz.firebaseapp.com",
    projectId: "crarroz",
    storageBucket: "crarroz.appspot.com",
    messagingSenderId: "114620614085",
    appId: "1:114620614085:web:7defa330649a89fed0b7ac",
    measurementId: "G-7JGNWX4CT5"
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    //const analytics = getAnalytics(app);
}

export {firebase};