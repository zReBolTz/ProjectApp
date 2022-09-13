import firebase from 'firebase'

export const firebaseConfig = {
  apiKey: "AIzaSyCreqb4bre7iQ00MiW7vK6Fcb0IzJAulzU",
  authDomain: "projectapp-34000.firebaseapp.com",
  databaseURL: "https://projectapp-34000-default-rtdb.firebaseio.com",
  projectId: "projectapp-34000",
  storageBucket: "projectapp-34000.appspot.com",
  messagingSenderId: "69185509026",
  appId: "1:69185509026:web:bc9a9c8d1ee52ee11e69fb",
  measurementId: "G-NWPMV7PCW8"
};

firebase.initializeApp(firebaseConfig)

export const firebaseAuth = firebase.auth