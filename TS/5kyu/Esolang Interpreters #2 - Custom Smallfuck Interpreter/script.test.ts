import { interpreter } from './script';
import { assert } from 'chai';

describe('Your Interpreter', function () {
    it('should work for some example test cases', function () {
        // Flips the leftmost cell of the tape
        assert.equal(interpreter('*', '00101100'), '10101100');
        // Flips the second and third cell of the tape
        assert.equal(interpreter('>*>*', '00101100'), '01001100');
        // Flips all the bits in the tape
        assert.equal(interpreter('*>*>*>*>*>*>*>*', '00101100'), '11010011');
        // Flips all the bits that are initialized to 0
        assert.equal(interpreter('*>*>>*>>>*>*', '00101100'), '11111111');
        // Goes somewhere to the right of the tape and then flips all bits that are initialized to 1, progressing leftwards through the tape
        assert.equal(interpreter('>>>>>*<*<<*', '00101100'), '00000000');
    });
});
