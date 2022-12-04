import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "./assets/css/index.css";
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAU10pPZ4Qget-Ak9a1r3xIQHwj2AAbwko",
  authDomain: "nische-store-react-app.firebaseapp.com",
  projectId: "nische-store-react-app",
  storageBucket: "nische-store-react-app.appspot.com",
  messagingSenderId: "937105613113",
  appId: "1:937105613113:web:1e261f9b8fb7a0766b48e8",
  measurementId: "G-QB1FSG0NDY"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export {db};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* React.StrictMode */}
      <App />
    {/* React.StrictMode */}
  </>
);

reportWebVitals();
