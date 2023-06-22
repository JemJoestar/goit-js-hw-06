function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const boxesEl = document.querySelector("#boxes");
const inputQuantityEl = document.querySelector("#controls > input");
const createBtnEl = document.querySelector("button[data-create]");
const destroyBtnEl = document.querySelector("button[data-destroy]");

createBtnEl.addEventListener("click", () => {
  createBoxes(inputQuantityEl.value);
});

function createBoxes(amount) {
  boxesEl.innerHTML = "";
  const elementsColection = [];
  for (let i = 0; i < inputQuantityEl.value; i++) {
    const newElement = document.createElement("div");
    newElement.style.backgroundColor = getRandomHexColor();
    newElement.style.width = `${30 + 10 * i}px`;
    newElement.style.height = newElement.style.width;
    elementsColection.push(newElement);
  }
  boxesEl.append(...elementsColection);
}

destroyBtnEl.addEventListener("click", () => {
  boxesEl.innerHTML = "";
});
