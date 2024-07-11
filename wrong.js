// 1
document.querySelector(".logo-text").style.color = "#384241";

// 2
const headerRef = document.querySelector("header");
headerRef.style.justifyContent = "flex-start";

// 3
headerRef.style.borderBottomColor = "lightgray";

// 4
document.querySelector("#recipe-name").innerText = "Frozen Cheesecake";

// 5
document.querySelector(".time-container > span").classList.add("material-icons");

// 6
document.querySelector(".time").innerHTML = "60+ min";

// 7
document.querySelector(".image-container > img").src = "assets/frozen-cheesecake-slice.jpg";

// 8
document.querySelector(".ingredients-container").style.backgroundColor = "#f9f9f9";

// 9
const ingredientsListBottomRef = document.querySelector(".ingredients-list-bottom");
// document.querySelector(".ingredients-list-bottom > p").remove();
// ingredientsListBottomRef.remove("p");
ingredientsListBottomRef.firstElementChild.remove();
const correctIngredientsList = ["15st digestivetex", "Lite smör"];

correctIngredientsList.forEach((item) => {
  const liRef = document.createElement("li");
  liRef.innerHTML = item;
  ingredientsListBottomRef.appendChild(liRef);
});

// 10
const ingredientsListItemsPasteRef = document.querySelectorAll(".ingredients-list-paste > li");
ingredientsListItemsPasteRef.forEach((item, index) => {
  if (index === 2) {
    item.innerHTML = "3tsk vaniljsocker";
  }
});

// Different way without looping
// document.querySelector(".ingredients-list-paste").children["2"].innerHTML = "3tsk vaniljsocker";

// 11
const liItemPasteRef = document.createElement("li");
const ingredientsListPasteRef = document.querySelector(".ingredients-list-paste");
liItemPasteRef.innerHTML = "400g naturell philadelphiaost";
ingredientsListPasteRef.appendChild(liItemPasteRef);

// 12
document.querySelector(".instructions").classList.remove("shadow");

// 13
const instructionsListRef = document.querySelectorAll(".instructions-list > li");
editInstructions(
  instructionsListRef,
  1,
  "Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke."
);
editInstructions(instructionsListRef, 8, "Ställ in i frysen över natten.");

function editInstructions(arr, index, text) {
  if (index > arr.length - 1 || index < 0) {
    throw new Error("Index out of range");
  }
  arr[index].innerHTML = text;
}
