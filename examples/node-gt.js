const { nodeGt } = require('..')

console.log(process.version) // v8.9.3
console.log(nodeGt('v2.3.4')) // true
console.log(nodeGt(process.version)) // false
console.log(nodeGt('v20.3.4')) // false
