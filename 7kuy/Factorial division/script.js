// You have to define a function to calculate the division of two factorial numbers. This can be useful for large numbers.

function factorialDivision(n, d) {
    let result = 1n;
    for (let i = BigInt(d) + 1n; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorialDivision(10, 2));
