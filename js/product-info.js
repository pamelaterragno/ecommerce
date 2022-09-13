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
                <div class="col">
                   
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${infoProductsArray.name}</h4>
                        
                        </div>
                        <p class="mb-1">${infoProductsArray.description}</p>
                        <p class="mb-1">${infoProductsArray.currency} ${infoProductsArray.cost}</p>
                    </div>
                    <div class="row">
                    <img src="${infoProductsArray.images[0]}" class="img-thumbnail">
                    <img src="${infoProductsArray.images[1]}" class="img-thumbnail">
                    <img src="${infoProductsArray.images[2]}" class="img-thumbnail">
                    <img src="${infoProductsArray.images[3]}" class="img-thumbnail">
                </div>
                </div>
            `
            document.getElementById("showProduct").innerHTML = htmlContentToAppend;

        }