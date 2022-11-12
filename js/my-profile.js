//INPUT
const SCND_NAME = document.getElementById("second-name");
const SCND_SURNAME = document.getElementById("second-surname");
const PHONE_NUMBER = document.getElementById("phone-number");
//INPUT (*)
const NAME = document.getElementById("name");
const SURNAME = document.getElementById("surname");
const EMAIL = document.getElementById("email");
//BTN
const BTN_SAVE = document.getElementById("btn-save");
//DIVS CLASS VALIDATION
const VALID_NAME = document.getElementById("nameShowValidation");
const VALID_SURNAME = document.getElementById("surnameShowValidation");
const VALID_EMAIL = document.getElementById("emailShowValidation");


//event listener DOMContent
document.addEventListener("DOMContentLoaded", function (e) {
    showMail()
    showValueInput()
    });  



//funcion show mail in input 
function showMail(){
    EMAIL.value = localStorage.getItem("mail")
}

//function show values users in input
function showValueInput(){
  NAME.value = localStorage.getItem("name")
  SURNAME.value = localStorage.getItem("surname")
  SCND_NAME.value = localStorage.getItem("scnd-name")
  SCND_SURNAME.value = localStorage.getItem("scnd-surname")
  PHONE_NUMBER.value = localStorage.getItem("phone-number")
}



//function to save in local storage if validation is ok
function saveInLocalStorage(){

  localStorage.setItem("name", NAME.value);
  localStorage.setItem("surname", SURNAME.value);

  localStorage.setItem("scnd-name", SCND_NAME.value);
  localStorage.setItem("scnd-surname", SCND_SURNAME.value);
  localStorage.setItem("phone-number", PHONE_NUMBER.value);

}

//validation of (*) inputs
function profileValidation(){
 
  let checkTotal = false;
 
  NAME.value != '' ? (VALID_NAME.className = 'valid-feedback') && (VALID_NAME.textContent = "Está correcto") && (NAME.className = 'form-control is-valid') : (VALID_NAME.className = 'invalid-feedback') && (VALID_NAME.textContent = "Ingresa su nombre") && (NAME.className = 'form-control is-invalid') && (checkTotal = true);
  SURNAME.value != '' ? (VALID_SURNAME.className = 'valid-feedback') && (VALID_SURNAME.textContent = "Está correcto") && (SURNAME.className = 'form-control is-valid') : (VALID_SURNAME.className = 'invalid-feedback') && (VALID_SURNAME.textContent = "Ingrese su apellido") && (SURNAME.className = 'form-control is-invalid') && (checkTotal = true);
  
  checkTotal ? alert("Debe completar los campos obligatorios") : alert("Los datos se han guardado correctamente");

}



//event listener to validate inputs (*)
BTN_SAVE.addEventListener("click", function(e){
  profileValidation();
  saveInLocalStorage();
})


