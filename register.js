  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAFk67-QWk22U2OlxrYo9wclmsGZul1M90",
    authDomain: "login-test-b1a02.firebaseapp.com",
    projectId: "login-test-b1a02",
    storageBucket: "login-test-b1a02.appspot.com",
    messagingSenderId: "841243740930",
    appId: "1:841243740930:web:5aa1d4e7496f3239b7101b",
    measurementId: "G-YMQ0J7TD6B"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app)

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const submit = document.getElementById('submit');
  submit.addEventListener("click",function(event)){
    event.preventDefault()
    alert(5)
  }