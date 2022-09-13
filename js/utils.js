export const duplicateArr =(arr)=>{
    return  arr.flatMap(i => [i,i]);
}

export const shuffleArr =(arr)=>{
    return arr.sort((a, b) => 0.5 - Math.random());
}

export const createIcons = (initialCount) => {
    const cardsIcons = [
        'compass',
        'play',
        'bolt',
        'cloud',
        'stop',
        'cogs',
        'atom',
        'basketball-ball'
    ];


    switch (initialCount) {
        case 10:
            return cardsIcons.slice(0, 5);

        case 12:
            return cardsIcons.slice(0, 6);

        case 14:
            return cardsIcons.slice(0, 7);

       case 16:
            return cardsIcons;


        default:
            break;

    }


}