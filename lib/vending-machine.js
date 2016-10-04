module.exports = () => {
    var value = 0;
    return {
        getDisplayed: () => {
            return value || 'INSERT COIN';
        },
        insertCoin: (coin) => {
            if(coin.type === 'nickel') {
                value = 5;
            } else if (coin.type === 'dime') {
                value = 10;
            }
        }
    };
};