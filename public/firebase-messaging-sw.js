importScripts('https://www.gstatic.com/firebasejs/7.19.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.19.0/firebase-messaging.js');


const firebaseConfig = {
    apiKey: "AIzaSyCQOlbDWr1s_m_EMc122CSeOT4sumb2ldg",
    authDomain: "quizapppwa.firebaseapp.com",
    databaseURL: "https://quizapppwa.firebaseio.com",
    projectId: "quizapppwa",
    storageBucket: "quizapppwa.appspot.com",
    messagingSenderId: "302344526500",
    appId: "1:302344526500:web:4f770820dc9bcfac6ee431"
  };


  firebase.initializeApp(firebaseConfig);

  firebase.messaging();