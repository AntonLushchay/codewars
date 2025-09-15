// The bloody photocopier is broken... Just as you were sneaking around the office to print off your favourite binary code!

// Instead of copying the original, it reverses it: '1' becomes '0' and vice versa.

// Given a string of binary, return the version the photocopier gives you as a string.

function broken(x) {
    let y = [];
    for (let i = 0; i < x.length; i++) {
        if (x[i] == 0) {
            y.push(1);
        } else {
            y.push(0);
        }
    }
    return y.join('');
}

console.log(broken('1'));
