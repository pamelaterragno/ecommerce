// url to obtain array in json
const JSON_PRODUCTS = PRODUCTS_URL + localStorage.getItem("catID")+ EXT_TYPE;
const CONTAINER = document.getElementById("showProducts");

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


// function setCatID(id){
//     localStorage.setItem("catID", id);
//     window.location = "products.html"
// }


const ORDER_ASC_BY_NAME = "AZ";
const ORDER_DESC_BY_NAME = "ZA";
const ORDER_BY_PROD_COUNT = "Cant.";
let currentCategoriesArray = [];
let currentSortCriteria = undefined;
let minCount = undefined;
let maxCount = undefined;

function sortCategories(criteria, array){
    let result = [];
    if (criteria === ORDER_ASC_BY_NAME)
    {
        result = array.sort(function(a, b) {
            if ( a.cost < b.cost ){ return -1; }
            if ( a.cost > b.cost ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_DESC_BY_NAME){
        result = array.sort(function(a, b) {
            if ( a.cost > b.cost ){ return -1; }
            if ( a.cost < b.cost ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_BY_PROD_COUNT){
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

function setCatID(id) {
    localStorage.setItem("catID", id);
    window.location = "products.html"
}

function showCategoriesList(){

    let htmlContentToAppend = "";
    for(let i = 0; i < currentCategoriesArray.length; i++){
        let i = currentCategoriesArray[i];

        if (((minCount == undefined) || (minCount != undefined && parseInt(i.productCount) >= minCount)) &&
            ((maxCount == undefined) || (maxCount != undefined && parseInt(i.productCount) <= maxCount))){

            htmlContentToAppend += `
            <div onclick="setCatID(${i.id})" class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${i.image}" alt="${i.description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${i.name}</h4>
                            <small class="text-muted">${i.soldCount} artículos</small>
                        </div>
                        <p class="mb-1">${i.description}</p>
                        <p class="mb-1">${i.currency} ${i.cost}</p>
                    </div>
                </div>
            </div>
            `
        }

        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
    }
}

function sortAndShowCategories(sortCriteria, categoriesArray){
    currentSortCriteria = sortCriteria;

    if(categoriesArray != undefined){
        currentCategoriesArray = categoriesArray;
    }

    currentCategoriesArray = sortCategories(currentSortCriteria, currentCategoriesArray);

    //Muestro las categorías ordenadas
    showCategoriesList();
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(JSON_PRODUCTS).then(function(resultObj){
        if (resultObj.status === "ok"){
            currentCategoriesArray = resultObj.data.products
            showCategoriesList()
            //sortAndShowCategories(ORDER_ASC_BY_NAME, resultObj.data);
        }
    });

    document.getElementById("sortAsc").addEventListener("click", function(){
        sortAndShowCategories(ORDER_ASC_BY_NAME);
    });

    document.getElementById("sortDesc").addEventListener("click", function(){
        sortAndShowCategories(ORDER_DESC_BY_NAME);
    });

    document.getElementById("sortByCount").addEventListener("click", function(){
        sortAndShowCategories(ORDER_BY_PROD_COUNT);
    });

    document.getElementById("clearRangeFilter").addEventListener("click", function(){
        document.getElementById("rangeFilterCountMin").value = "";
        document.getElementById("rangeFilterCountMax").value = "";

        minCount = undefined;
        maxCount = undefined;

        showCategoriesList();
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

        showCategoriesList();
    });
});