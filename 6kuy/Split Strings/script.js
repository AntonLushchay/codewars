/*
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/

solution = (str) => {
    const evenStr = str.length % 2 !== 0 ? str.padEnd(str.length + 1, '_') : str;

    return evenStr
        .split('')
        .map((elem, indx, arr) => (indx % 2 === 0 ? arr[indx] + arr[indx + 1] : ''))
        .filter(Boolean);
};

console.log(solution('abcsdfsdfdsfd'));
