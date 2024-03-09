fetch('../json/posts.json')
.then(response => {
    console.log("fetch start");
    console.log('Resolved: ', response);
    return response.json();
})
.then(data => {
    let posts = data.posts;
    let userPosts = document.querySelector('#usersPosts');
    posts.forEach((post) => {
        let liE = document.createElement('li');
        liE.innerHTML = `<strong>${post.title}<br><br></strong> ${post.description}<br>`;
        let button = document.createElement('button');
        button.textContent = "Prejst na poziadavku";
        
        liE.appendChild(button)
        userPosts.append(liE);
        button.onclick = function() {
            console.log(`button click ${post.title}`);
            window.location.href = `../html/prijatiePoziadavky.html?postId=${post.id}`;
        };
    });
})
.catch(errorData => {
    console.error('Rejected: ', errorData);
});