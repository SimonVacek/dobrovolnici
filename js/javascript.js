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
            liE.innerHTML = `<h3>${post.title}</h3><p>${post.description}</p>`;
            //console.log(liE);
            userPosts.append(liE);
        });
        console.log();
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