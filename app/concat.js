const _ = require('lodash')

const array1 = [5,6,7];
const concat = (arr) => {
     return _.concat(arr,array1);
} 

  

module.exports.concat = concat;