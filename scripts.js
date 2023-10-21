document.addEventListener('DOMContentLoaded', function () {
  //handler for cancelling a post
  function handleCancelClick(buttonName) {
    var post = document.getElementById("postPopup");
    post.style.display = "block";
  }

  //handler for the post click
  function handlePostClick(buttonName) {
    var postUser = document.getElementById("User").value;
    var title = document.getElementById("title").value;
    var postContent = document.getElementById("content").value;

    var postElement = document.createElement("div");
    postElement.className = "posts-box";
    postElement.innerHTML =
      "<h3>" + postTitle + "</h3><p>" + postContent + "</p>";

    document.getElementById("posts").appendChild(postElement);

    closePopup();
  }

  //adds listeners to the buttons
  var cancelButton = this.getElementById("cancel-btn");
  cancelButton.addEventListener("click", function (event) {
    handleCancelClick(cancelButton);
  });

  var postButton = this.getElementById("post-btn");
  postButton.addEventListener("click", function (event) {
    handlePostClick(postButton);
  });

  //accesses firebase for the given email and password

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User is signed in, you can now access the database
      var user = userCredential.user;
    });
});



