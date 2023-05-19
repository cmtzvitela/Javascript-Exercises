const div = Array.from(document.getElementsByTagName('p'));

for (let i = 0; i < div.length; i++) {
  if (i % 2 != 0) {
    div[i].style.visibility = 'hidden';
  }
  if (i % 2 == 0) {
    div[i].addEventListener('click', (e) => {
      const sibling = e.target.nextElementSibling;
      if (sibling.style.visibility == 'hidden') {
        hideAll();
        sibling.style.visibility = 'visible';
      } else {
        sibling.style.visibility = 'hidden';
      }
    });
  }
}

function hideAll() {
  for (let i = 0; i < div.length; i++) {
    if (i % 2 != 0) {
      div[i].style.visibility = 'hidden';
    }
  }
}
