function longestSubstring(str) {
    let longestRunning = 0
    let longest = 1
    let usedLetters = ""
    const strArray = str.split("")
    strArray.forEach((letter) => {
        if (usedLetters.includes(letter)) {
            if (longestRunning > longest) longest = longestRunning
            longestRunning = 1
        }
        else {
            longestRunning ++
            usedLetters = usedLetters + letter
        }
    });
    return longest
}

module.exports = longestSubstring