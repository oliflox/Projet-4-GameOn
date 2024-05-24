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

const successMessage = document.getElementById('successMessage');

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

// Form validation
function validate() {

  if (firstField.value.trim() === "" || firstField.value.trim().length < 2 ||
    lastField.value.trim() === "" || lastField.value.trim().length < 2 ||
    !emailField.value.match(emailRegex) ||
    isNaN(quantityField.value) || quantityField.value.trim() === "" || quantityField.value < 0 || quantityField.value > 99 ||
    !userConditions.checked || 
    !isRadioChecked()) {
    return false;
  } else {
    successMessage.style.display = "block";
    modalbg.style.display = "none";
    return true;
  }

  // let isValid = true;

  // if(){
  //   isValid = false;
  // }

  // if(){
  //   isValid = false;
  // }

  // if(){
  //   isValid = false;
  // }

  // if(){
  //   isValid = false;
  // }

  // if(){
  //   isValid = false;
  // }
  // return isValid;
}



