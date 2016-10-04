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

    it('should accept dimes', () => {
        const vendingMachine = VendingMachine();

        vendingMachine.insertCoin({
            type: "dime"
        });
        const value = vendingMachine.getDisplayed();

        should.equal(value, 10);
    });

    it('should accept quarters', () => {
        const vendingMachine = VendingMachine();

        vendingMachine.insertCoin({
            type: "quarter"
        });
        const value = vendingMachine.getDisplayed();

        should.equal(value, 25);
    });

    it('should display aggregate value of added coins', () => {
        const vendingMachine = VendingMachine();

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