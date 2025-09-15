// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

export function evenOrOdd(a: number): string {
    return a % 2 === 0 ? `Even` : `Odd`;
}

console.log(evenOrOdd(7));
