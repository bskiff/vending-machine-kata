module.exports = () => {
    var value = 0;
    var rejectedCoins = [];
    var displayed = 'INSERT COIN';
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
            displayed = value || 'INSERT COIN';
        },
        getReturnedCoins: () => {
            return rejectedCoins;
        },
        pressColaButton: () => {
            displayed = 'PRICE $1.00';
        },
        pressChipsButton: () => {
            displayed = 'PRICE $0.50';
        },
        pressCandyButton: () => {
            displayed = 'PRICE $0.65';
        }
    };
};