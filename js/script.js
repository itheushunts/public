const grid = document.querySelector('.grid');

for (let i = 0; i < 5; i++) {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = \`
    <img src="covid19.jpg" alt="Covid-19">
    <div class="card-body">
      <h2>Coronavírus: como a doença é transmitida?</h2>
      <p>Saiba o que é o coronavírus, em quanto tempo a doença pode se manifestar e quais são os principais</p>
      <a href="#" class="read-more">Ler mais</a>
    </div>
  \`;
  grid.appendChild(card);
}