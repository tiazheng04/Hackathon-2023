
  // Get the elements by their ID
  var popupLink = document.getElementById("sign-in");
  var popupWindow = document.getElementById("sign-in-window");
  var closeButton = document.getElementById("close-button");
  // Show the pop-up window when the link is clicked
  popupLink.addEventListener("click", function(event) {
    event.preventDefault();
    popupWindow.style.display = "block";
  });
  // Hide the pop-up window when the close button is clicked
  closeButton.addEventListener("click", function() {
    popupWindow.style.display = "none";
  });

//   var text = document.querySelector(".description");
//   var strText = text.textContent;
//   var splitText = strText.split("");

//   for(let i = 0; i < splitText.length; i++) {
//     text.innerHTML += "<span>" + splitText[i] + "</span>";
//   }

//   letchar = 0;
//   let timer = setInterval(onTick, 50);

//   function onTick() {
//     var span = text.querySelectorAll('span')[char];
//     span.classList.add('fade');
//     char++
//     if (char === splitText.length){
//         complete();
//         return;
//     }
//   }

//   function complete(){
//     clearInterval(timer);
//     timer = null;
//   }

  