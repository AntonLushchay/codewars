import solution = require('./script');
import { assert, config } from 'chai';
config.truncateThreshold = 0;

describe('Sample Test Cases', function () {
    it('Should return a CamelCased string', function () {
        assert.equal(solution.camelCase(''), '');
        assert.equal(solution.camelCase('test case'), 'TestCase');
        assert.equal(solution.camelCase('camel case method'), 'CamelCaseMethod');
        assert.equal(solution.camelCase('say hello'), 'SayHello');
        assert.equal(solution.camelCase('camel case word'), 'CamelCaseWord');
    });
});
