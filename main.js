let loginBtn = document.getElementById("login");

loginBtn.onclick = (event) => {
    event.preventDefault();
    let userEmailInput = document.getElementById("userEmail").value; // Use .value to get the input value
    console.log(userEmailInput);

    if (userEmailInput.includes("bu.edu")) {
        window.location.href = "forum.html";
    }
};

