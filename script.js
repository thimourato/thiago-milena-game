const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const answerDiv = document.getElementById('answer');

yesButton.addEventListener('click', () => {
  answerDiv.textContent = 'Isso mesmo. Se você for a Milena, é só se olhar no espelho para confirmar.';
});

noButton.addEventListener('mousemove', (event) => {
  const rect = noButton.getBoundingClientRect();
  const x = event.clientX - rect.left - 20; // Ajustado para melhor posicionamento
  const y = event.clientY - rect.top - 20;  // Ajustado para melhor posicionamento
  noButton.style.left = x + 'px';
  noButton.style.top = y + 'px';
  noButton.style.position = 'absolute'; // Necessário para o posicionamento absoluto funcionar
});
