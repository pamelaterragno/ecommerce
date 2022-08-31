
const BUTTON = document.getElementById("buttomSubmit");
var mail_user = document.getElementById("email-input").value;
var pass_user = document.getElementById("password-input").value;

BUTTON.addEventListener("click", function() {
      if (inputRequired) {
//save value inputs in local storage
            localStorage.setItem("mail", mail_user) 
            localStorage.setItem("password", pass_user);
//redirect to main
            window.location = "main.html"; 
      } else {
            //SHOW ERROR
      }
});

localStorage.getItem("mail")

//this file is named index for an exception, this should be called login


function inputRequired() {
    mail_user.value.required === true && pass_user.value.required === true;
 } 