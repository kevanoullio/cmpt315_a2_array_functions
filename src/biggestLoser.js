/**
 * Returns the loser name with the biggest tally of loser_points. If a player is the winner,
 * the loser_points are subtracted, and if a player is a loser, then the loser_points are added.
 * It finds the player with the largest tally of loser_points.
 * @param {Array} array An array of objects representing players.
 * @returns {string} The loser name with the biggest tally of loser_points.
 */
function biggestLoser(array) {
    let loser_count = {};

    for (let i = 0; i < array.length; i++) {
        let winner = array[i].winner;
        let loser = array[i].loser;

        // Check if the winner is already in the loser_count object.
        if (loser_count[winner] === undefined) {
            // Assign starting value. The winner gets negative loser_points.
            loser_count[winner] = -array[i].loser_points;
        } else {
            // The winner gets negative loser_points.
            loser_count[winner] - array[i].loser_points;
        }

        // Check if the loser is already in the loser_count object.
        if (loser_count[loser] === undefined) {
            // Assign starting value. The loser gets positive loser_points.
            loser_count[loser] = array[i].loser_points;
        } else {
            // The loser gets positive loser_points.
            loser_count[loser] + array[i].loser_points;
        }
    }

    let biggestLoser = "";
    let biggestLoserPoints = 0;

    // Find the biggest loser.
    for (let loser in loser_count) {
        if (loser_count[loser] > biggestLoserPoints) {
            biggestLoser = loser;
            biggestLoserPoints = loser_count[loser];
        }
    }

    return biggestLoser;
}

module.exports = biggestLoser;
