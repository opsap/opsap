import { types } from './types.ts';
import { assertEquals } from 'https://deno.land/std@0.172.0/testing/asserts.ts';

Deno.test('should return "shared-types"', () => {
  assertEquals(types(), 'shared-types');
});
