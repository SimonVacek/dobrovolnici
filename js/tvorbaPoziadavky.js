let createButton = document.querySelector('#createRequest');

createButton.addEventListener('click', (event) => {
    let requestTitle = document.querySelector('#requestTitle').value;
    let requestDescription = document.querySelector('#requestDescription').value;
    //const request = document.createElement('li');
    let template = {
        "title" : requestTitle,
        "description" : requestDescription
    };
    //console.log({'post': template});
    
    let json = JSON.stringify({'post': template});
    console.log(json);

    let userLoggedIn = true;

    if(userLoggedIn) {
        fetch("http://127.0.0.1:8020/postPosts.php", { //dočasne takto
            method: "POST",
            body: json,
            headers: {
                "Content-type": "application/json; charset=utf-8",
            },
            mode: 'no-cors'
        }) .then(response => {
            console.log(response);
        });
        //window.location.replace("index.html");
    } else {
        alert("Nie ste prihlásený!")
        window.location.replace("prihlasenie.html");
    }
});
