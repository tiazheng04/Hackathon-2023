 // Get the elements by their ID
 var popupLink = document.getElementById("sign-in");
 var popupWindow = document.getElementById("sign-in-window");
 var closeButton = document.getElementById("close-button");
 var anotherPop = document.getElementById("sign-up");
 var anotherWindow = document.getElementById("sign-up-window");
 var closeButton2 = document.getElementById("close-button2");
 var backgroundImg = document.getElementById("background");
 var signUpSuccess = document.getElementById("signup-success");
 var signUpFailure = document.getElementById("signup-fail");
 var retry = document.getElementById("retry-signup");
 var credentials = document.getElementById("wrong-credential");


 // Show the pop-up signin window when sign in button in the upper right corner is clicked. Blurs the background and sets all other popup displays to none.
 popupLink.addEventListener("click", function(event) {
   event.preventDefault();
   //prevent page from doing refresh
   popupWindow.style.display = "block";
   anotherWindow.style.display = "none";
   backgroundImg.style.filter = "blur(20px)";
   signUpSuccess.style.display = "none";
   signUpFailure.style.display = "none";
   
 });


 // Close the pop-up signin window when the x-out button is clicked
 closeButton.addEventListener("click", function(event) {
  event.preventDefault();
   popupWindow.style.display = "none";
   if((anotherWindow.style.display = "none") && (popupWindow.style.display = "none")){
     backgroundImg.style.filter = "blur(0px)";
   }
 });

 // Show the pop-up signin window when sign up button in the upper right corner is clicked. Blurs the background and sets all other popup displays to none.
 anotherPop.addEventListener("click", function(event) {
   event.preventDefault();
   anotherWindow.style.display = "block";
   popupWindow.style.display = "none";
   backgroundImg.style.filter = "blur(20px)";
   signUpSuccess.style.display = "none";
   signUpFailure.style.display = "none";
 });
 // Close the pop-up signup window when the x-out button is clicked
 closeButton2.addEventListener("click", function(event) {
  event.preventDefault();
   anotherWindow.style.display = "none";
   if((anotherWindow.style.display = "none") && (popupWindow.style.display = "none")){
     backgroundImg.style.filter = "blur(0px)";
   }
 });

 //click to redirect to singnup window by displaying the pop-up sign up to block, and displaying failure message to none
 retry.addEventListener("click", function(event){
  event.preventDefault();
  anotherWindow.style.display = "block";
  signUpFailure.style.display = "none";

 }
 
 )
//declare variable for login
 let loginBtn = document.getElementById("login");

 //click the login button and if the user email input contains bu.edu, then redirect user to forum.html, else show invalid dredential message
loginBtn.onclick = (event) => {
    event.preventDefault();
    let userEmailInput = document.getElementById("userEmail").value; // Use .value to get the input value
    console.log(userEmailInput);

    if (userEmailInput.includes("bu.edu")) {
        window.location.href = "forum.html";
    } else {
      credentials.style.display = "block";
    }
};


//declare variable for signup
let SignUpBtn = document.getElementById("signup");

//click the signup button and if the user email input contains bu.edu, then display account creates success message, else display failure message
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

  