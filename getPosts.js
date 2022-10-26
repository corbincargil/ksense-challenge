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

export default getPosts;
