module.exports = () => {
    var value = 0;
    return {
        getDisplayed: () => {
            return value || 'INSERT COIN';
        },
        insertCoin: () => {
            value = 5;
        }
    };
};