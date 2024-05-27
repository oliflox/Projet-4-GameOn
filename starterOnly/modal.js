function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const form = document.getElementById("myForm");
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

const closeModal = document.querySelector('.close');

const firstField = document.getElementById('first');
const lastField = document.getElementById('last');
const emailField = document.getElementById('email');
const quantityField = document.getElementById('quantity');

const userConditions = document.getElementById('checkbox1');

const radioButtons = document.querySelectorAll('input[name="location"]');


const firstError = document.getElementById('firstError');
const lastError = document.getElementById('lastError');
const emailError = document.getElementById('emailError');
const quantityError = document.getElementById('quantityError');
const locationError = document.getElementById('locationError');
const userConditionsError = document.getElementById('userConditionsError');


// Regular expression for email validation
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  modalbg.style.overflow = "hidden";
  document.body.classList.add('modal-open');
}

// Close modal form
closeModal.addEventListener('click', function () {
  modalbg.style.display = "none";
  modalbg.style.overflow = "initial";
  document.body.classList.remove('modal-open');
});

// radio button check
isRadioChecked = () => {
  let isChecked = false;
  radioButtons.forEach((radio) => {
    if (radio.checked) {
      isChecked = true;
    }
  });
  return isChecked;
}

// Form submit event
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

// No validate form
document.addEventListener('DOMContentLoaded', (event) => {
  var form = document.getElementById('myForm');
  form.noValidate = true;
});

function firstFielderror() {
  if (
    firstField.value.trim() === "" || firstField.value.trim().length < 2) {
    firstField.style.border = "2px solid red";
    firstError.style.display = "block";
    return false; 
  }
  else {
    firstField.style.border = "none";
    firstError.style.display = "none";
    return true ;
  }
}

function lastFielderror() {
  if (
    lastField.value.trim() === "" || lastField.value.trim().length < 2) {
    lastField.style.border = "2px solid red";
    lastError.style.display = "block";
    return false;
  }
  else {
    lastField.style.border = "none";
    lastError.style.display = "none";
    return true ;
  }
}

function emailFielderror() {
  if (!emailField.value.match(emailRegex)) {
    emailField.style.border = "2px solid red";
    emailError.style.display = "block";
    return false;
  }
  else {
    emailField.style.border = "none";
    emailError.style.display = "none";
    return true ;
  }
}

function quantityFielderror() {
  if (isNaN(quantityField.value) || quantityField.value.trim() === "" || quantityField.value < 0 || quantityField.value > 99) {
    quantityField.style.border = "2px solid red";
    quantityError.style.display = "block";
    return false;
  }
  else {
    quantityField.style.border = "none";
    quantityError.style.display = "none";
    return true ;
  }
}

function userConditionserror() {
  if (!userConditions.checked) {
    userConditionsError.style.display = "block";
    return false;
  }
  else {
    userConditionsError.style.display = "none";
    return true ;
  }
}

function radioButtonserror() {
  if (!isRadioChecked()) {
    locationError.style.display = "block";

    return false;
  }
  else {
    locationError.style.display = "none";
    return true ;
  }
}

// Form validation
function validate() {

 if (!firstFielderror() || !lastFielderror() || !emailFielderror() || !quantityFielderror() || !userConditionserror() || !radioButtonserror()) {
    return false;
}
  else {
    modalbg.style.display = "none";
    document.body.classList.remove('modal-open');
    return true;
  }
}



