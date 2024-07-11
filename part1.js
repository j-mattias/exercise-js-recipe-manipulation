// 1
const recipeNameRef = document.querySelector("#recipe-name");
console.log(`1. Recipe name: ${recipeNameRef.innerHTML}`);

// 2
console.log(`2. Recipe name HTML-tag: ${recipeNameRef.localName}`);
// .nodeName & .tagName also work but show (H1)

// 3
const pDescriptionRef = window.getComputedStyle(document.querySelector(".description")).fontSize;
console.log(`3. Description font size: ${pDescriptionRef}`);

// 4
const imgRef = document.querySelector(".image-container > img");
console.log(`4. Value of alt attribute: ${imgRef.alt}`);

// 5
const imgObj = {
  url: imgRef.src,
  height: imgRef.height,
  width: imgRef.width,
};
console.log("5. Image object:");
console.log(imgObj);
console.log(JSON.stringify(imgObj, null, 2));

// 6
const pasteRef = document.querySelector(".ingredients-list-paste");
console.log(`6. Paste ingredient count: ${pasteRef.childElementCount}`);

// 7
const fourthIngredientRef = getListItem(pasteRef.children, 3);
console.log(`7. Fourth paste ingredient: ${fourthIngredientRef}`);

// Function to extract the list item ingredient text
function getListItem(obj, index) {
  for (const [key, value] of Object.entries(obj)) {
    if (Number(key) === index) {
      return value.innerHTML;
    }
  }
  return null;
}

// 8
const instructionsListRef = document.querySelector(".instructions-list");
console.log("8. Array of objects with instructions");
console.log(createInstructionList(instructionsListRef.children));
console.log(JSON.stringify(createInstructionList(instructionsListRef.children), null, 2));

function createInstructionList(obj) {
  const instructions = [];
  Object.entries(obj).forEach(([key, value]) => {
    const instructionObj = {
      order: Number(key) + 1,
      text: value.outerText,
    };
    instructions.push(instructionObj);
  });
  return instructions;
}

// Same thing just getting a list of items directly instead of accessing children
const instructionsListRef2 = document.querySelectorAll(".instructions-list > li");
const instructions2 = [];
instructionsListRef2.forEach((item, index) => {
  const instructionObj2 = {
    order: index + 1,
    text: item.outerText,
  };
  instructions2.push(instructionObj2);
});
console.log(instructions2);
