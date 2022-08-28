
const BUTTON = document.getElementById("buttomSubmit");
var mail_user = document.getElementById("email-input").value;
var pass_user = document.getElementById("password-input").value;

 //save value inputs in local storage
localStorage.setItem("mail", mail_user);
localStorage.setItem("password", pass_user);

BUTTON.addEventListener("submit", function(){
    window.location = "main.html"
    
});

//this file is named index for an exception, this should be called login

