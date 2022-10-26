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

fetch("https://jsonplaceholder.typicode.com/users/")
  .then((response) => response.json())
  .then((json) => console.log(json));

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
