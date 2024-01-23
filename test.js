const findNaNindex = require("./findNaNIndex");
const isArrayFactorChain = require("./isArrayFactorChain");
const countNumberOfArrays = require("./countNumberOfArrays");
const participants = require("./participants");
const winnersObject = require("./winnersObject");
const biggestLoser = require("./biggestLoser");

const matches = [
    { winner: 'Alice', loser: 'Bob',   loser_points: 3 },
    { winner: 'Carol', loser: 'Dean',  loser_points: 1 },
    { winner: 'Elise', loser: 'Bob',   loser_points: 2 },
    { winner: 'Elise', loser: 'Carol', loser_points: 4 },
    { winner: 'Alice', loser: 'Carol', loser_points: 2 },
    { winner: 'Carol', loser: 'Dean',  loser_points: 3 },
    { winner: 'Dean',  loser: 'Elise', loser_points: 2 },
]


// Test Data for findNaNindex():
const results1 = cmpt315_a2_array_functions.findNaNIndex([2, NaN, 8, 16, 32]) // => [1]
const results2 = cmpt315_a2_array_functions.findNaNIndex([2, 4, NaN, 16, 32, NaN]) // => [2,5]
const results3 = cmpt315_a2_array_functions.findNaNIndex([2, 4, 16, 32]) // => []


// Test Data for isArrayFactorChain():
const data = [2, 4, 8, 16, 32]
// 2 is a factor of 4
// 4 is a factor of 8
// 8 is a factor of 16
// 16 is a factor of 32
// therefore the result is true
const results4 = cmpt315_a2_array_functions.isArrayFactorChain([2, 4, 8, 16, 32]) // => true
const results5 = cmpt315_a2_array_functions.isArrayFactorChain([2, 4, 8, 16, 32, 68]) // => false


// Test Data for countNumberOfArrays():
const results6 = cmpt315_a2_array_functions.countNumberOfArrays([2,8,[6],3,3,5,3,4,[5,4]]) // => 2
const results7 = cmpt315_a2_array_functions.countNumberOfArrays([2,8,[6,3,3],[4],5,[3,4,[5,4]]]) // => 3


// Test Data for participants():
const results8 = cmpt315_a2_array_functions.participants(matches) // => ['Alice', 'Bob', 'Carol', 'Dean', 'Elise']


// Test Data for winnersObject():
const results9 = cmpt315_a2_array_functions.winnersObject(matches) 
/* expected output:
  {
    'Alice': ['Bob', 'Carol'],
    'Bob':   [],
    'Carol': ['Dean'],
    'Dean':  ['Elise'],
    'Elise': ['Bob', 'Carol'],
  }
*/

// Test Data for biggestLoser():
const results10 = cmpt315_a2_array_functions.biggestLoser(matches) // => 'Bob',
