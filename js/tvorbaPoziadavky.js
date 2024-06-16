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
    let userLoggedIn = true;
    
    if(userLoggedIn) {
        fetch("http://127.0.0.1:8020/postPosts.php", { //dočasne takto
            method: "POST",
            body: json
        }) .then(function(response){
            return response.text();
        }) .then(function(data){
            console.log(data);
        })
        //window.location.replace("index.html");
    } else {
        alert("Nie ste prihlásený!")
        window.location.replace("prihlasenie.html");
    }
});
