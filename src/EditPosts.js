import {
    showAddMenu,
    timeOfCreation,
    addPost,
    displayBlogName,
    clearInputs, 
    showPost
} from "./App.js";

function editPosts(e) {
    const itemId = e.target.parentElement.id;
    const Posts = JSON.parse(localStorage.Posts);
    const item = Posts[+itemId];
    showAddMenu(item.name, item.content, 'edit-btn', itemId)
}

export function addEventsToEditBtns() {
    const editBtns = document.querySelectorAll('#edit-post');

    editBtns.forEach(btn => {
        btn.addEventListener('click', editPosts);
    })
}

export function editPost(id) {
    const Posts = JSON.parse(localStorage.Posts);
    const name = document.querySelector('#blog-name-input').value;
    const content = document.querySelector('#new-blog-textarea').value;
    const time = timeOfCreation();
    const newPost = new addPost(name, content, id, time);

    Posts.splice(+id, 1, newPost);
    localStorage.Posts = JSON.stringify(Posts);
    clearInputs();
    displayBlogName();
    showPost(undefined, id);
}