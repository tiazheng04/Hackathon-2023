document.addEventListener('DOMContentLoaded', function () {
        
    function handleCancelClick(buttonName) {
        var post = document.getElementById("postPopup");
        post.style.display = "block";
    }

    function handlePostClick(buttonName) {
      var postUser = document.getElementById("User").value;
      var title = doctument.getElementById("title").value;
      var postContent = document.getElementById("content").value;

      var postElement = document.createElement("div");
      postElement.className = "posts-box";
      postElement.innerHTML =
        "<h3>" + postTitle + "</h3><p>" + postContent + "</p>";

      document.getElementById("posts").appendChild(postElement);

      closePopup();
    }


    var cancelButton = this.getElementById("id of the button");
    cancelButton.addEventListener('click', function(event) {handleCancelClick("cancelButton")});

    var postButton = this.getElementById("insert id of the post button");
    postButton.addEventListener('click', function(event) {handlePostClick(buttonName)});



});



