// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

uniqueInOrder = (iterable) => {
    let massive = null;
    typeof iterable === 'string' ? (massive = iterable.split('')) : (massive = iterable);

    return massive.filter((elem, indx, arr) => {
        if (arr[indx] !== arr[indx - 1]) {
            return elem;
        }
    });
};

console.log(uniqueInOrder('AAAABBBCCDAABBB'));
