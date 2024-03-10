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
                <div id="edit-post-btn"  class="change">🛠</div>
                <div id="delete-post-btn" class="change">🗑</div>
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
            <div id="user-info-sidebar-to-do">
            <div id="user-info-sidebar-blog-info">
                <h3>You have <span id="amount-of-blogs"> posts</span></h3>
                <p>In the simple to do app below you can set temporary goals for your blogs</p>
            </div>
            <h2>To-Do-List</h2>
                <div id="to-do-sec">
                    <div class="to-do-item">Learn JavaScript</div>
                    <div class="to-do-item">Learn Web API</div>
                    <div class="to-do-item">Learn React</div>
                </div>
                <button id="add-a-to-do-btn">Add an Item</button>
            </div>
        </div>
`;
        DOM.root.innerHTML  = template;
        DOM.root.classList = 'root-style-2';
        DOM.header.classList = '';
        createPostCards();
      
}
