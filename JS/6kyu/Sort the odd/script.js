// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

sortArray = (arr) => {
    const arrOfEven = arr.filter((elem) => Math.abs(elem % 2) === 1).sort((a, b) => a - b);
    let i = 0;
    arr.forEach((elem, indx) => {
        if (Math.abs(elem % 2) === 1) {
            arr[indx] = arrOfEven[i];
            i++;
        }
    });
    return arr;
};

console.log(sortArray([3, -41, 37, -16, -35, 23, -50, -4, 22, -46, 41, -15, 49, -46, -10]));
