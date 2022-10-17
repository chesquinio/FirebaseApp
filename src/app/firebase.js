   // Import the functions you need from the SDKs you need
   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
   import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
   import { getFirestore } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-firestore.js"
   // TODO: Add SDKs for Firebase products that you want to use
   // https://firebase.google.com/docs/web/setup#available-libraries
 
   // Your web app's Firebase configuration
   const firebaseConfig = {
     apiKey: "AIzaSyAB1D5ob0devl9s--yK1R-QeXylc_rAgOA",
     authDomain: "fir-app-483df.firebaseapp.com",
     projectId: "fir-app-483df",
     storageBucket: "fir-app-483df.appspot.com",
     messagingSenderId: "883099110477",
     appId: "1:883099110477:web:9f71a7984ea7ddd6abe004"
   };
 
   // Initialize Firebase
   export const app = initializeApp(firebaseConfig);
   export const auth = getAuth(app)
   export const db = getFirestore(app)