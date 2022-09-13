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


                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                      <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    </ol>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img class="d-block w-100" src="${infoProductsArray.images[0]}" alt="First image">
                      </div>
                      <div class="carousel-item">
                        <img class="d-block w-100" src="${infoProductsArray.images[1]}" alt="Second slide">
                      </div>
                      <div class="carousel-item">
                        <img class="d-block w-100" src="${infoProductsArray.images[2]}" alt="Third slide">
                      </div>
                      <div class="carousel-item">
                        <img class="d-block w-100" src="${infoProductsArray.images[3]}" alt="Third slide">
                      </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="sr-only">Next</span>
                    </a>
                  </div>
                </div>
                </div>
            `
            document.getElementById("showProduct").innerHTML = htmlContentToAppend;

        }