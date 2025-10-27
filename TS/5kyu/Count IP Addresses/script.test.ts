// See https://www.chaijs.com for how to use Chai.
import { assert } from 'chai';
import { ipsBetween } from './script';

// TODO Add your tests here
describe('example', function () {
    it('test', function () {
        assert.equal(
            ipsBetween('10.0.0.0', '10.0.0.50'),
            50,
            'ipsBetween("10.0.0.0", "10.0.0.50")',
        );
        assert.equal(
            ipsBetween('20.0.0.10', '20.0.1.0'),
            246,
            'ipsBetween("20.0.0.10", "20.0.1.0")',
        );
    });
});
