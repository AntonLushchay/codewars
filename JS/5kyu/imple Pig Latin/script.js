// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

pigIt = (str) => {
    return str
        .match(/\w+|[^\w+]/g)
        .map((elem) => {
            if (/\W+/.test(elem)) {
                return elem;
            } else {
                const arr = elem.split('');
                arr.push(arr.shift(), 'ay');
                return arr.join('');
            }
        })

        .join('');
};

console.log(pigIt('Pig latin, is cool !'));
