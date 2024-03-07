import { DOM } from "./index.js";
import  {addEventsToEditBtns} from "./EditPosts.js";

if(localStorage.name === undefined) {
    localStorage.name =  prompt('What is your name?');
}
export function MainMenutemplate() {
    const Posts  = JSON.parse(localStorage.Posts);
    const template =
        `
            <div id="munu-header" class="main-menu-sec"> 
                <h1>Welcome back ${localStorage.name}</h1>
            </div>
            <div id='random-post' class="main-menu-sec">
                <p><i>Time is running out no need to take it slow</i></p>
            </div>
            <div id="main-menu-title-sec" class="main-menu-sec">
                <h1>Manage Your Blogs</h1>
                <h2 id="statistics-title">Amount of blogs: ${Posts.length}</h2>
            </div>
            <div id='preview-posts' class="main-menu-sec"></div>
`;
    DOM.contentContainer.innerHTML  = template;
    previewTemplate()
}


function previewTemplate() {
    const posts = JSON.parse(localStorage.Posts);
    const postsArray = posts.map(item => {
     return `  
            <div class="preview" id="${item.id}">
                <h3 class="preview-title">${item.name}</h3> <span id="edit-post">🛠</span>
                </div>
       `;
    });

    const previewPosts = document.querySelector('#preview-posts');
    postsArray.forEach(item => {
        previewPosts.insertAdjacentHTML('beforeend', item);
    });
    addEventsToEditBtns();
}