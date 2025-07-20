// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// Input = "The sunset sets at twelve o' clock."
// Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

alphabetPosition = (text) => {
    return text
        .toUpperCase()
        .replace(/[^a-zA-Z]/g, '')
        .split('')
        .map((elem) => {
            return elem.replace(/[a-zA-Z]/g, (match) => match.charCodeAt(0) - 65 + 1);
        })
        .join(' ');
};

console.log(alphabetPosition("The sunset sets at twelve o' clock."));

