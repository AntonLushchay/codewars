// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#, empty table in COBOL) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

function divisors(integer) {
    let res = [];
    for (let i = 2; i < integer; i++) {
        if (Number.isInteger(integer / i)) {
            res.push(i);
        }
    }
    if (res[0] === undefined) {
        return integer + ' is prime';
    } else {
        return res;
    }
}

console.log(divisors(13));
