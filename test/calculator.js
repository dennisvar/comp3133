const assert = require("chai").assert
const calc = require('../app/calculator')

describe('tests', () => {
    it('add(5, 2) expected result 7 PASS', () => {
        assert.equal(calc.add(5, 2), 7)
    });
    it('add(5, 2) expected result 8 FAIL', () => {
        assert.equal(calc.add(5, 2), 8)
    });
    it('sub(5, 2) expected result 3 PASS', () => {
        assert.equal(calc.sub(5, 2), 3)
    });
    it('sub(5, 2) expected result 5 FAIL', () => {
        assert.equal(calc.sub(5, 2), 5)
    });
    it('mul(5, 2) expected result 10 PASS', () => {
        assert.equal(calc.mul(5, 2), 10)
    });
    it('mul(5, 2) expected result 12 FAIL', () => {
        assert.equal(calc.mul(5, 2), 12)
    });
    it('div(10, 2) expected result 5 PASS', () => {
        assert.equal(calc.div(10, 2), 5)
    });
    it('div(10, 2) expected result 2 FAIL', () => {
        assert.equal(calc.div(10, 2), 2)
    });
});