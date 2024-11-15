fetch('products.json') //fetching the products' information from the json file
//.then allows the process to speed up
.then(response => {
   const products = json;
   return products;



    console.log(response.json());
})
.catch(error => console.log(error));

const gloss1 = document.querySelector('.product1')