
/**
 * @param {string[]} words
 * @return {string}
 */
var oddString = function (words) {
    const ALL_DIFFERENCE_INTEGER_ARRAYS_THE_SAME = "";
    const first = createDifferenceIntegerArray(words[0]);
    const second = createDifferenceIntegerArray(words[1]);

    for (let i = 2; i < words.length; ++i) {
        const current = createDifferenceIntegerArray(words[i]);
        if (!arraysAreTheSame(first, current) && !arraysAreTheSame(second, current)) {
            return words[i];
        }
        if (!arraysAreTheSame(first, current)) {
            return words[0];
        }
        if (!arraysAreTheSame(second, current)) {
            return words[1];
        }
    }
    return ALL_DIFFERENCE_INTEGER_ARRAYS_THE_SAME;
};

/**
 * @param {string} word
 * @return {number[]}
 */
function createDifferenceIntegerArray(word) {
    const differenceIntegerArray = new Array(word.length - 1).fill(0);
    for (let i = 0; i < word.length - 1; ++i) {
        differenceIntegerArray[i] = word.codePointAt(i + 1) - word.codePointAt(i);
    }
    return differenceIntegerArray;
}

/**
 * @param {number[]} first
 * @param {number[]} second
 * @return {boolean}
 */
function arraysAreTheSame(first, second) {
    if (first.length !== second.length) {
        return false;
    }
    for (let i = 0; i < first.length; ++i) {
        if (first[i] !== second[i]) {
            return false;
        }
    }
    return true;
}
