// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. You may assume the argument is non-negative.

function findNextSquare(sq) {
    if (Number.isInteger(Math.sqrt(sq))) {
        sqNum = sq;
        while (!Number.isInteger(Math.sqrt(sqNum + 1))) {
            sqNum++;
        }
        return sqNum + 1;
    } else {
        return -1;
    }
}

console.log(findNextSquare(121));
