// Import assert module:
const assert = require("assert");

// Import functions to test from index.js (see package.json file for main entry spec)):
const {
  findNaNIndex,
  isArrayFactorChain,
  countNumberOfArrays,
  participants,
  winnersObject,
  biggestLoser
} = require("cmpt315_a2_array_functions");


const matches = [
    { winner: "Alice", loser: "Bob",   loser_points: 3 },
    { winner: "Carol", loser: "Dean",  loser_points: 1 },
    { winner: "Elise", loser: "Bob",   loser_points: 2 },
    { winner: "Elise", loser: "Carol", loser_points: 4 },
    { winner: "Alice", loser: "Carol", loser_points: 2 },
    { winner: "Carol", loser: "Dean",  loser_points: 3 },
    { winner: "Dean",  loser: "Elise", loser_points: 2 },
]


// Test Data for findNaNIndex():
const results1 = findNaNIndex([2, NaN, 8, 16, 32]) // => [1]
const expected1 = [1];
const results2 = findNaNIndex([2, 4, NaN, 16, 32, NaN]) // => [2,5]
const expected2 = [2,5];
const results3 = findNaNIndex([2, 4, 16, 32]) // => []
const expected3 = [];

// Print results:
console.log("\nTESTING findNaNIndex():");

console.log("\nfindNaNIndex([2, NaN, 8, 16, 32]):");
console.log("Should return: " + JSON.stringify(expected1));
console.log("Actual return: " + JSON.stringify(results1));
try {
  assert.deepEqual(results1, expected1);
  console.log("=> Test [PASSED]");
} catch (error) {
  if (error instanceof assert.AssertionError) {
    console.log("=> Test [FAILED]");
  } else {
    console.log("=> An error occurred:", error);
  }
}

console.log("\nfindNaNIndex([2, 4, NaN, 16, 32, NaN]):");
console.log("Should return: " + JSON.stringify(expected2));
console.log("Actual return: " + JSON.stringify(results2));
try {
  assert.deepEqual(results2, expected2);
  console.log("=> Test [PASSED]");
} catch (error) {
  if (error instanceof assert.AssertionError) {
    console.log("=> Test [FAILED]");
  } else {
    console.log("=> An error occurred:", error);
  }
}

console.log("\nfindNaNIndex([2, 4, 16, 32]):");
console.log("Should return: " + JSON.stringify(expected3));
console.log("Actual Return: " + JSON.stringify(results3));
try {
  assert.deepEqual(results3, expected3);
  console.log("=> Test [PASSED]");
} catch (error) {
  if (error instanceof assert.AssertionError) {
    console.log("=> Test [FAILED]");
  } else {
    console.log("=> An error occurred:", error);
  }
}


// Test Data for isArrayFactorChain():
const data = [2, 4, 8, 16, 32]
// 2 is a factor of 4
// 4 is a factor of 8
// 8 is a factor of 16
// 16 is a factor of 32
// therefore the result is true
const results4 = isArrayFactorChain([2, 4, 8, 16, 32]) // => true
const expected4 = true;
const results5 = isArrayFactorChain([2, 4, 8, 16, 32, 68]) // => false
const expected5 = false;

// Print results:
console.log("\n\nTESTING isArrayFactorChain():");

console.log("\nisArrayFactorChain([2, 4, 8, 16, 32]):");
console.log("Should return: " + JSON.stringify(expected4));
console.log("Actual return: " + JSON.stringify(results4));
try {
  assert.deepEqual(results4, expected4);
  console.log("=> Test [PASSED]");
} catch (error) {
  if (error instanceof assert.AssertionError) {
    console.log("=> Test [FAILED]");
  } else {
    console.log("=> An error occurred:", error);
  }
}

console.log("\nisArrayFactorChain([2, 4, 8, 16, 32, 68]):");
console.log("Should return: " + JSON.stringify(expected5));
console.log("Actual return: " + JSON.stringify(results5));
try {
  assert.deepEqual(results5, expected5);
  console.log("=> Test [PASSED]");
} catch (error) {
  if (error instanceof assert.AssertionError) {
    console.log("=> Test [FAILED]");
  } else {
    console.log("=> An error occurred:", error);
  }
}


// Test Data for countNumberOfArrays():
const results6 = countNumberOfArrays([2,8,[6],3,3,5,3,4,[5,4]]) // => 2
const expected6 = 2;
const results7 = countNumberOfArrays([2,8,[6,3,3],[4],5,[3,4,[5,4]]]) // => 3
const expected7 = 3;

// Print results:
console.log("\n\nTESTING countNumberOfArrays():");

console.log("\ncountNumberOfArrays([2,8,[6],3,3,5,3,4,[5,4]]):");
console.log("Should return: " + JSON.stringify(expected6));
console.log("Actual return: " + JSON.stringify(results6));
try {
  assert.deepEqual(results6, expected6);
  console.log("=> Test [PASSED]");
} catch (error) {
  if (error instanceof assert.AssertionError) {
    console.log("=> Test [FAILED]");
  } else {
    console.log("=> An error occurred:", error);
  }
}

console.log("\ncountNumberOfArrays([2,8,[6,3,3],[4],5,[3,4,[5,4]]]):");
console.log("Should return: " + JSON.stringify(expected7));
console.log("Actual return: " + JSON.stringify(results7));
try {
  assert.deepEqual(results7, expected7);
  console.log("=> Test [PASSED]");
} catch (error) {
  if (error instanceof assert.AssertionError) {
    console.log("=> Test [FAILED]");
  } else {
    console.log("=> An error occurred:", error);
  }
}


// Test Data for participants():
const results8 = participants(matches) // => ["Alice", "Bob", "Carol", "Dean", "Elise"]
const expected8 = ["Alice", "Bob", "Carol", "Dean", "Elise"];

// Print results:
console.log("\n\nTESTING participants():");
console.log("\nparticipants(matches):");
console.log("Should return: " + JSON.stringify(expected8));
console.log("Actual return: " + JSON.stringify(results8));
try {
  assert.deepEqual(results8, expected8);
  console.log("=> Test [PASSED]");
} catch (error) {
  if (error instanceof assert.AssertionError) {
    console.log("=> Test [FAILED]");
  } else {
    console.log("=> An error occurred:", error);
  }
}


// Test Data for winnersObject():
const results9 = winnersObject(matches) 
const expected9 =
  {
    "Alice": ["Bob", "Carol"],
    "Bob":   [],
    "Carol": ["Dean"],
    "Dean":  ["Elise"],
    "Elise": ["Bob", "Carol"],
  };

// Print results:
console.log("\n\nTESTING winnersObject():");
console.log("\nwinnersObject(matches):");
console.log("Should return: " + JSON.stringify(expected9));
console.log("Actual return: " + JSON.stringify(results9));
try {
  assert.deepEqual(results9, expected9);
  console.log("=> Test [PASSED]");
} catch (error) {
  if (error instanceof assert.AssertionError) {
    console.log("=> Test [FAILED]");
  } else {
    console.log("=> An error occurred:", error);
  }
}


// Test Data for biggestLoser():
const results10 = biggestLoser(matches) // => "Bob"
const expected10 = "Bob";

// Print results:
console.log("\n\nTESTING biggestLoser():");
console.log("\nbiggestLoser(matches):");
console.log("Should return: " + JSON.stringify(expected10));
console.log("Actual return: " + JSON.stringify(results10));
try {
  assert.deepEqual(results10, expected10);
  console.log("=> Test [PASSED]");
} catch (error) {
  if (error instanceof assert.AssertionError) {
    console.log("=> Test [FAILED]");
  } else {
    console.log("=> An error occurred:", error);
  }
}
