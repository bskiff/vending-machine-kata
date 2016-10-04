const VendingMachine = require('../lib/vending-machine');
const should = require('should');

describe('Vending Machine', () => {
    it('should return an object', () => {
        const vendingMachine = VendingMachine();

        should(vendingMachine).be.an.Object();
    });

    it('should display INSERT COIN when no coins have been inserted', () => {
        const vendingMachine = VendingMachine();

        const value = vendingMachine.getDisplayed();

        should.equal(value, 'INSERT COIN');
    });

    it('should accept nickels', () => {
        const vendingMachine = VendingMachine();

        vendingMachine.insertCoin({
           type: "nickel"
        });
        const value = vendingMachine.getDisplayed();

        should.equal(value, 5);
    });
});