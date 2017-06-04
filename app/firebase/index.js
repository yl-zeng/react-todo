import firebase from "firebase";


// Initialize Firebase

try{
  var config = {
    apiKey: "AIzaSyB7amvHTEtk1k2AoINxwHcyOIzfQ7zB_3E",
    authDomain: "react-todo-39af0.firebaseapp.com",
    databaseURL: "https://react-todo-39af0.firebaseio.com",
    projectId: "react-todo-39af0",
    storageBucket: "react-todo-39af0.appspot.com",
    messagingSenderId: "945534368503"
  };
  firebase.initializeApp(config);
}catch(e){

}



export var firebaseRef = firebase.database().ref();
export default firebase;
