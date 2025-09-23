import { getSum } from './script';
import { assert } from 'chai';

describe('getSum', function () {
    it('Sample Tests', function () {
        assert.strictEqual(getSum(0, -1), -1);
        assert.strictEqual(getSum(0, 1), 1);
    });
});
