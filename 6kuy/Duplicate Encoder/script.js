// The goal of this exercise is to convert a string to a new string
// where each character in the new string is "(" if that character
// appears only once in the original string, or ")" if that character
// appears more than once in the original string. Ignore capitalization
// when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

// Notes:
// Assertion messages may be unclear about what they display in some
// languages. If you read "...It Should encode XXX", the "XXX" is the
// expected result, not the input!

duplicateEncode = (word) => {
    const array = word.toLowerCase().split('');

    const obj = array.reduce((acc, elem) => {
        acc[elem] ? (acc[elem] += 1) : (acc[elem] = 1);
        return acc;
    }, {});

    return array
        .map((elem) => {
            if (obj[elem] > 1) {
                return ')';
            } else {
                return '(';
            }
        })
        .join('');
};

console.log(duplicateEncode('Success'));

