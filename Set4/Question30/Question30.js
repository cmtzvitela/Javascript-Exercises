const div = Array.from(document.getElementsByTagName('p'));

for (let i = 0; i < div.length; i++) {
  if (i % 2 != 0) {
    div[i].style.visibility = 'hidden';
  }
  if (i % 2 == 0) {
    div[i].addEventListener('click', (e) => {
      const sibling = e.target.nextSibling.nextSibling;
      if (sibling.style.visibility == 'hidden') {
        sibling.style.visibility = 'visible';
      } else {
        sibling.style.visibility = 'hidden';
      }
    });
  }
}
