
const BUTTON = document.getElementById("buttomSubmit");
var mail_user = document.getElementById("email-input").value;
var pass_user = document.getElementById("password-input").value;


BUTTON.addEventListener("submit", function(){
    //redirect to main
    window.location = "main.html"
    //save value inputs in local storage
    localStorage.setItem("mail", mail_user);
    localStorage.setItem("password", pass_user);
    console.log(localStorage);
    
});

//this file is named index for an exception, this should be called login

