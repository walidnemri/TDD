
const assert = require('assert');
const Rectangle =  require('../Rectangle.js');


describe('Rectangle',() => {
    it('Rectangle is a class', () => {
        assert.strictEqual(typeof new Rectangle(2,3), "object")
    });

    it(" return true if same length", () => {
        assert.strictEqual(new Rectangle(3,3).isSquare(), false)
    })
    it(" return the surface", () => {
        assert.strictEqual(new Rectangle(13,7).getArea(), 91)
    })
    it(" return the perimeter", () => {
        assert.strictEqual(new Rectangle(13,7).getPerimeter(), 40)
    })
})