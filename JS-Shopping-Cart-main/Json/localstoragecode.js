let product_summary;
const txtDet = document.getElementById("product-summary");
window.addEventListener("load", getData);
let txtParas;
let selected;



function getData() {
    fetch("local.json")
        .then(res => res.json() )
        .then(data => processData(data) )
        .catch(error => console.log(`Error - ${error}`)
    );
}

function processData(responseText) {
   
    product_summary = responseText;
    txtDet.innerText = "All data: " + JSON.stringify(product-summary);
    txtDet.innerText += "\n\nObject: " + JSON.stringify(product-summary[0]);
    txtDet.innerText += "\n\nField: " + (product-summary[0].productName);
 }

 
 function processData(responseText) {
    localStorage.clear();
    product_summary = responseText;
    let dirList = "";
    for (entry in product-summary) {
       dirList += `<p class='entry'>${product-summary[entry].productName} ,  
           ${product-summary[entry].priceValue} </p>`;
    }
    txtDet.innerHTML = dirList;
    txtParas = Array.from(document.getElementsByClassName("entry"));
     

}



 
const btnwishlist = document.getElementById("btn btn-small");
 

btnwishlist.addEventListener("click", wishlist);
 

 


function wishlist() {
    localStorage.setItem("wishlist", selected);
}

 