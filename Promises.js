// const promise = new Promise((resolve , reject) => {
//      let success= true ;
//      if(success) {
//          resolve("sucess....") ;
//      }else {
//         reject("failed...")
//      }
// })
// promise.then((data) => console.log(data))
// .catch(err => console.log(err)) ;

//-------------------------------------

// function fetchUser(userId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ id: userId, name: "ankush kushwaha" });
//     }, 2000);
//   });
// }

// function fetchUserPost(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(["Post1", "Post2"]);
//     }, 2000);
//   });
// }

// fetchUser(101)
//   .then((user) => {
//     console.log(user.name);
//     return fetchUserPost(user.id);
//   })
//   .then((post) => console.log(post))
//   .catch((err) => console.log(err));

//-------------------------------------

// async function fetchUser() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
//   console.log("ankush"); 
//   const data = await response.json();
//   return data;
// }
// const data = await fetchUser();
// console.log(data);

// ==========================================
// 1. Mock API Functions (Creating Promises)
// ==========================================

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
        { id: 2, title: "Async/Await Guide" }
      ]);
    }, 1000);
  });
}

function getComments(postId) {
  return new Promise((resolve) => {
    console.log(`Fetching comments for post ID ${postId}...`);
    setTimeout(() => {
      resolve([
        "Great post!",
        "Thanks for explaining promises clearly."
      ]);
    }, 1000);
  });
}

getUser(101)
  .then((user) => {
    console.log("User received:", user);
    return getPosts(user.id); 
  })
  .then((posts) => {
    console.log("Posts received:", posts);
    return getComments(posts[0].id); 
  })
  .then((comments) => {
    console.log("Comments received:", comments);
  })
  .catch((error) => {
    console.error("Something went wrong at ANY step:", error.message);
  });