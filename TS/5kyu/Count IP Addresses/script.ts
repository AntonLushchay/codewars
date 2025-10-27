// Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

// All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

// Examples
// * With input "10.0.0.0", "10.0.0.50"  => return   50
// * With input "10.0.0.0", "10.0.1.0"   => return  256
// * With input "20.0.0.10", "20.0.1.0"  => return  246

export function ipsBetween(start: string, end: string): number {
    const num1 = convertToNum(start);
    const num2 = convertToNum(end);

    return num2 - num1;
}

const convertToNum: (str: string) => number = (str) => {
    const num = str
        .split('.')
        .map((elem) => Number(elem))
        .reverse()
        .reduce((acc, cur, idx) => {
            acc += cur * Math.pow(256, idx);
            return acc;
        }, 0);

    return num;
};

// console.log(ipsBetween('10.0.0.0', '10.0.0.0'));
// console.log(ipsBetween('10.0.0.0', '10.0.0.10'));
// console.log(ipsBetween('10.0.0.0', '10.0.1.10'));
// console.log(ipsBetween('10.0.0.20', '10.0.1.10'));
