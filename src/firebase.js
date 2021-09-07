import firebase from "firebase/compat/app";
import "firebase/compat/database";

var firebaseConfig = {
     apiKey: "AIzaSyBJH9dOZhsyH2fWfzti-5GQnlukkdhgi1U",
     authDomain: "react-crud-f568c.firebaseapp.com",
     databaseURL: "https://react-crud-f568c-default-rtdb.firebaseio.com",
     projectId: "react-crud-f568c",
     storageBucket: "react-crud-f568c.appspot.com",
     messagingSenderId: "209995750138",
     appId: "1:209995750138:web:ddf12fb4fb45ec20538743"
  };
  // Initialize Firebase
  const fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();