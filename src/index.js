window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');

import "bootstrap/dist/css/bootstrap.min.css"
import "./css/style.css"
import "@fortawesome/fontawesome-free/js/all.js"
import "./sass/style.scss"

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))



document.addEventListener("DOMContentLoaded", function () {
  // Select all buttons with the class "add-to-cart-btn"
  let buttons = document.querySelectorAll("button.add-to-cart-btn");

  // Loop through each button and add the event listener
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      alert("تم اضافة المنتج إلى عربة التسوق");
    });
  });
});

document.querySelectorAll(".size-option input[type=radio]").forEach(item => {
  item.addEventListener("change", () => {
    document.querySelectorAll(".size-option").forEach(i => {
      i.classList.remove("active")
    })
    item.parentNode.parentNode.classList.add("active")
  })
})

document.querySelectorAll(".color-option input[type=radio]").forEach(item => {
  item.addEventListener("change", () => {
    document.querySelectorAll(".color-option").forEach(i => {
      i.classList.remove("active")
    })
    item.parentNode.parentNode.classList.add("active")
  })
})

// calcute total price
document.querySelectorAll("[data-product-quantity]").forEach(item => {
  item.addEventListener("change", () => {
    const newQuantity = item.value;
    const parent = item.closest("[data-product-info]");
    const pricePerUnit = parent.getAttribute("data-product-price");
    const totalPriceforProduct = newQuantity * pricePerUnit;
    parent.querySelector(".total-price-for-product").innerHTML = totalPriceforProduct + "$"

    // Call the function to update the sum of all total prices
    updateTotalSum()
  })
})

function updateTotalSum() {
  // Get all the total price elements
  const totalPriceElements = document.querySelectorAll(".total-price-for-product");

  // Sum all the total prices
  let totalSum = 0;
  totalPriceElements.forEach(element => {
    // Remove the dollar sign and convert to number before adding to the sum
    totalSum += parseFloat(element.innerHTML);
  });

  // Display the total sum somewhere on the page
  // Assuming there's an element with the id "total-sum" to display the total sum
  document.getElementById("total-price-for-all-product").innerHTML = totalSum + "$";
}
// END calcute total price

//delete product
// Select all delete buttons
document.querySelectorAll('.deleteProduct').forEach(button => {
  // Add a click event listener to each button
  button.addEventListener('click', () => {
    // Find the closest parent tr element
    const productRow = button.closest('[data-product-info]');
    // Remove the productRow from the DOM
    productRow.remove();

    //update total sum by recall its function
    updateTotalSum()
  });
});

///////////////////////////////////////////////////////////////////////////
// Data structure for countries and cities
const countryCityMapping = {
  eg: ['القاهرة', 'الجيزة'],
  ksa: ['الرياض', 'جدة'],
  sy: ['دير الزور']
};

// Function to update city options based on selected country
function updateCityOptions() {
  const countrySelector = document.querySelector('select[name="country"]');
  const citySelector = document.querySelector('select[name="city"]');
  const selectedCountry = countrySelector.value;

  // Clear existing city options
  citySelector.innerHTML = '<option disabled selected value="">اختر المدينة</option>';

  // If a country is selected, populate city options
  if (selectedCountry && countryCityMapping[selectedCountry]) {
      const cities = countryCityMapping[selectedCountry];
      cities.forEach(city => {
          const option = document.createElement('option');
          option.value = city;
          option.text = city;
          citySelector.appendChild(option);
      });
  }
}

// Event listener for country selection change
document.querySelector('select[name="country"]').addEventListener('change', updateCityOptions);

//////////////////////////////////////////////////////////////////////////

//show credit cart row
// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
  // Set the default display style for #creditCardInfo
  document.querySelector('#creditCardInfo').style.display = '';
});

document.querySelectorAll('[name="payment-method"]').forEach(method => {
  method.addEventListener('change', () => {
      if (method.value === 'creditCard') {
          document.querySelector('#creditCardInfo').style.display = '';
      } else {
          document.querySelector('#creditCardInfo').style.display = 'none';
      }
  });
});

//year copyright
const year = new Date().getFullYear();
document.getElementById("year").textContent = year;


