import { evenOrOdd } from './script';
import { assert } from 'chai';

describe('Example tests', function () {
    it("evenOrOdd(1) should return 'Odd'", function () {
        assert.equal(evenOrOdd(1), 'Odd');
    });
    it("evenOrOdd(2) should return 'Even'", function () {
        assert.equal(evenOrOdd(2), 'Even');
    });
    it("evenOrOdd(-1) should return 'Odd'", function () {
        assert.equal(evenOrOdd(-1), 'Odd');
    });
    it("evenOrOdd(-2) should return 'Even'", function () {
        assert.equal(evenOrOdd(-2), 'Even');
    });
    it("evenOrOdd(0) should return 'Even'", function () {
        assert.equal(evenOrOdd(0), 'Even');
    });
});
