import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMBkELhHrZZpOje4wuNvL4OnLQ56uMbX0",
  authDomain: "challenge-911dd.firebaseapp.com",
  databaseURL: "https://challenge-911dd.firebaseio.com",
  projectId: "challenge-911dd",
  storageBucket: "challenge-911dd.appspot.com",
  messagingSenderId: "1011917056615",
  appId: "1:1011917056615:web:a209556132faae81e542c2",
  measurementId: "G-2FQT59BET8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

//lets initialize the DBase
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
