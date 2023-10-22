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

  //handler to cancel a sign out
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
      console.log("test");
    } 
    handleCancelClick("post-btn");
  }

  //brings the draft post box up
  function handleDraftClick() {
    document.getElementById("draft-box").style.zIndex = "1";
    document.getElementById("posts-box").style.filter = "blur(3px)";
  }

  //brings up the log out popup
  function handleLogOutPopup() {
    console.log("okk");
    document.getElementById("logout-box").style.zIndex = "1";
    document.getElementById("posts-box").style.filter = "blur(3px)";
  }

  //redirects the user to the home page after logging out
  function handleLogOut() {
    console.log("yas");
    window.location.href = "home.html";
  }

  //adds listeners to the buttons
  const searchBtn = document.getElementById("search-btn");
  searchBtn.addEventListener("click", function (event) {
    handleSearchPosts(document.getElementById("search-txt").value);
  });

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

  // log out popup
  const logOutButton = document.getElementById("log-out-btn");
  logOutButton.addEventListener("click", function (event) {
    console.log("slay");
    handleLogOutPopup(logOutButton);
  });

  // log out confirmation
  const signOutButton = document.getElementById("logout-btn");
  signOutButton.addEventListener("click", function (event) {
    handleLogOut(signOutButton);
  });
});

const allTags = [
  "Registration",
  "Events",
  "Internships",
  "Jobs",
  "Clubs",
  "Housing",
  "CS111",
  "CS112",
  "CS131",
  "CS132",
  "CS210",
  "CS237",
  "CS320",
  "CS330",
  "CS365",
  "CS392",
  "CS411",
];
//sample code from https://www.w3schools.com/howto/howto_js_autocomplete.asp
function autocomplete(inp, arr) {
  var currentFocus;
  inp.addEventListener("input", function (e) {
    var a,
      b,
      i,
      val = this.value;
    closeAllLists();
    if (!val) {
      return false;
    }
    currentFocus = -1;
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/
    this.parentNode.appendChild(a);
    /*for each item in the array...*/
    for (i = 0; i < arr.length; i++) {
      /*check if the item starts with the same letters as the text field value:*/
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        /*create a DIV element for each matching element:*/
        b = document.createElement("DIV");
        /*make the matching letters bold:*/
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/
        b.addEventListener("click", function (e) {
          /*insert the value for the autocomplete text field:*/
          inp.value = this.getElementsByTagName("input")[0].value;
          /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
      currentFocus++;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 38) {
      //up
      /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
      currentFocus--;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 13) {
      /*If the ENTER key is pressed, prevent the form from being submitted,*/
      e.preventDefault();
      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (x) x[currentFocus].click();
      }
    }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}

autocomplete(document.getElementById("tags"), allTags);