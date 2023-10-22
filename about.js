document.addEventListener("DOMContentLoaded", function () {  
    //cancel the logout
    const signOutCancelButton = document.getElementById("cancelBtn");
    signOutCancelButton.addEventListener("click", function (event) {
        document.getElementById("logout-box").style.zIndex = "-1";
        document.getElementById("container").style.filter = "blur(0px)";
    });
  
    // log out popup
    const logOutButton = document.getElementById("log-out-btn");
    logOutButton.addEventListener("click", function (event) {
      console.log("slay");
      document.getElementById("logout-box").style.zIndex = "1";
      document.getElementById("container").style.filter = "blur(3px)";
    });
  
    // log out confirmation redirects the user to the home page after logging out
    const signOutButton = document.getElementById("logout-btn");
    signOutButton.addEventListener("click", function (event) {
        window.location.href = "index.html";
    });
  });