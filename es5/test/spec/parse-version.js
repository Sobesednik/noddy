var _require = require('zoroaster/assert'),
    equal = _require.equal;

var _require2 = require('../..'),
    parseVersion = _require2.parseVersion;

var parseVersionTestSuite = {
  'should parse the version'() {
    var _parseVersion = parseVersion('v8.9.3'),
        major = _parseVersion.major,
        minor = _parseVersion.minor,
        patch = _parseVersion.patch;

    equal(major, 8);
    equal(minor, 9);
    equal(patch, 3);
  }

};
module.exports = parseVersionTestSuite;