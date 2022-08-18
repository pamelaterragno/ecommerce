// url to obtain array in json
const URL_CAT_AUTOS = "https://japceibal.github.io/emercado-api/cats_products/101.json";
const CONTAINER = document.getElementById("showProducts");

//fetch to show in console
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

//function that runs the array
    function walk(array){
        for (let i of array) {
            //links of categories but with my variable
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


