import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC9hb3pz26BRY1BZpJ9bMSV3hOVpHkBXyY",
    authDomain: "crwn-db-d9b43.firebaseapp.com",
    projectId: "crwn-db-d9b43",
    storageBucket: "crwn-db-d9b43.appspot.com",
    messagingSenderId: "697633500066",
    appId: "1:697633500066:web:a014a737883b509d6360fb",
    measurementId: "G-JZH965QQD3"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;