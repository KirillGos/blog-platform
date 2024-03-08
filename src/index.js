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
    header: document.querySelector('header'),
    createNewPostBtn: document.querySelector('#create-new-post-btn'),
    userName: document.querySelector('#user-name'),
    createPostBtn: document.querySelector('#create-post-btn'),
    sidebarUserPosts: document.querySelector('#sidebar-user-posts'),
    contentContainer: document.querySelector('#content-container'),
    root: document.querySelector('#root'),
    displayMainMenuBtn: document.querySelector('#enter-main-menu'),
    root: document.querySelector('#root')
}
window.addEventListener('load', displayBlogName)
window.addEventListener('load', addEventsToPosts)

MainMenutemplate()
getTime();
DOM.displayMainMenuBtn.addEventListener('click', MainMenutemplate)
DOM.createNewPostBtn.addEventListener('click', showAddMenu);

(function displayName() {
    if(localStorage.name === undefined) {
        localStorage.name =  prompt('What is your name?');
    }
    DOM.userName.innerText = localStorage.name;
})()