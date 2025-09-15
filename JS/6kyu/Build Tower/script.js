// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]
// Go challenge Build Tower Advanced once you have finished this :)

towerBuilder = (nF) => {
    return new Array(nF)
        .fill('*')
        .map((elem, i) => ' '.repeat(nF - 1 - i) + elem.repeat(i + i + 1) + ' '.repeat(nF - 1 - i));
};

console.log(towerBuilder(4));
