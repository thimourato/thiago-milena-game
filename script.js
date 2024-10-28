const yesButton = document.getElementById('yesButton');
const answerDiv = document.getElementById('answer');

yesButton.addEventListener('click', () => {
  answerDiv.textContent = 'Isso mesmo. Se você for a Milena, é só se olhar no espelho para confirmar.';
});

const noButtonArea = document.createElement('div');
noButtonArea.style.width = '150px';
noButtonArea.style.height = '50px';
noButtonArea.style.margin = '0 10px';
noButtonArea.style.cursor = 'pointer';
noButtonArea.style.backgroundColor = '#f44336';
noButtonArea.style.borderRadius = '5px';
noButtonArea.style.color = 'white';
noButtonArea.style.textAlign = 'center';
noButtonArea.style.lineHeight = '50px';
noButtonArea.textContent = 'Não, sempre soube que o Thiago é maluco';

document.querySelector('.buttons').appendChild(noButtonArea);

noButtonArea.addEventListener('click', () => {
  const funnyMessage = document.createElement('p');
  funnyMessage.textContent = 'Essa opção está com defeito! Parece que o Thiago está mesmo certo...';
  funnyMessage.style.marginTop = '20px';
  document.querySelector('.buttons').appendChild(funnyMessage);
  noButtonArea.remove();
});
