const element = document.querySelector("div");

function printAttr(el, name) {
  let attributeArray = [];
  for (let i = 0; i < name.length; i++) {
    let attributeValue = el.getAttribute(name[i]);
    attributeArray.push(attributeValue);
  }
  return attributeArray;
}

console.log(printAttr(element, ["id", "class", "style", "val"]));
