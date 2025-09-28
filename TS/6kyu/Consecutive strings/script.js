"use strict";
// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.
exports.__esModule = true;
exports.longestConsec = void 0;
function longestConsec(strarr, k) {
    var answer;
    if (strarr.length > 0 && k < strarr.length && k > 0) {
        answer = strarr.reduce(function (acc, elem, indx) {
            var res = elem;
            for (var i = 1; i < k; i++) {
                if (strarr[indx + i]) {
                    res += strarr[indx + i];
                }
            }
            acc[res] = res.length;
            return acc;
        }, {});
    }
    else {
        answer = '';
    }
    return answer
        ? Object.keys(answer).find(function (key) { return answer[key] === Math.max.apply(Math, Object.values(answer)); })
        : '';
}
exports.longestConsec = longestConsec;
console.log(longestConsec([], 2));
