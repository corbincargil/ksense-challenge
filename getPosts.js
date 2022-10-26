//getPosts function
async function getPosts(id) {
  try {
    const posts = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}/posts`
    ).then((response) => response.json());
    const results = posts.slice(0, 5); //only show 5 posts
    return results;
  } catch (error) {
    console.log(error);
  }
}

export default getPosts;
