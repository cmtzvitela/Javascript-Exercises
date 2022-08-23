let leetAlph = {
  a: "@",
  b: "8",
  c: "(",
  d: "d",
  e: "3",
  f: "F",
  g: "6",
  h: "h",
  i: "!",
  j: "J",
  k: "k",
  l: "1",
  m: "m",
  n: "n",
  o: "0",
  p: "p",
  q: "Q",
  r: "r",
  s: "5",
  t: "7",
  u: "u",
  v: "v",
  w: "w",
  x: "x",
  y: "Y",
  z: "2",
};

function textToLeet(text) {
  text = text.toLowerCase();
  for (var i = 0; i < text.length; i++) {
    if (leetAlph[text[i]]) {
      text = text.replace(text[i], leetAlph[text[i]]);
    }
  }
  return text;
}

console.log(textToLeet("Hello world"));
