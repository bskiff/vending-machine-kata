const VendingMachine = require('../lib/vending-machine');
const should = require('should');

describe('Vending Machine', () => {
    var vendingMachine;
    beforeEach(() => {
        vendingMachine = VendingMachine();
    });

    it('should display INSERT COIN when no coins have been inserted', () => {
        const value = vendingMachine.getDisplayed();

        should.equal(value, 'INSERT COIN');
    });

    it('should accept nickels', () => {
        vendingMachine.insertCoin({
           type: "nickel"
        });
        const value = vendingMachine.getDisplayed();

        should.equal(value, 5);
    });

    it('should accept dimes', () => {
        vendingMachine.insertCoin({
            type: "dime"
        });
        const value = vendingMachine.getDisplayed();

        should.equal(value, 10);
    });

    it('should accept quarters', () => {
        vendingMachine.insertCoin({
            type: "quarter"
        });
        const value = vendingMachine.getDisplayed();

        should.equal(value, 25);
    });

    it('should display aggregate value of added coins', () => {
        vendingMachine.insertCoin({
            type: "nickel"
        });
        should.equal(vendingMachine.getDisplayed(), 5);

        vendingMachine.insertCoin({
            type: "dime"
        });
        should.equal(vendingMachine.getDisplayed(), 15);

        vendingMachine.insertCoin({
            type: "quarter"
        });
        should.equal(vendingMachine.getDisplayed(), 40);
    });
});