function getUser(userId) {
  return new Promise((resolve, reject) => {
    console.log("Fetching user...");
    setTimeout(() => {
      if (userId === 101) {
        resolve({ id: 101, username: "Ankush" });
      } else {
        reject(new Error("User not found!"));
      }
    }, 1000);
  });
}

function getPosts(userId) {
  return new Promise((resolve) => {
    console.log(`Fetching posts for user ID ${userId}...`);
    setTimeout(() => {
      resolve([
        { id: 1, title: "JavaScript Promises" },
        { id: 2, title: "Async/Await Guide" },
      ]);
    }, 1000);
  });
}

function getComments(postId) {
  return new Promise((resolve) => {
    console.log(`Fetching comments for post ID ${postId}...`);
    setTimeout(() => {
      resolve(["Great post!", "Thanks for explaining promises clearly."]);
    }, 1000);
  });
}

const getData = async (ID) => {
  try {
    const fetchUser = await getUser(ID);
    console.log("User recived :", fetchUser);
    const getPost = await getPosts(fetchUser.id);
    console.log("Post recieved :", getPost);
    const getComment = await getComments(getPost[0].id);
    console.log("Comment recived  :", getComment);
  } catch (err) {
    console.log(err.message);
  }
};
getData(101);
