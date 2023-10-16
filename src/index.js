window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');

import "bootstrap/dist/css/bootstrap.min.css"
import "./css/style.css"
import "@fortawesome/fontawesome-free/js/all.js"

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


// add to cart in most sold section
document.addEventListener("DOMContentLoaded", function() {
    // Select all buttons within the specific div
    let buttons = document.querySelectorAll(".carousel-inner button");
  
    // Loop through each button and add the event listener
    buttons.forEach(function(button) {
      button.addEventListener("click", function() {
        alert("تم اضافة المنتج إلى عربة التسوق");
      });
    });
  });

const year = new Date().getFullYear();
document.getElementById("year").textContent = year;