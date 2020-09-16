import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FBAPIKEY,
  authDomain: process.env.REACT_APP_FBAUTHDOMAIN,
  databaseURL: process.env.REACT_APP_FBDATABASEURL,
  projectId: process.env.REACT_APP_FBPROJECTID,
  storageBucket: process.env.REACT_APP_FBSTORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FBMESSAGINGSENDERID,
  appId: process.env.REACT_APP_FBAPPID,
  measurementId: process.env.REACT_APP_FBMEASUREMENTID
};

// passe a configuração do firebase como argumento do initializeApp;
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth(); // parte de autenticação como signIn;

export { db, auth };