const INFO_USER = CART_INFO_URL + "25801" + EXT_TYPE;

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


<div class="row border-top border-bottom">
<div class="row main align-items-center">
    <div class="col-2"><img class="img-fluid" src="${a.image}"></div>
    <div class="col">
        <div class="row text-muted">${a.name}</div>
        <div class="row">${a.unitCost} ${a.currency} </div>
    </div>
    <div class="col">
        <a href="#">-</a><a href="#" class="border">1</a><a href="#">+</a>
    </div>
    <div class="col">&euro; 44.00 <span class="close">&#10005;</span></div>
</div>
</div>

`
}
document.getElementById("showCarrito").innerHTML = htmlContentToAppend
   };