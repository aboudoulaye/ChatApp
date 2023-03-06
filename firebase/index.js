// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth }from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzHQRWjvPlyV0AnvjyLz1ftOPDw6KXVi8",
  authDomain: "chat-sante.firebaseapp.com",
  projectId: "chat-sante",
  storageBucket: "chat-sante.appspot.com",
  messagingSenderId: "628157435234",
  appId: "1:628157435234:web:0a9738eda287a2fe8ef03b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };