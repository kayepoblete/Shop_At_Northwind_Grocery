"use strict";

const baseURL = "http://localhost:8081/api/"; 
const newDropdown = document.getElementById("select2");
const searchBtn = document.getElementById("searchBtn");
const select1 = document.getElementById("select1");

window.onload = () => {

    select1.onchange = () => {
       if (select1.value == "category"){
        dropDown("categories");
        newDropdown.style.display = "block";
       } else if (select1.value == "viewAll") {
        newDropdown.style.display = "none";
       }
    }

}

const dropDown = (endpoint) => {
    newDropdown.length = 1;

    fetch(baseURL + endpoint)
        .then(response => response.json())
        .then(category => {
            for (let i = 0; i < category.length; i++){
                let theOption = new Option(category[i].name, category[i].categoryId);
                newDropdown.appendChild(theOption);
            }
        })
}


searchBtn.onclick = () => {
    const div = document.getElementById("displayProducts");
    div.innerHTML = "";
    fetch(baseURL + "products")
        .then(response => response.json())
        .then(product => {
            for(let i = 0; i < product.length; i++){
                let item = product[i];
                if(select1.value == "category" && newDropdown.value == item.categoryId){
                    div.innerHTML += `
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-block">
                                <h4 class="card-title">${item.productName}</h4>
                                <h6 class="card-subtitle text-muted">Items in stock: ${item.unitsInStock}</h6>
                                <p class="card-text p-y-1">${item.unitPrice}</p>
                                <a href="products.html/" class="card-link">More Details</a>
                            </div>
                        </div>
                    </div>  
                    `
                } else if (select1.value == "viewAll"){
                    div.innerHTML += `
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-block">
                                <h4 class="card-title">${item.productName}</h4>
                                <h6 class="card-subtitle text-muted">Items in stock: ${item.unitsInStock}</h6>
                                <p class="card-text p-y-1">${item.unitPrice}</p>
                                <a href="products.html/" class="card-link">More Details</a>
                            </div>
                        </div>
                    </div>  
                    `
                }
            }
        })

}