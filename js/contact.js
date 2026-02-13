// create functions to validate forms & inputs
function nameCode() {
  var message = document.getElementById("errorMsg");
  message.innerText = "Error, Try again";
}
// text field function - x2 text fields
function validateField(id) {
  var firstname = document.getElementById(id);

  if (firstname.value == "") {
    firstname.placeholder = "Please Enter a value here";
    firstname.style.borderColor = "red";
    return false;
  } else {
    firstname.style.borderColor = "black";
    return true;
  }
}
// Email field function
function validateEmail() {
  var email = document.getElementById("email").value;
  var message = document.getElementById("errorMsg3");
  if (email == "" || !email.includes("@", ".com")) {
    message.innerText = "Please enter a valid email";
    message.style.color = "red";
    console.log(email);
    return false;
  } else {
    return true;
  }
}

// Radio buttons: Contact preference
function validatePreferred() {
  var radio1 = document.getElementById("Prefemail");
  var radio2 = document.getElementById("Preftel");
  var message = document.getElementById("errorMsg4");
  if (!radio1.checked && !radio2.checked) {
    message.innerText = "Please select a button";
    message.style.color = "red";
    return false;
  } else {
    return true;
  }
}

// Form Validation
function validateContact() {
  var result1 = validateField("user"); // username
  var result2 = validateField("enquire"); //message field
  var result3 = validateEmail(); //Email field
  var result4 = validatePreferred(); // preferred method of contact
  if (result1 && result2 && result3 && result4) {
    return true;
  } else {
    return false;
  }
}

// Reset form
function resetForm() {
  // Reset the form fields
  document.getElementById("contactForm").reset();

  // Reset border colors and placeholders for all inputs
  var inputs = document.querySelectorAll(
    "#contactForm input, #contactForm select"
  );
  inputs.forEach(function (input) {
    input.style.borderColor = "black";
    if (input.type !== "checkbox" && input.type !== "radio") {
      input.placeholder = "";
    }
  });

  // Clear any error messages
  var errorMessages = document.querySelectorAll("#errorMsg3,#errorMsg4");
  errorMessages.forEach(function (message) {
    message.innerText = "";
    message.style.color = "black";
  });
}
