
const BUTTON = document.getElementById("buttomSubmit");
let mail_user = document.getElementById("email-input");
let pass_user = document.getElementById("password-input");
      


BUTTON.addEventListener("click", function (){

      const regularPhrase = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      let comeIn = false
      let errorEmail ="";
      let errorPass ="";

      if(!regularPhrase.test(mail_user.value)){
          comeIn = true
          errorEmail="El email ingresado no es correcto"
      };
  
      if(pass_user.value.length <= 5){
          comeIn = true
          errorPass="La contraseña ingresada no es correcta"
      };

      if(comeIn){
            document.getElementById("errorEmail").innerHTML=errorEmail;
            document.getElementById("errorPass").innerHTML=errorPass;
      } else {
      //save value inputs in local storage
          localStorage.setItem("mail", mail_user.value);
      //redirect to main
          window.location = "index.html"; 
      }

  });