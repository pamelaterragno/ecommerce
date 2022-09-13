const PRODUCTS_INFO = PRODUCT_INFO_URL + localStorage.getItem("prodID") + EXT_TYPE;
const PRODUCTS_COMMENTS = PRODUCT_INFO_COMMENTS_URL + localStorage.getItem("prodID") + EXT_TYPE;



document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_INFO).then(function(resultObj){
        if (resultObj.status === "ok"){
            infoProductsArray = resultObj.data
            showArrayProd()

        }
    });

    getJSONData(PRODUCTS_COMMENTS).then(function(resultObj){
        if (resultObj.status === "ok"){
            infoProductsArray = resultObj.data
            showArrayComments()
        }

    });

});

function showArrayProd(){

    let htmlContentToAppend = "";
    
            htmlContentToAppend += `
            <div onclick="setProdID(${infoProductsArray.id})" class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${infoProductsArray.images[0]}" alt="${infoProductsArray.description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${infoProductsArray.name}</h4>
                            <small class="text-muted">${infoProductsArray.soldCount} artículos</small>
                        </div>
                        <p class="mb-1">${infoProductsArray.description}</p>
                        <p class="mb-1">${infoProductsArray.currency} ${infoProductsArray.cost}</p>
                    </div>
                </div>
            </div>
            `
            document.getElementById("showProduct").innerHTML = htmlContentToAppend;

        }