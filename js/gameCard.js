export const createGameCard = (icon, flippedIcon) => {
    const card = document.createElement('div');
    card.classList.add('game-card')

    const notFlippedCardI = document.createElement('i');
    const flippedCardI = document.createElement('i');


    notFlippedCardI.classList.add('fa', `fa-${icon}`);
    flippedCardI.classList.add('fa', `fa-${flippedIcon}`);

    card.append(flippedCardI,notFlippedCardI);

    return card;

}