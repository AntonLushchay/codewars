// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

function addBinary(a, b) {
    num = a + b;
    return num.toString(2);
}

console.log(addBinary(1, 1));
