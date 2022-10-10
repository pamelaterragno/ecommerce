const INFO_USER = CART_INFO_URL+"25801"+EXT_TYPE;

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(INFO_USER).then(function(resultObj){
        if (resultObj.status === "ok"){
            infoUserExapmle = resultObj.data
          
        }
    })});


    console.log(infoUserExapmle)