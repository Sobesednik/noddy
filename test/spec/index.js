const { equal } = require('zoroaster/assert')
const context = require('../context/')
const noddy = require('../..')

const noddyTestSuite = {
  context,
  'should be an object'() {
    equal(typeof noddy, 'object')
  },
}

module.exports = noddyTestSuite
