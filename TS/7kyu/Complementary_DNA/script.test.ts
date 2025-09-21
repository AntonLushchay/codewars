import solution = require('./script');
import { assert } from 'chai';

describe('dnaStrand', function () {
    it('Sample tests', function () {
        assert.strictEqual(solution.Kata.dnaStrand('AAAA'), 'TTTT', 'String AAAA is');
        assert.strictEqual(solution.Kata.dnaStrand('ATTGC'), 'TAACG', 'String ATTGC is');
        assert.strictEqual(solution.Kata.dnaStrand('GTAT'), 'CATA', 'String GTAT is');
    });
});
