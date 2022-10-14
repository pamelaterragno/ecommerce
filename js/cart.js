const INFO_USER = CART_INFO_URL + "25801" + EXT_TYPE;

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(INFO_USER).then(function (resultObj) {
        if (resultObj.status === "ok") {
            infoUserExapmle = resultObj.data
            showCart()
        }
    })
});


function showCart() {
    let htmlContentToAppend = "";

    for (let i = 0; i < infoUserExapmle.articles.length; i++) {
        let a = infoUserExapmle.articles[i];

        htmlContentToAppend += `

<div class="container">

            <div class="d-flex flex-row justify-content-between align-items-center pt-lg-4 pt-2 pb-3 border-bottom mobile" id="heading">
            <div></div>
                <div class="px-lg-5 mr-lg-5" id="product">Producto</div>
                <div class="px-lg-5 ml-lg-5" id="price">Precio</div>
                <div class="px-lg-5 ml-lg-1" id="quantity">Cantidad</div>
                <div class="px-lg-5 ml-lg-3" id="subtotal">Subtotal</div>
            </div>
            <div class="d-flex flex-row justify-content-between align-items-center pt-lg-4 pt-2 pb-3 border-bottom mobile">
                <div class="d-flex flex-row align-items-center">
                    <div><img src="${a.image}" width="150"  alt="" id="image" class="me-5"></div>
                    <div class="d-flex flex-column pl-md-3 pl-1">
                    
                        <div><h3>${a.name}</h3></div>
                       
                        
                    </div>                    
                </div>
                <div class="pl-md-0 pl-1"><b>${a.currency} ${a.unitCost}</b></div>
                <div class="pl-md-0 pl-2">
                    <span class="fa fa text-secondary"></span><input size="1" id="cantidad" class="px-md-1 px-1"  value="${a.count}"></span><span class="fa fa text-secondary"></span>
                </div>
                <div class="pl-md-0 pl-1"><b>${a.currency} ${a.unitCost}</b></div>
                <div class="close">&times;</div>
            </div>
           

        </div>
    </div>
</div>
</div>
`
        console.log(a.unitCost, a.count)
        console.log(a.unitCost * a.count)



    }

    document.getElementById("showCarrito").innerHTML = htmlContentToAppend
};


