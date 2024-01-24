/**
 * Returns true or false if an array is a factor chain or not.
 * @param {Array} array An array of numbers.
 * @returns {boolean} True if the array is a factor chain, false otherwise.
 */
function isArrayFactorChain(array) {
    // An array of less than 2 elements cannot be a factor chain.
    if (array.length < 2) {
        return false;
    }
    // Check if each element is a factor of the next element.
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i + 1] % array[i] !== 0) {
            return false;
        }
    }
    return true;
}

module.exports = isArrayFactorChain;
