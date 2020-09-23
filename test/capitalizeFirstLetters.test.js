// test/capitalizeFirst.test.js
const assert = require('assert');
const capitalizeFirstLetters = require('../capitalizeFirstLetters');

console.log('cap',capitalizeFirstLetters('walid'))
describe('capitalize',() => {
    it("it s a function that take 1 argument",() => {
        assert.strictEqual(typeof capitalizeFirstLetters, 'function' );
        assert.strictEqual(capitalizeFirstLetters.length, 1)
    })

    it("transform walid correctly", () => {
        assert.strictEqual(capitalizeFirstLetters('walid'), 'Walid' );
    })

    it("work with many word in 1 string", () => {
        assert.strictEqual(capitalizeFirstLetters('walid nemri'), 'Walid Nemri' );
    })

    it("work whit a empty string", () => {
        assert.strictEqual(capitalizeFirstLetters(''), '' );
    })
});





