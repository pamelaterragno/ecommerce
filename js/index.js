
const BUTTON = document.getElementById("buttomSubmit");
var mail_user = document.getElementById("email-input");
var pass_user = document.getElementById("password-input");

BUTTON.addEventListener("click", function() {
      if (inputRequired) {
//save value inputs in local storage
            localStorage.setItem("mail", mail_user.value) 
            localStorage.setItem("password", pass_user.value);
//redirect to main
            window.location = "main.html"; 
      } else {
            //SHOW ERROR
      }
});

//this file is named index for an exception, this should be called login


function inputRequired() {
    mail_user.value.required === true && pass_user.value.required === true;
 } 