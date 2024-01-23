/**
 * Returns an object which lists each participant, and a list of who they've beaten.
 * @param {Array} array An array of objects representing players.
 * @returns {Object} An object which lists each participant, and a list of who they've beaten.
 */
function winnersObject(array) {
    let winners = {};
    for (let i = 0; i < array.length; i++) {
        let winner = array[i].winner;
        let loser = array[i].loser;
        if (winners[winner] === undefined) {
            winners[winner] = [loser];
        } else {
            winners[winner].push(loser);
        }
    }
    return winners;
}

module.exports = winnersObject;
