const longestSubstring = require('../questions/longestSubstring')

describe('longestSubstring without repeat', () => {
    
    test('should return correct highest length when only one letter is input', () => {
        const testInput = 'a'
        const actualOutput = longestSubstring(testInput)
        expect(actualOutput).toBe(1)
    });

    test('should return correct highest length when a mix of letters with repeats is input', () => {
        const testInput = 'abcabcbb'
        const actualOutput = longestSubstring(testInput)
        expect(actualOutput).toBe(3)
    });

    test('should return correct highest length when a mix of letters with repeats and longest substring is after a repeat letter is input', () => {
        const testInput = 'pwwkew'
        const actualOutput = longestSubstring(testInput)
        expect(actualOutput).toBe(3)
    });

    test('should retrun correct length when inly a repeated letter is input', () => {
        const testInput = 'bbbb'
        const actualOutput = longestSubstring(testInput)
        expect(actualOutput).toBe(1)
    });
});