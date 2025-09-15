// Let us begin with an example:

// Take a number: 56789. Rotate left, you get 67895.

// Keep the first digit in place and rotate left the other digits: 68957.

// Keep the first two digits in place and rotate the other ones: 68579.

// Keep the first three digits and rotate left the rest: 68597. Now it is over since keeping the first four it remains only one digit which rotated is itself.

// You have the following sequence of numbers:

// 56789 -> 67895 -> 68957 -> 68579 -> 68597

// and you must return the greatest: 68957.

function maxRot(n) {
    n = n.toString();
    // console.log(typeof n);
    rotatedArr = [n];
    // let str = '';
    for (let i = 1; i <= 4; i++) {
        let str = '';
        str += n.slice(i);
        // console.log(str, i, 'Это стр поле slice');
        for (let j = 0; j < i; j++) {
            str += n[j];
            // console.log(n[j], 'это n[j]');
            console.log(str, i, j);
        }
        n = str;
        rotatedArr.push(str);
        console.log(str);
    }
    console.log(rotatedArr);
}

console.log(maxRot(56789));
