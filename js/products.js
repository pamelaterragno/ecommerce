// url to obtain array in json
const URL_CAT_AUTOS = "https://japceibal.github.io/emercado-api/cats_products/101.json";
const CONTAINER = document.getElementById("showProducts");

//fetch
fetch (URL_CAT_AUTOS)
    .then(function(resp) {
        return resp.json();
    })
    .then (function(json){
    //show in console
        console.log(json);
    //function that itirate the array of products
        walk(json.products);
    })
//TO DO: SHOW AND HIDE SPINNER IN FETCH FUNCTION



//function that iritate the array and add the elements to CONTAINER
    function walk(array){
        for (let i of array) {
            //links of categories.js but with my variable i
         CONTAINER.innerHTML+=`
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
                </div>
            </div>
        </div>
        `
    }
};


