const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const { email, password } = formEl.elements;
  if (email.value === "" || password.value === "") {
    alert("Please fill in the fields!");
  } else {
    const user = {
      email: email.value,
      password: password.value,
    };
    console.log(user);
    formEl.reset();
  }
});
