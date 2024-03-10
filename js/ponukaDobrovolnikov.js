let loggedInUser = ""
fetch('../json/profil.json')
    .then(response => {
        console.log("fetch start");
        console.log('Resolved: ', response);
        return response.json();
    })
    .then(user => {
        loggedInUser = user;
    })
    .catch(errorData => {
        console.error('Rejected: ', errorData);
    })

fetch("../JSON/users.json")
    .then(response => {
        console.log("fetch start");
        console.log('Resolved: ', response);
        return response.json();
    })
    .then(data => {
        console.log(data);
        let dobrovolniciList = document.querySelector('#dobrovolnici')
        data.users.forEach(user => {
            let LiElement = document.createElement('li');
            LiElement.innerHTML = `<h3>${user.name}</h3><p>${user.description}</p>`
            dobrovolniciList.appendChild(LiElement);

            let button = document.createElement('button');
            button.textContent = "Kontaktovať doborovoľníka";
            LiElement.appendChild(button)

            dobrovolniciList.append(LiElement);         
            
            button.onclick = function() {
                let json = JSON.stringify(loggedInUser + user)
                fetch("", { //dočasne takto
                    method: "POST",
                    body: json,
                    headers: {
                        "Content-type": "application/json; charset=utf-8",
                    }
                }) .then(response => {console.log(`id:${user.id}`);});
            };
        });  
    })
    .catch(errorData => {
        console.error('Rejected: ', errorData);
    });
