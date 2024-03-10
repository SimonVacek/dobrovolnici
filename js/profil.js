document.addEventListener("DOMContentLoaded",(event) => {
    fetch('../json/profil.json')
        .then(response => {
            console.log("fetch start");
            console.log('Resolved: ', response);
            return response.json();
        })
        .then(data => {
            let loggedInUser = data.user
            //console.log(data.user);
            //console.log(loggedInUser);
            let userInfo = document.getElementById('text');
            userInfo.innerHTML = `<ul><li>${loggedInUser.name}</li><li>${loggedInUser.description}</li></ul>`
            console.log()
        })
        .catch(errorData => {
            // iba ak je nemožné spraviť request - DNS, network, ...
            console.error('Rejected: ', errorData); 
        })

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
            let userPosts = document.querySelector('#usersPosts');
            posts.forEach((post) => {
                //console.log(text);
                let liE = document.createElement('li');
                liE.innerHTML = `<h3>${post.title}</h3><p>${post.description}</p>`
                liE.id = post.id;
                //console.log(liE);
                userPosts.append(liE)
            });
            console.log()
        })
        .catch(errorData => {
            // iba ak je nemožné spraviť request - DNS, network, ...
            console.error('Rejected: ', errorData);
        })
});
