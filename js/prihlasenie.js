let usersList = [{"userName": "JankoHrasko", "mail": "janko.hrasko@gmail.com", "password": "a"},{"userName": "JozkoMrkvicka", "mail": "jožko.mrkvička@gmail.com", "password": "a"}];
//toto sa da spravit cez json-y ale toto je fakt iba na backend, kde poslem meno a skotroluje heslo ku tomu etc., tak tuna json nedavam 
let foundUser = false;

let loggedInUser = "";
let signInButton = document.querySelector('#SignInButton');
signInButton.addEventListener('click', (event) => {
    event.preventDefault();
    let signInName = document.querySelector('#LogInName').value;
    let signInPassword = document.querySelector('#LogInPassword').value;
    //console.log(logInName,logInPassword)
    if(signInName != "" && signInPassword  != ""){
        let json = JSON.stringify({'signInName': signInName, 'signInPassword': signInPassword});
        console.log(json);
        fetch("", { //dočasne takto
            method: "POST",
            body: json,
            headers: {
                "Content-type": "application/json; charset=utf-8",
            }
        }) .then(() => {
            foundUser = true;
            if(foundUser) {
                window.location.replace("profil.html");
            } else {
                alert("Something is not valid");
            }
            
        });
    }
});

document.querySelector('#logInShow').addEventListener('click', (event) => {
    let password = document.getElementById("LogInPassword");
    if(password.type == "password"){
        password.type = "text";
    }else{
        password.type = "password";
    }
  });