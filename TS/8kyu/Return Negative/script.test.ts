import { makeNegative } from './script';
import { assert } from 'chai';

describe('makeNegative', function () {
    it('Sample tests', function () {
        assert.equal(makeNegative(42), -42);
    });
});
