document.addEventListener("DOMContentLoaded", function () {
  //handler for cancelling a post
  function handleCancelClick(buttonName) {
    var post = document.getElementById("postPopup");
    post.style.display = "block";
  }

  //handler for the post click
  function handlePostClick(buttonName) {
    let postTitle = document.getElementById("title").value;
    let postContent = document.getElementById("content").value;
    let oldContent = document.getElementById("posts-box").innerHTML;
    document.getElementById("posts-box").innerHTML = `
      <div class="post">
          <h2 id="post-title">${postTitle}</h2>
          <p>${postContent}</p>
      </div>
      ${oldContent}
  `;
  }

  function draftPost() {
    document.getElementById("draft-box").style.zIndex = "1";
    document.getElementById("posts-box").style.filter = "blur(3px)";
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
