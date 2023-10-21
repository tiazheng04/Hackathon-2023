/*import { ref, push, database, onValue } from "./firebase.js";

// get elements from index.html
let userInputTitle = document.getElementById("itemTitle");
let userInputText = document.getElementById("itemText");
let submitBtn = document.getElementById("submitBtn");
let itemsContainer = document.getElementById("itemsContainer");

// reference a part of our database
let itemsRef = ref(database, "items");

// Function to display items in reverse order
function displayItemsReversed(data) {
  itemsContainer.innerHTML = "";
  console.log(data);
  const keys = Object.keys(data).reverse();
  for (let key of keys) {
    let item = data[key];

    let newDiv = document.createElement("div");
    newDiv.innerHTML = `<h1>${item.title}</h1><p>${item.text}</p>`;

    itemsContainer.append(newDiv);
  }
}

// show items on Firebase in our items container
onValue(itemsRef, (snapshot) => {
  const data = snapshot.val();
  displayItemsReversed(data);
});

// add item to database
submitBtn.onclick = (event) => {
  event.preventDefault();
  let userInputValueTitle = userInputTitle.value;
  userInputTitle.value = "";
  let userInputValueText = userInputText.value;
  userInputText.value = "";

  // Create an object to store both title and text
  const newItemData = {
    title: userInputValueTitle,
    text: userInputValueText
  };

  // Generate a new child reference under "items" and set the object as its value
  push(itemsRef, newItemData);
};
*/

import { ref, push, set, database, onValue } from "./firebase.js";

// get elements from index.html
let userInputTitle = document.getElementById("itemTitle");
let userInputText = document.getElementById("itemText");
let submitBtn = document.getElementById("submitBtn");
let itemsContainer = document.getElementById("itemsContainer");

// reference a part of our database
let itemsRef = ref(database, "items");

// Function to display items in reverse order
function displayItemsReversed(data) {
  itemsContainer.innerHTML = "";
  console.log(data);
  const keys = Object.keys(data).reverse();
  for (let key of keys) {
    let item = data[key];

    let newDiv = document.createElement("div");
    newDiv.innerHTML = `
      <h1>${item.title}</h1>
      <p>${item.text}</p>
      <input type="text" id="commentInput${key}" placeholder="Add Comment">
      <button id="commentBtn${key}">Submit Comment</button>
      <div id="commentsContainer${key}"></div>
    `;

    itemsContainer.append(newDiv);

    // Add a click event listener to the comment button
    const commentBtn = document.getElementById(`commentBtn${key}`);
    commentBtn.addEventListener("click", () => {
      addComment(key);
    });
  }
}

// Function to add a comment to a specific item
function addComment(itemId) {
  const commentsContainer = document.getElementById(`commentsContainer${itemId}`);
  const commentInput = document.getElementById(`commentInput${itemId}`);
  const commentText = commentInput.value;

  if (commentText) {
    // Create a new element to display the comment
    const newCommentDiv = document.createElement("div");
    newCommentDiv.innerText = commentText;

    // Append the comment to the comments container
    commentsContainer.appendChild(newCommentDiv);

    // Clear the comment input
    commentInput.value = "";

    // Create an object to store the comment
    const newComment = {
      text: commentText,
    };

    // Generate a new child reference under "items/{itemId}/comments" and set the object as its value
    push(ref(itemsRef, `${itemId}/comments`), newComment);
  }
}

// show items on Firebase in our items container
onValue(itemsRef, (snapshot) => {
  const data = snapshot.val();
  displayItemsReversed(data);
});

// add item to database
submitBtn.onclick = (event) => {
  event.preventDefault();
  let userInputValueTitle = userInputTitle.value;
  userInputTitle.value = "";
  let userInputValueText = userInputText.value;
  userInputText.value = "";

  // Create an object to store both title and text
  const newItemData = {
    title: userInputValueTitle,
    text: userInputValueText,
  };

  // Generate a new child reference under "items" and set the object as its value
  push(itemsRef, newItemData);
};


