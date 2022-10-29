const INFO_USER = CART_INFO_URL + "25801" + EXT_TYPE;


document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(INFO_USER).then(function (resultObj) {
        if (resultObj.status === "ok") {
            infoUserExapmle = resultObj.data
            showCart();
            totalPrice();
            totalPriceWShipping();
           
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





function totalPrice() {
    const cantidadUni = document.getElementById("cantidad");
    const costo = document.getElementById("cost").innerHTML;
    const carritosubtotal = document.getElementById("showSubtotal");

    console.log(costo)
    console.log(cantidadUni)
   
    totalPriceWShipping()

    return carritosubtotal.innerHTML = cantidadUni.value * costo;
};





function totalPriceWShipping() {
    
    const premium = document.getElementById("premium"); //RADIO OPTION w/ON CLICK
    const express = document.getElementById("express"); //RADIO OPTION w/ON CLICK
    const standard = document.getElementById("standard"); //RADIO OPTION w/ON CLICK

    const showTotal = document.getElementById("SHOWTOTAL"); //CONTAINER TO SHOW TOTAL PRICE W SHIPPING
    const showPriceXQuantity = document.getElementById("SHOWSUBTOTAL"); // CONTAINER TO SHOW VALUE ARTICLE
    const showPriceShipping = document.getElementById("SHOWCOSTOENVIO"); // CONTAINER TO SHOW PRICE SHIPPING

    const subtotalQxU = document.getElementById("showSubtotal").innerText; // VALUE THAT IS MODIFY WITH QUANTITY X UNI w/totalPrice() 



    showPriceXQuantity.innerHTML = subtotalQxU; //show in subtotal table uni x quantity in cart

    
    if (premium.checked) {
        showPriceShipping.innerHTML = Math.round(subtotalQxU*0.15)  
      } else if (express.checked) {
        showPriceShipping.innerHTML =  Math.round(subtotalQxU*0.7)
      } else if (standard.checked) {
        showPriceShipping.innerHTML =  Math.round(subtotalQxU*0.05)
      }

     return showTotal.innerHTML = parseFloat(subtotalQxU) + parseFloat(showPriceShipping.innerText);

    };


    function disableModalOptions() {


        const InputTarjeta = document.getElementById("Tdecredito"); // INPUT CHECKBOX
        const InputTransferencia = document.getElementById("Transferencia"); // INPUT CHECKBOX

        const nroTarjeta = document.getElementById("nroTarjeta"); //input de tarjeta para disabled
        const codTarjeta = document.getElementById("codTarjeta"); //input de tarjeta para disabled
        const venTarjeta = document.getElementById("venTarjeta"); //input de tarjeta para disabled

        const nroDeCuenta = document.getElementById("nroDeCuenta"); //input de transferencia


    if (InputTarjeta.checked) {
        nroTarjeta.disabled = false
        codTarjeta.disabled = false
        venTarjeta.disabled = false
        nroDeCuenta.disabled = true
    } else if (InputTransferencia.checked) {
        nroTarjeta.disabled = true
        codTarjeta.disabled = true
        venTarjeta.disabled = true
        nroDeCuenta.disabled = false
    }

    }

document.getElementById("MODALFDEPAGO").addEventListener("click", function(e){
    disableModalOptions();
});