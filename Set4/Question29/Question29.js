const anchor = document.getElementById('id1');
const div = anchor.previousElementSibling;

anchor.addEventListener('click', (e) => {
  div.style.display = 'block';
});
