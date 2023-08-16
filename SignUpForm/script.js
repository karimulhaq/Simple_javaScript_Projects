var fullNameError = document.querySelector(".fullName-error");
var phoneNoError = document.querySelector(".phoneNo_error");
var emailUserError = document.querySelector(".userEamil_error");
var submitBtnError = document.querySelector(".submitBtn-error");
var userPasswordError = document.querySelector(".userPassword-error");
var confirmPasswordError = document.querySelector(".confirmPassword-error");

//  access the input fields
let fullNameT = document.querySelector(".fullName");
let phoneNoT = document.querySelector(".phoneNo");
let userEmailT = document.querySelector(".userEamil");
let userPasswordT = document.querySelector(".userPassword");
let confirmPsswordT = document.querySelector(".confirmPasswrod");

//  ---------------------------- chekc name -----------
function checkFullName() {
  const fullName = fullNameT.value;
  if (fullName.length == 0) {
    fullNameError.innerHTML = "Full Name is required";
    return false;
  }
  if (!fullName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    fullNameError.innerHTML = "Write your full name";
    return false;
  }
  fullNameError.innerHTML =
    '<i class="fa-solid fa-circle-check" style="color: lightGreen;"></i>';
  return true;
}

//  ------------------- check phone no ---------------------------
function checkPhoneNo() {
  const phoneNo = phoneNoT.value;
  if (phoneNo.length == 0) {
    phoneNoError.innerHTML = "Phone no is required";
    return false;
  }
  if (phoneNo.length < 10) {
    phoneNoError.innerHTML = "Phone no should be 10 digits";
    return false;
  }
  if (phoneNo.length > 10) {
    phoneNoError.innerHTML = "Phone no should not be more than 10 digits";
    return false;
  }
  if (!phoneNo.match(/^[0-9]{10}$/)) {
    phoneNoError.innerHTML = "Write valid phone no";
    return false;
  }
  phoneNoError.innerHTML =
    '<i class="fa-solid fa-circle-check" style="color: lightGreen;"></i>';
  return true;
}

// ---------------------- check email -----------------------------------
function checkEmail() {
  const userEmail = userEmailT.value;
  if (userEmail.length == 0) {
    emailUserError.innerHTML = "Email is required";
    return false;
  }
  if (!userEmail.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailUserError.innerHTML = "Enter valid email address";
    return false;
  }
  emailUserError.innerHTML =
    '<i class="fa-solid fa-circle-check" style="color: lightGreen;"></i>';
  return true;
}

//  ------------------------------- check password -----------------------------

function checkPassword() {
  const userPassword = userPasswordT.value;
  if (userPassword.length == 0) {
    userPasswordError.innerHTML = "Password is required";
    return false;
  }
  if (userPassword.length < 8) {
    userPasswordError.innerHTML = "Password should be at least 8 ";
    return false;
  }
  if (userPassword.length > 32) {
    userPasswordError.innerHTML = "Password should be less than 30 char ";
    return false;
  }
  if (
    !userPassword.match(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
    )
  ) {
    userPasswordError.innerHTML =
      "password should include sambols and numbers ";
    return false;
  }
  userPasswordError.innerHTML =
    '<i class="fa-solid fa-circle-check" style="color: lightGreen;"></i>';
  return true;
}

// ----------------------------  ------------- check confirm password---------

function checkConfrimPassword() {
  var userPassword = userPasswordT.value;
  const confirmPssword = confirmPsswordT.value;
  if (confirmPssword.length == 0) {
    confirmPasswordError.innerHTML = "Please confirm password";
    return false;
  }
  if (confirmPssword !== userPassword) {
    confirmPasswordError.innerHTML = "dose not match the password";
    return false;
  }
  confirmPasswordError.innerHTML =
    '<i class="fa-solid fa-circle-check" style="color: lightGreen;"></i>';
  return true;
}

// ------------------------- check from ---------------------------------------
function checkForm(e) {
  if (
    !checkFullName() ||
    !checkPhoneNo() ||
    !checkEmail() ||
    !checkPassword() ||
    !checkConfrimPassword()
  ) {
    submitBtnError.innerHTML = "Please! check the error";
    submitBtnError.style.display = "block";
    setTimeout(() => {
      submitBtnError.style.display = "none";
    }, 2000);
    return false;
  }
}

//  storing form data in browser local storage as object
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formD = new FormData(form);
  const obj = Object.fromEntries(formD);
  const jsonObj = JSON.stringify(obj);

  localStorage.setItem("formData", jsonObj);

  //   console.log(jsonObj);
  //   console.log(obj);

  //    clear input field

  fullNameT.value = "";
  fullNameError.innerHTML = "";
  phoneNoT.value = "";
  phoneNoError.innerHTML = "";
  userEmailT.value = "";
  emailUserError.innerHTML = "";
  userPasswordT.value = "";
  userPasswordError.innerHTML = "";
  confirmPsswordT.value = "";
  confirmPasswordError.innerHTML = "";
});
