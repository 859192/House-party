// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDPmicbxcXKyEs51vO0iNToOXW-dv__--U",
    authDomain: "house-party-ce90c.firebaseapp.com",
    databaseURL: "https://house-party-ce90c-default-rtdb.firebaseio.com",
    projectId: "house-party-ce90c",
    storageBucket: "house-party-ce90c.appspot.com",
    messagingSenderId: "1090935592223",
    appId: "1:1090935592223:web:479be596a5a25a676ccc2a",
    measurementId: "G-17Z4SZY3C8"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Reference to the database
var partnerFormDB = database.ref("partnerForm");
