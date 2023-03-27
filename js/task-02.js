const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ul = document.querySelector('#ingredients');

const arr = [];
const element = ingredients.map(function (acc) {
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = acc;
  arr.push(li);
});

ul.append(...arr);

console.log(ul)

