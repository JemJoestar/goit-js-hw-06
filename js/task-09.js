function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorChangeBtnEl = document.querySelector(".change-color");
const colorOutputEl = document.querySelector(".color");
const bodyEl = document.querySelector("body");

colorChangeBtnEl.addEventListener("click", () => {
  const newColor = getRandomHexColor();
  bodyEl.style.backgroundColor = newColor;
  colorOutputEl.textContent = newColor;
});
