# cmpt315_a2_array_functions
This is a library of array functions for CMPT 315 Assignment 2. It's taylored to the "winner/loser/loser_points" data structure of the assignment.
## Purpose
**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for production use. The code is not guaranteed to be stable.
## Usage
**Install it:**
`npm install kevanoullio-cmpt315_a2_array_functions`
**Require it:**
`const _ = require('kevanoullio-cmpt315_a2_array_functions');`
**Call it:**
`const results = _.findNaNIndex(array)`
## Documentation
The following functions are currently implemented:
* `findNaNIndex(array)`: Finds all the indexes where NaN is found in a given array of numbers and NaN.
* `isArrayFactorChain(array)`: Returns true or false if an array is a factor chain or not.
* `countNumberOfArrays(array)`: Returns the count for the number of arrays inside a given array.
* `participants(array)`: Returns an array of all the player names (no player should be listed more than once).
* `winnersObject(array)`: Returns an object which lists each participant, and a list of who they've beaten.
* `biggestLoser(array)`: Returns the loser name with the biggest tally of loser_points. If a player is the winner, the loser_points are subtracted, and if a player is a loser, then the loser_points are added. It finds the player with the largest tally of loser_points.
