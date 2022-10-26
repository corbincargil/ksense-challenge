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

export default getUsers;
