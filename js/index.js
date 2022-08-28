
const BUTTON = document.getElementById("buttomSubmit");
const mail_user = document.getElementById("email-input").value;
const pass_user = document.getElementById("password-input").value;

BUTTON.addEventListener("submit", function() {
      //save value inputs in local storage
    localStorage.setItem("mail", mail_user);
    localStorage.setItem("password", pass_user);
});

//this file is named index for an exception, this should be called login