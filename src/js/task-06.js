const validationInputEl = document.querySelector("#validation-input");

validationInputEl.addEventListener("blur", () => {
  const inputLength = validationInputEl.value.length;
  const dataLength = validationInputEl.dataset.length;
  if (inputLength === Number(dataLength)) {
    validationInputEl.classList.add("valid");
  } else {
    validationInputEl.classList.add("invalid");
  }
});
