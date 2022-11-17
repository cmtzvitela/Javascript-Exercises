const str = "7890xyz*=XYaZ`[";

function moveByOne(str) {
  return str.replaceAll(/[a-zA-Z0-9]/g, replacer);
}

function replacer(i) {
  if (/[A-Z]/.test(i)) {
    return (i = String.fromCharCode(65 + ((i.charCodeAt() - 65 + 1) % 26)));
  }
  if (/[a-z]/.test(i)) {
    return (i = String.fromCharCode(97 + ((i.charCodeAt() - 97 + 1) % 26)));
  }
  if (/[0-9]/.test(i)) {
    return (i = String.fromCharCode(48 + ((i.charCodeAt() - 48 + 1) % 10)));
  }
}

console.log(moveByOne(str));
