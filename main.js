import { ref, push, database, onValue } from "./firebase.js";

// get elements from index.html
let userInputTitle = document.getElementById("title");
let userInputText = document.getElementById("content");
let submitBtn = document.getElementById("post-btn");
let itemsContainer = document.getElementById("itemsContainer");

// reference a part of our database
let itemsRef = ref(database, "items");

// Function to display items in reverse order, newer posts are on top
function displayItemsReversed(data) {
  
    itemsContainer.innerHTML = "";
    console.log(data);
    const keys = Object.keys(data).reverse();
    for (let key of keys) {
      let item = data[key];

      let newDiv = document.createElement("div");
      newDiv.className = "post";  
      newDiv.innerHTML = `
        <h2 id="post-title">${item.title}</h2>
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

      // Display comments if available
      const commentsContainer = document.getElementById(`commentsContainer${key}`);
      if (item.comments) {
        for (let commentKey in item.comments) {
          const comment = item.comments[commentKey];
          const commentDiv = document.createElement("div");
          commentDiv.innerText = comment.text;
          commentsContainer.appendChild(commentDiv);
        }
      }
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
    newCommentDiv.id = "commentdiv"
    newCommentDiv.innerText = commentText;

    // Append the comment to the comments container
    commentsContainer.appendChild(newCommentDiv);

    // Clear the comment input
    commentInput.value = "";

    // Create an object to store the comment
    const newComment = {
      text: commentText,
    };

    // Generate a new child reference under "items/{itemId}/comments" and set the comment as its value
    const commentsRef = ref(database, `items/${itemId}/comments`);
    push(commentsRef, newComment);
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
  if (userInputTitle.value == "" || userInputText.value == "") {
    alert("Please write in both text boxes");
  } else {
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
  }
};


