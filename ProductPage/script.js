const grid = document.querySelector(".grid-container");
fetch('./ProductPage/products.json') //fetching the products' information from the json file
//.then allows the process to speed up
.then(response => {
return response.json();
})
.then(function(data){  //taking data from the json
//make for loop to create 12 divs
//i starts at zero, , < will stop the for loop at 12, "i++" means add 1
for (let i = 0; i<12; i++){
    let productDivs = document.createElement("div");
    grid.appendChild(productDivs) 
    //productDivs[i].classList.add("")
    //taking the productDivs and placing them inside of  the html
productDivs.innerHTML = `
    <img src=${data[i].photo}>
    <h3>${data[i].name}</h3>
    <p>${data[i].desc}</p>
    <p>${data[i].price}</p>`
}
})
.catch(error => console.log(error));
console.log("hello");
const gloss1 = document.querySelector('.product1');