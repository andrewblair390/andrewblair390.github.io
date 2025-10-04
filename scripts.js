const toggleButton = document.getElementById('theme-toggle');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('darkmode');

  if(document.body.classList.contains('darkmode')){
    toggleButton.textContent = '☀ Light Mode';
  } else {
    toggleButton.textContent = '🌙 Dark Mode';
  }
});