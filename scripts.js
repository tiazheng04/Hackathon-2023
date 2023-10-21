document.addEventListener("DOMContentLoaded", function () {
  //handler for cancelling a post by clearing the previous text
  function handleCancelClick(buttonName) {
    document.getElementById("title").value = " ";
    document.getElementById("content").value = " ";
    document.getElementById("draft-box").style.zIndex = "-1";
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
    document.getElementById("draft-box").style.zIndex = "-1";
    document.getElementById("posts-box").style.filter = "blur(0px)";
  }

  function draftPost() {
    document.getElementById("draft-box").style.zIndex = "1";
    document.getElementById("posts-box").style.filter = "blur(3px)";
  }

  //adds listeners to the buttons
  var cancelButton = document.getElementById("cancel-btn");
  cancelButton.addEventListener("click", function (event) {
    handleCancelClick(cancelButton);
  });

  var postButton = document.getElementById("post-btn");
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
