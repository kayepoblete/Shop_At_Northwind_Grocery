"use strict";

const base_URL = "http://localhost:8081/api/products/"

window.onload = () => {
    displayInfo();
}

function displayInfo() {
    const url = new URL(window.location.href);
    const productInfo = document.getElementById("productInfo");
    
    //Get the query string parameters
    let params = new URLSearchParams(url.search);
    
    // Check if there are any query string parameters
    if (params.toString() === "") {
      // Redirect to productsearch.html
      window.location.href = "index.html";
    }

    let newParams = params.toString().slice(0, -1);

    fetch(base_URL + newParams)
    .then(response => response.json())
    .then(product => {
      productInfo.innerHTML = 
      `
      <div class="col-md-4">
          <div class="card">
              <div class="card-block">
                  <h4 class="card-title">${product.productName}</h4>
                  <h6 class="card-subtitle text-muted">Items in stock: ${product.unitsInStock}</h6>
                  <p class="card-text p-y-1">${product.unitPrice}</p>
              </div>
          </div>
      </div>  
      `
    })
}