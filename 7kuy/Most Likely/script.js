/*Create a function which compares two probabilities, returning true if the first one is most likely otherwise false.

For this exercise probability is expressed as two numbers separated by a colon e.g. a probability of 1 in 3 will be 1:3.*/

// function mostLikely(prob1, prob2) {
//     if (prob1.split(':')[0] / prob1.split(':')[1] > prob2.split(':')[0] / prob2.split(':')[1]) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(mostLikely('1:1', '1:2'));

function mostLikely(prob1, prob2) {
    return prob1.split(':')[0] / prob1.split(':')[1] > prob2.split(':')[0] / prob2.split(':')[1];
}

console.log(mostLikely('1:3', '1:2'));
