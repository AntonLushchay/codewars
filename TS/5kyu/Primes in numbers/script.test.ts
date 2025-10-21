import { primeFactors } from './script';
import { assert } from 'chai';

function testing(n: number, expected: string) {
    assert.strictEqual(primeFactors(n), expected);
}

describe('Fixed Tests', function () {
    it('Basic tests primeFactors', function () {
        testing(7775460, '(2**2)(3**3)(5)(7)(11**2)(17)');
        testing(7919, '(7919)');
        testing(17 * 17 * 93 * 677, '(3)(17**2)(31)(677)');
    });
});
