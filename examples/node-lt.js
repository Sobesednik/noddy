const { nodeLt } = require('..')

console.log(process.version) // v8.9.3
console.log(nodeLt('v2.3.4')) // false
console.log(nodeLt(process.version)) // false
console.log(nodeLt('v20.3.4')) // true
