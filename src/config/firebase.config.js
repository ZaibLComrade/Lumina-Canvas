// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5Nd-If_qX4q7MJOF3hPjP4L68N_q47Ao",
  authDomain: "lumina-canvas.firebaseapp.com",
  projectId: "lumina-canvas",
  storageBucket: "lumina-canvas.appspot.com",
  messagingSenderId: "857474476521",
  appId: "1:857474476521:web:d5633fbea00b49782cc378"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
