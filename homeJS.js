 // Get the elements by their ID
 var popupLink = document.getElementById("sign-in");
 var popupWindow = document.getElementById("sign-in-window");
 var closeButton = document.getElementById("close-button");
 var backgroundImg = document.getElementById("background");
 var signUpSuccess = document.getElementById("signup-success");
 var signUpFailure = document.getElementById("signup-fail");
 var retry = document.getElementById("retry-signup");
 // Show the pop-up window when the link is clicked
 popupLink.addEventListener("click", function(event) {
   event.preventDefault();
   popupWindow.style.display = "block";
   anotherWindow.style.display = "none";
   backgroundImg.style.filter = "blur(20px)";
   signUpSuccess.style.display = "none";
   signUpFailure.style.display = "none";
   
 });
 // Hide the pop-up window when the close button is clicked
 closeButton.addEventListener("click", function(event) {
  event.preventDefault();
   popupWindow.style.display = "none";
   if((anotherWindow.style.display = "none") && (popupWindow.style.display = "none")){
     backgroundImg.style.filter = "blur(0px)";
   }
 });

 var anotherPop = document.getElementById("sign-up");
 var anotherWindow = document.getElementById("sign-up-window");
 var closeButton2 = document.getElementById("close-button2");
 // Show the pop-up window when the link is clicked
 anotherPop.addEventListener("click", function(event) {
   event.preventDefault();
   anotherWindow.style.display = "block";
   popupWindow.style.display = "none";
   backgroundImg.style.filter = "blur(20px)";
   signUpSuccess.style.display = "none";
   signUpFailure.style.display = "none";
 });
 // Hide the pop-up window when the close button is clicked
 closeButton2.addEventListener("click", function(event) {
  event.preventDefault();
   anotherWindow.style.display = "none";
   if((anotherWindow.style.display = "none") && (popupWindow.style.display = "none")){
     backgroundImg.style.filter = "blur(0px)";
   }
 });

 retry.addEventListener("click", function(event){
  event.preventDefault();
  anotherWindow.style.display = "block";
  signUpFailure.style.display = "none";

 }
 
 )

 let loginBtn = document.getElementById("login");

loginBtn.onclick = (event) => {
    event.preventDefault();
    let userEmailInput = document.getElementById("userEmail").value; // Use .value to get the input value
    console.log(userEmailInput);

    if (userEmailInput.includes("bu.edu")) {
        window.location.href = "forum.html";
    }
};

let SignUpBtn = document.getElementById("signup");

SignUpBtn.onclick = (event) => {
  event.preventDefault();
  let userEmailSignUp = document.getElementById("userSignup").value;

  if(userEmailSignUp.includes("bu.edu")) {
    signUpSuccess.style.display = "block";

  } else {
    signUpFailure.style.display = "block";
    console.log("failed")

  }
}

  


  // if (popupWindow.style.display =="block"){
  //   anotherWindow.style.display == "none";
  // }

  // if(anotherWindow.style.display =="block"){
  //   popupWindow.style.display== "none";
  // }

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

  