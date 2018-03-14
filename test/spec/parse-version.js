const { equal } = require('zoroaster/assert')
const { parseVersion } = require('../..')

const parseVersionTestSuite = {
  'should parse the version'() {
    const { major, minor, patch } = parseVersion('v8.9.3')
    equal(major, 8)
    equal(minor, 9)
    equal(patch, 3)
  },
}

module.exports = parseVersionTestSuite
