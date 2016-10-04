const VendingMachine = require('../lib/vending-machine');
const should = require('should');

describe('Vending Machine', () => {
    var vendingMachine;

    beforeEach(() => {
        vendingMachine = VendingMachine();
    });

    describe(`with 'Accept Change' feature`, () => {
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

        it('should place rejected coins in coin return', () => {
            const insertedCoin = {
                type: "chocolate"
            };
            vendingMachine.insertCoin(insertedCoin);

            should.equal(vendingMachine.getDisplayed(), 'INSERT COIN');
            const returnedCoins = vendingMachine.getReturnedCoins();

            should.deepEqual(returnedCoins, [insertedCoin]);
        });

        it('should have no returned coins at start', () => {
            const returnedCoins = vendingMachine.getReturnedCoins();

            returnedCoins.should.be.empty();
        });

        it('should return all rejected coins', () => {
            const expectedCoins = [
                {type: "chocolate"},
                {type: "Canadian coin, eh"}
            ];
            vendingMachine.insertCoin(expectedCoins[0]);
            vendingMachine.insertCoin(expectedCoins[1]);
            const returnedCoins = vendingMachine.getReturnedCoins();

            should.deepEqual(returnedCoins, expectedCoins);
        });
    });

    describe(`with 'Select Product' feature`, () => {
        it('should display price of cola', () => {
            vendingMachine.pressColaButton();
            const displayed = vendingMachine.getDisplayed();

            displayed.should.equal('$1.00');
        });

        it('should display price of chips', () => {
            vendingMachine.pressChipsButton();
            const displayed = vendingMachine.getDisplayed();

            displayed.should.equal('$0.50');
        });
    });
});