// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

import { opendir } from 'fs';

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.

// Examples
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False

type Obj = {
    [key: string]: string;
};

const pairs: Obj = {
    ')': '(',
    '}': '{',
    ']': '[',
};

export function validBraces(braces: string): any {
    const arr: string[] = [];
    let answer: boolean;

    if (braces.length % 2 === 0) {
        answer = [...braces].every((elem) => {
            if (Object.values(pairs).includes(elem)) {
                arr.push(elem);
                return true;
            } else {
                if (pairs[elem] === arr[arr.length - 1]) {
                    arr.pop();
                    return true;
                } else {
                    return false;
                }
            }
        });
    } else {
        return false;
    }
    return arr.length === 0 && answer === true ? true : false;
}

// console.log(validBraces('[(])'));
// console.log(validBraces('({})[({})]'));
// console.log(validBraces('(((({{'));
