import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyBKYLdktrmBtjTeeVHGl2YCtqSK8YmD-cQ",
    authDomain: "aerobot-integrador.firebaseapp.com",
    databaseURL: "https://aerobot-integrador.firebaseio.com",
    projectId: "aerobot-integrador",
    storageBucket: "aerobot-integrador.appspot.com",
    messagingSenderId: "614277730758",
    appId: "1:614277730758:web:73e7fe0488a70d3d6622c7",
    measurementId: "G-VZ54RD2N35"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export const firestore = firebaseApp.firestore();
  export default firebase;