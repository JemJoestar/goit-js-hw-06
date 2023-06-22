const fontSizeControlEl = document.querySelector("#font-size-control");
const textOutputEl = document.querySelector("#text");

fontSizeControlEl.addEventListener("input", () => {
  textOutputEl.style.fontSize = `${String(fontSizeControlEl.value)}px`;
});
