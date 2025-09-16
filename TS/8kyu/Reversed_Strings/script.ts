// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

export const solution = (str: string): string => {
    return str.split('').reverse().join('');
};
