/**
 * Returns the count for the number of arrays inside a given array.
 * @param {Array} array An array of numbers and/or arrays.
 * @returns {number} The number of arrays inside the given array.
 */
function countNumberOfArrays(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            count++;
        }
    }
    return count;
}

module.exports = countNumberOfArrays;
