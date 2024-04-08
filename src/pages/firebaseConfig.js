// firebaseConfig.js
import firebase from 'firebase/app';
import 'firebase/messaging';

const firebaseConfig = {
  // Your Firebase configuration
  apiKey: "AIzaSyAHI6AQh4Ltujvmkf2VTo33QYmif5O6V2g",
  authDomain: "alien-craft-362813.firebaseapp.com",
  projectId: "alien-craft-362813",
  storageBucket: "alien-craft-362813.appspot.com",
  messagingSenderId: "1018792046218",
  appId: "1:1018792046218:web:c58613e344727a2e448773",
  measurementId: "G-V5RHTVVE7T"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
