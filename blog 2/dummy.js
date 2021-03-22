var blog = [];
function submitBlog() {
  insertNewBlog();
  displayBlog();
}

localStorage.setItem("blog", JSON.stringify([]))
function storeInSession(blog) {

  localStorage.setItem("blog", JSON.stringify(blog));

}
function retriveFromSession() {
  var obj = JSON.parse(localStorage.getItem("blog"));
  return obj;

}

function readFormData() {
  var formData = {};
  formData.title = document.getElementById("title").value;
  formData.desc = document.getElementById("desc").value;
  formData.imageId = document.getElementById("imageId").files[0].name;
  console.log(formData);
  return (formData);
}
function displayBlog() {
  retriveFromSession()
  var container = document.getElementById('blogCont');
  var content = '';
  for (let i = 0; i < blog.length; i++) {
    content += `<div class="card">
        
        <div class="card-body">
        <h3 class="card-title">${blog[i].title}</h3>
        <p class="card-text">${blog[i].desc}</p>
        <img src="${blog[i].imageId}" class="card-img-top"width="80"height="60px">
        </div>
        </div>
        <hr>
        `;
  }
  container.innerHTML = content;
}


function insertNewBlog() {
retriveFromSession()
  var newEntry = readFormData();
  blog.push(newEntry);
  localStorage.setItem("blog", JSON.stringify(blog));
}

