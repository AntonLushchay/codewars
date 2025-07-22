// Complete the method/function so that it converts dash/underscore delimited words into camel casing.
// The first word within the output should be capitalized only if the original word was capitalized
// (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always
// capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

toCamelCase = (str) => {
    return str.replace(/([-_])(.)/g, (match, match1, match2) => {
        return match2.toUpperCase();
    });
};

console.log(toCamelCase('the-stealth-warrior'));

