import { DOM } from "./index.js";
import Data from "./DATA.json" assert { type: 'json' };
// localStorage.clear();
import { editPost } from "./EditPosts.js";

localStorage.Posts === undefined ? localStorage.Posts = JSON.stringify(Data) : undefined;


function addMenuTemplate(name = " ", content = " ", btnId) {
    let btnText;
    btnText = (btnId == 'create-post-btn') ? 'Publish' : 'Edit';
    return (
        `
        <h1>Create a new blog</h1>
        <label for="blog-name-input">Enter the name of your new post:</label>
        <input id="blog-name-input" value="${typeof name === 'string' ? name : ''}">
        <label for="new-blog-textarea">Your post content:</label>
        <textarea id="new-blog-textarea">${content}</textarea>
        <button id="${btnId}">${btnText}</button>
    `
    )
}
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
    const date = time.toLocaleDateString();
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
    clearInputs()
    displayBlogName();
    showPost(undefined, id);
}
function clearInputs() {
    document.querySelector('#blog-name-input').value = '';
    document.querySelector('#new-blog-textarea').value = '';
}
function displayBlogName() {
    const Posts = JSON.parse(localStorage.Posts);
    DOM.userPosts.innerHTML = '';
    Posts.forEach(post => {
        DOM.userPosts.insertAdjacentHTML('beforeend', createNewPostEl(post.name, post.id));
    });
    addEventsToPosts();
}
function showPost(e, idArg) {
    const id = (e === undefined) ? idArg : e.target.id;

    if (JSON.parse(localStorage.Posts)[id].id == id) {
        const name = JSON.parse(localStorage.Posts)[id].name;
        const content = JSON.parse(localStorage.Posts)[id].content;
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

function showAddMenu(name, content, btnIdName = 'create-post-btn', id) {
    DOM.contentContainer.innerHTML = addMenuTemplate(name, content, btnIdName);
    const PostBtn = document.querySelector(`#${btnIdName}`);
    btnIdName === 'create-post-btn' ?
        PostBtn.addEventListener('click', createPost) :
        PostBtn.addEventListener('click', () => { editPost(id) })
}
export {
    createPost,
    addEventsToPosts,
    showAddMenu,
    displayBlogName,
    addMenuTemplate,
    timeOfCreation,
    addPost,
    clearInputs,
    showPost
}