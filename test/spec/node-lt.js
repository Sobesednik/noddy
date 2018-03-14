const { assert, equal } = require('zoroaster/assert')
const context = require('../context')
const { nodeLt } = require('../..')

const parseVersionTestSuite = {
  context, // this sets version to v5.10.5
  'should return false when Node\'s major is greater'() {
    const res = nodeLt('v4.9.3')
    assert(!res)
  },
  'should return false when Node\'s minor is greater'() {
    const res = nodeLt('v5.9.0')
    assert(!res)
  },
  'should return false when Node\'s patch is greater'() {
    const res = nodeLt('v5.10.4')
    assert(!res)
  },
  'should return true when Node\'s major is less'() {
    const res = nodeLt('v6.9.3')
    assert(res)
  },
  'should return true when Node\'s minor is less'() {
    const res = nodeLt('v5.11.0')
    assert(res)
  },
  'should return true when Node\'s patch is less'() {
    const res = nodeLt('v5.10.6')
    assert(res)
  },
  'should return false when Node\'s version is equal'() {
    const test = 'v5.10.5'
    const res = nodeLt(test)
    equal(test, process.version)
    assert(!res)
  },
}

module.exports = parseVersionTestSuite
