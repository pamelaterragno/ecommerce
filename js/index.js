
const BUTTON = document.getElementById("buttomSubmit");
var mail_user = document.getElementById("email-input");
var pass_user = document.getElementById("password-input");

BUTTON.addEventListener("submit", (evt)=> {
   //save value inputs in local storage
 if (mail_user.value && pass_user.value) 
 localStorage.setItem("mail", mail_user.value) &&
 localStorage.setItem("password", pass_user.value);
      //redirect to main
      window.location = "main.html";
});

//this file is named index for an exception, this should be called login