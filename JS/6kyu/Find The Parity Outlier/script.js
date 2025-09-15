// You are given an array (which will have a length of at least 3, but could be very large)
// containing integers. The array is either entirely comprised of odd integers or entirely
// comprised of even integers except for a single integer N. Write a method that takes the
// array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)

findOutlier = (arr) => {
    const countEvenNumbers = arr.reduce((countEven, elem) => {
        if (elem % 2 === 0) {
            return countEven + 1;
        }
        return countEven;
    }, 0);

    if (countEvenNumbers > 1) {
        return arr.find((elem) => elem % 2 !== 0);
    } else {
        return arr.find((elem) => elem % 2 === 0);
    }
};

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));
console.log(
    findOutlier([
        99064151, -33733750, 164626324, -115231338, 98961754, -346792, -51458378, -128594016,
        15724562, -169392696, -131952492, -159898228, 97326020, 98767048, 161018988, -72638844,
        -179533686, 89496274, 106421110, 5720090,
    ])
);

