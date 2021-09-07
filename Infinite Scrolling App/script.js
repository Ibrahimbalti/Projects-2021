// Target DOM ELements of HTML
const filter=document.getElementById('filter')
const newfeed=document.getElementById('new-feed-container')
const loader=document.getElementById('loader')

let limit=5;
let page=1;

//...........Start Function........
async function FetchPosts(){
    const res=await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)
   const data=await res.json();
  return data
}

async function RenderPosts(){
    const posts=await FetchPosts();
    
    posts.forEach(post=>{ 
    const PostDiv=document.createElement('div')
    PostDiv.classList.add('post')

    PostDiv.innerHTML=` <div class="post-id">${post.id}</div>
    <div class="post-content">
        <h2 class="post-title" id="post-title">${post.title}</h2>
        <p class="post-body" id="post-body">${post.body}</p>
    </div>`
    
newfeed.appendChild(PostDiv)
    })

}

function showLoader(){
    loader.classList.add('show')
    page++
    RenderPosts();
    loader.classList.remove('show')

}

function filterPosts(e){
    const filterkeyword=e.target.value.toLowerCase();
    const post=document.querySelectorAll('.post')
 post.forEach(post=>{
     const title=post.querySelector('.post-title').innerText;
     
     const body=post.querySelector('.post-body').innerText;
     console.log(body);
     if(title.indexOf(filterkeyword)>=0 || body.indexOf(filterkeyword)>=0){
post.style.display="flex"
     }
     else{
         post.style.display="none"
     }
 })
}
//..................End Function......
//........start Even.........
window.addEventListener('scroll',()=>{
    const {scrollTop,scrollHeight,clientHeight}=document.documentElement;
    if(scrollTop+clientHeight>=scrollHeight)
    {
        showLoader()
    }
})

filter.addEventListener('input',filterPosts)
//............End Evens....


//...........End Function..........

//............Call..........
RenderPosts()