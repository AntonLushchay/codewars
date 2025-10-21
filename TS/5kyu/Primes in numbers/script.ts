// Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

//  "(p1**n1)(p2**n2)...(pk**nk)"
// with the p(i) in increasing order and n(i) empty if n(i) is 1.

// Example: n = 86240 should return "(2**5)(5)(7**2)(11)"

export const primeFactors = (n: number): string => {
    let smplNum: number = 2;
    let output = '';

    const obj: Record<number, number> = {};

    while (!(n === 1)) {
        if (n % smplNum === 0) {
            obj[smplNum] = (obj[smplNum] || 0) + 1;
            n /= smplNum;
        } else {
            smplNum++;
        }
    }

    for (const [key, val] of Object.entries(obj)) {
        if (val > 1) {
            output += `(${key}**${val})`;
        } else {
            output += `(${key})`;
        }
    }

    return output;
};

// console.log(primeFactors(86240));
