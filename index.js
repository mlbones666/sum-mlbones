/* Dependencies */

const areObjects = require('are-objects');
const areArrays = require('are-arrays');

function sum(a, b, c) {
    a = b +c;
    return a++;
}

exports.sum = sum;