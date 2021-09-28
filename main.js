const email = document.querySelector(".email");
const warning = document.querySelector(".error");
const button = document.querySelector("button");

button.addEventListener("click", (e) => {
  e.preventDefault();

  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!email.value) {
    warning.innerHTML = "Oops! Please add your email";
  } else if (!email.value.match(pattern)) {
    warning.innerHTML = "Oops! Please check your email";
  } else {
    warning.innerHTML = "&nbsp;";
  }

  email.value = "";
});

document.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON" && e.target.tagName !== "INPUT") {
    warning.innerHTML = "&nbsp;";
  }
});
