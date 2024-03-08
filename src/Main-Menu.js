import { DOM } from "./index.js";
import  {addEventsToEditBtns} from "./EditPosts.js";


function createPostCards(){
    const Posts  = JSON.parse(localStorage.Posts);
    const PostsEl = Posts.map(card => {
        return( 
        `<div id="post-card">
            <h3 class="post-card-title">${card.name}</h3>
            <div id="post-card-description">
              <p>${card.description}</p>
            </div>
            <div id="card-bottom">
                <div>🛠</div>
                <div>🗑</div>
            </div>
        </div>`)
    });

    PostsEl.forEach(item => {
        document.querySelector('#user-posts').insertAdjacentHTML('beforeend', item);
    });
}
export function MainMenutemplate(e) {
       const template =
        `
          <div id="user-posts">
            
          </div>
        <div id="user-information-sidebar">
            <div id="blog-info">
                <div id="about-post">
                    <h2>You have:12  blogs</h2>
                    <button id='change-display' class="yellow-button">Change post display</button>
                </div>
                <div id="delete-all">
                    <h2>Delete all of your posts</h2>
                    <button class="yellow-button">Delete All</button>
                </div>
            </div>
            <div id="quote-of-the-day">
                <h2>Quote of the Day</h2>
                <p>Nothing changes if nothing changes.</p></div>
            </div>
        </div>
`;
        DOM.root.innerHTML  = template;
        DOM.root.classList = 'root-style-2';
        DOM.header.classList = '';
        createPostCards();
      
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
}