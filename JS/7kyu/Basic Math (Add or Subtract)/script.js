// In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

// Note: the input will not be empty.

// Examples
// "1plus2plus3plus4"  --> "10"
// "1plus2plus3minus4" -->  "2"
// ________________________________________________________________________

function calculate(str) {
    const arr = str.match(/plus|minus|\d+/gi);
    const res = arr.reduce((sum, elem, index, arr) => {
        if (Number.isFinite(Number(elem))) {
            if (arr[index - 1] === 'minus') {
                return sum - Number(elem);
            }

            return sum + Number(elem);
        }
        return sum;
    }, 0);
    return res.toString();
}

console.log(calculate('1plus2plus3plus4'));
