document.addEventListener("DOMContentLoaded", function () {
  //connects this js file to the firebase database
  //firebaseOperation();

  //handler for cancelling a post by clearing the previous text
  function handleCancelClick(buttonName) {
    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
    document.getElementById("draft-box").style.zIndex = "-1";
    document.getElementById("posts-box").style.filter = "blur(0px)";
  }

  function signOutCancel(buttonName) {
    document.getElementById("logout-box").style.zIndex = "-1";
    document.getElementById("posts-box").style.filter = "blur(0px)";
  }

  //handler for the post click if empty don't post and poses an alert
  //then clears the entries for the next post
  function handlePostClick(buttonName) {
    const postTitle = document.getElementById("title").value.trim();
    const postContent = document.getElementById("content").value.trim();
    const oldContent = document.getElementById("posts-box").innerHTML;
    if (postTitle != "" && postContent != "") {
      document.getElementById("posts-box").innerHTML = `
          <div class="post">
              <h2 id="post-title">${postTitle}</h2>
              <p>${postContent}</p>
          </div>
          ${oldContent}
      `;
    } else {
      alert("Please write in both text boxes");
    }
    handleCancelClick("post-btn");
  }

  function handleDraftClick() {
    document.getElementById("draft-box").style.zIndex = "1";
    document.getElementById("posts-box").style.filter = "blur(3px)";
  }

  function handleLogOutPopup() {
    document.getElementById("logout-box").style.zIndex = "1";
    document.getElementById("posts-box").style.filter = "blur(3px)";
  }

  function handleLogOut() {
    window.location.href = "home.html";
  }

  //handles search functionality using the firebase
  //edit this later depending on what's in the firebase and how things are organized
  // function handleSearchPosts(keyword) {
  //   var postsRef = firebase.database().ref("posts");

  // postsRef
  //   .orderByChild("title")
  //   .equalTo(keyword)
  //   .once("value")
  //   .then(function (snapshot) {
  //     // Handle search results
  //     snapshot.forEach(function (childSnapshot) {
  //       var postData = childSnapshot.val();
  //       console.log("Title: " + postData.title);
  //       console.log("Content: " + postData.content);
  //     });
  //   })
  //   .catch(function (error) {
  //     console.error("Error searching posts: " + error);
  //   });
  //}

  //adds listeners to the buttons
  const cancelButton = document.getElementById("cancel-btn");
  cancelButton.addEventListener("click", function (event) {
    handleCancelClick(cancelButton);
  });

  const signOutCancelButton = document.getElementById("cancelBtn");
  signOutCancelButton.addEventListener("click", function (event) {
    signOutCancel(signOutCancelButton);
  });

  const postButton = document.getElementById("post-btn");
  postButton.addEventListener("click", function (event) {
    handlePostClick(postButton);
  });

  const draftButton = document.getElementById("draft-btn");
  draftButton.addEventListener("click", function (event) {
    handleDraftClick(draftButton);
  });

  const searchButton = document.getElementById("search-btn");
  searchButton.addEventListener("click", function (event) {
    handleSearchPosts(document.getElementById("search-txt").value);
  });

  const logOutButton = document.getElementById("log-out-btn");
  logOutButton.addEventListener("click", function (event) {
    handleLogOutPopup(logOutButton);
  });

  const signOutButton = document.getElementById("logout-btn");
  signOutButton.addEventListener("click", function (event) {
    handleLogOut(signOutButton);
  });

  //accesses firebase for the given email and password
  // for the posts
  // firebase
  //   .auth()
  //   .signInWithEmailAndPassword(email, password)
  //   .then((userCredential) => {
  //     // User is signed in, you can now access the database
  //     var user = userCredential.user;
  //   });
});
