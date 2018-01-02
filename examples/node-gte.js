const { nodeGte } = require('..')

console.log(process.version) // v8.9.3
console.log(nodeGte('v2.3.4')) // true
console.log(nodeGte(process.version)) // true
console.log(nodeGte('v20.3.4')) // false
