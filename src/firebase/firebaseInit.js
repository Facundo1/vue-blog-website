import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyD0Velu50rDkeT_EzBcG-G0qqKQtQ3Mgug",
    authDomain: "fireblogs-vue.firebaseapp.com",
    projectId: "fireblogs-vue",
    storageBucket: "fireblogs-vue.appspot.com",
    messagingSenderId: "945170787387",
    appId: "1:945170787387:web:51b57706b6aab81d0f001e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { timestamp }
export default firebaseApp.firestore()