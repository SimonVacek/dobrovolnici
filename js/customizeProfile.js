// let loggedInUser = {"userName": "JozkoMrkvicka", "mail": "jožko.mrkvička@gmail.com", "password": "a"};

let loggedInUser = {};

fetch('../json/profil.json')
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
    
let confirmButton = document.querySelector('#customizeConfirmButton');


confirmButton.addEventListener('click',(event)=>{
    event.preventDefault(); //aby sa neresetovala stranka na submit

    let customizedName = document.querySelector('#customizeName').value;
    let customizedMail = document.querySelector('#customizeMail').value;
    let oldPassword = document.querySelector('#customizeOldPassword').value;
    let newPassword = document.querySelector('#customizeNewPassword').value;
    let newPasswordRepeat = document.querySelector('#customizeNewPasswordRepeat').value;

    if (customizedName != "" && customizedName != loggedInUser.name) {
        loggedInUser.name = customizedName;
        alert("Úspešne zmenené meno!");
    }
    if (customizedMail != "" && customizedMail != loggedInUser.mail) {
        loggedInUser.mail = customizedMail;
        alert("Úspešne zmenený e-mail!");
    }
    if (oldPassword == loggedInUser.password && newPassword != "" && newPassword == newPasswordRepeat) {
        loggedInUser.password = newPassword;
        alert("Úspešne zmenené heslo!");
    }
    document.querySelector('#customizeName').placeholder = loggedInUser.name;
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