// // Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.

// // Modern Roman numerals are written by expressing each digit separately starting with the leftmost digit and skipping any digit with a value of zero. There cannot be more than 3 identical symbols in a row.

// // In Roman numerals:

// // 1990 is rendered: 1000=M + 900=CM + 90=XC; resulting in MCMXC.
// // 2008 is written as 2000=MM, 8=VIII; or MMVIII.
// // 1666 uses each Roman symbol in descending order: MDCLXVI.
// // Example:

// //    1 -->       "I"
// // 1000 -->       "M"
// // 1666 --> "MDCLXVI"
// // Help:

// // Symbol    Value
// // I          1
// // V          5
// // X          10
// // L          50
// // C          100
// // D          500
// // M          1,000

type rimLetters = 'M' | 'D' | 'C' | 'L' | 'X' | 'V' | 'I';

export function solution(number: number): string {
    const rimNum: { [K in rimLetters]: number } = {
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1,
    };
    const keysOfRemNum = Object.keys(rimNum);

    let result = '';

    for (const [key, value] of Object.entries(rimNum)) {
        if (key === 'D' || key === 'L' || key === 'V') {
            const nextValue =
                rimNum[keysOfRemNum[keysOfRemNum.indexOf(key) + 1] as rimLetters] || 0;

            do {
                if (number - value >= 0) {
                    number -= value;
                    result += key;
                } else if (number - (value - nextValue) >= 0) {
                    number -= value - nextValue;
                    result += keysOfRemNum[keysOfRemNum.indexOf(key) + 1] + key;
                }
            } while (number >= value - nextValue);
        } else {
            const secondNextValue =
                rimNum[keysOfRemNum[keysOfRemNum.indexOf(key) + 2] as rimLetters] || 0;

            do {
                if (number - value >= 0) {
                    number -= value;
                    result += key;
                } else if (number - (value - secondNextValue) >= 0) {
                    number -= value - secondNextValue;
                    result += keysOfRemNum[keysOfRemNum.indexOf(key) + 2] + key;
                }
            } while (number >= value - secondNextValue);
        }
    }
    return result;
}

// console.log(solution(2008));
