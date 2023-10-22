import { onValue, ref, database } from "./firebase.js";

let itemsRef = ref(database, "items");
let itemsContainer = document.getElementById("itemsContainer");

// Function to handle search functionality using the firebase
function handleSearchPosts(keyword) {
  onValue(itemsRef, (snapshot) => {
    var resultsList = [];

    snapshot.forEach((childSnapshot) => {
      var item = childSnapshot.val();

      if (
        item &&
        (item.title.toLowerCase().includes(keyword.toLowerCase()) ||
          item.text.toLowerCase().includes(keyword.toLowerCase()))
      ) {
        resultsList.push(item);
      }
    });

    itemsContainer.innerHTML = "";
    resultsList.forEach((result) => {
      const postDiv = document.createElement("div");
      postDiv.className = "post";
      postDiv.innerHTML = `
        <h2 id="post-title">${result.title}</h2>
        <p>${result.text}</p>
      `;
      itemsContainer.appendChild(postDiv);
    });
  });
}

let searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", function (event) {
  handleSearchPosts(document.getElementById("search-txt").value);
});
