import React from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/database';

function App() {
  var firebaseConfig = {
    apiKey: "AIzaSyCg-GJc9jm2QqHED_gbDCV-eIVSum4XRfs",
    authDomain: "quick-travis-27d09.firebaseapp.com",
    databaseURL: "https://quick-travis-27d09.firebaseio.com",
    projectId: "quick-travis-27d09",
    storageBucket: "quick-travis-27d09.appspot.com",
    messagingSenderId: "840225963641",
    appId: "1:840225963641:web:f370fb91833287505e5ea8",
    measurementId: "G-C6740Q0E3Z"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>quick-travis tutorial</code> 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
