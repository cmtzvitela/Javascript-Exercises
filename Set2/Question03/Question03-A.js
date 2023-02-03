const str = '7890xyz*=XYaZ`[';

function moveByOneFirstEdit(str) {
  return str.replaceAll(/[a-zA-Z0-9]/g, replacer);
}

function replacer(i) {
  if (/[A-Z]/.test(i)) {
    return String.fromCharCode(65 + ((i.charCodeAt() - 65 + 1) % 26));
  }
  if (/[a-z]/.test(i)) {
    return String.fromCharCode(97 + ((i.charCodeAt() - 97 + 1) % 26));
  }
  if (/[0-9]/.test(i)) {
    return String.fromCharCode(48 + ((i.charCodeAt() - 48 + 1) % 10));
  }
}

function cycleReplace(startChar, endChar) {
  const offset = startChar.charCodeAt();
  const range = endChar.charCodeAt() - offset + 1;
  return function (c) {
    console.log(c, offset, range)
    return String.fromCharCode(offset + ((c.charCodeAt() - offset + 1) % range));
  }
}
function moveByOne(str) {
  return str
    .replaceAll(/[A-Z]/g, cycleReplace('A', 'Z'))
    .replaceAll(/[a-z]/g, cycleReplace('a', 'z'))
    .replaceAll(/[0-9]/g, cycleReplace('0', '9'));
}

console.log(moveByOne(str))