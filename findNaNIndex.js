/**
 * Finds all the indexes where NaN is found in a given array of numbers and NaN.
 * @param {Array} array An array of numbers and/or NaN values.
 * @returns {Array} An array of indexes where NaN is found.
 */
function findNaNIndex(array) {
    let indexes = [];
    for (let i = 0; i < array.length; i++) {
        if (isNaN(array[i])) {
            indexes.push(i);
        }
    }
    return indexes;
}

module.exports = findNaNIndex;
