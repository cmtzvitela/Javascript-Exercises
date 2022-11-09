function validateString(string) {
  const regex1 = /1234/;
  const regex2 = /qwert/;
  const regex3 = /asdf/;
  const regex4 = /(^|(.)(?!\2))(\d)\3{3}(?!\3)/;
  if (regex1.test(string) || regex2.test(string) || regex3.test(string) || regex4.test(string)) {
    return new Error("That can't be used");
  }
}

console.log(validateString("4123458"));
console.log(validateString("qwerty"));
console.log(validateString("asdfghj"));
console.log(validateString("12444458"));
