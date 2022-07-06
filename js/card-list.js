 (async function(){

    const response = await fetch('cards.json');
    const cards = await response.json();

    function renderCards(cards) {
        const cardsContainer = document.querySelector('.features__leasing-card');
        cardsContainer.innerHTML = '';
        for (const card of cards) {
            cardsContainer.innerHTML += `
            <div class="leasing-inform">
                <img class="leasing-logo" width="50" src="${card.image}" alt="${card.alttext}" />
                <span class="leasing-consume"> ${card.name} </span>
                <p class="leasing-text">
                    ${card.description}
                </p>
                <a class="leasing-learn" href="#"> LEARN MORE </a>
            </div>`;
        }
    }
    renderCards(cards);
 })()