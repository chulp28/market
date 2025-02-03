let cards = document.getElementById('cards')
for (let i = 0; i < 20; i++) {
  let card = document.createElement('div')
  card.className = 'card';
  card.innerHTML = `<div class="image"><div class="add-icon"></div></div>
      <div class="text"><p class="title">Футболка MSGM</p><p class="price">38.000₽</p>`
  cards.append(card)
}