const VendingMachine = require('../lib/vending-machine');
const should = require('should');

describe('Vending Machine', () => {
    it('should return an object', () => {
        const vendingMachine = VendingMachine();

        should(vendingMachine).be.an.Object();
    });
});