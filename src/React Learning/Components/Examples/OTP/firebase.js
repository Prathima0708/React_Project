import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyChWMTqvxnl1QQC-LYMkQAt0hHX1Gwh5L4",
    authDomain: "phone-auth-403e7.firebaseapp.com",
    projectId: "phone-auth-403e7",
    storageBucket: "phone-auth-403e7.appspot.com",
    messagingSenderId: "811224660312",
    appId: "1:811224660312:web:c34b589c57709e2ee10d2d"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;