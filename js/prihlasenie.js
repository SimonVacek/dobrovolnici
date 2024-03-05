let usersList = [{"userName": "JankoHrasko", "mail": "janko.hrasko@gmail.com", "password": "a"},{"userName": "JozkoMrkvicka", "mail": "jožko.mrkvička@gmail.com", "password": "a"}];
//toto sa da spravit cez json-y ale toto je fakt iba na backend klde poslem meno a skotroluje heslo ku tomu etc., tak tuna json nedavam 
let foundUser = false;

let loggedInUser = "";
let signInButton = document.querySelector('#SignInButton');
signInButton.addEventListener('click', (event) => {
    event.preventDefault();
    let logInName = document.querySelector('#LogInName').value;
    let logInPassword = document.querySelector('#LogInPassword').value;
    //console.log(logInName,logInPassword)
    if(logInName != "" && logInPassword  != ""){

        let json = JSON.stringify({'signInName': logInName, 'signInPassword': logInPassword});
        console.log(json);
        fetch("", { //dočasne takto
            method: "POST",
            body: json,
            headers: {
                "Content-type": "UserSignIn",
            }
        });

        usersList.forEach(user => {
            //console.log(user);
            if(user.userName == logInName && user.password == logInPassword){
                loggedInUser = user;
                foundUser = true;
                console.log(loggedInUser);
            }
      });
    }
    if (!foundUser) alert("Používateľ neexistuje!");
});

document.querySelector('#logInShow').addEventListener('click', (event) => {
    let password = document.getElementById("LogInPassword");
    if(password.type == "password"){
        password.type = "text";
    }else{
        password.type = "password";
    }
  });