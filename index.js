function posts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data))
}


function displayPost(posts) {
    const section = document.getElementById('postContainer');
    for (const post of posts) {
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
        <h2>${post.title}</h2>
        <p> ${post.body}</p>
        `
        section.appendChild(div);
    }
}