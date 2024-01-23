/**
 * Returns an object which lists each participant, and a list of who they've beaten.
 * @param {Array} array An array of objects representing players.
 * @returns {Object} An object which lists each participant, and a list of who they've beaten.
 */
function winnersObject(array) {
    let participants = {};
    // Add each winner and who they've beaten to the participants object.
    for (let i = 0; i < array.length; i++) {
        // Extract the winner and loser from the current match.
        let winner = array[i].winner;
        let loser = array[i].loser;
        // Check if the winner is already in the participants object.
        if (participants[winner] === undefined) {
            // If the winner is not in the participants object, add them and an empty array.
            participants[winner] = [];
            // Add the loser to the winner's list of beaten players.
            participants[winner].push(loser);
        }
        else {
            // If the winner is already in the participants object, add the loser to the winner's list of beaten players.
            participants[winner].push(loser);
        }
        // Check if the loser is already in the participants object.
        if (participants[loser] === undefined) {
            // If the loser is not in the participants object, add them and an empty array.
            participants[loser] = [];
        }
    }
    return participants;
}

module.exports = winnersObject;
