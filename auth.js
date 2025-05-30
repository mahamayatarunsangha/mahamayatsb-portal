// auth.js
// Your web app's Firebase configuration
var firebaseConfig = {
        apiKey: "AIzaSyArbew0cZvslAoL_RQDGUXJruRe3KZ0-tw",
        authDomain: "user-server-3109c.firebaseapp.com",
        projectId: "user-server-3109c",
        storageBucket: "user-server-3109c.firebasestorage.app",
        messagingSenderId: "858925400319",
        appId: "1:858925400319:web:83e266d27becb4c7664cca"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Check if the user is logged in
firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
        // User is not logged in, redirect to login page
        window.location.href = "login.html";
    }
});
