//import {dirReduc} from './solution';
//import chai, {assert} from "chai";
//chai.config.truncateThreshold = 0;
import { assert } from 'chai';
import { dirReduc } from './script';

describe('Fixed Tests', function () {
    it('dirReduc', function () {
        assert.deepEqual(dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']), [
            'WEST',
        ]);
        assert.deepEqual(dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH']), []);
    });
});
