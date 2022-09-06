const PRODUCTS_COMMENTS = PRODUCT_INFO_COMMENTS_URL + localStorage.getItem("prodID")+ EXT_TYPE;

console.log(fetch(PRODUCTS_COMMENTS));