fetch('../json/posts.json')
.then(response => {
    console.log("fetch start");
    console.log('Resolved: ', response);
    return response.json();
})
.then(data => {
    let posts = data.posts;
    let urlId = window.location.search;
    let parsedId = urlId.substring(urlId.search("=")+1,urlId.length);
    let id = Number(parsedId);
    console.log(id);
    let userPosts = document.querySelector('#ulId')
    let post = posts.filter((post) => { return post.id == id;})[0];
    let liE = document.createElement('li');
    console.log(post);
    liE.innerHTML = `<h3>${post.title}</h3> <p>${post.description}</p>`;    
    userPosts.append(liE);

})