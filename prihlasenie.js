let usersList = [{"userName": "JankoHrasko", "mail": "janko.hrasko@gmail.com", "password": "a"},{"userName": "JozkoMrkvicka", "mail": "jožko.mrkvička@gmail.com", "password": "a"}];

let foundUser = false;

let loggedInUser = "";
let signInButton = document.querySelector('#SignInButton');
signInButton.addEventListener('click', (event) => {
    event.preventDefault();
    let logInName = document.querySelector('#LogInName').value;
    let logInPassword = document.querySelector('#LogInPassword').value;
    //console.log(logInName,logInPassword)
    if(logInName != "" && logInPassword  != ""){
        usersList.forEach(user => {
            //console.log(user);
            if(user.userName == logInName && user.password == logInPassword){
                loggedInUser = user;
                foundUser = true;
                console.log(loggedInUser);
            }
      });
    }
    if (!foundUser) alert("Pouzivatel neexistuje");
});

document.querySelector('#logInShow').addEventListener('click', (event) => {
    let password = document.getElementById("LogInPassword");
    if(password.type == "password"){
        password.type = "text";
    }else{
        password.type = "password";
    }
  });