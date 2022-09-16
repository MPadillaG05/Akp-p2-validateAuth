const firebaseConfig = {
    apiKey: "AIzaSyAQnuXtdKvau-siBCM184nfkKQ8Xugp6yw",
    authDomain: "akp-p2-validateauth.firebaseapp.com",
    projectId: "akp-p2-validateauth",
    storageBucket: "akp-p2-validateauth.appspot.com",
    messagingSenderId: "240144349368",
    appId: "1:240144349368:web:39fcc66cf926c500ea9c4d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


//Crear usuario utilizando Firebase Authentication

function authentication() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
        alert("Usuario Creado");
    })
    .catch((error) => {
        console.log(error.message);
    });
}

