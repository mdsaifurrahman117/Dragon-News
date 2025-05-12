// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
          apiKey: "AIzaSyCQLM-yszlgwBammvadwBAoYQRy54vQOLk",
          authDomain: "dragon-news-9660e.firebaseapp.com",
          projectId: "dragon-news-9660e",
          storageBucket: "dragon-news-9660e.firebasestorage.app",
          messagingSenderId: "590709132826",
          appId: "1:590709132826:web:a0f53665db2f90c965cba3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);