// create functions to validate forms and inputs

// text field function - x5 text fields
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

// Password Validation
function validatePassword(id) {
  var password1 = document.getElementById(id);
  var password2 = document.getElementById(id);
  if (password1.value.length < 6 && password2.value.length < 6) {
    password1.placeholder = "Must be at least 6 characters";
    password1.style.borderColor = "red";
    return false;
  }

  if (password1.length == "6" && password2.length == "6") {
    password1.placeholder = "Please Enter a value here";
    password1.style.borderColor = "red";
    return false;
  } else {
    password1.style.borderColor = "black";
    return true;
  }
}

// Email verification
// Email field function
function validateEmail() {
  var email = document.getElementById("email").value;
  var firstname = document.getElementById("email");
  // var domain = document.getElementById("errorMsg5");
  if (email == "" || !email.includes("@", ".com")) {
    firstname.placeholder = "Please Enter a valid email";
    firstname.style.borderColor = "red";

    // message.innerText = "Please enter a valid email";
    // message.style.color = "red";
    return false;
  }

  //else if (email.includes("@") && email.includes(".") && domain.length >= 3) {
  //   console.log(domain.length);
  //   // messsage.style.display = "none";
  //   return true;
  // }
}

// Telephone Validation
function validateTelephone() {
  var telephone = document.getElementById("tel").value;
  var telField = document.getElementById("tel");

  if (telephone === "" || telephone.length !== 10 || isNaN(telephone)) {
    telField.placeholder = "Must be a 10-digit number";
    telField.style.borderColor = "red";
    return false;
  } else {
    telField.style.borderColor = "black";
    return true;
  }
}

// D.O.B. Validation -
function validateDOB() {
  var DOB = document.getElementById("DOB").value;
  var dobField = document.getElementById("DOB");

  if (!DOB) {
    dobField.placeholder = "Please enter your date of birth";
    dobField.style.borderColor = "red";
    return false;
  }

  var dobDate = new Date(DOB);
  var today = new Date();
  var age = today.getFullYear() - dobDate.getFullYear();
  var monthDiff = today.getMonth() - dobDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < dobDate.getDate())
  ) {
    age--;
  }

  if (age < 18) {
    dobField.placeholder = "Must be at least 18 years old";
    dobField.style.borderColor = "red";
    return false;
  } else {
    dobField.style.borderColor = "black";
    return true;
  }
}

// Age Validation
function validateAge() {
  var age = document.getElementById("Age").value;
  var firstname = document.getElementById("Age");

  //   var message = document.getElementById("errorMsg8");
  if (age <= 18 || age > 100) {
    firstname.placeholder = "Must be 18 years old to enter";
    firstname.style.borderColor = "red";

    // message.innerText = "Please enter a valid age";
    // message.style.color = "red";
    return false;
  } else {
    return true;
  }
}

// Mailing Address: StreetNumber Validation
function validateAddress() {
  var Mail = document.getElementById("mailAddress").value;
  var firstname = document.getElementById("mailAddress");

  //   var message = document.getElementById("errorMsg9");
  if (Mail <= 1 || Mail >= 9999) {
    firstname.placeholder = "Please Enter a value here";
    firstname.style.borderColor = "red";

    // message.innerText = "Please enter a valid age";
    // message.style.color = "red";
    return false;
  } else {
    return true;
  }
}

//   Checkbox
function validateCheckbox() {
  var checkbox = document.getElementById("checkbox");
  var message = document.getElementById("errorMsg12");
  if (!checkbox.checked) {
    // message.innerText = "Please agree to the terms and conditions";
    // message.style.color = "red";
    return true;
  } else {
    message.innerText = "";
    return true;
  }
}

// form Validation
function validateSub() {
  var result1 = validateField("user1");
  var result2 = validateField("user2");
  var result3 = validateField("user");
  var result4 = validatePassword("pass1");
  var result5 = validatePassword("pass2");
  var result6 = validateEmail();
  var result7 = validateTelephone();
  var result8 = validateDOB();
  var result9 = validateAge();
  var result10 = validateAddress();
  var result11 = validateField("streetName");
  var result12 = validateField("province");
  var result13 = validateCheckbox();

  if (
    result1 &&
    result2 &&
    result3 &&
    result4 &&
    result5 &&
    result6 &&
    result7 &&
    result8 &&
    result9 &&
    result10 &&
    result11 &&
    result12 &&
    result13
  ) {
    return true;
  } else {
    var messageEnd = document.getElementById("errorMsg25");
    messageEnd.innerText = "Please review errors and resubmit";
    messageEnd.style.color = "whitesmoke";
    messageEnd.style.fontWeight = "bold";
    messageEnd.style.padding = "3%";
    messageEnd.style.fontSzie = "150%";
    return false;
  }
}

// reset form
function resetForm() {
  // Reset the form fields
  document.getElementById("subscribeForm").reset();

  // Reset border colors and placeholders for all inputs
  var inputs = document.querySelectorAll(
    "#subscribeForm input, #subscribeForm select"
  );
  inputs.forEach(function (input) {
    input.style.borderColor = "black";
    if (input.type !== "checkbox" && input.type !== "radio") {
      input.placeholder = "";
    }
  });

  // Clear any error messages
  var errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach(function (message) {
    message.innerText = "";
    message.style.color = "black";
  });
}
