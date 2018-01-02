const { nodeLte } = require('..')

console.log(process.version) // v8.9.3
console.log(nodeLte('v2.3.4')) // false
console.log(nodeLte(process.version)) // true
console.log(nodeLte('v20.3.4')) // true
