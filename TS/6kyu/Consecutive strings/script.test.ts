import { longestConsec } from './script';
import { assert } from 'chai';

describe('Fixed Tests', function () {
    it('Basic tests longestConsec', function () {
        assert.strictEqual(
            longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], 2),
            'abigailtheta',
        );
        assert.strictEqual(
            longestConsec(
                [
                    'ejjjjmmtthh',
                    'zxxuueeg',
                    'aanlljrrrxx',
                    'dqqqaaabbb',
                    'oocccffuucccjjjkkkjyyyeehh',
                ],
                1,
            ),
            'oocccffuucccjjjkkkjyyyeehh',
        );
        assert.strictEqual(
            longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 3),
            'ixoyx3452zzzzzzzzzzzz',
        );
    });
});
