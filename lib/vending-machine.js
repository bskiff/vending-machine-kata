const MESSAGES = {
    insert: 'INSERT COIN',
    price: (price) => `PRICE $${Number(price).toFixed(2)}`
};

module.exports = () => {
    var value = 0;
    var rejectedCoins = [];
    var displayed = MESSAGES.insert;
    return {
        getDisplayed: () => {
            return displayed;
        },
        insertCoin: (coin) => {
            if(coin.type === 'nickel') {
                value += 5;
            } else if (coin.type === 'dime') {
                value += 10;
            } else if (coin.type === 'quarter') {
                value += 25;
            } else {
                rejectedCoins.push(coin);
            }
            displayed = value || MESSAGES.insert;
        },
        getReturnedCoins: () => {
            return rejectedCoins;
        },
        pressColaButton: () => {
            displayed = MESSAGES.price(1.00);
        },
        pressChipsButton: () => {
            displayed = MESSAGES.price(0.50);
        },
        pressCandyButton: () => {
            displayed = MESSAGES.price(0.65);
        }
    };
};