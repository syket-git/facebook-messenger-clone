import firebase from 'firebase';

const firebaseApp =firebase.initializeApp({
    apiKey: "AIzaSyB-fxBWifKtT48mT1WN-p1LjIN3x1-HoDs",
    authDomain: "fb-messenger-clone90.firebaseapp.com",
    databaseURL: "https://fb-messenger-clone90.firebaseio.com",
    projectId: "fb-messenger-clone90",
    storageBucket: "fb-messenger-clone90.appspot.com",
    messagingSenderId: "358060895548",
    appId: "1:358060895548:web:89c82df5d5714117b4c239",
    measurementId: "G-NKQ3H13BTM"
  });

  const db = firebaseApp.firestore();
  export default db; 