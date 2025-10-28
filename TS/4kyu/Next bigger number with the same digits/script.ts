// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

//   12 ==> 21
//  513 ==> 531
// 2017 ==> 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift, None in Rust):

//   9 ==> -1
// 111 ==> -1
// 531 ==> -1

export function nextBigger(n: number): number {
    const digits: number[] = Array.from(String(n), Number);
    
    // Check if number is already in descending order or has all same digits
    const isDescending = digits.every((digit, idx) => 
        idx === digits.length - 1 || digit >= digits[idx + 1]!
    );
    const hasUniquePair = new Set(digits).size > 1;
    
    if (isDescending || !hasUniquePair) return -1;

    // Find next bigger permutation
    let current = n;
    while (true) {
        current++;
        const currentDigits = Array.from(String(current), Number);
        
        // Check if current number is a permutation of original
        if (isPermutation(digits, currentDigits)) {
            return current;
        }
    }
}

function isPermutation(original: number[], candidate: number[]): boolean {
    if (original.length !== candidate.length) return false;
    
    const freq = new Map<number, number>();
    
    // Count frequencies in original
    for (const digit of original) {
        freq.set(digit, (freq.get(digit) || 0) + 1);
    }
    
    // Check frequencies in candidate
    for (const digit of candidate) {
        const count = freq.get(digit);
        if (!count) return false;
        freq.set(digit, count - 1);
    }
    
    return true;
}

// console.log(nextBigger(414));
