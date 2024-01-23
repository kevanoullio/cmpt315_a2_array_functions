/**
 * Returns an array of all the player names (no player should be listed more than once).
 * @param {Array} array An array of objects representing players.
 * @returns {Array} An array of player names.
 */
function participants(array) {
    let names = [];
    for (let i = 0; i < array.length; i++) {
        if (!names.includes(array[i].name)) {
            names.push(array[i].name);
        }
    }
    return names;
}

module.exports = participants;
