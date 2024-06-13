/*Description

|Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
You can assume that all values are integers. Do not mutate the input array.*/

function invert(array) {
    let newArr = [];
    for (const elmnt of array) {
        newArr.push(elmnt * -1);
    }
    return newArr;
}
console.log(invert([1, 2, 3, 4, 5]));
