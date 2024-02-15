let usersList = [{"userName": "JankoHrasko", "mail": "janko.hrasko@gmail.com", "password": "a"},{"userName": "JozkoMrkvicka", "mail": "jožko.mrkvička@gmail.com", "password": "a"}];

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
        console.log(usersList);
    } else {
        alert("Chyba pri zadávaní údajov!");
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