import faker from "faker";

let products = "";

for (let i = 0; i < 5; i++) {
  const name = faker.commerce.productName();
  products += `<div>${name}</div>`;
}

products = `<h1>Products</h1>${products}`;

// console.log("products", products);
document.querySelector("#dev-products").innerHTML = products;
