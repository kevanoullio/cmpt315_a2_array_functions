/**
 * Returns the loser name with the biggest tally of loser_points. If a player is the winner,
 * the loser_points are subtracted, and if a player is a loser, then the loser_points are added.
 * It finds the player with the largest tally of loser_points.
 * @param {Array} array An array of objects representing players.
 * @returns {string} The loser name with the biggest tally of loser_points.
 */
function biggestLoser(array) {
    let losers = {};
    for (let i = 0; i < array.length; i++) {
        let winner = array[i].winner;
        let loser = array[i].loser;
        if (losers[winner] === undefined) {
            losers[winner] = -array[i].loser_points;
        } else {
            losers[winner] - array[i].loser_points;
        }
        if (losers[loser] === undefined) {
            losers[loser] = array[i].loser_points;
        } else {
            losers[loser] + array[i].loser_points;
        }
    }
    let biggestLoser = "";
    let biggestLoserPoints = 0;
    for (let loser in losers) {
        if (losers[loser] > biggestLoserPoints) {
            biggestLoser = loser;
            biggestLoserPoints = losers[loser];
        }
    }
    return biggestLoser;
}

module.exports = biggestLoser;
