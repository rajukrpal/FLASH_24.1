document.getElementById("myForm").addEventListener("submit", function(event) {
    var isValid = true;

    // Validate firstname
    var firstname = document.getElementById("firstname").value;
    var firstnameError = document.getElementById("firstnameError");
    if (firstname === "") {
      firstnameError.textContent = "firstname is required";
      isValid = false;
    } else {
      firstnameError.textContent = "";
    }

    // Validate lastname
    var lastname = document.getElementById("lastname").value;
    var lastnamelError = document.getElementById("lastnameError");
    if (lastname === "") {
      lastnameError.textContent = "lastname is required";
      isValid = false;
    } else {
      lastnameError.textContent = "";
    }

    // Validate age
    var age = document.getElementById("age").value;
    var ageError = document.getElementById("ageError");
    if (age === "") {
      ageError.textContent = "age is required";
      isValid = false;
    } else {
      ageError.textContent = "";
    }
  
    // Validate city
    var city = document.getElementById("city").value;
    var cityError = document.getElementById("cityError");
    if (city === "") {
      cityError.textContent = "city is required";
      isValid = false;
    } else {
      cityError.textContent = "";
    }
 
    // Validate password
    var password = document.getElementById("password").value;
    var passwordError = document.getElementById("passwordError");
    if (password === "") {
      passwordError.textContent = "password is required";
      isValid = false;
    }else if(password.length < 8 ){
      passwordError.textContent = "password most be 8 charectar ";
      isValid = false;
    }
     else {
      passwordError.textContent = "";
    }


    // Validate conpassword
    var conpassword = document.getElementById("conpassword").value;
    var conpassworddError = document.getElementById("conpasswordError");
  if (conpassword === "") {
      conpasswordError.textContent = "Confirm Password is required";
      isValid = false;
    } else if (password !== conpassword) {
      conpasswordError.textContent = "Passwords do not match";
      isValid = false;
    } else {
      conpasswordError.textContent = "";
    }

    if (!isValid) {
      event.preventDefault(); // Prevent form submission if there are validation errors
    }
  });