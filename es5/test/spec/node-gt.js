var _require = require('zoroaster/assert'),
    assert = _require.assert,
    equal = _require.equal;

var context = require('../context');

var _require2 = require('../..'),
    nodeGt = _require2.nodeGt;

var parseVersionTestSuite = {
    context, // this sets version to v5.10.5
    'should return true when Node\'s major is greater'() {
        var res = nodeGt('v4.9.3');
        assert(res);
    },
    'should return true when Node\'s minor is greater'() {
        var res = nodeGt('v5.9.0');
        assert(res);
    },
    'should return true when Node\'s patch is greater'() {
        var res = nodeGt('v5.10.4');
        assert(res);
    },
    'should return false when Node\'s major is less'() {
        var res = nodeGt('v6.9.3');
        assert(!res);
    },
    'should return false when Node\'s minor is less'() {
        var res = nodeGt('v5.11.0');
        assert(!res);
    },
    'should return false when Node\'s patch is less'() {
        var res = nodeGt('v5.10.6');
        assert(!res);
    },
    'should return false when Node\'s version is equal'() {
        var test = 'v5.10.5';
        var res = nodeGt(test);
        equal(test, process.version);
        assert(!res);
    }
};

module.exports = parseVersionTestSuite;