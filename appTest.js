/* eslint-env mocha */
import assert from 'assert';
import Calculator from './helpers';

const Calc = new Calculator(5, 5);

describe('Calculator processes', () => {
  it('should return 10 when adding 5 and 5', () => {
    assert.equal(10, Calc.add());
  });
  it('should return 0 when subtracting 5 from 5', () => {
    assert.equal(0, Calc.subtract());
  });
  it('should return 25 when multiplying 5 by 5', () => {
    assert.equal(25, Calc.multiply());
  });
  it('should return 1 when dividing 5 by 5', () => {
    assert.equal(1, Calc.divide());
  });
});
