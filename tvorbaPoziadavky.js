let listOfRequests = document.querySelector('#poziadavky');  //docasne takto, neviem ako to načítať z index.html

let createButton = document.querySelector('#createRequest');

createButton.addEventListener('click', (event) => {
    let requestTitle = document.querySelector('#requestTitle').value;
    //console.log(requestTitle);
    let requestDescription = document.querySelector('#requestDescription').value;
    //console.log(requestDescription);
    const request = document.createElement('li');
    request.innerHTML = `<h3>${requestTitle}</h3> <p>${requestDescription}</p>`;
    listOfRequests.append(request);
    console.log(listOfRequests);
});