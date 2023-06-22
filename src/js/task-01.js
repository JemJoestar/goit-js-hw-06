const categoriesListEl = document.querySelector("#categories");

console.log(`Number of categories: ${categoriesListEl.children.length}`);
console.log("");

const childrenArr = [...categoriesListEl.children];

childrenArr.forEach((element) => {
  const category = element.querySelector("h2");
  console.log(`Category: ${category.textContent}`);
  const elementsList = element.querySelector("ul");
  const elementsQuantity = elementsList.children.length;
  console.log(`Elements: ${elementsQuantity}`);
  console.log("");
});
