const INFO_USER = CART_INFO_URL + "25801" + EXT_TYPE;


document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(INFO_USER).then(function (resultObj) {
        if (resultObj.status === "ok") {
            infoUserExapmle = resultObj.data
            showCart();
            totalPrice();
        }
    })
});

// show cart esta pensado para array de prodcutos, en este caso solamente tenemos un ejemplo en particular

function showCart() {
    let htmlContentToAppend = "";

    for (let i = 0; i < infoUserExapmle.articles.length; i++) {
        let a = infoUserExapmle.articles[i];

        // console.log(a.unitCost, a.count)
        // console.log(a.unitCost * a.count)



        htmlContentToAppend += 
        `
        <div class="d-flex flex-row justify-content-between align-items-center pt-lg-4 pt-2 pb-3 border-bottom mobile">
        <div class="d-flex flex-row align-items-center">

<div><img src="${a.image}" width="150"  alt="" id="image" class="me-5"></div>
<div class="d-flex flex-column pl-md-3 pl-1">

    <div><h3>${a.name}</h3></div>
   
    
</div>                    
</div>
<div class="pl-md-0 pl-1 d-flex justify-content-evenly" >${a.currency} <div id="cost" >${a.unitCost}</div></div>
<div class="pl-md-0 pl-2">
<input size="1" id="cantidad" class="px-md-1 px-1 form-control" oninput="totalPrice()" value="${a.count}"  type="number" name="costinput"  min="0" >
</div>

<div class="pl-md-0 pl-1 d-flex justify-content-evenly">${a.currency}<div id="showSubtotal"></div></div>
<div class="close">&times;</div>


`
    }
    

    document.getElementById("showCarrito").innerHTML = htmlContentToAppend
};


// function calcSubtotal() {
//     let cantidadArt = parseInt(document.getElementById("cantidad").value);
//     let costo = parseInt(document.getElementById("cost").innerHTML);

//         return cantidadArt * costo;

// }



function totalPrice() {
    const cantidadUni = document.getElementById("cantidad").value;
    const costo = document.getElementById("cost").innerHTML;
    const carritosubtotal = document.getElementById("showSubtotal");

    console.log(costo)
    console.log(cantidadUni)

    return carritosubtotal.innerHTML = cantidadUni * costo;

};



