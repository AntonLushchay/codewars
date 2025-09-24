import { countSmileys } from './script';
import { assert } from 'chai';

describe('Basic testing', function () {
    it('examples', () => {
        assert.equal(countSmileys([]), 0);
        assert.equal(countSmileys([':D', ':~)', ';~D', ':)']), 4);
        assert.equal(countSmileys([':)', ':(', ':D', ':O', ':;']), 2);
        assert.equal(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1);
    });
});
