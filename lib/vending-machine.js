module.exports = () => {
    var value = 0;
    var rejectedCoins = [];
    return {
        getDisplayed: () => {
            return value || 'INSERT COIN';
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
        },
        getReturnedCoins: () => {
            return rejectedCoins;
        }
    };
};