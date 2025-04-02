// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCD-iRDmzEpnTy7iEw3vwY8YDSFYcs6tuA',
  authDomain: 'llt-blog.firebaseapp.com',
  projectId: 'llt-blog',
  storageBucket: 'llt-blog.firebasestorage.app',
  messagingSenderId: '174647014229',
  appId: '1:174647014229:web:9b0c216fd45b1d564c75dc',
  measurementId: 'G-V05HQS91YM'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
