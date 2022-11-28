const getId = (id) => document.getElementById(id);
const getClasses = (classes) => document.getElementsByClassName(classes);

const username = getId("username"),
  email = getId("email"),
  password = getId("password"),
  form = getId("form"),
  errorMes = getClasses("error"),
  successIcon = getClasses("success-icon"),
  failureIcon = getClasses("failure-icon");

const validateInput = (id, seiral, message) => {
  if (id.value.trim() === "") {
    errorMes[seiral].innerHTML = message;
    id.style.border = "2px solid red";

    failureIcon[seiral].style.opacity = "1";
    successIcon[seiral].style.opacity = "0";
  } else {
    errorMes[seiral].innerHTML = "";
    id.style.border = "2px solid green";

    failureIcon[seiral].style.opacity = "0";
    successIcon[seiral].style.opacity = "1";
  }
  if (
    errorMes[0].innerHTML === "" &&
    errorMes[1].innerHTML === "" &&
    errorMes[2].innerHTML === ""
  ) {
    alert("Congratulations, you have successfully registered an account");
  }
};
//  ! tìm lại form trn git validation

form.onsubmit = (e) => {
  console.table(e);
  e.preventDefault();

  validateInput(username, 0, "Username cannot be blank");

  validateInput(email, 1, "Email cannot be blank");

  validateInput(password, 2, "Password cannot be blank");
};
