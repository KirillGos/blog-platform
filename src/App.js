import { DOM } from "./index.js";
import Data from "./DATA.json" assert { type: 'json' };
// localStorage.clear();
if (localStorage.Posts === undefined) {
     localStorage.Posts = JSON.stringify(Data);
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
    constructor(name, content, id, date) {
        this.name = name;
        this.content = content;
        this.id = id;
        this.date = date;
    }
}

function postTemplate(name, content, date) {
    return (
        `
        <div id="post-title">${name} <span class='post-title-time'> ${date}</span></div>
        <p id="post-content">${content}</p>
        `
    )
}

function timeOfCreation() {
    const time = new Date();
    const date =  time.toLocaleDateString();
    return date;
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
    const time = timeOfCreation();
    const newPost = new addPost(name, content, id, time);
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
        const date = JSON.parse(localStorage.Posts)[id].date;
        DOM.contentContainer.innerHTML = postTemplate(name, content, date)
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