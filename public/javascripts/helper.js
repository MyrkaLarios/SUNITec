document.querySelector('#level-selector').addEventListener('change', (ev) => {
  document.querySelectorAll('.unitSelector').forEach(element => {
    element.classList.add('d-none');
  })
  document.querySelector(`#level${ev.target.value}-units-selector`).classList.remove('d-none');
});


