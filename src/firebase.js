import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBg_f2CyHRbsfmtSaRP3kPB6_DBKV4eKiI",
    authDomain: "clone-8707f.firebaseapp.com",
    projectId: "clone-8707f",
    storageBucket: "clone-8707f.appspot.com",
    messagingSenderId: "41061351355",
    appId: "1:41061351355:web:b8d0de0946a51b1b3dce9e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
