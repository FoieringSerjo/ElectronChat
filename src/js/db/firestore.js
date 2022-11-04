import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC3Grg-1mekQuLxTyAYnveOnafN3vEYfog',
  authDomain: 'electron-chat-b0d51.firebaseapp.com',
  projectId: 'electron-chat-b0d51',
  storageBucket: 'electron-chat-b0d51.appspot.com',
  messagingSenderId: '805659371308',
  appId: '1:805659371308:web:7ec3726195ffcda4d9ee89',
  measurementId: 'G-BL43YCJMRD',
};

export default firebase.initializeApp(firebaseConfig).firestore();
