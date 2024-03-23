export const UppercaseLetter = (word) => {
    const firstLetter = word[0].toUpperCase()
    const restOfWord = word.slice(1)
    return firstLetter + restOfWord
}