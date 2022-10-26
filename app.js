//Ksense coding challenge
//Submitted by: Corbin Cargil
//10/26/2022

import getUsers from "./getUsers.js";
import getPosts from "./getPosts.js";

//DOM nodes
const root = document.getElementById("root");
const tableContainer = document.createElement("div");
const postContainer = document.createElement("div");
const postHeadingContainer = document.createElement("div");
const postHeading = document.createElement("h2");
const postSubHeading = document.createElement("p");
const postList = document.createElement("ol");
const postPreview = document.createElement("div");
tableContainer.setAttribute("id", "table-container");
postContainer.setAttribute("id", "post-container");
postHeadingContainer.setAttribute("id", "post-heading-container");
postHeading.setAttribute("id", "post-heading");
postSubHeading.setAttribute("id", "post-subheading");
postList.setAttribute("id", "post-list");
postPreview.setAttribute("id", "post-preview");
postHeading.textContent = "Click a user in the table";
postSubHeading.textContent = "Click a title to preview the post";
postList.textContent = "Post titles here...";
postPreview.textContent = "Post content here...";
postHeadingContainer.appendChild(postHeading);
postContainer.appendChild(postHeadingContainer);
postContainer.appendChild(postList);
postContainer.appendChild(postPreview);
root.appendChild(tableContainer);
root.appendChild(postContainer);

//Create table
((container) => {
  let table = document.createElement("table");
  table.setAttribute("id", "user-table");
  const headerData = ["ID", "USERNAME", "COMPANY"];
  let row = table.insertRow();
  headerData.forEach((column) => {
    let th = document.createElement("th");
    th.textContent = `${column}`;
    row.appendChild(th);
  });
  table.appendChild(row);
  container.appendChild(table);
})(tableContainer);

//Render users in table
const renderTableData = async () => {
  const table = document.getElementById("user-table");
  const users = await getUsers();
  users.forEach((user) => {
    let tr = document.createElement("tr");
    let id = document.createElement("td");
    let username = document.createElement("td");
    let company = document.createElement("td");
    id.textContent = `${user.id}`;
    username.textContent = `${user.username}`;
    company.textContent = `${user.company.name}`;
    tr.appendChild(id);
    tr.appendChild(username);
    tr.appendChild(company);
    tr.addEventListener("click", () => {
      clearPostList();
      postPreview.textContent = "Post content here...";
      renderPosts(user.id);
      postHeading.textContent = `${user.username}'s Posts:`;
      postHeadingContainer.appendChild(postSubHeading);
    });
    tr.classList.add("list-item");
    table.appendChild(tr);
  });
};

//Render posts
async function renderPosts(id) {
  const posts = await getPosts(id);
  const list = document.getElementById("post-list");
  posts.forEach((post) => {
    let li = document.createElement("li");
    li.textContent = `${post.title}`;
    li.addEventListener("click", () => {
      clearSelectedPost();
      li.classList.remove("unselected");
      li.classList.add("selected");
      postPreview.textContent = `"${post.body}"`;
    });
    list.appendChild(li);
  });
}

//Clean list of posts
const clearPostList = () => {
  postList.innerHTML = "";
};

//Clear selected post
const clearSelectedPost = () => {
  let array = [...postList.children];
  array.forEach((post) => {
    post.classList.remove("selected");
    post.classList.add("unselected");
  });
};

renderTableData();
