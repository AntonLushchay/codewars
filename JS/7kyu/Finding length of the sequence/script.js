/*As part of this kata, you need to find the length of the sub-array that begins and ends with the specified number.

For example, if the array arr is [0, -3, 7, 4, 0, 3, 7, 9], finding the length of the sub-array that begins and ends with 7s would return 5.

For sake of simplicity, there will only be numbers (positive or negative) in the supplied array.

If there are less or more than two occurrences of the number to search for, return 0.*/

function lengthOfSequence(arr, n) {
    let x = false;
    let count = 0;
    let y = 0;
    let z = 0;
    for (const num of arr) {
        if (num == n) {
            z++;
        }
    }
    if (z <= 1 || z >= 3) {
        return 0;
    }
    for (const i in arr) {
        if (arr[i] == n) {
            x = true;
            y++;
        }
        if (x) {
            count++;
        }
        if (y == 2) {
            x = false;
        }
    }
    if (arr == 1) {
        return 0;
    } else {
        return count;
    }
}

console.log(lengthOfSequence([4, 1, 1, 1, 4], 4));
