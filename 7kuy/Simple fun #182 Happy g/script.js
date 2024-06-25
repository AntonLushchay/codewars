/*Let's say that "g" is happy in the given string, if there is another "g" immediately to the right or to the left of it.

Find out if all "g"s in the given string are happy.

Example
For str = "gg0gg3gg0gg", the output should be true.

For str = "gog", the output should be false.*/

function gHappy(str) {
    let gCount = 0;
    let happyG = 0;
    for (let i = 0; i <= str.length; i++) {
        if (str[i] == 'g') {
            gCount++;
            if (i == 0) {
                if (str[i + 1] == 'g') {
                    happyG++;
                }
            } else {
                if (str[i - 1] == 'g' || str[i + 1] == 'g') {
                    happyG++;
                }
            }
        }
    }
    if (happyG == gCount) {
        return true;
    } else {
        return false;
    }
}

console.log(gHappy('1'));
