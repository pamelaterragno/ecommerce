const PRODUCTS_INFO = PRODUCT_INFO_URL + localStorage.getItem("prodID") + EXT_TYPE;
const PRODUCTS_COMMENTS = PRODUCT_INFO_COMMENTS_URL + localStorage.getItem("prodID") + EXT_TYPE;


//fetch para traer info y comentarios de producto

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_INFO).then(function(resultObj){
        if (resultObj.status === "ok"){
            infoProductsArray = resultObj.data
            showArrayProd()

        }
    });

    getJSONData(PRODUCTS_COMMENTS).then(function(resultObj){
        if (resultObj.status === "ok"){
            commentProductsArray = resultObj.data
            showArrayComments()
        }

    });

});





function showArrayProd(){

    let htmlContentToAppend = "";
    
            htmlContentToAppend += `
            
                <div class="col">
                   
                    <div class="col">
                        <div class="descriptionProduct">
                       
                            <h1>${infoProductsArray.name}</h1>
                        
                        
                        <h4>Descripción</h4>
                        <p class="mb-1">${infoProductsArray.description}</p>
                        <h4>Precio:</h4>
                        <p class="mb-1">${infoProductsArray.currency} ${infoProductsArray.cost}</p>
                        </div>
                    </div>
                    <div class="wide">
                  <div id="carouselExampleControls" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="${infoProductsArray.images[0]}" class="d-block w-100" alt="first image">
    </div>
    <div class="carousel-item">
      <img src="${infoProductsArray.images[1]}" class="d-block w-100" alt="scn image">
    </div>
    <div class="carousel-item">
      <img src="${infoProductsArray.images[2]}" class="d-block w-100" alt="third image">
    </div>
    <div class="carousel-item">
      <img src="${infoProductsArray.images[3]}" class="d-block w-100" alt="fourth image">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>

                </div>
                </div>
            `
            document.getElementById("showProduct").innerHTML = htmlContentToAppend;

        }
//utilicé boostrap5 para generar el carrousel






        function showArrayComments() {
          let htmlContentToAppend = "";
          for(let i = 0; i < commentProductsArray.length; i++){
              let a = commentProductsArray[i];
    
                  htmlContentToAppend +=  `
                  
                  <div class="row">
                    <div class="wide">
                    
                        <div class="col">
                            <div class="d-flex w-100 justify-content-between">
                                <h4 class="mb-1">${a.description}</h4>
                                <small class="text-muted">${a.dateTime}</small>
                            </div>
                            <p class="mb-1">${a.user}</p>
                            ` 
                              let n=0;   
                              let result = "";                
                                do {
                                  htmlContentToAppend+=`<span class="fa fa-star checked"></span>`
                                  n=n+1;
                                    } while (n<a.score);

                                    htmlContentToAppend+=
                                  
                              result=5-a.score
                                for(let n = 0; i < result; i++){
                                  htmlContentToAppend+=`<span class="fa fa-star"></span>`
}
htmlContentToAppend+=


                            `
                          </div>
                        </div>
                    </div>
                
     
                
                `
          }
      
              document.getElementById("showComent").innerHTML = htmlContentToAppend;
          }





   


          // for (let i=0; i<5; i++){
          //   if (i<a.score){
          //     htmlContentToAppend+=`<span class="fa fa-star checked"></span>`
          //   } else {
          
          // htmlContentToAppend+=`<span class="fa fa-star"></span>`
               
          //     }
          //   };
          //   htmlContentToAppend+=
          