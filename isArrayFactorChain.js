/**
 * Returns true or false if an array is a factor chain or not.
 * @param {Array} array An array of numbers.
 * @returns {boolean} True if the array is a factor chain, false otherwise.
 */
function isArrayFactorChain(array) {
    if (array.length < 2) {
        return false;
    }
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] % array[i + 1] !== 0) {
            return false;
        }
    }
    return true;
}

module.exports = isArrayFactorChain;
