// Your task is to construct a building which will be a pile of n cubes.
// The cube at the bottom will have a volume of n^3.
// The cube above will have a volume of (n-1)^3.
// And so on until the top which will have a volume of 1^3.
//
// You are given the total volume m of the building.
// Being given m, can you find the number of cubes n you will have to build?
//
// The parameter of the function findNb will be an integer m and you have to return the integer n such as:
// n^3 + (n-1)^3 + ... + 1^3 = m
//
// If such a n exists, return n. Otherwise, return -1.
//
// Examples:
// findNb(1071225) --> 45
// findNb(91716553919377) --> -1

export function findNb(m: number): number {
    let count: number = 0;
    for (let i = 0; m > 0; i++) {
        m -= (1 + i) ** 3;
        count += 1;
    }
    return m === 0 ? count : -1;
}

// console.log(findNb(40539911473216));
