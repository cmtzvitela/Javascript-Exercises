let leetAlph = {
  a: "@",
  b: "8",
  c: "(",
  d: "|)",
  e: "3",
  f: "ph",
  g: "g",
  h: "#",
  i: "l",
  j: "_|",
  k: "|<",
  l: "1",
  m: "|'|'|",
  n: "//",
  o: "0",
  p: "|D",
  q: "(,)",
  r: "|2",
  s: "5",
  t: "+",
  u: "|_|",
  v: "|/",
  w: "|/|/",
  x: "><",
  y: "j",
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
