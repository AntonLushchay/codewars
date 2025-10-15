// The Fibonacci numbers are the numbers in the following integer sequence (Fn): 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

// such that:

// F(0)=0
// F(1)=1
// F(2)=F(2−1)+F(2−2) = 1
// F(3)=F(3−1)+F(3−2) = 3

// Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying:

// F(n)∗F(n+1)=prod

// Your function takes an integer (prod) and returns an array/tuple (check the function signature/sample tests for the return type in your language):

// if F(n) * F(n+1) = prod:
// (F(n), F(n+1), true)
// If you do not find two consecutive F(n) verifying F(n) * F(n+1) = prod:
// (F(n), F(n+1), false)
// where F(n) is the smallest one such as F(n) * F(n+1) > prod.
// Examples:
// 714 ---> (21, 34, true)
// --> since F(8) = 21, F(9) = 34 and 714 = 21 * 34

// 800 --->  (34, 55, false)
// --> since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55

export const productFib = (prod: number): [number, number, boolean] => {
    const fibArr = [0, 1];

    let output: [number, number, boolean];

    while (true) {
        let fib1 = fibArr.at(-2) as number;
        let fib2 = fibArr.at(-1) as number;

        if (fib1 * fib2 === prod) {
            output = [fib1, fib2, true];
            break;
        } else if (fib1 * fib2 > prod) {
            output = [fib1, fib2, false];
            break;
        } else {
            fibArr.push(fib1 + fib2);
        }
    }

    return output;
};

// console.log(productFib(4895));
