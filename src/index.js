import setTime from './time.js';

import {
    createPost,
    addEventsToPosts,
    showAddMenu,
    displayBlogName
} from './App.js';

export const DOM = {
    dateDisplay: document.querySelector('#show-date'),

    createNewPostBtn: document.querySelector('#create-new-post-btn'),

    createPostBtn: document.querySelector('#create-post-btn'),
    userPosts: document.querySelector('#user-posts'),
    contentContainer: document.querySelector('#content-container')
}


window.addEventListener('load', displayBlogName)
window.addEventListener('load', addEventsToPosts)
// window.addEventListener('dblclick', ()=> localStorage.clear())

DOM.createPostBtn.addEventListener('click', createPost);
DOM.createNewPostBtn.addEventListener('click', showAddMenu)
setTime()