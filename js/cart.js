const INFO_USER = CART_INFO_URL+"25801"+EXT_TYPE;

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(INFO_USER).then(function(resultObj){
        if (resultObj.status === "ok"){
            infoUserExapmle = resultObj.data
          showCart()
        }
    })});


   function showCart(){
let htmlContentToAppend ="";

for(let i = 0; i < infoUserExapmle.articles.length; i++){
    let a = infoUserExapmle.articles[i];

htmlContentToAppend+= `

<div class="card" style="width: 20%;">
  <img src="${a.image}" class="card-img-top" alt="${a.name}">
  <div class="card-body">
    <h5 class="name">${a.name}</h5>
    
    <a href="product-info.html" onclick="setProdID(${a.id})" class="btn btn-primary">Ver más</a>
  </div>
</div>


`
}
document.getElementById("showCarrito").innerHTML = htmlContentToAppend
   };