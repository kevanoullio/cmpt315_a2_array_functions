const _ = require('project-name');
// Test Data :
const data = [2, 4, 8, 16, 32]
// 2 is a factor of 4
// 4 is a factor of 8
// 8 is a factor of 16
// 16 is a factor of 32
// therefore the result is true
const results1 = _.isArrayFactorChain([2, 4, 8, 16, 32]) // => true
const results2 = _.isArrayFactorChain([2, 4, 8, 16, 32, 68]) // => false