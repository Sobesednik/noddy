const { equal, assert } = require('zoroaster/assert')
const context = require('../context/')
const noddy = require('../..')

const noddyTestSuite = {
    context,
    'should be a function'() {
        equal(typeof noddy, 'function')
    },
    'should call package without error'() {
        assert.doesNotThrow(() => {
            noddy()
        })
    },
}

module.exports = noddyTestSuite
