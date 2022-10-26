//Ksense coding challenge
//Submitted by: Corbin Cargil
//10/26/2022

import getUsers from "./getUsers.js";
import getPosts from "./getPosts.js";

//DOM nodes
const root = document.getElementById("root");
const tableContainer = document.createElement("div");
const postContainer = document.createElement("div");
const postHeading = document.createElement("h2");
const postList = document.createElement("ol");
const postPreview = document.createElement("div");
tableContainer.setAttribute("id", "table-container");
postContainer.setAttribute("id", "post-container");
postHeading.setAttribute("id", "post-heading");
postList.setAttribute("id", "post-list");
postPreview.setAttribute("id", "post-preview");
postHeading.textContent = "Post Container";
postList.textContent = "Post titles here...";
postPreview.textContent = "Post content here...";
postContainer.appendChild(postHeading);
postContainer.appendChild(postList);
postContainer.appendChild(postPreview);
root.appendChild(tableContainer);
root.appendChild(postContainer);
// console.log(root);

//Create table
const createTable = (container) => {
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
};

createTable(tableContainer);

//render users in table
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
      console.log(`You clicked ${user.username}`);
    });
    tr.classList.add("list-item");
    table.appendChild(tr);
  });
};
renderTableData();
