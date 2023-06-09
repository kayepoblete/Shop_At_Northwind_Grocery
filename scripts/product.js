"use strict";

const base_URL = "http://localhost:8081/api/products/"

window.onload = () => {
    displayInfo();
}

function displayInfo() {
    const url = new URL(window.location.href);
    
    //Get the query string parameters
    let params = new URLSearchParams(url.search);
    
    // Check if there are any query string parameters
    if (params.toString() === "") {
      // Redirect to productsearch.html
      window.location.href = "index.html";
    }

    let newParams = Number(params);
    console.log(newParams);

}