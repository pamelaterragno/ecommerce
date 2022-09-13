
const JSON_PRODUCTS = PRODUCTS_URL + localStorage.getItem("catID")+ EXT_TYPE;
const SEARCHER_INPUT = document.getElementById("site-search");
const ORDER_ASC_BY_COST = "AZ";
const ORDER_DESC_BY_COST = "ZA";
const ORDER_BY_SOLD = "Cant.";
let currentProductsArray = [];
let currentSortCriteria = undefined;
let minCount = undefined;
let maxCount = undefined;


function sortProducts(criteria, array){
    let result = [];
    if (criteria === ORDER_ASC_BY_COST)
    {
        result = array.sort(function(a, b) {
            if ( a.cost < b.cost ){ return -1; }
            if ( a.cost > b.cost ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_DESC_BY_COST){
        result = array.sort(function(a, b) {
            if ( a.cost > b.cost ){ return -1; }
            if ( a.cost < b.cost ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_BY_SOLD){
        result = array.sort(function(a, b) {
            let aCount = parseInt(a.soldCount);
            let bCount = parseInt(b.soldCount);

            if ( aCount > bCount ){ return -1; }
            if ( aCount < bCount ){ return 1; }
            return 0;
        });
    }

    return result;
}

 function setProdID(id) {
    localStorage.setItem("prodID", id);
    window.location = "products-info.html";
}


function showProductsList(){

    let htmlContentToAppend = "";
    for(let i = 0; i < currentProductsArray.length; i++){
        let articulo = currentProductsArray[i];

        if (((minCount == undefined) || (minCount != undefined && parseInt(articulo.cost) >= minCount)) &&
            ((maxCount == undefined) || (maxCount != undefined && parseInt(articulo.cost) <= maxCount)))
            {
            htmlContentToAppend += `
            <div onclick="setProdID(${articulo.id})" class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${articulo.image}" alt="${articulo.description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${articulo.name}</h4>
                            <small class="text-muted">${articulo.soldCount} artículos</small>
                        </div>
                        <p class="mb-1">${articulo.description}</p>
                        <p class="mb-1">${articulo.currency} ${articulo.cost}</p>
                    </div>
                </div>
            </div>
            `
        }

        document.getElementById("prod-list-container").innerHTML = htmlContentToAppend;
    }
}



function sortAndShowCategories(sortCriteria, categoriesArray){
    currentSortCriteria = sortCriteria;

    if(categoriesArray != undefined){
        currentProductsArray = categoriesArray;
    }

    currentProductsArray = sortProducts(currentSortCriteria, currentProductsArray);

    //Muestro las categorías ordenadas
    showProductsList();
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(JSON_PRODUCTS).then(function(resultObj){
        if (resultObj.status === "ok"){
            currentProductsArray = resultObj.data.products
            showProductsList()
            //sortAndShowCategories(ORDER_ASC_BY_COST, resultObj.data);
        }
    });

    document.getElementById("sortAsc").addEventListener("click", function(){
        sortAndShowCategories(ORDER_ASC_BY_COST);
    });

    document.getElementById("sortDesc").addEventListener("click", function(){
        sortAndShowCategories(ORDER_DESC_BY_COST);
    });

    document.getElementById("sortByCount").addEventListener("click", function(){
        sortAndShowCategories(ORDER_BY_SOLD);
    });

    document.getElementById("clearRangeFilter").addEventListener("click", function(){
        document.getElementById("rangeFilterCountMin").value = "";
        document.getElementById("rangeFilterCountMax").value = "";

        minCount = undefined;
        maxCount = undefined;

        showProductsList();
    });

    document.getElementById("rangeFilterCount").addEventListener("click", function(){
        //Obtengo el mínimo y máximo de los intervalos para filtrar por cantidad
        //de productos por categoría.
        minCount = document.getElementById("rangeFilterCountMin").value;
        maxCount = document.getElementById("rangeFilterCountMax").value;

        if ((minCount != undefined) && (minCount != "") && (parseInt(minCount)) >= 0){
            minCount = parseInt(minCount);
        }
        else{
            minCount = undefined;
        }

        if ((maxCount != undefined) && (maxCount != "") && (parseInt(maxCount)) >= 0){
            maxCount = parseInt(maxCount);
        }
        else{
            maxCount = undefined;
        }

        showProductsList();
    });
});




// function setProdID(articulo.id){
//     localStorage.setItem("prodID", articulo.id);
//     window.location="product-info.html"
// }



    /* PUREBA DESAFIATE
         document.getElementById("site-search").addEventListener("keyup", function(){
           var searcher= document.getElementById("site-search").value;
            
            return currentProductsArray.filter(function(elem){
                return elem.toLowerCase().indexOf(searcher.toLowerCase())>-1;
            });
            
        })});
PRUEBA DESAFIATE*/



//OLD CODE
// //fetch
// fetch (JSON_PRODUCTS)
//     .then(function(resp) {
//         return resp.json();
//     })
//     .then (function(json){
//     //show in console
//         console.log(json);
//     //function that itirate the array of products
//         walk(json.products);
//     })
// //TO DO: SHOW AND HIDE SPINNER IN FETCH FUNCTION



// //function that iritate the array and add the elements to CONTAINER
//     function walk(array){
//         for (let i of array) {
//             //links of categories.js but with my variable i
//          CONTAINER.innerHTML+=`
//              <div onclick="setCatID(${i.id})" class="list-group-item list-group-item-action cursor-active">
//                     <div class="row">
//                      <div class="col-3">
//                     <img src="${i.image}" alt="${i.description}" class="img-thumbnail">
//                     </div>
//                         <div class="col">
//                     <div class="d-flex w-100 justify-content-between">
//                         <h4 class="mb-1">${i.name}</h4>
//                         <small class="text-muted">${i.soldCount} artículos</small>
//                     </div>
//                     <p class="mb-1">${i.description}</p>
//                     <h1 class="price">${i.cost}${i.currency}</h1>
//                 </div>
//             </div>
//         </div>
//         `
//     }
// };