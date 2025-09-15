// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// ______________________________________________________________________________

'use strict';

// function getCount(str) {
//     return str.split(/[^aeiou]/gi).join('').length;
// }

// const getCount = function NameIfNeeded(str) {
//     return str.split(/[^aeiou]/gi).join('').length;
// };

const getCount = (str) => str.split(/[^aeiou]/gi).join('').length;

console.log(getCount('Antonio bombardirio'));
