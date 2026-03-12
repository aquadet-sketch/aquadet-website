const grid = document.getElementById("product-grid");

if(grid){

products.forEach(product => {

const card = document.createElement("div");

card.className = "card";

card.innerHTML = `
<h3>${product.name}</h3>
<p>${product.description}</p>
<a class="btn-small" href="product.html?id=${product.id}">View Details</a>
`;

grid.appendChild(card);

});

}


const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if(id){

const product = products.find(p => p.id === id);

if(product){

document.getElementById("title").innerText = product.name;
document.getElementById("description").innerText = product.description;

const list = document.getElementById("benefits");

product.benefits.forEach(b => {

const li = document.createElement("li");
li.innerText = b;
list.appendChild(li);

});

document.getElementById("application").innerText = product.application;

}

}
