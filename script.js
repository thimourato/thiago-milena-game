const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const answerDiv = document.getElementById('answer');

yesButton.addEventListener('click', () => {
  answerDiv.textContent = 'Isso mesmo. Se você for a Milena, é só se olhar no espelho para confirmar.';
});

noButton.addEventListener('mouseover', (event) => {
  const rect = noButton.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  noButton.style.left = (x - 20) + 'px';
  noButton.style.top = (y - 20) + 'px';
});
