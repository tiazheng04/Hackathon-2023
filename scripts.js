document.addEventListener('DOMContentLoaded', function () {
        
    function handleCancelClick(buttonName) {
        var post = document.getElementById("post-box");
        post.style.display = "block";
    }

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


    var cancelButton = this.getElementById("cancel");
    cancelButton.addEventListener("click", function (event) {
      handleCancelClick("cancelButton");
    });

    var postButton = this.getElementById("post");
    postButton.addEventListener('click', function(event) {handlePostClick(buttonName)});



});



