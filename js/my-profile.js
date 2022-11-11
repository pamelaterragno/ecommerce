const EMAIL_INPUT = document.getElementById("email");
const NAME = document.getElementById("name");
const SURNAME = document.getElementById("surname");
const BTN_SAVE = document.getElementById("btn-save");




document.addEventListener("DOMContentLoaded", function (e) {
    showMail()
    });  



function showMail(){
    EMAIL_INPUT.value = localStorage.getItem("mail")
}



(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms) 
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          //Ejecuta la funcion de las password
          validarPassword2()  
          //Feedback del checkbox

          if (!form.checkValidity()) { //
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated') //muestra todas las validaciones
        }, false)
      })
  })()



