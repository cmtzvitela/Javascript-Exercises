function printAttr(element, name) {
  for (let i = 0; i < name.length; i++) {
    const el = document.querySelector(element);
    let attributeValue = el.getAttribute(name[i]);
    console.log(attributeValue);
  }
}

printAttr("div", ["id", "class", "style", "val"]);
