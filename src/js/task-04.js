const counterDivEl = document.querySelector("#counter");
const incrementBtnEl = counterDivEl.querySelector(
  "button[data-action=increment]"
);
const decrementBtnEl = counterDivEl.querySelector(
  "button[data-action=decrement]"
);
const valueCounter = counterDivEl.querySelector("#value");

let counterValue = 0;

incrementBtnEl.addEventListener("click", () => {
  counterValue = counterValue + 1;
  valueCounter.textContent = counterValue;
});
decrementBtnEl.addEventListener("click", () => {
  counterValue = counterValue - 1;
  valueCounter.textContent = counterValue;
});
