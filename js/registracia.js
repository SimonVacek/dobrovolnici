let usersList = [{"userName": "JankoHrasko", "mail": "janko.hrasko@gmail.com", "password": "a"},{"userName": "JozkoMrkvicka", "mail": "jožko.mrkvička@gmail.com", "password": "a"}];
let foundUser = false; 
let registerButton = document.querySelector('#RegisterButton');
registerButton.addEventListener('click',(event)=>{
    event.preventDefault(); // aby sa neresetovala stranka na submnit
    let registerName = document.querySelector("#RegisterName").value;
    let registerMail = document.querySelector("#RegisterMail").value;
    let registerPassword = document.querySelector("#RegisterPassword").value;
    let registerPasswordRepeat = document.querySelector("#RegisterPasswordRepeat").value;
    let verificationCode = document.querySelector("#verificationCode").value;
    

    if(registerPasswordRepeat==registerPassword&&registerName!=""&&registerPassword!=""&&registerMail!=""&&verificationCode==="AAAA") {
        let user = {"userName": registerName, "mail": registerMail, "password": registerPassword}
        usersList.push(user);

        let json = JSON.stringify(user);
        console.log(json, foundUser);
        fetch("", { //dočasne takto
            method: "POST",
            body: json,
            headers: {
                "Content-type": "application/json; charset=utf-8",
            }
        }) .then(()=>{
            foundUser = true;
            console.log(foundUser)
            if(foundUser) {
                window.location.replace("profil.html");
            } else {
                alert("Something is not valid");
            }
            foundUser = false
        });
    } 
    else {
        alert("Something is not valid");
        registerPassword = "";
        registerPasswordRepeat = ""; 
    }
    
});

document.querySelector('#registerShow').addEventListener('click', (event) => {
    let password = document.getElementById("RegisterPassword");
    let passwordRepeat = document.getElementById("RegisterPasswordRepeat");
    if(password.type == "password" && passwordRepeat.type=="password"){
        password.type = "text";
        passwordRepeat.type = "text";
    }else{
        password.type = "password";
        passwordRepeat.type = "password";
    }
  });