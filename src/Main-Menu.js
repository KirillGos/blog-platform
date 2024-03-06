import { DOM } from "./index.js";

export function MainMenutemplate() {
    const Posts  = JSON.parse(localStorage.Posts);
    const template =
        `
        <div id='main-menu'>
            <div id="munu-header" class="main-menu-sec"> 
                <h1>Welcome back Kirill</h1>
            </div>
            <div id='random-post' class="main-menu-sec">
            <h3>${Posts[getRandomIndex()].name}</h3>   
                <p>${Posts[getRandomIndex()].content}</p>
            </div>
            <div id="main-menu-title-sec" class="main-menu-sec">
                <h1>Manage Your Blogs</h1>
                <h2 id="statistics-title">Amount of blogs: ${Posts.length}</h2>
            </div>

            <div id='edit' class="main-menu-sec hidden">
                <button id='delete-post-btn'>Delete Post</button>
                <button id='edit-post-btn'>Edit Post</button>
            </div>
            <div id='preview-posts' class="main-menu-sec"></div>
        <div>
`;
    DOM.root.innerHTML = template;
    previewTemplate()
}
function getRandomIndex() {
    return Math.floor(Math.random() * JSON.parse(localStorage.Posts).length);
}

function previewTemplate() {
    const posts = JSON.parse(localStorage.Posts);
    const postsArray = posts.map(item => {
     return `  
            <div class="preview">
                <h3 preview-title>${item.name}</h3>
                </div>
       `;
    });

    const previewPosts = document.querySelector('#preview-posts');
    postsArray.forEach(item => {
        previewPosts.insertAdjacentHTML('beforeend', item);
    });
}