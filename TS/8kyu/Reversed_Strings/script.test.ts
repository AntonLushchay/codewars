import solution = require('./script');
// import the type of assertion library you wish to use (Chai recommended)
import { assert } from 'chai';

describe('Sample Test Cases', function () {
    it('Should return a string', function () {
        assert.equal(solution.solution('world'), 'dlrow');
        assert.equal(solution.solution('hello'), 'olleh');
        assert.equal(solution.solution(''), '');
        assert.equal(solution.solution('h'), 'h');
    });
});
