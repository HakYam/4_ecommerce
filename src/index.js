window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');

import "bootstrap/dist/css/bootstrap.min.css"
import "./css/style.css"
import "@fortawesome/fontawesome-free/js/all.js"

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))