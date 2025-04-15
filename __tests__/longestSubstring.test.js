const longestSubsring = require('../questions/longestSubstring')

describe('longestSubstring', () => {
    
    test('should return length of 1 when only one letter is input', () => {
        const testInput = 'a'
        const actualOutput = longestSubsring(testInput)
        expect(actualOutput).toBe(1)
    });
});