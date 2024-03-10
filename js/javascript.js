fetch('../json/posts.json')
    .then(response => {
        console.log("fetch start");
        console.log('Resolved: ', response);
        return response.json();
    })
    .then(data => {
        let posts = data.posts;
        //console.log(data.user);
        //console.log(loggedInUser);
        //console.log(posts);
        let userPosts = document.querySelector('#poziadavky');
        posts.forEach((post) => {
            //console.log(text);
            let liE = document.createElement('li'); //LiElement
            liE.id = post.id;
            liE.innerHTML = `<h3>${post.title}</h3><p>${post.description}</p>`
            let button = document.createElement('button');
            button.textContent = "Prejsť na požiadavku";
        
            liE.appendChild(button)
            userPosts.append(liE);
            button.onclick = function() {
                console.log(`button click ${post.title}`);
                window.location.href = `../html/prijatiePoziadavky.html?postId=${post.id}`;
            };
            //console.log(liE);
            //userPosts.append(liE);
        });
    })
    .catch(errorData => {
        // iba ak je nemožné spraviť request - DNS, network, ...
        console.error('Rejected: ', errorData);
    }) 

fetch('../json/profil.json')
    .then(response => {
        console.log("fetch start");
        console.log('Resolved: ', response);
        return response.json();
    })
    .then(users => {
        let userNotLoggedIn = document.querySelector('#notLoggedIn');
        let userLoggedIn = document.getElementById('loggedIn');
        let loggedIn = false;

        if (!loggedIn) {
            userLoggedIn.style.visibility = "hidden";
        } else {
            userNotLoggedIn.style.visibility = "hidden";
        }
        
        let aE = document.createElement('a');
        aE.innerHTML = `<a href="profil.html">${users.user.name}</a>`;
        userLoggedIn.append(aE);
    })
    .catch(errorData => {
        console.error('Rejected: ', errorData);
    })

document.querySelector('#ziadostiOPomocID').onclick = function () {
    location.href = "ziadostiOPomoc.html"
};
document.querySelector('#ponukaDobrovolnikovID').onclick = function () {
    location.href = "ponukaDobrovolnikov.html"
};