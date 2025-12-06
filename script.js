// fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
//   response.json().then((response) => console.log(response))
// );

// async function fetchUsers() {
//   const users = await fetch("https://jsonplaceholder.typicode.com/posts").then(
//     (response) => response.json()
//   );

//   console.log(users);
// }

// fetchUsers();

// async function fetchUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const users = await response.json();
//     console.log(users);
//   } catch (error) {
//     console.log(error);
//   }
// }

// fetchUsers();

// const container = document.querySelector("#container");

// async function fetchPosts() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const posts = await response.json();
//   const userPosts = posts.filter((post) => post.userId === 1);

//   userPosts.forEach((user) => {
//     const div = document.createElement("div");
//     div.textContent = userPosts;
//     container.appendChild(div);
//   });
// }

// fetchPosts();

const container = document.querySelector("#container");

async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  const userPosts = posts.filter((post) => post.userId === 1);

  userPosts.forEach((user) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h2>Post Title: ${user.title}</h2>
      <h3> UserID ${user.userId}</h3>
      <p>${user.body}</p>
    `;
    container.appendChild(div);
  });
}

fetchPosts();

const profileContainer = document.querySelector("#profile");

async function fetchUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  const chooseUser = users.filter((user) => user.id === 3);

  chooseUser.forEach((user) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h3>${user.name}</h3>
      <p><strong>Username:</strong> ${user.username}</hp>
      <p><strong>Email:</strong><a href="mailto:${user.email}">${user.email}</a></p>
                
      <p><strong>Address:</strong> ${user.address.city},${user.address.street},${user.address.suite} </p>
      <p><strong>Number:</strong> ${user.phone}</p>
      <p><strong>Website:</strong> <a href="https://${user.website}" target="_blank">${user.website}</a></p>
      <p><strong>Company:</strong> ${user.company.name}</p>
    `;
    profileContainer.appendChild(div);
  });
}

fetchUser();
