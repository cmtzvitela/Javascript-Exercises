const anchor = document.getElementById('id1');
const div = anchor.previousSibling.previousSibling;

anchor.addEventListener('click', (e) => {
  div.style.display = 'block';
});
