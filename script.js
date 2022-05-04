"use strict";

function register() {
  const userName = document.getElementById("name");
  const eMail = document.getElementById("email");
  const pwd = document.getElementById("pwd");
  const cfmPwd = document.getElementById("cfm-pwd");

  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const pwdError = document.getElementById("pwd-error");
  const cfmError = document.getElementById("cfm-error");

  let c1 = false;
  let c2 = false;
  let c3 = false;
  let c4 = false;
  if (userName.value.length < 3) {
    nameError.innerHTML = "name should be atleast 3 characters long";
  } else {
    nameError.innerHTML = "";
    c1 = true;
  }

  //   //trials
  //   let x = eMail.value.search("@");
  //   console.log(x);
  //   let yay = eMail.value.length - 4;
  //   console.log(yay);
  //   // length should be 4 more than search of @

  let regexEmail = new RegExp(`[a-z0-9]+@[a-z]+\.[a-z]{2,3}`);
  //   if (x == "-1") {
  //     emailError.innerHTML = "please enter a valid email";
  //   } else if (yay < x) {
  //     if (eMail.value.search(".") > eMail.value.search("@") + 1) {
  //       emailError.innerHTML = "please enter a valid email";
  //     }

  if (regexEmail.test(eMail.value) === false) {
    emailError.innerHTML = "please enter a valid email";
  } else {
    emailError.innerHTML = "";
    c2 = true;
  }

  // passsword validation
  //
  if (pwd.value.length < 8) {
    pwdError.innerHTML = "Password Should be 8 characters long";
  } else {
    pwdError.innerHTML = "";
    c3 = true;
  }
  if (cfmPwd.value !== pwd.value && pwd.value != "") {
    cfmError.innerHTML = "Passwords don't match";
  } else if (cfmPwd.value == pwd.value) {
    cfmError.innerHTML = "";
    c4 = true;
  }
  if (c1 && c2 && c3 && c4) {
    alert("registration successful");
  }
}
