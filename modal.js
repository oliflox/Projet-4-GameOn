function editNav() {
  var x = document.querySelector("#myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// DOM Elements
const content = document.querySelector(".content");

const form = document.querySelector("#myForm");
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModal = document.querySelectorAll(".close-modal");
const modalBody = document.querySelector(".modal-body");

// Form
const firstField = document.querySelector("#first");
const lastField = document.querySelector("#last");
const emailField = document.querySelector("#email");
const birthField = document.querySelector("#birthdate");
const quantityField = document.querySelector("#quantity");
const userConditions = document.querySelector("#checkbox1");
const radioButtons = document.querySelectorAll('input[name="location"]');

// Gestion Erreur
const firstError = document.querySelector("#firstError");
const lastError = document.querySelector("#lastError");
const emailError = document.querySelector("#emailError");
const BirthError = document.querySelector("#birthError");
const quantityError = document.querySelector("#quantityError");
const locationError = document.querySelector("#locationError");
const userConditionsError = document.querySelector("#userConditionsError");

const successModal = document.querySelector(".successModal");
const closeSuccess = document.querySelectorAll(".closeSuccess");

// Regular expression for email validation
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  modalbg.style.overflow = "hidden";
  document.body.classList.add("modalOpen");
  content.style.display = "block";
}

// Close modal form
closeModal.forEach((element) => {
  element.addEventListener("click", () => {
    modalbg.style.display = "none";
    modalbg.style.overflow = "initial";
    document.body.classList.remove("modalOpen");
  });
});

// Close success modal
closeSuccess.forEach((element) => {
  element.addEventListener('click', () => {
    successModal.style.display = 'none';
    modalbg.style.display = 'none';
    document.body.classList.remove("modalOpen");
  });
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
};

// Form submit event
function handleForm(event) {
  event.preventDefault();
}
form.addEventListener("submit", handleForm);

// No Html validattion on form
document.addEventListener("DOMContentLoaded", (event) => {
  var form = document.querySelector("#myForm");
  form.noValidate = true;
});

// Error messages
function firstFielderror() {
  if (firstField.value.trim() === "" || firstField.value.trim().length < 2) {
    firstField.style.border = "2px solid red";
    firstError.style.display = "block";
    return false;
  }
  firstField.style.border = "none";
  firstError.style.display = "none";
  return true;
}

function lastFielderror() {
  if (lastField.value.trim() === "" || lastField.value.trim().length < 2) {
    lastField.style.border = "2px solid red";
    lastError.style.display = "block";
    return false;
  }
  lastField.style.border = "none";
  lastError.style.display = "none";
  return true;
}

function emailFielderror() {
  if (!emailField.value.match(emailRegex)) {
    emailField.style.border = "2px solid red";
    emailError.style.display = "block";
    return false;
  }
  emailField.style.border = "none";
  emailError.style.display = "none";
  return true;
}

function birthFielderror() {
  const dateRegex = /^(19|20)\d\d-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;

  if (!birthField.value.match(dateRegex)) {
    birthField.style.border = "2px solid red";
    birthError.style.display = "block";
    return false;
  }
  birthField.style.border = "none";
  birthError.style.display = "none";
  return true;
}

function quantityFielderror() {
  if (
    isNaN(quantityField.value) ||
    quantityField.value.trim() === "" ||
    quantityField.value < 0 ||
    quantityField.value > 99
  ) {
    quantityField.style.border = "2px solid red";
    quantityError.style.display = "block";
    return false;
  }
  quantityField.style.border = "none";
  quantityError.style.display = "none";
  return true;
}

function userConditionserror() {
  if (!userConditions.checked) {
    userConditionsError.style.display = "block";
    return false;
  }
  userConditionsError.style.display = "none";
  return true;
}

function radioButtonserror() {
  if (!isRadioChecked()) {
    locationError.style.display = "block";

    return false;
  }
  locationError.style.display = "none";
  return true;
}

// Form validation
function validate() {
    let firstFieldCheck = firstFielderror();
    let lastFieldCheck = lastFielderror();
    let emailFieldCheck = emailFielderror();
    let birthFieldCheck = birthFielderror();
    let quantityFieldCheck = quantityFielderror();
    let userConditionsCheck = userConditionserror();
    let radioButtonsCheck = radioButtonserror();
  
    if (!firstFieldCheck || !lastFieldCheck || !emailFieldCheck && !birthFieldCheck || !quantityFieldCheck || !userConditionsCheck || !radioButtonsCheck) {
      modalBody.style.overflowY = "scroll";
      return false;
    }
    content.style.display = "none";
    content.style.overflowY = "hidden";
    
    successModal.style.display = "block";

      form.reset();
    };