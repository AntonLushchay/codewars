// Find the difference between the square of the sum of the first n natural numbers (1 <= n <= 100) and the sum of their squares.

function differenceOfSquares(n) {
    let sumAndSquare = 0;
    let sumOfSquare = 0;
    for (let i = 1; i <= n; i++) {
        sumAndSquare += i;
        sumOfSquare += Math.pow(i, 2);
    }
    return Math.pow(sumAndSquare, 2) - sumOfSquare;
}

console.log(differenceOfSquares(10));
