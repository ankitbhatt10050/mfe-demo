import faker from "faker";
console.log("faker.random.number()", faker.random.number());

const cartText = `<h1>Cart</h1><div>${faker.random.number()} items in your cart </div>`;

document.querySelector("#dev-cart").innerHTML = cartText;
