
const BUTTON = document.getElementById("buttomSubmit");
var mail_user = getElementById("email-input").val();
var pass_user = getElementById("password-input").val();


BUTTON.addEventListener("submit", function(){
    //save value inputs in local storage
localStorage.setItem(mail, mail_user);
localStorage.setItem(password, pass_user);
    window.location = "main.html"
});

//this file is named index for an exception, this should be called login

