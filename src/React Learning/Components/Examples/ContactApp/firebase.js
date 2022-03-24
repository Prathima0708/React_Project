import firebase from 'firebase/app'
import 'firebase/database'

// import firebase from 'firebase/compat/app';
// import 'firebase/compat/database'



const firebaseConfig = {
    apiKey: "AIzaSyB3C2NoFdX_O-yWPh0a6BUuW-5mTjPMbTc",
    authDomain: "react-contact-aae60.firebaseapp.com",
    projectId: "react-contact-aae60",
    storageBucket: "react-contact-aae60.appspot.com",
    messagingSenderId: "523326765179",
    appId: "1:523326765179:web:2c20b18be2e6182fbf0ade"
  };


  const fireDb=firebase.initialzeApp(firebaseConfig)
  export default fireDb.database().ref()