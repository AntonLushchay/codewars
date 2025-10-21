// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
// Each of 5 dice can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

// Example scoring

//  Throw       Score
//  ---------   ------------------
//  5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
//  1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
//  2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
// Note: your solution must not modify the input array.

export function score(dice: number[]): number {
    const obj: Record<number, number> = {};

    let sum = 0;

    for (const num of dice) {
        obj[num] = (obj[num] || 0) + 1;
    }

    for (let [key, val] of Object.entries(obj)) {
        while (val >= 3) {
            val -= 3;
            if (+key === 1) {
                sum += +key * 1000;
            } else {
                sum += +key * 100;
            }
        }

        if (val < 3 && val > 0) {
            if (+key === 1) {
                sum += 100 * val;
            } else if (+key === 5) {
                sum += 50 * val;
            }
        }
    }

    return sum;
}

// console.log(score([2, 4, 4, 5, 4]));
