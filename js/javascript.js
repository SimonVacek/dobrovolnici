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
            liE.innerHTML = `<h3>${post.title}</h3><p>${post.description}</p>`
            //console.log(liE);
            userPosts.append(liE)
        });
        console.log()
    })
    .catch(errorData => {
        // iba ak je nemožné spraviť request - DNS, network, ...
        console.error('Rejected: ', errorData);
    }) 