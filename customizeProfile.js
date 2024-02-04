<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 59479c3 (first fetch attempt)
// let loggedInUser = {"userName": "JozkoMrkvicka", "mail": "jožko.mrkvička@gmail.com", "password": "a"};

let loggedInUser = {};
/*
document.addEventListener("DOMContentLoader", () =>{
    
    fetch('JSON/profil.json')
        .then(response => {
            console.log("fetch start");

            return response.json(); // Convert the response to JSON
        })
        .then(data => {
            loggedInUser = data.user;
            console.log(data.user);
            console.log("fetch end");
        })
        .catch(error => {
            // Handle errors
            console.error('Error during fetch:', error);
        });
});*/
    
/*});*/
fetch('JSON/profil.json')
    .then(response => {
        console.log("fetch start");
        console.log('Resolved: ', response);
        return response.json();
    })
    .then(data => {
        loggedInUser = data.user
        document.querySelector('#customizeName').placeholder = loggedInUser.name;
        document.querySelector('#customizeMail').placeholder = loggedInUser.mail;
        console.log(data.user);
        console.log(loggedInUser);
        console.log("Succesfully logged in")
    })
    .catch(errorData => {
        // iba ak je nemožné spraviť request - DNS, network, ...
        console.error('Rejected: ', errorData); 
        
    })
    
<<<<<<< HEAD
let confirmButton = document.querySelector('#customizeConfirmButton');


confirmButton.addEventListener('click',(event)=>{
    event.preventDefault(); //aby sa neresetovala stranka na submit
=======
let loggedInUser = {"userName": "JozkoMrkvicka", "mail": "jožko.mrkvička@gmail.com", "password": "a"};
=======
>>>>>>> 59479c3 (first fetch attempt)
let confirmButton = document.querySelector('#customizeConfirmButton');


confirmButton.addEventListener('click',(event)=>{
<<<<<<< HEAD
    event.preventDefault(); // aby sa neresetovala stranka na submit
>>>>>>> f0542a1 (Dočasný javascript pre tvorbuPoziadavky, registracia, prihlasenie, uprava profilu a mensie upravy do roznych HTML)
=======
    event.preventDefault(); //aby sa neresetovala stranka na submit
>>>>>>> 59479c3 (first fetch attempt)

    let customizedName = document.querySelector('#customizeName').value;
    let customizedMail = document.querySelector('#customizeMail').value;
    let oldPassword = document.querySelector('#customizeOldPassword').value;
    let newPassword = document.querySelector('#customizeNewPassword').value;
    let newPasswordRepeat = document.querySelector('#customizeNewPasswordRepeat').value;

<<<<<<< HEAD
<<<<<<< HEAD
    if (customizedName != "" && customizedName != loggedInUser.name) {
        loggedInUser.name = customizedName;
=======
    if (customizedName != "" && customizedName != loggedInUser.userName) {
        loggedInUser.userName = customizedName;
>>>>>>> f0542a1 (Dočasný javascript pre tvorbuPoziadavky, registracia, prihlasenie, uprava profilu a mensie upravy do roznych HTML)
=======
    if (customizedName != "" && customizedName != loggedInUser.name) {
        loggedInUser.name = customizedName;
>>>>>>> 59479c3 (first fetch attempt)
        alert("Uspene zmenene meno...");
    }
    if (customizedMail != "" && customizedMail != loggedInUser.mail) {
        loggedInUser.mail = customizedMail;
        alert("Uspene zmeneny mail...");
    }
    if (oldPassword == loggedInUser.password && newPassword != "" && newPassword == newPasswordRepeat) {
        loggedInUser.password = newPassword;
        alert("Uspene zmenene heslo...");
    }
<<<<<<< HEAD
<<<<<<< HEAD
    document.querySelector('#customizeName').placeholder = loggedInUser.name;
=======
    document.querySelector('#customizeName').placeholder = loggedInUser.userName;
>>>>>>> f0542a1 (Dočasný javascript pre tvorbuPoziadavky, registracia, prihlasenie, uprava profilu a mensie upravy do roznych HTML)
=======
    document.querySelector('#customizeName').placeholder = loggedInUser.name;
>>>>>>> 59479c3 (first fetch attempt)
    document.querySelector('#customizeMail').placeholder = loggedInUser.mail;

    document.querySelector('#customizeName').value = "";
    document.querySelector('#customizeMail').value = "";
    document.getElementById("customizeOldPassword").value = "";
    document.getElementById("customizeNewPassword").value = "";
    document.getElementById("customizeNewPasswordRepeat").value = "";
    
    console.log(loggedInUser);
});


document.querySelector('#customizeShowPassword').addEventListener('click', (event) => {
    let password = document.getElementById("customizeOldPassword");
    let newPassword = document.getElementById("customizeNewPassword");
    let newPasswordRepeat = document.getElementById("customizeNewPasswordRepeat");
    //console.log(password.type, newPassword.type, newPasswordRepeat.type)
    if(password.type == "password" && newPassword.type == "password" && newPasswordRepeat.type == "password"){
        password.type = "text";
        newPassword.type = "text";
        newPasswordRepeat.type = "text";
    } else{
        password.type = "password";
        newPassword.type = "password";
        newPasswordRepeat.type = "password";
    }
});