let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector(".list");
let listCard = document.querySelector(".listCard");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");

openShopping.addEventListener("click", () => {
  body.classList.add("active");
});
closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});
let products = [
  {
    id: 1,
    name: "Sambal Nagih - Cakalang",
    image: "1.PNG",
    price: 37000,
  },
  {
    id: 2,
    name: "Cuanki Kriboow",
    image: "2.PNG",
    price: 14500,
  },
  {
    id: 3,
    name: "Cireng Gochujang",
    image: "3.PNG",
    price: 17400,
  },
  {
    id: 4,
    name: "Baso Goreng Marenta",
    image: "4.PNG",
    price: 16500,
  },
  {
    id: 5,
    name: "Baso Aci Tulangrangu",
    image: "5.PNG",
    price: 15900,
  },
  {
    id: 6,
    name: "Rabbokki by Kylafood",
    image: "6.PNG",
    price: 21600,
  },
  {
    id: 7,
    name: "Abon Ikan Makku",
    image: "7.PNG",
    price: 32000,
  },
  {
    id: 8,
    name: "Zanana Chips",
    image: "8.PNG",
    price: 15400,
  },
  {
    id: 9,
    name: "Batagor Chips",
    image: "9.PNG",
    price: 17500,
  },
  {
    id: 10,
    name: "Kaula Keripik Cireng",
    image: "10.PNG",
    price: 14300,
  },
  {
    id: 11,
    name: "Ciomy Cuanki",
    image: "11.PNG",
    price: 14999,
  },
  {
    id: 12,
    name: "Seblak Coet Marenta",
    image: "12.PNG",
    price: 12500,
  },
  {
    id: 13,
    name: "Seonju/Minuman Soju",
    image: "13.PNG",
    price: 31900,
  },
  {
    id: 14,
    name: "Makro Nich Marenta",
    image: "14.PNG",
    price: 19000,
  },
  {
    id: 15,
    name: "Astro Goods - Crispy Brownies",
    image: "15.PNG",
    price: 14800,
  },
  {
    id: 16,
    name: "Fanta Soda Drink",
    image: "16.PNG",
    price: 45000,
  },
  {
    id: 17,
    name: "Mujigae Jajangmyeon",
    image: "17.PNG",
    price: 20400,
  },
  {
    id: 18,
    name: "Mujigae Banana Milk",
    image: "18.PNG",
    price: 10200,
  },
];
let listCards = [];
function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
      <img src="img/${value.img}"/>
      <div class="title">${value.name}</div>
      <div class="price">${value.price.toLocaleString()}</div>
      <button onclick="addToCard(${key})">Add To Card</button>
    `;
    list.appendChild(newDiv);
  });
}
initApp();
function addToCard(key) {
  if (listCards[key] == null) {
    listCards[key] = products[key];
    listCards[key].quantity = 1;
  }
  reloadCard();
}
function reloadCard() {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    totalPrice = totalPrice + value.price;
    count = count + value.quantity;

    if (value != null) {
      let newDiv = document.createElement("li");
      newDiv.innerHTML = `
        <div><img src="image/${value.image}"/></div>
        <div>${value.name}</div>
        <div>${value.price.toLocaleString()}</div>
        <div>
          <button onclick="changeQuantity(${key}, ${
        value.quantity - 1
      })">-</button>
          <div class="count">${value.quantity}</div>
          <button onclick="changeQuantity(${key}, ${
        value.quantity + 1
      })">+</button>
        </div>
      `;
      listCard.appendChild(newDiv);
    }
  });
  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;
}
function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
    listCards[key].price = quantity * products[key].price;
  }
  reloadCard();
}
