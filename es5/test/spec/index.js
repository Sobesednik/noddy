var _require = require('zoroaster/assert'),
    equal = _require.equal;

var context = require('../context/');
var noddy = require('../..');

var noddyTestSuite = {
    context,
    'should be an object'() {
        equal(typeof noddy, 'object');
    }
};

module.exports = noddyTestSuite;