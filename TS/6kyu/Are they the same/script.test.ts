import { comp } from './script';
import { assert } from 'chai';

function testing(a1: number[] | null, a2: number[] | null, expected: boolean) {
    var s1 = '';
    var s2 = '';
    if (a1 !== null) s1 = a1.toString();
    else s1 = 'null';
    if (a2 !== null) s2 = a2.toString();
    else s2 = 'null';
    assert.strictEqual(comp(a1, a2), expected, 'Error with [' + s1 + '] / [' + s2 + ']\n');
}

describe('Fixed Tests comp', function () {
    it('Basic tests', function () {
        var a1: number[] = [121, 144, 19, 161, 19, 144, 19, 11];
        var a2: number[] = [
            11 * 11,
            121 * 121,
            144 * 144,
            19 * 19,
            161 * 161,
            19 * 19,
            144 * 144,
            19 * 19,
        ];
        testing(a1, a2, true);

        a1 = [121, 144, 19, 161, 19, 144, 19, 11];
        a2 = [11 * 21, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];
        testing(a1, a2, false);
    });
});
