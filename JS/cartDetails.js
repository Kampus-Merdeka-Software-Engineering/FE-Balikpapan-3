//js for details
  // Wait for the DOM to be fully loaded
  document.addEventListener("DOMContentLoaded", function () {
    // Example: Add a click event listener to the "Buy Now" button
    const buyNowButton = document.querySelector(".buy-btn");
    buyNowButton.addEventListener("click", function () {
      // Add your logic to initiate the purchase process here
      alert("Redirecting to checkout...");
    });
  
    // You can add more JavaScript code for other interactions as needed

    const jsonFile = "https://be-balikpapan-3-production.up.railway.app/api/shop";

    fetch(jsonFile).then(response=>{
      return response.json();
    }).then(data =>{
      data.map(product => {
        const {name, image, deskripsi, price} = product;
        console.log(product)
        })
      })
    })
