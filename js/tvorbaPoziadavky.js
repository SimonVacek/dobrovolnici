let createButton = document.querySelector('#createRequest');

createButton.addEventListener('click', (event) => {
    let requestTitle = document.querySelector('#requestTitle').value;
    let requestDescription = document.querySelector('#requestDescription').value;
    const request = document.createElement('li');

    let template = `<h3>${requestTitle}</h3><p>${requestDescription}</p>`;
    //console.log({'post': template});
    let json = JSON.stringify({'post': template});
    console.log(json);
    fetch("", { //dočasne takto
        method: "POST",
        body: json,
        headers: {
            "Content-type": "Post",
        }
    });
});