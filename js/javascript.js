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
        posts.forEach((text) => {
            //console.log(text);
            let liE = document.createElement('li'); //LiElement
            liE.innerHTML = text
            //console.log(liE);
            userPosts.append(liE)
        });
        console.log()
    })
    .catch(errorData => {
        // iba ak je nemožné spraviť request - DNS, network, ...
        console.error('Rejected: ', errorData);
    })