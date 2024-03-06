import { DOM } from "./index.js";

if (localStorage.Posts === undefined) {
    localStorage.Posts = JSON.stringify([{
        name: 'Demo',
        content: `
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, quisquam et! Reprehenderit ipsam distinctio perspiciatis praesentium tenetur numquam impedit, ducimus quibusdam necessitatibus. Deleniti provident hic temporibus, sequi vel voluptatem similique.`,

        id: 0
    }]);
}

const addMenuTemplate = `
    <h1>Create a new blog</h1>
    <label for="blog-name-input">Enter the name of your new post:</label>
    <input id="blog-name-input">
    <label for="new-blog-textarea">Your post content:</label>
    <textarea id="new-blog-textarea"></textarea>
    <button id="create-post-btn">Publish</button>
`
class addPost {
    constructor(name, content, id) {
        this.name = name;
        this.content = content;
        this.id = id;
    }
}

function postTemplate(name, content) {
    return (
        `
        <h1 id="post-title">${name}</h1>
        <p id="post-content">${content}</p>
        `
    )
}

function createNewPostEl(name, id) {
    return (
        `<li class="post-item" id="${id}">${name}</li>`
    )
}

function createPost() {
    const name = document.querySelector('#blog-name-input').value;
    const content = document.querySelector('#new-blog-textarea').value;
    const id = JSON.parse(localStorage.Posts).length;

    const newPost = new addPost(name, content, id);
    const newPosts = JSON.parse(localStorage.Posts);
    newPosts.push(newPost);
    localStorage.Posts = JSON.stringify(newPosts);
    
    document.querySelector('#blog-name-input').value = '';
    document.querySelector('#new-blog-textarea').value = '';
    displayBlogName();
    addEventsToPosts();
}

function displayBlogName() {
    const Posts = JSON.parse(localStorage.Posts);
    DOM.userPosts.innerHTML = '';
    Posts.forEach(post => {
        DOM.userPosts.insertAdjacentHTML('beforeend', createNewPostEl(post.name, post.id));
    })
}
function showPost(e) {
    const id = e.target.id;

    if (JSON.parse(localStorage.Posts)[id].id == id) {
        const name = JSON.parse(localStorage.Posts)[id].name;
        const content = JSON.parse(localStorage.Posts)[id].content

        DOM.contentContainer.innerHTML = postTemplate(name, content)
    }
}

function addEventsToPosts() {
    const posts = document.querySelectorAll('.post-item');
    posts.forEach(post => {
        post.addEventListener('click', showPost)
    });
}

function showAddMenu() {
    DOM.contentContainer.innerHTML = addMenuTemplate;
    const createPostBtn = document.querySelector('#create-post-btn');
    createPostBtn.addEventListener('click', createPost);
}
export { createPost, addEventsToPosts, showAddMenu, displayBlogName }