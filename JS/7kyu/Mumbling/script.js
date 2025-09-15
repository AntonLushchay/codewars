// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.
// ________________________________________________________

const accum = (s) =>
    s
        .split('')
        .map((elem, indx) => elem.charAt(0).toUpperCase() + elem.toLowerCase().repeat(indx))
        .join('-');

console.log(accum('ZpglnRxqenU'));
