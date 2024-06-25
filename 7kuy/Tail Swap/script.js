/* Description

You'll be given a list of two strings, and each will contain exactly one colon (":") in the middle (but not at beginning or end). The length of the strings, before and after the colon, are random.

Your job is to return a list of two strings (in the same order as the original list), but with the characters after each colon swapped.
*/

function tailSwap(arr) {
    let newArr1 = [];
    let newArr2 = [];
    let newArr3 = [];
    for (const i in arr) {
        newArr1.push(arr[i].split(':')[0]);
        newArr2.push(arr[i].split(':')[1]);
    }
    newArr3.push(newArr1[0] + ':' + newArr2[1], newArr1[1] + ':' + newArr2[0]);

    return newArr3;
}

console.log(tailSwap(['abc:123', 'cde:456']));
