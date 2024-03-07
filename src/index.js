import getTime from './time.js';
import { MainMenutemplate } from './Main-Menu.js';

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
    contentContainer: document.querySelector('#content-container'),
    root: document.querySelector('#root'),
    displayMainMenuBtn: document.querySelector('#enter-main-menu')
}
window.addEventListener('load', displayBlogName)
window.addEventListener('load', addEventsToPosts)


getTime();

DOM.displayMainMenuBtn.addEventListener('click', MainMenutemplate)
DOM.createPostBtn.addEventListener('click', createPost);
DOM.createNewPostBtn.addEventListener('click', showAddMenu)