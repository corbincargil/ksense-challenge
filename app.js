//Ksense coding challenge
//Submitted by: Corbin Cargil
//10/26/2022

//DOM nodes
const root = document.getElementById("root");
const tableContainer = document.createElement("div");
tableContainer.setAttribute("id", "table-container");
const postContainer = document.createElement("div");
root.appendChild(tableContainer);
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

//getUsers function
async function getUsers() {
  try {
    const results = await fetch(
      "https://jsonplaceholder.typicode.com/users/"
    ).then((response) => response.json());
    return results;
  } catch (error) {
    console.log(error);
  }
}

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

//getPosts function
async function getPosts() {
  try {
    const results = await fetch(
      "https://jsonplaceholder.typicode.com/posts/"
    ).then((response) => response.json());
    console.log(results);
    return results;
  } catch (error) {
    console.log(error);
  }
}
// const posts = getPosts();
