import setTime from './time.js';
import { createPost, addEventsToPosts, showAddMenu } from './App.js';
export const DOM = {
    dateDisplay: document.querySelector('#show-date'),

    createNewPostBtn: document.querySelector('#create-new-post-btn'),

    createPostBtn: document.querySelector('#create-post-btn'),
    userPosts: document.querySelector('#user-posts'),
    contentContainer: document.querySelector('#content-container')
} 
window.addEventListener('load', addEventsToPosts)
DOM.createPostBtn.addEventListener('click', createPost);
DOM.createNewPostBtn.addEventListener('click', showAddMenu)
setTime()