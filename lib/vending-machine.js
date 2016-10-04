const MESSAGES = {
    insert: 'INSERT COIN',
    price: (price) => `PRICE $${Number(price).toFixed(2)}`
};

const ACCEPTED_COINS = {
    nickel: 5,
    dime: 10,
    quarter: 25
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
            const coinValue = ACCEPTED_COINS[coin.type];
            if(coinValue) {
                value += coinValue;
                displayed = value;
            } else {
                rejectedCoins.push(coin);
            }
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