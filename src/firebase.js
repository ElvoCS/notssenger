import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCpn_lg2DTNAZdfoczKZfmsn19sWT64wBc",
  authDomain: "notssenger.firebaseapp.com",
  databaseURL: "https://notssenger.firebaseio.com",
  projectId: "notssenger",
  storageBucket: "notssenger.appspot.com",
  messagingSenderId: "66815196252",
  appId: "1:66815196252:web:6599d5514f4f7605b7fa99",
  measurementId: "G-26KJ1KKRKJ",
});

const db = firebaseApp.firestore();

export default db;
