let usersList = document.querySelector("#usersList");
// Get Data from API
async function getData() {
  const response = await fetch("http://localhost:3000/users/");
  return response.json();
}

let users;
// Update User list
async function updateData() {
  users = await getData().then((data) => data);
  usersList.innerHTML = "";

  for (let i = 0; i < users.length; i++) {
    let userRecord = `        <tr>
            <td>${i + 1}</td>
            <td>
            ${users[i].family}
            </td>
            <td>
            ${users[i].name}
            </td>
            <td>
              ${users[i].age} years
            </td>
            <td>
            ${users[i].job}
            </td>
            <td>
            ${users[i].address}
            </td>
            <td style="width: 18%;">
              
              <a href="#!" onclick="removeUser('${users[i]._id}')" class="btn waves-effect waves-light red darken-2" @click="archive(index)"><i class="material-icons">delete</i>
              </a>
            </td>
          </tr>`;

    usersList.innerHTML += userRecord;
  }
}
updateData();

// POST user to API with prompt
function addUser() {
  fetch("http://localhost:3000/users/add", {
    method: "POST",
    body: JSON.stringify({
      name: prompt("Name:"),
      family: prompt("Family:"),
      age: Number(prompt("Age:")),
      address: prompt("Address:"),
      job: prompt("Job:"),
      isArchive: false,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      if (json == true) {
        alert("User Added Successfuly");
        updateData();
      } else if (json == false) {
        alert("Failed to add user");
      }
    });
}

// Remove user from API
function removeUser(id) {
  fetch(`http://localhost:3000/users/remove?id=${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((json) => {
      if (json == true) {
        alert("User Removed Successfuly");
        updateData();
      } else if (json == false) {
        alert("Failed to remove user");
      }
    });
}
