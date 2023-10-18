importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts(
    'https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js'
);

firebase.initializeApp({
    apiKey: "AIzaSyCsUf97unnPhzdI2DkDdlmXjUuPBSWhFac",

    authDomain: "todo-list-840a3.firebaseapp.com",

    databaseURL: "https://todo-list-840a3-default-rtdb.firebaseio.com",

    projectId: "todo-list-840a3",

    storageBucket: "todo-list-840a3.appspot.com",

    messagingSenderId: "579764974594",

    appId: "1:579764974594:web:9108b954c8d9941a09e31b",

    measurementId: "G-RHPN58B9QZ",
});

const messaging = firebase?.messaging?.isSupported()
    ? firebase.messaging()
    : null;