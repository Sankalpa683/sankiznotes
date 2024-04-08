// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.2/firebase-messaging.js');

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

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize this to show a notification
});
