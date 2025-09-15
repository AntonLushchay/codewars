// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 1, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string
// Find The Unique

findUniq = (arr) => {
    const obj = arr.reduce((acc, elem) => {
        acc[elem] = (acc[elem] || 0) + 1;
        return acc;
    }, {});

    return +Object.keys(obj).reduce((acc, elem) => (obj[acc] < obj[elem] ? acc : elem));
};

console.log(findUniq([2, 1, 2]));
