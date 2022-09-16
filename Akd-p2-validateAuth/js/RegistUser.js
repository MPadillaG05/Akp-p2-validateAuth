var firebaseConfig = {
    apiKey: "AIzaSyAQnuXtdKvau-siBCM184nfkKQ8Xugp6yw",
    authDomain: "akp-p2-validateauth.firebaseapp.com",
    projectId: "akp-p2-validateauth",
    storageBucket: "akp-p2-validateauth.appspot.com",
    messagingSenderId: "240144349368",
    appId: "1:240144349368:web:39fcc66cf926c500ea9c4d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Registrar el usuario utilizando Firebase Firestore

var db = firebase.firestore();

function registUser(){

    var name = document.getElementById("name").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var object = {
        name: name,
        last_Name: lastName,
        phone: phone,
        email: email,
        password: password
    }

    //Se crea la colección 'users' y se agrega datos
    db.collection("users").add(object).then(()=>{
        console.log("SE REGISTRO");
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}