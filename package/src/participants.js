/**
 * Returns an array of all the player names (no player should be listed more than once).
 * @param {Array} array An array of objects representing players.
 * @returns {Array} An array of player names.
 */
function participants(array) {
    let names = [];
    for (let i = 0; i < array.length; i++) {
        // Check if the winner is already in the names array.
        if (!names.includes(array[i].winner)) {
            names.push(array[i].winner);
        }
        // Check if the loser is already in the names array.
        if (!names.includes(array[i].loser)) {
            names.push(array[i].loser);
        }
    }
    return names;
}

module.exports = participants;
