// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// import { count } from 'console';

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

export function scramble(str1: string, str2: string): boolean {
    const charCount: Record<string, number> = {};

    for (const char of str1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (const char of str2) {
        if (!charCount[char]) {
            return false;
        }
        charCount[char]--;
    }

    return true;
}

// export function scramble(str1: string, str2: string): boolean {
//     const arr1 = Array.from(str1);
//     const arr2 = Array.from(str2);
//     const obj: Record<string, number> = {};

//     return arr2.every((lttr) => {
//         const indx = obj[lttr] || 0;
//         const indexOfLttr = arr1.indexOf(lttr, indx);
//         if (indexOfLttr === -1) {
//             return false;
//         }

//         obj[lttr] = indexOfLttr + 1;

//         return true;
//     });
// }

// let s1 = 'abcdefghijklmnopqrstuvwxyz'.repeat(10000);
// let s2 = 'zyxcba'.repeat(9000);

// console.log(scramble1(s1, s2));
