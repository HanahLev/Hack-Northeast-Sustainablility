'use strict'
const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
    apiKey:'', 
    authDomain:'',
    projectId:''});

const db = firebase.firestore();

// Read data
db.collection('Foods').get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id}, ${doc.data()}`);
    })
})