
const BUTTON = document.getElementById("buttomSubmit");
var mail_user = document.getElementById("email-input").value;
var pass_user = document.getElementById("password-input").value;

BUTTON.addEventListener("click", (e) => { 
   //save value inputs in local storage
   e.preventDefault()
      //redirect to main
            localStorage.setItem("mail", mail_user) 
            localStorage.setItem("password", pass_user);
            requiredInput()
});

//this file is named index for an exception, this should be called login



function requiredInput() {
      if (mail_user && pass_user) {
            window.location = "main.html";
      }
}