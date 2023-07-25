const div = Array.from(document.getElementsByTagName('p'));
for (let i = 0; i < div.length; i++) {
  if (i % 2 != 0) {
    div[i].style.visibility = 'hidden';
  }
}

document.body.onclick = function (event) {
  let target = event.target;
  const sibling = event.target.nextElementSibling;
  if (target.innerText.includes('Toggle')) {
    if (sibling.style.visibility == 'hidden') {
      sibling.style.visibility = 'visible';
    } else {
      sibling.style.visibility = 'hidden';
    }
  }
};

// for (let i = 0; i < div.length; i++) {
//   if (i % 2 != 0) {
//     div[i].style.visibility = 'hidden';
//   }
//   if (i % 2 == 0) {
//     div[i].addEventListener('click', (e) => {
//       const sibling = e.target.nextElementSibling;
//       if (sibling.style.visibility == 'hidden') {
//         sibling.style.visibility = 'visible';
//       } else {
//         sibling.style.visibility = 'hidden';
//       }
//     });
//   }
// }
