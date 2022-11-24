const LOCAL_HOST = "http://localhost:3000/"

const CATEGORIES_URL = LOCAL_HOST + "ecommerce/emercado-api-main/cats";
const PUBLISH_PRODUCT_URL = LOCAL_HOST + "ecommerce/emercado-api-main/sell";
const PRODUCTS_URL = LOCAL_HOST + "ecommerce/emercado-api-main/cats_products/";
const PRODUCT_INFO_URL = LOCAL_HOST + "ecommerce/emercado-api-main/products/";
const PRODUCT_INFO_COMMENTS_URL = LOCAL_HOST + "ecommerce/emercado-api-main/products_comments/";
const CART_INFO_URL = LOCAL_HOST + "ecommerce/emercado-api-main/user_cart";
const CART_BUY_URL = LOCAL_HOST + "ecommerce/emercado-api-main/cart";
const EXT_TYPE = ".json";

const LOG_OUT = document.getElementById("logOut");

let showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

let hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

let getJSONData = function(url){
    let result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}


document.getElementById("usermail").innerHTML+=localStorage.getItem("mail");

LOG_OUT.addEventListener("click", function() {
  window.location = "login.html"
  localStorage.removeItem("mail");
});