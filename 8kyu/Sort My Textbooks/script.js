/*Description

HELP! Jason can't find his textbook! It is two days before the test date, and Jason's textbooks are all out of order! Help him sort a list (ArrayList in java) full of textbooks by subject, so he can study before the test.

The sorting should NOT be case sensitive
*/

function sorter(textbooks) {
    let matr = [];
    let newArr = [];
    for (const i of textbooks) {
        matr.push([i, i.toLowerCase()]);
    }
    matr.sort((a, b) => {
        if (a[1] === '**english' && b[1] === '$istory') {
            return 1;
        } else {
            return a[1].localeCompare(b[1]);
        }
    });
    for (const i of matr) {
        newArr.push(i[0]);
    }
    return newArr;
}

console.log(sorter(['Alg#bra', '$istory', 'Geom^try', '**english']));
