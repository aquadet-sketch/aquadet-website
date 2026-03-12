const list = document.getElementById("product-list")

if(list){

products.forEach(p=>{

const card = document.createElement("div")

card.className="card"

card.innerHTML = `
<h3>${p.name}</h3>
<p>${p.desc}</p>
<a href="product.html?id=${p.id}">View Details</a>
`

list.appendChild(card)

})
}

const params = new URLSearchParams(window.location.search)
const id = params.get("id")

if(id){

const product = products.find(p=>p.id===id)

if(product){

document.getElementById("product-title").innerText = product.name
document.getElementById("product-desc").innerText = product.desc

}

}
