import { describe, it, expect } from 'vitest';
import {twoSum } from './twoSum.js';

describe('twoSum', () => {
    it('finds a pair at the start', () => {
        expect(twoSum([2,7,11,15], 9)).toEqual([0,1]);
    });
    it('finds a pair later on', () => {
        expect(twoSum([3,2,4], 6)).toEqual([1,2])
    });
});